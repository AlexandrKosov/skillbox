webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar HooksExample_1 = __webpack_require__(/*! ./HooksExample */ \"./src/HooksExample.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./utils/react/generateRandomIndex.ts\");\r\n//import { nanoid } from 'nanoid';\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\n/* выносится ВНЕ AppComponent, чтобы не перегенерировалась каждый раз */\r\nvar LIST = [\r\n    { text: 'some' },\r\n    { text: 'other some' },\r\n    { text: 'one more some' },\r\n    { text: 'not some' },\r\n    { text: 'other not some' }\r\n    //].map((item: {value: string})=>({...item, id: generateRandomString()}));\r\n    //].map(assignId);\r\n].map(generateRandomIndex_1.generateId);\r\n//].map((item:{value:string})=> ({...item, id:nanoid()}));\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    var _a = react_1.default.useState(''), title = _a[0], setTitle = _a[1];\r\n    var isVisible = HooksExample_1.useIsMounted()[0];\r\n    var _b = react_1.default.useState(LIST), list = _b[0], setList = _b[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        setList(list.concat(generateRandomIndex_1.generateId({ text: generateRandomIndex_1.generateRandomString() })));\r\n    };\r\n    var token = useToken_1.useToken()[0];\r\n    return (react_1.default.createElement(Layout_1.default, null,\r\n        react_1.default.createElement(Header_1.default, { token: token }),\r\n        react_1.default.createElement(Content_1.default, null,\r\n            react_1.default.createElement(CardsList_1.default, null))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\n//чтобы срабатывало только в браузере(т.к. подключим SSR)\r\nwindow.addEventListener('load', function () {\r\n    //ReactDOM.render(<Header />, document.getElementById('react-root'));\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react-root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})