webpackHotUpdate("static/development/pages/[event-slug].js",{

/***/ "./src/components/Sponsors.js":
/*!************************************!*\
  !*** ./src/components/Sponsors.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sponsor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sponsor */ "./src/components/Sponsor.js");
var _jsxFileName = "/Users/jmartin/Development/GraphCMS/Microsites/graphcms-events/src/components/Sponsors.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Sponsors(_ref) {
  var sponsors = _ref.sponsors,
      event = _ref.event;
  return __jsx("div", {
    className: "container mx-auto px-6 py-12 lg:py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "mb-6 md:mb-12 lg:mb-20 flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "text-purple-800 text-4xl md:text-6xl font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Sponsors"), __jsx("span", {
    className: "inline-flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:marketing@graphcms.com?subject=We want to sponsor".concat(event ? ' ' + event : '', "!"),
    className: "bg-gray-800 text-white px-2 py-1 rounded hover:bg-purple-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Become a Sponsor!"))), sponsors.length ? __jsx("div", {
    className: "flex flex-wrap -mx-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, sponsors.map(_Sponsor__WEBPACK_IMPORTED_MODULE_1__["default"])) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Sponsors will be announced soon."));
}

/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

/***/ })

})
//# sourceMappingURL=[event-slug].js.72e8471ca67d9f89f8ef.hot-update.js.map