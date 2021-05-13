(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
      if (redirect) {
        _this.props.history.push(redirect);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveItem", function () {
      //console.log('saveItem', this.state.item);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
        item: _this.state.item
      }).then(function (res) {
        //console.log("saveItem", res.data);
        _this.redirect(res.data.redirect);

        _this.setState({
          item: _this.getItemFromData(res.data),
          messages: [{
            type: 'success',
            message: 'Информация сохранена'
          }]
        });
      })["catch"](function (err) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className ? className : 'form__label'
  }, children);
};

var FormGroup = function FormGroup(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className ? className : 'form__group'
  }, children);
};

var FormControl = function FormControl(props) {
  var type = 'text';
  if (props.type) type = props.type;

  switch (type) {
    case 'text':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: props.className ? props.className : 'form__control',
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange
      });

    case 'textarea':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        className: props.className ? props.className : 'form__control',
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        rows: props.rows ? +props.rows : undefined,
        onChange: props.onChange
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  }
};

var Form = function Form(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: className ? className : 'form'
  }, children);
};

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxPZkl0ZW0iLCJtZXNzYWdlcyIsIml0ZW0iLCJnZXROZXdJdGVtIiwiZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInJlZGlyZWN0Iiwic2V0U3RhdGUiLCJnZXRJdGVtRnJvbURhdGEiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsInByb3BzIiwiaGlzdG9yeSIsInB1c2giLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGFuZ2VkSXRlbSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldEl0ZW0iLCJpZCIsIkNvbXBvbmVudCIsIkNhcmRIZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmQiLCJIZWFkZXIiLCJCb2R5IiwiRm9vdGVyIiwiVGl0bGUiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJyb3dzIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGFiZWwiLCJDb250cm9sIiwiR3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRU8sSUFBTUEs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QUFBbU1FLFlBQUksRUFBRWpDLEtBQUssQ0FBQ2lDLElBQU4sR0FBYSxDQUFDakMsS0FBSyxDQUFDaUMsSUFBcEIsR0FBMkJGLFNBQXBPO0FBQStPQyxnQkFBUSxFQUFFaEMsS0FBSyxDQUFDZ0M7QUFBL1AsT0FBaEMsQ0FBUjs7QUFDSjtBQUNJLDBCQUFPaEIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNENBQUssQ0FBQ2tCLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFOUjtBQVFILENBWkQ7O0FBYUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBNkI7QUFBQSxNQUExQnJCLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDdEMsc0JBQU9DLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRUYsYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUE1QixFQUEyRUQsUUFBM0UsQ0FBUDtBQUNILENBRkQ7O0FBR0FxQixJQUFJLENBQUNDLEtBQUwsR0FBYVYsU0FBYjtBQUNBUyxJQUFJLENBQUNFLE9BQUwsR0FBZVQsV0FBZjtBQUNBTyxJQUFJLENBQUNHLEtBQUwsR0FBYVgsU0FBYjtBQUNlUSxtRUFBZixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgeyAgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNsYXNzIERldGFpbE9mSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldE5ld0l0ZW0oKSB7fVxuICBnZXROZXdJdGVtSWQoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGl0ZW06IHRoaXMuZ2V0TmV3SXRlbSgpLFxuICB9O1xuXG4gIHVybCA9ICcvYXBpL293bmVyLyc7XG4gIHRvb2x0aXBQbGFjZSA9ICdib3R0b20nO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0SXRlbSgpO1xuICB9XG5cbiAgZGlnaXRzT25seSA9IGUgPT4ge1xuICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgLy9jb25zb2xlLmxvZyhjaGFyQ29kZSk7XG4gICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0RXJyb3JzID0gZGF0YSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZygnZ2V0RXJyb3JzJywgZGF0YSk7XG4gICAgY29uc3QgdHlwZSA9ICdlcnJvcic7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4geyB0eXBlLCBtZXNzYWdlOiBkYXRhIH07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGUsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEl0ZW1Gcm9tRGF0YShkYXRhKSB7XG4gICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbUZyb21EYXRhJywgZGF0YSk7XG4gICAgcmV0dXJuIGRhdGEuaWQgPyBkYXRhIDogdGhpcy5nZXROZXdJdGVtKCk7XG4gIH1cblxuICBnZXRJdGVtID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtLmhpc3RvcnknLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW06IHRoaXMuZ2V0SXRlbUZyb21EYXRhKHJlcy5kYXRhKSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZWRpcmVjdCA9IHJlZGlyZWN0ID0+IHtcbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgc2F2ZUl0ZW0gPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCB0aGlzLnN0YXRlLml0ZW0pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IGl0ZW06IHRoaXMuc3RhdGUuaXRlbSB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhdmVJdGVtXCIsIHJlcy5kYXRhKTtcblxuICAgICAgICB0aGlzLnJlZGlyZWN0KHJlcy5kYXRhLnJlZGlyZWN0KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpdGVtOiB0aGlzLmdldEl0ZW1Gcm9tRGF0YShyZXMuZGF0YSksXG4gICAgICAgICAgbWVzc2FnZXM6IFt7IHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINGB0L7RhdGA0LDQvdC10L3QsCcgfV0sXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZXM7XG4gICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUl0ZW0nLCBlcnIucmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICBtZXNzYWdlcyA9IFtlcnIucmVzcG9uc2UuZGF0YV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZ2V0Q2hhbmdlZEl0ZW0obmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9O1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2hhbmdlSXRlbSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtOiB0aGlzLmdldENoYW5nZWRJdGVtKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKSB9KTtcbiAgfTtcblxuICBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICAvLyBsZXQgQm9keTogdHlwZW9mIENhcmRCb2R5O1xuICAgIC8vIGxldCBGb290ZXI6IHR5cGVvZiBDYXJkRm9vdGVyO1xuICAgIHJldHVybiAoXG4gICAgLy8ge1xuICAgIC8vICAgSGVhZGVyOiBDYXJkSGVhZGVyLFxuICAgIC8vICAgVGl0bGU6IENhcmRUaXRsZSxcbiAgICAvLyAgIEJvZHk6IENhcmRCb2R5LFxuICAgIC8vICAgRm9vdGVyOiBDYXJkRm9vdGVyXG4gICAgLy8gfVxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbikpO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdmb3JtX19sYWJlbCcgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnZm9ybV9fZ3JvdXAnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IHByb3BzID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICdmb3JtX19jb250cm9sJywgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICdmb3JtX19jb250cm9sJywgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnZm9ybScgfSwgY2hpbGRyZW4pO1xufTtcbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==