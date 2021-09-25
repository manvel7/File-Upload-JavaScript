import {upload} from "./upload";

upload('#file', {
    multi: true,
    accept: ['.jpg', '.png', '.jpeg', '.gif']
})