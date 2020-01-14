webpackHotUpdate("static/development/pages/[event-slug].js",{

/***/ "./src/pages/[event-slug].js":
/*!***********************************!*\
  !*** ./src/pages/[event-slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Speakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Speakers */ "./src/components/Speakers.js");
/* harmony import */ var _components_Venue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Venue */ "./src/components/Venue.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Schedule */ "./src/components/Schedule.js");
/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sponsors */ "./src/components/Sponsors.js");




var _jsxFileName = "/Users/jmartin/Development/GraphCMS/Microsites/graphcms-events/src/pages/[event-slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var _require = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/src/index.js"),
    GraphQLClient = _require.GraphQLClient;

function EventPage(_ref) {
  var event = _ref.event,
      speakers = _ref.speakers,
      venue = _ref.venue,
      sponsors = _ref.sponsors,
      tracks = _ref.tracks,
      debug = _ref.debug;
  console.log(debug);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("section", {
    className: "bg-cover bg-purple-800 pb-32 pt-8",
    style: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 66%, 0% 100%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-6 py-12 lg:py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "text-white text-4xl md:text-6xl font-bold mb-4 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, event.title), __jsx("div", {
    className: "body-copy",
    dangerouslySetInnerHTML: {
      __html: event.description.html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx(_components_Speakers__WEBPACK_IMPORTED_MODULE_5__["default"], {
    speakers: speakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_Schedule__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tracks: tracks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_Venue__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, venue, {
    image: event.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sponsors: sponsors,
    event: event.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
}

EventPage.getInitialProps = function _callee(ctx) {
  var query, graphQLClient, request, event, tracks, sponsors, venue, rest, sortBySpeaker, speakers;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = "\n    fragment assetInfo on Asset {\n      handle\n      width\n      height\n      url\n    }\n  \n    fragment venueInfo on Venue {\n      id\n      name\n      location {\n        lat: latitude\n        lng: longitude\n      }\n      street\n      city\n      postcode\n      country\n    }\n  \n    fragment speakerInfo on Speaker {\n      name\n      headline\n      photo {\n        ...assetInfo\n      }\n    }\n  \n    fragment talkInfo on Talk {\n      id\n      title\n      speaker {\n        ...speakerInfo\n      }\n    }\n  \n    fragment trackInfo on Track {\n      id\n      title\n      mc {\n        ...speakerInfo\n      }\n      timeSlots(orderBy: start_ASC) {\n        id\n        start\n        end\n        talk {\n          ...talkInfo\n        }\n        sessionBreak: break {\n          title\n        }\n      }\n    }\n  \n    fragment EventInfo on Event {\n      id\n      title\n      slug\n      start\n      image {\n        ...assetInfo\n      }\n      description {\n        html\n      }\n      tracks {\n        ...trackInfo\n      }\n      sponsors {\n        name\n        url\n        logo {\n          ...assetInfo\n        }\n      }\n      venue {\n        ...venueInfo\n      }\n    }\n  \n    query {\n        event(where:{\n            slug: \"".concat(ctx.asPath.replace('/', ''), "\"\n          }) {\n            ...EventInfo\n          }\n    }\n  ");
          graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
            credentials: 'include',
            mode: 'cors',
            headers: {
              Authorization: "Bearer ".concat(process.env.GATSBY_GRAPHCMS_TOKEN)
            }
          });
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(graphQLClient.request(query));

        case 4:
          request = _context.sent;
          event = request.event;

          if (!event) {
            _context.next = 11;
            break;
          }

          tracks = event.tracks, sponsors = event.sponsors, venue = event.venue, rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(event, ["tracks", "sponsors", "venue"]);

          sortBySpeaker = function sortBySpeaker(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.name === b.name) return 0;
          };

          speakers = tracks.reduce(function (collector, currentTrack) {
            return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(collector), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currentTrack.timeSlots.map(function (timeSlot) {
              return timeSlot.talk ? timeSlot.talk.speaker : null;
            }))).filter(Boolean).sort(sortBySpeaker).reduce(function (collector, current) {
              if (collector.length) {
                if (current.name === collector[collector.length - 1].name) {
                  return collector;
                } else {
                  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(collector), [current]);
                }
              } else {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(collector), [current]);
              }
            }, []);
          }, []);
          return _context.abrupt("return", {
            sponsors: sponsors,
            venue: venue,
            speakers: speakers,
            tracks: tracks,
            event: rest,
            debug: ctx.asPath.replace('/', '')
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EventPage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[event-slug].js.e65915460de0628a2655.hot-update.js.map