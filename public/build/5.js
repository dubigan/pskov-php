(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_16__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_17__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
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
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Alerts = function Alerts(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_12__["useAlerts"])();
  var defTimeout = 5000;

  var showAlerts = function showAlerts() {
    var view = false;
    var messages = alerts.messages; //const { messages: prevMessages } = prevProps;
    //console.log('Alerts', messages);

    if (messages && messages.length > 0) {
      view = true;
    }

    setVisible(view);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(showAlerts, [alerts.messages]);

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

  var show = function show() {
    if (visible) {
      delay(props.timeout ? props.timeout : defTimeout).then(function () {
        return setVisible(false);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, getAlerts(alerts.messages));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, show());
};

/* harmony default export */ __webpack_exports__["default"] = (Alerts);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJEZXRhaWwudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9EYXRlUGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRU1QVFlfQ0FSIiwiaWQiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsInByb2R1Y3Rpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJjb21tZW50IiwiQ2FyRGV0YWlsIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRhdGUiLCJpdGVtIiwiYXNzaWduIiwic3RhdGUiLCJzZXRTdGF0ZSIsIl9hIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRzIiwiQ2FyZCIsIlRpdGxlIiwiQm9keSIsIlJvdyIsImNsYXNzTmFtZSIsIkZvcm0iLCJHcm91cCIsIkxhYmVsIiwiQ29udHJvbCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGFuZ2VJdGVtIiwiRGF0ZVBpY2tlciIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZm9ybWF0IiwibG9jYWxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJjaGFuZ2VEYXRlIiwiZ2V0RGF0ZSIsIm1heExlbmd0aCIsIm9uS2V5UHJlc3MiLCJkaWdpdHNPbmx5Iiwicm93cyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlSXRlbSIsIlRvb2x0aXBDb250ZW50IiwiRGV0YWlsT2ZJdGVtIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJUb29sdGlwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibWVzc2FnZXMiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJnZXRUeXBlIiwidCIsImdldEFsZXJ0cyIsImFycmF5IiwibWFwIiwiZSIsImluZGV4Iiwia2V5IiwibWVzc2FnZSIsIkZyYWdtZW50IiwiZGVsYXkiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnbG9iYWwiLCJzZXRUaW1lb3V0Iiwic2hvdyIsInRpbWVvdXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHO0FBQ2RDLElBQUUsRUFBRSxDQUFDLENBRFM7QUFFZEMsY0FBWSxFQUFFLEVBRkE7QUFHZEMsT0FBSyxFQUFFLEVBSE87QUFJZEMsWUFBVSxFQUFFLElBQUlDLElBQUosR0FBV0Msa0JBQVgsQ0FBOEIsSUFBOUIsQ0FKRTtBQUtkQyxPQUFLLEVBQUUsRUFMTztBQU1kQyxPQUFLLEVBQUUsQ0FOTztBQU9kQyxTQUFPLEVBQUUsQ0FQSztBQVFkQyxTQUFPLEVBQUU7QUFSSyxDQUFsQixDLENBVUE7O0lBQ01DLFM7Ozs7O0FBQ0YsdUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFB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RixJQUFyQyxDQUFKO0FBQUEsS0FBbkIsQ0FBUDtBQUNILEdBRkQ7O0FBR0EsTUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFFBQUkxQixPQUFKLEVBQWE7QUFDVG9CLFdBQUssQ0FBQ3RCLEtBQUssQ0FBQzZCLE9BQU4sR0FBZ0I3QixLQUFLLENBQUM2QixPQUF0QixHQUFnQ3ZCLFVBQWpDLENBQUwsQ0FBa0R3QixJQUFsRCxDQUF1RDtBQUFBLGVBQU0zQixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQXZEO0FBQ0EsMEJBQU8zQyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDNkQsUUFBMUIsRUFBb0MsSUFBcEMsRUFBMENQLFNBQVMsQ0FBQ1YsTUFBTSxDQUFDSyxRQUFSLENBQW5ELENBQVA7QUFDSDs7QUFDRCx3QkFBT2pELDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDZDQUFLLENBQUM2RCxRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBQ0gsR0FORDs7QUFPQSxzQkFBTzdELDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDZDQUFLLENBQUM2RCxRQUExQixFQUFvQyxJQUFwQyxFQUEwQ08sSUFBSSxFQUE5QyxDQUFQO0FBQ0gsQ0FqREQ7O0FBa0RlbEUscUVBQWYsRSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGV0YWlsT2ZJdGVtIH0gZnJvbSAnLi9EZXRhaWxPZkl0ZW0nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL2xpYi9hbGVydC9BbGVydHMnO1xuaW1wb3J0ICcuL2Nzcy9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL1Jvdyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9saWIvRm9ybSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4vbGliL1Rvb2x0aXAnO1xuY29uc3QgRU1QVFlfQ0FSID0ge1xuICAgIGlkOiAtMSxcbiAgICBtYW51ZmFjdHVyZXI6ICcnLFxuICAgIG1vZGVsOiAnJyxcbiAgICBwcm9kdWN0aW9uOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygncnUnKSxcbiAgICBjb2xvcjogJycsXG4gICAgcG93ZXI6IDAsXG4gICAgbWlsZWFnZTogMCxcbiAgICBjb21tZW50OiAnJyxcbn07XG4vL3R5cGUgVENhckRldGFpbFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wcztcbmNsYXNzIENhckRldGFpbCBleHRlbmRzIERldGFpbE9mSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJy9hcGkvY2FyLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYW5nZURhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYW5nZURhdGVcIiwgZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJydVwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRlICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuaXRlbSksIHsgcHJvZHVjdGlvbjogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JykgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXREYXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmICgoX2EgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRoaXMuc3RhdGUuaXRlbS5wcm9kdWN0aW9uLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXREYXRlXCIsIFtkYXksIG1vbnRoLCB5ZWFyXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgreWVhciwgK21vbnRoIC0gMSwgK2RheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmV3SXRlbSgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEVNUFRZX0NBUjtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TmV3SXRlbScsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLlRpdGxlLCBudWxsLCBcIlxcdTA0MTBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDNDXFx1MDQzRVxcdTA0MzFcXHUwNDM4XFx1MDQzQlxcdTA0NENcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1pbnB1dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzhcXHUwNDM3XFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1hbnVmYWN0dXJlclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1hbnVmYWN0dXJlciwgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MUNcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwibW9kZWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2IgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tb2RlbCwgb25DaGFuZ2U6IHRoaXMuY2hhbmdlSXRlbSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0MzAgXFx1MDQzMlxcdTA0NEJcXHUwNDNGXFx1MDQ0M1xcdTA0NDFcXHUwNDNBXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBjYWxlbmRhckNsYXNzTmFtZTogXCJib3JkZXJcIiwgZm9ybWF0OiBcImRkLk1NLnl5eXlcIiwgbG9jYWxlOiBcInJ1XCIsIG1heERhdGU6IG5ldyBEYXRlKCksIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDAsIDEpLCBuYW1lOiBcInByb2R1Y3Rpb25cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1llYXJEcm9wZG93bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VEYXRlLCB2YWx1ZTogdGhpcy5nZXREYXRlKCkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIsIG5hbWU6IFwiY29sb3JcIiB9LCBcIlxcdTA0MjZcXHUwNDMyXFx1MDQzNVxcdTA0NDJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcImNvbG9yXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9jID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29sb3IsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIsIG5hbWU6IFwiYWdlXCIgfSwgXCJcXHUwNDFDXFx1MDQzRVxcdTA0NDlcXHUwNDNEXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0QyAoXFx1MDQzQi5cXHUwNDQxLilcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcInBvd2VyXCIsIHR5cGU6IFwidGV4dFwiLCBtYXhMZW5ndGg6IDMsIHZhbHVlOiAoKF9kID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucG93ZXIpID8gdGhpcy5zdGF0ZS5pdGVtLnBvd2VyIDogJycsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0sIG9uS2V5UHJlc3M6IHRoaXMuZGlnaXRzT25seSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiwgbmFtZTogXCJhZ2VcIiB9LCBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzFcXHUwNDM1XFx1MDQzMyAoXFx1MDQzQVxcdTA0M0MuKVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwibWlsZWFnZVwiLCB0eXBlOiBcInRleHRcIiwgbWF4TGVuZ3RoOiAxMCwgdmFsdWU6ICgoX2UgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5taWxlYWdlKSA/IHRoaXMuc3RhdGUuaXRlbS5taWxlYWdlIDogJycsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0sIG9uS2V5UHJlc3M6IHRoaXMuZGlnaXRzT25seSB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfY2FyLWNvbW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1jb21tZW50XCIgfSwgXCJcXHUwNDFBXFx1MDQzRVxcdTA0M0NcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzOVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgdHlwZTogXCJ0ZXh0YXJlYVwiLCByb3dzOiA4LCB2YWx1ZTogKF9mID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY29tbWVudCwgbmFtZTogXCJjb21tZW50XCIsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0gfSkpKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5X2Nhci1zYXZlIHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5zYXZlSXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgXCJcXHUwNDIxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXFx1MDQzOFxcdTA0M0RcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzMFxcdTA0NDZcXHUwNDM4XFx1MDQ0RSBcXHUwNDNFXFx1MDQzMSBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ2FyRGV0YWlsKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm93ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWQgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3JvdycsIGlkOiBpZCB9LCBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuY29uc3QgQWxlcnRzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkocHJvcHMudGltZW91dCA/IHByb3BzLnRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==