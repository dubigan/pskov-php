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
      }); //console.log('getItems owner', this.props.owner);


      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
        sorted_by: _this.state.sortedBy,
        owner: _this.props.owner ? _this.props.owner : -1
      }).then(function (res) {
        //console.log('getItems', res.data);
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
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Loader.css */ "./assets/components/css/Loader.css");
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Loader_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-dual-ring"
  }));
});

/***/ }),

/***/ "./assets/components/css/Loader.css":
/*!******************************************!*\
  !*** ./assets/components/css/Loader.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jc3MvTG9hZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmZpbmFsbHkuanMiXSwibmFtZXMiOlsiQWxlcnRzIiwibWVzc2FnZXMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJjbGVhck1lc3NhZ2VzIiwiZ2V0UmVhY3RBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiRGVsZXRlRGlhbG9nIiwiaXRlbURlbGV0ZSIsInRhcmdldCIsInZhbHVlIiwiaXRlbSIsInBhcmFtcyIsIml0ZW1JbmZvIiwic2hvd0RlbGV0ZURpYWxvZyIsImhhbmRsZUNsb3NlIiwibmFtZU9mSXRlbSIsImdldEl0ZW1JbmZvIiwiTGlzdE9mSXRlbXMiLCJsb2FkaW5nIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwic29ydGVkX2J5Iiwib3duZXIiLCJyZXMiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ2V0SXRlbSIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIml0ZW1fcGsiLCJidG5fZWRpdCIsInBhdGhuYW1lIiwiY29uZmlybSIsImJ0bl9kZWwiLCJnZXRJdGVtcyIsInVwQXJyb3ciLCJkb3duQXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWDtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxlQUFTLEVBQUUsS0FGTDtBQUdOQyxhQUFPLEVBQUU7QUFISCxLOztxRUE0QlMsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCLGFBQU9BLEtBQUssR0FDVkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdEIsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNFLGVBQUssTUFBTDtBQUNFQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDRixlQUFLLFNBQUw7QUFDRUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNGO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQVhKOztBQWFBLDRCQUNFLDJEQUFDLHFEQUFE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ckMsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjtBQUM1QyxvQkFBb0IsbUJBQU8sQ0FBQywrR0FBeUM7QUFDckUsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQseUJBQXlCLG1CQUFPLENBQUMsaUdBQWtDO0FBQ25FLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCxlQUFlLG1CQUFPLENBQUMsMkVBQXVCOztBQUU5QztBQUNBO0FBQ0EsMkNBQTJDLG9CQUFvQixjQUFjLEVBQUUsZUFBZSxjQUFjO0FBQzVHLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsa0VBQWtFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsVUFBVSxFQUFFO0FBQzVFLE9BQU87QUFDUDtBQUNBLGdFQUFnRSxTQUFTLEVBQUU7QUFDM0UsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcblxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2VzICYmXG4gICAgICBtZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpXG4gICAgKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt0eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gd2FpdCA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkoXG4gICAgICAgIHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dFxuICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0UmVhY3RBbGVydHModGhpcy5zdGF0ZS5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XG4gICAgaWYgKGUpIHRoaXMucHJvcHMuaXRlbURlbGV0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbURlbGV0ZShmYWxzZSk7XG4gIH07XG5cbiAgbmFtZU9mSXRlbSA9IFwiXCI7XG5cbiAgaXRlbUluZm8gPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGdldEl0ZW1JbmZvID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtSW5mbyh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5wYXJhbXMuc2hvd0RlbGV0ZURpYWxvZ31cbiAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZT7Qo9C00LDQu9C40YLRjCB7dGhpcy5uYW1lT2ZJdGVtfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT57dGhpcy5nZXRJdGVtSW5mbygpfTwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiB2YWx1ZT17ZmFsc2V9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgdmFsdWU9e3RydWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICBpdGVtRGVsZXRlOiAnJyxcbiAgICBpdGVtczogW10sXG4gICAgc29ydGVkQnk6IHRoaXMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCksXG4gIH07XG5cbiAgdXJsID0gJyc7XG4gIC8vdXBBcnJvdyA9ICcmI3gwMjI1QzsnO1xuICB1cEFycm93ID0gJ1xcdTIxOTEnO1xuICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICBkb3duQXJyb3cgPSAnXFx1MjE5Myc7XG4gIG5hbWVPZkl0ZW0gPSAnJztcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW1zKCk7XG4gIH1cblxuICBnZXREZWZhdWx0U29ydGVkQnkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSB8fFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb25cbiAgICApIHtcbiAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnYXNjJ1xuICAgICAgPyB0aGlzLnVwQXJyb3dcbiAgICAgIDogdGhpcy5kb3duQXJyb3c7XG4gIH1cblxuICBnZXRFcnJvcnMgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtcyBvd25lcicsIHRoaXMucHJvcHMub3duZXIpO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMnLCByZXMuZGF0YSk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyBpdGVtczogcmVzLmRhdGEgfTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1zIHN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcblxuICBnZXRJdGVtID0gaWQgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICB9O1xuXG4gIGJ0blNvcnRDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHNvcnRlZF9uYW1lID0gZS50YXJnZXQuaWQ7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSBzb3J0ZWRfbmFtZSkge1xuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIG5hbWU6IHNvcnRlZF9uYW1lLFxuICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGVkQnk6IHNvcnRlZEJ5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICAgIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcblxuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYnRuRGVsQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEZWxldGVEaWFsb2c6IHRydWUsXG4gICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgIH0pO1xuICB9O1xuXG4gIGJ0bkFkZENsaWNrID0gZSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYnRuRWRpdENsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgaXRlbV9wayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vY29uc29sZS5sb2coXCJidG5FZGl0Q2xpY2tcIiwgaXRlbV9wayk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaXRlbURlbGV0ZSA9IGNvbmZpcm0gPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSB9KTtcblxuICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgaXRlbV9wazogdGhpcy5zdGF0ZS5pdGVtRGVsZXRlLmlkLFxuICAgICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbXM6IHJlcy5kYXRhLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Nzcy9Mb2FkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1sb2FkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1kdWFsLXJpbmdcIiAvPlxuICA8L2Rpdj5cbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXS5jYWxsKHsgdGhlbjogZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9IH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9