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
      sortedBy: {
        name: "",
        direction: "asc"
      }
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
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        btn_edit: "",
        item_pk: e.target.value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ2YXJpYW50IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiZ2V0UmVhY3RBbGVydHMiLCJtZXNzYWdlcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByZXZNZXNzYWdlcyIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkRlbGV0ZURpYWxvZyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW0iLCJwYXJhbXMiLCJpdGVtSW5mbyIsInNob3dEZWxldGVEaWFsb2ciLCJoYW5kbGVDbG9zZSIsIm5hbWVPZkl0ZW0iLCJnZXRJdGVtSW5mbyIsIkxpc3RPZkl0ZW1zIiwibG9hZGluZyIsIml0ZW1zIiwic29ydGVkQnkiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJvd25lciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJnZXRJdGVtIiwiYnRuX2FkZCIsInJlZGlyZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYnRuX2VkaXQiLCJpdGVtX3BrIiwicGF0aG5hbWUiLCJjb25maXJtIiwiYnRuX2RlbCIsImdldEl0ZW1zIiwidXBBcnJvdyIsImRvd25BcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3FFQW9CUyxVQUFDQyxLQUFELEVBQVc7QUFDMUIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFNQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0csSUFBRixLQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsUUFBbkQ7QUFDQSw0QkFDRSwyREFBQyxxREFBRDtBQUFZLGlCQUFPLEVBQUVELE9BQXJCO0FBQThCLGFBQUcsRUFBRUQ7QUFBbkMsV0FDR0QsQ0FBQyxDQUFDSSxPQURMLENBREY7QUFLRCxPQVBELENBRFUsZ0JBVVYsdUhBVkY7QUFZRCxLOzs0REFFTyxVQUFDQyxJQUFEO0FBQUEsYUFDTixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCQyxrQkFBVSxDQUFD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O0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydCBhcyBSZWFjdEFsZXJ0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG5cbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBtZXNzYWdlcyAhPT0gcHJldk1lc3NhZ2VzKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dBbGVydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFJlYWN0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYW50ID0gZS50eXBlID09PSBcInN1Y2Nlc3NcIiA/IFwicHJpbWFyeVwiIDogXCJkYW5nZXJcIjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt2YXJpYW50fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gKHdhaXQpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB3YWl0KTtcbiAgICB9KTtcblxuICBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLmRlbGF5KFxuICAgICAgICB0aGlzLnByb3BzLnRpbWVvdXQgPyB0aGlzLnByb3BzLnRpbWVvdXQgOiB0aGlzLnN0YXRlLnRpbWVvdXRcbiAgICAgICkudGhlbigoKSA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJldHVybiA8Pnt0aGlzLmdldFJlYWN0QWxlcnRzKHRoaXMucHJvcHMubWVzc2FnZXMpfTwvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnNob3dBbGVydCgpfTwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xuICAgIGlmIChlKSB0aGlzLnByb3BzLml0ZW1EZWxldGUoZS50YXJnZXQudmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW1EZWxldGUoZmFsc2UpO1xuICB9O1xuXG4gIG5hbWVPZkl0ZW0gPSBcIlwiO1xuXG4gIGl0ZW1JbmZvID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBnZXRJdGVtSW5mbyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbUluZm8odGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMucGFyYW1zLnNob3dEZWxldGVEaWFsb2d9XG4gICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICA8TW9kYWwuVGl0bGU+0KPQtNCw0LvQuNGC0Ywge3RoaXMubmFtZU9mSXRlbX08L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+e3RoaXMuZ2V0SXRlbUluZm8oKX08L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdmFsdWU9e2ZhbHNlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIHZhbHVlPXt0cnVlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RPZkl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHNob3dEZWxldGVEaWFsb2c6IGZhbHNlLFxuICAgIGl0ZW1EZWxldGU6IFwiXCIsXG4gICAgaXRlbXM6IFtdLFxuICAgIHNvcnRlZEJ5OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgIH0sXG4gIH07XG5cbiAgdXJsID0gXCJcIjtcbiAgLy91cEFycm93ID0gJyYjeDAyMjVDOyc7XG4gIHVwQXJyb3cgPSBcIlxcdTIxOTFcIjtcbiAgLy9kb3duQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgZG93bkFycm93ID0gXCJcXHUyMTkzXCI7XG4gIG5hbWVPZkl0ZW0gPSBcIlwiO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHByZXZTdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgfHxcbiAgICAgIHByZXZTdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gIT09IHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFycm93KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gXCJhc2NcIlxuICAgICAgPyB0aGlzLnVwQXJyb3dcbiAgICAgIDogdGhpcy5kb3duQXJyb3c7XG4gIH1cblxuICBnZXRFcnJvcnMgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJlcnJvclwiLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICBvd25lcjogdGhpcy5wcm9wcy5vd25lciA/IHRoaXMucHJvcHMub3duZXIgOiAtMSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0SXRlbXNcIiwgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcblxuICBnZXRJdGVtID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgfTtcblxuICBidG5Tb3J0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZF9uYW1lID0gZS50YXJnZXQuaWQ7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSBzb3J0ZWRfbmFtZSkge1xuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIG5hbWU6IHNvcnRlZF9uYW1lLFxuICAgICAgICBkaXJlY3Rpb246IFwiZGVzY1wiLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzb3J0ZWRCeTogc29ydGVkQnksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID1cbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09IFwiZGVzY1wiID8gXCJhc2NcIiA6IFwiZGVzY1wiO1xuXG4gICAgICBjb25zdCBzb3J0ZWRCeSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc29ydGVkQnk6IHNvcnRlZEJ5IH0pO1xuICAgIH1cbiAgfTtcblxuICBidG5EZWxDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgaXRlbURlbGV0ZTogaXRlbSxcbiAgICB9KTtcbiAgfTtcblxuICBidG5BZGRDbGljayA9IChlKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGJ0bl9hZGQ6IFwiXCIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVtcInJlZGlyZWN0XCJdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBidG5FZGl0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBidG5fZWRpdDogXCJcIixcbiAgICAgICAgaXRlbV9wazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVtcInJlZGlyZWN0XCJdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpdGVtRGVsZXRlID0gKGNvbmZpcm0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UgfSk7XG5cbiAgICBpZiAoY29uZmlybSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgYnRuX2RlbDogXCJcIixcbiAgICAgICAgICBpdGVtX3BrOiB0aGlzLnN0YXRlLml0ZW1EZWxldGUuaWQsXG4gICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1zOiByZXMuZGF0YSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Mb2FkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1sb2FkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1kdWFsLXJpbmdcIiAvPlxuICA8L2Rpdj5cbik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXS5jYWxsKHsgdGhlbjogZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9IH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9