(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/components/OwnerDetail.js":
/*!******************************************!*\
  !*** ./assets/components/OwnerDetail.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OwnerDetail; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/DetailOfItem.js");
/* harmony import */ var _Cars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cars */ "./assets/components/Cars.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _parts_GenderSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parts/GenderSelect */ "./assets/components/parts/GenderSelect.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
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












var EMPTY_ITEM_ID = -10; //const UNDEFINED_OWNER = -1;

var EMPTY_ITEM = {
  id: EMPTY_ITEM_ID,
  // indicate new owner, -1 means undefined owner
  cars: [],
  name: '',
  patronymic: '',
  last_name: '',
  gender: 'f',
  age: 0,
  comment: ''
};

var OwnerDetail = /*#__PURE__*/function (_DetailOfItem) {
  _inherits(OwnerDetail, _DetailOfItem);

  var _super = _createSuper(OwnerDetail);

  function OwnerDetail() {
    var _this;

    _classCallCheck(this, OwnerDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "url", '/api/owner/');

    _defineProperty(_assertThisInitialized(_this), "btnNewCarClick", function () {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(_this.url, {
        btn_add: '',
        url: window.location.pathname,
        owner_pk: _this.state.item.id
      }).then(function (res) {
        _this.redirect(res.data.redirect);
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeGender", function (e) {
      var item = _objectSpread(_objectSpread({}, _this.state.item), {}, {
        gender: e.target.value
      }); //console.log('changeGender', item);


      _this.setState({
        item: item
      });
    });

    return _this;
  }

  _createClass(OwnerDetail, [{
    key: "getNewItem",
    value: function getNewItem() {
      return EMPTY_ITEM;
    }
  }, {
    key: "getNewItemId",
    value: function getNewItemId() {
      return EMPTY_ITEM_ID;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_9__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Title, null, "\u0410\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_owner-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u0418\u043C\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "name",
        type: "text",
        value: this.state.item.name ? this.state.item.name : '',
        placeholder: "\u0418\u043C\u044F",
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "patronymic",
        type: "text",
        value: this.state.item.patronymic ? this.state.item.patronymic : '',
        placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "last_name",
        type: "text",
        placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        value: this.state.item.last_name ? this.state.item.last_name : '',
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-input",
        name: "gender"
      }, "\u041F\u043E\u043B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_GenderSelect__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "toggleButtonGroup toggleButtonGroup_owner-gender",
        name: "gender",
        type: "radio",
        checkValue: this.state.item.gender,
        onChange: this.changeGender
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-input",
        name: "age"
      }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "age",
        type: "text",
        maxLength: "3",
        placeholder: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
        value: this.state.item.age ? this.state.item.age : '',
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
        className: "form__group form__group_owner-comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
        className: "form__label form__label_owner-comment"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        type: "textarea",
        rows: "7",
        value: this.state.item.comment ? this.state.item.comment : '',
        name: "comment",
        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        onChange: this.changeItem
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn-primary btn-primary_owner-save tooltip",
        variant: "primary",
        onClick: this.saveItem
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\xA0\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E\xA0\u043E\u0431\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435"), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        variant: "primary",
        className: "btn-primary btn-primary_owner-add-car tooltip",
        name: "add_car",
        onClick: this.btnNewCarClick,
        disabled: this.state.item.id < 0 ? 'disabled' : ''
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Cars__WEBPACK_IMPORTED_MODULE_8__["default"], {
        owner: this.state.item.id
      }))));
    }
  }]);

  return OwnerDetail;
}(_DetailOfItem__WEBPACK_IMPORTED_MODULE_7__["DetailOfItem"]);



/***/ }),

/***/ "./assets/components/lib/ToggleButtons.tsx":
/*!*************************************************!*\
  !*** ./assets/components/lib/ToggleButtons.tsx ***!
  \*************************************************/
