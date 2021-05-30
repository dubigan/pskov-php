(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./assets/components/App.tsx");

 //import { BrowserRouter as Router } from 'react-router-dom';



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/App.tsx":
/*!***********************************!*\
  !*** ./assets/components/App.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./assets/components/Header.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Owners = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./Owners */ "./assets/components/Owners.tsx"));
});
var Cars = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./Cars */ "./assets/components/Cars.tsx"));
});
var OwnerDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(15), __webpack_require__.e(4), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./OwnerDetail */ "./assets/components/OwnerDetail.tsx"));
});
var CarDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(15), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./CarDetail */ "./assets/components/CarDetail.tsx"));
});
var Dashboard = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./Dashboard */ "./assets/components/Dashboard.tsx"));
});

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_9__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_10__["AlertProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/owners",
        component: Owners
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/owner",
        component: OwnerDetail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/cars",
        component: Cars
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/car",
        component: CarDetail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/dashboard",
        component: Dashboard
      }))))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./assets/components/Header.tsx":
/*!**************************************!*\
  !*** ./assets/components/Header.tsx ***!
  \**************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "navbar__item",
        href: "/owners"
      }, "\u0410\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "navbar__item navbar__item_cars",
        href: "/cars"
      }, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "navbar__item navbar__item_admin",
        href: "/dashboard"
      }, "\u0410\u0434\u043C\u0438\u043D"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./assets/components/lib/alert/AlertContext.tsx":
/*!******************************************************!*\
  !*** ./assets/components/lib/alert/AlertContext.tsx ***!
  \******************************************************/
/*! exports provided: AlertContext, useAlerts, AlertProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertContext", function() { return AlertContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlerts", function() { return useAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertProvider", function() { return AlertProvider; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AlertContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext({
  messages: [],
  setAlerts: null //show: false,
  //timeout: 5000,

});
var useAlerts = function useAlerts() {
  return Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(AlertContext);
};
var AlertProvider = function AlertProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    messages: [] //show: false,

  }),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var setAlerts = function setAlerts(messages) {
    //console.log('AlertProvider.setAlerts', name, contextName);
    setMessages(messages);
  }; //console.log('AlertProvider.alerts', messages);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AlertContext.Provider, {
    value: {
      messages: messages,
      setAlerts: setAlerts
    }
  }, children);
};

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk93bmVycyIsImxhenkiLCJDYXJzIiwiT3duZXJEZXRhaWwiLCJDYXJEZXRhaWwiLCJEYXNoYm9hcmQiLCJBcHAiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkJyb3dzZXJSb3V0ZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwiQWxlcnRQcm92aWRlciIsIlN3aXRjaCIsIlJvdXRlIiwicGF0aCIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImhyZWYiLCJBbGVydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibWVzc2FnZXMiLCJzZXRBbGVydHMiLCJ1c2VBbGVydHMiLCJ1c2VDb250ZXh0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2VzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyx1REFBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05B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O0FBQVo7QUFBVCxHQUEzQyxFQUErRUcsUUFBL0UsQ0FBUDtBQUNILENBWE0sQzs7Ozs7Ozs7Ozs7QUNWUCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vL2ltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50LCBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IEFsZXJ0UHJvdmlkZXIgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuY29uc3QgT3duZXJzID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vT3duZXJzJykpO1xuY29uc3QgQ2FycyA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL0NhcnMnKSk7XG5jb25zdCBPd25lckRldGFpbCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL093bmVyRGV0YWlsJykpO1xuY29uc3QgQ2FyRGV0YWlsID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vQ2FyRGV0YWlsJykpO1xuY29uc3QgRGFzaGJvYXJkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vRGFzaGJvYXJkJykpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJvd3NlclJvdXRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1c3BlbnNlLCB7IGZhbGxiYWNrOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAuLi5cIikgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0UHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiBcIi9vd25lcnNcIiwgY29tcG9uZW50OiBPd25lcnMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL293bmVyXCIsIGNvbXBvbmVudDogT3duZXJEZXRhaWwgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL2NhcnNcIiwgY29tcG9uZW50OiBDYXJzIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiBcIi9jYXJcIiwgY29tcG9uZW50OiBDYXJEZXRhaWwgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL2Rhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZCB9KSkpKSkpKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7IGNsYXNzTmFtZTogXCJuYXZiYXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyX19pdGVtXCIsIGhyZWY6IFwiL293bmVyc1wiIH0sIFwiXFx1MDQxMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDQ2XFx1MDQ0QlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcIm5hdmJhcl9faXRlbSBuYXZiYXJfX2l0ZW1fY2Fyc1wiLCBocmVmOiBcIi9jYXJzXCIgfSwgXCJcXHUwNDEwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyX19pdGVtIG5hdmJhcl9faXRlbV9hZG1pblwiLCBocmVmOiBcIi9kYXNoYm9hcmRcIiB9LCBcIlxcdTA0MTBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEFsZXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzZXRBbGVydHM6IG51bGwsXG4gICAgLy9zaG93OiBmYWxzZSxcbiAgICAvL3RpbWVvdXQ6IDUwMDAsXG59KTtcbmV4cG9ydCBjb25zdCB1c2VBbGVydHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcbn07XG5leHBvcnQgY29uc3QgQWxlcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAvL3Nob3c6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHNldEFsZXJ0cyA9IChtZXNzYWdlcykgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydFByb3ZpZGVyLnNldEFsZXJ0cycsIG5hbWUsIGNvbnRleHROYW1lKTtcbiAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMpO1xuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZygnQWxlcnRQcm92aWRlci5hbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IG1lc3NhZ2VzLCBzZXRBbGVydHMgfSB9LCBjaGlsZHJlbik7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==