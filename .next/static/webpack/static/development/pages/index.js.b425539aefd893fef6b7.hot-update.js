webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sponsors */ "./src/components/Sponsors.js");



var _jsxFileName = "/Users/jmartin/Development/GraphCMS/Microsites/graphcms-events/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var _require = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/src/index.js"),
    GraphQLClient = _require.GraphQLClient;

var Wrapper = function Wrapper(props) {
  return __jsx("section", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: "container mx-auto px-6 py-12 lg:py-20"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

var Home = function Home(_ref) {
  var futureEvents = _ref.futureEvents,
      pastEvents = _ref.pastEvents,
      globalSponsors = _ref.globalSponsors;
  var next = futureEvents[0];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "bg-cover bg-purple-800 pb-32 pt-8",
    style: {
      backgroundImage: "linear-gradient(rgba(107, 70, 193,0.85), rgba(107, 70, 193,0.5)), url(".concat(next.image.url, ")"),
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 30% 85%, 30% 100%, 0% 85%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: next.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "z-10 relative px-4 self-center w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: "text-white inline-block font-bold text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Up Next"), __jsx("h1", {
    className: "text-6xl font-bold leading-tight text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, next.title), __jsx("p", {
    className: "text-xl font-bold pb-3 text-purple-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, next.venue && next.venue.name)), __jsx("section", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "w-full md:w-1/2 text-white bg-gray-900 p-6",
    dangerouslySetInnerHTML: {
      __html: next.description.html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))))), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h2", {
    className: "text-purple-800 text-4xl md:text-6xl font-bold mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Upcoming Events"), __jsx("section", {
    className: "flex flex-wrap overflow-hidden -mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, futureEvents && futureEvents.slice(1).map(function (event, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/[event-slug].js",
      as: event.slug,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "w-full md:w-1/2 px-2 mb-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("article", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("img", {
      src: event.image ? event.image.url : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("h1", {
      className: "font-bold text-gray-800 text-xl mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, event.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, event.venue ? event.venue.name : 'TBD'))));
  }))), __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sponsors: globalSponsors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};

Home.getInitialProps = function _callee(ctx) {
  var query, graphQLClient, request, events, globalSponsors, pastEvents, futureEvents, now, sortByStart;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = "\n  fragment assetInfo on Asset {\n    handle\n    width\n    height\n    url\n  }\n\n  fragment venueInfo on Venue {\n    id\n    name\n    location {\n      lat: latitude\n      lng: longitude\n    }\n    street\n    city\n    postcode\n    country\n  }\n\n  fragment EventInfo on Event {\n    id\n    title\n    slug\n    start\n    image {\n      ...assetInfo\n    }\n    description {\n      html\n    }\n    venue {\n      ...venueInfo\n    }\n  }\n\n  query {\n      globalSponsors: sponsors(where: {\n        type: GLOBAL\n      }) {\n        name\n        url\n        logo {\n          ...assetInfo\n        }\n      }\n      events {\n        ...EventInfo\n      }\n  }\n";
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
          events = request.events, globalSponsors = request.globalSponsors;

          if (!events) {
            _context.next = 15;
            break;
          }

          pastEvents = [];
          futureEvents = [];
          now = new Date();

          sortByStart = function sortByStart(a, b) {
            if (a.start < b.start) return -1;
            if (a.start > b.start) return 1;
            if (a.start === b.start) return 0;
          };

          events.forEach(function (payload) {
            var tracks = payload.tracks,
                sponsors = payload.sponsors,
                venue = payload.venue,
                event = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(payload, ["tracks", "sponsors", "venue"]);

            if (new Date(event.start) < now) pastEvents.push(payload);
            if (new Date(event.start) > now) futureEvents.push(payload);
          });
          pastEvents = pastEvents ? pastEvents.sort(sortByStart) : [];
          futureEvents = futureEvents ? futureEvents.sort(sortByStart) : [];
          return _context.abrupt("return", {
            futureEvents: futureEvents,
            pastEvents: pastEvents,
            globalSponsors: globalSponsors
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.b425539aefd893fef6b7.hot-update.js.map