(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/components/CarDetail.js":
/*!****************************************!*\
  !*** ./assets/components/CarDetail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarDetail; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailOfItem */ "./assets/components/DetailOfItem.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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







var EMPTY_CAR = {
  id: -1,
  manufacturer: "",
  model: "",
  production: new Date().toLocaleDateString("ru"),
  color: "",
  power: 0,
  mileage: 0,
  comment: ""
};

var CarDetail = /*#__PURE__*/function (_DetailOfItem) {
  _inherits(CarDetail, _DetailOfItem);

  var _super = _createSuper(CarDetail);

  function CarDetail() {
    var _this;

    _classCallCheck(this, CarDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "url", "/api/car/");

    _defineProperty(_assertThisInitialized(_this), "changeDate", function (date) {
      //console.log("changeDate", date.toLocaleDateString("ru"));
      var item = _objectSpread(_objectSpread({}, _this.state.item), {}, {
        production: date.toLocaleDateString("ru")
      });

      _this.setState({
        item: item
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDate", function () {
      if (_this.state.item.production) {
        var _this$state$item$prod = _this.state.item.production.split("."),
            _this$state$item$prod2 = _slicedToArray(_this$state$item$prod, 3),
            day = _this$state$item$prod2[0],
            month = _this$state$item$prod2[1],
            year = _this$state$item$prod2[2]; //console.log("getDate", [day, month, year]);


        return new Date(year, (+month - 1).toString(), day);
      }

      return new Date();
    });

    return _this;
  }

  _createClass(CarDetail, [{
    key: "getNewItem",
    value: function getNewItem() {
      var item = EMPTY_CAR;
      console.log("getNewItem", item);
      return item;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_14__["default"], {
        messages: this.state.messages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "manufacturer",
        type: "text",
        value: this.state.item.manufacturer,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041C\u043E\u0434\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "model",
        type: "text",
        value: this.state.item.model,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "col-6",
        format: "dd.MM.y",
        locale: "ru",
        name: "production" // showYearDropdown={true}
        ,
        onChange: this.changeDate,
        value: this.getDate()
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "color"
      }, "\u0426\u0432\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "color",
        type: "text",
        value: this.state.item.color,
        onChange: this.changeItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "age"
      }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043B.\u0441.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "power",
        type: "text",
        maxLength: "3",
        value: this.state.item.power ? this.state.item.power : "",
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5",
        name: "age"
      }, "\u041F\u0440\u043E\u0431\u0435\u0433 (\u043A\u043C.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control col-6",
        name: "mileage",
        type: "text",
        maxLength: "10",
        value: this.state.item.mileage ? this.state.item.mileage : "",
        onChange: this.changeItem,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        as: "textarea",
        rows: "7",
        value: this.state.item.comment,
        name: "comment",
        onChange: this.changeItem
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["OverlayTrigger"], {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
          id: "tooltip-2"
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "col",
        onClick: this.saveItem
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))));
    }
  }]);

  return CarDetail;
}(_DetailOfItem__WEBPACK_IMPORTED_MODULE_13__["DetailOfItem"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJEZXRhaWwuanMiXSwibmFtZXMiOlsiRU1QVFlfQ0FSIiwiaWQiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsInByb2R1Y3Rpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJjb21tZW50IiwiQ2FyRGV0YWlsIiwiZGF0ZSIsIml0ZW0iLCJzdGF0ZSIsInNldFN0YXRlIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlcyIsImNoYW5nZUl0ZW0iLCJjaGFuZ2VEYXRlIiwiZ2V0RGF0ZSIsImRpZ2l0c09ubHkiLCJ0b29sdGlwUGxhY2UiLCJzYXZlSXRlbSIsIkRldGFpbE9mSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRSxDQUFDLENBRFc7QUFFaEJDLGNBQVksRUFBRSxFQUZFO0FBR2hCQyxPQUFLLEVBQUUsRUFIUztBQUloQkMsWUFBVSxFQUFFLElBQUlDLElBQUosR0FBV0Msa0JBQVgsQ0FBOEIsSUFBOUIsQ0FKSTtBQUtoQkMsT0FBSyxFQUFFLEVBTFM7QUFNaEJDLE9BQUssRUFBRSxDQU5TO0FBT2hCQyxTQUFPLEVBQUUsQ0FQTztBQVFoQkMsU0FBTyxFQUFFO0FBUk8sQ0FBbEI7O0lBVXFCQyxTOzs7Ozs7Ozs7Ozs7Ozs7OzBEQUNiLFc7O2lFQVNPLFVBQUNDLElBQUQsRUFBVTtBQUNyQjtBQUNBLFVBQU1DLElBQUksbUNBQ0wsTUFBS0MsS0FBTCxDQUFXRCxJQUROO0FBRVJULGtCQUFVLEVBQUVRLElB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RSxLQUFLSSxZQUZsQjtBQUdFLGVBQU8sZUFDTCwyREFBQyx3REFBRDtBQUFTLFlBQUU7QUFBWDtBQUpKLHNCQVNFLDJEQUFDLHVEQUFEO0FBQ0UsZUFBTyxFQUFDLFNBRFY7QUFFRSxpQkFBUyxFQUFDLEtBRlo7QUFHRSxlQUFPLEVBQUUsS0FBS0M7QUFIaEIsa0VBVEYsQ0FERixDQURGLENBdkZGLENBRkYsQ0FGRixDQURGO0FBcUhEOzs7O0VBbEpvQ0MsMkQiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIFJvdyxcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBUb29sdGlwLFxuICBPdmVybGF5VHJpZ2dlcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBEZXRhaWxPZkl0ZW0gfSBmcm9tIFwiLi9EZXRhaWxPZkl0ZW1cIjtcbmltcG9ydCBBbGVydHMgZnJvbSBcIi4vQWxlcnRzXCI7XG5cbmNvbnN0IEVNUFRZX0NBUiA9IHtcbiAgaWQ6IC0xLFxuICBtYW51ZmFjdHVyZXI6IFwiXCIsXG4gIG1vZGVsOiBcIlwiLFxuICBwcm9kdWN0aW9uOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpLFxuICBjb2xvcjogXCJcIixcbiAgcG93ZXI6IDAsXG4gIG1pbGVhZ2U6IDAsXG4gIGNvbW1lbnQ6IFwiXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyRGV0YWlsIGV4dGVuZHMgRGV0YWlsT2ZJdGVtIHtcbiAgdXJsID0gXCIvYXBpL2Nhci9cIjtcblxuICBnZXROZXdJdGVtKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBFTVBUWV9DQVI7XG4gICAgY29uc29sZS5sb2coXCJnZXROZXdJdGVtXCIsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGFuZ2VEYXRlID0gKGRhdGUpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlRGF0ZVwiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1XCIpKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtLFxuICAgICAgcHJvZHVjdGlvbjogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJydVwiKSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtIH0pO1xuICB9O1xuXG4gIGdldERhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXRlbS5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSB0aGlzLnN0YXRlLml0ZW0ucHJvZHVjdGlvbi5zcGxpdChcIi5cIik7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RGF0ZVwiLCBbZGF5LCBtb250aCwgeWVhcl0pO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsICgrbW9udGggLSAxKS50b1N0cmluZygpLCBkYXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLlRpdGxlPtCQ0LLRgtC+0LzQvtCx0LjQu9GMPC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Yw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hbnVmYWN0dXJlclwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5tYW51ZmFjdHVyZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7QnNC+0LTQtdC70Yw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7QlNCw0YLQsCDQstGL0L/Rg9GB0LrQsDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfVxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD17YHRvb2x0aXAtMWB9PtCU0LDRgtCwINCy0YvQv9GD0YHQutCwINCyINGE0L7RgNC80LDRgtC1IGRkLm1tLnl5eTwvVG9vbHRpcD59XG4gICAgICAgICAgICAgICAgICA+ICovfVxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC5NTS55XCJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPVwicnVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3dZZWFyRHJvcGRvd249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZURhdGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldERhdGUoKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7LyogPC9PdmVybGF5VHJpZ2dlcj4gKi99XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiIG5hbWU9XCJjb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICDQptCy0LXRglxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiIG5hbWU9XCJhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAg0JzQvtGJ0L3QvtGB0YLRjCAo0Lsu0YEuKVxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb3dlclwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0ucG93ZXIgPyB0aGlzLnN0YXRlLml0ZW0ucG93ZXIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpZ2l0c09ubHl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIiBuYW1lPVwiYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0YDQvtCx0LXQsyAo0LrQvC4pXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbGVhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXRlbS5taWxlYWdlID8gdGhpcy5zdGF0ZS5pdGVtLm1pbGVhZ2UgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaWdpdHNPbmx5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAga2V5PXsyfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PXt0aGlzLnRvb2x0aXBQbGFjZX1cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD17YHRvb2x0aXAtMmB9PlxuICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQvtCxINCw0LLRgtC+0LzQvtCx0LjQu9C1XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlSXRlbX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9