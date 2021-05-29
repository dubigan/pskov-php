(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/components/Alerts.tsx":
/*!**************************************!*\
  !*** ./assets/components/Alerts.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
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



var Alerts = /*#__PURE__*/function (_Component) {
  _inherits(Alerts, _Component);

  var _super = _createSuper(Alerts);

  function Alerts() {
    var _this;

    _classCallCheck(this, Alerts);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        messages: [],
        showAlert: false,
        timeout: 5000
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getAlerts", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(array) {
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

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: 'alert alert_' + type,
            key: index
          }, e.message);
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "delay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(wait) {
        return new Promise(function (resolve) {
          return global.setTimeout(function () {
            return resolve('');
          }, wait);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: [],
          showAlert: false
        });

        _this.props.clearMessages();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "showAlert", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.state.showAlert) {
          _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(_this.clearMessages);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null);
      }
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/components/DeleteDialog.tsx":
/*!********************************************!*\
  !*** ./assets/components/DeleteDialog.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteDialog; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/Modal */ "./assets/components/lib/Modal.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
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





var DeleteDialog = /*#__PURE__*/function (_Component) {
  _inherits(DeleteDialog, _Component);

  var _super = _createSuper(DeleteDialog);

  function DeleteDialog() {
    var _this;

    _classCallCheck(this, DeleteDialog);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        if (e) _this.props.itemDelete(e.target.value);
        return _this.props.itemDelete(false);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "nameOfItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(item) {
        return '';
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItemInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.props.params.itemDelete) {
          return _this.itemInfo(_this.props.params.itemDelete);
        }

        return '';
      }
    });
    return _this;
  }

  _createClass(DeleteDialog, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        baseClassName: "delete-dialog",
        show: this.props.show,
        onHide: this.handleClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
        closeButton: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Title, null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ", this.nameOfItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, this.getItemInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btn-secondary",
        value: false,
        onClick: this.handleClose
      }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btn-danger",
        value: true,
        onClick: this.handleClose
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
    }
  }]);

  return DeleteDialog;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./assets/components/ListOfItems.tsx":
/*!*******************************************!*\
  !*** ./assets/components/ListOfItems.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListOfItems; });
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Loader */ "./assets/components/Loader.tsx");
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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};









var ListOfItems = /*#__PURE__*/function (_Component) {
  _inherits(ListOfItems, _Component);

  var _super = _createSuper(ListOfItems);

  function ListOfItems() {
    var _this;

    _classCallCheck(this, ListOfItems);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        loading: false,
        messages: [],
        showDeleteDialog: false,
        itemDelete: undefined,
        items: [],
        sortedBy: _this.getDefaultSortedBy()
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "url", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    }); //upArrow = '&#x0225C;';

    Object.defineProperty(_assertThisInitialized(_this), "upArrow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "\u2191"
    }); //downArrow = '&#x0225C;';

    Object.defineProperty(_assertThisInitialized(_this), "downArrow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "\u2193"
    });
    Object.defineProperty(_assertThisInitialized(_this), "nameOfItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    });
    Object.defineProperty(_assertThisInitialized(_this), "addButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_assertThisInitialized(_this), "getKeyValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(obj, key) {
        return obj[key];
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getErrors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(data) {
        return Object.keys(data).map(function (key) {
          return {
            type: 'error',
            message: _this.getKeyValue(data, key)
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res, state;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.setState({
                    loading: true
                  }); //console.log('getItems owner', this.props.owner);

                  _context.prev = 1;
                  _context.next = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(this.url, {
                    sorted_by: this.state.sortedBy,
                    owner: this.props.owner ? this.props.owner : -1
                  });

                case 4:
                  res = _context.sent;
                  state = {
                    items: res.data
                  }; //console.log("getItems state", state);

                  this.setState(state);
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](1);
                  this.setState({
                    messages: this.getErrors(_context.t0.response.data)
                  });

                case 12:
                  _context.prev = 12;
                  this.setState({
                    loading: false
                  });
                  return _context.finish(12);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 9, 12, 15]]);
        }));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id) {
        return _this.state.items.filter(function (item) {
          return +item.id === +id;
        })[0];
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnSortClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var sorted_name = e.target.id; //console.log('btnSortClick.sorted_name', sorted_name);

        if (!sorted_name) return;

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

          var _sortedBy = Object.assign(Object.assign({}, _this.state.sortedBy), {
            direction: direction
          });

          _this.setState({
            sortedBy: _sortedBy
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnDelClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var item = _this.getItem(Number(e.target.value));

        _this.setState({
          showDeleteDialog: true,
          itemDelete: item
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnAddClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
          btn_add: ''
        }).then(function (res) {
          if (res.data.redirect) {
            //window.location.href = res.data['redirect'];
            _this.props.history.push(res.data.redirect);
          }
        })["catch"](function (err) {
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnEditClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var item_pk = e.target.value; //console.log('btnEditClick', item_pk);

        axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
          btn_edit: '',
          item_pk: item_pk,
          url: window.location.pathname
        }).then(function (res) {
          if (res.data.redirect) {
            //console.log('btnEditClick.history', this.props);
            //window.location.href = res.data['redirect'];
            _this.props.history.push(res.data.redirect);
          }
        })["catch"](function (err) {
          //console.log('btnEditClick.catch', err);
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItemId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(item) {
        return item ? item.id : -1;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemDelete", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(confirm) {
        _this.setState({
          showDeleteDialog: false
        });

        if (confirm === 'true') {
          _this.setState({
            loading: true
          });

          axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
            sorted_by: _this.state.sortedBy,
            btn_del: '',
            item_pk: _this.getItemId(_this.state.itemDelete),
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: []
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getThCell", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id, title, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("th", {
          className: "tooltip",
          id: id,
          onClick: _this.btnSortClick,
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], {
          id: id,
          className: "sorted-row"
        }, _this.state.sortedBy.name === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
          id: id
        }, _this.arrow), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
          id: id,
          className: "sorted-row__text"
        }, title)));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          value: id,
          variant: "primary",
          className: "btn-primary tooltip",
          onClick: _this.btnEditClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], {
          className: "tooltip__content tooltip__content_left"
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          value: id,
          variant: "danger",
          className: "btn-danger btn-danger_del tooltip",
          onClick: _this.btnDelClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], {
          className: "tooltip__content tooltip__content_left"
        }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getAddButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          variant: "primary",
          className: "btn-primary btn-primary_add tooltip",
          onClick: _this.btnAddClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDeleteDialog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {}
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteDialog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        //if (this.state.showDeleteDialog) return this.getDeleteDialog();
        return _this.getDeleteDialog();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {}
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_21__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_22__["default"], null) : this.getTable(), this.getAddButton());
    }
  }, {
    key: "arrow",
    get: function get() {
      return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]); //export default withRouter(ListOfItems);




