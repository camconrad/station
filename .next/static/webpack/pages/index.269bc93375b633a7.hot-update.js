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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contractUtils */ \"./utils/contractUtils.ts\");\n/* harmony import */ var _components_FundModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FundModal */ \"./components/FundModal.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CONTRACT_ADDRESSES = {\n    ARBITRUM: \"0xc82480693692c443e4d4dc5fa5bC6496A4cac865\",\n    SKALE: \"0xf350c26f76cdbcef6c9a145040f31bfaa7074171\"\n};\nconst Header = (param)=>{\n    let { isWalletConnected, connectedAddress, onWalletConnect } = param;\n    _s();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useDisconnect)();\n    const [isFundModalOpen, setIsFundModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contractBalance, setContractBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentNetwork, setCurrentNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Debugging: Log the props for clarity\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Header props:\", {\n            isWalletConnected,\n            connectedAddress\n        });\n    }, [\n        isWalletConnected,\n        connectedAddress\n    ]);\n    const handleDisconnect = ()=>{\n        disconnect();\n        onWalletConnect(null, null);\n    };\n    const handleConnectWallet = async ()=>{\n        try {\n            const wallet = await (0,_utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__.connectWallet)();\n            if (wallet === null || wallet === void 0 ? void 0 : wallet.signer) {\n                const provider = wallet.signer.provider;\n                const network = await provider.getNetwork();\n                const networkName = network.chainId === 42161 ? \"ARBITRUM\" : \"SKALE\";\n                setCurrentNetwork(networkName);\n                const contract = (0,_utils_contractUtils__WEBPACK_IMPORTED_MODULE_2__.getStationContract)(wallet.signer, networkName);\n                if (!contract) {\n                    console.error(\"Failed to get contract instance\");\n                    return;\n                }\n                const rawBalance = await contract.getBalance();\n                const balance = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatUnits(rawBalance, 6);\n                setContractBalance(parseFloat(balance));\n                const address = await wallet.signer.getAddress();\n                onWalletConnect(address, networkName);\n            }\n        } catch (error) {\n            console.error(\"Error connecting wallet:\", error);\n        }\n    };\n    const handleFundSubmit = async (amount)=>{\n        try {\n            console.log(\"Funding \".concat(CONTRACT_ADDRESSES[currentNetwork || \"ARBITRUM\"], \" with \").concat(amount, \" USDC\"));\n            await handleConnectWallet();\n        } catch (error) {\n            console.error(\"Error during funding:\", error);\n        }\n    };\n    const contractAddress = CONTRACT_ADDRESSES[currentNetwork || \"ARBITRUM\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex items-center justify-between px-3 pt-4 pb-4 mx-auto md:px-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png\",\n                                alt: \"Station\",\n                                className: \"h-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"ml-2 text-xl font-bold\",\n                                children: \"Station\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsFundModalOpen(true),\n                                className: \"mr-3 text-right cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-[14px] text-[#959595]\",\n                                            children: \"Balance\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-regular mt-[-2px] text-[14px] text-[#030303]\",\n                                            children: [\n                                                contractBalance.toFixed(2),\n                                                \" USDC\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4 text-[14px]\",\n                                children: isWalletConnected && connectedAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center px-4 py-2 text-white transition-all bg-black border border-black rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg\",\n                                    onClick: handleDisconnect,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"truncate max-w-[120px]\",\n                                        children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.shortenAddress)(connectedAddress)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-white duration-200 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black px-4 py-[6px]\",\n                                    onClick: handleConnectWallet,\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FundModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isFundModalOpen,\n                onClose: ()=>setIsFundModalOpen(false),\n                onSubmit: handleFundSubmit,\n                contractAddress: contractAddress\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"HYuaS6R/zfIzrMwwPP8Qk9MpG/0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useDisconnect\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OzswQ0FLbEMsOERBQUNQO2dDQUFJRCxXQUFVOzBDQUNabkMscUJBQXFCQyxpQ0FDcEIsOERBQUNtQztvQ0FDQ0QsV0FBVTtvQ0FDVk8sU0FBUzlCOzhDQUVULDRFQUFDZ0M7d0NBQUtULFdBQVU7a0RBQTBCeEMsOERBQWNBLENBQUNNOzs7Ozs7Ozs7OzhEQUczRCw4REFBQ3dDO29DQUNDTixXQUFVO29DQUNWTyxTQUFTN0I7OENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9ULDhEQUFDbkIsNkRBQVNBO2dCQUNSbUQsUUFBUXpDO2dCQUNSMEMsU0FBUyxJQUFNekMsbUJBQW1CO2dCQUNsQzBDLFVBQVVoQjtnQkFDVkUsaUJBQWlCQTs7Ozs7Ozs7Ozs7O0FBSXpCO0dBM0dNbEM7O1FBQ21CVCxnREFBYUE7OztLQURoQ1M7QUE2R04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgY29ubmVjdFdhbGxldCwgZ2V0U3RhdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi4vdXRpbHMvY29udHJhY3RVdGlscydcbmltcG9ydCBGdW5kTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9GdW5kTW9kYWwnXG5pbXBvcnQgeyBzaG9ydGVuQWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnXG5pbXBvcnQgeyBGaUxvZ091dCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5jb25zdCBDT05UUkFDVF9BRERSRVNTRVMgPSB7XG4gIEFSQklUUlVNOiAnMHhjODI0ODA2OTM2OTJjNDQzZTRkNGRjNWZhNWJDNjQ5NkE0Y2FjODY1JyxcbiAgU0tBTEU6ICcweGYzNTBjMjZmNzZjZGJjZWY2YzlhMTQ1MDQwZjMxYmZhYTcwNzQxNzEnLFxufVxuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBpc1dhbGxldENvbm5lY3RlZDogYm9vbGVhblxuICBjb25uZWN0ZWRBZGRyZXNzOiBzdHJpbmcgfCBudWxsXG4gIG9uV2FsbGV0Q29ubmVjdDogKGFkZHJlc3M6IHN0cmluZyB8IG51bGwsIG5ldHdvcms6ICdBUkJJVFJVTScgfCAnU0tBTEUnIHwgbnVsbCkgPT4gdm9pZFxufVxuXG5jb25zdCBIZWFkZXIgPSAoeyBpc1dhbGxldENvbm5lY3RlZCwgY29ubmVjdGVkQWRkcmVzcywgb25XYWxsZXRDb25uZWN0IH06IEhlYWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGlzY29ubmVjdCB9ID0gdXNlRGlzY29ubmVjdCgpXG5cbiAgY29uc3QgW2lzRnVuZE1vZGFsT3Blbiwgc2V0SXNGdW5kTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29udHJhY3RCYWxhbmNlLCBzZXRDb250cmFjdEJhbGFuY2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbY3VycmVudE5ldHdvcmssIHNldEN1cnJlbnROZXR3b3JrXSA9IHVzZVN0YXRlPCdBUkJJVFJVTScgfCAnU0tBTEUnIHwgbnVsbD4obnVsbClcblxuICAvLyBEZWJ1Z2dpbmc6IExvZyB0aGUgcHJvcHMgZm9yIGNsYXJpdHlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSGVhZGVyIHByb3BzOicsIHsgaXNXYWxsZXRDb25uZWN0ZWQsIGNvbm5lY3RlZEFkZHJlc3MgfSlcbiAgfSwgW2lzV2FsbGV0Q29ubmVjdGVkLCBjb25uZWN0ZWRBZGRyZXNzXSlcblxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIGRpc2Nvbm5lY3QoKVxuICAgIG9uV2FsbGV0Q29ubmVjdChudWxsLCBudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgY29ubmVjdFdhbGxldCgpXG4gICAgICBpZiAod2FsbGV0Py5zaWduZXIpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB3YWxsZXQuc2lnbmVyLnByb3ZpZGVyIGFzIGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgY29uc3QgbmV0d29ya05hbWUgPSBuZXR3b3JrLmNoYWluSWQgPT09IDQyMTYxID8gJ0FSQklUUlVNJyA6ICdTS0FMRSdcblxuICAgICAgICBzZXRDdXJyZW50TmV0d29yayhuZXR3b3JrTmFtZSlcblxuICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldFN0YXRpb25Db250cmFjdCh3YWxsZXQuc2lnbmVyLCBuZXR3b3JrTmFtZSlcbiAgICAgICAgaWYgKCFjb250cmFjdCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgY29udHJhY3QgaW5zdGFuY2UnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmF3QmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0LmdldEJhbGFuY2UoKVxuICAgICAgICBjb25zdCBiYWxhbmNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHJhd0JhbGFuY2UsIDYpXG4gICAgICAgIHNldENvbnRyYWN0QmFsYW5jZShwYXJzZUZsb2F0KGJhbGFuY2UpKVxuXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCB3YWxsZXQuc2lnbmVyLmdldEFkZHJlc3MoKVxuICAgICAgICBvbldhbGxldENvbm5lY3QoYWRkcmVzcywgbmV0d29ya05hbWUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3Rpbmcgd2FsbGV0OicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZ1bmRTdWJtaXQgPSBhc3luYyAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coYEZ1bmRpbmcgJHtDT05UUkFDVF9BRERSRVNTRVNbY3VycmVudE5ldHdvcmsgfHwgJ0FSQklUUlVNJ119IHdpdGggJHthbW91bnR9IFVTRENgKVxuICAgICAgYXdhaXQgaGFuZGxlQ29ubmVjdFdhbGxldCgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBmdW5kaW5nOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IENPTlRSQUNUX0FERFJFU1NFU1tjdXJyZW50TmV0d29yayB8fCAnQVJCSVRSVU0nXVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC14LTAgdG9wLTAgei0xMCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIG14LWF1dG8gbWF4LXctWzgwMHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHQtNCBwYi00IG14LWF1dG8gbWQ6cHgtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS82NzE1OTdhN2RkNTZlMTlmZjQ5NGEwNzYvNjcxNTk4NTdlMDM0ZWJhNTY4YjQxNWFlX3N0YXRpb24ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlN0YXRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtbC0yIHRleHQteGwgZm9udC1ib2xkXCI+U3RhdGlvbjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRnVuZE1vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1yaWdodCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XSB0ZXh0LVsjOTU5NTk1XVwiPkJhbGFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXJlZ3VsYXIgbXQtWy0ycHhdIHRleHQtWzE0cHhdIHRleHQtWyMwMzAzMDNdXCI+XG4gICAgICAgICAgICAgICAge2NvbnRyYWN0QmFsYW5jZS50b0ZpeGVkKDIpfSBVU0RDXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCB0ZXh0LVsxNHB4XVwiPlxuICAgICAgICAgICAge2lzV2FsbGV0Q29ubmVjdGVkICYmIGNvbm5lY3RlZEFkZHJlc3MgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTgwMCBob3ZlcjpzaGFkb3ctbGdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBtYXgtdy1bMTIwcHhdXCI+e3Nob3J0ZW5BZGRyZXNzKGNvbm5lY3RlZEFkZHJlc3MpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGwgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFjayBweC00IHB5LVs2cHhdXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8RnVuZE1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNGdW5kTW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0Z1bmRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRnVuZFN1Ym1pdH1cbiAgICAgICAgY29udHJhY3RBZGRyZXNzPXtjb250cmFjdEFkZHJlc3N9XG4gICAgICAvPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGlzY29ubmVjdCIsImV0aGVycyIsImNvbm5lY3RXYWxsZXQiLCJnZXRTdGF0aW9uQ29udHJhY3QiLCJGdW5kTW9kYWwiLCJzaG9ydGVuQWRkcmVzcyIsIkNPTlRSQUNUX0FERFJFU1NFUyIsIkFSQklUUlVNIiwiU0tBTEUiLCJIZWFkZXIiLCJpc1dhbGxldENvbm5lY3RlZCIsImNvbm5lY3RlZEFkZHJlc3MiLCJvbldhbGxldENvbm5lY3QiLCJkaXNjb25uZWN0IiwiaXNGdW5kTW9kYWxPcGVuIiwic2V0SXNGdW5kTW9kYWxPcGVuIiwiY29udHJhY3RCYWxhbmNlIiwic2V0Q29udHJhY3RCYWxhbmNlIiwiY3VycmVudE5ldHdvcmsiLCJzZXRDdXJyZW50TmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEaXNjb25uZWN0IiwiaGFuZGxlQ29ubmVjdFdhbGxldCIsIndhbGxldCIsInNpZ25lciIsInByb3ZpZGVyIiwibmV0d29yayIsImdldE5ldHdvcmsiLCJuZXR3b3JrTmFtZSIsImNoYWluSWQiLCJjb250cmFjdCIsImVycm9yIiwicmF3QmFsYW5jZSIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInBhcnNlRmxvYXQiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsImhhbmRsZUZ1bmRTdWJtaXQiLCJhbW91bnQiLCJjb250cmFjdEFkZHJlc3MiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0b0ZpeGVkIiwic3BhbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});