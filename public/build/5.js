(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./assets/components/CarDetail.js":
/*!****************************************!*\
  !*** ./assets/components/CarDetail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarDetail; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/DetailOfItem.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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







var EMPTY_CAR = {
  id: -1,
  manufacturer: "",
  model: "",
  production: new Date().toLocaleDateString("ru"),
  color: "",
  power: 0,
  mileage: 0,
  comment: ""
};

var CarDetail = /*#__PURE__*/function (_DetailOfItem) {
  _inherits(CarDetail, _DetailOfItem);

  var _super = _createSuper(CarDetail);

  function CarDetail() {
    var _this;

    _classCallCheck(this, CarDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "url", "/api/car/");

    _defineProperty(_assertThisInitialized(_this), "changeDate", function (date) {
      //console.log("changeDate", date.toLocaleDateString("ru"));
      var item = _objectSpread(_objectSpread({}, _this.state.item), {}, {
        production: date.toLocaleDateString("ru")
      });

      _this.setState({
        item: item
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDate", function () {
      if (_this.state.item.production) {
        var _this$state$item$prod = _this.state.item.production.split("."),
            _this$state$item$prod2 = _slicedToArray(_this$state$item$prod, 3),
            day = _this$state$item$prod2[0],
            month = _this$state$item$prod2[1],
            year = _this$state$item$prod2[2]; //console.log("getDate", [day, month, year]);


        return new Date(year, (+month - 1).toString(), day);
      }

      return new Date();
    });

    return _this;
  }

  _createClass(CarDetail, [{
    key: "getNewItem",
    value: function getNewItem() {
      var item = EMPTY_CAR;
      console.log("getNewItem", item);
      return item;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_14__["default"], {
        messages: this.state.messages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "manufacturer",
        type: "text",
        value: this.state.item.manufacturer,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041C\u043E\u0434\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "model",
        type: "text",
        value: this.state.item.model,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "col-6",
        format: "dd.MM.y",
        locale: "ru",
        name: "production" // showYearDropdown={true}
        ,
        onChange: this.changeDate,
        value: this.getDate()
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "color"
      }, "\u0426\u0432\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "color",
        type: "text",
        value: this.state.item.color,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "age"
      }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043B.\u0441.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "power",
        type: "text",
        maxLength: "3",
        value: this.state.item.power ? this.state.item.power : "",
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "age"
      }, "\u041F\u0440\u043E\u0431\u0435\u0433 (\u043A\u043C.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "mileage",
        type: "text",
        maxLength: "10",
        value: this.state.item.mileage ? this.state.item.mileage : "",
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        as: "textarea",
        rows: "7",
        value: this.state.item.comment,
        name: "comment",
        onChange: this.changeItem
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["OverlayTrigger"], {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
          id: "tooltip-2"
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "col",
        onClick: this.saveItem
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))));
    }
  }]);

  return CarDetail;
}(_DetailOfItem__WEBPACK_IMPORTED_MODULE_13__["DetailOfItem"]);



/***/ }),

/***/ "./assets/components/DetailOfItem.js":
/*!*******************************************!*\
  !*** ./assets/components/DetailOfItem.js ***!
  \*******************************************/
