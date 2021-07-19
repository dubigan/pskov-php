(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsT2ZJdGVtLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbC91c2VEZXRhaWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtL0Zvcm0udHN4Il0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsInVzZURldGFpbE9mSXRlbSIsImZ1bmN0aW9ucyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRDb250ZXh0IiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImdldE5ld0l0ZW0iLCJpdGVtIiwic2V0SXRlbSIsImdldEl0ZW1Gcm9tRGF0YSIsImRhdGEiLCJpZCIsImdldENoYW5nZWRJdGVtIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJyZXMiLCJyZWRpcmVjdCIsInNldEFsZXJ0cyIsIm1lc3NhZ2VzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzYXZlSXRlbSIsInZlcmlmeUl0ZW0iLCJ0eXBlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VJdGVtIiwidGFyZ2V0IiwiRU1QVFlfQ0FSIiwibWFudWZhY3R1cmVyIiwibW9kZWwiLCJwcm9kdWN0aW9uIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbG9yIiwicG93ZXIiLCJ1bmRlZmluZWQiLCJtaWxlYWdlIiwiY29tbWVudCIsIkVNUFRZX09XTkVSX0lEIiwiRU1QVFlfT1dORVIiLCJjYXJzIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNhciIsInRvb2x0aXBQbGFjZSIsImdldE5ld0l0ZW1JZCIsIm93bmVyIiwiX2EiLCJ1c2VEZXRhaWxGdW5jdGlvbnMiLCJkZXRhaWxUeXBlIiwiQ2FyZEhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZCIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiLCJUaXRsZSIsImJhc2VDbGFzcyIsImdldENsYXNzTmFtZSIsImF1eENsYXNzTmFtZSIsInN1ZmZpeCIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sU2VsZWN0IiwicHJvcHMiLCJvbkNoYW5nZSIsIkZvcm1Db250cm9sIiwicGxhY2Vob2xkZXIiLCJtYXhMZW5ndGgiLCJyZWFkT25seSIsInJvd3MiLCJGcmFnbWVudCIsIkZvcm0iLCJiYXNlQ2xhc3NOYW1lIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJMYWJlbCIsIkNvbnRyb2wiLCJTZWxlY3QiLCJHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsV0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZSCxDQUFqQixHQUFxQkcsS0FBckIsR0FBNkIsSUFBSUgsQ0FBSixDQUFNLFVBQVVJLE9BQVYsRUFBbUI7QUFB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QUFFWCxLQUFLLENBQUNXLE1BQXRDO0FBQThDN0IsYUFBUyxFQUFFWSxZQUFZLENBQUNNLEtBQUssQ0FBQ2xCLFNBQVAsRUFBa0JrQixLQUFLLENBQUNMLFlBQXhCLENBQXJFO0FBQTRHaUIsWUFBUSxFQUFFWixLQUFLLENBQUNZO0FBQTVILEdBQTVCLEVBQW9LWixLQUFLLENBQUNuQixRQUExSyxDQUFSO0FBQ0g7O0FBQ0QyQixJQUFJLENBQUNLLEtBQUwsR0FBYWhCLFNBQWI7QUFDQVcsSUFBSSxDQUFDTSxPQUFMLEdBQWVaLFdBQWY7QUFDQU0sSUFBSSxDQUFDTyxNQUFMLEdBQWNoQixpQkFBZDtBQUNBUyxJQUFJLENBQUNRLEtBQUwsR0FBYWxCLFNBQWI7QUFDZVUsbUVBQWYsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFsZXJ0Q29udGV4dCB9IGZyb20gJy4uL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0RXJyb3JzLCByZWRpcmVjdCB9IGZyb20gJy4uL2xpYi91dGlscy91dGlscyc7XG5leHBvcnQgY29uc3QgdXNlRGV0YWlsT2ZJdGVtID0gKHsgZnVuY3Rpb25zLCB9KSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKGZ1bmN0aW9ucy5nZXROZXdJdGVtKCkpO1xuICAgIGNvbnN0IGdldEl0ZW1Gcm9tRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1Gcm9tRGF0YScsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS5pZCA/IGRhdGEgOiBmdW5jdGlvbnMuZ2V0TmV3SXRlbSgpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Q2hhbmdlZEl0ZW0gPSAoaXRlbSwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEl0ZW06ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KGZ1bmN0aW9ucy51cmwsIHt9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtLmhpc3RvcnknLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0KGhpc3RvcnksIHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtKGdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKHsgbWVzc2FnZXM6IGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzYXZlSXRlbTogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QoZnVuY3Rpb25zLnVybCwgeyBpdGVtOiBmdW5jdGlvbnMudmVyaWZ5SXRlbShpdGVtKSB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2F2ZUl0ZW1cIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKHsgbWVzc2FnZXM6IFt7IHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINGB0L7RhdGA0LDQvdC10L3QsCcgfV0gfSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbShnZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpKTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChoaXN0b3J5LCByZXMuZGF0YS5yZWRpcmVjdCwgJ2JhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzYXZlSXRlbScsIGVycik7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtLmNvbnRleHQnLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKHsgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjaGFuZ2VJdGVtOiAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0SXRlbShnZXRDaGFuZ2VkSXRlbShpdGVtLCBlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBpdGVtLFxuICAgICAgICBzZXRJdGVtLFxuICAgIH07XG59O1xuIiwiY29uc3QgRU1QVFlfQ0FSID0ge1xuICAgIGlkOiAtMSxcbiAgICBtYW51ZmFjdHVyZXI6ICcnLFxuICAgIG1vZGVsOiAnJyxcbiAgICBwcm9kdWN0aW9uOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygncnUnKSxcbiAgICBjb2xvcjogJycsXG4gICAgcG93ZXI6IHVuZGVmaW5lZCxcbiAgICBtaWxlYWdlOiB1bmRlZmluZWQsXG4gICAgY29tbWVudDogJycsXG59O1xuY29uc3QgRU1QVFlfT1dORVJfSUQgPSAtMTA7XG4vL2NvbnN0IFVOREVGSU5FRF9PV05FUiA9IC0xO1xuY29uc3QgRU1QVFlfT1dORVIgPSB7XG4gICAgaWQ6IEVNUFRZX09XTkVSX0lELFxuICAgIGNhcnM6IFtdLFxuICAgIG5hbWU6ICcnLFxuICAgIHBhdHJvbnltaWM6ICcnLFxuICAgIGxhc3RfbmFtZTogJycsXG4gICAgZ2VuZGVyOiAnZicsXG4gICAgYWdlOiB1bmRlZmluZWQsXG4gICAgY29tbWVudDogJycsXG59O1xuY29uc3QgZnVuY3Rpb25zID0ge1xuICAgIGNhcjoge1xuICAgICAgICB1cmw6ICcvYXBpL2Nhci8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBnZXROZXdJdGVtSWQ6ICgpID0+IC0xLFxuICAgICAgICBnZXROZXdJdGVtOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gRU1QVFlfQ0FSO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TmV3SXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0sXG4gICAgICAgIHZlcmlmeUl0ZW06IChpdGVtKSA9PiBpdGVtLFxuICAgIH0sXG4gICAgb3duZXI6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9vd25lci8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBnZXROZXdJdGVtSWQ6ICgpID0+IEVNUFRZX09XTkVSX0lELFxuICAgICAgICBnZXROZXdJdGVtOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfT1dORVI7XG4gICAgICAgIH0sXG4gICAgICAgIHZlcmlmeUl0ZW06IChpdGVtKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpdGVtLmFnZSA9IChfYSA9IGl0ZW0uYWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3QgdXNlRGV0YWlsRnVuY3Rpb25zID0gKGRldGFpbFR5cGUpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb25zW2RldGFpbFR5cGVdO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9