(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-radio-button_2.entry.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-radio-button_2.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: amplify_radio_button, amplify_totp_setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_radio_button", function() { return AmplifyRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_totp_setup", function() { return AmplifyTOTPSetup; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");
/* harmony import */ var _auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-bd096ca7.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-bd096ca7.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var amplifyRadioButtonCss = ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";
var AmplifyRadioButton = /** @class */ (function () {
    function AmplifyRadioButton(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        /** If `true`, the radio button is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
    }
    AmplifyRadioButton.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "radio-button" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({ type: "radio", name: this.name, value: this.value, onInput: this.handleInputChange, placeholder: this.placeholder, id: this.fieldId, checked: this.checked, disabled: this.disabled }, this.inputProps)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label)));
    };
    return AmplifyRadioButton;
}());
AmplifyRadioButton.style = amplifyRadioButtonCss;
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
var canPromise = function () {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
var toString = {}.toString;
var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
};
function typedArraySupport() {
    // Can typed array instances be augmented?
    try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } };
        return arr.foo() === 42;
    }
    catch (e) {
        return false;
    }
}
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff;
function Buffer(arg, offset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, offset, length);
    }
    if (typeof arg === 'number') {
        return allocUnsafe(this, arg);
    }
    return from(this, arg, offset, length);
}
if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: true,
            enumerable: false,
            writable: false
        });
    }
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
            'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
}
function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
}
function createBuffer(that, length) {
    var buf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
    }
    else {
        // Fallback: Return an object instance of the Buffer class
        buf = that;
        if (buf === null) {
            buf = new Buffer(length);
        }
        buf.length = length;
    }
    return buf;
}
function allocUnsafe(that, size) {
    var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
            buf[i] = 0;
        }
    }
    return buf;
}
function fromString(that, string) {
    var length = byteLength(string) | 0;
    var buf = createBuffer(that, length);
    var actual = buf.write(string);
    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromArrayBuffer(that, array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
    }
    var buf;
    if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
    }
    else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
    }
    else {
        buf = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        buf.__proto__ = Buffer.prototype;
    }
    else {
        // Fallback: Return an object instance of the Buffer class
        buf = fromArrayLike(that, buf);
    }
    return buf;
}
function fromObject(that, obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);
        if (buf.length === 0) {
            return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
            }
            return fromArrayLike(that, obj);
        }
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
        }
    }
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1)
                        bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1)
                        bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1)
                    bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        }
        else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1)
                bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0)
                break;
            bytes.push(codePoint);
        }
        else if (codePoint < 0x800) {
            if ((units -= 2) < 0)
                break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        }
        else if (codePoint < 0x10000) {
            if ((units -= 3) < 0)
                break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        }
        else if (codePoint < 0x110000) {
            if ((units -= 4) < 0)
                break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        }
        else {
            throw new Error('Invalid code point');
        }
    }
    return bytes;
}
function byteLength(string) {
    if (Buffer.isBuffer(string)) {
        return string.length;
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        string = '' + string;
    }
    var len = string.length;
    if (len === 0)
        return 0;
    return utf8ToBytes(string).length;
}
function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length))
            break;
        dst[i + offset] = src[i];
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function from(that, value, offset, length) {
    if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, offset, length);
    }
    if (typeof value === 'string') {
        return fromString(that, value);
    }
    return fromObject(that, value);
}
Buffer.prototype.write = function write(string, offset, length) {
    // Buffer#write(string)
    if (offset === undefined) {
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
    }
    else if (length === undefined && typeof offset === 'string') {
        length = this.length;
        offset = 0;
        // Buffer#write(string, offset[, length])
    }
    else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
            length = length | 0;
        }
        else {
            length = undefined;
        }
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
        length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }
    return utf8Write(this, string, offset, length);
};
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0)
            start = 0;
    }
    else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0)
            end = 0;
    }
    else if (end > len) {
        end = len;
    }
    if (end < start)
        end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype;
    }
    else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start];
        }
    }
    return newBuf;
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
        start = 0;
    if (!end && end !== 0)
        end = this.length;
    if (targetStart >= target.length)
        targetStart = target.length;
    if (!targetStart)
        targetStart = 0;
    if (end > 0 && end < start)
        end = start;
    // Copy 0 bytes; we're done
    if (end === start)
        return 0;
    if (target.length === 0 || this.length === 0)
        return 0;
    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
        throw new RangeError('sourceStart out of bounds');
    if (end < 0)
        throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length)
        end = this.length;
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
        }
    }
    else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
        }
    }
    else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }
    return len;
};
Buffer.prototype.fill = function fill(val, start, end) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            start = 0;
            end = this.length;
        }
        else if (typeof end === 'string') {
            end = this.length;
        }
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
                val = code;
            }
        }
    }
    else if (typeof val === 'number') {
        val = val & 255;
    }
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }
    if (end <= start) {
        return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val)
        val = 0;
    var i;
    if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val;
        }
    }
    else {
        var bytes = Buffer.isBuffer(val)
            ? val
            : new Buffer(val);
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
        }
    }
    return this;
};
Buffer.concat = function concat(list, length) {
    if (!isarray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
        return createBuffer(null, 0);
    }
    var i;
    if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
            length += list[i].length;
        }
    }
    var buffer = allocUnsafe(null, length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
};
var alloc = function (size) {
    var buffer = new Buffer(size);
    buffer.fill(0);
    return buffer;
};
var from_1 = function (data) {
    return new Buffer(data);
};
var typedarrayBuffer = {
    alloc: alloc,
    from: from_1
};
var toSJISFunction;
var CODEWORDS_COUNT = [
    0,
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
    404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
    1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
    2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
var getSymbolSize = function getSymbolSize(version) {
    if (!version)
        throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40)
        throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
var getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
var getBCHDigit = function (data) {
    var digit = 0;
    while (data !== 0) {
        digit++;
        data >>>= 1;
    }
    return digit;
};
var setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f;
};
var isKanjiModeEnabled = function () {
    return typeof toSJISFunction !== 'undefined';
};
var toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};
var utils = {
    getSymbolSize: getSymbolSize,
    getSymbolTotalCodewords: getSymbolTotalCodewords,
    getBCHDigit: getBCHDigit,
    setToSJISFunction: setToSJISFunction,
    isKanjiModeEnabled: isKanjiModeEnabled,
    toSJIS: toSJIS
};
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
            return commonjsRequire();
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
        if (typeof string !== 'string') {
            throw new Error('Param is not a string');
        }
        var lcStr = string.toLowerCase();
        switch (lcStr) {
            case 'l':
            case 'low':
                return exports.L;
            case 'm':
            case 'medium':
                return exports.M;
            case 'q':
            case 'quartile':
                return exports.Q;
            case 'h':
            case 'high':
                return exports.H;
            default:
                throw new Error('Unknown EC Level: ' + string);
        }
    }
    exports.isValid = function isValid(level) {
        return level && typeof level.bit !== 'undefined' &&
            level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
            return value;
        }
        try {
            return fromString(value);
        }
        catch (e) {
            return defaultValue;
        }
    };
});
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function (index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1;
    },
    put: function (num, length) {
        for (var i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) === 1);
        }
    },
    getLengthInBits: function () {
        return this.length;
    },
    putBit: function (bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
        }
        this.length++;
    }
};
var bitBuffer = BitBuffer;
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix(size) {
    if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
    }
    this.size = size;
    this.data = typedarrayBuffer.alloc(size * size);
    this.reservedBit = typedarrayBuffer.alloc(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
    var index = row * this.size + col;
    this.data[index] = value;
    if (reserved)
        this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
    return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix;
var alignmentPattern = createCommonjsModule(function (module, exports) {
    /**
     * Alignment pattern are fixed reference pattern in defined positions
     * in a matrix symbology, which enables the decode software to re-synchronise
     * the coordinate mapping of the image modules in the event of moderate amounts
     * of distortion of the image.
     *
     * Alignment patterns are present only in QR Code symbols of version 2 or larger
     * and their number depends on the symbol version.
     */
    var getSymbolSize = utils.getSymbolSize;
    /**
     * Calculate the row/column coordinates of the center module of each alignment pattern
     * for the specified QR Code version.
     *
     * The alignment patterns are positioned symmetrically on either side of the diagonal
     * running from the top left corner of the symbol to the bottom right corner.
     *
     * Since positions are simmetrical only half of the coordinates are returned.
     * Each item of the array will represent in turn the x and y coordinate.
     * @see {@link getPositions}
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinate
     */
    exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1)
            return [];
        var posCount = Math.floor(version / 7) + 2;
        var size = getSymbolSize(version);
        var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        var positions = [size - 7]; // Last coord is always (size - 7)
        for (var i = 1; i < posCount - 1; i++) {
            positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6); // First coord is always 6
        return positions.reverse();
    };
    /**
     * Returns an array containing the positions of each alignment pattern.
     * Each array's element represent the center point of the pattern as (x, y) coordinates
     *
     * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
     * and filtering out the items that overlaps with finder pattern
     *
     * @example
     * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
     * The alignment patterns, therefore, are to be centered on (row, column)
     * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
     * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
     * and are not therefore used for alignment patterns.
     *
     * var pos = getPositions(7)
     * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */
    exports.getPositions = function getPositions(version) {
        var coords = [];
        var pos = exports.getRowColCoords(version);
        var posLength = pos.length;
        for (var i = 0; i < posLength; i++) {
            for (var j = 0; j < posLength; j++) {
                // Skip if position is occupied by finder patterns
                if ((i === 0 && j === 0) || // top-left
                    (i === 0 && j === posLength - 1) || // bottom-left
                    (i === posLength - 1 && j === 0)) { // top-right
                    continue;
                }
                coords.push([pos[i], pos[j]]);
            }
        }
        return coords;
    };
});
var getSymbolSize$1 = utils.getSymbolSize;
var FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
var getPositions = function getPositions(version) {
    var size = getSymbolSize$1(version);
    return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
    ];
};
var finderPattern = {
    getPositions: getPositions
};
var maskPattern = createCommonjsModule(function (module, exports) {
    /**
     * Data mask pattern reference
     * @type {Object}
     */
    exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    /**
     * Weighted penalty scores for the undesirable features
     * @type {Object}
     */
    var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    /**
     * Check if mask pattern value is valid
     *
     * @param  {Number}  mask    Mask pattern
     * @return {Boolean}         true if valid, false otherwise
     */
    exports.isValid = function isValid(mask) {
        return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    /**
     * Returns mask pattern from a value.
     * If value is not valid, returns undefined
     *
     * @param  {Number|String} value        Mask pattern value
     * @return {Number}                     Valid mask pattern or undefined
     */
    exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : undefined;
    };
    /**
    * Find adjacent modules in row/column with the same color
    * and assign a penalty value.
    *
    * Points: N1 + i
    * i is the amount by which the number of adjacent modules of the same color exceeds 5
    */
    exports.getPenaltyN1 = function getPenaltyN1(data) {
        var size = data.size;
        var points = 0;
        var sameCountCol = 0;
        var sameCountRow = 0;
        var lastCol = null;
        var lastRow = null;
        for (var row = 0; row < size; row++) {
            sameCountCol = sameCountRow = 0;
            lastCol = lastRow = null;
            for (var col = 0; col < size; col++) {
                var module = data.get(row, col);
                if (module === lastCol) {
                    sameCountCol++;
                }
                else {
                    if (sameCountCol >= 5)
                        points += PenaltyScores.N1 + (sameCountCol - 5);
                    lastCol = module;
                    sameCountCol = 1;
                }
                module = data.get(col, row);
                if (module === lastRow) {
                    sameCountRow++;
                }
                else {
                    if (sameCountRow >= 5)
                        points += PenaltyScores.N1 + (sameCountRow - 5);
                    lastRow = module;
                    sameCountRow = 1;
                }
            }
            if (sameCountCol >= 5)
                points += PenaltyScores.N1 + (sameCountCol - 5);
            if (sameCountRow >= 5)
                points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
    };
    /**
     * Find 2x2 blocks with the same color and assign a penalty value
     *
     * Points: N2 * (m - 1) * (n - 1)
     */
    exports.getPenaltyN2 = function getPenaltyN2(data) {
        var size = data.size;
        var points = 0;
        for (var row = 0; row < size - 1; row++) {
            for (var col = 0; col < size - 1; col++) {
                var last = data.get(row, col) +
                    data.get(row, col + 1) +
                    data.get(row + 1, col) +
                    data.get(row + 1, col + 1);
                if (last === 4 || last === 0)
                    points++;
            }
        }
        return points * PenaltyScores.N2;
    };
    /**
     * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
     * preceded or followed by light area 4 modules wide
     *
     * Points: N3 * number of pattern found
     */
    exports.getPenaltyN3 = function getPenaltyN3(data) {
        var size = data.size;
        var points = 0;
        var bitsCol = 0;
        var bitsRow = 0;
        for (var row = 0; row < size; row++) {
            bitsCol = bitsRow = 0;
            for (var col = 0; col < size; col++) {
                bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
                if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D))
                    points++;
                bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
                if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D))
                    points++;
            }
        }
        return points * PenaltyScores.N3;
    };
    /**
     * Calculate proportion of dark modules in entire symbol
     *
     * Points: N4 * k
     *
     * k is the rating of the deviation of the proportion of dark modules
     * in the symbol from 50% in steps of 5%
     */
    exports.getPenaltyN4 = function getPenaltyN4(data) {
        var darkCount = 0;
        var modulesCount = data.data.length;
        for (var i = 0; i < modulesCount; i++)
            darkCount += data.data[i];
        var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);
        return k * PenaltyScores.N4;
    };
    /**
     * Return mask value at given position
     *
     * @param  {Number} maskPattern Pattern reference value
     * @param  {Number} i           Row
     * @param  {Number} j           Column
     * @return {Boolean}            Mask value
     */
    function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
            case exports.Patterns.PATTERN000: return (i + j) % 2 === 0;
            case exports.Patterns.PATTERN001: return i % 2 === 0;
            case exports.Patterns.PATTERN010: return j % 3 === 0;
            case exports.Patterns.PATTERN011: return (i + j) % 3 === 0;
            case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
            case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0;
            case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0;
            case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0;
            default: throw new Error('bad maskPattern:' + maskPattern);
        }
    }
    /**
     * Apply a mask pattern to a BitMatrix
     *
     * @param  {Number}    pattern Pattern reference number
     * @param  {BitMatrix} data    BitMatrix data
     */
    exports.applyMask = function applyMask(pattern, data) {
        var size = data.size;
        for (var col = 0; col < size; col++) {
            for (var row = 0; row < size; row++) {
                if (data.isReserved(row, col))
                    continue;
                data.xor(row, col, getMaskAt(pattern, row, col));
            }
        }
    };
    /**
     * Returns the best mask pattern for data
     *
     * @param  {BitMatrix} data
     * @return {Number} Mask pattern reference number
     */
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        var numPatterns = Object.keys(exports.Patterns).length;
        var bestPattern = 0;
        var lowerPenalty = Infinity;
        for (var p = 0; p < numPatterns; p++) {
            setupFormatFunc(p);
            exports.applyMask(p, data);
            // Calculate penalty
            var penalty = exports.getPenaltyN1(data) +
                exports.getPenaltyN2(data) +
                exports.getPenaltyN3(data) +
                exports.getPenaltyN4(data);
            // Undo previously applied mask
            exports.applyMask(p, data);
            if (penalty < lowerPenalty) {
                lowerPenalty = penalty;
                bestPattern = p;
            }
        }
        return bestPattern;
    };
});
var EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 2, 2,
    1, 2, 2, 4,
    1, 2, 4, 4,
    2, 4, 4, 4,
    2, 4, 6, 5,
    2, 4, 6, 6,
    2, 5, 8, 8,
    4, 5, 8, 8,
    4, 5, 8, 11,
    4, 8, 10, 11,
    4, 9, 12, 16,
    4, 9, 16, 16,
    6, 10, 12, 18,
    6, 10, 17, 16,
    6, 11, 16, 19,
    6, 13, 18, 21,
    7, 14, 21, 25,
    8, 16, 20, 25,
    8, 17, 23, 25,
    9, 17, 23, 34,
    9, 18, 25, 30,
    10, 20, 27, 32,
    12, 21, 29, 35,
    12, 23, 34, 37,
    12, 25, 34, 40,
    13, 26, 35, 42,
    14, 28, 38, 45,
    15, 29, 40, 48,
    16, 31, 43, 51,
    17, 33, 45, 54,
    18, 35, 48, 57,
    19, 37, 51, 60,
    19, 38, 53, 63,
    20, 40, 56, 66,
    21, 43, 59, 70,
    22, 45, 62, 74,
    24, 47, 65, 77,
    25, 49, 68, 81
];
var EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7, 10, 13, 17,
    10, 16, 22, 28,
    15, 26, 36, 44,
    20, 36, 52, 64,
    26, 48, 72, 88,
    36, 64, 96, 112,
    40, 72, 108, 130,
    48, 88, 132, 156,
    60, 110, 160, 192,
    72, 130, 192, 224,
    80, 150, 224, 264,
    96, 176, 260, 308,
    104, 198, 288, 352,
    120, 216, 320, 384,
    132, 240, 360, 432,
    144, 280, 408, 480,
    168, 308, 448, 532,
    180, 338, 504, 588,
    196, 364, 546, 650,
    224, 416, 600, 700,
    224, 442, 644, 750,
    252, 476, 690, 816,
    270, 504, 750, 900,
    300, 560, 810, 960,
    312, 588, 870, 1050,
    336, 644, 952, 1110,
    360, 700, 1020, 1200,
    390, 728, 1050, 1260,
    420, 784, 1140, 1350,
    450, 812, 1200, 1440,
    480, 868, 1290, 1530,
    510, 924, 1350, 1620,
    540, 980, 1440, 1710,
    570, 1036, 1530, 1800,
    570, 1064, 1590, 1890,
    600, 1120, 1680, 1980,
    630, 1204, 1770, 2100,
    660, 1260, 1860, 2220,
    720, 1316, 1950, 2310,
    750, 1372, 2040, 2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
var getBlocksCount = function getBlocksCount(version, errorCorrectionLevel$1) {
    switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
var getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel$1) {
    switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
var errorCorrectionCode = {
    getBlocksCount: getBlocksCount,
    getTotalCodewordsCount: getTotalCodewordsCount
};
var EXP_TABLE = typedarrayBuffer.alloc(512);
var LOG_TABLE = typedarrayBuffer.alloc(256);
(function initTables() {
    var x = 1;
    for (var i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
            x ^= 0x11D;
        }
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for (i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
    }
}());
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var log = function log(n) {
    if (n < 1)
        throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
var mul = function mul(x, y) {
    if (x === 0 || y === 0)
        return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
var galoisField = {
    log: log,
    exp: exp,
    mul: mul
};
var polynomial = createCommonjsModule(function (module, exports) {
    /**
     * Multiplies two polynomials inside Galois Field
     *
     * @param  {Buffer} p1 Polynomial
     * @param  {Buffer} p2 Polynomial
     * @return {Buffer}    Product of p1 and p2
     */
    exports.mul = function mul(p1, p2) {
        var coeff = typedarrayBuffer.alloc(p1.length + p2.length - 1);
        for (var i = 0; i < p1.length; i++) {
            for (var j = 0; j < p2.length; j++) {
                coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
            }
        }
        return coeff;
    };
    /**
     * Calculate the remainder of polynomials division
     *
     * @param  {Buffer} divident Polynomial
     * @param  {Buffer} divisor  Polynomial
     * @return {Buffer}          Remainder
     */
    exports.mod = function mod(divident, divisor) {
        var result = typedarrayBuffer.from(divident);
        while ((result.length - divisor.length) >= 0) {
            var coeff = result[0];
            for (var i = 0; i < divisor.length; i++) {
                result[i] ^= galoisField.mul(divisor[i], coeff);
            }
            // remove all zeros from buffer head
            var offset = 0;
            while (offset < result.length && result[offset] === 0)
                offset++;
            result = result.slice(offset);
        }
        return result;
    };
    /**
     * Generate an irreducible generator polynomial of specified degree
     * (used by Reed-Solomon encoder)
     *
     * @param  {Number} degree Degree of the generator polynomial
     * @return {Buffer}        Buffer containing polynomial coefficients
     */
    exports.generateECPolynomial = function generateECPolynomial(degree) {
        var poly = typedarrayBuffer.from([1]);
        for (var i = 0; i < degree; i++) {
            poly = exports.mul(poly, [1, galoisField.exp(i)]);
        }
        return poly;
    };
});
var Buffer$1 = buffer__WEBPACK_IMPORTED_MODULE_8___default.a.Buffer;
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree)
        this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
        throw new Error('Encoder not initialized');
    }
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    var pad = typedarrayBuffer.alloc(this.degree);
    var paddedData = Buffer$1.concat([data, pad], data.length + this.degree);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    var remainder = polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    var start = this.degree - remainder.length;
    if (start > 0) {
        var buff = typedarrayBuffer.alloc(this.degree);
        remainder.copy(buff, start);
        return buff;
    }
    return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder;
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
var isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};
var versionCheck = {
    isValid: isValid
};
var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
    '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
    '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
    '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
