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
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./assets/components/Header.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");





 // import OneSignal, { useOneSignalSetup } from 'react-onesignal';

var Owners = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./List/Owners */ "./assets/components/List/Owners.tsx"));
});
var Cars = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./List/Cars */ "./assets/components/List/Cars.tsx"));
});
var OwnerDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(8), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./Detail/OwnerDetail */ "./assets/components/Detail/OwnerDetail.tsx"));
});
var CarDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(4), __webpack_require__.e(8), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./Detail/CarDetail */ "./assets/components/Detail/CarDetail.tsx"));
});
var Dashboard = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./Dashboard */ "./assets/components/Dashboard.tsx"));
});

var App = function App() {
  // const oneSignal = (window as any).OneSignal || [];
  // console.log('App.OneSignal.oneSignal', oneSignal);
  // useEffect(() => {
  //   oneSignal.push(function () {
  //     oneSignal.init({
  //       appId: '4c631ec8-c487-486c-a57f-032561cf353e',
  //       notifyButton: {
  //         enable: true,
  //       },
  //       allowLocalhostAsSecureOrigin: true,
  //     });
  //   });
  //   oneSignal.push(() => {
  //     oneSignal.showNativePrompt();
  //   });
  //   oneSignal.push(() => {
  //     oneSignal.on('subscriptionChange', (isSubscribed: any) => {
  //       console.log('subscription state', isSubscribed);
  //       oneSignal.push(() => {
  //         oneSignal.getUserId((userId: any) => {
  //           console.log('userId', userId);
  //         });
  //       });
  //     });
  //   });
  // }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_5__["AlertProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/owners",
    component: Owners
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/owner",
    component: OwnerDetail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/cars",
    component: Cars
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/car",
    component: CarDetail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/dashboard",
    component: Dashboard
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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
  setAlerts: function setAlerts(e) {
    return e;
  }
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
    // console.log('AlertProvider.setAlerts', messages);
    setMessages(messages);
  }; //console.log('AlertProvider.alerts', messages);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AlertContext.Provider, {
    value: {
      messages: messages.messages,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk93bmVycyIsImxhenkiLCJDYXJzIiwiT3duZXJEZXRhaWwiLCJDYXJEZXRhaWwiLCJEYXNoYm9hcmQiLCJBcHAiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkJyb3dzZXJSb3V0ZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwiQWxlcnRQcm92aWRlciIsIlN3aXRjaCIsIlJvdXRlIiwicGF0aCIsImNvbXBvbmVudCIsImhyZWYiLCJDb21wb25lbnQiLCJBbGVydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibWVzc2FnZXMiLCJzZXRBbGVydHMiLCJlIiwidXNlQWxlcnRzIiwidXNlQ29udGV4dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzZXRNZXNzYWdlcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsdURBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNQyxNQUFNLGdC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QVMzQzs7O0FBQ0Esc0JBQVFqQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CYyxZQUFZLENBQUNVLFFBQWpDLEVBQTJDO0FBQUVDLFNBQUssRUFBRTtBQUFFVCxjQUFRLEVBQUVBLFFBQVEsQ0FBQ0EsUUFBckI7QUFBK0JDLGVBQVMsRUFBRUE7QUFBMUM7QUFBVCxHQUEzQyxFQUE2R0ksUUFBN0csQ0FBUjtBQUNILENBWE0sQzs7Ozs7Ozs7Ozs7QUNSUCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vL2ltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBBbGVydFByb3ZpZGVyIH0gZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0Jztcbi8vIGltcG9ydCBPbmVTaWduYWwsIHsgdXNlT25lU2lnbmFsU2V0dXAgfSBmcm9tICdyZWFjdC1vbmVzaWduYWwnO1xuY29uc3QgT3duZXJzID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTGlzdC9Pd25lcnMnKSk7XG5jb25zdCBDYXJzID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTGlzdC9DYXJzJykpO1xuY29uc3QgT3duZXJEZXRhaWwgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9EZXRhaWwvT3duZXJEZXRhaWwnKSk7XG5jb25zdCBDYXJEZXRhaWwgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9EZXRhaWwvQ2FyRGV0YWlsJykpO1xuY29uc3QgRGFzaGJvYXJkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vRGFzaGJvYXJkJykpO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IG9uZVNpZ25hbCA9ICh3aW5kb3cgYXMgYW55KS5PbmVTaWduYWwgfHwgW107XG4gICAgLy8gY29uc29sZS5sb2coJ0FwcC5PbmVTaWduYWwub25lU2lnbmFsJywgb25lU2lnbmFsKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgb25lU2lnbmFsLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBvbmVTaWduYWwuaW5pdCh7XG4gICAgLy8gICAgICAgYXBwSWQ6ICc0YzYzMWVjOC1jNDg3LTQ4NmMtYTU3Zi0wMzI1NjFjZjM1M2UnLFxuICAgIC8vICAgICAgIG5vdGlmeUJ1dHRvbjoge1xuICAgIC8vICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgYWxsb3dMb2NhbGhvc3RBc1NlY3VyZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIG9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAvLyAgICAgb25lU2lnbmFsLnNob3dOYXRpdmVQcm9tcHQoKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgb25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgIC8vICAgICBvbmVTaWduYWwub24oJ3N1YnNjcmlwdGlvbkNoYW5nZScsIChpc1N1YnNjcmliZWQ6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpcHRpb24gc3RhdGUnLCBpc1N1YnNjcmliZWQpO1xuICAgIC8vICAgICAgIG9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAvLyAgICAgICAgIG9uZVNpZ25hbC5nZXRVc2VySWQoKHVzZXJJZDogYW55KSA9PiB7XG4gICAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VySWQnLCB1c2VySWQpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCcm93c2VyUm91dGVyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdXNwZW5zZSwgeyBmYWxsYmFjazogUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwLi4uXCIpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0UHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvb3duZXJzXCIsIGNvbXBvbmVudDogT3duZXJzIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL293bmVyXCIsIGNvbXBvbmVudDogT3duZXJEZXRhaWwgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvY2Fyc1wiLCBjb21wb25lbnQ6IENhcnMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvY2FyXCIsIGNvbXBvbmVudDogQ2FyRGV0YWlsIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL2Rhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZCB9KSkpKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7IGNsYXNzTmFtZTogXCJuYXZiYXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyX19pdGVtXCIsIGhyZWY6IFwiL293bmVyc1wiIH0sIFwiXFx1MDQxMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDQ2XFx1MDQ0QlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcIm5hdmJhcl9faXRlbSBuYXZiYXJfX2l0ZW1fY2Fyc1wiLCBocmVmOiBcIi9jYXJzXCIgfSwgXCJcXHUwNDEwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyX19pdGVtIG5hdmJhcl9faXRlbV9hZG1pblwiLCBocmVmOiBcIi9kYXNoYm9hcmRcIiB9LCBcIlxcdTA0MTBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEFsZXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzZXRBbGVydHM6IGUgPT4gZSxcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZUFsZXJ0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xufTtcbmV4cG9ydCBjb25zdCBBbGVydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgIC8vc2hvdzogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0QWxlcnRzID0gKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBbGVydFByb3ZpZGVyLnNldEFsZXJ0cycsIG1lc3NhZ2VzKTtcbiAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMpO1xuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZygnQWxlcnRQcm92aWRlci5hbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBtZXNzYWdlczogbWVzc2FnZXMubWVzc2FnZXMsIHNldEFsZXJ0czogc2V0QWxlcnRzIH0gfSwgY2hpbGRyZW4pKTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9