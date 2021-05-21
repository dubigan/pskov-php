(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/components/DetailOfItem.js":
/*!*******************************************!*\
  !*** ./assets/components/DetailOfItem.js ***!
  \*******************************************/
/*! exports provided: DetailOfItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOfItem", function() { return DetailOfItem; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import {  } from "react-router-dom";


var DetailOfItem = /*#__PURE__*/function (_Component) {
  _inherits(DetailOfItem, _Component);

  var _super = _createSuper(DetailOfItem);

  function DetailOfItem() {
    var _this;

    _classCallCheck(this, DetailOfItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      messages: [],
      item: _this.getNewItem()
    });

    _defineProperty(_assertThisInitialized(_this), "url", '/api/owner/');

    _defineProperty(_assertThisInitialized(_this), "tooltipPlace", 'bottom');

    _defineProperty(_assertThisInitialized(_this), "digitsOnly", function (e) {
      var charCode = e.charCode; //console.log(charCode);

      if (charCode < 48 || charCode > 57) {
        // digits only
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
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
    });

    _defineProperty(_assertThisInitialized(_this), "getItem", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {}).then(function (res) {
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
    });

    _defineProperty(_assertThisInitialized(_this), "redirect", function (redirect) {
      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (redirect) {
        if (dir === 'back') {
          _this.props.history.goBack();

          return;
        }

        _this.props.history.push(redirect);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveItem", function () {
      //console.log('saveItem', this.state.item);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
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
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (e) {
      _this.setState({
        item: _this.getChangedItem(e.target.name, e.target.value)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearMessages", function () {
      _this.setState({
        messages: []
      });
    });

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
      var item = _objectSpread(_objectSpread({}, this.state.item), {}, _defineProperty({}, name, value));

      return item;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
    }
  }]);

  return DetailOfItem;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxPZkl0ZW0iLCJtZXNzYWdlcyIsIml0ZW0iLCJnZXROZXdJdGVtIiwiZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInJlZGlyZWN0Iiwic2V0U3RhdGUiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsImRpciIsInByb3BzIiwiaGlzdG9yeSIsImdvQmFjayIsInB1c2giLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGFuZ2VkSXRlbSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldEl0ZW0iLCJpZCIsIkNvbXBvbmVudCIsIkNhcmRIZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmQiLCJIZWFkZXIiLCJCb2R5IiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJhdXhDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJhc3NpZ24iLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJlYWRPbmx5Iiwicm93cyIsIkZyYWdtZW50IiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rp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QUFRakIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmUsaUJBQXBCLEVBQXVDakQsTUFBTSxDQUFDb0QsTUFBUCxDQUFjLEVBQWQsRUFBa0JwQyxLQUFsQixDQUF2QyxFQUFpRUEsS0FBSyxDQUFDZSxRQUF2RSxDQUFSOztBQUNKO0FBQ0ksMEJBQU9FLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUN5QixRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBWlI7QUFjSCxDQWxCRDs7QUFtQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQTNDLEtBQUssRUFBSTtBQUNsQixNQUFJQSxLQUFLLENBQUM0QyxhQUFWLEVBQ0lqQixTQUFTLEdBQUczQixLQUFLLENBQUM0QyxhQUFsQjtBQUNKLHNCQUFRM0IsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFMkIsVUFBTSxFQUFFN0MsS0FBSyxDQUFDNkMsTUFBaEI7QUFBd0JDLFVBQU0sRUFBRTlDLEtBQUssQ0FBQzhDLE1BQXRDO0FBQThDOUIsYUFBUyxFQUFFWSxZQUFZLENBQUM1QixLQUFLLENBQUNnQixTQUFQLEVBQWtCaEIsS0FBSyxDQUFDNkIsWUFBeEIsQ0FBckU7QUFBNEdrQixZQUFRLEVBQUUvQyxLQUFLLENBQUMrQztBQUE1SCxHQUE1QixFQUFvSy9DLEtBQUssQ0FBQ2UsUUFBMUssQ0FBUjtBQUNILENBSkQ7O0FBS0E0QixJQUFJLENBQUNLLEtBQUwsR0FBYWpCLFNBQWI7QUFDQVksSUFBSSxDQUFDTSxPQUFMLEdBQWVkLFdBQWY7QUFDQVEsSUFBSSxDQUFDTyxNQUFMLEdBQWNqQixpQkFBZDtBQUNBVSxJQUFJLENBQUNRLEtBQUwsR0FBYW5CLFNBQWI7QUFDZVcsbUVBQWYsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCB7ICB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY2xhc3MgRGV0YWlsT2ZJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0TmV3SXRlbSgpIHt9XG4gIGdldE5ld0l0ZW1JZCgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgaXRlbTogdGhpcy5nZXROZXdJdGVtKCksXG4gIH07XG5cbiAgdXJsID0gJy9hcGkvb3duZXIvJztcbiAgdG9vbHRpcFBsYWNlID0gJ2JvdHRvbSc7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRJdGVtKCk7XG4gIH1cblxuICBkaWdpdHNPbmx5ID0gZSA9PiB7XG4gICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAvLyBkaWdpdHMgb25seVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBnZXRFcnJvcnMgPSBkYXRhID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRFcnJvcnMnLCBkYXRhKTtcbiAgICBjb25zdCB0eXBlID0gJ2Vycm9yJztcbiAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGEgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZSwgbWVzc2FnZTogZGF0YVtrZXldIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SXRlbUZyb21EYXRhKGRhdGEpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtRnJvbURhdGEnLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YS5pZCA/IGRhdGEgOiB0aGlzLmdldE5ld0l0ZW0oKTtcbiAgfVxuXG4gIGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7fSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldEl0ZW0uaGlzdG9yeScsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlZGlyZWN0ID0gKHJlZGlyZWN0LCBkaXIgPSAnJykgPT4ge1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgaWYgKGRpciA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nb0JhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVkaXJlY3QpO1xuICAgIH1cbiAgfTtcblxuICBzYXZlSXRlbSA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKCdzYXZlSXRlbScsIHRoaXMuc3RhdGUuaXRlbSk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHsgaXRlbTogdGhpcy5zdGF0ZS5pdGVtIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2F2ZUl0ZW1cIiwgcmVzLmRhdGEpO1xuXG4gICAgICAgIHRoaXMucmVkaXJlY3QocmVzLmRhdGEucmVkaXJlY3QsICdiYWNrJyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXRlbTogdGhpcy5nZXRJdGVtRnJvbURhdGEocmVzLmRhdGEpLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDRgdC+0YXRgNCw0L3QtdC90LAnIH1dLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIpO1xuXG4gICAgICAgIGxldCBtZXNzYWdlcztcbiAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlSXRlbScsIGVyci5yZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIG1lc3NhZ2VzID0gW2Vyci5yZXNwb25zZS5kYXRhXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBnZXRDaGFuZ2VkSXRlbShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLml0ZW0sXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGFuZ2VJdGVtID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0Q2hhbmdlZEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpIH0pO1xuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIC8vIGxldCBCb2R5OiB0eXBlb2YgQ2FyZEJvZHk7XG4gICAgLy8gbGV0IEZvb3RlcjogdHlwZW9mIENhcmRGb290ZXI7XG4gICAgcmV0dXJuIChcbiAgICAvLyB7XG4gICAgLy8gICBIZWFkZXI6IENhcmRIZWFkZXIsXG4gICAgLy8gICBUaXRsZTogQ2FyZFRpdGxlLFxuICAgIC8vICAgQm9keTogQ2FyZEJvZHksXG4gICAgLy8gICBGb290ZXI6IENhcmRGb290ZXJcbiAgICAvLyB9XG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKSk7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gcHJvcHMgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==