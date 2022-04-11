'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
    var exports = {};
    exports.id = 'pages/news';
    exports.ids = ['pages/news'];
    exports.modules = {
        /***/ './pages/news.js':
            /*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ news1),\n/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction news1({ news  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: news.map((newsitem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {\n                children: newsitem.title\n            }, newsitem.id, false, {\n                fileName: "/Users/sigfred/Desktop/virkefeltet/apps/website/pages/news.js",\n                lineNumber: 7,\n                columnNumber: 17\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: "/Users/sigfred/Desktop/virkefeltet/apps/website/pages/news.js",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\nconst getStaticProps = async ()=>{\n    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);\n    const news = await res.json();\n    return {\n        props: {\n            news\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFtRDtBQUVwQyxTQUFTQyxLQUFJLENBQUMsRUFBRUEsSUFBSSxHQUFFLEVBQUU7SUFDbkMscUJBQ0ksOERBQUNDLEtBQUc7a0JBQ0NELElBQUksQ0FBQ0UsR0FBRyxDQUFDQyxDQUFBQSxRQUFRLGlCQUNkLDhEQUFDQyxJQUFFOzBCQUFvQkQsUUFBUSxDQUFDRSxLQUFLO2VBQTVCRixRQUFRLENBQUNHLEVBQUU7Ozs7b0JBQXVCO1FBQzlDLENBQUM7Ozs7O1lBQ0EsQ0FDUjtDQUNMO0FBRU0sTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDdEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDbkIsQ0FBQyxtREFBbUQsQ0FBQyxDQUN4RDtJQUNELE1BQU1ULElBQUksR0FBRyxNQUFNUSxHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIWCxJQUFJO1NBQ1A7S0FDSixDQUFDO0NBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B2aXJrZWZlbHRldC93ZWJzaXRlLy4vcGFnZXMvbmV3cy5qcz9iMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdzU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OZXdzLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdzKHsgbmV3cyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtuZXdzLm1hcChuZXdzaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGgzIGtleT17bmV3c2l0ZW0uaWR9PntuZXdzaXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz9fbGltaXQ9NmBcbiAgICApO1xuICAgIGNvbnN0IG5ld3MgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG5ld3NcbiAgICAgICAgfVxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbIm5ld3NTdHlsZXMiLCJuZXdzIiwiZGl2IiwibWFwIiwibmV3c2l0ZW0iLCJoMyIsInRpdGxlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.js\n'
                );

                /***/
            },

        /***/ 'react/jsx-dev-runtime':
            /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
            /***/ module => {
                module.exports = require('react/jsx-dev-runtime');

                /***/
            }
    };
    // load runtime
    var __webpack_require__ = require('../webpack-runtime.js');
    __webpack_require__.C(exports);
    var __webpack_exec__ = moduleId =>
        __webpack_require__((__webpack_require__.s = moduleId));
    var __webpack_exports__ = __webpack_exec__('./pages/news.js');
    module.exports = __webpack_exports__;
})();
