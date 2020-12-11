(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/components/OwnerDetail.js":
/*!******************************************!*\
  !*** ./assets/components/OwnerDetail.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OwnerDetail; });
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Cars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cars */ "./assets/components/Cars.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
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






var NEW_OWNER_ID = -10;
var UNDEFINED_OWNER = -1;
var NEW_OWNER = {
  id: NEW_OWNER_ID,
  // indicate new owner, -1 is not acceptable
  cars: [],
  name: "",
  patronymic: "",
  last_name: "",
  gender: "",
  age: "",
  comment: ""
};

var OwnerDetail = /*#__PURE__*/function (_Component) {
  _inherits(OwnerDetail, _Component);

  var _super = _createSuper(OwnerDetail);

  function OwnerDetail() {
    var _this;

    _classCallCheck(this, OwnerDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      messages: [],
      owner: NEW_OWNER
    });

    _defineProperty(_assertThisInitialized(_this), "url", "/api/owner/");

    _defineProperty(_assertThisInitialized(_this), "tooltipPlace", "bottom");

    _defineProperty(_assertThisInitialized(_this), "digitsOnly", function (e) {
      var charCode = e.charCode; //console.log(charCode);

      if (charCode < 48 || charCode > 57) {
        // digits only
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (data) {
      return Object.keys(data).map(function (key) {
        return {
          type: "error",
          message: data[key]
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getOwner", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {}).then(function (res) {
        var owner = _objectSpread(_objectSpread({}, res.data ? res.data : NEW_OWNER), {}, {
          id: res.data["id"] ? res.data["id"] : NEW_OWNER_ID
        });

        console.log("getOwner", owner);

        _this.setState({
          owner: owner
        });
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveOwner", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
        owner: _this.state.owner
      }).then(function (res) {
        _this.setState({
          owner: res.data,
          messages: [{
            type: "success",
            message: "Информация о владельце сохранена"
          }]
        });
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeOwner", function (e) {
      var owner;

      switch (e.target.name) {
        case "gender-f":
          owner = _objectSpread(_objectSpread({}, _this.state.owner), {}, {
            gender: "f"
          });
          break;

        case "gender-m":
          owner = _objectSpread(_objectSpread({}, _this.state.owner), {}, {
            gender: "m"
          });
          break;

        default:
          owner = _objectSpread(_objectSpread({}, _this.state.owner), {}, _defineProperty({}, e.target.name, e.target.value));
      }

      _this.setState({
        owner: owner
      });
    });

    _defineProperty(_assertThisInitialized(_this), "btnNewCarClick", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.url, {
        btn_add: "",
        url: window.location.pathname,
        owner_pk: _this.state.owner.id
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      })["catch"](function (err) {
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    });

    return _this;
  }

  _createClass(OwnerDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getOwner();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        messages: this.state.messages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4"
      }, "\u0418\u043C\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-6",
        name: "name",
        type: "text",
        value: this.state.owner.name ? this.state.owner.name : "",
        onChange: this.changeOwner
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-6",
        name: "patronymic",
        type: "text",
        value: this.state.owner.patronymic ? this.state.owner.patronymic : "",
        onChange: this.changeOwner
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4"
      }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-6",
        name: "last_name",
        type: "text",
        value: this.state.owner.last_name ? this.state.owner.last_name : "",
        onChange: this.changeOwner
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4",
        name: "gender"
      }, "\u041F\u043E\u043B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-1",
        name: "gender-m"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", null, "\u041C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-1 border-0",
        name: "gender-m",
        type: "radio",
        checked: this.state.owner.gender === "m" ? 1 : 0,
        onChange: this.changeOwner
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-1",
        name: "gender-f"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", null, "\u0416")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-1 border-0",
        name: "gender-f",
        type: "radio",
        checked: this.state.owner.gender === "f" ? 1 : 0,
        onChange: this.changeOwner
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4",
        name: "age"
      }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control col-6",
        name: "age",
        type: "text",
        maxLength: "3",
        value: this.state.owner.age ? this.state.owner.age : "",
        onChange: this.changeOwner,
        onKeyPress: this.digitsOnly
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "col-4"
      }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        as: "textarea",
        rows: "6",
        value: this.state.owner.comment,
        name: "comment",
        onChange: this.changeOwner
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
        key: 1,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
          id: "tooltip-1"
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "primary",
        className: "col",
        onClick: this.saveOwner
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Title, null, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
          id: "tooltip-2"
        }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "primary",
        className: "col",
        name: "add_car",
        onClick: this.btnNewCarClick,
        disabled: this.state.owner.id < 0 ? "disabled" : ""
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Cars__WEBPACK_IMPORTED_MODULE_10__["default"], {
        owner: this.state.owner.id,
        withButtons: "true",
        withOwnerInfo: "false",
        withSearch: "false"
      })))));
    }
  }]);

  return OwnerDetail;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRldGFpbC5qcyJdLCJuYW1lcyI6WyJORVdfT1dORVJfSUQiLCJVTkRFRklORURfT1dORVIiLCJORVdfT1dORVIiLCJpZCIsImNhcnMiLCJuYW1lIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNvbW1lbnQiLCJPd25lckRldGFpbCIsIm1lc3NhZ2VzIiwib3duZXIiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidHlwZSIsIm1lc3NhZ2UiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXJyIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYnRuX2FkZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJvd25lcl9wayIsInJlZGlyZWN0IiwiaHJlZiIsImdldE93bmVyIiwiY2hhbmdlT3duZXIiLCJkaWdpdHNPbmx5IiwidG9vbHRpcFBsYWNlIiwic2F2ZU93bmVyIiwiYnRuTmV3Q2FyQ2xpY2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxFQUF0QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxDQUFDLENBQXpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxJQUFFLEVBQUVILFlBRFk7QUFDRTtBQUNsQkksTUFBSSxFQUFFLEVBRlU7QUFHaEJDLE1BQUksRUFBRSxFQUhVO0FBSWhCQyxZQUFVLEVBQUUsRUFKSTtBQUtoQkMsV0FBUyxFQUFFLEVBTEs7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S0FBS0UsY0FKaEI7QUFLRSxnQkFBUSxFQUFFLEtBQUtmLEtBQUwsQ0FBV3RCLEtBQVgsQ0FBaUJWLEVBQWpCLEdBQXNCLENBQXRCLEdBQTBCLFVBQTFCLEdBQXVDO0FBTG5ELHlIQVBGLENBREYsQ0FERixDQURGLENBRkYsZUF5QkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsMkRBQUMsOENBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS2dDLEtBQUwsQ0FBV3RCLEtBQVgsQ0FBaUJWLEVBRDFCO0FBRUUsbUJBQVcsRUFBQyxNQUZkO0FBR0UscUJBQWEsRUFBQyxPQUhoQjtBQUlFLGtCQUFVLEVBQUM7QUFKYixRQURGLENBREYsQ0F6QkYsQ0FsSEYsQ0FERjtBQXlKRDs7OztFQXZRc0NnRCwrQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUm93LFxuICBGb3JtLFxuICBCdXR0b24sXG4gIENvbCxcbiAgVG9vbHRpcCxcbiAgT3ZlcmxheVRyaWdnZXIsXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBDYXJzIGZyb20gXCIuL0NhcnNcIjtcbmltcG9ydCBBbGVydHMgZnJvbSBcIi4vQWxlcnRzXCI7XG5cbmNvbnN0IE5FV19PV05FUl9JRCA9IC0xMDtcbmNvbnN0IFVOREVGSU5FRF9PV05FUiA9IC0xO1xuXG5jb25zdCBORVdfT1dORVIgPSB7XG4gIGlkOiBORVdfT1dORVJfSUQsIC8vIGluZGljYXRlIG5ldyBvd25lciwgLTEgaXMgbm90IGFjY2VwdGFibGVcbiAgY2FyczogW10sXG4gIG5hbWU6IFwiXCIsXG4gIHBhdHJvbnltaWM6IFwiXCIsXG4gIGxhc3RfbmFtZTogXCJcIixcbiAgZ2VuZGVyOiBcIlwiLFxuICBhZ2U6IFwiXCIsXG4gIGNvbW1lbnQ6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lckRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBvd25lcjogTkVXX09XTkVSLFxuICB9O1xuXG4gIHVybCA9IFwiL2FwaS9vd25lci9cIjtcbiAgdG9vbHRpcFBsYWNlID0gXCJib3R0b21cIjtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldE93bmVyKCk7XG4gIH1cblxuICBkaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcImVycm9yXCIsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldE93bmVyID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG93bmVyID0ge1xuICAgICAgICAgIC4uLihyZXMuZGF0YSA/IHJlcy5kYXRhIDogTkVXX09XTkVSKSxcbiAgICAgICAgICBpZDogcmVzLmRhdGFbXCJpZFwiXSA/IHJlcy5kYXRhW1wiaWRcIl0gOiBORVdfT1dORVJfSUQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0T3duZXJcIiwgb3duZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvd25lcjogb3duZXIgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBzYXZlT3duZXIgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7IG93bmVyOiB0aGlzLnN0YXRlLm93bmVyIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG93bmVyOiByZXMuZGF0YSxcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogXCLQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQstC70LDQtNC10LvRjNGG0LUg0YHQvtGF0YDQsNC90LXQvdCwXCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNoYW5nZU93bmVyID0gKGUpID0+IHtcbiAgICBsZXQgb3duZXI7XG4gICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XG4gICAgICBjYXNlIFwiZ2VuZGVyLWZcIjpcbiAgICAgICAgb3duZXIgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5vd25lcixcbiAgICAgICAgICBnZW5kZXI6IFwiZlwiLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJnZW5kZXItbVwiOlxuICAgICAgICBvd25lciA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm93bmVyLFxuICAgICAgICAgIGdlbmRlcjogXCJtXCIsXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb3duZXIgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5vd25lcixcbiAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBvd25lciB9KTtcbiAgfTtcblxuICBidG5OZXdDYXJDbGljayA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgYnRuX2FkZDogXCJcIixcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIG93bmVyX3BrOiB0aGlzLnN0YXRlLm93bmVyLmlkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVtcInJlZGlyZWN0XCJdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLlRpdGxlPtCQ0LLRgtC+0LLQu9Cw0LTQtdC70LXRhjwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCY0LzRjzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3duZXIubmFtZSA/IHRoaXMuc3RhdGUub3duZXIubmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCI+0J7RgtGH0LXRgdGC0LLQvjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF0cm9ueW1pY1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3duZXIucGF0cm9ueW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm93bmVyLnBhdHJvbnltaWNcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCI+0KTQsNC80LjQu9C40Y88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3duZXIubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUub3duZXIubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiIG5hbWU9XCJnZW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtC7XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0xXCIgbmFtZT1cImdlbmRlci1tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPtCcPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTEgYm9yZGVyLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXItbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm93bmVyLmdlbmRlciA9PT0gXCJtXCIgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTFcIiBuYW1lPVwiZ2VuZGVyLWZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+0JY8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtMSBib3JkZXItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlci1mXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUub3duZXIuZ2VuZGVyID09PSBcImZcIiA/IDEgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiIG5hbWU9XCJhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLQvtC30YDQsNGB0YJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3duZXIuYWdlID8gdGhpcy5zdGF0ZS5vd25lci5hZ2UgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaWdpdHNPbmx5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vd25lci5jb21tZW50fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfVxuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgdG9vbHRpcC0xYH0+XG4gICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINC40L3RhNC+0YDQvNCw0YbQuNGOINC+0LEg0LDQstGC0L7QstC70LDQtNC10LvRjNGG0LVcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVPd25lcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLlRpdGxlPtCQ0LLRgtC+0LzQvtCx0LjQu9C4PC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwic3BhY2VyXCI+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2B0b29sdGlwLTJgfT7QlNC+0LHQsNCy0LjRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GMPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkX2NhclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYnRuTmV3Q2FyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLm93bmVyLmlkIDwgMCA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70YxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxDYXJzXG4gICAgICAgICAgICAgICAgb3duZXI9e3RoaXMuc3RhdGUub3duZXIuaWR9XG4gICAgICAgICAgICAgICAgd2l0aEJ1dHRvbnM9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB3aXRoT3duZXJJbmZvPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHdpdGhTZWFyY2g9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==