var KANJI = new RegExp(kanji, 'g');
var BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
var BYTE = new RegExp(byte, 'g');
var NUMERIC = new RegExp(numeric, 'g');
var ALPHANUMERIC = new RegExp(alphanumeric, 'g');
var TEST_KANJI = new RegExp('^' + kanji + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
var testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
var testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
var testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};
var regex = {
    KANJI: KANJI,
    BYTE_KANJI: BYTE_KANJI,
    BYTE: BYTE,
    NUMERIC: NUMERIC,
    ALPHANUMERIC: ALPHANUMERIC,
    testKanji: testKanji,
    testNumeric: testNumeric,
    testAlphanumeric: testAlphanumeric
};
var mode = createCommonjsModule(function (module, exports) {
    /**
     * Numeric mode encodes data from the decimal digit set (0 - 9)
     * (byte values 30HEX to 39HEX).
     * Normally, 3 data characters are represented by 10 bits.
     *
     * @type {Object}
     */
    exports.NUMERIC = {
        id: 'Numeric',
        bit: 1 << 0,
        ccBits: [10, 12, 14]
    };
    /**
     * Alphanumeric mode encodes data from a set of 45 characters,
     * i.e. 10 numeric digits (0 - 9),
     *      26 alphabetic characters (A - Z),
     *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
     * Normally, two input characters are represented by 11 bits.
     *
     * @type {Object}
     */
    exports.ALPHANUMERIC = {
        id: 'Alphanumeric',
        bit: 1 << 1,
        ccBits: [9, 11, 13]
    };
    /**
     * In byte mode, data is encoded at 8 bits per character.
     *
     * @type {Object}
     */
    exports.BYTE = {
        id: 'Byte',
        bit: 1 << 2,
        ccBits: [8, 16, 16]
    };
    /**
     * The Kanji mode efficiently encodes Kanji characters in accordance with
     * the Shift JIS system based on JIS X 0208.
     * The Shift JIS values are shifted from the JIS X 0208 values.
     * JIS X 0208 gives details of the shift coded representation.
     * Each two-byte character value is compacted to a 13-bit binary codeword.
     *
     * @type {Object}
     */
    exports.KANJI = {
        id: 'Kanji',
        bit: 1 << 3,
        ccBits: [8, 10, 12]
    };
    /**
     * Mixed mode will contain a sequences of data in a combination of any of
     * the modes described above
     *
     * @type {Object}
     */
    exports.MIXED = {
        bit: -1
    };
    /**
     * Returns the number of bits needed to store the data length
     * according to QR Code specifications.
     *
     * @param  {Mode}   mode    Data mode
     * @param  {Number} version QR Code version
     * @return {Number}         Number of bits
     */
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits)
            throw new Error('Invalid mode: ' + mode);
        if (!versionCheck.isValid(version)) {
            throw new Error('Invalid version: ' + version);
        }
        if (version >= 1 && version < 10)
            return mode.ccBits[0];
        else if (version < 27)
            return mode.ccBits[1];
        return mode.ccBits[2];
    };
    /**
     * Returns the most efficient mode to store the specified data
     *
     * @param  {String} dataStr Input data string
     * @return {Mode}           Best mode
     */
    exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (regex.testNumeric(dataStr))
            return exports.NUMERIC;
        else if (regex.testAlphanumeric(dataStr))
            return exports.ALPHANUMERIC;
        else if (regex.testKanji(dataStr))
            return exports.KANJI;
        else
            return exports.BYTE;
    };
    /**
     * Return mode name as string
     *
     * @param {Mode} mode Mode object
     * @returns {String}  Mode name
     */
    exports.toString = function toString(mode) {
        if (mode && mode.id)
            return mode.id;
        throw new Error('Invalid mode');
    };
    /**
     * Check if input param is a valid mode object
     *
     * @param   {Mode}    mode Mode object
     * @returns {Boolean} True if valid mode, false otherwise
     */
    exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
    };
    /**
     * Get mode object from its name
     *
     * @param   {String} string Mode name
     * @returns {Mode}          Mode object
     */
    function fromString(string) {
        if (typeof string !== 'string') {
            throw new Error('Param is not a string');
        }
        var lcStr = string.toLowerCase();
        switch (lcStr) {
            case 'numeric':
                return exports.NUMERIC;
            case 'alphanumeric':
                return exports.ALPHANUMERIC;
            case 'kanji':
                return exports.KANJI;
            case 'byte':
                return exports.BYTE;
            default:
                throw new Error('Unknown mode: ' + string);
        }
    }
    /**
     * Returns mode from a value.
     * If value is not a valid mode, returns defaultValue
     *
     * @param  {Mode|String} value        Encoding mode
     * @param  {Mode}        defaultValue Fallback value
     * @return {Mode}                     Encoding mode
     */
    exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
            return value;
        }
        try {
            return fromString(value);
        }
        catch (e) {
            return defaultValue;
        }
    };
});
var version = createCommonjsModule(function (module, exports) {
    // Generator polynomial used to encode version information
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G18_BCH = utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
                return currentVersion;
            }
        }
        return undefined;
    }
    function getReservedBitsCount(mode$1, version) {
        // Character count indicator + mode indicator bits
        return mode.getCharCountIndicator(mode$1, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
        var totalBits = 0;
        segments.forEach(function (data) {
            var reservedBits = getReservedBitsCount(data.mode, version);
            totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
            var length = getTotalBitsFromDataArray(segments, currentVersion);
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode.MIXED)) {
                return currentVersion;
            }
        }
        return undefined;
    }
    /**
     * Returns version number from a value.
     * If value is not a valid version, returns defaultValue
     *
     * @param  {Number|String} value        QR Code version
     * @param  {Number}        defaultValue Fallback value
     * @return {Number}                     QR Code version number
     */
    exports.from = function from(value, defaultValue) {
        if (versionCheck.isValid(value)) {
            return parseInt(value, 10);
        }
        return defaultValue;
    };
    /**
     * Returns how much data can be stored with the specified QR code version
     * and error correction level
     *
     * @param  {Number} version              QR Code version (1-40)
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Mode}   mode                 Data mode
     * @return {Number}                      Quantity of storable data
     */
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode$1) {
        if (!versionCheck.isValid(version)) {
            throw new Error('Invalid QR Code version');
        }
        // Use Byte mode as default
        if (typeof mode$1 === 'undefined')
            mode$1 = mode.BYTE;
        // Total codewords for this QR code version (Data + Error correction)
        var totalCodewords = utils.getSymbolTotalCodewords(version);
        // Total number of error correction codewords
        var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        // Total number of data codewords
        var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode$1 === mode.MIXED)
            return dataTotalCodewordsBits;
        var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode$1, version);
        // Return max number of storable codewords
        switch (mode$1) {
            case mode.NUMERIC:
                return Math.floor((usableBits / 10) * 3);
            case mode.ALPHANUMERIC:
                return Math.floor((usableBits / 11) * 2);
            case mode.KANJI:
                return Math.floor(usableBits / 13);
            case mode.BYTE:
            default:
                return Math.floor(usableBits / 8);
        }
    };
    /**
     * Returns the minimum version needed to contain the amount of data
     *
     * @param  {Segment} data                    Segment of data
     * @param  {Number} [errorCorrectionLevel=H] Error correction level
     * @param  {Mode} mode                       Data mode
     * @return {Number}                          QR Code version
     */
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel$1) {
        var seg;
        var ecl = errorCorrectionLevel.from(errorCorrectionLevel$1, errorCorrectionLevel.M);
        if (isarray(data)) {
            if (data.length > 1) {
                return getBestVersionForMixedData(data, ecl);
            }
            if (data.length === 0) {
                return 1;
            }
            seg = data[0];
        }
        else {
            seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    /**
     * Returns version information with relative error correction bits
     *
     * The version information is included in QR Code symbols of version 7 or larger.
     * It consists of an 18-bit sequence containing 6 data bits,
     * with 12 error correction bits calculated using the (18, 6) Golay code.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Encoded version info bits
     */
    exports.getEncodedBits = function getEncodedBits(version) {
        if (!versionCheck.isValid(version) || version < 7) {
            throw new Error('Invalid QR Code version');
        }
        var d = version << 12;
        while (utils.getBCHDigit(d) - G18_BCH >= 0) {
            d ^= (G18 << (utils.getBCHDigit(d) - G18_BCH));
        }
        return (version << 12) | d;
    };
});
var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
var G15_BCH = utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
var getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    var data = ((errorCorrectionLevel.bit << 3) | mask);
    var d = data << 10;
    while (utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= (G15 << (utils.getBCHDigit(d) - G15_BCH));
    }
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return ((data << 10) | d) ^ G15_MASK;
};
var formatInfo = {
    getEncodedBits: getEncodedBits
};
function NumericData(data) {
    this.mode = mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    var i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    var remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
var numericData = NumericData;
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];
function AlphanumericData(data) {
    this.mode = mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    var i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for (i = 0; i + 2 <= this.data.length; i += 2) {
        // The character value of the first character is multiplied by 45
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
    }
};
var alphanumericData = AlphanumericData;
function ByteData(data) {
    this.mode = mode.BYTE;
    this.data = typedarrayBuffer.from(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
    for (var i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
    }
};
var byteData = ByteData;
function KanjiData(data) {
    this.mode = mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
    var i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for (i = 0; i < this.data.length; i++) {
        var value = utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140;
            // For characters with Shift JIS values from 0xE040 to 0xEBBF
        }
        else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
        }
        else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' +
                'Make sure your charset is UTF-8');
        }
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
var kanjiData = KanjiData;
var dijkstra_1 = createCommonjsModule(function (module) {
    /******************************************************************************
     * Created 2008-08-19.
     *
     * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
     *
     * Copyright (C) 2008
     *   Wyatt Baldwin <self@wyattbaldwin.com>
     *   All rights reserved
     *
     * Licensed under the MIT license.
     *
     *   http://www.opensource.org/licenses/mit-license.php
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     *****************************************************************************/
    var dijkstra = {
        single_source_shortest_paths: function (graph, s, d) {
            // Predecessor map for each node that has been encountered.
            // node ID => predecessor node ID
            var predecessors = {};
            // Costs of shortest paths from s to all nodes encountered.
            // node ID => cost
            var costs = {};
            costs[s] = 0;
            // Costs of shortest paths from s to all nodes encountered; differs from
            // `costs` in that it provides easy access to the node that currently has
            // the known shortest path from s.
            // XXX: Do we actually need both `costs` and `open`?
            var open = dijkstra.PriorityQueue.make();
            open.push(s, 0);
            var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
            while (!open.empty()) {
                // In the nodes remaining in graph that have a known cost from s,
                // find the node, u, that currently has the shortest path from s.
                closest = open.pop();
                u = closest.value;
                cost_of_s_to_u = closest.cost;
                // Get nodes adjacent to u...
                adjacent_nodes = graph[u] || {};
                // ...and explore the edges that connect u to those nodes, updating
                // the cost of the shortest paths to any or all of those nodes as
                // necessary. v is the node across the current edge from u.
                for (v in adjacent_nodes) {
                    if (adjacent_nodes.hasOwnProperty(v)) {
                        // Get the cost of the edge running from u to v.
                        cost_of_e = adjacent_nodes[v];
                        // Cost of s to u plus the cost of u to v across e--this is *a*
                        // cost from s to v that may or may not be less than the current
                        // known cost to v.
                        cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                        // If we haven't visited v yet OR if the current known cost from s to
                        // v is greater than the new cost we just found (cost of s to u plus
                        // cost of u to v across e), update v's cost in the cost list and
                        // update v's predecessor in the predecessor list (it's now u).
                        cost_of_s_to_v = costs[v];
                        first_visit = (typeof costs[v] === 'undefined');
                        if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                            costs[v] = cost_of_s_to_u_plus_cost_of_e;
                            open.push(v, cost_of_s_to_u_plus_cost_of_e);
                            predecessors[v] = u;
                        }
                    }
                }
            }
            if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
                var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
                throw new Error(msg);
            }
            return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function (predecessors, d) {
            var nodes = [];
            var u = d;
            while (u) {
                nodes.push(u);
                u = predecessors[u];
            }
            nodes.reverse();
            return nodes;
        },
        find_path: function (graph, s, d) {
            var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
            return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
            make: function (opts) {
                var T = dijkstra.PriorityQueue, t = {}, key;
                opts = opts || {};
                for (key in T) {
                    if (T.hasOwnProperty(key)) {
                        t[key] = T[key];
                    }
                }
                t.queue = [];
                t.sorter = opts.sorter || T.default_sorter;
                return t;
            },
            default_sorter: function (a, b) {
                return a.cost - b.cost;
            },
            /**
             * Add a new item to the queue and ensure the highest priority element
             * is at the front of the queue.
             */
            push: function (value, cost) {
                var item = { value: value, cost: cost };
                this.queue.push(item);
                this.queue.sort(this.sorter);
            },
            /**
             * Return the highest priority element in the queue.
             */
            pop: function () {
                return this.queue.shift();
            },
            empty: function () {
                return this.queue.length === 0;
            }
        }
    };
    // node.js module exports
    {
        module.exports = dijkstra;
    }
});
var segments = createCommonjsModule(function (module, exports) {
    /**
     * Returns UTF8 byte length
     *
     * @param  {String} str Input string
     * @return {Number}     Number of byte
     */
    function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
    }
    /**
     * Get a list of segments of the specified mode
     * from a string
     *
     * @param  {Mode}   mode Segment mode
     * @param  {String} str  String to process
     * @return {Array}       Array of object with segments data
     */
    function getSegments(regex, mode, str) {
        var segments = [];
        var result;
        while ((result = regex.exec(str)) !== null) {
            segments.push({
                data: result[0],
                index: result.index,
                mode: mode,
                length: result[0].length
            });
        }
        return segments;
    }
    /**
     * Extracts a series of segments with the appropriate
     * modes from a string
     *
     * @param  {String} dataStr Input string
     * @return {Array}          Array of object with segments data
     */
    function getSegmentsFromString(dataStr) {
        var numSegs = getSegments(regex.NUMERIC, mode.NUMERIC, dataStr);
        var alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode.ALPHANUMERIC, dataStr);
        var byteSegs;
        var kanjiSegs;
        if (utils.isKanjiModeEnabled()) {
            byteSegs = getSegments(regex.BYTE, mode.BYTE, dataStr);
            kanjiSegs = getSegments(regex.KANJI, mode.KANJI, dataStr);
        }
        else {
            byteSegs = getSegments(regex.BYTE_KANJI, mode.BYTE, dataStr);
            kanjiSegs = [];
        }
        var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs
            .sort(function (s1, s2) {
            return s1.index - s2.index;
        })
            .map(function (obj) {
            return {
                data: obj.data,
                mode: obj.mode,
                length: obj.length
            };
        });
    }
    /**
     * Returns how many bits are needed to encode a string of
     * specified length with the specified mode
     *
     * @param  {Number} length String length
     * @param  {Mode} mode     Segment mode
     * @return {Number}        Bit length
     */
    function getSegmentBitsLength(length, mode$1) {
        switch (mode$1) {
            case mode.NUMERIC:
                return numericData.getBitsLength(length);
            case mode.ALPHANUMERIC:
                return alphanumericData.getBitsLength(length);
            case mode.KANJI:
                return kanjiData.getBitsLength(length);
            case mode.BYTE:
                return byteData.getBitsLength(length);
        }
    }
    /**
     * Merges adjacent segments which have the same mode
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */
    function mergeSegments(segs) {
        return segs.reduce(function (acc, curr) {
            var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
            if (prevSeg && prevSeg.mode === curr.mode) {
                acc[acc.length - 1].data += curr.data;
                return acc;
            }
            acc.push(curr);
            return acc;
        }, []);
    }
    /**
     * Generates a list of all possible nodes combination which
     * will be used to build a segments graph.
     *
     * Nodes are divided by groups. Each group will contain a list of all the modes
     * in which is possible to encode the given text.
     *
     * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
     * The group for '12345' will contain then 3 objects, one for each
     * possible encoding mode.
     *
     * Each node represents a possible segment.
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */
    function buildNodes(segs) {
        var nodes = [];
        for (var i = 0; i < segs.length; i++) {
            var seg = segs[i];
            switch (seg.mode) {
                case mode.NUMERIC:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.ALPHANUMERIC, length: seg.length },
                        { data: seg.data, mode: mode.BYTE, length: seg.length }
                    ]);
                    break;
                case mode.ALPHANUMERIC:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.BYTE, length: seg.length }
                    ]);
                    break;
                case mode.KANJI:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
                    ]);
                    break;
                case mode.BYTE:
                    nodes.push([
                        { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
                    ]);
            }
        }
        return nodes;
    }
    /**
     * Builds a graph from a list of nodes.
     * All segments in each node group will be connected with all the segments of
     * the next group and so on.
     *
     * At each connection will be assigned a weight depending on the
     * segment's byte length.
     *
     * @param  {Array} nodes    Array of object with segments data
     * @param  {Number} version QR Code version
     * @return {Object}         Graph of all possible segments
     */
    function buildGraph(nodes, version) {
        var table = {};
        var graph = { 'start': {} };
        var prevNodeIds = ['start'];
        for (var i = 0; i < nodes.length; i++) {
            var nodeGroup = nodes[i];
            var currentNodeIds = [];
            for (var j = 0; j < nodeGroup.length; j++) {
                var node = nodeGroup[j];
                var key = '' + i + j;
                currentNodeIds.push(key);
                table[key] = { node: node, lastCount: 0 };
                graph[key] = {};
                for (var n = 0; n < prevNodeIds.length; n++) {
                    var prevNodeId = prevNodeIds[n];
                    if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                        graph[prevNodeId][key] =
                            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
                                getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                        table[prevNodeId].lastCount += node.length;
                    }
                    else {
                        if (table[prevNodeId])
                            table[prevNodeId].lastCount = node.length;
                        graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
                            4 + mode.getCharCountIndicator(node.mode, version); // switch cost
                    }
                }
            }
            prevNodeIds = currentNodeIds;
        }
        for (n = 0; n < prevNodeIds.length; n++) {
            graph[prevNodeIds[n]]['end'] = 0;
        }
        return { map: graph, table: table };
    }
    /**
     * Builds a segment from a specified data and mode.
     * If a mode is not specified, the more suitable will be used.
     *
     * @param  {String} data             Input data
     * @param  {Mode | String} modesHint Data mode
     * @return {Segment}                 Segment
     */
    function buildSingleSegment(data, modesHint) {
        var mode$1;
        var bestMode = mode.getBestModeForData(data);
        mode$1 = mode.from(modesHint, bestMode);
        // Make sure data can be encoded
        if (mode$1 !== mode.BYTE && mode$1.bit < bestMode.bit) {
            throw new Error('"' + data + '"' +
                ' cannot be encoded with mode ' + mode.toString(mode$1) +
                '.\n Suggested mode is: ' + mode.toString(bestMode));
        }
        // Use Mode.BYTE if Kanji support is disabled
        if (mode$1 === mode.KANJI && !utils.isKanjiModeEnabled()) {
            mode$1 = mode.BYTE;
        }
        switch (mode$1) {
            case mode.NUMERIC:
                return new numericData(data);
            case mode.ALPHANUMERIC:
                return new alphanumericData(data);
            case mode.KANJI:
                return new kanjiData(data);
            case mode.BYTE:
                return new byteData(data);
        }
    }
    /**
     * Builds a list of segments from an array.
     * Array can contain Strings or Objects with segment's info.
     *
     * For each item which is a string, will be generated a segment with the given
     * string and the more appropriate encoding mode.
     *
     * For each item which is an object, will be generated a segment with the given
     * data and mode.
     * Objects must contain at least the property "data".
     * If property "mode" is not present, the more suitable mode will be used.
     *
     * @param  {Array} array Array of objects with segments data
     * @return {Array}       Array of Segments
     */
    exports.fromArray = function fromArray(array) {
        return array.reduce(function (acc, seg) {
            if (typeof seg === 'string') {
                acc.push(buildSingleSegment(seg, null));
            }
            else if (seg.data) {
                acc.push(buildSingleSegment(seg.data, seg.mode));
            }
            return acc;
        }, []);
    };
    /**
     * Builds an optimized sequence of segments from a string,
     * which will produce the shortest possible bitstream.
     *
     * @param  {String} data    Input string
     * @param  {Number} version QR Code version
     * @return {Array}          Array of segments
     */
    exports.fromString = function fromString(data, version) {
        var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());
        var nodes = buildNodes(segs);
        var graph = buildGraph(nodes, version);
        var path = dijkstra_1.find_path(graph.map, 'start', 'end');
        var optimizedSegs = [];
        for (var i = 1; i < path.length - 1; i++) {
            optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
    };
    /**
     * Splits a string in various segments with the modes which
     * best represent their content.
     * The produced segments are far from being optimized.
     * The output of this function is only used to estimate a QR Code version
     * which may contain the data.
     *
     * @param  {string} data Input string
     * @return {Array}       Array of segments
     */
    exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(getSegmentsFromString(data, utils.isKanjiModeEnabled()));
    };
});
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/
/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
    var size = matrix.size;
    var pos = finderPattern.getPositions(version);
    for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r)
                continue;
            for (var c = -1; c <= 7; c++) {
                if (col + c <= -1 || size <= col + c)
                    continue;
                if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                    (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                    (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
                    matrix.set(row + r, col + c, true, true);
                }
                else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
    var size = matrix.size;
    for (var r = 8; r < size - 8; r++) {
        var value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
    var pos = alignmentPattern.getPositions(version);
    for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];
        for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
                if (r === -2 || r === 2 || c === -2 || c === 2 ||
                    (r === 0 && c === 0)) {
                    matrix.set(row + r, col + c, true, true);
                }
                else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version$1) {
    var size = matrix.size;
    var bits = version.getEncodedBits(version$1);
    var row, col, mod;
    for (var i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = ((bits >> i) & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    var size = matrix.size;
    var bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    var i, mod;
    for (i = 0; i < 15; i++) {
        mod = ((bits >> i) & 1) === 1;
        // vertical
        if (i < 6) {
            matrix.set(i, 8, mod, true);
        }
        else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
        }
        else {
            matrix.set(size - 15 + i, 8, mod, true);
        }
        // horizontal
        if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
        }
        else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
        }
        else {
            matrix.set(8, 15 - i - 1, mod, true);
        }
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData(matrix, data) {
    var size = matrix.size;
    var inc = -1;
    var row = size - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = size - 1; col > 0; col -= 2) {
        if (col === 6)
            col--;
        while (true) {
            for (var c = 0; c < 2; c++) {
                if (!matrix.isReserved(row, col - c)) {
                    var dark = false;
                    if (byteIndex < data.length) {
                        dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
                    }
                    matrix.set(row, col - c, dark);
                    bitIndex--;
                    if (bitIndex === -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    var buffer = new bitBuffer();
    segments.forEach(function (data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    var totalCodewords = utils.getSymbolTotalCodewords(version);
    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
    }
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
    }
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for (var i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    }
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    var totalCodewords = utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    var dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    var ecTotalBlocks = errorCorrectionCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    var blocksInGroup2 = totalCodewords % ecTotalBlocks;
    var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    var rs = new reedSolomonEncoder(ecCount);
    var offset = 0;
    var dcData = new Array(ecTotalBlocks);
    var ecData = new Array(ecTotalBlocks);
    var maxDataSize = 0;
    var buffer = typedarrayBuffer.from(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for (var b = 0; b < ecTotalBlocks; b++) {
        var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    var data = typedarrayBuffer.alloc(totalCodewords);
    var index = 0;
    var i, r;
    // Add data codewords
    for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
                data[index++] = dcData[r][i];
            }
        }
    }
    // Apped EC codewords
    for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
        }
    }
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version$1, errorCorrectionLevel, maskPattern$1) {
    var segments$1;
    if (isarray(data)) {
        segments$1 = segments.fromArray(data);
    }
    else if (typeof data === 'string') {
        var estimatedVersion = version$1;
        if (!estimatedVersion) {
            var rawSegments = segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments$1 = segments.fromString(data, estimatedVersion || 40);
    }
    else {
        throw new Error('Invalid data');
    }
    // Get the min version that can contain data
    var bestVersion = version.getBestVersionForData(segments$1, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
    }
    // If not specified, use min version as default
    if (!version$1) {
        version$1 = bestVersion;
        // Check if the specified version can contain the data
    }
    else if (version$1 < bestVersion) {
        throw new Error('\n' +
            'The chosen QR Code version cannot contain this amount of data.\n' +
            'Minimum version required to store current data is: ' + bestVersion + '.\n');
    }
    var dataBits = createData(version$1, errorCorrectionLevel, segments$1);
    // Allocate matrix buffer
    var moduleCount = utils.getSymbolSize(version$1);
    var modules = new bitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version$1);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version$1);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version$1 >= 7) {
        setupVersionInfo(modules, version$1);
    }
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern$1)) {
        // Find best mask pattern
        maskPattern$1 = maskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    }
    // Apply mask pattern
    maskPattern.applyMask(maskPattern$1, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern$1);
    return {
        modules: modules,
        version: version$1,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern$1,
        segments: segments$1
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
var create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
    }
    var errorCorrectionLevel$1 = errorCorrectionLevel.M;
    var version$1;
    var mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel$1 = errorCorrectionLevel.from(options.errorCorrectionLevel, errorCorrectionLevel.M);
        version$1 = version.from(options.version);
        mask = maskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
            utils.setToSJISFunction(options.toSJISFunc);
        }
    }
    return createSymbol(data, version$1, errorCorrectionLevel$1, mask);
};
var qrcode = {
    create: create
};
var utils$1 = createCommonjsModule(function (module, exports) {
    function hex2rgba(hex) {
        if (typeof hex === 'number') {
            hex = hex.toString();
        }
        if (typeof hex !== 'string') {
            throw new Error('Color should be defined as hex string');
        }
        var hexCode = hex.slice().replace('#', '').split('');
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
            throw new Error('Invalid hex color: ' + hex);
        }
        // Convert from short to long form (fff -> ffffff)
        if (hexCode.length === 3 || hexCode.length === 4) {
            hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
                return [c, c];
            }));
        }
        // Add default alpha value
        if (hexCode.length === 6)
            hexCode.push('F', 'F');
        var hexValue = parseInt(hexCode.join(''), 16);
        return {
            r: (hexValue >> 24) & 255,
            g: (hexValue >> 16) & 255,
            b: (hexValue >> 8) & 255,
            a: hexValue & 255,
            hex: '#' + hexCode.slice(0, 6).join('')
        };
    }
    exports.getOptions = function getOptions(options) {
        if (!options)
            options = {};
        if (!options.color)
            options.color = {};
        var margin = typeof options.margin === 'undefined' ||
            options.margin === null ||
            options.margin < 0 ? 4 : options.margin;
        var width = options.width && options.width >= 21 ? options.width : undefined;
        var scale = options.scale || 4;
        return {
            width: width,
            scale: width ? 4 : scale,
            margin: margin,
            color: {
                dark: hex2rgba(options.color.dark || '#000000ff'),
                light: hex2rgba(options.color.light || '#ffffffff')
            },
            type: options.type,
            rendererOpts: options.rendererOpts || {}
        };
    };
    exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2
            ? opts.width / (qrSize + opts.margin * 2)
            : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
        var scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        var size = qr.modules.size;
        var data = qr.modules.data;
        var scale = exports.getScale(size, opts);
        var symbolSize = Math.floor((size + opts.margin * 2) * scale);
        var scaledMargin = opts.margin * scale;
        var palette = [opts.color.light, opts.color.dark];
        for (var i = 0; i < symbolSize; i++) {
            for (var j = 0; j < symbolSize; j++) {
                var posDst = (i * symbolSize + j) * 4;
                var pxColor = opts.color.light;
                if (i >= scaledMargin && j >= scaledMargin &&
                    i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                    var iSrc = Math.floor((i - scaledMargin) / scale);
                    var jSrc = Math.floor((j - scaledMargin) / scale);
                    pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
                }
                imgData[posDst++] = pxColor.r;
                imgData[posDst++] = pxColor.g;
                imgData[posDst++] = pxColor.b;
                imgData[posDst] = pxColor.a;
            }
        }
    };
});
var canvas = createCommonjsModule(function (module, exports) {
    function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style)
            canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + 'px';
        canvas.style.width = size + 'px';
    }
    function getCanvasElement() {
        try {
            return document.createElement('canvas');
        }
        catch (e) {
            throw new Error('You need to specify a canvas element');
        }
    }
    exports.render = function render(qrData, canvas, options) {
        var opts = options;
        var canvasEl = canvas;
        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
            opts = canvas;
            canvas = undefined;
        }
        if (!canvas) {
            canvasEl = getCanvasElement();
        }
        opts = utils$1.getOptions(opts);
        var size = utils$1.getImageWidth(qrData.modules.size, opts);
        var ctx = canvasEl.getContext('2d');
        var image = ctx.createImageData(size, size);
        utils$1.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        var opts = options;
        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
            opts = canvas;
            canvas = undefined;
        }
        if (!opts)
            opts = {};
        var canvasEl = exports.render(qrData, canvas, opts);
        var type = opts.type || 'image/png';
        var rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
    };
});
function getColorAttrib(color, attrib) {
    var alpha = color.a / 255;
    var str = attrib + '="' + color.hex + '"';
    return alpha < 1
        ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
        : str;
}
function svgCmd(cmd, x, y) {
    var str = cmd + x;
    if (typeof y !== 'undefined')
        str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    var path = '';
    var moveBy = 0;
    var newRow = false;
    var lineLength = 0;
    for (var i = 0; i < data.length; i++) {
        var col = Math.floor(i % size);
        var row = Math.floor(i / size);
        if (!col && !newRow)
            newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow
                    ? svgCmd('M', col + margin, 0.5 + row + margin)
                    : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        }
        else {
            moveBy++;
        }
    }
    return path;
}
var render = function render(qrData, options, cb) {
    var opts = utils$1.getOptions(options);
    var size = qrData.modules.size;
    var data = qrData.modules.data;
    var qrcodesize = size + opts.margin * 2;
    var bg = !opts.color.light.a
        ? ''
        : '<path ' + getColorAttrib(opts.color.light, 'fill') +
            ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
        ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') {
        cb(null, svgTag);
    }
    return svgTag;
};
var svgTag = {
    render: render
};
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    var args = [].slice.call(arguments, 1);
    var argsNum = args.length;
    var isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
    }
    if (isLastArgCb) {
        if (argsNum < 2) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        }
        else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            }
            else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    }
    else {
        if (argsNum < 1) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        }
        else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function (resolve, reject) {
            try {
                var data = qrcode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    try {
        var data = qrcode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    }
    catch (e) {
        cb(e);
    }
}
var create$1 = qrcode.create;
var toCanvas = renderCanvas.bind(null, canvas.render);
var toDataURL = renderCanvas.bind(null, canvas.renderToDataURL);
// only svg for now.
var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
    return svgTag.render(data, opts);
});
var browser = {
    create: create$1,
    toCanvas: toCanvas,
    toDataURL: toDataURL,
    toString: toString_1
};
var amplifyTotpSetupCss = ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('TOTP');
var AmplifyTOTPSetup = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputProps = {
            autoFocus: true,
        };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Used for header text in totp setup component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_HEADER_TEXT;
        /** Used for customizing the issuer string in the qr code image */
        this.issuer = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_ISSUER;
        this.code = null;
        this.setupMessage = null;
        this.qrCodeInput = null;
        this.loading = false;
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /**
                         * We didn't use `@Watch` here because it doesn't fire when we go from require-new-password to totp-setup.
                         * That is because `Auth.completeNewPassword` only changes `user` in place and Watch doesn't detect changes
                         * unless we make a clone.
                         */
                        this.removeHubListener = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState) {
                            if (authState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup)
                                _this.setup();
                        });
                        return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
    };
    class_1.prototype.buildOtpAuthPath = function (user, issuer, secretKey) {
        return "otpauth://totp/" + issuer + ":" + user.username + "?secret=" + secretKey + "&issuer=" + issuer;
    };
    class_1.prototype.onTOTPEvent = function (event, data, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.debug('on totp event', event, data);
                        if (!(event === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["S"] && data === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["i"])) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.handleTotpInputChange = function (event) {
        this.setupMessage = null;
        this.qrCodeInput = event.target.value;
    };
    class_1.prototype.generateQRCode = function (codeFromTotp) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, browser.toDataURL(codeFromTotp)];
                    case 1:
                        _a.qrCodeImageSource = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var encodedIssuer, secretKey, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // ensure setup is only run once after totp setup is available
                        if (!this.user || this.user.challengeName !== 'MFA_SETUP' || this.loading)
                            return [2 /*return*/];
                        this.setupMessage = null;
                        encodedIssuer = encodeURI(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.issuer));
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP(this.user)];
                    case 2:
                        secretKey = _a.sent();
                        logger.debug('secret key', secretKey);
                        this.code = this.buildOtpAuthPath(this.user, encodedIssuer, secretKey);
                        this.generateQRCode(this.code);
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
                        logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE), error_2);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.verifyTotpToken = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!this.qrCodeInput) {
                            logger.debug('No TOTP Code provided');
                            return [2 /*return*/];
                        }
                        user = this.user;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken(user, this.qrCodeInput)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA(user, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP)];
                    case 3:
                        _a.sent();
                        this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE);
                        logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE));
                        return [4 /*yield*/, this.onTOTPEvent(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["S"], _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["i"], user)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE);
                        logger.error(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUBMIT_BUTTON_TEXT), handleSubmit: function (event) { return _this.verifyTotpToken(event); }, loading: this.loading }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "totp-setup" }, this.qrCodeImageSource && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.qrCodeImageSource, alt: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].QR_CODE_ALT) }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_LABEL), inputProps: this.inputProps, fieldId: "totpCode", name: "totpCode", handleInputChange: function (event) { return _this.handleTotpInputChange(event); } })))));
    };
    return class_1;
}());
AmplifyTOTPSetup.style = amplifyTotpSetupCss;



/***/ }),

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-bd096ca7.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-bd096ca7.js ***!
  \***************************************************************************************/
