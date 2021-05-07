(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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
      //console.log('getErrors', data);
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
      //console.log('saveItem', this.state.item);
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
        item: _this.getChangedItem(e.target.name, e.target.value)
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
      //console.log('getItemFromData', data);
      return data.id ? data : this.getNewItem();
    }
  }, {
    key: "getChangedItem",
    value: function getChangedItem(name, value) {
      var item = _objectSpread(_objectSpread({}, this.state.item), {}, _defineProperty({}, name, value));

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

/***/ }),

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/DetailOfItem.js");
/* harmony import */ var _Cars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Cars */ "./assets/components/Cars.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
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

    _defineProperty(_assertThisInitialized(_this), "changeGender", function (value) {
      var item = _objectSpread(_objectSpread({}, _this.state.item), {}, {
        gender: value
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_10__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Title, null, "\u0410\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_owner-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u0418\u043C\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "name",
        type: "text",
        value: this.state.item.name ? this.state.item.name : '',
        placeholder: "\u0418\u043C\u044F",
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "patronymic",
        type: "text",
        value: this.state.item.patronymic ? this.state.item.patronymic : '',
        placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "form__label form__label_owner-input"
      }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "last_name",
        type: "text",
        placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        value: this.state.item.last_name ? this.state.item.last_name : '',
        onChange: this.changeItem
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "form__label form__label_owner-input",
        name: "gender"
      }, "\u041F\u043E\u043B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "col-6 p-0 m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ToggleButtonGroup"], {
        className: "col-12 m-0 p-0",
        name: "gender",
        type: "radio",
        value: this.state.item.gender,
        onChange: this.changeGender
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ToggleButton"], {
        className: "col-6 m-0",
        variant: "outline-primary",
        block: true,
        value: 'm'
      }, "\u041C\u0443\u0436\u0441\u043A\u043E\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ToggleButton"], {
        className: "col-6 m-0",
        variant: "outline-primary",
        block: true,
        value: 'f'
      }, "\u0416\u0435\u043D\u0441\u043A\u0438\u0439")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "form__label form__label_owner-input",
        name: "age"
      }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
        className: "form__control form__control_owner-input",
        name: "age",
        type: "text",
        maxLength: "3",
        placeholder: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
        value: this.state.item.age ? this.state.item.age : '',
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
        className: "form__group form__group_owner-comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Label, {
        className: "col-4"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
        type: "textarea",
        rows: "6",
        value: this.state.item.comment ? this.state.item.comment : '',
        name: "comment",
        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        onChange: this.changeItem
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["OverlayTrigger"], {
        key: 1,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          id: "tooltip-1"
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "primary",
        onClick: this.saveItem
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["OverlayTrigger"], {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          id: "tooltip-2"
        }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "primary",
        className: "col",
        name: "add_car",
        onClick: this.btnNewCarClick,
        disabled: this.state.item.id < 0 ? 'disabled' : ''
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Cars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        owner: this.state.item.id // withButtons={true}
        // withOwnerInfo={false}
        // withSearch={false}

      })))));
    }
  }]);

  return OwnerDetail;
}(_DetailOfItem__WEBPACK_IMPORTED_MODULE_8__["DetailOfItem"]);



/***/ }),

