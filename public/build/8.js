(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/components/Detail/CarDetail.tsx":
/*!************************************************!*\
  !*** ./assets/components/Detail/CarDetail.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/Detail/DetailOfItem.ts");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _css_DatePicker_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/DatePicker.css */ "./assets/components/css/DatePicker.css");
/* harmony import */ var _css_DatePicker_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_DatePicker_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_Card_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Card/Card */ "./assets/components/lib/Card/Card.tsx");
/* harmony import */ var _lib_Row_Row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/Row/Row */ "./assets/components/lib/Row/Row.tsx");
/* harmony import */ var _lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/Button/Button */ "./assets/components/lib/Button/Button.tsx");
/* harmony import */ var _lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lib/Form/Form */ "./assets/components/lib/Form/Form.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _useDetailFunctions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useDetailFunctions */ "./assets/components/Detail/useDetailFunctions.tsx");
/* harmony import */ var _lib_utils_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/utils/utils */ "./assets/components/lib/utils/utils.ts");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














var CarDetail = function CarDetail() {
  var _a, _b, _c, _d, _e, _f;

  var functions = Object(_useDetailFunctions__WEBPACK_IMPORTED_MODULE_22__["useDetailFunctions"])('car');
  var detailUtils = Object(_DetailOfItem__WEBPACK_IMPORTED_MODULE_14__["useDetailOfItem"])({
    functions: functions
  });

  var changeDate = function changeDate(date) {
    //console.log("changeDate", date.toLocaleDateString("ru"));
    if (_typeof(date) !== 'object') return;
    detailUtils.setItem(Object.assign(Object.assign({}, detailUtils.item), {
      production: date.toLocaleDateString('ru')
    }));
  };

  var getDate = function getDate() {
    var _a;

    if ((_a = detailUtils.item) === null || _a === void 0 ? void 0 : _a.production) {
      var _detailUtils$item$pro = detailUtils.item.production.split('.'),
          _detailUtils$item$pro2 = _slicedToArray(_detailUtils$item$pro, 3),
          day = _detailUtils$item$pro2[0],
          month = _detailUtils$item$pro2[1],
          year = _detailUtils$item$pro2[2]; //console.log("getDate", [day, month, year]);


      return new Date(+year, +month - 1, +day);
    }

    return new Date();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    return detailUtils.getItem();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Row_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_car-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input"
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "manufacturer",
    type: "text",
    value: (_a = detailUtils.item) === null || _a === void 0 ? void 0 : _a.manufacturer,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input"
  }, "\u041C\u043E\u0434\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "model",
    type: "text",
    value: (_b = detailUtils.item) === null || _b === void 0 ? void 0 : _b.model,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input"
  }, "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: "form__control form__control_car-input",
    calendarClassName: "border",
    format: "dd.MM.yyyy",
    locale: "ru",
    maxDate: new Date(),
    minDate: new Date(1900, 0, 1),
    name: "production",
    // showYearDropdown={true}
    onChange: changeDate,
    value: getDate()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "color"
  }, "\u0426\u0432\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "color",
    type: "text",
    value: (_c = detailUtils.item) === null || _c === void 0 ? void 0 : _c.color,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "age"
  }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043B.\u0441.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "power",
    type: "text",
    maxLength: 3,
    value: ((_d = detailUtils.item) === null || _d === void 0 ? void 0 : _d.power) ? detailUtils.item.power : '',
    onChange: detailUtils.changeItem,
    onKeyPress: _lib_utils_utils__WEBPACK_IMPORTED_MODULE_23__["digitsOnly"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "age"
  }, "\u041F\u0440\u043E\u0431\u0435\u0433 (\u043A\u043C.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "mileage",
    type: "text",
    maxLength: 10,
    value: ((_e = detailUtils.item) === null || _e === void 0 ? void 0 : _e.mileage) ? detailUtils.item.mileage : '',
    onChange: detailUtils.changeItem,
    onKeyPress: _lib_utils_utils__WEBPACK_IMPORTED_MODULE_23__["digitsOnly"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_car-comment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-comment"
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    type: "textarea",
    rows: 8,
    value: (_f = detailUtils.item) === null || _f === void 0 ? void 0 : _f.comment,
    name: "comment",
    onChange: detailUtils.changeItem
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
    className: "btn-primary btn-primary_car-save tooltip",
    onClick: detailUtils.saveItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipContent"], null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435"), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CarDetail);

/***/ }),

