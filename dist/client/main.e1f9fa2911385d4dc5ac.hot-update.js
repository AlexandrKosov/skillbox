webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\n//import {useToken} from './hooks/useToken';\r\n//import { userContext } from './shared/context/userContext';\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\nvar Post_1 = __importDefault(__webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\"));\r\n//import { nanoid } from 'nanoid';\r\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction NoMatch() {\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h1\", null, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\")));\r\n}\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    // useEffect(()=>{\r\n    //     const token = localStorage.getItem('token') || window.__token__;\r\n    //    // dispatchEvent(setToken(token));\r\n    //     if(token){\r\n    //         localStorage.setItem('token',token);\r\n    //     }\r\n    // },[])\r\n    react_1.useEffect(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n                react_1.default.createElement(Layout_1.default, null,\r\n                    react_1.default.createElement(Header_1.default, null),\r\n                    react_1.default.createElement(Content_1.default, null,\r\n                        react_1.default.createElement(CardsList_1.default, null),\r\n                        react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                            react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: \"/\", to: \"/posts\" }),\r\n                            react_1.default.createElement(react_router_dom_1.Redirect, { from: \"/auth\", to: \"/posts\" }),\r\n                            react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts\" },\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/:id\" },\r\n                                    react_1.default.createElement(Post_1.default, null))),\r\n                            react_1.default.createElement(react_router_dom_1.Route, { path: \"*\" },\r\n                                react_1.default.createElement(\"h1\", { style: { textAlign: 'center' } }, \"404 - \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\")))))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\n//чтобы срабатывало только в браузере(т.к. подключим SSR)\r\nwindow.addEventListener('load', function () {\r\n    //ReactDOM.render(<Header />, document.getElementById('react-root'));\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react-root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction CardsList() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];\r\n    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1]; //false т.к. изначально загрузки нет, нет токена\r\n    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1]; //\"курсор\" для курсорной пагинации \r\n    var bottomOfList = react_1.useRef(null);\r\n    var _e = react_1.useState(0), count = _e[0], setCount = _e[1]; //счетчик страниц\r\n    function load() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, after, children_1, error_1;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        setLoading(true);\r\n                        setErrorLoading('');\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/rising/', {\r\n                                //const response = await axios.get('https://oauth.reddit.com/rising/',{\r\n                                headers: { Authorization: \"bearer \" + token },\r\n                                params: {\r\n                                    limit: 10,\r\n                                    after: nextAfter,\r\n                                }\r\n                            })];\r\n                    case 2:\r\n                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\r\n                        setNextAfter(after);\r\n                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });\r\n                        setCount(function (prevCount) { return prevCount + 1; });\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _b.sent();\r\n                        //console.error(error);\r\n                        setErrorLoading(String(error_1));\r\n                        return [3 /*break*/, 4];\r\n                    case 4:\r\n                        setLoading(false);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    //IntersectionObserver\r\n    react_1.useEffect(function () {\r\n        //-----------------\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (count == 0 || entries[0].isIntersecting && count % 3) {\r\n                load();\r\n            }\r\n        }, {\r\n            rootMargin: '10px',\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token]);\r\n    // const [posts] = usePostsData();\r\n    // let items = posts.map((post:IPostObj)=>{\r\n    //     return <Card data={post.data} key={post.data.id}/>\r\n    // });\r\n    // return (\r\n    //     <ul className={styles.cardslist}>\r\n    //         {items}\r\n    //     </ul>\r\n    // );\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist },\r\n        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        posts.map(function (post) {\r\n            return react_1.default.createElement(Card_1.default, { data: post.data, key: post.data.id });\r\n        }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        count !== 0 && !(count % 3) && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n            react_1.default.createElement(\"button\", { onClick: load, style: { padding: '8px', border: '1px solid #666', background: '#CCC' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\"))),\r\n        loading && (count % 3) && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: 'center' } }, errorLoading))));\r\n}\r\nexports.default = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\r\nexports.default = CardsList_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\"));\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.default\r\n    // value={value} \r\n    // onChange={handleChange} \r\n    // onSubmit={handleSubmit}\r\n    , null));\r\n}\r\nexports.default = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentFormContainer_1 = __importDefault(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"));\r\nexports.default = CommentFormContainer_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/ResponseComment.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/ResponseComment.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar responsecomment_less_1 = __importDefault(__webpack_require__(/*! ./responsecomment.less */ \"./src/shared/CommentList/ResponseComment/responsecomment.less\"));\r\nfunction ResponseComment(props) {\r\n    var ref = react_1.useRef(null);\r\n    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        var _a;\r\n        event.preventDefault();\r\n        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);\r\n    }\r\n    react_1.useEffect(function () {\r\n        ref.current && ref.current.focus();\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseComment },\r\n        react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseCommentCaption },\r\n            react_1.default.createElement(\"img\", { className: responsecomment_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.name }, \"\\u0412\\u0430\\u0441\\u0438\\u043B\\u0438\\u0439 \\u0420\\u043E\\u0433\\u043E\\u0432\")),\r\n        react_1.default.createElement(\"form\", { className: responsecomment_less_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: responsecomment_less_1.default.input, value: value, onChange: handleChange, ref: ref }),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: responsecomment_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.default = ResponseComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/ResponseComment.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ResponseComment_1 = __importDefault(__webpack_require__(/*! ./ResponseComment */ \"./src/shared/CommentList/ResponseComment/ResponseComment.tsx\"));\r\nexports.default = ResponseComment_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\r\n;\r\nvar NOOP = function () { }; //чтобы onOpen и onClose срабатывали всегда, чтобы TS не выдавал ошибку в случае отсутствия этих функций\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    var _e = react_1.default.useState({ top: '0', left: '0' }), isDropdownCoord = _e[0], setIsDropdownCoord = _e[1];\r\n    var containerRef = react_1.default.useRef(null);\r\n    react_1.default.useEffect(function () {\r\n        var _a;\r\n        var head = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\r\n        var headBottom = head === null || head === void 0 ? void 0 : head.bottom;\r\n        var headRight = head === null || head === void 0 ? void 0 : head.right;\r\n        setIsDropdownCoord({ top: headBottom + 'px', left: headRight + 'px' });\r\n    }, [isDropdownOpen]);\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            // если isOpen не передается, хотим, чтобы список работал автоматически\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    var drop = react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null, isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.listContainer, style: isDropdownCoord },\r\n        react_1.default.createElement(\"div\", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))))), node);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.container, ref: containerRef },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && drop));\r\n}\r\nexports.default = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\r\nexports.default = Dropdown_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar userblock_less_1 = __importDefault(__webpack_require__(/*! ./userblock.less */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.less\"));\r\nvar Break_1 = __importDefault(__webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\"));\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=ULIpl3RaxojF1A&response_type=code&\\r\\n\\t\\tstate=random_string&redirect_uri=https://demo-redd-skillbox.herokuapp.com/auth&duration=permanent&scope=read submit identity\", className: userblock_less_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_less_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.AnonIcon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.username },\r\n            react_1.default.createElement(Break_1.default, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.default, { size: 20, color: Text_1.EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430\")) : (react_1.default.createElement(Text_1.default, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.default = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"));\r\nexports.default = UserBlock_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ })

})