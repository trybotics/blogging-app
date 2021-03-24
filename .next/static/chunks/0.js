(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_authenticator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_authenticator", function() { return AmplifyAuthenticator; });
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
var _a;








var authSlotNames = (_a = {},
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn] = 'sign-in',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn] = 'confirm-sign-in',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp] = 'sign-up',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp] = 'confirm-sign-up',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword] = 'forgot-password',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword] = 'require-new-password',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact] = 'verify-contact',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup] = 'totp-setup',
    _a[_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading] = 'loading',
    _a);
var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Authenticator');
var AmplifyAuthenticator = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = function () { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    Object(_auth_helpers_bd096ca7_js__WEBPACK_IMPORTED_MODULE_7__["c"])(payload.data, _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"]);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_this.initialAuthState);
            }
        };
        this.handleToastEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["T"]:
                    if (payload.message)
                        _this.toastMessage = payload.message;
                    break;
            }
        };
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var byHostedUI;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState, authData) {
                            _this.onAuthStateChange(authState, authData);
                            _this.toastMessage = '';
                        });
                        if (!this.hideToast)
                            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
                        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
                        Object(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["appendToCognitoUserAgent"])('amplify-authenticator');
                        byHostedUI = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        localStorage.removeItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        if (!(byHostedUI !== 'true')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.checkUser()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.checkUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                }
                return [2 /*return*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()
                        .then(function (user) {
                        Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, user);
                    })
                        .catch(function () { return __awaiter(_this, void 0, void 0, function () {
                        var cachedAuthState, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cachedAuthState = null;
                                    try {
                                        cachedAuthState = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["c"]);
                                    }
                                    catch (error) {
                                        logger.debug('Failed to get the auth state from local storage', error);
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 5]);
                                    if (!(cachedAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    logger.debug('Failed to sign out', error_1);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    class_1.prototype.onAuthStateChange = function (nextAuthState, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (nextAuthState === undefined)
                    return [2 /*return*/, logger.error('nextAuthState cannot be undefined')];
                logger.info('Inside onAuthStateChange Method current authState:', this.authState);
                if (nextAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut) {
                    this.authState = this.initialAuthState;
                }
                else {
                    this.authState = nextAuthState;
                }
                this.authData = data;
                if (this.authData)
                    logger.log('Auth Data was set:', this.authData);
                if (this.authState === nextAuthState) {
                    this.handleAuthStateChange(this.authState, this.authData);
                    logger.info("authState has been updated to " + this.authState);
                }
                return [2 /*return*/];
            });
        });
    };
    // Returns the auth component corresponding to the given authState.
    class_1.prototype.getAuthComponent = function (authState) {
        switch (authState) {
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-in", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-up", { usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-forgot-password", { usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-require-new-password", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-verify-contact", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Loading...");
            default:
                throw new Error("Unhandled auth state: " + authState);
        }
    };
    // Returns a slot containing the Auth component corresponding to the given authState
    class_1.prototype.getSlotWithAuthComponent = function (authState) {
        var authComponent = this.getAuthComponent(authState);
        var slotName = authSlotNames[authState];
        var slotIsEmpty = this.el.querySelector("[slot=\"" + slotName + "\"]") === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: slotName }, slotIsEmpty && authComponent);
    };
    class_1.prototype.componentWillUnload = function () {
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
        if (!this.hideToast)
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
        return _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["o"];
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, !this.hideToast && this.toastMessage && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: this.toastMessage, handleClose: function () {
                _this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn ? ([Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "greetings" }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)]) : (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AmplifyAuthenticator.style = amplifyAuthenticatorCss;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWF1dGhlbnRpY2F0b3IuZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvdWktY29tcG9uZW50cy9kaXN0L2VzbS1lczUvYXV0aC1oZWxwZXJzLWJkMDk2Y2E3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FB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QUFDQTtBQUNBLHFCQUFxQixzREFBSSxXQUFXLHNEQUFJO0FBQ3hDLG9DQUFvQyx3REFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlEQUFhLGtDQUFrQyx5REFBYTtBQUN6RztBQUNBLHNDQUFzQyx5REFBUztBQUMvQztBQUNBO0FBQ0EsNkNBQTZDLHlEQUFhO0FBQzFEO0FBQ0Esc0NBQXNDLHlEQUFTO0FBQy9DO0FBQ0E7QUFDQSw2Q0FBNkMseURBQWE7QUFDMUQ7QUFDQSxzQ0FBc0MseURBQVM7QUFDL0M7QUFDQTtBQUNBLDZDQUE2Qyx5REFBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseURBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsaUJBQWlCLHFCQUFxQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsa0JBQWtCLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkRBQVk7QUFDbEQ7QUFDQSxnQkFBZ0IsOERBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBLDJCQUEyQiw2REFBVztBQUN0QztBQUNnRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9hO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0IHsgTG9nZ2VyLCBIdWIgfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBBIGFzIEF1dGhTdGF0ZSB9IGZyb20gJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgeyBhcHBlbmRUb0NvZ25pdG9Vc2VyQWdlbnQsIEF1dGggfSBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgJy4vVHJhbnNsYXRpb25zLWM4MzNmNjYzLmpzJztcbmltcG9ydCB7IFQgYXMgVE9BU1RfQVVUSF9FUlJPUl9FVkVOVCwgVSBhcyBVSV9BVVRIX0NIQU5ORUwsIEEgYXMgQVVUSF9DSEFOTkVMLCBSIGFzIFJFRElSRUNURURfRlJPTV9IT1NURURfVUksIE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQsIGMgYXMgQVVUSEVOVElDQVRPUl9BVVRIU1RBVEUgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQsIG8gYXMgb25BdXRoVUlTdGF0ZUNoYW5nZSB9IGZyb20gJy4vaGVscGVycy00ZjYxZTVmZi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNoZWNrQ29udGFjdCB9IGZyb20gJy4vYXV0aC1oZWxwZXJzLWJkMDk2Y2E3LmpzJztcbnZhciBhdXRoU2xvdE5hbWVzID0gKF9hID0ge30sXG4gICAgX2FbQXV0aFN0YXRlLlNpZ25Jbl0gPSAnc2lnbi1pbicsXG4gICAgX2FbQXV0aFN0YXRlLkNvbmZpcm1TaWduSW5dID0gJ2NvbmZpcm0tc2lnbi1pbicsXG4gICAgX2FbQXV0aFN0YXRlLlNpZ25VcF0gPSAnc2lnbi11cCcsXG4gICAgX2FbQXV0aFN0YXRlLkNvbmZpcm1TaWduVXBdID0gJ2NvbmZpcm0tc2lnbi11cCcsXG4gICAgX2FbQXV0aFN0YXRlLkZvcmdvdFBhc3N3b3JkXSA9ICdmb3Jnb3QtcGFzc3dvcmQnLFxuICAgIF9hW0F1dGhTdGF0ZS5SZXNldFBhc3N3b3JkXSA9ICdyZXF1aXJlLW5ldy1wYXNzd29yZCcsXG4gICAgX2FbQXV0aFN0YXRlLlZlcmlmeUNvbnRhY3RdID0gJ3ZlcmlmeS1jb250YWN0JyxcbiAgICBfYVtBdXRoU3RhdGUuVE9UUFNldHVwXSA9ICd0b3RwLXNldHVwJyxcbiAgICBfYVtBdXRoU3RhdGUuTG9hZGluZ10gPSAnbG9hZGluZycsXG4gICAgX2EpO1xudmFyIGFtcGxpZnlBdXRoZW50aWNhdG9yQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tYW1wbGlmeS1iYWNrZ3JvdW5kLWNvbG9yKTstLXdpZHRoOjI4Ljc1cmVtOy0tbWluLXdpZHRoOjIwcmVtOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy0tYm94LXNoYWRvdzoxcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7LS1ib3JkZXItcmFkaXVzOjZweDstLXBhZGRpbmc6MzVweCA0MHB4Oy0tbWFyZ2luLWJvdHRvbToyMHB4Oy0tY29udGFpbmVyLWhlaWdodDoxMDB2aDstLWNvbnRhaW5lci1kaXNwbGF5OmZsZXg7LS1jb250YWluZXItanVzdGlmeTpjZW50ZXI7LS1jb250YWluZXItYWxpZ246Y2VudGVyfS5hdXRoLWNvbnRhaW5lcntkaXNwbGF5OnZhcigtLWNvbnRhaW5lci1kaXNwbGF5KTstbXMtZmxleC1wYWNrOnZhcigtLWNvbnRhaW5lci1qdXN0aWZ5KTtqdXN0aWZ5LWNvbnRlbnQ6dmFyKC0tY29udGFpbmVyLWp1c3RpZnkpOy1tcy1mbGV4LWFsaWduOnZhcigtLWNvbnRhaW5lci1hbGlnbik7YWxpZ24taXRlbXM6dmFyKC0tY29udGFpbmVyLWFsaWduKTttaW4taGVpZ2h0OnZhcigtLWNvbnRhaW5lci1oZWlnaHQpfVwiO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0F1dGhlbnRpY2F0b3InKTtcbnZhciBBbXBsaWZ5QXV0aGVudGljYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEluaXRpYWwgc3RhcnRpbmcgc3RhdGUgb2YgdGhlIEF1dGhlbnRpY2F0b3IgY29tcG9uZW50LiBFLmcuIElmIGBzaWdudXBgIGlzIHBhc3NlZCB0aGUgZGVmYXVsdCBjb21wb25lbnQgaXMgc2V0IHRvIEFtcGxpZnlTaWduVXAgKi9cbiAgICAgICAgdGhpcy5pbml0aWFsQXV0aFN0YXRlID0gQXV0aFN0YXRlLlNpZ25JbjtcbiAgICAgICAgLyoqIENhbGxiYWNrIGZvciBBdXRoZW50aWNhdG9yIHN0YXRlIG1hY2hpbmUgY2hhbmdlcyAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgLyoqIEhpZGUgYW1wbGlmeS10b2FzdCBmb3IgYXV0aCBlcnJvcnMgKi9cbiAgICAgICAgdGhpcy5oaWRlVG9hc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUgPSBBdXRoU3RhdGUuTG9hZGluZztcbiAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5oYW5kbGVFeHRlcm5hbEF1dGhFdmVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICAgICAgc3dpdGNoIChwYXlsb2FkLmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29nbml0b0hvc3RlZFVJJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzaWduSW4nOlxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRhY3QocGF5bG9hZC5kYXRhLCBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29nbml0b0hvc3RlZFVJX2ZhaWx1cmUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhcnNpbmdVcmxfZmFpbHVyZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3VzdG9tR3JlZXRpbmdTaWduT3V0JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQoX3RoaXMuaW5pdGlhbEF1dGhTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlVG9hc3RFdmVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICAgICAgc3dpdGNoIChwYXlsb2FkLmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUT0FTVF9BVVRIX0VSUk9SX0VWRU5UOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG9hc3RNZXNzYWdlID0gcGF5bG9hZC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBieUhvc3RlZFVJO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQXV0aFVJU3RhdGVDaGFuZ2UoZnVuY3Rpb24gKGF1dGhTdGF0ZSwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkF1dGhTdGF0ZUNoYW5nZShhdXRoU3RhdGUsIGF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b2FzdE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhpZGVUb2FzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdWIubGlzdGVuKFVJX0FVVEhfQ0hBTk5FTCwgdGhpcy5oYW5kbGVUb2FzdEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEh1Yi5saXN0ZW4oQVVUSF9DSEFOTkVMLCB0aGlzLmhhbmRsZUV4dGVybmFsQXV0aEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvQ29nbml0b1VzZXJBZ2VudCgnYW1wbGlmeS1hdXRoZW50aWNhdG9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBieUhvc3RlZFVJID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVESVJFQ1RFRF9GUk9NX0hPU1RFRF9VSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShSRURJUkVDVEVEX0ZST01fSE9TVEVEX1VJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJ5SG9zdGVkVUkgIT09ICd0cnVlJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jaGVja1VzZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2hlY2tVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50KEF1dGhTdGF0ZS5TaWduZWRJbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlZEF1dGhTdGF0ZSwgZXJyb3JfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEF1dGhTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEF1dGhTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVEhFTlRJQ0FUT1JfQVVUSFNUQVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGdldCB0aGUgYXV0aCBzdGF0ZSBmcm9tIGxvY2FsIHN0b3JhZ2UnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjYWNoZWRBdXRoU3RhdGUgPT09IEF1dGhTdGF0ZS5TaWduZWRJbikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5zaWduT3V0KCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQodGhpcy5pbml0aWFsQXV0aFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gc2lnbiBvdXQnLCBlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7IH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uQXV0aFN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKG5leHRBdXRoU3RhdGUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0QXV0aFN0YXRlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBsb2dnZXIuZXJyb3IoJ25leHRBdXRoU3RhdGUgY2Fubm90IGJlIHVuZGVmaW5lZCcpXTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnSW5zaWRlIG9uQXV0aFN0YXRlQ2hhbmdlIE1ldGhvZCBjdXJyZW50IGF1dGhTdGF0ZTonLCB0aGlzLmF1dGhTdGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRBdXRoU3RhdGUgPT09IEF1dGhTdGF0ZS5TaWduZWRPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdGUgPSB0aGlzLmluaXRpYWxBdXRoU3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0ZSA9IG5leHRBdXRoU3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhEYXRhKVxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdBdXRoIERhdGEgd2FzIHNldDonLCB0aGlzLmF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU3RhdGUgPT09IG5leHRBdXRoU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UodGhpcy5hdXRoU3RhdGUsIHRoaXMuYXV0aERhdGEpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhcImF1dGhTdGF0ZSBoYXMgYmVlbiB1cGRhdGVkIHRvIFwiICsgdGhpcy5hdXRoU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBSZXR1cm5zIHRoZSBhdXRoIGNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBhdXRoU3RhdGUuXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0QXV0aENvbXBvbmVudCA9IGZ1bmN0aW9uIChhdXRoU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChhdXRoU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLlNpZ25JbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gaChcImFtcGxpZnktc2lnbi1pblwiLCB7IGZlZGVyYXRlZDogdGhpcy5mZWRlcmF0ZWQsIHVzZXJuYW1lQWxpYXM6IHRoaXMudXNlcm5hbWVBbGlhcyB9KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLkNvbmZpcm1TaWduSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGgoXCJhbXBsaWZ5LWNvbmZpcm0tc2lnbi1pblwiLCB7IHVzZXI6IHRoaXMuYXV0aERhdGEgfSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5TaWduVXA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGgoXCJhbXBsaWZ5LXNpZ24tdXBcIiwgeyB1c2VybmFtZUFsaWFzOiB0aGlzLnVzZXJuYW1lQWxpYXMgfSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5Db25maXJtU2lnblVwOlxuICAgICAgICAgICAgICAgIHJldHVybiBoKFwiYW1wbGlmeS1jb25maXJtLXNpZ24tdXBcIiwgeyB1c2VyOiB0aGlzLmF1dGhEYXRhLCB1c2VybmFtZUFsaWFzOiB0aGlzLnVzZXJuYW1lQWxpYXMgfSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gaChcImFtcGxpZnktZm9yZ290LXBhc3N3b3JkXCIsIHsgdXNlcm5hbWVBbGlhczogdGhpcy51c2VybmFtZUFsaWFzIH0pO1xuICAgICAgICAgICAgY2FzZSBBdXRoU3RhdGUuUmVzZXRQYXNzd29yZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gaChcImFtcGxpZnktcmVxdWlyZS1uZXctcGFzc3dvcmRcIiwgeyB1c2VyOiB0aGlzLmF1dGhEYXRhIH0pO1xuICAgICAgICAgICAgY2FzZSBBdXRoU3RhdGUuVmVyaWZ5Q29udGFjdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gaChcImFtcGxpZnktdmVyaWZ5LWNvbnRhY3RcIiwgeyB1c2VyOiB0aGlzLmF1dGhEYXRhIH0pO1xuICAgICAgICAgICAgY2FzZSBBdXRoU3RhdGUuVE9UUFNldHVwOlxuICAgICAgICAgICAgICAgIHJldHVybiBoKFwiYW1wbGlmeS10b3RwLXNldHVwXCIsIHsgdXNlcjogdGhpcy5hdXRoRGF0YSB9KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLkxvYWRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgYXV0aCBzdGF0ZTogXCIgKyBhdXRoU3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZXR1cm5zIGEgc2xvdCBjb250YWluaW5nIHRoZSBBdXRoIGNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBhdXRoU3RhdGVcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRTbG90V2l0aEF1dGhDb21wb25lbnQgPSBmdW5jdGlvbiAoYXV0aFN0YXRlKSB7XG4gICAgICAgIHZhciBhdXRoQ29tcG9uZW50ID0gdGhpcy5nZXRBdXRoQ29tcG9uZW50KGF1dGhTdGF0ZSk7XG4gICAgICAgIHZhciBzbG90TmFtZSA9IGF1dGhTbG90TmFtZXNbYXV0aFN0YXRlXTtcbiAgICAgICAgdmFyIHNsb3RJc0VtcHR5ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiW3Nsb3Q9XFxcIlwiICsgc2xvdE5hbWUgKyBcIlxcXCJdXCIpID09PSBudWxsOyAvLyB0cnVlIGlmIG5vIGVsZW1lbnQgaGFzIGJlZW4gaW5zZXJ0ZWQgdG8gdGhlIHNsb3RcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbm5lY3QgdGhlIGlubmVyIGF1dGggY29tcG9uZW50IHRvIERPTSBvbmx5IGlmIHRoZSBzbG90IGhhc24ndCBiZWVuIG92ZXJ3cml0dGVuLiBUaGlzIHByZXZlbnRzXG4gICAgICAgICAqIHRoZSBvdmVyd3JpdHRlbiBjb21wb25lbnQgZnJvbSBjYWxsaW5nIGl0cyBsaWZlY3ljbGUgbWV0aG9kcy5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBoKFwic2xvdFwiLCB7IG5hbWU6IHNsb3ROYW1lIH0sIHNsb3RJc0VtcHR5ICYmIGF1dGhDb21wb25lbnQpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSHViLnJlbW92ZShBVVRIX0NIQU5ORUwsIHRoaXMuaGFuZGxlRXh0ZXJuYWxBdXRoRXZlbnQpO1xuICAgICAgICBpZiAoIXRoaXMuaGlkZVRvYXN0KVxuICAgICAgICAgICAgSHViLnJlbW92ZShVSV9BVVRIX0NIQU5ORUwsIHRoaXMuaGFuZGxlVG9hc3RFdmVudCk7XG4gICAgICAgIHJldHVybiBvbkF1dGhVSVN0YXRlQ2hhbmdlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgIXRoaXMuaGlkZVRvYXN0ICYmIHRoaXMudG9hc3RNZXNzYWdlICYmIChoKFwiYW1wbGlmeS10b2FzdFwiLCB7IG1lc3NhZ2U6IHRoaXMudG9hc3RNZXNzYWdlLCBoYW5kbGVDbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRvYXN0TWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgfSwgXCJkYXRhLXRlc3RcIjogXCJhdXRoZW50aWNhdG9yLWVycm9yXCIgfSkpLCB0aGlzLmF1dGhTdGF0ZSA9PT0gQXV0aFN0YXRlLlNpZ25lZEluID8gKFtoKFwic2xvdFwiLCB7IG5hbWU6IFwiZ3JlZXRpbmdzXCIgfSksIGgoXCJzbG90XCIsIG51bGwpXSkgOiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImF1dGgtY29udGFpbmVyXCIgfSwgdGhpcy5nZXRTbG90V2l0aEF1dGhDb21wb25lbnQodGhpcy5hdXRoU3RhdGUpKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbkFtcGxpZnlBdXRoZW50aWNhdG9yLnN0eWxlID0gYW1wbGlmeUF1dGhlbnRpY2F0b3JDc3M7XG5leHBvcnQgeyBBbXBsaWZ5QXV0aGVudGljYXRvciBhcyBhbXBsaWZ5X2F1dGhlbnRpY2F0b3IgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBMb2dnZXIsIGlzRW1wdHkgfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBBIGFzIEF1dGhTdGF0ZSwgQyBhcyBDaGFsbGVuZ2VOYW1lIH0gZnJvbSAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCB7IEF1dGgsIENvZ25pdG9Vc2VyIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG5pbXBvcnQgeyBOIGFzIE5PX0FVVEhfTU9EVUxFX0ZPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xuaW1wb3J0IHsgYSBhcyBkaXNwYXRjaFRvYXN0SHViRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMtNGY2MWU1ZmYuanMnO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ2F1dGgtaGVscGVycycpO1xuZnVuY3Rpb24gY2hlY2tDb250YWN0KHVzZXIsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEsIG5ld1VzZXIsIGVycm9yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC52ZXJpZmllZENvbnRhY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYHVzZXJgIGlzIGEgZmVkZXJhdGVkIHVzZXIsIHdlIHNob3VsZG4ndCBjYWxsIGB2ZXJpZmllZENvbnRhY3RgXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGB1c2VyYCBpc24ndCBgQ29nbml0b1VzZXJgXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb2duaXRvVXNlcih1c2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC52ZXJpZmllZENvbnRhY3QodXNlcildO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KGRhdGEudmVyaWZpZWQpIHx8IGlzRW1wdHkoZGF0YS51bnZlcmlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdVc2VyID0gT2JqZWN0LmFzc2lnbih1c2VyLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuVmVyaWZ5Q29udGFjdCwgbmV3VXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbnZhciBoYW5kbGVTaWduSW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXIsIGVycm9yXzI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnNpZ25JbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA5LCAsIDEwXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5zaWduSW4odXNlcm5hbWUsIHBhc3N3b3JkKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdXNlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcodXNlcik7XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLlNNU01GQSB8fCB1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuU29mdHdhcmVUb2tlbk1GQSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnY29uZmlybSB1c2VyIHdpdGggJyArIHVzZXIuY2hhbGxlbmdlTmFtZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Db25maXJtU2lnbkluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuTmV3UGFzc3dvcmRSZXF1aXJlZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygncmVxdWlyZSBuZXcgcGFzc3dvcmQnLCB1c2VyLmNoYWxsZW5nZVBhcmFtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlJlc2V0UGFzc3dvcmQsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5NRkFTZXR1cCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnVE9UUCBzZXR1cCcsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuVE9UUFNldHVwLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuQ3VzdG9tQ2hhbGxlbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY2hhbGxlbmdlUGFyYW0gJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jaGFsbGVuZ2VQYXJhbS50cmlnZ2VyID09PSAndHJ1ZScpKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ2N1c3RvbSBjaGFsbGVuZ2UnLCB1c2VyLmNoYWxsZW5nZVBhcmFtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkN1c3RvbUNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGVja0NvbnRhY3QodXNlciwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKV07XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gODtcbiAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuY29kZSA9PT0gJ1VzZXJOb3RDb25maXJtZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgaXMgbm90IGNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXAsIHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8yLmNvZGUgPT09ICdQYXNzd29yZFJlc2V0UmVxdWlyZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgcmVxdWlyZXMgYSBuZXcgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZCwgeyB1c2VybmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzIuY29kZSA9PT0gJ0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24nICYmIHBhc3N3b3JkID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1Bhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl8yLm1lc3NhZ2UgPSBUcmFuc2xhdGlvbnMuRU1QVFlfUEFTU1dPUkQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl8yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIGlzQ29nbml0b1VzZXIgPSBmdW5jdGlvbiAodXNlcikge1xuICAgIHJldHVybiB1c2VyIGluc3RhbmNlb2YgQ29nbml0b1VzZXI7XG59O1xuZXhwb3J0IHsgY2hlY2tDb250YWN0IGFzIGMsIGhhbmRsZVNpZ25JbiBhcyBoIH07XG4iXSwic291cmNlUm9vdCI6IiJ9