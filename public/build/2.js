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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Loader */ "./assets/components/Loader.js");
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

    _defineProperty(_assertThisInitialized(_this), "history", _this.props.history);

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


      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(_this.url, {
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
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(_this.url, {
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
      var item_pk = e.target.value; //console.log('btnEditClick', item_pk);

      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(_this.url, {
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
    });

    _defineProperty(_assertThisInitialized(_this), "itemDelete", function (confirm) {
      _this.setState({
        showDeleteDialog: false
      });

      if (confirm === 'true') {
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(_this.url, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_14__["Row"], {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_14__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        value: id,
        variant: "primary",
        className: "btn-primary tooltip",
        onClick: _this.btnEditClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        value: id,
        variant: "danger",
        className: "btn-danger btn-danger_del tooltip",
        onClick: _this.btnDelClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
    });

    _defineProperty(_assertThisInitialized(_this), "getAddButton", function () {
      if (_this.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        variant: "primary",
        className: "btn-primary btn-primary_add tooltip",
        onClick: _this.btnAddClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_17__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], null) : this.getTable(), this.getAddButton());
    }
  }, {
    key: "arrow",
    get: function get() {
      return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]); //export default withRouter(ListOfItems);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0T2ZJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3NzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJBbGVydHMiLCJtZXNzYWdlcyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImNsZWFyTWVzc2FnZXMiLCJnZXRBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJEZWxldGVEaWFsb2ciLCJhcmd1bWVudHMiLCJoYW5kbGVDbG9zZSIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWVPZkl0ZW0iLCJpdGVtSW5mbyIsIml0ZW0iLCJnZXRJdGVtSW5mbyIsInBhcmFtcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiYmFzZUNsYXNzTmFtZSIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsImhpc3RvcnkiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImF4aW9zIiwicG9zdCIsInVybCIsInNvcnRlZF9ieSIsIm93bmVyIiwicmVzIiwiZXJyIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJpZCIsImZpbHRlciIsInNvcnRlZF9uYW1lIiwibmFtZSIsImRpcmVjdGlvbiIsImdldEl0ZW0iLCJidG5fYWRkIiwicmVkaXJlY3QiLCJwdXNoIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbmZpcm0iLCJidG5fZGVsIiwidGl0bGUiLCJidG5Tb3J0Q2xpY2siLCJhcnJvdyIsImJ0bkVkaXRDbGljayIsImJ0bkRlbENsaWNrIiwiYWRkQnV0dG9uIiwiYnRuQWRkQ2xpY2siLCJnZXREZWxldGVEaWFsb2ciLCJnZXRJdGVtcyIsImRlbGV0ZURpYWxvZyIsImdldFRhYmxlIiwiZ2V0QWRkQnV0dG9uIiwidXBBcnJvdyIsImRvd25BcnJvdyIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiYmFzZUNsYXNzIiwiTW9kYWxIZWFkZXIiLCJyZWYiLCJ1c2VSZWYiLCJNb2RhbFRpdGxlIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJjaGFuZ2VTaG93U3RhdHVzIiwiJGJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbW9kYWwiLCIkbW9kYWxCYWNrZHJvcCIsIiRkaWFsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJGcmFnbWVudCIsImFzc2lnbiIsIlJvdyIsIlRhYmxlIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQU1YO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLGVBQVMsRUFBRSxLQUZMO0FBR05DLGFBQU8sRUFBRTtBQUhILEs7O2dFQXdCSSxVQUFBQyxLQUFLLEVBQUk7QUFDbkIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFJQyxJQUFJLEdBQUcsUUFBWDs7QUFDQSxnQkFBUUYsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsZUFBSyxNQUFMO0FBQ0VBLGdCQUFJLEdBQUcsTUFBUDtBQUNBOztBQUNGLGVBQUssU0FBTDtBQUNFQSxnQkFBSSxHQUFHLFNBQVA7QUFDQTs7QUFDRixlQUFLLE9BQUw7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBQ0E7O0FBQ0Y7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBWEo7O0FBYUEsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFLGlCQUFpQkEsSUFBakM7QUFBdUMsYUFBRyxFQUFFRDtBQUE1QyxXQUNHRCxDQUFDLENBQUNHLE9BREwsQ0FERjtBQUtELE9BcEJELENBRFUsZ0JBdUJWLHVIQXZCRjtBQXlCRCxLOzs0REFFTyxVQUFBQyxJQUFJO0FBQUEsYUFDVixJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQ3JCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRFU7QUFBQSxLOztnRUFLQSxZQUFNO0FBQ2hCLFVB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QXBCLEVBQW9DLElBQXBDLEVBQTBDekIsT0FBMUMsQ0FESSxFQUVKRSxRQUZJLENBQVI7QUFHSCxDQUpNLEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydCBhcyBSZWFjdEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWVzc2FnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGNsZWFyTWVzc2FnZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNzAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5tZXNzYWdlcykgIT09IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VzKSkge1xuICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIHNob3dBbGVydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsZXJ0cyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnRfJyArIHR5cGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2UubWVzc2FnZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDw+PC8+XG4gICAgKTtcbiAgfTtcblxuICBkZWxheSA9IHdhaXQgPT5cbiAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB3YWl0KTtcbiAgICB9KTtcblxuICBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLmRlbGF5KHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhck1lc3NhZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiA8Pnt0aGlzLmdldEFsZXJ0cyh0aGlzLnN0YXRlLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9saWIvTW9kYWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW1EZWxldGUoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hbWVPZkl0ZW0gPSAnJztcbiAgICAgICAgdGhpcy5pdGVtSW5mbyA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgeyBiYXNlQ2xhc3NOYW1lOiBcImRlbGV0ZS1kaWFsb2dcIiwgc2hvdzogdGhpcy5wcm9wcy5zaG93LCBvbkhpZGU6IHRoaXMuaGFuZGxlQ2xvc2UgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuSGVhZGVyLCB7IGNsb3NlQnV0dG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuVGl0bGUsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lT2ZJdGVtKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkJvZHksIG51bGwsIHRoaXMuZ2V0SXRlbUluZm8oKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXNlY29uZGFyeVwiLCB2YWx1ZTogZmFsc2UsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXJcIiwgdmFsdWU6IHRydWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSxcbiAgICBpdGVtRGVsZXRlOiAnJyxcbiAgICBpdGVtczogW10sXG4gICAgc29ydGVkQnk6IHRoaXMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCksXG4gIH07XG5cbiAgaGlzdG9yeSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcblxuICB1cmwgPSAnJztcbiAgLy91cEFycm93ID0gJyYjeDAyMjVDOyc7XG4gIHVwQXJyb3cgPSAnXFx1MjE5MSc7XG4gIC8vZG93bkFycm93ID0gJyYjeDAyMjVDOyc7XG4gIGRvd25BcnJvdyA9ICdcXHUyMTkzJztcbiAgbmFtZU9mSXRlbSA9ICcnO1xuXG4gIGFkZEJ1dHRvbiA9IGZhbHNlO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgfVxuXG4gIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkubmFtZSAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lIHx8XG4gICAgICBwcmV2U3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvblxuICAgICkge1xuICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09ICdhc2MnID8gdGhpcy51cEFycm93IDogdGhpcy5kb3duQXJyb3c7XG4gIH1cblxuICBnZXRFcnJvcnMgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtcyBvd25lcicsIHRoaXMucHJvcHMub3duZXIpO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMnLCByZXMuZGF0YSk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyBpdGVtczogcmVzLmRhdGEgfTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1zIHN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcblxuICBnZXRJdGVtID0gaWQgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICB9O1xuXG4gIGJ0blNvcnRDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHNvcnRlZF9uYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgLy9jb25zb2xlLmxvZygnYnRuU29ydENsaWNrLnNvcnRlZF9uYW1lJywgc29ydGVkX25hbWUpO1xuXG4gICAgaWYgKCFzb3J0ZWRfbmFtZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHNvcnRlZF9uYW1lKSB7XG4gICAgICBjb25zdCBzb3J0ZWRCeSA9IHtcbiAgICAgICAgbmFtZTogc29ydGVkX25hbWUsXG4gICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzb3J0ZWRCeTogc29ydGVkQnksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnO1xuXG4gICAgICBjb25zdCBzb3J0ZWRCeSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc29ydGVkQnk6IHNvcnRlZEJ5IH0pO1xuICAgIH1cbiAgfTtcblxuICBidG5EZWxDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RlbGV0ZURpYWxvZzogdHJ1ZSxcbiAgICAgIGl0ZW1EZWxldGU6IGl0ZW0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnRuQWRkQ2xpY2sgPSBlID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBidG5FZGl0Q2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBpdGVtX3BrID0gZS50YXJnZXQudmFsdWU7XG4gICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrJywgaXRlbV9wayk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suaGlzdG9yeScsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suY2F0Y2gnLCBlcnIpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaXRlbURlbGV0ZSA9IGNvbmZpcm0gPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSB9KTtcblxuICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgaXRlbV9wazogdGhpcy5zdGF0ZS5pdGVtRGVsZXRlLmlkLFxuICAgICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbXM6IHJlcy5kYXRhLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICBnZXRUaENlbGwgPSAoaWQsIHRpdGxlLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dGggY2xhc3NOYW1lPVwidG9vbHRpcFwiIGlkPXtpZH0gb25DbGljaz17dGhpcy5idG5Tb3J0Q2xpY2t9IGtleT17aW5kZXh9PlxuICAgICAgICA8VG9vbHRpcENvbnRlbnQ+0J3QsNC20LzQuNGC0LUmbmJzcDvQtNC70Y8mbmJzcDvRgdC+0YDRgtC40YDQvtCy0LrQuDwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgIDxSb3cgaWQ9e2lkfSBjbGFzc05hbWU9XCJzb3J0ZWQtcm93XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc29ydGVkQnkubmFtZSA9PT0gaWQgJiYgPGRpdiBpZD17aWR9Pnt0aGlzLmFycm93fTwvZGl2Pn17JyAnfVxuICAgICAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJzb3J0ZWQtcm93X190ZXh0XCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC90aD5cbiAgICApO1xuICB9O1xuXG4gIGdldEJ1dHRvbnMgPSBpZCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHRvb2x0aXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuRWRpdENsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgPFRvb2x0aXBDb250ZW50IGNsYXNzTmFtZT1cInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCI+XG4gICAgICAgICAgICDQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XG4gICAgICAgICAgPC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgICB7J1xcdTI3ZjYnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZGFuZ2VyIGJ0bi1kYW5nZXJfZGVsIHRvb2x0aXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuRGVsQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcENvbnRlbnQgY2xhc3NOYW1lPVwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIj5cbiAgICAgICAgICAgINCj0LTQsNC70LXQvdC40LVcbiAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgIHhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xuXG4gIGdldEFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5hZGRCdXR0b24pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5X2FkZCB0b29sdGlwXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJ0bkFkZENsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgPFRvb2x0aXBDb250ZW50PtCU0L7QsdCw0LLQu9C10L3QuNC1Jm5ic3A70L3QvtCy0L7Qs9C+Jm5ic3A70LDQstGC0L7QstC70LDQtNC10LvRjNGG0LA8L1Rvb2x0aXBDb250ZW50PitcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApO1xuICAgIHJldHVybiA8PjwvPjtcbiAgfTtcblxuICBnZXREZWxldGVEaWFsb2cgPSAoKSA9PiB7fTtcblxuICBkZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgLy9pZiAodGhpcy5zdGF0ZS5zaG93RGVsZXRlRGlhbG9nKSByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgfTtcbiAgZ2V0VGFibGUgPSAoKSA9PiB7fTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IGNsZWFyTWVzc2FnZXM9e3RoaXMuY2xlYXJNZXNzYWdlc30gLz5cbiAgICAgICAge3RoaXMuZGVsZXRlRGlhbG9nKCl9XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGVyIC8+IDogdGhpcy5nZXRUYWJsZSgpfVxuICAgICAgICB7dGhpcy5nZXRBZGRCdXR0b24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy9leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RPZkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vY3NzL0xvYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWxvYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWR1YWwtcmluZ1wiIC8+XG4gIDwvZGl2PlxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdtb2RhbC1kaWFsb2cnO1xuY29uc3QgTW9kYWxIZWFkZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBjbGFzc0xpc3QgPSByZWYuY3VycmVudCEuY2xhc3NMaXN0O1xuICAgIC8vICAgY29uc29sZS5sb2coJ01vZGFsSGVhZGVyLmJhc2VDbGFzcycsIGJhc2VDbGFzcyk7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiByZWYsIGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19faGVhZGVyJywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWxUaXRsZSA9IHByb3BzID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuVGl0bGUnLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX3RpdGxlJywgaWQ6IHByb3BzLmlkIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBudWxsLCBwcm9wcy5jaGlsZHJlbikpKTtcbn07XG5jb25zdCBNb2RhbEJvZHkgPSBwcm9wcyA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLkJvZHknLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2JvZHknLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbEZvb3RlciA9IHByb3BzID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuRm9vdGVyJywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19mb290ZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2hvd1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wJyk7XG4gICAgICAgICAgICBjb25zdCAkZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLm1vZGFsJywgJG1vZGFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgICAgICAgICAgICAkYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LW1vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LmFkZCh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nX3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYmFzZUNsYXNzID0gdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb2RhbC5iYXNlQ2xhc3NOYW1lJywgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgLy90aGlzLmNoYW5nZVNob3dTdGF0dXMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb2RhbC5iYXNlQ2xhc3NOYW1lJywgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyAhPSBwcmV2UHJvcHMuc2hvdykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaG93U3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2NoaWxkcmVuJyB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSkpKSk7XG4gICAgfVxufVxuT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICAgIEhlYWRlcjogTW9kYWxIZWFkZXIsXG4gICAgVGl0bGU6IE1vZGFsVGl0bGUsXG4gICAgQm9keTogTW9kYWxCb2R5LFxuICAgIEZvb3RlcjogTW9kYWxGb290ZXIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3cgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3JvdycgfSwgY2hpbGRyZW4pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICd0YWJsZScgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAndG9vbHRpcF9fY29udGVudCcgfSwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gKHsgdG9vbHRpcCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgdG9vbHRpcCksXG4gICAgICAgIGNoaWxkcmVuKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==