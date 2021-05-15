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


var baseClass = 'modal-dialog';

var ModalHeader = function ModalHeader(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null); // useEffect(() => {
  //   const classList = ref.current!.classList;
  //   console.log('ModalHeader.baseClass', baseClass);
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    ref: ref,
    className: baseClass + '__header',
    id: props.id
  }, props.children);
};

var ModalTitle = function ModalTitle(props) {
  //useEffect(() => console.log('Modal.Title', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: baseClass + '__title',
    id: props.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, props.children));
};

var ModalBody = function ModalBody(props) {
  //useEffect(() => console.log('Modal.Body', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: baseClass + '__body',
    id: props.id
  }, props.children);
};

var ModalFooter = function ModalFooter(props) {
  //useEffect(() => console.log('Modal.Footer', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: baseClass + '__footer',
    id: props.id
  }, props.children);
};

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.apply(this, arguments);

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
      baseClass = this.props.baseClassName; //console.log('Modal.baseClassName', this.props.baseClassName);
      //this.changeShowStatus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //console.log('Modal.baseClassName', this.props.baseClassName);
      if (this.props.show != prevProps.show) {
        this.changeShowStatus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.baseClassName + '__backdrop'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0T2ZJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3NzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJBbGVydHMiLCJtZXNzYWdlcyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImNsZWFyTWVzc2FnZXMiLCJnZXRBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJEZWxldGVEaWFsb2ciLCJhcmd1bWVudHMiLCJoYW5kbGVDbG9zZSIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWVPZkl0ZW0iLCJpdGVtSW5mbyIsIml0ZW0iLCJnZXRJdGVtSW5mbyIsInBhcmFtcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiYmFzZUNsYXNzTmFtZSIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwic29ydGVkX2J5Iiwib3duZXIiLCJyZXMiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ2V0SXRlbSIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsImhpc3RvcnkiLCJwdXNoIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbmZpcm0iLCJidG5fZGVsIiwidGl0bGUiLCJidG5Tb3J0Q2xpY2siLCJhcnJvdyIsImJ0bkVkaXRDbGljayIsImJ0bkRlbENsaWNrIiwiYWRkQnV0dG9uIiwiYnRuQWRkQ2xpY2siLCJnZXREZWxldGVEaWFsb2ciLCJnZXRJdGVtcyIsImRlbGV0ZURpYWxvZyIsImdldFRhYmxlIiwiZ2V0QWRkQnV0dG9uIiwidXBBcnJvdyIsImRvd25BcnJvdyIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiYmFzZUNsYXNzIiwiTW9kYWxIZWFkZXIiLCJyZWYiLCJ1c2VSZWYiLCJNb2RhbFRpdGxlIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJjaGFuZ2VTaG93U3RhdHVzIiwiJGJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbW9kYWwiLCIkbW9kYWxCYWNrZHJvcCIsIiRkaWFsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJGcmFnbWVudCIsImFzc2lnbiIsIlJvdyIsIlRhYmxlIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQU1YO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLGVBQVMsRUFBRSxLQUZMO0FBR05DLGFBQU8sRUFBRTtBQUhILEs7O2dFQXdCSSxVQUFBQyxLQUFLLEVBQUk7QUFDbkIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFJQyxJQUFJLEdBQUcsUUFBWDs7QUFDQSxnQkFBUUYsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsZUFBSyxNQUFMO0FBQ0VBLGdCQUFJLEdBQUcsTUFBUDtBQUNBOztBQUNGLGVBQUssU0FBTDtBQUNFQSxnQkFBSSxHQUFHLFNBQVA7QUFDQTs7QUFDRixlQUFLLE9BQUw7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBQ0E7O0FBQ0Y7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBWEo7O0FBYUEsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFLGlCQUFpQkEsSUFBakM7QUFBdUMsYUFBRyxFQUFFRDtBQUE1QyxXQUNHRCxDQUFDLENBQUNHLE9BREwsQ0FERjtBQUtELE9BcEJELENBRFUsZ0JBdUJWLHVIQXZCRjtBQXlCRCxLOzs0REFFTyxVQUFBQyxJQUFJO0FBQUEsYUFDVixJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQ3JCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRFU7QUFBQSxLOztnRUFLQSxZQUFNO0FBQ2hCLFVBQUksTUFBS0ksS0FBTCxDQUFXWixTQUFmLEVBQTBCO0FBQ3hCLGNBQUthLEtBQUwsQ0FBVyxNQUFLQyxLQUFMLENBQVdiLE9BQVgsR0FBcUIsTUFBS2EsS0FBTCxDQUFXYixPQUFoQyxHQUEwQyxNQUFLVyxLQUFMLENBQVdYLE9BQWhFLEVBQXlFYyxJQUF6RSxDQUE4RSxZQUFNO0FBQ2xGLGdCQUFLQyxRQUFMLENBQWM7QUFDWmpCLG9CQUFRLEVBQUUsRUFERTtBQUVaQyxxQkFBUyxFQUFFO0FBRkMsV0FBZDs7QUFJQSxnQkFBS2MsS0FBTCxDQUFXRyxhQUFYO0FBQ0QsU0FORDs7QUFPQSw0QkFBTyx3SEFBRyxNQUFLQyxTQUFMLENBQWUsTUFBS04sS0FBTCxDQUFXYixRQUExQixDQUFILENBQVA7QUFDRDs7QUFDRCwwQkFBTyx1RUFBUDtBQUNELEs7Ozs7Ozs7dUNBL0RrQm9CLFMsRUFBV0MsUyxFQUFXO0FBQ3ZDLFVBQUlwQixTQUFTLEdBQUcsS0FBaEI7QUFEdUMsVUFFL0JELFFBRitCLEdBRWxCLEtBQUtlLEtBRmEsQ0FFL0JmLFFBRitCLEVBR3ZDO0FBRUE7O0FBRUEsVUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNzQixNQUFULEdBQWtCLENBQTlCLElBQW1DQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLWCxLQUFMLENBQVdiLFFBQTFCLE1BQXdDdUIsSUFBSSxDQUFDQyxTQUFMLENBQWV4QixRQUFmLENBQS9FLEVBQXlHO0FBQ3ZHQyxpQkFBUyxHQUFHLElBQVo7QUFDRDs7QUFDRCxVQUFJQSxTQUFTLElBQUksQ0FBQyxLQUFLWSxLQUFMLENBQVdaLFNBQTdCLEVBQXdDO0FBQ3RDLGFBQUtnQixRQUFMLENBQWM7QUFDWmpCLGtCQUFRLEVBQUVBLFFBREU7QUFFWkMsbUJBQVMsRUFBVEE7QUFGWSxTQUFkO0FBSUQ7QUFDRjs7OzZCQWlEUTtBQUNQLDBCQUFPLHdIQUFHLEtBQUtBLFNBQUwsRUFBSCxDQUFQO0FBQ0Q7Ozs7RUEvRWlDd0IsK0M7O2dCQUFmMUIsTSxlQUNBO0FBQ2pCQyxVQUFRLEVBQUUwQixrREFBUyxDQUFDdkIsS0FBVixDQUFnQndCLFVBRFQ7QUFFakJULGVBQWEsRUFBRVEsa0RBQVMsQ0FBQ0UsSUFBVixDQUFlRDtBQUZiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7QUFDQTtBQUNBOztJQUNxQkUsWTs7Ozs7QUFDakIsMEJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDs7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLFVBQUMxQixDQUFELEVBQU87QUFDdEIsVUFBSUEsQ0FBSixFQUNJLE1BQUtVLEtBQUwsQ0FBV2lCLFVBQVgsQ0FBc0IzQixDQUFDLENBQUM0QixNQUFGLENBQVNDLEtBQS9CO0FBQ0osYUFBTyxNQUFLbkIsS0FBTCxDQUFXaUIsVUFBWCxDQUFzQixLQUF0QixDQUFQO0FBQ0gsS0FKRDs7QUFLQSxVQUFLRyxVQUFMLEdBQWtCLEVBQWxCOztBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLGFBQU8sRUFBUDtBQUNILEtBRkQ7O0FBR0EsVUFBS0MsV0FBTCxHQUFtQixZQUFNO0FBQ3JCLFVBQUksTUFBS3ZCLEtBQUwsQ0FBV3dCLE1BQVgsQ0FBa0JQLFVBQXRCLEVBQWtDO0FBQzlCLGVBQU8sTUFBS0ksUUFBTCxDQUFjLE1BQUtyQixLQUFMLENBQVd3QixNQUFYLENBQWtCUCxVQUFoQyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxFQUFQO0FBQ0gsS0FMRDs7QUFYVTtBQWlCYjs7Ozs2QkFDUTtBQUNMLDBCQUFRUSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyxrREFBcEIsRUFBMkI7QUFBRUMscUJBQWEsRUFBRSxlQUFqQjtBQUFrQ0MsWUFBSSxFQUFFLEtBQUs3QixLQUFMLENBQVc2QixJQUFuRDtBQUF5REMsY0FBTSxFQUFFLEtBQUtkO0FBQXRFLE9BQTNCLGVBQ0pTLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JDLGtEQUFLLENBQUNJLE1BQTFCLEVBQWtDO0FBQUVDLG1CQUFXLEVBQUU7QUFBZixPQUFsQyxlQUNJUCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyxrREFBSyxDQUFDTSxLQUExQixFQUFpQyxJQUFqQyxFQUNJLDZDQURKLEVBRUksS0FBS2IsVUFGVCxDQURKLENBREksZUFLSkssNENBQUssQ0FBQ0MsYUFBTixDQUFvQkMsa0RBQUssQ0FBQ08sSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsS0FBS1gsV0FBTCxFQUF0QyxDQUxJLGVBTUpFLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JDLGtEQUFLLENBQUNRLE1BQTFCLEVBQWtDLElBQWxDLGVBQ0lWLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JVLGtEQUFwQixFQUE0QjtBQUFFQyxpQkFBUyxFQUFFLGVBQWI7QUFBOEJsQixhQUFLLEVBQUUsS0FBckM7QUFBNENtQixlQUFPLEVBQUUsS0FBS3RCO0FBQTFELE9BQTVCLEVBQXFHLHNDQUFyRyxDQURKLGVBRUlTLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JVLGtEQUFwQixFQUE0QjtBQUFFQyxpQkFBUyxFQUFFLFlBQWI7QUFBMkJsQixhQUFLLEVBQUUsSUFBbEM7QUFBd0NtQixlQUFPLEVBQUUsS0FBS3RCO0FBQXRELE9BQTVCLEVBQWlHLDRDQUFqRyxDQUZKLENBTkksQ0FBUjtBQVNIOzs7O0VBN0JxQ04sK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUI2QixXOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGFBQU8sRUFBRSxLQURIO0FBRU52RCxjQUFRLEVBQUUsRUFGSjtBQUdOd0Qsc0JBQWdCLEVBQUUsS0FIWjtBQUlOeEIsZ0JBQVUsRUFBRSxFQUpOO0FBS055QixXQUFLLEVBQUUsRUFMRDtBQU1OQyxjQUFRLEVBQUUsTUFBS0Msa0JBQUw7QUFOSixLOzswREFTRixFOzs4REFFSSxROztnRUFFRSxROztpRUFDQyxFOztnRUFFRCxLOztnRUEwQkEsVUFBQUMsSUFBSSxFQUFJO0FBQ2xCLGFBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixJQUFaLEVBQWtCeEQsR0FBbEIsQ0FBc0IsVUFBQTJELEdBQUcsRUFBSTtBQUNsQyxlQUFPO0FBQUV4RCxjQUFJLEVBQUUsT0FBUjtBQUFpQkMsaUJBQU8sRUFBRW9ELElBQUksQ0FBQ0csR0FBRDtBQUE5QixTQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsSzs7K0RBRVUsWUFBTTtBQUNmLFlBQUs5QyxRQUFMLENBQWM7QUFBRXNDLGVBQU8sRUFBRTtBQUFYLE9BQWQsRUFEZSxDQUVmOzs7QUFFQVMsbURBQUssQ0FDRkMsSUFESCxDQUNRLE1BQUtDLEdBRGIsRUFDa0I7QUFDZEMsaUJBQVMsRUFBRSxNQUFLdEQsS0FBTCxDQUFXNkMsUUFEUjtBQUVkVSxhQUFLLEVBQUUsTUFBS3JELEtBQUwsQ0FBV3FELEtBQVgsR0FBbUIsTUFBS3JELEtBQUwsQ0FBV3FELEtBQTlCLEdBQXNDLENBQUM7QUFGaEMsT0FEbEIsRUFLR3BELElBTEgsQ0FLUSxVQUFBcUQsR0FBRyxFQUFJO0FBQ1g7QUFDQSxZQUFNeEQsS0FBSyxHQUFHO0FBQUU0QyxlQUFLLEVBQUVZLEdBQUcsQ0FBQ1Q7QUFBYixTQUFkLENBRlcsQ0FHWDs7QUFFQSxjQUFLM0MsUUFBTCxDQUFjSixLQUFkO0FBQ0QsT0FYSCxXQVlTLFVBQUF5RCxHQUFHLEVBQUk7QUFDWixjQUFLckQsUUFBTCxDQUFjO0FBQ1pqQixrQkFBUSxFQUFFLE1BQUt1RSxTQUFMLENBQWVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhWixJQUE1QjtBQURFLFNBQWQ7QUFHRCxPQWhCSCxhQWlCVztBQUFBLGVBQU0sTUFBSzNDLFFBQUwsQ0FBYztBQUFFc0MsaUJBQU8sRUFBRTtBQUFYLFNBQWQsQ0FBTjtBQUFBLE9BakJYO0FBa0JELEs7OzhEQUVTLFVBQUFrQixFQUFFLEVBQUk7QUFDZCxhQUFPLE1BQUs1RCxLQUFMLENBQVc0QyxLQUFYLENBQWlCaUIsTUFBakIsQ0FBd0IsVUFBQXJDLElBQUk7QUFBQSxlQUFJLENBQUNBLElBQUksQ0FBQ29DLEVBQU4sS0FBYSxDQUFDQSxFQUFsQjtBQUFBLE9BQTVCLEVBQWtELENBQWxELENBQVA7QUFDRCxLOzttRUFFYyxVQUFBcEUsQ0FBQyxFQUFJO0FBQ2xCLFVBQU1zRSxXQUFXLEdBQUd0RSxDQUFDLENBQUM0QixNQUFGLENBQVN3QyxFQUE3QixDQURrQixDQUVsQjs7QUFFQSxVQUFJLENBQUNFLFdBQUwsRUFBa0I7O0FBQ2xCLFVBQUksTUFBSzlELEtBQUwsQ0FBVzZDLFFBQVgsQ0FBb0JrQixJQUFwQixLQUE2QkQsV0FBakMsRUFBOEM7QUFDNUMsWUFBTWpCLFFBQVEsR0FBRztBQUNma0IsY0FBSSxFQUFFRCxXQURTO0FBRWZFLG1CQUFTLEVBQUU7QUFGSSxTQUFqQjs7QUFJQSxjQUFLNUQsUUFBTCxDQUFjO0FBQ1p5QyxrQkFBUSxFQUFFQTtBQURFLFNBQWQ7QUFHRCxPQVJELE1BUU87QUFDTCxZQUFNbUIsU0FBUyxHQUFHLE1BQUtoRSxLQUFMLENBQVc2QyxRQUFYLENBQW9CbUIsU0FBcEIsS0FBa0MsTUFBbEMsR0FBMkMsS0FBM0MsR0FBbUQsTUFBckU7O0FBRUEsWUFBTW5CLFNBQVEsbUNBQ1QsTUFBSzdDLEtBQUwsQ0FBVzZDLFFBREY7QUFFWm1CLG1CQUFTLEVBQUVBO0FBRkMsVUFBZDs7QUFLQSxjQUFLNUQsUUFBTCxDQUFjO0FBQUV5QyxrQkFBUSxFQUFFQTtBQUFaLFNBQWQ7QUFDRDtBQUNGLEs7O2tFQUVhLFVBQUFyRCxDQUFDLEVBQUk7QUFDakIsVUFBTWdDLElBQUksR0FBRyxNQUFLeUMsT0FBTCxDQUFhekUsQ0FBQyxDQUFDNEIsTUFBRixDQUFTQyxLQUF0QixDQUFiOztBQUNBLFlBQUtqQixRQUFMLENBQWM7QUFDWnVDLHdCQUFnQixFQUFFLElBRE47QUFFWnhCLGtCQUFVLEVBQUVLO0FBRkEsT0FBZDtBQUlELEs7O2tFQUVhLFVBQUFoQyxDQUFDLEVBQUk7QUFDakIyRCxtREFBSyxDQUNGQyxJQURILENBQ1EsTUFBS0MsR0FEYixFQUNrQjtBQUFFYSxlQUFPLEVBQUU7QUFBWCxPQURsQixFQUVHL0QsSUFGSCxDQUVRLFVBQUFxRCxHQUFHLEVBQUk7QUFDWCxZQUFJQSxHQUFHLENBQUNULElBQUosQ0FBU29CLFFBQWIsRUFBdUI7QUFDckI7QUFDQSxnQkFBS2pFLEtBQUwsQ0FBV2tFLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCYixHQUFHLENBQUNULElBQUosQ0FBU29CLFFBQWpDO0FBQ0Q7QUFDRixPQVBILFdBUVMsVUFBQVYsR0FBRyxFQUFJO0FBQ1osY0FBS3JELFFBQUwsQ0FBYztBQUNaakIsa0JBQVEsRUFBRSxNQUFLdUUsU0FBTCxDQUFlRCxHQUFHLENBQUNFLFFBQUosQ0FBYVosSUFBNUI7QUFERSxTQUFkO0FBR0QsT0FaSDtBQWFELEs7O21FQUVjLFVBQUF2RCxDQUFDLEVBQUk7QUFDbEIsVUFBTThFLE9BQU8sR0FBRzlFLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU0MsS0FBekIsQ0FEa0IsQ0FFbEI7O0FBRUE4QixtREFBSyxDQUNGQyxJQURILENBQ1EsTUFBS0MsR0FEYixFQUNrQjtBQUNka0IsZ0JBQVEsRUFBRSxFQURJO0FBRWRELGVBQU8sRUFBRUEsT0FGSztBQUdkakIsV0FBRyxFQUFFbUIsTUFBTSxDQUFDQyxRQUFQLENBQWdCQztBQUhQLE9BRGxCLEVBTUd2RSxJQU5ILENBTVEsVUFBQXFELEdBQUcsRUFBSTtBQUNYLFlBQUlBLEdBQUcsQ0FBQ1QsSUFBSixDQUFTb0IsUUFBYixFQUF1QjtBQUNyQjtBQUVBO0FBQ0EsZ0JBQUtqRSxLQUFMLENBQVdrRSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QmIsR0FBRyxDQUFDVCxJQUFKLENBQVNvQixRQUFqQztBQUNEO0FBQ0YsT0FiSCxXQWNTLFVBQUFWLEdBQUcsRUFBSTtBQUNaLGNBQUtyRCxRQUFMLENBQWM7QUFDWmpCLGtCQUFRLEVBQUUsTUFBS3VFLFNBQUwsQ0FBZUQsR0FBRyxDQUFDRSxRQUFKLENBQWFaLElBQTVCO0FBREUsU0FBZDtBQUdELE9BbEJIO0FBbUJELEs7O2lFQUVZLFVBQUE0QixPQUFPLEVBQUk7QUFDdEIsWUFBS3ZFLFFBQUwsQ0FBYztBQUFFdUMsd0JBQWdCLEVBQUU7QUFBcEIsT0FBZDs7QUFFQSxVQUFJZ0MsT0FBTyxLQUFLLE1BQWhCLEVBQXdCO0FBQ3RCLGNBQUt2RSxRQUFMLENBQWM7QUFBRXNDLGlCQUFPLEVBQUU7QUFBWCxTQUFkOztBQUNBUyxxREFBSyxDQUNGQyxJQURILENBQ1EsTUFBS0MsR0FEYixFQUNrQjtBQUNkQyxtQkFBUyxFQUFFLE1BQUt0RCxLQUFMLENBQVc2QyxRQURSO0FBRWQrQixpQkFBTyxFQUFFLEVBRks7QUFHZE4saUJBQU8sRUFBRSxNQUFLdEUsS0FBTCxDQUFXbUIsVUFBWCxDQUFzQnlDLEVBSGpCO0FBSWRMLGVBQUssRUFBRSxNQUFLckQsS0FBTCxDQUFXcUQsS0FBWCxHQUFtQixNQUFLckQsS0FBTCxDQUFXcUQsS0FBOUIsR0FBc0MsQ0FBQztBQUpoQyxTQURsQixFQU9HcEQsSUFQSCxDQU9RLFVBQUFxRCxHQUFHLEVBQUk7QUFDWCxnQkFBS3BELFFBQUwsQ0FBYztBQUNad0MsaUJBQUssRUFBRVksR0FBRyxDQUFDVCxJQURDO0FBRVo1RCxvQkFBUSxFQUFFLENBQ1I7QUFDRU8sa0JBQUksRUFBRSxTQURSO0FBRUVDLHFCQUFPLFlBQUssTUFBSzJCLFVBQVY7QUFGVCxhQURRO0FBRkUsV0FBZDtBQVNELFNBakJILFdBa0JTLFVBQUFtQyxHQUFHLEVBQUk7QUFDWixnQkFBS3JELFFBQUwsQ0FBYztBQUNaakIsb0JBQVEsRUFBRSxNQUFLdUUsU0FBTCxDQUFlRCxHQUFHLENBQUNFLFFBQUosQ0FBYVosSUFBNUI7QUFERSxXQUFkO0FBR0QsU0F0QkgsYUF1Qlc7QUFBQSxpQkFBTSxNQUFLM0MsUUFBTCxDQUFjO0FBQUVzQyxtQkFBTyxFQUFFO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0F2Qlg7QUF3QkQ7QUFDRixLOztvRUFFZSxZQUFNO0FBQ3BCLFlBQUt0QyxRQUFMLENBQWM7QUFBRWpCLGdCQUFRLEVBQUU7QUFBWixPQUFkO0FBQ0QsSzs7Z0VBRVcsVUFBQ3lFLEVBQUQsRUFBS2lCLEtBQUwsRUFBWXBGLEtBQVosRUFBc0I7QUFDaEMsMEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBd0IsVUFBRSxFQUFFbUUsRUFBNUI7QUFBZ0MsZUFBTyxFQUFFLE1BQUtrQixZQUE5QztBQUE0RCxXQUFHLEVBQUVyRjtBQUFqRSxzQkFDRSw0REFBQyw0REFBRCwySUFERixlQUVFLDREQUFDLDZDQUFEO0FBQUssVUFBRSxFQUFFbUUsRUFBVDtBQUFhLGlCQUFTLEVBQUM7QUFBdkIsU0FDRyxNQUFLNUQsS0FBTCxDQUFXNkMsUUFBWCxDQUFvQmtCLElBQXBCLEtBQTZCSCxFQUE3QixpQkFBbUM7QUFBSyxVQUFFLEVBQUVBO0FBQVQsU0FBYyxNQUFLbUIsS0FBbkIsQ0FEdEMsRUFDdUUsR0FEdkUsZUFFRTtBQUFLLFVBQUUsRUFBRW5CLEVBQVQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCLFNBQ0dpQixLQURILENBRkYsQ0FGRixDQURGO0FBV0QsSzs7aUVBRVksVUFBQWpCLEVBQUUsRUFBSTtBQUNqQiwwQkFDRSw0REFBQyw2Q0FBRCxxQkFDRSw0REFBQyxtREFBRDtBQUNFLGFBQUssRUFBRUEsRUFEVDtBQUVFLGVBQU8sRUFBQyxTQUZWO0FBR0UsaUJBQVMsRUFBQyxxQkFIWjtBQUlFLGVBQU8sRUFBRSxNQUFLb0I7QUFKaEIsc0JBTUUsNERBQUMsNERBQUQ7QUFBZ0IsaUJBQVMsRUFBQztBQUExQixnR0FORixFQVNHLFFBVEgsQ0FERixlQVlFLDREQUFDLG1EQUFEO0FBQ0UsYUFBSyxFQUFFcEIsRUFEVDtBQUVFLGVBQU8sRUFBQyxRQUZWO0FBR0UsaUJBQVMsRUFBQyxtQ0FIWjtBQUlFLGVBQU8sRUFBRSxNQUFLcUI7QUFKaEIsc0JBTUUsNERBQUMsNERBQUQ7QUFBZ0IsaUJBQVMsRUFBQztBQUExQiw0REFORixNQVpGLENBREY7QUEwQkQsSzs7bUVBRWMsWUFBTTtBQUNuQixVQUFJLE1BQUtDLFNBQVQsRUFDRSxvQkFDRSw0REFBQyxtREFBRDtBQUNFLGVBQU8sRUFBQyxTQURWO0FBRUUsaUJBQVMsRUFBQyxxQ0FGWjtBQUdFLGVBQU8sRUFBRSxNQUFLQztBQUhoQixzQkFLRSw0REFBQyw0REFBRCxpTUFMRixNQURGO0FBU0YsMEJBQU8seUhBQVA7QUFDRCxLOztzRUFFaUIsWUFBTSxDQUFFLEM7O21FQUVYLFlBQU07QUFDbkI7QUFDQSxhQUFPLE1BQUtDLGVBQUwsRUFBUDtBQUNELEs7OytEQUNVLFlBQU0sQ0FBRSxDOzs7Ozs7O3dDQXZPQztBQUNsQixXQUFLQyxRQUFMO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTztBQUNMdEIsWUFBSSxFQUFFLEVBREQ7QUFFTEMsaUJBQVMsRUFBRTtBQUZOLE9BQVA7QUFJRDs7O3VDQUVrQnpELFMsRUFBV0MsUyxFQUFXO0FBQ3ZDLFVBQ0VBLFNBQVMsQ0FBQ3FDLFFBQVYsQ0FBbUJrQixJQUFuQixLQUE0QixLQUFLL0QsS0FBTCxDQUFXNkMsUUFBWCxDQUFvQmtCLElBQWhELElBQ0F2RCxTQUFTLENBQUNxQyxRQUFWLENBQW1CbUIsU0FBbkIsS0FBaUMsS0FBS2hFLEtBQUwsQ0FBVzZDLFFBQVgsQ0FBb0JtQixTQUZ2RCxFQUdFO0FBQ0EsYUFBS3FCLFFBQUw7QUFDRDtBQUNGOzs7NkJBdU5RO0FBQ1AsMEJBQ0Usc0ZBQ0UsNERBQUMsZ0RBQUQ7QUFBUSxnQkFBUSxFQUFFLEtBQUtyRixLQUFMLENBQVdiLFFBQTdCO0FBQXVDLHFCQUFhLEVBQUUsS0FBS2tCO0FBQTNELFFBREYsRUFFRyxLQUFLaUYsWUFBTCxFQUZILEVBR0csS0FBS3RGLEtBQUwsQ0FBVzBDLE9BQVgsZ0JBQXFCLDREQUFDLGdEQUFELE9BQXJCLEdBQWtDLEtBQUs2QyxRQUFMLEVBSHJDLEVBSUcsS0FBS0MsWUFBTCxFQUpILENBREY7QUFRRDs7O3dCQTlOVztBQUNWLGFBQU8sS0FBS3hGLEtBQUwsQ0FBVzZDLFFBQVgsQ0FBb0JtQixTQUFwQixLQUFrQyxLQUFsQyxHQUEwQyxLQUFLeUIsT0FBL0MsR0FBeUQsS0FBS0MsU0FBckU7QUFDRDs7OztFQXpDc0M5RSxnRDs7Ozs7Ozs7Ozs7Ozs7QUNSekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZTtBQUFBLHNCQUNiO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLENBRGE7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPLElBQU0wQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEwRTtBQUFBLE1BQXZFcUQsT0FBdUUsUUFBdkVBLE9BQXVFO0FBQUEsTUFBOUQvQixFQUE4RCxRQUE5REEsRUFBOEQ7QUFBQSxNQUExRHJCLFNBQTBELFFBQTFEQSxTQUEwRDtBQUFBLE1BQS9Dd0IsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsTUFBekMxQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ21CLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCb0QsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVGLHNCQUFRbEUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixRQUFwQixFQUE4QjtBQUFFaUQsU0FBSyxFQUFFYyxPQUFUO0FBQWtCL0IsTUFBRSxFQUFFQSxFQUF0QjtBQUEwQnJCLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFBN0Q7QUFBaUV3QixRQUFJLEVBQUVBLElBQXZFO0FBQTZFMUMsU0FBSyxFQUFFQSxLQUFwRjtBQUEyRm1CLFdBQU8sRUFBRUEsT0FBcEc7QUFBNkdvRCxZQUFRLEVBQUVBO0FBQXZILEdBQTlCLEVBQWlLQyxRQUFqSyxDQUFSO0FBQ0gsQ0FGTTtBQUdQdkQsTUFBTSxDQUFDd0QsWUFBUCxHQUFzQjtBQUNsQnZELFdBQVMsRUFBRSxhQURPO0FBRWxCd0IsTUFBSSxFQUFFLEtBRlk7QUFHbEI2QixVQUFRLEVBQUUsS0FIUTtBQUlsQkQsU0FBTyxFQUFFLEVBSlM7QUFLbEIvQixJQUFFLEVBQUUsRUFMYztBQU1sQnZDLE9BQUssRUFBRSxFQU5XO0FBT2xCd0UsVUFBUSxFQUFFO0FBUFEsQ0FBdEIsQyxDQVNBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EsSUFBSUUsU0FBUyxHQUFHLGNBQWhCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUE5RixLQUFLLEVBQUk7QUFDekIsTUFBTStGLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCLENBRHlCLENBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUFRdkUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFcUUsT0FBRyxFQUFFQSxHQUFQO0FBQVkxRCxhQUFTLEVBQUV3RCxTQUFTLEdBQUcsVUFBbkM7QUFBK0NuQyxNQUFFLEVBQUUxRCxLQUFLLENBQUMwRDtBQUF6RCxHQUEzQixFQUEwRjFELEtBQUssQ0FBQzJGLFFBQWhHLENBQVI7QUFDSCxDQVBEOztBQVFBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFqRyxLQUFLLEVBQUk7QUFDeEI7QUFDQSxzQkFBUXlCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRVcsYUFBUyxFQUFFd0QsU0FBUyxHQUFHLFNBQXpCO0FBQW9DbkMsTUFBRSxFQUFFMUQsS0FBSyxDQUFDMEQ7QUFBOUMsR0FBM0IsZUFDSmpDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MxQixLQUFLLENBQUMyRixRQUF0QyxDQURJLENBQVI7QUFFSCxDQUpEOztBQUtBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFsRyxLQUFLLEVBQUk7QUFDdkI7QUFDQSxzQkFBUXlCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRVcsYUFBUyxFQUFFd0QsU0FBUyxHQUFHLFFBQXpCO0FBQW1DbkMsTUFBRSxFQUFFMUQsS0FBSyxDQUFDMEQ7QUFBN0MsR0FBM0IsRUFBOEUxRCxLQUFLLENBQUMyRixRQUFwRixDQUFSO0FBQ0gsQ0FIRDs7QUFJQSxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBbkcsS0FBSyxFQUFJO0FBQ3pCO0FBQ0Esc0JBQVF5Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVXLGFBQVMsRUFBRXdELFNBQVMsR0FBRyxVQUF6QjtBQUFxQ25DLE1BQUUsRUFBRTFELEtBQUssQ0FBQzBEO0FBQS9DLEdBQTNCLEVBQWdGMUQsS0FBSyxDQUFDMkYsUUFBdEYsQ0FBUjtBQUNILENBSEQ7O0lBSU1oRSxLOzs7OztBQUNGLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNaLFNBQVQ7O0FBQ0EsVUFBS3FGLGdCQUFMLEdBQXdCLFlBQU07QUFDMUIsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBLFVBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU0sTUFBS3ZHLEtBQUwsQ0FBVzRCLGFBQXhDLENBQWY7QUFDQSxVQUFNNkUsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBTSxNQUFLdkcsS0FBTCxDQUFXNEIsYUFBakIsR0FBaUMsWUFBeEQsQ0FBdkI7QUFDQSxVQUFNOEUsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBTSxNQUFLdkcsS0FBTCxDQUFXNEIsYUFBakIsR0FBaUMsVUFBeEQsQ0FBaEIsQ0FKMEIsQ0FLMUI7O0FBQ0EsVUFBSSxNQUFLNUIsS0FBTCxDQUFXNkIsSUFBZixFQUFxQjtBQUNqQndFLGFBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsaUJBQXBCO0FBQ0FILHNCQUFjLENBQUNFLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQUs1RyxLQUFMLENBQVc0QixhQUFYLEdBQTJCLGlCQUF4RDtBQUNBNEUsY0FBTSxDQUFDRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixNQUFLNUcsS0FBTCxDQUFXNEIsYUFBWCxHQUEyQixPQUFoRDtBQUNBOEUsZUFBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUFLNUcsS0FBTCxDQUFXNEIsYUFBWCxHQUEyQixlQUFqRDtBQUNILE9BTEQsTUFNSztBQUNEeUUsYUFBSyxDQUFDTSxTQUFOLENBQWdCRSxNQUFoQixDQUF1QixpQkFBdkI7QUFDQUosc0JBQWMsQ0FBQ0UsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsTUFBSzdHLEtBQUwsQ0FBVzRCLGFBQVgsR0FBMkIsaUJBQTNEO0FBQ0E0RSxjQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLE1BQUs3RyxLQUFMLENBQVc0QixhQUFYLEdBQTJCLE9BQW5EO0FBQ0E4RSxlQUFPLENBQUNDLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLE1BQUs3RyxLQUFMLENBQVc0QixhQUFYLEdBQTJCLGVBQXBEO0FBQ0g7QUFDSixLQWxCRDs7QUFGVTtBQXFCYjs7Ozt3Q0FDbUI7QUFDaEJpRSxlQUFTLEdBQUcsS0FBSzdGLEtBQUwsQ0FBVzRCLGFBQXZCLENBRGdCLENBRWhCO0FBQ0E7QUFDSDs7O3VDQUNrQnZCLFMsRUFBVztBQUMxQjtBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXNkIsSUFBWCxJQUFtQnhCLFNBQVMsQ0FBQ3dCLElBQWpDLEVBQXVDO0FBQ25DLGFBQUt1RSxnQkFBTDtBQUNIO0FBQ0o7Ozs2QkFDUTtBQUNMLDBCQUFRM0UsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNENBQUssQ0FBQ3FGLFFBQTFCLEVBQW9DLElBQXBDLGVBQ0pyRiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVnQyxVQUFFLEVBQUUsS0FBSzFELEtBQUwsQ0FBVzBELEVBQWpCO0FBQXFCckIsaUJBQVMsRUFBRSxLQUFLckMsS0FBTCxDQUFXNEIsYUFBWCxHQUEyQjtBQUEzRCxPQUEzQixDQURJLGVBRUpILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRWdDLFVBQUUsRUFBRSxLQUFLMUQsS0FBTCxDQUFXMEQsRUFBakI7QUFBcUJyQixpQkFBUyxFQUFFLEtBQUtyQyxLQUFMLENBQVc0QjtBQUEzQyxPQUEzQixlQUNJSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVXLGlCQUFTLEVBQUUsS0FBS3JDLEtBQUwsQ0FBVzRCLGFBQVgsR0FBMkI7QUFBeEMsT0FBM0IsZUFDSUgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFZ0MsVUFBRSxFQUFFLEtBQUsxRCxLQUFMLENBQVcwRCxFQUFqQjtBQUFxQnJCLGlCQUFTLEVBQUUsS0FBS3JDLEtBQUwsQ0FBVzRCLGFBQVgsR0FBMkI7QUFBM0QsT0FBM0IsRUFBc0csS0FBSzVCLEtBQUwsQ0FBVzJGLFFBQWpILENBREosQ0FESixDQUZJLENBQVI7QUFLSDs7OztFQXhDZWpGLCtDOztBQTBDcEJvQyxNQUFNLENBQUNpRSxNQUFQLENBQWNwRixLQUFkLEVBQXFCO0FBQ2pCSSxRQUFNLEVBQUUrRCxXQURTO0FBRWpCN0QsT0FBSyxFQUFFZ0UsVUFGVTtBQUdqQi9ELE1BQUksRUFBRWdFLFNBSFc7QUFJakIvRCxRQUFNLEVBQUVnRTtBQUpTLENBQXJCO0FBTWV4RSxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1xRixHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUE2QjtBQUFBLE1BQTFCckIsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJ0RCxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDNUMsc0JBQU9aLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRVcsYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUF5RXNELFFBQXpFLENBQVA7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQO0FBQ08sSUFBTXNCLEtBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNhO0FBQ0wsMEJBQU94Riw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE9BQXBCLEVBQTZCO0FBQUVXLGlCQUFTLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV3FDLFNBQVgsR0FBdUIsS0FBS3JDLEtBQUwsQ0FBV3FDLFNBQWxDLEdBQThDO0FBQTNELE9BQTdCLEVBQW1HLEtBQUtyQyxLQUFMLENBQVcyRixRQUE5RyxDQUFQO0FBQ0g7QUFITDs7QUFBQTtBQUFBLEVBQTJCbEUsNENBQUssQ0FBQ2YsU0FBakMsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTXdHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBNkI7QUFBQSxNQUExQnZCLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCdEQsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3ZELHNCQUFPWiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVXLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBc0ZzRCxRQUF0RixDQUFQO0FBQ0gsQ0FGTTtBQUdBLElBQU13QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEyQjtBQUFBLE1BQXhCMUIsT0FBd0IsU0FBeEJBLE9BQXdCO0FBQUEsTUFBZkUsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLHNCQUFRbEUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFVyxhQUFTLEVBQUU7QUFBYixHQUEzQixlQUNKWiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cd0YsY0FBcEIsRUFBb0MsSUFBcEMsRUFBMEN6QixPQUExQyxDQURJLEVBRUpFLFFBRkksQ0FBUjtBQUdILENBSk0sQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFsZXJ0IGFzIFJlYWN0QWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgY2xlYXJNZXNzYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA3MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG5cbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxlcnRzID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhbGVydCBhbGVydF8nICsgdHlwZX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gd2FpdCA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkodGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0QWxlcnRzKHRoaXMuc3RhdGUubWVzc2FnZXMpfTwvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnNob3dBbGVydCgpfTwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2xpYi9Nb2RhbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1EZWxldGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbURlbGV0ZShmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmFtZU9mSXRlbSA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1JbmZvID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRJdGVtSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbUluZm8odGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7IGJhc2VDbGFzc05hbWU6IFwiZGVsZXRlLWRpYWxvZ1wiLCBzaG93OiB0aGlzLnByb3BzLnNob3csIG9uSGlkZTogdGhpcy5oYW5kbGVDbG9zZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5IZWFkZXIsIHsgY2xvc2VCdXR0b246IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5UaXRsZSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVPZkl0ZW0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuQm9keSwgbnVsbCwgdGhpcy5nZXRJdGVtSW5mbygpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuRm9vdGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tc2Vjb25kYXJ5XCIsIHZhbHVlOiBmYWxzZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLWRhbmdlclwiLCB2YWx1ZTogdHJ1ZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICBpdGVtRGVsZXRlOiAnJyxcbiAgICBpdGVtczogW10sXG4gICAgc29ydGVkQnk6IHRoaXMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCksXG4gIH07XG5cbiAgdXJsID0gJyc7XG4gIC8vdXBBcnJvdyA9ICcmI3gwMjI1QzsnO1xuICB1cEFycm93ID0gJ1xcdTIxOTEnO1xuICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICBkb3duQXJyb3cgPSAnXFx1MjE5Myc7XG4gIG5hbWVPZkl0ZW0gPSAnJztcblxuICBhZGRCdXR0b24gPSBmYWxzZTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW1zKCk7XG4gIH1cblxuICBnZXREZWZhdWx0U29ydGVkQnkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSB8fFxuICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb25cbiAgICApIHtcbiAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnYXNjJyA/IHRoaXMudXBBcnJvdyA6IHRoaXMuZG93bkFycm93O1xuICB9XG5cbiAgZ2V0RXJyb3JzID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1zJywgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gIH07XG5cbiAgZ2V0SXRlbSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgfTtcblxuICBidG5Tb3J0Q2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcblxuICAgIGlmICghc29ydGVkX25hbWUpIHJldHVybjtcbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSBzb3J0ZWRfbmFtZSkge1xuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIG5hbWU6IHNvcnRlZF9uYW1lLFxuICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGVkQnk6IHNvcnRlZEJ5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcblxuICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYnRuRGVsQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEZWxldGVEaWFsb2c6IHRydWUsXG4gICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgIH0pO1xuICB9O1xuXG4gIGJ0bkFkZENsaWNrID0gZSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYnRuRWRpdENsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgaXRlbV9wayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vY29uc29sZS5sb2coXCJidG5FZGl0Q2xpY2tcIiwgaXRlbV9wayk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2sucHJvcHMnLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpdGVtRGVsZXRlID0gY29uZmlybSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuXG4gICAgaWYgKGNvbmZpcm0gPT09ICd0cnVlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgICBidG5fZGVsOiAnJyxcbiAgICAgICAgICBpdGVtX3BrOiB0aGlzLnN0YXRlLml0ZW1EZWxldGUuaWQsXG4gICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVtczogcmVzLmRhdGEsXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICB9O1xuXG4gIGdldFRoQ2VsbCA9IChpZCwgdGl0bGUsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0aCBjbGFzc05hbWU9XCJ0b29sdGlwXCIgaWQ9e2lkfSBvbkNsaWNrPXt0aGlzLmJ0blNvcnRDbGlja30ga2V5PXtpbmRleH0+XG4gICAgICAgIDxUb29sdGlwQ29udGVudD7QndCw0LbQvNC40YLQtSZuYnNwO9C00LvRjyZuYnNwO9GB0L7RgNGC0LjRgNC+0LLQutC4PC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgPFJvdyBpZD17aWR9IGNsYXNzTmFtZT1cInNvcnRlZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lID09PSBpZCAmJiA8ZGl2IGlkPXtpZH0+e3RoaXMuYXJyb3d9PC9kaXY+fXsnICd9XG4gICAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cInNvcnRlZC1yb3dfX3RleHRcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L3RoPlxuICAgICk7XG4gIH07XG5cbiAgZ2V0QnV0dG9ucyA9IGlkID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgdG9vbHRpcFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5idG5FZGl0Q2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcENvbnRlbnQgY2xhc3NOYW1lPVwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIj5cbiAgICAgICAgICAgINCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LVcbiAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgIHsnXFx1MjdmNid9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1kYW5nZXIgYnRuLWRhbmdlcl9kZWwgdG9vbHRpcFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5idG5EZWxDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sdGlwQ29udGVudCBjbGFzc05hbWU9XCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiPlxuICAgICAgICAgICAg0KPQtNCw0LvQtdC90LjQtVxuICAgICAgICAgIDwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgeFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH07XG5cbiAgZ2V0QWRkQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmFkZEJ1dHRvbilcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuQWRkQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcENvbnRlbnQ+0JTQvtCx0LDQstC70LXQvdC40LUmbmJzcDvQvdC+0LLQvtCz0L4mbmJzcDvQsNCy0YLQvtCy0LvQsNC00LXQu9GM0YbQsDwvVG9vbHRpcENvbnRlbnQ+K1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICk7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9O1xuXG4gIGdldERlbGV0ZURpYWxvZyA9ICgpID0+IHt9O1xuXG4gIGRlbGV0ZURpYWxvZyA9ICgpID0+IHtcbiAgICAvL2lmICh0aGlzLnN0YXRlLnNob3dEZWxldGVEaWFsb2cpIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICB9O1xuICBnZXRUYWJsZSA9ICgpID0+IHt9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfSAvPlxuICAgICAgICB7dGhpcy5kZWxldGVEaWFsb2coKX1cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgLz4gOiB0aGlzLmdldFRhYmxlKCl9XG4gICAgICAgIHt0aGlzLmdldEFkZEJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItbG9hZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtZHVhbC1yaW5nXCIgLz5cbiAgPC9kaXY+XG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ21vZGFsLWRpYWxvZyc7XG5jb25zdCBNb2RhbEhlYWRlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnN0IGNsYXNzTGlzdCA9IHJlZi5jdXJyZW50IS5jbGFzc0xpc3Q7XG4gICAgLy8gICBjb25zb2xlLmxvZygnTW9kYWxIZWFkZXIuYmFzZUNsYXNzJywgYmFzZUNsYXNzKTtcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19oZWFkZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbFRpdGxlID0gcHJvcHMgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5UaXRsZScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fdGl0bGUnLCBpZDogcHJvcHMuaWQgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIHByb3BzLmNoaWxkcmVuKSkpO1xufTtcbmNvbnN0IE1vZGFsQm9keSA9IHByb3BzID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuQm9keScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fYm9keScsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsRm9vdGVyID0gcHJvcHMgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Gb290ZXInLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2Zvb3RlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaG93U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWxCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnKTtcbiAgICAgICAgICAgIGNvbnN0ICRkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kYWwubW9kYWwnLCAkbW9kYWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAgICAgJG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAgICAgJGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBiYXNlQ2xhc3MgPSB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLmJhc2VDbGFzc05hbWUnLCB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAvL3RoaXMuY2hhbmdlU2hvd1N0YXR1cygpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLmJhc2VDbGFzc05hbWUnLCB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ICE9IHByZXZQcm9wcy5zaG93KSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNob3dTdGF0dXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogdGhpcy5wcm9wcy5pZCwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fY2hpbGRyZW4nIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkpKTtcbiAgICB9XG59XG5PYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gICAgSGVhZGVyOiBNb2RhbEhlYWRlcixcbiAgICBUaXRsZTogTW9kYWxUaXRsZSxcbiAgICBCb2R5OiBNb2RhbEJvZHksXG4gICAgRm9vdGVyOiBNb2RhbEZvb3Rlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAncm93JyB9LCBjaGlsZHJlbik7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJ3RhYmxlJyB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9