/***/ "./assets/components/css/DatePicker.css":
/*!**********************************************!*\
  !*** ./assets/components/css/DatePicker.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/lib/Button/Button.tsx":
/*!*************************************************!*\
  !*** ./assets/components/lib/Button/Button.tsx ***!
  \*************************************************/
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

/***/ "./assets/components/lib/Row/Row.tsx":
/*!*******************************************!*\
  !*** ./assets/components/lib/Row/Row.tsx ***!
  \*******************************************/
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

/***/ "./assets/components/lib/alert/Alerts.elements.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/lib/alert/Alerts.elements.tsx ***!
  \*********************************************************/
/*! exports provided: Container, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  margin-bottom: 0.8rem;\n  font-size: 1.8rem;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #fff;\n  box-shadow: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1000;\n  margin: 0 auto;\n  left: 35%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return props.shadow ? '1px 4px 4px rgba(0, 0, 0, 0.8)' : 'none';
}, function (props) {
  return props.type === 'danger' ? '#dc3545' : '';
}, function (props) {
  return props.type === 'error' ? '#dc3545' : '';
}, function (props) {
  return props.type === 'success' ? '#198754' : '';
}, function (props) {
  return props.type === 'info' ? '#0dcaf0' : '';
}, function (props) {
  return props.type === 'warning' ? '#ffc107' : '';
});

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
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
/* harmony import */ var _Alerts_elements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Alerts.elements */ "./assets/components/lib/alert/Alerts.elements.tsx");











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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_11__["useAlerts"])();
  var defTimeout = 5000;
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    setVisible(true);
    global.setTimeout(function () {
      return setVisible(false);
    }, timeout ? timeout : defTimeout);
  }, [alerts.messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, visible && withAlerts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Container"], null, alerts.messages.map(function (e, index) {
    // const type = getType(e.type);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
      shadow: true,
      type: e.type,
      key: index
    }, e.message);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Alerts);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/components/lib/utils/utils.ts":
/*!**********************************************!*\
  !*** ./assets/components/lib/utils/utils.ts ***!
  \**********************************************/
