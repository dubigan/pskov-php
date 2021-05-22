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
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
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
    _this.state = {
      messages: [],
      item: _this.getNewItem()
    };
    _this.url = '/api/owner/';
    _this.tooltipPlace = 'bottom';

    _this.digitsOnly = function (e) {
      var charCode = e.charCode; //console.log(charCode);

      if (charCode < 48 || charCode > 57) {
        // digits only
        e.preventDefault();
      }
    };

    _this.getErrors = function (data) {
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
    };

    _this.getItem = function () {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_this.url, {}).then(function (res) {
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
    };

    _this.redirect = function (redirect) {
      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (redirect) {
        if (dir === 'back') {
          _this.props.history.goBack();

          return;
        }

        _this.props.history.push(redirect);
      }
    };

    _this.saveItem = function () {
      //console.log('saveItem', this.state.item);
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_this.url, {
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
    };

    _this.changeItem = function (e) {
      _this.setState({
        item: _this.getChangedItem(e.target.name, e.target.value)
      });
    };

    _this.clearMessages = function () {
      _this.setState({
        messages: []
      });
    };

    return _this;
  }

  _createClass(DetailOfItem, [{
    key: "getNewItem",
    value: function getNewItem() {}
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);
    }
  }]);

  return DetailOfItem;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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
  // let Body: typeof CardBody;
  // let Footer: typeof CardFooter;
  return (
    /*#__PURE__*/
    // {
    //   Header: CardHeader,
    //   Title: CardTitle,
    //   Body: CardBody,
    //   Footer: CardFooter
    // }
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className ? className : 'card'
    }, children)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giXSwibmFtZXMiOlsiRGV0YWlsT2ZJdGVtIiwiYXJndW1lbnRzIiwic3RhdGUiLCJtZXNzYWdlcyIsIml0ZW0iLCJnZXROZXdJdGVtIiwidXJsIiwidG9vbHRpcFBsYWNlIiwiZGlnaXRzT25seSIsImUiLCJjaGFyQ29kZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0RXJyb3JzIiwiZGF0YSIsInR5cGUiLCJtZXNzYWdlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwicmVkaXJlY3QiLCJzZXRTdGF0ZSIsImdldEl0ZW1Gcm9tRGF0YSIsImVyciIsInJlc3BvbnNlIiwiZGlyIiwicHJvcHMiLCJoaXN0b3J5IiwiZ29CYWNrIiwicHVzaCIsInNhdmVJdGVtIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUl0ZW0iLCJnZXRDaGFuZ2VkSXRlbSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNsZWFyTWVzc2FnZXMiLCJpZCIsImFzc2lnbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQ29tcG9uZW50IiwiQ2FyZEhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZCIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiLCJUaXRsZSIsImJhc2VDbGFzcyIsImdldENsYXNzTmFtZSIsImF1eENsYXNzTmFtZSIsInN1ZmZpeCIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sU2VsZWN0Iiwib25DaGFuZ2UiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicmVhZE9ubHkiLCJyb3dzIiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUUsRUFERDtBQUVUQyxVQUFJLEVBQUUsTUFBS0MsVUFBTDtBQUZHLEtBQWI7QUFJQSxVQUFLQyxHQUFMLEdBQVcsYUFBWDtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsUUFBcEI7O0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixVQUFDQyxDQUFELEVBQU87QUFDckIsVUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNDLFFBQWpCLENBRHFCLENBRXJCOztBQUNBLFVBQUlBLFFBQVEsR0FBRyxFQUFYLElBQWlCQSxRQUFRLEdBQUcsRUFBaEMsRUFBb0M7QUFDaEM7QUFDQUQsU0FBQyxDQUFDRSxjQUFGO0FBQ0g7QUFDSixLQVBEOztBQVFBLFVBQUtDLFNBQUwsR0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE9BQWI7O0FBQ0EsVUFBSSxPQUFPRCxJQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDekIsZUFBTztBQUFFQyxjQUFJLEVBQUpBLElBQUY7QUFBUUMsaUJBQU8sRUFBRUY7QUFBakIsU0FBUDtBQUNIOztBQUNELGFBQU9HLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixJQUFaLEVBQWtCSyxHQUFsQixDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDaEMsZUFBTztBQUFFTCxjQUFJLEVB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Q29CLFFBQTFLLENBQVI7QUFDSCxDQUpEOztBQUtBd0IsSUFBSSxDQUFDSyxLQUFMLEdBQWFmLFNBQWI7QUFDQVUsSUFBSSxDQUFDTSxPQUFMLEdBQWVaLFdBQWY7QUFDQU0sSUFBSSxDQUFDTyxNQUFMLEdBQWNmLGlCQUFkO0FBQ0FRLElBQUksQ0FBQ1EsS0FBTCxHQUFhakIsU0FBYjtBQUNlUyxtRUFBZixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmV4cG9ydCBjbGFzcyBEZXRhaWxPZkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgaXRlbTogdGhpcy5nZXROZXdJdGVtKCksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXJsID0gJy9hcGkvb3duZXIvJztcbiAgICAgICAgdGhpcy50b29sdGlwUGxhY2UgPSAnYm90dG9tJztcbiAgICAgICAgdGhpcy5kaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgICAgICAgICAgICAvLyBkaWdpdHMgb25seVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRFcnJvcnMgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RXJyb3JzJywgZGF0YSk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gJ2Vycm9yJztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wb3N0KHRoaXMudXJsLCB7fSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdCA9IChyZWRpcmVjdCwgZGlyID0gJycpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXIgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ29CYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVkaXJlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNhdmVJdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCB0aGlzLnN0YXRlLml0ZW0pO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdCh0aGlzLnVybCwgeyBpdGVtOiB0aGlzLnN0YXRlLml0ZW0gfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzYXZlSXRlbVwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChyZXMuZGF0YS5yZWRpcmVjdCwgJ2JhY2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdCwJyB9XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlSXRlbScsIGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbZXJyLnJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoYW5nZUl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXROZXdJdGVtKCkgeyB9XG4gICAgZ2V0TmV3SXRlbUlkKCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldEl0ZW0oKTtcbiAgICB9XG4gICAgZ2V0SXRlbUZyb21EYXRhKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbUZyb21EYXRhJywgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhLmlkID8gZGF0YSA6IHRoaXMuZ2V0TmV3SXRlbSgpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLml0ZW0pLCB7IFtuYW1lXTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIC8vIGxldCBCb2R5OiB0eXBlb2YgQ2FyZEJvZHk7XG4gICAgLy8gbGV0IEZvb3RlcjogdHlwZW9mIENhcmRGb290ZXI7XG4gICAgcmV0dXJuIChcbiAgICAvLyB7XG4gICAgLy8gICBIZWFkZXI6IENhcmRIZWFkZXIsXG4gICAgLy8gICBUaXRsZTogQ2FyZFRpdGxlLFxuICAgIC8vICAgQm9keTogQ2FyZEJvZHksXG4gICAgLy8gICBGb290ZXI6IENhcmRGb290ZXJcbiAgICAvLyB9XG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKSk7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gcHJvcHMgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==