module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/experimental-script.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/experimental-script.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'preload'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'defer'
  } = props;

  if (strategy === 'defer') {
    loadScript(props);
  } else if (strategy === 'lazy') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'defer',
    onError,
    preload = false
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'defer') {
      loadScript(props);
    } else if (strategy === 'lazy') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'dangerouslyBlockRendering') {
    const syncProps = (0, _extends2.default)({}, restProps);

    for (const [k, value] of Object.entries({
      src,
      onLoad,
      onError,
      dangerouslySetInnerHTML,
      children
    })) {
      if (!value) {
        continue;
      }

      if (k === 'children') {
        syncProps.dangerouslySetInnerHTML = {
          __html: typeof value === 'string' ? value : Array.isArray(value) ? value.join('') : ''
        };
      } else {
        ;
        syncProps[k] = value;
      }
    }

    return /*#__PURE__*/_react.default.createElement("script", syncProps);
  } else if (strategy === 'defer') {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === 'eager') {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://err.sh/next.js/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _experimentalScript = _interopRequireDefault(__webpack_require__(/*! ../client/experimental-script */ "./node_modules/next/dist/client/experimental-script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === 'eager') {
          scriptLoader.eager = (scriptLoader.eager || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazy', 'defer'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      const {
        strategy
      } = file,
            props = _objectWithoutProperties(file, ["strategy"]);

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, props, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");

var _jsxFileName = "D:\\Projects\\demo\\movie-app\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "theme-color",
          content: _src_theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.primary.main
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this);
  }

} // `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(App, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 54
    }, undefined))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  });
};

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#b26a00'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2V4cGVyaW1lbnRhbC1zY3JpcHQudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaGVhZC1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIlNjcmlwdENhY2hlIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0IiwicHJvcHMiLCJvbkxvYWQiLCJjaGlsZHJlbiIsImNhY2hlS2V5IiwiaWQiLCJlbCIsImRvY3VtZW50IiwibG9hZFByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25FcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZSIsImF0dHIiLCJET01BdHRyaWJ1dGVOYW1lcyIsImsiLCJzdHJhdGVneSIsIndpbmRvdyIsInNjcmlwdExvYWRlckl0ZW1zIiwic3JjIiwicHJlbG9hZCIsInJlc3RQcm9wcyIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImxvYWRMYXp5U2NyaXB0Iiwic3luY1Byb3BzIiwiX19odG1sIiwidXBkYXRlU2NyaXB0cyIsInNjcmlwdHMiLCJTY3JpcHQiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicCIsInR5cGUiLCJoZWFkRWwiLCJoZWFkQ291bnRFbCIsImNvbnNvbGUiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJvbGRUYWdzIiwiaSIsImoiLCJuZXdUYWdzIiwiY29tcG9uZW50cyIsIm5ld1RhZyIsImxlbiIsIm9sZFRhZyIsInQiLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsIlByb21pc2UiLCJ0YWdzIiwiaCIsInRpdGxlQ29tcG9uZW50IiwidGl0bGUiLCJ1cGRhdGVFbGVtZW50cyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiZmlsZXMiLCJrZXB0IiwiYnVuZGxlIiwic2hhcmVkRmlsZXMiLCJwYWdlRmlsZXMiLCJpbkFtcE1vZGUiLCJhbGxGaWxlcyIsIkNvbXBvbmVudCIsImVuaGFuY2VBcHAiLCJBcHAiLCJjdHgiLCJzdHlsZXMiLCJyZW5kZXIiLCJEb2N1bWVudCIsImhlYWRUYWdzTWlkZGxld2FyZSIsInByb2Nlc3MiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJkZWR1cGUiLCJkeW5hbWljSW1wb3J0cyIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiZmlsZSIsImlzU2hhcmVkRmlsZSIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJpc1VubWFuYWdlZEZpbGUiLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJzY3JpcHRMb2FkZXIiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIlJlYWN0IiwiY2hpbGQiLCJtYWtlU3R5bGVzaGVldEluZXJ0IiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInVybCIsIm5ld1Byb3BzIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJ1bnN0YWJsZV9Kc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwiaXNSZWFjdEhlbG1ldCIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImNhbm9uaWNhbEJhc2UiLCJzdHlsZSIsImdldEFtcFBhdGgiLCJoZWFkVGFncyIsIkhlYWQiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsIm5vbmNlIiwiUHJvcFR5cGVzIiwiY3Jvc3NPcmlnaW4iLCJBTVBfUkVOREVSX1RBUkdFVCIsImdldER5bmFtaWNDaHVua3MiLCJnZXRQcmVOZXh0U2NyaXB0cyIsImdldFNjcmlwdHMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwiYnVpbGRNYW5pZmVzdCIsImdldFBvbHlmaWxsU2NyaXB0cyIsInBvbHlmaWxsIiwiZGF0YSIsIkpTT04iLCJlcnIiLCJhbXBEZXZGaWxlcyIsIk5leHRTY3JpcHQiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFtcFBhdGgiLCJhc1BhdGgiLCJNeURvY3VtZW50IiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJnZXRJbml0aWFsUHJvcHMiLCJzaGVldHMiLCJTZXJ2ZXJTdHlsZVNoZWV0cyIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjb2xsZWN0IiwiaW5pdGlhbFByb3BzIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZ2V0U3R5bGVFbGVtZW50IiwiY3JlYXRlTXVpVGhlbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1BDLFdBQU8sRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUjtBQURGO0FBRGtCLENBQUQsQ0FBNUI7QUFLZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2NyaXB0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IERPTUF0dHJpYnV0ZU5hbWVzIH0gZnJvbSAnLi9oZWFkLW1hbmFnZXInXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbmNvbnN0IFNjcmlwdENhY2hlID0gbmV3IE1hcCgpXG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KClcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNjcmlwdEhUTUxBdHRyaWJ1dGVzPEhUTUxTY3JpcHRFbGVtZW50PiB7XG4gIHN0cmF0ZWd5PzogJ2RlZmVyJyB8ICdsYXp5JyB8ICdkYW5nZXJvdXNseUJsb2NrUmVuZGVyaW5nJyB8ICdlYWdlcidcbiAgaWQ/OiBzdHJpbmdcbiAgb25Mb2FkPzogKCkgPT4gdm9pZFxuICBvbkVycm9yPzogKCkgPT4gdm9pZFxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBwcmVsb2FkPzogYm9vbGVhblxufVxuXG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgJ29uTG9hZCcsXG4gICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICdjaGlsZHJlbicsXG4gICdvbkVycm9yJyxcbiAgJ3N0cmF0ZWd5JyxcbiAgJ3ByZWxvYWQnLFxuXVxuXG5jb25zdCBsb2FkU2NyaXB0ID0gKHByb3BzOiBQcm9wcyk6IHZvaWQgPT4ge1xuICBjb25zdCB7XG4gICAgc3JjLFxuICAgIGlkLFxuICAgIG9uTG9hZCA9ICgpID0+IHt9LFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgIGNoaWxkcmVuID0gJycsXG4gICAgb25FcnJvcixcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgY2FjaGVLZXkgPSBpZCB8fCBzcmNcbiAgaWYgKFNjcmlwdENhY2hlLmhhcyhzcmMpKSB7XG4gICAgaWYgKCFMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcbiAgICAgIC8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cbiAgICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZC5jYWxsKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdCgpXG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGlmIChzcmMpIHtcbiAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSlcbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuICB9XG5cbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICBlbC5zcmMgPSBzcmNcbiAgfVxuXG4gIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpXG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBzdHJhdGVneSA9ICdkZWZlcicgfSA9IHByb3BzXG4gIGlmIChzdHJhdGVneSA9PT0gJ2RlZmVyJykge1xuICAgIGxvYWRTY3JpcHQocHJvcHMpXG4gIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5Jykge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzOiBQcm9wcykge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTY3JpcHRMb2FkZXIoc2NyaXB0TG9hZGVySXRlbXM6IFByb3BzW10pIHtcbiAgc2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKVxufVxuXG5mdW5jdGlvbiBTY3JpcHQocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qge1xuICAgIHNyYyA9ICcnLFxuICAgIG9uTG9hZCA9ICgpID0+IHt9LFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgIGNoaWxkcmVuID0gJycsXG4gICAgc3RyYXRlZ3kgPSAnZGVmZXInLFxuICAgIG9uRXJyb3IsXG4gICAgcHJlbG9hZCA9IGZhbHNlLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9ID0gcHJvcHNcblxuICAvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbiAgY29uc3QgeyB1cGRhdGVTY3JpcHRzLCBzY3JpcHRzIH0gPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2RlZmVyJykge1xuICAgICAgbG9hZFNjcmlwdChwcm9wcylcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eScpIHtcbiAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfSwgW3Byb3BzLCBzdHJhdGVneV0pXG5cbiAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfU0NSSVBUX0xPQURFUikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoc3RyYXRlZ3kgPT09ICdkYW5nZXJvdXNseUJsb2NrUmVuZGVyaW5nJykge1xuICAgIGNvbnN0IHN5bmNQcm9wczogUHJvcHMgPSB7IC4uLnJlc3RQcm9wcyB9XG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoe1xuICAgICAgc3JjLFxuICAgICAgb25Mb2FkLFxuICAgICAgb25FcnJvcixcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgICAgY2hpbGRyZW4sXG4gICAgfSkpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChrID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgIHN5bmNQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgICAgICBfX2h0bWw6XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgICAgICAgICA/IHZhbHVlLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJycsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIDsoc3luY1Byb3BzIGFzIGFueSlba10gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiA8c2NyaXB0IHsuLi5zeW5jUHJvcHN9IC8+XG4gIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdkZWZlcicpIHtcbiAgICBpZiAodXBkYXRlU2NyaXB0cyAmJiBwcmVsb2FkKSB7XG4gICAgICBzY3JpcHRzLmRlZmVyID0gKHNjcmlwdHMuZGVmZXIgfHwgW10pLmNvbmNhdChbc3JjXSlcbiAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cylcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdlYWdlcicpIHtcbiAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5lYWdlciA9IChzY3JpcHRzLmVhZ2VyIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjLFxuICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICBvbkVycm9yLFxuICAgICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0XG4iLCJleHBvcnQgY29uc3QgRE9NQXR0cmlidXRlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgaHRtbEZvcjogJ2ZvcicsXG4gIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICBub01vZHVsZTogJ25vTW9kdWxlJyxcbn1cblxuZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oeyB0eXBlLCBwcm9wcyB9OiBKU1guRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICBmb3IgKGNvbnN0IHAgaW4gcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZVxuICAgIGlmIChwID09PSAnY2hpbGRyZW4nIHx8IHAgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIGNvbnRpbnVlXG5cbiAgICAvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbiAgICBpZiAocHJvcHNbcF0gPT09IHVuZGVmaW5lZCkgY29udGludWVcblxuICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoXG4gICAgICB0eXBlID09PSAnc2NyaXB0JyAmJlxuICAgICAgKGF0dHIgPT09ICdhc3luYycgfHwgYXR0ciA9PT0gJ2RlZmVyJyB8fCBhdHRyID09PSAnbm9Nb2R1bGUnKVxuICAgICkge1xuICAgICAgOyhlbCBhcyBIVE1MU2NyaXB0RWxlbWVudClbYXR0cl0gPSAhIXByb3BzW3BdXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGNoaWxkcmVuLCBkYW5nZXJvdXNseVNldElubmVySFRNTCB9ID0gcHJvcHNcbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZTogc3RyaW5nLCBjb21wb25lbnRzOiBKU1guRWxlbWVudFtdKTogdm9pZCB7XG4gIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgY29uc3QgaGVhZENvdW50RWw6IEhUTUxNZXRhRWxlbWVudCA9IGhlYWRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XSdcbiAgKSBhcyBIVE1MTWV0YUVsZW1lbnRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIWhlYWRDb3VudEVsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudClcbiAgY29uc3Qgb2xkVGFnczogRWxlbWVudFtdID0gW11cblxuICBmb3IgKFxuICAgIGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSA8IGhlYWRDb3VudDtcbiAgICBpKyssIGogPSBqIS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICkge1xuICAgIGlmIChqIS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgIG9sZFRhZ3MucHVzaChqISlcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VGFncyA9IChjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkgYXMgSFRNTEVsZW1lbnRbXSkuZmlsdGVyKFxuICAgIChuZXdUYWcpID0+IHtcbiAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba11cbiAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIClcblxuICBvbGRUYWdzLmZvckVhY2goKHQpID0+IHQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodCkpXG4gIG5ld1RhZ3MuZm9yRWFjaCgodCkgPT4gaGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbCkpXG4gIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKToge1xuICBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8dW5rbm93bj5cbiAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHZvaWRcbn0ge1xuICBsZXQgdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAodXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuXG5cbiAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGxcbiAgICAgICAgY29uc3QgdGFnczogUmVjb3JkPHN0cmluZywgSlNYLkVsZW1lbnRbXT4gPSB7fVxuXG4gICAgICAgIGhlYWQuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW11cbiAgICAgICAgICBjb21wb25lbnRzLnB1c2goaClcbiAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGxcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGl0bGVDb21wb25lbnQucHJvcHNcbiAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgIDtbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKVxuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfSxcbiAgfVxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5pbXBvcnQgU2NyaXB0LCB7XG4gIFByb3BzIGFzIFNjcmlwdExvYWRlclByb3BzLFxufSBmcm9tICcuLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdCdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZWR1cGU8VCBleHRlbmRzIHsgZmlsZTogc3RyaW5nIH0+KGJ1bmRsZXM6IFRbXSk6IFRbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3Qga2VwdDogVFtdID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFA+KFxuICAgIERvY3VtZW50Q29tcG9uZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8UD4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBQXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3BzfT5cbiAgICAgICAgPERvY3VtZW50Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gZGVkdXBlKFxuICAgICAgZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmKSA9PiBmLmZpbGUuZW5kc1dpdGgoJy5jc3MnKSlcbiAgICApLm1hcCgoZikgPT4gZi5maWxlKVxuICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpXG4gICAgICBkeW5hbWljQ3NzRmlsZXMgPSBkeW5hbWljQ3NzRmlsZXMuZmlsdGVyKFxuICAgICAgICAoZikgPT4gIShleGlzdGluZy5oYXMoZikgfHwgc2hhcmVkRmlsZXMuaGFzKGYpKVxuICAgICAgKVxuICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKVxuICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpXG4gICAgfVxuXG4gICAgbGV0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSlcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEtbi1nPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkYXRhLW4tcD17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJyd9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFNcbiAgICApIHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzXG4gICAgICApIGFzIFJlYWN0RWxlbWVudFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIHNjcmlwdExvYWRlcixcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5lYWdlciB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuZGVmZXIgfHwgW10pLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2ZpbGV9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgIF1cbiAgfVxuXG4gIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdExvYWRlclByb3BzW10gPSBbXVxuICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW46IFJlYWN0Tm9kZVtdID0gW11cblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gU2NyaXB0KSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2VhZ2VyJykge1xuICAgICAgICAgIHNjcmlwdExvYWRlci5lYWdlciA9IChzY3JpcHRMb2FkZXIuZWFnZXIgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKFsnbGF6eScsICdkZWZlciddLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtc1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW5cbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9IHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2VcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAhaW5BbXBNb2RlXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsXG4gICAgICBpbkFtcE1vZGVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2hlYWR9XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm5leHQtaGVhZC1jb3VudFwiXG4gICAgICAgICAgY29udGVudD17UmVhY3QuQ2hpbGRyZW4uY291bnQoaGVhZCB8fCBbXSkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAge2luQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFoYXNDYW5vbmljYWxSZWwgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGNsZWFuQW1wUGF0aChkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBodHRwczovL3d3dy5hbXBwcm9qZWN0Lm9yZy9kb2NzL2Z1bmRhbWVudGFscy9vcHRpbWl6ZV9hbXAjb3B0aW1pemUtdGhlLWFtcC1ydW50aW1lLWxvYWRpbmcgKi99XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovfVxuICAgICAgICAgICAge3N0eWxlcyAmJiAoXG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1jdXN0b209XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGN1clN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gc3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCAnJyksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshaW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgeyFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiYW1waHRtbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgKFxuICAgICAgICAgICAgICA8bm9zY3JpcHQgZGF0YS1uLWNzcz17dGhpcy5wcm9wcy5ub25jZSA/PyAnJ30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVKc1ByZWxvYWQgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntBTVBfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKVxuICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChzY3JpcHRMb2FkZXIuZWFnZXIgfHwgW10pLm1hcCgoZmlsZTogU2NyaXB0TG9hZGVyUHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyYXRlZ3ksIC4uLnByb3BzIH0gPSBmaWxlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKVxuXG4gICAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogUmVhZG9ubHk8RG9jdW1lbnRQcm9wcz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWVcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzXG4gICAgICAgICAgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuLy8gYGdldEluaXRpYWxQcm9wc2AgYmVsb25ncyB0byBgX2RvY3VtZW50YCAoaW5zdGVhZCBvZiBgX2FwcGApLFxuLy8gaXQncyBjb21wYXRpYmxlIHdpdGggc2VydmVyLXNpZGUgZ2VuZXJhdGlvbiAoU1NHKS5cbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBSZXNvbHV0aW9uIG9yZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBzZXJ2ZXI6XG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDQuIGFwcC5yZW5kZXJcbiAgLy8gNS4gcGFnZS5yZW5kZXJcbiAgLy8gNi4gZG9jdW1lbnQucmVuZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBzZXJ2ZXIgd2l0aCBlcnJvcjpcbiAgLy8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIGFwcC5yZW5kZXJcbiAgLy8gMy4gcGFnZS5yZW5kZXJcbiAgLy8gNC4gZG9jdW1lbnQucmVuZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBjbGllbnRcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xuICAvLyAzLiBhcHAucmVuZGVyXG4gIC8vIDQuIHBhZ2UucmVuZGVyXG5cbiAgLy8gUmVuZGVyIGFwcCBhbmQgcGFnZSBhbmQgZ2V0IHRoZSBjb250ZXh0IG9mIHRoZSBwYWdlIHdpdGggY29sbGVjdGVkIHNpZGUgZWZmZWN0cy5cbiAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PiBzaGVldHMuY29sbGVjdCg8QXBwIHsuLi5wcm9wc30gLz4pLFxuICAgIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXG4gICAgc3R5bGVzOiBbLi4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSwgc2hlZXRzLmdldFN0eWxlRWxlbWVudCgpXSxcbiAgfTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogeyBtYWluOiAnI2IyNmEwMCcgfVxuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=