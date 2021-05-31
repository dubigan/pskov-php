(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/components/DetailOfItem.tsx":
/*!********************************************!*\
  !*** ./assets/components/DetailOfItem.tsx ***!
  \********************************************/
/*! exports provided: DetailOfItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOfItem", function() { return DetailOfItem; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var DetailOfItem = /*#__PURE__*/function (_Component) {
  _inherits(DetailOfItem, _Component);

  var _super = _createSuper(DetailOfItem);

  function DetailOfItem() {
    var _this;

    _classCallCheck(this, DetailOfItem);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        //messages: [],
        item: _this.getNewItem()
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "url", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/api/owner/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "tooltipPlace", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'bottom'
    });
    Object.defineProperty(_assertThisInitialized(_this), "digitsOnly", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var charCode = e.charCode; //console.log(charCode);

        if (charCode < 48 || charCode > 57) {
          // digits only
          e.preventDefault();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getErrors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(data) {
        //console.log('getErrors', data);
        var type = 'error';

        if (typeof data == 'string') {
          return {
            type: type,
            message: data
          };
        }

        return Object.keys(data).map(function (key) {
          return {
            type: type,
            message: data[key]
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {}).then(function (res) {
          //console.log('getItem.history', this.props.history);
          _this.redirect(res.data.redirect); //this.props.history.push(res.data.redirect);


          _this.setState({
            item: _this.getItemFromData(res.data)
          });
        })["catch"](function (err) {
          _this.context.setAlerts(_this.getErrors(err.response.data));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "redirect", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(redirect) {
        var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (redirect) {
          if (dir === 'back') {
            _this.props.history.goBack();

            return;
          }

          _this.props.history.push(redirect);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "saveItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        //console.log('saveItem', this.state.item);
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(_this.url, {
          item: _this.state.item
        }).then(function (res) {
          //console.log("saveItem", res.data);
          _this.redirect(res.data.redirect, 'back');

          _this.context.setAlerts([{
            type: 'success',
            message: 'Информация сохранена'
          }]);

          _this.setState({
            item: _this.getItemFromData(res.data)
          });
        })["catch"](function (err) {
          //console.log('saveItem', err);
          var messages;

          if (typeof err.response.data == 'string') {
            console.log('saveItem', err.response.data);
            messages = [err.response.data];
          } else {
            messages = _this.getErrors(err.response.data);
          } //console.log('saveItem.context', this.context);


          _this.context.setAlerts(messages);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          item: _this.getChangedItem(e.target.name, e.target.value)
        });
      }
    });
    return _this;
  }

  _createClass(DetailOfItem, [{
    key: "getNewItem",
    value: function getNewItem() {
      return undefined;
    }
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
      var item = Object.assign(Object.assign({}, this.state.item), _defineProperty({}, name, value));
      return item;
    } // clearMessages = () => {
    //   this.setState({ messages: [] });
    // };

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
    }
  }]);

  return DetailOfItem;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);
Object.defineProperty(DetailOfItem, "contextType", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_13__["AlertContext"]
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giXSwibmFtZXMiOlsiRGV0YWlsT2ZJdGVtIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIml0ZW0iLCJnZXROZXdJdGVtIiwiZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJrZXlzIiwibWFwIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInJlZGlyZWN0Iiwic2V0U3RhdGUiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJjb250ZXh0Iiwic2V0QWxlcnRzIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJkaXIiLCJwcm9wcyIsImhpc3RvcnkiLCJnb0JhY2siLCJwdXNoIiwic3RhdGUiLCJtZXNzYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGFuZ2VkSXRlbSIsInRhcmdldCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJnZXRJdGVtIiwiaWQiLCJhc3NpZ24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkNvbXBvbmVudCIsIkFsZXJ0Q29udGV4dCIsIkNhcmRIZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmQiLCJIZWFkZXIiLCJCb2R5IiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJhdXhDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInJlYWRPbmx5Iiwicm93cyIsIkZvcm0iLCJiYXNlQ2xhc3NOYW1lIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJMYWJlbCIsIkNvbnRyb2wiLCJTZWxlY3QiLCJHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNDLFNBQVQ7QUFDQUMsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixPQUE1QixFQUFxQztBQUNqQ0MsZ0JBQVUsRUFBRSxJQURxQjtBQUVqQ0Msa0JBQVksRUFBRSxJQUZtQjtBQUdqQ0MsY0FBUSxFQUFFLElBSHVCO0FBSWpDQyxXQUFLLEVBQUU7QUFDSDtBQUNBQyxZQUFJLEVBQUUsTUFBS0MsVUFBTDtBQUZIO0FBSjBCLEtBQXJDO0FBU0FQLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsS0FBNUIsRUFBbUM7QUFDL0JDLGdCQUFVLEVBQUUsSUFEbUI7QUFFL0JDLGtCQUFZLEVBQUUsSUFGaUI7QUFHL0JDLGNBQVEsRUFBRSxJQUhxQjtBQUkvQkMsV0FBSyxFQUFFO0FBSndCLEtBQW5DO0FBTUFMLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsY0FBNUIsRUFBNEM7QUFDeENDLGdCQUFVLEVBQUUsSUFENEI7QUFFeENDLGtCQUFZLEVBQUUsSUFGMEI7QUFHeENDLGNBQVEsRUFBRSxJQUg4QjtBQUl4Q0MsV0FBSyxFQUFFO0FBSmlDLEtBQTVDO0FBTUFMLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsWUFBNUIsRUFBMEM7QUFDdENDLGdCQUFVLEVBQUUsSUFEMEI7QUFFdENDLGtCQUFZLEVBQUUsSUFGd0I7QUFHdENDLGNBQVEsRUFBRSxJQUg0QjtBQUl0Q0MsV0FBSyxFQUFFLGVBQUNHLENBQUQsRUFBTztBQUNWLFlBQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDQyxRQUFqQixDQURVLENBRVY7O0FBQ0EsWUFBSUEsUUFBUSxHQUFHLEVBQVgsSUFBaUJBLFFBQVEsR0FBRyxFQUFoQyxFQUFvQztBQUNoQztBQUNBRCxXQUFDLENBQUNFLGNBQUY7QUFDSDtBQUNKO0FBWHFDLEtBQTFDO0FBYUFWLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsV0FBNUIsRUFBeUM7QUFDckNDLGdCQUFVLEVBQUUsSUFEeUI7QUFFckNDLGtCQUFZLEVBQUUsSUFGdUI7QUFHckNDLGNBQVEsRUFBRSxJQUgyQjtBQUlyQ0MsV0FBSyxFQUFFLGVBQUNNLElBQUQsRUFBVTtBQUNiO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLE9BQWI7O0FBQ0EsWUFBSSxPQUFPRCxJQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDekIsaUJBQU87QUFBRUMsZ0JBQUksRUFBSkEsSUFBRjtBQUFRQyxtQkFBTyxFQUFFRjtBQUFqQixXQUFQO0FBQ0g7O0FBQ0QsZUFBT1gsTUFBTSxDQUFDYyxJQUFQLENBQVlILElBQVosRUFBa0JJLEdBQWxCLENBQXNCLFVBQUFDLEdBQUcsRUFBSTtBQUNoQyxpQkFBTztBQUFFSixnQkFBSSxFQUFKQSxJQUFGO0FBQVFDLG1CQUFPLEVBQUVGLElBQUksQ0FBQ0ssR0FBRDtBQUFyQixXQUFQO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFib0MsS0FBekM7QUFlQWhCLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsU0FBNUIsRUFBdUM7QUFDbkNDLGdCQUFVLEVBQUUsSUFEdUI7QUFFbkNDLGtCQUFZLEVBQUUsSUFGcUI7QUFHbkNDLGNBQVEsRUFBRSxJQUh5QjtBQUluQ0MsV0FBSyxFQUFFLGlCQUFNO0FBQ1RZLHFEQUFLLENBQ0FDLElBREwsQ0FDVSxNQUFLQyxHQURmLEVBQ29CLEVBRHBCLEVBRUtDLElBRkwsQ0FFVSxVQUFBQyxHQUFHLEVBQUk7QUFDYjtBQUNBLGdCQUFLQyxRQUFMLENBQWNELEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxRQUF2QixFQUZhLENBR2I7OztBQUNBLGdCQUFLQyxRQUFMLENBQWM7QUFBRWpCLGdCQUFJLEVBQUUsTUFBS2tCLGVBQUwsQ0FBcUJILEdBQUcsQ0FBQ1YsSUFBekI7QUFBUixXQUFkO0FBQ0gsU0FQRCxXQVFXLFVBQUFjLEdBQUcsRUFBSTtBQUNkLGdCQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsTUFBS0MsU0FBTCxDQUFlSCxHQUFHLENBQUNJLFFBQUosQ0FBYWxCLElBQTVCLENBQXZCO0FBQ0gsU0FWRDtBQVdIO0FBaEJrQyxLQUF2QztBQWtCQVgsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixVQUE1QixFQUF3QztBQUNwQ0MsZ0JBQVUsRUFBRSxJQUR3QjtBQUVwQ0Msa0JBQVksRUFBRSxJQUZzQjtBQUdwQ0MsY0FBUSxFQUFFLElBSDBCO0FBSXBDQyxXQUFLLEVBQUUsZUFBQ2lCLFFBQUQsRUFBd0I7QUFBQSxZQUFiUSxHQUFhLHVFQUFQLEVBQU87O0FBQzNCLFlBQUlSLFFBQUosRUFBYztBQUNWLGNBQUlRLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLGtCQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE1BQW5COztBQUNBO0FBQ0g7O0FBQ0QsZ0JBQUtGLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkUsSUFBbkIsQ0FBd0JaLFFBQXhCO0FBQ0g7QUFDSjtBQVptQyxLQUF4QztBQWNBdEIsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixVQUE1QixFQUF3QztBQUNwQ0MsZ0JBQVUsRUFBRSxJQUR3QjtBQUVwQ0Msa0JBQVksRUFBRSxJQUZzQjtBQUdwQ0MsY0FBUSxFQUFFLElBSDBCO0FBSXBDQyxXQUFLLEVBQUUsaUJBQU07QUFDVDtBQUNBWSxxREFBSyxDQUNBQyxJQURMLENBQ1UsTUFBS0MsR0FEZixFQUNvQjtBQUFFYixjQUFJLEVBQUUsTUFBSzZCLEtBQUwsQ0FBVzdCO0FBQW5CLFNBRHBCLEVBRUtjLElBRkwsQ0FFVSxVQUFBQyxHQUFHLEVBQUk7QUFDYjtBQUNBLGdCQUFLQyxRQUFMLENBQWNELEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxRQUF2QixFQUFpQyxNQUFqQzs7QUFDQSxnQkFBS0ksT0FBTCxDQUFhQyxTQUFiLENBQXVCLENBQUM7QUFBRWYsZ0JBQUksRUFBRSxTQUFSO0FBQW1CQyxtQkFBTyxFQUFFO0FBQTVCLFdBQUQsQ0FBdkI7O0FBQ0EsZ0JBQUtVLFFBQUwsQ0FBYztBQUNWakIsZ0JBQUksRUFBRSxNQUFLa0IsZUFBTCxDQUFxQkgsR0FBRyxDQUFDVixJQUF6QjtBQURJLFdBQWQ7QUFHSCxTQVRELFdBVVcsVUFBQWMsR0FBRyxFQUFJO0FBQ2Q7QUFDQSxjQUFJVyxRQUFKOztBQUNBLGNBQUksT0FBT1gsR0FBRyxDQUFDSSxRQUFKLENBQWFsQixJQUFwQixJQUE0QixRQUFoQyxFQUEwQztBQUN0QzBCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCYixHQUFHLENBQUNJLFFBQUosQ0FBYWxCLElBQXJDO0FBQ0F5QixvQkFBUSxHQUFHLENBQUNYLEdBQUcsQ0FBQ0ksUUFBSixDQUFhbEIsSUFBZCxDQUFYO0FBQ0gsV0FIRCxNQUlLO0FBQ0R5QixvQkFBUSxHQUFHLE1BQUtSLFNBQUwsQ0FBZUgsR0FBRyxDQUFDSSxRQUFKLENBQWFsQixJQUE1QixDQUFYO0FBQ0gsV0FUYSxDQVVkOzs7QUFDQSxnQkFBS2UsT0FBTCxDQUFhQyxTQUFiLENBQXVCUyxRQUF2QjtBQUNILFNBdEJEO0FBdUJIO0FBN0JtQyxLQUF4QztBQStCQXBDLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsWUFBNUIsRUFBMEM7QUFDdENDLGdCQUFVLEVBQUUsSUFEMEI7QUFFdENDLGtCQUFZLEVBQUUsSUFGd0I7QUFHdENDLGNBQVEsRUFBRSxJQUg0QjtBQUl0Q0MsV0FBSyxFQUFFLGVBQUNHLENBQUQsRUFBTztBQUNWLGNBQUtlLFFBQUwsQ0FBYztBQUFFakIsY0FBSSxFQUFFLE1BQUtpQyxjQUFMLENBQW9CL0IsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTQyxJQUE3QixFQUFtQ2pDLENBQUMsQ0FBQ2dDLE1BQUYsQ0FBU25DLEtBQTVDO0FBQVIsU0FBZDtBQUNIO0FBTnFDLEtBQTFDO0FBbEhVO0FBMEhiOztBQTNITDtBQUFBO0FBQUEsaUNBNEhpQjtBQUNULGFBQU9xQyxTQUFQO0FBQ0g7QUE5SEw7QUFBQTtBQUFBLG1DQStIbUI7QUFDWCxhQUFPLENBQUMsQ0FBUjtBQUNIO0FBaklMO0FBQUE7QUFBQSx3Q0FrSXdCO0FBQ2hCLFdBQUtDLE9BQUw7QUFDSDtBQXBJTDtBQUFBO0FBQUEsb0NBcUlvQmhDLElBcklwQixFQXFJMEI7QUFDbEI7QUFDQSxhQUFPQSxJQUFJLENBQUNpQyxFQUFMLEdBQVVqQyxJQUFWLEdBQWlCLEtBQUtKLFVBQUwsRUFBeEI7QUFDSDtBQXhJTDtBQUFBO0FBQUEsbUNBeUltQmtDLElBekluQixFQXlJeUJwQyxLQXpJekIsRUF5SWdDO0FBQ3hCLFVBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDNkMsTUFBUCxDQUFjN0MsTUFBTSxDQUFDNkMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1YsS0FBTCxDQUFXN0IsSUFBN0IsQ0FBZCxzQkFBcURtQyxJQUFyRCxFQUE0RHBDLEtBQTVELEVBQWI7QUFDQSxhQUFPQyxJQUFQO0FBQ0gsS0E1SUwsQ0E2SUk7QUFDQTtBQUNBOztBQS9JSjtBQUFBO0FBQUEsNkJBZ0phO0FBQ0wsMEJBQU93Qyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDRSxRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBQ0g7QUFsSkw7O0FBQUE7QUFBQSxFQUFrQ0MsZ0RBQWxDO0FBb0pBakQsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxZQUF0QixFQUFvQyxhQUFwQyxFQUFtRDtBQUMvQ0ksWUFBVSxFQUFFLElBRG1DO0FBRS9DQyxjQUFZLEVBQUUsSUFGaUM7QUFHL0NDLFVBQVEsRUFBRSxJQUhxQztBQUkvQ0MsT0FBSyxFQUFFNkMscUVBQVlBO0FBSjRCLENBQW5ELEU7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE2QjtBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzVDLHNCQUFPUCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVNLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBa0ZELFFBQWxGLENBQVA7QUFDSCxDQUZEOztBQUdBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQTZCO0FBQUEsTUFBMUJGLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDM0Msc0JBQU9QLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRU0sYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUFpRkQsUUFBakYsQ0FBUDtBQUNILENBRkQ7O0FBR0EsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBNkI7QUFBQSxNQUExQkgsUUFBMEIsU0FBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUMxQyxzQkFBT1AsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFTSxhQUFTLEVBQUVBLFNBQVMsR0FBR0EsU0FBSCxHQUFlO0FBQXJDLEdBQTNCLEVBQWdGRCxRQUFoRixDQUFQO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUE2QjtBQUFBLE1BQTFCSixRQUEwQixTQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzVDLHNCQUFPUCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVNLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBa0ZELFFBQWxGLENBQVA7QUFDSCxDQUZEOztBQUdBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQTZCO0FBQUEsTUFBMUJMLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDdEMsc0JBQU9QLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRU0sYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUEwRUQsUUFBMUUsQ0FBUDtBQUNILENBRkQ7O0FBR0FLLElBQUksQ0FBQ0MsTUFBTCxHQUFjUCxVQUFkO0FBQ0FNLElBQUksQ0FBQ0UsSUFBTCxHQUFZSixRQUFaO0FBQ0FFLElBQUksQ0FBQ0csTUFBTCxHQUFjSixVQUFkO0FBQ0FDLElBQUksQ0FBQ0ksS0FBTCxHQUFhUCxTQUFiO0FBQ2VHLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBLElBQUlLLFNBQVMsR0FBRyxNQUFoQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFvRDtBQUFBLE1BQW5EVixTQUFtRCx1RUFBdkMsRUFBdUM7QUFBQSxNQUFuQ1csWUFBbUMsdUVBQXBCLEVBQW9CO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFDckUsTUFBSVosU0FBSixFQUNJLE9BQU9BLFNBQVA7QUFDSixTQUFPUyxTQUFTLEdBQUdHLE1BQVosSUFBc0JELFlBQVksR0FBRyxNQUFNQSxZQUFULEdBQXdCLEVBQTFELENBQVA7QUFDSCxDQUpEOztBQUtBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTJDO0FBQUEsTUFBeENkLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQlcsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3pELHNCQUFPbEIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFTSxhQUFTLEVBQUVVLFlBQVksQ0FBQ1YsU0FBRCxFQUFZVyxZQUFaLEVBQTBCLFNBQTFCO0FBQXpCLEdBQTNCLEVBQTRGWixRQUE1RixDQUFQO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNZSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQUEyQztBQUFBLE1BQXhDZixRQUF3QyxTQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsU0FBOEIsU0FBOUJBLFNBQThCO0FBQUEsTUFBbkJXLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUN6RCxzQkFBT2xCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRU0sYUFBUyxFQUFFVSxZQUFZLENBQUNWLFNBQUQsRUFBWVcsWUFBWixFQUEwQixTQUExQjtBQUF6QixHQUEzQixFQUE0RlosUUFBNUYsQ0FBUDtBQUNILENBRkQ7O0FBR0EsSUFBTWdCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3JDLEtBQUQsRUFBVztBQUNqQyxzQkFBUWUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixRQUFwQixFQUE4QjtBQUFFTSxhQUFTLEVBQUVVLFlBQVksQ0FBQ2hDLEtBQUssQ0FBQ3NCLFNBQVAsRUFBa0J0QixLQUFLLENBQUNpQyxZQUF4QixFQUFzQyxVQUF0QyxDQUF6QjtBQUE0RUssWUFBUSxFQUFFdEMsS0FBSyxDQUFDc0M7QUFBNUYsR0FBOUIsRUFBc0l0QyxLQUFLLENBQUNxQixRQUE1SSxDQUFSO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNa0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3ZDLEtBQUQsRUFBVztBQUMzQixNQUFJbkIsSUFBSSxHQUFHLE1BQVg7QUFDQSxNQUFJbUIsS0FBSyxDQUFDbkIsSUFBVixFQUNJQSxJQUFJLEdBQUdtQixLQUFLLENBQUNuQixJQUFiOztBQUNKLFVBQVFBLElBQVI7QUFDSSxTQUFLLE1BQUw7QUFDSSwwQkFBUWtDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkIvQyxNQUFNLENBQUM2QyxNQUFQLENBQWMsRUFBZCxFQUFrQmQsS0FBbEIsRUFBeUI7QUFBRW5CLFlBQUksRUFBRSxNQUFSO0FBQWdCeUMsaUJBQVMsRUFBRVUsWUFBWSxDQUFDaEMsS0FBSyxDQUFDc0IsU0FBUCxFQUFrQnRCLEtBQUssQ0FBQ2lDLFlBQXhCLEVBQXNDLFFBQXRDLENBQXZDO0FBQXdGdkIsWUFBSSxFQUFFVixLQUFLLENBQUNVLElBQXBHO0FBQTBHcEMsYUFBSyxFQUFFMEIsS0FBSyxDQUFDMUIsS0FBdkg7QUFBOEhrRSxtQkFBVyxFQUFFeEMsS0FBSyxDQUFDd0MsV0FBako7QUFBOEpDLGlCQUFTLEVBQUV6QyxLQUFLLENBQUN5QyxTQUFOLEdBQWtCLENBQUN6QyxLQUFLLENBQUN5QyxTQUF6QixHQUFxQzlCLFNBQTlNO0FBQXlOMkIsZ0JBQVEsRUFBRXRDLEtBQUssQ0FBQ3NDLFFBQXpPO0FBQzFEO0FBQ0FJLGdCQUFRLEVBQUUsQ0FBQzFDLEtBQUssQ0FBQ3NDO0FBRnlDLE9BQXpCLENBQTdCLENBQVI7O0FBR0osU0FBSyxVQUFMO0FBQ0ksMEJBQVF2Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLFVBQXBCLEVBQWdDL0MsTUFBTSxDQUFDNkMsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLEtBQWxCLEVBQXlCO0FBQUVzQixpQkFBUyxFQUFFVSxZQUFZLENBQUNoQyxLQUFLLENBQUNzQixTQUFQLEVBQWtCdEIsS0FBSyxDQUFDaUMsWUFBeEIsRUFBc0MsV0FBdEMsQ0FBekI7QUFBNkV2QixZQUFJLEVBQUVWLEtBQUssQ0FBQ1UsSUFBekY7QUFBK0ZwQyxhQUFLLEVBQUUwQixLQUFLLENBQUMxQixLQUE1RztBQUFtSGtFLG1CQUFXLEVBQUV4QyxLQUFLLENBQUN3QyxXQUF0STtBQUFtSkMsaUJBQVMsRUFBRXpDLEtBQUssQ0FBQ3lDLFNBQU4sR0FBa0IsQ0FBQ3pDLEtBQUssQ0FBQ3lDLFNBQXpCLEdBQXFDOUIsU0FBbk07QUFBOE1nQyxZQUFJLEVBQUUzQyxLQUFLLENBQUMyQyxJQUFOLEdBQWEsQ0FBQzNDLEtBQUssQ0FBQzJDLElBQXBCLEdBQTJCaEMsU0FBL087QUFBMFAyQixnQkFBUSxFQUFFdEMsS0FBSyxDQUFDc0M7QUFBMVEsT0FBekIsQ0FBaEMsQ0FBUjs7QUFDSixTQUFLLE9BQUw7QUFDSSwwQkFBUXZCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkIvQyxNQUFNLENBQUM2QyxNQUFQLENBQWMsRUFBZCxFQUFrQmQsS0FBbEIsRUFBeUI7QUFBRW5CLFlBQUksRUFBRSxVQUFSO0FBQW9CeUMsaUJBQVMsRUFBRVUsWUFBWSxDQUFDaEMsS0FBSyxDQUFDc0IsU0FBUCxFQUFrQnRCLEtBQUssQ0FBQ2lDLFlBQXhCLEVBQXNDLFNBQXRDLENBQTNDO0FBQTZGdkIsWUFBSSxFQUFFVixLQUFLLENBQUNVLElBQXpHO0FBQStHcEMsYUFBSyxFQUFFMEIsS0FBSyxDQUFDMUIsS0FBNUg7QUFBbUlrRSxtQkFBVyxFQUFFeEMsS0FBSyxDQUFDd0MsV0FBdEo7QUFBbUtDLGlCQUFTLEVBQUV6QyxLQUFLLENBQUN5QyxTQUFOLEdBQWtCLENBQUN6QyxLQUFLLENBQUN5QyxTQUF6QixHQUFxQzlCLFNBQW5OO0FBQThOMkIsZ0JBQVEsRUFBRXRDLEtBQUssQ0FBQ3NDO0FBQTlPLE9BQXpCLENBQTdCLENBQVI7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksMEJBQVF2Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcUIsaUJBQXBCLEVBQXVDcEUsTUFBTSxDQUFDNkMsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLEtBQWxCLENBQXZDLEVBQWlFQSxLQUFLLENBQUNxQixRQUF2RSxDQUFSOztBQUNKO0FBQ0ksMEJBQU9OLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNFLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFaUjtBQWNILENBbEJELEMsQ0FtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMyQixJQUFULENBQWM1QyxLQUFkLEVBQXFCO0FBQ2pCLE1BQUlBLEtBQUssQ0FBQzZDLGFBQVYsRUFDSWQsU0FBUyxHQUFHL0IsS0FBSyxDQUFDNkMsYUFBbEI7QUFDSixzQkFBUTlCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRThCLFVBQU0sRUFBRTlDLEtBQUssQ0FBQzhDLE1BQWhCO0FBQXdCQyxVQUFNLEVBQUUvQyxLQUFLLENBQUMrQyxNQUF0QztBQUE4Q3pCLGFBQVMsRUFBRVUsWUFBWSxDQUFDaEMsS0FBSyxDQUFDc0IsU0FBUCxFQUFrQnRCLEtBQUssQ0FBQ2lDLFlBQXhCLENBQXJFO0FBQTRHZSxZQUFRLEVBQUVoRCxLQUFLLENBQUNnRDtBQUE1SCxHQUE1QixFQUFvS2hELEtBQUssQ0FBQ3FCLFFBQTFLLENBQVI7QUFDSDs7QUFDRHVCLElBQUksQ0FBQ0ssS0FBTCxHQUFhZCxTQUFiO0FBQ0FTLElBQUksQ0FBQ00sT0FBTCxHQUFlWCxXQUFmO0FBQ0FLLElBQUksQ0FBQ08sTUFBTCxHQUFjZCxpQkFBZDtBQUNBTyxJQUFJLENBQUNRLEtBQUwsR0FBYWhCLFNBQWI7QUFDZVEsbUVBQWYsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuZXhwb3J0IGNsYXNzIERldGFpbE9mSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgLy9tZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5nZXROZXdJdGVtKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvYXBpL293bmVyLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvb2x0aXBQbGFjZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRpZ2l0c09ubHlcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRFcnJvcnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RXJyb3JzJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdlcnJvcic7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyh0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicmVkaXJlY3RcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChyZWRpcmVjdCwgZGlyID0gJycpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpciA9PT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ29CYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhdmVJdGVtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCB0aGlzLnN0YXRlLml0ZW0pO1xuICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGl0ZW06IHRoaXMuc3RhdGUuaXRlbSB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2F2ZUl0ZW1cIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0LCAnYmFjaycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0QWxlcnRzKFt7IHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINGB0L7RhdGA0LDQvdC10L3QsCcgfV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzYXZlSXRlbS5jb250ZXh0JywgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldEFsZXJ0cyhtZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFuZ2VJdGVtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtOiB0aGlzLmdldENoYW5nZWRJdGVtKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ld0l0ZW0oKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGdldE5ld0l0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtKCk7XG4gICAgfVxuICAgIGdldEl0ZW1Gcm9tRGF0YShkYXRhKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW1Gcm9tRGF0YScsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS5pZCA/IGRhdGEgOiB0aGlzLmdldE5ld0l0ZW0oKTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEl0ZW0obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5pdGVtKSwgeyBbbmFtZV06IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgLy8gY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgLy8gfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRGV0YWlsT2ZJdGVtLCBcImNvbnRleHRUeXBlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogQWxlcnRDb250ZXh0XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9