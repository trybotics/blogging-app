(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[23],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-photo-picker.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-photo-picker.entry.js ***!
  \********************************************************************************************/
/*! exports provided: amplify_photo_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_photo_picker", function() { return AmplifyPhotoPicker; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");




var amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";
var AmplifyPhotoPicker = /** @class */ (function () {
    function AmplifyPhotoPicker(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Title string value */
        this.headerTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_BUTTON_TEXT;
        /** Function that handles file pick onClick */
        this.handleClick = function () { };
        this.handleInput = function (ev) {
            _this.file = ev.target.files[0];
            var reader = new FileReader();
            reader.onload = function (_e) {
                var url = reader.result;
                _this.previewState = url;
            };
            reader.readAsDataURL(_this.file);
        };
    }
    AmplifyPhotoPicker.prototype.componentWillLoad = function () {
        this.previewState = this.previewSrc;
    };
    AmplifyPhotoPicker.prototype.render = function () {
        var _this = this;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "photo-picker-container" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerTitle)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-hint" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerHint)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-body", slot: "picker" }, this.previewState ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: "" + this.previewState }) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: "photoPlaceholder" }))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "placeholder-hint" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholderHint)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { handleButtonClick: function () { return _this.handleClick(_this.file); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.buttonText)))));
    };
    return AmplifyPhotoPicker;
}());
AmplifyPhotoPicker.style = amplifyPhotoPickerCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LXBob3RvLXBpY2tlci5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ3RCO0FBQ2Q7QUFDb0M7QUFDL0QsbUNBQW1DLG1CQUFtQixpQ0FBaUMsOENBQThDLHFDQUFxQywwQ0FBMEMsK0NBQStDLCtDQUErQyx3QkFBd0IsZ0JBQWdCLElBQUksZ0NBQWdDLDZCQUE2QixXQUFXLFlBQVksaUJBQWlCLFdBQVcsWUFBWSxxQkFBcUIsa0JBQWtCLE9BQU8sTUFBTSxVQUFVLGVBQWUsUUFBUSwwQkFBMEIsNkJBQTZCLGlCQUFpQixtQkFBbUIsYUFBYSx3QkFBd0Isa0NBQWtDLHNCQUFzQixtQkFBbUIsYUFBYSxrQkFBa0IsWUFBWSxhQUFhLGtEQUFrRCxhQUFhLGtCQUFrQixvQkFBb0IsYUFBYSxxQkFBcUIsdUJBQXVCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLGtCQUFrQix3QkFBd0Isc0JBQXNCLGtCQUFrQix1Q0FBdUMsc0JBQXNCLG1CQUFtQjtBQUMzcUM7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQSwyQkFBMkIsMkRBQVk7QUFDdkM7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQSwrQkFBK0IsMkRBQVk7QUFDM0M7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFNBQVMsa0NBQWtDLEVBQUUsNERBQUMsMEJBQTBCLDREQUFDLFNBQVMsa0JBQWtCLEVBQUUsc0RBQUkseUJBQXlCLDREQUFDLFNBQVMsdUJBQXVCLEVBQUUsc0RBQUksd0JBQXdCLDREQUFDLG9CQUFvQix5REFBeUQsRUFBRSw0REFBQyxTQUFTLHVDQUF1QyxzQkFBc0IsNERBQUMsU0FBUyw4QkFBOEIsSUFBSSw0REFBQyxrQkFBa0IsMkJBQTJCLEtBQUssNERBQUMsU0FBUyw0QkFBNEIsRUFBRSxzREFBSSw2QkFBNkIsNERBQUMsb0JBQW9CLGlDQUFpQyxzQ0FBc0MsRUFBRSxFQUFFLEVBQUUsc0RBQUk7QUFDeG5CO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDc0QiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG52YXIgYW1wbGlmeVBob3RvUGlja2VyQ3NzID0gXCI6aG9zdHstLW9iamVjdC1maXQ6Y292ZXI7LS1oaW50LWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSk7LS1oZWFkZXItY29sb3I6dmFyKC0tYW1wbGlmeS1zZWNvbmRhcnktY29sb3IpOy0taGVhZGVyLXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LWxnKTstLWhlYWRlci1oaW50LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LW1kKTstLXBsYWNlaG9sZGVyLWhpbnQtc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pOy0tcGxhY2Vob2xkZXItYm9yZGVyLWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSl9LnBob3RvLXBpY2tlci1jb250YWluZXJ7bWF4LXdpZHRoOjUwcmVtfWltZ3stby1vYmplY3QtZml0OnZhcigtLW9iamVjdC1maXQpO29iamVjdC1maXQ6dmFyKC0tb2JqZWN0LWZpdCk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1pbnB1dFt0eXBlPWZpbGVde3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcn0uaGVhZGVye2NvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7Zm9udC1zaXplOnZhcigtLWhlYWRlci1zaXplKTtmb250LXdlaWdodDpib2xkO21hcmdpbi1ib3R0b206MjRweH0uaGVhZGVyLWhpbnR7Y29sb3I6dmFyKC0taGludC1jb2xvcik7Zm9udC1zaXplOnZhcigtLWhlYWRlci1oaW50LXNpemUpO3dvcmQtYnJlYWs6YnJlYWstd29yZDttYXJnaW4tYm90dG9tOjI0cHh9LnBpY2tlci1ib2R5e3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjI1cmVtO2hlaWdodDoxNnJlbTtib3JkZXI6MnB4IGRvdHRlZCB2YXIoLS1wbGFjZWhvbGRlci1ib3JkZXItY29sb3IpO3BhZGRpbmc6MTBweDttYXJnaW4tYm90dG9tOjhweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVufS5wbGFjZWhvbGRlci1oaW50e2NvbG9yOnZhcigtLWhpbnQtY29sb3IpO2ZvbnQtZmFtaWx5OkhlbHZldGljYTtmb250LXN0eWxlOml0YWxpYztmb250LXNpemU6dmFyKC0tcGxhY2Vob2xkZXItaGludC1zaXplKTt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7bWFyZ2luLWJvdHRvbTozMHB4fVwiO1xudmFyIEFtcGxpZnlQaG90b1BpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5UGhvdG9QaWNrZXIoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVGl0bGUgc3RyaW5nIHZhbHVlICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGl0bGUgPSBUcmFuc2xhdGlvbnMuUEhPVE9fUElDS0VSX1RJVExFO1xuICAgICAgICAvKiogSGVhZGVyIEhpbnQgdmFsdWUgaW4gc3RyaW5nICovXG4gICAgICAgIHRoaXMuaGVhZGVySGludCA9IFRyYW5zbGF0aW9ucy5QSE9UT19QSUNLRVJfSElOVDtcbiAgICAgICAgLyoqIFBsYWNlaG9sZGVyIGhpbnQgdGhhdCBnb2VzIHVuZGVyIHRoZSBwbGFjZWhvbGRlciBpbWFnZSAqL1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVySGludCA9IFRyYW5zbGF0aW9ucy5QSE9UT19QSUNLRVJfUExBQ0VIT0xERVJfSElOVDtcbiAgICAgICAgLyoqIFBpY2tlciBidXR0b24gdGV4dCBhcyBzdHJpbmcgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLlBIT1RPX1BJQ0tFUl9CVVRUT05fVEVYVDtcbiAgICAgICAgLyoqIEZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBmaWxlIHBpY2sgb25DbGljayAqL1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBfdGhpcy5maWxlID0gZXYudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJldmlld1N0YXRlID0gdXJsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKF90aGlzLmZpbGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBBbXBsaWZ5UGhvdG9QaWNrZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXZpZXdTdGF0ZSA9IHRoaXMucHJldmlld1NyYztcbiAgICB9O1xuICAgIEFtcGxpZnlQaG90b1BpY2tlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaG90by1waWNrZXItY29udGFpbmVyXCIgfSwgaChcImFtcGxpZnktc2VjdGlvblwiLCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGVyXCIgfSwgSTE4bi5nZXQodGhpcy5oZWFkZXJUaXRsZSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGVyLWhpbnRcIiB9LCBJMThuLmdldCh0aGlzLmhlYWRlckhpbnQpKSwgaChcImFtcGxpZnktcGlja2VyXCIsIHsgYWNjZXB0VmFsdWU6ICdpbWFnZS8qJywgaW5wdXRIYW5kbGVyOiB0aGlzLmhhbmRsZUlucHV0IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItYm9keVwiLCBzbG90OiBcInBpY2tlclwiIH0sIHRoaXMucHJldmlld1N0YXRlID8gaChcImltZ1wiLCB7IHNyYzogXCJcIiArIHRoaXMucHJldmlld1N0YXRlIH0pIDogaChcImFtcGxpZnktaWNvblwiLCB7IG5hbWU6IFwicGhvdG9QbGFjZWhvbGRlclwiIH0pKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwbGFjZWhvbGRlci1oaW50XCIgfSwgSTE4bi5nZXQodGhpcy5wbGFjZWhvbGRlckhpbnQpKSwgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgaGFuZGxlQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUNsaWNrKF90aGlzLmZpbGUpOyB9IH0sIEkxOG4uZ2V0KHRoaXMuYnV0dG9uVGV4dCkpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlQaG90b1BpY2tlcjtcbn0oKSk7XG5BbXBsaWZ5UGhvdG9QaWNrZXIuc3R5bGUgPSBhbXBsaWZ5UGhvdG9QaWNrZXJDc3M7XG5leHBvcnQgeyBBbXBsaWZ5UGhvdG9QaWNrZXIgYXMgYW1wbGlmeV9waG90b19waWNrZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=