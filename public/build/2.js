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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
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
      timeout: 7000
    });

    _defineProperty(_assertThisInitialized(_this), "getAlerts", function (array) {
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: 'alert alert_' + type,
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
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

_defineProperty(Alerts, "propTypes", {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array.isRequired,
  clearMessages: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
});



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
/* harmony import */ var _lib_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/Modal */ "./assets/components/lib/Modal.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
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

    _this.handleClose = function (e) {
      if (e) _this.props.itemDelete(e.target.value);
      return _this.props.itemDelete(false);
    };

    _this.nameOfItem = '';

    _this.itemInfo = function (item) {
      return '';
    };

    _this.getItemInfo = function () {
      if (_this.props.params.itemDelete) {
        return _this.itemInfo(_this.props.params.itemDelete);
      }

      return '';
    };

    return _this;
  }

  _createClass(DeleteDialog, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        baseClassName: "delete-dialog",
        show: this.props.show,
        onHide: this.handleClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
        closeButton: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ", this.nameOfItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, this.getItemInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn-secondary",
        value: false,
        onClick: this.handleClose
      }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn-danger",
        value: true,
        onClick: this.handleClose
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
    }
  }]);

  return DeleteDialog;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



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
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Loader */ "./assets/components/Loader.js");
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

    _defineProperty(_assertThisInitialized(_this), "addButton", false);

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
          //window.location.href = res.data['redirect'];
          _this.props.history.push(res.data.redirect);
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
          //console.log('btnEditClick.props', this.props);
          //window.location.href = res.data['redirect'];
          _this.props.history.push(res.data.redirect);
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

    _defineProperty(_assertThisInitialized(_this), "getThCell", function (id, title, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th", {
        className: "tooltip",
        id: id,
        onClick: _this.btnSortClick,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        id: id,
        className: "sorted-row"
      }, _this.state.sortedBy.name === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: id
      }, _this.arrow), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: id,
        className: "sorted-row__text"
      }, title)));
    });

    _defineProperty(_assertThisInitialized(_this), "getButtons", function (id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_13__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        value: id,
        variant: "primary",
        className: "btn-primary tooltip",
        onClick: _this.btnEditClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        value: id,
        variant: "danger",
        className: "btn-danger btn-danger_del tooltip",
        onClick: _this.btnDelClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
    });

    _defineProperty(_assertThisInitialized(_this), "getAddButton", function () {
      if (_this.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "primary",
        className: "btn-primary btn-primary_add tooltip",
        onClick: _this.btnAddClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
    });

    _defineProperty(_assertThisInitialized(_this), "getDeleteDialog", function () {});

    _defineProperty(_assertThisInitialized(_this), "deleteDialog", function () {
      //if (this.state.showDeleteDialog) return this.getDeleteDialog();
      return _this.getDeleteDialog();
    });

    _defineProperty(_assertThisInitialized(_this), "getTable", function () {});

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_16__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], null) : this.getTable(), this.getAddButton());
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
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
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

 //type TModalPart<T> = React.FC<T> & { baseClass?: string };

function ModalHeader(baseClassName) {
  var baseClass = baseClassName;

  var ModalHeader = function ModalHeader(props) {
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      return console.log('ModalHeader.baseClass', baseClass);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: baseClass + '__header',
      id: props.id
    }, props.children);
  };

  return ModalHeader;
} // function ModalHeader(props: TModalHeaderProps): JSX.Element & { baseClass: string } {
//   var baseClass: string = 'modal';
//   const el = (
//     <div className={baseClass + '__header'} id={props.id}>
//       {props.children}
//     </div>
//   );
//   return Object.assign(el, { baseClass: '' });
// }


function ModalTitle(baseClassName) {
  var baseClass = baseClassName;

  var ModalTitle = function ModalTitle(props) {
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      return console.log('Modal.Title', baseClass);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: baseClass + '__title',
      id: props.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, props.children));
  };

  return ModalTitle;
}

