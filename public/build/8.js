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
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lib/Form */ "./assets/components/lib/Form.tsx");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_car-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input"
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "manufacturer",
    type: "text",
    value: (_a = detailUtils.item) === null || _a === void 0 ? void 0 : _a.manufacturer,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input"
  }, "\u041C\u043E\u0434\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "model",
    type: "text",
    value: (_b = detailUtils.item) === null || _b === void 0 ? void 0 : _b.model,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "color"
  }, "\u0426\u0432\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "color",
    type: "text",
    value: (_c = detailUtils.item) === null || _c === void 0 ? void 0 : _c.color,
    onChange: detailUtils.changeItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "age"
  }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043B.\u0441.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "power",
    type: "text",
    maxLength: 3,
    value: ((_d = detailUtils.item) === null || _d === void 0 ? void 0 : _d.power) ? detailUtils.item.power : '',
    onChange: detailUtils.changeItem,
    onKeyPress: _lib_utils_utils__WEBPACK_IMPORTED_MODULE_23__["digitsOnly"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-input",
    name: "age"
  }, "\u041F\u0440\u043E\u0431\u0435\u0433 (\u043A\u043C.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    className: "form__control form__control_car-input",
    name: "mileage",
    type: "text",
    maxLength: 10,
    value: ((_e = detailUtils.item) === null || _e === void 0 ? void 0 : _e.mileage) ? detailUtils.item.mileage : '',
    onChange: detailUtils.changeItem,
    onKeyPress: _lib_utils_utils__WEBPACK_IMPORTED_MODULE_23__["digitsOnly"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Group, {
    className: "form__group form__group_car-comment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Label, {
    className: "form__label form__label_car-comment"
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_20__["default"].Control, {
    type: "textarea",
    rows: 8,
    value: (_f = detailUtils.item) === null || _f === void 0 ? void 0 : _f.comment,
    name: "comment",
    onChange: detailUtils.changeItem
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvQ2FyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jc3MvRGF0ZVBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Rvb2x0aXAudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9hbGVydC9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi91dGlscy91dGlscy50cyJdLCJuYW1lcyI6WyJDYXJEZXRhaWwiLCJfYSIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJmdW5jdGlvbnMiLCJ1c2VEZXRhaWxGdW5jdGlvbnMiLCJkZXRhaWxVdGlscyIsInVzZURldGFpbE9mSXRlbSIsImNoYW5nZURhdGUiLCJkYXRlIiwic2V0SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW0iLCJwcm9kdWN0aW9uIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZ2V0RGF0ZSIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiRGF0ZSIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydHMiLCJDYXJkIiwiVGl0bGUiLCJCb2R5IiwiUm93IiwiY2xhc3NOYW1lIiwiRm9ybSIsIkdyb3VwIiwiTGFiZWwiLCJDb250cm9sIiwibmFtZSIsInR5cGUiLCJ2YWx1ZSIsIm1hbnVmYWN0dXJlciIsIm9uQ2hhbmdlIiwiY2hhbmdlSXRlbSIsIm1vZGVsIiwiRGF0ZVBpY2tlciIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZm9ybWF0IiwibG9jYWxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJjb2xvciIsIm1heExlbmd0aCIsInBvd2VyIiwib25LZXlQcmVzcyIsImRpZ2l0c09ubHkiLCJtaWxlYWdlIiwicm93cyIsImNvbW1lbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwic2F2ZUl0ZW0iLCJUb29sdGlwQ29udGVudCIsInRvb2x0aXAiLCJpZCIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyIsIlRvb2x0aXAiLCJ0aW1lb3V0Iiwid2l0aEFsZXJ0cyIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJkZWZUaW1lb3V0Iiwic2hvd0FsZXJ0cyIsInZpZXciLCJtZXNzYWdlcyIsImxlbmd0aCIsIkZyYWdtZW50IiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsImtleSIsIm1lc3NhZ2UiLCJkZWxheSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJzaG93IiwidGhlbiIsImdldEtleVZhbHVlIiwib2JqIiwiZ2V0RXJyb3JzIiwiZGF0YSIsImtleXMiLCJyZWRpcmVjdCIsImhpc3RvcnkiLCJkaXIiLCJnb0JhY2siLCJwdXNoIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixNQUFJQyxFQUFKLEVBQVFDLEVBQVIsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCQyxFQUF4Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLCtFQUFrQixDQUFDLEtBQUQs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QSxVQUFhLENBQUNpQyxDQUFELEVBQU87QUFDN0IsTUFBSXNCLFFBQVEsR0FBR3RCLENBQUMsQ0FBQ3NCLFFBQWpCLENBRDZCLENBRTdCOztBQUNBLE1BQUlBLFFBQVEsR0FBRyxFQUFYLElBQWlCQSxRQUFRLEdBQUcsRUFBaEMsRUFBb0M7QUFDaEM7QUFDQXRCLEtBQUMsQ0FBQ3VCLGNBQUY7QUFDSDtBQUNKLENBUE0sQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCB7IHVzZURldGFpbE9mSXRlbSB9IGZyb20gJy4vRGV0YWlsT2ZJdGVtJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgJy4uL2Nzcy9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9saWIvQ2FyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9saWIvUm93JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xpYi9CdXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyB1c2VEZXRhaWxGdW5jdGlvbnMgfSBmcm9tICcuL3VzZURldGFpbEZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBkaWdpdHNPbmx5IH0gZnJvbSAnLi4vbGliL3V0aWxzL3V0aWxzJztcbmNvbnN0IENhckRldGFpbCA9ICgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICBjb25zdCBmdW5jdGlvbnMgPSB1c2VEZXRhaWxGdW5jdGlvbnMoJ2NhcicpO1xuICAgIGNvbnN0IGRldGFpbFV0aWxzID0gdXNlRGV0YWlsT2ZJdGVtKHsgZnVuY3Rpb25zIH0pO1xuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlRGF0ZVwiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGV0YWlsVXRpbHMuc2V0SXRlbShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRldGFpbFV0aWxzLml0ZW0pLCB7IHByb2R1Y3Rpb246IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdydScpIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKChfYSA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBkZXRhaWxVdGlscy5pdGVtLnByb2R1Y3Rpb24uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXREYXRlXCIsIFtkYXksIG1vbnRoLCB5ZWFyXSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoK3llYXIsICttb250aCAtIDEsICtkYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IGRldGFpbFV0aWxzLmdldEl0ZW0oKSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5UaXRsZSwgbnVsbCwgXCJcXHUwNDEwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzQ1xcdTA0M0VcXHUwNDMxXFx1MDQzOFxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1pbnB1dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDM4XFx1MDQzN1xcdTA0MzJcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1hbnVmYWN0dXJlclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYW51ZmFjdHVyZXIsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MUNcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJtb2RlbFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYiA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tb2RlbCwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDMyXFx1MDQ0QlxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0M0FcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQaWNrZXIsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgY2FsZW5kYXJDbGFzc05hbWU6IFwiYm9yZGVyXCIsIGZvcm1hdDogXCJkZC5NTS55eXl5XCIsIGxvY2FsZTogXCJydVwiLCBtYXhEYXRlOiBuZXcgRGF0ZSgpLCBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAwLCAxKSwgbmFtZTogXCJwcm9kdWN0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1llYXJEcm9wZG93bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBjaGFuZ2VEYXRlLCB2YWx1ZTogZ2V0RGF0ZSgpIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiIH0sIFwiXFx1MDQyNlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9jYXItaW5wdXRcIiwgbmFtZTogXCJjb2xvclwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYyA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDQ5XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NEMgKFxcdTA0M0IuXFx1MDQ0MS4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcInBvd2VyXCIsIHR5cGU6IFwidGV4dFwiLCBtYXhMZW5ndGg6IDMsIHZhbHVlOiAoKF9kID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBvd2VyKSA/IGRldGFpbFV0aWxzLml0ZW0ucG93ZXIgOiAnJywgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0sIG9uS2V5UHJlc3M6IGRpZ2l0c09ubHkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImFnZVwiIH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzMVxcdTA0MzVcXHUwNDMzIChcXHUwNDNBXFx1MDQzQy4pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1pbGVhZ2VcIiwgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMTAsIHZhbHVlOiAoKF9lID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm1pbGVhZ2UpID8gZGV0YWlsVXRpbHMuaXRlbS5taWxlYWdlIDogJycsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtLCBvbktleVByZXNzOiBkaWdpdHNPbmx5IH0pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2Nhci1jb21tZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1jb21tZW50XCIgfSwgXCJcXHUwNDFBXFx1MDQzRVxcdTA0M0NcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzOVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcInRleHRhcmVhXCIsIHJvd3M6IDgsIHZhbHVlOiAoX2YgPSBkZXRhaWxVdGlscy5pdGVtKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY29tbWVudCwgbmFtZTogXCJjb21tZW50XCIsIG9uQ2hhbmdlOiBkZXRhaWxVdGlscy5jaGFuZ2VJdGVtIH0pKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfY2FyLXNhdmUgdG9vbHRpcFwiLCBvbkNsaWNrOiBkZXRhaWxVdGlscy5zYXZlSXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDM4XFx1MDQzRFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0NlxcdTA0MzhcXHUwNDRFIFxcdTA0M0VcXHUwNDMxIFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDNDXFx1MDQzRVxcdTA0MzFcXHUwNDM4XFx1MDQzQlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXJEZXRhaWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQsIHdpdGhBbGVydHMgPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgaWYgKCF3aXRoQWxlcnRzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheSh0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCJjb25zdCBnZXRLZXlWYWx1ZSA9IChvYmosIGtleSkgPT4gb2JqW2tleV07XG5leHBvcnQgY29uc3QgZ2V0RXJyb3JzID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBbeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnVW5rbm93biBlcnJvcicgfV07XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IGdldEtleVZhbHVlKGRhdGEsIGtleSkgfTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgcmVkaXJlY3QgPSAoaGlzdG9yeSwgcmVkaXJlY3QsIGRpciA9ICcnKSA9PiByZWRpcmVjdCAmJiBkaXIgPT09ICdiYWNrJyA/IGhpc3RvcnkuZ29CYWNrKCkgOiBoaXN0b3J5LnB1c2gocmVkaXJlY3QpO1xuZXhwb3J0IGNvbnN0IGRpZ2l0c09ubHkgPSAoZSkgPT4ge1xuICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgLy9jb25zb2xlLmxvZyhjaGFyQ29kZSk7XG4gICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgICAvLyBkaWdpdHMgb25seVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=