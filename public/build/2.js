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
      messages: [],
      showAlert: false,
      timeout: 5000
    });

    _defineProperty(_assertThisInitialized(_this), "getReactAlerts", function (array) {
      return array ? array.map(function (e, index) {
        var type = 'danger';

        switch (e.type) {
          case 'info':
            type = 'info';
            break;

          case 'success':
            type = 'success';
            break;

          case 'error':
            type = 'danger';
            break;

          default:
            type = 'danger';
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
          variant: type,
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
          _this.setState({
            messages: [],
            showAlert: false
          });

          _this.props.clearMessages();
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getReactAlerts(_this.state.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
    });

    return _this;
  }

  _createClass(Alerts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showAlert = false;
      var messages = this.props.messages; //const { messages: prevMessages } = prevProps;
      //console.log('Alerts', messages);

      if (messages && messages.length > 0 && JSON.stringify(this.state.messages) !== JSON.stringify(messages)) {
        showAlert = true;
      }

      if (showAlert && !this.state.showAlert) {
        this.setState({
          messages: messages,
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
      itemDelete: '',
      items: [],
      sortedBy: _this.getDefaultSortedBy()
    });

    _defineProperty(_assertThisInitialized(_this), "url", '');

    _defineProperty(_assertThisInitialized(_this), "upArrow", "\u2191");

    _defineProperty(_assertThisInitialized(_this), "downArrow", "\u2193");

    _defineProperty(_assertThisInitialized(_this), "nameOfItem", '');

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
      return Object.keys(data).map(function (key) {
        return {
          type: 'error',
          message: data[key]
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItems", function () {
      _this.setState({
        loading: true
      });

      console.log('getItems owner', _this.props.owner);
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        sorted_by: _this.state.sortedBy,
        owner: _this.props.owner ? _this.props.owner : -1
      }).then(function (res) {
        console.log('getItems', res.data);
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
          direction: 'desc'
        };

        _this.setState({
          sortedBy: sortedBy
        });
      } else {
        var direction = _this.state.sortedBy.direction === 'desc' ? 'asc' : 'desc';

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
        btn_add: ''
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data['redirect'];
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
        btn_edit: '',
        item_pk: item_pk,
        url: window.location.pathname
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data['redirect'];
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

      if (confirm === 'true') {
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
          sorted_by: _this.state.sortedBy,
          btn_del: '',
          item_pk: _this.state.itemDelete.id,
          owner: _this.props.owner ? _this.props.owner : -1
        }).then(function (res) {
          _this.setState({
            items: res.data,
            messages: [{
              type: 'success',
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

    _defineProperty(_assertThisInitialized(_this), "clearMessages", function () {
      _this.setState({
        messages: []
      });
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
        name: '',
        direction: 'asc'
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
      return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJtZXNzYWdlcyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImNsZWFyTWVzc2FnZXMiLCJnZXRSZWFjdEFsZXJ0cyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJEZWxldGVEaWFsb2ciLCJpdGVtRGVsZXRlIiwidGFyZ2V0IiwidmFsdWUiLCJpdGVtIiwicGFyYW1zIiwiaXRlbUluZm8iLCJzaG93RGVsZXRlRGlhbG9nIiwiaGFuZGxlQ2xvc2UiLCJuYW1lT2ZJdGVtIiwiZ2V0SXRlbUluZm8iLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJpdGVtcyIsInNvcnRlZEJ5IiwiZ2V0RGVmYXVsdFNvcnRlZEJ5IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwib3duZXIiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJyZXMiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ2V0SXRlbSIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIml0ZW1fcGsiLCJidG5fZWRpdCIsInBhdGhuYW1lIiwiY29uZmlybSIsImJ0bl9kZWwiLCJnZXRJdGVtcyIsInVwQXJyb3ciLCJkb3duQXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWDtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxlQUFTLEVBQUUsS0FGTDtBQUdOQyxhQUFPLEVBQUU7QUFISCxLOztxRUE0QlMsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCLGFBQU9BLEtBQUssR0FDVkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdEIsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNFLGVBQUssTUFBTDtBQUNFQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDRixlQUFLLFNBQUw7QUFDRUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNGO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQVhKOztBQWFBLDRCQUNF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RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMseUVBQXNCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLCtHQUF5QztBQUNyRSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCx5QkFBeUIsbUJBQU8sQ0FBQyxpR0FBa0M7QUFDbkUscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7O0FBRTlDO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CLGNBQWMsRUFBRSxlQUFlLGNBQWM7QUFDNUcsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsR0FBRyxrRUFBa0U7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxVQUFVLEVBQUU7QUFDNUUsT0FBTztBQUNQO0FBQ0EsZ0VBQWdFLFNBQVMsRUFBRTtBQUMzRSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydCBhcyBSZWFjdEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuXG4gICAgaWYgKFxuICAgICAgbWVzc2FnZXMgJiZcbiAgICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcylcbiAgICApIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdEFsZXJ0IHZhcmlhbnQ9e3R5cGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2UubWVzc2FnZX1cbiAgICAgICAgICA8L1JlYWN0QWxlcnQ+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8PjwvPlxuICAgICk7XG4gIH07XG5cbiAgZGVsYXkgPSB3YWl0ID0+XG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnN0YXRlLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsb3NlID0gKGUpID0+IHtcbiAgICBpZiAoZSkgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBuYW1lT2ZJdGVtID0gXCJcIjtcblxuICBpdGVtSW5mbyA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBzaG93PXt0aGlzLnByb3BzLnBhcmFtcy5zaG93RGVsZXRlRGlhbG9nfVxuICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlPtCj0LTQsNC70LjRgtGMIHt0aGlzLm5hbWVPZkl0ZW19PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5Pnt0aGlzLmdldEl0ZW1JbmZvKCl9PC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHZhbHVlPXtmYWxzZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICDQntGC0LzQtdC90LBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiB2YWx1ZT17dHJ1ZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RPZkl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHNob3dEZWxldGVEaWFsb2c6IGZhbHNlLFxuICAgIGl0ZW1EZWxldGU6ICcnLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzb3J0ZWRCeTogdGhpcy5nZXREZWZhdWx0U29ydGVkQnkoKSxcbiAgfTtcblxuICB1cmwgPSAnJztcbiAgLy91cEFycm93ID0gJyYjeDAyMjVDOyc7XG4gIHVwQXJyb3cgPSAnXFx1MjE5MSc7XG4gIC8vZG93bkFycm93ID0gJyYjeDAyMjVDOyc7XG4gIGRvd25BcnJvdyA9ICdcXHUyMTkzJztcbiAgbmFtZU9mSXRlbSA9ICcnO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgfVxuXG4gIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkubmFtZSAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lIHx8XG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvblxuICAgICkge1xuICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09ICdhc2MnXG4gICAgICA/IHRoaXMudXBBcnJvd1xuICAgICAgOiB0aGlzLmRvd25BcnJvdztcbiAgfVxuXG4gIGdldEVycm9ycyA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdnZXRJdGVtcyBvd25lcicsIHRoaXMucHJvcHMub3duZXIpO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldEl0ZW1zJywgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gIH07XG5cbiAgZ2V0SXRlbSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgfTtcblxuICBidG5Tb3J0Q2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgIGNvbnN0IHNvcnRlZEJ5ID0ge1xuICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgZGlyZWN0aW9uOiAnZGVzYycsXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPVxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG5cbiAgICAgIGNvbnN0IHNvcnRlZEJ5ID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0ZWRCeTogc29ydGVkQnkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGJ0bkRlbENsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgaXRlbURlbGV0ZTogaXRlbSxcbiAgICB9KTtcbiAgfTtcblxuICBidG5BZGRDbGljayA9IGUgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBidG5fYWRkOiAnJyB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGJ0bkVkaXRDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwiYnRuRWRpdENsaWNrXCIsIGl0ZW1fcGspO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIGJ0bl9lZGl0OiAnJyxcbiAgICAgICAgaXRlbV9wazogaXRlbV9wayxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGl0ZW1EZWxldGUgPSBjb25maXJtID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UgfSk7XG5cbiAgICBpZiAoY29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgIGJ0bl9kZWw6ICcnLFxuICAgICAgICAgIGl0ZW1fcGs6IHRoaXMuc3RhdGUuaXRlbURlbGV0ZS5pZCxcbiAgICAgICAgICBvd25lcjogdGhpcy5wcm9wcy5vd25lciA/IHRoaXMucHJvcHMub3duZXIgOiAtMSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1zOiByZXMuZGF0YSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7dGhpcy5uYW1lT2ZJdGVtfSDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L1gLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Mb2FkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1sb2FkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1kdWFsLXJpbmdcIiAvPlxuICA8L2Rpdj5cbik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXS5jYWxsKHsgdGhlbjogZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9IH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9