/***/ "./assets/components/lib/Card.tsx":
/*!****************************************!*\
  !*** ./assets/components/lib/Card.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__header'
  }, children);
};

var CardTitle = function CardTitle(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__title'
  }, children);
};

var CardBody = function CardBody(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__body'
  }, children);
};

var CardFooter = function CardFooter(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__footer'
  }, children);
};

var Card = function Card(_ref5) {
  var children = _ref5.children,
      className = _ref5.className;
  // let Body: typeof CardBody;
  // let Footer: typeof CardFooter;
  return (
    /*#__PURE__*/
    // {
    //   Header: CardHeader,
    //   Title: CardTitle,
    //   Body: CardBody,
    //   Footer: CardFooter
    // }
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className ? className : 'card'
    }, children)
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./assets/components/lib/Form.tsx":
/*!****************************************!*\
  !*** ./assets/components/lib/Form.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className ? className : 'form__label'
  }, children);
};

var FormGroup = function FormGroup(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className ? className : 'form__group'
  }, children);
};

var FormControl = function FormControl(props) {
  var type = 'text';
  if (props.type) type = props.type;

  switch (type) {
    case 'text':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: props.className ? props.className : 'form__control',
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange,
        onClick: props.onClick
      });

    case 'textarea':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        className: props.className ? props.className : 'form__control',
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        rows: props.rows ? +props.rows : undefined,
        onChange: props.onChange,
        onClick: props.onClick
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  }
};

var Form = function Form(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className ? className : 'form'
  }, children);
};

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvT3duZXJEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxPZkl0ZW0iLCJtZXNzYWdlcyIsIml0ZW0iLCJnZXROZXdJdGVtIiwiZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInR5cGUiLCJtZXNzYWdlIiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInJlZGlyZWN0Iiwic2V0U3RhdGUiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXRlIiwiZ2V0Q2hhbmdlZEl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJnZXRJdGVtIiwiaWQiLCJDb21wb25lbnQiLCJFTVBUWV9JVEVNX0lEIiwiRU1QVFlfSVRFTSIsImNhcnMiLCJwYXRyb255bWljIiwibGFzdF9uYW1lIiwiZ2VuZGVyIiwiYWdlIiwiY29tbWVudCIsIk93bmVyRGV0YWlsIiwiYnRuX2FkZCIsInBhdGhuYW1lIiwib3duZXJfcGsiLCJjbGVhck1lc3NhZ2VzIiwiY2hhbmdlSXRlbSIsImNoYW5nZUdlbmRlciIsImRpZ2l0c09ubHkiLCJ0b29sdGlwUGxhY2UiLCJzYXZlSXRlbSIsImJ0bk5ld0NhckNsaWNrIiwiQ2FyZEhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZCIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiLCJUaXRsZSIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwicHJvcHMiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwib25DbGljayIsInJvd3MiLCJGcmFnbWVudCIsIkZvcm0iLCJMYWJlbCIsIkNvbnRyb2wiLCJHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSw0REFNVTtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxVQUFJLEVBQUUsTUFBS0MsVUFBTDtBQUZBLEtBTlY7O0FBQUEsMERBV1EsYUFYUjs7QUFBQSxtRUFZaUIsUUFaakI7O0FBQUEsaUVBa0JlLFVBQUFDLENBQUMsRUFBSTtBQUNoQixVQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0MsUUFBakIsQ0FEZ0IsQ0FFaEI7O0FBQ0EsVUFBSUEsUUFBUSxHQUFHLEVBQVgsSUFBaUJBLFFBQVEsR0FBRyxFQUFoQyxFQUFvQztBQUNsQztBQUNBRCxTQUFDLENBQUNFLGNBQUY7QUFDRDtBQUNGLEtBekJIOztBQUFBLGdFQTJCYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEI7QUFFQSxhQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsSUFBWixFQUFrQkcsR0FBbEIsQ0FBc0IsVUFBQUMsR0FBRyxFQUFJO0FBQ2xDLGVBQU87QUFBRUMsY0FBSSxFQUFFLE9BQVI7QUFBaUJDLGlCQUFPLEVBQUVOLElBQUksQ0FBQ0ksR0FBRDtBQUE5QixTQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FqQ0g7O0FBQUEsOERBd0NZLFlBQU07QUFDZEcsa0RBQUssQ0FDRkMsSUFESCxDQUNRLE1BQUtDLEdBRGIsRUFDa0Is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RTFCLFlBQUksRUFBRXdDLEtBQUssQ0FBQ3hDLElBQTlFO0FBQW9GQyxhQUFLLEVBQUV1QyxLQUFLLENBQUN2QyxLQUFqRztBQUF3R3dDLG1CQUFXLEVBQUVELEtBQUssQ0FBQ0MsV0FBM0g7QUFBd0lDLGlCQUFTLEVBQUVGLEtBQUssQ0FBQ0UsU0FBTixHQUFrQixDQUFDRixLQUFLLENBQUNFLFNBQXpCLEdBQXFDQyxTQUF4TDtBQUFtTUcsWUFBSSxFQUFFTixLQUFLLENBQUNNLElBQU4sR0FBYSxDQUFDTixLQUFLLENBQUNNLElBQXBCLEdBQTJCSCxTQUFwTztBQUErT0MsZ0JBQVEsRUFBRUosS0FBSyxDQUFDSSxRQUEvUDtBQUF5UUMsZUFBTyxFQUFFTCxLQUFLLENBQUNLO0FBQXhSLE9BQWhDLENBQVI7O0FBQ0o7QUFDSSwwQkFBT2xCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNvQixRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBTlI7QUFRSCxDQVpEOztBQWFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQTZCO0FBQUEsTUFBMUJ2QixRQUEwQixTQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQ3RDLHNCQUFPQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVGLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBMEVELFFBQTFFLENBQVA7QUFDSCxDQUZEOztBQUdBdUIsSUFBSSxDQUFDQyxLQUFMLEdBQWFaLFNBQWI7QUFDQVcsSUFBSSxDQUFDRSxPQUFMLEdBQWVYLFdBQWY7QUFDQVMsSUFBSSxDQUFDRyxLQUFMLEdBQWFiLFNBQWI7QUFDZVUsbUVBQWYsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxPZkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXROZXdJdGVtKCkge31cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBpdGVtOiB0aGlzLmdldE5ld0l0ZW0oKSxcbiAgfTtcblxuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuICB0b29sdGlwUGxhY2UgPSAnYm90dG9tJztcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW0oKTtcbiAgfVxuXG4gIGRpZ2l0c09ubHkgPSBlID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGdldEVycm9ycyA9IGRhdGEgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ2dldEVycm9ycycsIGRhdGEpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbUZyb21EYXRhKGRhdGEpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YS5pZCA/IGRhdGEgOiB0aGlzLmdldE5ld0l0ZW0oKTtcbiAgfVxuXG4gIGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7fSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZWRpcmVjdCA9IHJlZGlyZWN0ID0+IHtcbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgfVxuICB9O1xuXG4gIHNhdmVJdGVtID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgdGhpcy5zdGF0ZS5pdGVtKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCByZXMuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBnZXRDaGFuZ2VkSXRlbShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLml0ZW0sXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGFuZ2VJdGVtID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvbCwgVG9vbHRpcCwgT3ZlcmxheVRyaWdnZXIsIFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRGV0YWlsT2ZJdGVtIH0gZnJvbSAnLi9EZXRhaWxPZkl0ZW0nO1xuaW1wb3J0IENhcnMgZnJvbSAnLi9DYXJzJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuXG5jb25zdCBFTVBUWV9JVEVNX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcblxuY29uc3QgRU1QVFlfSVRFTSA9IHtcbiAgaWQ6IEVNUFRZX0lURU1fSUQsIC8vIGluZGljYXRlIG5ldyBvd25lciwgLTEgbWVhbnMgdW5kZWZpbmVkIG93bmVyXG4gIGNhcnM6IFtdLFxuICBuYW1lOiAnJyxcbiAgcGF0cm9ueW1pYzogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGdlbmRlcjogJ2YnLFxuICBhZ2U6IDAsXG4gIGNvbW1lbnQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuXG4gIGdldE5ld0l0ZW0oKSB7XG4gICAgcmV0dXJuIEVNUFRZX0lURU07XG4gIH1cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiBFTVBUWV9JVEVNX0lEO1xuICB9XG5cbiAgYnRuTmV3Q2FyQ2xpY2sgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIGJ0bl9hZGQ6ICcnLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgb3duZXJfcGs6IHRoaXMuc3RhdGUuaXRlbS5pZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjaGFuZ2VHZW5kZXIgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHsgLi4udGhpcy5zdGF0ZS5pdGVtLCBnZW5kZXI6IHZhbHVlIH07XG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlR2VuZGVyJywgaXRlbSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IGNsZWFyTWVzc2FnZXM9e3RoaXMuY2xlYXJNZXNzYWdlc30gLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QstC70LDQtNC10LvQtdGGPC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmb3JtX19ncm91cF9vd25lci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfb3duZXItaW5wdXRcIj7QmNC80Y88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfb3duZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5uYW1lID8gdGhpcy5zdGF0ZS5pdGVtLm5hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX293bmVyLWlucHV0XCI+0J7RgtGH0LXRgdGC0LLQvjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbF9vd25lci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLnBhdHJvbnltaWMgPyB0aGlzLnN0YXRlLml0ZW0ucGF0cm9ueW1pYyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX2hvcml6XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsIGZvcm1fX2xhYmVsX293bmVyLWlucHV0XCI+0KTQsNC80LjQu9C40Y88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2xfb3duZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmxhc3RfbmFtZSA/IHRoaXMuc3RhdGUuaXRlbS5sYXN0X25hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfb3duZXItaW5wdXRcIiBuYW1lPVwiZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAg0J/QvtC7XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJjb2wtNiBwLTAgbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgbS0wIHAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIGNsYXNzTmFtZT1cImNvbC02IG0tMFwiIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBibG9jaz17dHJ1ZX0gdmFsdWU9eydtJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgINCc0YPQttGB0LrQvtC5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b24gY2xhc3NOYW1lPVwiY29sLTYgbS0wXCIgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIGJsb2NrPXt0cnVlfSB2YWx1ZT17J2YnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg0JbQtdC90YHQutC40LlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWxfb3duZXItaW5wdXRcIiBuYW1lPVwiYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAg0JLQvtC30YDQsNGB0YJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sX293bmVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktC+0LfRgNCw0YHRglwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5hZ2UgPyB0aGlzLnN0YXRlLml0ZW0uYWdlIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpZ2l0c09ubHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZvcm1fX2dyb3VwX293bmVyLWNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbW1lbnQgPyB0aGlzLnN0YXRlLml0ZW0uY29tbWVudCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC80LzQtdC90YLQsNGA0LjQuVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PXt0aGlzLnRvb2x0aXBQbGFjZX1cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPXtgdG9vbHRpcC0xYH0+0KHQvtGF0YDQsNC90LjRgtGMINC40L3RhNC+0YDQvNCw0YbQuNGOINC+0LEg0LDQstGC0L7QstC70LDQtNC10LvRjNGG0LU8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNhdmVJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLlRpdGxlPtCQ0LLRgtC+0LzQvtCx0LjQu9C4PC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwic3BhY2VyXCI+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXIga2V5PXsyfSBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfSBvdmVybGF5PXs8VG9vbHRpcCBpZD17YHRvb2x0aXAtMmB9PtCU0L7QsdCw0LLQuNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70Yw8L1Rvb2x0aXA+fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkX2NhclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuTmV3Q2FyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLml0ZW0uaWQgPCAwID8gJ2Rpc2FibGVkJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8Q2Fyc1xuICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnN0YXRlLml0ZW0uaWR9XG4gICAgICAgICAgICAgICAgLy8gd2l0aEJ1dHRvbnM9e3RydWV9XG4gICAgICAgICAgICAgICAgLy8gd2l0aE93bmVySW5mbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgLy8gd2l0aFNlYXJjaD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICAvLyBsZXQgQm9keTogdHlwZW9mIENhcmRCb2R5O1xuICAgIC8vIGxldCBGb290ZXI6IHR5cGVvZiBDYXJkRm9vdGVyO1xuICAgIHJldHVybiAoXG4gICAgLy8ge1xuICAgIC8vICAgSGVhZGVyOiBDYXJkSGVhZGVyLFxuICAgIC8vICAgVGl0bGU6IENhcmRUaXRsZSxcbiAgICAvLyAgIEJvZHk6IENhcmRCb2R5LFxuICAgIC8vICAgRm9vdGVyOiBDYXJkRm9vdGVyXG4gICAgLy8gfVxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbikpO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdmb3JtX19sYWJlbCcgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnZm9ybV9fZ3JvdXAnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IHByb3BzID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICdmb3JtX19jb250cm9sJywgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrIH0pKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICdmb3JtX19jb250cm9sJywgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2sgfSkpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdmb3JtJyB9LCBjaGlsZHJlbik7XG59O1xuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9