function ModalBody(baseClassName) {
  var baseClass = baseClassName;

  var ModalBody = function ModalBody(props) {
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      return console.log('Modal.Body', baseClass);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: baseClass + '__body',
      id: props.id
    }, props.children);
  };

  return ModalBody;
}

function ModalFooter(baseClassName) {
  var baseClass = baseClassName;

  var ModalFooter = function ModalFooter(props) {
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      return console.log('Modal.Footer', baseClass);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: baseClass + '__footer',
      id: props.id
    }, props.children);
  };

  return ModalFooter;
}

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.apply(this, arguments); // public Header = ModalHeader(this.props.baseClassName);
    // public Title = ModalTitle(this.props.baseClassName);
    // public Body = ModalBody(this.props.baseClassName);
    // public Footer = ModalFooter(this.props.baseClassName);

    _this.changeShowStatus = function () {
      var $body = document.querySelector('body');
      var $modal = document.querySelector('.' + _this.props.baseClassName);
      var $modalBackdrop = document.querySelector('.' + _this.props.baseClassName + '__backdrop');
      var $dialog = document.querySelector('.' + _this.props.baseClassName + '__dialog'); //console.log('Modal.modal', $modal);

      if (_this.props.show) {
        $body.classList.add('body-modal-open');
        $modalBackdrop.classList.add(_this.props.baseClassName + '__backdrop_show');
        $modal.classList.add(_this.props.baseClassName + '_show');
        $dialog.classList.add(_this.props.baseClassName + '__dialog_show');
      } else {
        $body.classList.remove('body-modal-open');
        $modalBackdrop.classList.remove(_this.props.baseClassName + '__backdrop_show');
        $modal.classList.remove(_this.props.baseClassName + '_show');
        $dialog.classList.remove(_this.props.baseClassName + '__dialog_show');
      }
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('Modal.baseClassName', this.props.baseClassName);
      this.changeShowStatus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('Modal.baseClassName', this.props.baseClassName);

      if (this.props.show != prevProps.show) {
        this.changeShowStatus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.baseClassName + '__backdrop' + ' ' + this.props.baseClassName + '__backdrop_show'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.baseClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.props.baseClassName + '__dialog'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.baseClassName + '__children'
      }, this.props.children))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var baseClass = 'delete-dialog';
