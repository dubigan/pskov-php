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
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
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
    _this.state = {
      messages: [],
      showAlert: false,
      timeout: 5000
    };

    _this.getAlerts = function (array) {
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: 'alert alert_' + type,
          key: index
        }, e.message);
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null);
    };

    _this.delay = function (wait) {
      return new Promise(function (resolve) {
        return global.setTimeout(function () {
          return resolve('');
        }, wait);
      });
    };

    _this.clearMessages = function () {
      _this.setState({
        messages: [],
        showAlert: false
      });

      _this.props.clearMessages();
    };

    _this.showAlert = function () {
      if (_this.state.showAlert) {
        _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(_this.clearMessages);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null);
    };

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


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
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Loader */ "./assets/components/Loader.tsx");
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









var ListOfItems = /*#__PURE__*/function (_Component) {
  _inherits(ListOfItems, _Component);

  var _super = _createSuper(ListOfItems);

  function ListOfItems() {
    var _this;

    _classCallCheck(this, ListOfItems);

    _this = _super.apply(this, arguments);
    _this.state = {
      loading: false,
      messages: [],
      showDeleteDialog: false,
      itemDelete: undefined,
      items: [],
      sortedBy: _this.getDefaultSortedBy()
    };
    _this.url = ''; //upArrow = '&#x0225C;';

    _this.upArrow = "\u2191"; //downArrow = '&#x0225C;';

    _this.downArrow = "\u2193";
    _this.nameOfItem = '';
    _this.addButton = false;

    _this.getKeyValue = function (obj, key) {
      return obj[key];
    };

    _this.getErrors = function (data) {
      return Object.keys(data).map(function (key) {
        return {
          type: 'error',
          message: _this.getKeyValue(data, key)
        };
      });
    };

    _this.getItems = function () {
      _this.setState({
        loading: true
      }); //console.log('getItems owner', this.props.owner);


      axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(_this.url, {
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
    };

    _this.getItem = function (id) {
      return _this.state.items.filter(function (item) {
        return +item.id === +id;
      })[0];
    };

    _this.btnSortClick = function (e) {
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
    };

    _this.btnDelClick = function (e) {
      var item = _this.getItem(Number(e.target.value));

      _this.setState({
        showDeleteDialog: true,
        itemDelete: item
      });
    };

    _this.btnAddClick = function (e) {
      axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(_this.url, {
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
    };

    _this.btnEditClick = function (e) {
      var item_pk = e.target.value; //console.log('btnEditClick', item_pk);

      axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(_this.url, {
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
    };

    _this.getItemId = function (item) {
      return item ? item.id : -1;
    };

    _this.itemDelete = function (confirm) {
      _this.setState({
        showDeleteDialog: false
      });

      if (confirm === 'true') {
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(_this.url, {
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
    };

    _this.clearMessages = function () {
      _this.setState({
        messages: []
      });
    };

    _this.getThCell = function (id, title, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("th", {
        className: "tooltip",
        id: id,
        onClick: _this.btnSortClick,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_16__["Row"], {
        id: id,
        className: "sorted-row"
      }, _this.state.sortedBy.name === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: id
      }, _this.arrow), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: id,
        className: "sorted-row__text"
      }, title)));
    };

    _this.getButtons = function (id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
        value: id,
        variant: "primary",
        className: "btn-primary tooltip",
        onClick: _this.btnEditClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
        value: id,
        variant: "danger",
        className: "btn-danger btn-danger_del tooltip",
        onClick: _this.btnDelClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipContent"], {
        className: "tooltip__content tooltip__content_left"
      }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
    };

    _this.getAddButton = function () {
      if (_this.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
        variant: "primary",
        className: "btn-primary btn-primary_add tooltip",
        onClick: _this.btnAddClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null);
    };

    _this.getDeleteDialog = function () {};

    _this.deleteDialog = function () {
      //if (this.state.showDeleteDialog) return this.getDeleteDialog();
      return _this.getDeleteDialog();
    };

    _this.getTable = function () {};

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_19__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_20__["default"], null) : this.getTable(), this.getAddButton());
    }
  }, {
    key: "arrow",
    get: function get() {
      return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]); //export default withRouter(ListOfItems);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbGV0ZURpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdE9mSXRlbXMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3NzL0xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJBbGVydHMiLCJhcmd1bWVudHMiLCJzdGF0ZSIsIm1lc3NhZ2VzIiwic2hvd0FsZXJ0IiwidGltZW91dCIsImdldEFsZXJ0cyIsImFycmF5IiwibWFwIiwiZSIsImluZGV4IiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsIm1lc3NhZ2UiLCJGcmFnbWVudCIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsImNsZWFyTWVzc2FnZXMiLCJzZXRTdGF0ZSIsInByb3BzIiwidGhlbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJEZWxldGVEaWFsb2ciLCJoYW5kbGVDbG9zZSIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWVPZkl0ZW0iLCJpdGVtSW5mbyIsIml0ZW0iLCJnZXRJdGVtSW5mbyIsInBhcmFtcyIsIk1vZGFsIiwiYmFzZUNsYXNzTmFtZSIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsInVybCIsInVwQXJyb3ciLCJkb3duQXJyb3ciLCJhZGRCdXR0b24iLCJnZXRLZXlWYWx1ZSIsIm9iaiIsImdldEVycm9ycyIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZ2V0SXRlbXMiLCJheGlvcyIsInBvc3QiLCJzb3J0ZWRfYnkiLCJvd25lciIsInJlcyIsImVyciIsInJlc3BvbnNlIiwiZ2V0SXRlbSIsImlkIiwiZmlsdGVyIiwiYnRuU29ydENsaWNrIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiYXNzaWduIiwiYnRuRGVsQ2xpY2siLCJOdW1iZXIiLCJidG5BZGRDbGljayIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsImhpc3RvcnkiLCJwdXNoIiwiYnRuRWRpdENsaWNrIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldEl0ZW1JZCIsImNvbmZpcm0iLCJidG5fZGVsIiwiZ2V0VGhDZWxsIiwidGl0bGUiLCJUb29sdGlwQ29udGVudCIsIlJvdyIsImFycm93IiwiZ2V0QnV0dG9ucyIsInZhcmlhbnQiLCJnZXRBZGRCdXR0b24iLCJnZXREZWxldGVEaWFsb2ciLCJkZWxldGVEaWFsb2ciLCJnZXRUYWJsZSIsIkxvYWRlciIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiYmFzZUNsYXNzIiwiTW9kYWxIZWFkZXIiLCJyZWYiLCJ1c2VSZWYiLCJNb2RhbFRpdGxlIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJjaGFuZ2VTaG93U3RhdHVzIiwiJGJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbW9kYWwiLCIkbW9kYWxCYWNrZHJvcCIsIiRkaWFsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJUYWJsZSIsIlRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFDcUJBLE07Ozs7O0FBQ2pCLG9CQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNDLFNBQVQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsY0FBUSxFQUFFLEVBREQ7QUFFVEMsZUFBUyxFQUFFLEtBRkY7QUFHVEMsYUFBTyxFQUFFO0FBSEEsS0FBYjs7QUFLQSxVQUFLQyxTQUFMLEdBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPQSxLQUFLLEdBQUlBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3BDLFlBQUlDLElBQUksR0FBRyxRQUFYOztBQUNBLGdCQUFRRixDQUFDLENBQUNFLElBQVY7QUFDSSxlQUFLLE1BQUw7QUFDSUEsZ0JBQUksR0FBRyxNQUFQO0FBQ0E7O0FBQ0osZUFBSyxTQUFMO0FBQ0lBLGdCQUFJLEdBQUcsU0FBUDtBQUNBOztBQUNKLGVBQUssT0FBTDtBQUNJQSxnQkFBSSxHQUFHLFFBQVA7QUFDQTs7QUFDSjtBQUNJQSxnQkFBSSxHQUFHLFFBQVA7QUFYUjs7QUFhQSw0QkFBUUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxtQkFBUyxFQUFFLGlCQUFpQkgsSUFBOUI7QUFBb0NJLGFBQUcsRUFBRUw7QUFBekMsU0FBM0IsRUFBNkVELENBQUMsQ0FBQ08sT0FBL0UsQ0FBUjtBQUNILE9BaEJlLENBQUosZ0JBZ0JMSiw0Q0FBSyxDQUFD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UDtBQUNILENBRk07QUFHQSxJQUFNb0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBMkI7QUFBQSxNQUF4QnRCLE9BQXdCLFNBQXhCQSxPQUF3QjtBQUFBLE1BQWZFLFFBQWUsU0FBZkEsUUFBZTtBQUM5QyxzQkFBUTFHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUMsYUFBUyxFQUFFO0FBQWIsR0FBM0IsZUFDSkYsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZGLGNBQXBCLEVBQW9DLElBQXBDLEVBQTBDVSxPQUExQyxDQURJLEVBRUpFLFFBRkksQ0FBUjtBQUdILENBSk0sQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVsYXkgPSAod2FpdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNob3dBbGVydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkodGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0KS50aGVuKHRoaXMuY2xlYXJNZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMuZ2V0QWxlcnRzKHRoaXMuc3RhdGUubWVzc2FnZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5tZXNzYWdlcykgIT09IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VzKSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIHNob3dBbGVydCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMuc2hvd0FsZXJ0KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9saWIvTW9kYWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW1EZWxldGUoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hbWVPZkl0ZW0gPSAnJztcbiAgICAgICAgdGhpcy5pdGVtSW5mbyA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgeyBiYXNlQ2xhc3NOYW1lOiBcImRlbGV0ZS1kaWFsb2dcIiwgc2hvdzogdGhpcy5wcm9wcy5zaG93LCBvbkhpZGU6IHRoaXMuaGFuZGxlQ2xvc2UgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuSGVhZGVyLCB7IGNsb3NlQnV0dG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuVGl0bGUsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lT2ZJdGVtKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkJvZHksIG51bGwsIHRoaXMuZ2V0SXRlbUluZm8oKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXNlY29uZGFyeVwiLCB2YWx1ZTogZmFsc2UsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXJcIiwgdmFsdWU6IHRydWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvUm93JztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL0FsZXJ0cyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RPZkl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBpdGVtRGVsZXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBzb3J0ZWRCeTogdGhpcy5nZXREZWZhdWx0U29ydGVkQnkoKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cmwgPSAnJztcbiAgICAgICAgLy91cEFycm93ID0gJyYjeDAyMjVDOyc7XG4gICAgICAgIHRoaXMudXBBcnJvdyA9ICdcXHUyMTkxJztcbiAgICAgICAgLy9kb3duQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgICAgICAgdGhpcy5kb3duQXJyb3cgPSAnXFx1MjE5Myc7XG4gICAgICAgIHRoaXMubmFtZU9mSXRlbSA9ICcnO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdldEtleVZhbHVlID0gKG9iaiwga2V5KSA9PiBvYmpba2V5XTtcbiAgICAgICAgdGhpcy5nZXRFcnJvcnMgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogdGhpcy5nZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMnLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7IGl0ZW1zOiByZXMuZGF0YSB9O1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uaWQgPT09ICtpZClbMF07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuU29ydENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZF9uYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5Tb3J0Q2xpY2suc29ydGVkX25hbWUnLCBzb3J0ZWRfbmFtZSk7XG4gICAgICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHNvcnRlZF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHNvcnRlZF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRCeTogc29ydGVkQnksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc29ydGVkQnkpLCB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0ZWRCeTogc29ydGVkQnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuRGVsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dEZWxldGVEaWFsb2c6IHRydWUsXG4gICAgICAgICAgICAgICAgaXRlbURlbGV0ZTogaXRlbSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ0bkFkZENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuRWRpdENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljaycsIGl0ZW1fcGspO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgIGJ0bl9lZGl0OiAnJyxcbiAgICAgICAgICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suaGlzdG9yeScsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljay5jYXRjaCcsIGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRJdGVtSWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmlkIDogLTE7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXRlbURlbGV0ZSA9IChjb25maXJtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UgfSk7XG4gICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICBidG5fZGVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9wazogdGhpcy5nZXRJdGVtSWQodGhpcy5zdGF0ZS5pdGVtRGVsZXRlKSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogcmVzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0VGhDZWxsID0gKGlkLCB0aXRsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiwgaWQ6IGlkLCBvbkNsaWNrOiB0aGlzLmJ0blNvcnRDbGljaywga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzQ1xcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTAwQTBcXHUwNDM0XFx1MDQzQlxcdTA0NEZcXHUwMEEwXFx1MDQ0MVxcdTA0M0VcXHUwNDQwXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDNBXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lID09PSBpZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkIH0sIHRoaXMuYXJyb3cpLFxuICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93X190ZXh0XCIgfSwgdGl0bGUpKSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEJ1dHRvbnMgPSAoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFsdWU6IGlkLCB2YXJpYW50OiBcInByaW1hcnlcIiwgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5IHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5idG5FZGl0Q2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAnXFx1MjdmNicpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJkYW5nZXJcIiwgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXIgYnRuLWRhbmdlcl9kZWwgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkRlbENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCIpKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0QWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uKVxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9hZGQgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkFkZENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVxcdTAwQTBcXHUwNDNEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQzM1xcdTA0M0VcXHUwMEEwXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDQ2XFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCIrXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXREZWxldGVEaWFsb2cgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMuZGVsZXRlRGlhbG9nID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5zdGF0ZS5zaG93RGVsZXRlRGlhbG9nKSByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFRhYmxlID0gKCkgPT4geyB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cbiAgICBnZXREZWZhdWx0U29ydGVkQnkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLnNvcnRlZEJ5Lm5hbWUgIT09IHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSB8fFxuICAgICAgICAgICAgcHJldlN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgYXJyb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyB0aGlzLnVwQXJyb3cgOiB0aGlzLmRvd25BcnJvdztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCB7IG1lc3NhZ2VzOiB0aGlzLnN0YXRlLm1lc3NhZ2VzLCBjbGVhck1lc3NhZ2VzOiB0aGlzLmNsZWFyTWVzc2FnZXMgfSksXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZygpLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIG51bGwpIDogdGhpcy5nZXRUYWJsZSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRBZGRCdXR0b24oKSkpO1xuICAgIH1cbn1cbi8vZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMaXN0T2ZJdGVtcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Nzcy9Mb2FkZXIuY3NzJztcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNlbnRlci1sb2FkZXJcIiB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibGRzLWR1YWwtcmluZ1wiIH0pKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ21vZGFsLWRpYWxvZyc7XG5jb25zdCBNb2RhbEhlYWRlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnN0IGNsYXNzTGlzdCA9IHJlZi5jdXJyZW50IS5jbGFzc0xpc3Q7XG4gICAgLy8gICBjb25zb2xlLmxvZygnTW9kYWxIZWFkZXIuYmFzZUNsYXNzJywgYmFzZUNsYXNzKTtcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19oZWFkZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbFRpdGxlID0gcHJvcHMgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5UaXRsZScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fdGl0bGUnLCBpZDogcHJvcHMuaWQgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIHByb3BzLmNoaWxkcmVuKSkpO1xufTtcbmNvbnN0IE1vZGFsQm9keSA9IHByb3BzID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuQm9keScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fYm9keScsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsRm9vdGVyID0gcHJvcHMgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Gb290ZXInLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2Zvb3RlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaG93U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWxCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnKTtcbiAgICAgICAgICAgIGNvbnN0ICRkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kYWwubW9kYWwnLCAkbW9kYWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAgICAgJG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAgICAgJGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMucHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBiYXNlQ2xhc3MgPSB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLmJhc2VDbGFzc05hbWUnLCB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAvL3RoaXMuY2hhbmdlU2hvd1N0YXR1cygpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLmJhc2VDbGFzc05hbWUnLCB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ICE9IHByZXZQcm9wcy5zaG93KSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNob3dTdGF0dXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogdGhpcy5wcm9wcy5pZCwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fY2hpbGRyZW4nIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkpKTtcbiAgICB9XG59XG5PYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gICAgSGVhZGVyOiBNb2RhbEhlYWRlcixcbiAgICBUaXRsZTogTW9kYWxUaXRsZSxcbiAgICBCb2R5OiBNb2RhbEJvZHksXG4gICAgRm9vdGVyOiBNb2RhbEZvb3Rlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAndGFibGUnIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=