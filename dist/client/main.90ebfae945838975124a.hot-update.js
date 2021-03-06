webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_less_1 = __importDefault(__webpack_require__(/*! ./commentform.less */ \"./src/shared/CommentForm/commentform.less\"));\r\nvar react_2 = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.js\");\r\nfunction CommentForm() {\r\n    var _a = react_2.useStoreon('comment'), dispatch = _a.dispatch, comment = _a.comment;\r\n    console.log(\">>\", comment);\r\n    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];\r\n    var _c = react_1.useState(false), touched = _c[0], setTouched = _c[1];\r\n    var _d = react_1.useState(''), valueError = _d[0], setValueError = _d[1];\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        setTouched(true);\r\n        setValueError(validateValue());\r\n        var isFormValid = !validateValue();\r\n        if (!isFormValid)\r\n            return;\r\n        console.log(\"send:\", value);\r\n    }\r\n    function handleChange(event) {\r\n        //setValue(event.target.value);\r\n        //setValueTouched(true);\r\n        dispatch('change', event.target.value);\r\n    }\r\n    function handleBlur() {\r\n        //setValueTouched(true);\r\n    }\r\n    function validateValue() {\r\n        console.log('val.comment:', comment);\r\n        //if(value.length <= 3 ) return 'Нужно больше трёх символов';\r\n        if (comment <= 3)\r\n            return 'Нужно больше трёх символов';\r\n        return '';\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_less_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_less_1.default.input, value: comment, onChange: handleChange, \"aria-invalid\": valueError ? 'true' : undefined }),\r\n        touched && validateValue() && (react_1.default.createElement(\"div\", { style: { color: 'red' } }, validateValue())),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.default = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"));\r\nexports.default = CommentForm_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})