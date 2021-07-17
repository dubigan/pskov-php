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
                context.setAlerts(Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_16__["getErrors"])(_context.t0.response.data));

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
                  item: item
                });

              case 3:
                res = _context2.sent;
                //console.log("saveItem", res.data);
                context.setAlerts([{
                  type: 'success',
                  message: 'Информация сохранена'
                }]);
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


                context.setAlerts(messages);

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
    }
  }
};
var useDetailFunctions = function useDetailFunctions(detailType) {
  return functions[detailType];
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsT2ZJdGVtLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbC91c2VEZXRhaWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwidXNlRGV0YWlsT2ZJdGVtIiwiZnVuY3Rpb25zIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVN0YXRlIiwiZ2V0TmV3SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbUZyb21EYXRhIiwiZGF0YSIsImlkIiwiZ2V0Q2hhbmdlZEl0ZW0iLCJuYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsInVybCIsInJlcyIsInJlZGlyZWN0Iiwic2V0QWxlcnRzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzYXZlSXRlbSIsInR5cGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwiY2hhbmdlSXRlbSIsInRhcmdldCIsIkVNUFRZX0NBUiIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwicHJvZHVjdGlvbiIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb2xvciIsInBvd2VyIiwidW5kZWZpbmVkIiwibWlsZWFnZSIsImNvbW1lbnQiLCJFTVBUWV9PV05FUl9JRCIsIkVNUFRZX09XTkVSIiwiY2FycyIsInBhdHJvbnltaWMiLCJsYXN0X25hbWUiLCJnZW5kZXIiLCJhZ2UiLCJjYXIiLCJ0b29sdGlwUGxhY2UiLCJnZXROZXdJdGVtSWQiLCJvd25lciIsInVzZURldGFpbEZ1bmN0aW9ucyIsImRldGFpbFR5cGUiLCJDYXJkSGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJDYXJkVGl0bGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJDYXJkIiwiSGVhZGVyIiwiQm9keSIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwiYXV4Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInJlYWRPbmx5Iiwicm93cyIsIkZyYWdtZW50IiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxhQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFp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YXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmltcG9ydCB7IGdldEVycm9ycywgcmVkaXJlY3QgfSBmcm9tICcuLi9saWIvdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGNvbnN0IHVzZURldGFpbE9mSXRlbSA9ICh7IGZ1bmN0aW9ucywgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZShmdW5jdGlvbnMuZ2V0TmV3SXRlbSgpKTtcbiAgICBjb25zdCBnZXRJdGVtRnJvbURhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuaWQgPyBkYXRhIDogZnVuY3Rpb25zLmdldE5ld0l0ZW0oKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldENoYW5nZWRJdGVtID0gKGl0ZW0sIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pLCB7IFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJdGVtOiAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChmdW5jdGlvbnMudXJsLCB7fSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbS5oaXN0b3J5JywgdGhpcy5wcm9wcy5oaXN0b3J5KTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChoaXN0b3J5LCByZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbShnZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyhnZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHNhdmVJdGVtOiAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChmdW5jdGlvbnMudXJsLCB7IGl0ZW0gfSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhdmVJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyhbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtKGdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0KGhpc3RvcnksIHJlcy5kYXRhLnJlZGlyZWN0LCAnYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gW2Vyci5yZXNwb25zZS5kYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0uY29udGV4dCcsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMobWVzc2FnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY2hhbmdlSXRlbTogKGUpID0+IHtcbiAgICAgICAgICAgIHNldEl0ZW0oZ2V0Q2hhbmdlZEl0ZW0oaXRlbSwgZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgc2V0SXRlbSxcbiAgICB9O1xufTtcbiIsImNvbnN0IEVNUFRZX0NBUiA9IHtcbiAgICBpZDogLTEsXG4gICAgbWFudWZhY3R1cmVyOiAnJyxcbiAgICBtb2RlbDogJycsXG4gICAgcHJvZHVjdGlvbjogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ3J1JyksXG4gICAgY29sb3I6ICcnLFxuICAgIHBvd2VyOiB1bmRlZmluZWQsXG4gICAgbWlsZWFnZTogdW5kZWZpbmVkLFxuICAgIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IEVNUFRZX09XTkVSX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcbmNvbnN0IEVNUFRZX09XTkVSID0ge1xuICAgIGlkOiBFTVBUWV9PV05FUl9JRCxcbiAgICBjYXJzOiBbXSxcbiAgICBuYW1lOiAnJyxcbiAgICBwYXRyb255bWljOiAnJyxcbiAgICBsYXN0X25hbWU6ICcnLFxuICAgIGdlbmRlcjogJ2YnLFxuICAgIGFnZTogdW5kZWZpbmVkLFxuICAgIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgICBjYXI6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9jYXIvJyxcbiAgICAgICAgdG9vbHRpcFBsYWNlOiAnYm90dG9tJyxcbiAgICAgICAgZ2V0TmV3SXRlbUlkOiAoKSA9PiAtMSxcbiAgICAgICAgZ2V0TmV3SXRlbTogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVNUFRZX0NBUjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldE5ld0l0ZW0nLCBpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3duZXI6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9vd25lci8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBnZXROZXdJdGVtSWQ6ICgpID0+IEVNUFRZX09XTkVSX0lELFxuICAgICAgICBnZXROZXdJdGVtOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfT1dORVI7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3QgdXNlRGV0YWlsRnVuY3Rpb25zID0gKGRldGFpbFR5cGUpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb25zW2RldGFpbFR5cGVdO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9