/*! exports provided: getErrors, redirect, digitsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitsOnly", function() { return digitsOnly; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__);



var getKeyValue = function getKeyValue(obj, key) {
  return obj[key];
};

var getErrors = function getErrors(data) {
  if (!data) return [{
    type: 'error',
    message: 'Unknown error'
  }];
  return Object.keys(data).map(function (key) {
    return {
      type: 'error',
      message: getKeyValue(data, key)
    };
  });
};
var redirect = function redirect(history, _redirect) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return _redirect && dir === 'back' ? history.goBack() : history.push(_redirect);
};
var digitsOnly = function digitsOnly(e) {
  var charCode = e.charCode; //console.log(charCode);

  if (charCode < 48 || charCode > 57) {
    // digits only
    e.preventDefault();
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvQ2FyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jc3MvRGF0ZVBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Sb3cvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy5lbGVtZW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkNhckRldGFpbCIsIl9hIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsImZ1bmN0aW9ucyIsInVzZURldGFpbEZ1bmN0aW9ucyIsImRldGFpbFV0aWxzIiwidXNlRGV0YWlsT2ZJdGVtIiwiY2hhbmdlRGF0ZSIsImRhdGUiLCJzZXRJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbSIsInByb2R1Y3Rpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXREYXRlIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJEYXRlIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0cyIsIkNhcmQiLCJUaXRsZSIsIkJvZHkiLCJSb3ciLCJjbGFzc05hbWUiLCJGb3JtIiwiR3JvdXAiLCJMYWJlbCIsIkNvbnRyb2wiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwibWFudWZhY3R1cmVyIiwib25DaGFuZ2UiLCJjaGFuZ2VJdGVtIiwibW9kZWwiLCJEYXRlUGlja2VyIiwiY2FsZW5kYXJDbGFzc05hbWUiLCJmb3JtYXQiLCJsb2NhbGUiLCJtYXhEYXRlIiwibWluRGF0ZSIsImNvbG9yIiwibWF4TGVuZ3RoIiwicG93ZXIiLCJvbktleVByZXNzIiwiZGlnaXRzT25seSIsIm1pbGVhZ2UiLCJyb3dzIiwiY29tbWVudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlSXRlbSIsIlRvb2x0aXBDb250ZW50IiwidG9vbHRpcCIsImlkIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiVG9vbHRpcCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFsZXJ0IiwicHJvcHMiLCJzaGFkb3ciLCJ0aW1lb3V0Iiwid2l0aEFsZXJ0cyIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJkZWZUaW1lb3V0IiwiZ2xvYmFsIiwic2V0VGltZW91dCIsIm1lc3NhZ2VzIiwiRnJhZ21lbnQiLCJTdHlsZWQiLCJtYXAiLCJlIiwiaW5kZXgiLCJrZXkiLCJtZXNzYWdlIiwiZ2V0S2V5VmFsdWUiLCJvYmoiLCJnZXRFcnJvcnMiLCJkYXRhIiwia2V5cyIsInJlZGlyZWN0IiwiaGlzdG9yeSIsImRpciIsImdvQmFjayIsInB1c2giLCJjaGFyQ29kZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQUlDLEVBQUosRUFBUUMsRUFBUixFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCOztBQUNBLE1BQU1DLFNBQVMs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QUUsT0FBUjtBQUFpQnNELFdBQU8sRUFBRTtBQUExQixHQUFELENBQVA7QUFDSixTQUFPaEYsTUFBTSxDQUFDcUYsSUFBUCxDQUFZRCxJQUFaLEVBQWtCUixHQUFsQixDQUFzQixVQUFDRyxHQUFELEVBQVM7QUFDbEMsV0FBTztBQUFFckQsVUFBSSxFQUFFLE9BQVI7QUFBaUJzRCxhQUFPLEVBQUVDLFdBQVcsQ0FBQ0csSUFBRCxFQUFPTCxHQUFQO0FBQXJDLEtBQVA7QUFDSCxHQUZNLENBQVA7QUFHSCxDQU5NO0FBT0EsSUFBTU8sUUFBUSxHQUFHLGtCQUFDQyxPQUFELEVBQVVELFNBQVY7QUFBQSxNQUFvQkUsR0FBcEIsdUVBQTBCLEVBQTFCO0FBQUEsU0FBaUNGLFNBQVEsSUFBSUUsR0FBRyxLQUFLLE1BQXBCLEdBQTZCRCxPQUFPLENBQUNFLE1BQVIsRUFBN0IsR0FBZ0RGLE9BQU8sQ0FBQ0csSUFBUixDQUFhSixTQUFiLENBQWpGO0FBQUEsQ0FBakI7QUFDQSxJQUFNNUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ21DLENBQUQsRUFBTztBQUM3QixNQUFJYyxRQUFRLEdBQUdkLENBQUMsQ0FBQ2MsUUFBakIsQ0FENkIsQ0FFN0I7O0FBQ0EsTUFBSUEsUUFBUSxHQUFHLEVBQVgsSUFBaUJBLFFBQVEsR0FBRyxFQUFoQyxFQUFvQztBQUNoQztBQUNBZCxLQUFDLENBQUNlLGNBQUY7QUFDSDtBQUNKLENBUE0sQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCB7IHVzZURldGFpbE9mSXRlbSB9IGZyb20gJy4vRGV0YWlsT2ZJdGVtJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgJy4uL2Nzcy9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9saWIvQ2FyZC9DYXJkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL2xpYi9Sb3cvUm93JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xpYi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2xpYi9Gb3JtL0Zvcm0nO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyB1c2VEZXRhaWxGdW5jdGlvbnMgfSBmcm9tICcuL3VzZURldGFpbEZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBkaWdpdHNPbmx5IH0gZnJvbSAnLi4vbGliL3V0aWxzL3V0aWxzJztcbmNvbnN0IENhckRldGFpbCA9ICgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICBjb25zdCBmdW5jdGlvbnMgPSB1c2VEZXRhaWxGdW5jdGlvbnMoJ2NhcicpO1xuICAgIGNvbnN0IGRldGFpbFV0aWxzID0gdXNlRGV0YWlsT2ZJdGVtKHsgZnVuY3Rpb25zIH0pO1xuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlRGF0ZVwiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGV0YWlsVXRpbHMuc2V0SXRlbShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRldGFpbFV0aWxzLml0ZW0pLCB7IHByb2R1Y3Rpb246IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdydScpIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKChfYSA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBkZXRhaWxVdGlscy5pdGVtLnByb2R1Y3Rpb24uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXREYXRlXCIsIFtkYXksIG1vbnRoLCB5ZWFyXSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoK3llYXIsICttb250aCAtIDEsICtkYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IGRldGFpbFV0aWxzLmdldEl0ZW0oKSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5UaXRsZSwgbnVsbCwgXCJcXHUwNDEwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1pbnB1dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDM4XFx1MDQzN1xcdTA0MzJcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1hbnVmYWN0dXJlclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYW51ZmFjdHVyZXIsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MUNcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJtb2RlbFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYiA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tb2RlbCwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDMyXFx1MDQ0QlxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0M0FcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQaWNrZXIsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgY2FsZW5kYXJDbGFzc05hbWU6IFwiYm9yZGVyXCIsIGZvcm1hdDogXCJkZC5NTS55eXl5XCIsIGxvY2FsZTogXCJydVwiLCBtYXhEYXRlOiBuZXcgRGF0ZSgpLCBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAwLCAxKSwgbmFtZTogXCJwcm9kdWN0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1llYXJEcm9wZG93bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBjaGFuZ2VEYXRlLCB2YWx1ZTogZ2V0RGF0ZSgpIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiIH0sIFwiXFx1MDQyNlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYyA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDQ5XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NEMgKFxcdTA0M0IuXFx1MDQ0MS4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcInBvd2VyXCIsIHR5cGU6IFwidGV4dFwiLCBtYXhMZW5ndGg6IDMsIHZhbHVlOiAoKF9kID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBvd2VyKSA/IGRldGFpbFV0aWxzLml0ZW0ucG93ZXIgOiAnJywgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0sIG9uS2V5UHJlc3M6IGRpZ2l0c09ubHkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzMVxcdTA0MzVcXHUwNDMzIChcXHUwNDNBXFx1MDQzQy4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1pbGVhZ2VcIiwgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMTAsIHZhbHVlOiAoKF9lID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm1pbGVhZ2UpID8gZGV0YWlsVXRpbHMuaXRlbS5taWxlYWdlIDogJycsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtLCBvbktleVByZXNzOiBkaWdpdHNPbmx5IH0pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1jb21tZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1jb21tZW50XCIgfSwgXCJcXHUwNDFBXFx1MDQzRVxcdTA0M0NcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzOVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcInRleHRhcmVhXCIsIHJvd3M6IDgsIHZhbHVlOiAoX2YgPSBkZXRhaWxVdGlscy5pdGVtKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY29tbWVudCwgbmFtZTogXCJjb21tZW50XCIsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtIH0pKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfY2FyLXNhdmUgdG9vbHRpcFwiLCBvbkNsaWNrOiBkZXRhaWxVdGlscy5zYXZlSXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDM4XFx1MDQzRFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0NlxcdTA0MzhcXHUwNDRFIFxcdTA0M0VcXHUwNDMxIFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDNDXFx1MDQzRVxcdTA0MzFcXHUwNDM4XFx1MDQzQlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXJEZXRhaWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMzUlO1xuYDtcbmV4cG9ydCBjb25zdCBBbGVydCA9IHN0eWxlZC5kaXYgYFxuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gKHByb3BzLnNoYWRvdyA/ICcxcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCknIDogJ25vbmUnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdkYW5nZXInID8gJyNkYzM1NDUnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2Vycm9yJyA/ICcjZGMzNTQ1JyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdzdWNjZXNzJyA/ICcjMTk4NzU0JyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdpbmZvJyA/ICcjMGRjYWYwJyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICd3YXJuaW5nJyA/ICcjZmZjMTA3JyA6ICcnKX07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9BbGVydHMuZWxlbWVudHMnO1xuY29uc3QgQWxlcnRzID0gKHsgdGltZW91dCwgd2l0aEFsZXJ0cyA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBkZWZUaW1lb3V0ID0gNTAwMDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgdGltZW91dCA/IHRpbWVvdXQgOiBkZWZUaW1lb3V0KTtcbiAgICB9LCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB2aXNpYmxlICYmIHdpdGhBbGVydHMgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLkNvbnRhaW5lciwgbnVsbCwgYWxlcnRzLm1lc3NhZ2VzLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdHlwZSA9IGdldFR5cGUoZS50eXBlKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5BbGVydCwgeyBzaGFkb3c6IHRydWUsIHR5cGU6IGUudHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiY29uc3QgZ2V0S2V5VmFsdWUgPSAob2JqLCBrZXkpID0+IG9ialtrZXldO1xuZXhwb3J0IGNvbnN0IGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gW3sgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1Vua25vd24gZXJyb3InIH1dO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBnZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlZGlyZWN0ID0gKGhpc3RvcnksIHJlZGlyZWN0LCBkaXIgPSAnJykgPT4gcmVkaXJlY3QgJiYgZGlyID09PSAnYmFjaycgPyBoaXN0b3J5LmdvQmFjaygpIDogaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbmV4cG9ydCBjb25zdCBkaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9