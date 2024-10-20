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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__, _web3modal_react__WEBPACK_IMPORTED_MODULE_5__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__, _web3modal_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n// Define the chains\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum\n];\nconst projectId = \"02a231b2406ed316c861abefc95c5e59\";\n// Configure chains and use custom Arbitrum RPC\nconst { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__.w3mProvider)({\n        projectId\n    }),\n    {\n        rpc: (chain)=>{\n            if (chain.id === wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum.id) {\n                return {\n                    http: \"https://arb1.arbitrum.io/rpc\"\n                };\n            }\n            return null;\n        }\n    }\n]);\n// Create Wagmi configuration\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__.w3mConnectors)({\n        projectId,\n        chains\n    }),\n    publicClient\n});\n// Create EthereumClient for Web3Modal\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_4__.EthereumClient(wagmiConfig, chains);\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                config: wagmiConfig,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_5__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRW9DO0FBQ0M7QUFDYTtBQUNwQztBQUU1QyxvQkFBb0I7QUFDcEIsTUFBTVcsU0FBUztJQUFDUixpREFBT0E7SUFBRUMsaURBQU9BO0lBQUVDLGtEQUFRQTtJQUFFQyxrREFBUUE7Q0FBQztBQUNyRCxNQUFNTSxZQUFZO0FBRWxCLCtDQUErQztBQUMvQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHWixzREFBZUEsQ0FBQ1UsUUFBUTtJQUMvQ0YsZ0VBQVdBLENBQUM7UUFBRUc7SUFBVTtJQUN4QjtRQUNFRSxLQUFLLENBQUNDO1lBQ0osSUFBSUEsTUFBTUMsRUFBRSxLQUFLVixrREFBUUEsQ0FBQ1UsRUFBRSxFQUFFO2dCQUM1QixPQUFPO29CQUFFQyxNQUFNO2dCQUErQjtZQUNoRDtZQUNBLE9BQU87UUFDVDtJQUNGO0NBQ0Q7QUFFRCw2QkFBNkI7QUFDN0IsTUFBTUMsY0FBY2hCLG1EQUFZQSxDQUFDO0lBQy9CaUIsYUFBYTtJQUNiQyxZQUFZWixrRUFBYUEsQ0FBQztRQUFFSTtRQUFXRDtJQUFPO0lBQzlDRTtBQUNGO0FBRUEsc0NBQXNDO0FBQ3RDLE1BQU1RLGlCQUFpQixJQUFJZCwrREFBY0EsQ0FBQ1csYUFBYVA7QUFFdkQsU0FBU1csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFDRTs7MEJBQ0UsOERBQUN4Qiw4Q0FBV0E7Z0JBQUN5QixRQUFRUDswQkFDbkIsNEVBQUNLO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ2QsdURBQVNBO2dCQUFDRSxXQUFXQTtnQkFBV1MsZ0JBQWdCQTs7Ozs7Ozs7QUFHdkQ7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRpb25fZGFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBXYWdtaUNvbmZpZywgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDb25maWcgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IG1haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSB9IGZyb20gJ3dhZ21pL2NoYWlucydcbmltcG9ydCB7IEV0aGVyZXVtQ2xpZW50LCB3M21Db25uZWN0b3JzLCB3M21Qcm92aWRlciB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJldW0nXG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3JlYWN0J1xuXG4vLyBEZWZpbmUgdGhlIGNoYWluc1xuY29uc3QgY2hhaW5zID0gW21haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bV1cbmNvbnN0IHByb2plY3RJZCA9ICcwMmEyMzFiMjQwNmVkMzE2Yzg2MWFiZWZjOTVjNWU1OSdcblxuLy8gQ29uZmlndXJlIGNoYWlucyBhbmQgdXNlIGN1c3RvbSBBcmJpdHJ1bSBSUENcbmNvbnN0IHsgcHVibGljQ2xpZW50IH0gPSBjb25maWd1cmVDaGFpbnMoY2hhaW5zLCBbXG4gIHczbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pLFxuICB7XG4gICAgcnBjOiAoY2hhaW4pID0+IHtcbiAgICAgIGlmIChjaGFpbi5pZCA9PT0gYXJiaXRydW0uaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaHR0cDogJ2h0dHBzOi8vYXJiMS5hcmJpdHJ1bS5pby9ycGMnIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfSxcbl0pXG5cbi8vIENyZWF0ZSBXYWdtaSBjb25maWd1cmF0aW9uXG5jb25zdCB3YWdtaUNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiB3M21Db25uZWN0b3JzKHsgcHJvamVjdElkLCBjaGFpbnMgfSksXG4gIHB1YmxpY0NsaWVudCxcbn0pXG5cbi8vIENyZWF0ZSBFdGhlcmV1bUNsaWVudCBmb3IgV2ViM01vZGFsXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNvbmZpZywgY2hhaW5zKVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIldhZ21pQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ29uZmlnIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiRXRoZXJldW1DbGllbnQiLCJ3M21Db25uZWN0b3JzIiwidzNtUHJvdmlkZXIiLCJXZWIzTW9kYWwiLCJjaGFpbnMiLCJwcm9qZWN0SWQiLCJwdWJsaWNDbGllbnQiLCJycGMiLCJjaGFpbiIsImlkIiwiaHR0cCIsIndhZ21pQ29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiZXRoZXJldW1DbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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