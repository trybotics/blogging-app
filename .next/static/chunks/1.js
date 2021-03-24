(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js ***!
  \*************************************************************************************************/
/*! exports provided: amplify_confirm_sign_in, amplify_confirm_sign_up, amplify_forgot_password, amplify_require_new_password, amplify_sign_in, amplify_sign_up, amplify_verify_contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_in", function() { return AmplifyConfirmSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_up", function() { return AmplifyConfirmSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_forgot_password", function() { return AmplifyForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_require_new_password", function() { return AmplifyRequireNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_in", function() { return AmplifySignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_up", function() { return AmplifySignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_verify_contact", function() { return AmplifyVerifyContact; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");
/* harmony import */ var _auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-bd096ca7.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-bd096ca7.js");
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};








var AmplifyConfirmSignIn = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = function (event) { return _this.confirm(event); };
        /** Used for header text in confirm sign in component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [
            {
                type: 'code',
                required: true,
                handleInputChange: function (event) { return _this.handleCodeChange(event); },
            },
        ];
        /** The MFA option to confirm with */
        this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
    }
    class_1.prototype.componentWillLoad = function () {
        this.setup();
    };
    class_1.prototype.userHandler = function () {
        this.setup();
    };
    class_1.prototype.setup = function () {
        if (this.user && this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA) {
            this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP;
            // If header text is using default use TOTP string
            if (this.headerText === _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE) {
                this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_TOTP_CODE;
            }
        }
    };
    class_1.prototype.handleCodeChange = function (event) {
        this.code = event.target.value;
    };
    class_1.prototype.confirm = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var mfaType, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        mfaType = this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA ? _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA : null;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn(this.user, this.code, mfaType)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this.user, this.handleAuthStateChange)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN))) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.formFields }))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "user": ["userHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
var AmplifyConfirmSignUp = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = function (event) { return _this.confirmSignUp(event); };
        /** Used for header text in confirm sign up component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in confirm sign up component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this components
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.loading = false;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
    }
    class_2.prototype.componentWillLoad = function () {
        this.setup();
    };
    class_2.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_2.prototype.userHandler = function () {
        this.setup();
    };
    class_2.prototype.setup = function () {
        // TODO: Use optional chaining instead
        this.userInput = this.user && this.user.username;
        this._signUpAttrs = this.user && this.user.signUpAttrs;
        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_2.prototype.buildDefaultFormFields = function () {
        var _this = this;
        this.newFormFields = [
            {
                type: "" + this.usernameAlias,
                required: true,
                handleInputChange: this.handleFormFieldInputChange("" + this.usernameAlias),
                value: this.userInput,
                disabled: this.userInput ? true : false,
            },
            {
                type: 'code',
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
                required: true,
                hint: (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.resendConfirmCode(); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))),
                handleInputChange: this.handleFormFieldInputChange('code'),
            },
        ];
    };
    class_2.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_1 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                if (newField.type === 'code') {
                    newField['hint'] = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.resendConfirmCode(); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))) : (newField['hint']);
                }
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                newFields_1.push(newField);
            });
            this.newFormFields = newFields_1;
        }
    };
    class_2.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'code':
                return function (event) { return (_this.code = event.target.value); };
            default:
                return;
        }
    };
    class_2.prototype.setFieldValue = function (field) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    this.userInput = '';
                }
                else {
                    this.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
        }
    };
    class_2.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_2.prototype.resendConfirmCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!this.userInput)
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
                        this.userInput = this.userInput.trim();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(this.userInput)];
                    case 2:
                        _a.sent();
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // TODO: Add validation
    // TODO: Prefix
    class_2.prototype.confirmSignUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmSignUpResult, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.userInput = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        if (!this.userInput)
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
                        this.userInput = this.userInput.trim();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(this.userInput, this.code)];
                    case 2:
                        confirmSignUpResult = _a.sent();
                        if (!confirmSignUpResult) {
                            throw new Error(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_FAILED));
                        }
                        if (!(this._signUpAttrs && this._signUpAttrs.password && this._signUpAttrs.password !== '')) return [3 /*break*/, 4];
                        // Auto sign in user if password is available from previous workflow
                        return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.userInput, this._signUpAttrs.password, this.handleAuthStateChange)];
                    case 3:
                        // Auto sign in user if password is available from previous workflow
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_3 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_3);
                        return [3 /*break*/, 8];
                    case 7:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)))) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    };
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"],
                "user": ["userHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_2;
}());
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ForgotPassword');
var AmplifyForgotPassword = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_YOUR_PASSWORD;
        /** The text displayed inside of the send code button for the form */
        this.sendButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SEND_CODE;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUBMIT;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [];
        /** The function called when making a request to reset password */
        this.handleSend = function (event) { return _this.send(event); };
        /** The function called when submitting a new password */
        this.handleSubmit = function (event) { return _this.submit(event); };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.delivery = null;
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.newFormFields = [];
        this.forgotPasswordAttrs = {
            userInput: '',
            password: '',
            code: '',
        };
    }
    class_3.prototype.componentWillLoad = function () {
        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_3.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_3.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.newFormFields.push(newField);
            });
        }
    };
    class_3.prototype.buildDefaultFormFields = function () {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'forgot-password-email-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'forgot-password-phone-number-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'forgot-password-username-input',
                        },
                    },
                ];
                break;
        }
    };
    class_3.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.forgotPasswordAttrs.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'password':
            case 'code':
                return function (event) { return (_this.forgotPasswordAttrs[fieldType] = event.target.value); };
            default:
                return;
        }
    };
    class_3.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
            case 'code':
                if (field.value === undefined) {
                    formAttributes[field.type] = '';
                }
                else {
                    formAttributes[field.type] = field.value;
                }
                break;
        }
    };
    class_3.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_3.prototype.send = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.forgotPasswordAttrs.userInput = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                                break;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(this.forgotPasswordAttrs.userInput.trim())];
                    case 2:
                        data = _a.sent();
                        logger.debug(data);
                        this.newFormFields = [
                            {
                                type: 'code',
                                required: true,
                                handleInputChange: this.handleFormFieldInputChange('code'),
                                inputProps: {
                                    'data-test': 'forgot-password-code-input',
                                },
                            },
                            {
                                type: 'password',
                                required: true,
                                handleInputChange: this.handleFormFieldInputChange('password'),
                                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                            },
                        ];
                        this.delivery = data.CodeDeliveryDetails;
                        return [3 /*break*/, 5];
                    case 3:
                        error_4 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_4);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userInput, code, password, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        _a = this.forgotPasswordAttrs, userInput = _a.userInput, code = _a.code, password = _a.password;
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(userInput, code, password)];
                    case 2:
                        data = _b.sent();
                        logger.debug(data);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
                        this.delivery = null;
                        return [3 /*break*/, 5];
                    case 3:
                        error_5 = _b.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_5);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.render = function () {
        var _this = this;
        var submitFn = this.delivery ? function (event) { return _this.handleSubmit(event); } : function (event) { return _this.handleSend(event); };
        var submitButtonText = this.delivery ? this.submitButtonText : this.sendButtonText;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: submitFn, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); }, "data-test": "forgot-password-back-to-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), testDataPrefix: 'forgot-password', submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(submitButtonText) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_3;
}());
var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-require-new-password');
var AmplifyRequireNewPassword = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD_ACTION;
        /** The function called when submitting a new password */
        this.handleSubmit = function (event) { return _this.completeNewPassword(event); };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [
            {
                type: _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["a"].Password,
                required: true,
                handleInputChange: function (event) { return _this.handlePasswordChange(event); },
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                inputProps: {
                    'data-test': 'require-new-password-password-input',
                },
            },
        ];
        this.loading = false;
        this.requiredAttributes = {};
        this.newFormFields = this.formFields;
    }
    class_4.prototype.userHandler = function () {
        this.setCurrentUser();
    };
    class_4.prototype.handleRequiredAttributeInputChange = function (attribute, event) {
        this.requiredAttributes[attribute] = event.target.value;
    };
    class_4.prototype.setCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_6, userRequiredAttributes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.user) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                    case 2:
                        user = _a.sent();
                        if (user)
                            this.currentUser = user;
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_6);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.currentUser = this.user;
                        _a.label = 6;
                    case 6:
                        if (this.currentUser && this.currentUser.challengeParam && this.currentUser.challengeParam.requiredAttributes) {
                            userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;
                            userRequiredAttributes.forEach(function (attribute) {
                                var formField = {
                                    type: attribute,
                                    required: true,
                                    label: _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["r"][attribute].label,
                                    placeholder: _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["r"][attribute].placeholder,
                                    handleInputChange: function (event) { return _this.handleRequiredAttributeInputChange(attribute, event); },
                                    inputProps: {
                                        'data-test': "require-new-password-" + attribute + "-input",
                                    },
                                };
                                _this.newFormFields = __spreadArrays(_this.newFormFields, [formField]);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.componentWillLoad = function () {
        return this.setCurrentUser();
    };
    class_4.prototype.handlePasswordChange = function (event) {
        this.password = event.target.value;
    };
    class_4.prototype.completeNewPassword = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword(this.currentUser, this.password, this.requiredAttributes)];
                    case 2:
                        user = _b.sent();
                        logger$1.debug('complete new password', user);
                        _a = user.challengeName;
                        switch (_a) {
                            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SMSMFA: return [3 /*break*/, 3];
                            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].MFASetup: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn, user);
                        return [3 /*break*/, 7];
                    case 4:
                        logger$1.debug('TOTP setup', user.challengeParam);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup, user);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        error_7 = _b.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_7);
                        return [3 /*break*/, 10];
                    case 9:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    };
    Object.defineProperty(class_4, "watchers", {
        get: function () {
            return {
                "user": ["userHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_4;
}());
var amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";
var AmplifySignIn = /** @class */ (function () {
    function class_5(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign in form is submitted */
        this.handleSubmit = function (event) { return _this.signIn(event); };
        /** Used for header text in sign in component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_HEADER_TEXT;
        /** Used for the submit button text in sign in component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_ACTION;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Hides the sign up link */
        this.hideSignUp = false;
        this.newFormFields = [];
        /* Whether or not the sign-in component is loading */
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.signInAttributes = {
            userInput: '',
            password: '',
        };
    }
    class_5.prototype.componentWillLoad = function () {
        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_5.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_5.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.signInAttributes.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'password':
                return function (event) { return (_this.signInAttributes.password = event.target.value); };
        }
    };
    class_5.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_5.prototype.signIn = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var username;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // avoid submitting the form
                        if (event) {
                            event.preventDefault();
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.signInAttributes.userInput = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                        }
                        username = this.signInAttributes.userInput.trim();
                        return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["h"])(username, this.signInAttributes.password, this.handleAuthStateChange)];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_5.prototype.buildDefaultFormFields = function () {
        var _this = this;
        var formFieldInputs = [];
        switch (this.usernameAlias) {
            case 'email':
                formFieldInputs.push({
                    type: 'email',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('email'),
                    inputProps: {
                        'data-test': 'sign-in-email-input',
                    },
                });
                break;
            case 'phone_number':
                formFieldInputs.push({
                    type: 'phone_number',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('phone_number'),
                    inputProps: {
                        'data-test': 'sign-in-phone-number-input',
                    },
                });
                break;
            case 'username':
            default:
                formFieldInputs.push({
                    type: 'username',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('username'),
                    inputProps: {
                        'data-test': 'sign-in-username-input',
                    },
                });
                break;
        }
        formFieldInputs.push({
            type: 'password',
            hint: (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
                'data-test': 'sign-in-password-input',
            },
        });
        this.newFormFields = __spreadArrays(formFieldInputs);
    };
    class_5.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_2 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                // TODO: handle hint better
                if (newField.type === 'password') {
                    newField['hint'] = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))) : (newField['hint']);
                }
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.setFieldValue(newField, _this.signInAttributes);
                newFields_2.push(newField);
            });
            this.newFormFields = newFields_2;
        }
    };
    class_5.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
        }
    };
    class_5.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-in' }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "federated-buttons" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })), !Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated) && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-strike", null, "or"), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, !this.hideSignUp ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NO_ACCOUNT_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp); }, "data-test": "sign-in-create-account-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CREATE_ACCOUNT_TEXT)))) : (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)))))))));
    };
    Object.defineProperty(class_5, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_5;
}());
AmplifySignIn.style = amplifySignInCss;
var amplifySignUpCss = ":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";
var AmplifySignUp = /** @class */ (function () {
    function class_6(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = function (event) { return _this.signUp(event); };
        /** Used for header text in sign up component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in sign up component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_SUBMIT_BUTTON_TEXT;
        /** Used for the submit button text in sign up component */
        this.haveAccountText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HAVE_ACCOUNT_TEXT;
        /** Text used for the sign in hyperlink */
        this.signInText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        // private userInput: string | PhoneNumberInterface;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.loading = false;
        this.signUpAttributes = {
            username: '',
            password: '',
            attributes: {},
        };
    }
    class_6.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
                return function (event) { return (_this.signUpAttributes.username = event.target.value); };
            case 'password':
                return function (event) { return (_this.signUpAttributes.password = event.target.value); };
            case 'email':
                return function (event) { return (_this.signUpAttributes.attributes.email = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            default:
                return function (event) { return (_this.signUpAttributes.attributes[fieldType] = event.target.value); };
        }
    };
    class_6.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    // TODO: Add validation
    // TODO: Prefix
    class_6.prototype.signUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, signUpAttrs, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        if (this.phoneNumber.phoneNumberValue) {
                            try {
                                this.signUpAttributes.attributes.phone_number = Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                            }
                            catch (error) {
                                Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                            }
                        }
                        switch (this.usernameAlias) {
                            case 'email':
                            case 'phone_number':
                                this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
                                break;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        if (!this.signUpAttributes.username) {
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
                        }
                        if (this.signUpAttributes.username.indexOf(' ') >= 0) {
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].USERNAME_REMOVE_WHITESPACE);
                        }
                        if (this.signUpAttributes.password !== this.signUpAttributes.password.trim()) {
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PASSWORD_REMOVE_WHITESPACE);
                        }
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(this.signUpAttributes)];
                    case 2:
                        data = _a.sent();
                        if (!data) {
                            throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_FAILED);
                        }
                        if (!data.userConfirmed) return [3 /*break*/, 4];
                        return [4 /*yield*/, Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        signUpAttrs = Object.assign({}, this.signUpAttributes);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp, Object.assign(Object.assign({}, data.user), { signUpAttrs: signUpAttrs }));
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_8 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_8);
                        return [3 /*break*/, 8];
                    case 7:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_6.prototype.buildDefaultFormFields = function () {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_USERNAME_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'sign-up-username-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
        }
    };
    class_6.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_3 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.setFieldValue(field, _this.signUpAttributes);
                newFields_3.push(newField);
            });
            this.newFormFields = newFields_3;
        }
    };
    class_6.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
                if (field.value === undefined) {
                    formAttributes.username = '';
                }
                else {
                    formAttributes.username = field.value;
                }
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
            case 'email':
                formAttributes.attributes.email = field.value;
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            default:
                formAttributes.attributes[field.type] = field.value;
                break;
        }
    };
    class_6.prototype.componentWillLoad = function () {
        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_6.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_6.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-up' }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.haveAccountText), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); }, "data-test": "sign-up-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.signInText)))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button" }, this.loading ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)))))))));
    };
    Object.defineProperty(class_6, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_6;
}());
AmplifySignUp.style = amplifySignUpCss;
var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AmplifyVerifyContact');
var AmplifyVerifyContact = /** @class */ (function () {
    function class_7(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Authentication state handler */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.loading = false;
    }
    class_7.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
    };
    class_7.prototype.submit = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var attr, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attr = this.verifyAttr;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit(attr, code)];
                    case 2:
                        data = _a.sent();
                        logger$2.debug(data);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, this.user);
                        this.verifyAttr = null;
                        return [3 /*break*/, 5];
                    case 3:
                        error_9 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_9);
                        logger$2.error(error_9);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_7.prototype.verify = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!contact) {
                            logger$2.error('Neither Email nor Phone Number selected');
                            return [2 /*return*/];
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute(contact)];
                    case 2:
                        data = _a.sent();
                        logger$2.debug(data);
                        this.verifyAttr = contact;
                        return [3 /*break*/, 5];
                    case 3:
                        error_10 = _a.sent();
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_10);
                        logger$2.error(error_10);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_7.prototype.handleInputChange = function (event) {
        var inputName = event.target.name;
        if (inputName === 'code') {
            this.code = event.target.value;
        }
        else if (inputName === 'contact') {
            this.contact = event.target.value;
        }
    };
    class_7.prototype.renderSubmit = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { inputProps: {
                autocomplete: 'off',
                'data-test': 'verify-contact-code-input',
            }, name: "code", placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CODE_PLACEHOLDER), handleInputChange: function (event) { return _this.handleInputChange(event); } })));
    };
    class_7.prototype.renderVerify = function () {
        var _this = this;
        var user = this.user;
        if (!user) {
            logger$2.debug('No user to verify');
            return null;
        }
        var unverified = user.unverified;
        if (!unverified) {
            logger$2.debug('Unverified variable does not exist on user');
            return null;
        }
        var email = unverified.email, phone_number = unverified.phone_number;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, email && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: function (event) { return _this.handleInputChange(event); }, inputProps: {
                'data-test': 'verify-contact-email-radio',
            } })), phone_number && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: function (event) { return _this.handleInputChange(event); }, inputProps: {
                'data-test': 'verify-contact-email-radio',
            } }))));
    };
    class_7.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { handleSubmit: function (event) { return _this.handleSubmit(event); }, headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, _this.user); } }, "Skip")), submitButtonText: this.verifyAttr
                ? _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_SUBMIT_LABEL)
                : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify())));
    };
    return class_7;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNvbmZpcm0tc2lnbi1pbl83LmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2F1dGgtaGVscGVycy1iZDA5NmNhNy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFD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QUFFO0FBQ0g7QUFDQSwyQkFBMkIsNkRBQVc7QUFDdEM7QUFDZ0QiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTNmYjVjMTM5LmpzJztcbmltcG9ydCB7IEkxOG4sIExvZ2dlciwgQ29uc29sZUxvZ2dlciwgaXNFbXB0eSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IE0gYXMgTWZhT3B0aW9uLCBDIGFzIENoYWxsZW5nZU5hbWUsIEEgYXMgQXV0aFN0YXRlLCBhIGFzIEF1dGhGb3JtRmllbGQgfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IFQgYXMgVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9UcmFuc2xhdGlvbnMtYzgzM2Y2NjMuanMnO1xuaW1wb3J0IHsgTiBhcyBOT19BVVRIX01PRFVMRV9GT1VORCwgaCBhcyBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxUIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50LCBhIGFzIGRpc3BhdGNoVG9hc3RIdWJFdmVudCwgYyBhcyBjaGVja1VzZXJuYW1lQWxpYXMsIGkgYXMgaXNIaW50VmFsaWQsIGggYXMgaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UsIGIgYXMgY29tcG9zZVBob25lTnVtYmVySW5wdXQsIHIgYXMgcmVxdWlyZWRBdHRyaWJ1dGVzTWFwIH0gZnJvbSAnLi9oZWxwZXJzLTRmNjFlNWZmLmpzJztcbmltcG9ydCB7IGMgYXMgY2hlY2tDb250YWN0LCBoIGFzIGhhbmRsZVNpZ25JbiB9IGZyb20gJy4vYXV0aC1oZWxwZXJzLWJkMDk2Y2E3LmpzJztcbnZhciBBbXBsaWZ5Q29uZmlybVNpZ25JbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEZpcmVzIHdoZW4gY29uZmlybSBzaWduIGluIGZvcm0gaXMgc3VibWl0dGVkICovXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5jb25maXJtKGV2ZW50KTsgfTtcbiAgICAgICAgLyoqIFVzZWQgZm9yIGhlYWRlciB0ZXh0IGluIGNvbmZpcm0gc2lnbiBpbiBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oZWFkZXJUZXh0ID0gVHJhbnNsYXRpb25zLkNPTkZJUk1fU01TX0NPREU7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgc3VibWl0IGJ1dHRvbiB0ZXh0IGluIGNvbmZpcm0gc2lnbiBpbiBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLkNPTkZJUk07XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JtIGZpZWxkcyBhbGxvd3MgeW91IHRvIHV0aWxpemUgb3VyIHByZS1idWlsdCBjb21wb25lbnRzIHN1Y2ggYXMgdXNlcm5hbWUgZmllbGQsIGNvZGUgZmllbGQsIHBhc3N3b3JkIGZpZWxkLCBlbWFpbCBmaWVsZCwgZXRjLlxuICAgICAgICAgKiBieSBwYXNzaW5nIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB5b3Ugd291bGQgbGlrZSB0aGUgb3JkZXIgb2YgdGhlIGZvcm0gdG8gYmUgaW4uIElmIHlvdSBuZWVkIG1vcmUgY3VzdG9taXphdGlvbiwgc3VjaCBhcyBjaGFuZ2luZ1xuICAgICAgICAgKiB0ZXh0IGZvciBhIGxhYmVsIG9yIGFkanVzdCBhIHBsYWNlaG9sZGVyLCB5b3UgY2FuIGZvbGxvdyB0aGUgc3RydWN0dXJlIGJlbG93IGluIG9yZGVyIHRvIGRvIGp1c3QgdGhhdC5cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIFtcbiAgICAgICAgICogIHtcbiAgICAgICAgICogICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgKiAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgKiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgICAgICAgKiAgICBoaW50OiBzdHJpbmcgfCBGdW5jdGlvbmFsIENvbXBvbmVudCB8IG51bGwsXG4gICAgICAgICAqICAgIHJlcXVpcmVkOiBib29sZWFuXG4gICAgICAgICAqICB9XG4gICAgICAgICAqIF1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUNvZGVDaGFuZ2UoZXZlbnQpOyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIFRoZSBNRkEgb3B0aW9uIHRvIGNvbmZpcm0gd2l0aCAqL1xuICAgICAgICB0aGlzLm1mYU9wdGlvbiA9IE1mYU9wdGlvbi5TTVM7XG4gICAgICAgIC8qIFdoZXRoZXIgb3Igbm90IHRoZSBjb25maXJtLXNpZ24taW4gY29tcG9uZW50IGlzIGxvYWRpbmcgKi9cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS51c2VySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIgJiYgdGhpcy51c2VyWydjaGFsbGVuZ2VOYW1lJ10gPT09IENoYWxsZW5nZU5hbWUuU29mdHdhcmVUb2tlbk1GQSkge1xuICAgICAgICAgICAgdGhpcy5tZmFPcHRpb24gPSBNZmFPcHRpb24uVE9UUDtcbiAgICAgICAgICAgIC8vIElmIGhlYWRlciB0ZXh0IGlzIHVzaW5nIGRlZmF1bHQgdXNlIFRPVFAgc3RyaW5nXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUZXh0ID09PSBUcmFuc2xhdGlvbnMuQ09ORklSTV9TTVNfQ09ERSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5DT05GSVJNX1RPVFBfQ09ERTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFuZGxlQ29kZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmNvZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZmFUeXBlLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1mYVR5cGUgPSB0aGlzLnVzZXJbJ2NoYWxsZW5nZU5hbWUnXSA9PT0gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBID8gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5jb25maXJtU2lnbkluICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgNSwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5jb25maXJtU2lnbkluKHRoaXMudXNlciwgdGhpcy5jb2RlLCBtZmFUeXBlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh0aGlzLnVzZXIsIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGVhZGVyVGV4dDogSTE4bi5nZXQodGhpcy5oZWFkZXJUZXh0KSwgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCwgc3VibWl0QnV0dG9uVGV4dDogSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSwgbG9hZGluZzogdGhpcy5sb2FkaW5nLCBzZWNvbmRhcnlGb290ZXJDb250ZW50OiBoKFwic3BhblwiLCBudWxsLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkJBQ0tfVE9fU0lHTl9JTikpKSB9LCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMuZm9ybUZpZWxkcyB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidXNlclwiOiBbXCJ1c2VySGFuZGxlclwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBBbXBsaWZ5Q29uZmlybVNpZ25VcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18yKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEZpcmVzIHdoZW4gc2lnbiB1cCBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuY29uZmlybVNpZ25VcChldmVudCk7IH07XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiBjb25maXJtIHNpZ24gdXAgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfSEVBREVSX1RFWFQ7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgc3VibWl0IGJ1dHRvbiB0ZXh0IGluIGNvbmZpcm0gc2lnbiB1cCBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9TVUJNSVRfQlVUVE9OX1RFWFQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JtIGZpZWxkcyBhbGxvd3MgeW91IHRvIHV0aWxpemUgb3VyIHByZS1idWlsdCBjb21wb25lbnRzIHN1Y2ggYXMgdXNlcm5hbWUgZmllbGQsIGNvZGUgZmllbGQsIHBhc3N3b3JkIGZpZWxkLCBlbWFpbCBmaWVsZCwgZXRjLlxuICAgICAgICAgKiBieSBwYXNzaW5nIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB5b3Ugd291bGQgbGlrZSB0aGUgb3JkZXIgb2YgdGhlIGZvcm0gdG8gYmUgaW4uIElmIHlvdSBuZWVkIG1vcmUgY3VzdG9taXphdGlvbiwgc3VjaCBhcyBjaGFuZ2luZ1xuICAgICAgICAgKiB0ZXh0IGZvciBhIGxhYmVsIG9yIGFkanVzdCBhIHBsYWNlaG9sZGVyLCB5b3UgY2FuIGZvbGxvdyB0aGUgc3RydWN0dXJlIGJlbG93IGluIG9yZGVyIHRvIGRvIGp1c3QgdGhhdC5cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIFtcbiAgICAgICAgICogIHtcbiAgICAgICAgICogICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgKiAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgKiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgICAgICAgKiAgICBoaW50OiBzdHJpbmcgfCBGdW5jdGlvbmFsIENvbXBvbmVudCB8IG51bGwsXG4gICAgICAgICAqICAgIHJlcXVpcmVkOiBib29sZWFuXG4gICAgICAgICAqICB9XG4gICAgICAgICAqIF1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgLyoqIEF1dGggc3RhdGUgY2hhbmdlIGhhbmRsZXIgZm9yIHRoaXMgY29tcG9uZW50c1xuICAgICAgICAgKiBlLmcuIFNpZ25JbiAtPiAnQ3JlYXRlIEFjY291bnQnIGxpbmsgLT4gU2lnblVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBVc2VybmFtZSBBbGlhcyBpcyB1c2VkIHRvIHNldHVwIGF1dGhlbnRpY2F0aW9uIHdpdGggYHVzZXJuYW1lYCwgYGVtYWlsYCBvciBgcGhvbmVfbnVtYmVyYCAgKi9cbiAgICAgICAgdGhpcy51c2VybmFtZUFsaWFzID0gJ3VzZXJuYW1lJztcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0ge1xuICAgICAgICAgICAgY291bnRyeURpYWxDb2RlVmFsdWU6IENPVU5UUllfRElBTF9DT0RFX0RFRkFVTFQsXG4gICAgICAgICAgICBwaG9uZU51bWJlclZhbHVlOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc18yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS51c2VySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE86IFVzZSBvcHRpb25hbCBjaGFpbmluZyBpbnN0ZWFkXG4gICAgICAgIHRoaXMudXNlcklucHV0ID0gdGhpcy51c2VyICYmIHRoaXMudXNlci51c2VybmFtZTtcbiAgICAgICAgdGhpcy5fc2lnblVwQXR0cnMgPSB0aGlzLnVzZXIgJiYgdGhpcy51c2VyLnNpZ25VcEF0dHJzO1xuICAgICAgICBjaGVja1VzZXJuYW1lQWxpYXModGhpcy51c2VybmFtZUFsaWFzKTtcbiAgICAgICAgdGhpcy5idWlsZEZvcm1GaWVsZHMoKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlwiICsgdGhpcy51c2VybmFtZUFsaWFzLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKFwiXCIgKyB0aGlzLnVzZXJuYW1lQWxpYXMpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51c2VySW5wdXQgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9DT0RFX0xBQkVMKSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9DT0RFX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoaW50OiAoaChcImRpdlwiLCBudWxsLCBJMThuLmdldChUcmFuc2xhdGlvbnMuQ09ORklSTV9TSUdOX1VQX0xPU1RfQ09ERSksICcgJywgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVzZW5kQ29uZmlybUNvZGUoKTsgfSB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuQ09ORklSTV9TSUdOX1VQX1JFU0VORF9DT0RFKSkpKSxcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnY29kZScpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmJ1aWxkRm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZm9ybUZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld0ZpZWxkc18xID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZpZWxkLnR5cGUgPT09ICdjb2RlJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZFsnaGludCddID0gaXNIaW50VmFsaWQobmV3RmllbGQpID8gKGgoXCJkaXZcIiwgbnVsbCwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9MT1NUX0NPREUpLCAnICcsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlc2VuZENvbmZpcm1Db2RlKCk7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9SRVNFTkRfQ09ERSkpKSkgOiAobmV3RmllbGRbJ2hpbnQnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0ZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayhldmVudCwgZmllbGQpOyB9O1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkc18xLnB1c2gobmV3RmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBuZXdGaWVsZHNfMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZmllbGRUeXBlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLnVzZXJJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZSk7IH07XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGhhbmRsZVBob25lTnVtYmVyQ2hhbmdlKGV2ZW50LCBfdGhpcy5waG9uZU51bWJlcik7IH07XG4gICAgICAgICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuY29kZSA9IGV2ZW50LnRhcmdldC52YWx1ZSk7IH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLmNvdW50cnlEaWFsQ29kZVZhbHVlID0gZmllbGQuZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIucGhvbmVOdW1iZXJWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGZuVG9DYWxsID0gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgID8gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICAgICAgICAgIGNiKGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoZmllbGQudHlwZSk7XG4gICAgICAgIGZuVG9DYWxsKGV2ZW50LCBjYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnJlc2VuZENvbmZpcm1Db2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGgucmVzZW5kU2lnblVwICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VySW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFRyYW5zbGF0aW9ucy5FTVBUWV9VU0VSTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IHRoaXMudXNlcklucHV0LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGgucmVzZW5kU2lnblVwKHRoaXMudXNlcklucHV0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Db25maXJtU2lnblVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFRPRE86IEFkZCB2YWxpZGF0aW9uXG4gICAgLy8gVE9ETzogUHJlZml4XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29uZmlybVNpZ25VcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uZmlybVNpZ25VcFJlc3VsdCwgZXJyb3JfMztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguY29uZmlybVNpZ25VcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBjb21wb3NlUGhvbmVOdW1iZXJJbnB1dCh0aGlzLnBob25lTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCA3LCA4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlcklucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihUcmFuc2xhdGlvbnMuRU1QVFlfVVNFUk5BTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSB0aGlzLnVzZXJJbnB1dC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmNvbmZpcm1TaWduVXAodGhpcy51c2VySW5wdXQsIHRoaXMuY29kZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtU2lnblVwUmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtU2lnblVwUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfRkFJTEVEKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLl9zaWduVXBBdHRycyAmJiB0aGlzLl9zaWduVXBBdHRycy5wYXNzd29yZCAmJiB0aGlzLl9zaWduVXBBdHRycy5wYXNzd29yZCAhPT0gJycpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG8gc2lnbiBpbiB1c2VyIGlmIHBhc3N3b3JkIGlzIGF2YWlsYWJsZSBmcm9tIHByZXZpb3VzIHdvcmtmbG93XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoYW5kbGVTaWduSW4odGhpcy51c2VySW5wdXQsIHRoaXMuX3NpZ25VcEF0dHJzLnBhc3N3b3JkLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvIHNpZ24gaW4gdXNlciBpZiBwYXNzd29yZCBpcyBhdmFpbGFibGUgZnJvbSBwcmV2aW91cyB3b3JrZmxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduSW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGVhZGVyVGV4dDogSTE4bi5nZXQodGhpcy5oZWFkZXJUZXh0KSwgc3VibWl0QnV0dG9uVGV4dDogSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSwgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCwgbG9hZGluZzogdGhpcy5sb2FkaW5nLCBzZWNvbmRhcnlGb290ZXJDb250ZW50OiBoKFwiZGl2XCIsIG51bGwsIGgoXCJzcGFuXCIsIG51bGwsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbkluKTsgfSB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuQkFDS19UT19TSUdOX0lOKSkpKSB9LCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMubmV3Rm9ybUZpZWxkcyB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZm9ybUZpZWxkc1wiOiBbXCJmb3JtRmllbGRzSGFuZGxlclwiXSxcbiAgICAgICAgICAgICAgICBcInVzZXJcIjogW1widXNlckhhbmRsZXJcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMjtcbn0oKSk7XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignRm9yZ290UGFzc3dvcmQnKTtcbnZhciBBbXBsaWZ5Rm9yZ290UGFzc3dvcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMyhob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBUaGUgaGVhZGVyIHRleHQgb2YgdGhlIGZvcmdvdCBwYXNzd29yZCBzZWN0aW9uICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5SRVNFVF9ZT1VSX1BBU1NXT1JEO1xuICAgICAgICAvKiogVGhlIHRleHQgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgc2VuZCBjb2RlIGJ1dHRvbiBmb3IgdGhlIGZvcm0gKi9cbiAgICAgICAgdGhpcy5zZW5kQnV0dG9uVGV4dCA9IFRyYW5zbGF0aW9ucy5TRU5EX0NPREU7XG4gICAgICAgIC8qKiBUaGUgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBzdWJtaXQgYnV0dG9uIGZvciB0aGUgZm9ybSAqL1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblRleHQgPSBUcmFuc2xhdGlvbnMuU1VCTUlUO1xuICAgICAgICAvKiogVGhlIGZvcm0gZmllbGRzIGRpc3BsYXllZCBpbnNpZGUgb2YgdGhlIGZvcmdvdCBwYXNzd29yZCBmb3JtICovXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkcyA9IFtdO1xuICAgICAgICAvKiogVGhlIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIG1ha2luZyBhIHJlcXVlc3QgdG8gcmVzZXQgcGFzc3dvcmQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTZW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5zZW5kKGV2ZW50KTsgfTtcbiAgICAgICAgLyoqIFRoZSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBzdWJtaXR0aW5nIGEgbmV3IHBhc3N3b3JkICovXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5zdWJtaXQoZXZlbnQpOyB9O1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICAvKiogVXNlcm5hbWUgQWxpYXMgaXMgdXNlZCB0byBzZXR1cCBhdXRoZW50aWNhdGlvbiB3aXRoIGB1c2VybmFtZWAsIGBlbWFpbGAgb3IgYHBob25lX251bWJlcmAgICovXG4gICAgICAgIHRoaXMudXNlcm5hbWVBbGlhcyA9ICd1c2VybmFtZSc7XG4gICAgICAgIHRoaXMuZGVsaXZlcnkgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW107XG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRBdHRycyA9IHtcbiAgICAgICAgICAgIHVzZXJJbnB1dDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVXNlcm5hbWVBbGlhcyh0aGlzLnVzZXJuYW1lQWxpYXMpO1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5idWlsZEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmZvcm1GaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdGaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBuZXdGaWVsZFsnaGFuZGxlSW5wdXRDaGFuZ2UnXSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2soZXZlbnQsIGZpZWxkKTsgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXdGb3JtRmllbGRzLnB1c2gobmV3RmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy51c2VybmFtZUFsaWFzKSB7XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ2ZvcmdvdC1wYXNzd29yZC1lbWFpbC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bob25lX251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwaG9uZV9udW1iZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ2ZvcmdvdC1wYXNzd29yZC1waG9uZS1udW1iZXItaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCd1c2VybmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnZm9yZ290LXBhc3N3b3JkLXVzZXJuYW1lLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZmllbGRUeXBlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLmZvcmdvdFBhc3N3b3JkQXR0cnMudXNlcklucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlKTsgfTtcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UoZXZlbnQsIF90aGlzLnBob25lTnVtYmVyKTsgfTtcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy5mb3Jnb3RQYXNzd29yZEF0dHJzW2ZpZWxkVHlwZV0gPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnNldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoZmllbGQsIGZvcm1BdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnVzZXJJbnB1dCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMudXNlcklucHV0ID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waG9uZU51bWJlci5jb3VudHJ5RGlhbENvZGVWYWx1ZSA9IGZpZWxkLmRpYWxDb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLnBob25lTnVtYmVyVmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzW2ZpZWxkLnR5cGVdID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlc1tmaWVsZC50eXBlXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGZpZWxkKSB7XG4gICAgICAgIHZhciBmblRvQ2FsbCA9IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA/IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgICAgICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKGZpZWxkLnR5cGUpO1xuICAgICAgICBmblRvQ2FsbChldmVudCwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBlcnJvcl80O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5mb3Jnb3RQYXNzd29yZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZEF0dHJzLnVzZXJJbnB1dCA9IGNvbXBvc2VQaG9uZU51bWJlcklucHV0KHRoaXMucGhvbmVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCA0LCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmZvcmdvdFBhc3N3b3JkKHRoaXMuZm9yZ290UGFzc3dvcmRBdHRycy51c2VySW5wdXQudHJpbSgpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnY29kZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ2ZvcmdvdC1wYXNzd29yZC1jb2RlLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogSTE4bi5nZXQoVHJhbnNsYXRpb25zLk5FV19QQVNTV09SRF9MQUJFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuTkVXX1BBU1NXT1JEX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsaXZlcnkgPSBkYXRhLkNvZGVEZWxpdmVyeURldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfNCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl80KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIHVzZXJJbnB1dCwgY29kZSwgcGFzc3dvcmQsIGRhdGEsIGVycm9yXzU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmZvcmdvdFBhc3N3b3JkU3VibWl0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLmZvcmdvdFBhc3N3b3JkQXR0cnMsIHVzZXJJbnB1dCA9IF9hLnVzZXJJbnB1dCwgY29kZSA9IF9hLmNvZGUsIHBhc3N3b3JkID0gX2EucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmZvcmdvdFBhc3N3b3JkU3VibWl0KHVzZXJJbnB1dCwgY29kZSwgcGFzc3dvcmQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduSW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxpdmVyeSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl81KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1Ym1pdEZuID0gdGhpcy5kZWxpdmVyeSA/IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU3VibWl0KGV2ZW50KTsgfSA6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU2VuZChldmVudCk7IH07XG4gICAgICAgIHZhciBzdWJtaXRCdXR0b25UZXh0ID0gdGhpcy5kZWxpdmVyeSA/IHRoaXMuc3VibWl0QnV0dG9uVGV4dCA6IHRoaXMuc2VuZEJ1dHRvblRleHQ7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBoYW5kbGVTdWJtaXQ6IHN1Ym1pdEZuLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsIHNlY29uZGFyeUZvb3RlckNvbnRlbnQ6IGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbkluKTsgfSwgXCJkYXRhLXRlc3RcIjogXCJmb3Jnb3QtcGFzc3dvcmQtYmFjay10by1zaWduLWluLWxpbmtcIiB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuQkFDS19UT19TSUdOX0lOKSksIHRlc3REYXRhUHJlZml4OiAnZm9yZ290LXBhc3N3b3JkJywgc3VibWl0QnV0dG9uVGV4dDogSTE4bi5nZXQoc3VibWl0QnV0dG9uVGV4dCkgfSwgaChcImFtcGxpZnktYXV0aC1maWVsZHNcIiwgeyBmb3JtRmllbGRzOiB0aGlzLm5ld0Zvcm1GaWVsZHMgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMywgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImZvcm1GaWVsZHNcIjogW1wiZm9ybUZpZWxkc0hhbmRsZXJcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMztcbn0oKSk7XG52YXIgbG9nZ2VyJDEgPSBuZXcgQ29uc29sZUxvZ2dlcignYW1wbGlmeS1yZXF1aXJlLW5ldy1wYXNzd29yZCcpO1xudmFyIEFtcGxpZnlSZXF1aXJlTmV3UGFzc3dvcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNChob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBUaGUgaGVhZGVyIHRleHQgb2YgdGhlIGZvcmdvdCBwYXNzd29yZCBzZWN0aW9uICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5DSEFOR0VfUEFTU1dPUkQ7XG4gICAgICAgIC8qKiBUaGUgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBzdWJtaXQgYnV0dG9uIGZvciB0aGUgZm9ybSAqL1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblRleHQgPSBUcmFuc2xhdGlvbnMuQ0hBTkdFX1BBU1NXT1JEX0FDVElPTjtcbiAgICAgICAgLyoqIFRoZSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBzdWJtaXR0aW5nIGEgbmV3IHBhc3N3b3JkICovXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5jb21wbGV0ZU5ld1Bhc3N3b3JkKGV2ZW50KTsgfTtcbiAgICAgICAgLyoqIEF1dGggc3RhdGUgY2hhbmdlIGhhbmRsZXIgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlID0gZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudDtcbiAgICAgICAgLyoqIFRoZSBmb3JtIGZpZWxkcyBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBmb3Jnb3QgcGFzc3dvcmQgZm9ybSAqL1xuICAgICAgICB0aGlzLmZvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXV0aEZvcm1GaWVsZC5QYXNzd29yZCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZShldmVudCk7IH0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5ORVdfUEFTU1dPUkRfTEFCRUwpLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuTkVXX1BBU1NXT1JEX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAncmVxdWlyZS1uZXctcGFzc3dvcmQtcGFzc3dvcmQtaW5wdXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gdGhpcy5mb3JtRmllbGRzO1xuICAgIH1cbiAgICBjbGFzc180LnByb3RvdHlwZS51c2VySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50VXNlcigpO1xuICAgIH07XG4gICAgY2xhc3NfNC5wcm90b3R5cGUuaGFuZGxlUmVxdWlyZWRBdHRyaWJ1dGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRBdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5zZXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIGVycm9yXzYsIHVzZXJSZXF1aXJlZEF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy51c2VyKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfNiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl82KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciAmJiB0aGlzLmN1cnJlbnRVc2VyLmNoYWxsZW5nZVBhcmFtICYmIHRoaXMuY3VycmVudFVzZXIuY2hhbGxlbmdlUGFyYW0ucmVxdWlyZWRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJlcXVpcmVkQXR0cmlidXRlcyA9IHRoaXMuY3VycmVudFVzZXIuY2hhbGxlbmdlUGFyYW0ucmVxdWlyZWRBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSZXF1aXJlZEF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRmllbGQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByZXF1aXJlZEF0dHJpYnV0ZXNNYXBbYXR0cmlidXRlXS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiByZXF1aXJlZEF0dHJpYnV0ZXNNYXBbYXR0cmlidXRlXS5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVJlcXVpcmVkQXR0cmlidXRlSW5wdXRDaGFuZ2UoYXR0cmlidXRlLCBldmVudCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6IFwicmVxdWlyZS1uZXctcGFzc3dvcmQtXCIgKyBhdHRyaWJ1dGUgKyBcIi1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubmV3Rm9ybUZpZWxkcyA9IF9fc3ByZWFkQXJyYXlzKF90aGlzLm5ld0Zvcm1GaWVsZHMsIFtmb3JtRmllbGRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Q3VycmVudFVzZXIoKTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5jb21wbGV0ZU5ld1Bhc3N3b3JkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1c2VyLCBfYSwgZXJyb3JfNztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguY29tcGxldGVOZXdQYXNzd29yZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDgsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmNvbXBsZXRlTmV3UGFzc3dvcmQodGhpcy5jdXJyZW50VXNlciwgdGhpcy5wYXNzd29yZCwgdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQxLmRlYnVnKCdjb21wbGV0ZSBuZXcgcGFzc3dvcmQnLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdXNlci5jaGFsbGVuZ2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ2hhbGxlbmdlTmFtZS5TTVNNRkE6IHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ2hhbGxlbmdlTmFtZS5NRkFTZXR1cDogcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQxLmRlYnVnKCdUT1RQIHNldHVwJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuVE9UUFNldHVwLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl83ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBoYW5kbGVTdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsIHNlY29uZGFyeUZvb3RlckNvbnRlbnQ6IGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbkluKTsgfSB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuQkFDS19UT19TSUdOX0lOKSksIHN1Ym1pdEJ1dHRvblRleHQ6IEkxOG4uZ2V0KHRoaXMuc3VibWl0QnV0dG9uVGV4dCkgfSwgaChcImFtcGxpZnktYXV0aC1maWVsZHNcIiwgeyBmb3JtRmllbGRzOiB0aGlzLm5ld0Zvcm1GaWVsZHMgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfNCwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInVzZXJcIjogW1widXNlckhhbmRsZXJcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfNDtcbn0oKSk7XG52YXIgYW1wbGlmeVNpZ25JbkNzcyA9IFwiOmhvc3R7LS1mb290ZXItc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pOy0tZm9vdGVyLWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSk7LS1mb290ZXItZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSk7LS1mb250LXdlaWdodDp2YXIoLS1hbXBsaWZ5LWZvbnQtd2VpZ2h0KX0uc2lnbi1pbi1mb3JtLWZvb3Rlcntmb250LWZhbWlseTp2YXIoLS1mb290ZXItZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb290ZXItc2l6ZSk7Y29sb3I6dmFyKC0tZm9vdGVyLWNvbG9yKTtmb250LXdlaWdodDotLWZvbnQtd2VpZ2h0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5zaWduLWluLWZvcm0tZm9vdGVyIGFtcGxpZnktYnV0dG9ue21hcmdpbi1ib3R0b206MC42MjVyZW19QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXsuc2lnbi1pbi1mb3JtLWZvb3RlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtYWxpZ246YmFzZWxpbmU7YWxpZ24taXRlbXM6YmFzZWxpbmV9LnNpZ24taW4tZm9ybS1mb290ZXIgYW1wbGlmeS1idXR0b257bWFyZ2luLWJvdHRvbTowfX0uc2lnbi1pbi1mb3JtLWZvb3RlciAqKyp7bWFyZ2luLWJvdHRvbToxNXB4fVwiO1xudmFyIEFtcGxpZnlTaWduSW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBGaXJlcyB3aGVuIHNpZ24gaW4gZm9ybSBpcyBzdWJtaXR0ZWQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNpZ25JbihldmVudCk7IH07XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiBzaWduIGluIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhlYWRlclRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9JTl9IRUFERVJfVEVYVDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uIHRleHQgaW4gc2lnbiBpbiBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLlNJR05fSU5fQUNUSU9OO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICAvKiogVXNlcm5hbWUgQWxpYXMgaXMgdXNlZCB0byBzZXR1cCBhdXRoZW50aWNhdGlvbiB3aXRoIGB1c2VybmFtZWAsIGBlbWFpbGAgb3IgYHBob25lX251bWJlcmAgICovXG4gICAgICAgIHRoaXMudXNlcm5hbWVBbGlhcyA9ICd1c2VybmFtZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JtIGZpZWxkcyBhbGxvd3MgeW91IHRvIHV0aWxpemUgb3VyIHByZS1idWlsdCBjb21wb25lbnRzIHN1Y2ggYXMgdXNlcm5hbWUgZmllbGQsIGNvZGUgZmllbGQsIHBhc3N3b3JkIGZpZWxkLCBlbWFpbCBmaWVsZCwgZXRjLlxuICAgICAgICAgKiBieSBwYXNzaW5nIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB5b3Ugd291bGQgbGlrZSB0aGUgb3JkZXIgb2YgdGhlIGZvcm0gdG8gYmUgaW4uIElmIHlvdSBuZWVkIG1vcmUgY3VzdG9taXphdGlvbiwgc3VjaCBhcyBjaGFuZ2luZ1xuICAgICAgICAgKiB0ZXh0IGZvciBhIGxhYmVsIG9yIGFkanVzdCBhIHBsYWNlaG9sZGVyLCB5b3UgY2FuIGZvbGxvdyB0aGUgc3RydWN0dXJlIGJlbG93IGluIG9yZGVyIHRvIGRvIGp1c3QgdGhhdC5cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIFtcbiAgICAgICAgICogIHtcbiAgICAgICAgICogICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgKiAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgKiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgICAgICAgKiAgICBoaW50OiBzdHJpbmcgfCBGdW5jdGlvbmFsIENvbXBvbmVudCB8IG51bGwsXG4gICAgICAgICAqICAgIHJlcXVpcmVkOiBib29sZWFuXG4gICAgICAgICAqICB9XG4gICAgICAgICAqIF1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgLyoqIEhpZGVzIHRoZSBzaWduIHVwIGxpbmsgKi9cbiAgICAgICAgdGhpcy5oaWRlU2lnblVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtdO1xuICAgICAgICAvKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lnbi1pbiBjb21wb25lbnQgaXMgbG9hZGluZyAqL1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaWduSW5BdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgdXNlcklucHV0OiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVXNlcm5hbWVBbGlhcyh0aGlzLnVzZXJuYW1lQWxpYXMpO1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChmaWVsZFR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnbkluQXR0cmlidXRlcy51c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy5zaWduSW5BdHRyaWJ1dGVzLnBhc3N3b3JkID0gZXZlbnQudGFyZ2V0LnZhbHVlKTsgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGZpZWxkKSB7XG4gICAgICAgIHZhciBmblRvQ2FsbCA9IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA/IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgICAgICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKGZpZWxkLnR5cGUpO1xuICAgICAgICBmblRvQ2FsbChldmVudCwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXJuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgc3VibWl0dGluZyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlcm5hbWVBbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25JbkF0dHJpYnV0ZXMudXNlcklucHV0ID0gY29tcG9zZVBob25lTnVtYmVySW5wdXQodGhpcy5waG9uZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSA9IHRoaXMuc2lnbkluQXR0cmlidXRlcy51c2VySW5wdXQudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFuZGxlU2lnbkluKHVzZXJuYW1lLCB0aGlzLnNpZ25JbkF0dHJpYnV0ZXMucGFzc3dvcmQsIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzUucHJvdG90eXBlLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmb3JtRmllbGRJbnB1dHMgPSBbXTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBmb3JtRmllbGRJbnB1dHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLWluLWVtYWlsLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgZm9ybUZpZWxkSW5wdXRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwaG9uZV9udW1iZXInKSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLWluLXBob25lLW51bWJlci1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZvcm1GaWVsZElucHV0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCd1c2VybmFtZScpLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24taW4tdXNlcm5hbWUtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1GaWVsZElucHV0cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICBoaW50OiAoaChcImRpdlwiLCBudWxsLCBJMThuLmdldChUcmFuc2xhdGlvbnMuRk9SR09UX1BBU1NXT1JEX1RFWFQpLCAnICcsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuRm9yZ290UGFzc3dvcmQpOyB9LCBcImRhdGEtdGVzdFwiOiBcInNpZ24taW4tZm9yZ290LXBhc3N3b3JkLWxpbmtcIiB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuUkVTRVRfUEFTU1dPUkRfVEVYVCkpKSksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwYXNzd29yZCcpLFxuICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi1pbi1wYXNzd29yZC1pbnB1dCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gX19zcHJlYWRBcnJheXMoZm9ybUZpZWxkSW5wdXRzKTtcbiAgICB9O1xuICAgIGNsYXNzXzUucHJvdG90eXBlLmJ1aWxkRm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZm9ybUZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld0ZpZWxkc18yID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGhpbnQgYmV0dGVyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGRbJ2hpbnQnXSA9IGlzSGludFZhbGlkKG5ld0ZpZWxkKSA/IChoKFwiZGl2XCIsIG51bGwsIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5GT1JHT1RfUEFTU1dPUkRfVEVYVCksICcgJywgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZCk7IH0sIFwiZGF0YS10ZXN0XCI6IFwic2lnbi1pbi1mb3Jnb3QtcGFzc3dvcmQtbGlua1wiIH0sIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5SRVNFVF9QQVNTV09SRF9URVhUKSkpKSA6IChuZXdGaWVsZFsnaGludCddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3RmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ10gPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0V2l0aENhbGxiYWNrKGV2ZW50LCBmaWVsZCk7IH07XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RmllbGRWYWx1ZShuZXdGaWVsZCwgX3RoaXMuc2lnbkluQXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgbmV3RmllbGRzXzIucHVzaChuZXdGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IG5ld0ZpZWxkc18yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5zZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKGZpZWxkLCBmb3JtQXR0cmlidXRlcykge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy51c2VySW5wdXQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnVzZXJJbnB1dCA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIuY291bnRyeURpYWxDb2RlVmFsdWUgPSBmaWVsZC5kaWFsQ29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZU51bWJlci5waG9uZU51bWJlclZhbHVlID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnBhc3N3b3JkID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBoYW5kbGVTdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LCB0ZXN0RGF0YVByZWZpeDogJ3NpZ24taW4nIH0sIGgoXCJkaXZcIiwgeyBzbG90OiBcInN1YnRpdGxlXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImhlYWRlci1zdWJ0aXRsZVwiIH0pKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImZlZGVyYXRlZC1idXR0b25zXCIgfSwgaChcImFtcGxpZnktZmVkZXJhdGVkLWJ1dHRvbnNcIiwgeyBoYW5kbGVBdXRoU3RhdGVDaGFuZ2U6IHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlLCBmZWRlcmF0ZWQ6IHRoaXMuZmVkZXJhdGVkIH0pKSwgIWlzRW1wdHkodGhpcy5mZWRlcmF0ZWQpICYmIGgoXCJhbXBsaWZ5LXN0cmlrZVwiLCBudWxsLCBcIm9yXCIpLCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMubmV3Rm9ybUZpZWxkcyB9KSwgaChcImRpdlwiLCB7IHNsb3Q6IFwiYW1wbGlmeS1mb3JtLXNlY3Rpb24tZm9vdGVyXCIsIGNsYXNzOiBcInNpZ24taW4tZm9ybS1mb290ZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZm9vdGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInNlY29uZGFyeS1mb290ZXItY29udGVudFwiIH0sICF0aGlzLmhpZGVTaWduVXAgPyAoaChcInNwYW5cIiwgbnVsbCwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLk5PX0FDQ09VTlRfVEVYVCksICcgJywgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduVXApOyB9LCBcImRhdGEtdGVzdFwiOiBcInNpZ24taW4tY3JlYXRlLWFjY291bnQtbGlua1wiIH0sIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DUkVBVEVfQUNDT1VOVF9URVhUKSkpKSA6IChoKFwic3BhblwiLCBudWxsKSkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwicHJpbWFyeS1mb290ZXItY29udGVudFwiIH0sIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiB0aGlzLmxvYWRpbmcsIFwiZGF0YS10ZXN0XCI6IFwic2lnbi1pbi1zaWduLWluLWJ1dHRvblwiIH0sIHRoaXMubG9hZGluZyA/IGgoXCJhbXBsaWZ5LWxvYWRpbmctc3Bpbm5lclwiLCBudWxsKSA6IGgoXCJzcGFuXCIsIG51bGwsIEkxOG4uZ2V0KHRoaXMuc3VibWl0QnV0dG9uVGV4dCkpKSkpKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc181LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZm9ybUZpZWxkc1wiOiBbXCJmb3JtRmllbGRzSGFuZGxlclwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc181O1xufSgpKTtcbkFtcGxpZnlTaWduSW4uc3R5bGUgPSBhbXBsaWZ5U2lnbkluQ3NzO1xudmFyIGFtcGxpZnlTaWduVXBDc3MgPSBcIjpob3N0ey0tZm9vdGVyLWZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpOy0tZm9vdGVyLWZvbnQtc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pOy0tZm9vdGVyLWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSk7LS1mb250LXdlaWdodDp2YXIoLS1hbXBsaWZ5LWZvbnQtd2VpZ2h0KX0uc2lnbi11cC1mb3JtLWZvb3Rlcntmb250LWZhbWlseTp2YXIoLS1mb290ZXItZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb290ZXItZm9udC1zaXplKTtjb2xvcjp2YXIoLS1mb290ZXItY29sb3IpO2ZvbnQtd2VpZ2h0Oi0tZm9udC13ZWlnaHQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpkaXN0cmlidXRlO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9LnNpZ24tdXAtZm9ybS1mb290ZXIgYW1wbGlmeS1idXR0b257bWFyZ2luLWJvdHRvbTowLjYyNXJlbX1AbWVkaWEgKG1pbi13aWR0aDogNjcycHgpey5zaWduLXVwLWZvcm0tZm9vdGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleC1hbGlnbjpiYXNlbGluZTthbGlnbi1pdGVtczpiYXNlbGluZX0uc2lnbi11cC1mb3JtLWZvb3RlciBhbXBsaWZ5LWJ1dHRvbnttYXJnaW4tYm90dG9tOjB9fS5zaWduLXVwLWZvcm0tZm9vdGVyICorKnttYXJnaW4tYm90dG9tOjE1cHh9XCI7XG52YXIgQW1wbGlmeVNpZ25VcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc182KGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEZpcmVzIHdoZW4gc2lnbiB1cCBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuc2lnblVwKGV2ZW50KTsgfTtcbiAgICAgICAgLyoqIFVzZWQgZm9yIGhlYWRlciB0ZXh0IGluIHNpZ24gdXAgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5TSUdOX1VQX0hFQURFUl9URVhUO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHN1Ym1pdCBidXR0b24gdGV4dCBpbiBzaWduIHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9VUF9TVUJNSVRfQlVUVE9OX1RFWFQ7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgc3VibWl0IGJ1dHRvbiB0ZXh0IGluIHNpZ24gdXAgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGF2ZUFjY291bnRUZXh0ID0gVHJhbnNsYXRpb25zLlNJR05fVVBfSEFWRV9BQ0NPVU5UX1RFWFQ7XG4gICAgICAgIC8qKiBUZXh0IHVzZWQgZm9yIHRoZSBzaWduIGluIGh5cGVybGluayAqL1xuICAgICAgICB0aGlzLnNpZ25JblRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9JTl9URVhUO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9ybSBmaWVsZHMgYWxsb3dzIHlvdSB0byB1dGlsaXplIG91ciBwcmUtYnVpbHQgY29tcG9uZW50cyBzdWNoIGFzIHVzZXJuYW1lIGZpZWxkLCBjb2RlIGZpZWxkLCBwYXNzd29yZCBmaWVsZCwgZW1haWwgZmllbGQsIGV0Yy5cbiAgICAgICAgICogYnkgcGFzc2luZyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgeW91IHdvdWxkIGxpa2UgdGhlIG9yZGVyIG9mIHRoZSBmb3JtIHRvIGJlIGluLiBJZiB5b3UgbmVlZCBtb3JlIGN1c3RvbWl6YXRpb24sIHN1Y2ggYXMgY2hhbmdpbmdcbiAgICAgICAgICogdGV4dCBmb3IgYSBsYWJlbCBvciBhZGp1c3QgYSBwbGFjZWhvbGRlciwgeW91IGNhbiBmb2xsb3cgdGhlIHN0cnVjdHVyZSBiZWxvdyBpbiBvcmRlciB0byBkbyBqdXN0IHRoYXQuXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBbXG4gICAgICAgICAqICB7XG4gICAgICAgICAqICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgICogICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgICogICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICAgICAgICogICAgaGludDogc3RyaW5nIHwgRnVuY3Rpb25hbCBDb21wb25lbnQgfCBudWxsLFxuICAgICAgICAgKiAgICByZXF1aXJlZDogYm9vbGVhblxuICAgICAgICAgKiAgfVxuICAgICAgICAgKiBdXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtRmllbGRzID0gW107XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgKiBlLmcuIFNpZ25JbiAtPiAnQ3JlYXRlIEFjY291bnQnIGxpbmsgLT4gU2lnblVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBVc2VybmFtZSBBbGlhcyBpcyB1c2VkIHRvIHNldHVwIGF1dGhlbnRpY2F0aW9uIHdpdGggYHVzZXJuYW1lYCwgYGVtYWlsYCBvciBgcGhvbmVfbnVtYmVyYCAgKi9cbiAgICAgICAgdGhpcy51c2VybmFtZUFsaWFzID0gJ3VzZXJuYW1lJztcbiAgICAgICAgLy8gcHJpdmF0ZSB1c2VySW5wdXQ6IHN0cmluZyB8IFBob25lTnVtYmVySW50ZXJmYWNlO1xuICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lnblVwQXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc182LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChmaWVsZFR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnblVwQXR0cmlidXRlcy51c2VybmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZSk7IH07XG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLnNpZ25VcEF0dHJpYnV0ZXMucGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy5zaWduVXBBdHRyaWJ1dGVzLmF0dHJpYnV0ZXMuZW1haWwgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnblVwQXR0cmlidXRlcy5hdHRyaWJ1dGVzW2ZpZWxkVHlwZV0gPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc182LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGZuVG9DYWxsID0gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgID8gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICAgICAgICAgIGNiKGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoZmllbGQudHlwZSk7XG4gICAgICAgIGZuVG9DYWxsKGV2ZW50LCBjYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIC8vIFRPRE86IEFkZCB2YWxpZGF0aW9uXG4gICAgLy8gVE9ETzogUHJlZml4XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuc2lnblVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzaWduVXBBdHRycywgZXJyb3JfODtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2lnblVwICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5waG9uZU51bWJlci5waG9uZU51bWJlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduVXBBdHRyaWJ1dGVzLmF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyID0gY29tcG9zZVBob25lTnVtYmVySW5wdXQodGhpcy5waG9uZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy51c2VybmFtZUFsaWFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnblVwQXR0cmlidXRlcy51c2VybmFtZSA9IHRoaXMuc2lnblVwQXR0cmlidXRlcy5hdHRyaWJ1dGVzW3RoaXMudXNlcm5hbWVBbGlhc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsIDcsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaWduVXBBdHRyaWJ1dGVzLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFRyYW5zbGF0aW9ucy5FTVBUWV9VU0VSTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaWduVXBBdHRyaWJ1dGVzLnVzZXJuYW1lLmluZGV4T2YoJyAnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFRyYW5zbGF0aW9ucy5VU0VSTkFNRV9SRU1PVkVfV0hJVEVTUEFDRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaWduVXBBdHRyaWJ1dGVzLnBhc3N3b3JkICE9PSB0aGlzLnNpZ25VcEF0dHJpYnV0ZXMucGFzc3dvcmQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFRyYW5zbGF0aW9ucy5QQVNTV09SRF9SRU1PVkVfV0hJVEVTUEFDRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnNpZ25VcCh0aGlzLnNpZ25VcEF0dHJpYnV0ZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihUcmFuc2xhdGlvbnMuU0lHTl9VUF9GQUlMRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnVzZXJDb25maXJtZWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFuZGxlU2lnbkluKHRoaXMuc2lnblVwQXR0cmlidXRlcy51c2VybmFtZSwgdGhpcy5zaWduVXBBdHRyaWJ1dGVzLnBhc3N3b3JkLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnblVwQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNpZ25VcEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXAsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YS51c2VyKSwgeyBzaWduVXBBdHRyczogc2lnblVwQXR0cnMgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl84ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fVVBfRU1BSUxfUExBQ0VIT0xERVIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtZW1haWwtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuU0lHTl9VUF9QQVNTV09SRF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1wYXNzd29yZC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3Bob25lX251bWJlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1waG9uZS1udW1iZXItaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaG9uZV9udW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGhvbmVfbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLXBob25lLW51bWJlci1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX1VQX1BBU1NXT1JEX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLXBhc3N3b3JkLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fVVBfRU1BSUxfUExBQ0VIT0xERVIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgnZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtZW1haWwtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fVVBfVVNFUk5BTUVfUExBQ0VIT0xERVIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgndXNlcm5hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtdXNlcm5hbWUtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuU0lHTl9VUF9QQVNTV09SRF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1wYXNzd29yZC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX1VQX0VNQUlMX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLWVtYWlsLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaG9uZV9udW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGhvbmVfbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLXBob25lLW51bWJlci1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzYucHJvdG90eXBlLmJ1aWxkRm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZm9ybUZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld0ZpZWxkc18zID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgbmV3RmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ10gPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0V2l0aENhbGxiYWNrKGV2ZW50LCBmaWVsZCk7IH07XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RmllbGRWYWx1ZShmaWVsZCwgX3RoaXMuc2lnblVwQXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgbmV3RmllbGRzXzMucHVzaChuZXdGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IG5ld0ZpZWxkc18zO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc182LnByb3RvdHlwZS5zZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKGZpZWxkLCBmb3JtQXR0cmlidXRlcykge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy51c2VybmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMudXNlcm5hbWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnBhc3N3b3JkID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLmF0dHJpYnV0ZXMuZW1haWwgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIuY291bnRyeURpYWxDb2RlVmFsdWUgPSBmaWVsZC5kaWFsQ29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZU51bWJlci5waG9uZU51bWJlclZhbHVlID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLmF0dHJpYnV0ZXNbZmllbGQudHlwZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVXNlcm5hbWVBbGlhcyh0aGlzLnVzZXJuYW1lQWxpYXMpO1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc182LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBoYW5kbGVTdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LCB0ZXN0RGF0YVByZWZpeDogJ3NpZ24tdXAnIH0sIGgoXCJkaXZcIiwgeyBzbG90OiBcInN1YnRpdGxlXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImhlYWRlci1zdWJ0aXRsZVwiIH0pKSwgaChcImFtcGxpZnktYXV0aC1maWVsZHNcIiwgeyBmb3JtRmllbGRzOiB0aGlzLm5ld0Zvcm1GaWVsZHMgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzaWduLXVwLWZvcm0tZm9vdGVyXCIsIHNsb3Q6IFwiYW1wbGlmeS1mb3JtLXNlY3Rpb24tZm9vdGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImZvb3RlclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzZWNvbmRhcnktZm9vdGVyLWNvbnRlbnRcIiB9LCBoKFwic3BhblwiLCBudWxsLCBJMThuLmdldCh0aGlzLmhhdmVBY2NvdW50VGV4dCksICcgJywgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduSW4pOyB9LCBcImRhdGEtdGVzdFwiOiBcInNpZ24tdXAtc2lnbi1pbi1saW5rXCIgfSwgSTE4bi5nZXQodGhpcy5zaWduSW5UZXh0KSkpKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInByaW1hcnktZm9vdGVyLWNvbnRlbnRcIiB9LCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBcImRhdGEtdGVzdFwiOiBcInNpZ24tdXAtY3JlYXRlLWFjY291bnQtYnV0dG9uXCIgfSwgdGhpcy5sb2FkaW5nID8gaChcImFtcGxpZnktbG9hZGluZy1zcGlubmVyXCIsIG51bGwpIDogaChcInNwYW5cIiwgbnVsbCwgSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSkpKSkpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzYsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJmb3JtRmllbGRzXCI6IFtcImZvcm1GaWVsZHNIYW5kbGVyXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzY7XG59KCkpO1xuQW1wbGlmeVNpZ25VcC5zdHlsZSA9IGFtcGxpZnlTaWduVXBDc3M7XG52YXIgbG9nZ2VyJDIgPSBuZXcgTG9nZ2VyKCdBbXBsaWZ5VmVyaWZ5Q29udGFjdCcpO1xudmFyIEFtcGxpZnlWZXJpZnlDb250YWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzcoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXV0aGVudGljYXRpb24gc3RhdGUgaGFuZGxlciAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjbGFzc183LnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy52ZXJpZnlBdHRyID8gdGhpcy5zdWJtaXQodGhpcy5jb2RlKSA6IHRoaXMudmVyaWZ5KHRoaXMuY29udGFjdCk7XG4gICAgfTtcbiAgICBjbGFzc183LnByb3RvdHlwZS5zdWJtaXQgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciwgZGF0YSwgZXJyb3JfOTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIgPSB0aGlzLnZlcmlmeUF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGgudmVyaWZ5Q3VycmVudFVzZXJBdHRyaWJ1dGVTdWJtaXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCA0LCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnZlcmlmeUN1cnJlbnRVc2VyQXR0cmlidXRlU3VibWl0KGF0dHIsIGNvZGUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQyLmRlYnVnKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCB0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlBdHRyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl85ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDIuZXJyb3IoZXJyb3JfOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc183LnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgZXJyb3JfMTA7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIkMi5lcnJvcignTmVpdGhlciBFbWFpbCBub3IgUGhvbmUgTnVtYmVyIHNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnZlcmlmeUN1cnJlbnRVc2VyQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC52ZXJpZnlDdXJyZW50VXNlckF0dHJpYnV0ZShjb250YWN0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIkMi5kZWJ1ZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QXR0ciA9IGNvbnRhY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMTAgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDIuZXJyb3IoZXJyb3JfMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfNy5wcm90b3R5cGUuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGlucHV0TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBpZiAoaW5wdXROYW1lID09PSAnY29kZScpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dE5hbWUgPT09ICdjb250YWN0Jykge1xuICAgICAgICAgICAgdGhpcy5jb250YWN0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc183LnByb3RvdHlwZS5yZW5kZXJTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCBudWxsLCBoKFwiYW1wbGlmeS1pbnB1dFwiLCB7IGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAndmVyaWZ5LWNvbnRhY3QtY29kZS1pbnB1dCcsXG4gICAgICAgICAgICB9LCBuYW1lOiBcImNvZGVcIiwgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT0RFX1BMQUNFSE9MREVSKSwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOyB9IH0pKSk7XG4gICAgfTtcbiAgICBjbGFzc183LnByb3RvdHlwZS5yZW5kZXJWZXJpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1c2VyID0gdGhpcy51c2VyO1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIGxvZ2dlciQyLmRlYnVnKCdObyB1c2VyIHRvIHZlcmlmeScpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVudmVyaWZpZWQgPSB1c2VyLnVudmVyaWZpZWQ7XG4gICAgICAgIGlmICghdW52ZXJpZmllZCkge1xuICAgICAgICAgICAgbG9nZ2VyJDIuZGVidWcoJ1VudmVyaWZpZWQgdmFyaWFibGUgZG9lcyBub3QgZXhpc3Qgb24gdXNlcicpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVtYWlsID0gdW52ZXJpZmllZC5lbWFpbCwgcGhvbmVfbnVtYmVyID0gdW52ZXJpZmllZC5waG9uZV9udW1iZXI7XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCBudWxsLCBlbWFpbCAmJiAoaChcImFtcGxpZnktcmFkaW8tYnV0dG9uXCIsIHsgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5WRVJJRllfQ09OVEFDVF9FTUFJTF9MQUJFTCksIGtleTogXCJlbWFpbFwiLCBuYW1lOiBcImNvbnRhY3RcIiwgdmFsdWU6IFwiZW1haWxcIiwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOyB9LCBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICd2ZXJpZnktY29udGFjdC1lbWFpbC1yYWRpbycsXG4gICAgICAgICAgICB9IH0pKSwgcGhvbmVfbnVtYmVyICYmIChoKFwiYW1wbGlmeS1yYWRpby1idXR0b25cIiwgeyBsYWJlbDogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlZFUklGWV9DT05UQUNUX1BIT05FX0xBQkVMKSwga2V5OiBcInBob25lX251bWJlclwiLCBuYW1lOiBcImNvbnRhY3RcIiwgdmFsdWU6IFwicGhvbmVfbnVtYmVyXCIsIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTsgfSwgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAndmVyaWZ5LWNvbnRhY3QtZW1haWwtcmFkaW8nLFxuICAgICAgICAgICAgfSB9KSkpKTtcbiAgICB9O1xuICAgIGNsYXNzXzcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJhbXBsaWZ5LWZvcm0tc2VjdGlvblwiLCB7IGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpOyB9LCBoZWFkZXJUZXh0OiBJMThuLmdldChUcmFuc2xhdGlvbnMuVkVSSUZZX0NPTlRBQ1RfSEVBREVSX1RFWFQpLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsIHNlY29uZGFyeUZvb3RlckNvbnRlbnQ6IGgoXCJzcGFuXCIsIG51bGwsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbmVkSW4sIF90aGlzLnVzZXIpOyB9IH0sIFwiU2tpcFwiKSksIHN1Ym1pdEJ1dHRvblRleHQ6IHRoaXMudmVyaWZ5QXR0clxuICAgICAgICAgICAgICAgID8gSTE4bi5nZXQoVHJhbnNsYXRpb25zLlZFUklGWV9DT05UQUNUX1NVQk1JVF9MQUJFTClcbiAgICAgICAgICAgICAgICA6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5WRVJJRllfQ09OVEFDVF9WRVJJRllfTEFCRUwpIH0sIHRoaXMudmVyaWZ5QXR0ciA/IHRoaXMucmVuZGVyU3VibWl0KCkgOiB0aGlzLnJlbmRlclZlcmlmeSgpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzc7XG59KCkpO1xuZXhwb3J0IHsgQW1wbGlmeUNvbmZpcm1TaWduSW4gYXMgYW1wbGlmeV9jb25maXJtX3NpZ25faW4sIEFtcGxpZnlDb25maXJtU2lnblVwIGFzIGFtcGxpZnlfY29uZmlybV9zaWduX3VwLCBBbXBsaWZ5Rm9yZ290UGFzc3dvcmQgYXMgYW1wbGlmeV9mb3Jnb3RfcGFzc3dvcmQsIEFtcGxpZnlSZXF1aXJlTmV3UGFzc3dvcmQgYXMgYW1wbGlmeV9yZXF1aXJlX25ld19wYXNzd29yZCwgQW1wbGlmeVNpZ25JbiBhcyBhbXBsaWZ5X3NpZ25faW4sIEFtcGxpZnlTaWduVXAgYXMgYW1wbGlmeV9zaWduX3VwLCBBbXBsaWZ5VmVyaWZ5Q29udGFjdCBhcyBhbXBsaWZ5X3ZlcmlmeV9jb250YWN0IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgTG9nZ2VyLCBpc0VtcHR5IH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgQSBhcyBBdXRoU3RhdGUsIEMgYXMgQ2hhbGxlbmdlTmFtZSB9IGZyb20gJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgeyBBdXRoLCBDb2duaXRvVXNlciB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IFQgYXMgVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9UcmFuc2xhdGlvbnMtYzgzM2Y2NjMuanMnO1xuaW1wb3J0IHsgTiBhcyBOT19BVVRIX01PRFVMRV9GT1VORCB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGEgYXMgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50IH0gZnJvbSAnLi9oZWxwZXJzLTRmNjFlNWZmLmpzJztcbnZhciBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdhdXRoLWhlbHBlcnMnKTtcbmZ1bmN0aW9uIGNoZWNrQ29udGFjdCh1c2VyLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhLCBuZXdVc2VyLCBlcnJvcl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGgudmVyaWZpZWRDb250YWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGB1c2VyYCBpcyBhIGZlZGVyYXRlZCB1c2VyLCB3ZSBzaG91bGRuJ3QgY2FsbCBgdmVyaWZpZWRDb250YWN0YFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBgdXNlcmAgaXNuJ3QgYENvZ25pdG9Vc2VyYFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ29nbml0b1VzZXIodXNlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbmVkSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGgudmVyaWZpZWRDb250YWN0KHVzZXIpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eShkYXRhLnZlcmlmaWVkKSB8fCBpc0VtcHR5KGRhdGEudW52ZXJpZmllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbmVkSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24odXNlciwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlZlcmlmeUNvbnRhY3QsIG5ld1VzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgaGFuZGxlU2lnbkluID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VyLCBlcnJvcl8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5zaWduSW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgOSwgLCAxMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguc2lnbkluKHVzZXJuYW1lLCBwYXNzd29yZCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKHVzZXIpO1xuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5TTVNNRkEgfHwgdXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLlNvZnR3YXJlVG9rZW5NRkEpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ2NvbmZpcm0gdXNlciB3aXRoICcgKyB1c2VyLmNoYWxsZW5nZU5hbWUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ29uZmlybVNpZ25JbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLk5ld1Bhc3N3b3JkUmVxdWlyZWQpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3JlcXVpcmUgbmV3IHBhc3N3b3JkJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5SZXNldFBhc3N3b3JkLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuTUZBU2V0dXApKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1RPVFAgc2V0dXAnLCB1c2VyLmNoYWxsZW5nZVBhcmFtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlRPVFBTZXR1cCwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLkN1c3RvbUNoYWxsZW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNoYWxsZW5nZVBhcmFtICYmXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY2hhbGxlbmdlUGFyYW0udHJpZ2dlciA9PT0gJ3RydWUnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdjdXN0b20gY2hhbGxlbmdlJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5DdXN0b21Db25maXJtU2lnbkluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hlY2tDb250YWN0KHVzZXIsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDg7XG4gICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcl8yLmNvZGUgPT09ICdVc2VyTm90Q29uZmlybWVkRXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3RoZSB1c2VyIGlzIG5vdCBjb25maXJtZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Db25maXJtU2lnblVwLCB7IHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMi5jb2RlID09PSAnUGFzc3dvcmRSZXNldFJlcXVpcmVkRXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3RoZSB1c2VyIHJlcXVpcmVzIGEgbmV3IHBhc3N3b3JkJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuRm9yZ290UGFzc3dvcmQsIHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8yLmNvZGUgPT09ICdJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uJyAmJiBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMi5tZXNzYWdlID0gVHJhbnNsYXRpb25zLkVNUFRZX1BBU1NXT1JEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBpc0NvZ25pdG9Vc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlciBpbnN0YW5jZW9mIENvZ25pdG9Vc2VyO1xufTtcbmV4cG9ydCB7IGNoZWNrQ29udGFjdCBhcyBjLCBoYW5kbGVTaWduSW4gYXMgaCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==