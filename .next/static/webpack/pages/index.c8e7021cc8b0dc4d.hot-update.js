"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contractUtils */ \"./utils/contractUtils.ts\");\n/* harmony import */ var _components_common_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Popover */ \"./components/common/Popover/index.tsx\");\n/* harmony import */ var _components_FundModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FundModal */ \"./components/FundModal.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n/* harmony import */ var _barrel_optimize_names_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FiLogOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiLogOut!=!./node_modules/react-icons/fi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { onConnect, isWalletConnected, connectedAddress } = param;\n    _s();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect)();\n    const [isFundModalOpen, setIsFundModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contractBalance, setContractBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentNetwork, setCurrentNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [contractAddress, setContractAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDisconnect = ()=>{\n        disconnect();\n    };\n    const fetchContractDetails = async ()=>{\n        try {\n            const wallet = await (0,_utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__.connectWallet)();\n            if (wallet === null || wallet === void 0 ? void 0 : wallet.signer) {\n                const provider = wallet.signer.provider;\n                const network = await provider.getNetwork();\n                const networkName = network.chainId === 42161 ? \"ARBITRUM\" : \"SKALE\";\n                setCurrentNetwork(networkName);\n                const contract = (0,_utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__.getStationContract)(wallet.signer, networkName);\n                if (!contract) {\n                    console.error(\"Failed to get contract instance\");\n                    return;\n                }\n                setContractAddress(contract.address);\n                const rawBalance = await contract.getBalance() // Assuming a `getBalance` function exists in the Station contract\n                ;\n                const balance = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatUnits(rawBalance, 6) // USDC has 6 decimals\n                ;\n                setContractBalance(parseFloat(balance));\n            }\n        } catch (error) {\n            console.error(\"Error fetching contract details:\", error);\n        }\n    };\n    const handleFundSubmit = async (amount)=>{\n        try {\n            console.log(\"Funding \".concat(contractAddress, \" with \").concat(amount, \" USDC\"));\n            fetchContractDetails() // Refresh balance after funding\n            ;\n        } catch (error) {\n            console.error(\"Error during funding:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex items-center justify-between px-3 pt-4 pb-4 mx-auto md:px-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png\",\n                                alt: \"Station\",\n                                className: \"h-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"ml-2 text-xl font-bold\",\n                                children: \"Station\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsFundModalOpen(true),\n                                className: \"mr-3 text-right cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-[14px] text-[#959595]\",\n                                            children: \"Balance\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-regular mt-[-2px] text-[14px] text-[#030303]\",\n                                            children: [\n                                                contractBalance.toFixed(2),\n                                                \" USDC\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4 text-[14px]\",\n                                children: isWalletConnected && connectedAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Popover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    placement: \"bottom-right\",\n                                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2 text-red-500 cursor-pointer hover:text-red-600\",\n                                        onClick: handleDisconnect,\n                                        children: [\n                                            \"Disconnect \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiLogOut, {}, void 0, false, {\n                                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 32\n                                            }, void 0)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center px-4 py-2 text-white transition-all bg-black border border-black rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"truncate max-w-[120px]\",\n                                            children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_5__.shortenAddress)(connectedAddress)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-white duration-200 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black px-4 py-[6px]\",\n                                    onClick: async ()=>{\n                                        await fetchContractDetails();\n                                        onConnect();\n                                    },\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FundModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isFundModalOpen,\n                onClose: ()=>setIsFundModalOpen(false),\n                onSubmit: handleFundSubmit,\n                contractAddress: contractAddress\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"/3iUv6AxWmRkaaeUYsRv0ZHUD2Q=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO2tEQUNiLDRFQUFDVzs0Q0FBS1gsV0FBVTtzREFBMEJ0Qyw4REFBY0EsQ0FBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs4REFJN0QsOERBQUN1QztvQ0FDQ04sV0FBVTtvQ0FDVk8sU0FBUzt3Q0FDUCxNQUFNN0I7d0NBQ05iO29DQUNGOzhDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTVCw4REFBQ0osNkRBQVNBO2dCQUNSbUQsUUFBUTNDO2dCQUNSNEMsU0FBUyxJQUFNM0MsbUJBQW1CO2dCQUNsQzRDLFVBQVVsQjtnQkFDVnJCLGlCQUFpQkE7Ozs7Ozs7Ozs7OztBQUl6QjtHQWxITVg7O1FBQ21CUixnREFBYUE7OztLQURoQ1E7QUFvSE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc2Nvbm5lY3QgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IGNvbm5lY3RXYWxsZXQsIGdldFN0YXRpb25Db250cmFjdCB9IGZyb20gJy4uL3V0aWxzL2NvbnRyYWN0VXRpbHMnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9Qb3BvdmVyJ1xuaW1wb3J0IEZ1bmRNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bmRNb2RhbCdcbmltcG9ydCB7IHNob3J0ZW5BZGRyZXNzIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycydcbmltcG9ydCB7IEZpTG9nT3V0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIG9uQ29ubmVjdDogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICBpc1dhbGxldENvbm5lY3RlZDogYm9vbGVhblxuICBjb25uZWN0ZWRBZGRyZXNzOiBzdHJpbmcgfCBudWxsXG59XG5cbmNvbnN0IEhlYWRlciA9ICh7IG9uQ29ubmVjdCwgaXNXYWxsZXRDb25uZWN0ZWQsIGNvbm5lY3RlZEFkZHJlc3MgfTogSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBkaXNjb25uZWN0IH0gPSB1c2VEaXNjb25uZWN0KClcblxuICBjb25zdCBbaXNGdW5kTW9kYWxPcGVuLCBzZXRJc0Z1bmRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb250cmFjdEJhbGFuY2UsIHNldENvbnRyYWN0QmFsYW5jZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFtjdXJyZW50TmV0d29yaywgc2V0Q3VycmVudE5ldHdvcmtdID0gdXNlU3RhdGU8J0FSQklUUlVNJyB8ICdTS0FMRScgfCBudWxsPihudWxsKVxuICBjb25zdCBbY29udHJhY3RBZGRyZXNzLCBzZXRDb250cmFjdEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIGRpc2Nvbm5lY3QoKVxuICB9XG5cbiAgY29uc3QgZmV0Y2hDb250cmFjdERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IGNvbm5lY3RXYWxsZXQoKVxuICAgICAgaWYgKHdhbGxldD8uc2lnbmVyKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gd2FsbGV0LnNpZ25lci5wcm92aWRlciBhcyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlclxuICAgICAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICAgIGNvbnN0IG5ldHdvcmtOYW1lID0gbmV0d29yay5jaGFpbklkID09PSA0MjE2MSA/ICdBUkJJVFJVTScgOiAnU0tBTEUnXG5cbiAgICAgICAgc2V0Q3VycmVudE5ldHdvcmsobmV0d29ya05hbWUpXG5cbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRTdGF0aW9uQ29udHJhY3Qod2FsbGV0LnNpZ25lciwgbmV0d29ya05hbWUpXG4gICAgICAgIGlmICghY29udHJhY3QpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IGNvbnRyYWN0IGluc3RhbmNlJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHNldENvbnRyYWN0QWRkcmVzcyhjb250cmFjdC5hZGRyZXNzKVxuXG4gICAgICAgIGNvbnN0IHJhd0JhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5nZXRCYWxhbmNlKCkgLy8gQXNzdW1pbmcgYSBgZ2V0QmFsYW5jZWAgZnVuY3Rpb24gZXhpc3RzIGluIHRoZSBTdGF0aW9uIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMocmF3QmFsYW5jZSwgNikgLy8gVVNEQyBoYXMgNiBkZWNpbWFsc1xuICAgICAgICBzZXRDb250cmFjdEJhbGFuY2UocGFyc2VGbG9hdChiYWxhbmNlKSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29udHJhY3QgZGV0YWlsczonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGdW5kU3VibWl0ID0gYXN5bmMgKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKGBGdW5kaW5nICR7Y29udHJhY3RBZGRyZXNzfSB3aXRoICR7YW1vdW50fSBVU0RDYClcbiAgICAgIGZldGNoQ29udHJhY3REZXRhaWxzKCkgLy8gUmVmcmVzaCBiYWxhbmNlIGFmdGVyIGZ1bmRpbmdcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGZ1bmRpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCB0b3AtMCB6LTEwIGJnLXdoaXRlIGRhcms6YmctYmxhY2sgbXgtYXV0byBtYXgtdy1bODAwcHhdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC00IHBiLTQgbXgtYXV0byBtZDpweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5wcm9kLndlYnNpdGUtZmlsZXMuY29tLzY3MTU5N2E3ZGQ1NmUxOWZmNDk0YTA3Ni82NzE1OTg1N2UwMzRlYmE1NjhiNDE1YWVfc3RhdGlvbi5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU3RhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14bCBmb250LWJvbGRcIj5TdGF0aW9uPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgey8qIEJhbGFuY2UgTGluayAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0Z1bmRNb2RhbE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIHRleHQtcmlnaHQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gdGV4dC1bIzk1OTU5NV1cIj5CYWxhbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1yZWd1bGFyIG10LVstMnB4XSB0ZXh0LVsxNHB4XSB0ZXh0LVsjMDMwMzAzXVwiPlxuICAgICAgICAgICAgICAgIHtjb250cmFjdEJhbGFuY2UudG9GaXhlZCgyKX0gVVNEQ1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgdGV4dC1bMTRweF1cIj5cbiAgICAgICAgICAgIHtpc1dhbGxldENvbm5lY3RlZCAmJiBjb25uZWN0ZWRBZGRyZXNzID8gKFxuICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbS1yaWdodFwiXG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtcmVkLTUwMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXJlZC02MDBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEaXNjb25uZWN0fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEaXNjb25uZWN0IDxGaUxvZ091dCAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTgwMCBob3ZlcjpzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LVsxMjBweF1cIj57c2hvcnRlbkFkZHJlc3MoY29ubmVjdGVkQWRkcmVzcyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGwgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFjayBweC00IHB5LVs2cHhdXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaENvbnRyYWN0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgICBvbkNvbm5lY3QoKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZ1bmQgTW9kYWwgKi99XG4gICAgICA8RnVuZE1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNGdW5kTW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0Z1bmRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRnVuZFN1Ym1pdH1cbiAgICAgICAgY29udHJhY3RBZGRyZXNzPXtjb250cmFjdEFkZHJlc3N9XG4gICAgICAvPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRGlzY29ubmVjdCIsImV0aGVycyIsImNvbm5lY3RXYWxsZXQiLCJnZXRTdGF0aW9uQ29udHJhY3QiLCJQb3BvdmVyIiwiRnVuZE1vZGFsIiwic2hvcnRlbkFkZHJlc3MiLCJGaUxvZ091dCIsIkhlYWRlciIsIm9uQ29ubmVjdCIsImlzV2FsbGV0Q29ubmVjdGVkIiwiY29ubmVjdGVkQWRkcmVzcyIsImRpc2Nvbm5lY3QiLCJpc0Z1bmRNb2RhbE9wZW4iLCJzZXRJc0Z1bmRNb2RhbE9wZW4iLCJjb250cmFjdEJhbGFuY2UiLCJzZXRDb250cmFjdEJhbGFuY2UiLCJjdXJyZW50TmV0d29yayIsInNldEN1cnJlbnROZXR3b3JrIiwiY29udHJhY3RBZGRyZXNzIiwic2V0Q29udHJhY3RBZGRyZXNzIiwiaGFuZGxlRGlzY29ubmVjdCIsImZldGNoQ29udHJhY3REZXRhaWxzIiwid2FsbGV0Iiwic2lnbmVyIiwicHJvdmlkZXIiLCJuZXR3b3JrIiwiZ2V0TmV0d29yayIsIm5ldHdvcmtOYW1lIiwiY2hhaW5JZCIsImNvbnRyYWN0IiwiY29uc29sZSIsImVycm9yIiwiYWRkcmVzcyIsInJhd0JhbGFuY2UiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJwYXJzZUZsb2F0IiwiaGFuZGxlRnVuZFN1Ym1pdCIsImFtb3VudCIsImxvZyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInRvRml4ZWQiLCJwbGFjZW1lbnQiLCJjb250ZW50Iiwic3BhbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});