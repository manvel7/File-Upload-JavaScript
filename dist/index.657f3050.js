// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"43AP1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "a7ac4c7e590c7ac089b5ae28657f3050"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          ???? ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5uTXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("firebase/app");
var _appDefault = parcelHelpers.interopDefault(_app);
var _storage = require("firebase/storage");
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
_appDefault.default.initializeApp(firebaseConfig);
const storage = _appDefault.default.storage();
//convert to ['Bytes', 'KB', 'MB', 'GB', 'TB']
function byteSize(bytes) {
    const sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    if (!bytes) return '0 Bytes';
    const pars = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, pars)) + ' ' + sizes[pars];
}
//helper function by creating dom element in vanilla js
const element = (tag, classes = [], content)=>{
    const node = document.createElement('tag');
    if (classes.length) node.classList.add(...classes);
    if (content) node.textContent = content;
    return node;
};
const noop = function() {
};
function upload(selector, options = {
}) {
    let files = [];
    const onUpload = options.onUpload ?? noop;
    const input = document.querySelector(selector);
    //create preview div element
    const preview = element('div', [
        'preview'
    ]);
    //create button div element
    const open = element('button', [
        'btn'
    ], 'Open');
    //create button upload
    const upload1 = element('button', [
        'btn',
        'primary'
    ], 'upload');
    upload1.style.display = 'none';
    //check multiple or not
    if (options.multi) input.setAttribute('multiple', true);
    //check file type ['png' 'gif' 'jpeg' 'jpg']
    if (options.accept && Array.isArray(options.accept)) input.setAttribute('accept', options.accept.join(','));
    //insert afterend preview div block
    input.insertAdjacentElement('afterend', preview);
    //insert afterend upload div block
    input.insertAdjacentElement('afterend', upload1);
    //insert afterend open button block
    input.insertAdjacentElement('afterend', open);
    //simulate to click input type file
    const triggerClick = ()=>input.click()
    ;
    //get and realisation file changing
    const changeHandler = (event)=>{
        if (!event.target.files.length) return;
        files = Array.from(event.target.files);
        upload1.style.display = 'inline';
        files.forEach((file)=>{
            preview.innerHTML = '';
            if (!file.type.match('image')) return;
            const reader = new FileReader();
            reader.onload = (ev)=>{
                const source = ev.target.result;
                preview.insertAdjacentHTML('afterbegin', `\n                    <div class="preview-image">\n                       <div class="preview-remove" data-name="${file.name}">&times;</div>\n                       <img src="${source}" alt="${file.name}" />\n                       <div class="preview-info">\n                            <span>${file.name}</span>\n                            ${byteSize(file.size)}\n                       </div>\n                    </div>\n                `);
            };
            reader.readAsDataURL(file);
        });
    };
    //remove image in preview part  after send to backend
    const removeHandler = (event)=>{
        if (!event.target.dataset.name) return;
        const { name  } = event.target.dataset;
        files = files.filter((file)=>file.name !== name
        );
        if (!files.length) upload1.style.display = 'none';
        const block = preview.querySelector(`[data-name="${name}"]`).closest('.preview-image');
        block.classList.add('removing');
        setTimeout(()=>{
            block.remove();
        }, 300);
    };
    const clearPreview = (el)=>{
        el.style.bottom = '4px';
        el.innerHTML = '<div class="preview-info-progress"></div>';
    };
    //upload image to server
    const uploadHandler = ()=>{
        preview.querySelectorAll('.preview-remove').forEach((e)=>e.remove()
        );
        const previewInfo = preview.querySelectorAll('.preview-info');
        previewInfo.forEach(clearPreview);
        onUpload(files, previewInfo);
    // preview.innerHTML = ''
    };
    //open window to get file image
    open.addEventListener('click', triggerClick);
    //input change function listener
    input.addEventListener('change', changeHandler);
    //remove element function in preview
    preview.addEventListener('click', removeHandler);
    //upload element handler
    upload1.addEventListener('click', uploadHandler);
}
//simulation backend with FIREBASE
upload('#file', {
    multi: true,
    accept: [
        '.jpg',
        '.png',
        '.jpeg',
        '.gif'
    ],
    onUpload (files, blocks) {
        files.forEach((file, index)=>{
            const ref = storage.ref(`images/${file.name}`);
            const task = ref.put(file);
            task.on('state_changed', (snapshot)=>{
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes * 100).toFixed(0) + '%';
                const block = blocks[index].querySelector('.preview-info-progress');
                block.textContent = percentage;
                block.style.width = percentage;
            }, (error)=>{
                console.log(error);
            }, ()=>{
                task.snapshot.ref.getDownloadURL().then((url)=>{
                    console.log('Download URL:', url);
                });
            });
        });
    }
});

},{"firebase/app":"6wFrx","firebase/storage":"3QMfp","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6wFrx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_appDefault.default
);
var _app = require("@firebase/app");
var _appDefault = parcelHelpers.interopDefault(_app);
var name = "firebase";
var version = "8.2.5";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ _appDefault.default.registerVersion(name, version, 'app');

},{"@firebase/app":"6IUA5","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6IUA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "firebase", ()=>firebase$1
);
var _tslib = require("tslib");
var _util = require("@firebase/util");
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _a;
var ERRORS = (_a = {
}, _a["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a["bad-app-name"] = "Illegal App name: '{$appName}", _a["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a["invalid-log-argument"] = 'First argument to `onLog` must be null or a function.', _a);
var ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
var name$1 = "@firebase/app";
var version = "0.6.14";
var name$2 = "@firebase/analytics";
var name$3 = "@firebase/auth";
var name$4 = "@firebase/database";
var name$5 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$7 = "@firebase/messaging";
var name$8 = "@firebase/performance";
var name$9 = "@firebase/remote-config";
var name$a = "@firebase/storage";
var name$b = "@firebase/firestore";
var name$c = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {
}, _a$1[name$1] = 'fire-core', _a$1[name$2] = 'fire-analytics', _a$1[name$3] = 'fire-auth', _a$1[name$4] = 'fire-rtdb', _a$1[name$5] = 'fire-fn', _a$1[name$6] = 'fire-iid', _a$1[name$7] = 'fire-fcm', _a$1[name$8] = 'fire-perf', _a$1[name$9] = 'fire-rc', _a$1[name$a] = 'fire-gcs', _a$1[name$b] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$c] = 'fire-js-all', _a$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var logger = new _logger.Logger('@firebase/app');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Global context object for a collection of services using
 * a shared authentication state.
 */ var FirebaseAppImpl = function() {
    function FirebaseAppImpl1(options, config, firebase_) {
        var e_1, _a1;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
        this.options_ = _util.deepCopy(options);
        this.container = new _component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new _component.Component('app', function() {
            return _this;
        }, "PUBLIC"/* PUBLIC */ ));
        try {
            // populate ComponentContainer with existing components
            for(var _b = _tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()){
                var component = _c.value;
                this._addComponent(component);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a1 = _b.return)) _a1.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    }
    Object.defineProperty(FirebaseAppImpl1.prototype, "automaticDataCollectionEnabled", {
        get: function() {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function(val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl1.prototype, "name", {
        get: function() {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl1.prototype, "options", {
        get: function() {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl1.prototype.delete = function() {
        var _this = this;
        return new Promise(function(resolve) {
            _this.checkDestroyed_();
            resolve();
        }).then(function() {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function(provider) {
                return provider.delete();
            }));
        }).then(function() {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */ FirebaseAppImpl1.prototype._getService = function(name, instanceIdentifier) {
        if (instanceIdentifier === void 0) instanceIdentifier = DEFAULT_ENTRY_NAME;
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */ FirebaseAppImpl1.prototype._removeServiceInstance = function(name, instanceIdentifier) {
        if (instanceIdentifier === void 0) instanceIdentifier = DEFAULT_ENTRY_NAME;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */ FirebaseAppImpl1.prototype._addComponent = function(component) {
        try {
            this.container.addComponent(component);
        } catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl1.prototype._addOrOverwriteComponent = function(component) {
        this.container.addOrOverwriteComponent(component);
    };
    FirebaseAppImpl1.prototype.toJSON = function() {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ FirebaseAppImpl1.prototype.checkDestroyed_ = function() {
        if (this.isDeleted_) throw ERROR_FACTORY.create("app-deleted"/* APP_DELETED */ , {
            appName: this.name_
        });
    };
    return FirebaseAppImpl1;
}();
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version$1 = "8.2.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */ function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: _logger.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */ function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */ function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!_util.contains(apps, name)) throw ERROR_FACTORY.create("no-app"/* NO_APP */ , {
            appName: name
        });
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) rawConfig = {
        };
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = {
                name: name_1
            };
        }
        var config = rawConfig;
        if (config.name === undefined) config.name = DEFAULT_ENTRY_NAME;
        var name = config.name;
        if (typeof name !== 'string' || !name) throw ERROR_FACTORY.create("bad-app-name"/* BAD_APP_NAME */ , {
            appName: String(name)
        });
        if (_util.contains(apps, name)) throw ERROR_FACTORY.create("duplicate-app"/* DUPLICATE_APP */ , {
            appName: name
        });
        var app1 = new firebaseAppImpl(options, config, namespace);
        apps[name] = app1;
        return app1;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */ function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function(name) {
            return apps[name];
        });
    }
    function registerComponent(component) {
        var e_1, _a1;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" ? namespace[componentName] : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC") {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function(appArg) {
                if (appArg === void 0) appArg = app();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                throw ERROR_FACTORY.create("invalid-app-argument"/* INVALID_APP_ARGUMENT */ , {
                    appName: componentName
                });
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) _util.deepExtend(serviceNamespace, component.serviceProps);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
            // option added to the no-explicit-any rule when ESlint releases it.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var serviceFxn = this._getService.bind(this, componentName);
                return serviceFxn.apply(this, component.multipleInstances ? args : []);
            };
        }
        try {
            // add the component to existing app instances
            for(var _b = _tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()){
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a1 = _b.return)) _a1.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return component.type === "PUBLIC" ? namespace[componentName] : null;
    }
    function registerVersion(libraryKeyOrName, version1, variant) {
        var _a1;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a1 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a1 !== void 0 ? _a1 : libraryKeyOrName;
        if (variant) library += "-" + variant;
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version1.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version1 + "\":"
            ];
            if (libraryMismatch) warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            if (libraryMismatch && versionMismatch) warning.push('and');
            if (versionMismatch) warning.push("version name \"" + version1 + "\" contains illegal characters (whitespace or \"/\")");
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new _component.Component(library + "-version", function() {
            return {
                library: library,
                version: version1
            };
        }, "VERSION"/* VERSION */ ));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') throw ERROR_FACTORY.create("invalid-log-argument"/* INVALID_LOG_ARGUMENT */ , {
            appName: name
        });
        _logger.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app1, name) {
        if (name === 'serverAuth') return null;
        var useService = name;
        return useService;
    }
    return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */ function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = _tslib.__assign(_tslib.__assign({
    }, namespace.INTERNAL), {
        createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: _util.createSubscribe,
        ErrorFactory: _util.ErrorFactory,
        deepExtend: _util.deepExtend
    });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */ function extendNamespace(props) {
        _util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var PlatformLoggerService = function() {
    function PlatformLoggerService1(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService1.prototype.getPlatformInfoString = function() {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map(function(provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            } else return null;
        }).filter(function(logString) {
            return logString;
        }).join(' ');
    };
    return PlatformLoggerService1;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(firebase1, variant) {
    firebase1.INTERNAL.registerComponent(new _component.Component('platform-logger', function(container) {
        return new PlatformLoggerService(container);
    }, "PRIVATE"/* PRIVATE */ ));
    // Register `app` package.
    firebase1.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase1.registerVersion('fire-js', '');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (_util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (_util.isNode()) logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);
exports.default = firebase$1;

},{"tslib":"4rd38","@firebase/util":"3bR6t","@firebase/component":"5qT0x","@firebase/logger":"5PuYX","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"4rd38":[function(require,module,exports) {
var global = arguments[3];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global global, define, System, Reflect, Promise */ var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {
    };
    if (typeof define === "function" && define.amd) define("tslib", [
        "exports"
    ], function(exports) {
        factory(createExporter(root, createExporter(exports)));
    });
    else if (typeof module === "object" && typeof module.exports === "object") factory(createExporter(root, createExporter(module.exports)));
    else factory(createExporter(root));
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") Object.defineProperty(exports, "__esModule", {
                value: true
            });
            else exports.__esModule = true;
        }
        return function(id, v) {
            return exports[id] = previous ? previous(id, v) : v;
        };
    }
})(function(exporter) {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    __extends = function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    __rest = function(s, e) {
        var t = {
        };
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        return t;
    };
    __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
        return function(target, key) {
            decorator(target, key, paramIndex);
        };
    };
    __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    __generator = function(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
    };
    __createBinding = function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };
    __exportStar = function(m, exports) {
        for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    };
    __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally{
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally{
                if (e) throw e.error;
            }
        }
        return ar;
    };
    __spread = function() {
        for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    __spreadArrays = function() {
        for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
        for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
        return r;
    };
    __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        function verb(n) {
            if (g[n]) i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
        return i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
    };
    __asyncDelegator = function(o) {
        var i, p;
        function verb(n, f) {
            i[n] = o[n] ? function(v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
        return i = {
        }, verb("next"), verb("throw", function(e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
            return this;
        }, i;
    };
    __asyncValues = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        function verb(n) {
            i[n] = o[n] && function(v) {
                return new Promise(function(resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v1) {
                resolve({
                    value: v1,
                    done: d
                });
            }, reject);
        }
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i);
    };
    __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
            value: raw
        });
        else cooked.raw = raw;
        return cooked;
    };
    __importStar = function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {
        };
        if (mod != null) for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };
    __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
            "default": mod
        };
    };
    __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
        return privateMap.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
        privateMap.set(receiver, value);
        return value;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});

},{}],"3bR6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSTANTS", ()=>CONSTANTS
);
parcelHelpers.export(exports, "Deferred", ()=>Deferred
);
parcelHelpers.export(exports, "ErrorFactory", ()=>ErrorFactory
);
parcelHelpers.export(exports, "FirebaseError", ()=>FirebaseError1
);
parcelHelpers.export(exports, "MAX_VALUE_MILLIS", ()=>MAX_VALUE_MILLIS
);
parcelHelpers.export(exports, "RANDOM_FACTOR", ()=>RANDOM_FACTOR
);
parcelHelpers.export(exports, "Sha1", ()=>Sha1
);
parcelHelpers.export(exports, "areCookiesEnabled", ()=>areCookiesEnabled
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "assertionError", ()=>assertionError
);
parcelHelpers.export(exports, "async", ()=>async
);
parcelHelpers.export(exports, "base64", ()=>base64
);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode
);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode
);
parcelHelpers.export(exports, "calculateBackoffMillis", ()=>calculateBackoffMillis
);
parcelHelpers.export(exports, "contains", ()=>contains
);
parcelHelpers.export(exports, "createSubscribe", ()=>createSubscribe
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "deepCopy", ()=>deepCopy
);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend
);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix
);
parcelHelpers.export(exports, "getUA", ()=>getUA
);
parcelHelpers.export(exports, "isAdmin", ()=>isAdmin
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isBrowserExtension", ()=>isBrowserExtension
);
parcelHelpers.export(exports, "isElectron", ()=>isElectron
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "isIE", ()=>isIE
);
parcelHelpers.export(exports, "isIndexedDBAvailable", ()=>isIndexedDBAvailable
);
parcelHelpers.export(exports, "isMobileCordova", ()=>isMobileCordova
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isNodeSdk", ()=>isNodeSdk
);
parcelHelpers.export(exports, "isReactNative", ()=>isReactNative
);
parcelHelpers.export(exports, "isSafari", ()=>isSafari
);
parcelHelpers.export(exports, "isUWP", ()=>isUWP
);
parcelHelpers.export(exports, "isValidFormat", ()=>isValidFormat
);
parcelHelpers.export(exports, "isValidTimestamp", ()=>isValidTimestamp
);
parcelHelpers.export(exports, "issuedAtTime", ()=>issuedAtTime
);
parcelHelpers.export(exports, "jsonEval", ()=>jsonEval
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "ordinal", ()=>ordinal
);
parcelHelpers.export(exports, "querystring", ()=>querystring
);
parcelHelpers.export(exports, "querystringDecode", ()=>querystringDecode
);
parcelHelpers.export(exports, "safeGet", ()=>safeGet
);
parcelHelpers.export(exports, "stringLength", ()=>stringLength
);
parcelHelpers.export(exports, "stringToByteArray", ()=>stringToByteArray$1
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "validateArgCount", ()=>validateArgCount
);
parcelHelpers.export(exports, "validateCallback", ()=>validateCallback
);
parcelHelpers.export(exports, "validateContextObject", ()=>validateContextObject
);
parcelHelpers.export(exports, "validateIndexedDBOpenable", ()=>validateIndexedDBOpenable
);
parcelHelpers.export(exports, "validateNamespace", ()=>validateNamespace
);
var _tslib = require("tslib");
var global = arguments[3];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ var assert = function(assertion, message) {
    if (!assertion) throw assertionError(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ var assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var stringToByteArray = function(str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for(var i = 0; i < str.length; i++){
        var c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            // Surrogate Pair
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ var byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while(pos < bytes.length){
        var c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return undefined.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return undefined.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray: function(input, webSafe) {
        if (!Array.isArray(input)) throw Error('encodeByteArray takes an array as a parameter');
        this.init_();
        var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        var output = [];
        for(var i = 0; i < input.length; i += 3){
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 63;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString: function(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString: function(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray: function(input, webSafe) {
        this.init_();
        var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        var output = [];
        for(var i = 0; i < input.length;){
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = byte3 << 6 & 192 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_: function() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {
            };
            this.charToByteMap_ = {
            };
            this.byteToCharMapWebSafe_ = {
            };
            this.charToByteMapWebSafe_ = {
            };
            // We want quick mappings back and forth, so we precompute two maps.
            for(var i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ var base64Encode = function(str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ var base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {
            };
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(var prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Deferred = function() {
    function Deferred1() {
        var _this = this;
        this.reject = function() {
        };
        this.resolve = function() {
        };
        this.promise = new Promise(function(resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ Deferred1.prototype.wrapCallback = function(callback) {
        var _this = this;
        return function(error, value) {
            if (error) _this.reject(error);
            else _this.resolve(value);
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function() {
                });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
            }
        };
    };
    return Deferred1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') return navigator['userAgent'];
    else return '';
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 */ function validateIndexedDBOpenable() {
    return new Promise(function(resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function() {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                resolve(true);
            };
            request_1.onupgradeneeded = function() {
                preExist_1 = false;
            };
            request_1.onerror = function() {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError1 = function(_super) {
    _tslib.__extends(FirebaseError2, _super);
    function FirebaseError2(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError2.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        return _this;
    }
    return FirebaseError2;
}(Error);
var ErrorFactory = function() {
    function ErrorFactory1(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory1.prototype.create = function(code) {
        var data = [];
        for(var _i = 1; _i < arguments.length; _i++)data[_i - 1] = arguments[_i];
        var customData = data[0] || {
        };
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError1(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory1;
}();
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function(_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ var decode = function(token) {
    var header = {
    }, claims = {
    }, data = {
    }, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {
        };
        delete claims['d'];
    } catch (e) {
    }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ var isValidTimestamp = function(token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
        else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
        if (claims.hasOwnProperty('exp')) validUntil = claims['exp'];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ var issuedAtTime = function(token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) return claims['iat'];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ var isValidFormat = function(token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ var isAdmin = function(token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function isEmpty(obj) {
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {
    };
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function(key, value) {
        if (Array.isArray(value)) value.forEach(function(arrayVal) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
        });
        else params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    };
    for(var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++){
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring1) {
    var obj = {
    };
    var tokens = querystring1.replace(/^\?/, '').split('&');
    tokens.forEach(function(token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ var Sha1 = function() {
    function Sha11() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(var i = 1; i < this.blockSize; ++i)this.pad_[i] = 0;
        this.reset();
    }
    Sha11.prototype.reset = function() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ Sha11.prototype.compress_ = function(buf, offset) {
        if (!offset) offset = 0;
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') for(var i = 0; i < 16; i++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(var i = 0; i < 16; i++){
            W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(var i = 16; i < 80; i++){
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(var i = 0; i < 80; i++){
            if (i < 40) {
                if (i < 20) {
                    f = d ^ b & (c ^ d);
                    k = 1518500249;
                } else {
                    f = b ^ c ^ d;
                    k = 1859775393;
                }
            } else if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
            } else {
                f = b ^ c ^ d;
                k = 3395469782;
            }
            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
    };
    Sha11.prototype.update = function(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === 'string') while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */ Sha11.prototype.digest = function() {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(var i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for(var i = 0; i < 5; i++)for(var j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i] >> j & 255;
            ++n;
        }
        return digest;
    };
    return Sha11;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ var ObserverProxy = function() {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ function ObserverProxy1(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(function() {
            executor(_this);
        }).catch(function(e) {
            _this.error(e);
        });
    }
    ObserverProxy1.prototype.next = function(value) {
        this.forEachObserver(function(observer) {
            observer.next(value);
        });
    };
    ObserverProxy1.prototype.error = function(error) {
        this.forEachObserver(function(observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy1.prototype.complete = function() {
        this.forEachObserver(function(observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ ObserverProxy1.prototype.subscribe = function(nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) throw new Error('Missing Observer.');
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error: error,
            complete: complete
        };
        if (observer.next === undefined) observer.next = noop;
        if (observer.error === undefined) observer.error = noop;
        if (observer.complete === undefined) observer.complete = noop;
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function() {
            try {
                if (_this.finalError) observer.error(_this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy1.prototype.unsubscribeOne = function(i) {
        if (this.observers === undefined || this.observers[i] === undefined) return;
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    };
    ObserverProxy1.prototype.forEachObserver = function(fn) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(var i = 0; i < this.observers.length; i++)this.sendOne(i, fn);
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy1.prototype.sendOne = function(i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function() {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) try {
                fn(_this.observers[i]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) console.error(e);
            }
        });
    };
    ObserverProxy1.prototype.close = function(err) {
        var _this = this;
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function() {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy1;
}();
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        Promise.resolve(true).then(function() {
            fn.apply(void 0, args);
        }).catch(function(error) {
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) return false;
    for(var _i = 0, methods_1 = methods; _i < methods_1.length; _i++){
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') return true;
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ var validateArgCount = function(fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) argError = 'at least ' + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    if (argError) {
        var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch(argumentNumber){
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
}
function validateCallback(fnName, argumentNumber, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) return;
    if (typeof context !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ var stringToByteArray$1 = function(str) {
    var out = [];
    var p = 0;
    for(var i = 0; i < str.length; i++){
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 55296 && c <= 56319) {
            var high = c - 55296; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 56320; // the low 10 bits.
            c = 65536 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ var stringLength = function(str) {
    var p = 0;
    for(var i = 0; i < str.length; i++){
        var c = str.charCodeAt(i);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 55296 && c <= 56319) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ var MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
    if (intervalMillis === void 0) intervalMillis = DEFAULT_INTERVAL_MILLIS;
    if (backoffFactor === void 0) backoffFactor = DEFAULT_BACKOFF_FACTOR;
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) return "" + i;
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    var cent = i % 100;
    if (cent >= 10 && cent <= 20) return 'th';
    var dec = i % 10;
    if (dec === 1) return 'st';
    if (dec === 2) return 'nd';
    if (dec === 3) return 'rd';
    return 'th';
}

},{"tslib":"4rd38","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5qT0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "ComponentContainer", ()=>ComponentContainer
);
parcelHelpers.export(exports, "Provider", ()=>Provider
);
var _tslib = require("tslib");
var _util = require("@firebase/util");
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ var Component = function() {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ function Component1(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {
        };
        this.instantiationMode = "LAZY";
    }
    Component1.prototype.setInstantiationMode = function(mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component1.prototype.setMultipleInstances = function(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component1.prototype.setServiceProps = function(props) {
        this.serviceProps = props;
        return this;
    };
    return Component1;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ var Provider = function() {
    function Provider1(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ Provider1.prototype.get = function(identifier) {
        if (identifier === void 0) identifier = DEFAULT_ENTRY_NAME;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider1.prototype.getImmediate = function(options) {
        var _a = _tslib.__assign({
            identifier: DEFAULT_ENTRY_NAME,
            optional: false
        }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) return null;
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
    };
    Provider1.prototype.getComponent = function() {
        return this.component;
    };
    Provider1.prototype.setComponent = function(component) {
        var e_1, _a;
        if (component.name !== this.name) throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        if (this.component) throw Error("Component for " + this.name + " has already been provided");
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) try {
            this.getOrInitializeService(DEFAULT_ENTRY_NAME);
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for(var _b = _tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()){
                var _d = _tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                } catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    Provider1.prototype.clearInstance = function(identifier) {
        if (identifier === void 0) identifier = DEFAULT_ENTRY_NAME;
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider1.prototype.delete = function() {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var services;
            return _tslib.__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        services = Array.from(this.instances.values());
                        return [
                            4,
                            Promise.all(_tslib.__spread(services.filter(function(service) {
                                return 'INTERNAL' in service;
                            })// eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .map(function(service) {
                                return service.INTERNAL.delete();
                            }), services.filter(function(service) {
                                return '_delete' in service;
                            })// eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .map(function(service) {
                                return service._delete();
                            })))
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2
                        ];
                }
            });
        });
    };
    Provider1.prototype.isComponentSet = function() {
        return this.component != null;
    };
    Provider1.prototype.getOrInitializeService = function(identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider1.prototype.normalizeInstanceIdentifier = function(identifier) {
        if (this.component) return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        else return identifier; // assume multiple instances are supported before the component is provided.
    };
    return Provider1;
}();
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ var ComponentContainer = function() {
    function ComponentContainer1(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ ComponentContainer1.prototype.addComponent = function(component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error("Component " + component.name + " has already been registered with " + this.name);
        provider.setComponent(component);
    };
    ComponentContainer1.prototype.addOrOverwriteComponent = function(component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component.name);
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ ComponentContainer1.prototype.getProvider = function(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer1.prototype.getProviders = function() {
        return Array.from(this.providers.values());
    };
    return ComponentContainer1;
}();

},{"tslib":"4rd38","@firebase/util":"3bR6t","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"5PuYX":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _a;
/**
 * A container for all of the Logger instances
 */ var instances = [];
(function(LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(exports.LogLevel || (exports.LogLevel = {
}));
var levelStringToEnum = {
    'debug': exports.LogLevel.DEBUG,
    'verbose': exports.LogLevel.VERBOSE,
    'info': exports.LogLevel.INFO,
    'warn': exports.LogLevel.WARN,
    'error': exports.LogLevel.ERROR,
    'silent': exports.LogLevel.SILENT
};
/**
 * The default log level
 */ var defaultLogLevel = exports.LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ var ConsoleMethod = (_a = {
}, _a[exports.LogLevel.DEBUG] = 'log', _a[exports.LogLevel.VERBOSE] = 'log', _a[exports.LogLevel.INFO] = 'info', _a[exports.LogLevel.WARN] = 'warn', _a[exports.LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ var defaultLogHandler = function(instance, logType) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    if (logType < instance.logLevel) return;
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) console[method].apply(console, __spreadArrays([
        "[" + now + "]  " + instance.name + ":"
    ], args));
    else throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
};
var Logger = function() {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ function Logger1(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    Object.defineProperty(Logger1.prototype, "logLevel", {
        get: function() {
            return this._logLevel;
        },
        set: function(val) {
            if (!(val in exports.LogLevel)) throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger1.prototype.setLogLevel = function(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger1.prototype, "logHandler", {
        get: function() {
            return this._logHandler;
        },
        set: function(val) {
            if (typeof val !== 'function') throw new TypeError('Value assigned to `logHandler` must be a function');
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger1.prototype, "userLogHandler", {
        get: function() {
            return this._userLogHandler;
        },
        set: function(val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */ Logger1.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.DEBUG
        ], args));
        this._logHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.DEBUG
        ], args));
    };
    Logger1.prototype.log = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.VERBOSE
        ], args));
        this._logHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.VERBOSE
        ], args));
    };
    Logger1.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.INFO
        ], args));
        this._logHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.INFO
        ], args));
    };
    Logger1.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.WARN
        ], args));
        this._logHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.WARN
        ], args));
    };
    Logger1.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.ERROR
        ], args));
        this._logHandler.apply(this, __spreadArrays([
            this,
            exports.LogLevel.ERROR
        ], args));
    };
    return Logger1;
}();
function setLogLevel(level) {
    instances.forEach(function(inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function(instance) {
        var customLogLevel = null;
        if (options && options.level) customLogLevel = levelStringToEnum[options.level];
        if (logCallback === null) instance.userLogHandler = null;
        else instance.userLogHandler = function(instance1, level) {
            var args = [];
            for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
            var message = args.map(function(arg) {
                if (arg == null) return null;
                else if (typeof arg === 'string') return arg;
                else if (typeof arg === 'number' || typeof arg === 'boolean') return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter(function(arg) {
                return arg;
            }).join(' ');
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance1.logLevel)) logCallback({
                level: exports.LogLevel[level].toLowerCase(),
                message: message,
                args: args,
                type: instance1.name
            });
        };
    };
    for(var _i = 0, instances_1 = instances; _i < instances_1.length; _i++){
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}
exports.Logger = Logger;
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;

},{}],"3QMfp":[function(require,module,exports) {
'use strict';
require('@firebase/storage');

},{"@firebase/storage":"1Ktqu"}],"1Ktqu":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var firebase = require('@firebase/app');
var tslib = require('tslib');
var util = require('@firebase/util');
var component = require('@firebase/component');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var firebase__default = /*#__PURE__*/ _interopDefaultLegacy(firebase);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */ var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */ var DEFAULT_MAX_OPERATION_RETRY_TIME = 120000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */ var DEFAULT_MAX_UPLOAD_RETRY_TIME = 600000;
var FirebaseStorageError1 = function(_super) {
    tslib.__extends(FirebaseStorageError2, _super);
    function FirebaseStorageError2(code, message) {
        var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;
        _this.customData = {
            serverResponse: null
        };
        // Without this, `instanceof FirebaseStorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(_this, FirebaseStorageError2.prototype);
        return _this;
    }
    FirebaseStorageError2.prototype.codeEquals = function(code) {
        return prependCode(code) === this.code;
    };
    Object.defineProperty(FirebaseStorageError2.prototype, "message", {
        get: function() {
            if (this.customData.serverResponse) return this.message + "\n" + this.customData.serverResponse;
            else return this.message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError2.prototype, "serverResponse", {
        get: function() {
            return this.customData.serverResponse;
        },
        set: function(serverResponse) {
            this.customData.serverResponse = serverResponse;
        },
        enumerable: false,
        configurable: true
    });
    return FirebaseStorageError2;
}(util.FirebaseError);
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error',
    UNSUPPORTED_ENVIRONMENT: 'unsupported-environment'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = "An unknown error occurred, please check the error payload for server response.";
    return new FirebaseStorageError1(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError1(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError1(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new FirebaseStorageError1(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError1(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError1(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError1(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError1(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError1(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError1(Code.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError1(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError1(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError1(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(message) {
    return new FirebaseStorageError1(Code.INVALID_ARGUMENT, message);
}
function appDeleted() {
    return new FirebaseStorageError1(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 */ function invalidRootOperation(name) {
    return new FirebaseStorageError1(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */ function invalidFormat(format, message) {
    return new FirebaseStorageError1(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */ function internalError(message) {
    throw new FirebaseStorageError1(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
var StringData = function() {
    function StringData1(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData1;
}();
function dataFromString(format, stringData) {
    switch(format){
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for(var i = 0; i < value.length; i++){
        var c = value.charCodeAt(i);
        if (c <= 127) b.push(c);
        else if (c <= 2047) b.push(192 | c >> 6, 128 | c & 63);
        else {
            if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                if (!valid) // The second surrogate wasn't there.
                b.push(239, 191, 189);
                else {
                    var hi = c;
                    var lo = value.charCodeAt(++i);
                    c = 65536 | (hi & 1023) << 10 | lo & 1023;
                    b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
            } else if ((c & 64512) === 56320) // Invalid low surrogate.
            b.push(239, 191, 189);
            else b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    } catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch(format){
        case StringFormat.BASE64:
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
            }
            break;
        case StringFormat.BASE64URL:
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
    }
    var bytes;
    try {
        bytes = atob(value);
    } catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for(var i = 0; i < bytes.length; i++)array[i] = bytes.charCodeAt(i);
    return array;
}
var DataURLParts = function() {
    function DataURLParts1(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - 7) : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts1;
}();
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) return base64Bytes_(StringFormat.BASE64, parts.rest);
    else return percentEncodedBytes_(parts.rest);
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) return false;
    return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */ STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */ RUNNING: 'running',
    /** The task was paused by the user. */ PAUSED: 'paused',
    /** The task completed successfully. */ SUCCESS: 'success',
    /** The task was canceled. */ CANCELED: 'canceled',
    /** The task failed with an error. */ ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch(state){
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ErrorCode;
(function(ErrorCode1) {
    ErrorCode1[ErrorCode1["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode1[ErrorCode1["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode1[ErrorCode1["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {
}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */ var NetworkXhrIo = function() {
    function NetworkXhrIo1() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function(resolve) {
            _this.xhr_.addEventListener('abort', function() {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function() {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function() {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */ NetworkXhrIo1.prototype.send = function(url, method, body, headers) {
        if (this.sent_) throw internalError('cannot .send() more than once');
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for(var key in headers)if (headers.hasOwnProperty(key)) this.xhr_.setRequestHeader(key, headers[key].toString());
        }
        if (body !== undefined) this.xhr_.send(body);
        else this.xhr_.send();
        return this.sendPromise_;
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.getErrorCode = function() {
        if (!this.sent_) throw internalError('cannot .getErrorCode() before sending');
        return this.errorCode_;
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.getStatus = function() {
        if (!this.sent_) throw internalError('cannot .getStatus() before sending');
        try {
            return this.xhr_.status;
        } catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.getResponseText = function() {
        if (!this.sent_) throw internalError('cannot .getResponseText() before sending');
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */ NetworkXhrIo1.prototype.abort = function() {
        this.xhr_.abort();
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.getResponseHeader = function(header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.addUploadProgressListener = function(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.addEventListener('progress', listener);
    };
    /**
     * @override
     */ NetworkXhrIo1.prototype.removeUploadProgressListener = function(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.removeEventListener('progress', listener);
    };
    return NetworkXhrIo1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Factory-like class for creating XhrIo instances.
 */ var XhrIoPool = function() {
    function XhrIoPool1() {
    }
    XhrIoPool1.prototype.createXhrIo = function() {
        return new NetworkXhrIo();
    };
    return XhrIoPool1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isNonArrayObject(p) {
    return typeof p === 'object' && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) throw new FirebaseStorageError1(Code.INVALID_ARGUMENT, "Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
    if (value > maxValue) throw new FirebaseStorageError1(Code.INVALID_ARGUMENT, "Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') return BlobBuilder;
    else if (typeof WebKitBlobBuilder !== 'undefined') return WebKitBlobBuilder;
    else return undefined;
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */ function getBlob() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for(var i = 0; i < args.length; i++)bb.append(args[i]);
        return bb.getBlob();
    } else {
        if (isNativeBlobDefined()) return new Blob(args);
        else throw new FirebaseStorageError1(Code.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */ function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) return blob.webkitSlice(start, end);
    else if (blob.mozSlice) return blob.mozSlice(start, end);
    else if (blob.slice) return blob.slice(start, end);
    return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */ var FbsBlob = function() {
    function FbsBlob1(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (elideCopy) this.data_ = new Uint8Array(data);
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (elideCopy) this.data_ = data;
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob1.prototype.size = function() {
        return this.size_;
    };
    FbsBlob1.prototype.type = function() {
        return this.type_;
    };
    FbsBlob1.prototype.slice = function(startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) return null;
            return new FbsBlob1(sliced);
        } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob1(slice, true);
        }
    };
    FbsBlob1.getBlob = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (isNativeBlobDefined()) {
            var blobby = args.map(function(val) {
                if (val instanceof FbsBlob1) return val.data_;
                else return val;
            });
            return new FbsBlob1(getBlob.apply(null, blobby));
        } else {
            var uint8Arrays = args.map(function(val) {
                if (isString(val)) return dataFromString(StringFormat.RAW, val).data;
                else // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function(array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function(array) {
                for(var i = 0; i < array.length; i++)merged_1[index_1++] = array[i];
            });
            return new FbsBlob1(merged_1, true);
        }
    };
    FbsBlob1.prototype.uploadData = function() {
        return this.data_;
    };
    return FbsBlob1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Location1 = function() {
    function Location2(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location2.prototype, "path", {
        get: function() {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location2.prototype, "isRoot", {
        get: function() {
            return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Location2.prototype.fullServerUrl = function() {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location2.prototype.bucketOnlyServerUrl = function() {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location2.makeFromBucketSpec = function(bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location2.makeFromUrl(bucketString);
        } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location2(bucketString, '');
        }
        if (bucketLocation.path === '') return bucketLocation;
        else throw invalidDefaultBucket(bucketString);
    };
    Location2.makeFromUrl = function(url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') loc.path_ = loc.path_.slice(0, -1);
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = {
            bucket: 1,
            path: 3
        };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = {
            bucket: 1,
            path: 3
        };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = {
            bucket: 1,
            path: 2
        };
        var groups = [
            {
                regex: gsRegex,
                indices: gsIndices,
                postModify: gsModify
            },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for(var i = 0; i < groups.length; i++){
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) pathValue = '';
                location = new Location2(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) throw invalidUrl(url);
        return location;
    };
    return Location2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) return obj;
    else return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function parent(path) {
    if (path.length === 0) return null;
    var index = path.lastIndexOf('/');
    if (index === -1) return '';
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath.split('/').filter(function(component1) {
        return component1.length > 0;
    }).join('/');
    if (path.length === 0) return canonicalChildPath;
    else return path + '/' + canonicalChildPath;
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */ function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) return path;
    else return path.slice(index + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for(var key in params)if (params.hasOwnProperty(key)) {
        var nextPart = encode(key) + '=' + encode(params[key]);
        queryPart = queryPart + nextPart + '&';
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function noXform_(metadata, value) {
    return value;
}
var Mapping = function() {
    function Mapping1(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping1;
}();
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) return fullPath;
    else return lastComponent(fullPath);
}
function getMappings() {
    if (mappings_) return mappings_;
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */ function xformSize(_metadata, size) {
        if (size !== undefined) return Number(size);
        else return size;
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location1(bucket, path);
        return service.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', {
        get: generateRef
    });
}
function fromResource(service, resource, mappings) {
    var metadata = {
    };
    metadata['type'] = 'file';
    var len = mappings.length;
    for(var i = 0; i < len; i++){
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    var resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    if (!isString(obj['downloadTokens'])) // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) return null;
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function(token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {
    };
    var len = mappings.length;
    for(var i = 0; i < len; i++){
        var mapping = mappings[i];
        if (mapping.writable) resource[mapping.server] = metadata[mapping.local];
    }
    return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) for(var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++){
        var path = _a[_i];
        var pathWithoutTrailingSlash = path.replace(/\/$/, '');
        var reference = service.makeStorageReference(new Location1(bucket, pathWithoutTrailingSlash));
        listResult.prefixes.push(reference);
    }
    if (resource[ITEMS_KEY]) for(var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++){
        var item = _c[_b];
        var reference = service.makeStorageReference(new Location1(bucket, item['name']));
        listResult.items.push(reference);
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    var resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
var RequestInfo = function() {
    function RequestInfo1(url, method, /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */ handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {
        };
        this.headers = {
        };
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */ this.progressCallback = null;
        this.successCodes = [
            200
        ];
        this.additionalRetryCodes = [];
    }
    return RequestInfo1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */ function handlerCheck(cndn) {
    if (!cndn) throw unknown();
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) newErr = unauthenticated();
        else {
            if (xhr.getStatus() === 402) newErr = quotaExceeded(location.bucket);
            else if (xhr.getStatus() === 403) newErr = unauthorized(location.path);
            else newErr = err;
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) newErr = objectNotFound(location.path);
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
    var urlParams = {
    };
    if (location.isRoot) urlParams['prefix'] = '';
    else urlParams['prefix'] = location.path + '/';
    if (delimiter && delimiter.length > 0) urlParams['delimiter'] = delimiter;
    if (pageToken) urlParams['pageToken'] = pageToken;
    if (maxResults) urlParams['maxResults'] = maxResults;
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = {
        'Content-Type': 'application/json; charset=utf-8'
    };
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(service, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) {
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [
        200,
        204
    ];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({
    }, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) metadataClone['contentType'] = determineContentType_(null, blob);
    return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for(var i = 0; i < 2; i++)str = str + Math.random().toString().slice(2);
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) throw cannotSliceBlob();
    var urlParams = {
        name: metadata_['fullPath']
    };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */ var ResumableUploadStatus = function() {
    function ResumableUploadStatus1(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus1;
}();
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    } catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || [
        'active'
    ];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = {
        name: metadataForUpload['fullPath']
    };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url1;
        try {
            url1 = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url1));
        return url1;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */ function getResumableUploadStatus(service, location, url, blob) {
    var headers = {
        'X-Goog-Upload-Command': 'query'
    };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, [
            'active',
            'final'
        ]);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) // null or empty string
        handlerCheck(false);
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */ var resumableUploadChunkSize = 262144;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */ function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    } else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) throw serverFileWrongSize();
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) bytesToUpload = Math.min(bytesToUpload, chunkSize);
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) throw cannotSliceBlob();
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, [
            'active',
            'final'
        ]);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') metadata = metadataHandler(service, mappings)(xhr, text);
        else metadata = null;
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Observer = function() {
    function Observer1(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error;
            this.complete = complete;
        } else {
            var observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
    return Observer1;
}();
var UploadTaskSnapshot = function() {
    function UploadTaskSnapshot1(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return function() {
        var argsToForward = [];
        for(var _i = 0; _i < arguments.length; _i++)argsToForward[_i] = arguments[_i];
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function() {
            return f.apply(void 0, argsToForward);
        });
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */ var UploadTask = function() {
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */ function UploadTask1(ref, blob, metadata) {
        var _this = this;
        if (metadata === void 0) metadata = null;
        /**
         * @internal
         */ this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = InternalTaskState.RUNNING;
        this._errorHandler = function(error) {
            _this._request = undefined;
            _this._chunkMultiplier = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this._needToFetchStatus = true;
                _this.completeTransitions_();
            } else {
                _this._error = error;
                _this._transition(InternalTaskState.ERROR);
            }
        };
        this._metadataErrorHandler = function(error) {
            _this._request = undefined;
            if (error.codeEquals(Code.CANCELED)) _this.completeTransitions_();
            else {
                _this._error = error;
                _this._transition(InternalTaskState.ERROR);
            }
        };
        this._promise = new Promise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
            _this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, function() {
        });
    }
    UploadTask1.prototype._makeProgressCallback = function() {
        var _this = this;
        var sizeBefore = this._transferred;
        return function(loaded) {
            return _this._updateProgress(sizeBefore + loaded);
        };
    };
    UploadTask1.prototype._shouldDoResumable = function(blob) {
        return blob.size() > 262144;
    };
    UploadTask1.prototype._start = function() {
        if (this._state !== InternalTaskState.RUNNING) // This can happen if someone pauses us in a resume callback, for example.
        return;
        if (this._request !== undefined) return;
        if (this._resumable) {
            if (this._uploadUrl === undefined) this._createResumable();
            else {
                if (this._needToFetchStatus) this._fetchStatus();
                else if (this._needToFetchMetadata) // Happens if we miss the metadata on upload completion.
                this._fetchMetadata();
                else this._continueUpload();
            }
        } else this._oneShotUpload();
    };
    UploadTask1.prototype._resolveToken = function(callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._ref.storage.getAuthToken().then(function(authToken) {
            switch(_this._state){
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this._transition(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this._transition(InternalTaskState.PAUSED);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask1.prototype._createResumable = function() {
        var _this = this;
        this._resolveToken(function(authToken) {
            var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
            var createRequest = _this._ref.storage.makeRequest(requestInfo, authToken);
            _this._request = createRequest;
            createRequest.getPromise().then(function(url) {
                _this._request = undefined;
                _this._uploadUrl = url;
                _this._needToFetchStatus = false;
                _this.completeTransitions_();
            }, _this._errorHandler);
        });
    };
    UploadTask1.prototype._fetchStatus = function() {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this._uploadUrl;
        this._resolveToken(function(authToken) {
            var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);
            var statusRequest = _this._ref.storage.makeRequest(requestInfo, authToken);
            _this._request = statusRequest;
            statusRequest.getPromise().then(function(status) {
                _this._request = undefined;
                _this._updateProgress(status.current);
                _this._needToFetchStatus = false;
                if (status.finalized) _this._needToFetchMetadata = true;
                _this.completeTransitions_();
            }, _this._errorHandler);
        });
    };
    UploadTask1.prototype._continueUpload = function() {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this._chunkMultiplier;
        var status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this._uploadUrl;
        this._resolveToken(function(authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
            } catch (e) {
                _this._error = e;
                _this._transition(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this._ref.storage.makeRequest(requestInfo, authToken);
            _this._request = uploadRequest;
            uploadRequest.getPromise().then(function(newStatus) {
                _this._increaseMultiplier();
                _this._request = undefined;
                _this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    _this._metadata = newStatus.metadata;
                    _this._transition(InternalTaskState.SUCCESS);
                } else _this.completeTransitions_();
            }, _this._errorHandler);
        });
    };
    UploadTask1.prototype._increaseMultiplier = function() {
        var currentSize = resumableUploadChunkSize * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize < 33554432) this._chunkMultiplier *= 2;
    };
    UploadTask1.prototype._fetchMetadata = function() {
        var _this = this;
        this._resolveToken(function(authToken) {
            var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);
            var metadataRequest = _this._ref.storage.makeRequest(requestInfo, authToken);
            _this._request = metadataRequest;
            metadataRequest.getPromise().then(function(metadata) {
                _this._request = undefined;
                _this._metadata = metadata;
                _this._transition(InternalTaskState.SUCCESS);
            }, _this._metadataErrorHandler);
        });
    };
    UploadTask1.prototype._oneShotUpload = function() {
        var _this = this;
        this._resolveToken(function(authToken) {
            var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
            var multipartRequest = _this._ref.storage.makeRequest(requestInfo, authToken);
            _this._request = multipartRequest;
            multipartRequest.getPromise().then(function(metadata) {
                _this._request = undefined;
                _this._metadata = metadata;
                _this._updateProgress(_this._blob.size());
                _this._transition(InternalTaskState.SUCCESS);
            }, _this._errorHandler);
        });
    };
    UploadTask1.prototype._updateProgress = function(transferred) {
        var old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) this._notifyObservers();
    };
    UploadTask1.prototype._transition = function(state) {
        if (this._state === state) return;
        switch(state){
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) this._request.cancel();
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this._state = state;
                if (this._request !== undefined) this._request.cancel();
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this._state === InternalTaskState.PAUSED;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    };
    UploadTask1.prototype.completeTransitions_ = function() {
        switch(this._state){
            case InternalTaskState.PAUSING:
                this._transition(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this._transition(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this._start();
                break;
        }
    };
    Object.defineProperty(UploadTask1.prototype, "snapshot", {
        get: function() {
            var externalState = taskStateFromInternalTaskState(this._state);
            return new UploadTaskSnapshot(this._transferred, this._blob.size(), externalState, this._metadata, this, this._ref);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     */ UploadTask1.prototype.on = function(type, nextOrObserver, error, completed) {
        var _this = this;
        var observer = new Observer(nextOrObserver, error, completed);
        this._addObserver(observer);
        return function() {
            _this._removeObserver(observer);
        };
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */ UploadTask1.prototype.then = function(onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */ UploadTask1.prototype.catch = function(onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */ UploadTask1.prototype._addObserver = function(observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    };
    /**
     * Removes the given observer.
     */ UploadTask1.prototype._removeObserver = function(observer) {
        var i = this._observers.indexOf(observer);
        if (i !== -1) this._observers.splice(i, 1);
    };
    UploadTask1.prototype._notifyObservers = function() {
        var _this = this;
        this._finishPromise();
        var observers = this._observers.slice();
        observers.forEach(function(observer) {
            _this._notifyObserver(observer);
        });
    };
    UploadTask1.prototype._finishPromise = function() {
        if (this._resolve !== undefined) {
            var triggered = true;
            switch(taskStateFromInternalTaskState(this._state)){
                case TaskState.SUCCESS:
                    async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this._reject;
                    async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    };
    UploadTask1.prototype._notifyObserver = function(observer) {
        var externalState = taskStateFromInternalTaskState(this._state);
        switch(externalState){
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) async(observer.next.bind(observer, this.snapshot))();
                break;
            case TaskState.SUCCESS:
                if (observer.complete) async(observer.complete.bind(observer))();
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) async(observer.error.bind(observer, this._error))();
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) async(observer.error.bind(observer, this._error))();
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ UploadTask1.prototype.resume = function() {
        var valid = this._state === InternalTaskState.PAUSED || this._state === InternalTaskState.PAUSING;
        if (valid) this._transition(InternalTaskState.RUNNING);
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ UploadTask1.prototype.pause = function() {
        var valid = this._state === InternalTaskState.RUNNING;
        if (valid) this._transition(InternalTaskState.PAUSING);
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */ UploadTask1.prototype.cancel = function() {
        var valid = this._state === InternalTaskState.RUNNING || this._state === InternalTaskState.PAUSING;
        if (valid) this._transition(InternalTaskState.CANCELING);
        return valid;
    };
    return UploadTask1;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ var Reference = function() {
    function Reference1(_service, location) {
        this._service = _service;
        if (location instanceof Location1) this._location = location;
        else this._location = Location1.makeFromUrl(location);
    }
    /**
     * @returns The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */ Reference1.prototype.toString = function() {
        return 'gs://' + this._location.bucket + '/' + this._location.path;
    };
    Reference1.prototype.newRef = function(service, location) {
        return new Reference1(service, location);
    };
    Object.defineProperty(Reference1.prototype, "root", {
        /**
         * @returns An reference to the root of this
         *     object's bucket.
         */ get: function() {
            var location = new Location1(this._location.bucket, '');
            return this.newRef(this._service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference1.prototype, "bucket", {
        get: function() {
            return this._location.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference1.prototype, "fullPath", {
        get: function() {
            return this._location.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference1.prototype, "name", {
        get: function() {
            return lastComponent(this._location.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference1.prototype, "storage", {
        get: function() {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference1.prototype, "parent", {
        get: function() {
            var newPath = parent(this._location.path);
            if (newPath === null) return null;
            var location = new Location1(this._location.bucket, newPath);
            return new Reference1(this._service, location);
        },
        enumerable: false,
        configurable: true
    });
    Reference1.prototype._throwIfRoot = function(name) {
        if (this._location.path === '') throw invalidRootOperation(name);
    };
    return Reference1;
}();
/**
 * Uploads a blob to this object's location.
 * @public
 * @param ref - Storage Reference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns An UploadTask that lets you control and
 *     observe the upload.
 */ function uploadBytesResumable(ref, data, metadata) {
    if (metadata === void 0) metadata = null;
    ref._throwIfRoot('uploadBytesResumable');
    return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * @public
 * @param ref - Storage Reference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded object.
 * @returns An UploadTask that lets you control and
 *     observe the upload.
 */ function uploadString(ref, value, format, metadata) {
    if (format === void 0) format = StringFormat.RAW;
    ref._throwIfRoot('putString');
    var data = dataFromString(format, value);
    var metadataClone = tslib.__assign({
    }, metadata);
    if (metadataClone['contentType'] == null && data.contentType != null) metadataClone['contentType'] = data.contentType;
    return new UploadTask(ref, new FbsBlob(data.data, true), metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - Storage Reference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */ function listAll(ref) {
    var accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref, accumulator).then(function() {
        return accumulator;
    });
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @internal
 * @param ref
 * @param accumulator
 * @param pageToken
 */ function listAllHelper(ref, accumulator, pageToken) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var opt, nextPage;
        var _a, _b;
        return tslib.__generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    opt = {
                        // maxResults is 1000 by default.
                        pageToken: pageToken
                    };
                    return [
                        4,
                        list$1(ref, opt)
                    ];
                case 1:
                    nextPage = _c.sent();
                    (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                    (_b = accumulator.items).push.apply(_b, nextPage.items);
                    if (!(nextPage.nextPageToken != null)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        listAllHelper(ref, accumulator, nextPage.nextPageToken)
                    ];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - Storage Reference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */ function list$1(ref, options) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var authToken, op, requestInfo;
        return tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (options != null) {
                        if (typeof options.maxResults === 'number') validateNumber('options.maxResults', /* minValue= */ 1, /* maxValue= */ 1000, options.maxResults);
                    }
                    return [
                        4,
                        ref.storage.getAuthToken()
                    ];
                case 1:
                    authToken = _a.sent();
                    op = options || {
                    };
                    requestInfo = list(ref.storage, ref._location, /*delimiter= */ '/', op.pageToken, op.maxResults);
                    return [
                        2,
                        ref.storage.makeRequest(requestInfo, authToken).getPromise()
                    ];
            }
        });
    });
}
/**
 * A promise that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - Storage Reference to get metadata from.
 */ function getMetadata$1(ref) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var authToken, requestInfo;
        return tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ref._throwIfRoot('getMetadata');
                    return [
                        4,
                        ref.storage.getAuthToken()
                    ];
                case 1:
                    authToken = _a.sent();
                    requestInfo = getMetadata(ref.storage, ref._location, getMappings());
                    return [
                        2,
                        ref.storage.makeRequest(requestInfo, authToken).getPromise()
                    ];
            }
        });
    });
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - Storage Reference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A promise that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */ function updateMetadata$1(ref, metadata) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var authToken, requestInfo;
        return tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ref._throwIfRoot('updateMetadata');
                    return [
                        4,
                        ref.storage.getAuthToken()
                    ];
                case 1:
                    authToken = _a.sent();
                    requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
                    return [
                        2,
                        ref.storage.makeRequest(requestInfo, authToken).getPromise()
                    ];
            }
        });
    });
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A promise that resolves with the download
 *     URL for this object.
 */ function getDownloadURL(ref) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var authToken, requestInfo;
        return tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ref._throwIfRoot('getDownloadURL');
                    return [
                        4,
                        ref.storage.getAuthToken()
                    ];
                case 1:
                    authToken = _a.sent();
                    requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
                    return [
                        2,
                        ref.storage.makeRequest(requestInfo, authToken).getPromise().then(function(url) {
                            if (url === null) throw noDownloadURL();
                            return url;
                        })
                    ];
            }
        });
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - Storage Reference for object to delete.
 * @returns A promise that resolves if the deletion succeeds.
 */ function deleteObject$1(ref) {
    return tslib.__awaiter(this, void 0, void 0, function() {
        var authToken, requestInfo;
        return tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ref._throwIfRoot('deleteObject');
                    return [
                        4,
                        ref.storage.getAuthToken()
                    ];
                case 1:
                    authToken = _a.sent();
                    requestInfo = deleteObject(ref.storage, ref._location);
                    return [
                        2,
                        ref.storage.makeRequest(requestInfo, authToken).getPromise()
                    ];
            }
        });
    });
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 * @internal
 *
 * @param ref - Storage Reference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 */ function getChild(ref, childPath) {
    var newPath = child(ref._location.path, childPath);
    var location = new Location1(ref._location.bucket, newPath);
    return new Reference(ref.storage, location);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var UploadTaskSnapshotCompat = function() {
    function UploadTaskSnapshotCompat1(_delegate, task, ref) {
        this._delegate = _delegate;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshotCompat1.prototype, "bytesTransferred", {
        get: function() {
            return this._delegate.bytesTransferred;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat1.prototype, "metadata", {
        get: function() {
            return this._delegate.metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat1.prototype, "state", {
        get: function() {
            return this._delegate.state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat1.prototype, "totalBytes", {
        get: function() {
            return this._delegate.totalBytes;
        },
        enumerable: false,
        configurable: true
    });
    return UploadTaskSnapshotCompat1;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var UploadTaskCompat = function() {
    function UploadTaskCompat1(_delegate, _ref) {
        this._delegate = _delegate;
        this._ref = _ref;
        this.cancel = this._delegate.cancel.bind(this._delegate);
        this.catch = this._delegate.catch.bind(this._delegate);
        this.pause = this._delegate.pause.bind(this._delegate);
        this.resume = this._delegate.resume.bind(this._delegate);
        this._snapshot = new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
    }
    Object.defineProperty(UploadTaskCompat1.prototype, "snapshot", {
        get: function() {
            return this._snapshot;
        },
        enumerable: false,
        configurable: true
    });
    UploadTaskCompat1.prototype.then = function(onFulfilled, onRejected) {
        var _this = this;
        return this._delegate.then(function(snapshot) {
            if (onFulfilled) return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
        }, onRejected);
    };
    UploadTaskCompat1.prototype.on = function(type, nextOrObserver, error, completed) {
        var _this = this;
        var wrappedNextOrObserver = undefined;
        if (!!nextOrObserver) {
            if (typeof nextOrObserver === 'function') wrappedNextOrObserver = function(taskSnapshot) {
                return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
            };
            else wrappedNextOrObserver = {
                next: !!nextOrObserver.next ? function(taskSnapshot) {
                    return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                } : undefined,
                complete: nextOrObserver.complete || undefined,
                error: nextOrObserver.error || undefined
            };
        }
        return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
    };
    return UploadTaskCompat1;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ListResultCompat = function() {
    function ListResultCompat1(_delegate, _service) {
        this._delegate = _delegate;
        this._service = _service;
    }
    Object.defineProperty(ListResultCompat1.prototype, "prefixes", {
        get: function() {
            var _this = this;
            return this._delegate.prefixes.map(function(ref) {
                return new ReferenceCompat(ref, _this._service);
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListResultCompat1.prototype, "items", {
        get: function() {
            var _this = this;
            return this._delegate.items.map(function(ref) {
                return new ReferenceCompat(ref, _this._service);
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListResultCompat1.prototype, "nextPageToken", {
        get: function() {
            return this._delegate.nextPageToken || null;
        },
        enumerable: false,
        configurable: true
    });
    return ListResultCompat1;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ReferenceCompat = function() {
    function ReferenceCompat1(_delegate, storage) {
        this._delegate = _delegate;
        this.storage = storage;
    }
    Object.defineProperty(ReferenceCompat1.prototype, "name", {
        get: function() {
            return this._delegate.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat1.prototype, "bucket", {
        get: function() {
            return this._delegate.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat1.prototype, "fullPath", {
        get: function() {
            return this._delegate.fullPath;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceCompat1.prototype.toString = function() {
        return this._delegate.toString();
    };
    /**
     * @returns A reference to the object obtained by
     * appending childPath, removing any duplicate, beginning, or trailing
     * slashes.
     */ ReferenceCompat1.prototype.child = function(childPath) {
        var reference = getChild(this._delegate, childPath);
        return new ReferenceCompat1(reference, this.storage);
    };
    Object.defineProperty(ReferenceCompat1.prototype, "root", {
        get: function() {
            return new ReferenceCompat1(this._delegate.root, this.storage);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat1.prototype, "parent", {
        /**
         * @returns A reference to the parent of the
         * current object, or null if the current object is the root.
         */ get: function() {
            var reference = this._delegate.parent;
            if (reference == null) return null;
            return new ReferenceCompat1(reference, this.storage);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data - The blob to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */ ReferenceCompat1.prototype.put = function(data, metadata) {
        this._throwIfRoot('put');
        return new UploadTaskCompat(uploadBytesResumable(this._delegate, data, metadata), this);
    };
    /**
     * Uploads a string to this object's location.
     * @param value - The string to upload.
     * @param format - The format of the string to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */ ReferenceCompat1.prototype.putString = function(value, format, metadata) {
        if (format === void 0) format = StringFormat.RAW;
        this._throwIfRoot('putString');
        return new UploadTaskCompat(uploadString(this._delegate, value, format, metadata), this);
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *  the current storage reference. `prefixes` contains references to
     *  sub-directories and `items` contains references to objects in this
     *  folder. `nextPageToken` is never returned.
     */ ReferenceCompat1.prototype.listAll = function() {
        var _this = this;
        return listAll(this._delegate).then(function(r) {
            return new ListResultCompat(r, _this.storage);
        });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure. Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     * `prefixes` contains references to sub-folders and `items`
     * contains references to objects in this folder. `nextPageToken`
     * can be used to get the rest of the results.
     */ ReferenceCompat1.prototype.list = function(options) {
        var _this = this;
        return list$1(this._delegate, options).then(function(r) {
            return new ListResultCompat(r, _this.storage);
        });
    };
    /**
     * A promise that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     */ ReferenceCompat1.prototype.getMetadata = function() {
        return getMetadata$1(this._delegate);
    };
    /**
     * Updates the metadata for this object.
     * @param metadata - The new metadata for the object.
     * Only values that have been explicitly set will be changed. Explicitly
     * setting a value to null will remove the metadata.
     * @returns A promise that resolves
     * with the new metadata for this object.
     * @see firebaseStorage.Reference.prototype.getMetadata
     */ ReferenceCompat1.prototype.updateMetadata = function(metadata) {
        return updateMetadata$1(this._delegate, metadata);
    };
    /**
     * @returns A promise that resolves with the download
     * URL for this object.
     */ ReferenceCompat1.prototype.getDownloadURL = function() {
        return getDownloadURL(this._delegate);
    };
    /**
     * Deletes the object at this location.
     * @returns A promise that resolves if the deletion succeeds.
     */ ReferenceCompat1.prototype.delete = function() {
        this._throwIfRoot('delete');
        return deleteObject$1(this._delegate);
    };
    ReferenceCompat1.prototype._throwIfRoot = function(name) {
        if (this._delegate._location.path === '') throw invalidRootOperation(name);
    };
    return ReferenceCompat1;
}();
/**
 * A request whose promise always fails.
 */ var FailRequest = function() {
    function FailRequest1(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */ FailRequest1.prototype.getPromise = function() {
        return this.promise_;
    };
    /** @inheritDoc */ FailRequest1.prototype.cancel = function(_appDelete) {
    };
    return FailRequest1;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */ function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ??\_(???)_/??
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled1() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function() {
            timeoutId = null;
            f(handler, canceled1());
        }, millis);
    }
    function handler(success) {
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        if (triggeredCallback) return;
        if (success) {
            triggerCallback.call.apply(triggerCallback, tslib.__spreadArrays([
                null,
                success
            ], args));
            return;
        }
        var mustStop = canceled1() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, tslib.__spreadArrays([
                null,
                success
            ], args));
            return;
        }
        if (waitSeconds < 64) /* TODO(andysoto): don't back off so quickly if we know we're offline. */ waitSeconds *= 2;
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        } else waitMillis = (waitSeconds + Math.random()) * 1000;
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) return;
        stopped = true;
        if (triggeredCallback) return;
        if (timeoutId !== null) {
            if (!wasTimeout) cancelState = 2;
            clearTimeout(timeoutId);
            callWithDelay(0);
        } else if (!wasTimeout) cancelState = 1;
    }
    callWithDelay(0);
    setTimeout(function() {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */ function stop(id) {
    id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var NetworkRequest = function() {
    function NetworkRequest1(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function(resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */ NetworkRequest1.prototype.start_ = function() {
        var self = this;
        function doTheRequest(backoffCallback, canceled1) {
            if (canceled1) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) self.progressCallback_(loaded, total);
            }
            if (self.progressCallback_ !== null) xhr.addUploadProgressListener(progressListener);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function(xhr1) {
                if (self.progressCallback_ !== null) xhr1.removeUploadProgressListener(progressListener);
                self.pendingXhr_ = null;
                var hitServer = xhr1.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr1.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr1.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr1));
            });
        }
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */ function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) try {
                var result = self.callback_(xhr, xhr.getResponseText());
                if (isJustDef(result)) resolve(result);
                else resolve();
            } catch (e) {
                reject(e);
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.serverResponse = xhr.getResponseText();
                    if (self.errorCallback_) reject(self.errorCallback_(xhr, err));
                    else reject(err);
                } else if (status.canceled) {
                    var err = self.appDelete_ ? appDeleted() : canceled();
                    reject(err);
                } else {
                    var err = retryLimitExceeded();
                    reject(err);
                }
            }
        }
        if (this.canceled_) backoffDone(false, new RequestEndStatus(false, null, true));
        else this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    };
    /** @inheritDoc */ NetworkRequest1.prototype.getPromise = function() {
        return this.promise_;
    };
    /** @inheritDoc */ NetworkRequest1.prototype.cancel = function(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) stop(this.backoffId_);
        if (this.pendingXhr_ !== null) this.pendingXhr_.abort();
    };
    NetworkRequest1.prototype.isRetryStatusCode_ = function(status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest1;
}();
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */ var RequestEndStatus = function() {
    function RequestEndStatus1(wasSuccessCode, xhr, canceled1) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled1;
    }
    return RequestEndStatus1;
}();
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) headers['Authorization'] = 'Firebase ' + authToken;
}
function addVersionHeader_(headers) {
    var version = typeof firebase__default['default'] !== 'undefined' ? firebase__default['default'].SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
}
function addGmpidHeader_(headers, appId) {
    if (appId) headers['X-Firebase-GMPID'] = appId;
}
function makeRequest(requestInfo, appId, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({
    }, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */ function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */ function refFromPath(ref, path) {
    if (ref instanceof StorageService) {
        var service = ref;
        if (service._bucket == null) throw noDefaultBucket();
        var reference = new Reference(service, service._bucket);
        if (path != null) return refFromPath(reference, path);
        else return reference;
    } else {
        // ref is a Reference
        if (path !== undefined) {
            if (path.includes('..')) throw invalidArgument('`path` param cannot contain ".."');
            return getChild(ref, path);
        } else return ref;
    }
}
function ref(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof StorageService) return refFromURL(serviceOrRef, pathOrUrl);
        else throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
    } else return refFromPath(serviceOrRef, pathOrUrl);
}
function extractBucket(config) {
    var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) return null;
    return Location1.makeFromBucketSpec(bucketString);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 */ var StorageService = function() {
    function StorageService1(app, /**
     * @internal
     */ _authProvider, /**
     * @internal
     */ _pool, /**
     * @internal
     */ _url) {
        this.app = app;
        this._authProvider = _authProvider;
        this._pool = _pool;
        this._url = _url;
        /**
         * @internal
         */ this._bucket = null;
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) this._bucket = Location1.makeFromBucketSpec(_url);
        else this._bucket = extractBucket(this.app.options);
    }
    Object.defineProperty(StorageService1.prototype, "maxUploadRetryTime", {
        get: function() {
            return this._maxUploadRetryTime;
        },
        set: function(time) {
            validateNumber('time', /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
            this._maxUploadRetryTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageService1.prototype, "maxOperationRetryTime", {
        get: function() {
            return this._maxOperationRetryTime;
        },
        set: function(time) {
            validateNumber('time', /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
            this._maxOperationRetryTime = time;
        },
        enumerable: false,
        configurable: true
    });
    StorageService1.prototype.getAuthToken = function() {
        return tslib.__awaiter(this, void 0, void 0, function() {
            var auth, tokenData;
            return tslib.__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        auth = this._authProvider.getImmediate({
                            optional: true
                        });
                        if (!auth) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            auth.getToken()
                        ];
                    case 1:
                        tokenData = _a.sent();
                        if (tokenData !== null) return [
                            2,
                            tokenData.accessToken
                        ];
                        _a.label = 2;
                    case 2:
                        return [
                            2,
                            null
                        ];
                }
            });
        });
    };
    /**
     * Stop running requests and prevent more from being created.
     * @internal
     */ StorageService1.prototype._delete = function() {
        this._deleted = true;
        this._requests.forEach(function(request) {
            return request.cancel();
        });
        this._requests.clear();
        return Promise.resolve();
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */ StorageService1.prototype.makeStorageReference = function(loc) {
        return new Reference(this, loc);
    };
    /**
     * @internal
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */ StorageService1.prototype.makeRequest = function(requestInfo, authToken) {
        var _this = this;
        if (!this._deleted) {
            var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool);
            this._requests.add(request_1);
            // Request removes itself from set when complete.
            request_1.getPromise().then(function() {
                return _this._requests.delete(request_1);
            }, function() {
                return _this._requests.delete(request_1);
            });
            return request_1;
        } else return new FailRequest(appDeleted());
    };
    return StorageService1;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */ var StorageServiceCompat = function() {
    function StorageServiceCompat1(app, _delegate) {
        var _this = this;
        this.app = app;
        this._delegate = _delegate;
        this.INTERNAL = {
            /**
             * Called when the associated app is deleted.
             */ delete: function() {
                return _this._delegate._delete();
            }
        };
    }
    Object.defineProperty(StorageServiceCompat1.prototype, "maxOperationRetryTime", {
        get: function() {
            return this._delegate.maxOperationRetryTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageServiceCompat1.prototype, "maxUploadRetryTime", {
        get: function() {
            return this._delegate.maxUploadRetryTime;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */ StorageServiceCompat1.prototype.ref = function(path) {
        if (isUrl(path)) throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
        return new ReferenceCompat(ref(this._delegate, path), this);
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */ StorageServiceCompat1.prototype.refFromURL = function(url) {
        if (!isUrl(url)) throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
        try {
            Location1.makeFromUrl(url);
        } catch (e) {
            throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
        }
        return new ReferenceCompat(ref(this._delegate, url), this);
    };
    StorageServiceCompat1.prototype.setMaxUploadRetryTime = function(time) {
        this._delegate.maxUploadRetryTime = time;
    };
    StorageServiceCompat1.prototype.setMaxOperationRetryTime = function(time) {
        this._delegate.maxOperationRetryTime = time;
    };
    return StorageServiceCompat1;
}();
var name = "@firebase/storage";
var version = "0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Storage.
 */ var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    // TODO: This should eventually be 'app-compat'
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    // TODO: get StorageService instance from component framework instead
    // of creating a new one.
    var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url));
    return storageServiceCompat;
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: ReferenceCompat
    };
    instance.INTERNAL.registerComponent(new component.Component(STORAGE_TYPE, factory, "PUBLIC"/* PUBLIC */ ).setServiceProps(namespaceExports).setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(firebase__default['default']);
exports.registerStorage = registerStorage;

},{"@firebase/app":"6IUA5","tslib":"4rd38","@firebase/util":"3bR6t","@firebase/component":"5qT0x"}]},["43AP1","5uTXP"], "5uTXP", "parcelRequire8bc9")

//# sourceMappingURL=index.657f3050.js.map
