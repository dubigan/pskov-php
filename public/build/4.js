(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/components/Detail/DetailOfItem.ts":
/*!**************************************************!*\
  !*** ./assets/components/Detail/DetailOfItem.ts ***!
  \**************************************************/
/*! exports provided: useDetailOfItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDetailOfItem", function() { return useDetailOfItem; });
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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
/* harmony import */ var _lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/utils/utils */ "./assets/components/lib/utils/utils.ts");













function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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






var useDetailOfItem = function useDetailOfItem(_ref) {
  var functions = _ref.functions;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_12__["useContext"])(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_15__["AlertContext"]);
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_13__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(functions.getNewItem()),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  var getItemFromData = function getItemFromData(data) {
    //console.log('getItemFromData', data);
    return data.id ? data : functions.getNewItem();
  };

  var getChangedItem = function getChangedItem(item, name, value) {
    return Object.assign(Object.assign({}, item), _defineProperty({}, name, value));
  };

  return {
    getItem: function getItem() {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(functions.url, {});

              case 3:
                res = _context.sent;
                //console.log('getItem.history', this.props.history);
                Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__["redirect"])(history, res.data.redirect);
                setItem(getItemFromData(res.data));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                context.setAlerts({
                  messages: Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__["getErrors"])(_context.t0.response.data)
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
    },
    saveItem: function saveItem() {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res, messages;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(functions.url, {
                  item: functions.verifyItem(item)
                });

              case 3:
                res = _context2.sent;
                //console.log("saveItem", res.data);
                context.setAlerts({
                  messages: [{
                    type: 'success',
                    message: 'Информация сохранена'
                  }]
                });
                setItem(getItemFromData(res.data));
                Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__["redirect"])(history, res.data.redirect, 'back');
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

                //console.log('saveItem', err);
                if (typeof _context2.t0.response.data == 'string') {
                  console.log('saveItem', _context2.t0.response.data);
                  messages = [_context2.t0.response.data];
                } else {
                  messages = Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__["getErrors"])(_context2.t0.response.data);
                } //console.log('saveItem.context', this.context);


                context.setAlerts({
                  messages: messages
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));
    },
    changeItem: function changeItem(e) {
      setItem(getChangedItem(item, e.target.name, e.target.value));
    },
    item: item,
    setItem: setItem
  };
};

/***/ }),

/***/ "./assets/components/Detail/useDetailFunctions.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/Detail/useDetailFunctions.tsx ***!
  \*********************************************************/
/*! exports provided: useDetailFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDetailFunctions", function() { return useDetailFunctions; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY_CAR = {
  id: -1,
  manufacturer: '',
  model: '',
  production: new Date().toLocaleDateString('ru'),
  color: '',
  power: undefined,
  mileage: undefined,
  comment: ''
};
var EMPTY_OWNER_ID = -10; //const UNDEFINED_OWNER = -1;

var EMPTY_OWNER = {
  id: EMPTY_OWNER_ID,
  cars: [],
  name: '',
  patronymic: '',
  last_name: '',
  gender: 'f',
  age: undefined,
  comment: ''
};
var functions = {
  car: {
    url: '/api/car/',
    tooltipPlace: 'bottom',
    getNewItemId: function getNewItemId() {
      return -1;
    },
    getNewItem: function getNewItem() {
      var item = EMPTY_CAR; //console.log('getNewItem', item);

      return item;
    },
    verifyItem: function verifyItem(item) {
      var _a, _b;

      item.power = (_a = item.power) !== null && _a !== void 0 ? _a : 0;
      item.mileage = (_b = item.mileage) !== null && _b !== void 0 ? _b : 0;
      return item;
    }
  },
  owner: {
    url: '/api/owner/',
    tooltipPlace: 'bottom',
    getNewItemId: function getNewItemId() {
      return EMPTY_OWNER_ID;
    },
    getNewItem: function getNewItem() {
      return EMPTY_OWNER;
    },
    verifyItem: function verifyItem(item) {
      var _a;

      item.age = (_a = item.age) !== null && _a !== void 0 ? _a : 0;
      return item;
    }
  }
};
var useDetailFunctions = function useDetailFunctions(detailType) {
  return functions[detailType];
};

/***/ }),

