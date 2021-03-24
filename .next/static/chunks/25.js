(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[25],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-select-mfa-type.entry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-select-mfa-type.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: amplify_select_mfa_type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_select_mfa_type", function() { return AmplifySelectMFAType; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
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






var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('SelectMFAType');
var AmplifySelectMFAType = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when Verify is clicked */
        this.handleSubmit = function (event) { return _this.verify(event); };
        this.TOTPSetup = false;
        this.selectMessage = null;
        this.MFAMethod = null;
        this.isTOTP = false;
        this.isNoMFA = false;
        this.isSMS = false;
        this.loading = false;
    }
    class_1.prototype.handleRadioButtonChange = function (event) {
        this.TOTPSetup = false;
        this.selectMessage = null;
        // Reseting state values to default
        this.isNoMFA = false;
        this.isTOTP = false;
        this.isSMS = false;
        var _a = event.target, value = _a.value, type = _a.type, checked = _a.checked;
        var checkType = ['radio', 'checkbox'].includes(type);
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS && checkType) {
            this.isSMS = checked;
        }
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP && checkType) {
            this.isTOTP = checked;
        }
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].NOMFA && checkType) {
            this.isNoMFA = checked;
        }
    };
    class_1.prototype.verify = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, preferredMFAData, error_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // avoid submitting the form
                        if (event) {
                            event.preventDefault();
                        }
                        logger.debug('MFA Type Values', { TOTP: this.isTOTP, SMS: this.isSMS, 'No MFA': this.isNoMFA });
                        if (this.isTOTP) {
                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP;
                        }
                        else if (this.isSMS) {
                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
                        }
                        else if (this.isNoMFA) {
                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].NOMFA;
                        }
                        user = this.authData;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA(user, this.MFAMethod)];
                    case 2:
                        preferredMFAData = _a.sent();
                        logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
                        this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUCCESS_MFA_TYPE) + " " + this.MFAMethod;
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        message = error_1.message;
                        if (message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["f"] || message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["g"]) {
                            this.TOTPSetup = true;
                            this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SETUP_TOTP_REQUIRED);
                            // 	TODO Add Toast = showToast: true,
                        }
                        else {
                            logger.debug('Set Preferred MFA failed', error_1);
                            this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
                            // 	TODO Add Toast = showToast: true,
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.contentBuilder = function () {
        var _this = this;
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
            logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].LESS_THAN_TWO_MFA_VALUES_MESSAGE));
            return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].LESS_THAN_TWO_MFA_VALUES_MESSAGE))));
        }
        var _a = this.MFATypes, SMS = _a.SMS, TOTP = _a.TOTP, Optional = _a.Optional;
        return (
        // TODO: Add Toast messages
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: function (event) { return _this.handleSubmit(event); }, loading: this.loading }, SMS ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, TOTP ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, Optional ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null));
    };
    class_1.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.contentBuilder(), this.TOTPSetup ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData }) : null));
    };
    return class_1;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LXNlbGVjdC1tZmEtdHlwZS5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQytEO0FBQ2Q7QUFDUztBQUNqQjtBQUNzQjtBQUN3RjtBQUN2SixpQkFBaUIsd0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQSw4Q0FBOEMsNEJBQTRCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQVM7QUFDL0I7QUFDQTtBQUNBLHNCQUFzQix5REFBUztBQUMvQjtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZEQUE2RDtBQUN0SDtBQUNBLDZDQUE2Qyx5REFBUztBQUN0RDtBQUNBO0FBQ0EsNkNBQTZDLHlEQUFTO0FBQ3REO0FBQ0E7QUFDQSw2Q0FBNkMseURBQVM7QUFDdEQ7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0RBQUksS0FBSywyREFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx3REFBaUMsZ0JBQWdCLHdEQUFvQztBQUM3SDtBQUNBLGlEQUFpRCxzREFBSSxLQUFLLDJEQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHNEQUFJLEtBQUssMkRBQVk7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQUksS0FBSywyREFBWTtBQUM5QyxvQkFBb0IsNERBQUMsY0FBYyw0REFBQyxZQUFZLHNEQUFJLEtBQUssMkRBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFDLDBCQUEwQixtQkFBbUIsc0RBQUksS0FBSywyREFBWSxrREFBa0Qsc0RBQUksS0FBSywyREFBWSwrREFBK0Qsa0NBQWtDLEVBQUUseUJBQXlCLFNBQVMsNERBQUMsMEJBQTBCLCtGQUErRiw2Q0FBNkMsRUFBRSxFQUFFLG1CQUFtQiw0REFBQywwQkFBMEIsa0dBQWtHLDZDQUE2QyxFQUFFLEVBQUUsdUJBQXVCLDREQUFDLDBCQUEwQixzR0FBc0csNkNBQTZDLEVBQUUsRUFBRTtBQUM1MEI7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxzREFBc0QsNERBQUMsd0JBQXdCLHNCQUFzQjtBQUN0SDtBQUNBO0FBQ0EsQ0FBQztBQUMwRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0IHsgTG9nZ2VyLCBJMThuIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgTSBhcyBNZmFPcHRpb24gfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IFQgYXMgVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9UcmFuc2xhdGlvbnMtYzgzM2Y2NjMuanMnO1xuaW1wb3J0IHsgTiBhcyBOT19BVVRIX01PRFVMRV9GT1VORCwgZiBhcyBVU0VSX05PVF9TRVRVUF9TT0ZUV0FSRV9UT0tFTl9NRkEsIGcgYXMgVVNFUl9OT1RfVkVSSUZJRURfU09GVFdBUkVfVE9LRU5fTUZBIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1NlbGVjdE1GQVR5cGUnKTtcbnZhciBBbXBsaWZ5U2VsZWN0TUZBVHlwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEZpcmVzIHdoZW4gVmVyaWZ5IGlzIGNsaWNrZWQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnZlcmlmeShldmVudCk7IH07XG4gICAgICAgIHRoaXMuVE9UUFNldHVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0TWVzc2FnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuTUZBTWV0aG9kID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1RPVFAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc05vTUZBID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTTVMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZVJhZGlvQnV0dG9uQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuVE9UUFNldHVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0TWVzc2FnZSA9IG51bGw7XG4gICAgICAgIC8vIFJlc2V0aW5nIHN0YXRlIHZhbHVlcyB0byBkZWZhdWx0XG4gICAgICAgIHRoaXMuaXNOb01GQSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVE9UUCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU01TID0gZmFsc2U7XG4gICAgICAgIHZhciBfYSA9IGV2ZW50LnRhcmdldCwgdmFsdWUgPSBfYS52YWx1ZSwgdHlwZSA9IF9hLnR5cGUsIGNoZWNrZWQgPSBfYS5jaGVja2VkO1xuICAgICAgICB2YXIgY2hlY2tUeXBlID0gWydyYWRpbycsICdjaGVja2JveCddLmluY2x1ZGVzKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IE1mYU9wdGlvbi5TTVMgJiYgY2hlY2tUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmlzU01TID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IE1mYU9wdGlvbi5UT1RQICYmIGNoZWNrVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RPVFAgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gTWZhT3B0aW9uLk5PTUZBICYmIGNoZWNrVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5pc05vTUZBID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1c2VyLCBwcmVmZXJyZWRNRkFEYXRhLCBlcnJvcl8xLCBtZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgc3VibWl0dGluZyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnTUZBIFR5cGUgVmFsdWVzJywgeyBUT1RQOiB0aGlzLmlzVE9UUCwgU01TOiB0aGlzLmlzU01TLCAnTm8gTUZBJzogdGhpcy5pc05vTUZBIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUT1RQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NRkFNZXRob2QgPSBNZmFPcHRpb24uVE9UUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTTVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1GQU1ldGhvZCA9IE1mYU9wdGlvbi5TTVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzTm9NRkEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1GQU1ldGhvZCA9IE1mYU9wdGlvbi5OT01GQTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSB0aGlzLmF1dGhEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnNldFByZWZlcnJlZE1GQSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguc2V0UHJlZmVycmVkTUZBKHVzZXIsIHRoaXMuTUZBTWV0aG9kKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZE1GQURhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1NldCBQcmVmZXJyZWQgTUZBIFN1Y2NlZWRlZCcsIHByZWZlcnJlZE1GQURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RNZXNzYWdlID0gSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNVQ0NFU1NfTUZBX1RZUEUpICsgXCIgXCIgKyB0aGlzLk1GQU1ldGhvZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yXzEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSBVU0VSX05PVF9TRVRVUF9TT0ZUV0FSRV9UT0tFTl9NRkEgfHwgbWVzc2FnZSA9PT0gVVNFUl9OT1RfVkVSSUZJRURfU09GVFdBUkVfVE9LRU5fTUZBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5UT1RQU2V0dXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TWVzc2FnZSA9IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TRVRVUF9UT1RQX1JFUVVJUkVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcdFRPRE8gQWRkIFRvYXN0ID0gc2hvd1RvYXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTZXQgUHJlZmVycmVkIE1GQSBmYWlsZWQnLCBlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE1lc3NhZ2UgPSBJMThuLmdldChUcmFuc2xhdGlvbnMuVU5BQkxFX1RPX1NFVFVQX01GQV9BVF9USElTX1RJTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFx0VE9ETyBBZGQgVG9hc3QgPSBzaG93VG9hc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb250ZW50QnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLk1GQVR5cGVzIHx8IE9iamVjdC5rZXlzKHRoaXMuTUZBVHlwZXMpLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhJMThuLmdldChUcmFuc2xhdGlvbnMuTEVTU19USEFOX1RXT19NRkFfVkFMVUVTX01FU1NBR0UpKTtcbiAgICAgICAgICAgIHJldHVybiAoaChcImRpdlwiLCBudWxsLCBoKFwiYVwiLCBudWxsLCBJMThuLmdldChUcmFuc2xhdGlvbnMuTEVTU19USEFOX1RXT19NRkFfVkFMVUVTX01FU1NBR0UpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMuTUZBVHlwZXMsIFNNUyA9IF9hLlNNUywgVE9UUCA9IF9hLlRPVFAsIE9wdGlvbmFsID0gX2EuT3B0aW9uYWw7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIFRPRE86IEFkZCBUb2FzdCBtZXNzYWdlc1xuICAgICAgICBoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBzdWJtaXRCdXR0b25UZXh0OiBJMThuLmdldChUcmFuc2xhdGlvbnMuU0VMRUNUX01GQV9UWVBFX1NVQk1JVF9CVVRUT05fVEVYVCksIGhlYWRlclRleHQ6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TRUxFQ1RfTUZBX1RZUEVfSEVBREVSX1RFWFQpLCBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU3VibWl0KGV2ZW50KTsgfSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0sIFNNUyA/IChoKFwiYW1wbGlmeS1yYWRpby1idXR0b25cIiwgeyBrZXk6IFwic21zXCIsIG5hbWU6IFwiTUZBVHlwZVwiLCB2YWx1ZTogXCJTTVNcIiwgbGFiZWw6IFwiU01TXCIsIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVJhZGlvQnV0dG9uQ2hhbmdlKGV2ZW50KTsgfSB9KSkgOiBudWxsLCBUT1RQID8gKGgoXCJhbXBsaWZ5LXJhZGlvLWJ1dHRvblwiLCB7IGtleTogXCJ0b3RwXCIsIG5hbWU6IFwiTUZBVHlwZVwiLCB2YWx1ZTogXCJUT1RQXCIsIGxhYmVsOiBcIlRPVFBcIiwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUmFkaW9CdXR0b25DaGFuZ2UoZXZlbnQpOyB9IH0pKSA6IG51bGwsIE9wdGlvbmFsID8gKGgoXCJhbXBsaWZ5LXJhZGlvLWJ1dHRvblwiLCB7IGtleTogXCJub01GQVwiLCBuYW1lOiBcIk1GQVR5cGVcIiwgdmFsdWU6IFwiTk9NRkFcIiwgbGFiZWw6IFwiTm8gTUZBXCIsIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVJhZGlvQnV0dG9uQ2hhbmdlKGV2ZW50KTsgfSB9KSkgOiBudWxsKSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCBudWxsLCB0aGlzLmNvbnRlbnRCdWlsZGVyKCksIHRoaXMuVE9UUFNldHVwID8gaChcImFtcGxpZnktdG90cC1zZXR1cFwiLCB7IHVzZXI6IHRoaXMuYXV0aERhdGEgfSkgOiBudWxsKSk7XG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG5leHBvcnQgeyBBbXBsaWZ5U2VsZWN0TUZBVHlwZSBhcyBhbXBsaWZ5X3NlbGVjdF9tZmFfdHlwZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==