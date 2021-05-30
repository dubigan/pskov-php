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
          var _a, res, state;

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
                    owner: (_a = this.props.owner) !== null && _a !== void 0 ? _a : -1
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
        return item !== null && item !== void 0 ? item : -1;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemDelete", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(confirm) {
        var _a;

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
            owner: (_a = _this.props.owner) !== null && _a !== void 0 ? _a : -1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImUiLCJwcm9wcyIsIml0ZW1EZWxldGUiLCJ0YXJnZXQiLCJpdGVtIiwicGFyYW1zIiwiaXRlbUluZm8iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImJhc2VDbGFzc05hbWUiLCJzaG93Iiwib25IaWRlIiwiaGFuZGxlQ2xvc2UiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwibmFtZU9mSXRlbSIsIkJvZHkiLCJnZXRJdGVtSW5mbyIsIkZvb3RlciIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJMaXN0T2ZJdGVtcyIsImxvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJzb3J0ZWRCeSIsImdldERlZmF1bHRTb3J0ZWRCeSIsIm9iaiIsImtleSIsImRhdGEiLCJrZXlzIiwibWFwIiwidHlwZSIsIm1lc3NhZ2UiLCJnZXRLZXlWYWx1ZSIsInNldFN0YXRlIiwiYXhpb3MiLCJwb3N0IiwidXJsIiwic29ydGVkX2J5Iiwic3RhdGUiLCJvd25lciIsIl9hIiwicmVzIiwiY29udGV4dCIsInNldEFsZXJ0cyIsImdldEVycm9ycyIsInJlc3BvbnNlIiwiaWQiLCJmaWx0ZXIiLCJzb3J0ZWRfbmFtZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJhc3NpZ24iLCJnZXRJdGVtIiwiTnVtYmVyIiwiYnRuX2FkZCIsInJlZGlyZWN0IiwiaGlzdG9yeSIsInB1c2giLCJlcnIiLCJpdGVtX3BrIiwiYnRuX2VkaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uZmlybSIsImJ0bl9kZWwiLCJnZXRJdGVtSWQiLCJ0aXRsZSIsImluZGV4IiwiYnRuU29ydENsaWNrIiwiVG9vbHRpcENvbnRlbnQiLCJSb3ciLCJhcnJvdyIsInZhcmlhbnQiLCJidG5FZGl0Q2xpY2siLCJidG5EZWxDbGljayIsImFkZEJ1dHRvbiIsImJ0bkFkZENsaWNrIiwiRnJhZ21lbnQiLCJnZXREZWxldGVEaWFsb2ciLCJnZXRJdGVtcyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIkFsZXJ0cyIsIndpdGhBbGVydHMiLCJkZWxldGVEaWFsb2ciLCJMb2FkZXIiLCJnZXRUYWJsZSIsImdldEFkZEJ1dHRvbiIsInVwQXJyb3ciLCJkb3duQXJyb3ciLCJBbGVydENvbnRleHQiLCJ0b29sdGlwIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsImJhc2VDbGFzcyIsIk1vZGFsSGVhZGVyIiwicmVmIiwidXNlUmVmIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwic2V0QmFzZUNsYXNzIiwidXNlRWZmZWN0IiwiY2hhbmdlU2hvd1N0YXR1cyIsIiRib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1vZGFsIiwiJG1vZGFsQmFja2Ryb3AiLCIkZGlhbG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiVGFibGUiLCJUb29sdGlwIiwidGltZW91dCIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJkZWZUaW1lb3V0Iiwic2hvd0FsZXJ0cyIsInZpZXciLCJtZXNzYWdlcyIsImxlbmd0aCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJkZWxheSIsIndhaXQiLCJnbG9iYWwiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ3FCQSxZOzs7OztBQUNqQiwwQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0FDLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsYUFBNUIsRUFBMkM7QUFDdkNDLGdCQUFVLEVBQUUsSUFEMkI7QUFFdkNDLGtCQUFZLEVBQUUsSUFGeUI7QUFHdkNDLGNBQVEsRUFBRSxJQUg2QjtBQUl2Q0MsV0FBSyxFQUFFLGVBQUNDLENBQUQsRUFBTztBQUNWLFlBQUlBLENBQUosRUFDSSxNQUFLQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTSixLQUEvQjtBQUNKLGVBQU8sTUFBS0UsS0FBTCxDQUFXQyxVQUFYLENBQXNCLEtBQXRCLENBQVA7QUFDSDtBQVJzQyxLQUEzQztBQVVBUixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFlBQTVCLEVBQTBDO0FBQ3RDQyxnQkFBVSxFQUFFLElBRDBCO0FBRXRDQyxrQkFBWSxFQUFFLElBRndCO0FBR3RDQyxjQUFRLEVBQUUsSUFINEI7QUFJdENDLFdBQUssRUFBRTtBQUorQixLQUExQztBQU1BTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFVBQTVCLEVBQXdDO0FBQ3BDQyxnQkFBVSxFQUFFLElBRHdCO0FBRXBDQyxrQkFBWSxFQUFFLElBRnNCO0FBR3BDQyxjQUFRLEVBQUUsSUFIMEI7QUFJcENDLFdBQUssRUFBRSxlQUFDSyxJQUFELEVBQVU7QUFDYixlQUFPLEVBQVA7QUFDSDtBQU5tQyxLQUF4QztBQVFBVixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGFBQTVCLEVBQTJDO0FBQ3ZDQyxnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxrQkFBWSxFQUFFLElBRnlCO0FBR3ZDQyxjQUFRLEVBQUUsSUFINkI7QUFJdkNDLFdBQUssRUFBRSxpQkFBTTtBQUNULFlBQUksTUFBS0UsS0FBTCxDQUFXSSxNQUFYLENBQWtCSCxVQUF0QixFQUFrQztBQUM5QixpQkFBTyxNQUFLSSxRQUFMLENBQWMsTUFBS0wsS0FBTCxDQUFXSSxNQUFYLENBQWtCSCxVQUFoQyxDQUFQO0FBQ0g7O0FBQ0QsZUFBTyxFQUFQO0FBQ0g7QUFUc0MsS0FBM0M7QUExQlU7QUFxQ2I7Ozs7NkJBQ1E7QUFDTCwwQkFBUUssNENBQUssQ0FBQ0MsYUFBTixDQUFvQkMsa0RBQXBCLEVBQTJCO0FBQUVDLHFCQUFhLEVBQUUsZUFBakI7QUFBa0NDLFlBQUksRUFBRSxLQUFLVixLQUFMLENBQVdVLElBQW5EO0FBQXlEQyxjQUFNLEVBQUUsS0FBS0M7QUFBdEUsT0FBM0IsZUFDSk4sNENBQUssQ0FBQ0MsYUFBTixDQUFvQkMsa0RBQUssQ0FBQ0ssTUFBMUIsRUFBa0M7QUFBRUMsbUJBQVcsRUFBRTtBQUFmLE9BQWxDLGVBQ0lSLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JDLGtEQUFLLENBQUNPLEtBQTFCLEVBQWlDLElBQWpDLEVBQ0ksNkNBREosRUFFSSxLQUFLQyxVQUZULENBREosQ0FESSxlQUtKViw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyxrREFBSyxDQUFDUyxJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxLQUFLQyxXQUFMLEVBQXRDLENBTEksZUFNSlosNENBQUssQ0FBQ0MsYUFBTixDQUFvQkMsa0RBQUssQ0FBQ1csTUFBMUIsRUFBa0MsSUFBbEMsZUFDSWIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmEsa0RBQXBCLEVBQTRCO0FBQUVDLGlCQUFTLEVBQUUsZUFBYjtBQUE4QnZCLGFBQUssRUFBRSxLQUFyQztBQUE0Q3dCLGVBQU8sRUFBRSxLQUFLVjtBQUExRCxPQUE1QixFQUFxRyxzQ0FBckcsQ0FESixlQUVJTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CYSxrREFBcEIsRUFBNEI7QUFBRUMsaUJBQVMsRUFBRSxZQUFiO0FBQTJCdkIsYUFBSyxFQUFFLElBQWxDO0FBQXdDd0IsZUFBTyxFQUFFLEtBQUtWO0FBQXRELE9BQTVCLEVBQWlHLDRDQUFqRyxDQUZKLENBTkksQ0FBUjtBQVNIOzs7O0VBakRxQ1csK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIMUMsSUFBSUMsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWUvQixLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZNkIsQ0FBakIsR0FBcUI3QixLQUFyQixHQUE2QixJQUFJNkIsQ0FBSixDQUFNLFVBQVVHLE9BQVYsRUFBbUI7QUFBRUEsYUFBTyxDQUFDaEMsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUs2QixDQUFDLEtBQUtBLENBQUMsR0FBR0ksT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJuQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRW9DLFlBQUksQ0FBQ04sU0FBUyxDQUFDTyxJQUFWLENBQWVyQyxLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPQyxDQUFQLEVBQVU7QUFBRWlDLGNBQU0sQ0FBQ2pDLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNxQyxRQUFULENBQWtCdEMsS0FBbEIsRUFBeUI7QUFBRSxVQUFJO0FBQUVvQyxZQUFJLENBQUNOLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUI5QixLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT0MsQ0FBUCxFQUFVO0FBQUVpQyxjQUFNLENBQUNqQyxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTbUMsSUFBVCxDQUFjRyxNQUFkLEVBQXNCO0FBQUVBLFlBQU0sQ0FBQ0MsSUFBUCxHQUFjUixPQUFPLENBQUNPLE1BQU0sQ0FBQ3ZDLEtBQVIsQ0FBckIsR0FBc0MrQixLQUFLLENBQUNRLE1BQU0sQ0FBQ3ZDLEtBQVIsQ0FBTCxDQUFvQnlDLElBQXBCLENBQXlCTixTQUF6QixFQUFvQ0csUUFBcEMsQ0FBdEM7QUFBc0Y7O0FBQzlHRixRQUFJLENBQUMsQ0FBQ04sU0FBUyxHQUFHQSxTQUFTLENBQUNZLEtBQVYsQ0FBZ0JmLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFMsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQk0sVzs7Ozs7QUFDakIseUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU2pELFNBQVQ7QUFDQUMsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixPQUE1QixFQUFxQztBQUNqQ0MsZ0JBQVUsRUFBRSxJQURxQjtBQUVqQ0Msa0JBQVksRUFBRSxJQUZtQjtBQUdqQ0MsY0FBUSxFQUFFLElBSHVCO0FBSWpDQyxXQUFLLEVBQUU7QUFDSDRDLGVBQU8sRUFBRSxLQUROO0FBRUg7QUFDQUMsd0JBQWdCLEVBQUUsS0FIZjtBQUlIMUMsa0JBQVUsRUFBRTJDLFNBSlQ7QUFLSEMsYUFBSyxFQUFFLEVBTEo7QUFNSEMsZ0JBQVEsRUFBRSxNQUFLQyxrQkFBTDtBQU5QO0FBSjBCLEtBQXJDO0FBYUF0RCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLEtBQTVCLEVBQW1DO0FBQy9CQyxnQkFBVSxFQUFFLElBRG1CO0FBRS9CQyxrQkFBWSxFQUFFLElBRmlCO0FBRy9CQyxjQUFRLEVBQUUsSUFIcUI7QUFJL0JDLFdBQUssRUFBRTtBQUp3QixLQUFuQyxFQWZVLENBcUJWOztBQUNBTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFNBQTVCLEVBQXVDO0FBQ25DQyxnQkFBVSxFQUFFLElBRHVCO0FBRW5DQyxrQkFBWSxFQUFFLElBRnFCO0FBR25DQyxjQUFRLEVBQUUsSUFIeUI7QUFJbkNDLFdBQUssRUFBRTtBQUo0QixLQUF2QyxFQXRCVSxDQTRCVjs7QUFDQUwsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixXQUE1QixFQUF5QztBQUNyQ0MsZ0JBQVUsRUFBRSxJQUR5QjtBQUVyQ0Msa0JBQVksRUFBRSxJQUZ1QjtBQUdyQ0MsY0FBUSxFQUFFLElBSDJCO0FBSXJDQyxXQUFLLEVBQUU7QUFKOEIsS0FBekM7QUFNQUwsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixZQUE1QixFQUEwQztBQUN0Q0MsZ0JBQVUsRUFBRSxJQUQwQjtBQUV0Q0Msa0JBQVksRUFBRSxJQUZ3QjtBQUd0Q0MsY0FBUSxFQUFFLElBSDRCO0FBSXRDQyxXQUFLLEVBQUU7QUFKK0IsS0FBMUM7QUFNQUwsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixXQUE1QixFQUF5QztBQUNyQ0MsZ0JBQVUsRUFBRSxJQUR5QjtBQUVyQ0Msa0JBQVksRUFBRSxJQUZ1QjtBQUdyQ0MsY0FBUSxFQUFFLElBSDJCO0FBSXJDQyxXQUFLLEVBQUU7QUFKOEIsS0FBekM7QUFNQUwsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixhQUE1QixFQUEyQztBQUN2Q0MsZ0JBQVUsRUFBRSxJQUQyQjtBQUV2Q0Msa0JBQVksRUFBRSxJQUZ5QjtBQUd2Q0MsY0FBUSxFQUFFLElBSDZCO0FBSXZDQyxXQUFLLEVBQUUsZUFBQ2tELEdBQUQsRUFBTUMsR0FBTjtBQUFBLGVBQWNELEdBQUcsQ0FBQ0MsR0FBRCxDQUFqQjtBQUFBO0FBSmdDLEtBQTNDO0FBTUF4RCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFdBQTVCLEVBQXlDO0FBQ3JDQyxnQkFBVSxFQUFFLElBRHlCO0FBRXJDQyxrQkFBWSxFQUFFLElBRnVCO0FBR3JDQyxjQUFRLEVBQUUsSUFIMkI7QUFJckNDLFdBQUssRUFBRSxlQUFDb0QsSUFBRCxFQUFVO0FBQ2IsZUFBT3pELE1BQU0sQ0FBQzBELElBQVAsQ0FBWUQsSUFBWixFQUFrQkUsR0FBbEIsQ0FBc0IsVUFBQ0gsR0FBRCxFQUFTO0FBQ2xDLGlCQUFPO0FBQUVJLGdCQUFJLEVBQUUsT0FBUjtBQUFpQkMsbUJBQU8sRUFBRSxNQUFLQyxXQUFMLENBQWlCTCxJQUFqQixFQUF1QkQsR0FBdkI7QUFBMUIsV0FBUDtBQUNILFNBRk0sQ0FBUDtBQUdIO0FBUm9DLEtBQXpDO0FBVUF4RCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFVBQTVCLEVBQXdDO0FBQ3BDQyxnQkFBVSxFQUFFLElBRHdCO0FBRXBDQyxrQkFBWSxFQUFFLElBRnNCO0FBR3BDQyxjQUFRLEVBQUUsSUFIMEI7QUFJcENDLFdBQUssRUFBRTtBQUFBLGVBQU0wQixTQUFTLGdDQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsdUNBQXVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFekMsdUJBQUtnQyxRQUFMLENBQWM7QUFBRWQsMkJBQU8sRUFBRTtBQUFYLG1CQUFkLEVBRnlDLENBR3pDOztBQUh5QztBQUFBO0FBS3pCLHlCQUFNZSw2Q0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0MsR0FBaEIsRUFBcUI7QUFDbkNDLDZCQUFTLEVBQUUsS0FBS0MsS0FBTCxDQUFXZixRQURhO0FBRW5DZ0IseUJBQUssRUFBRSxDQUFDQyxFQUFFLEdBQUcsS0FBSy9ELEtBQUwsQ0FBVzhELEtBQWpCLE1BQTRCLElBQTVCLElBQW9DQyxFQUFFLEtBQUssS0FBSyxDQUFoRCxHQUFvREEsRUFBcEQsR0FBeUQsQ0FBQztBQUY5QixtQkFBckIsQ0FBTjs7QUFMeUI7QUFLL0JDLHFCQUwrQjtBQVMvQkgsdUJBVCtCLEdBU3ZCO0FBQUVoQix5QkFBSyxFQUFFbUIsR0FBRyxDQUFDZDtBQUFiLG1CQVR1QixFQVVyQzs7QUFDQSx1QkFBS00sUUFBTCxDQUFjSyxLQUFkO0FBWHFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY3JDLHVCQUFLSSxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlLFlBQUlDLFFBQUosQ0FBYWxCLElBQTVCLENBQXZCOztBQWRxQztBQUFBO0FBaUJyQyx1QkFBS00sUUFBTCxDQUFjO0FBQUVkLDJCQUFPLEVBQUU7QUFBWCxtQkFBZDtBQWpCcUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdkIsRUFBZjtBQUFBO0FBSjZCLEtBQXhDO0FBeUJBakQsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixTQUE1QixFQUF1QztBQUNuQ0MsZ0JBQVUsRUFBRSxJQUR1QjtBQUVuQ0Msa0JBQVksRUFBRSxJQUZxQjtBQUduQ0MsY0FBUSxFQUFFLElBSHlCO0FBSW5DQyxXQUFLLEVBQUUsZUFBQ3VFLEVBQUQsRUFBUTtBQUNYLGVBQU8sTUFBS1IsS0FBTCxDQUFXaEIsS0FBWCxDQUFpQnlCLE1BQWpCLENBQXdCLFVBQUNuRSxJQUFEO0FBQUEsaUJBQVUsQ0FBQ0EsSUFBSSxDQUFDa0UsRUFBTixLQUFhLENBQUNBLEVBQXhCO0FBQUEsU0FBeEIsRUFBb0QsQ0FBcEQsQ0FBUDtBQUNIO0FBTmtDLEtBQXZDO0FBUUE1RSxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGNBQTVCLEVBQTRDO0FBQ3hDQyxnQkFBVSxFQUFFLElBRDRCO0FBRXhDQyxrQkFBWSxFQUFFLElBRjBCO0FBR3hDQyxjQUFRLEVBQUUsSUFIOEI7QUFJeENDLFdBQUssRUFBRSxlQUFDQyxDQUFELEVBQU87QUFDVixZQUFNd0UsV0FBVyxHQUFHeEUsQ0FBQyxDQUFDRyxNQUFGLENBQVNtRSxFQUE3QixDQURVLENBRVY7O0FBQ0EsWUFBSSxDQUFDRSxXQUFMLEVBQ0k7O0FBQ0osWUFBSSxNQUFLVixLQUFMLENBQVdmLFFBQVgsQ0FBb0IwQixJQUFwQixLQUE2QkQsV0FBakMsRUFBOEM7QUFDMUMsY0FBTXpCLFFBQVEsR0FBRztBQUNiMEIsZ0JBQUksRUFBRUQsV0FETztBQUViRSxxQkFBUyxFQUFFO0FBRkUsV0FBakI7O0FBSUEsZ0JBQUtqQixRQUFMLENBQWM7QUFDVlYsb0JBQVEsRUFBRUE7QUFEQSxXQUFkO0FBR0gsU0FSRCxNQVNLO0FBQ0QsY0FBTTJCLFNBQVMsR0FBRyxNQUFLWixLQUFMLENBQVdmLFFBQVgsQ0FBb0IyQixTQUFwQixLQUFrQyxNQUFsQyxHQUEyQyxLQUEzQyxHQUFtRCxNQUFyRTs7QUFDQSxjQUFNM0IsU0FBUSxHQUFHckQsTUFBTSxDQUFDaUYsTUFBUCxDQUFjakYsTUFBTSxDQUFDaUYsTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBS2IsS0FBTCxDQUFXZixRQUE3QixDQUFkLEVBQXNEO0FBQUUyQixxQkFBUyxFQUFFQTtBQUFiLFdBQXRELENBQWpCOztBQUNBLGdCQUFLakIsUUFBTCxDQUFjO0FBQUVWLG9CQUFRLEVBQUVBO0FBQVosV0FBZDtBQUNIO0FBQ0o7QUF2QnVDLEtBQTVDO0FBeUJBckQsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixhQUE1QixFQUEyQztBQUN2Q0MsZ0JBQVUsRUFBRSxJQUQyQjtBQUV2Q0Msa0JBQVksRUFBRSxJQUZ5QjtBQUd2Q0MsY0FBUSxFQUFFLElBSDZCO0FBSXZDQyxXQUFLLEVBQUUsZUFBQ0MsQ0FBRCxFQUFPO0FBQ1YsWUFBTUksSUFBSSxHQUFHLE1BQUt3RSxPQUFMLENBQWFDLE1BQU0sQ0FBQzdFLENBQUMsQ0FBQ0csTUFBRixDQUFTSixLQUFWLENBQW5CLENBQWI7O0FBQ0EsY0FBSzBELFFBQUwsQ0FBYztBQUNWYiwwQkFBZ0IsRUFBRSxJQURSO0FBRVYxQyxvQkFBVSxFQUFFRTtBQUZGLFNBQWQ7QUFJSDtBQVZzQyxLQUEzQztBQVlBVixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGFBQTVCLEVBQTJDO0FBQ3ZDQyxnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxrQkFBWSxFQUFFLElBRnlCO0FBR3ZDQyxjQUFRLEVBQUUsSUFINkI7QUFJdkNDLFdBQUssRUFBRSxlQUFDQyxDQUFELEVBQU87QUFDVjBELHFEQUFLLENBQ0FDLElBREwsQ0FDVSxNQUFLQyxHQURmLEVBQ29CO0FBQUVrQixpQkFBTyxFQUFFO0FBQVgsU0FEcEIsRUFFS3RDLElBRkwsQ0FFVSxVQUFBeUIsR0FBRyxFQUFJO0FBQ2IsY0FBSUEsR0FBRyxDQUFDZCxJQUFKLENBQVM0QixRQUFiLEVBQXVCO0FBQ25CO0FBQ0Esa0JBQUs5RSxLQUFMLENBQVcrRSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QmhCLEdBQUcsQ0FBQ2QsSUFBSixDQUFTNEIsUUFBakM7QUFDSDtBQUNKLFNBUEQsV0FRVyxVQUFBRyxHQUFHLEVBQUk7QUFDZCxnQkFBS2hCLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixNQUFLQyxTQUFMLENBQWVjLEdBQUcsQ0FBQ2IsUUFBSixDQUFhbEIsSUFBNUIsQ0FBdkI7QUFDSCxTQVZEO0FBV0g7QUFoQnNDLEtBQTNDO0FBa0JBekQsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixjQUE1QixFQUE0QztBQUN4Q0MsZ0JBQVUsRUFBRSxJQUQ0QjtBQUV4Q0Msa0JBQVksRUFBRSxJQUYwQjtBQUd4Q0MsY0FBUSxFQUFFLElBSDhCO0FBSXhDQyxXQUFLLEVBQUUsZUFBQ0MsQ0FBRCxFQUFPO0FBQ1YsWUFBTW1GLE9BQU8sR0FBR25GLENBQUMsQ0FBQ0csTUFBRixDQUFTSixLQUF6QixDQURVLENBRVY7O0FBQ0EyRCxxREFBSyxDQUNBQyxJQURMLENBQ1UsTUFBS0MsR0FEZixFQUNvQjtBQUNoQndCLGtCQUFRLEVBQUUsRUFETTtBQUVoQkQsaUJBQU8sRUFBRUEsT0FGTztBQUdoQnZCLGFBQUcsRUFBRXlCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFITCxTQURwQixFQU1LL0MsSUFOTCxDQU1VLFVBQUF5QixHQUFHLEVBQUk7QUFDYixjQUFJQSxHQUFHLENBQUNkLElBQUosQ0FBUzRCLFFBQWIsRUFBdUI7QUFDbkI7QUFDQTtBQUNBLGtCQUFLOUUsS0FBTCxDQUFXK0UsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JoQixHQUFHLENBQUNkLElBQUosQ0FBUzRCLFFBQWpDO0FBQ0g7QUFDSixTQVpELFdBYVcsVUFBQUcsR0FBRyxFQUFJO0FBQ2Q7QUFDQSxnQkFBS2hCLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixNQUFLQyxTQUFMLENBQWVjLEdBQUcsQ0FBQ2IsUUFBSixDQUFhbEIsSUFBNUIsQ0FBdkI7QUFDSCxTQWhCRDtBQWlCSDtBQXhCdUMsS0FBNUM7QUEwQkF6RCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFdBQTVCLEVBQXlDO0FBQ3JDQyxnQkFBVSxFQUFFLElBRHlCO0FBRXJDQyxrQkFBWSxFQUFFLElBRnVCO0FBR3JDQyxjQUFRLEVBQUUsSUFIMkI7QUFJckNDLFdBQUssRUFBRSxlQUFDSyxJQUFELEVBQVU7QUFDYixlQUFPQSxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLLEtBQUssQ0FBL0IsR0FBbUNBLElBQW5DLEdBQTBDLENBQUMsQ0FBbEQ7QUFDSDtBQU5vQyxLQUF6QztBQVFBVixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFlBQTVCLEVBQTBDO0FBQ3RDQyxnQkFBVSxFQUFFLElBRDBCO0FBRXRDQyxrQkFBWSxFQUFFLElBRndCO0FBR3RDQyxjQUFRLEVBQUUsSUFINEI7QUFJdENDLFdBQUssRUFBRSxlQUFDeUYsT0FBRCxFQUFhO0FBQ2hCLFlBQUl4QixFQUFKOztBQUNBLGNBQUtQLFFBQUwsQ0FBYztBQUFFYiwwQkFBZ0IsRUFBRTtBQUFwQixTQUFkOztBQUNBLFlBQUk0QyxPQUFPLEtBQUssTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQUsvQixRQUFMLENBQWM7QUFBRWQsbUJBQU8sRUFBRTtBQUFYLFdBQWQ7O0FBQ0FlLHVEQUFLLENBQ0FDLElBREwsQ0FDVSxNQUFLQyxHQURmLEVBQ29CO0FBQ2hCQyxxQkFBUyxFQUFFLE1BQUtDLEtBQUwsQ0FBV2YsUUFETjtBQUVoQjBDLG1CQUFPLEVBQUUsRUFGTztBQUdoQk4sbUJBQU8sRUFBRSxNQUFLTyxTQUFMLENBQWUsTUFBSzVCLEtBQUwsQ0FBVzVELFVBQTFCLENBSE87QUFJaEI2RCxpQkFBSyxFQUFFLENBQUNDLEVBQUUsR0FBRyxNQUFLL0QsS0FBTCxDQUFXOEQsS0FBakIsTUFBNEIsSUFBNUIsSUFBb0NDLEVBQUUsS0FBSyxLQUFLLENBQWhELEdBQW9EQSxFQUFwRCxHQUF5RCxDQUFDO0FBSmpELFdBRHBCLEVBT0t4QixJQVBMLENBT1UsVUFBQXlCLEdBQUcsRUFBSTtBQUNiLGtCQUFLUixRQUFMLENBQWM7QUFDVlgsbUJBQUssRUFBRW1CLEdBQUcsQ0FBQ2Q7QUFERCxhQUFkOztBQUdBLGtCQUFLZSxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsQ0FDbkI7QUFDSWIsa0JBQUksRUFBRSxTQURWO0FBRUlDLHFCQUFPLFlBQUssTUFBS3RDLFVBQVY7QUFGWCxhQURtQixDQUF2QjtBQU1ILFdBakJELFdBa0JXLFVBQUFpRSxHQUFHLEVBQUk7QUFDZCxrQkFBS2hCLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixNQUFLQyxTQUFMLENBQWVjLEdBQUcsQ0FBQ2IsUUFBSixDQUFhbEIsSUFBNUIsQ0FBdkI7QUFDSCxXQXBCRCxhQXFCYTtBQUFBLG1CQUFNLE1BQUtNLFFBQUwsQ0FBYztBQUFFZCxxQkFBTyxFQUFFO0FBQVgsYUFBZCxDQUFOO0FBQUEsV0FyQmI7QUFzQkg7QUFDSjtBQWhDcUMsS0FBMUM7QUFrQ0FqRCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFdBQTVCLEVBQXlDO0FBQ3JDQyxnQkFBVSxFQUFFLElBRHlCO0FBRXJDQyxrQkFBWSxFQUFFLElBRnVCO0FBR3JDQyxjQUFRLEVBQUUsSUFIMkI7QUFJckNDLFdBQUssRUFBRSxlQUFDdUUsRUFBRCxFQUFLcUIsS0FBTCxFQUFZQyxLQUFaLEVBQXNCO0FBQ3pCLDRCQUFRckYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFFYyxtQkFBUyxFQUFFLFNBQWI7QUFBd0JnRCxZQUFFLEVBQUVBLEVBQTVCO0FBQWdDL0MsaUJBQU8sRUFBRSxNQUFLc0UsWUFBOUM7QUFBNEQzQyxhQUFHLEVBQUUwQztBQUFqRSxTQUExQixlQUNKckYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQnNGLDREQUFwQixFQUFvQyxJQUFwQyxFQUEwQyxrSUFBMUMsQ0FESSxlQUVKdkYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQnVGLDZDQUFwQixFQUF5QjtBQUFFekIsWUFBRSxFQUFFQSxFQUFOO0FBQVVoRCxtQkFBUyxFQUFFO0FBQXJCLFNBQXpCLEVBQ0ksTUFBS3dDLEtBQUwsQ0FBV2YsUUFBWCxDQUFvQjBCLElBQXBCLEtBQTZCSCxFQUE3QixpQkFBbUMvRCw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUU4RCxZQUFFLEVBQUVBO0FBQU4sU0FBM0IsRUFBdUMsTUFBSzBCLEtBQTVDLENBRHZDLEVBRUksR0FGSixlQUdJekYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFOEQsWUFBRSxFQUFFQSxFQUFOO0FBQVVoRCxtQkFBUyxFQUFFO0FBQXJCLFNBQTNCLEVBQXNFcUUsS0FBdEUsQ0FISixDQUZJLENBQVI7QUFNSDtBQVhvQyxLQUF6QztBQWFBakcsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixZQUE1QixFQUEwQztBQUN0Q0MsZ0JBQVUsRUFBRSxJQUQwQjtBQUV0Q0Msa0JBQVksRUFBRSxJQUZ3QjtBQUd0Q0MsY0FBUSxFQUFFLElBSDRCO0FBSXRDQyxXQUFLLEVBQUUsZUFBQ3VFLEVBQUQsRUFBUTtBQUNYLDRCQUFRL0QsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQnVGLDZDQUFwQixFQUF5QixJQUF6QixlQUNKeEYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQmEsbURBQXBCLEVBQTRCO0FBQUV0QixlQUFLLEVBQUV1RSxFQUFUO0FBQWEyQixpQkFBTyxFQUFFLFNBQXRCO0FBQWlDM0UsbUJBQVMsRUFBRSxxQkFBNUM7QUFBbUVDLGlCQUFPLEVBQUUsTUFBSzJFO0FBQWpGLFNBQTVCLGVBQ0kzRiw2Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc0YsNERBQXBCLEVBQW9DO0FBQUV4RSxtQkFBUyxFQUFFO0FBQWIsU0FBcEMsRUFBNkYsc0ZBQTdGLENBREosRUFFSSxRQUZKLENBREksZUFJSmYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQmEsbURBQXBCLEVBQTRCO0FBQUV0QixlQUFLLEVBQUV1RSxFQUFUO0FBQWEyQixpQkFBTyxFQUFFLFFBQXRCO0FBQWdDM0UsbUJBQVMsRUFBRSxtQ0FBM0M7QUFBZ0ZDLGlCQUFPLEVBQUUsTUFBSzRFO0FBQTlGLFNBQTVCLGVBQ0k1Riw2Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc0YsNERBQXBCLEVBQW9DO0FBQUV4RSxtQkFBUyxFQUFFO0FBQWIsU0FBcEMsRUFBNkYsa0RBQTdGLENBREosRUFFSSxHQUZKLENBSkksQ0FBUjtBQU9IO0FBWnFDLEtBQTFDO0FBY0E1QixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGNBQTVCLEVBQTRDO0FBQ3hDQyxnQkFBVSxFQUFFLElBRDRCO0FBRXhDQyxrQkFBWSxFQUFFLElBRjBCO0FBR3hDQyxjQUFRLEVBQUUsSUFIOEI7QUFJeENDLFdBQUssRUFBRSxpQkFBTTtBQUNULFlBQUksTUFBS3FHLFNBQVQsRUFDSSxvQkFBUTdGLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JhLG1EQUFwQixFQUE0QjtBQUFFNEUsaUJBQU8sRUFBRSxTQUFYO0FBQXNCM0UsbUJBQVMsRUFBRSxxQ0FBakM7QUFBd0VDLGlCQUFPLEVBQUUsTUFBSzhFO0FBQXRGLFNBQTVCLGVBQ0o5Riw2Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc0YsNERBQXBCLEVBQW9DLElBQXBDLEVBQTBDLHdMQUExQyxDQURJLEVBRUosR0FGSSxDQUFSO0FBR0osNEJBQU92Riw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDK0YsUUFBMUIsRUFBb0MsSUFBcEMsQ0FBUDtBQUNIO0FBVnVDLEtBQTVDO0FBWUE1RyxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGlCQUE1QixFQUErQztBQUMzQ0MsZ0JBQVUsRUFBRSxJQUQrQjtBQUUzQ0Msa0JBQVksRUFBRSxJQUY2QjtBQUczQ0MsY0FBUSxFQUFFLElBSGlDO0FBSTNDQyxXQUFLLEVBQUUsaUJBQU0sQ0FBRztBQUoyQixLQUEvQztBQU1BTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGNBQTVCLEVBQTRDO0FBQ3hDQyxnQkFBVSxFQUFFLElBRDRCO0FBRXhDQyxrQkFBWSxFQUFFLElBRjBCO0FBR3hDQyxjQUFRLEVBQUUsSUFIOEI7QUFJeENDLFdBQUssRUFBRSxpQkFBTTtBQUNUO0FBQ0EsZUFBTyxNQUFLd0csZUFBTCxFQUFQO0FBQ0g7QUFQdUMsS0FBNUM7QUFTQTdHLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsVUFBNUIsRUFBd0M7QUFDcENDLGdCQUFVLEVBQUUsSUFEd0I7QUFFcENDLGtCQUFZLEVBQUUsSUFGc0I7QUFHcENDLGNBQVEsRUFBRSxJQUgwQjtBQUlwQ0MsV0FBSyxFQUFFLGlCQUFNLENBQUc7QUFKb0IsS0FBeEM7QUFqUlU7QUF1UmI7Ozs7d0NBQ21CO0FBQ2hCLFdBQUt5RyxRQUFMO0FBQ0g7Ozt5Q0FDb0I7QUFDakIsYUFBTztBQUNIL0IsWUFBSSxFQUFFLEVBREg7QUFFSEMsaUJBQVMsRUFBRTtBQUZSLE9BQVA7QUFJSDs7O3VDQUNrQitCLFMsRUFBV0MsUyxFQUFXO0FBQ3JDLFVBQUlBLFNBQVMsQ0FBQzNELFFBQVYsQ0FBbUIwQixJQUFuQixLQUE0QixLQUFLWCxLQUFMLENBQVdmLFFBQVgsQ0FBb0IwQixJQUFoRCxJQUNBaUMsU0FBUyxDQUFDM0QsUUFBVixDQUFtQjJCLFNBQW5CLEtBQWlDLEtBQUtaLEtBQUwsQ0FBV2YsUUFBWCxDQUFvQjJCLFNBRHpELEVBQ29FO0FBQ2hFLGFBQUs4QixRQUFMO0FBQ0g7QUFDSjs7OzZCQUlRO0FBQ0wsMEJBQVFqRyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLGVBQ0pELDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JtRywwREFBcEIsRUFBNEI7QUFBRUMsa0JBQVUsRUFBRSxLQUFLM0csS0FBTCxDQUFXMkc7QUFBekIsT0FBNUIsQ0FESSxFQUVKLEtBQUtDLFlBQUwsRUFGSSxFQUdKLEtBQUsvQyxLQUFMLENBQVduQixPQUFYLGdCQUFxQnBDLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JzRyxnREFBcEIsRUFBNEIsSUFBNUIsQ0FBckIsR0FBeUQsS0FBS0MsUUFBTCxFQUhyRCxFQUlKLEtBQUtDLFlBQUwsRUFKSSxDQUFSO0FBS0g7Ozt3QkFUVztBQUNSLGFBQU8sS0FBS2xELEtBQUwsQ0FBV2YsUUFBWCxDQUFvQjJCLFNBQXBCLEtBQWtDLEtBQWxDLEdBQTBDLEtBQUt1QyxPQUEvQyxHQUF5RCxLQUFLQyxTQUFyRTtBQUNIOzs7O0VBMVNvQzFGLGdEOzs7QUFtVHpDOUIsTUFBTSxDQUFDQyxjQUFQLENBQXNCK0MsV0FBdEIsRUFBbUMsYUFBbkMsRUFBa0Q7QUFDOUM5QyxZQUFVLEVBQUUsSUFEa0M7QUFFOUNDLGNBQVksRUFBRSxJQUZnQztBQUc5Q0MsVUFBUSxFQUFFLElBSG9DO0FBSTlDQyxPQUFLLEVBQUVvSCxxRUFBWUE7QUFKMkIsQ0FBbEQsRSxDQU1BLHlDOzs7Ozs7Ozs7Ozs7QUMxVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDZTtBQUFBLHNCQUFPNUcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxhQUFTLEVBQUU7QUFBYixHQUEzQixlQUNsQmYsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxhQUFTLEVBQUU7QUFBYixHQUEzQixDQURrQixDQUFQO0FBQUEsQ0FBZixFOzs7Ozs7Ozs7OztBQ0ZBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTyxJQUFNRCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyRTtBQUFBLE1BQXhFK0YsT0FBd0UsUUFBeEVBLE9BQXdFO0FBQUEsTUFBL0Q5QyxFQUErRCxRQUEvREEsRUFBK0Q7QUFBQSxNQUEzRGhELFNBQTJELFFBQTNEQSxTQUEyRDtBQUFBLE1BQWhEbUQsSUFBZ0QsUUFBaERBLElBQWdEO0FBQUEsTUFBMUMxRSxLQUEwQyxRQUExQ0EsS0FBMEM7QUFBQSxNQUFuQ3dCLE9BQW1DLFFBQW5DQSxPQUFtQztBQUFBLE1BQTFCOEYsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFFBQWdCLFFBQWhCQSxRQUFnQjtBQUM3RixzQkFBUS9HLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsUUFBcEIsRUFBOEI7QUFBRW1GLFNBQUssRUFBRXlCLE9BQVQ7QUFBa0I5QyxNQUFFLEVBQUVBLEVBQXRCO0FBQTBCaEQsYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUE3RDtBQUFpRW1ELFFBQUksRUFBRUEsSUFBdkU7QUFBNkUxRSxTQUFLLEVBQUVBLEtBQXBGO0FBQTJGd0IsV0FBTyxFQUFFQSxPQUFwRztBQUE2RzhGLFlBQVEsRUFBRUE7QUFBdkgsR0FBOUIsRUFBaUtDLFFBQWpLLENBQVI7QUFDSCxDQUZNO0FBR1BqRyxNQUFNLENBQUNrRyxZQUFQLEdBQXNCO0FBQ2xCakcsV0FBUyxFQUFFLGFBRE87QUFFbEJtRCxNQUFJLEVBQUUsS0FGWTtBQUdsQjRDLFVBQVEsRUFBRSxLQUhRO0FBSWxCRCxTQUFPLEVBQUUsRUFKUztBQUtsQjlDLElBQUUsRUFBRSxFQUxjO0FBTWxCdkUsT0FBSyxFQUFFLEVBTlc7QUFPbEJ1SCxVQUFRLEVBQUU7QUFQUSxDQUF0QixDLENBU0EsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EsSUFBSUUsU0FBUyxHQUFHLGNBQWhCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN4SCxLQUFELEVBQVc7QUFDM0IsTUFBTXlILEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCLENBRDJCLENBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUFRcEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFa0gsT0FBRyxFQUFFQSxHQUFQO0FBQVlwRyxhQUFTLEVBQUVrRyxTQUFTLEdBQUcsVUFBbkM7QUFBK0NsRCxNQUFFLEVBQUVyRSxLQUFLLENBQUNxRTtBQUF6RCxHQUEzQixFQUEwRnJFLEtBQUssQ0FBQ3FILFFBQWhHLENBQVI7QUFDSCxDQVBEOztBQVFBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUMzSCxLQUFELEVBQVc7QUFDMUI7QUFDQSxzQkFBUU0sNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxhQUFTLEVBQUVrRyxTQUFTLEdBQUcsU0FBekI7QUFBb0NsRCxNQUFFLEVBQUVyRSxLQUFLLENBQUNxRTtBQUE5QyxHQUEzQixlQUNKL0QsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQ1AsS0FBSyxDQUFDcUgsUUFBdEMsQ0FESSxDQUFSO0FBRUgsQ0FKRDs7QUFLQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDNUgsS0FBRCxFQUFXO0FBQ3pCO0FBQ0Esc0JBQVFNLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRWMsYUFBUyxFQUFFa0csU0FBUyxHQUFHLFFBQXpCO0FBQW1DbEQsTUFBRSxFQUFFckUsS0FBSyxDQUFDcUU7QUFBN0MsR0FBM0IsRUFBOEVyRSxLQUFLLENBQUNxSCxRQUFwRixDQUFSO0FBQ0gsQ0FIRDs7QUFJQSxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDN0gsS0FBRCxFQUFXO0FBQzNCO0FBQ0Esc0JBQVFNLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRWMsYUFBUyxFQUFFa0csU0FBUyxHQUFHLFVBQXpCO0FBQXFDbEQsTUFBRSxFQUFFckUsS0FBSyxDQUFDcUU7QUFBL0MsR0FBM0IsRUFBZ0ZyRSxLQUFLLENBQUNxSCxRQUF0RixDQUFSO0FBQ0gsQ0FIRDs7QUFJQSxJQUFNN0csS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ1IsS0FBRCxFQUFXO0FBQ3JCLE1BQU04SCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCUCxhQUFTLEdBQUd2SCxLQUFLLENBQUNTLGFBQWxCO0FBQ0gsR0FGRDs7QUFHQXNILHlEQUFTLENBQUNELFlBQUQsRUFBZSxFQUFmLENBQVQ7O0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUFNbkksS0FBSyxDQUFDUyxhQUFuQyxDQUFmO0FBQ0EsUUFBTTRILGNBQWMsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU1uSSxLQUFLLENBQUNTLGFBQVosR0FBNEIsWUFBbkQsQ0FBdkI7QUFDQSxRQUFNNkgsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBTW5JLEtBQUssQ0FBQ1MsYUFBWixHQUE0QixVQUFuRCxDQUFoQixDQUoyQixDQUszQjs7QUFDQSxRQUFJVCxLQUFLLENBQUNVLElBQVYsRUFBZ0I7QUFDWnVILFdBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsaUJBQXBCO0FBQ0FILG9CQUFjLENBQUNFLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCeEksS0FBSyxDQUFDUyxhQUFOLEdBQXNCLGlCQUFuRDtBQUNBMkgsWUFBTSxDQUFDRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQnhJLEtBQUssQ0FBQ1MsYUFBTixHQUFzQixPQUEzQztBQUNBNkgsYUFBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQnhJLEtBQUssQ0FBQ1MsYUFBTixHQUFzQixlQUE1QztBQUNILEtBTEQsTUFNSztBQUNEd0gsV0FBSyxDQUFDTSxTQUFOLENBQWdCRSxNQUFoQixDQUF1QixpQkFBdkI7QUFDQUosb0JBQWMsQ0FBQ0UsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0N6SSxLQUFLLENBQUNTLGFBQU4sR0FBc0IsaUJBQXREO0FBQ0EySCxZQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCekksS0FBSyxDQUFDUyxhQUFOLEdBQXNCLE9BQTlDO0FBQ0E2SCxhQUFPLENBQUNDLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCekksS0FBSyxDQUFDUyxhQUFOLEdBQXNCLGVBQS9DO0FBQ0g7QUFDSixHQWxCRDs7QUFtQkFzSCx5REFBUyxDQUFDQyxnQkFBRCxFQUFtQixDQUFDaEksS0FBSyxDQUFDVSxJQUFQLENBQW5CLENBQVQ7QUFDQSxzQkFBUUosNENBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNENBQUssQ0FBQytGLFFBQTFCLEVBQW9DLElBQXBDLGVBQ0ovRiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUU4RCxNQUFFLEVBQUVyRSxLQUFLLENBQUNxRSxFQUFaO0FBQWdCaEQsYUFBUyxFQUFFckIsS0FBSyxDQUFDUyxhQUFOLEdBQXNCO0FBQWpELEdBQTNCLENBREksZUFFSkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFOEQsTUFBRSxFQUFFckUsS0FBSyxDQUFDcUUsRUFBWjtBQUFnQmhELGFBQVMsRUFBRXJCLEtBQUssQ0FBQ1M7QUFBakMsR0FBM0IsZUFDSUgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxhQUFTLEVBQUVyQixLQUFLLENBQUNTLGFBQU4sR0FBc0I7QUFBbkMsR0FBM0IsZUFDSUgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFOEQsTUFBRSxFQUFFckUsS0FBSyxDQUFDcUUsRUFBWjtBQUFnQmhELGFBQVMsRUFBRXJCLEtBQUssQ0FBQ1MsYUFBTixHQUFzQjtBQUFqRCxHQUEzQixFQUE0RlQsS0FBSyxDQUFDcUgsUUFBbEcsQ0FESixDQURKLENBRkksQ0FBUjtBQUtILENBOUJEOztBQStCQTVILE1BQU0sQ0FBQ2lGLE1BQVAsQ0FBY2xFLEtBQWQsRUFBcUI7QUFDakJLLFFBQU0sRUFBRTJHLFdBRFM7QUFFakJ6RyxPQUFLLEVBQUU0RyxVQUZVO0FBR2pCMUcsTUFBSSxFQUFFMkcsU0FIVztBQUlqQnpHLFFBQU0sRUFBRTBHO0FBSlMsQ0FBckI7QUFNZXJILG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTXNGLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWlDO0FBQUEsTUFBOUJ1QixRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQmhHLFNBQW9CLFFBQXBCQSxTQUFvQjtBQUFBLE1BQVRnRCxFQUFTLFFBQVRBLEVBQVM7QUFDaEQsc0JBQVEvRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVjLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWUsS0FBckM7QUFBNENnRCxNQUFFLEVBQUVBO0FBQWhELEdBQTNCLEVBQWlGZ0QsUUFBakYsQ0FBUjtBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDTyxJQUFNcUIsS0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ2E7QUFDTCwwQkFBT3BJLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI7QUFBRWMsaUJBQVMsRUFBRSxLQUFLckIsS0FBTCxDQUFXcUIsU0FBWCxHQUF1QixLQUFLckIsS0FBTCxDQUFXcUIsU0FBbEMsR0FBOEM7QUFBM0QsT0FBN0IsRUFBbUcsS0FBS3JCLEtBQUwsQ0FBV3FILFFBQTlHLENBQVA7QUFDSDtBQUhMOztBQUFBO0FBQUEsRUFBMkIvRyw0Q0FBSyxDQUFDaUIsU0FBakMsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTXNFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBNkI7QUFBQSxNQUExQndCLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCaEcsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3ZELHNCQUFPZiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVjLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBc0ZnRyxRQUF0RixDQUFQO0FBQ0gsQ0FGTTtBQUdBLElBQU1zQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEyQjtBQUFBLE1BQXhCeEIsT0FBd0IsU0FBeEJBLE9BQXdCO0FBQUEsTUFBZkUsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLHNCQUFRL0csNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxhQUFTLEVBQUU7QUFBYixHQUEzQixlQUNKZiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc0YsY0FBcEIsRUFBb0MsSUFBcEMsRUFBMENzQixPQUExQyxDQURJLEVBRUpFLFFBRkksQ0FBUjtBQUdILENBSk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBOztBQUNBLElBQU1YLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW9DO0FBQUEsTUFBakNrQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSw2QkFBeEJqQyxVQUF3QjtBQUFBLE1BQXhCQSxVQUF3QixnQ0FBWCxJQUFXOztBQUFBLGtCQUNqQmtDLHVEQUFRLENBQUMsS0FBRCxDQURTO0FBQUE7QUFBQSxNQUN4Q0MsT0FEd0M7QUFBQSxNQUMvQkMsVUFEK0I7O0FBRS9DLE1BQU1DLE1BQU0sR0FBR0MsZ0VBQVMsRUFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBbkI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJQyxJQUFJLEdBQUcsS0FBWDtBQURxQixRQUViQyxRQUZhLEdBRUFMLE1BRkEsQ0FFYkssUUFGYSxFQUdyQjtBQUNBOztBQUNBLFFBQUlBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLENBQWxDLEVBQXFDO0FBQ2pDRixVQUFJLEdBQUcsSUFBUDtBQUNIOztBQUNETCxjQUFVLENBQUNLLElBQUQsQ0FBVjtBQUNILEdBVEQ7O0FBVUEsTUFBSSxDQUFDekMsVUFBTCxFQUNJLG9CQUFPckcsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQytGLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFDSjBCLDBEQUFTLENBQUNvQixVQUFELEVBQWEsQ0FBQ0gsTUFBTSxDQUFDSyxRQUFSLENBQWIsQ0FBVDs7QUFDQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbEcsSUFBRCxFQUFVO0FBQ3RCLFFBQUltRyxDQUFKOztBQUNBLFlBQVFuRyxJQUFSO0FBQ0ksV0FBSyxNQUFMO0FBQ0ltRyxTQUFDLEdBQUcsTUFBSjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJQSxTQUFDLEdBQUcsU0FBSjtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNJQSxTQUFDLEdBQUcsUUFBSjtBQUNBOztBQUNKO0FBQ0lBLFNBQUMsR0FBRyxRQUFKO0FBWFI7O0FBYUEsV0FBT0EsQ0FBUDtBQUNILEdBaEJEOztBQWlCQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekIsV0FBT0EsS0FBSyxHQUFJQSxLQUFLLENBQUN0RyxHQUFOLENBQVUsVUFBQ3JELENBQUQsRUFBSTRGLEtBQUosRUFBYztBQUNwQyxVQUFNdEMsSUFBSSxHQUFHa0csT0FBTyxDQUFDeEosQ0FBQyxDQUFDc0QsSUFBSCxDQUFwQjtBQUNBLDBCQUFRL0MsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFYyxpQkFBUyxFQUFFLGlCQUFpQmdDLElBQTlCO0FBQW9DSixXQUFHLEVBQUUwQztBQUF6QyxPQUEzQixFQUE2RTVGLENBQUMsQ0FBQ3VELE9BQS9FLENBQVI7QUFDSCxLQUhlLENBQUosZ0JBR0xoRCw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDK0YsUUFBMUIsRUFBb0MsSUFBcEMsQ0FIUDtBQUlILEdBTEQ7O0FBTUEsTUFBTXNELEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBVTtBQUNwQixXQUFPLElBQUk3SCxPQUFKLENBQVksVUFBQUQsT0FBTztBQUFBLGFBQUkrSCxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxlQUFNaEksT0FBTyxDQUFDLEVBQUQsQ0FBYjtBQUFBLE9BQWxCLEVBQXFDOEgsSUFBckMsQ0FBSjtBQUFBLEtBQW5CLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1sSixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSW9JLE9BQUosRUFBYTtBQUNUYSxXQUFLLENBQUNmLE9BQU8sR0FBR0EsT0FBSCxHQUFhTSxVQUFyQixDQUFMLENBQXNDM0csSUFBdEMsQ0FBMkM7QUFBQSxlQUFNd0csVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxPQUEzQztBQUNBLDBCQUFPekksNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQytGLFFBQTFCLEVBQW9DLElBQXBDLEVBQTBDb0QsU0FBUyxDQUFDVCxNQUFNLENBQUNLLFFBQVIsQ0FBbkQsQ0FBUDtBQUNIOztBQUNELHdCQUFPL0ksNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQytGLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFDSCxHQU5EOztBQU9BLHNCQUFPL0YsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQytGLFFBQTFCLEVBQW9DLElBQXBDLEVBQTBDM0YsSUFBSSxFQUE5QyxDQUFQO0FBQ0gsQ0FuREQ7O0FBb0RlZ0cscUVBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2xpYi9Nb2RhbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlQ2xvc2VcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbURlbGV0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbURlbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lT2ZJdGVtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiaXRlbUluZm9cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbUluZm9cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXJhbXMuaXRlbURlbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtSW5mbyh0aGlzLnByb3BzLnBhcmFtcy5pdGVtRGVsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIHsgYmFzZUNsYXNzTmFtZTogXCJkZWxldGUtZGlhbG9nXCIsIHNob3c6IHRoaXMucHJvcHMuc2hvdywgb25IaWRlOiB0aGlzLmhhbmRsZUNsb3NlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkhlYWRlciwgeyBjbG9zZUJ1dHRvbjogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLlRpdGxlLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZU9mSXRlbSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5Cb2R5LCBudWxsLCB0aGlzLmdldEl0ZW1JbmZvKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5Gb290ZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiBcImJ0bi1zZWNvbmRhcnlcIiwgdmFsdWU6IGZhbHNlLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsb3NlIH0sIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tZGFuZ2VyXCIsIHZhbHVlOiB0cnVlLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsb3NlIH0sIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiKSkpKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvUm93JztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL2xpYi9hbGVydC9BbGVydHMnO1xuaW1wb3J0IHsgQWxlcnRDb250ZXh0IH0gZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdE9mSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGF0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHNob3dEZWxldGVEaWFsb2c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1EZWxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgc29ydGVkQnk6IHRoaXMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICAvL3VwQXJyb3cgPSAnJiN4MDIyNUM7JztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidXBBcnJvd1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1xcdTIxOTEnXG4gICAgICAgIH0pO1xuICAgICAgICAvL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkb3duQXJyb3dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICdcXHUyMTkzJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZU9mSXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFkZEJ1dHRvblwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEtleVZhbHVlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAob2JqLCBrZXkpID0+IG9ialtrZXldXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRFcnJvcnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IHRoaXMuZ2V0S2V5VmFsdWUoZGF0YSwga2V5KSB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbXNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHRoaXMuc3RhdGUuc29ydGVkQnksXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcjogKF9hID0gdGhpcy5wcm9wcy5vd25lcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHsgaXRlbXM6IHJlcy5kYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRJdGVtcyBzdGF0ZVwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRBbGVydHModGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ0blNvcnRDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWRfbmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEJ5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZEJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNvcnRlZEJ5KSwgeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidG5EZWxDbGlja1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlRGlhbG9nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVsZXRlOiBpdGVtLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuQWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy51cmwsIHsgYnRuX2FkZDogJycgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyh0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiYnRuRWRpdENsaWNrXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2snLCBpdGVtX3BrKTtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBidG5fZWRpdDogJycsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fcGs6IGl0ZW1fcGssXG4gICAgICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmhpc3RvcnknLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suY2F0Y2gnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0QWxlcnRzKHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJdGVtSWRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gdm9pZCAwID8gaXRlbSA6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiaXRlbURlbGV0ZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGNvbmZpcm0pID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZWxldGVEaWFsb2c6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiB0aGlzLnN0YXRlLnNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX3BrOiB0aGlzLmdldEl0ZW1JZCh0aGlzLnN0YXRlLml0ZW1EZWxldGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IChfYSA9IHRoaXMucHJvcHMub3duZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IC0xLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMubmFtZU9mSXRlbX0g0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRBbGVydHModGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0VGhDZWxsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoaWQsIHRpdGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiwgaWQ6IGlkLCBvbkNsaWNrOiB0aGlzLmJ0blNvcnRDbGljaywga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MURcXHUwNDMwXFx1MDQzNlxcdTA0M0NcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwMEEwXFx1MDQzNFxcdTA0M0JcXHUwNDRGXFx1MDBBMFxcdTA0NDFcXHUwNDNFXFx1MDQ0MFxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzQVxcdTA0MzhcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lID09PSBpZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkIH0sIHRoaXMuYXJyb3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dfX3RleHRcIiB9LCB0aXRsZSkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25zXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgdG9vbHRpcFwiLCBvbkNsaWNrOiB0aGlzLmJ0bkVkaXRDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTI3ZjYnKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFsdWU6IGlkLCB2YXJpYW50OiBcImRhbmdlclwiLCBjbGFzc05hbWU6IFwiYnRuLWRhbmdlciBidG4tZGFuZ2VyX2RlbCB0b29sdGlwXCIsIG9uQ2xpY2s6IHRoaXMuYnRuRGVsQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0QWRkQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIiwgb25DbGljazogdGhpcy5idG5BZGRDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgXCJcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XFx1MDBBMFxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDMzXFx1MDQzRVxcdTAwQTBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0JcXHUwNDMwXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1xcdTA0NDZcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXREZWxldGVEaWFsb2dcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVsZXRlRGlhbG9nXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5zdGF0ZS5zaG93RGVsZXRlRGlhbG9nKSByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREZWxldGVEaWFsb2coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRhYmxlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUuc29ydGVkQnkubmFtZSAhPT0gdGhpcy5zdGF0ZS5zb3J0ZWRCeS5uYW1lIHx8XG4gICAgICAgICAgICBwcmV2U3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uICE9PSB0aGlzLnN0YXRlLnNvcnRlZEJ5LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBhcnJvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydGVkQnkuZGlyZWN0aW9uID09PSAnYXNjJyA/IHRoaXMudXBBcnJvdyA6IHRoaXMuZG93bkFycm93O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgd2l0aEFsZXJ0czogdGhpcy5wcm9wcy53aXRoQWxlcnRzIH0pLFxuICAgICAgICAgICAgdGhpcy5kZWxldGVEaWFsb2coKSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBudWxsKSA6IHRoaXMuZ2V0VGFibGUoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWRkQnV0dG9uKCkpKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTGlzdE9mSXRlbXMsIFwiY29udGV4dFR5cGVcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBBbGVydENvbnRleHRcbn0pO1xuLy9leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RPZkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vY3NzL0xvYWRlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY2VudGVyLWxvYWRlclwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJsZHMtZHVhbC1yaW5nXCIgfSkpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnbW9kYWwtZGlhbG9nJztcbmNvbnN0IE1vZGFsSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBjbGFzc0xpc3QgPSByZWYuY3VycmVudCEuY2xhc3NMaXN0O1xuICAgIC8vICAgY29uc29sZS5sb2coJ01vZGFsSGVhZGVyLmJhc2VDbGFzcycsIGJhc2VDbGFzcyk7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiByZWYsIGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19faGVhZGVyJywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5UaXRsZScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fdGl0bGUnLCBpZDogcHJvcHMuaWQgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIHByb3BzLmNoaWxkcmVuKSkpO1xufTtcbmNvbnN0IE1vZGFsQm9keSA9IChwcm9wcykgPT4ge1xuICAgIC8vdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKCdNb2RhbC5Cb2R5JywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19ib2R5JywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWxGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuRm9vdGVyJywgYmFzZUNsYXNzKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBiYXNlQ2xhc3MgKyAnX19mb290ZXInLCBpZDogcHJvcHMuaWQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHNldEJhc2VDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChzZXRCYXNlQ2xhc3MsIFtdKTtcbiAgICBjb25zdCBjaGFuZ2VTaG93U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBwcm9wcy5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgY29uc3QgJG1vZGFsQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcCcpO1xuICAgICAgICBjb25zdCAkZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZGFsLm1vZGFsJywgJG1vZGFsKTtcbiAgICAgICAgaWYgKHByb3BzLnNob3cpIHtcbiAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgJG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LmFkZChwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgJG1vZGFsLmNsYXNzTGlzdC5hZGQocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgJGRpYWxvZy5jbGFzc0xpc3QuYWRkKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1tb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAkbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19iYWNrZHJvcF9zaG93Jyk7XG4gICAgICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19zaG93Jyk7XG4gICAgICAgICAgICAkZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZ19zaG93Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdChjaGFuZ2VTaG93U3RhdHVzLCBbcHJvcHMuc2hvd10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2cnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fY2hpbGRyZW4nIH0sIHByb3BzLmNoaWxkcmVuKSkpKSk7XG59O1xuT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICAgIEhlYWRlcjogTW9kYWxIZWFkZXIsXG4gICAgVGl0bGU6IE1vZGFsVGl0bGUsXG4gICAgQm9keTogTW9kYWxCb2R5LFxuICAgIEZvb3RlcjogTW9kYWxGb290ZXIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3cgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpZCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAncm93JywgaWQ6IGlkIH0sIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJ3RhYmxlJyB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQsIHdpdGhBbGVydHMgPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgaWYgKCF3aXRoQWxlcnRzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheSh0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9