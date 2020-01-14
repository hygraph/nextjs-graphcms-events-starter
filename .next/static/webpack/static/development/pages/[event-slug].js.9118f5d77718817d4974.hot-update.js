webpackHotUpdate("static/development/pages/[event-slug].js",{

/***/ "./src/components/Schedule.js":
/*!************************************!*\
  !*** ./src/components/Schedule.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slot */ "./src/components/Slot.js");
/* harmony import */ var _SlotTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlotTime */ "./src/components/SlotTime.js");



var _jsxFileName = "/Users/jmartin/Development/GraphCMS/Microsites/graphcms-events/src/components/Schedule.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Schedule(_ref) {
  var tracks = _ref.tracks;
  var timeSlots = tracks.reduce(function (collector, currentTrack) {
    currentTrack.timeSlots.forEach(function (timeSlot) {
      var key = timeSlot.start;

      if (collector[key]) {
        collector[key] = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(collector[key]), [timeSlot]);
      } else {
        collector[key] = [timeSlot];
      }
    });
    return collector;
  }, {});
  return __jsx("div", {
    className: "container mx-auto px-6 py-12 lg:py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "mb-3 md:mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: "text-purple-800 text-4xl md:text-6xl font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Schedule"), __jsx("p", {
    className: "text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Tracks")), __jsx("div", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, tracks.map(function (_ref2, i) {
    var title = _ref2.title;
    return __jsx("div", {
      className: "w-full md:w-1/2",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h4", {
      className: "font-normal text-2xl text-gray-800 ".concat(i > 0 ? 'bg-gray-200 md:bg-white' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, title));
  }))), __jsx("section", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(timeSlots).map(function (timeSlot, timeSlotNumber) {
    var concurrentTalks = timeSlots[timeSlot];
    var singleTrack = concurrentTalks.length === 1;
    var width = singleTrack ? "w-full" : "w-full md:w-1/".concat(concurrentTalks.length);
    return __jsx("div", {
      className: "flex flex-wrap md:flex-no-wrap w-full",
      key: timeSlotNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_SlotTime__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: timeSlot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("div", {
      className: "flex flex-wrap flex-grow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, timeSlots[timeSlot].map(function (session, index) {
      var borderRight = !singleTrack && index === 0 ? 'border-0 md:border-r' : '';
      return __jsx("div", {
        key: index,
        className: "".concat(width, " h-32 border-b border-gray-400 ").concat(borderRight, " ").concat(index > 0 ? 'bg-gray-200 md:bg-white' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("div", {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_Slot__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, session, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))));
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=[event-slug].js.9118f5d77718817d4974.hot-update.js.map