/***/ }),

/***/ "./assets/components/Loader.tsx":
/*!**************************************!*\
  !*** ./assets/components/Loader.tsx ***!
  \**************************************/
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

/***/ "./assets/components/lib/Button.tsx":
/*!******************************************!*\
  !*** ./assets/components/lib/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Button = function Button(_ref) {
  var tooltip = _ref.tooltip,
      id = _ref.id,
      className = _ref.className,
      name = _ref.name,
      value = _ref.value,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: tooltip,
    id: id,
    className: className ? className : '',
    name: name,
    value: value,
    onClick: onClick,
    disabled: disabled
  }, children);
};
Button.defaultProps = {
  className: 'btn-primary',
  name: 'btn',
  disabled: false,
  tooltip: '',
  id: '',
  value: '',
  children: 'button'
}; //export Button;

/***/ }),

/***/ "./assets/components/lib/Modal.tsx":
/*!*****************************************!*\
  !*** ./assets/components/lib/Modal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var baseClass = 'modal-dialog';

var ModalHeader = function ModalHeader(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
  //   const classList = ref.current!.classList;
  //   console.log('ModalHeader.baseClass', baseClass);
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: ref,
    className: baseClass + '__header',
    id: props.id
  }, props.children);
};

var ModalTitle = function ModalTitle(props) {
  //useEffect(() => console.log('Modal.Title', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__title',
    id: props.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, props.children));
};

var ModalBody = function ModalBody(props) {
  //useEffect(() => console.log('Modal.Body', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__body',
    id: props.id
  }, props.children);
};

var ModalFooter = function ModalFooter(props) {
  //useEffect(() => console.log('Modal.Footer', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__footer',
    id: props.id
  }, props.children);
};

var Modal = function Modal(props) {
  var setBaseClass = function setBaseClass() {
    baseClass = props.baseClassName;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(setBaseClass, []);

  var changeShowStatus = function changeShowStatus() {
    var $body = document.querySelector('body');
    var $modal = document.querySelector('.' + props.baseClassName);
    var $modalBackdrop = document.querySelector('.' + props.baseClassName + '__backdrop');
    var $dialog = document.querySelector('.' + props.baseClassName + '__dialog'); //console.log('Modal.modal', $modal);

    if (props.show) {
      $body.classList.add('body-modal-open');
      $modalBackdrop.classList.add(props.baseClassName + '__backdrop_show');
      $modal.classList.add(props.baseClassName + '_show');
      $dialog.classList.add(props.baseClassName + '__dialog_show');
    } else {
      $body.classList.remove('body-modal-open');
      $modalBackdrop.classList.remove(props.baseClassName + '__backdrop_show');
      $modal.classList.remove(props.baseClassName + '_show');
      $dialog.classList.remove(props.baseClassName + '__dialog_show');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(changeShowStatus, [props.show]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__backdrop'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: props.baseClassName + '__dialog'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__children'
  }, props.children))));
};

Object.assign(Modal, {
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter
});
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./assets/components/lib/Row.tsx":
/*!***************************************!*\
  !*** ./assets/components/lib/Row.tsx ***!
  \***************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'row',
    id: id
  }, children);
};

/***/ }),

