(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/components/CarDetail.tsx":
/*!*****************************************!*\
  !*** ./assets/components/CarDetail.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/DetailOfItem.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _css_DatePicker_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./css/DatePicker.css */ "./assets/components/css/DatePicker.css");
/* harmony import */ var _css_DatePicker_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_DatePicker_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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












var EMPTY_CAR = {
  id: -1,
  manufacturer: '',
  model: '',
  production: new Date().toLocaleDateString('ru'),
  color: '',
  power: 0,
  mileage: 0,
  comment: ''
}; //type TCarDetailProps = RouteComponentProps;

var CarDetail = /*#__PURE__*/function (_DetailOfItem) {
  _inherits(CarDetail, _DetailOfItem);

  var _super = _createSuper(CarDetail);

  function CarDetail() {
    var _this;

    _classCallCheck(this, CarDetail);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "url", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/api/car/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeDate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(date) {
        //console.log("changeDate", date.toLocaleDateString("ru"));
        if (_typeof(date) !== 'object') return;
        var item = Object.assign(Object.assign({}, _this.state.item), {
          production: date.toLocaleDateString('ru')
        });

        _this.setState({
          item: item
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        var _a;

        if ((_a = _this.state.item) === null || _a === void 0 ? void 0 : _a.production) {
          var _this$state$item$prod = _this.state.item.production.split('.'),
              _this$state$item$prod2 = _slicedToArray(_this$state$item$prod, 3),
              day = _this$state$item$prod2[0],
              month = _this$state$item$prod2[1],
              year = _this$state$item$prod2[2]; //console.log("getDate", [day, month, year]);


          return new Date(+year, +month - 1, +day);
        }

        return new Date();
      }
    });
    return _this;
  }

  _createClass(CarDetail, [{
    key: "getNewItem",
    value: function getNewItem() {
      var item = EMPTY_CAR; //console.log('getNewItem', item);

      return item;
    }
  }, {
    key: "render",
    value: function render() {
      var _a, _b, _c, _d, _e, _f;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_14__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_17__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_car-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input"
      }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        className: "form__control form__control_car-input",
        name: "manufacturer",
        type: "text",
        value: (_a = this.state.item) === null || _a === void 0 ? void 0 : _a.manufacturer,
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input"
      }, "\u041C\u043E\u0434\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        className: "form__control form__control_car-input",
        name: "model",
        type: "text",
        value: (_b = this.state.item) === null || _b === void 0 ? void 0 : _b.model,
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input"
      }, "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "form__control form__control_car-input",
        calendarClassName: "border",
        format: "dd.MM.yyyy",
        locale: "ru",
        maxDate: new Date(),
        minDate: new Date(1900, 0, 1),
        name: "production",
        // showYearDropdown={true}
        onChange: this.changeDate,
        value: this.getDate()
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input",
        name: "color"
      }, "\u0426\u0432\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        className: "form__control form__control_car-input",
        name: "color",
        type: "text",
        value: (_c = this.state.item) === null || _c === void 0 ? void 0 : _c.color,
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input",
        name: "age"
      }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043B.\u0441.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        className: "form__control form__control_car-input",
        name: "power",
        type: "text",
        maxLength: 3,
        value: ((_d = this.state.item) === null || _d === void 0 ? void 0 : _d.power) ? this.state.item.power : '',
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-input",
        name: "age"
      }, "\u041F\u0440\u043E\u0431\u0435\u0433 (\u043A\u043C.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        className: "form__control form__control_car-input",
        name: "mileage",
        type: "text",
        maxLength: 10,
        value: ((_e = this.state.item) === null || _e === void 0 ? void 0 : _e.mileage) ? this.state.item.mileage : '',
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
        className: "form__group form__group_car-comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Label, {
        className: "form__label form__label_car-comment"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
        type: "textarea",
        rows: 8,
        value: (_f = this.state.item) === null || _f === void 0 ? void 0 : _f.comment,
        name: "comment",
        onChange: this.changeItem
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
        className: "btn-primary btn-primary_car-save tooltip",
        onClick: this.saveItem
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipContent"], null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435"), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
    }
  }]);

  return CarDetail;
}(_DetailOfItem__WEBPACK_IMPORTED_MODULE_13__["DetailOfItem"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(CarDetail));

/***/ }),

/***/ "./assets/components/css/DatePicker.css":
/*!**********************************************!*\
  !*** ./assets/components/css/DatePicker.css ***!
  \**********************************************/
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

/***/ }),

