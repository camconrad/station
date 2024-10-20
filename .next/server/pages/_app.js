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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/jsonRpc */ \"@wagmi/core/providers/jsonRpc\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__, _web3modal_react__WEBPACK_IMPORTED_MODULE_6__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__, _web3modal_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n// Define chains\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum\n];\nconst projectId = \"02a231b2406ed316c861abefc95c5e59\";\n// Configure chains with jsonRpcProvider, adding RPC URLs for all chains\nconst { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)(chains, [\n    (0,_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            switch(chain.id){\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet.id:\n                    return {\n                        http: \"https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon.id:\n                    return {\n                        http: \"https://polygon-rpc.com\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism.id:\n                    return {\n                        http: \"https://mainnet.optimism.io\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum.id:\n                    return {\n                        http: \"https://arb1.arbitrum.io/rpc\"\n                    };\n                default:\n                    return null;\n            }\n        }\n    })\n]);\n// Create Wagmi config\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__.w3mConnectors)({\n        projectId,\n        chains\n    }),\n    publicClient\n});\n// Create EthereumClient for Web3Modal\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__.EthereumClient(wagmiConfig, chains);\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                config: wagmiConfig,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_6__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVvQztBQUNDO0FBQ0o7QUFDSTtBQUN2QjtBQUU1QyxnQkFBZ0I7QUFDaEIsTUFBTVcsU0FBUztJQUFDUixpREFBT0E7SUFBRUMsaURBQU9BO0lBQUVDLGtEQUFRQTtJQUFFQyxrREFBUUE7Q0FBQztBQUNyRCxNQUFNTSxZQUFZO0FBRWxCLHdFQUF3RTtBQUN4RSxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHWixzREFBZUEsQ0FBQ1UsUUFBUTtJQUMvQ0osOEVBQWVBLENBQUM7UUFDZE8sS0FBSyxDQUFDQztZQUNKLE9BQVFBLE1BQU1DLEVBQUU7Z0JBQ2QsS0FBS2IsaURBQU9BLENBQUNhLEVBQUU7b0JBQ2IsT0FBTzt3QkFBRUMsTUFBTTtvQkFBc0Q7Z0JBQ3ZFLEtBQUtiLGlEQUFPQSxDQUFDWSxFQUFFO29CQUNiLE9BQU87d0JBQUVDLE1BQU07b0JBQTBCO2dCQUMzQyxLQUFLWixrREFBUUEsQ0FBQ1csRUFBRTtvQkFDZCxPQUFPO3dCQUFFQyxNQUFNO29CQUE4QjtnQkFDL0MsS0FBS1gsa0RBQVFBLENBQUNVLEVBQUU7b0JBQ2QsT0FBTzt3QkFBRUMsTUFBTTtvQkFBK0I7Z0JBQ2hEO29CQUNFLE9BQU87WUFDWDtRQUNGO0lBQ0Y7Q0FDRDtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxjQUFjaEIsbURBQVlBLENBQUM7SUFDL0JpQixhQUFhO0lBQ2JDLFlBQVlYLGtFQUFhQSxDQUFDO1FBQUVHO1FBQVdEO0lBQU87SUFDOUNFO0FBQ0Y7QUFFQSxzQ0FBc0M7QUFDdEMsTUFBTVEsaUJBQWlCLElBQUliLCtEQUFjQSxDQUFDVSxhQUFhUDtBQUV2RCxTQUFTVyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFOzswQkFDRSw4REFBQ3hCLDhDQUFXQTtnQkFBQ3lCLFFBQVFQOzBCQUNuQiw0RUFBQ0s7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDZCx1REFBU0E7Z0JBQUNFLFdBQVdBO2dCQUFXUyxnQkFBZ0JBOzs7Ozs7OztBQUd2RDtBQUVBLGlFQUFlQyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGlvbl9kYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgbWFpbm5ldCwgcG9seWdvbiwgb3B0aW1pc20sIGFyYml0cnVtIH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnQHdhZ21pL2NvcmUvcHJvdmlkZXJzL2pzb25ScGMnXG5pbXBvcnQgeyBFdGhlcmV1bUNsaWVudCwgdzNtQ29ubmVjdG9ycyB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJldW0nXG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3JlYWN0J1xuXG4vLyBEZWZpbmUgY2hhaW5zXG5jb25zdCBjaGFpbnMgPSBbbWFpbm5ldCwgcG9seWdvbiwgb3B0aW1pc20sIGFyYml0cnVtXVxuY29uc3QgcHJvamVjdElkID0gJzAyYTIzMWIyNDA2ZWQzMTZjODYxYWJlZmM5NWM1ZTU5J1xuXG4vLyBDb25maWd1cmUgY2hhaW5zIHdpdGgganNvblJwY1Byb3ZpZGVyLCBhZGRpbmcgUlBDIFVSTHMgZm9yIGFsbCBjaGFpbnNcbmNvbnN0IHsgcHVibGljQ2xpZW50IH0gPSBjb25maWd1cmVDaGFpbnMoY2hhaW5zLCBbXG4gIGpzb25ScGNQcm92aWRlcih7XG4gICAgcnBjOiAoY2hhaW4pID0+IHtcbiAgICAgIHN3aXRjaCAoY2hhaW4uaWQpIHtcbiAgICAgICAgY2FzZSBtYWlubmV0LmlkOlxuICAgICAgICAgIHJldHVybiB7IGh0dHA6ICdodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzL1lPVVJfSU5GVVJBX1BST0pFQ1RfSUQnIH1cbiAgICAgICAgY2FzZSBwb2x5Z29uLmlkOlxuICAgICAgICAgIHJldHVybiB7IGh0dHA6ICdodHRwczovL3BvbHlnb24tcnBjLmNvbScgfVxuICAgICAgICBjYXNlIG9wdGltaXNtLmlkOlxuICAgICAgICAgIHJldHVybiB7IGh0dHA6ICdodHRwczovL21haW5uZXQub3B0aW1pc20uaW8nIH1cbiAgICAgICAgY2FzZSBhcmJpdHJ1bS5pZDpcbiAgICAgICAgICByZXR1cm4geyBodHRwOiAnaHR0cHM6Ly9hcmIxLmFyYml0cnVtLmlvL3JwYycgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgfSksXG5dKVxuXG4vLyBDcmVhdGUgV2FnbWkgY29uZmlnXG5jb25zdCB3YWdtaUNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiB3M21Db25uZWN0b3JzKHsgcHJvamVjdElkLCBjaGFpbnMgfSksXG4gIHB1YmxpY0NsaWVudCxcbn0pXG5cbi8vIENyZWF0ZSBFdGhlcmV1bUNsaWVudCBmb3IgV2ViM01vZGFsXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNvbmZpZywgY2hhaW5zKVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIldhZ21pQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ29uZmlnIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwianNvblJwY1Byb3ZpZGVyIiwiRXRoZXJldW1DbGllbnQiLCJ3M21Db25uZWN0b3JzIiwiV2ViM01vZGFsIiwiY2hhaW5zIiwicHJvamVjdElkIiwicHVibGljQ2xpZW50IiwicnBjIiwiY2hhaW4iLCJpZCIsImh0dHAiLCJ3YWdtaUNvbmZpZyIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsImV0aGVyZXVtQ2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@wagmi/core/providers/jsonRpc":
/*!************************************************!*\
  !*** external "@wagmi/core/providers/jsonRpc" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/providers/jsonRpc");;

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();