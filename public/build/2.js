(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/components/Alerts.js":
/*!*************************************!*\
  !*** ./assets/components/Alerts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Alerts = /*#__PURE__*/function (_Component) {
  _inherits(Alerts, _Component);

  var _super = _createSuper(Alerts);

  function Alerts() {
    var _this;

    _classCallCheck(this, Alerts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showAlert: false,
      timeout: 5000
    });

    _defineProperty(_assertThisInitialized(_this), "getReactAlerts", function (array) {
      return array ? array.map(function (e, index) {
        var variant = e.type === "success" ? "primary" : "danger";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
          variant: variant,
          key: index
        }, e.message);
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);
    });

    _defineProperty(_assertThisInitialized(_this), "delay", function (wait) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          return resolve();
        }, wait);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showAlert", function () {
      if (_this.state.showAlert) {
        _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(function () {
          return _this.setState({
            showAlert: false
          });
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getReactAlerts(_this.props.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
    });

    return _this;
  }

  _createClass(Alerts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showAlert = false;
      var messages = this.props.messages;
      var prevMessages = prevProps.messages;

      if (messages && messages.length > 0 && messages !== prevMessages) {
        showAlert = true;
      }

      if (showAlert && !this.state.showAlert) {
        this.setState({
          showAlert: showAlert
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./assets/components/DeleteDialog.js":
/*!*******************************************!*\
  !*** ./assets/components/DeleteDialog.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteDialog; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DeleteDialog = /*#__PURE__*/function (_Component) {
  _inherits(DeleteDialog, _Component);

  var _super = _createSuper(DeleteDialog);

  function DeleteDialog() {
    var _this;

    _classCallCheck(this, DeleteDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (e) {
      if (e) _this.props.itemDelete(e.target.value);
      return _this.props.itemDelete(false);
    });

    _defineProperty(_assertThisInitialized(_this), "nameOfItem", "");

    _defineProperty(_assertThisInitialized(_this), "itemInfo", function (item) {
      return "";
    });

    _defineProperty(_assertThisInitialized(_this), "getItemInfo", function () {
      if (_this.props.params.itemDelete) {
        return _this.itemInfo(_this.props.params.itemDelete);
      }

      return "";
    });

    return _this;
  }

  _createClass(DeleteDialog, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
        show: this.props.params.showDeleteDialog,
        onHide: this.handleClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Header, {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Title, null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ", this.nameOfItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Body, null, this.getItemInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "secondary",
        value: false,
        onClick: this.handleClose
      }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "danger",
        value: true,
        onClick: this.handleClose
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
    }
  }]);

  return DeleteDialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./assets/components/ListOfItems.js":
/*!******************************************!*\
  !*** ./assets/components/ListOfItems.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListOfItems; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ListOfItems = /*#__PURE__*/function (_Component) {
  _inherits(ListOfItems, _Component);

  var _super = _createSuper(ListOfItems);

  function ListOfItems() {
    var _this;

    _classCallCheck(this, ListOfItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      messages: [],
      showDeleteDialog: false,
      itemDelete: "",
      items: [],
      sortedBy: _this.getDefaultSortedBy()
    });

    _defineProperty(_assertThisInitialized(_this), "url", "");

    _defineProperty(_assertThisInitialized(_this), "upArrow", "\u2191");

    _defineProperty(_assertThisInitialized(_this), "downArrow", "\u2193");

    _defineProperty(_assertThisInitialized(_this), "nameOfItem", "");

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
      return Object.keys(data).map(function (key) {
        return {
          type: "error",
          message: data[key]
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItems", function () {
      _this.setState({
        loading: true
      });

      console.log("getItems owner", _this.props.owner);
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        sorted_by: _this.state.sortedBy,
        owner: _this.props.owner ? _this.props.owner : -1
      }).then(function (res) {
        console.log("getItems", res.data);
        var state = {
          items: res.data
        }; //console.log("getItems state", state);

        _this.setState(state);
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      })["finally"](function () {
        return _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItem", function (id) {
      return _this.state.items.filter(function (item) {
        return +item.id === +id;
      })[0];
    });

    _defineProperty(_assertThisInitialized(_this), "btnSortClick", function (e) {
      var sorted_name = e.target.id;

      if (_this.state.sortedBy.name !== sorted_name) {
        var sortedBy = {
          name: sorted_name,
          direction: "desc"
        };

        _this.setState({
          sortedBy: sortedBy
        });
      } else {
        var direction = _this.state.sortedBy.direction === "desc" ? "asc" : "desc";

        var _sortedBy = _objectSpread(_objectSpread({}, _this.state.sortedBy), {}, {
          direction: direction
        });

        _this.setState({
          sortedBy: _sortedBy
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "btnDelClick", function (e) {
      var item = _this.getItem(e.target.value);

      _this.setState({
        showDeleteDialog: true,
        itemDelete: item
      });
    });

    _defineProperty(_assertThisInitialized(_this), "btnAddClick", function (e) {
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        btn_add: ""
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "btnEditClick", function (e) {
      var item_pk = e.target.value; //console.log("btnEditClick", item_pk);

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        btn_edit: "",
        item_pk: item_pk,
        url: window.location.pathname
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "itemDelete", function (confirm) {
      _this.setState({
        showDeleteDialog: false
      });

      if (confirm === "true") {
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
          sorted_by: _this.state.sortedBy,
          btn_del: "",
          item_pk: _this.state.itemDelete.id,
          owner: _this.props.owner ? _this.props.owner : -1
        }).then(function (res) {
          _this.setState({
            items: res.data,
            messages: [{
              type: "success",
              message: "".concat(_this.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
            }]
          });
        })["catch"](function (err) {
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        })["finally"](function () {
          return _this.setState({
            loading: false
          });
        });
      }
    });

    return _this;
  }

  _createClass(ListOfItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "getDefaultSortedBy",
    value: function getDefaultSortedBy() {
      return {
        name: "",
        direction: "asc"
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.sortedBy.name !== this.state.sortedBy.name || prevState.sortedBy.direction !== this.state.sortedBy.direction) {
        this.getItems();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null);
    }
  }, {
    key: "arrow",
    get: function get() {
      return this.state.sortedBy.direction === "asc" ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ }),

/***/ "./assets/components/Loader.css":
/*!**************************************!*\
  !*** ./assets/components/Loader.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Loader.js":
/*!*************************************!*\
  !*** ./assets/components/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./assets/components/Loader.css");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-dual-ring"
  }));
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ2YXJpYW50IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiZ2V0UmVhY3RBbGVydHMiLCJtZXNzYWdlcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByZXZNZXNzYWdlcyIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkRlbGV0ZURpYWxvZyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW0iLCJwYXJhbXMiLCJpdGVtSW5mbyIsInNob3dEZWxldGVEaWFsb2ciLCJoYW5kbGVDbG9zZSIsIm5hbWVPZkl0ZW0iLCJnZXRJdGVtSW5mbyIsIkxpc3RPZkl0ZW1zIiwibG9hZGluZyIsIml0ZW1zIiwic29ydGVkQnkiLCJnZXREZWZhdWx0U29ydGVkQnkiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJvd25lciIsImF4aW9zIiwicG9zdCIsInVybCIsInNvcnRlZF9ieSIsInJlcyIsImVyciIsImdldEVycm9ycyIsInJlc3BvbnNlIiwiaWQiLCJmaWx0ZXIiLCJzb3J0ZWRfbmFtZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJnZXRJdGVtIiwiYnRuX2FkZCIsInJlZGlyZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaXRlbV9wayIsImJ0bl9lZGl0IiwicGF0aG5hbWUiLCJjb25maXJtIiwiYnRuX2RlbCIsImdldEl0ZW1zIiwidXBBcnJvdyIsImRvd25BcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3FFQW9CUyxVQUFDQyxLQUFELEVBQVc7QUFDMUIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFNQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0csSUFBRixLQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsUUFBbkQ7QUFDQSw0QkFDRSwyREFBQyxxREFBRDtBQUFZLGlCQUFPLEVBQUVELE9BQXJCO0FBQThCLGFBQUcsRUFBRUQ7QUFBbkMsV0FDR0QsQ0FBQyxDQUFDSSxPQURMLENBREY7QUFLRCxPQVBELENBRFUsZ0JBVVYsdUhBVkY7QUFZRCxLOzs0REFFTyxVQUFDQyxJQUFEO0FBQUEsYUFDTixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxF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QUFFLGVBQWUsY0FBYztBQUM1RyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLGtFQUFrRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVUsRUFBRTtBQUM1RSxPQUFPO0FBQ1A7QUFDQSxnRUFBZ0UsU0FBUyxFQUFFO0FBQzNFLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMgIT09IHByZXZNZXNzYWdlcykge1xuICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFudCA9IGUudHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInByaW1hcnlcIiA6IFwiZGFuZ2VyXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0QWxlcnQgdmFyaWFudD17dmFyaWFudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvUmVhY3RBbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDw+PC8+XG4gICAgKTtcbiAgfTtcblxuICBkZWxheSA9ICh3YWl0KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnByb3BzLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsb3NlID0gKGUpID0+IHtcbiAgICBpZiAoZSkgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBuYW1lT2ZJdGVtID0gXCJcIjtcblxuICBpdGVtSW5mbyA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBzaG93PXt0aGlzLnByb3BzLnBhcmFtcy5zaG93RGVsZXRlRGlhbG9nfVxuICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlPtCj0LTQsNC70LjRgtGMIHt0aGlzLm5hbWVPZkl0ZW19PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5Pnt0aGlzLmdldEl0ZW1JbmZvKCl9PC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHZhbHVlPXtmYWxzZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICDQntGC0LzQtdC90LBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiB2YWx1ZT17dHJ1ZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICBpdGVtRGVsZXRlOiBcIlwiLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzb3J0ZWRCeTogdGhpcy5nZXREZWZhdWx0U29ydGVkQnkoKSxcbiAgfTtcblxuICB1cmwgPSBcIlwiO1xuICAvL3VwQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgdXBBcnJvdyA9IFwiXFx1MjE5MVwiO1xuICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICBkb3duQXJyb3cgPSBcIlxcdTIxOTNcIjtcbiAgbmFtZU9mSXRlbSA9IFwiXCI7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFNvcnRlZEJ5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkubmFtZSAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lIHx8XG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvblxuICAgICkge1xuICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09IFwiYXNjXCJcbiAgICAgID8gdGhpcy51cEFycm93XG4gICAgICA6IHRoaXMuZG93bkFycm93O1xuICB9XG5cbiAgZ2V0RXJyb3JzID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2coXCJnZXRJdGVtcyBvd25lclwiLCB0aGlzLnByb3BzLm93bmVyKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRJdGVtc1wiLCByZXMuZGF0YSk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyBpdGVtczogcmVzLmRhdGEgfTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1zIHN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSkpO1xuICB9O1xuXG4gIGdldEl0ZW0gPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICB9O1xuXG4gIGJ0blNvcnRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkX25hbWUgPSBlLnRhcmdldC5pZDtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHNvcnRlZF9uYW1lKSB7XG4gICAgICBjb25zdCBzb3J0ZWRCeSA9IHtcbiAgICAgICAgbmFtZTogc29ydGVkX25hbWUsXG4gICAgICAgIGRpcmVjdGlvbjogXCJkZXNjXCIsXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPVxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gXCJkZXNjXCIgPyBcImFzY1wiIDogXCJkZXNjXCI7XG5cbiAgICAgIGNvbnN0IHNvcnRlZEJ5ID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0ZWRCeTogc29ydGVkQnkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGJ0bkRlbENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEZWxldGVEaWFsb2c6IHRydWUsXG4gICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgIH0pO1xuICB9O1xuXG4gIGJ0bkFkZENsaWNrID0gKGUpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogXCJcIiB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhW1wicmVkaXJlY3RcIl07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGJ0bkVkaXRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbV9wayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vY29uc29sZS5sb2coXCJidG5FZGl0Q2xpY2tcIiwgaXRlbV9wayk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6IFwiXCIsXG4gICAgICAgIGl0ZW1fcGs6IGl0ZW1fcGssXG4gICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVtcInJlZGlyZWN0XCJdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpdGVtRGVsZXRlID0gKGNvbmZpcm0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UgfSk7XG5cbiAgICBpZiAoY29uZmlybSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgYnRuX2RlbDogXCJcIixcbiAgICAgICAgICBpdGVtX3BrOiB0aGlzLnN0YXRlLml0ZW1EZWxldGUuaWQsXG4gICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1zOiByZXMuZGF0YSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Mb2FkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1sb2FkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1kdWFsLXJpbmdcIiAvPlxuICA8L2Rpdj5cbik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXS5jYWxsKHsgdGhlbjogZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9IH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9