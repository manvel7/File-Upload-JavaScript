import firebase from 'firebase/app'
import 'firebase/storage'

//config firebase
const firebaseConfig = {
    apiKey: "AIzaSyByuxO8WY_ko4EXCyfJV3ojPZcU8E_RuJE",
    authDomain: "image-upload-plugin.firebaseapp.com",
    projectId: "image-upload-plugin",
    storageBucket: "image-upload-plugin.appspot.com",
    messagingSenderId: "724867884056",
    appId: "1:724867884056:web:0f6b50f8c489f16c1ccf6d",
    measurementId: "G-807R2LCQMT"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()




//convert to ['Bytes', 'KB', 'MB', 'GB', 'TB']
function byteSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (!bytes) return '0 Bytes'
    const pars = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, pars)) + ' ' + sizes[pars]
}


//helper function by creating dom element in vanilla js
const element = (tag, classes = [], content) => {
    const node = document.createElement('tag')
    if (classes.length) {
        node.classList.add(...classes)
    }
    if (content) {
        node.textContent = content
    }

    return node
}

const noop = function () {
}


function upload(selector, options = {}) {
    let files = []
    const onUpload = options.onUpload ?? noop

    const input = document.querySelector(selector)
    //create preview div element
    const preview = element('div', ['preview'])

    //create button div element
    const open = element('button', ['btn'], 'Open')

    //create button upload
    const upload = element('button', ['btn', 'primary'], 'upload')
    upload.style.display = 'none'

    //check multiple or not
    if (options.multi) {
        input.setAttribute('multiple', true)
    }

    //check file type ['png' 'gif' 'jpeg' 'jpg']
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    //insert afterend preview div block
    input.insertAdjacentElement('afterend', preview)
    //insert afterend upload div block
    input.insertAdjacentElement('afterend', upload)
    //insert afterend open button block
    input.insertAdjacentElement('afterend', open)

    //simulate to click input type file
    const triggerClick = () => input.click()

    //get and realisation file changing
    const changeHandler = (event) => {
        if (!event.target.files.length) return
        files = Array.from(event.target.files)
        upload.style.display = 'inline'
        files.forEach(file => {
            preview.innerHTML = ''
            if (!file.type.match('image')) return
            const reader = new FileReader()
            reader.onload = ev => {
                const source = ev.target.result
                preview.insertAdjacentHTML('afterbegin', `
                    <div class="preview-image">
                       <div class="preview-remove" data-name="${file.name}">&times;</div>
                       <img src="${source}" alt="${file.name}" />
                       <div class="preview-info">
                            <span>${file.name}</span>
                            ${byteSize(file.size)}
                       </div>
                    </div>
                `)
            }
            reader.readAsDataURL(file)
        })
    }

    //remove image in preview part  after send to backend
    const removeHandler = (event) => {
        if (!event.target.dataset.name) return
        const {name} = event.target.dataset
        files = files.filter(file => file.name !== name)

        if (!files.length) {
            upload.style.display = 'none'
        }

        const block = preview.querySelector(`[data-name="${name}"]`).closest('.preview-image')
        block.classList.add('removing')
        setTimeout(() => {
            block.remove()
        }, 300)
    }

    const clearPreview = el => {
        el.style.bottom = '4px'
        el.innerHTML = '<div class="preview-info-progress"></div>'
    }

    //upload image to server
    const uploadHandler = () => {
        preview.querySelectorAll('.preview-remove').forEach(e => e.remove())
        const previewInfo = preview.querySelectorAll('.preview-info')
        previewInfo.forEach(clearPreview)
        onUpload(files, previewInfo)
        // preview.innerHTML = ''
    }


    //open window to get file image
    open.addEventListener('click', triggerClick)
    //input change function listener
    input.addEventListener('change', changeHandler)
    //remove element function in preview
    preview.addEventListener('click', removeHandler)
    //upload element handler
    upload.addEventListener('click', uploadHandler)
}




//simulation backend with FIREBASE

upload('#file', {
    multi: true,
    accept: ['.jpg', '.png', '.jpeg', '.gif'],
    onUpload(files, blocks) {
        files.forEach((file,index) => {
            const ref = storage.ref(`images/${file.name}`)
            const task = ref.put(file)


            task.on('state_changed', snapshot => {
                const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + '%'
                const block = blocks[index].querySelector('.preview-info-progress')
                block.textContent = percentage
                block.style.width = percentage
            }, error => {
                console.log(error)
            }, () => {
                 task.snapshot.ref.getDownloadURL().then(url => {
                     console.log('Download URL:', url )
                 })
            })
        })
    }
})