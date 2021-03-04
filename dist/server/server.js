/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = exports.saveToken = exports.setToken = void 0;
var actions_1 = __webpack_require__(5);
var reducer_1 = __webpack_require__(20);
var initialState = {
    commentText: 'Усем превед!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
};
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var SET_TOKEN = 'SET_TOKEN';
var setToken = function (token) { return ({
    type: SET_TOKEN,
    token: token
}); };
exports.setToken = setToken;
/***************************************************************/
var saveToken = function () { return function (dispatch, getState) {
    if (localStorage.getItem('reddit-token') || window.__token__ && window.__token__ !== 'undefined') {
        var token = localStorage.getItem('reddit-token') || window.__token__;
        dispatch(exports.setToken(window.__token__));
        if (token) {
            localStorage.setItem('reddit-token', token);
        }
    }
}; };
exports.saveToken = saveToken;
/***************************************************************/
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text
}); };
exports.updateComment = updateComment;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case SET_TOKEN:
            return __assign(__assign({}, state), { token: action.token });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch(exports.meRequest());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + getState().token }
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(exports.meRequestError(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EColor = void 0;
var Text_1 = __importStar(__webpack_require__(9));
Object.defineProperty(exports, "EColor", { enumerable: true, get: function () { return Text_1.EColor; } });
exports.default = Text_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_less_1 = __importDefault(__webpack_require__(35));
var classnames_1 = __importDefault(__webpack_require__(7));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["white"] = "white";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["greyF3"] = "greyF3";
    EColor["greyF4"] = "greyF4";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));
;
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(text_less_1.default["s" + size], (_a = {}, _a[text_less_1.default.bold] = bold, _a), (_b = {}, _b[text_less_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_less_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_less_1.default["d" + desktopSize]] = desktopSize, _d), text_less_1.default[color]);
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.default = Text;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(43);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData_1.useUserData().data;
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;
;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
var express_1 = __importDefault(__webpack_require__(14));
var server_1 = __importDefault(__webpack_require__(15));
var App_1 = __webpack_require__(16);
var indexTemplate_1 = __webpack_require__(104);
var axios_1 = __importDefault(__webpack_require__(3));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=https://demo-redd-skillbox.herokuapp.com/auth", {
        //auth: {username: process.env.CLIENT_ID, password: process.env.SECRET},
        auth: { username: "ULIpl3RaxojF1A", password: "E5U_3qVyoOX6ta942uH7lueZXiXtSQ" },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.get('*', function (req, res) {
    console.log("^^^", 'undefined', process.env.SECRET);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("Server started on https://demo-redd-skillbox.herokuapp.com:" + PORT);
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(17);
var Layout_1 = __importDefault(__webpack_require__(18));
__webpack_require__(22);
var Header_1 = __importDefault(__webpack_require__(23));
var Content_1 = __importDefault(__webpack_require__(50));
var CardsList_1 = __importDefault(__webpack_require__(53));
//import {useToken} from './hooks/useToken';
//import { userContext } from './shared/context/userContext';
var userContext_1 = __webpack_require__(10);
var postsContext_1 = __webpack_require__(81);
var redux_1 = __webpack_require__(83);
var react_redux_1 = __webpack_require__(1);
var redux_devtools_extension_1 = __webpack_require__(84);
var store_1 = __webpack_require__(4);
var redux_thunk_1 = __importDefault(__webpack_require__(85));
var react_router_dom_1 = __webpack_require__(6);
var Post_1 = __importDefault(__webpack_require__(86));
//import { nanoid } from 'nanoid';
var store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function NoMatch() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "404 \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")));
}
function AppComponent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    // useEffect(()=>{
    //     const token = localStorage.getItem('token') || window.__token__;
    //    // dispatchEvent(setToken(token));
    //     if(token){
    //         localStorage.setItem('token',token);
    //     }
    // },[])
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(userContext_1.UserContextProvider, null,
            react_1.default.createElement(postsContext_1.PostsContextProvider, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Layout_1.default, null,
                    react_1.default.createElement(Header_1.default, null),
                    react_1.default.createElement(Content_1.default, null,
                        react_1.default.createElement(CardsList_1.default, null),
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: "/", to: "/posts" }),
                            react_1.default.createElement(react_router_dom_1.Redirect, { from: "/auth", to: "/posts" }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/posts" },
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id" },
                                    react_1.default.createElement(Post_1.default, null))),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "*" },
                                react_1.default.createElement("h1", { style: { textAlign: 'center' } }, "404 - \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")))))))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(__webpack_require__(19));
