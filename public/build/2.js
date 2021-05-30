(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
        messages: [],
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
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
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

          _this.setState({
            item: _this.getItemFromData(res.data),
            messages: [{
              type: 'success',
              message: 'Информация сохранена'
            }]
          });
        })["catch"](function (err) {
          //console.log('saveItem', err);
          var messages;

          if (typeof err.response.data == 'string') {
            console.log('saveItem', err.response.data);
            messages = [err.response.data];
          } else {
            messages = _this.getErrors(err.response.data);
          }

          _this.setState({
            messages: messages
          });
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
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
    }
  }]);

  return DetailOfItem;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

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

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(showAlerts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Rvb2x0aXAudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9hbGVydC9BbGVydHMudHN4Il0sIm5hbWVzIjpbIkRldGFpbE9mSXRlbSIsImFyZ3VtZW50cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJtZXNzYWdlcyIsIml0ZW0iLCJnZXROZXdJdGVtIiwiZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJrZXlzIiwibWFwIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInJlZGlyZWN0Iiwic2V0U3RhdGUiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImRpciIsInByb3BzIiwiaGlzdG9yeSIsImdvQmFjayIsInB1c2giLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGFuZ2VkSXRlbSIsInRhcmdldCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJnZXRJdGVtIiwiaWQiLCJhc3NpZ24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkNvbXBvbmVudCIsIkNhcmRIZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmQiLCJIZWFkZXIiLCJCb2R5IiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJhdXhDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInJlYWRPbmx5Iiwicm93cyIsIkZvcm0iLCJiYXNlQ2xhc3NOYW1lIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJMYWJlbCIsIkNvbnRyb2wiLCJTZWxlY3QiLCJHcm91cCIsIlJvdyIsIlRvb2x0aXBDb250ZW50IiwiVG9vbHRpcCIsInRvb2x0aXAiLCJBbGVydHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsImluZGV4IiwiZGVsYXkiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnbG9iYWwiLCJzZXRUaW1lb3V0Iiwic2hvdyIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0FDLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsT0FBNUIsRUFBcUM7QUFDakNDLGdCQUFVLEVBQUUsSUFEcUI7QUFFakNDLGtCQUFZLEVBQUUsSUFGbUI7QUFHakNDLGNBQVEsRUFBRSxJQUh1QjtBQUlqQ0MsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUUsRUFEUDtBQUVIQyxZQUFJLEVBQUUsTUFBS0MsVUFBTDtBQUZI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QUNFLFFBQTFCLEVBQW9DLElBQXBDLEVBQTBDNkQsSUFBSSxFQUE5QyxDQUFQO0FBQ0gsQ0FqREQ7O0FBa0RldEIscUVBQWYsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY2xhc3MgRGV0YWlsT2ZJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5nZXROZXdJdGVtKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvYXBpL293bmVyLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvb2x0aXBQbGFjZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRpZ2l0c09ubHlcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRFcnJvcnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RXJyb3JzJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdlcnJvcic7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlZGlyZWN0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAocmVkaXJlY3QsIGRpciA9ICcnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXIgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzYXZlSXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgdGhpcy5zdGF0ZS5pdGVtKTtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhdmVJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCwgJ2JhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiB0aGlzLmdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdCwJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYW5nZUl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xlYXJNZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROZXdJdGVtKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBnZXROZXdJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xuICAgIH1cbiAgICBnZXRJdGVtRnJvbURhdGEoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuaWQgPyBkYXRhIDogdGhpcy5nZXROZXdJdGVtKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuaXRlbSksIHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0b29sdGlwX19jb250ZW50JyB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0b29sdGlwLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCB0b29sdGlwKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBkZWZUaW1lb3V0ID0gNTAwMDtcbiAgICBjb25zdCBzaG93QWxlcnRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdmlldyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGVydHM7XG4gICAgICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldFZpc2libGUodmlldyk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3Qoc2hvd0FsZXJ0cyk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkocHJvcHMudGltZW91dCA/IHByb3BzLnRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==