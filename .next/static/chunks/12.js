(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_button, amplify_loading_spinner, amplify_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_button", function() { return AmplifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_loading_spinner", function() { return AmplifyLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_section", function() { return AmplifySection; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4f61e5ff.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-4f61e5ff.js");







var amplifyButtonCss = ":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";
var AmplifyButton = /** @class */ (function () {
    function AmplifyButton(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = 'button';
        /** Variant of a button: 'button' | 'anchor | 'icon' */
        this.variant = 'button';
        /** Disabled state of the button */
        this.disabled = false;
        this.handleClick = function (ev) {
            if (_this.handleButtonClick) {
                _this.handleButtonClick(ev);
            }
            else if (Object(_helpers_4f61e5ff_js__WEBPACK_IMPORTED_MODULE_6__["e"])(_this.el) && _this.type == 'submit') {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                var form = _this.el.closest('form');
                if (!form) {
                    // Check for form inside of form section's shadow dom
                    var formSection = _this.el.closest('amplify-form-section');
                    form = formSection && formSection.shadowRoot.querySelector('form');
                }
                if (form) {
                    ev.preventDefault();
                    var fakeButton = document.createElement('button');
                    fakeButton.type = _this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
    }
    AmplifyButton.prototype.render = function () {
        var _a;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: (_a = {},
                _a[this.variant] = true,
                _a), type: this.type, disabled: this.disabled, onClick: this.handleClick }, this.variant === 'icon' && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: this.icon }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifyButton.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifyButton;
}());
AmplifyButton.style = amplifyButtonCss;
var amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var AmplifyLoadingSpinner = /** @class */ (function () {
    function AmplifyLoadingSpinner(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyLoadingSpinner.prototype.render = function () {
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { class: "loading-spinner", name: "loading" });
    };
    return AmplifyLoadingSpinner;
}());
AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;
var amplifySectionCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";
var AmplifySection = /** @class */ (function () {
    function AmplifySection(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Equivalent to html section role */
        this.role = 'application';
    }
    AmplifySection.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "section", role: this.role }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifySection.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifySection;
}());
AmplifySection.style = amplifySectionCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWJ1dHRvbl8zLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdGO0FBQ3JEO0FBQ087QUFDUDtBQUNTO0FBQ0g7QUFDeUI7QUFDMUQsOEJBQThCLGdEQUFnRCx1REFBdUQsdURBQXVELHdDQUF3QyxpQkFBaUIsdUJBQXVCLHVCQUF1QiwwQ0FBMEMseUNBQXlDLDJDQUEyQywyQkFBMkIsaUNBQWlDLHNCQUFzQixlQUFlLGFBQWEsbUJBQW1CLGtCQUFrQiwwQkFBMEIsTUFBTSxlQUFlLFFBQVEsV0FBVyxnQkFBZ0IscUJBQXFCLGdCQUFnQixpQ0FBaUMsdUNBQXVDLGdCQUFnQixrQkFBa0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHNCQUFzQixtQkFBbUIsdUJBQXVCLHNCQUFzQixxQ0FBcUMseUNBQXlDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLGVBQWUsVUFBVSxnREFBZ0QsY0FBYyxZQUFZLGlCQUFpQixhQUFhLFlBQVksaURBQWlELE1BQU0seUJBQXlCLFlBQVksYUFBYSxlQUFlLHVCQUF1QixtQkFBbUIsbUNBQW1DLDRCQUE0QixRQUFRLHdCQUF3Qix5QkFBeUIsVUFBVSxZQUFZLGFBQWEsZUFBZSxhQUFhLHdCQUF3QixxQkFBcUIsY0FBYyx3QkFBd0IsMEJBQTBCLGVBQWUseUJBQXlCLDBCQUEwQjtBQUN0M0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxZQUFZLGdCQUFnQjtBQUM3QztBQUNBLDBGQUEwRiw2QkFBNkIsNERBQUMsa0JBQWtCLGtCQUFrQixHQUFHLDREQUFDO0FBQ2hLO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSw0REFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBLHNDQUFzQyxpREFBaUQsZ0RBQWdELGlCQUFpQixrQkFBa0IscUJBQXFCLHFEQUFxRCw2Q0FBNkMsbUJBQW1CLHFCQUFxQixxQ0FBcUMsZ0NBQWdDLGtDQUFrQyw2QkFBNkIsbUNBQW1DLEtBQUssK0JBQStCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEIsMkJBQTJCLEtBQUssK0JBQStCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEI7QUFDN3ZCO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0EsZUFBZSw0REFBQyxrQkFBa0IsNENBQTRDO0FBQzlFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrQkFBK0IseUNBQXlDLG1EQUFtRCxTQUFTLGtCQUFrQix5Q0FBeUMseUNBQXlDLGtDQUFrQyxnQkFBZ0IscUJBQXFCLHdDQUF3Qyx3RUFBd0UsZ0VBQWdFLDhCQUE4QixzQkFBc0IsK0JBQStCLFdBQVcsa0NBQWtDLDBCQUEwQixTQUFTLDhCQUE4QjtBQUNocUI7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLGFBQWEsb0NBQW9DLEVBQUUsNERBQUM7QUFDckU7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDREQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ2dJIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0ICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCAnLi9UcmFuc2xhdGlvbnMtYzgzM2Y2NjMuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBlIGFzIGhhc1NoYWRvd0RvbSB9IGZyb20gJy4vaGVscGVycy00ZjYxZTVmZi5qcyc7XG52YXIgYW1wbGlmeUJ1dHRvbkNzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTp2YXIoLS1hbXBsaWZ5LXByaW1hcnktc2hhZGUpOy0tYmFja2dyb3VuZC1jb2xvci1kaXNhYmxlOnZhcigtLWFtcGxpZnktcHJpbWFyeS10aW50KTstLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb250cmFzdCk7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1saW5rLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS1saW5rLWhvdmVyOnZhcigtLWFtcGxpZnktcHJpbWFyeS10aW50KTstLWxpbmstYWN0aXZlOnZhcigtLWFtcGxpZnktcHJpbWFyeS1zaGFkZSk7LS10ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7LS1pY29uLWZpbGw6dmFyKC0tYW1wbGlmeS13aGl0ZSk7LS1pY29uLWhlaWdodDoxLjI1cmVtOy0tcGFkZGluZzoxcmVtOy0td2lkdGg6MTAwJTt3aWR0aDp2YXIoLS13aWR0aCk7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXs6aG9zdHt3aWR0aDppbmhlcml0fX0uYnV0dG9ue3dpZHRoOjEwMCU7bWluLXdpZHRoOjE1M3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtmb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Y29sb3I6dmFyKC0tY29sb3IpO3BhZGRpbmc6dmFyKC0tcGFkZGluZyk7bGV0dGVyLXNwYWNpbmc6MC43NXB4O3RleHQtdHJhbnNmb3JtOnZhcigtLXRleHQtdHJhbnNmb3JtKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpfS5idXR0b246YWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYnV0dG9uOmhvdmVye29wYWNpdHk6MC44fS5idXR0b246ZGlzYWJsZWR7b3BhY2l0eTowLjY1O2N1cnNvcjphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvci1kaXNhYmxlKX0uaWNvbntiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7Ym9yZGVyOm5vbmU7Zm9udDppbmhlcml0O2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6dmFyKC0tcGFkZGluZyl9Lmljb24gYW1wbGlmeS1pY29uey0taWNvbi1maWxsLWNvbG9yOnZhcigtLWljb24tZmlsbCk7LS1oZWlnaHQ6dmFyKC0taWNvbi1oZWlnaHQpfS5hbmNob3J7Y29sb3I6dmFyKC0tbGluay1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250OmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXJ9LmFuY2hvcjpsaW5re2NvbG9yOnZhcigtLWxpbmstY29sb3IpO3RleHQtZGVjb3JhdGlvbjpub25lfS5hbmNob3I6aG92ZXJ7Y29sb3I6dmFyKC0tbGluay1ob3Zlcik7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uYW5jaG9yOmFjdGl2ZXtjb2xvcjp2YXIoLS1saW5rLWFjdGl2ZSk7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1cIjtcbnZhciBBbXBsaWZ5QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVHlwZSBvZiB0aGUgYnV0dG9uOiAnYnV0dG9uJywgJ3N1Ym1pdCcgb3IgJ3Jlc2V0JyAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgLyoqIFZhcmlhbnQgb2YgYSBidXR0b246ICdidXR0b24nIHwgJ2FuY2hvciB8ICdpY29uJyAqL1xuICAgICAgICB0aGlzLnZhcmlhbnQgPSAnYnV0dG9uJztcbiAgICAgICAgLyoqIERpc2FibGVkIHN0YXRlIG9mIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVCdXR0b25DbGljayhldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNTaGFkb3dEb20oX3RoaXMuZWwpICYmIF90aGlzLnR5cGUgPT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGJ1dHRvbiB3YW50cyB0byBzcGVjaWZpY2FsbHkgc3VibWl0IGEgZm9ybVxuICAgICAgICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBkb20gdG8gc2VlIGlmIHdlJ3JlIGluIGEgPGZvcm0+XG4gICAgICAgICAgICAgICAgLy8gYW5kIGlmIHNvLCB0aGVuIHVzZSBKUyB0byBzdWJtaXQgaXRcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IF90aGlzLmVsLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGZvcm0gaW5zaWRlIG9mIGZvcm0gc2VjdGlvbidzIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1TZWN0aW9uID0gX3RoaXMuZWwuY2xvc2VzdCgnYW1wbGlmeS1mb3JtLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybSA9IGZvcm1TZWN0aW9uICYmIGZvcm1TZWN0aW9uLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmFrZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnR5cGUgPSBfdGhpcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmFrZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEFtcGxpZnlCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKGgoXCJidXR0b25cIiwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbdGhpcy52YXJpYW50XSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2EpLCB0eXBlOiB0aGlzLnR5cGUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrIH0sIHRoaXMudmFyaWFudCA9PT0gJ2ljb24nICYmIGgoXCJhbXBsaWZ5LWljb25cIiwgeyBuYW1lOiB0aGlzLmljb24gfSksIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW1wbGlmeUJ1dHRvbi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW1wbGlmeUJ1dHRvbjtcbn0oKSk7XG5BbXBsaWZ5QnV0dG9uLnN0eWxlID0gYW1wbGlmeUJ1dHRvbkNzcztcbnZhciBhbXBsaWZ5TG9hZGluZ1NwaW5uZXJDc3MgPSBcIjpob3N0ey0tc3Bpbm5lci1jaXJjbGUtZmlsbDp2YXIoLS1hbXBsaWZ5LXNtb2tlLXdoaXRlKTstLXNwaW5uZXItYmFyLWZpbGw6dmFyKC0tYW1wbGlmeS1wcmltYXJ5LWNvbG9yKTstLXdpZHRoOjAuODc1cmVtOy0taGVpZ2h0OjAuODc1cmVtfS5sb2FkaW5nLXNwaW5uZXIgc3Zney13ZWJraXQtYW5pbWF0aW9uOmxvYWRpbmctc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOmxvYWRpbmctc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7d2lkdGg6dmFyKC0td2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpfS5sb2FkaW5nLXNwaW5uZXIgc3ZnICNzcGlubmVyLWNpcmNsZXtmaWxsOnZhcigtLXNwaW5uZXItY2lyY2xlLWZpbGwpfS5sb2FkaW5nLXNwaW5uZXIgc3ZnICNzcGlubmVyLWJhcntmaWxsOnZhcigtLXNwaW5uZXItYmFyLWZpbGwpfUAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXNwaW5uZXJ7ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbG9hZGluZy1zcGlubmVye2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1cIjtcbnZhciBBbXBsaWZ5TG9hZGluZ1NwaW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeUxvYWRpbmdTcGlubmVyKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgQW1wbGlmeUxvYWRpbmdTcGlubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoKFwiYW1wbGlmeS1pY29uXCIsIHsgY2xhc3M6IFwibG9hZGluZy1zcGlubmVyXCIsIG5hbWU6IFwibG9hZGluZ1wiIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlMb2FkaW5nU3Bpbm5lcjtcbn0oKSk7XG5BbXBsaWZ5TG9hZGluZ1NwaW5uZXIuc3R5bGUgPSBhbXBsaWZ5TG9hZGluZ1NwaW5uZXJDc3M7XG52YXIgYW1wbGlmeVNlY3Rpb25Dc3MgPSBcIjpob3N0ey0tZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSk7LS1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFtcGxpZnktYmFja2dyb3VuZC1jb2xvcil9LnNlY3Rpb257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWJvdHRvbTp2YXIoLS1tYXJnaW4tYm90dG9tLCAyMHB4KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO3BhZGRpbmc6dmFyKC0tcGFkZGluZywgMzVweCA0MHB4KTt0ZXh0LWFsaWduOmxlZnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzLCA2cHgpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93LCAxcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdywgMXB4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpKTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO3dpZHRoOjEwMCU7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCwgMjByZW0pfUBtZWRpYSAobWluLXdpZHRoOiA2NzJweCl7LnNlY3Rpb257d2lkdGg6dmFyKC0td2lkdGgsIDI4Ljc1cmVtKX19XCI7XG52YXIgQW1wbGlmeVNlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeVNlY3Rpb24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogRXF1aXZhbGVudCB0byBodG1sIHNlY3Rpb24gcm9sZSAqL1xuICAgICAgICB0aGlzLnJvbGUgPSAnYXBwbGljYXRpb24nO1xuICAgIH1cbiAgICBBbXBsaWZ5U2VjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzZWN0aW9uXCIsIHsgY2xhc3M6IFwic2VjdGlvblwiLCByb2xlOiB0aGlzLnJvbGUgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbXBsaWZ5U2VjdGlvbi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW1wbGlmeVNlY3Rpb247XG59KCkpO1xuQW1wbGlmeVNlY3Rpb24uc3R5bGUgPSBhbXBsaWZ5U2VjdGlvbkNzcztcbmV4cG9ydCB7IEFtcGxpZnlCdXR0b24gYXMgYW1wbGlmeV9idXR0b24sIEFtcGxpZnlMb2FkaW5nU3Bpbm5lciBhcyBhbXBsaWZ5X2xvYWRpbmdfc3Bpbm5lciwgQW1wbGlmeVNlY3Rpb24gYXMgYW1wbGlmeV9zZWN0aW9uIH07XG4iXSwic291cmNlUm9vdCI6IiJ9