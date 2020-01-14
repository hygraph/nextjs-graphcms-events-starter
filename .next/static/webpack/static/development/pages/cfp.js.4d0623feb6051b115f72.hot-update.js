webpackHotUpdate("static/development/pages/cfp.js",{

/***/ "./src/pages/cfp.js":
/*!**************************!*\
  !*** ./src/pages/cfp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jmartin/Development/GraphCMS/Microsites/graphcms-events/src/pages/cfp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Wrapper = function Wrapper(props) {
  return __jsx("section", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "container mx-auto px-6 py-12 lg:py-20"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

var CFP = function CFP() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("section", {
    className: "bg-cover bg-purple-800 pb-32 pt-8",
    style: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 66%, 0% 100%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-6 py-12 lg:py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "text-white text-4xl md:text-6xl font-bold mb-4 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Call For Papers"), __jsx("div", {
    className: "body-copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "We are always looking for new ideas and voices to be represented at our conferences, apply to speak today!"))))), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "max-w-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("form", {
    "class": "px-8 pb-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    "class": "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2",
    "for": "first_last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Name"), __jsx("input", {
    "class": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "first_last",
    type: "text",
    placeholder: "First Last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    "class": "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2",
    "for": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "E-Mail"), __jsx("input", {
    "class": "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    id: "email",
    type: "email",
    placeholder: "first_last@domain.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("p", {
    "class": "text-red-500 text-xs italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Please choose a password.")), __jsx("div", {
    "class": "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Sign In"), __jsx("a", {
    "class": "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Forgot Password?"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CFP);
/*
$talkTitle: String!,
    $talkAbstract: RichTextAST,
    $speakerName: String!,
    $speakerHeadline: String!,
    $speakerEmail: String!,
    $speakerNotes: String
*/

/***/ })

})
//# sourceMappingURL=cfp.js.4d0623feb6051b115f72.hot-update.js.map