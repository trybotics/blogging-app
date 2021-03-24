(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[21],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-link.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-link.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_link", function() { return AmplifyLink; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");

var amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";
var AmplifyLink = /** @class */ (function () {
    function AmplifyLink(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = 'navigation';
    }
    AmplifyLink.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "link", role: this.role }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifyLink.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifyLink;
}());
AmplifyLink.style = amplifyLinkCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWxpbmsuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFnRjtBQUNoRiw0QkFBNEIsMENBQTBDLHlDQUF5QywyQ0FBMkMsTUFBTSx3QkFBd0IsZUFBZSxXQUFXLHdCQUF3QixxQkFBcUIsWUFBWSx3QkFBd0IsMEJBQTBCLGFBQWEseUJBQXlCLDBCQUEwQjtBQUM3WDtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsT0FBTyxpQ0FBaUMsRUFBRSw0REFBQztBQUM1RDtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsNERBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDdUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC0zZmI1YzEzOS5qcyc7XG52YXIgYW1wbGlmeUxpbmtDc3MgPSBcIjpob3N0ey0tbGluay1jb2xvcjp2YXIoLS1hbXBsaWZ5LXByaW1hcnktY29sb3IpOy0tbGluay1ob3Zlcjp2YXIoLS1hbXBsaWZ5LXByaW1hcnktdGludCk7LS1saW5rLWFjdGl2ZTp2YXIoLS1hbXBsaWZ5LXByaW1hcnktc2hhZGUpfS5saW5re2NvbG9yOnZhcigtLWxpbmstY29sb3IpO2N1cnNvcjpwb2ludGVyfS5saW5rOmxpbmt7Y29sb3I6dmFyKC0tbGluay1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lmxpbms6aG92ZXJ7Y29sb3I6dmFyKC0tbGluay1ob3Zlcik7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ubGluazphY3RpdmV7Y29sb3I6dmFyKC0tbGluay1hY3RpdmUpO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9XCI7XG52YXIgQW1wbGlmeUxpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeUxpbmsoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVGhlIGxpbmsgcm9sZSBpcyB1c2VkIHRvIGlkZW50aWZ5IGFuIGVsZW1lbnQgdGhhdCBjcmVhdGVzIGEgaHlwZXJsaW5rIHRvIGEgcmVzb3VyY2UgdGhhdCBpcyBpbiB0aGUgYXBwbGljYXRpb24gb3IgZXh0ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5yb2xlID0gJ25hdmlnYXRpb24nO1xuICAgIH1cbiAgICBBbXBsaWZ5TGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJhXCIsIHsgY2xhc3M6IFwibGlua1wiLCByb2xlOiB0aGlzLnJvbGUgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbXBsaWZ5TGluay5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW1wbGlmeUxpbms7XG59KCkpO1xuQW1wbGlmeUxpbmsuc3R5bGUgPSBhbXBsaWZ5TGlua0NzcztcbmV4cG9ydCB7IEFtcGxpZnlMaW5rIGFzIGFtcGxpZnlfbGluayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==