/*! exports provided: DetailOfItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOfItem", function() { return DetailOfItem; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
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



var DetailOfItem = /*#__PURE__*/function (_Component) {
  _inherits(DetailOfItem, _Component);

  var _super = _createSuper(DetailOfItem);

  function DetailOfItem() {
    var _this;

    _classCallCheck(this, DetailOfItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      messages: [],
      item: _this.getNewItem()
    });

    _defineProperty(_assertThisInitialized(_this), "url", "/api/owner/");

    _defineProperty(_assertThisInitialized(_this), "tooltipPlace", "bottom");

    _defineProperty(_assertThisInitialized(_this), "digitsOnly", function (e) {
      var charCode = e.charCode; //console.log(charCode);

      if (charCode < 48 || charCode > 57) {
        // digits only
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
      console.log("getErrors", data);
      return Object.keys(data).map(function (key) {
        return {
          type: "error",
          message: data[key]
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItem", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {}).then(function (res) {
        //console.log("getItem", res.data);
        _this.redirect(res.data.redirect);

        _this.setState({
          item: _this.getItemFromData(res.data)
        });
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "redirect", function (redirect) {
      if (redirect) {
        window.location.href = redirect;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveItem", function () {
      console.log("saveItem", _this.state.item);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
        item: _this.state.item
      }).then(function (res) {
        //console.log("saveItem", res.data);
        _this.redirect(res.data.redirect);

        _this.setState({
          item: _this.getItemFromData(res.data),
          messages: [{
            type: "success",
            message: "Информация сохранена"
          }]
        });
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (e) {
      _this.setState({
        item: _this.getChangedItem(e)
      });
    });

    return _this;
  }

  _createClass(DetailOfItem, [{
    key: "getNewItem",
    value: function getNewItem() {}
  }, {
    key: "getNewItemId",
    value: function getNewItemId() {
      return -1;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItem();
    }
  }, {
    key: "getItemFromData",
    value: function getItemFromData(data) {
      console.log("getItemFromData", data);
      return data.id ? data : this.getNewItem();
    }
  }, {
    key: "getChangedItem",
    value: function getChangedItem(e) {
      var item = _objectSpread(_objectSpread({}, this.state.item), {}, _defineProperty({}, e.target.name, e.target.value));

      return item;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
    }
  }]);

  return DetailOfItem;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FyRGV0YWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbE9mSXRlbS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ2YXJpYW50IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiZ2V0UmVhY3RBbGVydHMiLCJtZXNzYWdlcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByZXZNZXNzYWdlcyIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkVNUFRZX0NBUiIsImlkIiwibWFudWZhY3R1cmVyIiwibW9kZWwiLCJwcm9kdWN0aW9uIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbG9yIiwicG93ZXIiLCJtaWxlYWdlIiwiY29tbWVudCIsIkNhckRldGFpbCIsImRhdGUiLCJpdGVtIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VJdGVtIiwiY2hhbmdlRGF0ZSIsImdldERhdGUiLCJkaWdpdHNPbmx5IiwidG9vbHRpcFBsYWNlIiwic2F2ZUl0ZW0iLCJEZXRhaWxPZkl0ZW0iLCJnZXROZXdJdGVtIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwicmVzIiwicmVkaXJlY3QiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImdl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S0FGbEIsRUFBVjs7QUFJQSxhQUFPdEMsSUFBUDtBQUNEO0FBMUZIO0FBQUE7QUFBQSw2QkFnR1c7QUFDUCwwQkFBTyx1SEFBUDtBQUNEO0FBbEdIOztBQUFBO0FBQUEsRUFBa0NkLCtDQUFsQyxFIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydCBhcyBSZWFjdEFsZXJ0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG5cbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBtZXNzYWdlcyAhPT0gcHJldk1lc3NhZ2VzKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dBbGVydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFJlYWN0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYW50ID0gZS50eXBlID09PSBcInN1Y2Nlc3NcIiA/IFwicHJpbWFyeVwiIDogXCJkYW5nZXJcIjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt2YXJpYW50fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gKHdhaXQpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB3YWl0KTtcbiAgICB9KTtcblxuICBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLmRlbGF5KFxuICAgICAgICB0aGlzLnByb3BzLnRpbWVvdXQgPyB0aGlzLnByb3BzLnRpbWVvdXQgOiB0aGlzLnN0YXRlLnRpbWVvdXRcbiAgICAgICkudGhlbigoKSA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJldHVybiA8Pnt0aGlzLmdldFJlYWN0QWxlcnRzKHRoaXMucHJvcHMubWVzc2FnZXMpfTwvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnNob3dBbGVydCgpfTwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUm93LFxuICBGb3JtLFxuICBCdXR0b24sXG4gIFRvb2x0aXAsXG4gIE92ZXJsYXlUcmlnZ2VyLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IERldGFpbE9mSXRlbSB9IGZyb20gXCIuL0RldGFpbE9mSXRlbVwiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcblxuY29uc3QgRU1QVFlfQ0FSID0ge1xuICBpZDogLTEsXG4gIG1hbnVmYWN0dXJlcjogXCJcIixcbiAgbW9kZWw6IFwiXCIsXG4gIHByb2R1Y3Rpb246IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnVcIiksXG4gIGNvbG9yOiBcIlwiLFxuICBwb3dlcjogMCxcbiAgbWlsZWFnZTogMCxcbiAgY29tbWVudDogXCJcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICB1cmwgPSBcIi9hcGkvY2FyL1wiO1xuXG4gIGdldE5ld0l0ZW0oKSB7XG4gICAgY29uc3QgaXRlbSA9IEVNUFRZX0NBUjtcbiAgICBjb25zb2xlLmxvZyhcImdldE5ld0l0ZW1cIiwgaXRlbSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoYW5nZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2VEYXRlXCIsIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnVcIikpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLml0ZW0sXG4gICAgICBwcm9kdWN0aW9uOiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpLFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW0gfSk7XG4gIH07XG5cbiAgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pdGVtLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRoaXMuc3RhdGUuaXRlbS5wcm9kdWN0aW9uLnNwbGl0KFwiLlwiKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJnZXREYXRlXCIsIFtkYXksIG1vbnRoLCB5ZWFyXSk7XG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgKCttb250aCAtIDEpLnRvU3RyaW5nKCksIGRheSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QvNC+0LHQuNC70Yw8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7Qn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFudWZhY3R1cmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLm1hbnVmYWN0dXJlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCc0L7QtNC10LvRjDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0ubW9kZWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCU0LDRgtCwINCy0YvQv9GD0YHQutCwPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgey8qIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPXtgdG9vbHRpcC0xYH0+0JTQsNGC0LAg0LLRi9C/0YPRgdC60LAg0LIg0YTQvtGA0LzQsNGC0LUgZGQubW0ueXl5PC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkLk1NLnlcIlxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9XCJydVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1llYXJEcm9wZG93bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L092ZXJsYXlUcmlnZ2VyPiAqL31cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCIgbmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgINCm0LLQtdGCXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCIgbmFtZT1cImFnZVwiPlxuICAgICAgICAgICAgICAgICAgICDQnNC+0YnQvdC+0YHRgtGMICjQuy7RgS4pXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5wb3dlciA/IHRoaXMuc3RhdGUuaXRlbS5wb3dlciA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlnaXRzT25seX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiIG5hbWU9XCJhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LHQtdCzICjQutC8LilcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWlsZWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtLm1pbGVhZ2UgPyB0aGlzLnN0YXRlLml0ZW0ubWlsZWFnZSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpZ2l0c09ubHl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0uY29tbWVudH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfVxuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgdG9vbHRpcC0yYH0+XG4gICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINC40L3RhNC+0YDQvNCw0YbQuNGOINC+0LEg0LDQstGC0L7QvNC+0LHQuNC70LVcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbE9mSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldE5ld0l0ZW0oKSB7fVxuICBnZXROZXdJdGVtSWQoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGl0ZW06IHRoaXMuZ2V0TmV3SXRlbSgpLFxuICB9O1xuXG4gIHVybCA9IFwiL2FwaS9vd25lci9cIjtcbiAgdG9vbHRpcFBsYWNlID0gXCJib3R0b21cIjtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW0oKTtcbiAgfVxuXG4gIGRpZ2l0c09ubHkgPSAoZSkgPT4ge1xuICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgLy9jb25zb2xlLmxvZyhjaGFyQ29kZSk7XG4gICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0RXJyb3JzID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImdldEVycm9yc1wiLCBkYXRhKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJlcnJvclwiLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJdGVtRnJvbURhdGEoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0SXRlbUZyb21EYXRhXCIsIGRhdGEpO1xuICAgIHJldHVybiBkYXRhLmlkID8gZGF0YSA6IHRoaXMuZ2V0TmV3SXRlbSgpO1xuICB9XG5cbiAgZ2V0SXRlbSA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHt9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0SXRlbVwiLCByZXMuZGF0YSk7XG4gICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtOiB0aGlzLmdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSkgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZWRpcmVjdCA9IChyZWRpcmVjdCkgPT4ge1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICB9XG4gIH07XG5cbiAgc2F2ZUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCB0aGlzLnN0YXRlLml0ZW0pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGl0ZW06IHRoaXMuc3RhdGUuaXRlbSB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2F2ZUl0ZW1cIiwgcmVzLmRhdGEpO1xuXG4gICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSxcbiAgICAgICAgICBtZXNzYWdlczogW3sgdHlwZTogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwi0JjQvdGE0L7RgNC80LDRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdCwXCIgfV0sXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZ2V0Q2hhbmdlZEl0ZW0oZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLml0ZW0sXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGFuZ2VJdGVtID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbTogdGhpcy5nZXRDaGFuZ2VkSXRlbShlKSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9