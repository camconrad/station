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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/jsonRpc */ \"@wagmi/core/providers/jsonRpc\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__, _web3modal_react__WEBPACK_IMPORTED_MODULE_6__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__, _web3modal_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum\n];\nconst projectId = \"02a231b2406ed316c861abefc95c5e59\";\nconst { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)(chains, [\n    (0,_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            switch(chain.id){\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet.id:\n                    return {\n                        http: \"https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID\"\n                    } // Replace with a valid project ID\n                    ;\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon.id:\n                    return {\n                        http: \"https://polygon-rpc.com\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism.id:\n                    return {\n                        http: \"https://mainnet.optimism.io\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum.id:\n                    return {\n                        http: \"https://arb1.arbitrum.io/rpc\"\n                    };\n                default:\n                    return null;\n            }\n        }\n    })\n]);\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__.w3mConnectors)({\n        projectId,\n        chains\n    }),\n    publicClient\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_5__.EthereumClient(wagmiConfig, chains);\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n        config: wagmiConfig,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_6__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVvQztBQUNDO0FBQ0o7QUFDSTtBQUN2QjtBQUU1QyxNQUFNVyxTQUFTO0lBQUNSLGlEQUFPQTtJQUFFQyxpREFBT0E7SUFBRUMsa0RBQVFBO0lBQUVDLGtEQUFRQTtDQUFDO0FBQ3JELE1BQU1NLFlBQVk7QUFFbEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR1osc0RBQWVBLENBQUNVLFFBQVE7SUFDL0NKLDhFQUFlQSxDQUFDO1FBQ2RPLEtBQUssQ0FBQ0M7WUFDSixPQUFRQSxNQUFNQyxFQUFFO2dCQUNkLEtBQUtiLGlEQUFPQSxDQUFDYSxFQUFFO29CQUNiLE9BQU87d0JBQUVDLE1BQU07b0JBQXNELEVBQUUsa0NBQWtDOztnQkFDM0csS0FBS2IsaURBQU9BLENBQUNZLEVBQUU7b0JBQ2IsT0FBTzt3QkFBRUMsTUFBTTtvQkFBMEI7Z0JBQzNDLEtBQUtaLGtEQUFRQSxDQUFDVyxFQUFFO29CQUNkLE9BQU87d0JBQUVDLE1BQU07b0JBQThCO2dCQUMvQyxLQUFLWCxrREFBUUEsQ0FBQ1UsRUFBRTtvQkFDZCxPQUFPO3dCQUFFQyxNQUFNO29CQUErQjtnQkFDaEQ7b0JBQ0UsT0FBTztZQUNYO1FBQ0Y7SUFDRjtDQUNEO0FBRUQsTUFBTUMsY0FBY2hCLG1EQUFZQSxDQUFDO0lBQy9CaUIsYUFBYTtJQUNiQyxZQUFZWCxrRUFBYUEsQ0FBQztRQUFFRztRQUFXRDtJQUFPO0lBQzlDRTtBQUNGO0FBRUEsTUFBTVEsaUJBQWlCLElBQUliLCtEQUFjQSxDQUFDVSxhQUFhUDtBQUV2RCxTQUFTVyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFLDhEQUFDeEIsOENBQVdBO1FBQUN5QixRQUFRUDs7MEJBQ25CLDhEQUFDSztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDZCx1REFBU0E7Z0JBQUNFLFdBQVdBO2dCQUFXUyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFHdkQ7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRpb25fZGFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBXYWdtaUNvbmZpZywgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDb25maWcgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IG1haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSB9IGZyb20gJ3dhZ21pL2NoYWlucydcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gJ0B3YWdtaS9jb3JlL3Byb3ZpZGVycy9qc29uUnBjJ1xuaW1wb3J0IHsgRXRoZXJldW1DbGllbnQsIHczbUNvbm5lY3RvcnMgfSBmcm9tICdAd2ViM21vZGFsL2V0aGVyZXVtJ1xuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcblxuY29uc3QgY2hhaW5zID0gW21haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bV1cbmNvbnN0IHByb2plY3RJZCA9ICcwMmEyMzFiMjQwNmVkMzE2Yzg2MWFiZWZjOTVjNWU1OSdcblxuY29uc3QgeyBwdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhjaGFpbnMsIFtcbiAganNvblJwY1Byb3ZpZGVyKHtcbiAgICBycGM6IChjaGFpbikgPT4ge1xuICAgICAgc3dpdGNoIChjaGFpbi5pZCkge1xuICAgICAgICBjYXNlIG1haW5uZXQuaWQ6XG4gICAgICAgICAgcmV0dXJuIHsgaHR0cDogJ2h0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvWU9VUl9JTkZVUkFfUFJPSkVDVF9JRCcgfSAvLyBSZXBsYWNlIHdpdGggYSB2YWxpZCBwcm9qZWN0IElEXG4gICAgICAgIGNhc2UgcG9seWdvbi5pZDpcbiAgICAgICAgICByZXR1cm4geyBodHRwOiAnaHR0cHM6Ly9wb2x5Z29uLXJwYy5jb20nIH1cbiAgICAgICAgY2FzZSBvcHRpbWlzbS5pZDpcbiAgICAgICAgICByZXR1cm4geyBodHRwOiAnaHR0cHM6Ly9tYWlubmV0Lm9wdGltaXNtLmlvJyB9XG4gICAgICAgIGNhc2UgYXJiaXRydW0uaWQ6XG4gICAgICAgICAgcmV0dXJuIHsgaHR0cDogJ2h0dHBzOi8vYXJiMS5hcmJpdHJ1bS5pby9ycGMnIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0sXG4gIH0pLFxuXSlcblxuY29uc3Qgd2FnbWlDb25maWcgPSBjcmVhdGVDb25maWcoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogdzNtQ29ubmVjdG9ycyh7IHByb2plY3RJZCwgY2hhaW5zIH0pLFxuICBwdWJsaWNDbGllbnQsXG59KVxuXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNvbmZpZywgY2hhaW5zKVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFdlYjNNb2RhbCBwcm9qZWN0SWQ9e3Byb2plY3RJZH0gZXRoZXJldW1DbGllbnQ9e2V0aGVyZXVtQ2xpZW50fSAvPlxuICAgIDwvV2FnbWlDb25maWc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJXYWdtaUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsIm1haW5uZXQiLCJwb2x5Z29uIiwib3B0aW1pc20iLCJhcmJpdHJ1bSIsImpzb25ScGNQcm92aWRlciIsIkV0aGVyZXVtQ2xpZW50IiwidzNtQ29ubmVjdG9ycyIsIldlYjNNb2RhbCIsImNoYWlucyIsInByb2plY3RJZCIsInB1YmxpY0NsaWVudCIsInJwYyIsImNoYWluIiwiaWQiLCJodHRwIiwid2FnbWlDb25maWciLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJldGhlcmV1bUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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