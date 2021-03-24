(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[18],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-form-field_4.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-form-field_4.entry.js ***!
  \********************************************************************************************/
/*! exports provided: amplify_form_field, amplify_hint, amplify_input, amplify_label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_form_field", function() { return AmplifyFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_hint", function() { return AmplifyHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_input", function() { return AmplifyInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_label", function() { return AmplifyLabel; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");

var amplifyFormFieldCss = ":host{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";
var AmplifyFormField = /** @class */ (function () {
    function AmplifyFormField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
    }
    AmplifyFormField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field" }, this.label && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field-label" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label))), this.description && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: this.fieldId + "-description", class: "form-field-description", "data-test": "form-field-description" }, this.description)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "input" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { fieldId: this.fieldId, description: this.description, type: this.type, handleInputChange: this.handleInputChange, placeholder: this.placeholder, name: this.name, value: this.value, inputProps: this.inputProps, disabled: this.disabled }))), this.hint && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-hint", { id: this.fieldId + "-hint" }, this.hint)));
    };
    return AmplifyFormField;
}());
AmplifyFormField.style = amplifyFormFieldCss;
var amplifyHintCss = ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";
var AmplifyHint = /** @class */ (function () {
    function AmplifyHint(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyHint.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "hint" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return AmplifyHint;
}());
AmplifyHint.style = amplifyHintCss;
var amplifyInputCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";
var AmplifyInput = /** @class */ (function () {
    function AmplifyInput(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The callback, called when the input is modified by the user. */
        this.handleInputChange = function () { return void 0; };
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        this.formSubmit = Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "formSubmit", 7);
    }
    // eslint-disable-next-line
    AmplifyInput.prototype.handleKeyDown = function (ev) {
        if (ev.key === 'Enter') {
            this.formSubmit.emit(ev);
        }
    };
    AmplifyInput.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "input-host" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({ id: this.fieldId, "aria-describedby": this.fieldId && this.description ? this.fieldId + "-description" : null, type: this.type, onInput: function (event) { return _this.handleInputChange(event); }, placeholder: this.placeholder, name: this.name, class: "input", value: this.value, disabled: this.disabled }, this.inputProps))));
    };
    return AmplifyInput;
}());
AmplifyInput.style = amplifyInputCss;
var amplifyLabelCss = ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";
var AmplifyLabel = /** @class */ (function () {
    function AmplifyLabel(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyLabel.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "label", htmlFor: this.htmlFor }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return AmplifyLabel;
}());
AmplifyLabel.style = amplifyLabelCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWZvcm0tZmllbGRfNC5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzVGLGlDQUFpQyx5Q0FBeUMsK0NBQStDLFlBQVksbUJBQW1CLGtCQUFrQixjQUFjLGlDQUFpQyxxQkFBcUIsd0JBQXdCLHVDQUF1QyxrQkFBa0I7QUFDL1Q7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsU0FBUyxzQkFBc0IsaUJBQWlCLDREQUFDLFNBQVMsNEJBQTRCLEVBQUUsNERBQUMsbUJBQW1CLHdCQUF3QixzQ0FBc0MsNERBQUMsU0FBUyw0R0FBNEcsc0JBQXNCLDREQUFDLGNBQWMsNERBQUMsVUFBVSxnQkFBZ0IsRUFBRSw0REFBQyxtQkFBbUIsNE9BQTRPLGtCQUFrQiw0REFBQyxrQkFBa0IsNkJBQTZCO0FBQ3JyQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNEJBQTRCLDRCQUE0Qix5Q0FBeUMsbUNBQW1DLHlDQUF5QyxNQUFNLG1CQUFtQiwrQkFBK0IsK0JBQStCLDJCQUEyQix1QkFBdUI7QUFDdFQ7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsU0FBUyxnQkFBZ0IsRUFBRSw0REFBQztBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLHVDQUF1QyxxREFBcUQseUNBQXlDLGtEQUFrRCx1Q0FBdUMsd0JBQXdCLFlBQVksV0FBVyxPQUFPLGNBQWMsV0FBVyxhQUFhLGlDQUFpQyxtQkFBbUIseUNBQXlDLHNCQUFzQixxQkFBcUIsa0JBQWtCLDhCQUE4QixzQkFBc0IscUJBQXFCLGdCQUFnQixnQkFBZ0IsYUFBYSxhQUFhLHVDQUF1QyxnQkFBZ0IsWUFBWTtBQUN2ckI7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0E7QUFDQSwwQkFBMEIsNERBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLENBQUMsb0RBQUksR0FBRyxzQkFBc0IsRUFBRSw0REFBQyx5QkFBeUIsNEpBQTRKLHVDQUF1QyxFQUFFLDhHQUE4RztBQUM5WDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZDQUE2QyxPQUFPLHlCQUF5QixpQ0FBaUMsbUJBQW1CO0FBQzlKO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFdBQVcsd0NBQXdDLEVBQUUsNERBQUM7QUFDdkU7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUM2SSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBjIGFzIGNyZWF0ZUV2ZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTNmYjVjMTM5LmpzJztcbnZhciBhbXBsaWZ5Rm9ybUZpZWxkQ3NzID0gXCI6aG9zdHstLWxhYmVsLWZvbnQtc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtbWQpOy0tZGVzY3JpcHRpb24tZm9udC1zaXplOnZhcigtLWFtcGxpZnktdGV4dC1zbSl9LmZvcm0tZmllbGR7bWFyZ2luLWJvdHRvbToxNXB4fS5mb3JtLWZpZWxkLWxhYmVse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7cGFkZGluZy1ib3R0b206MC41ZW19LmZvcm0tZmllbGQtZGVzY3JpcHRpb257Zm9udC1zaXplOnZhcigtLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7cGFkZGluZy10b3A6MC41ZW19XCI7XG52YXIgQW1wbGlmeUZvcm1GaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5Rm9ybUZpZWxkKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFRoZSBpbnB1dCB0eXBlLiAgQ2FuIGJlIGFueSBIVE1MIGlucHV0IHR5cGUuICovXG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgLyoqIFRoZSByZXF1aXJlZCBmbGFnIGluIG9yZGVyIHRvIG1ha2UgYW4gaW5wdXQgcmVxdWlyZWQgcHJpb3IgdG8gc3VibWl0dGluZyBhIGZvcm0gKi9cbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvKiogKE9wdGlvbmFsKSBUaGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBpbnB1dCBlbGVtZW50LiAgVXNpbmcgaGludHMgaXMgcmVjb21tZW5kZWQsIGJ1dCBwbGFjZWhvbGRlcnMgY2FuIGFsc28gYmUgdXNlZnVsIHRvIGNvbnZleSBpbmZvcm1hdGlvbiB0byB1c2Vycy4gKi9cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICcnO1xuICAgIH1cbiAgICBBbXBsaWZ5Rm9ybUZpZWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImZvcm0tZmllbGRcIiB9LCB0aGlzLmxhYmVsICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZm9ybS1maWVsZC1sYWJlbFwiIH0sIGgoXCJhbXBsaWZ5LWxhYmVsXCIsIHsgaHRtbEZvcjogdGhpcy5maWVsZElkIH0sIHRoaXMubGFiZWwpKSksIHRoaXMuZGVzY3JpcHRpb24gJiYgKGgoXCJkaXZcIiwgeyBpZDogdGhpcy5maWVsZElkICsgXCItZGVzY3JpcHRpb25cIiwgY2xhc3M6IFwiZm9ybS1maWVsZC1kZXNjcmlwdGlvblwiLCBcImRhdGEtdGVzdFwiOiBcImZvcm0tZmllbGQtZGVzY3JpcHRpb25cIiB9LCB0aGlzLmRlc2NyaXB0aW9uKSksIGgoXCJkaXZcIiwgbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBcImlucHV0XCIgfSwgaChcImFtcGxpZnktaW5wdXRcIiwgeyBmaWVsZElkOiB0aGlzLmZpZWxkSWQsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLCB0eXBlOiB0aGlzLnR5cGUsIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciwgbmFtZTogdGhpcy5uYW1lLCB2YWx1ZTogdGhpcy52YWx1ZSwgaW5wdXRQcm9wczogdGhpcy5pbnB1dFByb3BzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KSkpLCB0aGlzLmhpbnQgJiYgaChcImFtcGxpZnktaGludFwiLCB7IGlkOiB0aGlzLmZpZWxkSWQgKyBcIi1oaW50XCIgfSwgdGhpcy5oaW50KSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlGb3JtRmllbGQ7XG59KCkpO1xuQW1wbGlmeUZvcm1GaWVsZC5zdHlsZSA9IGFtcGxpZnlGb3JtRmllbGRDc3M7XG52YXIgYW1wbGlmeUhpbnRDc3MgPSBcIjpob3N0ey0tY29sb3I6dmFyKC0tYW1wbGlmeS1ncmV5KTstLWZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpOy0tZm9udC1zaXplOnZhcigtLWFtcGxpZnktdGV4dC14cyk7LS1mb250LXdlaWdodDp2YXIoLS1hbXBsaWZ5LWZvbnQtd2VpZ2h0KX0uaGludHtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLWZvbnQtd2VpZ2h0KTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTttYXJnaW4tYm90dG9tOjIuNjI1cmVtfVwiO1xudmFyIEFtcGxpZnlIaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlIaW50KGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgQW1wbGlmeUhpbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGludFwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUhpbnQ7XG59KCkpO1xuQW1wbGlmeUhpbnQuc3R5bGUgPSBhbXBsaWZ5SGludENzcztcbnZhciBhbXBsaWZ5SW5wdXRDc3MgPSBcIjpob3N0ey0tY29sb3I6dmFyKC0tYW1wbGlmeS1zZWNvbmRhcnktY29sb3IpOy0tYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hbXBsaWZ5LXNlY29uZGFyeS1jb250cmFzdCk7LS1ib3JkZXItY29sb3I6dmFyKC0tYW1wbGlmeS1saWdodC1ncmV5KTstLWJvcmRlci1jb2xvci1mb2N1czp2YXIoLS1hbXBsaWZ5LXByaW1hcnktY29sb3IpOy0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOy0tbWFyZ2luOjAgMCAwLjYyNXJlbSAwfS5pbnB1dC1ob3N0e3dpZHRoOjEwMCV9LmlucHV0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjFyZW07Zm9udC1zaXplOnZhcigtLWFtcGxpZnktdGV4dC1zbSk7Y29sb3I6dmFyKC0tY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjp2YXIoLS1ib3JkZXIpO2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46dmFyKC0tbWFyZ2luKTtoZWlnaHQ6My4xMjVyZW07bGluZS1oZWlnaHQ6MS4xfS5pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvci1mb2N1cyl9LmlucHV0OmRpc2FibGVke29wYWNpdHk6MC41fVwiO1xudmFyIEFtcGxpZnlJbnB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5SW5wdXQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVGhlIGlucHV0IHR5cGUuICBDYW4gYmUgYW55IEhUTUwgaW5wdXQgdHlwZS4gKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ3RleHQnO1xuICAgICAgICAvKiogVGhlIGNhbGxiYWNrLCBjYWxsZWQgd2hlbiB0aGUgaW5wdXQgaXMgbW9kaWZpZWQgYnkgdGhlIHVzZXIuICovXG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB2b2lkIDA7IH07XG4gICAgICAgIC8qKiAoT3B0aW9uYWwpIFRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0IGVsZW1lbnQuICBVc2luZyBoaW50cyBpcyByZWNvbW1lbmRlZCwgYnV0IHBsYWNlaG9sZGVycyBjYW4gYWxzbyBiZSB1c2VmdWwgdG8gY29udmV5IGluZm9ybWF0aW9uIHRvIHVzZXJzLiAqL1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZm9ybVN1Ym1pdFwiLCA3KTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgQW1wbGlmeUlucHV0LnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmIChldi5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGV2KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW1wbGlmeUlucHV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBcImlucHV0LWhvc3RcIiB9LCBoKFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiB0aGlzLmZpZWxkSWQsIFwiYXJpYS1kZXNjcmliZWRieVwiOiB0aGlzLmZpZWxkSWQgJiYgdGhpcy5kZXNjcmlwdGlvbiA/IHRoaXMuZmllbGRJZCArIFwiLWRlc2NyaXB0aW9uXCIgOiBudWxsLCB0eXBlOiB0aGlzLnR5cGUsIG9uSW5wdXQ6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOyB9LCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciwgbmFtZTogdGhpcy5uYW1lLCBjbGFzczogXCJpbnB1dFwiLCB2YWx1ZTogdGhpcy52YWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgdGhpcy5pbnB1dFByb3BzKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbXBsaWZ5SW5wdXQ7XG59KCkpO1xuQW1wbGlmeUlucHV0LnN0eWxlID0gYW1wbGlmeUlucHV0Q3NzO1xudmFyIGFtcGxpZnlMYWJlbENzcyA9IFwiOmhvc3R7LS1sYWJlbC1jb2xvcjp2YXIoLS1hbXBsaWZ5LXNlY29uZGFyeS1jb2xvcil9LmxhYmVse2NvbG9yOnZhcigtLWxhYmVsLWNvbG9yKTtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTttYXJnaW4tYm90dG9tOjE2cHh9XCI7XG52YXIgQW1wbGlmeUxhYmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlMYWJlbChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIEFtcGxpZnlMYWJlbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJsYWJlbFwiLCB7IGNsYXNzOiBcImxhYmVsXCIsIGh0bWxGb3I6IHRoaXMuaHRtbEZvciB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlMYWJlbDtcbn0oKSk7XG5BbXBsaWZ5TGFiZWwuc3R5bGUgPSBhbXBsaWZ5TGFiZWxDc3M7XG5leHBvcnQgeyBBbXBsaWZ5Rm9ybUZpZWxkIGFzIGFtcGxpZnlfZm9ybV9maWVsZCwgQW1wbGlmeUhpbnQgYXMgYW1wbGlmeV9oaW50LCBBbXBsaWZ5SW5wdXQgYXMgYW1wbGlmeV9pbnB1dCwgQW1wbGlmeUxhYmVsIGFzIGFtcGxpZnlfbGFiZWwgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=