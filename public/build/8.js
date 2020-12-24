(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4"
      }, "\u0418\u043C\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control col-6",
        name: "name",
        type: "text",
        value: this.state.item.name ? this.state.item.name : '',
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control col-6",
        name: "patronymic",
        type: "text",
        value: this.state.item.patronymic ? this.state.item.patronymic : '',
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4"
      }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control col-6",
        name: "last_name",
        type: "text",
        value: this.state.item.last_name ? this.state.item.last_name : '',
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4",
        name: "gender"
      }, "\u041F\u043E\u043B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
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
      }, "\u0416\u0435\u043D\u0441\u043A\u0438\u0439"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4",
        name: "age"
      }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control col-6",
        name: "age",
        type: "text",
        maxLength: "3",
        value: this.state.item.age ? this.state.item.age : '',
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-4"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
        as: "textarea",
        rows: "6",
        value: this.state.item.comment ? this.state.item.comment : '',
        name: "comment",
        onChange: this.changeItem
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["OverlayTrigger"], {
        key: 1,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          id: "tooltip-1"
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        variant: "primary",
        className: "col",
        onClick: this.saveItem
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["OverlayTrigger"], {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          id: "tooltip-2"
        }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvT3duZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiRGV0YWlsT2ZJdGVtIiwibWVzc2FnZXMiLCJpdGVtIiwiZ2V0TmV3SXRlbSIsImUiLCJjaGFyQ29kZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ0eXBlIiwibWVzc2FnZSIsImF4aW9zIiwicG9zdCIsInVybCIsInRoZW4iLCJyZXMiLCJyZWRpcmVjdCIsInNldFN0YXRlIiwiZ2V0SXRlbUZyb21EYXRhIiwiZXJyIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGF0ZSIsImdldENoYW5nZWRJdGVtIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0SXRlbSIsImlkIiwiQ29tcG9uZW50IiwiRU1QVFlfSVRFTV9JRCIsIkVNUFRZX0lURU0iLCJjYXJzIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNvbW1lbnQiLCJPd25lckRldGFpbCIsImJ0bl9hZGQiLCJwYXRobmFtZSIsIm93bmVyX3BrIiwiY2xlYXJNZXNzYWdlcyIsImNoYW5nZUl0ZW0iLCJjaGFuZ2VHZW5kZXIiLCJkaWdpdHNPbmx5IiwidG9vbHRpcFBsYWNlIiwic2F2ZUl0ZW0iLCJidG5OZXdDYXJDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSw0REFNVTtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxVQUFJLEVB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LDJEQUFDLDZDQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBVzFCLElBQVgsQ0FBZ0JnQyxFQUR6QixDQUVFO0FBQ0E7QUFDQTs7QUFKRixRQURGLENBREYsQ0F6QkYsQ0F4SEYsQ0FERjtBQStKRDs7OztFQWxNc0NsQywwRCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxPZkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXROZXdJdGVtKCkge31cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBpdGVtOiB0aGlzLmdldE5ld0l0ZW0oKSxcbiAgfTtcblxuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuICB0b29sdGlwUGxhY2UgPSAnYm90dG9tJztcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW0oKTtcbiAgfVxuXG4gIGRpZ2l0c09ubHkgPSBlID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGdldEVycm9ycyA9IGRhdGEgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ2dldEVycm9ycycsIGRhdGEpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbUZyb21EYXRhKGRhdGEpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YS5pZCA/IGRhdGEgOiB0aGlzLmdldE5ld0l0ZW0oKTtcbiAgfVxuXG4gIGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7fSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZWRpcmVjdCA9IHJlZGlyZWN0ID0+IHtcbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgfVxuICB9O1xuXG4gIHNhdmVJdGVtID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgdGhpcy5zdGF0ZS5pdGVtKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCByZXMuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBnZXRDaGFuZ2VkSXRlbShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLml0ZW0sXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGFuZ2VJdGVtID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gIENhcmQsXG4gIFJvdyxcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBDb2wsXG4gIFRvb2x0aXAsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb2dnbGVCdXR0b24sXG4gIFRvZ2dsZUJ1dHRvbkdyb3VwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRGV0YWlsT2ZJdGVtIH0gZnJvbSAnLi9EZXRhaWxPZkl0ZW0nO1xuaW1wb3J0IENhcnMgZnJvbSAnLi9DYXJzJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuXG5jb25zdCBFTVBUWV9JVEVNX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcblxuY29uc3QgRU1QVFlfSVRFTSA9IHtcbiAgaWQ6IEVNUFRZX0lURU1fSUQsIC8vIGluZGljYXRlIG5ldyBvd25lciwgLTEgbWVhbnMgdW5kZWZpbmVkIG93bmVyXG4gIGNhcnM6IFtdLFxuICBuYW1lOiAnJyxcbiAgcGF0cm9ueW1pYzogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGdlbmRlcjogJ2YnLFxuICBhZ2U6IDAsXG4gIGNvbW1lbnQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJEZXRhaWwgZXh0ZW5kcyBEZXRhaWxPZkl0ZW0ge1xuICB1cmwgPSAnL2FwaS9vd25lci8nO1xuXG4gIGdldE5ld0l0ZW0oKSB7XG4gICAgcmV0dXJuIEVNUFRZX0lURU07XG4gIH1cbiAgZ2V0TmV3SXRlbUlkKCkge1xuICAgIHJldHVybiBFTVBUWV9JVEVNX0lEO1xuICB9XG5cbiAgYnRuTmV3Q2FyQ2xpY2sgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIGJ0bl9hZGQ6ICcnLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgb3duZXJfcGs6IHRoaXMuc3RhdGUuaXRlbS5pZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjaGFuZ2VHZW5kZXIgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHsgLi4udGhpcy5zdGF0ZS5pdGVtLCBnZW5kZXI6IHZhbHVlIH07XG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlR2VuZGVyJywgaXRlbSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHNcbiAgICAgICAgICBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc31cbiAgICAgICAgICBjbGVhck1lc3NhZ2VzPXt0aGlzLmNsZWFyTWVzc2FnZXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLlRpdGxlPtCQ0LLRgtC+0LLQu9Cw0LTQtdC70LXRhjwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCY0LzRjzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5uYW1lID8gdGhpcy5zdGF0ZS5pdGVtLm5hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCe0YLRh9C10YHRgtCy0L48L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLml0ZW0ucGF0cm9ueW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLml0ZW0ucGF0cm9ueW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIj7QpNCw0LzQuNC70LjRjzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtLmxhc3RfbmFtZSA/IHRoaXMuc3RhdGUuaXRlbS5sYXN0X25hbWUgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiIG5hbWU9XCJnZW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtC7XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbC02IHAtMCBtLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIG0tMCBwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5nZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlR2VuZGVyfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTYgbS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J20nfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgINCc0YPQttGB0LrQvtC5XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTYgbS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J2YnfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgINCW0LXQvdGB0LrQuNC5XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCIgbmFtZT1cImFnZVwiPlxuICAgICAgICAgICAgICAgICAgICDQktC+0LfRgNCw0YHRglxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmFnZSA/IHRoaXMuc3RhdGUuaXRlbS5hZ2UgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaWdpdHNPbmx5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbW1lbnQgPyB0aGlzLnN0YXRlLml0ZW0uY29tbWVudCA6ICcnfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2B0b29sdGlwLTFgfT5cbiAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L7QsSDQsNCy0YLQvtCy0LvQsNC00LXQu9GM0YbQtVxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT7QkNCy0YLQvtC80L7QsdC40LvQuDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNwYWNlclwiPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfVxuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgdG9vbHRpcC0yYH0+0JTQvtCx0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZF9jYXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJ0bk5ld0NhckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pdGVtLmlkIDwgMCA/ICdkaXNhYmxlZCcgOiAnJ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPENhcnNcbiAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5zdGF0ZS5pdGVtLmlkfVxuICAgICAgICAgICAgICAgIC8vIHdpdGhCdXR0b25zPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8vIHdpdGhPd25lckluZm89e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8vIHdpdGhTZWFyY2g9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=