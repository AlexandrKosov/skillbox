webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar SearchBlock_less_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.less */ \"./src/shared/Header/SearchBlock/SearchBlock.less\"));\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock(_a) {\r\n    var token = _a.token;\r\n    var data = useUserData_1.useUserData(token).data;\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_less_1.default.searchBlock },\r\n        \"Search block\",\r\n        react_1.default.createElement(UserBlock_1.default, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.default = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SearchBlock_1 = __importDefault(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"));\r\nexports.default = SearchBlock_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ })

})