/***/ "./assets/components/lib/Table.tsx":
/*!*****************************************!*\
  !*** ./assets/components/lib/Table.tsx ***!
  \*****************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
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


var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: this.props.className ? this.props.className : 'table'
      }, this.props.children);
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ }),

/***/ "./assets/components/lib/Tooltip.tsx":
/*!*******************************************!*\
  !*** ./assets/components/lib/Tooltip.tsx ***!
  \*******************************************/
/*! exports provided: TooltipContent, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContent", function() { return TooltipContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TooltipContent = function TooltipContent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'tooltip__content'
  }, children);
};
var Tooltip = function Tooltip(_ref2) {
  var tooltip = _ref2.tooltip,
      children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TooltipContent, null, tooltip), children);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbGV0ZURpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdE9mSXRlbXMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3NzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJBbGVydHMiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwibWVzc2FnZXMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ0eXBlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwibWVzc2FnZSIsIkZyYWdtZW50Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwicHJvcHMiLCJjbGVhck1lc3NhZ2VzIiwic3RhdGUiLCJkZWxheSIsInRoZW4iLCJnZXRBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiRGVsZXRlRGlhbG9nIiwiaXRlbURlbGV0ZSIsInRhcmdldCIsIml0ZW0iLCJwYXJhbXMiLCJpdGVtSW5mbyIsIk1vZGFsIiwiYmFzZUNsYXNzTmFtZSIsInNob3ciLCJvbkhpZGUiLCJoYW5kbGVDbG9zZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJuYW1lT2ZJdGVtIiwiQm9keSIsImdldEl0ZW1JbmZvIiwiRm9vdGVyIiwiQnV0dG9uIiwib25DbGljayIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhcHBseSIsIkxpc3RPZkl0ZW1zIiwibG9hZGluZyIsInNob3dEZWxldGVEaWFsb2ciLCJ1bmRlZmluZWQiLCJpdGVtcyIsInNvcnRlZEJ5IiwiZ2V0RGVmYXVsdFNvcnRlZEJ5Iiwib2JqIiwiZGF0YSIsImtleXMiLCJnZXRLZXlWYWx1ZSIsImF4aW9zIiwicG9zdCIsInVybCIsInNvcnRlZF9ieSIsIm93bmVyIiwicmVzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJpZCIsImZpbHRlciIsInNvcnRlZF9uYW1lIiwibmFtZSIsImRpcmVjdGlvbiIsImFzc2lnbiIsImdldEl0ZW0iLCJOdW1iZXIiLCJidG5fYWRkIiwicmVkaXJlY3QiLCJoaXN0b3J5IiwicHVzaCIsImVyciIsIml0ZW1fcGsiLCJidG5fZWRpdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25maXJtIiwiYnRuX2RlbCIsImdldEl0ZW1JZCIsInRpdGxlIiwiYnRuU29ydENsaWNrIiwiVG9vbHRpcENvbnRlbnQiLCJSb3ciLCJhcnJvdyIsInZhcmlhbnQiLCJidG5FZGl0Q2xpY2siLCJidG5EZWxDbGljayIsImFkZEJ1dHRvbiIsImJ0bkFkZENsaWNrIiwiZ2V0RGVsZXRlRGlhbG9nIiwiZ2V0SXRlbXMiLCJkZWxldGVEaWFsb2ciLCJMb2FkZXIiLCJnZXRUYWJsZSIsImdldEFkZEJ1dHRvbiIsInVwQXJyb3ciLCJkb3duQXJyb3ciLCJ0b29sdGlwIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsImJhc2VDbGFzcyIsIk1vZGFsSGVhZGVyIiwicmVmIiwidXNlUmVmIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwic2V0QmFzZUNsYXNzIiwidXNlRWZmZWN0IiwiY2hhbmdlU2hvd1N0YXR1cyIsIiRib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1vZGFsIiwiJG1vZGFsQmFja2Ryb3AiLCIkZGlhbG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiVGFibGUiLCJUb29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxNOzs7OztBQUNqQixvQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0FDLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsT0FBNUIsRUFBcUM7QUFDakNDLGdCQUFVLEVBQUUsSUFEcUI7QUFFakNDLGtCQUFZLEVBQUUsSUFGbUI7QUFHakNDLGNBQVEsRUFBRSxJQUh1QjtBQUlqQ0MsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUUsRUFEUDtBQUVIQyxpQkFBUyxFQUFFLEtBRlI7QUFHSEMsZUFBTyxFQUFFO0FBSE47QUFKMEIsS0FBckM7QUFVQVIsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixXQUE1QixFQUF5QztBQUNyQ0MsZ0JBQVUsRUFBRSxJQUR5QjtBQUVyQ0Msa0JBQVksRUFBRSxJQUZ1QjtBQUdyQ0MsY0FBUSxFQUFFLElBSDJCO0FBSXJDQyxXQUFLLEVBQUUsZUFBQ0ksS0FBRCxFQUFXO0FBQ2QsZUFBT0EsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFD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QUFsQyxHQUE4QztBQUEzRCxPQUE3QixFQUFtRyxLQUFLVSxLQUFMLENBQVcwRyxRQUE5RyxDQUFQO0FBQ0g7QUFITDs7QUFBQTtBQUFBLEVBQTJCdEgsNENBQUssQ0FBQ3VCLFNBQWpDLEU7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU02RSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTZCO0FBQUEsTUFBMUJrQixRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQnBILFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN2RCxzQkFBT0YsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxhQUFTLEVBQUVBLFNBQVMsR0FBR0EsU0FBSCxHQUFlO0FBQXJDLEdBQTNCLEVBQXNGb0gsUUFBdEYsQ0FBUDtBQUNILENBRk07QUFHQSxJQUFNc0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBMkI7QUFBQSxNQUF4QnhCLE9BQXdCLFNBQXhCQSxPQUF3QjtBQUFBLE1BQWZFLFFBQWUsU0FBZkEsUUFBZTtBQUM5QyxzQkFBUXRILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUMsYUFBUyxFQUFFO0FBQWIsR0FBM0IsZUFDSkYsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm1HLGNBQXBCLEVBQW9DLElBQXBDLEVBQTBDZ0IsT0FBMUMsQ0FESSxFQUVKRSxRQUZJLENBQVI7QUFHSCxDQUpNLEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGF0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRBbGVydHNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVsYXlcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICh3YWl0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFyTWVzc2FnZXNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2hvd0FsZXJ0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkodGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0KS50aGVuKHRoaXMuY2xlYXJNZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLmdldEFsZXJ0cyh0aGlzLnN0YXRlLm1lc3NhZ2VzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiZcbiAgICAgICAgICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcykpIHtcbiAgICAgICAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICBzaG93QWxlcnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnNob3dBbGVydCgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbGliL01vZGFsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVDbG9zZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVPZkl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJpdGVtSW5mb1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtSW5mb1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgeyBiYXNlQ2xhc3NOYW1lOiBcImRlbGV0ZS1kaWFsb2dcIiwgc2hvdzogdGhpcy5wcm9wcy5zaG93LCBvbkhpZGU6IHRoaXMuaGFuZGxlQ2xvc2UgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuSGVhZGVyLCB7IGNsb3NlQnV0dG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuVGl0bGUsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lT2ZJdGVtKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkJvZHksIG51bGwsIHRoaXMuZ2V0SXRlbUluZm8oKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXNlY29uZGFyeVwiLCB2YWx1ZTogZmFsc2UsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXJcIiwgdmFsdWU6IHRydWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdE9mSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGF0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtRGVsZXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIHNvcnRlZEJ5OiB0aGlzLmdldERlZmF1bHRTb3J0ZWRCeSgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy91cEFycm93ID0gJyYjeDAyMjVDOyc7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwQXJyb3dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICdcXHUyMTkxJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy9kb3duQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZG93bkFycm93XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnXFx1MjE5MydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVPZkl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJhZGRCdXR0b25cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRLZXlWYWx1ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKG9iaiwga2V5KSA9PiBvYmpba2V5XVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0RXJyb3JzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiB0aGlzLmdldEtleVZhbHVlKGRhdGEsIGtleSkgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1zXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpcy5wcm9wcy5vd25lciA/IHRoaXMucHJvcHMub3duZXIgOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0geyBpdGVtczogcmVzLmRhdGEgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1zIHN0YXRlXCIsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0blNvcnRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZEJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNvcnRlZEJ5KSwgeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidG5EZWxDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuQWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0bkVkaXRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtX3BrID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrJywgaXRlbV9wayk7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljay5oaXN0b3J5JywgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmNhdGNoJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1JZFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uaWQgOiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIml0ZW1EZWxldGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChjb25maXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX3BrOiB0aGlzLmdldEl0ZW1JZCh0aGlzLnN0YXRlLml0ZW1EZWxldGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHJlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xlYXJNZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRUaENlbGxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpZCwgdGl0bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiLCBpZDogaWQsIG9uQ2xpY2s6IHRoaXMuYnRuU29ydENsaWNrLCBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzQ1xcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTAwQTBcXHUwNDM0XFx1MDQzQlxcdTA0NEZcXHUwMEEwXFx1MDQ0MVxcdTA0M0VcXHUwNDQwXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDNBXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgPT09IGlkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQgfSwgdGhpcy5hcnJvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd19fdGV4dFwiIH0sIHRpdGxlKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEJ1dHRvbnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSB0b29sdGlwXCIsIG9uQ2xpY2s6IHRoaXMuYnRuRWRpdENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiIH0sIFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFx1MjdmNicpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsIGNsYXNzTmFtZTogXCJidG4tZGFuZ2VyIGJ0bi1kYW5nZXJfZGVsIHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5idG5EZWxDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRBZGRCdXR0b25cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9hZGQgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkFkZENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzVcXHUwMEEwXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzNcXHUwNDNFXFx1MDBBMFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzQlxcdTA0MzBcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQ0NlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIitcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldERlbGV0ZURpYWxvZ1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkZWxldGVEaWFsb2dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnN0YXRlLnNob3dEZWxldGVEaWFsb2cpIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0VGFibGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdFNvcnRlZEJ5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgfHxcbiAgICAgICAgICAgIHByZXZTdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gIT09IHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGFycm93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09ICdhc2MnID8gdGhpcy51cEFycm93IDogdGhpcy5kb3duQXJyb3c7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgeyBtZXNzYWdlczogdGhpcy5zdGF0ZS5tZXNzYWdlcywgY2xlYXJNZXNzYWdlczogdGhpcy5jbGVhck1lc3NhZ2VzIH0pLFxuICAgICAgICAgICAgdGhpcy5kZWxldGVEaWFsb2coKSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBudWxsKSA6IHRoaXMuZ2V0VGFibGUoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWRkQnV0dG9uKCkpKTtcbiAgICB9XG59XG4vL2V4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdE9mSXRlbXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjZW50ZXItbG9hZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxkcy1kdWFsLXJpbmdcIiB9KSkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdtb2RhbC1kaWFsb2cnO1xuY29uc3QgTW9kYWxIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnN0IGNsYXNzTGlzdCA9IHJlZi5jdXJyZW50IS5jbGFzc0xpc3Q7XG4gICAgLy8gICBjb25zb2xlLmxvZygnTW9kYWxIZWFkZXIuYmFzZUNsYXNzJywgYmFzZUNsYXNzKTtcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19oZWFkZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLlRpdGxlJywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX190aXRsZScsIGlkOiBwcm9wcy5pZCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgcHJvcHMuY2hpbGRyZW4pKSk7XG59O1xuY29uc3QgTW9kYWxCb2R5ID0gKHByb3BzKSA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLkJvZHknLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2JvZHknLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbEZvb3RlciA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Gb290ZXInLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2Zvb3RlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc2V0QmFzZUNsYXNzID0gKCkgPT4ge1xuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KHNldEJhc2VDbGFzcywgW10pO1xuICAgIGNvbnN0IGNoYW5nZVNob3dTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICBjb25zdCAkbW9kYWxCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wJyk7XG4gICAgICAgIGNvbnN0ICRkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kYWwubW9kYWwnLCAkbW9kYWwpO1xuICAgICAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LmFkZChwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5hZGQocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LW1vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wX3Nob3cnKTtcbiAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX3Nob3cnKTtcbiAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nX3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KGNoYW5nZVNob3dTdGF0dXMsIFtwcm9wcy5zaG93XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogcHJvcHMuaWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19jaGlsZHJlbicgfSwgcHJvcHMuY2hpbGRyZW4pKSkpKTtcbn07XG5PYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gICAgSGVhZGVyOiBNb2RhbEhlYWRlcixcbiAgICBUaXRsZTogTW9kYWxUaXRsZSxcbiAgICBCb2R5OiBNb2RhbEJvZHksXG4gICAgRm9vdGVyOiBNb2RhbEZvb3Rlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAndGFibGUnIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=