/*! exports provided: c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSignIn; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('auth-helpers');
function checkContact(user, handleAuthStateChange) {
    return __awaiter(this, void 0, void 0, function () {
        var data, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact !== 'function') {
                        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
                    }
                    // If `user` is a federated user, we shouldn't call `verifiedContact`
                    // since `user` isn't `CognitoUser`
                    if (!isCognitoUser(user)) {
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact(user)];
                case 2:
                    data = _a.sent();
                    if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.verified) || Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.unverified)) {
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
                    }
                    else {
                        newUser = Object.assign(user, data);
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].VerifyContact, newUser);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var handleSignIn = function (username, password, handleAuthStateChange) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password)];
            case 2:
                user = _a.sent();
                logger.debug(user);
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SMSMFA || user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SoftwareTokenMFA)) return [3 /*break*/, 3];
                logger.debug('confirm user with ' + user.challengeName);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 3:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].NewPasswordRequired)) return [3 /*break*/, 4];
                logger.debug('require new password', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ResetPassword, user);
                return [3 /*break*/, 8];
            case 4:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].MFASetup)) return [3 /*break*/, 5];
                logger.debug('TOTP setup', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].TOTPSetup, user);
                return [3 /*break*/, 8];
            case 5:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].CustomChallenge &&
                    user.challengeParam &&
                    user.challengeParam.trigger === 'true')) return [3 /*break*/, 6];
                logger.debug('custom challenge', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].CustomConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, checkContact(user, handleAuthStateChange)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                if (error_2.code === 'UserNotConfirmedException') {
                    logger.debug('the user is not confirmed');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignUp, { username: username });
                }
                else if (error_2.code === 'PasswordResetRequiredException') {
                    logger.debug('the user requires a new password');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ForgotPassword, { username: username });
                }
                else if (error_2.code === 'InvalidParameterException' && password === '') {
                    logger.debug('Password cannot be empty');
                    error_2.message = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_PASSWORD;
                }
                Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error_2);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
