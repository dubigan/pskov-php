(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
  power: 0,
  mileage: 0,
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
  age: 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsT2ZJdGVtLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RldGFpbC91c2VEZXRhaWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwidXNlRGV0YWlsT2ZJdGVtIiwiZnVuY3Rpb25zIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVN0YXRlIiwiZ2V0TmV3SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbUZyb21EYXRhIiwiZGF0YSIsImlkIiwiZ2V0Q2hhbmdlZEl0ZW0iLCJuYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsInVybCIsInJlcyIsInJlZGlyZWN0Iiwic2V0QWxlcnRzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzYXZlSXRlbSIsInR5cGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwiY2hhbmdlSXRlbSIsInRhcmdldCIsIkVNUFRZX0NBUiIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwicHJvZHVjdGlvbiIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb2xvciIsInBvd2VyIiwibWlsZWFnZSIsImNvbW1lbnQiLCJFTVBUWV9PV05FUl9JRCIsIkVNUFRZX09XTkVSIiwiY2FycyIsInBhdHJvbnltaWMiLCJsYXN0X25hbWUiLCJnZW5kZXIiLCJhZ2UiLCJjYXIiLCJ0b29sdGlwUGxhY2UiLCJnZXROZXdJdGVtSWQiLCJvd25lciIsInVzZURldGFpbEZ1bmN0aW9ucyIsImRldGFpbFR5cGUiLCJDYXJkSGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJDYXJkVGl0bGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJDYXJkIiwiSGVhZGVyIiwiQm9keSIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwiYXV4Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJlYWRPbmx5Iiwicm93cyIsIkZyYWdtZW50IiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxhQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFp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U0FBSyxRQUFMO0FBQ0ksMEJBQVFsQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZSxpQkFBcEIsRUFBdUM3RCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCNkQsS0FBbEIsQ0FBdkMsRUFBaUVBLEtBQUssQ0FBQ25CLFFBQXZFLENBQVI7O0FBQ0o7QUFDSSwwQkFBT0UsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNENBQUssQ0FBQ3lCLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFaUjtBQWNILENBbEJELEMsQ0FtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLElBQVQsQ0FBY1QsS0FBZCxFQUFxQjtBQUNqQixNQUFJQSxLQUFLLENBQUNVLGFBQVYsRUFDSWpCLFNBQVMsR0FBR08sS0FBSyxDQUFDVSxhQUFsQjtBQUNKLHNCQUFRM0IsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFMkIsVUFBTSxFQUFFWCxLQUFLLENBQUNXLE1BQWhCO0FBQXdCQyxVQUFNLEVBQUVaLEtBQUssQ0FBQ1ksTUFBdEM7QUFBOEM5QixhQUFTLEVBQUVZLFlBQVksQ0FBQ00sS0FBSyxDQUFDbEIsU0FBUCxFQUFrQmtCLEtBQUssQ0FBQ0wsWUFBeEIsQ0FBckU7QUFBNEdrQixZQUFRLEVBQUViLEtBQUssQ0FBQ2E7QUFBNUgsR0FBNUIsRUFBb0tiLEtBQUssQ0FBQ25CLFFBQTFLLENBQVI7QUFDSDs7QUFDRDRCLElBQUksQ0FBQ0ssS0FBTCxHQUFhakIsU0FBYjtBQUNBWSxJQUFJLENBQUNNLE9BQUwsR0FBZWIsV0FBZjtBQUNBTyxJQUFJLENBQUNPLE1BQUwsR0FBY2pCLGlCQUFkO0FBQ0FVLElBQUksQ0FBQ1EsS0FBTCxHQUFhbkIsU0FBYjtBQUNlVyxtRUFBZixFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQWxlcnRDb250ZXh0IH0gZnJvbSAnLi4vbGliL2FsZXJ0L0FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgeyBnZXRFcnJvcnMsIHJlZGlyZWN0IH0gZnJvbSAnLi4vbGliL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBjb25zdCB1c2VEZXRhaWxPZkl0ZW0gPSAoeyBmdW5jdGlvbnMsIH0pID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoZnVuY3Rpb25zLmdldE5ld0l0ZW0oKSk7XG4gICAgY29uc3QgZ2V0SXRlbUZyb21EYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbUZyb21EYXRhJywgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhLmlkID8gZGF0YSA6IGZ1bmN0aW9ucy5nZXROZXdJdGVtKCk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRDaGFuZ2VkSXRlbSA9IChpdGVtLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpdGVtKSwgeyBbbmFtZV06IHZhbHVlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SXRlbTogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QoZnVuY3Rpb25zLnVybCwge30pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3QoaGlzdG9yeSwgcmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW0oZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzYXZlSXRlbTogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QoZnVuY3Rpb25zLnVybCwgeyBpdGVtIH0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoW3sgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdCwJyB9XSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbShnZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpKTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChoaXN0b3J5LCByZXMuZGF0YS5yZWRpcmVjdCwgJ2JhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzYXZlSXRlbScsIGVycik7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtLmNvbnRleHQnLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNoYW5nZUl0ZW06IChlKSA9PiB7XG4gICAgICAgICAgICBzZXRJdGVtKGdldENoYW5nZWRJdGVtKGl0ZW0sIGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHNldEl0ZW0sXG4gICAgfTtcbn07XG4iLCJjb25zdCBFTVBUWV9DQVIgPSB7XG4gICAgaWQ6IC0xLFxuICAgIG1hbnVmYWN0dXJlcjogJycsXG4gICAgbW9kZWw6ICcnLFxuICAgIHByb2R1Y3Rpb246IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdydScpLFxuICAgIGNvbG9yOiAnJyxcbiAgICBwb3dlcjogMCxcbiAgICBtaWxlYWdlOiAwLFxuICAgIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IEVNUFRZX09XTkVSX0lEID0gLTEwO1xuLy9jb25zdCBVTkRFRklORURfT1dORVIgPSAtMTtcbmNvbnN0IEVNUFRZX09XTkVSID0ge1xuICAgIGlkOiBFTVBUWV9PV05FUl9JRCxcbiAgICBjYXJzOiBbXSxcbiAgICBuYW1lOiAnJyxcbiAgICBwYXRyb255bWljOiAnJyxcbiAgICBsYXN0X25hbWU6ICcnLFxuICAgIGdlbmRlcjogJ2YnLFxuICAgIGFnZTogMCxcbiAgICBjb21tZW50OiAnJyxcbn07XG5jb25zdCBmdW5jdGlvbnMgPSB7XG4gICAgY2FyOiB7XG4gICAgICAgIHVybDogJy9hcGkvY2FyLycsXG4gICAgICAgIHRvb2x0aXBQbGFjZTogJ2JvdHRvbScsXG4gICAgICAgIGdldE5ld0l0ZW1JZDogKCkgPT4gLTEsXG4gICAgICAgIGdldE5ld0l0ZW06ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFTVBUWV9DQVI7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXROZXdJdGVtJywgaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG93bmVyOiB7XG4gICAgICAgIHVybDogJy9hcGkvb3duZXIvJyxcbiAgICAgICAgdG9vbHRpcFBsYWNlOiAnYm90dG9tJyxcbiAgICAgICAgZ2V0TmV3SXRlbUlkOiAoKSA9PiBFTVBUWV9PV05FUl9JRCxcbiAgICAgICAgZ2V0TmV3SXRlbTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX09XTkVSO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHVzZURldGFpbEZ1bmN0aW9ucyA9IChkZXRhaWxUeXBlKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uc1tkZXRhaWxUeXBlXTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZCcgfSwgY2hpbGRyZW4pO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdmb3JtJztcbmNvbnN0IGdldENsYXNzTmFtZSA9IChjbGFzc05hbWUgPSAnJywgYXV4Q2xhc3NOYW1lID0gJycsIHN1ZmZpeCA9ICcnKSA9PiB7XG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYmFzZUNsYXNzICsgc3VmZml4ICsgKGF1eENsYXNzTmFtZSA/ICcgJyArIGF1eENsYXNzTmFtZSA6ICcnKTtcbn07XG5jb25zdCBGb3JtTGFiZWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2xhYmVsJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fZ3JvdXAnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUNvbnRyb2xTZWxlY3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb3BzLnR5cGUpXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fdGV4dCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIFxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICByZWFkT25seTogIXByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jb250cm9sJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIHJvd3M6IHByb3BzLnJvd3MgPyArcHJvcHMucm93cyA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NoZWNrJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sU2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfVxufTtcbi8vIGNvbnN0IEZvcm06IFRGb3JtID0gcHJvcHMgPT4ge1xuLy8gICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSkgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Zm9ybVxuLy8gICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4vLyAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cbi8vICAgICAgIGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKX1cbi8vICAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbi8vICAgICA+XG4vLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgPC9mb3JtPlxuLy8gICApO1xuLy8gfTtcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSlcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBwcm9wcy5hY3Rpb24sIG1ldGhvZDogcHJvcHMubWV0aG9kLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSksIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==