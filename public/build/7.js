(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
  manufacturer: '',
  model: '',
  production: new Date().toLocaleDateString('ru'),
  color: '',
  power: 0,
  mileage: 0,
  comment: ''
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

    _defineProperty(_assertThisInitialized(_this), "url", '/api/car/');

    _defineProperty(_assertThisInitialized(_this), "changeDate", function (date) {
      //console.log("changeDate", date.toLocaleDateString("ru"));
      var item = _objectSpread(_objectSpread({}, _this.state.item), {}, {
        production: date.toLocaleDateString('ru')
      });

      _this.setState({
        item: item
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDate", function () {
      if (_this.state.item.production) {
        var _this$state$item$prod = _this.state.item.production.split('.'),
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
      console.log('getNewItem', item);
      return item;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_14__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
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
        value: this.state.item.power ? this.state.item.power : '',
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
        value: this.state.item.mileage ? this.state.item.mileage : '',
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

    _defineProperty(_assertThisInitialized(_this), "url", '/api/owner/');

    _defineProperty(_assertThisInitialized(_this), "tooltipPlace", 'bottom');

    _defineProperty(_assertThisInitialized(_this), "digitsOnly", function (e) {
      var charCode = e.charCode; //console.log(charCode);

      if (charCode < 48 || charCode > 57) {
        // digits only
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
      console.log('getErrors', data);
      return Object.keys(data).map(function (key) {
        return {
          type: 'error',
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
      console.log('saveItem', _this.state.item);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
        item: _this.state.item
      }).then(function (res) {
        //console.log("saveItem", res.data);
        _this.redirect(res.data.redirect);

        _this.setState({
          item: _this.getItemFromData(res.data),
          messages: [{
            type: 'success',
            message: 'Информация сохранена'
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

    _defineProperty(_assertThisInitialized(_this), "clearMessages", function () {
      _this.setState({
        messages: []
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
      console.log('getItemFromData', data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FyRGV0YWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbE9mSXRlbS5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJtZXNzYWdlcyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImNsZWFyTWVzc2FnZXMiLCJnZXRSZWFjdEFsZXJ0cyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJFTVBUWV9DQVIiLCJpZCIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwicHJvZHVjdGlvbiIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb2xvciIsInBvd2VyIiwibWlsZWFnZSIsImNvbW1lbnQiLCJDYXJEZXRhaWwiLCJkYXRlIiwiaXRlbSIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSXRlbSIsImNoYW5nZURhdGUiLCJnZXREYXRlIiwiZGlnaXRzT25seSIsInRvb2x0aXBQbGFjZSIsInNhdmVJdGVtIiwiRGV0YWlsT2ZJdGVtIiwiZ2V0TmV3SXRlbSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImF4aW9zIiwicG9zdCIsInVybCIsInJlcyIsInJlZGlyZWN0IiwiZ2V0SXRlbUZyb21EYXRhIiwiZXJyIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRDaGFuZ2VkSXRlbSIsImdldEl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWDtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxlQUFTLEVBQUUsS0FGTDtBQUdOQyxhQUFPLEVBQUU7QUFISCxLOztxRUE0QlMsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCLGFBQU9BLEtBQUssR0FDVkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdEIsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNFLGVBQUssTUFBTDtBQUNFQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDRixlQUFLLFNBQUw7QUFDRUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNGO0FBQ0VBLGdCQUFJLEdBQUcsUUFBUDtBQVhKOztBQWFBLDRCQUNFLDJEQUFDLHFEQUFEO0FBQVksaUJBQU8sRUFBRUEsSUFBckI7QUFBMkIsYUFBRyxFQUFFRDtBQUFoQyxXQUNHRCxDQUFDLENBQUNHLE9BREwsQ0FERjtBQUtELE9BcEJELENBRFUsZ0JBdUJWLHVIQXZCRjtBQXlCRCxLOzs0REFFTyxVQUFBQyxJQUFJO0FBQUEsYUFDVixJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQ3JCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRFU7QUFBQSxLOztnRUFLQSxZQUFNO0FBQ2hCLFVBQUksTUFBS0ksS0FBTCxDQUFXWixTQUFmLEVBQTBCO0FBQ3hCLGNBQUthLEtBQUwsQ0FDRSxNQUFLQyxLQUFMLENBQVdiLE9BQVgsR0FBcUIsTUFBS2EsS0FBTCxDQUFXYixPQUFoQyxHQUEwQyxNQUFLVyxLQUFMLENBQVdYLE9BRHZELEVBRUVjLElBRkYsQ0FFTyxZQUFNO0FBQ1gsZ0JBQUtDLFFBQUwsQ0FBYztBQUNaakIsb0JBQVEsRUFBRSxFQURFO0FBRVpDLHFCQUFTLEVBQUU7QUFGQyxXQUFkOztBQUlBLGdCQUFLYyxLQUFMLENBQVdHLGFBQVg7QUFDRCxTQVJEOztBQVNBLDRCQUFPLHdIQUFHLE1BQUtDLGNBQUwsQ0FBb0IsTUFBS04sS0FBTCxDQUFXYixRQUEvQixDQUFILENBQVA7QUFDRDs7QUFDRCwwQkFBTyx1RUFBUDtBQUNELEs7Ozs7Ozs7dUNBckVrQm9CLFMsRUFBV0MsUyxFQUFXO0FBQ3ZDLFVBQUlwQixTQUFTLEdBQUcsS0FBaEI7QUFEdUMsVUFFL0JELFFBRitCLEdBRWxCLEtBQUtlLEtBRmEsQ0FFL0JmLFFBRitCLEVBR3ZDO0FBRUE7O0FBRUEsVUFDRUEsUUFBUSxJQUNSQSxRQUFRLENBQUNzQixNQUFULEdBQWtCLENBRGxCLElBRUFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtYLEtBQUwsQ0FBV2IsUUFBMUIsTUFBd0N1QixJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLFFBQWYsQ0FIMUMsRUFJRTtBQUNBQyxpQkFBUyxHQUFHLElBQVo7QUFDRDs7QUFDRCxVQUFJQSxTQUFTLElBQUksQ0FBQyxLQUFLWSxLQUFMLENBQVdaLFNBQTdCLEVBQXdDO0FBQ3RDLGFBQUtnQixRQUFMLENBQWM7QUFDWmpCLGtCQUFRLEVBQUVBLFFBREU7QUFFWkMsbUJBQVMsRUFBVEE7QUFGWSxTQUFkO0FBSUQ7QUFDRjs7OzZCQW1EUTtBQUNQLDBCQUFPLHdIQUFHLEtBQUtBLFNBQUwsRUFBSCxDQUFQO0FBQ0Q7Ozs7RUFoRmlDd0IsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hwQztBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRSxDQUFDLENBRFc7QUFFaEJDLGNBQVksRUFBRSxFQUZFO0FBR2hCQyxPQUFLLEVBQUUsRUFIUztBQUloQkMsWUFBVSxFQUFFLElBQUlDLElBQUosR0FBV0Msa0JBQVgsQ0FBOEIsSUFBOUIsQ0FKSTtBQUtoQkMsT0FBSyxFQUFFLEVBTFM7QUFNaEJDLE9BQUssRUFBRSxDQU5TO0FBT2hCQyxTQUFPLEVBQUUsQ0FQTztBQVFoQkMsU0FBTyxFQUFFO0FBUk8sQ0FBbEI7O0lBVXFCQyxTOzs7Ozs7Ozs7Ozs7Ozs7OzBEQUNiLFc7O2lFQVNPLFVBQUFDLElBQUksRUFBSTtBQUNuQjtBQUNBLFVBQU1DLElBQUksbUNBQ0wsTUFBSzFCLEtBQUwsQ0FBVzBCLElBRE47QUFFUlQsa0JBQVUsRUFBRVEsSUFBSSxDQUFDTixrQkFBTCxDQUF3QixJQUF4QjtBQUZKLFFBQVY7O0FBSUEsWUFBS2YsUUFBTCxDQUFjO0FBQUVzQixZQUFJLEVBQUpBO0FBQUYsT0FBZDtBQUNELEs7OzhEQUVTLFlBQU07QUFDZCxVQUFJLE1BQUsxQixLQUFMLENBQVcwQixJQUFYLENBQWdCVCxVQUFwQixFQUFnQztBQUFBLG9DQUNILE1BQUtqQixLQUFMLENBQVcwQixJQUFYLENBQWdCVCxVQUFoQixDQUEyQlUsS0FBM0IsQ0FBaUMsR0FBakMsQ0FERztBQUFBO0FBQUEsWUFDdkJDLEdBRHVCO0FBQUEsWUFDbEJDLEtBRGtCO0FBQUEsWUFDWEMsSUFEVyw4QkFFOUI7OztBQUNBLGVBQU8sSUFBSVosSUFBSixDQUFTWSxJQUFULEVBQWUsQ0FBQyxDQUFDRCxLQUFELEdBQVMsQ0FBVixFQUFhRSxRQUFiLEVBQWYsRUFBd0NILEdBQXhDLENBQVA7QUFDRDs7QUFDRCxhQUFPLElBQUlWLElBQUosRUFBUDtBQUNELEs7Ozs7Ozs7aUNBdkJZO0FBQ1gsVUFBTVEsSUFBSSxHQUFHYixTQUFiO0FBQ0FtQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCUCxJQUExQjtBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzZCQW9CUTtBQUNQLDBCQUNFLHFGQUNFLDJEQUFDLGdEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLMUIsS0FBTCxDQUFXYixRQUR2QjtBQUVFLHFCQUFhLEVBQUUsS0FBS2tCO0FBRnRCLFFBREYsZUFLRSwyREFBQyxxREFBRCxxQkFDRSwyREFBQyxxREFBRCxDQUFNLEtBQU4sdUVBREYsZUFFRSwyREFBQyxxREFBRCxDQUFNLElBQU4scUJBQ0UsMkRBQUMsb0RBQUQscUJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMscURBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QiwwRkFERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxvQkFEWjtBQUVFLFlBQUksRUFBQyxjQUZQO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXMEIsSUFBWCxDQUFnQlgsWUFKekI7QUFLRSxnQkFBUSxFQUFFLEtBQUttQjtBQUxqQixRQUZGLGVBU0UsMkRBQUMscURBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QixnREFURixlQVVFO0FBQ0UsaUJBQVMsRUFBQyxvQkFEWjtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxhQUFLLEVBQUUsS0FBS2xDLEtBQUwsQ0FBVzBCLElBQVgsQ0FBZ0JWLEtBSnpCO0FBS0UsZ0JBQVEsRUFBRSxLQUFLa0I7QUFMakIsUUFWRixlQWtCRSwyREFBQyxxREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLCtFQWxCRixlQXdCRSwyREFBQyx5REFBRDtBQUNFLGlCQUFTLEVBQUMsT0FEWjtBQUVFLGNBQU0sRUFBQyxTQUZUO0FBR0UsY0FBTSxFQUFDLElBSFQ7QUFJRSxZQUFJLEVBQUMsWUFKUCxDQUtFO0FBTEY7QUFNRSxnQkFBUSxFQUFFLEtBQUtDLFVBTmpCO0FBT0UsYUFBSyxFQUFFLEtBQUtDLE9BQUw7QUFQVCxRQXhCRixlQWtDRSwyREFBQyxxREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBQztBQUFuQyxvQ0FsQ0YsZUFxQ0U7QUFDRSxpQkFBUyxFQUFDLG9CQURaO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGFBQUssRUFBRSxLQUFLcEMsS0FBTCxDQUFXMEIsSUFBWCxDQUFnQk4sS0FKekI7QUFLRSxnQkFBUSxFQUFFLEtBQUtjO0FBTGpCLFFBckNGLGVBNENFLDJEQUFDLHFEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUMsT0FBdEI7QUFBOEIsWUFBSSxFQUFDO0FBQW5DLDZFQTVDRixlQStDRTtBQUNFLGlCQUFTLEVBQUMsb0JBRFo7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsaUJBQVMsRUFBQyxHQUpaO0FBS0UsYUFBSyxFQUFFLEtBQUtsQyxLQUFMLENBQVcwQixJQUFYLENBQWdCTCxLQUFoQixHQUF3QixLQUFLckIsS0FBTCxDQUFXMEIsSUFBWCxDQUFnQkwsS0FBeEMsR0FBZ0QsRUFMekQ7QUFNRSxnQkFBUSxFQUFFLEtBQUthLFVBTmpCO0FBT0Usa0JBQVUsRUFBRSxLQUFLRztBQVBuQixRQS9DRixlQXdERSwyREFBQyxxREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBQztBQUFuQyxnRUF4REYsZUEyREU7QUFDRSxpQkFBUyxFQUFDLG9CQURaO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGlCQUFTLEVBQUMsSUFKWjtBQUtFLGFBQUssRUFDSCxLQUFLckMsS0FBTCxDQUFXMEIsSUFBWCxDQUFnQkosT0FBaEIsR0FBMEIsS0FBS3RCLEtBQUwsQ0FBVzBCLElBQVgsQ0FBZ0JKLE9BQTFDLEdBQW9ELEVBTnhEO0FBUUUsZ0JBQVEsRUFBRSxLQUFLWSxVQVJqQjtBQVNFLGtCQUFVLEVBQUUsS0FBS0c7QUFUbkIsUUEzREYsQ0FERixDQURGLGVBMEVFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLDJEQUFDLHFEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsOEVBREYsZUFFRSwyREFBQyxxREFBRCxDQUFNLE9BQU47QUFDRSxVQUFFLEVBQUMsVUFETDtBQUVFLFlBQUksRUFBQyxHQUZQO0FBR0UsYUFBSyxFQUFFLEtBQUtyQyxLQUFMLENBQVcwQixJQUFYLENBQWdCSCxPQUh6QjtBQUlFLFlBQUksRUFBQyxTQUpQO0FBS0UsZ0JBQVEsRUFBRSxLQUFLVztBQUxqQixRQUZGLENBMUVGLENBREYsZUFzRkUsc0VBdEZGLGVBdUZFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLDJEQUFDLCtEQUFEO0FBQ0UsV0FBRyxFQUFFLENBRFA7QUFFRSxpQkFBUyxFQUFFLEtBQUtJLFlBRmxCO0FBR0UsZUFBTyxlQUNMLDJEQUFDLHdEQUFEO0FBQVMsWUFBRTtBQUFYO0FBSkosc0JBU0UsMkRBQUMsdURBQUQ7QUFDRSxlQUFPLEVBQUMsU0FEVjtBQUVFLGlCQUFTLEVBQUMsS0FGWjtBQUdFLGVBQU8sRUFBRSxLQUFLQztBQUhoQixrRUFURixDQURGLENBREYsQ0F2RkYsQ0FGRixDQUxGLENBREY7QUF3SEQ7Ozs7RUFySm9DQywyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdkM7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSw0REFNVTtBQUNOckQsY0FBUSxFQUFFLEVBREo7QUFFTnVDLFVBQUksRUFBRSxNQUFLZSxVQUFMO0FBRkEsS0FOVjs7QUFBQSwwREFXUSxhQVhSOztBQUFBLG1FQVlpQixRQVpqQjs7QUFBQSxpRUFrQmUsVUFBQWpELENBQUMsRUFBSTtBQUNoQixVQUFJa0QsUUFBUSxHQUFHbEQsQ0FBQyxDQUFDa0QsUUFBakIsQ0FEZ0IsQ0FFaEI7O0FBQ0EsVUFBSUEsUUFBUSxHQUFHLEVBQVgsSUFBaUJBLFFBQVEsR0FBRyxFQUFoQyxFQUFvQztBQUNsQztBQUNBbEQsU0FBQyxDQUFDbUQsY0FBRjtBQUNEO0FBQ0YsS0F6Qkg7O0FBQUEsZ0VBMkJjLFVBQUFDLElBQUksRUFBSTtBQUNsQlosYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlcsSUFBekI7QUFFQSxhQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsSUFBWixFQUFrQnJELEdBQWxCLENBQXNCLFVBQUF3RCxHQUFHLEVBQUk7QUFDbEMsZUFBTztBQUFFckQsY0FBSSxFQUFFLE9BQVI7QUFBaUJDLGlCQUFPLEVBQUVpRCxJQUFJLENBQUNHLEdBQUQ7QUFBOUIsU0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdELEtBakNIOztBQUFBLDhEQXdDWSxZQUFNO0FBQ2RDLGtEQUFLLENBQ0ZDLElBREgsQ0FDUSxNQUFLQyxHQURiLEVBQ2tCLEVBRGxCLEVBRUcvQyxJQUZILENBRVEsVUFBQWdELEdBQUcsRUFBSTtBQUNYO0FBQ0EsY0FBS0MsUUFBTCxDQUFjRCxHQUFHLENBQUNQLElBQUosQ0FBU1EsUUFBdkI7O0FBRUEsY0FBS2hELFFBQUwsQ0FBYztBQUFFc0IsY0FBSSxFQUFFLE1BQUsyQixlQUFMLENBQXFCRixHQUFHLENBQUNQLElBQXpCO0FBQVIsU0FBZDtBQUNELE9BUEgsV0FRUyxVQUFBVSxHQUFHLEVBQUk7QUFDWixjQUFLbEQsUUFBTCxDQUFjO0FBQ1pqQixrQkFBUSxFQUFFLE1BQUtvRSxTQUFMLENBQWVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhWixJQUE1QjtBQURFLFNBQWQ7QUFHRCxPQVpIO0FBYUQsS0F0REg7O0FBQUEsK0RBd0RhLFVBQUFRLFFBQVEsRUFBSTtBQUNyQixVQUFJQSxRQUFKLEVBQWM7QUFDWkssY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlAsUUFBdkI7QUFDRDtBQUNGLEtBNURIOztBQUFBLCtEQThEYSxZQUFNO0FBQ2ZwQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE1BQUtqQyxLQUFMLENBQVcwQixJQUFuQztBQUVBc0Isa0RBQUssQ0FDRkMsSUFESCxDQUNRLE1BQUtDLEdBRGIsRUFDa0I7QUFBRXhCLFlBQUksRUFBRSxNQUFLMUIsS0FBTCxDQUFXMEI7QUFBbkIsT0FEbEIsRUFFR3ZCLElBRkgsQ0FFUSxVQUFBZ0QsR0FBRyxFQUFJO0FBQ1g7QUFFQSxjQUFLQyxRQUFMLENBQWNELEdBQUcsQ0FBQ1AsSUFBSixDQUFTUSxRQUF2Qjs7QUFFQSxjQUFLaEQsUUFBTCxDQUFjO0FBQ1pzQixjQUFJLEVBQUUsTUFBSzJCLGVBQUwsQ0FBcUJGLEdBQUcsQ0FBQ1AsSUFBekIsQ0FETTtBQUVaekQsa0JBQVEsRUFBRSxDQUFDO0FBQUVPLGdCQUFJLEVBQUUsU0FBUjtBQUFtQkMsbUJBQU8sRUFBRTtBQUE1QixXQUFEO0FBRkUsU0FBZDtBQUlELE9BWEgsV0FZUyxVQUFBMkQsR0FBRyxFQUFJO0FBQ1osY0FBS2xELFFBQUwsQ0FBYztBQUNaakIsa0JBQVEsRUFBRSxNQUFLb0UsU0FBTCxDQUFlRCxHQUFHLENBQUNFLFFBQUosQ0FBYVosSUFBNUI7QUFERSxTQUFkO0FBR0QsT0FoQkg7QUFpQkQsS0FsRkg7O0FBQUEsaUVBNEZlLFVBQUFwRCxDQUFDLEVBQUk7QUFDaEIsWUFBS1ksUUFBTCxDQUFjO0FBQUVzQixZQUFJLEVBQUUsTUFBS2tDLGNBQUwsQ0FBb0JwRSxDQUFwQjtBQUFSLE9BQWQ7QUFDRCxLQTlGSDs7QUFBQSxvRUFnR2tCLFlBQU07QUFDcEIsWUFBS1ksUUFBTCxDQUFjO0FBQUVqQixnQkFBUSxFQUFFO0FBQVosT0FBZDtBQUNELEtBbEdIOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQUNlLENBQUU7QUFEakI7QUFBQTtBQUFBLG1DQUVpQjtBQUNiLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7QUFKSDtBQUFBO0FBQUEsd0NBY3NCO0FBQ2xCLFdBQUswRSxPQUFMO0FBQ0Q7QUFoQkg7QUFBQTtBQUFBLG9DQW1Da0JqQixJQW5DbEIsRUFtQ3dCO0FBQ3BCWixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlcsSUFBL0I7QUFDQSxhQUFPQSxJQUFJLENBQUM5QixFQUFMLEdBQVU4QixJQUFWLEdBQWlCLEtBQUtILFVBQUwsRUFBeEI7QUFDRDtBQXRDSDtBQUFBO0FBQUEsbUNBb0ZpQmpELENBcEZqQixFQW9Gb0I7QUFDaEIsVUFBTWtDLElBQUksbUNBQ0wsS0FBSzFCLEtBQUwsQ0FBVzBCLElBRE4sMkJBRVBsQyxDQUFDLENBQUNzRSxNQUFGLENBQVNDLElBRkYsRUFFU3ZFLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU0UsS0FGbEIsRUFBVjs7QUFJQSxhQUFPdEMsSUFBUDtBQUNEO0FBMUZIO0FBQUE7QUFBQSw2QkFvR1c7QUFDUCwwQkFBTyx1SEFBUDtBQUNEO0FBdEdIOztBQUFBO0FBQUEsRUFBa0NkLCtDQUFsQyxFIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcblxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2VzICYmXG4gICAgICBtZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpXG4gICAgKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt0eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gd2FpdCA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkoXG4gICAgICAgIHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dFxuICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0UmVhY3RBbGVydHModGhpcy5zdGF0ZS5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gIENhcmQsXG4gIFJvdyxcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBUb29sdGlwLFxuICBPdmVybGF5VHJpZ2dlcixcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCB7IERldGFpbE9mSXRlbSB9IGZyb20gJy4vRGV0YWlsT2ZJdGVtJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuXG5jb25zdCBFTVBUWV9DQVIgPSB7XG4gIGlkOiAtMSxcbiAgbWFudWZhY3R1cmVyOiAnJyxcbiAgbW9kZWw6ICcnLFxuICBwcm9kdWN0aW9uOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygncnUnKSxcbiAgY29sb3I6ICcnLFxuICBwb3dlcjogMCxcbiAgbWlsZWFnZTogMCxcbiAgY29tbWVudDogJycsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyRGV0YWlsIGV4dGVuZHMgRGV0YWlsT2ZJdGVtIHtcbiAgdXJsID0gJy9hcGkvY2FyLyc7XG5cbiAgZ2V0TmV3SXRlbSgpIHtcbiAgICBjb25zdCBpdGVtID0gRU1QVFlfQ0FSO1xuICAgIGNvbnNvbGUubG9nKCdnZXROZXdJdGVtJywgaXRlbSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoYW5nZURhdGUgPSBkYXRlID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlRGF0ZVwiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtLFxuICAgICAgcHJvZHVjdGlvbjogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JyksXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbSB9KTtcbiAgfTtcblxuICBnZXREYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLml0ZW0ucHJvZHVjdGlvbikge1xuICAgICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gdGhpcy5zdGF0ZS5pdGVtLnByb2R1Y3Rpb24uc3BsaXQoJy4nKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJnZXREYXRlXCIsIFtkYXksIG1vbnRoLCB5ZWFyXSk7XG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgKCttb250aCAtIDEpLnRvU3RyaW5nKCksIGRheSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0c1xuICAgICAgICAgIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfVxuICAgICAgICAgIGNsZWFyTWVzc2FnZXM9e3RoaXMuY2xlYXJNZXNzYWdlc31cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QvNC+0LHQuNC70Yw8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7Qn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFudWZhY3R1cmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLm1hbnVmYWN0dXJlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCc0L7QtNC10LvRjDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0ubW9kZWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCU0LDRgtCwINCy0YvQv9GD0YHQutCwPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgey8qIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPXtgdG9vbHRpcC0xYH0+0JTQsNGC0LAg0LLRi9C/0YPRgdC60LAg0LIg0YTQvtGA0LzQsNGC0LUgZGQubW0ueXl5PC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkLk1NLnlcIlxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9XCJydVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1llYXJEcm9wZG93bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L092ZXJsYXlUcmlnZ2VyPiAqL31cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCIgbmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgINCm0LLQtdGCXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCIgbmFtZT1cImFnZVwiPlxuICAgICAgICAgICAgICAgICAgICDQnNC+0YnQvdC+0YHRgtGMICjQuy7RgS4pXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5wb3dlciA/IHRoaXMuc3RhdGUuaXRlbS5wb3dlciA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpZ2l0c09ubHl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIiBuYW1lPVwiYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0YDQvtCx0LXQsyAo0LrQvC4pXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbGVhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXRlbS5taWxlYWdlID8gdGhpcy5zdGF0ZS5pdGVtLm1pbGVhZ2UgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlnaXRzT25seX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7QmtC+0LzQvNC10L3RgtCw0YDQuNC5PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5jb21tZW50fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2B0b29sdGlwLTJgfT5cbiAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L7QsSDQsNCy0YLQvtC80L7QsdC40LvQtVxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxPZkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXROZXdJdGVtKCkge31cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBpdGVtOiB0aGlzLmdldE5ld0l0ZW0oKSxcbiAgfTtcblxuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuICB0b29sdGlwUGxhY2UgPSAnYm90dG9tJztcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW0oKTtcbiAgfVxuXG4gIGRpZ2l0c09ubHkgPSBlID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGdldEVycm9ycyA9IGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXRFcnJvcnMnLCBkYXRhKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEl0ZW1Gcm9tRGF0YShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2dldEl0ZW1Gcm9tRGF0YScsIGRhdGEpO1xuICAgIHJldHVybiBkYXRhLmlkID8gZGF0YSA6IHRoaXMuZ2V0TmV3SXRlbSgpO1xuICB9XG5cbiAgZ2V0SXRlbSA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHt9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEl0ZW1cIiwgcmVzLmRhdGEpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlZGlyZWN0ID0gcmVkaXJlY3QgPT4ge1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICB9XG4gIH07XG5cbiAgc2F2ZUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVJdGVtJywgdGhpcy5zdGF0ZS5pdGVtKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCByZXMuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBnZXRDaGFuZ2VkSXRlbShlKSB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbSxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoYW5nZUl0ZW0gPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbTogdGhpcy5nZXRDaGFuZ2VkSXRlbShlKSB9KTtcbiAgfTtcblxuICBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==