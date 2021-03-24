(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[16],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-buttons_2.entry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-buttons_2.entry.js ***!
  \***************************************************************************************************/
/*! exports provided: amplify_federated_buttons, amplify_strike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_buttons", function() { return AmplifyFederatedButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_strike", function() { return AmplifyStrike; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");







var AmplifyFederatedButtons = /** @class */ (function () {
    function AmplifyFederatedButtons(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    }
    AmplifyFederatedButtons.prototype.componentWillLoad = function () {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure().oauth, oauth = _a === void 0 ? {} : _a;
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
        }
    };
    AmplifyFederatedButtons.prototype.render = function () {
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        if (Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated)) {
            return null;
        }
        var _a = this.federated, amazonClientId = _a.amazonClientId, auth0Config = _a.auth0Config, facebookAppId = _a.facebookAppId, googleClientId = _a.googleClientId, oauthConfig = _a.oauthConfig;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, googleClientId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))), facebookAppId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))), amazonClientId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))), oauthConfig && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-oauth-button", { config: oauthConfig }))), auth0Config && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    };
    return AmplifyFederatedButtons;
}());
var amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";
var AmplifyStrike = /** @class */ (function () {
    function AmplifyStrike(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyStrike.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "strike-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return AmplifyStrike;
}());
AmplifyStrike.style = amplifyStrikeCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWZlZGVyYXRlZC1idXR0b25zXzIuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ25CO0FBQ2M7QUFDakI7QUFDTDtBQUNnQztBQUNNO0FBQzFFO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBLHlCQUF5Qix5REFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUE0QjtBQUNqRTtBQUNBO0FBQ0EsYUFBYSxzREFBSSxXQUFXLHNEQUFJO0FBQ2hDLDRCQUE0Qix3REFBb0I7QUFDaEQ7QUFDQSxpQkFBaUIsc0RBQUksOENBQThDO0FBQ25FO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5REFBUztBQUNwQztBQUNBO0FBQ0EsWUFBWSxpRUFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsaUNBQWlDLDREQUFDLGNBQWMsNERBQUMsMkJBQTJCLDhFQUE4RSx1QkFBdUIsNERBQUMsY0FBYyw0REFBQyw2QkFBNkIsMEVBQTBFLHdCQUF3Qiw0REFBQyxjQUFjLDREQUFDLDJCQUEyQiw4RUFBOEUscUJBQXFCLDREQUFDLGNBQWMsNERBQUMsMEJBQTBCLHNCQUFzQixxQkFBcUIsNERBQUMsY0FBYyw0REFBQywwQkFBMEIseUVBQXlFO0FBQ3ZxQjtBQUNBO0FBQ0EsQ0FBQztBQUNELDZDQUE2Qyw0QkFBNEIseUNBQXlDLDBDQUEwQyxjQUFjLFdBQVcsa0JBQWtCLDRDQUE0QyxrQkFBa0IsY0FBYyxtQkFBbUIsa0NBQWtDLHFDQUFxQyxlQUFlLGlDQUFpQyxnQkFBZ0I7QUFDN2E7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsVUFBVSwwQkFBMEIsRUFBRSw0REFBQztBQUN4RDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ2lHIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGggfSBmcm9tICcuL2luZGV4LTNmYjVjMTM5LmpzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBBIGFzIEF1dGhTdGF0ZSB9IGZyb20gJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0ICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG5pbXBvcnQgeyBOIGFzIE5PX0FVVEhfTU9EVUxFX0ZPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50IH0gZnJvbSAnLi9oZWxwZXJzLTRmNjFlNWZmLmpzJztcbnZhciBBbXBsaWZ5RmVkZXJhdGVkQnV0dG9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5RmVkZXJhdGVkQnV0dG9ucyhob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBUaGUgY3VycmVudCBhdXRoZW50aWNhdGlvbiBzdGF0ZS4gKi9cbiAgICAgICAgdGhpcy5hdXRoU3RhdGUgPSBBdXRoU3RhdGUuU2lnbkluO1xuICAgICAgICAvKiogRmVkZXJhdGVkIGNyZWRlbnRpYWxzICYgY29uZmlndXJhdGlvbi4gKi9cbiAgICAgICAgdGhpcy5mZWRlcmF0ZWQgPSB7fTtcbiAgICAgICAgLyoqIEF1dGggc3RhdGUgY2hhbmdlIGhhbmRsZXIgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICAgICAqIGUuZy4gU2lnbkluIC0+ICdDcmVhdGUgQWNjb3VudCcgbGluayAtPiBTaWduVXBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlID0gZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudDtcbiAgICB9XG4gICAgQW1wbGlmeUZlZGVyYXRlZEJ1dHRvbnMucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguY29uZmlndXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IEF1dGguY29uZmlndXJlKCkub2F1dGgsIG9hdXRoID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2E7XG4gICAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgaWYgKG9hdXRoWydkb21haW4nXSkge1xuICAgICAgICAgICAgdGhpcy5mZWRlcmF0ZWQub2F1dGhDb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmVkZXJhdGVkLm9hdXRoQ29uZmlnKSwgb2F1dGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9hdXRoWydhd3NDb2duaXRvJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZmVkZXJhdGVkLm9hdXRoQ29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZlZGVyYXRlZC5vYXV0aENvbmZpZyksIG9hdXRoWydhd3NDb2duaXRvJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYXV0aFsnYXV0aDAnXSkge1xuICAgICAgICAgICAgdGhpcy5mZWRlcmF0ZWQuYXV0aDBDb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmVkZXJhdGVkLmF1dGgwQ29uZmlnKSwgb2F1dGhbJ2F1dGgwJ10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbXBsaWZ5RmVkZXJhdGVkQnV0dG9ucy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoQXV0aFN0YXRlKS5pbmNsdWRlcyh0aGlzLmF1dGhTdGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0VtcHR5KHRoaXMuZmVkZXJhdGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5mZWRlcmF0ZWQsIGFtYXpvbkNsaWVudElkID0gX2EuYW1hem9uQ2xpZW50SWQsIGF1dGgwQ29uZmlnID0gX2EuYXV0aDBDb25maWcsIGZhY2Vib29rQXBwSWQgPSBfYS5mYWNlYm9va0FwcElkLCBnb29nbGVDbGllbnRJZCA9IF9hLmdvb2dsZUNsaWVudElkLCBvYXV0aENvbmZpZyA9IF9hLm9hdXRoQ29uZmlnO1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgbnVsbCwgZ29vZ2xlQ2xpZW50SWQgJiYgKGgoXCJkaXZcIiwgbnVsbCwgaChcImFtcGxpZnktZ29vZ2xlLWJ1dHRvblwiLCB7IGNsaWVudElkOiBnb29nbGVDbGllbnRJZCwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlOiB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSB9KSkpLCBmYWNlYm9va0FwcElkICYmIChoKFwiZGl2XCIsIG51bGwsIGgoXCJhbXBsaWZ5LWZhY2Vib29rLWJ1dHRvblwiLCB7IGFwcElkOiBmYWNlYm9va0FwcElkLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2U6IHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlIH0pKSksIGFtYXpvbkNsaWVudElkICYmIChoKFwiZGl2XCIsIG51bGwsIGgoXCJhbXBsaWZ5LWFtYXpvbi1idXR0b25cIiwgeyBjbGllbnRJZDogYW1hem9uQ2xpZW50SWQsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZTogdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgfSkpKSwgb2F1dGhDb25maWcgJiYgKGgoXCJkaXZcIiwgbnVsbCwgaChcImFtcGxpZnktb2F1dGgtYnV0dG9uXCIsIHsgY29uZmlnOiBvYXV0aENvbmZpZyB9KSkpLCBhdXRoMENvbmZpZyAmJiAoaChcImRpdlwiLCBudWxsLCBoKFwiYW1wbGlmeS1hdXRoMC1idXR0b25cIiwgeyBjb25maWc6IGF1dGgwQ29uZmlnLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2U6IHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlIH0pKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbXBsaWZ5RmVkZXJhdGVkQnV0dG9ucztcbn0oKSk7XG52YXIgYW1wbGlmeVN0cmlrZUNzcyA9IFwiLnNjLWFtcGxpZnktc3RyaWtlLWh7LS1jb2xvcjp2YXIoLS1hbXBsaWZ5LWdyZXkpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWFtcGxpZnktbGlnaHQtZ3JleSk7LS1jb250ZW50LWJhY2tncm91bmQ6dmFyKC0tYW1wbGlmeS13aGl0ZSk7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7bGluZS1oZWlnaHQ6MC4xZW07bWFyZ2luOjMycHggMDtjb2xvcjp2YXIoLS1jb2xvcil9LnN0cmlrZS1jb250ZW50LnNjLWFtcGxpZnktc3RyaWtle2JhY2tncm91bmQ6dmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtwYWRkaW5nOjAgMjVweDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtmb250LXdlaWdodDo1MDB9XCI7XG52YXIgQW1wbGlmeVN0cmlrZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5U3RyaWtlKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgQW1wbGlmeVN0cmlrZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwic3RyaWtlLWNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlTdHJpa2U7XG59KCkpO1xuQW1wbGlmeVN0cmlrZS5zdHlsZSA9IGFtcGxpZnlTdHJpa2VDc3M7XG5leHBvcnQgeyBBbXBsaWZ5RmVkZXJhdGVkQnV0dG9ucyBhcyBhbXBsaWZ5X2ZlZGVyYXRlZF9idXR0b25zLCBBbXBsaWZ5U3RyaWtlIGFzIGFtcGxpZnlfc3RyaWtlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9