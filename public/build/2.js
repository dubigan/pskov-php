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
        //console.log("getItems", res.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ2YXJpYW50IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiZ2V0UmVhY3RBbGVydHMiLCJtZXNzYWdlcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByZXZNZXNzYWdlcyIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkRlbGV0ZURpYWxvZyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW0iLCJwYXJhbXMiLCJpdGVtSW5mbyIsInNob3dEZWxldGVEaWFsb2ciLCJoYW5kbGVDbG9zZSIsIm5hbWVPZkl0ZW0iLCJnZXRJdGVtSW5mbyIsIkxpc3RPZkl0ZW1zIiwibG9hZGluZyIsIml0ZW1zIiwic29ydGVkQnkiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJvd25lciIsInJlcyIsImVyciIsImdldEVycm9ycyIsInJlc3BvbnNlIiwiaWQiLCJmaWx0ZXIiLCJzb3J0ZWRfbmFtZSIsImdldEl0ZW0iLCJidG5fYWRkIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJidG5fZWRpdCIsIml0ZW1fcGsiLCJwYXRobmFtZSIsImNvbmZpcm0iLCJidG5fZGVsIiwiZ2V0SXRlbXMiLCJ1cEFycm93IiwiZG93bkFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ1g7QUFDTkMsZUFBUyxFQUFFLEtBREw7QUFFTkMsYUFBTyxFQUFFO0FBRkgsSzs7cUVBb0JTLFVBQUNDLEtBQUQsRUFBVztBQUMxQixhQUFPQSxLQUFLLEdBQ1ZBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3RCLFlBQU1DLE9BQU8sR0FBR0YsQ0FBQyxDQUFDRyxJQUFGLEtBQVcsU0FBWCxHQUF1QixTQUF2QixHQUFtQyxRQUFuRDtBQUNBLDRCQUNFLDJEQUFDLHFEQUFEO0FBQVksaUJBQU8sRUFBRUQsT0FBckI7QUFBOEIsYUFBRyxFQUFFRDtBQUFuQyxXQUNHRCxDQUFDLENBQUNJLE9BREwsQ0FERjtBQUtELE9BUEQsQ0FEVSxnQkFVVix1SEFWRjtBQVlELEs7OzREQUVPLFVBQUNDLElBQUQ7QUFBQSxhQUNOLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkJDLGtCQUFVLENBQUM7QUFBQSxpQkFBTUQsT0FB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b21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0IGFzIFJlYWN0QWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VzICE9PSBwcmV2TWVzc2FnZXMpIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhbnQgPSBlLnR5cGUgPT09IFwic3VjY2Vzc1wiID8gXCJwcmltYXJ5XCIgOiBcImRhbmdlclwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdEFsZXJ0IHZhcmlhbnQ9e3ZhcmlhbnR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2UubWVzc2FnZX1cbiAgICAgICAgICA8L1JlYWN0QWxlcnQ+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8PjwvPlxuICAgICk7XG4gIH07XG5cbiAgZGVsYXkgPSAod2FpdCkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkoXG4gICAgICAgIHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dFxuICAgICAgKS50aGVuKCgpID0+XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0UmVhY3RBbGVydHModGhpcy5wcm9wcy5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XG4gICAgaWYgKGUpIHRoaXMucHJvcHMuaXRlbURlbGV0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbURlbGV0ZShmYWxzZSk7XG4gIH07XG5cbiAgbmFtZU9mSXRlbSA9IFwiXCI7XG5cbiAgaXRlbUluZm8gPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGdldEl0ZW1JbmZvID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtSW5mbyh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5wYXJhbXMuc2hvd0RlbGV0ZURpYWxvZ31cbiAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZT7Qo9C00LDQu9C40YLRjCB7dGhpcy5uYW1lT2ZJdGVtfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT57dGhpcy5nZXRJdGVtSW5mbygpfTwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiB2YWx1ZT17ZmFsc2V9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgdmFsdWU9e3RydWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdE9mSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtZXNzYWdlczogW10sXG4gICAgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UsXG4gICAgaXRlbURlbGV0ZTogXCJcIixcbiAgICBpdGVtczogW10sXG4gICAgc29ydGVkQnk6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgfSxcbiAgfTtcblxuICB1cmwgPSBcIlwiO1xuICAvL3VwQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgdXBBcnJvdyA9IFwiXFx1MjE5MVwiO1xuICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICBkb3duQXJyb3cgPSBcIlxcdTIxOTNcIjtcbiAgbmFtZU9mSXRlbSA9IFwiXCI7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRJdGVtcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSB8fFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb25cbiAgICApIHtcbiAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSBcImFzY1wiXG4gICAgICA/IHRoaXMudXBBcnJvd1xuICAgICAgOiB0aGlzLmRvd25BcnJvdztcbiAgfVxuXG4gIGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcImVycm9yXCIsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1zXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7IGl0ZW1zOiByZXMuZGF0YSB9O1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0SXRlbXMgc3RhdGVcIiwgc3RhdGUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gIH07XG5cbiAgZ2V0SXRlbSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uaWQgPT09ICtpZClbMF07XG4gIH07XG5cbiAgYnRuU29ydENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgIGNvbnN0IHNvcnRlZEJ5ID0ge1xuICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgZGlyZWN0aW9uOiBcImRlc2NcIixcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGVkQnk6IHNvcnRlZEJ5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICAgIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSBcImRlc2NcIiA/IFwiYXNjXCIgOiBcImRlc2NcIjtcblxuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYnRuRGVsQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RlbGV0ZURpYWxvZzogdHJ1ZSxcbiAgICAgIGl0ZW1EZWxldGU6IGl0ZW0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnRuQWRkQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBidG5fYWRkOiBcIlwiIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbXCJyZWRpcmVjdFwiXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYnRuRWRpdENsaWNrID0gKGUpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6IFwiXCIsXG4gICAgICAgIGl0ZW1fcGs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbXCJyZWRpcmVjdFwiXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaXRlbURlbGV0ZSA9IChjb25maXJtKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuXG4gICAgaWYgKGNvbmZpcm0gPT09IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgIGJ0bl9kZWw6IFwiXCIsXG4gICAgICAgICAgaXRlbV9wazogdGhpcy5zdGF0ZS5pdGVtRGVsZXRlLmlkLFxuICAgICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVtczogcmVzLmRhdGEsXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7dGhpcy5uYW1lT2ZJdGVtfSDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L1gLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vTG9hZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItbG9hZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtZHVhbC1yaW5nXCIgLz5cbiAgPC9kaXY+XG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG4vLyBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDA4MjlcbnZhciBOT05fR0VORVJJQyA9ICEhTmF0aXZlUHJvbWlzZSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIE5hdGl2ZVByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10uY2FsbCh7IHRoZW46IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmZpbmFsbHlcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogTk9OX0dFTkVSSUMgfSwge1xuICAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBnZXRCdWlsdEluKCdQcm9taXNlJykpO1xuICAgIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICAgIHJldHVybiB0aGlzLnRoZW4oXG4gICAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseSxcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICAgIH0gOiBvbkZpbmFsbHlcbiAgICApO1xuICB9XG59KTtcblxuLy8gcGF0Y2ggbmF0aXZlIFByb21pc2UucHJvdG90eXBlIGZvciBuYXRpdmUgYXN5bmMgZnVuY3Rpb25zXG5pZiAoIUlTX1BVUkUgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UgPT0gJ2Z1bmN0aW9uJyAmJiAhTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSkge1xuICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ2ZpbmFsbHknLCBnZXRCdWlsdEluKCdQcm9taXNlJykucHJvdG90eXBlWydmaW5hbGx5J10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==