Object.assign(Modal, {
  Header: ModalHeader(baseClass),
  Title: ModalTitle(baseClass),
  Body: ModalBody(baseClass),
  Footer: ModalFooter(baseClass)
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
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'row'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0T2ZJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3NzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJBbGVydHMiLCJtZXNzYWdlcyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImNsZWFyTWVzc2FnZXMiLCJnZXRBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJEZWxldGVEaWFsb2ciLCJhcmd1bWVudHMiLCJoYW5kbGVDbG9zZSIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWVPZkl0ZW0iLCJpdGVtSW5mbyIsIml0ZW0iLCJnZXRJdGVtSW5mbyIsInBhcmFtcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiYmFzZUNsYXNzTmFtZSIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwic29ydGVkX2J5Iiwib3duZXIiLCJyZXMiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ2V0SXRlbSIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsImhpc3RvcnkiLCJwdXNoIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbmZpcm0iLCJidG5fZGVsIiwidGl0bGUiLCJidG5Tb3J0Q2xpY2siLCJhcnJvdyIsImJ0bkVkaXRDbGljayIsImJ0bkRlbENsaWNrIiwiYWRkQnV0dG9uIiwiYnRuQWRkQ2xpY2siLCJnZXREZWxldGVEaWFsb2ciLCJnZXRJdGVtcyIsImRlbGV0ZURpYWxvZyIsImdldFRhYmxlIiwiZ2V0QWRkQnV0dG9uIiwidXBBcnJvdyIsImRvd25BcnJvdyIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiTW9kYWxIZWFkZXIiLCJiYXNlQ2xhc3MiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiY2hhbmdlU2hvd1N0YXR1cyIsIiRib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1vZGFsIiwiJG1vZGFsQmFja2Ryb3AiLCIkZGlhbG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiRnJhZ21lbnQiLCJhc3NpZ24iLCJSb3ciLCJUYWJsZSIsIlRvb2x0aXBDb250ZW50IiwiVG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFNWDtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxlQUFTLEVBQUUsS0FGTDtBQUdOQyxhQUFPLEVBQUU7QUFISCxLOztnRUF3QkksVUFBQUMsS0FBSyxFQUFJO0FBQ25CLGFBQU9BLEtBQUssR0FDVkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdEIsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNFLGVBQUssTUFBTDtBQUNFQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDRixlQUFLLFNBQUw7QUFDRUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNGO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQVhKOztBQWFBLDRCQUNFO0FBQUssbUJBQVMsRUFBRSxpQkFBaUJBLElBQWpDO0FBQXVDLGFBQUcsRUFBRUQ7QUFBNUMsV0FDR0QsQ0FBQyxDQUFDRyxPQURMLENBREY7QUFLRCxPQXBCRCxDQURVLGdCQXVCVix1SEF2QkY7QUF5QkQsSzs7NERBRU8sVUFBQUMsSUFBSTtBQUFBLGFBQ1YsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUNyQkMsa0JBQVUsQ0FBQztBQUFBLGlCQUFNRCxPQUFPLEVBQWI7QUFBQSxTQUFELEVBQWtCRixJQUFsQixDQUFWO0FBQ0QsT0FGRCxDQURVO0FBQUEsSzs7Z0VBS0Es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IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFsZXJ0IGFzIFJlYWN0QWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgY2xlYXJNZXNzYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA3MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG5cbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxlcnRzID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhbGVydCBhbGVydF8nICsgdHlwZX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gd2FpdCA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkodGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0QWxlcnRzKHRoaXMuc3RhdGUubWVzc2FnZXMpfTwvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnNob3dBbGVydCgpfTwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2xpYi9Nb2RhbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1EZWxldGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbURlbGV0ZShmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmFtZU9mSXRlbSA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1JbmZvID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRJdGVtSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbUluZm8odGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7IGJhc2VDbGFzc05hbWU6IFwiZGVsZXRlLWRpYWxvZ1wiLCBzaG93OiB0aGlzLnByb3BzLnNob3csIG9uSGlkZTogdGhpcy5oYW5kbGVDbG9zZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5IZWFkZXIsIHsgY2xvc2VCdXR0b246IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5UaXRsZSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVPZkl0ZW0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuQm9keSwgbnVsbCwgdGhpcy5nZXRJdGVtSW5mbygpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuRm9vdGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tc2Vjb25kYXJ5XCIsIHZhbHVlOiBmYWxzZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLWRhbmdlclwiLCB2YWx1ZTogdHJ1ZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICBpdGVtRGVsZXRlOiAnJyxcbiAgICBpdGVtczogW10sXG4gICAgc29ydGVkQnk6IHRoaXMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCksXG4gIH07XG5cbiAgdXJsID0gJyc7XG4gIC8vdXBBcnJvdyA9ICcmI3gwMjI1QzsnO1xuICB1cEFycm93ID0gJ1xcdTIxOTEnO1xuICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICBkb3duQXJyb3cgPSAnXFx1MjE5Myc7XG4gIG5hbWVPZkl0ZW0gPSAnJztcblxuICBhZGRCdXR0b24gPSBmYWxzZTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW1zKCk7XG4gIH1cblxuICBnZXREZWZhdWx0U29ydGVkQnkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSB8fFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb25cbiAgICApIHtcbiAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnYXNjJyA/IHRoaXMudXBBcnJvdyA6IHRoaXMuZG93bkFycm93O1xuICB9XG5cbiAgZ2V0RXJyb3JzID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1zJywgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gIH07XG5cbiAgZ2V0SXRlbSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgfTtcblxuICBidG5Tb3J0Q2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcblxuICAgIGlmICghc29ydGVkX25hbWUpIHJldHVybjtcbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSBzb3J0ZWRfbmFtZSkge1xuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIG5hbWU6IHNvcnRlZF9uYW1lLFxuICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGVkQnk6IHNvcnRlZEJ5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcblxuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYnRuRGVsQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEZWxldGVEaWFsb2c6IHRydWUsXG4gICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgIH0pO1xuICB9O1xuXG4gIGJ0bkFkZENsaWNrID0gZSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYnRuRWRpdENsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgaXRlbV9wayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vY29uc29sZS5sb2coXCJidG5FZGl0Q2xpY2tcIiwgaXRlbV9wayk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2sucHJvcHMnLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpdGVtRGVsZXRlID0gY29uZmlybSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuXG4gICAgaWYgKGNvbmZpcm0gPT09ICd0cnVlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgICBidG5fZGVsOiAnJyxcbiAgICAgICAgICBpdGVtX3BrOiB0aGlzLnN0YXRlLml0ZW1EZWxldGUuaWQsXG4gICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVtczogcmVzLmRhdGEsXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICB9O1xuXG4gIGdldFRoQ2VsbCA9IChpZCwgdGl0bGUsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0aCBjbGFzc05hbWU9XCJ0b29sdGlwXCIgaWQ9e2lkfSBvbkNsaWNrPXt0aGlzLmJ0blNvcnRDbGlja30ga2V5PXtpbmRleH0+XG4gICAgICAgIDxUb29sdGlwQ29udGVudD7QndCw0LbQvNC40YLQtSZuYnNwO9C00LvRjyZuYnNwO9GB0L7RgNGC0LjRgNC+0LLQutC4PC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgPFJvdyBpZD17aWR9IGNsYXNzTmFtZT1cInNvcnRlZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lID09PSBpZCAmJiA8ZGl2IGlkPXtpZH0+e3RoaXMuYXJyb3d9PC9kaXY+fXsnICd9XG4gICAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cInNvcnRlZC1yb3dfX3RleHRcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L3RoPlxuICAgICk7XG4gIH07XG5cbiAgZ2V0QnV0dG9ucyA9IGlkID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgdG9vbHRpcFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5idG5FZGl0Q2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcENvbnRlbnQgY2xhc3NOYW1lPVwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIj5cbiAgICAgICAgICAgINCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LVcbiAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgIHsnXFx1MjdmNid9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1kYW5nZXIgYnRuLWRhbmdlcl9kZWwgdG9vbHRpcFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5idG5EZWxDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sdGlwQ29udGVudCBjbGFzc05hbWU9XCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiPlxuICAgICAgICAgICAg0KPQtNCw0LvQtdC90LjQtVxuICAgICAgICAgIDwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgeFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH07XG5cbiAgZ2V0QWRkQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmFkZEJ1dHRvbilcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuQWRkQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcENvbnRlbnQ+0JTQvtCx0LDQstC70LXQvdC40LUmbmJzcDvQvdC+0LLQvtCz0L4mbmJzcDvQsNCy0YLQvtCy0LvQsNC00LXQu9GM0YbQsDwvVG9vbHRpcENvbnRlbnQ+K1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICk7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9O1xuXG4gIGdldERlbGV0ZURpYWxvZyA9ICgpID0+IHt9O1xuXG4gIGRlbGV0ZURpYWxvZyA9ICgpID0+IHtcbiAgICAvL2lmICh0aGlzLnN0YXRlLnNob3dEZWxldGVEaWFsb2cpIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICB9O1xuICBnZXRUYWJsZSA9ICgpID0+IHt9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfSAvPlxuICAgICAgICB7dGhpcy5kZWxldGVEaWFsb2coKX1cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgLz4gOiB0aGlzLmdldFRhYmxlKCl9XG4gICAgICAgIHt0aGlzLmdldEFkZEJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItbG9hZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtZHVhbC1yaW5nXCIgLz5cbiAgPC9kaXY+XG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vL3R5cGUgVE1vZGFsUGFydDxUPiA9IFJlYWN0LkZDPFQ+ICYgeyBiYXNlQ2xhc3M/OiBzdHJpbmcgfTtcbmZ1bmN0aW9uIE1vZGFsSGVhZGVyKGJhc2VDbGFzc05hbWUpIHtcbiAgICBjb25zdCBiYXNlQ2xhc3MgPSBiYXNlQ2xhc3NOYW1lO1xuICAgIGNvbnN0IE1vZGFsSGVhZGVyID0gcHJvcHMgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsSGVhZGVyLmJhc2VDbGFzcycsIGJhc2VDbGFzcykpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2hlYWRlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vZGFsSGVhZGVyO1xufVxuLy8gZnVuY3Rpb24gTW9kYWxIZWFkZXIocHJvcHM6IFRNb2RhbEhlYWRlclByb3BzKTogSlNYLkVsZW1lbnQgJiB7IGJhc2VDbGFzczogc3RyaW5nIH0ge1xuLy8gICB2YXIgYmFzZUNsYXNzOiBzdHJpbmcgPSAnbW9kYWwnO1xuLy8gICBjb25zdCBlbCA9IChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzICsgJ19faGVhZGVyJ30gaWQ9e3Byb3BzLmlkfT5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZWwsIHsgYmFzZUNsYXNzOiAnJyB9KTtcbi8vIH1cbmZ1bmN0aW9uIE1vZGFsVGl0bGUoYmFzZUNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGJhc2VDbGFzcyA9IGJhc2VDbGFzc05hbWU7XG4gICAgY29uc3QgTW9kYWxUaXRsZSA9IHByb3BzID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5UaXRsZScsIGJhc2VDbGFzcykpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX3RpdGxlJywgaWQ6IHByb3BzLmlkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgcHJvcHMuY2hpbGRyZW4pKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kYWxUaXRsZTtcbn1cbmZ1bmN0aW9uIE1vZGFsQm9keShiYXNlQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgYmFzZUNsYXNzID0gYmFzZUNsYXNzTmFtZTtcbiAgICBjb25zdCBNb2RhbEJvZHkgPSBwcm9wcyA9PiB7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuQm9keScsIGJhc2VDbGFzcykpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2JvZHknLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RhbEJvZHk7XG59XG5mdW5jdGlvbiBNb2RhbEZvb3RlcihiYXNlQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgYmFzZUNsYXNzID0gYmFzZUNsYXNzTmFtZTtcbiAgICBjb25zdCBNb2RhbEZvb3RlciA9IHByb3BzID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Gb290ZXInLCBiYXNlQ2xhc3MpKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19mb290ZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RhbEZvb3Rlcjtcbn1cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcHVibGljIEhlYWRlciA9IE1vZGFsSGVhZGVyKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgIC8vIHB1YmxpYyBUaXRsZSA9IE1vZGFsVGl0bGUodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgLy8gcHVibGljIEJvZHkgPSBNb2RhbEJvZHkodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgLy8gcHVibGljIEZvb3RlciA9IE1vZGFsRm9vdGVyKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2hvd1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wJyk7XG4gICAgICAgICAgICBjb25zdCAkZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLm1vZGFsJywgJG1vZGFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgICAgICAgICAgICAkYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LW1vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LmFkZCh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nX3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kYWwuYmFzZUNsYXNzTmFtZScsIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2hvd1N0YXR1cygpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbC5iYXNlQ2xhc3NOYW1lJywgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyAhPSBwcmV2UHJvcHMuc2hvdykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaG93U3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJ19fYmFja2Ryb3AnICtcbiAgICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJ19fYmFja2Ryb3Bfc2hvdycgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fY2hpbGRyZW4nIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkpKTtcbiAgICB9XG59XG5jb25zdCBiYXNlQ2xhc3MgPSAnZGVsZXRlLWRpYWxvZyc7XG5PYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gICAgSGVhZGVyOiBNb2RhbEhlYWRlcihiYXNlQ2xhc3MpLFxuICAgIFRpdGxlOiBNb2RhbFRpdGxlKGJhc2VDbGFzcyksXG4gICAgQm9keTogTW9kYWxCb2R5KGJhc2VDbGFzcyksXG4gICAgRm9vdGVyOiBNb2RhbEZvb3RlcihiYXNlQ2xhc3MpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm93ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnIH0sIGNoaWxkcmVuKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAndGFibGUnIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=