/***/ "./assets/components/lib/alert/Alerts.tsx":
/*!************************************************!*\
  !*** ./assets/components/lib/alert/Alerts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Alerts = function Alerts(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    messages: [],
    show: false //timeout: 5000,

  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var defTimeout = 5000;

  var showAlerts = function showAlerts() {
    var show = false;
    var messages = props.messages; //const { messages: prevMessages } = prevProps;
    //console.log('Alerts', messages);

    if (messages && messages.length > 0 && JSON.stringify(state.messages) !== JSON.stringify(messages)) {
      show = true;
    }

    if (show && !state.show) {
      setState({
        messages: messages,
        show: show
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(showAlerts);

  var getType = function getType(type) {
    var t;

    switch (type) {
      case 'info':
        t = 'info';
        break;

      case 'success':
        t = 'success';
        break;

      case 'error':
        t = 'danger';
        break;

      default:
        t = 'danger';
    }

    return t;
  };

  var getAlerts = function getAlerts(array) {
    return array ? array.map(function (e, index) {
      var type = getType(e.type);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: 'alert alert_' + type,
        key: index
      }, e.message);
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  };

  var delay = function delay(wait) {
    return new Promise(function (resolve) {
      return global.setTimeout(function () {
        return resolve('');
      }, wait);
    });
  };

  var clearMessages = function clearMessages() {
    setState({
      messages: [],
      show: false
    });
    props.clearMessages();
  };

  var show = function show() {
    if (state.show) {
      delay(props.timeout ? props.timeout : defTimeout).then(clearMessages);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, getAlerts(state.messages));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, show());
};

/* harmony default export */ __webpack_exports__["default"] = (Alerts);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJEZXRhaWwudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9EYXRlUGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRU1QVFlfQ0FSIiwiaWQiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsInByb2R1Y3Rpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJjb21tZW50IiwiQ2FyRGV0YWlsIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRhdGUiLCJpdGVtIiwiYXNzaWduIiwic3RhdGUiLCJzZXRTdGF0ZSIsIl9hIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRzIiwibWVzc2FnZXMiLCJjbGVhck1lc3NhZ2VzIiwiQ2FyZCIsIlRpdGxlIiwiQm9keSIsIlJvdyIsImNsYXNzTmFtZSIsIkZvcm0iLCJHcm91cCIsIkxhYmVsIiwiQ29udHJvbCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGFuZ2VJdGVtIiwiRGF0ZVBpY2tlciIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZm9ybWF0IiwibG9jYWxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJjaGFuZ2VEYXRlIiwiZ2V0RGF0ZSIsIm1heExlbmd0aCIsIm9uS2V5UHJlc3MiLCJkaWdpdHNPbmx5Iiwicm93cyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlSXRlbSIsIlRvb2x0aXBDb250ZW50IiwiRGV0YWlsT2ZJdGVtIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJUb29sdGlwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJkZWZUaW1lb3V0Iiwic2hvd0FsZXJ0cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VFZmZlY3QiLCJnZXRUeXBlIiwidCIsImdldEFsZXJ0cyIsImFycmF5IiwibWFwIiwiZSIsImluZGV4Iiwia2V5IiwibWVzc2FnZSIsIkZyYWdtZW50IiwiZGVsYXkiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsSUFBRSxFQUFFLENBQUMsQ0FEUztBQUVkQyxjQUFZLEVBQUUsRUFGQTtBQUdkQyxPQUFLLEVBQUUsRUFITztBQUlkQyxZQUFVLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxrQkFBWCxDQUE4QixJQUE5QixDQUpFO0FBS2RDLE9BQUssRUFBRSxFQUxPO0FBTWRDLE9BQUssRUFBRSxDQU5PO0FBT2RDLFNBQU8sRUFBRSxDQVBLO0FBUWRDLFNBQU8sRUFBRTtBQVJLLENBQWxCLEMsQ0FVQTs7SUFDTUMsUzs7Ozs7QUFDRix1QkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0FDLFVB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OUMsQ0FBUDtBQUNILENBbEVEOztBQW1FZTFDLHFFQUFmLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCB7IERldGFpbE9mSXRlbSB9IGZyb20gJy4vRGV0YWlsT2ZJdGVtJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCAnLi9jc3MvRGF0ZVBpY2tlci5jc3MnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmNvbnN0IEVNUFRZX0NBUiA9IHtcbiAgICBpZDogLTEsXG4gICAgbWFudWZhY3R1cmVyOiAnJyxcbiAgICBtb2RlbDogJycsXG4gICAgcHJvZHVjdGlvbjogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JyksXG4gICAgY29sb3I6ICcnLFxuICAgIHBvd2VyOiAwLFxuICAgIG1pbGVhZ2U6IDAsXG4gICAgY29tbWVudDogJycsXG59O1xuLy90eXBlIFRDYXJEZXRhaWxQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM7XG5jbGFzcyBDYXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvYXBpL2Nhci8nXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFuZ2VEYXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2VEYXRlXCIsIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnVcIikpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0ZSAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLml0ZW0pLCB7IHByb2R1Y3Rpb246IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdydScpIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0RGF0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoKF9hID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSB0aGlzLnN0YXRlLml0ZW0ucHJvZHVjdGlvbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RGF0ZVwiLCBbZGF5LCBtb250aCwgeWVhcl0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoK3llYXIsICttb250aCAtIDEsICtkYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ld0l0ZW0oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBFTVBUWV9DQVI7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldE5ld0l0ZW0nLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUubWVzc2FnZXMsIGNsZWFyTWVzc2FnZXM6IHRoaXMuY2xlYXJNZXNzYWdlcyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuVGl0bGUsIG51bGwsIFwiXFx1MDQxMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0M0NcXHUwNDNFXFx1MDQzMVxcdTA0MzhcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfY2FyLWlucHV0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzOFxcdTA0MzdcXHUwNDMyXFx1MDQzRVxcdTA0MzRcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwibWFudWZhY3R1cmVyXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFudWZhY3R1cmVyLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJtb2RlbFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYiA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1vZGVsLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDMyXFx1MDQ0QlxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0M0FcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGlja2VyLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIGNhbGVuZGFyQ2xhc3NOYW1lOiBcImJvcmRlclwiLCBmb3JtYXQ6IFwiZGQuTU0ueXl5eVwiLCBsb2NhbGU6IFwicnVcIiwgbWF4RGF0ZTogbmV3IERhdGUoKSwgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMCwgMSksIG5hbWU6IFwicHJvZHVjdGlvblwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93WWVhckRyb3Bkb3duPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZURhdGUsIHZhbHVlOiB0aGlzLmdldERhdGUoKSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiIH0sIFwiXFx1MDQyNlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwiY29sb3JcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2MgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiwgbmFtZTogXCJhZ2VcIiB9LCBcIlxcdTA0MUNcXHUwNDNFXFx1MDQ0OVxcdTA0M0RcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDRDIChcXHUwNDNCLlxcdTA0NDEuKVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwicG93ZXJcIiwgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMywgdmFsdWU6ICgoX2QgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wb3dlcikgPyB0aGlzLnN0YXRlLml0ZW0ucG93ZXIgOiAnJywgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSwgb25LZXlQcmVzczogdGhpcy5kaWdpdHNPbmx5IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzMVxcdTA0MzVcXHUwNDMzIChcXHUwNDNBXFx1MDQzQy4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJtaWxlYWdlXCIsIHR5cGU6IFwidGV4dFwiLCBtYXhMZW5ndGg6IDEwLCB2YWx1ZTogKChfZSA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm1pbGVhZ2UpID8gdGhpcy5zdGF0ZS5pdGVtLm1pbGVhZ2UgOiAnJywgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSwgb25LZXlQcmVzczogdGhpcy5kaWdpdHNPbmx5IH0pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9jYXItY29tbWVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWNvbW1lbnRcIiB9LCBcIlxcdTA0MUFcXHUwNDNFXFx1MDQzQ1xcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDM5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcInRleHRhcmVhXCIsIHJvd3M6IDgsIHZhbHVlOiAoX2YgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jb21tZW50LCBuYW1lOiBcImNvbW1lbnRcIiwgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfY2FyLXNhdmUgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLnNhdmVJdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDM4XFx1MDQzRFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0NlxcdTA0MzhcXHUwNDRFIFxcdTA0M0VcXHUwNDMxIFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDNDXFx1MDQzRVxcdTA0MzFcXHUwNDM4XFx1MDQzQlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MjFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDYXJEZXRhaWwpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3cgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpZCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAncm93JywgaWQ6IGlkIH0sIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAndG9vbHRpcF9fY29udGVudCcgfSwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gKHsgdG9vbHRpcCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgdG9vbHRpcCksXG4gICAgICAgIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBBbGVydHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgLy90aW1lb3V0OiA1MDAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHByb3BzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcykpIHtcbiAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93ICYmICFzdGF0ZS5zaG93KSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMpO1xuICAgIGNvbnN0IGdldFR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2luZm8nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgdCA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXkgPyAoYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoZS50eXBlKTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2FsZXJ0IGFsZXJ0XycgKyB0eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgICAgICB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgIH07XG4gICAgY29uc3QgZGVsYXkgPSAod2FpdCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCcnKSwgd2FpdCkpO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9wcy5jbGVhck1lc3NhZ2VzKCk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUuc2hvdykge1xuICAgICAgICAgICAgZGVsYXkocHJvcHMudGltZW91dCA/IHByb3BzLnRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKGNsZWFyTWVzc2FnZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhzdGF0ZS5tZXNzYWdlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBzaG93KCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=