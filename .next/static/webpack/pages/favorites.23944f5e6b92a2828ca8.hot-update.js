webpackHotUpdate_N_E("pages/favorites",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_demo_blogging_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_demo_blogging_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_demo_blogging_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Projects_demo_blogging_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projects_demo_blogging_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _src_graphql_mutations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/graphql/mutations */ "./src/graphql/mutations.js");





var _jsxFileName = "D:\\Projects\\demo\\blogging-app\\components\\Card.js",
    _s = $RefreshSig$();















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  media: {
    height: 140
  }
});
function MediaCard(_ref) {
  _s();

  var movie = _ref.movie,
      favorite = _ref.favorite,
      removeMovie = _ref.removeMovie;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(favorite || false),
      _React$useState2 = Object(D_Projects_demo_blogging_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      favoriteProps = _React$useState2[0],
      setFavorite = _React$useState2[1];

  var movieMutation = /*#__PURE__*/function () {
    var _ref2 = Object(D_Projects_demo_blogging_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Projects_demo_blogging_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(movie) {
      var movieDetails, newMovie;
      return D_Projects_demo_blogging_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              movieDetails = {
                input: {
                  movie_id: movie.id,
                  user_id: localStorage.getItem("CognitoIdentityServiceProvider.11jck81hehtgj7ufu892uh203p.LastAuthUser"),
                  title: movie.title,
                  original_title: movie.original_title,
                  backdrop_path: movie.backdrop_path,
                  poster_path: movie.poster_path,
                  popularity: movie.popularity,
                  vote_average: movie.vote_average,
                  vote_count: movie.vote_count,
                  overview: movie.overview
                }
              };
              newMovie = {};

              if (!favoriteProps) {
                _context.next = 10;
                break;
              }

              movieDetails = {
                input: {
                  id: movie._id
                }
              };
              _context.next = 7;
              return aws_amplify__WEBPACK_IMPORTED_MODULE_16__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_16__["graphqlOperation"])(_src_graphql_mutations__WEBPACK_IMPORTED_MODULE_17__["deleteFavoriteMovie"], movieDetails));

            case 7:
              newMovie = _context.sent;
              _context.next = 13;
              break;

            case 10:
              _context.next = 12;
              return aws_amplify__WEBPACK_IMPORTED_MODULE_16__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_16__["graphqlOperation"])(_src_graphql_mutations__WEBPACK_IMPORTED_MODULE_17__["createFavoriteMovie"], movieDetails));

            case 12:
              newMovie = _context.sent;

            case 13:
              removeMovie(newMovie.data[favoriteProps ? "deleteFavoriteMovie" : "createFavoriteMovie"].movie_id);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              console.log("error", _context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function movieMutation(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
      href: "/movie/[id]",
      as: "/movie/".concat(movie.id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.media,
          image: "http://image.tmdb.org/t/p/w185".concat(movie.backdrop_path),
          title: movie.original_title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            variant: "h5",
            gutterBottom: true,
            noWrap: true,
            children: movie.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            variant: "body2",
            color: "primary",
            children: ["Popularity: ", Math.floor(movie.popularity), ", \xA0 Rating:", " ", movie.vote_average, "/10"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            variant: "body2",
            color: "textSecondary",
            style: {
              textAlign: "justify"
            },
            children: [movie.overview.substr(0, 80), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                fontWeight: "700",
                cursor: "pointer",
                color: "#b26a00"
              },
              children: [" ", "... show more"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        size: "small",
        color: "primary",
        onClick: function onClick() {
          return movieMutation(movie);
        },
        children: favoriteProps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 28
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 47
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(MediaCard, "w4pIJetqw3FeF0jPNHbX/21zWiI=", false, function () {
  return [useStyles];
});

_c = MediaCard;

var _c;

$RefreshReg$(_c, "MediaCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJtZWRpYSIsImhlaWdodCIsIk1lZGlhQ2FyZCIsIm1vdmllIiwiZmF2b3JpdGUiLCJyZW1vdmVNb3ZpZSIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmF2b3JpdGVQcm9wcyIsInNldEZhdm9yaXRlIiwibW92aWVNdXRhdGlvbiIsIm1vdmllRGV0YWlscyIsImlucHV0IiwibW92aWVfaWQiLCJpZCIsInVzZXJfaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGl0bGUiLCJvcmlnaW5hbF90aXRsZSIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsInBvcHVsYXJpdHkiLCJ2b3RlX2F2ZXJhZ2UiLCJ2b3RlX2NvdW50Iiwib3ZlcnZpZXciLCJuZXdNb3ZpZSIsIl9pZCIsIkFQSSIsImdyYXBocWwiLCJncmFwaHFsT3BlcmF0aW9uIiwiZGVsZXRlRmF2b3JpdGVNb3ZpZSIsImNyZWF0ZUZhdm9yaXRlTW92aWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJmbG9vciIsInRleHRBbGlnbiIsInN1YnN0ciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBREg7QUFEb0IsQ0FBRCxDQUE1QjtBQU1lLFNBQVNDLFNBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxR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O0FBaUREOztHQTlGdUJQLFM7VUFDTkosUzs7O0tBRE1JLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmF2b3JpdGVzLjIzOTQ0ZjVlNmI5MmEyODI4Y2E4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCI7XG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFQSSwgZ3JhcGhxbE9wZXJhdGlvbiB9IGZyb20gXCJhd3MtYW1wbGlmeVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlRmF2b3JpdGVNb3ZpZSxcbiAgZGVsZXRlRmF2b3JpdGVNb3ZpZSxcbn0gZnJvbSBcIi4uL3NyYy9ncmFwaHFsL211dGF0aW9uc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUNhcmQoeyBtb3ZpZSwgZmF2b3JpdGUsIHJlbW92ZU1vdmllIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZmF2b3JpdGVQcm9wcywgc2V0RmF2b3JpdGVdID0gUmVhY3QudXNlU3RhdGUoZmF2b3JpdGUgfHwgZmFsc2UpO1xuXG4gIGNvbnN0IG1vdmllTXV0YXRpb24gPSBhc3luYyAobW92aWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IG1vdmllRGV0YWlscyA9IHtcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBtb3ZpZV9pZDogbW92aWUuaWQsXG4gICAgICAgICAgdXNlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBcIkNvZ25pdG9JZGVudGl0eVNlcnZpY2VQcm92aWRlci4xMWpjazgxaGVodGdqN3VmdTg5MnVoMjAzcC5MYXN0QXV0aFVzZXJcIlxuICAgICAgICAgICksXG4gICAgICAgICAgdGl0bGU6IG1vdmllLnRpdGxlLFxuICAgICAgICAgIG9yaWdpbmFsX3RpdGxlOiBtb3ZpZS5vcmlnaW5hbF90aXRsZSxcbiAgICAgICAgICBiYWNrZHJvcF9wYXRoOiBtb3ZpZS5iYWNrZHJvcF9wYXRoLFxuICAgICAgICAgIHBvc3Rlcl9wYXRoOiBtb3ZpZS5wb3N0ZXJfcGF0aCxcbiAgICAgICAgICBwb3B1bGFyaXR5OiBtb3ZpZS5wb3B1bGFyaXR5LFxuICAgICAgICAgIHZvdGVfYXZlcmFnZTogbW92aWUudm90ZV9hdmVyYWdlLFxuICAgICAgICAgIHZvdGVfY291bnQ6IG1vdmllLnZvdGVfY291bnQsXG4gICAgICAgICAgb3ZlcnZpZXc6IG1vdmllLm92ZXJ2aWV3LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGxldCBuZXdNb3ZpZSA9IHt9O1xuICAgICAgaWYgKGZhdm9yaXRlUHJvcHMpIHtcbiAgICAgICAgbW92aWVEZXRhaWxzID0ge1xuICAgICAgICAgIGlucHV0OiB7IGlkOiBtb3ZpZS5faWQgfSxcbiAgICAgICAgfTtcbiAgICAgICAgbmV3TW92aWUgPSBhd2FpdCBBUEkuZ3JhcGhxbChcbiAgICAgICAgICBncmFwaHFsT3BlcmF0aW9uKGRlbGV0ZUZhdm9yaXRlTW92aWUsIG1vdmllRGV0YWlscylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld01vdmllID0gYXdhaXQgQVBJLmdyYXBocWwoXG4gICAgICAgICAgZ3JhcGhxbE9wZXJhdGlvbihjcmVhdGVGYXZvcml0ZU1vdmllLCBtb3ZpZURldGFpbHMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZW1vdmVNb3ZpZShcbiAgICAgICAgbmV3TW92aWUuZGF0YVtcbiAgICAgICAgICBmYXZvcml0ZVByb3BzID8gXCJkZWxldGVGYXZvcml0ZU1vdmllXCIgOiBcImNyZWF0ZUZhdm9yaXRlTW92aWVcIlxuICAgICAgICBdLm1vdmllX2lkXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW2lkXVwiIGFzPXtgL21vdmllLyR7bW92aWUuaWR9YH0+XG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgICAgICBpbWFnZT17YGh0dHA6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzE4NSR7bW92aWUuYmFja2Ryb3BfcGF0aH1gfVxuICAgICAgICAgICAgdGl0bGU9e21vdmllLm9yaWdpbmFsX3RpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIG5vV3JhcD17dHJ1ZX0+XG4gICAgICAgICAgICAgIHttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBQb3B1bGFyaXR5OiB7TWF0aC5mbG9vcihtb3ZpZS5wb3B1bGFyaXR5KX0sICZuYnNwOyBSYXRpbmc6e1wiIFwifVxuICAgICAgICAgICAgICB7bW92aWUudm90ZV9hdmVyYWdlfS8xMFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwianVzdGlmeVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttb3ZpZS5vdmVydmlldy5zdWJzdHIoMCwgODApfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNiMjZhMDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIC4uLiBzaG93IG1vcmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICA8L0xpbms+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbW92aWVNdXRhdGlvbihtb3ZpZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmF2b3JpdGVQcm9wcyA/IDxGYXZvcml0ZUljb24gLz4gOiA8RmF2b3JpdGVCb3JkZXJJY29uIC8+fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==