var isCognitoUser = function (user) {
    return user instanceof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"];
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LXJhZGlvLWJ1dHRvbl8yLmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2F1dGgtaGVscGVycy1iZDA5NmNhNy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMwRTtBQUN6QjtBQUN5QjtBQUNqQztBQUNzQjtBQUNvQztBQUM2QjtBQUNqRTtBQUNuQztBQUM1QixtQ0FBbUMseUNBQXlDLGNBQWMsY0FBYyxXQUFXLGFBQWEsaUNBQWlDLCtCQUErQixvQkFBb0Isa0JBQWtCO0FBQ3RPO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFVBQVUsd0JBQXdCLEVBQUUsNERBQUMseUJBQXlCLHNMQUFzTCxxQkFBcUIsNERBQUMsbUJBQW1CLHdCQUF3QjtBQUN0VTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRCxXQUFXLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLGdCQUFnQixLQUFLO0FBQ3JCLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixLQUFLO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixLQUFLO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7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ICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC0zZmI1YzEzOS5qcyc7XG5pbXBvcnQgeyBMb2dnZXIsIEkxOG4gfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBNIGFzIE1mYU9wdGlvbiwgQSBhcyBBdXRoU3RhdGUgfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IFQgYXMgVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9UcmFuc2xhdGlvbnMtYzgzM2Y2NjMuanMnO1xuaW1wb3J0IHsgUyBhcyBTRVRVUF9UT1RQLCBpIGFzIFNVQ0NFU1MsIE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQsIG8gYXMgb25BdXRoVUlTdGF0ZUNoYW5nZSwgYSBhcyBkaXNwYXRjaFRvYXN0SHViRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMtNGY2MWU1ZmYuanMnO1xuaW1wb3J0IHsgYyBhcyBjaGVja0NvbnRhY3QgfSBmcm9tICcuL2F1dGgtaGVscGVycy1iZDA5NmNhNy5qcyc7XG5pbXBvcnQgYnVmZmVyIGZyb20gJ2J1ZmZlcic7XG52YXIgYW1wbGlmeVJhZGlvQnV0dG9uQ3NzID0gXCI6aG9zdHstLWZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpfS5yYWRpby1idXR0b257ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6MTZweDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSl9LnJhZGlvLWJ1dHRvbiBpbnB1dHttYXJnaW4tcmlnaHQ6MTJweH1cIjtcbnZhciBBbXBsaWZ5UmFkaW9CdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeVJhZGlvQnV0dG9uKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIChPcHRpb25hbCkgVGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgaW5wdXQgZWxlbWVudC4gIFVzaW5nIGhpbnRzIGlzIHJlY29tbWVuZGVkLCBidXQgcGxhY2Vob2xkZXJzIGNhbiBhbHNvIGJlIHVzZWZ1bCB0byBjb252ZXkgaW5mb3JtYXRpb24gdG8gdXNlcnMuICovXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgLyoqIElmIGB0cnVlYCwgdGhlIHJhZGlvIGJ1dHRvbiBpcyBzZWxlY3RlZC4gKi9cbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8qKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZCAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIEFtcGxpZnlSYWRpb0J1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwicmFkaW8tYnV0dG9uXCIgfSwgaChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IHRoaXMubmFtZSwgdmFsdWU6IHRoaXMudmFsdWUsIG9uSW5wdXQ6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLCBpZDogdGhpcy5maWVsZElkLCBjaGVja2VkOiB0aGlzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIH0sIHRoaXMuaW5wdXRQcm9wcykpLCBoKFwiYW1wbGlmeS1sYWJlbFwiLCB7IGh0bWxGb3I6IHRoaXMuZmllbGRJZCB9LCB0aGlzLmxhYmVsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlSYWRpb0J1dHRvbjtcbn0oKSk7XG5BbXBsaWZ5UmFkaW9CdXR0b24uc3R5bGUgPSBhbXBsaWZ5UmFkaW9CdXR0b25Dc3M7XG4vLyBjYW4tcHJvbWlzZSBoYXMgYSBjcmFzaCBpbiBzb21lIHZlcnNpb25zIG9mIHJlYWN0IG5hdGl2ZSB0aGF0IGRvbnQgaGF2ZVxuLy8gc3RhbmRhcmQgZ2xvYmFsIG9iamVjdHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xkYWlyL25vZGUtcXJjb2RlL2lzc3Vlcy8xNTdcbnZhciBjYW5Qcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiBQcm9taXNlLnByb3RvdHlwZSAmJiBQcm9taXNlLnByb3RvdHlwZS50aGVuO1xufTtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xudmFyIGlzYXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQoKSB7XG4gICAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBiZSBhdWdtZW50ZWQ/XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgICBhcnIuX19wcm90b19fID0geyBfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyOyB9IH07XG4gICAgICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpO1xudmFyIEtfTUFYX0xFTkdUSCA9IEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmO1xuZnVuY3Rpb24gQnVmZmVyKGFyZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBvZmZzZXQsIGxlbmd0aCk7XG59XG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlO1xuICAgIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5O1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjaGVja2VkKGxlbmd0aCkge1xuICAgIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAgIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICAgIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJyk7XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGggfCAwO1xufVxuZnVuY3Rpb24gaXNuYW4odmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gdmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aCkge1xuICAgIHZhciBidWY7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgICAgIGJ1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgICAgICBidWYgPSB0aGF0O1xuICAgICAgICBpZiAoYnVmID09PSBudWxsKSB7XG4gICAgICAgICAgICBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlKHRoYXQsIHNpemUpIHtcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKTtcbiAgICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5mdW5jdGlvbiBmcm9tU3RyaW5nKHRoYXQsIHN0cmluZykge1xuICAgIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZykgfCAwO1xuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZyk7XG4gICAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgICAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgICAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICAgICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbCk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMDtcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlcih0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICB2YXIgYnVmO1xuICAgIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgICAgICBidWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICAgICAgYnVmID0gZnJvbUFycmF5TGlrZSh0aGF0LCBidWYpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZnVuY3Rpb24gZnJvbU9iamVjdCh0aGF0LCBvYmopIHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwO1xuICAgICAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbik7XG4gICAgICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9XG4gICAgICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKTtcbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgaWYgKG9iaikge1xuICAgICAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKTtcbn1cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzKHN0cmluZywgdW5pdHMpIHtcbiAgICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5O1xuICAgIHZhciBjb2RlUG9pbnQ7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgICAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICAgICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgICAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgICAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICAgICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgICAgICB9XG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsO1xuICAgICAgICAvLyBlbmNvZGUgdXRmOFxuICAgICAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCwgY29kZVBvaW50ICYgMHgzRiB8IDB4ODApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCwgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLCBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCwgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLCBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmZ1bmN0aW9uIGJ5dGVMZW5ndGgoc3RyaW5nKSB7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gICAgfVxuICAgIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuICAgIGlmIChsZW4gPT09IDApXG4gICAgICAgIHJldHVybiAwO1xuICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGJsaXRCdWZmZXIoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIHV0ZjhXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKTtcbn1cbmZ1bmN0aW9uIGZyb20odGhhdCwgdmFsdWUsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKTtcbn1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZShzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICAgIH1cbiAgICBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXSlcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICAgICAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXQ7XG4gICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZylcbiAgICAgICAgbGVuZ3RoID0gcmVtYWluaW5nO1xuICAgIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpO1xuICAgIH1cbiAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpO1xufTtcbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICAgIHN0YXJ0ID0gfn5zdGFydDtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kO1xuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgc3RhcnQgKz0gbGVuO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgICAgICBzdGFydCA9IGxlbjtcbiAgICB9XG4gICAgaWYgKGVuZCA8IDApIHtcbiAgICAgICAgZW5kICs9IGxlbjtcbiAgICAgICAgaWYgKGVuZCA8IDApXG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICAgICAgZW5kID0gbGVuO1xuICAgIH1cbiAgICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgIHZhciBuZXdCdWY7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCk7XG4gICAgICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gICAgICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnQ7XG4gICAgICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdCdWY7XG59O1xuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKCFzdGFydClcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIGlmICghZW5kICYmIGVuZCAhPT0gMClcbiAgICAgICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gICAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgICAgIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICBpZiAoIXRhcmdldFN0YXJ0KVxuICAgICAgICB0YXJnZXRTdGFydCA9IDA7XG4gICAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpXG4gICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICAgIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICAgIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKTtcbiAgICBpZiAoZW5kIDwgMClcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJyk7XG4gICAgLy8gQXJlIHdlIG9vYj9cbiAgICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgICAgIGVuZCA9IHRoaXMubGVuZ3RoO1xuICAgIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgICAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydDtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0O1xuICAgIHZhciBpO1xuICAgIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgICAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICAgICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwodGFyZ2V0LCB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldFN0YXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlbjtcbn07XG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsKHZhbCwgc3RhcnQsIGVuZCkge1xuICAgIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICAgICAgICAgIHZhbCA9IGNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFsID0gdmFsICYgMjU1O1xuICAgIH1cbiAgICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpO1xuICAgIH1cbiAgICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGFydCA9IHN0YXJ0ID4+PiAwO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDA7XG4gICAgaWYgKCF2YWwpXG4gICAgICAgIHZhbCA9IDA7XG4gICAgdmFyIGk7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXNbaV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICAgICAgICA/IHZhbFxuICAgICAgICAgICAgOiBuZXcgQnVmZmVyKHZhbCk7XG4gICAgICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KGxpc3QsIGxlbmd0aCkge1xuICAgIGlmICghaXNhcnJheShsaXN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKTtcbiAgICB9XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIobnVsbCwgMCk7XG4gICAgfVxuICAgIHZhciBpO1xuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBhbGxvY1Vuc2FmZShudWxsLCBsZW5ndGgpO1xuICAgIHZhciBwb3MgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBidWYgPSBsaXN0W2ldO1xuICAgICAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKTtcbiAgICAgICAgfVxuICAgICAgICBidWYuY29weShidWZmZXIsIHBvcyk7XG4gICAgICAgIHBvcyArPSBidWYubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufTtcbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aDtcbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZTtcbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKGIpIHtcbiAgICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKTtcbn07XG52YXIgYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHZhciBidWZmZXIgPSBuZXcgQnVmZmVyKHNpemUpO1xuICAgIGJ1ZmZlci5maWxsKDApO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xudmFyIGZyb21fMSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZGF0YSk7XG59O1xudmFyIHR5cGVkYXJyYXlCdWZmZXIgPSB7XG4gICAgYWxsb2M6IGFsbG9jLFxuICAgIGZyb206IGZyb21fMVxufTtcbnZhciB0b1NKSVNGdW5jdGlvbjtcbnZhciBDT0RFV09SRFNfQ09VTlQgPSBbXG4gICAgMCxcbiAgICAyNiwgNDQsIDcwLCAxMDAsIDEzNCwgMTcyLCAxOTYsIDI0MiwgMjkyLCAzNDYsXG4gICAgNDA0LCA0NjYsIDUzMiwgNTgxLCA2NTUsIDczMywgODE1LCA5MDEsIDk5MSwgMTA4NSxcbiAgICAxMTU2LCAxMjU4LCAxMzY0LCAxNDc0LCAxNTg4LCAxNzA2LCAxODI4LCAxOTIxLCAyMDUxLCAyMTg1LFxuICAgIDIzMjMsIDI0NjUsIDI2MTEsIDI3NjEsIDI4NzYsIDMwMzQsIDMxOTYsIDMzNjIsIDM1MzIsIDM3MDZcbl07XG4vKipcbiAqIFJldHVybnMgdGhlIFFSIENvZGUgc2l6ZSBmb3IgdGhlIHNwZWNpZmllZCB2ZXJzaW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIHNpemUgb2YgUVIgY29kZVxuICovXG52YXIgZ2V0U3ltYm9sU2l6ZSA9IGZ1bmN0aW9uIGdldFN5bWJvbFNpemUodmVyc2lvbikge1xuICAgIGlmICghdmVyc2lvbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICBpZiAodmVyc2lvbiA8IDEgfHwgdmVyc2lvbiA+IDQwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIHNob3VsZCBiZSBpbiByYW5nZSBmcm9tIDEgdG8gNDAnKTtcbiAgICByZXR1cm4gdmVyc2lvbiAqIDQgKyAxNztcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBjb2Rld29yZHMgdXNlZCB0byBzdG9yZSBkYXRhIGFuZCBFQyBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgRGF0YSBsZW5ndGggaW4gYml0c1xuICovXG52YXIgZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMgPSBmdW5jdGlvbiBnZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIENPREVXT1JEU19DT1VOVFt2ZXJzaW9uXTtcbn07XG4vKipcbiAqIEVuY29kZSBkYXRhIHdpdGggQm9zZS1DaGF1ZGh1cmktSG9jcXVlbmdoZW1cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRhdGEgVmFsdWUgdG8gZW5jb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgRW5jb2RlZCB2YWx1ZVxuICovXG52YXIgZ2V0QkNIRGlnaXQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBkaWdpdCA9IDA7XG4gICAgd2hpbGUgKGRhdGEgIT09IDApIHtcbiAgICAgICAgZGlnaXQrKztcbiAgICAgICAgZGF0YSA+Pj49IDE7XG4gICAgfVxuICAgIHJldHVybiBkaWdpdDtcbn07XG52YXIgc2V0VG9TSklTRnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRUb1NKSVNGdW5jdGlvbihmKSB7XG4gICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJ0b1NKSVNGdW5jXCIgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIHRvU0pJU0Z1bmN0aW9uID0gZjtcbn07XG52YXIgaXNLYW5qaU1vZGVFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgdG9TSklTRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnO1xufTtcbnZhciB0b1NKSVMgPSBmdW5jdGlvbiB0b1NKSVMoa2FuamkpIHtcbiAgICByZXR1cm4gdG9TSklTRnVuY3Rpb24oa2FuamkpO1xufTtcbnZhciB1dGlscyA9IHtcbiAgICBnZXRTeW1ib2xTaXplOiBnZXRTeW1ib2xTaXplLFxuICAgIGdldFN5bWJvbFRvdGFsQ29kZXdvcmRzOiBnZXRTeW1ib2xUb3RhbENvZGV3b3JkcyxcbiAgICBnZXRCQ0hEaWdpdDogZ2V0QkNIRGlnaXQsXG4gICAgc2V0VG9TSklTRnVuY3Rpb246IHNldFRvU0pJU0Z1bmN0aW9uLFxuICAgIGlzS2FuamlNb2RlRW5hYmxlZDogaXNLYW5qaU1vZGVFbmFibGVkLFxuICAgIHRvU0pJUzogdG9TSklTXG59O1xuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIGJhc2VkaXIsIG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUgPSB7XG4gICAgICAgIHBhdGg6IGJhc2VkaXIsXG4gICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAocGF0aCwgYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbW1vbmpzUmVxdWlyZSgpO1xuICAgICAgICB9XG4gICAgfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuZnVuY3Rpb24gY29tbW9uanNSZXF1aXJlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRHluYW1pYyByZXF1aXJlcyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnKTtcbn1cbnZhciBlcnJvckNvcnJlY3Rpb25MZXZlbCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBleHBvcnRzLkwgPSB7IGJpdDogMSB9O1xuICAgIGV4cG9ydHMuTSA9IHsgYml0OiAwIH07XG4gICAgZXhwb3J0cy5RID0geyBiaXQ6IDMgfTtcbiAgICBleHBvcnRzLkggPSB7IGJpdDogMiB9O1xuICAgIGZ1bmN0aW9uIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc3dpdGNoIChsY1N0cikge1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkw7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuTTtcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgY2FzZSAncXVhcnRpbGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLlE7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkg7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBFQyBMZXZlbDogJyArIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZChsZXZlbCkge1xuICAgICAgICByZXR1cm4gbGV2ZWwgJiYgdHlwZW9mIGxldmVsLmJpdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIGxldmVsLmJpdCA+PSAwICYmIGxldmVsLmJpdCA8IDQ7XG4gICAgfTtcbiAgICBleHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuZnVuY3Rpb24gQml0QnVmZmVyKCkge1xuICAgIHRoaXMuYnVmZmVyID0gW107XG4gICAgdGhpcy5sZW5ndGggPSAwO1xufVxuQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOCk7XG4gICAgICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT09IDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMZW5ndGhJbkJpdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH0sXG4gICAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XG4gICAgICAgIHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyA4KTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltidWZJbmRleF0gfD0gKDB4ODAgPj4+ICh0aGlzLmxlbmd0aCAlIDgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIH1cbn07XG52YXIgYml0QnVmZmVyID0gQml0QnVmZmVyO1xuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gaGFuZGxlIFFSIENvZGUgc3ltYm9sIG1vZHVsZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTeW1ib2wgc2l6ZVxuICovXG5mdW5jdGlvbiBCaXRNYXRyaXgoc2l6ZSkge1xuICAgIGlmICghc2l6ZSB8fCBzaXplIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpdE1hdHJpeCBzaXplIG11c3QgYmUgZGVmaW5lZCBhbmQgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICB9XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKHNpemUgKiBzaXplKTtcbiAgICB0aGlzLnJlc2VydmVkQml0ID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYyhzaXplICogc2l6ZSk7XG59XG4vKipcbiAqIFNldCBiaXQgdmFsdWUgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKiBJZiByZXNlcnZlZCBmbGFnIGlzIHNldCwgdGhpcyBiaXQgd2lsbCBiZSBpZ25vcmVkIGR1cmluZyBtYXNraW5nIHByb2Nlc3NcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICBjb2xcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVzZXJ2ZWRcbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlLCByZXNlcnZlZCkge1xuICAgIHZhciBpbmRleCA9IHJvdyAqIHRoaXMuc2l6ZSArIGNvbDtcbiAgICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWU7XG4gICAgaWYgKHJlc2VydmVkKVxuICAgICAgICB0aGlzLnJlc2VydmVkQml0W2luZGV4XSA9IHRydWU7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSAge051bWJlcn0gIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF07XG59O1xuLyoqXG4gKiBBcHBsaWVzIHhvciBvcGVyYXRvciBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqICh1c2VkIGR1cmluZyBtYXNraW5nIHByb2Nlc3MpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgY29sXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVtyb3cgKiB0aGlzLnNpemUgKyBjb2xdIF49IHZhbHVlO1xufTtcbi8qKlxuICogQ2hlY2sgaWYgYml0IGF0IHNwZWNpZmllZCBsb2NhdGlvbiBpcyByZXNlcnZlZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmlzUmVzZXJ2ZWQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNlcnZlZEJpdFtyb3cgKiB0aGlzLnNpemUgKyBjb2xdO1xufTtcbnZhciBiaXRNYXRyaXggPSBCaXRNYXRyaXg7XG52YXIgYWxpZ25tZW50UGF0dGVybiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvKipcbiAgICAgKiBBbGlnbm1lbnQgcGF0dGVybiBhcmUgZml4ZWQgcmVmZXJlbmNlIHBhdHRlcm4gaW4gZGVmaW5lZCBwb3NpdGlvbnNcbiAgICAgKiBpbiBhIG1hdHJpeCBzeW1ib2xvZ3ksIHdoaWNoIGVuYWJsZXMgdGhlIGRlY29kZSBzb2Z0d2FyZSB0byByZS1zeW5jaHJvbmlzZVxuICAgICAqIHRoZSBjb29yZGluYXRlIG1hcHBpbmcgb2YgdGhlIGltYWdlIG1vZHVsZXMgaW4gdGhlIGV2ZW50IG9mIG1vZGVyYXRlIGFtb3VudHNcbiAgICAgKiBvZiBkaXN0b3J0aW9uIG9mIHRoZSBpbWFnZS5cbiAgICAgKlxuICAgICAqIEFsaWdubWVudCBwYXR0ZXJucyBhcmUgcHJlc2VudCBvbmx5IGluIFFSIENvZGUgc3ltYm9scyBvZiB2ZXJzaW9uIDIgb3IgbGFyZ2VyXG4gICAgICogYW5kIHRoZWlyIG51bWJlciBkZXBlbmRzIG9uIHRoZSBzeW1ib2wgdmVyc2lvbi5cbiAgICAgKi9cbiAgICB2YXIgZ2V0U3ltYm9sU2l6ZSA9IHV0aWxzLmdldFN5bWJvbFNpemU7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSByb3cvY29sdW1uIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgbW9kdWxlIG9mIGVhY2ggYWxpZ25tZW50IHBhdHRlcm5cbiAgICAgKiBmb3IgdGhlIHNwZWNpZmllZCBRUiBDb2RlIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgYWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwb3NpdGlvbmVkIHN5bW1ldHJpY2FsbHkgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGRpYWdvbmFsXG4gICAgICogcnVubmluZyBmcm9tIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHN5bWJvbCB0byB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lci5cbiAgICAgKlxuICAgICAqIFNpbmNlIHBvc2l0aW9ucyBhcmUgc2ltbWV0cmljYWwgb25seSBoYWxmIG9mIHRoZSBjb29yZGluYXRlcyBhcmUgcmV0dXJuZWQuXG4gICAgICogRWFjaCBpdGVtIG9mIHRoZSBhcnJheSB3aWxsIHJlcHJlc2VudCBpbiB0dXJuIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGUuXG4gICAgICogQHNlZSB7QGxpbmsgZ2V0UG9zaXRpb25zfVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRSb3dDb2xDb29yZHMgPSBmdW5jdGlvbiBnZXRSb3dDb2xDb29yZHModmVyc2lvbikge1xuICAgICAgICBpZiAodmVyc2lvbiA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgdmFyIHBvc0NvdW50ID0gTWF0aC5mbG9vcih2ZXJzaW9uIC8gNykgKyAyO1xuICAgICAgICB2YXIgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbik7XG4gICAgICAgIHZhciBpbnRlcnZhbHMgPSBzaXplID09PSAxNDUgPyAyNiA6IE1hdGguY2VpbCgoc2l6ZSAtIDEzKSAvICgyICogcG9zQ291bnQgLSAyKSkgKiAyO1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gW3NpemUgLSA3XTsgLy8gTGFzdCBjb29yZCBpcyBhbHdheXMgKHNpemUgLSA3KVxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvc0NvdW50IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnNbaV0gPSBwb3NpdGlvbnNbaSAtIDFdIC0gaW50ZXJ2YWxzO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDYpOyAvLyBGaXJzdCBjb29yZCBpcyBhbHdheXMgNlxuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnJldmVyc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcG9zaXRpb25zIG9mIGVhY2ggYWxpZ25tZW50IHBhdHRlcm4uXG4gICAgICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSBjZW50ZXIgcG9pbnQgb2YgdGhlIHBhdHRlcm4gYXMgKHgsIHkpIGNvb3JkaW5hdGVzXG4gICAgICpcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY2FsY3VsYXRlZCBleHBhbmRpbmcgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgcmV0dXJuZWQgYnkge0BsaW5rIGdldFJvd0NvbENvb3Jkc31cbiAgICAgKiBhbmQgZmlsdGVyaW5nIG91dCB0aGUgaXRlbXMgdGhhdCBvdmVybGFwcyB3aXRoIGZpbmRlciBwYXR0ZXJuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIEZvciBhIFZlcnNpb24gNyBzeW1ib2wge0BsaW5rIGdldFJvd0NvbENvb3Jkc30gcmV0dXJucyB2YWx1ZXMgNiwgMjIgYW5kIDM4LlxuICAgICAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMsIHRoZXJlZm9yZSwgYXJlIHRvIGJlIGNlbnRlcmVkIG9uIChyb3csIGNvbHVtbilcbiAgICAgKiBwb3NpdGlvbnMgKDYsMjIpLCAoMjIsNiksICgyMiwyMiksICgyMiwzOCksICgzOCwyMiksICgzOCwzOCkuXG4gICAgICogTm90ZSB0aGF0IHRoZSBjb29yZGluYXRlcyAoNiw2KSwgKDYsMzgpLCAoMzgsNikgYXJlIG9jY3VwaWVkIGJ5IGZpbmRlciBwYXR0ZXJuc1xuICAgICAqIGFuZCBhcmUgbm90IHRoZXJlZm9yZSB1c2VkIGZvciBhbGlnbm1lbnQgcGF0dGVybnMuXG4gICAgICpcbiAgICAgKiB2YXIgcG9zID0gZ2V0UG9zaXRpb25zKDcpXG4gICAgICogLy8gW1s2LDIyXSwgWzIyLDZdLCBbMjIsMjJdLCBbMjIsMzhdLCBbMzgsMjJdLCBbMzgsMzhdXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25zKHZlcnNpb24pIHtcbiAgICAgICAgdmFyIGNvb3JkcyA9IFtdO1xuICAgICAgICB2YXIgcG9zID0gZXhwb3J0cy5nZXRSb3dDb2xDb29yZHModmVyc2lvbik7XG4gICAgICAgIHZhciBwb3NMZW5ndGggPSBwb3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvc0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBpZiBwb3NpdGlvbiBpcyBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAgICAgICAgICAgICAgICBpZiAoKGkgPT09IDAgJiYgaiA9PT0gMCkgfHwgLy8gdG9wLWxlZnRcbiAgICAgICAgICAgICAgICAgICAgKGkgPT09IDAgJiYgaiA9PT0gcG9zTGVuZ3RoIC0gMSkgfHwgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgICAgICAgICAgICAgKGkgPT09IHBvc0xlbmd0aCAtIDEgJiYgaiA9PT0gMCkpIHsgLy8gdG9wLXJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChbcG9zW2ldLCBwb3Nbal1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH07XG59KTtcbnZhciBnZXRTeW1ib2xTaXplJDEgPSB1dGlscy5nZXRTeW1ib2xTaXplO1xudmFyIEZJTkRFUl9QQVRURVJOX1NJWkUgPSA3O1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGZpbmRlciBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xudmFyIGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyh2ZXJzaW9uKSB7XG4gICAgdmFyIHNpemUgPSBnZXRTeW1ib2xTaXplJDEodmVyc2lvbik7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgLy8gdG9wLWxlZnRcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgW3NpemUgLSBGSU5ERVJfUEFUVEVSTl9TSVpFLCAwXSxcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgWzAsIHNpemUgLSBGSU5ERVJfUEFUVEVSTl9TSVpFXVxuICAgIF07XG59O1xudmFyIGZpbmRlclBhdHRlcm4gPSB7XG4gICAgZ2V0UG9zaXRpb25zOiBnZXRQb3NpdGlvbnNcbn07XG52YXIgbWFza1BhdHRlcm4gPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLyoqXG4gICAgICogRGF0YSBtYXNrIHBhdHRlcm4gcmVmZXJlbmNlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBleHBvcnRzLlBhdHRlcm5zID0ge1xuICAgICAgICBQQVRURVJOMDAwOiAwLFxuICAgICAgICBQQVRURVJOMDAxOiAxLFxuICAgICAgICBQQVRURVJOMDEwOiAyLFxuICAgICAgICBQQVRURVJOMDExOiAzLFxuICAgICAgICBQQVRURVJOMTAwOiA0LFxuICAgICAgICBQQVRURVJOMTAxOiA1LFxuICAgICAgICBQQVRURVJOMTEwOiA2LFxuICAgICAgICBQQVRURVJOMTExOiA3XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZWlnaHRlZCBwZW5hbHR5IHNjb3JlcyBmb3IgdGhlIHVuZGVzaXJhYmxlIGZlYXR1cmVzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgUGVuYWx0eVNjb3JlcyA9IHtcbiAgICAgICAgTjE6IDMsXG4gICAgICAgIE4yOiAzLFxuICAgICAgICBOMzogNDAsXG4gICAgICAgIE40OiAxMFxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbWFzayBwYXR0ZXJuIHZhbHVlIGlzIHZhbGlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICBtYXNrICAgIE1hc2sgcGF0dGVyblxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZChtYXNrKSB7XG4gICAgICAgIHJldHVybiBtYXNrICE9IG51bGwgJiYgbWFzayAhPT0gJycgJiYgIWlzTmFOKG1hc2spICYmIG1hc2sgPj0gMCAmJiBtYXNrIDw9IDc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hc2sgcGF0dGVybiBmcm9tIGEgdmFsdWUuXG4gICAgICogSWYgdmFsdWUgaXMgbm90IHZhbGlkLCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gdmFsdWUgICAgICAgIE1hc2sgcGF0dGVybiB2YWx1ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBWYWxpZCBtYXNrIHBhdHRlcm4gb3IgdW5kZWZpbmVkXG4gICAgICovXG4gICAgZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlLCAxMCkgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAqIEZpbmQgYWRqYWNlbnQgbW9kdWxlcyBpbiByb3cvY29sdW1uIHdpdGggdGhlIHNhbWUgY29sb3JcbiAgICAqIGFuZCBhc3NpZ24gYSBwZW5hbHR5IHZhbHVlLlxuICAgICpcbiAgICAqIFBvaW50czogTjEgKyBpXG4gICAgKiBpIGlzIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIG51bWJlciBvZiBhZGphY2VudCBtb2R1bGVzIG9mIHRoZSBzYW1lIGNvbG9yIGV4Y2VlZHMgNVxuICAgICovXG4gICAgZXhwb3J0cy5nZXRQZW5hbHR5TjEgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjEoZGF0YSkge1xuICAgICAgICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgICAgICAgdmFyIHBvaW50cyA9IDA7XG4gICAgICAgIHZhciBzYW1lQ291bnRDb2wgPSAwO1xuICAgICAgICB2YXIgc2FtZUNvdW50Um93ID0gMDtcbiAgICAgICAgdmFyIGxhc3RDb2wgPSBudWxsO1xuICAgICAgICB2YXIgbGFzdFJvdyA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBzYW1lQ291bnRDb2wgPSBzYW1lQ291bnRSb3cgPSAwO1xuICAgICAgICAgICAgbGFzdENvbCA9IGxhc3RSb3cgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kdWxlID0gZGF0YS5nZXQocm93LCBjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RDb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Q29sKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbCA9IG1vZHVsZTtcbiAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Q29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kdWxlID0gZGF0YS5nZXQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Um93Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZUNvdW50Um93ID49IDUpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRSb3cgLSA1KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJvdyA9IG1vZHVsZTtcbiAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Um93ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpXG4gICAgICAgICAgICAgICAgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Q29sIC0gNSk7XG4gICAgICAgICAgICBpZiAoc2FtZUNvdW50Um93ID49IDUpXG4gICAgICAgICAgICAgICAgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgMngyIGJsb2NrcyB3aXRoIHRoZSBzYW1lIGNvbG9yIGFuZCBhc3NpZ24gYSBwZW5hbHR5IHZhbHVlXG4gICAgICpcbiAgICAgKiBQb2ludHM6IE4yICogKG0gLSAxKSAqIChuIC0gMSlcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldFBlbmFsdHlOMiA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMihkYXRhKSB7XG4gICAgICAgIHZhciBzaXplID0gZGF0YS5zaXplO1xuICAgICAgICB2YXIgcG9pbnRzID0gMDtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZSAtIDE7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBzaXplIC0gMTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IGRhdGEuZ2V0KHJvdywgY29sKSArXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZ2V0KHJvdywgY29sICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wpICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5nZXQocm93ICsgMSwgY29sICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QgPT09IDQgfHwgbGFzdCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cyAqIFBlbmFsdHlTY29yZXMuTjI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIDE6MTozOjE6MSByYXRpbyAoZGFyazpsaWdodDpkYXJrOmxpZ2h0OmRhcmspIHBhdHRlcm4gaW4gcm93L2NvbHVtbixcbiAgICAgKiBwcmVjZWRlZCBvciBmb2xsb3dlZCBieSBsaWdodCBhcmVhIDQgbW9kdWxlcyB3aWRlXG4gICAgICpcbiAgICAgKiBQb2ludHM6IE4zICogbnVtYmVyIG9mIHBhdHRlcm4gZm91bmRcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldFBlbmFsdHlOMyA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMyhkYXRhKSB7XG4gICAgICAgIHZhciBzaXplID0gZGF0YS5zaXplO1xuICAgICAgICB2YXIgcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGJpdHNDb2wgPSAwO1xuICAgICAgICB2YXIgYml0c1JvdyA9IDA7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBiaXRzQ29sID0gYml0c1JvdyA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJpdHNDb2wgPSAoKGJpdHNDb2wgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c0NvbCA9PT0gMHg1RDAgfHwgYml0c0NvbCA9PT0gMHgwNUQpKVxuICAgICAgICAgICAgICAgICAgICBwb2ludHMrKztcbiAgICAgICAgICAgICAgICBiaXRzUm93ID0gKChiaXRzUm93IDw8IDEpICYgMHg3RkYpIHwgZGF0YS5nZXQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNSb3cgPT09IDB4NUQwIHx8IGJpdHNSb3cgPT09IDB4MDVEKSlcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cyAqIFBlbmFsdHlTY29yZXMuTjM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcHJvcG9ydGlvbiBvZiBkYXJrIG1vZHVsZXMgaW4gZW50aXJlIHN5bWJvbFxuICAgICAqXG4gICAgICogUG9pbnRzOiBONCAqIGtcbiAgICAgKlxuICAgICAqIGsgaXMgdGhlIHJhdGluZyBvZiB0aGUgZGV2aWF0aW9uIG9mIHRoZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlc1xuICAgICAqIGluIHRoZSBzeW1ib2wgZnJvbSA1MCUgaW4gc3RlcHMgb2YgNSVcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldFBlbmFsdHlONCA9IGZ1bmN0aW9uIGdldFBlbmFsdHlONChkYXRhKSB7XG4gICAgICAgIHZhciBkYXJrQ291bnQgPSAwO1xuICAgICAgICB2YXIgbW9kdWxlc0NvdW50ID0gZGF0YS5kYXRhLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzQ291bnQ7IGkrKylcbiAgICAgICAgICAgIGRhcmtDb3VudCArPSBkYXRhLmRhdGFbaV07XG4gICAgICAgIHZhciBrID0gTWF0aC5hYnMoTWF0aC5jZWlsKChkYXJrQ291bnQgKiAxMDAgLyBtb2R1bGVzQ291bnQpIC8gNSkgLSAxMCk7XG4gICAgICAgIHJldHVybiBrICogUGVuYWx0eVNjb3Jlcy5ONDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBtYXNrIHZhbHVlIGF0IGdpdmVuIHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG1hc2tQYXR0ZXJuIFBhdHRlcm4gcmVmZXJlbmNlIHZhbHVlXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpICAgICAgICAgICBSb3dcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGogICAgICAgICAgIENvbHVtblxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICAgTWFzayB2YWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE1hc2tBdChtYXNrUGF0dGVybiwgaSwgaikge1xuICAgICAgICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAwMDogcmV0dXJuIChpICsgaikgJSAyID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMDE6IHJldHVybiBpICUgMiA9PT0gMDtcbiAgICAgICAgICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDEwOiByZXR1cm4gaiAlIDMgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAxMTogcmV0dXJuIChpICsgaikgJSAzID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMDA6IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSkgJSAyID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMDE6IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMTA6IHJldHVybiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMTE6IHJldHVybiAoKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09PSAwO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIG1hc2sgcGF0dGVybiB0byBhIEJpdE1hdHJpeFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgICBwYXR0ZXJuIFBhdHRlcm4gcmVmZXJlbmNlIG51bWJlclxuICAgICAqIEBwYXJhbSAge0JpdE1hdHJpeH0gZGF0YSAgICBCaXRNYXRyaXggZGF0YVxuICAgICAqL1xuICAgIGV4cG9ydHMuYXBwbHlNYXNrID0gZnVuY3Rpb24gYXBwbHlNYXNrKHBhdHRlcm4sIGRhdGEpIHtcbiAgICAgICAgdmFyIHNpemUgPSBkYXRhLnNpemU7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzUmVzZXJ2ZWQocm93LCBjb2wpKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkYXRhLnhvcihyb3csIGNvbCwgZ2V0TWFza0F0KHBhdHRlcm4sIHJvdywgY29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJlc3QgbWFzayBwYXR0ZXJuIGZvciBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGFcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IE1hc2sgcGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRCZXN0TWFzayA9IGZ1bmN0aW9uIGdldEJlc3RNYXNrKGRhdGEsIHNldHVwRm9ybWF0RnVuYykge1xuICAgICAgICB2YXIgbnVtUGF0dGVybnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLlBhdHRlcm5zKS5sZW5ndGg7XG4gICAgICAgIHZhciBiZXN0UGF0dGVybiA9IDA7XG4gICAgICAgIHZhciBsb3dlclBlbmFsdHkgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBudW1QYXR0ZXJuczsgcCsrKSB7XG4gICAgICAgICAgICBzZXR1cEZvcm1hdEZ1bmMocCk7XG4gICAgICAgICAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZW5hbHR5XG4gICAgICAgICAgICB2YXIgcGVuYWx0eSA9IGV4cG9ydHMuZ2V0UGVuYWx0eU4xKGRhdGEpICtcbiAgICAgICAgICAgICAgICBleHBvcnRzLmdldFBlbmFsdHlOMihkYXRhKSArXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjMoZGF0YSkgK1xuICAgICAgICAgICAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU40KGRhdGEpO1xuICAgICAgICAgICAgLy8gVW5kbyBwcmV2aW91c2x5IGFwcGxpZWQgbWFza1xuICAgICAgICAgICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSk7XG4gICAgICAgICAgICBpZiAocGVuYWx0eSA8IGxvd2VyUGVuYWx0eSkge1xuICAgICAgICAgICAgICAgIGxvd2VyUGVuYWx0eSA9IHBlbmFsdHk7XG4gICAgICAgICAgICAgICAgYmVzdFBhdHRlcm4gPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0UGF0dGVybjtcbiAgICB9O1xufSk7XG52YXIgRUNfQkxPQ0tTX1RBQkxFID0gW1xuICAgIC8vIEwgIE0gIFEgIEhcbiAgICAxLCAxLCAxLCAxLFxuICAgIDEsIDEsIDEsIDEsXG4gICAgMSwgMSwgMiwgMixcbiAgICAxLCAyLCAyLCA0LFxuICAgIDEsIDIsIDQsIDQsXG4gICAgMiwgNCwgNCwgNCxcbiAgICAyLCA0LCA2LCA1LFxuICAgIDIsIDQsIDYsIDYsXG4gICAgMiwgNSwgOCwgOCxcbiAgICA0LCA1LCA4LCA4LFxuICAgIDQsIDUsIDgsIDExLFxuICAgIDQsIDgsIDEwLCAxMSxcbiAgICA0LCA5LCAxMiwgMTYsXG4gICAgNCwgOSwgMTYsIDE2LFxuICAgIDYsIDEwLCAxMiwgMTgsXG4gICAgNiwgMTAsIDE3LCAxNixcbiAgICA2LCAxMSwgMTYsIDE5LFxuICAgIDYsIDEzLCAxOCwgMjEsXG4gICAgNywgMTQsIDIxLCAyNSxcbiAgICA4LCAxNiwgMjAsIDI1LFxuICAgIDgsIDE3LCAyMywgMjUsXG4gICAgOSwgMTcsIDIzLCAzNCxcbiAgICA5LCAxOCwgMjUsIDMwLFxuICAgIDEwLCAyMCwgMjcsIDMyLFxuICAgIDEyLCAyMSwgMjksIDM1LFxuICAgIDEyLCAyMywgMzQsIDM3LFxuICAgIDEyLCAyNSwgMzQsIDQwLFxuICAgIDEzLCAyNiwgMzUsIDQyLFxuICAgIDE0LCAyOCwgMzgsIDQ1LFxuICAgIDE1LCAyOSwgNDAsIDQ4LFxuICAgIDE2LCAzMSwgNDMsIDUxLFxuICAgIDE3LCAzMywgNDUsIDU0LFxuICAgIDE4LCAzNSwgNDgsIDU3LFxuICAgIDE5LCAzNywgNTEsIDYwLFxuICAgIDE5LCAzOCwgNTMsIDYzLFxuICAgIDIwLCA0MCwgNTYsIDY2LFxuICAgIDIxLCA0MywgNTksIDcwLFxuICAgIDIyLCA0NSwgNjIsIDc0LFxuICAgIDI0LCA0NywgNjUsIDc3LFxuICAgIDI1LCA0OSwgNjgsIDgxXG5dO1xudmFyIEVDX0NPREVXT1JEU19UQUJMRSA9IFtcbiAgICAvLyBMICBNICBRICBIXG4gICAgNywgMTAsIDEzLCAxNyxcbiAgICAxMCwgMTYsIDIyLCAyOCxcbiAgICAxNSwgMjYsIDM2LCA0NCxcbiAgICAyMCwgMzYsIDUyLCA2NCxcbiAgICAyNiwgNDgsIDcyLCA4OCxcbiAgICAzNiwgNjQsIDk2LCAxMTIsXG4gICAgNDAsIDcyLCAxMDgsIDEzMCxcbiAgICA0OCwgODgsIDEzMiwgMTU2LFxuICAgIDYwLCAxMTAsIDE2MCwgMTkyLFxuICAgIDcyLCAxMzAsIDE5MiwgMjI0LFxuICAgIDgwLCAxNTAsIDIyNCwgMjY0LFxuICAgIDk2LCAxNzYsIDI2MCwgMzA4LFxuICAgIDEwNCwgMTk4LCAyODgsIDM1MixcbiAgICAxMjAsIDIxNiwgMzIwLCAzODQsXG4gICAgMTMyLCAyNDAsIDM2MCwgNDMyLFxuICAgIDE0NCwgMjgwLCA0MDgsIDQ4MCxcbiAgICAxNjgsIDMwOCwgNDQ4LCA1MzIsXG4gICAgMTgwLCAzMzgsIDUwNCwgNTg4LFxuICAgIDE5NiwgMzY0LCA1NDYsIDY1MCxcbiAgICAyMjQsIDQxNiwgNjAwLCA3MDAsXG4gICAgMjI0LCA0NDIsIDY0NCwgNzUwLFxuICAgIDI1MiwgNDc2LCA2OTAsIDgxNixcbiAgICAyNzAsIDUwNCwgNzUwLCA5MDAsXG4gICAgMzAwLCA1NjAsIDgxMCwgOTYwLFxuICAgIDMxMiwgNTg4LCA4NzAsIDEwNTAsXG4gICAgMzM2LCA2NDQsIDk1MiwgMTExMCxcbiAgICAzNjAsIDcwMCwgMTAyMCwgMTIwMCxcbiAgICAzOTAsIDcyOCwgMTA1MCwgMTI2MCxcbiAgICA0MjAsIDc4NCwgMTE0MCwgMTM1MCxcbiAgICA0NTAsIDgxMiwgMTIwMCwgMTQ0MCxcbiAgICA0ODAsIDg2OCwgMTI5MCwgMTUzMCxcbiAgICA1MTAsIDkyNCwgMTM1MCwgMTYyMCxcbiAgICA1NDAsIDk4MCwgMTQ0MCwgMTcxMCxcbiAgICA1NzAsIDEwMzYsIDE1MzAsIDE4MDAsXG4gICAgNTcwLCAxMDY0LCAxNTkwLCAxODkwLFxuICAgIDYwMCwgMTEyMCwgMTY4MCwgMTk4MCxcbiAgICA2MzAsIDEyMDQsIDE3NzAsIDIxMDAsXG4gICAgNjYwLCAxMjYwLCAxODYwLCAyMjIwLFxuICAgIDcyMCwgMTMxNiwgMTk1MCwgMjMxMCxcbiAgICA3NTAsIDEzNzIsIDIwNDAsIDI0MzBcbl07XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2NrIHRoYXQgdGhlIFFSIENvZGUgc2hvdWxkIGNvbnRhaW5cbiAqIGZvciB0aGUgc3BlY2lmaWVkIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBibG9ja3NcbiAqL1xudmFyIGdldEJsb2Nrc0NvdW50ID0gZnVuY3Rpb24gZ2V0QmxvY2tzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSkge1xuICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSkge1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLkw6XG4gICAgICAgICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF07XG4gICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTTpcbiAgICAgICAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXTtcbiAgICAgICAgY2FzZSBlcnJvckNvcnJlY3Rpb25MZXZlbC5ROlxuICAgICAgICAgICAgcmV0dXJuIEVDX0JMT0NLU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDJdO1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLkg6XG4gICAgICAgICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM107XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyB0byB1c2UgZm9yIHRoZSBzcGVjaWZpZWRcbiAqIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAqL1xudmFyIGdldFRvdGFsQ29kZXdvcmRzQ291bnQgPSBmdW5jdGlvbiBnZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsJDEpIHtcbiAgICBzd2l0Y2ggKGVycm9yQ29ycmVjdGlvbkxldmVsJDEpIHtcbiAgICAgICAgY2FzZSBlcnJvckNvcnJlY3Rpb25MZXZlbC5MOlxuICAgICAgICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDBdO1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLk06XG4gICAgICAgICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV07XG4gICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuUTpcbiAgICAgICAgICAgIHJldHVybiBFQ19DT0RFV09SRFNfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAyXTtcbiAgICAgICAgY2FzZSBlcnJvckNvcnJlY3Rpb25MZXZlbC5IOlxuICAgICAgICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDNdO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59O1xudmFyIGVycm9yQ29ycmVjdGlvbkNvZGUgPSB7XG4gICAgZ2V0QmxvY2tzQ291bnQ6IGdldEJsb2Nrc0NvdW50LFxuICAgIGdldFRvdGFsQ29kZXdvcmRzQ291bnQ6IGdldFRvdGFsQ29kZXdvcmRzQ291bnRcbn07XG52YXIgRVhQX1RBQkxFID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYyg1MTIpO1xudmFyIExPR19UQUJMRSA9IHR5cGVkYXJyYXlCdWZmZXIuYWxsb2MoMjU2KTtcbihmdW5jdGlvbiBpbml0VGFibGVzKCkge1xuICAgIHZhciB4ID0gMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG4gICAgICAgIEVYUF9UQUJMRVtpXSA9IHg7XG4gICAgICAgIExPR19UQUJMRVt4XSA9IGk7XG4gICAgICAgIHggPDw9IDE7IC8vIG11bHRpcGx5IGJ5IDJcbiAgICAgICAgLy8gVGhlIFFSIGNvZGUgc3BlY2lmaWNhdGlvbiBzYXlzIHRvIHVzZSBieXRlLXdpc2UgbW9kdWxvIDEwMDAxMTEwMSBhcml0aG1ldGljLlxuICAgICAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2hlbiBhIG51bWJlciBpcyAyNTYgb3IgbGFyZ2VyLCBpdCBzaG91bGQgYmUgWE9SZWQgd2l0aCAweDExRC5cbiAgICAgICAgaWYgKHggJiAweDEwMCkgeyAvLyBzaW1pbGFyIHRvIHggPj0gMjU2LCBidXQgYSBsb3QgZmFzdGVyIChiZWNhdXNlIDB4MTAwID09IDI1NilcbiAgICAgICAgICAgIHggXj0gMHgxMUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gT3B0aW1pemF0aW9uOiBkb3VibGUgdGhlIHNpemUgb2YgdGhlIGFudGktbG9nIHRhYmxlIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byBtb2QgMjU1IHRvXG4gICAgLy8gc3RheSBpbnNpZGUgdGhlIGJvdW5kcyAoYmVjYXVzZSB3ZSB3aWxsIG1haW5seSB1c2UgdGhpcyB0YWJsZSBmb3IgdGhlIG11bHRpcGxpY2F0aW9uIG9mXG4gICAgLy8gdHdvIEdGIG51bWJlcnMsIG5vIG1vcmUpLlxuICAgIC8vIEBzZWUge0BsaW5rIG11bH1cbiAgICBmb3IgKGkgPSAyNTU7IGkgPCA1MTI7IGkrKykge1xuICAgICAgICBFWFBfVEFCTEVbaV0gPSBFWFBfVEFCTEVbaSAtIDI1NV07XG4gICAgfVxufSgpKTtcbi8qKlxuICogUmV0dXJucyBsb2cgdmFsdWUgb2YgbiBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbnZhciBsb2cgPSBmdW5jdGlvbiBsb2cobikge1xuICAgIGlmIChuIDwgMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2coJyArIG4gKyAnKScpO1xuICAgIHJldHVybiBMT0dfVEFCTEVbbl07XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFudGktbG9nIHZhbHVlIG9mIG4gaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG52YXIgZXhwID0gZnVuY3Rpb24gZXhwKG4pIHtcbiAgICByZXR1cm4gRVhQX1RBQkxFW25dO1xufTtcbi8qKlxuICogTXVsdGlwbGllcyB0d28gbnVtYmVyIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSAge051bWJlcn0geVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG52YXIgbXVsID0gZnVuY3Rpb24gbXVsKHgsIHkpIHtcbiAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKVxuICAgICAgICByZXR1cm4gMDtcbiAgICAvLyBzaG91bGQgYmUgRVhQX1RBQkxFWyhMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV0pICUgMjU1XSBpZiBFWFBfVEFCTEUgd2Fzbid0IG92ZXJzaXplZFxuICAgIC8vIEBzZWUge0BsaW5rIGluaXRUYWJsZXN9XG4gICAgcmV0dXJuIEVYUF9UQUJMRVtMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV1dO1xufTtcbnZhciBnYWxvaXNGaWVsZCA9IHtcbiAgICBsb2c6IGxvZyxcbiAgICBleHA6IGV4cCxcbiAgICBtdWw6IG11bFxufTtcbnZhciBwb2x5bm9taWFsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdHdvIHBvbHlub21pYWxzIGluc2lkZSBHYWxvaXMgRmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0J1ZmZlcn0gcDEgUG9seW5vbWlhbFxuICAgICAqIEBwYXJhbSAge0J1ZmZlcn0gcDIgUG9seW5vbWlhbFxuICAgICAqIEByZXR1cm4ge0J1ZmZlcn0gICAgUHJvZHVjdCBvZiBwMSBhbmQgcDJcbiAgICAgKi9cbiAgICBleHBvcnRzLm11bCA9IGZ1bmN0aW9uIG11bChwMSwgcDIpIHtcbiAgICAgICAgdmFyIGNvZWZmID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYyhwMS5sZW5ndGggKyBwMi5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwMi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvZWZmW2kgKyBqXSBePSBnYWxvaXNGaWVsZC5tdWwocDFbaV0sIHAyW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29lZmY7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJlbWFpbmRlciBvZiBwb2x5bm9taWFscyBkaXZpc2lvblxuICAgICAqXG4gICAgICogQHBhcmFtICB7QnVmZmVyfSBkaXZpZGVudCBQb2x5bm9taWFsXG4gICAgICogQHBhcmFtICB7QnVmZmVyfSBkaXZpc29yICBQb2x5bm9taWFsXG4gICAgICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICBSZW1haW5kZXJcbiAgICAgKi9cbiAgICBleHBvcnRzLm1vZCA9IGZ1bmN0aW9uIG1vZChkaXZpZGVudCwgZGl2aXNvcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHlwZWRhcnJheUJ1ZmZlci5mcm9tKGRpdmlkZW50KTtcbiAgICAgICAgd2hpbGUgKChyZXN1bHQubGVuZ3RoIC0gZGl2aXNvci5sZW5ndGgpID49IDApIHtcbiAgICAgICAgICAgIHZhciBjb2VmZiA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGl2aXNvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSBePSBnYWxvaXNGaWVsZC5tdWwoZGl2aXNvcltpXSwgY29lZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB6ZXJvcyBmcm9tIGJ1ZmZlciBoZWFkXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCByZXN1bHQubGVuZ3RoICYmIHJlc3VsdFtvZmZzZXRdID09PSAwKVxuICAgICAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIGlycmVkdWNpYmxlIGdlbmVyYXRvciBwb2x5bm9taWFsIG9mIHNwZWNpZmllZCBkZWdyZWVcbiAgICAgKiAodXNlZCBieSBSZWVkLVNvbG9tb24gZW5jb2RlcilcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZGVncmVlIERlZ3JlZSBvZiB0aGUgZ2VuZXJhdG9yIHBvbHlub21pYWxcbiAgICAgKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICBCdWZmZXIgY29udGFpbmluZyBwb2x5bm9taWFsIGNvZWZmaWNpZW50c1xuICAgICAqL1xuICAgIGV4cG9ydHMuZ2VuZXJhdGVFQ1BvbHlub21pYWwgPSBmdW5jdGlvbiBnZW5lcmF0ZUVDUG9seW5vbWlhbChkZWdyZWUpIHtcbiAgICAgICAgdmFyIHBvbHkgPSB0eXBlZGFycmF5QnVmZmVyLmZyb20oWzFdKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWdyZWU7IGkrKykge1xuICAgICAgICAgICAgcG9seSA9IGV4cG9ydHMubXVsKHBvbHksIFsxLCBnYWxvaXNGaWVsZC5leHAoaSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9seTtcbiAgICB9O1xufSk7XG52YXIgQnVmZmVyJDEgPSBidWZmZXIuQnVmZmVyO1xuZnVuY3Rpb24gUmVlZFNvbG9tb25FbmNvZGVyKGRlZ3JlZSkge1xuICAgIHRoaXMuZ2VuUG9seSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZTtcbiAgICBpZiAodGhpcy5kZWdyZWUpXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmRlZ3JlZSk7XG59XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGVuY29kZXIuXG4gKiBUaGUgaW5wdXQgcGFyYW0gc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkcy5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZVxuICovXG5SZWVkU29sb21vbkVuY29kZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKGRlZ3JlZSkge1xuICAgIC8vIGNyZWF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICAgIHRoaXMuZGVncmVlID0gZGVncmVlO1xuICAgIHRoaXMuZ2VuUG9seSA9IHBvbHlub21pYWwuZ2VuZXJhdGVFQ1BvbHlub21pYWwodGhpcy5kZWdyZWUpO1xufTtcbi8qKlxuICogRW5jb2RlcyBhIGNodW5rIG9mIGRhdGFcbiAqXG4gKiBAcGFyYW0gIHtCdWZmZXJ9IGRhdGEgQnVmZmVyIGNvbnRhaW5pbmcgaW5wdXQgZGF0YVxuICogQHJldHVybiB7QnVmZmVyfSAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgZGF0YVxuICovXG5SZWVkU29sb21vbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmdlblBvbHkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbmNvZGVyIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICAvLyBDYWxjdWxhdGUgRUMgZm9yIHRoaXMgZGF0YSBibG9ja1xuICAgIC8vIGV4dGVuZHMgZGF0YSBzaXplIHRvIGRhdGErZ2VuUG9seSBzaXplXG4gICAgdmFyIHBhZCA9IHR5cGVkYXJyYXlCdWZmZXIuYWxsb2ModGhpcy5kZWdyZWUpO1xuICAgIHZhciBwYWRkZWREYXRhID0gQnVmZmVyJDEuY29uY2F0KFtkYXRhLCBwYWRdLCBkYXRhLmxlbmd0aCArIHRoaXMuZGVncmVlKTtcbiAgICAvLyBUaGUgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgYXJlIHRoZSByZW1haW5kZXIgYWZ0ZXIgZGl2aWRpbmcgdGhlIGRhdGEgY29kZXdvcmRzXG4gICAgLy8gYnkgYSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICAgIHZhciByZW1haW5kZXIgPSBwb2x5bm9taWFsLm1vZChwYWRkZWREYXRhLCB0aGlzLmdlblBvbHkpO1xuICAgIC8vIHJldHVybiBFQyBkYXRhIGJsb2NrcyAobGFzdCBuIGJ5dGUsIHdoZXJlIG4gaXMgdGhlIGRlZ3JlZSBvZiBnZW5Qb2x5KVxuICAgIC8vIElmIGNvZWZmaWNpZW50cyBudW1iZXIgaW4gcmVtYWluZGVyIGFyZSBsZXNzIHRoYW4gZ2VuUG9seSBkZWdyZWUsXG4gICAgLy8gcGFkIHdpdGggMHMgdG8gdGhlIGxlZnQgdG8gcmVhY2ggdGhlIG5lZWRlZCBudW1iZXIgb2YgY29lZmZpY2llbnRzXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5kZWdyZWUgLSByZW1haW5kZXIubGVuZ3RoO1xuICAgIGlmIChzdGFydCA+IDApIHtcbiAgICAgICAgdmFyIGJ1ZmYgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKHRoaXMuZGVncmVlKTtcbiAgICAgICAgcmVtYWluZGVyLmNvcHkoYnVmZiwgc3RhcnQpO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9XG4gICAgcmV0dXJuIHJlbWFpbmRlcjtcbn07XG52YXIgcmVlZFNvbG9tb25FbmNvZGVyID0gUmVlZFNvbG9tb25FbmNvZGVyO1xuLyoqXG4gKiBDaGVjayBpZiBRUiBDb2RlIHZlcnNpb24gaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkIHZlcnNpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQodmVyc2lvbikge1xuICAgIHJldHVybiAhaXNOYU4odmVyc2lvbikgJiYgdmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPD0gNDA7XG59O1xudmFyIHZlcnNpb25DaGVjayA9IHtcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkXG59O1xudmFyIG51bWVyaWMgPSAnWzAtOV0rJztcbnZhciBhbHBoYW51bWVyaWMgPSAnW0EtWiAkJSorXFxcXC0uLzpdKyc7XG52YXIga2FuamkgPSAnKD86W3UzMDAwLXUzMDNGXXxbdTMwNDAtdTMwOUZdfFt1MzBBMC11MzBGRl18JyArXG4gICAgJ1t1RkYwMC11RkZFRl18W3U0RTAwLXU5RkFGXXxbdTI2MDUtdTI2MDZdfFt1MjE5MC11MjE5NV18dTIwM0J8JyArXG4gICAgJ1t1MjAxMHUyMDE1dTIwMTh1MjAxOXUyMDI1dTIwMjZ1MjAxQ3UyMDFEdTIyMjV1MjI2MF18JyArXG4gICAgJ1t1MDM5MS11MDQ1MV18W3UwMEE3dTAwQTh1MDBCMXUwMEI0dTAwRDd1MDBGN10pKyc7XG5rYW5qaSA9IGthbmppLnJlcGxhY2UoL3UvZywgJ1xcXFx1Jyk7XG52YXIgYnl0ZSA9ICcoPzooPyFbQS1aMC05ICQlKitcXFxcLS4vOl18JyArIGthbmppICsgJykoPzoufFtcXHJcXG5dKSkrJztcbnZhciBLQU5KSSA9IG5ldyBSZWdFeHAoa2FuamksICdnJyk7XG52YXIgQllURV9LQU5KSSA9IG5ldyBSZWdFeHAoJ1teQS1aMC05ICQlKitcXFxcLS4vOl0rJywgJ2cnKTtcbnZhciBCWVRFID0gbmV3IFJlZ0V4cChieXRlLCAnZycpO1xudmFyIE5VTUVSSUMgPSBuZXcgUmVnRXhwKG51bWVyaWMsICdnJyk7XG52YXIgQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cChhbHBoYW51bWVyaWMsICdnJyk7XG52YXIgVEVTVF9LQU5KSSA9IG5ldyBSZWdFeHAoJ14nICsga2FuamkgKyAnJCcpO1xudmFyIFRFU1RfTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ14nICsgbnVtZXJpYyArICckJyk7XG52YXIgVEVTVF9BTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKCdeW0EtWjAtOSAkJSorXFxcXC0uLzpdKyQnKTtcbnZhciB0ZXN0S2FuamkgPSBmdW5jdGlvbiB0ZXN0S2Fuamkoc3RyKSB7XG4gICAgcmV0dXJuIFRFU1RfS0FOSkkudGVzdChzdHIpO1xufTtcbnZhciB0ZXN0TnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3ROdW1lcmljKHN0cikge1xuICAgIHJldHVybiBURVNUX05VTUVSSUMudGVzdChzdHIpO1xufTtcbnZhciB0ZXN0QWxwaGFudW1lcmljID0gZnVuY3Rpb24gdGVzdEFscGhhbnVtZXJpYyhzdHIpIHtcbiAgICByZXR1cm4gVEVTVF9BTFBIQU5VTUVSSUMudGVzdChzdHIpO1xufTtcbnZhciByZWdleCA9IHtcbiAgICBLQU5KSTogS0FOSkksXG4gICAgQllURV9LQU5KSTogQllURV9LQU5KSSxcbiAgICBCWVRFOiBCWVRFLFxuICAgIE5VTUVSSUM6IE5VTUVSSUMsXG4gICAgQUxQSEFOVU1FUklDOiBBTFBIQU5VTUVSSUMsXG4gICAgdGVzdEthbmppOiB0ZXN0S2FuamksXG4gICAgdGVzdE51bWVyaWM6IHRlc3ROdW1lcmljLFxuICAgIHRlc3RBbHBoYW51bWVyaWM6IHRlc3RBbHBoYW51bWVyaWNcbn07XG52YXIgbW9kZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvKipcbiAgICAgKiBOdW1lcmljIG1vZGUgZW5jb2RlcyBkYXRhIGZyb20gdGhlIGRlY2ltYWwgZGlnaXQgc2V0ICgwIC0gOSlcbiAgICAgKiAoYnl0ZSB2YWx1ZXMgMzBIRVggdG8gMzlIRVgpLlxuICAgICAqIE5vcm1hbGx5LCAzIGRhdGEgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgMTAgYml0cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZXhwb3J0cy5OVU1FUklDID0ge1xuICAgICAgICBpZDogJ051bWVyaWMnLFxuICAgICAgICBiaXQ6IDEgPDwgMCxcbiAgICAgICAgY2NCaXRzOiBbMTAsIDEyLCAxNF1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFscGhhbnVtZXJpYyBtb2RlIGVuY29kZXMgZGF0YSBmcm9tIGEgc2V0IG9mIDQ1IGNoYXJhY3RlcnMsXG4gICAgICogaS5lLiAxMCBudW1lcmljIGRpZ2l0cyAoMCAtIDkpLFxuICAgICAqICAgICAgMjYgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIChBIC0gWiksXG4gICAgICogICBhbmQgOSBzeW1ib2xzIChTUCwgJCwgJSwgKiwgKywgLSwgLiwgLywgOikuXG4gICAgICogTm9ybWFsbHksIHR3byBpbnB1dCBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSAxMSBiaXRzLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBleHBvcnRzLkFMUEhBTlVNRVJJQyA9IHtcbiAgICAgICAgaWQ6ICdBbHBoYW51bWVyaWMnLFxuICAgICAgICBiaXQ6IDEgPDwgMSxcbiAgICAgICAgY2NCaXRzOiBbOSwgMTEsIDEzXVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW4gYnl0ZSBtb2RlLCBkYXRhIGlzIGVuY29kZWQgYXQgOCBiaXRzIHBlciBjaGFyYWN0ZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4cG9ydHMuQllURSA9IHtcbiAgICAgICAgaWQ6ICdCeXRlJyxcbiAgICAgICAgYml0OiAxIDw8IDIsXG4gICAgICAgIGNjQml0czogWzgsIDE2LCAxNl1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBLYW5qaSBtb2RlIGVmZmljaWVudGx5IGVuY29kZXMgS2FuamkgY2hhcmFjdGVycyBpbiBhY2NvcmRhbmNlIHdpdGhcbiAgICAgKiB0aGUgU2hpZnQgSklTIHN5c3RlbSBiYXNlZCBvbiBKSVMgWCAwMjA4LlxuICAgICAqIFRoZSBTaGlmdCBKSVMgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICAgICAqIEpJUyBYIDAyMDggZ2l2ZXMgZGV0YWlscyBvZiB0aGUgc2hpZnQgY29kZWQgcmVwcmVzZW50YXRpb24uXG4gICAgICogRWFjaCB0d28tYnl0ZSBjaGFyYWN0ZXIgdmFsdWUgaXMgY29tcGFjdGVkIHRvIGEgMTMtYml0IGJpbmFyeSBjb2Rld29yZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZXhwb3J0cy5LQU5KSSA9IHtcbiAgICAgICAgaWQ6ICdLYW5qaScsXG4gICAgICAgIGJpdDogMSA8PCAzLFxuICAgICAgICBjY0JpdHM6IFs4LCAxMCwgMTJdXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaXhlZCBtb2RlIHdpbGwgY29udGFpbiBhIHNlcXVlbmNlcyBvZiBkYXRhIGluIGEgY29tYmluYXRpb24gb2YgYW55IG9mXG4gICAgICogdGhlIG1vZGVzIGRlc2NyaWJlZCBhYm92ZVxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBleHBvcnRzLk1JWEVEID0ge1xuICAgICAgICBiaXQ6IC0xXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYml0cyBuZWVkZWQgdG8gc3RvcmUgdGhlIGRhdGEgbGVuZ3RoXG4gICAgICogYWNjb3JkaW5nIHRvIFFSIENvZGUgc3BlY2lmaWNhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgRGF0YSBtb2RlXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBOdW1iZXIgb2YgYml0c1xuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0Q2hhckNvdW50SW5kaWNhdG9yID0gZnVuY3Rpb24gZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG1vZGUsIHZlcnNpb24pIHtcbiAgICAgICAgaWYgKCFtb2RlLmNjQml0cylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlOiAnICsgbW9kZSk7XG4gICAgICAgIGlmICghdmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDwgMTApXG4gICAgICAgICAgICByZXR1cm4gbW9kZS5jY0JpdHNbMF07XG4gICAgICAgIGVsc2UgaWYgKHZlcnNpb24gPCAyNylcbiAgICAgICAgICAgIHJldHVybiBtb2RlLmNjQml0c1sxXTtcbiAgICAgICAgcmV0dXJuIG1vZGUuY2NCaXRzWzJdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbW9zdCBlZmZpY2llbnQgbW9kZSB0byBzdG9yZSB0aGUgc3BlY2lmaWVkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBkYXRhIHN0cmluZ1xuICAgICAqIEByZXR1cm4ge01vZGV9ICAgICAgICAgICBCZXN0IG1vZGVcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldEJlc3RNb2RlRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RNb2RlRm9yRGF0YShkYXRhU3RyKSB7XG4gICAgICAgIGlmIChyZWdleC50ZXN0TnVtZXJpYyhkYXRhU3RyKSlcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLk5VTUVSSUM7XG4gICAgICAgIGVsc2UgaWYgKHJlZ2V4LnRlc3RBbHBoYW51bWVyaWMoZGF0YVN0cikpXG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUM7XG4gICAgICAgIGVsc2UgaWYgKHJlZ2V4LnRlc3RLYW5qaShkYXRhU3RyKSlcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLktBTkpJO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5CWVRFO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1vZGUgbmFtZSBhcyBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kZX0gbW9kZSBNb2RlIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9ICBNb2RlIG5hbWVcbiAgICAgKi9cbiAgICBleHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcobW9kZSkge1xuICAgICAgICBpZiAobW9kZSAmJiBtb2RlLmlkKVxuICAgICAgICAgICAgcmV0dXJuIG1vZGUuaWQ7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpbnB1dCBwYXJhbSBpcyBhIHZhbGlkIG1vZGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7TW9kZX0gICAgbW9kZSBNb2RlIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHZhbGlkIG1vZGUsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQobW9kZSkge1xuICAgICAgICByZXR1cm4gbW9kZSAmJiBtb2RlLmJpdCAmJiBtb2RlLmNjQml0cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBtb2RlIG9iamVjdCBmcm9tIGl0cyBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7U3RyaW5nfSBzdHJpbmcgTW9kZSBuYW1lXG4gICAgICogQHJldHVybnMge01vZGV9ICAgICAgICAgIE1vZGUgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtIGlzIG5vdCBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsY1N0ciA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgICAgICAgICBjYXNlICdudW1lcmljJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5OVU1FUklDO1xuICAgICAgICAgICAgY2FzZSAnYWxwaGFudW1lcmljJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUM7XG4gICAgICAgICAgICBjYXNlICdrYW5qaSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuS0FOSkk7XG4gICAgICAgICAgICBjYXNlICdieXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5CWVRFO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZTogJyArIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtb2RlIGZyb20gYSB2YWx1ZS5cbiAgICAgKiBJZiB2YWx1ZSBpcyBub3QgYSB2YWxpZCBtb2RlLCByZXR1cm5zIGRlZmF1bHRWYWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TW9kZXxTdHJpbmd9IHZhbHVlICAgICAgICBFbmNvZGluZyBtb2RlXG4gICAgICogQHBhcmFtICB7TW9kZX0gICAgICAgIGRlZmF1bHRWYWx1ZSBGYWxsYmFjayB2YWx1ZVxuICAgICAqIEByZXR1cm4ge01vZGV9ICAgICAgICAgICAgICAgICAgICAgRW5jb2RpbmcgbW9kZVxuICAgICAqL1xuICAgIGV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20odmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG52YXIgdmVyc2lvbiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBHZW5lcmF0b3IgcG9seW5vbWlhbCB1c2VkIHRvIGVuY29kZSB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAgdmFyIEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMCk7XG4gICAgdmFyIEcxOF9CQ0ggPSB1dGlscy5nZXRCQ0hEaWdpdChHMTgpO1xuICAgIGZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aChtb2RlLCBsZW5ndGgsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gICAgICAgIGZvciAodmFyIGN1cnJlbnRWZXJzaW9uID0gMTsgY3VycmVudFZlcnNpb24gPD0gNDA7IGN1cnJlbnRWZXJzaW9uKyspIHtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPD0gZXhwb3J0cy5nZXRDYXBhY2l0eShjdXJyZW50VmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFJlc2VydmVkQml0c0NvdW50KG1vZGUkMSwgdmVyc2lvbikge1xuICAgICAgICAvLyBDaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yICsgbW9kZSBpbmRpY2F0b3IgYml0c1xuICAgICAgICByZXR1cm4gbW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3IobW9kZSQxLCB2ZXJzaW9uKSArIDQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRvdGFsQml0c0Zyb21EYXRhQXJyYXkoc2VnbWVudHMsIHZlcnNpb24pIHtcbiAgICAgICAgdmFyIHRvdGFsQml0cyA9IDA7XG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXNlcnZlZEJpdHMgPSBnZXRSZXNlcnZlZEJpdHNDb3VudChkYXRhLm1vZGUsIHZlcnNpb24pO1xuICAgICAgICAgICAgdG90YWxCaXRzICs9IHJlc2VydmVkQml0cyArIGRhdGEuZ2V0Qml0c0xlbmd0aCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRvdGFsQml0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEoc2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gICAgICAgIGZvciAodmFyIGN1cnJlbnRWZXJzaW9uID0gMTsgY3VycmVudFZlcnNpb24gPD0gNDA7IGN1cnJlbnRWZXJzaW9uKyspIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5KHNlZ21lbnRzLCBjdXJyZW50VmVyc2lvbik7XG4gICAgICAgICAgICBpZiAobGVuZ3RoIDw9IGV4cG9ydHMuZ2V0Q2FwYWNpdHkoY3VycmVudFZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlLk1JWEVEKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHZlcnNpb24gbnVtYmVyIGZyb20gYSB2YWx1ZS5cbiAgICAgKiBJZiB2YWx1ZSBpcyBub3QgYSB2YWxpZCB2ZXJzaW9uLCByZXR1cm5zIGRlZmF1bHRWYWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gdmFsdWUgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICAgICAgIGRlZmF1bHRWYWx1ZSBGYWxsYmFjayB2YWx1ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gbnVtYmVyXG4gICAgICovXG4gICAgZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uQ2hlY2suaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhvdyBtdWNoIGRhdGEgY2FuIGJlIHN0b3JlZCB3aXRoIHRoZSBzcGVjaWZpZWQgUVIgY29kZSB2ZXJzaW9uXG4gICAgICogYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uICgxLTQwKVxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICAgICAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSAgICAgICAgICAgICAgICAgRGF0YSBtb2RlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBRdWFudGl0eSBvZiBzdG9yYWJsZSBkYXRhXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRDYXBhY2l0eSA9IGZ1bmN0aW9uIGdldENhcGFjaXR5KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlJDEpIHtcbiAgICAgICAgaWYgKCF2ZXJzaW9uQ2hlY2suaXNWYWxpZCh2ZXJzaW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFFSIENvZGUgdmVyc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZSBCeXRlIG1vZGUgYXMgZGVmYXVsdFxuICAgICAgICBpZiAodHlwZW9mIG1vZGUkMSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBtb2RlJDEgPSBtb2RlLkJZVEU7XG4gICAgICAgIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICAgICAgICB2YXIgdG90YWxDb2Rld29yZHMgPSB1dGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKTtcbiAgICAgICAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gICAgICAgIHZhciBlY1RvdGFsQ29kZXdvcmRzID0gZXJyb3JDb3JyZWN0aW9uQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKTtcbiAgICAgICAgLy8gVG90YWwgbnVtYmVyIG9mIGRhdGEgY29kZXdvcmRzXG4gICAgICAgIHZhciBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4O1xuICAgICAgICBpZiAobW9kZSQxID09PSBtb2RlLk1JWEVEKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHM7XG4gICAgICAgIHZhciB1c2FibGVCaXRzID0gZGF0YVRvdGFsQ29kZXdvcmRzQml0cyAtIGdldFJlc2VydmVkQml0c0NvdW50KG1vZGUkMSwgdmVyc2lvbik7XG4gICAgICAgIC8vIFJldHVybiBtYXggbnVtYmVyIG9mIHN0b3JhYmxlIGNvZGV3b3Jkc1xuICAgICAgICBzd2l0Y2ggKG1vZGUkMSkge1xuICAgICAgICAgICAgY2FzZSBtb2RlLk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHVzYWJsZUJpdHMgLyAxMCkgKiAzKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHVzYWJsZUJpdHMgLyAxMSkgKiAyKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5LQU5KSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih1c2FibGVCaXRzIC8gMTMpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLkJZVEU6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHVzYWJsZUJpdHMgLyA4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2ZXJzaW9uIG5lZWRlZCB0byBjb250YWluIHRoZSBhbW91bnQgb2YgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U2VnbWVudH0gZGF0YSAgICAgICAgICAgICAgICAgICAgU2VnbWVudCBvZiBkYXRhXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBbZXJyb3JDb3JyZWN0aW9uTGV2ZWw9SF0gRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICAgICAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgICAgICAgICAgICAgICAgICAgIERhdGEgbW9kZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0QmVzdFZlcnNpb25Gb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdFZlcnNpb25Gb3JEYXRhKGRhdGEsIGVycm9yQ29ycmVjdGlvbkxldmVsJDEpIHtcbiAgICAgICAgdmFyIHNlZztcbiAgICAgICAgdmFyIGVjbCA9IGVycm9yQ29ycmVjdGlvbkxldmVsLmZyb20oZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTSk7XG4gICAgICAgIGlmIChpc2FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhKGRhdGEsIGVjbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlZyA9IGRhdGFbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWcgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGgoc2VnLm1vZGUsIHNlZy5nZXRMZW5ndGgoKSwgZWNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmVyc2lvbiBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICAgICAqXG4gICAgICogVGhlIHZlcnNpb24gaW5mb3JtYXRpb24gaXMgaW5jbHVkZWQgaW4gUVIgQ29kZSBzeW1ib2xzIG9mIHZlcnNpb24gNyBvciBsYXJnZXIuXG4gICAgICogSXQgY29uc2lzdHMgb2YgYW4gMTgtYml0IHNlcXVlbmNlIGNvbnRhaW5pbmcgNiBkYXRhIGJpdHMsXG4gICAgICogd2l0aCAxMiBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE4LCA2KSBHb2xheSBjb2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBFbmNvZGVkIHZlcnNpb24gaW5mbyBiaXRzXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzKHZlcnNpb24pIHtcbiAgICAgICAgaWYgKCF2ZXJzaW9uQ2hlY2suaXNWYWxpZCh2ZXJzaW9uKSB8fCB2ZXJzaW9uIDwgNykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFFSIENvZGUgdmVyc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gdmVyc2lvbiA8PCAxMjtcbiAgICAgICAgd2hpbGUgKHV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE4X0JDSCA+PSAwKSB7XG4gICAgICAgICAgICBkIF49IChHMTggPDwgKHV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE4X0JDSCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodmVyc2lvbiA8PCAxMikgfCBkO1xuICAgIH07XG59KTtcbnZhciBHMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCk7XG52YXIgRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMCkgfCAoMSA8PCA0KSB8ICgxIDw8IDEpO1xudmFyIEcxNV9CQ0ggPSB1dGlscy5nZXRCQ0hEaWdpdChHMTUpO1xuLyoqXG4gKiBSZXR1cm5zIGZvcm1hdCBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIFRoZSBmb3JtYXQgaW5mb3JtYXRpb24gaXMgYSAxNS1iaXQgc2VxdWVuY2UgY29udGFpbmluZyA1IGRhdGEgYml0cyxcbiAqIHdpdGggMTAgZXJyb3IgY29ycmVjdGlvbiBiaXRzIGNhbGN1bGF0ZWQgdXNpbmcgdGhlICgxNSwgNSkgQkNIIGNvZGUuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1hc2sgICAgICAgICAgICAgICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVkIGZvcm1hdCBpbmZvcm1hdGlvbiBiaXRzXG4gKi9cbnZhciBnZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzKGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrKSB7XG4gICAgdmFyIGRhdGEgPSAoKGVycm9yQ29ycmVjdGlvbkxldmVsLmJpdCA8PCAzKSB8IG1hc2spO1xuICAgIHZhciBkID0gZGF0YSA8PCAxMDtcbiAgICB3aGlsZSAodXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMTVfQkNIID49IDApIHtcbiAgICAgICAgZCBePSAoRzE1IDw8ICh1dGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxNV9CQ0gpKTtcbiAgICB9XG4gICAgLy8geG9yIGZpbmFsIGRhdGEgd2l0aCBtYXNrIHBhdHRlcm4gaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBubyBjb21iaW5hdGlvbiBvZiBFcnJvciBDb3JyZWN0aW9uIExldmVsIGFuZCBkYXRhIG1hc2sgcGF0dGVyblxuICAgIC8vIHdpbGwgcmVzdWx0IGluIGFuIGFsbC16ZXJvIGRhdGEgc3RyaW5nXG4gICAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIEcxNV9NQVNLO1xufTtcbnZhciBmb3JtYXRJbmZvID0ge1xuICAgIGdldEVuY29kZWRCaXRzOiBnZXRFbmNvZGVkQml0c1xufTtcbmZ1bmN0aW9uIE51bWVyaWNEYXRhKGRhdGEpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlLk5VTUVSSUM7XG4gICAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpO1xufVxuTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgobGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwICogTWF0aC5mbG9vcihsZW5ndGggLyAzKSArICgobGVuZ3RoICUgMykgPyAoKGxlbmd0aCAlIDMpICogMyArIDEpIDogMCk7XG59O1xuTnVtZXJpY0RhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbn07XG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgoKSB7XG4gICAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aCk7XG59O1xuTnVtZXJpY0RhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUoYml0QnVmZmVyKSB7XG4gICAgdmFyIGksIGdyb3VwLCB2YWx1ZTtcbiAgICAvLyBUaGUgaW5wdXQgZGF0YSBzdHJpbmcgaXMgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0aHJlZSBkaWdpdHMsXG4gICAgLy8gYW5kIGVhY2ggZ3JvdXAgaXMgY29udmVydGVkIHRvIGl0cyAxMC1iaXQgYmluYXJ5IGVxdWl2YWxlbnQuXG4gICAgZm9yIChpID0gMDsgaSArIDMgPD0gdGhpcy5kYXRhLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGdyb3VwID0gdGhpcy5kYXRhLnN1YnN0cihpLCAzKTtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApO1xuICAgICAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgaW5wdXQgZGlnaXRzIGlzIG5vdCBhbiBleGFjdCBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgICAvLyB0aGUgZmluYWwgb25lIG9yIHR3byBkaWdpdHMgYXJlIGNvbnZlcnRlZCB0byA0IG9yIDcgYml0cyByZXNwZWN0aXZlbHkuXG4gICAgdmFyIHJlbWFpbmluZ051bSA9IHRoaXMuZGF0YS5sZW5ndGggLSBpO1xuICAgIGlmIChyZW1haW5pbmdOdW0gPiAwKSB7XG4gICAgICAgIGdyb3VwID0gdGhpcy5kYXRhLnN1YnN0cihpKTtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApO1xuICAgICAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCByZW1haW5pbmdOdW0gKiAzICsgMSk7XG4gICAgfVxufTtcbnZhciBudW1lcmljRGF0YSA9IE51bWVyaWNEYXRhO1xuLyoqXG4gKiBBcnJheSBvZiBjaGFyYWN0ZXJzIGF2YWlsYWJsZSBpbiBhbHBoYW51bWVyaWMgbW9kZVxuICpcbiAqIEFzIHBlciBRUiBDb2RlIHNwZWNpZmljYXRpb24sIHRvIGVhY2ggY2hhcmFjdGVyXG4gKiBpcyBhc3NpZ25lZCBhIHZhbHVlIGZyb20gMCB0byA0NCB3aGljaCBpbiB0aGlzIGNhc2UgY29pbmNpZGVzXG4gKiB3aXRoIHRoZSBhcnJheSBpbmRleFxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIEFMUEhBX05VTV9DSEFSUyA9IFtcbiAgICAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAgICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJyxcbiAgICAnICcsICckJywgJyUnLCAnKicsICcrJywgJy0nLCAnLicsICcvJywgJzonXG5dO1xuZnVuY3Rpb24gQWxwaGFudW1lcmljRGF0YShkYXRhKSB7XG4gICAgdGhpcy5tb2RlID0gbW9kZS5BTFBIQU5VTUVSSUM7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbkFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgobGVuZ3RoKSB7XG4gICAgcmV0dXJuIDExICogTWF0aC5mbG9vcihsZW5ndGggLyAyKSArIDYgKiAobGVuZ3RoICUgMik7XG59O1xuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xufTtcbkFscGhhbnVtZXJpY0RhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoKCkge1xuICAgIHJldHVybiBBbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aCk7XG59O1xuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZShiaXRCdWZmZXIpIHtcbiAgICB2YXIgaTtcbiAgICAvLyBJbnB1dCBkYXRhIGNoYXJhY3RlcnMgYXJlIGRpdmlkZWQgaW50byBncm91cHMgb2YgdHdvIGNoYXJhY3RlcnNcbiAgICAvLyBhbmQgZW5jb2RlZCBhcyAxMS1iaXQgYmluYXJ5IGNvZGVzLlxuICAgIGZvciAoaSA9IDA7IGkgKyAyIDw9IHRoaXMuZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgbXVsdGlwbGllZCBieSA0NVxuICAgICAgICB2YXIgdmFsdWUgPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaV0pICogNDU7XG4gICAgICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIHNlY29uZCBkaWdpdCBpcyBhZGRlZCB0byB0aGUgcHJvZHVjdFxuICAgICAgICB2YWx1ZSArPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaSArIDFdKTtcbiAgICAgICAgLy8gVGhlIHN1bSBpcyB0aGVuIHN0b3JlZCBhcyAxMS1iaXQgYmluYXJ5IG51bWJlclxuICAgICAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMSk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgaW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGlzIG5vdCBhIG11bHRpcGxlIG9mIHR3byxcbiAgICAvLyB0aGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaW5hbCBjaGFyYWN0ZXIgaXMgZW5jb2RlZCBhcyBhIDYtYml0IGJpbmFyeSBudW1iZXIuXG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggJSAyKSB7XG4gICAgICAgIGJpdEJ1ZmZlci5wdXQoQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSwgNik7XG4gICAgfVxufTtcbnZhciBhbHBoYW51bWVyaWNEYXRhID0gQWxwaGFudW1lcmljRGF0YTtcbmZ1bmN0aW9uIEJ5dGVEYXRhKGRhdGEpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlLkJZVEU7XG4gICAgdGhpcy5kYXRhID0gdHlwZWRhcnJheUJ1ZmZlci5mcm9tKGRhdGEpO1xufVxuQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgobGVuZ3RoKSB7XG4gICAgcmV0dXJuIGxlbmd0aCAqIDg7XG59O1xuQnl0ZURhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbn07XG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgoKSB7XG4gICAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aCk7XG59O1xuQnl0ZURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBiaXRCdWZmZXIucHV0KHRoaXMuZGF0YVtpXSwgOCk7XG4gICAgfVxufTtcbnZhciBieXRlRGF0YSA9IEJ5dGVEYXRhO1xuZnVuY3Rpb24gS2FuamlEYXRhKGRhdGEpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlLktBTkpJO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG59XG5LYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgobGVuZ3RoKSB7XG4gICAgcmV0dXJuIGxlbmd0aCAqIDEzO1xufTtcbkthbmppRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xufTtcbkthbmppRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgoKSB7XG4gICAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpO1xufTtcbkthbmppRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gICAgdmFyIGk7XG4gICAgLy8gSW4gdGhlIFNoaWZ0IEpJUyBzeXN0ZW0sIEthbmppIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgdHdvIGJ5dGUgY29tYmluYXRpb24uXG4gICAgLy8gVGhlc2UgYnl0ZSB2YWx1ZXMgYXJlIHNoaWZ0ZWQgZnJvbSB0aGUgSklTIFggMDIwOCB2YWx1ZXMuXG4gICAgLy8gSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHV0aWxzLnRvU0pJUyh0aGlzLmRhdGFbaV0pO1xuICAgICAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweDgxNDAgdG8gMHg5RkZDOlxuICAgICAgICBpZiAodmFsdWUgPj0gMHg4MTQwICYmIHZhbHVlIDw9IDB4OUZGQykge1xuICAgICAgICAgICAgLy8gU3VidHJhY3QgMHg4MTQwIGZyb20gU2hpZnQgSklTIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZSAtPSAweDgxNDA7XG4gICAgICAgICAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweEUwNDAgdG8gMHhFQkJGXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPj0gMHhFMDQwICYmIHZhbHVlIDw9IDB4RUJCRikge1xuICAgICAgICAgICAgLy8gU3VidHJhY3QgMHhDMTQwIGZyb20gU2hpZnQgSklTIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZSAtPSAweEMxNDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgU0pJUyBjaGFyYWN0ZXI6ICcgKyB0aGlzLmRhdGFbaV0gKyAnXFxuJyArXG4gICAgICAgICAgICAgICAgJ01ha2Ugc3VyZSB5b3VyIGNoYXJzZXQgaXMgVVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNdWx0aXBseSBtb3N0IHNpZ25pZmljYW50IGJ5dGUgb2YgcmVzdWx0IGJ5IDB4QzBcbiAgICAgICAgLy8gYW5kIGFkZCBsZWFzdCBzaWduaWZpY2FudCBieXRlIHRvIHByb2R1Y3RcbiAgICAgICAgdmFsdWUgPSAoKCh2YWx1ZSA+Pj4gOCkgJiAweGZmKSAqIDB4QzApICsgKHZhbHVlICYgMHhmZik7XG4gICAgICAgIC8vIENvbnZlcnQgcmVzdWx0IHRvIGEgMTMtYml0IGJpbmFyeSBzdHJpbmdcbiAgICAgICAgYml0QnVmZmVyLnB1dCh2YWx1ZSwgMTMpO1xuICAgIH1cbn07XG52YXIga2FuamlEYXRhID0gS2FuamlEYXRhO1xudmFyIGRpamtzdHJhXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIENyZWF0ZWQgMjAwOC0wOC0xOS5cbiAgICAgKlxuICAgICAqIERpamtzdHJhIHBhdGgtZmluZGluZyBmdW5jdGlvbnMuIEFkYXB0ZWQgZnJvbSB0aGUgRGlqa3N0YXIgUHl0aG9uIHByb2plY3QuXG4gICAgICpcbiAgICAgKiBDb3B5cmlnaHQgKEMpIDIwMDhcbiAgICAgKiAgIFd5YXR0IEJhbGR3aW4gPHNlbGZAd3lhdHRiYWxkd2luLmNvbT5cbiAgICAgKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAgICAgKlxuICAgICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAgICAgKlxuICAgICAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgICAgKlxuICAgICAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICAgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICAgKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgICAgKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAgICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICAgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gICAgICogVEhFIFNPRlRXQVJFLlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB2YXIgZGlqa3N0cmEgPSB7XG4gICAgICAgIHNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHM6IGZ1bmN0aW9uIChncmFwaCwgcywgZCkge1xuICAgICAgICAgICAgLy8gUHJlZGVjZXNzb3IgbWFwIGZvciBlYWNoIG5vZGUgdGhhdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICAgICAgICAgIC8vIG5vZGUgSUQgPT4gcHJlZGVjZXNzb3Igbm9kZSBJRFxuICAgICAgICAgICAgdmFyIHByZWRlY2Vzc29ycyA9IHt9O1xuICAgICAgICAgICAgLy8gQ29zdHMgb2Ygc2hvcnRlc3QgcGF0aHMgZnJvbSBzIHRvIGFsbCBub2RlcyBlbmNvdW50ZXJlZC5cbiAgICAgICAgICAgIC8vIG5vZGUgSUQgPT4gY29zdFxuICAgICAgICAgICAgdmFyIGNvc3RzID0ge307XG4gICAgICAgICAgICBjb3N0c1tzXSA9IDA7XG4gICAgICAgICAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkOyBkaWZmZXJzIGZyb21cbiAgICAgICAgICAgIC8vIGBjb3N0c2AgaW4gdGhhdCBpdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byB0aGUgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXNcbiAgICAgICAgICAgIC8vIHRoZSBrbm93biBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgICAgICAgIC8vIFhYWDogRG8gd2UgYWN0dWFsbHkgbmVlZCBib3RoIGBjb3N0c2AgYW5kIGBvcGVuYD9cbiAgICAgICAgICAgIHZhciBvcGVuID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZS5tYWtlKCk7XG4gICAgICAgICAgICBvcGVuLnB1c2gocywgMCk7XG4gICAgICAgICAgICB2YXIgY2xvc2VzdCwgdSwgdiwgY29zdF9vZl9zX3RvX3UsIGFkamFjZW50X25vZGVzLCBjb3N0X29mX2UsIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lLCBjb3N0X29mX3NfdG9fdiwgZmlyc3RfdmlzaXQ7XG4gICAgICAgICAgICB3aGlsZSAoIW9wZW4uZW1wdHkoKSkge1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBub2RlcyByZW1haW5pbmcgaW4gZ3JhcGggdGhhdCBoYXZlIGEga25vd24gY29zdCBmcm9tIHMsXG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgbm9kZSwgdSwgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gb3Blbi5wb3AoKTtcbiAgICAgICAgICAgICAgICB1ID0gY2xvc2VzdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb3N0X29mX3NfdG9fdSA9IGNsb3Nlc3QuY29zdDtcbiAgICAgICAgICAgICAgICAvLyBHZXQgbm9kZXMgYWRqYWNlbnQgdG8gdS4uLlxuICAgICAgICAgICAgICAgIGFkamFjZW50X25vZGVzID0gZ3JhcGhbdV0gfHwge307XG4gICAgICAgICAgICAgICAgLy8gLi4uYW5kIGV4cGxvcmUgdGhlIGVkZ2VzIHRoYXQgY29ubmVjdCB1IHRvIHRob3NlIG5vZGVzLCB1cGRhdGluZ1xuICAgICAgICAgICAgICAgIC8vIHRoZSBjb3N0IG9mIHRoZSBzaG9ydGVzdCBwYXRocyB0byBhbnkgb3IgYWxsIG9mIHRob3NlIG5vZGVzIGFzXG4gICAgICAgICAgICAgICAgLy8gbmVjZXNzYXJ5LiB2IGlzIHRoZSBub2RlIGFjcm9zcyB0aGUgY3VycmVudCBlZGdlIGZyb20gdS5cbiAgICAgICAgICAgICAgICBmb3IgKHYgaW4gYWRqYWNlbnRfbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkamFjZW50X25vZGVzLmhhc093blByb3BlcnR5KHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvc3Qgb2YgdGhlIGVkZ2UgcnVubmluZyBmcm9tIHUgdG8gdi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Rfb2ZfZSA9IGFkamFjZW50X25vZGVzW3ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29zdCBvZiBzIHRvIHUgcGx1cyB0aGUgY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUtLXRoaXMgaXMgKmEqXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3N0IGZyb20gcyB0byB2IHRoYXQgbWF5IG9yIG1heSBub3QgYmUgbGVzcyB0aGFuIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBrbm93biBjb3N0IHRvIHYuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSA9IGNvc3Rfb2Zfc190b191ICsgY29zdF9vZl9lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB2aXNpdGVkIHYgeWV0IE9SIGlmIHRoZSBjdXJyZW50IGtub3duIGNvc3QgZnJvbSBzIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbmV3IGNvc3Qgd2UganVzdCBmb3VuZCAoY29zdCBvZiBzIHRvIHUgcGx1c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUpLCB1cGRhdGUgdidzIGNvc3QgaW4gdGhlIGNvc3QgbGlzdCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB2J3MgcHJlZGVjZXNzb3IgaW4gdGhlIHByZWRlY2Vzc29yIGxpc3QgKGl0J3Mgbm93IHUpLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29zdF9vZl9zX3RvX3YgPSBjb3N0c1t2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X3Zpc2l0ID0gKHR5cGVvZiBjb3N0c1t2XSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X3Zpc2l0IHx8IGNvc3Rfb2Zfc190b192ID4gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0c1t2XSA9IGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW4ucHVzaCh2LCBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGVjZXNzb3JzW3ZdID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvc3RzW2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBbJ0NvdWxkIG5vdCBmaW5kIGEgcGF0aCBmcm9tICcsIHMsICcgdG8gJywgZCwgJy4nXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhY3Rfc2hvcnRlc3RfcGF0aF9mcm9tX3ByZWRlY2Vzc29yX2xpc3Q6IGZ1bmN0aW9uIChwcmVkZWNlc3NvcnMsIGQpIHtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHUgPSBkO1xuICAgICAgICAgICAgd2hpbGUgKHUpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHUpO1xuICAgICAgICAgICAgICAgIHUgPSBwcmVkZWNlc3NvcnNbdV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2Rlcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmRfcGF0aDogZnVuY3Rpb24gKGdyYXBoLCBzLCBkKSB7XG4gICAgICAgICAgICB2YXIgcHJlZGVjZXNzb3JzID0gZGlqa3N0cmEuc2luZ2xlX3NvdXJjZV9zaG9ydGVzdF9wYXRocyhncmFwaCwgcywgZCk7XG4gICAgICAgICAgICByZXR1cm4gZGlqa3N0cmEuZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdChwcmVkZWNlc3NvcnMsIGQpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQSB2ZXJ5IG5haXZlIHByaW9yaXR5IHF1ZXVlIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgUHJpb3JpdHlRdWV1ZToge1xuICAgICAgICAgICAgbWFrZTogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgVCA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUsIHQgPSB7fSwga2V5O1xuICAgICAgICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIFQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdFtrZXldID0gVFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQucXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICB0LnNvcnRlciA9IG9wdHMuc29ydGVyIHx8IFQuZGVmYXVsdF9zb3J0ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdF9zb3J0ZXI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuY29zdCAtIGIuY29zdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBhIG5ldyBpdGVtIHRvIHRoZSBxdWV1ZSBhbmQgZW5zdXJlIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnRcbiAgICAgICAgICAgICAqIGlzIGF0IHRoZSBmcm9udCBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uICh2YWx1ZSwgY29zdCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geyB2YWx1ZTogdmFsdWUsIGNvc3Q6IGNvc3QgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZS5zb3J0KHRoaXMuc29ydGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gbm9kZS5qcyBtb2R1bGUgZXhwb3J0c1xuICAgIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcbiAgICB9XG59KTtcbnZhciBzZWdtZW50cyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFVURjggYnl0ZSBsZW5ndGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIElucHV0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgIE51bWJlciBvZiBieXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U3RyaW5nQnl0ZUxlbmd0aChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Qgb2Ygc2VnbWVudHMgb2YgdGhlIHNwZWNpZmllZCBtb2RlXG4gICAgICogZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7TW9kZX0gICBtb2RlIFNlZ21lbnQgbW9kZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gc3RyICBTdHJpbmcgdG8gcHJvY2Vzc1xuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U2VnbWVudHMocmVnZXgsIG1vZGUsIHN0cikge1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRbMF0sXG4gICAgICAgICAgICAgICAgaW5kZXg6IHJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogcmVzdWx0WzBdLmxlbmd0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBhIHNlcmllcyBvZiBzZWdtZW50cyB3aXRoIHRoZSBhcHByb3ByaWF0ZVxuICAgICAqIG1vZGVzIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhU3RyKSB7XG4gICAgICAgIHZhciBudW1TZWdzID0gZ2V0U2VnbWVudHMocmVnZXguTlVNRVJJQywgbW9kZS5OVU1FUklDLCBkYXRhU3RyKTtcbiAgICAgICAgdmFyIGFscGhhTnVtU2VncyA9IGdldFNlZ21lbnRzKHJlZ2V4LkFMUEhBTlVNRVJJQywgbW9kZS5BTFBIQU5VTUVSSUMsIGRhdGFTdHIpO1xuICAgICAgICB2YXIgYnl0ZVNlZ3M7XG4gICAgICAgIHZhciBrYW5qaVNlZ3M7XG4gICAgICAgIGlmICh1dGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgYnl0ZVNlZ3MgPSBnZXRTZWdtZW50cyhyZWdleC5CWVRFLCBtb2RlLkJZVEUsIGRhdGFTdHIpO1xuICAgICAgICAgICAga2FuamlTZWdzID0gZ2V0U2VnbWVudHMocmVnZXguS0FOSkksIG1vZGUuS0FOSkksIGRhdGFTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnl0ZVNlZ3MgPSBnZXRTZWdtZW50cyhyZWdleC5CWVRFX0tBTkpJLCBtb2RlLkJZVEUsIGRhdGFTdHIpO1xuICAgICAgICAgICAga2FuamlTZWdzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlZ3MgPSBudW1TZWdzLmNvbmNhdChhbHBoYU51bVNlZ3MsIGJ5dGVTZWdzLCBrYW5qaVNlZ3MpO1xuICAgICAgICByZXR1cm4gc2Vnc1xuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKHMxLCBzMikge1xuICAgICAgICAgICAgcmV0dXJuIHMxLmluZGV4IC0gczIuaW5kZXg7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgICAgICAgICAgbW9kZTogb2JqLm1vZGUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBvYmoubGVuZ3RoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBob3cgbWFueSBiaXRzIGFyZSBuZWVkZWQgdG8gZW5jb2RlIGEgc3RyaW5nIG9mXG4gICAgICogc3BlY2lmaWVkIGxlbmd0aCB3aXRoIHRoZSBzcGVjaWZpZWQgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBsZW5ndGggU3RyaW5nIGxlbmd0aFxuICAgICAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgIFNlZ21lbnQgbW9kZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgIEJpdCBsZW5ndGhcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTZWdtZW50Qml0c0xlbmd0aChsZW5ndGgsIG1vZGUkMSkge1xuICAgICAgICBzd2l0Y2ggKG1vZGUkMSkge1xuICAgICAgICAgICAgY2FzZSBtb2RlLk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLktBTkpJOlxuICAgICAgICAgICAgICAgIHJldHVybiBrYW5qaURhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLkJZVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYWRqYWNlbnQgc2VnbWVudHMgd2hpY2ggaGF2ZSB0aGUgc2FtZSBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gc2VncyBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1lcmdlU2VnbWVudHMoc2Vncykge1xuICAgICAgICByZXR1cm4gc2Vncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgICAgICAgICAgdmFyIHByZXZTZWcgPSBhY2MubGVuZ3RoIC0gMSA+PSAwID8gYWNjW2FjYy5sZW5ndGggLSAxXSA6IG51bGw7XG4gICAgICAgICAgICBpZiAocHJldlNlZyAmJiBwcmV2U2VnLm1vZGUgPT09IGN1cnIubW9kZSkge1xuICAgICAgICAgICAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0uZGF0YSArPSBjdXJyLmRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjYy5wdXNoKGN1cnIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBub2RlcyBjb21iaW5hdGlvbiB3aGljaFxuICAgICAqIHdpbGwgYmUgdXNlZCB0byBidWlsZCBhIHNlZ21lbnRzIGdyYXBoLlxuICAgICAqXG4gICAgICogTm9kZXMgYXJlIGRpdmlkZWQgYnkgZ3JvdXBzLiBFYWNoIGdyb3VwIHdpbGwgY29udGFpbiBhIGxpc3Qgb2YgYWxsIHRoZSBtb2Rlc1xuICAgICAqIGluIHdoaWNoIGlzIHBvc3NpYmxlIHRvIGVuY29kZSB0aGUgZ2l2ZW4gdGV4dC5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlIHRoZSB0ZXh0ICcxMjM0NScgY2FuIGJlIGVuY29kZWQgYXMgTnVtZXJpYywgQWxwaGFudW1lcmljIG9yIEJ5dGUuXG4gICAgICogVGhlIGdyb3VwIGZvciAnMTIzNDUnIHdpbGwgY29udGFpbiB0aGVuIDMgb2JqZWN0cywgb25lIGZvciBlYWNoXG4gICAgICogcG9zc2libGUgZW5jb2RpbmcgbW9kZS5cbiAgICAgKlxuICAgICAqIEVhY2ggbm9kZSByZXByZXNlbnRzIGEgcG9zc2libGUgc2VnbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gYnVpbGROb2RlcyhzZWdzKSB7XG4gICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZWcgPSBzZWdzW2ldO1xuICAgICAgICAgICAgc3dpdGNoIChzZWcubW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgbW9kZS5OVU1FUklDOlxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBtb2RlLkFMUEhBTlVNRVJJQywgbGVuZ3RoOiBzZWcubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBtb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIG1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBtb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIG1vZGUuS0FOSkk6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IG1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIG1vZGUuQllURTpcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBtb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIGdyYXBoIGZyb20gYSBsaXN0IG9mIG5vZGVzLlxuICAgICAqIEFsbCBzZWdtZW50cyBpbiBlYWNoIG5vZGUgZ3JvdXAgd2lsbCBiZSBjb25uZWN0ZWQgd2l0aCBhbGwgdGhlIHNlZ21lbnRzIG9mXG4gICAgICogdGhlIG5leHQgZ3JvdXAgYW5kIHNvIG9uLlxuICAgICAqXG4gICAgICogQXQgZWFjaCBjb25uZWN0aW9uIHdpbGwgYmUgYXNzaWduZWQgYSB3ZWlnaHQgZGVwZW5kaW5nIG9uIHRoZVxuICAgICAqIHNlZ21lbnQncyBieXRlIGxlbmd0aC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBub2RlcyAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBHcmFwaCBvZiBhbGwgcG9zc2libGUgc2VnbWVudHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBidWlsZEdyYXBoKG5vZGVzLCB2ZXJzaW9uKSB7XG4gICAgICAgIHZhciB0YWJsZSA9IHt9O1xuICAgICAgICB2YXIgZ3JhcGggPSB7ICdzdGFydCc6IHt9IH07XG4gICAgICAgIHZhciBwcmV2Tm9kZUlkcyA9IFsnc3RhcnQnXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGVHcm91cCA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlSWRzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5vZGVHcm91cC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbm9kZUdyb3VwW2pdO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSAnJyArIGkgKyBqO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlSWRzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0YWJsZVtrZXldID0geyBub2RlOiBub2RlLCBsYXN0Q291bnQ6IDAgfTtcbiAgICAgICAgICAgICAgICBncmFwaFtrZXldID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldk5vZGVJZCA9IHByZXZOb2RlSWRzW25dO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0gJiYgdGFibGVbcHJldk5vZGVJZF0ubm9kZS5tb2RlID09PSBub2RlLm1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoW3ByZXZOb2RlSWRdW2tleV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArIG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2VnbWVudEJpdHNMZW5ndGgodGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50LCBub2RlLm1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICs9IG5vZGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCA9IG5vZGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9IGdldFNlZ21lbnRCaXRzTGVuZ3RoKG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0ICsgbW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3Iobm9kZS5tb2RlLCB2ZXJzaW9uKTsgLy8gc3dpdGNoIGNvc3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZOb2RlSWRzID0gY3VycmVudE5vZGVJZHM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkc1tuXV1bJ2VuZCddID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtYXA6IGdyYXBoLCB0YWJsZTogdGFibGUgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgc2VnbWVudCBmcm9tIGEgc3BlY2lmaWVkIGRhdGEgYW5kIG1vZGUuXG4gICAgICogSWYgYSBtb2RlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBtb3JlIHN1aXRhYmxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gICAgICogQHBhcmFtICB7TW9kZSB8IFN0cmluZ30gbW9kZXNIaW50IERhdGEgbW9kZVxuICAgICAqIEByZXR1cm4ge1NlZ21lbnR9ICAgICAgICAgICAgICAgICBTZWdtZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gYnVpbGRTaW5nbGVTZWdtZW50KGRhdGEsIG1vZGVzSGludCkge1xuICAgICAgICB2YXIgbW9kZSQxO1xuICAgICAgICB2YXIgYmVzdE1vZGUgPSBtb2RlLmdldEJlc3RNb2RlRm9yRGF0YShkYXRhKTtcbiAgICAgICAgbW9kZSQxID0gbW9kZS5mcm9tKG1vZGVzSGludCwgYmVzdE1vZGUpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgZGF0YSBjYW4gYmUgZW5jb2RlZFxuICAgICAgICBpZiAobW9kZSQxICE9PSBtb2RlLkJZVEUgJiYgbW9kZSQxLmJpdCA8IGJlc3RNb2RlLmJpdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBkYXRhICsgJ1wiJyArXG4gICAgICAgICAgICAgICAgJyBjYW5ub3QgYmUgZW5jb2RlZCB3aXRoIG1vZGUgJyArIG1vZGUudG9TdHJpbmcobW9kZSQxKSArXG4gICAgICAgICAgICAgICAgJy5cXG4gU3VnZ2VzdGVkIG1vZGUgaXM6ICcgKyBtb2RlLnRvU3RyaW5nKGJlc3RNb2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIE1vZGUuQllURSBpZiBLYW5qaSBzdXBwb3J0IGlzIGRpc2FibGVkXG4gICAgICAgIGlmIChtb2RlJDEgPT09IG1vZGUuS0FOSkkgJiYgIXV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBtb2RlJDEgPSBtb2RlLkJZVEU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChtb2RlJDEpIHtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5OVU1FUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgbnVtZXJpY0RhdGEoZGF0YSk7XG4gICAgICAgICAgICBjYXNlIG1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYWxwaGFudW1lcmljRGF0YShkYXRhKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5LQU5KSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGthbmppRGF0YShkYXRhKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5CWVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYnl0ZURhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgbGlzdCBvZiBzZWdtZW50cyBmcm9tIGFuIGFycmF5LlxuICAgICAqIEFycmF5IGNhbiBjb250YWluIFN0cmluZ3Mgb3IgT2JqZWN0cyB3aXRoIHNlZ21lbnQncyBpbmZvLlxuICAgICAqXG4gICAgICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhIHN0cmluZywgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gICAgICogc3RyaW5nIGFuZCB0aGUgbW9yZSBhcHByb3ByaWF0ZSBlbmNvZGluZyBtb2RlLlxuICAgICAqXG4gICAgICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhbiBvYmplY3QsIHdpbGwgYmUgZ2VuZXJhdGVkIGEgc2VnbWVudCB3aXRoIHRoZSBnaXZlblxuICAgICAqIGRhdGEgYW5kIG1vZGUuXG4gICAgICogT2JqZWN0cyBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgdGhlIHByb3BlcnR5IFwiZGF0YVwiLlxuICAgICAqIElmIHByb3BlcnR5IFwibW9kZVwiIGlzIG5vdCBwcmVzZW50LCB0aGUgbW9yZSBzdWl0YWJsZSBtb2RlIHdpbGwgYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSBBcnJheSBvZiBvYmplY3RzIHdpdGggc2VnbWVudHMgZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBTZWdtZW50c1xuICAgICAqL1xuICAgIGV4cG9ydHMuZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc2VnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChidWlsZFNpbmdsZVNlZ21lbnQoc2VnLCBudWxsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzZWcuZGF0YSkge1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcuZGF0YSwgc2VnLm1vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhbiBvcHRpbWl6ZWQgc2VxdWVuY2Ugb2Ygc2VnbWVudHMgZnJvbSBhIHN0cmluZyxcbiAgICAgKiB3aGljaCB3aWxsIHByb2R1Y2UgdGhlIHNob3J0ZXN0IHBvc3NpYmxlIGJpdHN0cmVhbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICBJbnB1dCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIHNlZ21lbnRzXG4gICAgICovXG4gICAgZXhwb3J0cy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gZnJvbVN0cmluZyhkYXRhLCB2ZXJzaW9uKSB7XG4gICAgICAgIHZhciBzZWdzID0gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGEsIHV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKTtcbiAgICAgICAgdmFyIG5vZGVzID0gYnVpbGROb2RlcyhzZWdzKTtcbiAgICAgICAgdmFyIGdyYXBoID0gYnVpbGRHcmFwaChub2RlcywgdmVyc2lvbik7XG4gICAgICAgIHZhciBwYXRoID0gZGlqa3N0cmFfMS5maW5kX3BhdGgoZ3JhcGgubWFwLCAnc3RhcnQnLCAnZW5kJyk7XG4gICAgICAgIHZhciBvcHRpbWl6ZWRTZWdzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGltaXplZFNlZ3MucHVzaChncmFwaC50YWJsZVtwYXRoW2ldXS5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwb3J0cy5mcm9tQXJyYXkobWVyZ2VTZWdtZW50cyhvcHRpbWl6ZWRTZWdzKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGxpdHMgYSBzdHJpbmcgaW4gdmFyaW91cyBzZWdtZW50cyB3aXRoIHRoZSBtb2RlcyB3aGljaFxuICAgICAqIGJlc3QgcmVwcmVzZW50IHRoZWlyIGNvbnRlbnQuXG4gICAgICogVGhlIHByb2R1Y2VkIHNlZ21lbnRzIGFyZSBmYXIgZnJvbSBiZWluZyBvcHRpbWl6ZWQuXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB0byBlc3RpbWF0ZSBhIFFSIENvZGUgdmVyc2lvblxuICAgICAqIHdoaWNoIG1heSBjb250YWluIHRoZSBkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBkYXRhIElucHV0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICAgICAqL1xuICAgIGV4cG9ydHMucmF3U3BsaXQgPSBmdW5jdGlvbiByYXdTcGxpdChkYXRhKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmZyb21BcnJheShnZXRTZWdtZW50c0Zyb21TdHJpbmcoZGF0YSwgdXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpKTtcbiAgICB9O1xufSk7XG4vKipcbiAqIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuICpcbiAqIG1vZGlmaWVkIGJ5IFJ5YW4gRGF5IGZvciBub2RlanMgc3VwcG9ydFxuICogQ29weXJpZ2h0IChjKSAyMDExIFJ5YW4gRGF5XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRUkNvZGUgZm9yIEphdmFTY3JpcHRcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgS2F6dWhpa28gQXJhc2Vcbi8vXG4vLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4vLyAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4vL1xuLy8gVGhlIHdvcmQgXCJRUiBDb2RlXCIgaXMgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2Zcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXG4vLyAgIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8qKlxuICogQWRkIGZpbmRlciBwYXR0ZXJucyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEZpbmRlclBhdHRlcm4obWF0cml4LCB2ZXJzaW9uKSB7XG4gICAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZTtcbiAgICB2YXIgcG9zID0gZmluZGVyUGF0dGVybi5nZXRQb3NpdGlvbnModmVyc2lvbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJvdyA9IHBvc1tpXVswXTtcbiAgICAgICAgdmFyIGNvbCA9IHBvc1tpXVsxXTtcbiAgICAgICAgZm9yICh2YXIgciA9IC0xOyByIDw9IDc7IHIrKykge1xuICAgICAgICAgICAgaWYgKHJvdyArIHIgPD0gLTEgfHwgc2l6ZSA8PSByb3cgKyByKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDw9IC0xIHx8IHNpemUgPD0gY29sICsgYylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKChyID49IDAgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKSB8fFxuICAgICAgICAgICAgICAgICAgICAoYyA+PSAwICYmIGMgPD0gNiAmJiAociA9PT0gMCB8fCByID09PSA2KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHIgPj0gMiAmJiByIDw9IDQgJiYgYyA+PSAyICYmIGMgPD0gNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQWRkIHRpbWluZyBwYXR0ZXJuIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUge0BsaW5rIHNldHVwQWxpZ25tZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzZXR1cFRpbWluZ1BhdHRlcm4obWF0cml4KSB7XG4gICAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZTtcbiAgICBmb3IgKHZhciByID0gODsgciA8IHNpemUgLSA4OyByKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gciAlIDIgPT09IDA7XG4gICAgICAgIG1hdHJpeC5zZXQociwgNiwgdmFsdWUsIHRydWUpO1xuICAgICAgICBtYXRyaXguc2V0KDYsIHIsIHZhbHVlLCB0cnVlKTtcbiAgICB9XG59XG4vKipcbiAqIEFkZCBhbGlnbm1lbnQgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGFmdGVyIHtAbGluayBzZXR1cFRpbWluZ1BhdHRlcm59XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwQWxpZ25tZW50UGF0dGVybihtYXRyaXgsIHZlcnNpb24pIHtcbiAgICB2YXIgcG9zID0gYWxpZ25tZW50UGF0dGVybi5nZXRQb3NpdGlvbnModmVyc2lvbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJvdyA9IHBvc1tpXVswXTtcbiAgICAgICAgdmFyIGNvbCA9IHBvc1tpXVsxXTtcbiAgICAgICAgZm9yICh2YXIgciA9IC0yOyByIDw9IDI7IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDIgfHxcbiAgICAgICAgICAgICAgICAgICAgKHIgPT09IDAgJiYgYyA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQWRkIHZlcnNpb24gaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cFZlcnNpb25JbmZvKG1hdHJpeCwgdmVyc2lvbiQxKSB7XG4gICAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZTtcbiAgICB2YXIgYml0cyA9IHZlcnNpb24uZ2V0RW5jb2RlZEJpdHModmVyc2lvbiQxKTtcbiAgICB2YXIgcm93LCBjb2wsIG1vZDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gMyk7XG4gICAgICAgIGNvbCA9IGkgJSAzICsgc2l6ZSAtIDggLSAzO1xuICAgICAgICBtb2QgPSAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcbiAgICAgICAgbWF0cml4LnNldChyb3csIGNvbCwgbW9kLCB0cnVlKTtcbiAgICAgICAgbWF0cml4LnNldChjb2wsIHJvdywgbW9kLCB0cnVlKTtcbiAgICB9XG59XG4vKipcbiAqIEFkZCBmb3JtYXQgaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICAgICAgICAgICAgICAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSAgICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIG1hc2tQYXR0ZXJuICAgICAgICAgIE1hc2sgcGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2V0dXBGb3JtYXRJbmZvKG1hdHJpeCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gICAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZTtcbiAgICB2YXIgYml0cyA9IGZvcm1hdEluZm8uZ2V0RW5jb2RlZEJpdHMoZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKTtcbiAgICB2YXIgaSwgbW9kO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xuICAgICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgICBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgOCwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgICAgICAgbWF0cml4LnNldChpICsgMSwgOCwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoc2l6ZSAtIDE1ICsgaSwgOCwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgIGlmIChpIDwgOCkge1xuICAgICAgICAgICAgbWF0cml4LnNldCg4LCBzaXplIC0gaSAtIDEsIG1vZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8IDkpIHtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSArIDEsIG1vZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYXRyaXguc2V0KDgsIDE1IC0gaSAtIDEsIG1vZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZml4ZWQgbW9kdWxlXG4gICAgbWF0cml4LnNldChzaXplIC0gOCwgOCwgMSwgdHJ1ZSk7XG59XG4vKipcbiAqIEFkZCBlbmNvZGVkIGRhdGEgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7QnVmZmVyfSAgICBkYXRhICAgRGF0YSBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gc2V0dXBEYXRhKG1hdHJpeCwgZGF0YSkge1xuICAgIHZhciBzaXplID0gbWF0cml4LnNpemU7XG4gICAgdmFyIGluYyA9IC0xO1xuICAgIHZhciByb3cgPSBzaXplIC0gMTtcbiAgICB2YXIgYml0SW5kZXggPSA3O1xuICAgIHZhciBieXRlSW5kZXggPSAwO1xuICAgIGZvciAodmFyIGNvbCA9IHNpemUgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xuICAgICAgICBpZiAoY29sID09PSA2KVxuICAgICAgICAgICAgY29sLS07XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDI7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmICghbWF0cml4LmlzUmVzZXJ2ZWQocm93LCBjb2wgLSBjKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGFyayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAoKChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09PSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KHJvdywgY29sIC0gYywgZGFyayk7XG4gICAgICAgICAgICAgICAgICAgIGJpdEluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggPSA3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93ICs9IGluYztcbiAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHNpemUgPD0gcm93KSB7XG4gICAgICAgICAgICAgICAgcm93IC09IGluYztcbiAgICAgICAgICAgICAgICBpbmMgPSAtaW5jO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBDcmVhdGUgZW5jb2RlZCBjb2Rld29yZHMgZnJvbSBkYXRhIGlucHV0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7Qnl0ZURhdGF9IGRhdGEgICAgICAgICAgICAgICAgIERhdGEgaW5wdXRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gICAgICAgICAgICAgICAgICAgICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBjcmVhdGVEYXRhKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cykge1xuICAgIC8vIFByZXBhcmUgZGF0YSBidWZmZXJcbiAgICB2YXIgYnVmZmVyID0gbmV3IGJpdEJ1ZmZlcigpO1xuICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gcHJlZml4IGRhdGEgd2l0aCBtb2RlIGluZGljYXRvciAoNCBiaXRzKVxuICAgICAgICBidWZmZXIucHV0KGRhdGEubW9kZS5iaXQsIDQpO1xuICAgICAgICAvLyBQcmVmaXggZGF0YSB3aXRoIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IuXG4gICAgICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIGlzIGEgc3RyaW5nIG9mIGJpdHMgdGhhdCByZXByZXNlbnRzIHRoZVxuICAgICAgICAvLyBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBiZWluZyBlbmNvZGVkLlxuICAgICAgICAvLyBUaGUgY2hhcmFjdGVyIGNvdW50IGluZGljYXRvciBtdXN0IGJlIHBsYWNlZCBhZnRlciB0aGUgbW9kZSBpbmRpY2F0b3JcbiAgICAgICAgLy8gYW5kIG11c3QgYmUgYSBjZXJ0YWluIG51bWJlciBvZiBiaXRzIGxvbmcsIGRlcGVuZGluZyBvbiB0aGUgUVIgdmVyc2lvblxuICAgICAgICAvLyBhbmQgZGF0YSBtb2RlXG4gICAgICAgIC8vIEBzZWUge0BsaW5rIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yfS5cbiAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBtb2RlLmdldENoYXJDb3VudEluZGljYXRvcihkYXRhLm1vZGUsIHZlcnNpb24pKTtcbiAgICAgICAgLy8gYWRkIGJpbmFyeSBkYXRhIHNlcXVlbmNlIHRvIGJ1ZmZlclxuICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XG4gICAgfSk7XG4gICAgLy8gQ2FsY3VsYXRlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzXG4gICAgdmFyIHRvdGFsQ29kZXdvcmRzID0gdXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbik7XG4gICAgdmFyIGVjVG90YWxDb2Rld29yZHMgPSBlcnJvckNvcnJlY3Rpb25Db2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xuICAgIHZhciBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4O1xuICAgIC8vIEFkZCBhIHRlcm1pbmF0b3IuXG4gICAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cyxcbiAgICAvLyBhIHRlcm1pbmF0b3Igb2YgdXAgdG8gZm91ciAwcyBtdXN0IGJlIGFkZGVkIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzdHJpbmcuXG4gICAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgbW9yZSB0aGFuIGZvdXIgYml0cyBzaG9ydGVyIHRoYW4gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLFxuICAgIC8vIGFkZCBmb3VyIDBzIHRvIHRoZSBlbmQuXG4gICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gZGF0YVRvdGFsQ29kZXdvcmRzQml0cykge1xuICAgICAgICBidWZmZXIucHV0KDAsIDQpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgYml0IHN0cmluZyBpcyBmZXdlciB0aGFuIGZvdXIgYml0cyBzaG9ydGVyLCBhZGQgb25seSB0aGUgbnVtYmVyIG9mIDBzIHRoYXRcbiAgICAvLyBhcmUgbmVlZGVkIHRvIHJlYWNoIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYml0cy5cbiAgICAvLyBBZnRlciBhZGRpbmcgdGhlIHRlcm1pbmF0b3IsIGlmIHRoZSBudW1iZXIgb2YgYml0cyBpbiB0aGUgc3RyaW5nIGlzIG5vdCBhIG11bHRpcGxlIG9mIDgsXG4gICAgLy8gcGFkIHRoZSBzdHJpbmcgb24gdGhlIHJpZ2h0IHdpdGggMHMgdG8gbWFrZSB0aGUgc3RyaW5nJ3MgbGVuZ3RoIGEgbXVsdGlwbGUgb2YgOC5cbiAgICB3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPT0gMCkge1xuICAgICAgICBidWZmZXIucHV0Qml0KDApO1xuICAgIH1cbiAgICAvLyBBZGQgcGFkIGJ5dGVzIGlmIHRoZSBzdHJpbmcgaXMgc3RpbGwgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cy5cbiAgICAvLyBFeHRlbmQgdGhlIGJ1ZmZlciB0byBmaWxsIHRoZSBkYXRhIGNhcGFjaXR5IG9mIHRoZSBzeW1ib2wgY29ycmVzcG9uZGluZyB0b1xuICAgIC8vIHRoZSBWZXJzaW9uIGFuZCBFcnJvciBDb3JyZWN0aW9uIExldmVsIGJ5IGFkZGluZyB0aGUgUGFkIENvZGV3b3JkcyAxMTEwMTEwMCAoMHhFQylcbiAgICAvLyBhbmQgMDAwMTAwMDEgKDB4MTEpIGFsdGVybmF0ZWx5LlxuICAgIHZhciByZW1haW5pbmdCeXRlID0gKGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkpIC8gODtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbWFpbmluZ0J5dGU7IGkrKykge1xuICAgICAgICBidWZmZXIucHV0KGkgJSAyID8gMHgxMSA6IDB4RUMsIDgpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ29kZXdvcmRzKGJ1ZmZlciwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xufVxuLyoqXG4gKiBFbmNvZGUgaW5wdXQgZGF0YSB3aXRoIFJlZWQtU29sb21vbiBhbmQgcmV0dXJuIGNvZGV3b3JkcyB3aXRoXG4gKiByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBAcGFyYW0gIHtCaXRCdWZmZXJ9IGJpdEJ1ZmZlciAgICAgICAgICAgIERhdGEgdG8gZW5jb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEByZXR1cm4ge0J1ZmZlcn0gICAgICAgICAgICAgICAgICAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29kZXdvcmRzKGJpdEJ1ZmZlciwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgICAvLyBUb3RhbCBjb2Rld29yZHMgZm9yIHRoaXMgUVIgY29kZSB2ZXJzaW9uIChEYXRhICsgRXJyb3IgY29ycmVjdGlvbilcbiAgICB2YXIgdG90YWxDb2Rld29yZHMgPSB1dGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKTtcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgICB2YXIgZWNUb3RhbENvZGV3b3JkcyA9IGVycm9yQ29ycmVjdGlvbkNvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGRhdGEgY29kZXdvcmRzXG4gICAgdmFyIGRhdGFUb3RhbENvZGV3b3JkcyA9IHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcztcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgYmxvY2tzXG4gICAgdmFyIGVjVG90YWxCbG9ja3MgPSBlcnJvckNvcnJlY3Rpb25Db2RlLmdldEJsb2Nrc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKTtcbiAgICAvLyBDYWxjdWxhdGUgaG93IG1hbnkgYmxvY2tzIGVhY2ggZ3JvdXAgc2hvdWxkIGNvbnRhaW5cbiAgICB2YXIgYmxvY2tzSW5Hcm91cDIgPSB0b3RhbENvZGV3b3JkcyAlIGVjVG90YWxCbG9ja3M7XG4gICAgdmFyIGJsb2Nrc0luR3JvdXAxID0gZWNUb3RhbEJsb2NrcyAtIGJsb2Nrc0luR3JvdXAyO1xuICAgIHZhciB0b3RhbENvZGV3b3Jkc0luR3JvdXAxID0gTWF0aC5mbG9vcih0b3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpO1xuICAgIHZhciBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKGRhdGFUb3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpO1xuICAgIHZhciBkYXRhQ29kZXdvcmRzSW5Hcm91cDIgPSBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgKyAxO1xuICAgIC8vIE51bWJlciBvZiBFQyBjb2Rld29yZHMgaXMgdGhlIHNhbWUgZm9yIGJvdGggZ3JvdXBzXG4gICAgdmFyIGVjQ291bnQgPSB0b3RhbENvZGV3b3Jkc0luR3JvdXAxIC0gZGF0YUNvZGV3b3Jkc0luR3JvdXAxO1xuICAgIC8vIEluaXRpYWxpemUgYSBSZWVkLVNvbG9tb24gZW5jb2RlciB3aXRoIGEgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2YgZGVncmVlIGVjQ291bnRcbiAgICB2YXIgcnMgPSBuZXcgcmVlZFNvbG9tb25FbmNvZGVyKGVjQ291bnQpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBkY0RhdGEgPSBuZXcgQXJyYXkoZWNUb3RhbEJsb2Nrcyk7XG4gICAgdmFyIGVjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKTtcbiAgICB2YXIgbWF4RGF0YVNpemUgPSAwO1xuICAgIHZhciBidWZmZXIgPSB0eXBlZGFycmF5QnVmZmVyLmZyb20oYml0QnVmZmVyLmJ1ZmZlcik7XG4gICAgLy8gRGl2aWRlIHRoZSBidWZmZXIgaW50byB0aGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJsb2Nrc1xuICAgIGZvciAodmFyIGIgPSAwOyBiIDwgZWNUb3RhbEJsb2NrczsgYisrKSB7XG4gICAgICAgIHZhciBkYXRhU2l6ZSA9IGIgPCBibG9ja3NJbkdyb3VwMSA/IGRhdGFDb2Rld29yZHNJbkdyb3VwMSA6IGRhdGFDb2Rld29yZHNJbkdyb3VwMjtcbiAgICAgICAgLy8gZXh0cmFjdCBhIGJsb2NrIG9mIGRhdGEgZnJvbSBidWZmZXJcbiAgICAgICAgZGNEYXRhW2JdID0gYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZGF0YVNpemUpO1xuICAgICAgICAvLyBDYWxjdWxhdGUgRUMgY29kZXdvcmRzIGZvciB0aGlzIGRhdGEgYmxvY2tcbiAgICAgICAgZWNEYXRhW2JdID0gcnMuZW5jb2RlKGRjRGF0YVtiXSk7XG4gICAgICAgIG9mZnNldCArPSBkYXRhU2l6ZTtcbiAgICAgICAgbWF4RGF0YVNpemUgPSBNYXRoLm1heChtYXhEYXRhU2l6ZSwgZGF0YVNpemUpO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgZmluYWwgZGF0YVxuICAgIC8vIEludGVybGVhdmUgdGhlIGRhdGEgYW5kIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGZyb20gZWFjaCBibG9ja1xuICAgIHZhciBkYXRhID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYyh0b3RhbENvZGV3b3Jkcyk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaSwgcjtcbiAgICAvLyBBZGQgZGF0YSBjb2Rld29yZHNcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWF4RGF0YVNpemU7IGkrKykge1xuICAgICAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IGRjRGF0YVtyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2luZGV4KytdID0gZGNEYXRhW3JdW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFwcGVkIEVDIGNvZGV3b3Jkc1xuICAgIGZvciAoaSA9IDA7IGkgPCBlY0NvdW50OyBpKyspIHtcbiAgICAgICAgZm9yIChyID0gMDsgciA8IGVjVG90YWxCbG9ja3M7IHIrKykge1xuICAgICAgICAgICAgZGF0YVtpbmRleCsrXSA9IGVjRGF0YVtyXVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogQnVpbGQgUVIgQ29kZSBzeW1ib2xcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge0Vycm9yQ29ycmV0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGxldmVsXG4gKiBAcGFyYW0gIHtNYXNrUGF0dGVybn0gbWFza1BhdHRlcm4gICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBPYmplY3QgY29udGFpbmluZyBzeW1ib2wgZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVTeW1ib2woZGF0YSwgdmVyc2lvbiQxLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4kMSkge1xuICAgIHZhciBzZWdtZW50cyQxO1xuICAgIGlmIChpc2FycmF5KGRhdGEpKSB7XG4gICAgICAgIHNlZ21lbnRzJDEgPSBzZWdtZW50cy5mcm9tQXJyYXkoZGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb24kMTtcbiAgICAgICAgaWYgKCFlc3RpbWF0ZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICB2YXIgcmF3U2VnbWVudHMgPSBzZWdtZW50cy5yYXdTcGxpdChkYXRhKTtcbiAgICAgICAgICAgIC8vIEVzdGltYXRlIGJlc3QgdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIHJhdyBzcGxpdHRlZCBzZWdtZW50c1xuICAgICAgICAgICAgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb24uZ2V0QmVzdFZlcnNpb25Gb3JEYXRhKHJhd1NlZ21lbnRzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQnVpbGQgb3B0aW1pemVkIHNlZ21lbnRzXG4gICAgICAgIC8vIElmIGVzdGltYXRlZCB2ZXJzaW9uIGlzIHVuZGVmaW5lZCwgdHJ5IHdpdGggdGhlIGhpZ2hlc3QgdmVyc2lvblxuICAgICAgICBzZWdtZW50cyQxID0gc2VnbWVudHMuZnJvbVN0cmluZyhkYXRhLCBlc3RpbWF0ZWRWZXJzaW9uIHx8IDQwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRhJyk7XG4gICAgfVxuICAgIC8vIEdldCB0aGUgbWluIHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiBkYXRhXG4gICAgdmFyIGJlc3RWZXJzaW9uID0gdmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEoc2VnbWVudHMkMSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xuICAgIC8vIElmIG5vIHZlcnNpb24gaXMgZm91bmQsIGRhdGEgY2Fubm90IGJlIHN0b3JlZFxuICAgIGlmICghYmVzdFZlcnNpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYW1vdW50IG9mIGRhdGEgaXMgdG9vIGJpZyB0byBiZSBzdG9yZWQgaW4gYSBRUiBDb2RlJyk7XG4gICAgfVxuICAgIC8vIElmIG5vdCBzcGVjaWZpZWQsIHVzZSBtaW4gdmVyc2lvbiBhcyBkZWZhdWx0XG4gICAgaWYgKCF2ZXJzaW9uJDEpIHtcbiAgICAgICAgdmVyc2lvbiQxID0gYmVzdFZlcnNpb247XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBjYW4gY29udGFpbiB0aGUgZGF0YVxuICAgIH1cbiAgICBlbHNlIGlmICh2ZXJzaW9uJDEgPCBiZXN0VmVyc2lvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1xcbicgK1xuICAgICAgICAgICAgJ1RoZSBjaG9zZW4gUVIgQ29kZSB2ZXJzaW9uIGNhbm5vdCBjb250YWluIHRoaXMgYW1vdW50IG9mIGRhdGEuXFxuJyArXG4gICAgICAgICAgICAnTWluaW11bSB2ZXJzaW9uIHJlcXVpcmVkIHRvIHN0b3JlIGN1cnJlbnQgZGF0YSBpczogJyArIGJlc3RWZXJzaW9uICsgJy5cXG4nKTtcbiAgICB9XG4gICAgdmFyIGRhdGFCaXRzID0gY3JlYXRlRGF0YSh2ZXJzaW9uJDEsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cyQxKTtcbiAgICAvLyBBbGxvY2F0ZSBtYXRyaXggYnVmZmVyXG4gICAgdmFyIG1vZHVsZUNvdW50ID0gdXRpbHMuZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uJDEpO1xuICAgIHZhciBtb2R1bGVzID0gbmV3IGJpdE1hdHJpeChtb2R1bGVDb3VudCk7XG4gICAgLy8gQWRkIGZ1bmN0aW9uIG1vZHVsZXNcbiAgICBzZXR1cEZpbmRlclBhdHRlcm4obW9kdWxlcywgdmVyc2lvbiQxKTtcbiAgICBzZXR1cFRpbWluZ1BhdHRlcm4obW9kdWxlcyk7XG4gICAgc2V0dXBBbGlnbm1lbnRQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24kMSk7XG4gICAgLy8gQWRkIHRlbXBvcmFyeSBkdW1teSBiaXRzIGZvciBmb3JtYXQgaW5mbyBqdXN0IHRvIHNldCB0aGVtIGFzIHJlc2VydmVkLlxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlc2UgYml0cyBmcm9tIGJlaW5nIG1hc2tlZCBieSB7QGxpbmsgTWFza1BhdHRlcm4uYXBwbHlNYXNrfVxuICAgIC8vIHNpbmNlIHRoZSBtYXNraW5nIG9wZXJhdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBvbmx5IG9uIHRoZSBlbmNvZGluZyByZWdpb24uXG4gICAgLy8gVGhlc2UgYmxvY2tzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBjb3JyZWN0IHZhbHVlcyBsYXRlciBpbiBjb2RlLlxuICAgIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgMCk7XG4gICAgaWYgKHZlcnNpb24kMSA+PSA3KSB7XG4gICAgICAgIHNldHVwVmVyc2lvbkluZm8obW9kdWxlcywgdmVyc2lvbiQxKTtcbiAgICB9XG4gICAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gICAgc2V0dXBEYXRhKG1vZHVsZXMsIGRhdGFCaXRzKTtcbiAgICBpZiAoaXNOYU4obWFza1BhdHRlcm4kMSkpIHtcbiAgICAgICAgLy8gRmluZCBiZXN0IG1hc2sgcGF0dGVyblxuICAgICAgICBtYXNrUGF0dGVybiQxID0gbWFza1BhdHRlcm4uZ2V0QmVzdE1hc2sobW9kdWxlcywgc2V0dXBGb3JtYXRJbmZvLmJpbmQobnVsbCwgbW9kdWxlcywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpKTtcbiAgICB9XG4gICAgLy8gQXBwbHkgbWFzayBwYXR0ZXJuXG4gICAgbWFza1BhdHRlcm4uYXBwbHlNYXNrKG1hc2tQYXR0ZXJuJDEsIG1vZHVsZXMpO1xuICAgIC8vIFJlcGxhY2UgZm9ybWF0IGluZm8gYml0cyB3aXRoIGNvcnJlY3QgdmFsdWVzXG4gICAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybiQxKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2R1bGVzOiBtb2R1bGVzLFxuICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uJDEsXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsOiBlcnJvckNvcnJlY3Rpb25MZXZlbCxcbiAgICAgICAgbWFza1BhdHRlcm46IG1hc2tQYXR0ZXJuJDEsXG4gICAgICAgIHNlZ21lbnRzOiBzZWdtZW50cyQxXG4gICAgfTtcbn1cbi8qKlxuICogUVIgQ29kZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy52ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudG9TSklTRnVuYyAgICAgICAgIEhlbHBlciBmdW5jIHRvIGNvbnZlcnQgdXRmOCB0byBzamlzXG4gKi9cbnZhciBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoZGF0YSwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbnB1dCB0ZXh0Jyk7XG4gICAgfVxuICAgIHZhciBlcnJvckNvcnJlY3Rpb25MZXZlbCQxID0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTTtcbiAgICB2YXIgdmVyc2lvbiQxO1xuICAgIHZhciBtYXNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVXNlIGhpZ2hlciBlcnJvciBjb3JyZWN0aW9uIGxldmVsIGFzIGRlZmF1bHRcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSA9IGVycm9yQ29ycmVjdGlvbkxldmVsLmZyb20ob3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTSk7XG4gICAgICAgIHZlcnNpb24kMSA9IHZlcnNpb24uZnJvbShvcHRpb25zLnZlcnNpb24pO1xuICAgICAgICBtYXNrID0gbWFza1BhdHRlcm4uZnJvbShvcHRpb25zLm1hc2tQYXR0ZXJuKTtcbiAgICAgICAgaWYgKG9wdGlvbnMudG9TSklTRnVuYykge1xuICAgICAgICAgICAgdXRpbHMuc2V0VG9TSklTRnVuY3Rpb24ob3B0aW9ucy50b1NKSVNGdW5jKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlU3ltYm9sKGRhdGEsIHZlcnNpb24kMSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSwgbWFzayk7XG59O1xudmFyIHFyY29kZSA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZVxufTtcbnZhciB1dGlscyQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIGZ1bmN0aW9uIGhleDJyZ2JhKGhleCkge1xuICAgICAgICBpZiAodHlwZW9mIGhleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGhleCA9IGhleC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xvciBzaG91bGQgYmUgZGVmaW5lZCBhcyBoZXggc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhleENvZGUgPSBoZXguc2xpY2UoKS5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcnKTtcbiAgICAgICAgaWYgKGhleENvZGUubGVuZ3RoIDwgMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNSB8fCBoZXhDb2RlLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggY29sb3I6ICcgKyBoZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzaG9ydCB0byBsb25nIGZvcm0gKGZmZiAtPiBmZmZmZmYpXG4gICAgICAgIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgaGV4Q29kZSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGhleENvZGUubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjLCBjXTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZGVmYXVsdCBhbHBoYSB2YWx1ZVxuICAgICAgICBpZiAoaGV4Q29kZS5sZW5ndGggPT09IDYpXG4gICAgICAgICAgICBoZXhDb2RlLnB1c2goJ0YnLCAnRicpO1xuICAgICAgICB2YXIgaGV4VmFsdWUgPSBwYXJzZUludChoZXhDb2RlLmpvaW4oJycpLCAxNik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiAoaGV4VmFsdWUgPj4gMjQpICYgMjU1LFxuICAgICAgICAgICAgZzogKGhleFZhbHVlID4+IDE2KSAmIDI1NSxcbiAgICAgICAgICAgIGI6IChoZXhWYWx1ZSA+PiA4KSAmIDI1NSxcbiAgICAgICAgICAgIGE6IGhleFZhbHVlICYgMjU1LFxuICAgICAgICAgICAgaGV4OiAnIycgKyBoZXhDb2RlLnNsaWNlKDAsIDYpLmpvaW4oJycpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGV4cG9ydHMuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIGlmICghb3B0aW9ucy5jb2xvcilcbiAgICAgICAgICAgIG9wdGlvbnMuY29sb3IgPSB7fTtcbiAgICAgICAgdmFyIG1hcmdpbiA9IHR5cGVvZiBvcHRpb25zLm1hcmdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luID09PSBudWxsIHx8XG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiA8IDAgPyA0IDogb3B0aW9ucy5tYXJnaW47XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy53aWR0aCA+PSAyMSA/IG9wdGlvbnMud2lkdGggOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgNDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIHNjYWxlOiB3aWR0aCA/IDQgOiBzY2FsZSxcbiAgICAgICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBkYXJrOiBoZXgycmdiYShvcHRpb25zLmNvbG9yLmRhcmsgfHwgJyMwMDAwMDBmZicpLFxuICAgICAgICAgICAgICAgIGxpZ2h0OiBoZXgycmdiYShvcHRpb25zLmNvbG9yLmxpZ2h0IHx8ICcjZmZmZmZmZmYnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICAgICAgICAgIHJlbmRlcmVyT3B0czogb3B0aW9ucy5yZW5kZXJlck9wdHMgfHwge31cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMuZ2V0U2NhbGUgPSBmdW5jdGlvbiBnZXRTY2FsZShxclNpemUsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMud2lkdGggJiYgb3B0cy53aWR0aCA+PSBxclNpemUgKyBvcHRzLm1hcmdpbiAqIDJcbiAgICAgICAgICAgID8gb3B0cy53aWR0aCAvIChxclNpemUgKyBvcHRzLm1hcmdpbiAqIDIpXG4gICAgICAgICAgICA6IG9wdHMuc2NhbGU7XG4gICAgfTtcbiAgICBleHBvcnRzLmdldEltYWdlV2lkdGggPSBmdW5jdGlvbiBnZXRJbWFnZVdpZHRoKHFyU2l6ZSwgb3B0cykge1xuICAgICAgICB2YXIgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHFyU2l6ZSwgb3B0cyk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChxclNpemUgKyBvcHRzLm1hcmdpbiAqIDIpICogc2NhbGUpO1xuICAgIH07XG4gICAgZXhwb3J0cy5xclRvSW1hZ2VEYXRhID0gZnVuY3Rpb24gcXJUb0ltYWdlRGF0YShpbWdEYXRhLCBxciwgb3B0cykge1xuICAgICAgICB2YXIgc2l6ZSA9IHFyLm1vZHVsZXMuc2l6ZTtcbiAgICAgICAgdmFyIGRhdGEgPSBxci5tb2R1bGVzLmRhdGE7XG4gICAgICAgIHZhciBzY2FsZSA9IGV4cG9ydHMuZ2V0U2NhbGUoc2l6ZSwgb3B0cyk7XG4gICAgICAgIHZhciBzeW1ib2xTaXplID0gTWF0aC5mbG9vcigoc2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSk7XG4gICAgICAgIHZhciBzY2FsZWRNYXJnaW4gPSBvcHRzLm1hcmdpbiAqIHNjYWxlO1xuICAgICAgICB2YXIgcGFsZXR0ZSA9IFtvcHRzLmNvbG9yLmxpZ2h0LCBvcHRzLmNvbG9yLmRhcmtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbFNpemU7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzeW1ib2xTaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zRHN0ID0gKGkgKiBzeW1ib2xTaXplICsgaikgKiA0O1xuICAgICAgICAgICAgICAgIHZhciBweENvbG9yID0gb3B0cy5jb2xvci5saWdodDtcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBzY2FsZWRNYXJnaW4gJiYgaiA+PSBzY2FsZWRNYXJnaW4gJiZcbiAgICAgICAgICAgICAgICAgICAgaSA8IHN5bWJvbFNpemUgLSBzY2FsZWRNYXJnaW4gJiYgaiA8IHN5bWJvbFNpemUgLSBzY2FsZWRNYXJnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlTcmMgPSBNYXRoLmZsb29yKChpIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpTcmMgPSBNYXRoLmZsb29yKChqIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgcHhDb2xvciA9IHBhbGV0dGVbZGF0YVtpU3JjICogc2l6ZSArIGpTcmNdID8gMSA6IDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IucjtcbiAgICAgICAgICAgICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuZztcbiAgICAgICAgICAgICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuYjtcbiAgICAgICAgICAgICAgICBpbWdEYXRhW3Bvc0RzdF0gPSBweENvbG9yLmE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG52YXIgY2FudmFzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIGZ1bmN0aW9uIGNsZWFyQ2FudmFzKGN0eCwgY2FudmFzLCBzaXplKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgaWYgKCFjYW52YXMuc3R5bGUpXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUgPSB7fTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhbnZhc0VsZW1lbnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhIGNhbnZhcyBlbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBvcHRpb25zO1xuICAgICAgICB2YXIgY2FudmFzRWwgPSBjYW52YXM7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgJiYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSkge1xuICAgICAgICAgICAgb3B0cyA9IGNhbnZhcztcbiAgICAgICAgICAgIGNhbnZhcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgY2FudmFzRWwgPSBnZXRDYW52YXNFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cyA9IHV0aWxzJDEuZ2V0T3B0aW9ucyhvcHRzKTtcbiAgICAgICAgdmFyIHNpemUgPSB1dGlscyQxLmdldEltYWdlV2lkdGgocXJEYXRhLm1vZHVsZXMuc2l6ZSwgb3B0cyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1hZ2UgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHNpemUsIHNpemUpO1xuICAgICAgICB1dGlscyQxLnFyVG9JbWFnZURhdGEoaW1hZ2UuZGF0YSwgcXJEYXRhLCBvcHRzKTtcbiAgICAgICAgY2xlYXJDYW52YXMoY3R4LCBjYW52YXNFbCwgc2l6ZSk7XG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2UsIDAsIDApO1xuICAgICAgICByZXR1cm4gY2FudmFzRWw7XG4gICAgfTtcbiAgICBleHBvcnRzLnJlbmRlclRvRGF0YVVSTCA9IGZ1bmN0aW9uIHJlbmRlclRvRGF0YVVSTChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgJiYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSkge1xuICAgICAgICAgICAgb3B0cyA9IGNhbnZhcztcbiAgICAgICAgICAgIGNhbnZhcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdHMpXG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIHZhciBjYW52YXNFbCA9IGV4cG9ydHMucmVuZGVyKHFyRGF0YSwgY2FudmFzLCBvcHRzKTtcbiAgICAgICAgdmFyIHR5cGUgPSBvcHRzLnR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgICAgIHZhciByZW5kZXJlck9wdHMgPSBvcHRzLnJlbmRlcmVyT3B0cyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGNhbnZhc0VsLnRvRGF0YVVSTCh0eXBlLCByZW5kZXJlck9wdHMucXVhbGl0eSk7XG4gICAgfTtcbn0pO1xuZnVuY3Rpb24gZ2V0Q29sb3JBdHRyaWIoY29sb3IsIGF0dHJpYikge1xuICAgIHZhciBhbHBoYSA9IGNvbG9yLmEgLyAyNTU7XG4gICAgdmFyIHN0ciA9IGF0dHJpYiArICc9XCInICsgY29sb3IuaGV4ICsgJ1wiJztcbiAgICByZXR1cm4gYWxwaGEgPCAxXG4gICAgICAgID8gc3RyICsgJyAnICsgYXR0cmliICsgJy1vcGFjaXR5PVwiJyArIGFscGhhLnRvRml4ZWQoMikuc2xpY2UoMSkgKyAnXCInXG4gICAgICAgIDogc3RyO1xufVxuZnVuY3Rpb24gc3ZnQ21kKGNtZCwgeCwgeSkge1xuICAgIHZhciBzdHIgPSBjbWQgKyB4O1xuICAgIGlmICh0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHN0ciArPSAnICcgKyB5O1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBxclRvUGF0aChkYXRhLCBzaXplLCBtYXJnaW4pIHtcbiAgICB2YXIgcGF0aCA9ICcnO1xuICAgIHZhciBtb3ZlQnkgPSAwO1xuICAgIHZhciBuZXdSb3cgPSBmYWxzZTtcbiAgICB2YXIgbGluZUxlbmd0aCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb2wgPSBNYXRoLmZsb29yKGkgJSBzaXplKTtcbiAgICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNpemUpO1xuICAgICAgICBpZiAoIWNvbCAmJiAhbmV3Um93KVxuICAgICAgICAgICAgbmV3Um93ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGRhdGFbaV0pIHtcbiAgICAgICAgICAgIGxpbmVMZW5ndGgrKztcbiAgICAgICAgICAgIGlmICghKGkgPiAwICYmIGNvbCA+IDAgJiYgZGF0YVtpIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBuZXdSb3dcbiAgICAgICAgICAgICAgICAgICAgPyBzdmdDbWQoJ00nLCBjb2wgKyBtYXJnaW4sIDAuNSArIHJvdyArIG1hcmdpbilcbiAgICAgICAgICAgICAgICAgICAgOiBzdmdDbWQoJ20nLCBtb3ZlQnksIDApO1xuICAgICAgICAgICAgICAgIG1vdmVCeSA9IDA7XG4gICAgICAgICAgICAgICAgbmV3Um93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShjb2wgKyAxIDwgc2l6ZSAmJiBkYXRhW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHN2Z0NtZCgnaCcsIGxpbmVMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxpbmVMZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW92ZUJ5Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHFyRGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICB2YXIgb3B0cyA9IHV0aWxzJDEuZ2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgc2l6ZSA9IHFyRGF0YS5tb2R1bGVzLnNpemU7XG4gICAgdmFyIGRhdGEgPSBxckRhdGEubW9kdWxlcy5kYXRhO1xuICAgIHZhciBxcmNvZGVzaXplID0gc2l6ZSArIG9wdHMubWFyZ2luICogMjtcbiAgICB2YXIgYmcgPSAhb3B0cy5jb2xvci5saWdodC5hXG4gICAgICAgID8gJydcbiAgICAgICAgOiAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IubGlnaHQsICdmaWxsJykgK1xuICAgICAgICAgICAgJyBkPVwiTTAgMGgnICsgcXJjb2Rlc2l6ZSArICd2JyArIHFyY29kZXNpemUgKyAnSDB6XCIvPic7XG4gICAgdmFyIHBhdGggPSAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IuZGFyaywgJ3N0cm9rZScpICtcbiAgICAgICAgJyBkPVwiJyArIHFyVG9QYXRoKGRhdGEsIHNpemUsIG9wdHMubWFyZ2luKSArICdcIi8+JztcbiAgICB2YXIgdmlld0JveCA9ICd2aWV3Qm94PVwiJyArICcwIDAgJyArIHFyY29kZXNpemUgKyAnICcgKyBxcmNvZGVzaXplICsgJ1wiJztcbiAgICB2YXIgd2lkdGggPSAhb3B0cy53aWR0aCA/ICcnIDogJ3dpZHRoPVwiJyArIG9wdHMud2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIG9wdHMud2lkdGggKyAnXCIgJztcbiAgICB2YXIgc3ZnVGFnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICcgKyB3aWR0aCArIHZpZXdCb3ggKyAnIHNoYXBlLXJlbmRlcmluZz1cImNyaXNwRWRnZXNcIj4nICsgYmcgKyBwYXRoICsgJzwvc3ZnPlxcbic7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYihudWxsLCBzdmdUYWcpO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnVGFnO1xufTtcbnZhciBzdmdUYWcgPSB7XG4gICAgcmVuZGVyOiByZW5kZXJcbn07XG5mdW5jdGlvbiByZW5kZXJDYW52YXMocmVuZGVyRnVuYywgY2FudmFzLCB0ZXh0LCBvcHRzLCBjYikge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBhcmdzTnVtID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGlzTGFzdEFyZ0NiID0gdHlwZW9mIGFyZ3NbYXJnc051bSAtIDFdID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghaXNMYXN0QXJnQ2IgJiYgIWNhblByb21pc2UoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkIGFzIGxhc3QgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzTGFzdEFyZ0NiKSB7XG4gICAgICAgIGlmIChhcmdzTnVtIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gZmV3IGFyZ3VtZW50cyBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzTnVtID09PSAyKSB7XG4gICAgICAgICAgICBjYiA9IHRleHQ7XG4gICAgICAgICAgICB0ZXh0ID0gY2FudmFzO1xuICAgICAgICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmdzTnVtID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQgJiYgdHlwZW9mIGNiID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNiID0gb3B0cztcbiAgICAgICAgICAgICAgICBvcHRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgPSBvcHRzO1xuICAgICAgICAgICAgICAgIG9wdHMgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIHRleHQgPSBjYW52YXM7XG4gICAgICAgICAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoYXJnc051bSA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJnc051bSA9PT0gMSkge1xuICAgICAgICAgICAgdGV4dCA9IGNhbnZhcztcbiAgICAgICAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJnc051bSA9PT0gMiAmJiAhY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICAgIG9wdHMgPSB0ZXh0O1xuICAgICAgICAgICAgdGV4dCA9IGNhbnZhcztcbiAgICAgICAgICAgIGNhbnZhcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHFyY29kZS5jcmVhdGUodGV4dCwgb3B0cyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jKGRhdGEsIGNhbnZhcywgb3B0cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgZGF0YSA9IHFyY29kZS5jcmVhdGUodGV4dCwgb3B0cyk7XG4gICAgICAgIGNiKG51bGwsIHJlbmRlckZ1bmMoZGF0YSwgY2FudmFzLCBvcHRzKSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNiKGUpO1xuICAgIH1cbn1cbnZhciBjcmVhdGUkMSA9IHFyY29kZS5jcmVhdGU7XG52YXIgdG9DYW52YXMgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBjYW52YXMucmVuZGVyKTtcbnZhciB0b0RhdGFVUkwgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBjYW52YXMucmVuZGVyVG9EYXRhVVJMKTtcbi8vIG9ubHkgc3ZnIGZvciBub3cuXG52YXIgdG9TdHJpbmdfMSA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIGZ1bmN0aW9uIChkYXRhLCBfLCBvcHRzKSB7XG4gICAgcmV0dXJuIHN2Z1RhZy5yZW5kZXIoZGF0YSwgb3B0cyk7XG59KTtcbnZhciBicm93c2VyID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlJDEsXG4gICAgdG9DYW52YXM6IHRvQ2FudmFzLFxuICAgIHRvRGF0YVVSTDogdG9EYXRhVVJMLFxuICAgIHRvU3RyaW5nOiB0b1N0cmluZ18xXG59O1xudmFyIGFtcGxpZnlUb3RwU2V0dXBDc3MgPSBcIi50b3RwLXNldHVwe3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MzBweH0udG90cC1zZXR1cCBpbWd7aGVpZ2h0OjEyOHB4O3dpZHRoOjEyOHB4fVwiO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1RPVFAnKTtcbnZhciBBbXBsaWZ5VE9UUFNldHVwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0UHJvcHMgPSB7XG4gICAgICAgICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiB0b3RwIHNldHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhlYWRlclRleHQgPSBUcmFuc2xhdGlvbnMuVE9UUF9IRUFERVJfVEVYVDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBpc3N1ZXIgc3RyaW5nIGluIHRoZSBxciBjb2RlIGltYWdlICovXG4gICAgICAgIHRoaXMuaXNzdWVyID0gVHJhbnNsYXRpb25zLlRPVFBfSVNTVUVSO1xuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHVwTWVzc2FnZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXJDb2RlSW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIGRpZG4ndCB1c2UgYEBXYXRjaGAgaGVyZSBiZWNhdXNlIGl0IGRvZXNuJ3QgZmlyZSB3aGVuIHdlIGdvIGZyb20gcmVxdWlyZS1uZXctcGFzc3dvcmQgdG8gdG90cC1zZXR1cC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoYXQgaXMgYmVjYXVzZSBgQXV0aC5jb21wbGV0ZU5ld1Bhc3N3b3JkYCBvbmx5IGNoYW5nZXMgYHVzZXJgIGluIHBsYWNlIGFuZCBXYXRjaCBkb2Vzbid0IGRldGVjdCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB1bmxlc3Mgd2UgbWFrZSBhIGNsb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUh1Ykxpc3RlbmVyID0gb25BdXRoVUlTdGF0ZUNoYW5nZShmdW5jdGlvbiAoYXV0aFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhTdGF0ZSA9PT0gQXV0aFN0YXRlLlRPVFBTZXR1cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0dXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZXR1cCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUh1Ykxpc3RlbmVyICYmIHRoaXMucmVtb3ZlSHViTGlzdGVuZXIoKTsgLy8gc3RvcCBsaXN0ZW5pbmcgdG8gYG9uQXV0aFVJU3RhdGVDaGFuZ2VgXG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5idWlsZE90cEF1dGhQYXRoID0gZnVuY3Rpb24gKHVzZXIsIGlzc3Vlciwgc2VjcmV0S2V5KSB7XG4gICAgICAgIHJldHVybiBcIm90cGF1dGg6Ly90b3RwL1wiICsgaXNzdWVyICsgXCI6XCIgKyB1c2VyLnVzZXJuYW1lICsgXCI/c2VjcmV0PVwiICsgc2VjcmV0S2V5ICsgXCImaXNzdWVyPVwiICsgaXNzdWVyO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25UT1RQRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEsIHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdvbiB0b3RwIGV2ZW50JywgZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQgPT09IFNFVFVQX1RPVFAgJiYgZGF0YSA9PT0gU1VDQ0VTUykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hlY2tDb250YWN0KHVzZXIsIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFuZGxlVG90cElucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5xckNvZGVJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdlbmVyYXRlUVJDb2RlID0gZnVuY3Rpb24gKGNvZGVGcm9tVG90cCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYnJvd3Nlci50b0RhdGFVUkwoY29kZUZyb21Ub3RwKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnFyQ29kZUltYWdlU291cmNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbmNvZGVkSXNzdWVyLCBzZWNyZXRLZXksIGVycm9yXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc2V0dXAgaXMgb25seSBydW4gb25jZSBhZnRlciB0b3RwIHNldHVwIGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXIgfHwgdGhpcy51c2VyLmNoYWxsZW5nZU5hbWUgIT09ICdNRkFfU0VUVVAnIHx8IHRoaXMubG9hZGluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVkSXNzdWVyID0gZW5jb2RlVVJJKEkxOG4uZ2V0KHRoaXMuaXNzdWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2V0dXBUT1RQICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5zZXR1cFRPVFAodGhpcy51c2VyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldEtleSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zygnc2VjcmV0IGtleScsIHNlY3JldEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLmJ1aWxkT3RwQXV0aFBhdGgodGhpcy51c2VyLCBlbmNvZGVkSXNzdWVyLCBzZWNyZXRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVFSQ29kZSh0aGlzLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoSTE4bi5nZXQoVHJhbnNsYXRpb25zLlRPVFBfU0VUVVBfRkFJTFVSRSksIGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmVyaWZ5VG90cFRva2VuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1c2VyLCBlcnJvcl8zO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5xckNvZGVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnTm8gVE9UUCBDb2RlIHByb3ZpZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHRoaXMudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC52ZXJpZnlUb3RwVG9rZW4gIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIEF1dGguc2V0UHJlZmVycmVkTUZBICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGgudmVyaWZ5VG90cFRva2VuKHVzZXIsIHRoaXMucXJDb2RlSW5wdXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5zZXRQcmVmZXJyZWRNRkEodXNlciwgTWZhT3B0aW9uLlRPVFApXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSBJMThuLmdldChUcmFuc2xhdGlvbnMuVE9UUF9TVUNDRVNTX01FU1NBR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5UT1RQX1NVQ0NFU1NfTUVTU0FHRSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5vblRPVFBFdmVudChTRVRVUF9UT1RQLCBTVUNDRVNTLCB1c2VyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSBJMThuLmdldChUcmFuc2xhdGlvbnMuVE9UUF9TRVRVUF9GQUlMVVJFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcl8zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBzdWJtaXRCdXR0b25UZXh0OiBJMThuLmdldChUcmFuc2xhdGlvbnMuVE9UUF9TVUJNSVRfQlVUVE9OX1RFWFQpLCBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMudmVyaWZ5VG90cFRva2VuKGV2ZW50KTsgfSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b3RwLXNldHVwXCIgfSwgdGhpcy5xckNvZGVJbWFnZVNvdXJjZSAmJiBoKFwiaW1nXCIsIHsgc3JjOiB0aGlzLnFyQ29kZUltYWdlU291cmNlLCBhbHQ6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5RUl9DT0RFX0FMVCkgfSksIGgoXCJhbXBsaWZ5LWZvcm0tZmllbGRcIiwgeyBsYWJlbDogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlRPVFBfTEFCRUwpLCBpbnB1dFByb3BzOiB0aGlzLmlucHV0UHJvcHMsIGZpZWxkSWQ6IFwidG90cENvZGVcIiwgbmFtZTogXCJ0b3RwQ29kZVwiLCBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUb3RwSW5wdXRDaGFuZ2UoZXZlbnQpOyB9IH0pKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbkFtcGxpZnlUT1RQU2V0dXAuc3R5bGUgPSBhbXBsaWZ5VG90cFNldHVwQ3NzO1xuZXhwb3J0IHsgQW1wbGlmeVJhZGlvQnV0dG9uIGFzIGFtcGxpZnlfcmFkaW9fYnV0dG9uLCBBbXBsaWZ5VE9UUFNldHVwIGFzIGFtcGxpZnlfdG90cF9zZXR1cCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IExvZ2dlciwgaXNFbXB0eSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IEEgYXMgQXV0aFN0YXRlLCBDIGFzIENoYWxsZW5nZU5hbWUgfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCwgQ29nbml0b1VzZXIgfSBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBUIGFzIFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vVHJhbnNsYXRpb25zLWM4MzNmNjYzLmpzJztcbmltcG9ydCB7IE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBhIGFzIGRpc3BhdGNoVG9hc3RIdWJFdmVudCB9IGZyb20gJy4vaGVscGVycy00ZjYxZTVmZi5qcyc7XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignYXV0aC1oZWxwZXJzJyk7XG5mdW5jdGlvbiBjaGVja0NvbnRhY3QodXNlciwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSwgbmV3VXNlciwgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnZlcmlmaWVkQ29udGFjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBgdXNlcmAgaXMgYSBmZWRlcmF0ZWQgdXNlciwgd2Ugc2hvdWxkbid0IGNhbGwgYHZlcmlmaWVkQ29udGFjdGBcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgYHVzZXJgIGlzbid0IGBDb2duaXRvVXNlcmBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0NvZ25pdG9Vc2VyKHVzZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnZlcmlmaWVkQ29udGFjdCh1c2VyKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoZGF0YS52ZXJpZmllZCkgfHwgaXNFbXB0eShkYXRhLnVudmVyaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZXIgPSBPYmplY3QuYXNzaWduKHVzZXIsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5WZXJpZnlDb250YWN0LCBuZXdVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIGhhbmRsZVNpZ25JbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlciwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2lnbkluICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDksICwgMTBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnNpZ25Jbih1c2VybmFtZSwgcGFzc3dvcmQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyh1c2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuU01TTUZBIHx8IHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdjb25maXJtIHVzZXIgd2l0aCAnICsgdXNlci5jaGFsbGVuZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5OZXdQYXNzd29yZFJlcXVpcmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdyZXF1aXJlIG5ldyBwYXNzd29yZCcsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuUmVzZXRQYXNzd29yZCwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLk1GQVNldHVwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdUT1RQIHNldHVwJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5UT1RQU2V0dXAsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5DdXN0b21DaGFsbGVuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jaGFsbGVuZ2VQYXJhbSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNoYWxsZW5nZVBhcmFtLnRyaWdnZXIgPT09ICd0cnVlJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnY3VzdG9tIGNoYWxsZW5nZScsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ3VzdG9tQ29uZmlybVNpZ25JbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSA4O1xuICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMi5jb2RlID09PSAnVXNlck5vdENvbmZpcm1lZEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCd0aGUgdXNlciBpcyBub3QgY29uZmlybWVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ29uZmlybVNpZ25VcCwgeyB1c2VybmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzIuY29kZSA9PT0gJ1Bhc3N3b3JkUmVzZXRSZXF1aXJlZEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCd0aGUgdXNlciByZXF1aXJlcyBhIG5ldyBwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkZvcmdvdFBhc3N3b3JkLCB7IHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMi5jb2RlID09PSAnSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbicgJiYgcGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnUGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzIubWVzc2FnZSA9IFRyYW5zbGF0aW9ucy5FTVBUWV9QQVNTV09SRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgaXNDb2duaXRvVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIgaW5zdGFuY2VvZiBDb2duaXRvVXNlcjtcbn07XG5leHBvcnQgeyBjaGVja0NvbnRhY3QgYXMgYywgaGFuZGxlU2lnbkluIGFzIGggfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=