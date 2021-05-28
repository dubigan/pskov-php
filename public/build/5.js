(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
};

var Form = function Form(props) {
  if (props.baseClassName) baseClass = props.baseClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: props.action,
    method: props.method,
    className: getClassName(props.className, props.auxClassName),
    onSubmit: props.onSubmit
  }, props.children);
};

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormControlSelect;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giXSwibmFtZXMiOlsiRGV0YWlsT2ZJdGVtIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIm1lc3NhZ2VzIiwiaXRlbSIsImdldE5ld0l0ZW0iLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ0eXBlIiwibWVzc2FnZSIsImtleXMiLCJtYXAiLCJrZXkiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwicmVkaXJlY3QiLCJzZXRTdGF0ZSIsImdldEl0ZW1Gcm9tRGF0YSIsImVyciIsImdldEVycm9ycyIsInJlc3BvbnNlIiwiZGlyIiwicHJvcHMiLCJoaXN0b3J5IiwiZ29CYWNrIiwicHVzaCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImdldENoYW5nZWRJdGVtIiwidGFyZ2V0IiwibmFtZSIsInVuZGVmaW5lZCIsImdldEl0ZW0iLCJpZCIsImFzc2lnbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQ29tcG9uZW50IiwiQ2FyZEhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZCIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiLCJUaXRsZSIsImJhc2VDbGFzcyIsImdldENsYXNzTmFtZSIsImF1eENsYXNzTmFtZSIsInN1ZmZpeCIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sU2VsZWN0Iiwib25DaGFuZ2UiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwicmVhZE9ubHkiLCJyb3dzIiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBQyxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLE9BQTVCLEVBQXFDO0FBQ2pDQyxnQkFBVSxFQUFFLElBRHFCO0FBRWpDQyxrQkFBWSxFQUFFLElBRm1CO0FBR2pDQyxjQUFRLEVBQUUsSUFIdUI7QUFJakNDLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFLEVBRFA7QUFFSEMsWUFBSSxFQUFFLE1BQUtDLFVBQUw7QUFGSDtBQUowQixLQUFyQztBQVNBUixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLEtBQTVCLEVBQW1DO0FBQy9CQyxnQkFBVSxFQUFFLElBRG1CO0FBRS9CQyxrQkFBWSxFQUFFLElBRmlCO0FBRy9CQyxjQUFRLEVBQUUsSUFIcUI7QUFJL0JDLFdBQUssRUFBRTtBQUp3QixLQUFuQztBQU1BTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGNBQTVCLEVBQTRDO0FBQ3hDQyxnQkFBVSxFQUFFLElBRDRCO0FBRXhDQyxrQkFBWSxFQUFFLElBRjBCO0FBR3hDQyxjQUFRLEVBQUUsSUFIOEI7QUFJeENDLFdBQUssRUFBRTtBQUppQyxLQUE1QztBQU1BTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFlBQTVCLEVBQTBDO0FBQ3RDQyxnQkFBVSxFQUFFLElBRDBCO0FBRXRDQyxrQkFBWSxFQUFFLElBRndCO0FBR3RDQyxjQUFRLEVBQUUsSUFINEI7QUFJdENDLFdBQUssRUFBRSxlQUFDSSxDQUFELEVBQU87QUFDVixZQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0MsUUFBakIsQ0FEVSxDQUVWOztBQUNBLFlBQUlBLFFBQVEsR0FBRyxFQUFYLElBQWlCQSxRQUFRLEdBQUcsRUFBaEMsRUFBb0M7QUFDaEM7QUFDQUQsV0FBQyxDQUFDRSxjQUFGO0FBQ0g7QUFDSjtBQVhxQyxLQUExQztBQWFBWCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFdBQTVCLEVBQXlDO0FBQ3JDQyxnQkFBVSxFQUFFLElBRHlCO0FBRXJDQyxrQkFBWSxFQUFFLElBRnVCO0FBR3JDQyxjQUFRLEVBQUUsSUFIMkI7QUFJckNDLFdBQUssRUFBRSxlQUFDTyxJQUFELEVBQVU7QUFDYjtBQUNBLFlBQU1DLElBQUksR0FBRyxPQUFiOztBQUNBLFlBQUksT0FBT0QsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLGlCQUFPO0FBQUVDLGdCQUFJLEVBQUpBLElBQUY7QUFBUUMsbUJBQU8sRUFBRUY7QUFBakIsV0FBUDtBQUNIOztBQUNELGVBQU9aLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxHQUFsQixDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDaEMsaUJBQU87QUFBRUosZ0JBQUksRUFBSkEsSUFBRjtBQUFRQyxtQkFBTyxFQUFFRixJQUFJLENBQUNLLEdBQUQ7QUFBckIsV0FBUDtBQUNILFNBRk0sQ0FBUDtBQUdIO0FBYm9DLEtBQXpDO0FBZUFqQixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFNBQTVCLEVBQXVDO0FBQ25DQyxnQkFBVSxFQUFFLElBRHVCO0FBRW5DQyxrQkFBWSxFQUFFLElBRnFCO0FBR25DQyxjQUFRLEVBQUUsSUFIeUI7QUFJbkNDLFdBQUssRUFBRSxpQkFBTTtBQUNUYSxxREFBSyxDQUNBQyxJQURMLENBQ1UsTUFBS0MsR0FEZixFQUNvQixFQURwQixFQUVLQyxJQUZMLENBRVUsVUFBQUMsR0FBRyxFQUFJO0FBQ2I7QUFDQSxnQkFBS0MsUUFBTCxDQUFjRCxHQUFHLENBQUNWLElBQUosQ0FBU1csUUFBdkIsRUFGYSxDQUdiOzs7QUFDQSxnQkFBS0MsUUFBTCxDQUFjO0FBQUVqQixnQkFBSSxFQUFFLE1BQUtrQixlQUFMLENBQXFCSCxHQUFHLENBQUNWLElBQXpCO0FBQVIsV0FBZDtBQUNILFNBUEQsV0FRVyxVQUFBYyxHQUFHLEVBQUk7QUFDZCxnQkFBS0YsUUFBTCxDQUFjO0FBQ1ZsQixvQkFBUSxFQUFFLE1BQUtxQixTQUFMLENBQWVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhaEIsSUFBNUI7QUFEQSxXQUFkO0FBR0gsU0FaRDtBQWFIO0FBbEJrQyxLQUF2QztBQW9CQVosVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixVQUE1QixFQUF3QztBQUNwQ0MsZ0JBQVUsRUFBRSxJQUR3QjtBQUVwQ0Msa0JBQVksRUFBRSxJQUZzQjtBQUdwQ0MsY0FBUSxFQUFFLElBSDBCO0FBSXBDQyxXQUFLLEVBQUUsZUFBQ2tCLFFBQUQsRUFBd0I7QUFBQSxZQUFiTSxHQUFhLHVFQUFQLEVBQU87O0FBQzNCLFlBQUlOLFFBQUosRUFBYztBQUNWLGNBQUlNLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLGtCQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE1BQW5COztBQUNBO0FBQ0g7O0FBQ0QsZ0JBQUtGLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkUsSUFBbkIsQ0FBd0JWLFFBQXhCO0FBQ0g7QUFDSjtBQVptQyxLQUF4QztBQWNBdkIsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixVQUE1QixFQUF3QztBQUNwQ0MsZ0JBQVUsRUFBRSxJQUR3QjtBQUVwQ0Msa0JBQVksRUFBRSxJQUZzQjtBQUdwQ0MsY0FBUSxFQUFFLElBSDBCO0FBSXBDQyxXQUFLLEVBQUUsaUJBQU07QUFDVDtBQUNBYSxxREFBSyxDQUNBQyxJQURMLENBQ1UsTUFBS0MsR0FEZixFQUNvQjtBQUFFYixjQUFJLEVBQUUsTUFBSzJCLEtBQUwsQ0FBVzNCO0FBQW5CLFNBRHBCLEVBRUtjLElBRkwsQ0FFVSxVQUFBQyxHQUFHLEVBQUk7QUFDYjtBQUNBLGdCQUFLQyxRQUFMLENBQWNELEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxRQUF2QixFQUFpQyxNQUFqQzs7QUFDQSxnQkFBS0MsUUFBTCxDQUFjO0FBQ1ZqQixnQkFBSSxFQUFFLE1BQUtrQixlQUFMLENBQXFCSCxHQUFHLENBQUNWLElBQXpCLENBREk7QUFFVk4sb0JBQVEsRUFBRSxDQUFDO0FBQUVPLGtCQUFJLEVBQUUsU0FBUjtBQUFtQkMscUJBQU8sRUFBRTtBQUE1QixhQUFEO0FBRkEsV0FBZDtBQUlILFNBVEQsV0FVVyxVQUFBWSxHQUFHLEVBQUk7QUFDZDtBQUNBLGNBQUlwQixRQUFKOztBQUNBLGNBQUksT0FBT29CLEdBQUcsQ0FBQ0UsUUFBSixDQUFhaEIsSUFBcEIsSUFBNEIsUUFBaEMsRUFBMEM7QUFDdEN1QixtQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlYsR0FBRyxDQUFDRSxRQUFKLENBQWFoQixJQUFyQztBQUNBTixvQkFBUSxHQUFHLENBQUNvQixHQUFHLENBQUNFLFFBQUosQ0FBYWhCLElBQWQsQ0FBWDtBQUNILFdBSEQsTUFJSztBQUNETixvQkFBUSxHQUFHLE1BQUtxQixTQUFMLENBQWVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhaEIsSUFBNUIsQ0FBWDtBQUNIOztBQUNELGdCQUFLWSxRQUFMLENBQWM7QUFDVmxCLG9CQUFRLEVBQVJBO0FBRFUsV0FBZDtBQUdILFNBdkJEO0FBd0JIO0FBOUJtQyxLQUF4QztBQWdDQU4sVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixZQUE1QixFQUEwQztBQUN0Q0MsZ0JBQVUsRUFBRSxJQUQwQjtBQUV0Q0Msa0JBQVksRUFBRSxJQUZ3QjtBQUd0Q0MsY0FBUSxFQUFFLElBSDRCO0FBSXRDQyxXQUFLLEVBQUUsZUFBQ0ksQ0FBRCxFQUFPO0FBQ1YsY0FBS2UsUUFBTCxDQUFjO0FBQUVqQixjQUFJLEVBQUUsTUFBSzhCLGNBQUwsQ0FBb0I1QixDQUFDLENBQUM2QixNQUFGLENBQVNDLElBQTdCLEVBQW1DOUIsQ0FBQyxDQUFDNkIsTUFBRixDQUFTakMsS0FBNUM7QUFBUixTQUFkO0FBQ0g7QUFOcUMsS0FBMUM7QUFRQUwsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixlQUE1QixFQUE2QztBQUN6Q0MsZ0JBQVUsRUFBRSxJQUQ2QjtBQUV6Q0Msa0JBQVksRUFBRSxJQUYyQjtBQUd6Q0MsY0FBUSxFQUFFLElBSCtCO0FBSXpDQyxXQUFLLEVBQUUsaUJBQU07QUFDVCxjQUFLbUIsUUFBTCxDQUFjO0FBQUVsQixrQkFBUSxFQUFFO0FBQVosU0FBZDtBQUNIO0FBTndDLEtBQTdDO0FBN0hVO0FBcUliOztBQXRJTDtBQUFBO0FBQUEsaUNBdUlpQjtBQUNULGFBQU9rQyxTQUFQO0FBQ0g7QUF6SUw7QUFBQTtBQUFBLG1DQTBJbUI7QUFDWCxhQUFPLENBQUMsQ0FBUjtBQUNIO0FBNUlMO0FBQUE7QUFBQSx3Q0E2SXdCO0FBQ2hCLFdBQUtDLE9BQUw7QUFDSDtBQS9JTDtBQUFBO0FBQUEsb0NBZ0pvQjdCLElBaEpwQixFQWdKMEI7QUFDbEI7QUFDQSxhQUFPQSxJQUFJLENBQUM4QixFQUFMLEdBQVU5QixJQUFWLEdBQWlCLEtBQUtKLFVBQUwsRUFBeEI7QUFDSDtBQW5KTDtBQUFBO0FBQUEsbUNBb0ptQitCLElBcEpuQixFQW9KeUJsQyxLQXBKekIsRUFvSmdDO0FBQ3hCLFVBQU1FLElBQUksR0FBR1AsTUFBTSxDQUFDMkMsTUFBUCxDQUFjM0MsTUFBTSxDQUFDMkMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1QsS0FBTCxDQUFXM0IsSUFBN0IsQ0FBZCxzQkFBcURnQyxJQUFyRCxFQUE0RGxDLEtBQTVELEVBQWI7QUFDQSxhQUFPRSxJQUFQO0FBQ0g7QUF2Skw7QUFBQTtBQUFBLDZCQXdKYTtBQUNMLDBCQUFPcUMsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQ0UsUUFBMUIsRUFBb0MsSUFBcEMsQ0FBUDtBQUNIO0FBMUpMOztBQUFBO0FBQUEsRUFBa0NDLGdEQUFsQyxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE2QjtBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzVDLHNCQUFPTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVLLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBa0ZELFFBQWxGLENBQVA7QUFDSCxDQUZEOztBQUdBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQTZCO0FBQUEsTUFBMUJGLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDM0Msc0JBQU9OLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUssYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUFpRkQsUUFBakYsQ0FBUDtBQUNILENBRkQ7O0FBR0EsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBNkI7QUFBQSxNQUExQkgsUUFBMEIsU0FBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUMxQyxzQkFBT04sNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFSyxhQUFTLEVBQUVBLFNBQVMsR0FBR0EsU0FBSCxHQUFlO0FBQXJDLEdBQTNCLEVBQWdGRCxRQUFoRixDQUFQO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUE2QjtBQUFBLE1BQTFCSixRQUEwQixTQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzVDLHNCQUFPTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVLLGFBQVMsRUFBRUEsU0FBUyxHQUFHQSxTQUFILEdBQWU7QUFBckMsR0FBM0IsRUFBa0ZELFFBQWxGLENBQVA7QUFDSCxDQUZEOztBQUdBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQTZCO0FBQUEsTUFBMUJMLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDdEMsc0JBQU9OLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUssYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUEwRUQsUUFBMUUsQ0FBUDtBQUNILENBRkQ7O0FBR0FLLElBQUksQ0FBQ0MsTUFBTCxHQUFjUCxVQUFkO0FBQ0FNLElBQUksQ0FBQ0UsSUFBTCxHQUFZSixRQUFaO0FBQ0FFLElBQUksQ0FBQ0csTUFBTCxHQUFjSixVQUFkO0FBQ0FDLElBQUksQ0FBQ0ksS0FBTCxHQUFhUCxTQUFiO0FBQ2VHLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBLElBQUlLLFNBQVMsR0FBRyxNQUFoQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFvRDtBQUFBLE1BQW5EVixTQUFtRCx1RUFBdkMsRUFBdUM7QUFBQSxNQUFuQ1csWUFBbUMsdUVBQXBCLEVBQW9CO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFDckUsTUFBSVosU0FBSixFQUNJLE9BQU9BLFNBQVA7QUFDSixTQUFPUyxTQUFTLEdBQUdHLE1BQVosSUFBc0JELFlBQVksR0FBRyxNQUFNQSxZQUFULEdBQXdCLEVBQTFELENBQVA7QUFDSCxDQUpEOztBQUtBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTJDO0FBQUEsTUFBeENkLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQlcsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3pELHNCQUFPakIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFSyxhQUFTLEVBQUVVLFlBQVksQ0FBQ1YsU0FBRCxFQUFZVyxZQUFaLEVBQTBCLFNBQTFCO0FBQXpCLEdBQTNCLEVBQTRGWixRQUE1RixDQUFQO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNZSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQUEyQztBQUFBLE1BQXhDZixRQUF3QyxTQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsU0FBOEIsU0FBOUJBLFNBQThCO0FBQUEsTUFBbkJXLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUN6RCxzQkFBT2pCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUssYUFBUyxFQUFFVSxZQUFZLENBQUNWLFNBQUQsRUFBWVcsWUFBWixFQUEwQixTQUExQjtBQUF6QixHQUEzQixFQUE0RlosUUFBNUYsQ0FBUDtBQUNILENBRkQ7O0FBR0EsSUFBTWdCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQW5DLEtBQUssRUFBSTtBQUMvQixzQkFBUWMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixRQUFwQixFQUE4QjtBQUFFSyxhQUFTLEVBQUVVLFlBQVksQ0FBQzlCLEtBQUssQ0FBQ29CLFNBQVAsRUFBa0JwQixLQUFLLENBQUMrQixZQUF4QixFQUFzQyxVQUF0QyxDQUF6QjtBQUE0RUssWUFBUSxFQUFFcEMsS0FBSyxDQUFDb0M7QUFBNUYsR0FBOUIsRUFBc0lwQyxLQUFLLENBQUNtQixRQUE1SSxDQUFSO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNa0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQXJDLEtBQUssRUFBSTtBQUN6QixNQUFJakIsSUFBSSxHQUFHLE1BQVg7QUFDQSxNQUFJaUIsS0FBSyxDQUFDakIsSUFBVixFQUNJQSxJQUFJLEdBQUdpQixLQUFLLENBQUNqQixJQUFiOztBQUNKLFVBQVFBLElBQVI7QUFDSSxTQUFLLE1BQUw7QUFDSSwwQkFBUStCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI3QyxNQUFNLENBQUMyQyxNQUFQLENBQWMsRUFBZCxFQUFrQmIsS0FBbEIsRUFBeUI7QUFBRWpCLFlBQUksRUFBRSxNQUFSO0FBQWdCcUMsaUJBQVMsRUFBRVUsWUFBWSxDQUFDOUIsS0FBSyxDQUFDb0IsU0FBUCxFQUFrQnBCLEtBQUssQ0FBQytCLFlBQXhCLEVBQXNDLFFBQXRDLENBQXZDO0FBQXdGdEIsWUFBSSxFQUFFVCxLQUFLLENBQUNTLElBQXBHO0FBQTBHbEMsYUFBSyxFQUFFeUIsS0FBSyxDQUFDekIsS0FBdkg7QUFBOEgrRCxtQkFBVyxFQUFFdEMsS0FBSyxDQUFDc0MsV0FBako7QUFBOEpDLGlCQUFTLEVBQUV2QyxLQUFLLENBQUN1QyxTQUFOLEdBQWtCLENBQUN2QyxLQUFLLENBQUN1QyxTQUF6QixHQUFxQzdCLFNBQTlNO0FBQXlOMEIsZ0JBQVEsRUFBRXBDLEtBQUssQ0FBQ29DLFFBQXpPO0FBQzFEO0FBQ0FJLGdCQUFRLEVBQUUsQ0FBQ3hDLEtBQUssQ0FBQ29DO0FBRnlDLE9BQXpCLENBQTdCLENBQVI7O0FBR0osU0FBSyxVQUFMO0FBQ0ksMEJBQVF0Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLFVBQXBCLEVBQWdDN0MsTUFBTSxDQUFDMkMsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLEtBQWxCLEVBQXlCO0FBQUVvQixpQkFBUyxFQUFFVSxZQUFZLENBQUM5QixLQUFLLENBQUNvQixTQUFQLEVBQWtCcEIsS0FBSyxDQUFDK0IsWUFBeEIsRUFBc0MsV0FBdEMsQ0FBekI7QUFBNkV0QixZQUFJLEVBQUVULEtBQUssQ0FBQ1MsSUFBekY7QUFBK0ZsQyxhQUFLLEVBQUV5QixLQUFLLENBQUN6QixLQUE1RztBQUFtSCtELG1CQUFXLEVBQUV0QyxLQUFLLENBQUNzQyxXQUF0STtBQUFtSkMsaUJBQVMsRUFBRXZDLEtBQUssQ0FBQ3VDLFNBQU4sR0FBa0IsQ0FBQ3ZDLEtBQUssQ0FBQ3VDLFNBQXpCLEdBQXFDN0IsU0FBbk07QUFBOE0rQixZQUFJLEVBQUV6QyxLQUFLLENBQUN5QyxJQUFOLEdBQWEsQ0FBQ3pDLEtBQUssQ0FBQ3lDLElBQXBCLEdBQTJCL0IsU0FBL087QUFBMFAwQixnQkFBUSxFQUFFcEMsS0FBSyxDQUFDb0M7QUFBMVEsT0FBekIsQ0FBaEMsQ0FBUjs7QUFDSixTQUFLLE9BQUw7QUFDSSwwQkFBUXRCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI3QyxNQUFNLENBQUMyQyxNQUFQLENBQWMsRUFBZCxFQUFrQmIsS0FBbEIsRUFBeUI7QUFBRWpCLFlBQUksRUFBRSxVQUFSO0FBQW9CcUMsaUJBQVMsRUFBRVUsWUFBWSxDQUFDOUIsS0FBSyxDQUFDb0IsU0FBUCxFQUFrQnBCLEtBQUssQ0FBQytCLFlBQXhCLEVBQXNDLFNBQXRDLENBQTNDO0FBQTZGdEIsWUFBSSxFQUFFVCxLQUFLLENBQUNTLElBQXpHO0FBQStHbEMsYUFBSyxFQUFFeUIsS0FBSyxDQUFDekIsS0FBNUg7QUFBbUkrRCxtQkFBVyxFQUFFdEMsS0FBSyxDQUFDc0MsV0FBdEo7QUFBbUtDLGlCQUFTLEVBQUV2QyxLQUFLLENBQUN1QyxTQUFOLEdBQWtCLENBQUN2QyxLQUFLLENBQUN1QyxTQUF6QixHQUFxQzdCLFNBQW5OO0FBQThOMEIsZ0JBQVEsRUFBRXBDLEtBQUssQ0FBQ29DO0FBQTlPLE9BQXpCLENBQTdCLENBQVI7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksMEJBQVF0Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0IsaUJBQXBCLEVBQXVDakUsTUFBTSxDQUFDMkMsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLEtBQWxCLENBQXZDLEVBQWlFQSxLQUFLLENBQUNtQixRQUF2RSxDQUFSOztBQUNKO0FBQ0ksMEJBQU9MLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNFLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFaUjtBQWNILENBbEJEOztBQW1CQSxJQUFNMEIsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQTFDLEtBQUssRUFBSTtBQUNsQixNQUFJQSxLQUFLLENBQUMyQyxhQUFWLEVBQ0lkLFNBQVMsR0FBRzdCLEtBQUssQ0FBQzJDLGFBQWxCO0FBQ0osc0JBQVE3Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUU2QixVQUFNLEVBQUU1QyxLQUFLLENBQUM0QyxNQUFoQjtBQUF3QkMsVUFBTSxFQUFFN0MsS0FBSyxDQUFDNkMsTUFBdEM7QUFBOEN6QixhQUFTLEVBQUVVLFlBQVksQ0FBQzlCLEtBQUssQ0FBQ29CLFNBQVAsRUFBa0JwQixLQUFLLENBQUMrQixZQUF4QixDQUFyRTtBQUE0R2UsWUFBUSxFQUFFOUMsS0FBSyxDQUFDOEM7QUFBNUgsR0FBNUIsRUFBb0s5QyxLQUFLLENBQUNtQixRQUExSyxDQUFSO0FBQ0gsQ0FKRDs7QUFLQXVCLElBQUksQ0FBQ0ssS0FBTCxHQUFhZCxTQUFiO0FBQ0FTLElBQUksQ0FBQ00sT0FBTCxHQUFlWCxXQUFmO0FBQ0FLLElBQUksQ0FBQ08sTUFBTCxHQUFjZCxpQkFBZDtBQUNBTyxJQUFJLENBQUNRLEtBQUwsR0FBYWhCLFNBQWI7QUFDZVEsbUVBQWYsRSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY2xhc3MgRGV0YWlsT2ZJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5nZXROZXdJdGVtKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvYXBpL293bmVyLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvb2x0aXBQbGFjZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRpZ2l0c09ubHlcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRFcnJvcnNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RXJyb3JzJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdlcnJvcic7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlZGlyZWN0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAocmVkaXJlY3QsIGRpciA9ICcnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXIgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzYXZlSXRlbVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgdGhpcy5zdGF0ZS5pdGVtKTtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhdmVJdGVtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCwgJ2JhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiB0aGlzLmdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdCwJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NhdmVJdGVtJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYW5nZUl0ZW1cIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xlYXJNZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROZXdJdGVtKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBnZXROZXdJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xuICAgIH1cbiAgICBnZXRJdGVtRnJvbURhdGEoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuaWQgPyBkYXRhIDogdGhpcy5nZXROZXdJdGVtKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuaXRlbSksIHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gcHJvcHMgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==