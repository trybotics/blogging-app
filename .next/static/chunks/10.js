(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-amazon-button_5.entry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-amazon-button_5.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: amplify_amazon_button, amplify_auth0_button, amplify_facebook_button, amplify_google_button, amplify_oauth_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_amazon_button", function() { return AmplifyAmazonButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_auth0_button", function() { return AmplifyAuth0Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_facebook_button", function() { return AmplifyFacebookButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_google_button", function() { return AmplifyGoogleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_oauth_button", function() { return AmplifyOAuthButton; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");
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







var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-amazon-button');
var AmplifyAmazonButton = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.federatedSignIn = function (response) {
            var access_token = response.access_token, expires_in = response.expires_in;
            if (!access_token) {
                return;
            }
            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }
            var date = new Date();
            var expires_at = expires_in * 1000 + date.getTime();
            window['amazon'].Login.retrieveProfile(function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
                var user, authenticatedUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!userInfo.success) {
                                return [2 /*return*/, logger.debug('Get user Info failed')];
                            }
                            user = {
                                name: userInfo.profile.Name,
                                email: userInfo.profile.PrimaryEmail,
                            };
                            return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('amazon', { token: access_token, expires_at: expires_at }, user)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                        case 2:
                            authenticatedUser = _a.sent();
                            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    }
    /**
     * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
     */
    class_1.prototype.signInWithAmazon = function (event) {
        var _this = this;
        event.preventDefault();
        window['amazon'].Login.setClientId(this.clientId);
        window['amazon'].Login.authorize({ scope: 'profile' }, function (response) {
            if (response.error) {
                return logger.debug('Failed to login with amazon: ' + response.error);
            }
            try {
                window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'amazon' }));
            }
            catch (e) {
                logger.debug('Failed to cache auth source into localStorage', e);
            }
            _this.federatedSignIn(response);
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: function (event) { return _this.signInWithAmazon(event); }, provider: "amazon" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { src: "https://assets.loginwithamazon.com/sdk/na/login1.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AMAZON)));
    };
    return class_1;
}());
var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-auth0-button');
var AmplifyAuth0Button = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.handleLoad = function () {
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure().oauth, oauth = _a === void 0 ? {} : _a;
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            var _b = _this.config, config = _b === void 0 ? oauth.auth0 : _b;
            if (!config) {
                logger$1.debug('Auth0 is not configured');
                return;
            }
            logger$1.debug('auth0 configuration', config);
            if (!_this._auth0) {
                _this._auth0 = new window['auth0'].WebAuth(config);
            }
            _this._auth0.parseHash(function (err, authResult) {
                if (err) {
                    logger$1.debug('Failed to parse the url for Auth0', err);
                    return;
                }
                if (!authResult) {
                    logger$1.debug('Auth0 found no authResult in hash');
                    return;
                }
                var payload = {
                    provider: 'auth0',
                    opts: {
                        returnTo: config.returnTo,
                        clientID: config.clientID,
                        federated: config.federated,
                    },
                };
                try {
                    localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify(payload));
                }
                catch (e) {
                    logger$1.debug('Failed to cache auth source into localStorage', e);
                }
                _this._auth0.client.userInfo(authResult.accessToken, function (err, user) { return __awaiter(_this, void 0, void 0, function () {
                    var username, email, authenticatedUser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                username = undefined;
                                email = undefined;
                                if (err) {
                                    logger$1.debug('Failed to get the user info', err);
                                }
                                else {
                                    username = user.name;
                                    email = user.email;
                                }
                                return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn(config.domain, {
                                        token: authResult.idToken,
                                        expires_at: authResult.expiresIn * 1000 + new Date().getTime(),
                                    }, { name: username, email: email })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                            case 2:
                                authenticatedUser = _a.sent();
                                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
    }
    class_2.prototype.signInWithAuth0 = function (event) {
        event.preventDefault();
        if (!this._auth0) {
            throw new Error('the auth0 client is not configured');
        }
        this._auth0.authorize();
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: function (event) { return _this.signInWithAuth0(event); }, provider: "auth0" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { onLoad: this.handleLoad, src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AUTH0)));
    };
    return class_2;
}());
var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-facebook-button');
var AmplifyFacebookButton = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.federatedSignIn = function (authResponse) {
            var accessToken = authResponse.accessToken, expiresIn = authResponse.expiresIn;
            if (!accessToken) {
                return;
            }
            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }
            var date = new Date();
            var expires_at = expiresIn * 1000 + date.getTime();
            var fields = 'name,email';
            window['FB'].api('/me', { fields: fields }, function (response) { return __awaiter(_this, void 0, void 0, function () {
                var user, authenticatedUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = {
                                name: response.name,
                                email: response.email,
                            };
                            return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('facebook', { token: accessToken, expires_at: expires_at }, user)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                        case 2:
                            authenticatedUser = _a.sent();
                            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        this.getLoginStatus = function () {
            window['FB'].getLoginStatus(function (response) {
                try {
                    window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'facebook' }));
                }
                catch (e) {
                    logger$2.debug('Failed to cache auth source into localStorage', e);
                }
                if (response.status === 'connected') {
                    return _this.federatedSignIn(response.authResponse);
                }
                _this.login();
            });
        };
        this.login = function () {
            var scope = 'public_profile,email';
            window['FB'].login(function (response) {
                if (response && response.authResponse) {
                    _this.federatedSignIn(response.authResponse);
                }
            }, { scope: scope });
        };
    }
    /**
     * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
     */
    class_3.prototype.signInWithFacebook = function (event) {
        event.preventDefault();
        window['FB'].init({
            appId: this.appId,
            cookie: true,
            xfbml: false,
            version: 'v5.0',
        });
        this.getLoginStatus();
    };
    class_3.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: function (event) { return _this.signInWithFacebook(event); }, provider: "facebook" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { async: true, defer: true, src: "https://connect.facebook.net/en_US/sdk.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_FACEBOOK)));
    };
    return class_3;
}());
var logger$3 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-google-button');
var AmplifyGoogleButton = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.handleError = function (error) {
            console.error(error);
        };
        /**
         * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
         */
        this.handleLoad = function () {
            window['gapi'].load('auth2');
        };
        this.handleUser = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var _a, id_token, expires_at, profile, authenticatedUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        try {
                            window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'google' }));
                        }
                        catch (e) {
                            logger$3.debug('Failed to cache auth source into localStorage', e);
                        }
                        _a = user.getAuthResponse(), id_token = _a.id_token, expires_at = _a.expires_at;
                        profile = user.getBasicProfile();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('google', { token: id_token, expires_at: expires_at }, {
                                email: profile.getEmail(),
                                name: profile.getName(),
                                picture: profile.getImageUrl(),
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                    case 2:
                        authenticatedUser = _b.sent();
                        try {
                            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                        }
                        catch (error) {
                            this.handleError(error);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_4.prototype.getAuthInstance = function () {
        if (window['gapi'] && window['gapi'].auth2) {
            return (window['gapi'].auth2.getAuthInstance() ||
                window['gapi'].auth2.init({
                    client_id: this.clientId,
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email openid',
                }));
        }
        return null;
    };
    class_4.prototype.signInWithGoogle = function (event) {
        event.preventDefault();
        this.getAuthInstance()
            .signIn()
            .then(this.handleUser)
            .catch(this.handleError);
    };
    class_4.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: function (event) { return _this.signInWithGoogle(event); }, provider: "google" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { onLoad: this.handleLoad, src: "https://apis.google.com/js/api:client.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_GOOGLE)));
    };
    return class_4;
}());
var AmplifyOAuthButton = /** @class */ (function () {
    function AmplifyOAuthButton(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Federated credentials & configuration. */
        this.config = {};
    }
    AmplifyOAuthButton.prototype.signInWithOAuth = function (event) {
        event.preventDefault();
        _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn();
    };
    AmplifyOAuthButton.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: function (event) { return _this.signInWithOAuth(event); }, provider: "oauth" }, this.config.label || _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AWS)));
    };
    return AmplifyOAuthButton;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWFtYXpvbi1idXR0b25fNS5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMrRDtBQUNQO0FBQ0U7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsNEJBQTRCLDRCQUE0QixzQ0FBc0MsRUFBRSxzQkFBc0IsRUFBRSw0REFBQyxZQUFZLDJFQUEyRSxHQUFHLHNEQUFJLEtBQUssMkRBQVk7QUFDelA7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsNEJBQTRCLDRCQUE0QixxQ0FBcUMsRUFBRSxxQkFBcUIsdUJBQXVCLHNEQUFJLEtBQUssMkRBQVk7QUFDakw7QUFDQTtBQUNBLENBQUM7QUFDK08iLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGggfSBmcm9tICcuL2luZGV4LTNmYjVjMTM5LmpzJztcbmltcG9ydCB7IENvbnNvbGVMb2dnZXIsIEkxOG4gfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBBIGFzIEF1dGhTdGF0ZSB9IGZyb20gJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG5pbXBvcnQgeyBOIGFzIE5PX0FVVEhfTU9EVUxFX0ZPVU5ELCBqIGFzIEFVVEhfU09VUkNFX0tFWSB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGQgYXMgZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudCB9IGZyb20gJy4vaGVscGVycy00ZjYxZTVmZi5qcyc7XG52YXIgbG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIoJ2FtcGxpZnktYW1hem9uLWJ1dHRvbicpO1xudmFyIEFtcGxpZnlBbWF6b25CdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgKiBlLmcuIFNpZ25JbiAtPiAnQ3JlYXRlIEFjY291bnQnIGxpbmsgLT4gU2lnblVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIHRoaXMuZmVkZXJhdGVkU2lnbkluID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgYWNjZXNzX3Rva2VuID0gcmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBleHBpcmVzX2luID0gcmVzcG9uc2UuZXhwaXJlc19pbjtcbiAgICAgICAgICAgIGlmICghYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmZlZGVyYXRlZFNpZ25JbiAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGV4cGlyZXNfYXQgPSBleHBpcmVzX2luICogMTAwMCArIGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgd2luZG93WydhbWF6b24nXS5Mb2dpbi5yZXRyaWV2ZVByb2ZpbGUoZnVuY3Rpb24gKHVzZXJJbmZvKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIsIGF1dGhlbnRpY2F0ZWRVc2VyO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlckluZm8uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbG9nZ2VyLmRlYnVnKCdHZXQgdXNlciBJbmZvIGZhaWxlZCcpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlckluZm8ucHJvZmlsZS5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlckluZm8ucHJvZmlsZS5QcmltYXJ5RW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmZlZGVyYXRlZFNpZ25JbignYW1hem9uJywgeyB0b2tlbjogYWNjZXNzX3Rva2VuLCBleHBpcmVzX2F0OiBleHBpcmVzX2F0IH0sIHVzZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCBhdXRoZW50aWNhdGVkVXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYW1hem9uLmNvbS9kb2NzL2xvZ2luLXdpdGgtYW1hem9uL2luc3RhbGwtc2RrLWphdmFzY3JpcHQuaHRtbFxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNpZ25JbldpdGhBbWF6b24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93WydhbWF6b24nXS5Mb2dpbi5zZXRDbGllbnRJZCh0aGlzLmNsaWVudElkKTtcbiAgICAgICAgd2luZG93WydhbWF6b24nXS5Mb2dpbi5hdXRob3JpemUoeyBzY29wZTogJ3Byb2ZpbGUnIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGxvZ2luIHdpdGggYW1hem9uOiAnICsgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9TT1VSQ0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7IHByb3ZpZGVyOiAnYW1hem9uJyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGNhY2hlIGF1dGggc291cmNlIGludG8gbG9jYWxTdG9yYWdlJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5mZWRlcmF0ZWRTaWduSW4ocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKFwiYW1wbGlmeS1zaWduLWluLWJ1dHRvblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuc2lnbkluV2l0aEFtYXpvbihldmVudCk7IH0sIHByb3ZpZGVyOiBcImFtYXpvblwiIH0sIGgoXCJzY3JpcHRcIiwgeyBzcmM6IFwiaHR0cHM6Ly9hc3NldHMubG9naW53aXRoYW1hem9uLmNvbS9zZGsvbmEvbG9naW4xLmpzXCIgfSksIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX0lOX1dJVEhfQU1BWk9OKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGxvZ2dlciQxID0gbmV3IENvbnNvbGVMb2dnZXIoJ2FtcGxpZnktYXV0aDAtYnV0dG9uJyk7XG52YXIgQW1wbGlmeUF1dGgwQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzIoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdhdXRoMCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICAgICAgdmFyIF9hID0gQXV0aC5jb25maWd1cmUoKS5vYXV0aCwgb2F1dGggPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ2F1dGgwJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5jb25maWcsIGNvbmZpZyA9IF9iID09PSB2b2lkIDAgPyBvYXV0aC5hdXRoMCA6IF9iO1xuICAgICAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIkMS5kZWJ1ZygnQXV0aDAgaXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIkMS5kZWJ1ZygnYXV0aDAgY29uZmlndXJhdGlvbicsIGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLl9hdXRoMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdXRoMCA9IG5ldyB3aW5kb3dbJ2F1dGgwJ10uV2ViQXV0aChjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuX2F1dGgwLnBhcnNlSGFzaChmdW5jdGlvbiAoZXJyLCBhdXRoUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIkMS5kZWJ1ZygnRmFpbGVkIHRvIHBhcnNlIHRoZSB1cmwgZm9yIEF1dGgwJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDEuZGVidWcoJ0F1dGgwIGZvdW5kIG5vIGF1dGhSZXN1bHQgaW4gaGFzaCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogJ2F1dGgwJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG86IGNvbmZpZy5yZXR1cm5UbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElEOiBjb25maWcuY2xpZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWRlcmF0ZWQ6IGNvbmZpZy5mZWRlcmF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBVVRIX1NPVVJDRV9LRVksIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDEuZGVidWcoJ0ZhaWxlZCB0byBjYWNoZSBhdXRoIHNvdXJjZSBpbnRvIGxvY2FsU3RvcmFnZScsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5fYXV0aDAuY2xpZW50LnVzZXJJbmZvKGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4sIGZ1bmN0aW9uIChlcnIsIHVzZXIpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJuYW1lLCBlbWFpbCwgYXV0aGVudGljYXRlZFVzZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDEuZGVidWcoJ0ZhaWxlZCB0byBnZXQgdGhlIHVzZXIgaW5mbycsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmZlZGVyYXRlZFNpZ25Jbihjb25maWcuZG9tYWluLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IGF1dGhSZXN1bHQuaWRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzX2F0OiBhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsgbmFtZTogdXNlcm5hbWUsIGVtYWlsOiBlbWFpbCB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgYXV0aGVudGljYXRlZFVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc18yLnByb3RvdHlwZS5zaWduSW5XaXRoQXV0aDAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9hdXRoMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgYXV0aDAgY2xpZW50IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXV0aDAuYXV0aG9yaXplKCk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktc2lnbi1pbi1idXR0b25cIiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNpZ25JbldpdGhBdXRoMChldmVudCk7IH0sIHByb3ZpZGVyOiBcImF1dGgwXCIgfSwgaChcInNjcmlwdFwiLCB7IG9uTG9hZDogdGhpcy5oYW5kbGVMb2FkLCBzcmM6IFwiaHR0cHM6Ly9jZG4uYXV0aDAuY29tL2pzL2F1dGgwLzkuMTEvYXV0aDAubWluLmpzXCIgfSksIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX0lOX1dJVEhfQVVUSDApKSk7XG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NfMjtcbn0oKSk7XG52YXIgbG9nZ2VyJDIgPSBuZXcgQ29uc29sZUxvZ2dlcignYW1wbGlmeS1mYWNlYm9vay1idXR0b24nKTtcbnZhciBBbXBsaWZ5RmFjZWJvb2tCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMyhob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgKiBlLmcuIFNpZ25JbiAtPiAnQ3JlYXRlIEFjY291bnQnIGxpbmsgLT4gU2lnblVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIHRoaXMuZmVkZXJhdGVkU2lnbkluID0gZnVuY3Rpb24gKGF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuLCBleHBpcmVzSW4gPSBhdXRoUmVzcG9uc2UuZXhwaXJlc0luO1xuICAgICAgICAgICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5mZWRlcmF0ZWRTaWduSW4gIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBleHBpcmVzX2F0ID0gZXhwaXJlc0luICogMTAwMCArIGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIGZpZWxkcyA9ICduYW1lLGVtYWlsJztcbiAgICAgICAgICAgIHdpbmRvd1snRkInXS5hcGkoJy9tZScsIHsgZmllbGRzOiBmaWVsZHMgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIsIGF1dGhlbnRpY2F0ZWRVc2VyO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguZmVkZXJhdGVkU2lnbkluKCdmYWNlYm9vaycsIHsgdG9rZW46IGFjY2Vzc1Rva2VuLCBleHBpcmVzX2F0OiBleHBpcmVzX2F0IH0sIHVzZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCBhdXRoZW50aWNhdGVkVXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0TG9naW5TdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3dbJ0ZCJ10uZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVEhfU09VUkNFX0tFWSwgSlNPTi5zdHJpbmdpZnkoeyBwcm92aWRlcjogJ2ZhY2Vib29rJyB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlciQyLmRlYnVnKCdGYWlsZWQgdG8gY2FjaGUgYXV0aCBzb3VyY2UgaW50byBsb2NhbFN0b3JhZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZlZGVyYXRlZFNpZ25JbihyZXNwb25zZS5hdXRoUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2NvcGUgPSAncHVibGljX3Byb2ZpbGUsZW1haWwnO1xuICAgICAgICAgICAgd2luZG93WydGQiddLmxvZ2luKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmVkZXJhdGVkU2lnbkluKHJlc3BvbnNlLmF1dGhSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyBzY29wZTogc2NvcGUgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmluaXQvdjUuMFxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnNpZ25JbldpdGhGYWNlYm9vayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3dbJ0ZCJ10uaW5pdCh7XG4gICAgICAgICAgICBhcHBJZDogdGhpcy5hcHBJZCxcbiAgICAgICAgICAgIGNvb2tpZTogdHJ1ZSxcbiAgICAgICAgICAgIHhmYm1sOiBmYWxzZSxcbiAgICAgICAgICAgIHZlcnNpb246ICd2NS4wJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0TG9naW5TdGF0dXMoKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKFwiYW1wbGlmeS1zaWduLWluLWJ1dHRvblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuc2lnbkluV2l0aEZhY2Vib29rKGV2ZW50KTsgfSwgcHJvdmlkZXI6IFwiZmFjZWJvb2tcIiB9LCBoKFwic2NyaXB0XCIsIHsgYXN5bmM6IHRydWUsIGRlZmVyOiB0cnVlLCBzcmM6IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIiB9KSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fSU5fV0lUSF9GQUNFQk9PSykpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18zO1xufSgpKTtcbnZhciBsb2dnZXIkMyA9IG5ldyBDb25zb2xlTG9nZ2VyKCdhbXBsaWZ5LWdvb2dsZS1idXR0b24nKTtcbnZhciBBbXBsaWZ5R29vZ2xlQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzQoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICogZS5nLiBTaWduSW4gLT4gJ0NyZWF0ZSBBY2NvdW50JyBsaW5rIC0+IFNpZ25VcFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vaWRlbnRpdHkvc2lnbi1pbi93ZWIvYnVpbGQtYnV0dG9uI2J1aWxkaW5nX2FfYnV0dG9uX3dpdGhfYV9jdXN0b21fZ3JhcGhpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnYXV0aDInKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgaWRfdG9rZW4sIGV4cGlyZXNfYXQsIHByb2ZpbGUsIGF1dGhlbnRpY2F0ZWRVc2VyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmZlZGVyYXRlZFNpZ25JbiAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9TT1VSQ0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7IHByb3ZpZGVyOiAnZ29vZ2xlJyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQzLmRlYnVnKCdGYWlsZWQgdG8gY2FjaGUgYXV0aCBzb3VyY2UgaW50byBsb2NhbFN0b3JhZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKSwgaWRfdG9rZW4gPSBfYS5pZF90b2tlbiwgZXhwaXJlc19hdCA9IF9hLmV4cGlyZXNfYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguZmVkZXJhdGVkU2lnbkluKCdnb29nbGUnLCB7IHRva2VuOiBpZF90b2tlbiwgZXhwaXJlc19hdDogZXhwaXJlc19hdCB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwcm9maWxlLmdldEltYWdlVXJsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmN1cnJlbnRBdXRoZW50aWNhdGVkVXNlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZFVzZXIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgYXV0aGVudGljYXRlZFVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICBjbGFzc180LnByb3RvdHlwZS5nZXRBdXRoSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3dbJ2dhcGknXSAmJiB3aW5kb3dbJ2dhcGknXS5hdXRoMikge1xuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXBvbGljeTogJ3NpbmdsZV9ob3N0X29yaWdpbicsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAncHJvZmlsZSBlbWFpbCBvcGVuaWQnLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLnNpZ25JbldpdGhHb29nbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nZXRBdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgLnNpZ25JbigpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVVzZXIpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktc2lnbi1pbi1idXR0b25cIiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNpZ25JbldpdGhHb29nbGUoZXZlbnQpOyB9LCBwcm92aWRlcjogXCJnb29nbGVcIiB9LCBoKFwic2NyaXB0XCIsIHsgb25Mb2FkOiB0aGlzLmhhbmRsZUxvYWQsIHNyYzogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzXCIgfSksIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX0lOX1dJVEhfR09PR0xFKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzQ7XG59KCkpO1xudmFyIEFtcGxpZnlPQXV0aEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5T0F1dGhCdXR0b24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogRmVkZXJhdGVkIGNyZWRlbnRpYWxzICYgY29uZmlndXJhdGlvbi4gKi9cbiAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB9XG4gICAgQW1wbGlmeU9BdXRoQnV0dG9uLnByb3RvdHlwZS5zaWduSW5XaXRoT0F1dGggPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQXV0aC5mZWRlcmF0ZWRTaWduSW4oKTtcbiAgICB9O1xuICAgIEFtcGxpZnlPQXV0aEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoXCJhbXBsaWZ5LXNpZ24taW4tYnV0dG9uXCIsIHsgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5zaWduSW5XaXRoT0F1dGgoZXZlbnQpOyB9LCBwcm92aWRlcjogXCJvYXV0aFwiIH0sIHRoaXMuY29uZmlnLmxhYmVsIHx8IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX0lOX1dJVEhfQVdTKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlPQXV0aEJ1dHRvbjtcbn0oKSk7XG5leHBvcnQgeyBBbXBsaWZ5QW1hem9uQnV0dG9uIGFzIGFtcGxpZnlfYW1hem9uX2J1dHRvbiwgQW1wbGlmeUF1dGgwQnV0dG9uIGFzIGFtcGxpZnlfYXV0aDBfYnV0dG9uLCBBbXBsaWZ5RmFjZWJvb2tCdXR0b24gYXMgYW1wbGlmeV9mYWNlYm9va19idXR0b24sIEFtcGxpZnlHb29nbGVCdXR0b24gYXMgYW1wbGlmeV9nb29nbGVfYnV0dG9uLCBBbXBsaWZ5T0F1dGhCdXR0b24gYXMgYW1wbGlmeV9vYXV0aF9idXR0b24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=