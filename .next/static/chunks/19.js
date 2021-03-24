(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[19],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-greetings.entry.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-greetings.entry.js ***!
  \*****************************************************************************************/
/*! exports provided: amplify_greetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_greetings", function() { return AmplifyGreetings; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");







var amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";
var AmplifyGreetings = /** @class */ (function () {
    function AmplifyGreetings(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Username displayed in the greetings */
        this.username = null;
        /** Logo displayed inside of the header */
        this.logo = null;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    }
    AmplifyGreetings.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: "greetings" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "logo" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "logo" }, this.logo && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.logo))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "nav" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "nav" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-nav", null, this.username && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "greetings-message" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "Hello, ", this.username))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-out", { handleAuthStateChange: this.handleAuthStateChange }))))));
    };
    return AmplifyGreetings;
}());
AmplifyGreetings.style = amplifyGreetingsCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWdyZWV0aW5ncy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ3BDO0FBQ087QUFDUDtBQUNTO0FBQ0g7QUFDeUM7QUFDMUUsaUNBQWlDLHdDQUF3Qyx5Q0FBeUMseUNBQXlDLFdBQVcsb0JBQW9CLGFBQWEsNkJBQTZCLHlDQUF5QyxpQ0FBaUMsaUJBQWlCLCtCQUErQixzQkFBc0IsOEJBQThCLEtBQUssb0JBQW9CLGFBQWEsMkJBQTJCLGtCQUFrQixNQUFNLG9CQUFvQixhQUFhLDJCQUEyQixrQkFBa0Isd0JBQXdCLGlCQUFpQixpQkFBaUI7QUFDbm5CO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUE0QjtBQUNqRTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFlBQVkscUJBQXFCLEVBQUUsNERBQUMsVUFBVSxnQkFBZ0IsRUFBRSw0REFBQyxVQUFVLGVBQWUsZUFBZSw0REFBQyw2QkFBNkIsNERBQUMsVUFBVSxlQUFlLEVBQUUsNERBQUMsVUFBVSxjQUFjLEVBQUUsNERBQUMsd0NBQXdDLDREQUFDLFVBQVUsNEJBQTRCLEVBQUUsNERBQUMsNENBQTRDLDREQUFDLHNCQUFzQixvREFBb0Q7QUFDelo7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNpRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoIH0gZnJvbSAnLi9pbmRleC0zZmI1YzEzOS5qcyc7XG5pbXBvcnQgJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0ICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG5pbXBvcnQgJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGQgYXMgZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudCB9IGZyb20gJy4vaGVscGVycy00ZjYxZTVmZi5qcyc7XG52YXIgYW1wbGlmeUdyZWV0aW5nc0NzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFtcGxpZnktd2hpdGUpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWFtcGxpZnktbGlnaHQtZ3JleSk7LS1mb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KX0uZ3JlZXRpbmdze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtwYWRkaW5nOjAuNjI1cmVtO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm5hdntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn0ubG9nb3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydH1hbXBsaWZ5LXNpZ24tb3V0e21hcmdpbi1sZWZ0OjFyZW19XCI7XG52YXIgQW1wbGlmeUdyZWV0aW5ncyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5R3JlZXRpbmdzKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFVzZXJuYW1lIGRpc3BsYXllZCBpbiB0aGUgZ3JlZXRpbmdzICovXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xuICAgICAgICAvKiogTG9nbyBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBoZWFkZXIgKi9cbiAgICAgICAgdGhpcy5sb2dvID0gbnVsbDtcbiAgICAgICAgLyoqIEF1dGggc3RhdGUgY2hhbmdlIGhhbmRsZXIgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlID0gZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudDtcbiAgICB9XG4gICAgQW1wbGlmeUdyZWV0aW5ncy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJoZWFkZXJcIiwgeyBjbGFzczogXCJncmVldGluZ3NcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImxvZ29cIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwibG9nb1wiIH0sIHRoaXMubG9nbyAmJiBoKFwic3BhblwiLCBudWxsLCB0aGlzLmxvZ28pKSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwibmF2XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcIm5hdlwiIH0sIGgoXCJhbXBsaWZ5LW5hdlwiLCBudWxsLCB0aGlzLnVzZXJuYW1lICYmIChoKFwic2xvdFwiLCB7IG5hbWU6IFwiZ3JlZXRpbmdzLW1lc3NhZ2VcIiB9LCBoKFwic3BhblwiLCBudWxsLCBcIkhlbGxvLCBcIiwgdGhpcy51c2VybmFtZSkpKSwgaChcImFtcGxpZnktc2lnbi1vdXRcIiwgeyBoYW5kbGVBdXRoU3RhdGVDaGFuZ2U6IHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlIH0pKSkpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUdyZWV0aW5ncztcbn0oKSk7XG5BbXBsaWZ5R3JlZXRpbmdzLnN0eWxlID0gYW1wbGlmeUdyZWV0aW5nc0NzcztcbmV4cG9ydCB7IEFtcGxpZnlHcmVldGluZ3MgYXMgYW1wbGlmeV9ncmVldGluZ3MgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=