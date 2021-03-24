(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[11],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-auth-fields_9.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-auth-fields_9.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_auth_fields, amplify_code_field, amplify_country_dial_code, amplify_email_field, amplify_form_section, amplify_password_field, amplify_phone_field, amplify_select, amplify_username_field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_auth_fields", function() { return AmplifyAuthFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_code_field", function() { return AmplifyCodeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_country_dial_code", function() { return AmplifyCountryDialCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_email_field", function() { return AmplifyEmailField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_form_section", function() { return AmplifyFormSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_password_field", function() { return AmplifyPasswordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_phone_field", function() { return AmplifyPhoneField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_select", function() { return AmplifySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_username_field", function() { return AmplifyUsernameField; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");





var componentFieldMapping = {
    username: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-username-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })); },
    password: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-password-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })); },
    email: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-email-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })); },
    code: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-code-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: Object.assign(Object.assign({}, ff.inputProps), { min: '0' }), disabled: ff.disabled })); },
    // TODO: Will create a phone field component once the dial country code component is in
    phone_number: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-phone-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, dialCode: ff.dialCode })); },
    default: function (ff) { return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })); },
};
var amplifyAuthFieldsCss = ".auth-fields{margin-bottom:2rem}";
var AmplifyAuthFields = /** @class */ (function () {
    function AmplifyAuthFields(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyAuthFields.prototype.constructFormFieldOptions = function (formFields) {
        var content = [];
        if (formFields === undefined)
            return '';
        formFields.forEach(function (formField) {
            if (typeof formField === 'string') {
                content.push(componentFieldMapping[formField](formField));
            }
            else if (Object.keys(componentFieldMapping).includes(formField.type)) {
                content.push(componentFieldMapping[formField.type](formField));
            }
            else {
                content.push(componentFieldMapping['default'](formField));
            }
        });
        return content;
    };
    AmplifyAuthFields.prototype.render = function () {
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "auth-fields" }, this.constructFormFieldOptions(this.formFields));
    };
    return AmplifyAuthFields;
}());
AmplifyAuthFields.style = amplifyAuthFieldsCss;
var AmplifyCodeField = /** @class */ (function () {
    function AmplifyCodeField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["k"];
        /** Used for the code label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CODE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CODE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    AmplifyCodeField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), type: "number", hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    };
    return AmplifyCodeField;
}());
var countryDialCodes = [
    { label: '+1', value: '+1' },
    { label: '+7', value: '+7' },
    { label: '+20', value: '+20' },
    { label: '+27', value: '+27' },
    { label: '+30', value: '+30' },
    { label: '+31', value: '+31' },
    { label: '+32', value: '+32' },
    { label: '+33', value: '+33' },
    { label: '+34', value: '+34' },
    { label: '+36', value: '+36' },
    { label: '+39', value: '+39' },
    { label: '+40', value: '+40' },
    { label: '+41', value: '+41' },
    { label: '+43', value: '+43' },
    { label: '+44', value: '+44' },
    { label: '+45', value: '+45' },
    { label: '+46', value: '+46' },
    { label: '+47', value: '+47' },
    { label: '+48', value: '+48' },
    { label: '+49', value: '+49' },
    { label: '+51', value: '+51' },
    { label: '+52', value: '+52' },
    { label: '+53', value: '+53' },
    { label: '+54', value: '+54' },
    { label: '+55', value: '+55' },
    { label: '+56', value: '+56' },
    { label: '+57', value: '+57' },
    { label: '+58', value: '+58' },
    { label: '+60', value: '+60' },
    { label: '+61', value: '+61' },
    { label: '+62', value: '+62' },
    { label: '+63', value: '+63' },
    { label: '+64', value: '+64' },
    { label: '+65', value: '+65' },
    { label: '+66', value: '+66' },
    { label: '+81', value: '+81' },
    { label: '+82', value: '+82' },
    { label: '+84', value: '+84' },
    { label: '+86', value: '+86' },
    { label: '+90', value: '+90' },
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
    { label: '+93', value: '+93' },
    { label: '+94', value: '+94' },
    { label: '+95', value: '+95' },
    { label: '+98', value: '+98' },
    { label: '+212', value: '+212' },
    { label: '+213', value: '+213' },
    { label: '+216', value: '+216' },
    { label: '+218', value: '+218' },
    { label: '+220', value: '+220' },
    { label: '+221', value: '+221' },
    { label: '+222', value: '+222' },
    { label: '+223', value: '+223' },
    { label: '+224', value: '+224' },
    { label: '+225', value: '+225' },
    { label: '+226', value: '+226' },
    { label: '+227', value: '+227' },
    { label: '+228', value: '+228' },
    { label: '+229', value: '+229' },
    { label: '+230', value: '+230' },
    { label: '+231', value: '+231' },
    { label: '+232', value: '+232' },
    { label: '+233', value: '+233' },
    { label: '+234', value: '+234' },
    { label: '+235', value: '+235' },
    { label: '+236', value: '+236' },
    { label: '+237', value: '+237' },
    { label: '+238', value: '+238' },
    { label: '+239', value: '+239' },
    { label: '+240', value: '+240' },
    { label: '+241', value: '+241' },
    { label: '+242', value: '+242' },
    { label: '+243', value: '+243' },
    { label: '+244', value: '+244' },
    { label: '+245', value: '+245' },
    { label: '+246', value: '+246' },
    { label: '+248', value: '+248' },
    { label: '+249', value: '+249' },
    { label: '+250', value: '+250' },
    { label: '+251', value: '+251' },
    { label: '+252', value: '+252' },
    { label: '+253', value: '+253' },
    { label: '+254', value: '+254' },
    { label: '+255', value: '+255' },
    { label: '+256', value: '+256' },
    { label: '+257', value: '+257' },
    { label: '+258', value: '+258' },
    { label: '+260', value: '+260' },
    { label: '+261', value: '+261' },
    { label: '+262', value: '+262' },
    { label: '+263', value: '+263' },
    { label: '+264', value: '+264' },
    { label: '+265', value: '+265' },
    { label: '+266', value: '+266' },
    { label: '+267', value: '+267' },
    { label: '+268', value: '+268' },
    { label: '+269', value: '+269' },
    { label: '+290', value: '+290' },
    { label: '+291', value: '+291' },
    { label: '+297', value: '+297' },
    { label: '+298', value: '+298' },
    { label: '+299', value: '+299' },
    { label: '+345', value: '+345' },
    { label: '+350', value: '+350' },
    { label: '+351', value: '+351' },
    { label: '+352', value: '+352' },
    { label: '+353', value: '+353' },
    { label: '+354', value: '+354' },
    { label: '+355', value: '+355' },
    { label: '+356', value: '+356' },
    { label: '+357', value: '+357' },
    { label: '+358', value: '+358' },
    { label: '+359', value: '+359' },
    { label: '+370', value: '+370' },
    { label: '+371', value: '+371' },
    { label: '+372', value: '+372' },
    { label: '+373', value: '+373' },
    { label: '+374', value: '+374' },
    { label: '+375', value: '+375' },
    { label: '+376', value: '+376' },
    { label: '+377', value: '+377' },
    { label: '+378', value: '+378' },
    { label: '+379', value: '+379' },
    { label: '+380', value: '+380' },
    { label: '+381', value: '+381' },
    { label: '+382', value: '+382' },
    { label: '+385', value: '+385' },
    { label: '+386', value: '+386' },
    { label: '+387', value: '+387' },
    { label: '+389', value: '+389' },
    { label: '+420', value: '+420' },
    { label: '+421', value: '+421' },
    { label: '+423', value: '+423' },
    { label: '+500', value: '+500' },
    { label: '+501', value: '+501' },
    { label: '+502', value: '+502' },
    { label: '+503', value: '+503' },
    { label: '+504', value: '+504' },
    { label: '+505', value: '+505' },
    { label: '+506', value: '+506' },
    { label: '+507', value: '+507' },
    { label: '+508', value: '+508' },
    { label: '+509', value: '+509' },
    { label: '+537', value: '+537' },
    { label: '+590', value: '+590' },
    { label: '+591', value: '+591' },
    { label: '+593', value: '+593' },
    { label: '+594', value: '+594' },
    { label: '+595', value: '+595' },
    { label: '+596', value: '+596' },
    { label: '+597', value: '+597' },
    { label: '+598', value: '+598' },
    { label: '+599', value: '+599' },
    { label: '+670', value: '+670' },
    { label: '+672', value: '+672' },
    { label: '+673', value: '+673' },
    { label: '+674', value: '+674' },
    { label: '+675', value: '+675' },
    { label: '+676', value: '+676' },
    { label: '+677', value: '+677' },
    { label: '+678', value: '+678' },
    { label: '+679', value: '+679' },
    { label: '+680', value: '+680' },
    { label: '+681', value: '+681' },
    { label: '+682', value: '+682' },
    { label: '+683', value: '+683' },
    { label: '+685', value: '+685' },
    { label: '+686', value: '+686' },
    { label: '+687', value: '+687' },
    { label: '+688', value: '+688' },
    { label: '+689', value: '+689' },
    { label: '+690', value: '+690' },
    { label: '+691', value: '+691' },
    { label: '+692', value: '+692' },
    { label: '+850', value: '+850' },
    { label: '+852', value: '+852' },
    { label: '+853', value: '+853' },
    { label: '+855', value: '+855' },
    { label: '+856', value: '+856' },
    { label: '+872', value: '+872' },
    { label: '+880', value: '+880' },
    { label: '+886', value: '+886' },
    { label: '+960', value: '+960' },
    { label: '+961', value: '+961' },
    { label: '+962', value: '+962' },
    { label: '+963', value: '+963' },
    { label: '+964', value: '+964' },
    { label: '+965', value: '+965' },
    { label: '+966', value: '+966' },
    { label: '+967', value: '+967' },
    { label: '+968', value: '+968' },
    { label: '+970', value: '+970' },
    { label: '+971', value: '+971' },
    { label: '+972', value: '+972' },
    { label: '+973', value: '+973' },
    { label: '+974', value: '+974' },
    { label: '+975', value: '+975' },
    { label: '+976', value: '+976' },
    { label: '+977', value: '+977' },
    { label: '+992', value: '+992' },
    { label: '+993', value: '+993' },
    { label: '+994', value: '+994' },
    { label: '+995', value: '+995' },
    { label: '+996', value: '+996' },
    { label: '+998', value: '+998' },
];
var AmplifyCountryDialCode = /** @class */ (function () {
    function AmplifyCountryDialCode(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The ID of the field.  Should match with its corresponding input's ID. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["C"];
        /** The options of the country dial code select input. */
        this.options = countryDialCodes;
        /** Default selected dial code */
        this.dialCode = '+1';
    }
    AmplifyCountryDialCode.prototype.componentWillLoad = function () {
        this.setSelectedDialCode();
    };
    AmplifyCountryDialCode.prototype.watchDialCodeHandler = function () {
        this.setSelectedDialCode();
    };
    AmplifyCountryDialCode.prototype.setSelectedDialCode = function () {
        if (typeof this.dialCode === 'number') {
            this.selectedDialCode = "+" + this.dialCode;
        }
        else {
            this.selectedDialCode = this.dialCode;
        }
    };
    AmplifyCountryDialCode.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-select", { fieldId: this.fieldId, options: this.options, handleInputChange: this.handleInputChange, selected: this.selectedDialCode }));
    };
    Object.defineProperty(AmplifyCountryDialCode, "watchers", {
        get: function () {
            return {
                "dialCode": ["watchDialCodeHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return AmplifyCountryDialCode;
}());
var AmplifyEmailField = /** @class */ (function () {
    function AmplifyEmailField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["E"];
        /** Used for the EMAIL label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    AmplifyEmailField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), type: "email", required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    };
    return AmplifyEmailField;
}());
var amplifyFormSectionCss = ":host{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";
var AmplifyFormSection = /** @class */ (function () {
    function AmplifyFormSection(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = 'Submit';
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = 'form-section';
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
    }
    // eslint-disable-next-line
    AmplifyFormSection.prototype.handleFormSubmit = function (ev) {
        this.handleSubmit(ev.detail);
    };
    AmplifyFormSection.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: this.handleSubmit }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "amplify-form-section-header" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-section-header" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { class: "header", "data-test": this.testDataPrefix + '-header-section' }, this.headerText), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subtitle" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "subtitle" }))))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "amplify-form-section-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-section-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", "data-test": this.testDataPrefix + '-' + this.testDataPrefix + '-button' }, this.loading ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.submitButtonText)), this.secondaryFooterContent))))));
    };
    return AmplifyFormSection;
}());
AmplifyFormSection.style = amplifyFormSectionCss;
var AmplifyPasswordField = /** @class */ (function () {
    function AmplifyPasswordField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["l"];
        /** Used for the password label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PASSWORD_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PASSWORD_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    AmplifyPasswordField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { type: "password", fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    };
    return AmplifyPasswordField;
}());
var amplifyPhoneFieldCss = ".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";
var AmplifyPhoneField = /** @class */ (function () {
    function AmplifyPhoneField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["b"];
        /** Used for the Phone label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    AmplifyPhoneField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), hint: this.hint, required: this.required }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "phone-field", slot: "input" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-country-dial-code", { dialCode: this.dialCode, handleInputChange: this.handleInputChange }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { fieldId: this.fieldId, type: "tel", handleInputChange: this.handleInputChange, placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), name: this.fieldId, value: this.value, inputProps: this.inputProps, disabled: this.disabled })))));
    };
    return AmplifyPhoneField;
}());
AmplifyPhoneField.style = amplifyPhoneFieldCss;
var amplifySelectCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";
var DEFAULT_SELECT_OPTION = [{ label: '', value: 1 }];
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('amplify-select');
var AmplifySelect = /** @class */ (function () {
    function AmplifySelect(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
    }
    AmplifySelect.prototype.componentWillLoad = function () {
        this.selectOptions = this.contructSelectOptions(this.options);
    };
    AmplifySelect.prototype.handleSelectOptionsChange = function () {
        this.selectOptions = this.contructSelectOptions(this.options);
    };
    AmplifySelect.prototype.isSelectedOptionValid = function (selected) {
        if (selected && !this.options.some(function (option) { return option.value === selected; })) {
            logger.warn('Selected option does not exist in options values, falling back to initial option');
            return false;
        }
        return true;
    };
    AmplifySelect.prototype.contructSelectOptions = function (opts) {
        var _this = this;
        this.isSelectedOptionValid(this.selected);
        var content = [];
        opts.forEach(function (opt) {
            content.push(Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { value: opt.value, selected: opt.value === _this.selected }, opt.label));
        });
        return content;
    };
    AmplifySelect.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { name: this.fieldId, id: this.fieldId, class: "select", onChange: this.handleInputChange }, this.selectOptions));
    };
    Object.defineProperty(AmplifySelect, "watchers", {
        get: function () {
            return {
                "options": ["handleSelectOptionsChange"],
                "selected": ["handleSelectOptionsChange"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return AmplifySelect;
}());
AmplifySelect.style = amplifySelectCss;
var AmplifyUsernameField = /** @class */ (function () {
    function AmplifyUsernameField(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["m"];
        /** Used for the username label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    AmplifyUsernameField.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    };
    return AmplifyUsernameField;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWF1dGgtZmllbGRzXzkuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNkO0FBQ3RCO0FBQ29DO0FBQzZHO0FBQzVLO0FBQ0EsNkJBQTZCLFNBQVMsNERBQUMsNEJBQTRCLGtMQUFrTCxHQUFHLEVBQUU7QUFDMVAsNkJBQTZCLFNBQVMsNERBQUMsNEJBQTRCLGlNQUFpTSxHQUFHLEVBQUU7QUFDelEsMEJBQTBCLFNBQVMsNERBQUMseUJBQXlCLGtMQUFrTCxHQUFHLEVBQUU7QUFDcFAseUJBQXlCLFNBQVMsNERBQUMsd0JBQXdCLHlMQUF5TCxtQkFBbUIsV0FBVywwQkFBMEIsR0FBRyxFQUFFO0FBQ2pUO0FBQ0EsaUNBQWlDLFNBQVMsNERBQUMseUJBQXlCLHlNQUF5TSxHQUFHLEVBQUU7QUFDbFIsNEJBQTRCLFNBQVMsNERBQUMsd0JBQXdCLGtMQUFrTCxHQUFHLEVBQUU7QUFDclA7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBQyxTQUFTLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0EsdUJBQXVCLHdEQUFXO0FBQ2xDO0FBQ0EscUJBQXFCLDJEQUFZO0FBQ2pDO0FBQ0EsMkJBQTJCLDJEQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLHdCQUF3QiwrQkFBK0Isc0RBQUksK0JBQStCLHNEQUFJLHNNQUFzTTtBQUNyVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFB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LCtCQUErQixzREFBSSxxS0FBcUs7QUFDcFI7QUFDQTtBQUNBLENBQUM7QUFDaVoiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSB9IGZyb20gJy4vaW5kZXgtM2ZiNWMxMzkuanMnO1xuaW1wb3J0IHsgSTE4biwgTG9nZ2VyIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0ICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBUIGFzIFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vVHJhbnNsYXRpb25zLWM4MzNmNjYzLmpzJztcbmltcG9ydCB7IGsgYXMgQ09ERV9TVUZGSVgsIEMgYXMgQ09VTlRSWV9ESUFMX0NPREVfU1VGRklYLCBFIGFzIEVNQUlMX1NVRkZJWCwgbCBhcyBQQVNTV09SRF9TVUZGSVgsIGIgYXMgUEhPTkVfU1VGRklYLCBtIGFzIFVTRVJOQU1FX1NVRkZJWCB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbnZhciBjb21wb25lbnRGaWVsZE1hcHBpbmcgPSB7XG4gICAgdXNlcm5hbWU6IGZ1bmN0aW9uIChmZikgeyByZXR1cm4gKGgoXCJhbXBsaWZ5LXVzZXJuYW1lLWZpZWxkXCIsIHsgbGFiZWw6IGZmLmxhYmVsLCBwbGFjZWhvbGRlcjogZmYucGxhY2Vob2xkZXIsIHJlcXVpcmVkOiBmZi5yZXF1aXJlZCwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZmLmhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogZmYudmFsdWUsIGlucHV0UHJvcHM6IGZmLmlucHV0UHJvcHMsIGRpc2FibGVkOiBmZi5kaXNhYmxlZCB9KSk7IH0sXG4gICAgcGFzc3dvcmQ6IGZ1bmN0aW9uIChmZikgeyByZXR1cm4gKGgoXCJhbXBsaWZ5LXBhc3N3b3JkLWZpZWxkXCIsIHsgbGFiZWw6IGZmLmxhYmVsLCBwbGFjZWhvbGRlcjogZmYucGxhY2Vob2xkZXIsIGhpbnQ6IGZmLmhpbnQsIHJlcXVpcmVkOiBmZi5yZXF1aXJlZCwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZmLmhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogZmYudmFsdWUsIGlucHV0UHJvcHM6IGZmLmlucHV0UHJvcHMsIGRpc2FibGVkOiBmZi5kaXNhYmxlZCB9KSk7IH0sXG4gICAgZW1haWw6IGZ1bmN0aW9uIChmZikgeyByZXR1cm4gKGgoXCJhbXBsaWZ5LWVtYWlsLWZpZWxkXCIsIHsgbGFiZWw6IGZmLmxhYmVsLCBwbGFjZWhvbGRlcjogZmYucGxhY2Vob2xkZXIsIHJlcXVpcmVkOiBmZi5yZXF1aXJlZCwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZmLmhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogZmYudmFsdWUsIGlucHV0UHJvcHM6IGZmLmlucHV0UHJvcHMsIGRpc2FibGVkOiBmZi5kaXNhYmxlZCB9KSk7IH0sXG4gICAgY29kZTogZnVuY3Rpb24gKGZmKSB7IHJldHVybiAoaChcImFtcGxpZnktY29kZS1maWVsZFwiLCB7IGxhYmVsOiBmZi5sYWJlbCwgcGxhY2Vob2xkZXI6IGZmLnBsYWNlaG9sZGVyLCBoaW50OiBmZi5oaW50LCByZXF1aXJlZDogZmYucmVxdWlyZWQsIGhhbmRsZUlucHV0Q2hhbmdlOiBmZi5oYW5kbGVJbnB1dENoYW5nZSwgdmFsdWU6IGZmLnZhbHVlLCBpbnB1dFByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZmLmlucHV0UHJvcHMpLCB7IG1pbjogJzAnIH0pLCBkaXNhYmxlZDogZmYuZGlzYWJsZWQgfSkpOyB9LFxuICAgIC8vIFRPRE86IFdpbGwgY3JlYXRlIGEgcGhvbmUgZmllbGQgY29tcG9uZW50IG9uY2UgdGhlIGRpYWwgY291bnRyeSBjb2RlIGNvbXBvbmVudCBpcyBpblxuICAgIHBob25lX251bWJlcjogZnVuY3Rpb24gKGZmKSB7IHJldHVybiAoaChcImFtcGxpZnktcGhvbmUtZmllbGRcIiwgeyBsYWJlbDogZmYubGFiZWwsIHBsYWNlaG9sZGVyOiBmZi5wbGFjZWhvbGRlciwgcmVxdWlyZWQ6IGZmLnJlcXVpcmVkLCBoYW5kbGVJbnB1dENoYW5nZTogZmYuaGFuZGxlSW5wdXRDaGFuZ2UsIHZhbHVlOiBmZi52YWx1ZSwgaW5wdXRQcm9wczogZmYuaW5wdXRQcm9wcywgZGlzYWJsZWQ6IGZmLmRpc2FibGVkLCBkaWFsQ29kZTogZmYuZGlhbENvZGUgfSkpOyB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChmZikgeyByZXR1cm4gKGgoXCJhbXBsaWZ5LWZvcm0tZmllbGRcIiwgeyBsYWJlbDogZmYubGFiZWwsIHBsYWNlaG9sZGVyOiBmZi5wbGFjZWhvbGRlciwgcmVxdWlyZWQ6IGZmLnJlcXVpcmVkLCBoYW5kbGVJbnB1dENoYW5nZTogZmYuaGFuZGxlSW5wdXRDaGFuZ2UsIHZhbHVlOiBmZi52YWx1ZSwgaW5wdXRQcm9wczogZmYuaW5wdXRQcm9wcywgZGlzYWJsZWQ6IGZmLmRpc2FibGVkIH0pKTsgfSxcbn07XG52YXIgYW1wbGlmeUF1dGhGaWVsZHNDc3MgPSBcIi5hdXRoLWZpZWxkc3ttYXJnaW4tYm90dG9tOjJyZW19XCI7XG52YXIgQW1wbGlmeUF1dGhGaWVsZHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeUF1dGhGaWVsZHMoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBBbXBsaWZ5QXV0aEZpZWxkcy5wcm90b3R5cGUuY29uc3RydWN0Rm9ybUZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uIChmb3JtRmllbGRzKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gW107XG4gICAgICAgIGlmIChmb3JtRmllbGRzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybUZpZWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1GaWVsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goY29tcG9uZW50RmllbGRNYXBwaW5nW2Zvcm1GaWVsZF0oZm9ybUZpZWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyhjb21wb25lbnRGaWVsZE1hcHBpbmcpLmluY2x1ZGVzKGZvcm1GaWVsZC50eXBlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChjb21wb25lbnRGaWVsZE1hcHBpbmdbZm9ybUZpZWxkLnR5cGVdKGZvcm1GaWVsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5wdXNoKGNvbXBvbmVudEZpZWxkTWFwcGluZ1snZGVmYXVsdCddKGZvcm1GaWVsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcbiAgICBBbXBsaWZ5QXV0aEZpZWxkcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiBcImF1dGgtZmllbGRzXCIgfSwgdGhpcy5jb25zdHJ1Y3RGb3JtRmllbGRPcHRpb25zKHRoaXMuZm9ybUZpZWxkcykpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlBdXRoRmllbGRzO1xufSgpKTtcbkFtcGxpZnlBdXRoRmllbGRzLnN0eWxlID0gYW1wbGlmeUF1dGhGaWVsZHNDc3M7XG52YXIgQW1wbGlmeUNvZGVGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5Q29kZUZpZWxkKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEJhc2VkIG9uIHRoZSB0eXBlIG9mIGZpZWxkIGUuZy4gc2lnbiBpbiwgc2lnbiB1cCwgZm9yZ290IHBhc3N3b3JkLCBldGMuICovXG4gICAgICAgIHRoaXMuZmllbGRJZCA9IENPREVfU1VGRklYO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIGNvZGUgbGFiZWwgKi9cbiAgICAgICAgdGhpcy5sYWJlbCA9IFRyYW5zbGF0aW9ucy5DT0RFX0xBQkVMO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHBsYWNlaG9sZGVyIGxhYmVsICovXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBUcmFuc2xhdGlvbnMuQ09ERV9QTEFDRUhPTERFUjtcbiAgICAgICAgLyoqIFRoZSByZXF1aXJlZCBmbGFnIGluIG9yZGVyIHRvIG1ha2UgYW4gaW5wdXQgcmVxdWlyZWQgcHJpb3IgdG8gc3VibWl0dGluZyBhIGZvcm0gKi9cbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBBbXBsaWZ5Q29kZUZpZWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1maWVsZFwiLCB7IGZpZWxkSWQ6IHRoaXMuZmllbGRJZCwgbGFiZWw6IEkxOG4uZ2V0KHRoaXMubGFiZWwpLCBwbGFjZWhvbGRlcjogSTE4bi5nZXQodGhpcy5wbGFjZWhvbGRlciksIHR5cGU6IFwibnVtYmVyXCIsIGhpbnQ6IHRoaXMuaGludCwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogdGhpcy52YWx1ZSwgaW5wdXRQcm9wczogdGhpcy5pbnB1dFByb3BzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUNvZGVGaWVsZDtcbn0oKSk7XG52YXIgY291bnRyeURpYWxDb2RlcyA9IFtcbiAgICB7IGxhYmVsOiAnKzEnLCB2YWx1ZTogJysxJyB9LFxuICAgIHsgbGFiZWw6ICcrNycsIHZhbHVlOiAnKzcnIH0sXG4gICAgeyBsYWJlbDogJysyMCcsIHZhbHVlOiAnKzIwJyB9LFxuICAgIHsgbGFiZWw6ICcrMjcnLCB2YWx1ZTogJysyNycgfSxcbiAgICB7IGxhYmVsOiAnKzMwJywgdmFsdWU6ICcrMzAnIH0sXG4gICAgeyBsYWJlbDogJyszMScsIHZhbHVlOiAnKzMxJyB9LFxuICAgIHsgbGFiZWw6ICcrMzInLCB2YWx1ZTogJyszMicgfSxcbiAgICB7IGxhYmVsOiAnKzMzJywgdmFsdWU6ICcrMzMnIH0sXG4gICAgeyBsYWJlbDogJyszNCcsIHZhbHVlOiAnKzM0JyB9LFxuICAgIHsgbGFiZWw6ICcrMzYnLCB2YWx1ZTogJyszNicgfSxcbiAgICB7IGxhYmVsOiAnKzM5JywgdmFsdWU6ICcrMzknIH0sXG4gICAgeyBsYWJlbDogJys0MCcsIHZhbHVlOiAnKzQwJyB9LFxuICAgIHsgbGFiZWw6ICcrNDEnLCB2YWx1ZTogJys0MScgfSxcbiAgICB7IGxhYmVsOiAnKzQzJywgdmFsdWU6ICcrNDMnIH0sXG4gICAgeyBsYWJlbDogJys0NCcsIHZhbHVlOiAnKzQ0JyB9LFxuICAgIHsgbGFiZWw6ICcrNDUnLCB2YWx1ZTogJys0NScgfSxcbiAgICB7IGxhYmVsOiAnKzQ2JywgdmFsdWU6ICcrNDYnIH0sXG4gICAgeyBsYWJlbDogJys0NycsIHZhbHVlOiAnKzQ3JyB9LFxuICAgIHsgbGFiZWw6ICcrNDgnLCB2YWx1ZTogJys0OCcgfSxcbiAgICB7IGxhYmVsOiAnKzQ5JywgdmFsdWU6ICcrNDknIH0sXG4gICAgeyBsYWJlbDogJys1MScsIHZhbHVlOiAnKzUxJyB9LFxuICAgIHsgbGFiZWw6ICcrNTInLCB2YWx1ZTogJys1MicgfSxcbiAgICB7IGxhYmVsOiAnKzUzJywgdmFsdWU6ICcrNTMnIH0sXG4gICAgeyBsYWJlbDogJys1NCcsIHZhbHVlOiAnKzU0JyB9LFxuICAgIHsgbGFiZWw6ICcrNTUnLCB2YWx1ZTogJys1NScgfSxcbiAgICB7IGxhYmVsOiAnKzU2JywgdmFsdWU6ICcrNTYnIH0sXG4gICAgeyBsYWJlbDogJys1NycsIHZhbHVlOiAnKzU3JyB9LFxuICAgIHsgbGFiZWw6ICcrNTgnLCB2YWx1ZTogJys1OCcgfSxcbiAgICB7IGxhYmVsOiAnKzYwJywgdmFsdWU6ICcrNjAnIH0sXG4gICAgeyBsYWJlbDogJys2MScsIHZhbHVlOiAnKzYxJyB9LFxuICAgIHsgbGFiZWw6ICcrNjInLCB2YWx1ZTogJys2MicgfSxcbiAgICB7IGxhYmVsOiAnKzYzJywgdmFsdWU6ICcrNjMnIH0sXG4gICAgeyBsYWJlbDogJys2NCcsIHZhbHVlOiAnKzY0JyB9LFxuICAgIHsgbGFiZWw6ICcrNjUnLCB2YWx1ZTogJys2NScgfSxcbiAgICB7IGxhYmVsOiAnKzY2JywgdmFsdWU6ICcrNjYnIH0sXG4gICAgeyBsYWJlbDogJys4MScsIHZhbHVlOiAnKzgxJyB9LFxuICAgIHsgbGFiZWw6ICcrODInLCB2YWx1ZTogJys4MicgfSxcbiAgICB7IGxhYmVsOiAnKzg0JywgdmFsdWU6ICcrODQnIH0sXG4gICAgeyBsYWJlbDogJys4NicsIHZhbHVlOiAnKzg2JyB9LFxuICAgIHsgbGFiZWw6ICcrOTAnLCB2YWx1ZTogJys5MCcgfSxcbiAgICB7IGxhYmVsOiAnKzkxJywgdmFsdWU6ICcrOTEnIH0sXG4gICAgeyBsYWJlbDogJys5MicsIHZhbHVlOiAnKzkyJyB9LFxuICAgIHsgbGFiZWw6ICcrOTMnLCB2YWx1ZTogJys5MycgfSxcbiAgICB7IGxhYmVsOiAnKzk0JywgdmFsdWU6ICcrOTQnIH0sXG4gICAgeyBsYWJlbDogJys5NScsIHZhbHVlOiAnKzk1JyB9LFxuICAgIHsgbGFiZWw6ICcrOTgnLCB2YWx1ZTogJys5OCcgfSxcbiAgICB7IGxhYmVsOiAnKzIxMicsIHZhbHVlOiAnKzIxMicgfSxcbiAgICB7IGxhYmVsOiAnKzIxMycsIHZhbHVlOiAnKzIxMycgfSxcbiAgICB7IGxhYmVsOiAnKzIxNicsIHZhbHVlOiAnKzIxNicgfSxcbiAgICB7IGxhYmVsOiAnKzIxOCcsIHZhbHVlOiAnKzIxOCcgfSxcbiAgICB7IGxhYmVsOiAnKzIyMCcsIHZhbHVlOiAnKzIyMCcgfSxcbiAgICB7IGxhYmVsOiAnKzIyMScsIHZhbHVlOiAnKzIyMScgfSxcbiAgICB7IGxhYmVsOiAnKzIyMicsIHZhbHVlOiAnKzIyMicgfSxcbiAgICB7IGxhYmVsOiAnKzIyMycsIHZhbHVlOiAnKzIyMycgfSxcbiAgICB7IGxhYmVsOiAnKzIyNCcsIHZhbHVlOiAnKzIyNCcgfSxcbiAgICB7IGxhYmVsOiAnKzIyNScsIHZhbHVlOiAnKzIyNScgfSxcbiAgICB7IGxhYmVsOiAnKzIyNicsIHZhbHVlOiAnKzIyNicgfSxcbiAgICB7IGxhYmVsOiAnKzIyNycsIHZhbHVlOiAnKzIyNycgfSxcbiAgICB7IGxhYmVsOiAnKzIyOCcsIHZhbHVlOiAnKzIyOCcgfSxcbiAgICB7IGxhYmVsOiAnKzIyOScsIHZhbHVlOiAnKzIyOScgfSxcbiAgICB7IGxhYmVsOiAnKzIzMCcsIHZhbHVlOiAnKzIzMCcgfSxcbiAgICB7IGxhYmVsOiAnKzIzMScsIHZhbHVlOiAnKzIzMScgfSxcbiAgICB7IGxhYmVsOiAnKzIzMicsIHZhbHVlOiAnKzIzMicgfSxcbiAgICB7IGxhYmVsOiAnKzIzMycsIHZhbHVlOiAnKzIzMycgfSxcbiAgICB7IGxhYmVsOiAnKzIzNCcsIHZhbHVlOiAnKzIzNCcgfSxcbiAgICB7IGxhYmVsOiAnKzIzNScsIHZhbHVlOiAnKzIzNScgfSxcbiAgICB7IGxhYmVsOiAnKzIzNicsIHZhbHVlOiAnKzIzNicgfSxcbiAgICB7IGxhYmVsOiAnKzIzNycsIHZhbHVlOiAnKzIzNycgfSxcbiAgICB7IGxhYmVsOiAnKzIzOCcsIHZhbHVlOiAnKzIzOCcgfSxcbiAgICB7IGxhYmVsOiAnKzIzOScsIHZhbHVlOiAnKzIzOScgfSxcbiAgICB7IGxhYmVsOiAnKzI0MCcsIHZhbHVlOiAnKzI0MCcgfSxcbiAgICB7IGxhYmVsOiAnKzI0MScsIHZhbHVlOiAnKzI0MScgfSxcbiAgICB7IGxhYmVsOiAnKzI0MicsIHZhbHVlOiAnKzI0MicgfSxcbiAgICB7IGxhYmVsOiAnKzI0MycsIHZhbHVlOiAnKzI0MycgfSxcbiAgICB7IGxhYmVsOiAnKzI0NCcsIHZhbHVlOiAnKzI0NCcgfSxcbiAgICB7IGxhYmVsOiAnKzI0NScsIHZhbHVlOiAnKzI0NScgfSxcbiAgICB7IGxhYmVsOiAnKzI0NicsIHZhbHVlOiAnKzI0NicgfSxcbiAgICB7IGxhYmVsOiAnKzI0OCcsIHZhbHVlOiAnKzI0OCcgfSxcbiAgICB7IGxhYmVsOiAnKzI0OScsIHZhbHVlOiAnKzI0OScgfSxcbiAgICB7IGxhYmVsOiAnKzI1MCcsIHZhbHVlOiAnKzI1MCcgfSxcbiAgICB7IGxhYmVsOiAnKzI1MScsIHZhbHVlOiAnKzI1MScgfSxcbiAgICB7IGxhYmVsOiAnKzI1MicsIHZhbHVlOiAnKzI1MicgfSxcbiAgICB7IGxhYmVsOiAnKzI1MycsIHZhbHVlOiAnKzI1MycgfSxcbiAgICB7IGxhYmVsOiAnKzI1NCcsIHZhbHVlOiAnKzI1NCcgfSxcbiAgICB7IGxhYmVsOiAnKzI1NScsIHZhbHVlOiAnKzI1NScgfSxcbiAgICB7IGxhYmVsOiAnKzI1NicsIHZhbHVlOiAnKzI1NicgfSxcbiAgICB7IGxhYmVsOiAnKzI1NycsIHZhbHVlOiAnKzI1NycgfSxcbiAgICB7IGxhYmVsOiAnKzI1OCcsIHZhbHVlOiAnKzI1OCcgfSxcbiAgICB7IGxhYmVsOiAnKzI2MCcsIHZhbHVlOiAnKzI2MCcgfSxcbiAgICB7IGxhYmVsOiAnKzI2MScsIHZhbHVlOiAnKzI2MScgfSxcbiAgICB7IGxhYmVsOiAnKzI2MicsIHZhbHVlOiAnKzI2MicgfSxcbiAgICB7IGxhYmVsOiAnKzI2MycsIHZhbHVlOiAnKzI2MycgfSxcbiAgICB7IGxhYmVsOiAnKzI2NCcsIHZhbHVlOiAnKzI2NCcgfSxcbiAgICB7IGxhYmVsOiAnKzI2NScsIHZhbHVlOiAnKzI2NScgfSxcbiAgICB7IGxhYmVsOiAnKzI2NicsIHZhbHVlOiAnKzI2NicgfSxcbiAgICB7IGxhYmVsOiAnKzI2NycsIHZhbHVlOiAnKzI2NycgfSxcbiAgICB7IGxhYmVsOiAnKzI2OCcsIHZhbHVlOiAnKzI2OCcgfSxcbiAgICB7IGxhYmVsOiAnKzI2OScsIHZhbHVlOiAnKzI2OScgfSxcbiAgICB7IGxhYmVsOiAnKzI5MCcsIHZhbHVlOiAnKzI5MCcgfSxcbiAgICB7IGxhYmVsOiAnKzI5MScsIHZhbHVlOiAnKzI5MScgfSxcbiAgICB7IGxhYmVsOiAnKzI5NycsIHZhbHVlOiAnKzI5NycgfSxcbiAgICB7IGxhYmVsOiAnKzI5OCcsIHZhbHVlOiAnKzI5OCcgfSxcbiAgICB7IGxhYmVsOiAnKzI5OScsIHZhbHVlOiAnKzI5OScgfSxcbiAgICB7IGxhYmVsOiAnKzM0NScsIHZhbHVlOiAnKzM0NScgfSxcbiAgICB7IGxhYmVsOiAnKzM1MCcsIHZhbHVlOiAnKzM1MCcgfSxcbiAgICB7IGxhYmVsOiAnKzM1MScsIHZhbHVlOiAnKzM1MScgfSxcbiAgICB7IGxhYmVsOiAnKzM1MicsIHZhbHVlOiAnKzM1MicgfSxcbiAgICB7IGxhYmVsOiAnKzM1MycsIHZhbHVlOiAnKzM1MycgfSxcbiAgICB7IGxhYmVsOiAnKzM1NCcsIHZhbHVlOiAnKzM1NCcgfSxcbiAgICB7IGxhYmVsOiAnKzM1NScsIHZhbHVlOiAnKzM1NScgfSxcbiAgICB7IGxhYmVsOiAnKzM1NicsIHZhbHVlOiAnKzM1NicgfSxcbiAgICB7IGxhYmVsOiAnKzM1NycsIHZhbHVlOiAnKzM1NycgfSxcbiAgICB7IGxhYmVsOiAnKzM1OCcsIHZhbHVlOiAnKzM1OCcgfSxcbiAgICB7IGxhYmVsOiAnKzM1OScsIHZhbHVlOiAnKzM1OScgfSxcbiAgICB7IGxhYmVsOiAnKzM3MCcsIHZhbHVlOiAnKzM3MCcgfSxcbiAgICB7IGxhYmVsOiAnKzM3MScsIHZhbHVlOiAnKzM3MScgfSxcbiAgICB7IGxhYmVsOiAnKzM3MicsIHZhbHVlOiAnKzM3MicgfSxcbiAgICB7IGxhYmVsOiAnKzM3MycsIHZhbHVlOiAnKzM3MycgfSxcbiAgICB7IGxhYmVsOiAnKzM3NCcsIHZhbHVlOiAnKzM3NCcgfSxcbiAgICB7IGxhYmVsOiAnKzM3NScsIHZhbHVlOiAnKzM3NScgfSxcbiAgICB7IGxhYmVsOiAnKzM3NicsIHZhbHVlOiAnKzM3NicgfSxcbiAgICB7IGxhYmVsOiAnKzM3NycsIHZhbHVlOiAnKzM3NycgfSxcbiAgICB7IGxhYmVsOiAnKzM3OCcsIHZhbHVlOiAnKzM3OCcgfSxcbiAgICB7IGxhYmVsOiAnKzM3OScsIHZhbHVlOiAnKzM3OScgfSxcbiAgICB7IGxhYmVsOiAnKzM4MCcsIHZhbHVlOiAnKzM4MCcgfSxcbiAgICB7IGxhYmVsOiAnKzM4MScsIHZhbHVlOiAnKzM4MScgfSxcbiAgICB7IGxhYmVsOiAnKzM4MicsIHZhbHVlOiAnKzM4MicgfSxcbiAgICB7IGxhYmVsOiAnKzM4NScsIHZhbHVlOiAnKzM4NScgfSxcbiAgICB7IGxhYmVsOiAnKzM4NicsIHZhbHVlOiAnKzM4NicgfSxcbiAgICB7IGxhYmVsOiAnKzM4NycsIHZhbHVlOiAnKzM4NycgfSxcbiAgICB7IGxhYmVsOiAnKzM4OScsIHZhbHVlOiAnKzM4OScgfSxcbiAgICB7IGxhYmVsOiAnKzQyMCcsIHZhbHVlOiAnKzQyMCcgfSxcbiAgICB7IGxhYmVsOiAnKzQyMScsIHZhbHVlOiAnKzQyMScgfSxcbiAgICB7IGxhYmVsOiAnKzQyMycsIHZhbHVlOiAnKzQyMycgfSxcbiAgICB7IGxhYmVsOiAnKzUwMCcsIHZhbHVlOiAnKzUwMCcgfSxcbiAgICB7IGxhYmVsOiAnKzUwMScsIHZhbHVlOiAnKzUwMScgfSxcbiAgICB7IGxhYmVsOiAnKzUwMicsIHZhbHVlOiAnKzUwMicgfSxcbiAgICB7IGxhYmVsOiAnKzUwMycsIHZhbHVlOiAnKzUwMycgfSxcbiAgICB7IGxhYmVsOiAnKzUwNCcsIHZhbHVlOiAnKzUwNCcgfSxcbiAgICB7IGxhYmVsOiAnKzUwNScsIHZhbHVlOiAnKzUwNScgfSxcbiAgICB7IGxhYmVsOiAnKzUwNicsIHZhbHVlOiAnKzUwNicgfSxcbiAgICB7IGxhYmVsOiAnKzUwNycsIHZhbHVlOiAnKzUwNycgfSxcbiAgICB7IGxhYmVsOiAnKzUwOCcsIHZhbHVlOiAnKzUwOCcgfSxcbiAgICB7IGxhYmVsOiAnKzUwOScsIHZhbHVlOiAnKzUwOScgfSxcbiAgICB7IGxhYmVsOiAnKzUzNycsIHZhbHVlOiAnKzUzNycgfSxcbiAgICB7IGxhYmVsOiAnKzU5MCcsIHZhbHVlOiAnKzU5MCcgfSxcbiAgICB7IGxhYmVsOiAnKzU5MScsIHZhbHVlOiAnKzU5MScgfSxcbiAgICB7IGxhYmVsOiAnKzU5MycsIHZhbHVlOiAnKzU5MycgfSxcbiAgICB7IGxhYmVsOiAnKzU5NCcsIHZhbHVlOiAnKzU5NCcgfSxcbiAgICB7IGxhYmVsOiAnKzU5NScsIHZhbHVlOiAnKzU5NScgfSxcbiAgICB7IGxhYmVsOiAnKzU5NicsIHZhbHVlOiAnKzU5NicgfSxcbiAgICB7IGxhYmVsOiAnKzU5NycsIHZhbHVlOiAnKzU5NycgfSxcbiAgICB7IGxhYmVsOiAnKzU5OCcsIHZhbHVlOiAnKzU5OCcgfSxcbiAgICB7IGxhYmVsOiAnKzU5OScsIHZhbHVlOiAnKzU5OScgfSxcbiAgICB7IGxhYmVsOiAnKzY3MCcsIHZhbHVlOiAnKzY3MCcgfSxcbiAgICB7IGxhYmVsOiAnKzY3MicsIHZhbHVlOiAnKzY3MicgfSxcbiAgICB7IGxhYmVsOiAnKzY3MycsIHZhbHVlOiAnKzY3MycgfSxcbiAgICB7IGxhYmVsOiAnKzY3NCcsIHZhbHVlOiAnKzY3NCcgfSxcbiAgICB7IGxhYmVsOiAnKzY3NScsIHZhbHVlOiAnKzY3NScgfSxcbiAgICB7IGxhYmVsOiAnKzY3NicsIHZhbHVlOiAnKzY3NicgfSxcbiAgICB7IGxhYmVsOiAnKzY3NycsIHZhbHVlOiAnKzY3NycgfSxcbiAgICB7IGxhYmVsOiAnKzY3OCcsIHZhbHVlOiAnKzY3OCcgfSxcbiAgICB7IGxhYmVsOiAnKzY3OScsIHZhbHVlOiAnKzY3OScgfSxcbiAgICB7IGxhYmVsOiAnKzY4MCcsIHZhbHVlOiAnKzY4MCcgfSxcbiAgICB7IGxhYmVsOiAnKzY4MScsIHZhbHVlOiAnKzY4MScgfSxcbiAgICB7IGxhYmVsOiAnKzY4MicsIHZhbHVlOiAnKzY4MicgfSxcbiAgICB7IGxhYmVsOiAnKzY4MycsIHZhbHVlOiAnKzY4MycgfSxcbiAgICB7IGxhYmVsOiAnKzY4NScsIHZhbHVlOiAnKzY4NScgfSxcbiAgICB7IGxhYmVsOiAnKzY4NicsIHZhbHVlOiAnKzY4NicgfSxcbiAgICB7IGxhYmVsOiAnKzY4NycsIHZhbHVlOiAnKzY4NycgfSxcbiAgICB7IGxhYmVsOiAnKzY4OCcsIHZhbHVlOiAnKzY4OCcgfSxcbiAgICB7IGxhYmVsOiAnKzY4OScsIHZhbHVlOiAnKzY4OScgfSxcbiAgICB7IGxhYmVsOiAnKzY5MCcsIHZhbHVlOiAnKzY5MCcgfSxcbiAgICB7IGxhYmVsOiAnKzY5MScsIHZhbHVlOiAnKzY5MScgfSxcbiAgICB7IGxhYmVsOiAnKzY5MicsIHZhbHVlOiAnKzY5MicgfSxcbiAgICB7IGxhYmVsOiAnKzg1MCcsIHZhbHVlOiAnKzg1MCcgfSxcbiAgICB7IGxhYmVsOiAnKzg1MicsIHZhbHVlOiAnKzg1MicgfSxcbiAgICB7IGxhYmVsOiAnKzg1MycsIHZhbHVlOiAnKzg1MycgfSxcbiAgICB7IGxhYmVsOiAnKzg1NScsIHZhbHVlOiAnKzg1NScgfSxcbiAgICB7IGxhYmVsOiAnKzg1NicsIHZhbHVlOiAnKzg1NicgfSxcbiAgICB7IGxhYmVsOiAnKzg3MicsIHZhbHVlOiAnKzg3MicgfSxcbiAgICB7IGxhYmVsOiAnKzg4MCcsIHZhbHVlOiAnKzg4MCcgfSxcbiAgICB7IGxhYmVsOiAnKzg4NicsIHZhbHVlOiAnKzg4NicgfSxcbiAgICB7IGxhYmVsOiAnKzk2MCcsIHZhbHVlOiAnKzk2MCcgfSxcbiAgICB7IGxhYmVsOiAnKzk2MScsIHZhbHVlOiAnKzk2MScgfSxcbiAgICB7IGxhYmVsOiAnKzk2MicsIHZhbHVlOiAnKzk2MicgfSxcbiAgICB7IGxhYmVsOiAnKzk2MycsIHZhbHVlOiAnKzk2MycgfSxcbiAgICB7IGxhYmVsOiAnKzk2NCcsIHZhbHVlOiAnKzk2NCcgfSxcbiAgICB7IGxhYmVsOiAnKzk2NScsIHZhbHVlOiAnKzk2NScgfSxcbiAgICB7IGxhYmVsOiAnKzk2NicsIHZhbHVlOiAnKzk2NicgfSxcbiAgICB7IGxhYmVsOiAnKzk2NycsIHZhbHVlOiAnKzk2NycgfSxcbiAgICB7IGxhYmVsOiAnKzk2OCcsIHZhbHVlOiAnKzk2OCcgfSxcbiAgICB7IGxhYmVsOiAnKzk3MCcsIHZhbHVlOiAnKzk3MCcgfSxcbiAgICB7IGxhYmVsOiAnKzk3MScsIHZhbHVlOiAnKzk3MScgfSxcbiAgICB7IGxhYmVsOiAnKzk3MicsIHZhbHVlOiAnKzk3MicgfSxcbiAgICB7IGxhYmVsOiAnKzk3MycsIHZhbHVlOiAnKzk3MycgfSxcbiAgICB7IGxhYmVsOiAnKzk3NCcsIHZhbHVlOiAnKzk3NCcgfSxcbiAgICB7IGxhYmVsOiAnKzk3NScsIHZhbHVlOiAnKzk3NScgfSxcbiAgICB7IGxhYmVsOiAnKzk3NicsIHZhbHVlOiAnKzk3NicgfSxcbiAgICB7IGxhYmVsOiAnKzk3NycsIHZhbHVlOiAnKzk3NycgfSxcbiAgICB7IGxhYmVsOiAnKzk5MicsIHZhbHVlOiAnKzk5MicgfSxcbiAgICB7IGxhYmVsOiAnKzk5MycsIHZhbHVlOiAnKzk5MycgfSxcbiAgICB7IGxhYmVsOiAnKzk5NCcsIHZhbHVlOiAnKzk5NCcgfSxcbiAgICB7IGxhYmVsOiAnKzk5NScsIHZhbHVlOiAnKzk5NScgfSxcbiAgICB7IGxhYmVsOiAnKzk5NicsIHZhbHVlOiAnKzk5NicgfSxcbiAgICB7IGxhYmVsOiAnKzk5OCcsIHZhbHVlOiAnKzk5OCcgfSxcbl07XG52YXIgQW1wbGlmeUNvdW50cnlEaWFsQ29kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5Q291bnRyeURpYWxDb2RlKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFRoZSBJRCBvZiB0aGUgZmllbGQuICBTaG91bGQgbWF0Y2ggd2l0aCBpdHMgY29ycmVzcG9uZGluZyBpbnB1dCdzIElELiAqL1xuICAgICAgICB0aGlzLmZpZWxkSWQgPSBDT1VOVFJZX0RJQUxfQ09ERV9TVUZGSVg7XG4gICAgICAgIC8qKiBUaGUgb3B0aW9ucyBvZiB0aGUgY291bnRyeSBkaWFsIGNvZGUgc2VsZWN0IGlucHV0LiAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBjb3VudHJ5RGlhbENvZGVzO1xuICAgICAgICAvKiogRGVmYXVsdCBzZWxlY3RlZCBkaWFsIGNvZGUgKi9cbiAgICAgICAgdGhpcy5kaWFsQ29kZSA9ICcrMSc7XG4gICAgfVxuICAgIEFtcGxpZnlDb3VudHJ5RGlhbENvZGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkRGlhbENvZGUoKTtcbiAgICB9O1xuICAgIEFtcGxpZnlDb3VudHJ5RGlhbENvZGUucHJvdG90eXBlLndhdGNoRGlhbENvZGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkRGlhbENvZGUoKTtcbiAgICB9O1xuICAgIEFtcGxpZnlDb3VudHJ5RGlhbENvZGUucHJvdG90eXBlLnNldFNlbGVjdGVkRGlhbENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kaWFsQ29kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaWFsQ29kZSA9IFwiK1wiICsgdGhpcy5kaWFsQ29kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaWFsQ29kZSA9IHRoaXMuZGlhbENvZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFtcGxpZnlDb3VudHJ5RGlhbENvZGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwiYW1wbGlmeS1zZWxlY3RcIiwgeyBmaWVsZElkOiB0aGlzLmZpZWxkSWQsIG9wdGlvbnM6IHRoaXMub3B0aW9ucywgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkRGlhbENvZGUgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFtcGxpZnlDb3VudHJ5RGlhbENvZGUsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkaWFsQ29kZVwiOiBbXCJ3YXRjaERpYWxDb2RlSGFuZGxlclwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBbXBsaWZ5Q291bnRyeURpYWxDb2RlO1xufSgpKTtcbnZhciBBbXBsaWZ5RW1haWxGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5RW1haWxGaWVsZChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBCYXNlZCBvbiB0aGUgdHlwZSBvZiBmaWVsZCBlLmcuIHNpZ24gaW4sIHNpZ24gdXAsIGZvcmdvdCBwYXNzd29yZCwgZXRjLiAqL1xuICAgICAgICB0aGlzLmZpZWxkSWQgPSBFTUFJTF9TVUZGSVg7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgRU1BSUwgbGFiZWwgKi9cbiAgICAgICAgdGhpcy5sYWJlbCA9IFRyYW5zbGF0aW9ucy5FTUFJTF9MQUJFTDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBwbGFjZWhvbGRlciBsYWJlbCAqL1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gVHJhbnNsYXRpb25zLkVNQUlMX1BMQUNFSE9MREVSO1xuICAgICAgICAvKiogVGhlIHJlcXVpcmVkIGZsYWcgaW4gb3JkZXIgdG8gbWFrZSBhbiBpbnB1dCByZXF1aXJlZCBwcmlvciB0byBzdWJtaXR0aW5nIGEgZm9ybSAqL1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICAgIEFtcGxpZnlFbWFpbEZpZWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1maWVsZFwiLCB7IGZpZWxkSWQ6IHRoaXMuZmllbGRJZCwgbGFiZWw6IEkxOG4uZ2V0KHRoaXMubGFiZWwpLCBwbGFjZWhvbGRlcjogSTE4bi5nZXQodGhpcy5wbGFjZWhvbGRlciksIHR5cGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogdGhpcy52YWx1ZSwgaW5wdXRQcm9wczogdGhpcy5pbnB1dFByb3BzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeUVtYWlsRmllbGQ7XG59KCkpO1xudmFyIGFtcGxpZnlGb3JtU2VjdGlvbkNzcyA9IFwiOmhvc3R7LS1oZWFkZXItY29sb3I6dmFyKC0tYW1wbGlmeS1zZWNvbmRhcnktY29sb3IpOy0taGVhZGVyLXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LW1kLXN1Yik7LS1zdWJ0aXRsZS1zaXplOnZhcigtLWFtcGxpZnktZ3JleSk7LS1zdWJ0aXRsZS1jb2xvcjp2YXIoLS1hbXBsaWZ5LWdyZXkpOy0tZm9vdGVyLWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSk7LS1mb290ZXItc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pOy0tZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSk7LS1mb250LXdlaWdodDp2YXIoLS1hbXBsaWZ5LWZvbnQtd2VpZ2h0KX0uZm9ybS1zZWN0aW9uLWhlYWRlcnttYXJnaW46MXJlbSAwIDEuNXJlbSAwfS5mb3JtLXNlY3Rpb24taGVhZGVyIC5oZWFkZXJ7Y29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtmb250LXNpemU6dmFyKC0taGVhZGVyLXNpemUpO2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW4tYm90dG9tOjAuNzVyZW19LmZvcm0tc2VjdGlvbi1oZWFkZXIgLnN1YnRpdGxle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtjb2xvcjp2YXIoLS1zdWJ0aXRsZS1jb2xvcil9LmZvcm0tc2VjdGlvbi1mb290ZXJ7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLWZvbnQtd2VpZ2h0KTtmb250LXNpemU6dmFyKC0tZm9vdGVyLXNpemUpO2NvbG9yOnZhcigtLWZvb3Rlci1jb2xvcik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpkaXN0cmlidXRlO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXsuZm9ybS1zZWN0aW9uLWZvb3RlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4LWFsaWduOmJhc2VsaW5lO2FsaWduLWl0ZW1zOmJhc2VsaW5lfX0uZm9ybS1zZWN0aW9uLWZvb3RlciAqKyp7bWFyZ2luLXRvcDoxNXB4fVwiO1xudmFyIEFtcGxpZnlGb3JtU2VjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5Rm9ybVNlY3Rpb24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogKE9wdGlvbmFsKSBVc2VkIGFzIGEgdGhlIGRlZmF1bHQgdmFsdWUgd2l0aGluIHRoZSBkZWZhdWx0IGZvb3RlciBzbG90ICovXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uVGV4dCA9ICdTdWJtaXQnO1xuICAgICAgICAvKiogU3RyaW5nIHByZWZpeCBmb3IgdGhlIGRhdGEtdGVzdCBhdHRyaWJ1dGVzIGluIHRoaXMgY29tcG9uZW50IHByaW1hcmlseSB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzICovXG4gICAgICAgIHRoaXMudGVzdERhdGFQcmVmaXggPSAnZm9ybS1zZWN0aW9uJztcbiAgICAgICAgLyoqIExvYWRpbmcgc3RhdGUgZm9yIHRoZSBmb3JtICovXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvKiogU2Vjb25kYXJ5IGZvb3RlciBjb21wb25lbnQgb3IgdGV4dCAqL1xuICAgICAgICB0aGlzLnNlY29uZGFyeUZvb3RlckNvbnRlbnQgPSBudWxsO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBBbXBsaWZ5Rm9ybVNlY3Rpb24ucHJvdG90eXBlLmhhbmRsZUZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoZXYuZGV0YWlsKTtcbiAgICB9O1xuICAgIEFtcGxpZnlGb3JtU2VjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJmb3JtXCIsIHsgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0IH0sIGgoXCJhbXBsaWZ5LXNlY3Rpb25cIiwgbnVsbCwgaChcImRpdlwiLCBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiYW1wbGlmeS1mb3JtLXNlY3Rpb24taGVhZGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImZvcm0tc2VjdGlvbi1oZWFkZXJcIiB9LCBoKFwiaDNcIiwgeyBjbGFzczogXCJoZWFkZXJcIiwgXCJkYXRhLXRlc3RcIjogdGhpcy50ZXN0RGF0YVByZWZpeCArICctaGVhZGVyLXNlY3Rpb24nIH0sIHRoaXMuaGVhZGVyVGV4dCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzdWJ0aXRsZVwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdWJ0aXRsZVwiIH0pKSkpKSwgaChcInNsb3RcIiwgbnVsbCksIGgoXCJkaXZcIiwgbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBcImFtcGxpZnktZm9ybS1zZWN0aW9uLWZvb3RlclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJmb3JtLXNlY3Rpb24tZm9vdGVyXCIgfSwgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgXCJkYXRhLXRlc3RcIjogdGhpcy50ZXN0RGF0YVByZWZpeCArICctJyArIHRoaXMudGVzdERhdGFQcmVmaXggKyAnLWJ1dHRvbicgfSwgdGhpcy5sb2FkaW5nID8gaChcImFtcGxpZnktbG9hZGluZy1zcGlubmVyXCIsIG51bGwpIDogaChcInNwYW5cIiwgbnVsbCwgdGhpcy5zdWJtaXRCdXR0b25UZXh0KSksIHRoaXMuc2Vjb25kYXJ5Rm9vdGVyQ29udGVudCkpKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbXBsaWZ5Rm9ybVNlY3Rpb247XG59KCkpO1xuQW1wbGlmeUZvcm1TZWN0aW9uLnN0eWxlID0gYW1wbGlmeUZvcm1TZWN0aW9uQ3NzO1xudmFyIEFtcGxpZnlQYXNzd29yZEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlQYXNzd29yZEZpZWxkKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEJhc2VkIG9uIHRoZSB0eXBlIG9mIGZpZWxkIGUuZy4gc2lnbiBpbiwgc2lnbiB1cCwgZm9yZ290IHBhc3N3b3JkLCBldGMuICovXG4gICAgICAgIHRoaXMuZmllbGRJZCA9IFBBU1NXT1JEX1NVRkZJWDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBwYXNzd29yZCBsYWJlbCAqL1xuICAgICAgICB0aGlzLmxhYmVsID0gVHJhbnNsYXRpb25zLlBBU1NXT1JEX0xBQkVMO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHBsYWNlaG9sZGVyIGxhYmVsICovXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBUcmFuc2xhdGlvbnMuUEFTU1dPUkRfUExBQ0VIT0xERVI7XG4gICAgICAgIC8qKiBUaGUgcmVxdWlyZWQgZmxhZyBpbiBvcmRlciB0byBtYWtlIGFuIGlucHV0IHJlcXVpcmVkIHByaW9yIHRvIHN1Ym1pdHRpbmcgYSBmb3JtICovXG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgQW1wbGlmeVBhc3N3b3JkRmllbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwiYW1wbGlmeS1mb3JtLWZpZWxkXCIsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBmaWVsZElkOiB0aGlzLmZpZWxkSWQsIGxhYmVsOiBJMThuLmdldCh0aGlzLmxhYmVsKSwgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KHRoaXMucGxhY2Vob2xkZXIpLCBoaW50OiB0aGlzLmhpbnQsIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLCBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSwgdmFsdWU6IHRoaXMudmFsdWUsIGlucHV0UHJvcHM6IHRoaXMuaW5wdXRQcm9wcywgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlQYXNzd29yZEZpZWxkO1xufSgpKTtcbnZhciBhbXBsaWZ5UGhvbmVGaWVsZENzcyA9IFwiLnBob25lLWZpZWxke2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt3aWR0aDoxMDAlfS5waG9uZS1maWVsZCBpbnB1dHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9XCI7XG52YXIgQW1wbGlmeVBob25lRmllbGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeVBob25lRmllbGQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQmFzZWQgb24gdGhlIHR5cGUgb2YgZmllbGQgZS5nLiBzaWduIGluLCBzaWduIHVwLCBmb3Jnb3QgcGFzc3dvcmQsIGV0Yy4gKi9cbiAgICAgICAgdGhpcy5maWVsZElkID0gUEhPTkVfU1VGRklYO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIFBob25lIGxhYmVsICovXG4gICAgICAgIHRoaXMubGFiZWwgPSBUcmFuc2xhdGlvbnMuUEhPTkVfTEFCRUw7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgcGxhY2Vob2xkZXIgbGFiZWwgKi9cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IFRyYW5zbGF0aW9ucy5QSE9ORV9QTEFDRUhPTERFUjtcbiAgICAgICAgLyoqIFRoZSByZXF1aXJlZCBmbGFnIGluIG9yZGVyIHRvIG1ha2UgYW4gaW5wdXQgcmVxdWlyZWQgcHJpb3IgdG8gc3VibWl0dGluZyBhIGZvcm0gKi9cbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBBbXBsaWZ5UGhvbmVGaWVsZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgbnVsbCwgaChcImFtcGxpZnktZm9ybS1maWVsZFwiLCB7IGxhYmVsOiBJMThuLmdldCh0aGlzLmxhYmVsKSwgaGludDogdGhpcy5oaW50LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGhvbmUtZmllbGRcIiwgc2xvdDogXCJpbnB1dFwiIH0sIGgoXCJhbXBsaWZ5LWNvdW50cnktZGlhbC1jb2RlXCIsIHsgZGlhbENvZGU6IHRoaXMuZGlhbENvZGUsIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlIH0pLCBoKFwiYW1wbGlmeS1pbnB1dFwiLCB7IGZpZWxkSWQ6IHRoaXMuZmllbGRJZCwgdHlwZTogXCJ0ZWxcIiwgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsIHBsYWNlaG9sZGVyOiBJMThuLmdldCh0aGlzLnBsYWNlaG9sZGVyKSwgbmFtZTogdGhpcy5maWVsZElkLCB2YWx1ZTogdGhpcy52YWx1ZSwgaW5wdXRQcm9wczogdGhpcy5pbnB1dFByb3BzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KSkpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeVBob25lRmllbGQ7XG59KCkpO1xuQW1wbGlmeVBob25lRmllbGQuc3R5bGUgPSBhbXBsaWZ5UGhvbmVGaWVsZENzcztcbnZhciBhbXBsaWZ5U2VsZWN0Q3NzID0gXCI6aG9zdHstLWNvbG9yOnZhcigtLWFtcGxpZnktc2Vjb25kYXJ5LWNvbG9yKTstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tYW1wbGlmeS1zZWNvbmRhcnktY29udHJhc3QpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWFtcGxpZnktbGlnaHQtZ3JleSk7LS1ib3JkZXItZm9jdXM6dmFyKC0tYW1wbGlmeS1wcmltYXJ5LWNvbG9yKTstLWJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyl9LnNlbGVjdHtwYWRkaW5nOjFyZW0gMS43NXJlbSAxcmVtIDFyZW07Zm9udC1zaXplOnZhcigtLWFtcGxpZnktdGV4dC1zbSk7Y29sb3I6dmFyKC0tY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTphdXRvO2ZsZXgtYmFzaXM6YXV0bzt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7bWFyZ2luOjA7aGVpZ2h0OjMuMTI1cmVtO2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7YmFja2dyb3VuZC1wb3NpdGlvbjpjYWxjKDEwMCUgLSAxcmVtKSBjYWxjKDFlbSArIDAuNXJlbSksIGNhbGMoMTAwJSAtIDAuN3JlbSkgY2FsYygxZW0gKyAwLjVyZW0pLCBjYWxjKDEwMCUgLSAyLjVlbSkgMC41ZW07YmFja2dyb3VuZC1zaXplOjZweCA1cHgsIDZweCA1cHgsIDBweCAxLjVlbTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnNlbGVjdCA6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItZm9jdXMpfVwiO1xudmFyIERFRkFVTFRfU0VMRUNUX09QVElPTiA9IFt7IGxhYmVsOiAnJywgdmFsdWU6IDEgfV07XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignYW1wbGlmeS1zZWxlY3QnKTtcbnZhciBBbXBsaWZ5U2VsZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlTZWxlY3QoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVGhlIG9wdGlvbnMgb2YgdGhlIHNlbGVjdCBpbnB1dC4gTXVzdCBiZSBhbiBBcnJheSBvZiBPYmplY3RzIHdpdGggYW4gT2JqZWN0IHNoYXBlIG9mIHtsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfG51bWJlcn0gKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gREVGQVVMVF9TRUxFQ1RfT1BUSU9OO1xuICAgIH1cbiAgICBBbXBsaWZ5U2VsZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb25zID0gdGhpcy5jb250cnVjdFNlbGVjdE9wdGlvbnModGhpcy5vcHRpb25zKTtcbiAgICB9O1xuICAgIEFtcGxpZnlTZWxlY3QucHJvdG90eXBlLmhhbmRsZVNlbGVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9ucyA9IHRoaXMuY29udHJ1Y3RTZWxlY3RPcHRpb25zKHRoaXMub3B0aW9ucyk7XG4gICAgfTtcbiAgICBBbXBsaWZ5U2VsZWN0LnByb3RvdHlwZS5pc1NlbGVjdGVkT3B0aW9uVmFsaWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLm9wdGlvbnMuc29tZShmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkOyB9KSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1NlbGVjdGVkIG9wdGlvbiBkb2VzIG5vdCBleGlzdCBpbiBvcHRpb25zIHZhbHVlcywgZmFsbGluZyBiYWNrIHRvIGluaXRpYWwgb3B0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBBbXBsaWZ5U2VsZWN0LnByb3RvdHlwZS5jb250cnVjdFNlbGVjdE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRPcHRpb25WYWxpZCh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBbXTtcbiAgICAgICAgb3B0cy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChoKFwib3B0aW9uXCIsIHsgdmFsdWU6IG9wdC52YWx1ZSwgc2VsZWN0ZWQ6IG9wdC52YWx1ZSA9PT0gX3RoaXMuc2VsZWN0ZWQgfSwgb3B0LmxhYmVsKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuICAgIEFtcGxpZnlTZWxlY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwic2VsZWN0XCIsIHsgbmFtZTogdGhpcy5maWVsZElkLCBpZDogdGhpcy5maWVsZElkLCBjbGFzczogXCJzZWxlY3RcIiwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgfSwgdGhpcy5zZWxlY3RPcHRpb25zKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW1wbGlmeVNlbGVjdCwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjogW1wiaGFuZGxlU2VsZWN0T3B0aW9uc0NoYW5nZVwiXSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IFtcImhhbmRsZVNlbGVjdE9wdGlvbnNDaGFuZ2VcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW1wbGlmeVNlbGVjdDtcbn0oKSk7XG5BbXBsaWZ5U2VsZWN0LnN0eWxlID0gYW1wbGlmeVNlbGVjdENzcztcbnZhciBBbXBsaWZ5VXNlcm5hbWVGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5VXNlcm5hbWVGaWVsZChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBCYXNlZCBvbiB0aGUgdHlwZSBvZiBmaWVsZCBlLmcuIHNpZ24gaW4sIHNpZ24gdXAsIGZvcmdvdCBwYXNzd29yZCwgZXRjLiAqL1xuICAgICAgICB0aGlzLmZpZWxkSWQgPSBVU0VSTkFNRV9TVUZGSVg7XG4gICAgICAgIC8qKiBVc2VkIGZvciB0aGUgdXNlcm5hbWUgbGFiZWwgKi9cbiAgICAgICAgdGhpcy5sYWJlbCA9IFRyYW5zbGF0aW9ucy5VU0VSTkFNRV9MQUJFTDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBwbGFjZWhvbGRlciBsYWJlbCAqL1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gVHJhbnNsYXRpb25zLlVTRVJOQU1FX1BMQUNFSE9MREVSO1xuICAgICAgICAvKiogVGhlIHJlcXVpcmVkIGZsYWcgaW4gb3JkZXIgdG8gbWFrZSBhbiBpbnB1dCByZXF1aXJlZCBwcmlvciB0byBzdWJtaXR0aW5nIGEgZm9ybSAqL1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICAgIEFtcGxpZnlVc2VybmFtZUZpZWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1maWVsZFwiLCB7IGZpZWxkSWQ6IHRoaXMuZmllbGRJZCwgbGFiZWw6IEkxOG4uZ2V0KHRoaXMubGFiZWwpLCBwbGFjZWhvbGRlcjogSTE4bi5nZXQodGhpcy5wbGFjZWhvbGRlciksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLCBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSwgdmFsdWU6IHRoaXMudmFsdWUsIGlucHV0UHJvcHM6IHRoaXMuaW5wdXRQcm9wcywgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlVc2VybmFtZUZpZWxkO1xufSgpKTtcbmV4cG9ydCB7IEFtcGxpZnlBdXRoRmllbGRzIGFzIGFtcGxpZnlfYXV0aF9maWVsZHMsIEFtcGxpZnlDb2RlRmllbGQgYXMgYW1wbGlmeV9jb2RlX2ZpZWxkLCBBbXBsaWZ5Q291bnRyeURpYWxDb2RlIGFzIGFtcGxpZnlfY291bnRyeV9kaWFsX2NvZGUsIEFtcGxpZnlFbWFpbEZpZWxkIGFzIGFtcGxpZnlfZW1haWxfZmllbGQsIEFtcGxpZnlGb3JtU2VjdGlvbiBhcyBhbXBsaWZ5X2Zvcm1fc2VjdGlvbiwgQW1wbGlmeVBhc3N3b3JkRmllbGQgYXMgYW1wbGlmeV9wYXNzd29yZF9maWVsZCwgQW1wbGlmeVBob25lRmllbGQgYXMgYW1wbGlmeV9waG9uZV9maWVsZCwgQW1wbGlmeVNlbGVjdCBhcyBhbXBsaWZ5X3NlbGVjdCwgQW1wbGlmeVVzZXJuYW1lRmllbGQgYXMgYW1wbGlmeV91c2VybmFtZV9maWVsZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==