(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
        //messages: [],
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
          _this.context.setAlerts(_this.getErrors(err.response.data));
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
          _this.context.setAlerts(_this.getErrors(err.response.data));
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
              items: res.data
            });

            _this.context.setAlerts([{
              type: 'success',
              message: "".concat(_this.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
            }]);
          })["catch"](function (err) {
            _this.context.setAlerts(_this.getErrors(err.response.data));
          })["finally"](function () {
            return _this.setState({
              loading: false
            });
          });
        }
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_21__["default"], {
        withAlerts: this.props.withAlerts
      }), this.deleteDialog(), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_23__["default"], null) : this.getTable(), this.getAddButton());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImUiLCJwcm9wcyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJpdGVtIiwicGFyYW1zIiwiaXRlbUluZm8iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImJhc2VDbGFzc05hbWUiLCJzaG93Iiwib25IaWRlIiwiaGFuZGxlQ2xvc2UiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwibmFtZU9mSXRlbSIsIkJvZHkiLCJnZXRJdGVtSW5mbyIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsIm9iaiIsImtleSIsImRhdGEiLCJrZXlzIiwibWFwIiwidHlwZSIsIm1lc3NhZ2UiLCJnZXRLZXlWYWx1ZSIsInNldFN0YXRlIiwiYXhpb3MiLCJwb3N0IiwidXJsIiwic29ydGVkX2J5Iiwic3RhdGUiLCJvd25lciIsInJlcyIsImNvbnRleHQiLCJzZXRBbGVydHMiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImlkIiwiZmlsdGVyIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiYXNzaWduIiwiZ2V0SXRlbSIsIk51bWJlciIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsImhpc3RvcnkiLCJwdXNoIiwiZXJyIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbmZpcm0iLCJidG5fZGVsIiwiZ2V0SXRlbUlkIiwidGl0bGUiLCJpbmRleCIsImJ0blNvcnRDbGljayIsIlRvb2x0aXBDb250ZW50IiwiUm93IiwiYXJyb3ciLCJ2YXJpYW50IiwiYnRuRWRpdENsaWNrIiwiYnRuRGVsQ2xpY2siLCJhZGRCdXR0b24iLCJidG5BZGRDbGljayIsIkZyYWdtZW50IiwiZ2V0RGVsZXRlRGlhbG9nIiwiZ2V0SXRlbXMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJBbGVydHMiLCJ3aXRoQWxlcnRzIiwiZGVsZXRlRGlhbG9nIiwiTG9hZGVyIiwiZ2V0VGFibGUiLCJnZXRBZGRCdXR0b24iLCJ1cEFycm93IiwiZG93bkFycm93IiwiQWxlcnRDb250ZXh0IiwidG9vbHRpcCIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiLCJiYXNlQ2xhc3MiLCJNb2RhbEhlYWRlciIsInJlZiIsInVzZVJlZiIsIk1vZGFsVGl0bGUiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsInNldEJhc2VDbGFzcyIsInVzZUVmZmVjdCIsImNoYW5nZVNob3dTdGF0dXMiLCIkYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRtb2RhbCIsIiRtb2RhbEJhY2tkcm9wIiwiJGRpYWxvZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlRhYmxlIiwiVG9vbHRpcCIsInRpbWVvdXQiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibWVzc2FnZXMiLCJsZW5ndGgiLCJnZXRUeXBlIiwidCIsImdldEFsZXJ0cyIsImFycmF5IiwiZGVsYXkiLCJ3YWl0IiwiZ2xvYmFsIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNxQkEsWTs7Ozs7QUFDakIsMEJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBQyxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGFBQTVCLEVBQTJDO0FBQ3ZDQyxnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxrQkFBWSxFQUFFLElBRnlCO0FBR3ZDQyxjQUFRLEVBQUUsSUFINkI7QUFJdkNDLFdBQUssRUFBRSxlQUFDQyxDQUFELEVBQU87QUFDVixZQUFJQSxDQUFKLEVBQ0ksTUFBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCRixDQUFDLENBQUNHLE1BQUYsQ0FBU0osS0FBL0I7QUFDSixlQUFPLE1BQUtFLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQixLQUF0QixDQUFQO0FBQ0g7QUFS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QUFDSCxDQW5ERDs7QUFvRGUrRixxRUFBZixFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbGliL01vZGFsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVDbG9zZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtRGVsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVPZkl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJpdGVtSW5mb1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtSW5mb1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmZvKHRoaXMucHJvcHMucGFyYW1zLml0ZW1EZWxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgeyBiYXNlQ2xhc3NOYW1lOiBcImRlbGV0ZS1kaWFsb2dcIiwgc2hvdzogdGhpcy5wcm9wcy5zaG93LCBvbkhpZGU6IHRoaXMuaGFuZGxlQ2xvc2UgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuSGVhZGVyLCB7IGNsb3NlQnV0dG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuVGl0bGUsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lT2ZJdGVtKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkJvZHksIG51bGwsIHRoaXMuZ2V0SXRlbUluZm8oKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLXNlY29uZGFyeVwiLCB2YWx1ZTogZmFsc2UsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXJcIiwgdmFsdWU6IHRydWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9Sb3cnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0T2ZJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy9tZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZURpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbURlbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBzb3J0ZWRCeTogdGhpcy5nZXREZWZhdWx0U29ydGVkQnkoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vdXBBcnJvdyA9ICcmI3gwMjI1QzsnO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cEFycm93XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnXFx1MjE5MSdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vZG93bkFycm93ID0gJyYjeDAyMjVDOyc7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRvd25BcnJvd1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1xcdTIxOTMnXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lT2ZJdGVtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYWRkQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0S2V5VmFsdWVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChvYmosIGtleSkgPT4gb2JqW2tleV1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEVycm9yc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogdGhpcy5nZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1zIG93bmVyJywgdGhpcy5wcm9wcy5vd25lcik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXMucHJvcHMub3duZXIgPyB0aGlzLnByb3BzLm93bmVyIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRBbGVydHModGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0blNvcnRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZEJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNvcnRlZEJ5KSwgeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidG5EZWxDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuQWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyh0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuRWRpdENsaWNrXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2snLCBpdGVtX3BrKTtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBidG5fZWRpdDogJycsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fcGs6IGl0ZW1fcGssXG4gICAgICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmhpc3RvcnknLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suY2F0Y2gnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0QWxlcnRzKHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtSWRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmlkIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJpdGVtRGVsZXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoY29uZmlybSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RGVsZXRlRGlhbG9nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZF9ieTogdGhpcy5zdGF0ZS5zb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bl9kZWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9wazogdGhpcy5nZXRJdGVtSWQodGhpcy5zdGF0ZS5pdGVtRGVsZXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyID8gdGhpcy5wcm9wcy5vd25lciA6IC0xLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRBbGVydHModGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0VGhDZWxsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoaWQsIHRpdGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiwgaWQ6IGlkLCBvbkNsaWNrOiB0aGlzLmJ0blNvcnRDbGljaywga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MURcXHUwNDMwXFx1MDQzNlxcdTA0M0NcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwMEEwXFx1MDQzNFxcdTA0M0JcXHUwNDRGXFx1MDBBMFxcdTA0NDFcXHUwNDNFXFx1MDQ0MFxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzQVxcdTA0MzhcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lID09PSBpZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkIH0sIHRoaXMuYXJyb3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dfX3RleHRcIiB9LCB0aXRsZSkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25zXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkVkaXRDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTI3ZjYnKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFsdWU6IGlkLCB2YXJpYW50OiBcImRhbmdlclwiLCBjbGFzc05hbWU6IFwiYnRuLWRhbmdlciBidG4tZGFuZ2VyX2RlbCB0b29sdGlwXCIsIG9uQ2xpY2s6IHRoaXMuYnRuRGVsQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0QWRkQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5idG5BZGRDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgXCJcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XFx1MDBBMFxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDMzXFx1MDQzRVxcdTAwQTBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0JcXHUwNDMwXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1xcdTA0NDZcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXREZWxldGVEaWFsb2dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVsZXRlRGlhbG9nXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5zdGF0ZS5zaG93RGVsZXRlRGlhbG9nKSByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRhYmxlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUuc29ydGVkQnkubmFtZSAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lIHx8XG4gICAgICAgICAgICBwcmV2U3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBhcnJvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnYXNjJyA/IHRoaXMudXBBcnJvdyA6IHRoaXMuZG93bkFycm93O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgd2l0aEFsZXJ0czogdGhpcy5wcm9wcy53aXRoQWxlcnRzIH0pLFxuICAgICAgICAgICAgdGhpcy5kZWxldGVEaWFsb2coKSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBudWxsKSA6IHRoaXMuZ2V0VGFibGUoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWRkQnV0dG9uKCkpKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTGlzdE9mSXRlbXMsIFwiY29udGV4dFR5cGVcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBBbGVydENvbnRleHRcbn0pO1xuLy9leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RPZkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vY3NzL0xvYWRlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY2VudGVyLWxvYWRlclwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJsZHMtZHVhbC1yaW5nXCIgfSkpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnbW9kYWwtZGlhbG9nJztcbmNvbnN0IE1vZGFsSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBjbGFzc0xpc3QgPSByZWYuY3VycmVudCEuY2xhc3NMaXN0O1xuICAgIC8vICAgY29uc29sZS5sb2coJ01vZGFsSGVhZGVyLmJhc2VDbGFzcycsIGJhc2VDbGFzcyk7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiByZWYsIGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19faGVhZGVyJywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5UaXRsZScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fdGl0bGUnLCBpZDogcHJvcHMuaWQgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIHByb3BzLmNoaWxkcmVuKSkpO1xufTtcbmNvbnN0IE1vZGFsQm9keSA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Cb2R5JywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19ib2R5JywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWxGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuRm9vdGVyJywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19mb290ZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHNldEJhc2VDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChzZXRCYXNlQ2xhc3MsIFtdKTtcbiAgICBjb25zdCBjaGFuZ2VTaG93U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBwcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgY29uc3QgJG1vZGFsQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcpO1xuICAgICAgICBjb25zdCAkZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLm1vZGFsJywgJG1vZGFsKTtcbiAgICAgICAgaWYgKHByb3BzLnNob3cpIHtcbiAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgJG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LmFkZChwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgJG1vZGFsLmNsYXNzTGlzdC5hZGQocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgJGRpYWxvZy5jbGFzc0xpc3QuYWRkKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdChjaGFuZ2VTaG93U3RhdHVzLCBbcHJvcHMuc2hvd10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fY2hpbGRyZW4nIH0sIHByb3BzLmNoaWxkcmVuKSkpKSk7XG59O1xuT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICAgIEhlYWRlcjogTW9kYWxIZWFkZXIsXG4gICAgVGl0bGU6IE1vZGFsVGl0bGUsXG4gICAgQm9keTogTW9kYWxCb2R5LFxuICAgIEZvb3RlcjogTW9kYWxGb290ZXIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3cgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpZCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAncm93JywgaWQ6IGlkIH0sIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJ3RhYmxlJyB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQsIHdpdGhBbGVydHMgPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgaWYgKCF3aXRoQWxlcnRzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheSh0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9