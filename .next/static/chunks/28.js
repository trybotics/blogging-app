(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[28],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/shadow-css-360bb6da.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/shadow-css-360bb6da.js ***!
  \*************************************************************************************/
/*! exports provided: scopeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeCss", function() { return scopeCss; });
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
 Stencil Client Platform v1.15.0 | MIT Licensed | https://stenciljs.com
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
var safeSelector = function (selector) {
    var placeholders = [];
    var index = 0;
    var content;
    // Replaces attribute selectors with placeholders.
    // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
    selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
        var replaceBy = "__ph-" + index + "__";
        placeholders.push(keep);
        index++;
        return replaceBy;
    });
    // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
    // WS and "+" would otherwise be interpreted as selector separators.
    content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
        var replaceBy = "__ph-" + index + "__";
        placeholders.push(exp);
        index++;
        return pseudo + replaceBy;
    });
    var ss = {
        content: content,
        placeholders: placeholders,
    };
    return ss;
};
var restoreSafeSelector = function (placeholders, content) {
    return content.replace(/__ph-(\d+)__/g, function (_, index) { return placeholders[+index]; });
};
var _polyfillHost = '-shadowcsshost';
var _polyfillSlotted = '-shadowcssslotted';
// note: :host-context pre-processed to -shadowcsshostcontext.
var _polyfillHostContext = '-shadowcsscontext';
var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';
var _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');
var _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');
var _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');
var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
var _selectorReSuffix = '([>\\s~+[.,{:][\\s\\S]*)?$';
var _polyfillHostRe = /-shadowcsshost/gim;
var _colonHostRe = /:host/gim;
var _colonSlottedRe = /::slotted/gim;
var _colonHostContextRe = /:host-context/gim;
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;
var stripComments = function (input) {
    return input.replace(_commentRe, '');
};
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var extractCommentsWithHash = function (input) {
    return input.match(_commentWithHashRe) || [];
};
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var OPEN_CURLY = '{';
var CLOSE_CURLY = '}';
var BLOCK_PLACEHOLDER = '%BLOCK%';
var processRules = function (input, ruleCallback) {
    var inputWithEscapedBlocks = escapeBlocks(input);
    var nextBlockIndex = 0;
    return inputWithEscapedBlocks.escapedString.replace(_ruleRe, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        var selector = m[2];
        var content = '';
        var suffix = m[4];
        var contentPrefix = '';
        if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
            suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
            contentPrefix = '{';
        }
        var cssRule = {
            selector: selector,
            content: content,
        };
        var rule = ruleCallback(cssRule);
        return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
    });
};
var escapeBlocks = function (input) {
    var inputParts = input.split(_curlyRe);
    var resultParts = [];
    var escapedBlocks = [];
    var bracketCount = 0;
    var currentBlockParts = [];
    for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
        var part = inputParts[partIndex];
        if (part === CLOSE_CURLY) {
            bracketCount--;
        }
        if (bracketCount > 0) {
            currentBlockParts.push(part);
        }
        else {
            if (currentBlockParts.length > 0) {
                escapedBlocks.push(currentBlockParts.join(''));
                resultParts.push(BLOCK_PLACEHOLDER);
                currentBlockParts = [];
            }
            resultParts.push(part);
        }
        if (part === OPEN_CURLY) {
            bracketCount++;
        }
    }
    if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(''));
        resultParts.push(BLOCK_PLACEHOLDER);
    }
    var strEscapedBlocks = {
        escapedString: resultParts.join(''),
        blocks: escapedBlocks,
    };
    return strEscapedBlocks;
};
var insertPolyfillHostInCssText = function (selector) {
    selector = selector
        .replace(_colonHostContextRe, _polyfillHostContext)
        .replace(_colonHostRe, _polyfillHost)
        .replace(_colonSlottedRe, _polyfillSlotted);
    return selector;
};
var convertColonRule = function (cssText, regExp, partReplacer) {
    // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
    return cssText.replace(regExp, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        if (m[2]) {
            var parts = m[2].split(',');
            var r = [];
            for (var i = 0; i < parts.length; i++) {
                var p = parts[i].trim();
                if (!p)
                    break;
                r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
            }
            return r.join(',');
        }
        else {
            return _polyfillHostNoCombinator + m[3];
        }
    });
};
var colonHostPartReplacer = function (host, part, suffix) {
    return host + part.replace(_polyfillHost, '') + suffix;
};
var convertColonHost = function (cssText) {
    return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
var colonHostContextPartReplacer = function (host, part, suffix) {
    if (part.indexOf(_polyfillHost) > -1) {
        return colonHostPartReplacer(host, part, suffix);
    }
    else {
        return host + part + suffix + ', ' + part + ' ' + host + suffix;
    }
};
var convertColonSlotted = function (cssText, slotScopeId) {
    var slotClass = '.' + slotScopeId + ' > ';
    var selectors = [];
    cssText = cssText.replace(_cssColonSlottedRe, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        if (m[2]) {
            var compound = m[2].trim();
            var suffix = m[3];
            var slottedSelector = slotClass + compound + suffix;
            var prefixSelector = '';
            for (var i = m[4] - 1; i >= 0; i--) {
                var char = m[5][i];
                if (char === '}' || char === ',') {
                    break;
                }
                prefixSelector = char + prefixSelector;
            }
            var orgSelector = prefixSelector + slottedSelector;
            var addedSelector = "" + prefixSelector.trimRight() + slottedSelector.trim();
            if (orgSelector.trim() !== addedSelector.trim()) {
                var updatedSelector = addedSelector + ", " + orgSelector;
                selectors.push({
                    orgSelector: orgSelector,
                    updatedSelector: updatedSelector,
                });
            }
            return slottedSelector;
        }
        else {
            return _polyfillHostNoCombinator + m[3];
        }
    });
    return {
        selectors: selectors,
        cssText: cssText,
    };
};
var convertColonHostContext = function (cssText) {
    return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
var convertShadowDOMSelectors = function (cssText) {
    return _shadowDOMSelectorsRe.reduce(function (result, pattern) { return result.replace(pattern, ' '); }, cssText);
};
var makeScopeMatcher = function (scopeSelector) {
    var lre = /\[/g;
    var rre = /\]/g;
    scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
    return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
};
var selectorNeedsScoping = function (selector, scopeSelector) {
    var re = makeScopeMatcher(scopeSelector);
    return !re.test(selector);
};
var applySimpleSelectorScope = function (selector, scopeSelector, hostSelector) {
    // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
    _polyfillHostRe.lastIndex = 0;
    if (_polyfillHostRe.test(selector)) {
        var replaceBy_1 = "." + hostSelector;
        return selector
            .replace(_polyfillHostNoCombinatorRe, function (_, selector) {
            return selector.replace(/([^:]*)(:*)(.*)/, function (_, before, colon, after) {
                return before + replaceBy_1 + colon + after;
            });
        })
            .replace(_polyfillHostRe, replaceBy_1 + ' ');
    }
    return scopeSelector + ' ' + selector;
};
var applyStrictSelectorScope = function (selector, scopeSelector, hostSelector) {
    var isRe = /\[is=([^\]]*)\]/g;
    scopeSelector = scopeSelector.replace(isRe, function (_) {
        var parts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parts[_i - 1] = arguments[_i];
        }
        return parts[0];
    });
    var className = '.' + scopeSelector;
    var _scopeSelectorPart = function (p) {
        var scopedP = p.trim();
        if (!scopedP) {
            return '';
        }
        if (p.indexOf(_polyfillHostNoCombinator) > -1) {
            scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
        }
        else {
            // remove :host since it should be unnecessary
            var t = p.replace(_polyfillHostRe, '');
            if (t.length > 0) {
                var matches = t.match(/([^:]*)(:*)(.*)/);
                if (matches) {
                    scopedP = matches[1] + className + matches[2] + matches[3];
                }
            }
        }
        return scopedP;
    };
    var safeContent = safeSelector(selector);
    selector = safeContent.content;
    var scopedSelector = '';
    var startIndex = 0;
    var res;
    var sep = /( |>|\+|~(?!=))\s*/g;
    // If a selector appears before :host it should not be shimmed as it
    // matches on ancestor elements and not on elements in the host's shadow
    // `:host-context(div)` is transformed to
    // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
    // the `div` is not part of the component in the 2nd selectors and should not be scoped.
    // Historically `component-tag:host` was matching the component so we also want to preserve
    // this behavior to avoid breaking legacy apps (it should not match).
    // The behavior should be:
    // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
    // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
    //   `:host-context(tag)`)
    var hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
    // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present
    var shouldScope = !hasHost;
    while ((res = sep.exec(selector)) !== null) {
        var separator = res[1];
        var part_1 = selector.slice(startIndex, res.index).trim();
        shouldScope = shouldScope || part_1.indexOf(_polyfillHostNoCombinator) > -1;
        var scopedPart = shouldScope ? _scopeSelectorPart(part_1) : part_1;
        scopedSelector += scopedPart + " " + separator + " ";
        startIndex = sep.lastIndex;
    }
    var part = selector.substring(startIndex);
    shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
    scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
    // replace the placeholders with their original values
    return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
var scopeSelector = function (selector, scopeSelectorText, hostSelector, slotSelector) {
    return selector
        .split(',')
        .map(function (shallowPart) {
        if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
            return shallowPart.trim();
        }
        if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
            return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
        }
        else {
            return shallowPart.trim();
        }
    })
        .join(', ');
};
var scopeSelectors = function (cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) {
    return processRules(cssText, function (rule) {
        var selector = rule.selector;
        var content = rule.content;
        if (rule.selector[0] !== '@') {
            selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
        }
        else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
            content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
        }
        var cssRule = {
            selector: selector.replace(/\s{2,}/g, ' ').trim(),
            content: content,
        };
        return cssRule;
    });
};
var scopeCssText = function (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
    cssText = insertPolyfillHostInCssText(cssText);
    cssText = convertColonHost(cssText);
    cssText = convertColonHostContext(cssText);
    var slotted = convertColonSlotted(cssText, slotScopeId);
    cssText = slotted.cssText;
    cssText = convertShadowDOMSelectors(cssText);
    if (scopeId) {
        cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
    }
    cssText = cssText.replace(/-shadowcsshost-no-combinator/g, "." + hostScopeId);
    cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
    return {
        cssText: cssText.trim(),
        slottedSelectors: slotted.selectors,
    };
};
var scopeCss = function (cssText, scopeId, commentOriginalSelector) {
    var hostScopeId = scopeId + '-h';
    var slotScopeId = scopeId + '-s';
    var commentsWithHash = extractCommentsWithHash(cssText);
    cssText = stripComments(cssText);
    var orgSelectors = [];
    if (commentOriginalSelector) {
        var processCommentedSelector_1 = function (rule) {
            var placeholder = "/*!@___" + orgSelectors.length + "___*/";
            var comment = "/*!@" + rule.selector + "*/";
            orgSelectors.push({ placeholder: placeholder, comment: comment });
            rule.selector = placeholder + rule.selector;
            return rule;
        };
        cssText = processRules(cssText, function (rule) {
            if (rule.selector[0] !== '@') {
                return processCommentedSelector_1(rule);
            }
            else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                rule.content = processRules(rule.content, processCommentedSelector_1);
                return rule;
            }
            return rule;
        });
    }
    var scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
    cssText = __spreadArrays([scoped.cssText], commentsWithHash).join('\n');
    if (commentOriginalSelector) {
        orgSelectors.forEach(function (_a) {
            var placeholder = _a.placeholder, comment = _a.comment;
            cssText = cssText.replace(placeholder, comment);
        });
    }
    scoped.slottedSelectors.forEach(function (slottedSelector) {
        cssText = cssText.replace(slottedSelector.orgSelector, slottedSelector.updatedSelector);
    });
    return cssText;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9zaGFkb3ctY3NzLTM2MGJiNmRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsc0JBQXNCLFNBQUksSUFBSSxTQUFJO0FBQ2xDLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLDZCQUE2QixFQUFFO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFLEVBQUUsY0FBYyxRQUFRLEtBQUssVUFBVTtBQUNqRSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UscUNBQXFDLEVBQUU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ29CIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbi8qXG4gU3RlbmNpbCBDbGllbnQgUGxhdGZvcm0gdjEuMTUuMCB8IE1JVCBMaWNlbnNlZCB8IGh0dHBzOi8vc3RlbmNpbGpzLmNvbVxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICpcbiAqIFRoaXMgZmlsZSBpcyBhIHBvcnQgb2Ygc2hhZG93Q1NTIGZyb20gd2ViY29tcG9uZW50cy5qcyB0byBUeXBlU2NyaXB0LlxuICogaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2Jsb2IvNGVmZWNkN2UwZS9zcmMvU2hhZG93Q1NTL1NoYWRvd0NTUy5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50c1xuICovXG52YXIgc2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVycyA9IFtdO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNvbnRlbnQ7XG4gICAgLy8gUmVwbGFjZXMgYXR0cmlidXRlIHNlbGVjdG9ycyB3aXRoIHBsYWNlaG9sZGVycy5cbiAgICAvLyBUaGUgV1MgaW4gW2F0dHI9XCJ2YSBsdWVcIl0gd291bGQgb3RoZXJ3aXNlIGJlIGludGVycHJldGVkIGFzIGEgc2VsZWN0b3Igc2VwYXJhdG9yLlxuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvKFxcW1teXFxdXSpcXF0pL2csIGZ1bmN0aW9uIChfLCBrZWVwKSB7XG4gICAgICAgIHZhciByZXBsYWNlQnkgPSBcIl9fcGgtXCIgKyBpbmRleCArIFwiX19cIjtcbiAgICAgICAgcGxhY2Vob2xkZXJzLnB1c2goa2VlcCk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHJldHVybiByZXBsYWNlQnk7XG4gICAgfSk7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGV4cHJlc3Npb24gaW4gYDpudGgtY2hpbGQoMm4gKyAxKWAgd2l0aCBhIHBsYWNlaG9sZGVyLlxuICAgIC8vIFdTIGFuZCBcIitcIiB3b3VsZCBvdGhlcndpc2UgYmUgaW50ZXJwcmV0ZWQgYXMgc2VsZWN0b3Igc2VwYXJhdG9ycy5cbiAgICBjb250ZW50ID0gc2VsZWN0b3IucmVwbGFjZSgvKDpudGgtWy1cXHddKykoXFwoW14pXStcXCkpL2csIGZ1bmN0aW9uIChfLCBwc2V1ZG8sIGV4cCkge1xuICAgICAgICB2YXIgcmVwbGFjZUJ5ID0gXCJfX3BoLVwiICsgaW5kZXggKyBcIl9fXCI7XG4gICAgICAgIHBsYWNlaG9sZGVycy5wdXNoKGV4cCk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHJldHVybiBwc2V1ZG8gKyByZXBsYWNlQnk7XG4gICAgfSk7XG4gICAgdmFyIHNzID0ge1xuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBwbGFjZWhvbGRlcnM6IHBsYWNlaG9sZGVycyxcbiAgICB9O1xuICAgIHJldHVybiBzcztcbn07XG52YXIgcmVzdG9yZVNhZmVTZWxlY3RvciA9IGZ1bmN0aW9uIChwbGFjZWhvbGRlcnMsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9fX3BoLShcXGQrKV9fL2csIGZ1bmN0aW9uIChfLCBpbmRleCkgeyByZXR1cm4gcGxhY2Vob2xkZXJzWytpbmRleF07IH0pO1xufTtcbnZhciBfcG9seWZpbGxIb3N0ID0gJy1zaGFkb3djc3Nob3N0JztcbnZhciBfcG9seWZpbGxTbG90dGVkID0gJy1zaGFkb3djc3NzbG90dGVkJztcbi8vIG5vdGU6IDpob3N0LWNvbnRleHQgcHJlLXByb2Nlc3NlZCB0byAtc2hhZG93Y3NzaG9zdGNvbnRleHQuXG52YXIgX3BvbHlmaWxsSG9zdENvbnRleHQgPSAnLXNoYWRvd2Nzc2NvbnRleHQnO1xudmFyIF9wYXJlblN1ZmZpeCA9ICcpKD86XFxcXCgoJyArICcoPzpcXFxcKFteKShdKlxcXFwpfFteKShdKikrPycgKyAnKVxcXFwpKT8oW14se10qKSc7XG52YXIgX2Nzc0NvbG9uSG9zdFJlID0gbmV3IFJlZ0V4cCgnKCcgKyBfcG9seWZpbGxIb3N0ICsgX3BhcmVuU3VmZml4LCAnZ2ltJyk7XG52YXIgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfY3NzQ29sb25TbG90dGVkUmUgPSBuZXcgUmVnRXhwKCcoJyArIF9wb2x5ZmlsbFNsb3R0ZWQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yID0gX3BvbHlmaWxsSG9zdCArICctbm8tY29tYmluYXRvcic7XG52YXIgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlID0gLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IoW15cXHNdKikvO1xudmFyIF9zaGFkb3dET01TZWxlY3RvcnNSZSA9IFsvOjpzaGFkb3cvZywgLzo6Y29udGVudC9nXTtcbnZhciBfc2VsZWN0b3JSZVN1ZmZpeCA9ICcoWz5cXFxcc34rWy4sezpdW1xcXFxzXFxcXFNdKik/JCc7XG52YXIgX3BvbHlmaWxsSG9zdFJlID0gLy1zaGFkb3djc3Nob3N0L2dpbTtcbnZhciBfY29sb25Ib3N0UmUgPSAvOmhvc3QvZ2ltO1xudmFyIF9jb2xvblNsb3R0ZWRSZSA9IC86OnNsb3R0ZWQvZ2ltO1xudmFyIF9jb2xvbkhvc3RDb250ZXh0UmUgPSAvOmhvc3QtY29udGV4dC9naW07XG52YXIgX2NvbW1lbnRSZSA9IC9cXC9cXCpcXHMqW1xcc1xcU10qP1xcKlxcLy9nO1xudmFyIHN0cmlwQ29tbWVudHMgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShfY29tbWVudFJlLCAnJyk7XG59O1xudmFyIF9jb21tZW50V2l0aEhhc2hSZSA9IC9cXC9cXCpcXHMqI1xccypzb3VyY2UoTWFwcGluZyk/VVJMPVtcXHNcXFNdKz9cXCpcXC8vZztcbnZhciBleHRyYWN0Q29tbWVudHNXaXRoSGFzaCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5tYXRjaChfY29tbWVudFdpdGhIYXNoUmUpIHx8IFtdO1xufTtcbnZhciBfcnVsZVJlID0gLyhcXHMqKShbXjtcXHtcXH1dKz8pKFxccyopKCg/OnslQkxPQ0slfT9cXHMqOz8pfCg/Olxccyo7KSkvZztcbnZhciBfY3VybHlSZSA9IC8oW3t9XSkvZztcbnZhciBPUEVOX0NVUkxZID0gJ3snO1xudmFyIENMT1NFX0NVUkxZID0gJ30nO1xudmFyIEJMT0NLX1BMQUNFSE9MREVSID0gJyVCTE9DSyUnO1xudmFyIHByb2Nlc3NSdWxlcyA9IGZ1bmN0aW9uIChpbnB1dCwgcnVsZUNhbGxiYWNrKSB7XG4gICAgdmFyIGlucHV0V2l0aEVzY2FwZWRCbG9ja3MgPSBlc2NhcGVCbG9ja3MoaW5wdXQpO1xuICAgIHZhciBuZXh0QmxvY2tJbmRleCA9IDA7XG4gICAgcmV0dXJuIGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuZXNjYXBlZFN0cmluZy5yZXBsYWNlKF9ydWxlUmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG0gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtWzJdO1xuICAgICAgICB2YXIgY29udGVudCA9ICcnO1xuICAgICAgICB2YXIgc3VmZml4ID0gbVs0XTtcbiAgICAgICAgdmFyIGNvbnRlbnRQcmVmaXggPSAnJztcbiAgICAgICAgaWYgKHN1ZmZpeCAmJiBzdWZmaXguc3RhcnRzV2l0aCgneycgKyBCTE9DS19QTEFDRUhPTERFUikpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmJsb2Nrc1tuZXh0QmxvY2tJbmRleCsrXTtcbiAgICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zdWJzdHJpbmcoQkxPQ0tfUExBQ0VIT0xERVIubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBjb250ZW50UHJlZml4ID0gJ3snO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjc3NSdWxlID0ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJ1bGUgPSBydWxlQ2FsbGJhY2soY3NzUnVsZSk7XG4gICAgICAgIHJldHVybiBcIlwiICsgbVsxXSArIHJ1bGUuc2VsZWN0b3IgKyBtWzNdICsgY29udGVudFByZWZpeCArIHJ1bGUuY29udGVudCArIHN1ZmZpeDtcbiAgICB9KTtcbn07XG52YXIgZXNjYXBlQmxvY2tzID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIGlucHV0UGFydHMgPSBpbnB1dC5zcGxpdChfY3VybHlSZSk7XG4gICAgdmFyIHJlc3VsdFBhcnRzID0gW107XG4gICAgdmFyIGVzY2FwZWRCbG9ja3MgPSBbXTtcbiAgICB2YXIgYnJhY2tldENvdW50ID0gMDtcbiAgICB2YXIgY3VycmVudEJsb2NrUGFydHMgPSBbXTtcbiAgICBmb3IgKHZhciBwYXJ0SW5kZXggPSAwOyBwYXJ0SW5kZXggPCBpbnB1dFBhcnRzLmxlbmd0aDsgcGFydEluZGV4KyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBpbnB1dFBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgIGlmIChwYXJ0ID09PSBDTE9TRV9DVVJMWSkge1xuICAgICAgICAgICAgYnJhY2tldENvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJyYWNrZXRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRCbG9ja1BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVzY2FwZWRCbG9ja3MucHVzaChjdXJyZW50QmxvY2tQYXJ0cy5qb2luKCcnKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0UGFydHMucHVzaChCTE9DS19QTEFDRUhPTERFUik7XG4gICAgICAgICAgICAgICAgY3VycmVudEJsb2NrUGFydHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnQgPT09IE9QRU5fQ1VSTFkpIHtcbiAgICAgICAgICAgIGJyYWNrZXRDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50QmxvY2tQYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVzY2FwZWRCbG9ja3MucHVzaChjdXJyZW50QmxvY2tQYXJ0cy5qb2luKCcnKSk7XG4gICAgICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICAgIH1cbiAgICB2YXIgc3RyRXNjYXBlZEJsb2NrcyA9IHtcbiAgICAgICAgZXNjYXBlZFN0cmluZzogcmVzdWx0UGFydHMuam9pbignJyksXG4gICAgICAgIGJsb2NrczogZXNjYXBlZEJsb2NrcyxcbiAgICB9O1xuICAgIHJldHVybiBzdHJFc2NhcGVkQmxvY2tzO1xufTtcbnZhciBpbnNlcnRQb2x5ZmlsbEhvc3RJbkNzc1RleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIC5yZXBsYWNlKF9jb2xvbkhvc3RDb250ZXh0UmUsIF9wb2x5ZmlsbEhvc3RDb250ZXh0KVxuICAgICAgICAucmVwbGFjZShfY29sb25Ib3N0UmUsIF9wb2x5ZmlsbEhvc3QpXG4gICAgICAgIC5yZXBsYWNlKF9jb2xvblNsb3R0ZWRSZSwgX3BvbHlmaWxsU2xvdHRlZCk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xufTtcbnZhciBjb252ZXJ0Q29sb25SdWxlID0gZnVuY3Rpb24gKGNzc1RleHQsIHJlZ0V4cCwgcGFydFJlcGxhY2VyKSB7XG4gICAgLy8gbVsxXSA9IDpob3N0KC1jb250ZXh0KSwgbVsyXSA9IGNvbnRlbnRzIG9mICgpLCBtWzNdIHJlc3Qgb2YgcnVsZVxuICAgIHJldHVybiBjc3NUZXh0LnJlcGxhY2UocmVnRXhwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1bMl0pIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IG1bMl0uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICByLnB1c2gocGFydFJlcGxhY2VyKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IsIHAsIG1bM10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yICsgbVszXTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIgPSBmdW5jdGlvbiAoaG9zdCwgcGFydCwgc3VmZml4KSB7XG4gICAgcmV0dXJuIGhvc3QgKyBwYXJ0LnJlcGxhY2UoX3BvbHlmaWxsSG9zdCwgJycpICsgc3VmZml4O1xufTtcbnZhciBjb252ZXJ0Q29sb25Ib3N0ID0gZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICByZXR1cm4gY29udmVydENvbG9uUnVsZShjc3NUZXh0LCBfY3NzQ29sb25Ib3N0UmUsIGNvbG9uSG9zdFBhcnRSZXBsYWNlcik7XG59O1xudmFyIGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIgPSBmdW5jdGlvbiAoaG9zdCwgcGFydCwgc3VmZml4KSB7XG4gICAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIoaG9zdCwgcGFydCwgc3VmZml4KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBob3N0ICsgcGFydCArIHN1ZmZpeCArICcsICcgKyBwYXJ0ICsgJyAnICsgaG9zdCArIHN1ZmZpeDtcbiAgICB9XG59O1xudmFyIGNvbnZlcnRDb2xvblNsb3R0ZWQgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2xvdFNjb3BlSWQpIHtcbiAgICB2YXIgc2xvdENsYXNzID0gJy4nICsgc2xvdFNjb3BlSWQgKyAnID4gJztcbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShfY3NzQ29sb25TbG90dGVkUmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG0gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobVsyXSkge1xuICAgICAgICAgICAgdmFyIGNvbXBvdW5kID0gbVsyXS50cmltKCk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gbVszXTtcbiAgICAgICAgICAgIHZhciBzbG90dGVkU2VsZWN0b3IgPSBzbG90Q2xhc3MgKyBjb21wb3VuZCArIHN1ZmZpeDtcbiAgICAgICAgICAgIHZhciBwcmVmaXhTZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1bNF0gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyID0gbVs1XVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ30nIHx8IGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlZml4U2VsZWN0b3IgPSBjaGFyICsgcHJlZml4U2VsZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3JnU2VsZWN0b3IgPSBwcmVmaXhTZWxlY3RvciArIHNsb3R0ZWRTZWxlY3RvcjtcbiAgICAgICAgICAgIHZhciBhZGRlZFNlbGVjdG9yID0gXCJcIiArIHByZWZpeFNlbGVjdG9yLnRyaW1SaWdodCgpICsgc2xvdHRlZFNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChvcmdTZWxlY3Rvci50cmltKCkgIT09IGFkZGVkU2VsZWN0b3IudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWRTZWxlY3RvciA9IGFkZGVkU2VsZWN0b3IgKyBcIiwgXCIgKyBvcmdTZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG9yZ1NlbGVjdG9yOiBvcmdTZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFNlbGVjdG9yOiB1cGRhdGVkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2xvdHRlZFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgKyBtWzNdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIGNzc1RleHQ6IGNzc1RleHQsXG4gICAgfTtcbn07XG52YXIgY29udmVydENvbG9uSG9zdENvbnRleHQgPSBmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUsIGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIpO1xufTtcbnZhciBjb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzID0gZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICByZXR1cm4gX3NoYWRvd0RPTVNlbGVjdG9yc1JlLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBwYXR0ZXJuKSB7IHJldHVybiByZXN1bHQucmVwbGFjZShwYXR0ZXJuLCAnICcpOyB9LCBjc3NUZXh0KTtcbn07XG52YXIgbWFrZVNjb3BlTWF0Y2hlciA9IGZ1bmN0aW9uIChzY29wZVNlbGVjdG9yKSB7XG4gICAgdmFyIGxyZSA9IC9cXFsvZztcbiAgICB2YXIgcnJlID0gL1xcXS9nO1xuICAgIHNjb3BlU2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yLnJlcGxhY2UobHJlLCAnXFxcXFsnKS5yZXBsYWNlKHJyZSwgJ1xcXFxdJyk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHNjb3BlU2VsZWN0b3IgKyAnKScgKyBfc2VsZWN0b3JSZVN1ZmZpeCwgJ20nKTtcbn07XG52YXIgc2VsZWN0b3JOZWVkc1Njb3BpbmcgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IpIHtcbiAgICB2YXIgcmUgPSBtYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IpO1xuICAgIHJldHVybiAhcmUudGVzdChzZWxlY3Rvcik7XG59O1xudmFyIGFwcGx5U2ltcGxlU2VsZWN0b3JTY29wZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSB7XG4gICAgLy8gSW4gQW5kcm9pZCBicm93c2VyLCB0aGUgbGFzdEluZGV4IGlzIG5vdCByZXNldCB3aGVuIHRoZSByZWdleCBpcyB1c2VkIGluIFN0cmluZy5yZXBsYWNlKClcbiAgICBfcG9seWZpbGxIb3N0UmUubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoX3BvbHlmaWxsSG9zdFJlLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgIHZhciByZXBsYWNlQnlfMSA9IFwiLlwiICsgaG9zdFNlbGVjdG9yO1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JcbiAgICAgICAgICAgIC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3JSZSwgZnVuY3Rpb24gKF8sIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZSgvKFteOl0qKSg6KikoLiopLywgZnVuY3Rpb24gKF8sIGJlZm9yZSwgY29sb24sIGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlZm9yZSArIHJlcGxhY2VCeV8xICsgY29sb24gKyBhZnRlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoX3BvbHlmaWxsSG9zdFJlLCByZXBsYWNlQnlfMSArICcgJyk7XG4gICAgfVxuICAgIHJldHVybiBzY29wZVNlbGVjdG9yICsgJyAnICsgc2VsZWN0b3I7XG59O1xudmFyIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSB7XG4gICAgdmFyIGlzUmUgPSAvXFxbaXM9KFteXFxdXSopXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShpc1JlLCBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBhcnRzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9KTtcbiAgICB2YXIgY2xhc3NOYW1lID0gJy4nICsgc2NvcGVTZWxlY3RvcjtcbiAgICB2YXIgX3Njb3BlU2VsZWN0b3JQYXJ0ID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgdmFyIHNjb3BlZFAgPSBwLnRyaW0oKTtcbiAgICAgICAgaWYgKCFzY29wZWRQKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICBzY29wZWRQID0gYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlKHAsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgOmhvc3Qgc2luY2UgaXQgc2hvdWxkIGJlIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgdCA9IHAucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsICcnKTtcbiAgICAgICAgICAgIGlmICh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHQubWF0Y2goLyhbXjpdKikoOiopKC4qKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFAgPSBtYXRjaGVzWzFdICsgY2xhc3NOYW1lICsgbWF0Y2hlc1syXSArIG1hdGNoZXNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZWRQO1xuICAgIH07XG4gICAgdmFyIHNhZmVDb250ZW50ID0gc2FmZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvciA9IHNhZmVDb250ZW50LmNvbnRlbnQ7XG4gICAgdmFyIHNjb3BlZFNlbGVjdG9yID0gJyc7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgIHZhciByZXM7XG4gICAgdmFyIHNlcCA9IC8oIHw+fFxcK3x+KD8hPSkpXFxzKi9nO1xuICAgIC8vIElmIGEgc2VsZWN0b3IgYXBwZWFycyBiZWZvcmUgOmhvc3QgaXQgc2hvdWxkIG5vdCBiZSBzaGltbWVkIGFzIGl0XG4gICAgLy8gbWF0Y2hlcyBvbiBhbmNlc3RvciBlbGVtZW50cyBhbmQgbm90IG9uIGVsZW1lbnRzIGluIHRoZSBob3N0J3Mgc2hhZG93XG4gICAgLy8gYDpob3N0LWNvbnRleHQoZGl2KWAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgICAvLyBgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmRpdiwgZGl2IC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgXG4gICAgLy8gdGhlIGBkaXZgIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb21wb25lbnQgaW4gdGhlIDJuZCBzZWxlY3RvcnMgYW5kIHNob3VsZCBub3QgYmUgc2NvcGVkLlxuICAgIC8vIEhpc3RvcmljYWxseSBgY29tcG9uZW50LXRhZzpob3N0YCB3YXMgbWF0Y2hpbmcgdGhlIGNvbXBvbmVudCBzbyB3ZSBhbHNvIHdhbnQgdG8gcHJlc2VydmVcbiAgICAvLyB0aGlzIGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGxlZ2FjeSBhcHBzIChpdCBzaG91bGQgbm90IG1hdGNoKS5cbiAgICAvLyBUaGUgYmVoYXZpb3Igc2hvdWxkIGJlOlxuICAgIC8vIC0gYHRhZzpob3N0YCAtPiBgdGFnW2hdYCAodGhpcyBpcyB0byBhdm9pZCBicmVha2luZyBsZWdhY3kgYXBwcywgc2hvdWxkIG5vdCBtYXRjaCBhbnl0aGluZylcbiAgICAvLyAtIGB0YWcgOmhvc3RgIC0+IGB0YWcgW2hdYCAoYHRhZ2AgaXMgbm90IHNjb3BlZCBiZWNhdXNlIGl0J3MgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyAgIGA6aG9zdC1jb250ZXh0KHRhZylgKVxuICAgIHZhciBoYXNIb3N0ID0gc2VsZWN0b3IuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgIC8vIE9ubHkgc2NvcGUgcGFydHMgYWZ0ZXIgdGhlIGZpcnN0IGAtc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yYCB3aGVuIGl0IGlzIHByZXNlbnRcbiAgICB2YXIgc2hvdWxkU2NvcGUgPSAhaGFzSG9zdDtcbiAgICB3aGlsZSAoKHJlcyA9IHNlcC5leGVjKHNlbGVjdG9yKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHJlc1sxXTtcbiAgICAgICAgdmFyIHBhcnRfMSA9IHNlbGVjdG9yLnNsaWNlKHN0YXJ0SW5kZXgsIHJlcy5pbmRleCkudHJpbSgpO1xuICAgICAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnRfMS5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgICAgIHZhciBzY29wZWRQYXJ0ID0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydF8xKSA6IHBhcnRfMTtcbiAgICAgICAgc2NvcGVkU2VsZWN0b3IgKz0gc2NvcGVkUGFydCArIFwiIFwiICsgc2VwYXJhdG9yICsgXCIgXCI7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBzZXAubGFzdEluZGV4O1xuICAgIH1cbiAgICB2YXIgcGFydCA9IHNlbGVjdG9yLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgIHNjb3BlZFNlbGVjdG9yICs9IHNob3VsZFNjb3BlID8gX3Njb3BlU2VsZWN0b3JQYXJ0KHBhcnQpIDogcGFydDtcbiAgICAvLyByZXBsYWNlIHRoZSBwbGFjZWhvbGRlcnMgd2l0aCB0aGVpciBvcmlnaW5hbCB2YWx1ZXNcbiAgICByZXR1cm4gcmVzdG9yZVNhZmVTZWxlY3RvcihzYWZlQ29udGVudC5wbGFjZWhvbGRlcnMsIHNjb3BlZFNlbGVjdG9yKTtcbn07XG52YXIgc2NvcGVTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNoYWxsb3dQYXJ0KSB7XG4gICAgICAgIGlmIChzbG90U2VsZWN0b3IgJiYgc2hhbGxvd1BhcnQuaW5kZXhPZignLicgKyBzbG90U2VsZWN0b3IpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yTmVlZHNTY29waW5nKHNoYWxsb3dQYXJ0LCBzY29wZVNlbGVjdG9yVGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBseVN0cmljdFNlbGVjdG9yU2NvcGUoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuam9pbignLCAnKTtcbn07XG52YXIgc2NvcGVTZWxlY3RvcnMgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgIHJldHVybiBwcm9jZXNzUnVsZXMoY3NzVGV4dCwgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gcnVsZS5zZWxlY3RvcjtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBydWxlLmNvbnRlbnQ7XG4gICAgICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSAnQCcpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2NvcGVTZWxlY3RvcihydWxlLnNlbGVjdG9yLCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgY29udGVudCA9IHNjb3BlU2VsZWN0b3JzKHJ1bGUuY29udGVudCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3NzUnVsZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvci5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudHJpbSgpLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNzc1J1bGU7XG4gICAgfSk7XG59O1xudmFyIHNjb3BlQ3NzVGV4dCA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgY3NzVGV4dCA9IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gY29udmVydENvbG9uSG9zdChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gY29udmVydENvbG9uSG9zdENvbnRleHQoY3NzVGV4dCk7XG4gICAgdmFyIHNsb3R0ZWQgPSBjb252ZXJ0Q29sb25TbG90dGVkKGNzc1RleHQsIHNsb3RTY29wZUlkKTtcbiAgICBjc3NUZXh0ID0gc2xvdHRlZC5jc3NUZXh0O1xuICAgIGNzc1RleHQgPSBjb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzKGNzc1RleHQpO1xuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIGNzc1RleHQgPSBzY29wZVNlbGVjdG9ycyhjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQpO1xuICAgIH1cbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKC8tc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yL2csIFwiLlwiICsgaG9zdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLz5cXHMqXFwqXFxzKyhbXnssIF0rKS9nbSwgJyAkMSAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjc3NUZXh0OiBjc3NUZXh0LnRyaW0oKSxcbiAgICAgICAgc2xvdHRlZFNlbGVjdG9yczogc2xvdHRlZC5zZWxlY3RvcnMsXG4gICAgfTtcbn07XG52YXIgc2NvcGVDc3MgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICB2YXIgaG9zdFNjb3BlSWQgPSBzY29wZUlkICsgJy1oJztcbiAgICB2YXIgc2xvdFNjb3BlSWQgPSBzY29wZUlkICsgJy1zJztcbiAgICB2YXIgY29tbWVudHNXaXRoSGFzaCA9IGV4dHJhY3RDb21tZW50c1dpdGhIYXNoKGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBzdHJpcENvbW1lbnRzKGNzc1RleHQpO1xuICAgIHZhciBvcmdTZWxlY3RvcnMgPSBbXTtcbiAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IFwiLyohQF9fX1wiICsgb3JnU2VsZWN0b3JzLmxlbmd0aCArIFwiX19fKi9cIjtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gXCIvKiFAXCIgKyBydWxlLnNlbGVjdG9yICsgXCIqL1wiO1xuICAgICAgICAgICAgb3JnU2VsZWN0b3JzLnB1c2goeyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIGNvbW1lbnQ6IGNvbW1lbnQgfSk7XG4gICAgICAgICAgICBydWxlLnNlbGVjdG9yID0gcGxhY2Vob2xkZXIgKyBydWxlLnNlbGVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH07XG4gICAgICAgIGNzc1RleHQgPSBwcm9jZXNzUnVsZXMoY3NzVGV4dCwgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSAnQCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yXzEocnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQHN1cHBvcnRzJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAcGFnZScpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQGRvY3VtZW50JykpIHtcbiAgICAgICAgICAgICAgICBydWxlLmNvbnRlbnQgPSBwcm9jZXNzUnVsZXMocnVsZS5jb250ZW50LCBwcm9jZXNzQ29tbWVudGVkU2VsZWN0b3JfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBzY29wZWQgPSBzY29wZUNzc1RleHQoY3NzVGV4dCwgc2NvcGVJZCwgaG9zdFNjb3BlSWQsIHNsb3RTY29wZUlkKTtcbiAgICBjc3NUZXh0ID0gX19zcHJlYWRBcnJheXMoW3Njb3BlZC5jc3NUZXh0XSwgY29tbWVudHNXaXRoSGFzaCkuam9pbignXFxuJyk7XG4gICAgaWYgKGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgIG9yZ1NlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsIGNvbW1lbnQgPSBfYS5jb21tZW50O1xuICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShwbGFjZWhvbGRlciwgY29tbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzY29wZWQuc2xvdHRlZFNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90dGVkU2VsZWN0b3IpIHtcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShzbG90dGVkU2VsZWN0b3Iub3JnU2VsZWN0b3IsIHNsb3R0ZWRTZWxlY3Rvci51cGRhdGVkU2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBjc3NUZXh0O1xufTtcbmV4cG9ydCB7IHNjb3BlQ3NzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9