exports.default = Layout_1.default;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var store_1 = __webpack_require__(4);
var Layout_less_1 = __importDefault(__webpack_require__(21));
function Layout(_a) {
    var children = _a.children;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(store_1.saveToken());
    }, []);
    return (react_1.default.createElement("div", { className: Layout_less_1.default.layout }, children));
}
exports.default = Layout;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(5);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"layout": "Layout__layout--Xwq0W"
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#modal_root {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n\tz-index: 1;\r\n}\r\n\r\n/*not work in IE!!!*/\r\n:root {\r\n    --black:    #333333;\r\n    --white:    #ffffff;\r\n    --orange:   #cc6633;\r\n    --green:    #a4cc33;\r\n\r\n    --whiteLightness: 100%;\r\n\r\n    --greyF3:   #f3f3f3;\r\n    --greyEC:   hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n    --greyF4:   #f4f4f4;\r\n    --greyD9:   #d9d9d9;\r\n    --greyC4:   #c4c4c4;\r\n    --grey99:   #999999;\r\n    --grey66:   #666666;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var(--greyF4);\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: 'Roboto', serif;\r\n}\r\n\r\n*{\r\n    color: var(--black);\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -mox-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Header_1 = __importDefault(__webpack_require__(24));
exports.default = Header_1.default;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var header_less_1 = __importDefault(__webpack_require__(25));
var SearchBlock_1 = __importDefault(__webpack_require__(26));
var SortBlock_1 = __importDefault(__webpack_require__(44));
var ThreadTitle_1 = __importDefault(__webpack_require__(47));
function Header() {
    return (react_1.default.createElement("header", { className: header_less_1.default.header },
        react_1.default.createElement(SearchBlock_1.default, null),
        react_1.default.createElement(ThreadTitle_1.default, null),
        react_1.default.createElement(SortBlock_1.default, null)));
}
exports.default = Header;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"header": "header__header--2XElO"
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SearchBlock_1 = __importDefault(__webpack_require__(27));
exports.default = SearchBlock_1.default;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var SearchBlock_less_1 = __importDefault(__webpack_require__(28));
var UserBlock_1 = __importDefault(__webpack_require__(29));
//import {useUserData} from '../../../hooks/useUserData';
var userContext_1 = __webpack_require__(10);
function SearchBlock() {
    //const userData = useContext(userContext)
    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name, loading = _a.loading;
    //const {data, loading} = useUserData();
    return (react_1.default.createElement("div", { className: SearchBlock_less_1.default.searchBlock },
        "Search block",
        react_1.default.createElement(UserBlock_1.default, { avatarSrc: iconImg, username: name, loading: loading })));
}
exports.default = SearchBlock;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"searchBlock": "SearchBlock__searchBlock--a9kwC"
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserBlock_1 = __importDefault(__webpack_require__(30));
exports.default = UserBlock_1.default;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var userblock_less_1 = __importDefault(__webpack_require__(31));
var Break_1 = __importDefault(__webpack_require__(32));
var Text_1 = __importStar(__webpack_require__(8));
var Icons_1 = __webpack_require__(2);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=ULIpl3RaxojF1A&response_type=code&\r\n\t\tstate=random_string&redirect_uri=https://demo-redd-skillbox.herokuapp.com/auth&duration=permanent&scope=read submit identity", className: userblock_less_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_less_1.default.avatarBox }, avatarSrc ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_less_1.default.avatarImage })
            : react_1.default.createElement(Icons_1.AnonIcon, null)),
        react_1.default.createElement("div", { className: userblock_less_1.default.username },
            react_1.default.createElement(Break_1.default, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.default, { size: 20, color: Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430")) : (react_1.default.createElement(Text_1.default, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));
}
exports.default = UserBlock;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"userBox": "userblock__userBox--3lzeE",
	"avatarBox": "userblock__avatarBox--2P0zS",
	"avatarImage": "userblock__avatarImage--1ygtq",
	"username": "userblock__username--3VTRM"
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Break_1 = __importDefault(__webpack_require__(33));
exports.default = Break_1.default;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var break_less_1 = __importDefault(__webpack_require__(34));
var classnames_1 = __importDefault(__webpack_require__(7));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    return (react_1.default.createElement("div", { className: classnames_1.default(break_less_1.default["s" + size], (_a = {}, _a[break_less_1.default["mobile_s" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_less_1.default["tablet_s" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_less_1.default["desktop_s" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_less_1.default.inline] = inline, _d), (_e = {}, _e[break_less_1.default.top] = top, _e)) }));
}
exports.default = Break;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"tops4": "break__tops4--2FKJy",
	"s8": "break__s8--Krl3R",
	"s12": "break__s12--31EB0",
	"s16": "break__s16--1wz9n",
	"s20": "break__s20--2uysh",
	"inline": "break__inline--2mBIi",
	"s4": "break__s4--19fvJ"
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"s28": "text__s28--Qg_Nm",
	"s20": "text__s20--3YU16",
	"s16": "text__s16--mAbkY",
	"s14": "text__s14--3oN4_",
	"s12": "text__s12--1hNk6",
	"s10": "text__s10--3yb5Z",
	"bold": "text__bold--3ZlfO",
	"black": "text__black--2AUHY",
	"orange": "text__orange--1gP3u",
	"white": "text__white--BnG2A",
	"green": "text__green--393Qk",
	"greyF3": "text__greyF3--dXSIX",
	"greyF4": "text__greyF4--xcLDX",
	"greyD9": "text__greyD9--3WeuY",
	"greyC4": "text__greyC4--3mNAn",
	"grey99": "text__grey99--29tsV",
	"grey66": "text__grey66--1bRj7",
	"m28": "text__m28--12H5Z",
	"m20": "text__m20--3KoLV",
	"m16": "text__m16--3PBnP",
	"m14": "text__m14--1m0_h",
	"m12": "text__m12--21t5n",
	"m10": "text__m10--2ob58",
	"t28": "text__t28--3JnVT",
	"t20": "text__t20--yyZIc",
	"t16": "text__t16--qRAxI",
	"t14": "text__t14--1aXiP",
	"t12": "text__t12--10kxH",
	"t10": "text__t10--asRZQ",
	"d28": "text__d28--2kcEE",
	"d20": "text__d20--3fMx4",
	"d16": "text__d16--2xRti",
	"d14": "text__d14--owb8e",
	"d12": "text__d12--3xOtO",
	"d10": "text__d10--2oiWo"
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function BlockIcon() {
    return (react_1.default.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function WarningIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SaveIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ShareIcon() {
    return (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CommentIcon() {
    return (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function AnonIcon() {
    return (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.AnonIcon = AnonIcon;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(5);
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.me.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!token)
            return;
        dispatch(actions_1.meRequestAsync());
    }, [token]);
    return {
        data: data,
        loading: loading,
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SortBlock_1 = __importDefault(__webpack_require__(45));
exports.default = SortBlock_1.default;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_less_1 = __importDefault(__webpack_require__(46));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_less_1.default.sortblock }, "SortBlock dropdown"));
}
exports.default = SortBlock;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"sortblock": "sortblock__sortblock--3BMEt"
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThreadTitle_1 = __importDefault(__webpack_require__(48));
exports.default = ThreadTitle_1.default;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_less_1 = __importDefault(__webpack_require__(49));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_less_1.default.threadTitle }, "Header"));
}
exports.default = ThreadTitle;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"threadTitle": "threadtitle__threadTitle--1nfVh"
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = __importDefault(__webpack_require__(51));
exports.default = Content_1.default;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var content_less_1 = __importDefault(__webpack_require__(52));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_less_1.default.content }, children));
}
exports.default = Content;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"content": "content__content--2Zn57"
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardsList_1 = __importDefault(__webpack_require__(54));
exports.default = CardsList_1.default;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var cardslist_less_1 = __importDefault(__webpack_require__(55));
var Card_1 = __importDefault(__webpack_require__(56));
var axios_1 = __importDefault(__webpack_require__(3));
var react_redux_1 = __webpack_require__(1);
function CardsList() {
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1]; //false т.к. изначально загрузки нет, нет токена
    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1]; //"курсор" для курсорной пагинации 
    var bottomOfList = react_1.useRef(null);
    var _e = react_1.useState(0), count = _e[0], setCount = _e[1]; //счетчик страниц
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, after, children_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        setErrorLoading('');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/rising/', {
                                //const response = await axios.get('https://oauth.reddit.com/rising/',{
                                headers: { Authorization: "bearer " + token },
                                params: {
                                    limit: 10,
                                    after: nextAfter,
                                }
                            })];
                    case 2:
                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                        setNextAfter(after);
                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                        setCount(function (prevCount) { return prevCount + 1; });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        //console.error(error);
                        setErrorLoading(String(error_1));
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    //IntersectionObserver
    react_1.useEffect(function () {
        //-----------------
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                if (count == 0 || count % 3) {
                    setCount(count + 1);
                    load();
                }
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, token]);
    // const [posts] = usePostsData();
    // let items = posts.map((post:IPostObj)=>{
    //     return <Card data={post.data} key={post.data.id}/>
    // });
    // return (
    //     <ul className={styles.cardslist}>
    //         {items}
    //     </ul>
    // );
    return (react_1.default.createElement("ul", { className: cardslist_less_1.default.cardslist },
        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        posts.map(function (post) {
            return react_1.default.createElement(Card_1.default, { data: post.data, key: post.data.id });
        }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        count !== 0 && (count % 3 == 0) && (react_1.default.createElement("div", { style: { textAlign: 'center' } },
            react_1.default.createElement("button", { onClick: load, style: { padding: '8px', border: '1px solid #666', background: '#CCC' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"))),
        loading && (count % 3) && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading))));
}
exports.default = CardsList;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"cardslist": "cardslist__cardslist--mdxkl"
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(__webpack_require__(57));
exports.default = Card_1.default;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var card_less_1 = __importDefault(__webpack_require__(58));
var CardCaption_1 = __importDefault(__webpack_require__(59));
var CardControls_1 = __importDefault(__webpack_require__(62));
var CardImage_1 = __importDefault(__webpack_require__(65));
var Menu_1 = __importDefault(__webpack_require__(68));
// interface LooseObject {
//     [key: string]: any
// }
function Card(props) {
    return (react_1.default.createElement("li", { className: card_less_1.default.card },
        react_1.default.createElement(CardCaption_1.default, { data: props.data }),
        react_1.default.createElement(CardImage_1.default, { data: props.data }),
        react_1.default.createElement(Menu_1.default, null),
        react_1.default.createElement(CardControls_1.default, { data: props.data })));
}
exports.default = Card;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"card": "card__card--3x2Yf",
	"textContent": "card__textContent--1c236",
	"userLink": "card__userLink--2TG_m"
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardCaption_1 = __importDefault(__webpack_require__(60));
exports.default = CardCaption_1.default;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(6);
var cardcaption_less_1 = __importDefault(__webpack_require__(61));
function CardCaption(_a) {
    var data = _a.data;
    var date = new Date(parseInt(data.created_utc + '000'));
    var options = {
        //era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        //weekday: 'long',
        timezone: 'UTC+04:00',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    var realDate = date.toLocaleString("ru", options);
    //const [isModalOpened, setIsModalOpened] = useState(false);   
    return (react_1.default.createElement("div", { className: cardcaption_less_1.default.cardcaption },
        react_1.default.createElement("div", { className: cardcaption_less_1.default.metaData },
            react_1.default.createElement("div", { className: cardcaption_less_1.default.userLink },
                react_1.default.createElement("img", { className: cardcaption_less_1.default.avatar, src: "https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794", alt: "avatar" }),
                react_1.default.createElement("a", { href: "#user-url", className: cardcaption_less_1.default.username }, data.author)),
            react_1.default.createElement("span", { className: cardcaption_less_1.default.createdAt },
                react_1.default.createElement("span", { className: cardcaption_less_1.default.publishedLabel }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                realDate)),
        react_1.default.createElement("h2", { className: cardcaption_less_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/" + data.id, className: cardcaption_less_1.default.postLink }, data.title))));
}
exports.default = CardCaption;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"cardcaption": "cardcaption__cardcaption--3TmXa",
	"avatar": "cardcaption__avatar--20GWj",
	"metaData": "cardcaption__metaData--39-8Y",
	"userLink": "cardcaption__userLink--1WoXU",
	"username": "cardcaption__username--1zmJk",
	"createdAt": "cardcaption__createdAt--2iaNA",
	"publishedLabel": "cardcaption__publishedLabel--1BBv0",
	"title": "cardcaption__title--2ecxJ",
	"postLink": "cardcaption__postLink--W_By-"
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardControls_1 = __importDefault(__webpack_require__(63));
exports.default = CardControls_1.default;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var cardcontrols_less_1 = __importDefault(__webpack_require__(64));
function CardControls(_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", { className: cardcontrols_less_1.default.controls },
        react_1.default.createElement("div", { className: cardcontrols_less_1.default.karmaCounter },
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.up },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
            react_1.default.createElement("span", { className: cardcontrols_less_1.default.karmaValue }, "234"),
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.down },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))),
        react_1.default.createElement("button", { className: cardcontrols_less_1.default.commentsButton },
            react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
            react_1.default.createElement("span", { className: cardcontrols_less_1.default.commentsNumber }, data.num_comments)),
        react_1.default.createElement("div", { className: cardcontrols_less_1.default.actions },
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.shareButton },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.saveButton },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))))));
}
exports.default = CardControls;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"controls": "cardcontrols__controls--3p2Ic",
	"actions": "cardcontrols__actions--QEQET",
	"shareButton": "cardcontrols__shareButton--1bAVP",
	"saveButton": "cardcontrols__saveButton--39XBQ",
	"karmaCounter": "cardcontrols__karmaCounter--eYGNU",
	"karmaValue": "cardcontrols__karmaValue--2Rd3Z",
	"commentsButton": "cardcontrols__commentsButton--2Ao1e",
	"commentsNumber": "cardcontrols__commentsNumber--2Q38q",
	"up": "cardcontrols__up--1xCPH",
	"down": "cardcontrols__down--Yc2C8"
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardImage_1 = __importDefault(__webpack_require__(66));
exports.default = CardImage_1.default;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var cardimage_less_1 = __importDefault(__webpack_require__(67));
function CardImage(_a) {
    var data = _a.data;
    if (data.thumbnail !== 'default') {
        return (react_1.default.createElement("div", { className: cardimage_less_1.default.preview },
            react_1.default.createElement("img", { className: cardimage_less_1.default.previewImg, src: data.thumbnail })));
    }
    else
        return (react_1.default.createElement("div", { className: cardimage_less_1.default.preview },
            react_1.default.createElement("div", { className: cardimage_less_1.default.fakePreview })));
}
exports.default = CardImage;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"preview": "cardimage__preview--17ZvV",
	"previewImg": "cardimage__previewImg--1EqvD",
	"fakePreview": "cardimage__fakePreview--Ea3QI"
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = __importDefault(__webpack_require__(69));
exports.default = Menu_1.default;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var menu_less_1 = __importDefault(__webpack_require__(70));
var Dropdown_1 = __importDefault(__webpack_require__(71));
var generateRandomIndex_1 = __webpack_require__(74);
var Icons_1 = __webpack_require__(2);
var Text_1 = __importStar(__webpack_require__(9));
var MenuItemsList_1 = __importDefault(__webpack_require__(76));
var LIST = [
    { text: 'Скрыть', icon: 'block' },
    { text: 'Пожаловаться', icon: 'warning' },
    { text: 'Закрыть' }
    //].map((item: {value: string})=>({...item, id: generateRandomString()}));
    //].map(assignId);
].map(generateRandomIndex_1.generateId);
function CardMenu() {
    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];
    var _b = react_1.default.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var handleItemClick = function (id) {
        console.log("clicked", id);
    };
    var handleButtonClick = function () {
        //setMenuOpen(!menuOpen)
    };
    var button = (react_1.default.createElement("button", { className: menu_less_1.default.menuButton, onClick: handleButtonClick },
        react_1.default.createElement(Icons_1.MenuIcon, null)));
    return (react_1.default.createElement("div", { className: menu_less_1.default.menu },
        react_1.default.createElement(Dropdown_1.default, { onOpen: function () { return console.log('opened'); }, onClose: function () { return console.log('closed'); }, 
            // isOpen={menuOpen} 
            button: button },
            react_1.default.createElement("div", { className: menu_less_1.default.dropdown },
                react_1.default.createElement(MenuItemsList_1.default, { postId: '1234' }),
                react_1.default.createElement("button", { className: menu_less_1.default.closeButton },
                    react_1.default.createElement(Text_1.default, { As: "div", mobileSize: 12, size: 14, color: Text_1.EColor.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}
exports.default = CardMenu;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"menu": "menu__menu--1n12e",
	"menuButton": "menu__menuButton--2EYOj",
	"dropdown": "menu__dropdown--3-G8P",
	"closeButton": "menu__closeButton--38ptB"
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown_1 = __importDefault(__webpack_require__(72));
exports.default = Dropdown_1.default;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(11));
var dropdown_less_1 = __importDefault(__webpack_require__(73));
;
var NOOP = function () { }; //чтобы onOpen и onClose срабатывали всегда, чтобы TS не выдавал ошибку в случае отсутствия этих функций
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    var _e = react_1.default.useState({ top: '0', left: '0' }), isDropdownCoord = _e[0], setIsDropdownCoord = _e[1];
    var containerRef = react_1.default.useRef(null);
    react_1.default.useEffect(function () {
        var _a;
        var head = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var headBottom = head === null || head === void 0 ? void 0 : head.bottom;
        var headRight = head === null || head === void 0 ? void 0 : head.right;
        setIsDropdownCoord({ top: headBottom + 'px', left: headRight + 'px' });
    }, [isDropdownOpen]);
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            // если isOpen не передается, хотим, чтобы список работал автоматически
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    var drop = react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null, isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_less_1.default.listContainer, style: isDropdownCoord },
        react_1.default.createElement("div", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))))), node);
    return (react_1.default.createElement("div", { className: dropdown_less_1.default.container, ref: containerRef },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && drop));
}
exports.default = Dropdown;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "dropdown__container--2mwQP",
	"listContainer": "dropdown__listContainer--3l3i1",
	"list": "dropdown__list--2DXPG"
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(75);
//nanoid
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateRandomString = generateRandomString;
//export const assignId = assoc('id', generateRandomString());//generate... вызывается всего 1 раз когда мы вызываем модуль
//export const generateId = <O extends object>(obj: O) => assignId(obj); //вызывается каждый раз когда мы вызываем функцию
// export const assignId = <O extends object> (obj: O) => assoc('id',generateRandomString())(obj);
// export const generateId = <O extends object> (obj: O) => assignId;
var generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };
exports.generateId = generateId;
/* а лучше всего использовать nanoid */
// import { nanoid } from 'nanoid'
// export const nanoId = nanoid();


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItemsList_1 = __importDefault(__webpack_require__(77));
exports.default = MenuItemsList_1.default;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(2);
var Icon_1 = __importDefault(__webpack_require__(78));
var Text_1 = __importStar(__webpack_require__(8));
//import Text, {EColor} from '../../../../Text/Text';
var menuitemslist_less_1 = __importDefault(__webpack_require__(80));
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menuitemslist_less_1.default.menuItemsList },
        react_1.default.createElement("li", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icon_1.default, { name: 'comment', size: 14 }),
            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: menuitemslist_less_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icons_1.ShareIcon, null),
            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: menuitemslist_less_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icons_1.BlockIcon, null),
            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_less_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icons_1.SaveIcon, null),
            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_less_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_less_1.default.menuItem },
            react_1.default.createElement(Icons_1.WarningIcon, null),
            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.default = MenuItemsList;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Icon_1 = __importDefault(__webpack_require__(79));
