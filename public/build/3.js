(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/components/DeleteDialog.tsx":
/*!********************************************!*\
  !*** ./assets/components/DeleteDialog.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteDialog; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/Modal */ "./assets/components/lib/Modal.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
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





var DeleteDialog = /*#__PURE__*/function (_Component) {
  _inherits(DeleteDialog, _Component);

  var _super = _createSuper(DeleteDialog);

  function DeleteDialog() {
    var _this;

    _classCallCheck(this, DeleteDialog);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        if (e) _this.props.itemDelete(e.target.value);
        return _this.props.itemDelete(false);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "nameOfItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(item) {
        return '';
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItemInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.props.params.itemDelete) {
          return _this.itemInfo(_this.props.params.itemDelete);
        }

        return '';
      }
    });
    return _this;
  }

  _createClass(DeleteDialog, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        baseClassName: "delete-dialog",
        show: this.props.show,
        onHide: this.handleClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
        closeButton: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Title, null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ", this.nameOfItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, this.getItemInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btn-secondary",
        value: false,
        onClick: this.handleClose
      }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btn-danger",
        value: true,
        onClick: this.handleClose
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
    }
  }]);

  return DeleteDialog;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./assets/components/ListOfItems.tsx":
/*!*******************************************!*\
  !*** ./assets/components/ListOfItems.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListOfItems; });
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Loader */ "./assets/components/Loader.tsx");
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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};










