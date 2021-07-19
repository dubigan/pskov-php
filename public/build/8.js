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
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout,
      _ref$withAlerts = _ref.withAlerts,
      withAlerts = _ref$withAlerts === void 0 ? true : _ref$withAlerts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_11__["useAlerts"])();
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (alerts.messages && alerts.messages.length > 0) {
      setVisible(true);
      global.setTimeout(function () {
        return setVisible(false);
      }, timeout);
    }
  }, [alerts.messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, visible && withAlerts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Container"], null, alerts.messages.map(function (e, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvQ2FyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jc3MvRGF0ZVBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Sb3cvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy5lbGVtZW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkNhckRldGFpbCIsIl9hIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsImZ1bmN0aW9ucyIsInVzZURldGFpbEZ1bmN0aW9ucyIsImRldGFpbFV0aWxzIiwidXNlRGV0YWlsT2ZJdGVtIiwiY2hhbmdlRGF0ZSIsImRhdGUiLCJzZXRJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbSIsInByb2R1Y3Rpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXREYXRlIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJEYXRlIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0cyIsIkNhcmQiLCJUaXRsZSIsIkJvZHkiLCJSb3ciLCJjbGFzc05hbWUiLCJGb3JtIiwiR3JvdXAiLCJMYWJlbCIsIkNvbnRyb2wiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwibWFudWZhY3R1cmVyIiwib25DaGFuZ2UiLCJjaGFuZ2VJdGVtIiwibW9kZWwiLCJEYXRlUGlja2VyIiwiY2FsZW5kYXJDbGFzc05hbWUiLCJmb3JtYXQiLCJsb2NhbGUiLCJtYXhEYXRlIiwibWluRGF0ZSIsImNvbG9yIiwibWF4TGVuZ3RoIiwicG93ZXIiLCJvbktleVByZXNzIiwiZGlnaXRzT25seSIsIm1pbGVhZ2UiLCJyb3dzIiwiY29tbWVudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlSXRlbSIsIlRvb2x0aXBDb250ZW50IiwidG9vbHRpcCIsImlkIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiVG9vbHRpcCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFsZXJ0IiwicHJvcHMiLCJzaGFkb3ciLCJ0aW1lb3V0Iiwid2l0aEFsZXJ0cyIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJtZXNzYWdlcyIsImxlbmd0aCIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJGcmFnbWVudCIsIlN0eWxlZCIsIm1hcCIsImUiLCJpbmRleCIsImtleSIsIm1lc3NhZ2UiLCJnZXRLZXlWYWx1ZSIsIm9iaiIsImdldEVycm9ycyIsImRhdGEiLCJrZXlzIiwicmVkaXJlY3QiLCJoaXN0b3J5IiwiZGlyIiwiZ29CYWNrIiwicHVzaCIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsTUFBSUMsRUFBSixFQUFRQyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsRUFBeEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFH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QUMvQixNQUFJLENBQUNBLElBQUwsRUFDSSxPQUFPLENBQUM7QUFBRTFELFFBQUksRUFBRSxPQUFSO0FBQWlCc0QsV0FBTyxFQUFFO0FBQTFCLEdBQUQsQ0FBUDtBQUNKLFNBQU9oRixNQUFNLENBQUNxRixJQUFQLENBQVlELElBQVosRUFBa0JSLEdBQWxCLENBQXNCLFVBQUNHLEdBQUQsRUFBUztBQUNsQyxXQUFPO0FBQUVyRCxVQUFJLEVBQUUsT0FBUjtBQUFpQnNELGFBQU8sRUFBRUMsV0FBVyxDQUFDRyxJQUFELEVBQU9MLEdBQVA7QUFBckMsS0FBUDtBQUNILEdBRk0sQ0FBUDtBQUdILENBTk07QUFPQSxJQUFNTyxRQUFRLEdBQUcsa0JBQUNDLE9BQUQsRUFBVUQsU0FBVjtBQUFBLE1BQW9CRSxHQUFwQix1RUFBMEIsRUFBMUI7QUFBQSxTQUFpQ0YsU0FBUSxJQUFJRSxHQUFHLEtBQUssTUFBcEIsR0FBNkJELE9BQU8sQ0FBQ0UsTUFBUixFQUE3QixHQUFnREYsT0FBTyxDQUFDRyxJQUFSLENBQWFKLFNBQWIsQ0FBakY7QUFBQSxDQUFqQjtBQUNBLElBQU01QyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDbUMsQ0FBRCxFQUFPO0FBQzdCLE1BQUljLFFBQVEsR0FBR2QsQ0FBQyxDQUFDYyxRQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxNQUFJQSxRQUFRLEdBQUcsRUFBWCxJQUFpQkEsUUFBUSxHQUFHLEVBQWhDLEVBQW9DO0FBQ2hDO0FBQ0FkLEtBQUMsQ0FBQ2UsY0FBRjtBQUNIO0FBQ0osQ0FQTSxDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgdXNlRGV0YWlsT2ZJdGVtIH0gZnJvbSAnLi9EZXRhaWxPZkl0ZW0nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCAnLi4vY3NzL0RhdGVQaWNrZXIuY3NzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2xpYi9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vbGliL1Jvdy9Sb3cnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGliL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vbGliL0Zvcm0vRm9ybSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4uL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IHVzZURldGFpbEZ1bmN0aW9ucyB9IGZyb20gJy4vdXNlRGV0YWlsRnVuY3Rpb25zJztcbmltcG9ydCB7IGRpZ2l0c09ubHkgfSBmcm9tICcuLi9saWIvdXRpbHMvdXRpbHMnO1xuY29uc3QgQ2FyRGV0YWlsID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgIGNvbnN0IGZ1bmN0aW9ucyA9IHVzZURldGFpbEZ1bmN0aW9ucygnY2FyJyk7XG4gICAgY29uc3QgZGV0YWlsVXRpbHMgPSB1c2VEZXRhaWxPZkl0ZW0oeyBmdW5jdGlvbnMgfSk7XG4gICAgY29uc3QgY2hhbmdlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2VEYXRlXCIsIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnVcIikpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGUgIT09ICdvYmplY3QnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZXRhaWxVdGlscy5zZXRJdGVtKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGV0YWlsVXRpbHMuaXRlbSksIHsgcHJvZHVjdGlvbjogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JykgfSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRldGFpbFV0aWxzLml0ZW0ucHJvZHVjdGlvbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldERhdGVcIiwgW2RheSwgbW9udGgsIHllYXJdKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgreWVhciwgK21vbnRoIC0gMSwgK2RheSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4gZGV0YWlsVXRpbHMuZ2V0SXRlbSgpLCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLlRpdGxlLCBudWxsLCBcIlxcdTA0MTBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDNDXFx1MDQzRVxcdTA0MzFcXHUwNDM4XFx1MDQzQlxcdTA0NENcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfY2FyLWlucHV0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9jYXItaW5wdXRcIiB9LCBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzhcXHUwNDM3XFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwibWFudWZhY3R1cmVyXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1hbnVmYWN0dXJlciwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiIH0sIFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcIm1vZGVsXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9iID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1vZGVsLCBvbkNoYW5nZTogZGV0YWlsVXRpbHMuY2hhbmdlSXRlbSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIgfSwgXCJcXHUwNDE0XFx1MDQzMFxcdTA0NDJcXHUwNDMwIFxcdTA0MzJcXHUwNDRCXFx1MDQzRlxcdTA0NDNcXHUwNDQxXFx1MDQzQVxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBjYWxlbmRhckNsYXNzTmFtZTogXCJib3JkZXJcIiwgZm9ybWF0OiBcImRkLk1NLnl5eXlcIiwgbG9jYWxlOiBcInJ1XCIsIG1heERhdGU6IG5ldyBEYXRlKCksIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDAsIDEpLCBuYW1lOiBcInByb2R1Y3Rpb25cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93WWVhckRyb3Bkb3duPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGNoYW5nZURhdGUsIHZhbHVlOiBnZXREYXRlKCkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX2Nhci1pbnB1dFwiLCBuYW1lOiBcImNvbG9yXCIgfSwgXCJcXHUwNDI2XFx1MDQzMlxcdTA0MzVcXHUwNDQyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX2Nhci1pbnB1dFwiLCBuYW1lOiBcImNvbG9yXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9jID0gZGV0YWlsVXRpbHMuaXRlbSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbG9yLCBvbkNoYW5nZTogZGV0YWlsVXRpbHMuY2hhbmdlSXRlbSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIsIG5hbWU6IFwiYWdlXCIgfSwgXCJcXHUwNDFDXFx1MDQzRVxcdTA0NDlcXHUwNDNEXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0QyAoXFx1MDQzQi5cXHUwNDQxLilcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwicG93ZXJcIiwgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMywgdmFsdWU6ICgoX2QgPSBkZXRhaWxVdGlscy5pdGVtKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucG93ZXIpID8gZGV0YWlsVXRpbHMuaXRlbS5wb3dlciA6ICcnLCBvbkNoYW5nZTogZGV0YWlsVXRpbHMuY2hhbmdlSXRlbSwgb25LZXlQcmVzczogZGlnaXRzT25seSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWlucHV0XCIsIG5hbWU6IFwiYWdlXCIgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzNVxcdTA0MzMgKFxcdTA0M0FcXHUwNDNDLilcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGNsYXNzTmFtZTogXCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfY2FyLWlucHV0XCIsIG5hbWU6IFwibWlsZWFnZVwiLCB0eXBlOiBcInRleHRcIiwgbWF4TGVuZ3RoOiAxMCwgdmFsdWU6ICgoX2UgPSBkZXRhaWxVdGlscy5pdGVtKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UubWlsZWFnZSkgPyBkZXRhaWxVdGlscy5pdGVtLm1pbGVhZ2UgOiAnJywgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0sIG9uS2V5UHJlc3M6IGRpZ2l0c09ubHkgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfY2FyLWNvbW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfY2FyLWNvbW1lbnRcIiB9LCBcIlxcdTA0MUFcXHUwNDNFXFx1MDQzQ1xcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDM5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwidGV4dGFyZWFcIiwgcm93czogOCwgdmFsdWU6IChfZiA9IGRldGFpbFV0aWxzLml0ZW0pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jb21tZW50LCBuYW1lOiBcImNvbW1lbnRcIiwgb25DaGFuZ2U6IGRldGFpbFV0aWxzLmNoYW5nZUl0ZW0gfSkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9jYXItc2F2ZSB0b29sdGlwXCIsIG9uQ2xpY2s6IGRldGFpbFV0aWxzLnNhdmVJdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzhcXHUwNDNEXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQ2XFx1MDQzOFxcdTA0NEUgXFx1MDQzRVxcdTA0MzEgXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0M0NcXHUwNDNFXFx1MDQzMVxcdTA0MzhcXHUwNDNCXFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhckRldGFpbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm93ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWQgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3JvdycsIGlkOiBpZCB9LCBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAzNSU7XG5gO1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gc3R5bGVkLmRpdiBgXG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAocHJvcHMuc2hhZG93ID8gJzFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KScgOiAnbm9uZScpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2RhbmdlcicgPyAnI2RjMzU0NScgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnZXJyb3InID8gJyNkYzM1NDUnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyMxOTg3NTQnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2luZm8nID8gJyMwZGNhZjAnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3dhcm5pbmcnID8gJyNmZmMxMDcnIDogJycpfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL0FsZXJ0cy5lbGVtZW50cyc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0ID0gNTAwMCwgd2l0aEFsZXJ0cyA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWxlcnRzLm1lc3NhZ2VzICYmIGFsZXJ0cy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfSwgW2FsZXJ0cy5tZXNzYWdlc10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdmlzaWJsZSAmJiB3aXRoQWxlcnRzICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Db250YWluZXIsIG51bGwsIGFsZXJ0cy5tZXNzYWdlcy5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuQWxlcnQsIHsgc2hhZG93OiB0cnVlLCB0eXBlOiBlLnR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiIsImNvbnN0IGdldEtleVZhbHVlID0gKG9iaiwga2V5KSA9PiBvYmpba2V5XTtcbmV4cG9ydCBjb25zdCBnZXRFcnJvcnMgPSAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIFt7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdVbmtub3duIGVycm9yJyB9XTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZ2V0S2V5VmFsdWUoZGF0YSwga2V5KSB9O1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCByZWRpcmVjdCA9IChoaXN0b3J5LCByZWRpcmVjdCwgZGlyID0gJycpID0+IHJlZGlyZWN0ICYmIGRpciA9PT0gJ2JhY2snID8gaGlzdG9yeS5nb0JhY2soKSA6IGhpc3RvcnkucHVzaChyZWRpcmVjdCk7XG5leHBvcnQgY29uc3QgZGlnaXRzT25seSA9IChlKSA9PiB7XG4gICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==