exports.default = Icon_1.default;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(2);
function Icon(_a) {
    var name = _a.name, size = _a.size;
    switch (name) {
        case 'comment':
            return react_1.default.createElement(Icons_1.CommentIcon, null);
            break;
        case 'block':
            return react_1.default.createElement(Icons_1.BlockIcon, null);
            break;
        default:
            return react_1.default.createElement(react_1.default.Fragment, null);
    }
}
exports.default = Icon;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"menuItemsList": "menuitemslist__menuItemsList--49XIW",
	"menuItem": "menuitemslist__menuItem--1s254",
	"divider": "menuitemslist__divider--1lWmc"
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(82);
// interface IPostsContextData {
//     name?: string;
//     iconImg?: string;
// }
exports.postsContext = react_1.default.createContext([]);
function PostsContextProvider(_a) {
    var children = _a.children;
    var data = usePostsData_1.usePostsData()[0];
    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));
}
exports.PostsContextProvider = PostsContextProvider;
;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(3));
var react_redux_1 = __webpack_require__(1);
// interface IPostsData {
//     name?: string;
//     iconImg?: string;
// }
function usePostsData() {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    react_1.useEffect(function () {
        if (!token)
            return;
        axios_1.default.get('https://oauth.reddit.com/best/', {
            headers: { Authorization: "bearer " + token }
        })
            .then(function (resp) {
            setData(resp.data.data.children);
        })
            .catch(console.log);
    }, [token]);
    return [data];
}
exports.usePostsData = usePostsData;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = __importDefault(__webpack_require__(87));
exports.default = Post_1.default;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var post_less_1 = __importDefault(__webpack_require__(88));
var react_dom_1 = __importDefault(__webpack_require__(11));
var CommentList_1 = __importDefault(__webpack_require__(89));
var CommentFormContainer_1 = __importDefault(__webpack_require__(98));
var react_router_dom_1 = __webpack_require__(6);
// interface IPost {
// 	onClose?:()=> void;	
// }
function Post() {
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/posts');
                //	props.onClose?.();
                //про эту последнюю точку f?.() между  ? и (), то она нужна для того, чтобы 
                //не перепутать с тернарным оператором. Вот тут тред на эту тему можно 
                //почитать https://github.com/claudepache/es-optional-chaining/issues/3
            }
        }
        ;
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_less_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "\u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0447\u0435\u0433\u043E-\u0442\u043E \u0442\u0430\u043C \u0442\u0430\u043A\u043E\u0435 "),
        react_1.default.createElement("div", { className: post_less_1.default.content },
            react_1.default.createElement("p", null, "9.1 \u0412\u0435\u0440\u0441\u0442\u0430\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043F\u043E\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ReactPortal"),
            react_1.default.createElement("p", null, "9.1 \u0412\u0435\u0440\u0441\u0442\u0430\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043F\u043E\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ReactPortal"),
            react_1.default.createElement("p", null, "9.1 \u0412\u0435\u0440\u0441\u0442\u0430\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043F\u043E\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ReactPortal"),
            react_1.default.createElement("p", null, "9.1 \u0412\u0435\u0440\u0441\u0442\u0430\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043F\u043E\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ReactPortal")),
        react_1.default.createElement(CommentFormContainer_1.default, null),
        react_1.default.createElement(CommentList_1.default, null))), node);
}
exports.default = Post;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"modal": "post__modal--FF9ss"
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommentList_1 = __importDefault(__webpack_require__(90));
exports.default = CommentList_1.default;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var CommentItem_1 = __importDefault(__webpack_require__(91));
var commentlist_less_1 = __importDefault(__webpack_require__(97));
function CommentList() {
    return (react_1.default.createElement("ul", { className: commentlist_less_1.default.list },
        react_1.default.createElement(CommentItem_1.default, null)));
}
exports.default = CommentList;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommentItem_1 = __importDefault(__webpack_require__(92));
exports.default = CommentItem_1.default;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(2);
var commentitem_less_1 = __importDefault(__webpack_require__(93));
var ResponseComment_1 = __importDefault(__webpack_require__(94));
//import {BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon} from '../../../../Icons';
function CommentItem() {
    var _a = react_1.default.useState(false), openResponseComment = _a[0], setOpenResponseComment = _a[1];
    return (react_1.default.createElement("li", { className: commentitem_less_1.default.commentItem },
        react_1.default.createElement("div", { className: commentitem_less_1.default.commentCaption },
            react_1.default.createElement("img", { className: commentitem_less_1.default.avatar, src: "https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794", alt: "avatar" }),
            react_1.default.createElement("div", { className: commentitem_less_1.default.name }, "\u0412\u0430\u0441\u0438\u043B\u0438\u0439 \u0420\u043E\u0433\u043E\u0432"),
            react_1.default.createElement("div", { className: commentitem_less_1.default.date }, "2 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434"),
            react_1.default.createElement("div", { className: commentitem_less_1.default.group }, "\u041B\u0438\u0433\u0430 \u043F\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0435\u0439")),
        react_1.default.createElement("div", { className: commentitem_less_1.default.commentBody }, "asdgf wg ertgherth tybh werth rtyj yun fgb erth rtjk rythn dfgh ertjhrt yj"),
        react_1.default.createElement("div", { className: commentitem_less_1.default.commentButtons },
            react_1.default.createElement("button", { className: commentitem_less_1.default.button, onClick: function () { return setOpenResponseComment(true); } },
                react_1.default.createElement(Icons_1.CommentIcon, null),
                react_1.default.createElement("span", null, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
            react_1.default.createElement("button", { className: commentitem_less_1.default.button },
                react_1.default.createElement(Icons_1.ShareIcon, null),
                react_1.default.createElement("span", null, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
            react_1.default.createElement("button", { className: commentitem_less_1.default.button },
                react_1.default.createElement(Icons_1.WarningIcon, null),
                react_1.default.createElement("span", null, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
        openResponseComment && react_1.default.createElement(ResponseComment_1.default, { onClose: function () { return setOpenResponseComment(false); } })));
}
exports.default = CommentItem;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"commentItem": "commentitem__commentItem--2m-9M",
	"commentCaption": "commentitem__commentCaption--3frF9",
	"commentBody": "commentitem__commentBody--B-PkJ",
	"commentButtons": "commentitem__commentButtons--1AfvC",
	"avatar": "commentitem__avatar--qB1t1",
	"name": "commentitem__name--4DpWj",
	"date": "commentitem__date--1jMTx",
	"group": "commentitem__group--bdNNz",
	"button": "commentitem__button--eDJcb"
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseComment_1 = __importDefault(__webpack_require__(95));
exports.default = ResponseComment_1.default;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var responsecomment_less_1 = __importDefault(__webpack_require__(96));
function ResponseComment(props) {
    var ref = react_1.useRef(null);
    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        var _a;
        event.preventDefault();
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    react_1.useEffect(function () {
        ref.current && ref.current.focus();
    }, []);
    return (react_1.default.createElement("div", { className: responsecomment_less_1.default.ResponseComment },
        react_1.default.createElement("div", { className: responsecomment_less_1.default.ResponseCommentCaption },
            react_1.default.createElement("img", { className: responsecomment_less_1.default.avatar, src: "https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794", alt: "avatar" }),
            react_1.default.createElement("div", { className: responsecomment_less_1.default.name }, "\u0412\u0430\u0441\u0438\u043B\u0438\u0439 \u0420\u043E\u0433\u043E\u0432")),
        react_1.default.createElement("form", { className: responsecomment_less_1.default.form, onSubmit: handleSubmit },
            react_1.default.createElement("textarea", { className: responsecomment_less_1.default.input, value: value, onChange: handleChange, ref: ref }),
            react_1.default.createElement("button", { type: "submit", className: responsecomment_less_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}
exports.default = ResponseComment;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"ResponseComment": "responsecomment__ResponseComment--1cjRh",
	"ResponseCommentCaption": "responsecomment__ResponseCommentCaption--2jAm3",
	"avatar": "responsecomment__avatar--3zoCM",
	"name": "responsecomment__name--1BeMb",
	"form": "responsecomment__form--zzgrZ",
	"input": "responsecomment__input--tJJei",
	"button": "responsecomment__button--14d9-"
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"list": "commentlist__list--9of9v"
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommentFormContainer_1 = __importDefault(__webpack_require__(99));
exports.default = CommentFormContainer_1.default;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var store_1 = __webpack_require__(4);
var CommentForm_1 = __importDefault(__webpack_require__(100));
function CommentFormContainer() {
    var value = react_redux_1.useSelector(function (state) { return state.commentText; });
    var dispatch = react_redux_1.useDispatch();
    function handleChange(event) {
        dispatch(store_1.updateComment(event.target.value));
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (react_1.default.createElement(CommentForm_1.default
    // value={value} 
    // onChange={handleChange} 
    // onSubmit={handleSubmit}
    , null));
}
exports.default = CommentFormContainer;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommentForm_1 = __importDefault(__webpack_require__(101));
exports.default = CommentForm_1.default;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var commentform_less_1 = __importDefault(__webpack_require__(102));
var formik_1 = __webpack_require__(103);
function validateComment(value) {
    var error = '';
    if (value.length <= 3)
        error = "Должно быть больше 3х символов!";
    return error;
}
function CommentForm() {
    // const [value, setValue] = useState('');
    // const [touched, setTouched] = useState(false); 
    // const [valueError, setValueError] = useState('');
    // function handleSubmit(event: FormEvent){
    //     event.preventDefault();
    //     setTouched(true);
    //     setValueError(validateValue());
    //     const isFormValid = !validateValue();
    //     if(!isFormValid) return
    //     console.log("send:",value);
    // }
    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    //     setValue(event.target.value);
    //     //setValueTouched(true);
    // }
    // function handleBlur(){
    //     //setValueTouched(true);
    // }
    // function validateValue(){
    //     if(value.length <= 3 ) return 'Нужно больше трёх символов';
    //     return '';
    // }
    return (
    //https://formik.org/docs/guides/validation
    react_1.default.createElement(formik_1.Formik, { initialValues: {
            comment: '',
        }, onSubmit: function (values) {
            console.log(values);
            alert("\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0444\u043E\u0440\u043C\u044B");
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, isValidating = _a.isValidating;
        return (react_1.default.createElement(formik_1.Form, { className: commentform_less_1.default.form },
            react_1.default.createElement(formik_1.Field, { name: "comment", validate: validateComment, as: 'textarea', className: commentform_less_1.default.input }),
            errors.comment && touched.comment && react_1.default.createElement("div", null, errors.comment),
            react_1.default.createElement("button", { type: "submit", className: commentform_less_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
    })
    //=========================================================================================
    // <form className={styles.form} onSubmit={handleSubmit}>
    //     <textarea className={styles.input} 
    //     value={value} 
    //     onChange={handleChange}
    //     // onBlur={handleBlur}
    //     aria-invalid={valueError?'true':undefined}
    //     />
    //     {touched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}
    //     <button type="submit" className={styles.button}>Комментировать</button>		
    // </form>
    );
}
exports.default = CommentForm;


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"form": "commentform__form--3UJN2",
	"input": "commentform__input--32X9b",
	"button": "commentform__button--1LY8t"
});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) {
    return "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"UTF-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\"/>\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/>\n\t\t<meta name=\"HandheldFriendly\" content=\"true\"/>\n\t\t<title>Reddit</title>\n\t\t<script src=\"/static/client.js\" type=\"application/javascript\"></script>\n\t\t<script>\n\t\t\twindow.__token__ = '" + token + "'\n\t\t</script>\n\t</head>\n\t<body>\n\t\t<div id=\"react-root\">" + content + "</div>\n\t\t<div id=\"modal_root\"></div>\n\t</body>\n</html>\n\t";
};
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);