var ListOfItems = /*#__PURE__*/function (_Component) {
  _inherits(ListOfItems, _Component);

  var _super = _createSuper(ListOfItems);

  function ListOfItems() {
    var _this;

    _classCallCheck(this, ListOfItems);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        loading: false,
        messages: [],
        showDeleteDialog: false,
        itemDelete: undefined,
        items: [],
        sortedBy: _this.getDefaultSortedBy()
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "url", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    }); //upArrow = '&#x0225C;';

    Object.defineProperty(_assertThisInitialized(_this), "upArrow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "\u2191"
    }); //downArrow = '&#x0225C;';

    Object.defineProperty(_assertThisInitialized(_this), "downArrow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "\u2193"
    });
    Object.defineProperty(_assertThisInitialized(_this), "nameOfItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ''
    });
    Object.defineProperty(_assertThisInitialized(_this), "addButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_assertThisInitialized(_this), "getKeyValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(obj, key) {
        return obj[key];
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getErrors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(data) {
        return Object.keys(data).map(function (key) {
          return {
            type: 'error',
            message: _this.getKeyValue(data, key)
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res, state;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.setState({
                    loading: true
                  }); //console.log('getItems owner', this.props.owner);

                  _context.prev = 1;
                  _context.next = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(this.url, {
                    sorted_by: this.state.sortedBy,
                    owner: this.props.owner ? this.props.owner : -1
                  });

                case 4:
                  res = _context.sent;
                  state = {
                    items: res.data
                  }; //console.log("getItems state", state);

                  this.setState(state);
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](1);
                  this.context.setAlerts(this.getErrors(_context.t0.response.data));

                case 12:
                  _context.prev = 12;
                  this.setState({
                    loading: false
                  });
                  return _context.finish(12);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 9, 12, 15]]);
        }));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id) {
        return _this.state.items.filter(function (item) {
          return +item.id === +id;
        })[0];
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnSortClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var sorted_name = e.target.id; //console.log('btnSortClick.sorted_name', sorted_name);

        if (!sorted_name) return;

        if (_this.state.sortedBy.name !== sorted_name) {
          var sortedBy = {
            name: sorted_name,
            direction: 'desc'
          };

          _this.setState({
            sortedBy: sortedBy
          });
        } else {
          var direction = _this.state.sortedBy.direction === 'desc' ? 'asc' : 'desc';

          var _sortedBy = Object.assign(Object.assign({}, _this.state.sortedBy), {
            direction: direction
          });

          _this.setState({
            sortedBy: _sortedBy
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnDelClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var item = _this.getItem(Number(e.target.value));

        _this.setState({
          showDeleteDialog: true,
          itemDelete: item
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnAddClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
          btn_add: ''
        }).then(function (res) {
          if (res.data.redirect) {
            //window.location.href = res.data['redirect'];
            _this.props.history.push(res.data.redirect);
          }
        })["catch"](function (err) {
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "btnEditClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var item_pk = e.target.value; //console.log('btnEditClick', item_pk);

        axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
          btn_edit: '',
          item_pk: item_pk,
          url: window.location.pathname
        }).then(function (res) {
          if (res.data.redirect) {
            //console.log('btnEditClick.history', this.props);
            //window.location.href = res.data['redirect'];
            _this.props.history.push(res.data.redirect);
          }
        })["catch"](function (err) {
          //console.log('btnEditClick.catch', err);
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItemId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(item) {
        return item ? item.id : -1;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemDelete", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(confirm) {
        _this.setState({
          showDeleteDialog: false
        });

        if (confirm === 'true') {
          _this.setState({
            loading: true
          });

          axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(_this.url, {
            sorted_by: _this.state.sortedBy,
            btn_del: '',
            item_pk: _this.getItemId(_this.state.itemDelete),
            owner: _this.props.owner ? _this.props.owner : -1
          }).then(function (res) {
            _this.setState({
              items: res.data,
              messages: [{
                type: 'success',
                message: "".concat(_this.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
              }]
            });
          })["catch"](function (err) {
            _this.setState({
              messages: _this.getErrors(err.response.data)
            });
          })["finally"](function () {
            return _this.setState({
              loading: false
            });
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: []
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getThCell", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id, title, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("th", {
          className: "tooltip",
          id: id,
          onClick: _this.btnSortClick,
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], {
          id: id,
          className: "sorted-row"
        }, _this.state.sortedBy.name === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
          id: id
        }, _this.arrow), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
          id: id,
          className: "sorted-row__text"
        }, title)));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_18__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          value: id,
          variant: "primary",
          className: "btn-primary tooltip",
          onClick: _this.btnEditClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], {
          className: "tooltip__content tooltip__content_left"
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          value: id,
          variant: "danger",
          className: "btn-danger btn-danger_del tooltip",
          onClick: _this.btnDelClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], {
          className: "tooltip__content tooltip__content_left"
        }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getAddButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          variant: "primary",
          className: "btn-primary btn-primary_add tooltip",
          onClick: _this.btnAddClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDeleteDialog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {}
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteDialog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        //if (this.state.showDeleteDialog) return this.getDeleteDialog();
        return _this.getDeleteDialog();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {}
    });
    return _this;
  }

  _createClass(ListOfItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "getDefaultSortedBy",
    value: function getDefaultSortedBy() {
      return {
        name: '',
        direction: 'asc'
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.sortedBy.name !== this.state.sortedBy.name || prevState.sortedBy.direction !== this.state.sortedBy.direction) {
        this.getItems();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_21__["default"], null), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_23__["default"], null) : this.getTable(), this.getAddButton());
    }
  }, {
    key: "arrow",
    get: function get() {
      return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);


Object.defineProperty(ListOfItems, "contextType", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_22__["AlertContext"]
}); //export default withRouter(ListOfItems);

/***/ }),

/***/ "./assets/components/Loader.tsx":
/*!**************************************!*\
  !*** ./assets/components/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Loader.css */ "./assets/components/css/Loader.css");
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Loader_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-dual-ring"
  }));
});

/***/ }),

/***/ "./assets/components/css/Loader.css":
/*!******************************************!*\
  !*** ./assets/components/css/Loader.css ***!
  \******************************************/
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