/***/ "./assets/components/lib/Card/Card.tsx":
/*!*********************************************!*\
  !*** ./assets/components/lib/Card/Card.tsx ***!
  \*********************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card'
  }, children);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./assets/components/lib/Form/Form.tsx":
/*!*********************************************!*\
  !*** ./assets/components/lib/Form/Form.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var baseClass = 'form';

var getClassName = function getClassName() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var auxClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (className) return className;
  return baseClass + suffix + (auxClassName ? ' ' + auxClassName : '');
};

var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      auxClassName = _ref.auxClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: getClassName(className, auxClassName, '__label')
  }, children);
};

var FormGroup = function FormGroup(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      auxClassName = _ref2.auxClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: getClassName(className, auxClassName, '__group')
  }, children);
};

var FormControlSelect = function FormControlSelect(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: getClassName(props.className, props.auxClassName, '__select'),
    onChange: props.onChange
  }, props.children);
};

var FormControl = function FormControl(props) {
  var type = 'text';
  if (props.type) type = props.type;

  switch (type) {
    case 'text':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object.assign({}, props, {
        type: "text",
        className: getClassName(props.className, props.auxClassName, '__text'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange,
        //onClick={props.onClick}
        readOnly: !props.onChange
      }));

    case 'textarea':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", Object.assign({}, props, {
        className: getClassName(props.className, props.auxClassName, '__control'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        rows: props.rows ? +props.rows : undefined,
        onChange: props.onChange
      }));

    case 'check':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object.assign({}, props, {
        type: "checkbox",
        className: getClassName(props.className, props.auxClassName, '__check'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange
      }));

    case 'select':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormControlSelect, Object.assign({}, props), props.children);

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }
}; // const Form: TForm = props => {
//   if (props.baseClassName) baseClass = props.baseClassName;
//   return (
//     <form
//       action={props.action}
//       method={props.method}
//       className={getClassName(props.className, props.auxClassName)}
//       onSubmit={props.onSubmit}
//     >
//       {props.children}
//     </form>
//   );
// };


function Form(props) {
  if (props.baseClassName) baseClass = props.baseClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: props.action,
    method: props.method,
    className: getClassName(props.className, props.auxClassName),
    onSubmit: props.onSubmit
  }, props.children);
}

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormControlSelect;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsT2ZJdGVtLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbC91c2VEZXRhaWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtL0Zvcm0udHN4Il0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsInVzZURldGFpbE9mSXRlbSIsImZ1bmN0aW9ucyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRDb250ZXh0IiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImdldE5ld0l0ZW0iLCJpdGVtIiwic2V0SXRlbSIsImdldEl0ZW1Gcm9tRGF0YSIsImRhdGEiLCJpZCIsImdldENoYW5nZWRJdGVtIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJyZXMiLCJyZWRpcmVjdCIsInNldEFsZXJ0cyIsIm1lc3NhZ2VzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzYXZlSXRlbSIsInZlcmlmeUl0ZW0iLCJ0eXBlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VJdGVtIiwidGFyZ2V0IiwiRU1QVFlfQ0FSIiwibWFudWZhY3R1cmVyIiwibW9kZWwiLCJwcm9kdWN0aW9uIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbG9yIiwicG93ZXIiLCJ1bmRlZmluZWQiLCJtaWxlYWdlIiwiY29tbWVudCIsIkVNUFRZX09XTkVSX0lEIiwiRU1QVFlfT1dORVIiLCJjYXJzIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNhciIsInRvb2x0aXBQbGFjZSIsImdldE5ld0l0ZW1JZCIsIl9hIiwiX2IiLCJvd25lciIsInVzZURldGFpbEZ1bmN0aW9ucyIsImRldGFpbFR5cGUiLCJDYXJkSGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJDYXJkVGl0bGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJDYXJkIiwiSGVhZGVyIiwiQm9keSIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwiYXV4Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInJlYWRPbmx5Iiwicm93cyIsIkZyYWdtZW50IiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFt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UUFBMUIsRUFBb0MsSUFBcEMsQ0FBUDtBQVpSO0FBY0gsQ0FsQkQsQyxDQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsSUFBVCxDQUFjUixLQUFkLEVBQXFCO0FBQ2pCLE1BQUlBLEtBQUssQ0FBQ1MsYUFBVixFQUNJaEIsU0FBUyxHQUFHTyxLQUFLLENBQUNTLGFBQWxCO0FBQ0osc0JBQVExQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUUwQixVQUFNLEVBQUVWLEtBQUssQ0FBQ1UsTUFBaEI7QUFBd0JDLFVBQU0sRUFBRVgsS0FBSyxDQUFDVyxNQUF0QztBQUE4QzdCLGFBQVMsRUFBRVksWUFBWSxDQUFDTSxLQUFLLENBQUNsQixTQUFQLEVBQWtCa0IsS0FBSyxDQUFDTCxZQUF4QixDQUFyRTtBQUE0R2lCLFlBQVEsRUFBRVosS0FBSyxDQUFDWTtBQUE1SCxHQUE1QixFQUFvS1osS0FBSyxDQUFDbkIsUUFBMUssQ0FBUjtBQUNIOztBQUNEMkIsSUFBSSxDQUFDSyxLQUFMLEdBQWFoQixTQUFiO0FBQ0FXLElBQUksQ0FBQ00sT0FBTCxHQUFlWixXQUFmO0FBQ0FNLElBQUksQ0FBQ08sTUFBTCxHQUFjaEIsaUJBQWQ7QUFDQVMsSUFBSSxDQUFDUSxLQUFMLEdBQWFsQixTQUFiO0FBQ2VVLG1FQUFmLEUiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmltcG9ydCB7IGdldEVycm9ycywgcmVkaXJlY3QgfSBmcm9tICcuLi9saWIvdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGNvbnN0IHVzZURldGFpbE9mSXRlbSA9ICh7IGZ1bmN0aW9ucywgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZShmdW5jdGlvbnMuZ2V0TmV3SXRlbSgpKTtcbiAgICBjb25zdCBnZXRJdGVtRnJvbURhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuaWQgPyBkYXRhIDogZnVuY3Rpb25zLmdldE5ld0l0ZW0oKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldENoYW5nZWRJdGVtID0gKGl0ZW0sIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pLCB7IFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJdGVtOiAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChmdW5jdGlvbnMudXJsLCB7fSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbS5oaXN0b3J5JywgdGhpcy5wcm9wcy5oaXN0b3J5KTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChoaXN0b3J5LCByZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbShnZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzOiBnZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc2F2ZUl0ZW06ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KGZ1bmN0aW9ucy51cmwsIHsgaXRlbTogZnVuY3Rpb25zLnZlcmlmeUl0ZW0oaXRlbSkgfSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhdmVJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzOiBbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW0oZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3QoaGlzdG9yeSwgcmVzLmRhdGEucmVkaXJlY3QsICdiYWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlSXRlbScsIGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbZXJyLnJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBnZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzYXZlSXRlbS5jb250ZXh0JywgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY2hhbmdlSXRlbTogKGUpID0+IHtcbiAgICAgICAgICAgIHNldEl0ZW0oZ2V0Q2hhbmdlZEl0ZW0oaXRlbSwgZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgc2V0SXRlbSxcbiAgICB9O1xufTtcbiIsImNvbnN0IEVNUFRZX0NBUiA9IHtcbiAgICBpZDogLTEsXG4gICAgbWFudWZhY3R1cmVyOiAnJyxcbiAgICBtb2RlbDogJycsXG4gICAgcHJvZHVjdGlvbjogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JyksXG4gICAgY29sb3I6ICcnLFxuICAgIHBvd2VyOiB1bmRlZmluZWQsXG4gICAgbWlsZWFnZTogdW5kZWZpbmVkLFxuICAgIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IEVNUFRZX09XTkVSX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcbmNvbnN0IEVNUFRZX09XTkVSID0ge1xuICAgIGlkOiBFTVBUWV9PV05FUl9JRCxcbiAgICBjYXJzOiBbXSxcbiAgICBuYW1lOiAnJyxcbiAgICBwYXRyb255bWljOiAnJyxcbiAgICBsYXN0X25hbWU6ICcnLFxuICAgIGdlbmRlcjogJ2YnLFxuICAgIGFnZTogdW5kZWZpbmVkLFxuICAgIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgICBjYXI6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9jYXIvJyxcbiAgICAgICAgdG9vbHRpcFBsYWNlOiAnYm90dG9tJyxcbiAgICAgICAgZ2V0TmV3SXRlbUlkOiAoKSA9PiAtMSxcbiAgICAgICAgZ2V0TmV3SXRlbTogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVNUFRZX0NBUjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldE5ld0l0ZW0nLCBpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LFxuICAgICAgICB2ZXJpZnlJdGVtOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGl0ZW0ucG93ZXIgPSAoX2EgPSBpdGVtLnBvd2VyKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgICAgICAgICAgaXRlbS5taWxlYWdlID0gKF9iID0gaXRlbS5taWxlYWdlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvd25lcjoge1xuICAgICAgICB1cmw6ICcvYXBpL293bmVyLycsXG4gICAgICAgIHRvb2x0aXBQbGFjZTogJ2JvdHRvbScsXG4gICAgICAgIGdldE5ld0l0ZW1JZDogKCkgPT4gRU1QVFlfT1dORVJfSUQsXG4gICAgICAgIGdldE5ld0l0ZW06ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9PV05FUjtcbiAgICAgICAgfSxcbiAgICAgICAgdmVyaWZ5SXRlbTogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGl0ZW0uYWdlID0gKF9hID0gaXRlbS5hZ2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDA7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCB1c2VEZXRhaWxGdW5jdGlvbnMgPSAoZGV0YWlsVHlwZSkgPT4ge1xuICAgIHJldHVybiBmdW5jdGlvbnNbZGV0YWlsVHlwZV07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKTtcbn07XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnZm9ybSc7XG5jb25zdCBnZXRDbGFzc05hbWUgPSAoY2xhc3NOYW1lID0gJycsIGF1eENsYXNzTmFtZSA9ICcnLCBzdWZmaXggPSAnJykgPT4ge1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJhc2VDbGFzcyArIHN1ZmZpeCArIChhdXhDbGFzc05hbWUgPyAnICcgKyBhdXhDbGFzc05hbWUgOiAnJyk7XG59O1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19sYWJlbCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtR3JvdXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2dyb3VwJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Db250cm9sU2VsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3NlbGVjdCcpLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IChwcm9wcykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG4vLyBjb25zdCBGb3JtOiBURm9ybSA9IHByb3BzID0+IHtcbi8vICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGZvcm1cbi8vICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuLy8gICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XG4vLyAgICAgICBjbGFzc05hbWU9e2dldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSl9XG4vLyAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4vLyAgICAgPlxuLy8gICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgIDwvZm9ybT5cbi8vICAgKTtcbi8vIH07XG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpXG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogcHJvcHMuYWN0aW9uLCBtZXRob2Q6IHByb3BzLm1ldGhvZCwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpLCBvblN1Ym1pdDogcHJvcHMub25TdWJtaXQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn1cbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uU2VsZWN0ID0gRm9ybUNvbnRyb2xTZWxlY3Q7XG5Gb3JtLkdyb3VwID0gRm9ybUdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=