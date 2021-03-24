(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[20],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon-button.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon-button.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: amplify_icon_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_icon_button", function() { return AmplifyIconButton; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");

var amplifyIconButtonCss = ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";
var AmplifyIconButton = /** @class */ (function () {
    function AmplifyIconButton(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** (Optional) The tooltip that will show on hover of the button */
        this.tooltip = null;
        /** (Optional) Whether or not to show the tooltip automatically */
        this.autoShowTooltip = false;
    }
    AmplifyIconButton.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "action-button" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-tooltip", { text: this.tooltip, shouldAutoShow: this.autoShowTooltip }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: this.name })))));
    };
    return AmplifyIconButton;
}());
AmplifyIconButton.style = amplifyIconButtonCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWljb24tYnV0dG9uLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDL0Qsa0NBQWtDLGlEQUFpRCx5REFBeUQsc0JBQXNCLGtCQUFrQixVQUFVLGdCQUFnQixZQUFZLFdBQVcsZUFBZSxhQUFhLHFCQUFxQixZQUFZLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLDBCQUEwQixrQkFBa0IsNEJBQTRCLGdEQUFnRCx3REFBd0QsZ0RBQWdELHFDQUFxQyxjQUFjLGdDQUFnQyxvQkFBb0IsWUFBWSw0QkFBNEIsYUFBYSwwQkFBMEIsWUFBWSxhQUFhLDREQUE0RCxvREFBb0Q7QUFDNTVCO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsVUFBVSx5QkFBeUIsRUFBRSw0REFBQyxxQkFBcUIsMkRBQTJELEVBQUUsNERBQUMsaUJBQWlCLDREQUFDLGtCQUFrQixrQkFBa0I7QUFDaE07QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNvRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoIH0gZnJvbSAnLi9pbmRleC0zZmI1YzEzOS5qcyc7XG52YXIgYW1wbGlmeUljb25CdXR0b25Dc3MgPSBcIjpob3N0ey0tYnV0dG9uLWNvbG9yOnZhcigtLWFtcGxpZnktc2Vjb25kYXJ5LWNvbnRyYXN0KTstLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWFtcGxpZnktc2Vjb25kYXJ5LWNvbG9yKX0uYWN0aW9uLWJ1dHRvbiBidXR0b257cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowO2JhY2tncm91bmQ6bm9uZTtoZWlnaHQ6NTRweDt3aWR0aDo1NHB4O2N1cnNvcjpwb2ludGVyO291dGxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjMwcHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZS1pbi1vdXQ7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtmaWxsOmN1cnJlbnRDb2xvcn0uYWN0aW9uLWJ1dHRvbiBidXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlcik7LXdlYmtpdC1ib3gtc2hhZG93OjAuM3B4IDAuM3B4IDAuM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtib3gtc2hhZG93OjAuM3B4IDAuM3B4IDAuM3B4IHJnYmEoMCwgMCwgMCwgMC4zKX0uYWN0aW9uLWJ1dHRvbiBidXR0b246aG92ZXI+LnRvb2x0aXB7ZGlzcGxheTpibG9ja30uYWN0aW9uLWJ1dHRvbiBidXR0b246aG92ZXI+c3Zney13ZWJraXQtZmlsdGVyOm5vbmU7ZmlsdGVyOm5vbmV9LmFjdGlvbi1idXR0b24gYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZX0uYWN0aW9uLWJ1dHRvbiBidXR0b24gc3Zne3dpZHRoOjEuOGVtO2hlaWdodDoxLjhlbTstd2Via2l0LWZpbHRlcjpkcm9wLXNoYWRvdygxcHggMXB4IDFweCB2YXIoLS1hbXBsaWZ5LWdyZXkpKTtmaWx0ZXI6ZHJvcC1zaGFkb3coMXB4IDFweCAxcHggdmFyKC0tYW1wbGlmeS1ncmV5KSl9XCI7XG52YXIgQW1wbGlmeUljb25CdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeUljb25CdXR0b24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogKE9wdGlvbmFsKSBUaGUgdG9vbHRpcCB0aGF0IHdpbGwgc2hvdyBvbiBob3ZlciBvZiB0aGUgYnV0dG9uICovXG4gICAgICAgIHRoaXMudG9vbHRpcCA9IG51bGw7XG4gICAgICAgIC8qKiAoT3B0aW9uYWwpIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHRvb2x0aXAgYXV0b21hdGljYWxseSAqL1xuICAgICAgICB0aGlzLmF1dG9TaG93VG9vbHRpcCA9IGZhbHNlO1xuICAgIH1cbiAgICBBbXBsaWZ5SWNvbkJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYWN0aW9uLWJ1dHRvblwiIH0sIGgoXCJhbXBsaWZ5LXRvb2x0aXBcIiwgeyB0ZXh0OiB0aGlzLnRvb2x0aXAsIHNob3VsZEF1dG9TaG93OiB0aGlzLmF1dG9TaG93VG9vbHRpcCB9LCBoKFwiYnV0dG9uXCIsIG51bGwsIGgoXCJhbXBsaWZ5LWljb25cIiwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlJY29uQnV0dG9uO1xufSgpKTtcbkFtcGxpZnlJY29uQnV0dG9uLnN0eWxlID0gYW1wbGlmeUljb25CdXR0b25Dc3M7XG5leHBvcnQgeyBBbXBsaWZ5SWNvbkJ1dHRvbiBhcyBhbXBsaWZ5X2ljb25fYnV0dG9uIH07XG4iXSwic291cmNlUm9vdCI6IiJ9