/*! exports provided: ToggleButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var ToggleButton = function ToggleButton(_ref) {
  var children = _ref.children,
      name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      inputClassName = _ref.inputClassName,
      checked = _ref.checked,
      onChange = _ref.onChange;
  var clName = [className ? className : 'toggleButtonGroup__label'];

  if (checked) {
    clName.push('active');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    className: clName.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    className: inputClassName ? inputClassName : 'toggleButtonGroup__input',
    type: "radio",
    name: name,
    value: value,
    onChange: onChange,
    checked: checked
  }), children);
}; // values in form of [{label: 'label', value: value}, ...]

var ToggleButtonGroup = function ToggleButtonGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: props.className ? props.className : 'toggleButtonGroup'
  }, props.values ? props.values.map(function (value, index) {
    //const checked = props.checkValue === value.value;
    //console.log('ToggleButtonGroup', props.checkValue, value.value, checked);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ToggleButton, {
      value: value.value,
      name: props.name,
      className: props.buttonClassName,
      inputClassName: props.inputClassName,
      onChange: props.onChange,
      key: index,
      checked: props.checkValue === value.value
    }, value.label);
  }) : '');
};

ToggleButtonGroup.values = []; // ToggleButton.defaultProps = {
//   className: 'toggleButtonGroup__input',
//   value: 'on',
// };

/* harmony default export */ __webpack_exports__["default"] = (ToggleButtonGroup);

/***/ }),

/***/ "./assets/components/parts/GenderSelect.tsx":
/*!**************************************************!*\
  !*** ./assets/components/parts/GenderSelect.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_ToggleButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/ToggleButtons */ "./assets/components/lib/ToggleButtons.tsx");







var GenderSelect = function GenderSelect(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib_ToggleButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: props.className,
    name: props.name ? props.name : 'gender',
    values: props.values ? props.values : GenderSelect.values,
    //type="radio"
    checkValue: props.checkValue,
    onChange: props.onChange
  });
};

