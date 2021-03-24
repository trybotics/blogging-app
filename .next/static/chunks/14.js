(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_checkbox", function() { return AmplifyCheckbox; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");

var amplifyCheckboxCss = ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";
var AmplifyCheckbox = /** @class */ (function () {
    function AmplifyCheckbox(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** If `true`, the checkbox is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
        this.onClick = function () {
            _this.checked = !_this.checked;
        };
    }
    AmplifyCheckbox.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "checkbox" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { onClick: this.onClick, type: "checkbox", name: this.name, value: this.value, id: this.fieldId, checked: this.checked, disabled: this.disabled }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label)));
    };
    return AmplifyCheckbox;
}());
AmplifyCheckbox.style = amplifyCheckboxCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNoZWNrYm94LmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDL0QsZ0NBQWdDLHlDQUF5QyxVQUFVLG1CQUFtQixjQUFjLFdBQVcsYUFBYSxpQ0FBaUMsK0JBQStCLGdCQUFnQixrQkFBa0I7QUFDOU87QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFVBQVUsb0JBQW9CLEVBQUUsNERBQUMsV0FBVyxnSkFBZ0osR0FBRyw0REFBQyxtQkFBbUIsd0JBQXdCO0FBQzVQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDK0MiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xudmFyIGFtcGxpZnlDaGVja2JveENzcyA9IFwiOmhvc3R7LS1mb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KX0uY2hlY2tib3h7bWFyZ2luLWJvdHRvbToyMnB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjE2cHg7Zm9udC1zaXplOnZhcigtLWFtcGxpZnktdGV4dC1zbSk7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpfS5jaGVja2JveCBpbnB1dHttYXJnaW4tcmlnaHQ6MTJweH1cIjtcbnZhciBBbXBsaWZ5Q2hlY2tib3ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeUNoZWNrYm94KGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIElmIGB0cnVlYCwgdGhlIGNoZWNrYm94IGlzIHNlbGVjdGVkLiAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqIElmIGB0cnVlYCwgdGhlIGNoZWNrYm94IGlzIGRpc2FibGVkICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2hlY2tlZCA9ICFfdGhpcy5jaGVja2VkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBBbXBsaWZ5Q2hlY2tib3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiBcImNoZWNrYm94XCIgfSwgaChcImlucHV0XCIsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCB0eXBlOiBcImNoZWNrYm94XCIsIG5hbWU6IHRoaXMubmFtZSwgdmFsdWU6IHRoaXMudmFsdWUsIGlkOiB0aGlzLmZpZWxkSWQsIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSksIGgoXCJhbXBsaWZ5LWxhYmVsXCIsIHsgaHRtbEZvcjogdGhpcy5maWVsZElkIH0sIHRoaXMubGFiZWwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUNoZWNrYm94O1xufSgpKTtcbkFtcGxpZnlDaGVja2JveC5zdHlsZSA9IGFtcGxpZnlDaGVja2JveENzcztcbmV4cG9ydCB7IEFtcGxpZnlDaGVja2JveCBhcyBhbXBsaWZ5X2NoZWNrYm94IH07XG4iXSwic291cmNlUm9vdCI6IiJ9