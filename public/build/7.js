(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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




var Alerts = function Alerts(_ref) {
  var timeout = _ref.timeout,
      _ref$withAlerts = _ref.withAlerts,
      withAlerts = _ref$withAlerts === void 0 ? true : _ref$withAlerts;

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

  if (!withAlerts) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
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
      delay(timeout ? timeout : defTimeout).then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJEZXRhaWwudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9EYXRlUGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRU1QVFlfQ0FSIiwiaWQiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsInByb2R1Y3Rpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJjb21tZW50IiwiQ2FyRGV0YWlsIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRhdGUiLCJpdGVtIiwiYXNzaWduIiwic3RhdGUiLCJzZXRTdGF0ZSIsIl9hIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRzIiwiQ2FyZCIsIlRpdGxlIiwiQm9keSIsIlJvdyIsImNsYXNzTmFtZSIsIkZvcm0iLCJHcm91cCIsIkxhYmVsIiwiQ29udHJvbCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGFuZ2VJdGVtIiwiRGF0ZVBpY2tlciIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZm9ybWF0IiwibG9jYWxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJjaGFuZ2VEYXRlIiwiZ2V0RGF0ZSIsIm1heExlbmd0aCIsIm9uS2V5UHJlc3MiLCJkaWdpdHNPbmx5Iiwicm93cyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlSXRlbSIsIlRvb2x0aXBDb250ZW50IiwiRGV0YWlsT2ZJdGVtIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJUb29sdGlwIiwidGltZW91dCIsIndpdGhBbGVydHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibWVzc2FnZXMiLCJsZW5ndGgiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJrZXkiLCJtZXNzYWdlIiwiZGVsYXkiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnbG9iYWwiLCJzZXRUaW1lb3V0Iiwic2hvdyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsSUFBRSxFQUFFLENBQUMsQ0FEUztBQUVkQyxjQUFZLEVBQUUsRUFGQTtBQUdkQyxPQUFLLEVBQUUsRUFITztBQUlkQyxZQUFVLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxrQkFBWCxDQUE4QixJQUE5QixDQUpFO0FBS2RDLE9BQUssRUFBRSxFQUxPO0FBTWRDLE9BQUssRUFBRSxDQU5PO0FBT2RDLFNBQU8sRUFBRSxDQVBLO0FBUWRDLFNBQU8sRUFBRTtBQVJLLENBQWxCLEMsQ0FVQTs7SUFDTUMsUzs7Ozs7QUFDRix1QkFBYztBQUFBOztBQUFBOztBQUNW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LEdBTEQ7O0FBTUEsTUFBTVcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSxhQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxlQUFNRixPQUFPLENBQUMsRUFBRCxDQUFiO0FBQUEsT0FBbEIsRUFBcUNGLElBQXJDLENBQUo7QUFBQSxLQUFuQixDQUFQO0FBQ0gsR0FGRDs7QUFHQSxNQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSTFCLE9BQUosRUFBYTtBQUNUb0IsV0FBSyxDQUFDdkIsT0FBTyxHQUFHQSxPQUFILEdBQWFPLFVBQXJCLENBQUwsQ0FBc0N1QixJQUF0QyxDQUEyQztBQUFBLGVBQU0xQixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQTNDO0FBQ0EsMEJBQU81Qyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDb0QsUUFBMUIsRUFBb0MsSUFBcEMsRUFBMENJLFNBQVMsQ0FBQ1gsTUFBTSxDQUFDSyxRQUFSLENBQW5ELENBQVA7QUFDSDs7QUFDRCx3QkFBT2xELDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDZDQUFLLENBQUNvRCxRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBQ0gsR0FORDs7QUFPQSxzQkFBT3BELDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDZDQUFLLENBQUNvRCxRQUExQixFQUFvQyxJQUFwQyxFQUEwQ2lCLElBQUksRUFBOUMsQ0FBUDtBQUNILENBbkREOztBQW9EZW5FLHFFQUFmLEUiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCB7IERldGFpbE9mSXRlbSB9IGZyb20gJy4vRGV0YWlsT2ZJdGVtJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCAnLi9jc3MvRGF0ZVBpY2tlci5jc3MnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmNvbnN0IEVNUFRZX0NBUiA9IHtcbiAgICBpZDogLTEsXG4gICAgbWFudWZhY3R1cmVyOiAnJyxcbiAgICBtb2RlbDogJycsXG4gICAgcHJvZHVjdGlvbjogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JyksXG4gICAgY29sb3I6ICcnLFxuICAgIHBvd2VyOiAwLFxuICAgIG1pbGVhZ2U6IDAsXG4gICAgY29tbWVudDogJycsXG59O1xuLy90eXBlIFRDYXJEZXRhaWxQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM7XG5jbGFzcyBDYXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvYXBpL2Nhci8nXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFuZ2VEYXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2VEYXRlXCIsIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnVcIikpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0ZSAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLml0ZW0pLCB7IHByb2R1Y3Rpb246IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdydScpIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0RGF0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoKF9hID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSB0aGlzLnN0YXRlLml0ZW0ucHJvZHVjdGlvbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RGF0ZVwiLCBbZGF5LCBtb250aCwgeWVhcl0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoK3llYXIsICttb250aCAtIDEsICtkYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ld0l0ZW0oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBFTVBUWV9DQVI7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldE5ld0l0ZW0nLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5UaXRsZSwgbnVsbCwgXCJcXHUwNDEwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9jYXItaW5wdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDM4XFx1MDQzN1xcdTA0MzJcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJtYW51ZmFjdHVyZXJcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2EgPSB0aGlzLnN0YXRlLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYW51ZmFjdHVyZXIsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDFDXFx1MDQzRVxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1vZGVsXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9iID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubW9kZWwsIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDE0XFx1MDQzMFxcdTA0NDJcXHUwNDMwIFxcdTA0MzJcXHUwNDRCXFx1MDQzRlxcdTA0NDNcXHUwNDQxXFx1MDQzQVxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQaWNrZXIsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgY2FsZW5kYXJDbGFzc05hbWU6IFwiYm9yZGVyXCIsIGZvcm1hdDogXCJkZC5NTS55eXl5XCIsIGxvY2FsZTogXCJydVwiLCBtYXhEYXRlOiBuZXcgRGF0ZSgpLCBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAwLCAxKSwgbmFtZTogXCJwcm9kdWN0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dZZWFyRHJvcGRvd249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2hhbmdlRGF0ZSwgdmFsdWU6IHRoaXMuZ2V0RGF0ZSgpIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImNvbG9yXCIgfSwgXCJcXHUwNDI2XFx1MDQzMlxcdTA0MzVcXHUwNDQyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYyA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbG9yLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDQ5XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NEMgKFxcdTA0M0IuXFx1MDQ0MS4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJwb3dlclwiLCB0eXBlOiBcInRleHRcIiwgbWF4TGVuZ3RoOiAzLCB2YWx1ZTogKChfZCA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBvd2VyKSA/IHRoaXMuc3RhdGUuaXRlbS5wb3dlciA6ICcnLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtLCBvbktleVByZXNzOiB0aGlzLmRpZ2l0c09ubHkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIsIG5hbWU6IFwiYWdlXCIgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzNVxcdTA0MzMgKFxcdTA0M0FcXHUwNDNDLilcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1pbGVhZ2VcIiwgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMTAsIHZhbHVlOiAoKF9lID0gdGhpcy5zdGF0ZS5pdGVtKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UubWlsZWFnZSkgPyB0aGlzLnN0YXRlLml0ZW0ubWlsZWFnZSA6ICcnLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtLCBvbktleVByZXNzOiB0aGlzLmRpZ2l0c09ubHkgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1jb21tZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItY29tbWVudFwiIH0sIFwiXFx1MDQxQVxcdTA0M0VcXHUwNDNDXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwidGV4dGFyZWFcIiwgcm93czogOCwgdmFsdWU6IChfZiA9IHRoaXMuc3RhdGUuaXRlbSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmNvbW1lbnQsIG5hbWU6IFwiY29tbWVudFwiLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VJdGVtIH0pKSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9jYXItc2F2ZSB0b29sdGlwXCIsIG9uQ2xpY2s6IHRoaXMuc2F2ZUl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzhcXHUwNDNEXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQ2XFx1MDQzOFxcdTA0NEUgXFx1MDQzRVxcdTA0MzEgXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0M0NcXHUwNDNFXFx1MDQzMVxcdTA0MzhcXHUwNDNCXFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENhckRldGFpbCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQsIHdpdGhBbGVydHMgPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgaWYgKCF3aXRoQWxlcnRzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheSh0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9