GenderSelect.values = [{
  label: 'Муж',
  value: 'm'
}, {
  label: 'Жен',
  value: 'f'
}];
/* harmony default export */ __webpack_exports__["default"] = (GenderSelect);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9nZ2xlQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFydHMvR2VuZGVyU2VsZWN0LnRzeCJdLCJuYW1lcyI6WyJFTVBUWV9JVEVNX0lEIiwiRU1QVFlfSVRFTSIsImlkIiwiY2FycyIsIm5hbWUiLCJwYXRyb255bWljIiwibGFzdF9uYW1lIiwiZ2VuZGVyIiwiYWdlIiwiY29tbWVudCIsIk93bmVyRGV0YWlsIiwiYXhpb3MiLCJwb3N0IiwidXJsIiwiYnRuX2FkZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJvd25lcl9wayIsInN0YXRlIiwiaXRlbSIsInRoZW4iLCJyZXMiLCJyZWRpcmVjdCIsImRhdGEiLCJlcnIiLCJzZXRTdGF0ZSIsIm1lc3NhZ2VzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhck1lc3NhZ2VzIiwiY2hhbmdlSXRlbSIsImNoYW5nZUdlbmRlciIsImRpZ2l0c09ubHkiLCJzYXZlSXRlbSIsImJ0bk5ld0NhckNsaWNrIiwiRGV0YWlsT2ZJdGVtIiwiVG9nZ2xlQnV0dG9uIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpbnB1dENsYXNzTmFtZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsTmFtZSIsInB1c2giLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJqb2luIiwidHlwZSIsIlRvZ2dsZUJ1dHRvbkdyb3VwIiwicHJvcHMiLCJ2YWx1ZXMiLCJtYXAiLCJpbmRleCIsImJ1dHRvbkNsYXNzTmFtZSIsImtleSIsImNoZWNrVmFsdWUiLCJsYWJlbCIsIkdlbmRlclNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUFDLEVBQXZCLEMsQ0FDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJDLElBQUUsRUFBRUYsYUFEYTtBQUNFO0FBQ25CRyxNQUFJLEVBQUUsRUFGVztBQUdqQkMsTUFBSSxFQUFFLEVBSFc7QUFJakJDLFlBQVUsRUFBRSxFQUpLO0FBS2pCQyxXQUFTLEVBQUUsRUFMTTtBQU1qQkMsUUFBTSxFQUFFLEdBTlM7QUFPakJDLEtBQUcsRUFBRSxDQVBZO0FBUWpCQyxTQUFPLEVBQUU7QUFSUSxDQUFuQjs7SUFXcUJDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7MERBQ2IsYTs7cUVBU1csWUFBTTtBQUNyQkMsa0RBQUssQ0FDRkMsSUFESCxDQUNRLE1BQUtDLEdBRGIsRUFDa0I7QUFDZEMsZUFBTyxFQUFFLEVBREs7QUFFZEQsV0FBRyxFQUFFRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBRlA7QUFHZEMsZ0JBQVEsRUFBRSxNQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JsQjtBQUhaLE9BRGxCLEVBTUdtQixJQU5ILENBTVEsVUFBQUMsR0FBRyxFQUFJO0FBQ1gsY0FBS0MsUUFBTCxDQUFjRCxHQUFHLENBQUNFLElBQUosQ0FBU0QsUUFBdkI7QUFDRCxPQVJILFdBU1MsVUFBQUUsR0FBRyxFQUFJO0FBQ1osY0FBS0MsUUFBTCxDQUFjO0FBQ1pDLGtCQUFRLEVBQUUsTUFBS0MsU0FBTCxDQUFlSCxHQUFHLENBQUNJLFFBQUosQ0FBYUwsSUFBNUI7QUFERSxTQUFkO0FBR0QsT0FiSDtBQWNELEs7O21FQUVjLFVBQUFNLENBQUMsRUFBSTtBQUNsQixVQUFNVixJQUFJLG1DQUFRLE1BQUtELEtBQUwsQ0FBV0MsSUFBbkI7QUFBeUJiLGNBQU0sRUFBRXVCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUExQyxRQUFWLENBRGtCLENBRWxCOzs7QUFFQSxZQUFLTixRQUFMLENBQWM7QUFBRU4sWUFBSSxFQUFKQTtBQUFGLE9BQWQ7QUFDRCxLOzs7Ozs7O2lDQTdCWTtBQUNYLGFBQU9uQixVQUFQO0FBQ0Q7OzttQ0FDYztBQUNiLGFBQU9ELGFBQVA7QUFDRDs7OzZCQTBCUTtBQUNQLDBCQUNFLHFGQUNFLDJEQUFDLCtDQUFEO0FBQVEsZ0JBQVEsRUFBRSxLQUFLbUIsS0FBTCxDQUFXUSxRQUE3QjtBQUF1QyxxQkFBYSxFQUFFLEtBQUtNO0FBQTNELFFBREYsZUFFRSwyREFBQyxrREFBRCxxQkFDRSwyREFBQyxrREFBRCxDQUFNLEtBQU4sbUZBREYsZUFFRSwyREFBQyxrREFBRCxDQUFNLElBQU4scUJBQ0UsMkRBQUMsNkNBQUQscUJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QixzQkFDRSwyREFBQyxrREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLHNCQUNFLDJEQUFDLGtEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsOEJBREYsZUFFRSwyREFBQyxrREFBRCxDQUFNLE9BQU47QUFDRSxpQkFBUyxFQUFDLHlDQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGFBQUssRUFBRSxLQUFLZCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JoQixJQUFoQixHQUF1QixLQUFLZSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JoQixJQUF2QyxHQUE4QyxFQUp2RDtBQUtFLG1CQUFXLEVBQUMsb0JBTGQ7QUFNRSxnQkFBUSxFQUFFLEtBQUs4QjtBQU5qQixRQUZGLENBREYsZUFZRSwyREFBQyxrREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLHNCQUNFLDJEQUFDLGtEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsNERBREYsZUFJRSwyREFBQyxrREFBRCxDQUFNLE9BQU47QUFDRSxpQkFBUyxFQUFDLHlDQURaO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGFBQUssRUFBRSxLQUFLZixLQUFMLENBQVdDLElBQVgsQ0FBZ0JmLFVBQWhCLEdBQTZCLEtBQUtjLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmYsVUFBN0MsR0FBMEQsRUFKbkU7QUFLRSxtQkFBVyxFQUFDLGtEQUxkO0FBTUUsZ0JBQVEsRUFBRSxLQUFLNkI7QUFOakIsUUFKRixDQVpGLGVBeUJFLDJEQUFDLGtEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsc0JBQ0UsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QixzREFERixlQUVFLDJEQUFDLGtEQUFELENBQU0sT0FBTjtBQUNFLGlCQUFTLEVBQUMseUNBRFo7QUFFRSxZQUFJLEVBQUMsV0FGUDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVcsRUFBQyw0Q0FKZDtBQUtFLGFBQUssRUFBRSxLQUFLZixLQUFMLENBQVdDLElBQVgsQ0FBZ0JkLFNBQWhCLEdBQTRCLEtBQUthLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmQsU0FBNUMsR0FBd0QsRUFMakU7QUFNRSxnQkFBUSxFQUFFLEtBQUs0QjtBQU5qQixRQUZGLENBekJGLGVBb0NFLDJEQUFDLGtEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsc0JBQ0UsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQyxxQ0FBdEI7QUFBNEQsWUFBSSxFQUFDO0FBQWpFLDhCQURGLGVBSUUsMkRBQUMsNERBQUQ7QUFDRSxpQkFBUyxFQUFDLGtEQURaO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLGtCQUFVLEVBQUUsS0FBS2YsS0FBTCxDQUFXQyxJQUFYLENBQWdCYixNQUo5QjtBQUtFLGdCQUFRLEVBQUUsS0FBSzRCO0FBTGpCLFFBSkYsQ0FwQ0YsZUFnREUsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QixzQkFDRSwyREFBQyxrREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDLHFDQUF0QjtBQUE0RCxZQUFJLEVBQUM7QUFBakUsc0RBREYsZUFJRSwyREFBQyxrREFBRCxDQUFNLE9BQU47QUFDRSxpQkFBUyxFQUFDLHlDQURaO0FBRUUsWUFBSSxFQUFDLEtBRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGlCQUFTLEVBQUMsR0FKWjtBQUtFLG1CQUFXLEVBQUMsNENBTGQ7QUFNRSxhQUFLLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlosR0FBaEIsR0FBc0IsS0FBS1csS0FBTCxDQUFXQyxJQUFYLENBQWdCWixHQUF0QyxHQUE0QyxFQU5yRDtBQU9FLGdCQUFRLEVBQUUsS0FBSzBCLFVBUGpCO0FBUUUsa0JBQVUsRUFBRSxLQUFLRTtBQVJuQixRQUpGLENBaERGLENBREYsZUFpRUUsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QixzQkFDRSwyREFBQyxrREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLDhFQURGLGVBSUUsMkRBQUMsa0RBQUQsQ0FBTSxPQUFOO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLGFBQUssRUFBRSxLQUFLakIsS0FBTCxDQUFXQyxJQUFYLENBQWdCWCxPQUFoQixHQUEwQixLQUFLVSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JYLE9BQTFDLEdBQW9ELEVBSDdEO0FBSUUsWUFBSSxFQUFDLFNBSlA7QUFLRSxtQkFBVyxFQUFDLG9FQUxkO0FBTUUsZ0JBQVEsRUFBRSxLQUFLeUI7QUFOakIsUUFKRixDQWpFRixDQURGLENBREYsZUFrRkUsc0VBbEZGLGVBbUZFLDJEQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBQyw0Q0FEWjtBQUVFLGVBQU8sRUFBQyxTQUZWO0FBR0UsZUFBTyxFQUFFLEtBQUtHO0FBSGhCLHNCQUtFLDJEQUFDLDREQUFELG1PQUxGLDJEQW5GRixDQUZGLENBRkYsZUFpR0UsMkRBQUMsa0RBQUQscUJBQ0UsMkRBQUMsa0RBQUQsQ0FBTSxLQUFOLHVFQURGLGVBRUUsMkRBQUMsa0RBQUQsQ0FBTSxNQUFOLHFCQUNFLDJEQUFDLDZDQUFELHFCQUNFLDJEQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFDLFNBRFY7QUFFRSxpQkFBUyxFQUFDLCtDQUZaO0FBR0UsWUFBSSxFQUFDLFNBSFA7QUFJRSxlQUFPLEVBQUUsS0FBS0MsY0FKaEI7QUFLRSxnQkFBUSxFQUFFLEtBQUtuQixLQUFMLENBQVdDLElBQVgsQ0FBZ0JsQixFQUFoQixHQUFxQixDQUFyQixHQUF5QixVQUF6QixHQUFzQztBQUxsRCxzQkFPRSwyREFBQyw0REFBRCwySEFQRixrSEFERixDQURGLENBRkYsZUFnQkUsMkRBQUMsa0RBQUQsQ0FBTSxJQUFOLHFCQUNFLDJEQUFDLDZDQUFEO0FBQU0sYUFBSyxFQUFFLEtBQUtpQixLQUFMLENBQVdDLElBQVgsQ0FBZ0JsQjtBQUE3QixRQURGLENBaEJGLENBakdGLENBREY7QUF3SEQ7Ozs7RUEzSnNDcUMsMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCekM7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE2RTtBQUFBLE1BQTFFQyxRQUEwRSxRQUExRUEsUUFBMEU7QUFBQSxNQUFoRXJDLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTFENEIsS0FBMEQsUUFBMURBLEtBQTBEO0FBQUEsTUFBbkRVLFNBQW1ELFFBQW5EQSxTQUFtRDtBQUFBLE1BQXhDQyxjQUF3QyxRQUF4Q0EsY0FBd0M7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JHLE1BQU1DLE1BQU0sR0FBRyxDQUFDSixTQUFTLEdBQUdBLFNBQUgsR0FBZSwwQkFBekIsQ0FBZjs7QUFDQSxNQUFJRSxPQUFKLEVBQWE7QUFDVEUsVUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNIOztBQUNELHNCQUFRQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE9BQXBCLEVBQTZCO0FBQUVQLGFBQVMsRUFBRUksTUFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUFiLEdBQTdCLGVBQ0pGLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI7QUFBRVAsYUFBUyxFQUFFQyxjQUFjLEdBQUdBLGNBQUgsR0FBb0IsMEJBQS9DO0FBQTJFUSxRQUFJLEVBQUUsT0FBakY7QUFBMEYvQyxRQUFJLEVBQUVBLElBQWhHO0FBQXNHNEIsU0FBSyxFQUFFQSxLQUE3RztBQUFvSGEsWUFBUSxFQUFFQSxRQUE5SDtBQUF3SUQsV0FBTyxFQUFFQTtBQUFqSixHQUE3QixDQURJLEVBRUpILFFBRkksQ0FBUjtBQUdILENBUk0sQyxDQVNQOztBQUNBLElBQU1XLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLHNCQUFRTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVQLGFBQVMsRUFBRVcsS0FBSyxDQUFDWCxTQUFOLEdBQWtCVyxLQUFLLENBQUNYLFNBQXhCLEdBQW9DO0FBQWpELEdBQTNCLEVBQW1HVyxLQUFLLENBQUNDLE1BQU4sR0FDckdELEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUN2QixLQUFELEVBQVF3QixLQUFSLEVBQWtCO0FBQ2pDO0FBQ0E7QUFDQSx3QkFBUVIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlQsWUFBcEIsRUFBa0M7QUFBRVIsV0FBSyxFQUFFQSxLQUFLLENBQUNBLEtBQWY7QUFBc0I1QixVQUFJLEVBQUVpRCxLQUFLLENBQUNqRCxJQUFsQztBQUF3Q3NDLGVBQVMsRUFBRVcsS0FBSyxDQUFDSSxlQUF6RDtBQUEwRWQsb0JBQWMsRUFBRVUsS0FBSyxDQUFDVixjQUFoRztBQUFnSEUsY0FBUSxFQUFFUSxLQUFLLENBQUNSLFFBQWhJO0FBQTBJYSxTQUFHLEVBQUVGLEtBQS9JO0FBQXNKWixhQUFPLEVBQUVTLEtBQUssQ0FBQ00sVUFBTixLQUFxQjNCLEtBQUssQ0FBQ0E7QUFBMUwsS0FBbEMsRUFBcU9BLEtBQUssQ0FBQzRCLEtBQTNPLENBQVI7QUFDSCxHQUpDLENBRHFHLEdBTXJHLEVBTkUsQ0FBUjtBQU9ILENBUkQ7O0FBU0FSLGlCQUFpQixDQUFDRSxNQUFsQixHQUEyQixFQUEzQixDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2VGLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFDQSxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDUixLQUFELEVBQVc7QUFDNUIsc0JBQVFMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JHLDBEQUFwQixFQUF1QztBQUFFVixhQUFTLEVBQUVXLEtBQUssQ0FBQ1gsU0FBbkI7QUFBOEJ0QyxRQUFJLEVBQUVpRCxLQUFLLENBQUNqRCxJQUFOLEdBQWFpRCxLQUFLLENBQUNqRCxJQUFuQixHQUEwQixRQUE5RDtBQUF3RWtELFVBQU0sRUFBRUQsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0MsTUFBckIsR0FBOEJPLFlBQVksQ0FBQ1AsTUFBM0g7QUFDM0M7QUFDQUssY0FBVSxFQUFFTixLQUFLLENBQUNNLFVBRnlCO0FBRWJkLFlBQVEsRUFBRVEsS0FBSyxDQUFDUjtBQUZILEdBQXZDLENBQVI7QUFHSCxDQUpEOztBQUtBZ0IsWUFBWSxDQUFDUCxNQUFiLEdBQXNCLENBQ2xCO0FBQUVNLE9BQUssRUFBRSxLQUFUO0FBQWdCNUIsT0FBSyxFQUFFO0FBQXZCLENBRGtCLEVBRWxCO0FBQUU0QixPQUFLLEVBQUUsS0FBVDtBQUFnQjVCLE9BQUssRUFBRTtBQUF2QixDQUZrQixDQUF0QjtBQUllNkIsMkVBQWYsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRGV0YWlsT2ZJdGVtIH0gZnJvbSAnLi9EZXRhaWxPZkl0ZW0nO1xuaW1wb3J0IENhcnMgZnJvbSAnLi9DYXJzJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IEdlbmRlclNlbGVjdCBmcm9tICcuL3BhcnRzL0dlbmRlclNlbGVjdCc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4vbGliL1Rvb2x0aXAnO1xuXG5jb25zdCBFTVBUWV9JVEVNX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcblxuY29uc3QgRU1QVFlfSVRFTSA9IHtcbiAgaWQ6IEVNUFRZX0lURU1fSUQsIC8vIGluZGljYXRlIG5ldyBvd25lciwgLTEgbWVhbnMgdW5kZWZpbmVkIG93bmVyXG4gIGNhcnM6IFtdLFxuICBuYW1lOiAnJyxcbiAgcGF0cm9ueW1pYzogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGdlbmRlcjogJ2YnLFxuICBhZ2U6IDAsXG4gIGNvbW1lbnQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuXG4gIGdldE5ld0l0ZW0oKSB7XG4gICAgcmV0dXJuIEVNUFRZX0lURU07XG4gIH1cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiBFTVBUWV9JVEVNX0lEO1xuICB9XG5cbiAgYnRuTmV3Q2FyQ2xpY2sgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIGJ0bl9hZGQ6ICcnLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgb3duZXJfcGs6IHRoaXMuc3RhdGUuaXRlbS5pZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjaGFuZ2VHZW5kZXIgPSBlID0+IHtcbiAgICBjb25zdCBpdGVtID0geyAuLi50aGlzLnN0YXRlLml0ZW0sIGdlbmRlcjogZS50YXJnZXQudmFsdWUgfTtcbiAgICAvL2NvbnNvbGUubG9nKCdjaGFuZ2VHZW5kZXInLCBpdGVtKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT7QkNCy0YLQvtCy0LvQsNC00LXQu9C10YY8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX293bmVyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9ob3JpelwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9vd25lci1pbnB1dFwiPtCY0LzRjzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9vd25lci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLm5hbWUgPyB0aGlzLnN0YXRlLml0ZW0ubmFtZSA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfb3duZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICDQntGC0YfQtdGB0YLQstC+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9vd25lci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLnBhdHJvbnltaWMgPyB0aGlzLnN0YXRlLml0ZW0ucGF0cm9ueW1pYyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX293bmVyLWlucHV0XCI+0KTQsNC80LjQu9C40Y88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfb3duZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmxhc3RfbmFtZSA/IHRoaXMuc3RhdGUuaXRlbS5sYXN0X25hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfb3duZXItaW5wdXRcIiBuYW1lPVwiZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAg0J/QvtC7XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEdlbmRlclNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZUJ1dHRvbkdyb3VwIHRvZ2dsZUJ1dHRvbkdyb3VwX293bmVyLWdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlPXt0aGlzLnN0YXRlLml0ZW0uZ2VuZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX293bmVyLWlucHV0XCIgbmFtZT1cImFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgINCS0L7Qt9GA0LDRgdGCXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9vd25lci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQvtC30YDQsNGB0YJcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0uYWdlID8gdGhpcy5zdGF0ZS5pdGVtLmFnZSA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaWdpdHNPbmx5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9vd25lci1jb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJmb3JtX19sYWJlbCBmb3JtX19sYWJlbF9vd25lci1jb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgINCa0L7QvNC80LXQvdGC0LDRgNC40LlcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbW1lbnQgPyB0aGlzLnN0YXRlLml0ZW0uY29tbWVudCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC80LzQtdC90YLQsNGA0LjQuVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9vd25lci1zYXZlIHRvb2x0aXBcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZUl0ZW19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUb29sdGlwQ29udGVudD7QodC+0YXRgNCw0L3QuNGC0YwmbmJzcDvQuNC90YTQvtGA0LzQsNGG0LjRjiZuYnNwO9C+0LEmbmJzcDvQsNCy0YLQvtCy0LvQsNC00LXQu9GM0YbQtTwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QvNC+0LHQuNC70Lg8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9vd25lci1hZGQtY2FyIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRfY2FyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJ0bk5ld0NhckNsaWNrfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLml0ZW0uaWQgPCAwID8gJ2Rpc2FibGVkJyA6ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50PtCU0L7QsdCw0LLQuNGC0YwmbmJzcDvQsNCy0YLQvtC80L7QsdC40LvRjDwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxDYXJzIG93bmVyPXt0aGlzLnN0YXRlLml0ZW0uaWR9IC8+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9nZ2xlQnV0dG9uID0gKHsgY2hpbGRyZW4sIG5hbWUsIHZhbHVlLCBjbGFzc05hbWUsIGlucHV0Q2xhc3NOYW1lLCBjaGVja2VkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgY2xOYW1lID0gW2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b2dnbGVCdXR0b25Hcm91cF9fbGFiZWwnXTtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICBjbE5hbWUucHVzaCgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBjbE5hbWUuam9pbignICcpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogaW5wdXRDbGFzc05hbWUgPyBpbnB1dENsYXNzTmFtZSA6ICd0b2dnbGVCdXR0b25Hcm91cF9faW5wdXQnLCB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBjaGVja2VkOiBjaGVja2VkIH0pLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbi8vIHZhbHVlcyBpbiBmb3JtIG9mIFt7bGFiZWw6ICdsYWJlbCcsIHZhbHVlOiB2YWx1ZX0sIC4uLl1cbmNvbnN0IFRvZ2dsZUJ1dHRvbkdyb3VwID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAndG9nZ2xlQnV0dG9uR3JvdXAnIH0sIHByb3BzLnZhbHVlc1xuICAgICAgICA/IHByb3BzLnZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zdCBjaGVja2VkID0gcHJvcHMuY2hlY2tWYWx1ZSA9PT0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdUb2dnbGVCdXR0b25Hcm91cCcsIHByb3BzLmNoZWNrVmFsdWUsIHZhbHVlLnZhbHVlLCBjaGVja2VkKTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUb2dnbGVCdXR0b24sIHsgdmFsdWU6IHZhbHVlLnZhbHVlLCBuYW1lOiBwcm9wcy5uYW1lLCBjbGFzc05hbWU6IHByb3BzLmJ1dHRvbkNsYXNzTmFtZSwgaW5wdXRDbGFzc05hbWU6IHByb3BzLmlucHV0Q2xhc3NOYW1lLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIGtleTogaW5kZXgsIGNoZWNrZWQ6IHByb3BzLmNoZWNrVmFsdWUgPT09IHZhbHVlLnZhbHVlIH0sIHZhbHVlLmxhYmVsKSk7XG4gICAgICAgIH0pXG4gICAgICAgIDogJycpKTtcbn07XG5Ub2dnbGVCdXR0b25Hcm91cC52YWx1ZXMgPSBbXTtcbi8vIFRvZ2dsZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4vLyAgIGNsYXNzTmFtZTogJ3RvZ2dsZUJ1dHRvbkdyb3VwX19pbnB1dCcsXG4vLyAgIHZhbHVlOiAnb24nLFxuLy8gfTtcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUJ1dHRvbkdyb3VwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICcuLi9saWIvVG9nZ2xlQnV0dG9ucyc7XG5jb25zdCBHZW5kZXJTZWxlY3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQnV0dG9uR3JvdXAsIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsIG5hbWU6IHByb3BzLm5hbWUgPyBwcm9wcy5uYW1lIDogJ2dlbmRlcicsIHZhbHVlczogcHJvcHMudmFsdWVzID8gcHJvcHMudmFsdWVzIDogR2VuZGVyU2VsZWN0LnZhbHVlcywgXG4gICAgICAgIC8vdHlwZT1cInJhZGlvXCJcbiAgICAgICAgY2hlY2tWYWx1ZTogcHJvcHMuY2hlY2tWYWx1ZSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKTtcbn07XG5HZW5kZXJTZWxlY3QudmFsdWVzID0gW1xuICAgIHsgbGFiZWw6ICfQnNGD0LYnLCB2YWx1ZTogJ20nIH0sXG4gICAgeyBsYWJlbDogJ9CW0LXQvScsIHZhbHVlOiAnZicgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBHZW5kZXJTZWxlY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9