/***/ "./assets/components/lib/Modal.tsx":
/*!*****************************************!*\
  !*** ./assets/components/lib/Modal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var baseClass = 'modal-dialog';

var ModalHeader = function ModalHeader(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
  //   const classList = ref.current!.classList;
  //   console.log('ModalHeader.baseClass', baseClass);
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: ref,
    className: baseClass + '__header',
    id: props.id
  }, props.children);
};

var ModalTitle = function ModalTitle(props) {
  //useEffect(() => console.log('Modal.Title', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__title',
    id: props.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, props.children));
};

var ModalBody = function ModalBody(props) {
  //useEffect(() => console.log('Modal.Body', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__body',
    id: props.id
  }, props.children);
};

var ModalFooter = function ModalFooter(props) {
  //useEffect(() => console.log('Modal.Footer', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__footer',
    id: props.id
  }, props.children);
};

var Modal = function Modal(props) {
  var setBaseClass = function setBaseClass() {
    baseClass = props.baseClassName;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(setBaseClass, []);

  var changeShowStatus = function changeShowStatus() {
    var $body = document.querySelector('body');
    var $modal = document.querySelector('.' + props.baseClassName);
    var $modalBackdrop = document.querySelector('.' + props.baseClassName + '__backdrop');
    var $dialog = document.querySelector('.' + props.baseClassName + '__dialog'); //console.log('Modal.modal', $modal);

    if (props.show) {
      $body.classList.add('body-modal-open');
      $modalBackdrop.classList.add(props.baseClassName + '__backdrop_show');
      $modal.classList.add(props.baseClassName + '_show');
      $dialog.classList.add(props.baseClassName + '__dialog_show');
    } else {
      $body.classList.remove('body-modal-open');
      $modalBackdrop.classList.remove(props.baseClassName + '__backdrop_show');
      $modal.classList.remove(props.baseClassName + '_show');
      $dialog.classList.remove(props.baseClassName + '__dialog_show');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(changeShowStatus, [props.show]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__backdrop'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: props.baseClassName + '__dialog'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__children'
  }, props.children))));
};

Object.assign(Modal, {
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter
});
/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/***/ "./assets/components/lib/Table.tsx":
/*!*****************************************!*\
  !*** ./assets/components/lib/Table.tsx ***!
  \*****************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
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


var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: this.props.className ? this.props.className : 'table'
      }, this.props.children);
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImUiLCJwcm9wcyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJpdGVtIiwicGFyYW1zIiwiaXRlbUluZm8iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImJhc2VDbGFzc05hbWUiLCJzaG93Iiwib25IaWRlIiwiaGFuZGxlQ2xvc2UiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwibmFtZU9mSXRlbSIsIkJvZHkiLCJnZXRJdGVtSW5mbyIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJtZXNzYWdlcyIsInNob3dEZWxldGVEaWFsb2ciLCJ1bmRlZmluZWQiLCJpdGVtcyIsInNvcnRlZEJ5IiwiZ2V0RGVmYXVsdFNvcnRlZEJ5Iiwib2JqIiwia2V5IiwiZGF0YSIsImtleXMiLCJtYXAiLCJ0eXBlIiwibWVzc2FnZSIsImdldEtleVZhbHVlIiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJzdGF0ZSIsIm93bmVyIiwicmVzIiwiY29udGV4dCIsInNldEFsZXJ0cyIsImdldEVycm9ycyIsInJlc3BvbnNlIiwiaWQiLCJmaWx0ZXIiLCJzb3J0ZWRfbmFtZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJhc3NpZ24iLCJnZXRJdGVtIiwiTnVtYmVyIiwiYnRuX2FkZCIsInJlZGlyZWN0IiwiaGlzdG9yeSIsInB1c2giLCJlcnIiLCJpdGVtX3BrIiwiYnRuX2VkaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uZmlybSIsImJ0bl9kZWwiLCJnZXRJdGVtSWQiLCJ0aXRsZSIsImluZGV4IiwiYnRuU29ydENsaWNrIiwiVG9vbHRpcENvbnRlbnQiLCJSb3ciLCJhcnJvdyIsInZhcmlhbnQiLCJidG5FZGl0Q2xpY2siLCJidG5EZWxDbGljayIsImFkZEJ1dHRvbiIsImJ0bkFkZENsaWNrIiwiRnJhZ21lbnQiLCJnZXREZWxldGVEaWFsb2ciLCJnZXRJdGVtcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIkFsZXJ0cyIsImRlbGV0ZURpYWxvZyIsIkxvYWRlciIsImdldFRhYmxlIiwiZ2V0QWRkQnV0dG9uIiwidXBBcnJvdyIsImRvd25BcnJvdyIsIkFsZXJ0Q29udGV4dCIsInRvb2x0aXAiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiYmFzZUNsYXNzIiwiTW9kYWxIZWFkZXIiLCJyZWYiLCJ1c2VSZWYiLCJNb2RhbFRpdGxlIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJzZXRCYXNlQ2xhc3MiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VTaG93U3RhdHVzIiwiJGJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbW9kYWwiLCIkbW9kYWxCYWNrZHJvcCIsIiRkaWFsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJUYWJsZSIsIlRvb2x0aXAiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibGVuZ3RoIiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsImRlbGF5Iiwid2FpdCIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ3FCQSxZOzs7OztBQUNqQiwwQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0FDLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsYUFBNUIsRUFBMkM7QUFDdkNDLGdCQUFVLEVBQUUsSUFEMkI7QUFFdkNDLGtCQUFZLEVBQUUsSUFGeUI7QUFHdkNDLGNBQVEsRUFBRSxJQUg2QjtBQUl2Q0MsV0FBSyxFQUFFLGVBQUNDLENBQUQsRUFBTztBQUNWLFlBQUlBLENBQUosRUFDSSxNQUFLQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTSixLQUEvQjtBQUNKLGVBQU8sTUFBS0UsS0FBTCxDQUFXQyxVQUFYLENBQXNCLEtBQXRCLENBQVA7QUFDSDtBQVJzQyxLQUEzQztBQVVB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QUExQixFQUFvQyxJQUFwQyxFQUEwQzNGLElBQUksRUFBOUMsQ0FBUDtBQUNILENBakREOztBQWtEZWdHLHFFQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9saWIvTW9kYWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhbmRsZUNsb3NlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1EZWxldGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW1EZWxldGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZU9mSXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIml0ZW1JbmZvXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1JbmZvXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbUluZm8odGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7IGJhc2VDbGFzc05hbWU6IFwiZGVsZXRlLWRpYWxvZ1wiLCBzaG93OiB0aGlzLnByb3BzLnNob3csIG9uSGlkZTogdGhpcy5oYW5kbGVDbG9zZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5IZWFkZXIsIHsgY2xvc2VCdXR0b246IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5UaXRsZSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVPZkl0ZW0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuQm9keSwgbnVsbCwgdGhpcy5nZXRJdGVtSW5mbygpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuRm9vdGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tc2Vjb25kYXJ5XCIsIHZhbHVlOiBmYWxzZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLWRhbmdlclwiLCB2YWx1ZTogdHJ1ZSwgb25DbGljazogdGhpcy5oYW5kbGVDbG9zZSB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL1Jvdyc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4vbGliL1Rvb2x0aXAnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCB7IEFsZXJ0Q29udGV4dCB9IGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RPZkl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbURlbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBzb3J0ZWRCeTogdGhpcy5nZXREZWZhdWx0U29ydGVkQnkoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vdXBBcnJvdyA9ICcmI3gwMjI1QzsnO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cEFycm93XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnXFx1MjE5MSdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vZG93bkFycm93ID0gJyYjeDAyMjVDOyc7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRvd25BcnJvd1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1xcdTIxOTMnXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lT2ZJdGVtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYWRkQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0S2V5VmFsdWVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChvYmosIGtleSkgPT4gb2JqW2tleV1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEVycm9yc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogdGhpcy5nZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1zIG93bmVyJywgdGhpcy5wcm9wcy5vd25lcik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRBbGVydHModGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0blNvcnRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZEJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNvcnRlZEJ5KSwgeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidG5EZWxDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuQWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0bkVkaXRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtX3BrID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrJywgaXRlbV9wayk7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljay5oaXN0b3J5JywgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmNhdGNoJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1JZFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uaWQgOiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIml0ZW1EZWxldGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChjb25maXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX3BrOiB0aGlzLmdldEl0ZW1JZCh0aGlzLnN0YXRlLml0ZW1EZWxldGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHJlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xlYXJNZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRUaENlbGxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpZCwgdGl0bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiLCBpZDogaWQsIG9uQ2xpY2s6IHRoaXMuYnRuU29ydENsaWNrLCBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzQ1xcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTAwQTBcXHUwNDM0XFx1MDQzQlxcdTA0NEZcXHUwMEEwXFx1MDQ0MVxcdTA0M0VcXHUwNDQwXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDNBXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgPT09IGlkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQgfSwgdGhpcy5hcnJvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd19fdGV4dFwiIH0sIHRpdGxlKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEJ1dHRvbnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSB0b29sdGlwXCIsIG9uQ2xpY2s6IHRoaXMuYnRuRWRpdENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiIH0sIFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFx1MjdmNicpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsIGNsYXNzTmFtZTogXCJidG4tZGFuZ2VyIGJ0bi1kYW5nZXJfZGVsIHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5idG5EZWxDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRBZGRCdXR0b25cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9hZGQgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkFkZENsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzVcXHUwMEEwXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzNcXHUwNDNFXFx1MDBBMFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzQlxcdTA0MzBcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQ0NlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIitcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldERlbGV0ZURpYWxvZ1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkZWxldGVEaWFsb2dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnN0YXRlLnNob3dEZWxldGVEaWFsb2cpIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlbGV0ZURpYWxvZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0VGFibGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdFNvcnRlZEJ5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5zb3J0ZWRCeS5uYW1lICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5Lm5hbWUgfHxcbiAgICAgICAgICAgIHByZXZTdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gIT09IHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGFycm93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5kaXJlY3Rpb24gPT09ICdhc2MnID8gdGhpcy51cEFycm93IDogdGhpcy5kb3duQXJyb3c7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZygpLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIG51bGwpIDogdGhpcy5nZXRUYWJsZSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRBZGRCdXR0b24oKSkpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXN0T2ZJdGVtcywgXCJjb250ZXh0VHlwZVwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IEFsZXJ0Q29udGV4dFxufSk7XG4vL2V4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdE9mSXRlbXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjZW50ZXItbG9hZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxkcy1kdWFsLXJpbmdcIiB9KSkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdtb2RhbC1kaWFsb2cnO1xuY29uc3QgTW9kYWxIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnN0IGNsYXNzTGlzdCA9IHJlZi5jdXJyZW50IS5jbGFzc0xpc3Q7XG4gICAgLy8gICBjb25zb2xlLmxvZygnTW9kYWxIZWFkZXIuYmFzZUNsYXNzJywgYmFzZUNsYXNzKTtcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19oZWFkZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLlRpdGxlJywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX190aXRsZScsIGlkOiBwcm9wcy5pZCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgcHJvcHMuY2hpbGRyZW4pKSk7XG59O1xuY29uc3QgTW9kYWxCb2R5ID0gKHByb3BzKSA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLkJvZHknLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2JvZHknLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbEZvb3RlciA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Gb290ZXInLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2Zvb3RlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc2V0QmFzZUNsYXNzID0gKCkgPT4ge1xuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KHNldEJhc2VDbGFzcywgW10pO1xuICAgIGNvbnN0IGNoYW5nZVNob3dTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUpO1xuICAgICAgICBjb25zdCAkbW9kYWxCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wJyk7XG4gICAgICAgIGNvbnN0ICRkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kYWwubW9kYWwnLCAkbW9kYWwpO1xuICAgICAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LmFkZChwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5hZGQocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LW1vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wX3Nob3cnKTtcbiAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX3Nob3cnKTtcbiAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nX3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KGNoYW5nZVNob3dTdGF0dXMsIFtwcm9wcy5zaG93XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogcHJvcHMuaWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19jaGlsZHJlbicgfSwgcHJvcHMuY2hpbGRyZW4pKSkpKTtcbn07XG5PYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gICAgSGVhZGVyOiBNb2RhbEhlYWRlcixcbiAgICBUaXRsZTogTW9kYWxUaXRsZSxcbiAgICBCb2R5OiBNb2RhbEJvZHksXG4gICAgRm9vdGVyOiBNb2RhbEZvb3Rlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAndGFibGUnIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuY29uc3QgQWxlcnRzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkocHJvcHMudGltZW91dCA/IHByb3BzLnRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==