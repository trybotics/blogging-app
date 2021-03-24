(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[17],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-sign-in.entry.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-sign-in.entry.js ***!
  \*************************************************************************************************/
/*! exports provided: amplify_federated_sign_in */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_sign_in", function() { return AmplifyFederatedSignIn; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-federated-sign-in');
var AmplifyFederatedSignIn = /** @class */ (function () {
    function AmplifyFederatedSignIn(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    AmplifyFederatedSignIn.prototype.componentWillLoad = function () {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
        }
        var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure().oauth, oauth = _a === void 0 ? {} : _a;
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    };
    AmplifyFederatedSignIn.prototype.render = function () {
        if (!this.federated) {
            logger.debug('federated prop is empty. show nothing');
            logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { "data-test": "federated-sign-in-section" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", { "data-test": "federated-sign-in-body-section" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    };
    return AmplifyFederatedSignIn;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWZlZGVyYXRlZC1zaWduLWluLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNiO0FBQ1E7QUFDakI7QUFDMkI7QUFDcEUsaUJBQWlCLCtEQUFhO0FBQzlCO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBLHlCQUF5Qix5REFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0RBQUksV0FBVyxzREFBSTtBQUNoQyw0QkFBNEIsd0RBQW9CO0FBQ2hEO0FBQ0EsaUJBQWlCLHNEQUFJLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdEQUF3RDtBQUM3RjtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQywwQkFBMEIsMkNBQTJDLEVBQUUsNERBQUMscUJBQXFCLGdEQUFnRCxFQUFFLDREQUFDLCtCQUErQixpR0FBaUc7QUFDalM7QUFDQTtBQUNBLENBQUM7QUFDOEQiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlciB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IEEgYXMgQXV0aFN0YXRlIH0gZnJvbSAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBOIGFzIE5PX0FVVEhfTU9EVUxFX0ZPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xudmFyIGxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKCdhbXBsaWZ5LWZlZGVyYXRlZC1zaWduLWluJyk7XG52YXIgQW1wbGlmeUZlZGVyYXRlZFNpZ25JbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5RmVkZXJhdGVkU2lnbkluKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFRoZSBjdXJyZW50IGF1dGhlbnRpY2F0aW9uIHN0YXRlLiAqL1xuICAgICAgICB0aGlzLmF1dGhTdGF0ZSA9IEF1dGhTdGF0ZS5TaWduSW47XG4gICAgICAgIC8qKiBGZWRlcmF0ZWQgY3JlZGVudGlhbHMgJiBjb25maWd1cmF0aW9uLiAqL1xuICAgICAgICB0aGlzLmZlZGVyYXRlZCA9IHt9O1xuICAgIH1cbiAgICBBbXBsaWZ5RmVkZXJhdGVkU2lnbkluLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmNvbmZpZ3VyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBBdXRoLmNvbmZpZ3VyZSgpLm9hdXRoLCBvYXV0aCA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hO1xuICAgICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgIGlmIChvYXV0aFsnZG9tYWluJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZmVkZXJhdGVkLm9hdXRoX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mZWRlcmF0ZWQub2F1dGhfY29uZmlnKSwgb2F1dGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9hdXRoWydhd3NDb2duaXRvJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZmVkZXJhdGVkLm9hdXRoX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mZWRlcmF0ZWQub2F1dGhfY29uZmlnKSwgb2F1dGhbJ2F3c0NvZ25pdG8nXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9hdXRoWydhdXRoMCddKSB7XG4gICAgICAgICAgICB0aGlzLmZlZGVyYXRlZC5hdXRoMCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mZWRlcmF0ZWQuYXV0aDApLCBvYXV0aFsnYXV0aDAnXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFtcGxpZnlGZWRlcmF0ZWRTaWduSW4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZlZGVyYXRlZCkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdmZWRlcmF0ZWQgcHJvcCBpcyBlbXB0eS4gc2hvdyBub3RoaW5nJyk7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ2ZlZGVyYXRlZD17Z29vZ2xlX2NsaWVudF9pZDogLCBmYWNlYm9va19hcHBfaWQ6ICwgYW1hem9uX2NsaWVudF9pZH0nKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhBdXRoU3RhdGUpLmluY2x1ZGVzKHRoaXMuYXV0aFN0YXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdmZWRlcmF0ZWQgQ29uZmlnIGlzJywgdGhpcy5mZWRlcmF0ZWQpO1xuICAgICAgICByZXR1cm4gKGgoXCJhbXBsaWZ5LWZvcm0tc2VjdGlvblwiLCB7IFwiZGF0YS10ZXN0XCI6IFwiZmVkZXJhdGVkLXNpZ24taW4tc2VjdGlvblwiIH0sIGgoXCJhbXBsaWZ5LXNlY3Rpb25cIiwgeyBcImRhdGEtdGVzdFwiOiBcImZlZGVyYXRlZC1zaWduLWluLWJvZHktc2VjdGlvblwiIH0sIGgoXCJhbXBsaWZ5LWZlZGVyYXRlZC1idXR0b25zXCIsIHsgYXV0aFN0YXRlOiB0aGlzLmF1dGhTdGF0ZSwgXCJkYXRhLXRlc3RcIjogXCJmZWRlcmF0ZWQtc2lnbi1pbi1idXR0b25zXCIsIGZlZGVyYXRlZDogdGhpcy5mZWRlcmF0ZWQgfSkpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUZlZGVyYXRlZFNpZ25Jbjtcbn0oKSk7XG5leHBvcnQgeyBBbXBsaWZ5RmVkZXJhdGVkU2lnbkluIGFzIGFtcGxpZnlfZmVkZXJhdGVkX3NpZ25faW4gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=