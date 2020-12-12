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
      console.log("getErrors", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRldGFpbC5qcyJdLCJuYW1lcyI6WyJORVdfT1dORVJfSUQiLCJVTkRFRklORURfT1dORVIiLCJORVdfT1dORVIiLCJpZCIsImNhcnMiLCJuYW1lIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNvbW1lbnQiLCJPd25lckRldGFpbCIsIm1lc3NhZ2VzIiwib3duZXIiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInR5cGUiLCJtZXNzYWdlIiwiYXhpb3MiLCJwb3N0IiwidXJsIiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwiZXJyIiwiZ2V0RXJyb3JzIiwicmVzcG9uc2UiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYnRuX2FkZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJvd25lcl9wayIsInJlZGlyZWN0IiwiaHJlZiIsImdldE93bmVyIiwiY2hhbmdlT3duZXIiLCJkaWdpdHNPbmx5IiwidG9vbHRpcFBsYWNlIiwic2F2ZU93bmVyIiwiYnRuTmV3Q2FyQ2xpY2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxFQUF0QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxDQUFDLENBQXpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxJQUFFLEVBQUVILFlBRFk7QUFDRTtBQUNsQkksTUFBSSxFQUFFLEVBRlU7QUFHaEJDLE1BQUksRUFBRSxFQUhVO0FBSWhCQyxZQUFVLEVBQUUsRUFKSTtBQUtoQkMsV0FBUyxFQUFFLEVBTEs7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UyxFQUFDLEtBRlo7QUFHRSxZQUFJLEVBQUMsU0FIUDtBQUlFLGVBQU8sRUFBRSxLQUFLRSxjQUpoQjtBQUtFLGdCQUFRLEVBQUUsS0FBS2YsS0FBTCxDQUFXdEIsS0FBWCxDQUFpQlYsRUFBakIsR0FBc0IsQ0FBdEIsR0FBMEIsVUFBMUIsR0FBdUM7QUFMbkQseUhBUEYsQ0FERixDQURGLENBREYsQ0FGRixlQXlCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSwyREFBQyw4Q0FBRDtBQUNFLGFBQUssRUFBRSxLQUFLZ0MsS0FBTCxDQUFXdEIsS0FBWCxDQUFpQlYsRUFEMUI7QUFFRSxtQkFBVyxFQUFDLE1BRmQ7QUFHRSxxQkFBYSxFQUFDLE9BSGhCO0FBSUUsa0JBQVUsRUFBQztBQUpiLFFBREYsQ0FERixDQXpCRixDQWxIRixDQURGO0FBeUpEOzs7O0VBelFzQ2dELCtDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBSb3csXG4gIEZvcm0sXG4gIEJ1dHRvbixcbiAgQ29sLFxuICBUb29sdGlwLFxuICBPdmVybGF5VHJpZ2dlcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IENhcnMgZnJvbSBcIi4vQ2Fyc1wiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcblxuY29uc3QgTkVXX09XTkVSX0lEID0gLTEwO1xuY29uc3QgVU5ERUZJTkVEX09XTkVSID0gLTE7XG5cbmNvbnN0IE5FV19PV05FUiA9IHtcbiAgaWQ6IE5FV19PV05FUl9JRCwgLy8gaW5kaWNhdGUgbmV3IG93bmVyLCAtMSBpcyBub3QgYWNjZXB0YWJsZVxuICBjYXJzOiBbXSxcbiAgbmFtZTogXCJcIixcbiAgcGF0cm9ueW1pYzogXCJcIixcbiAgbGFzdF9uYW1lOiBcIlwiLFxuICBnZW5kZXI6IFwiXCIsXG4gIGFnZTogXCJcIixcbiAgY29tbWVudDogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE93bmVyRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIG93bmVyOiBORVdfT1dORVIsXG4gIH07XG5cbiAgdXJsID0gXCIvYXBpL293bmVyL1wiO1xuICB0b29sdGlwUGxhY2UgPSBcImJvdHRvbVwiO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0T3duZXIoKTtcbiAgfVxuXG4gIGRpZ2l0c09ubHkgPSAoZSkgPT4ge1xuICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgLy9jb25zb2xlLmxvZyhjaGFyQ29kZSk7XG4gICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0RXJyb3JzID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImdldEVycm9yc1wiLCBkYXRhKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJlcnJvclwiLCBtZXNzYWdlOiBkYXRhW2tleV0gfTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRPd25lciA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHt9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBvd25lciA9IHtcbiAgICAgICAgICAuLi4ocmVzLmRhdGEgPyByZXMuZGF0YSA6IE5FV19PV05FUiksXG4gICAgICAgICAgaWQ6IHJlcy5kYXRhW1wiaWRcIl0gPyByZXMuZGF0YVtcImlkXCJdIDogTkVXX09XTkVSX0lELFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldE93bmVyXCIsIG93bmVyKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3duZXI6IG93bmVyIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgc2F2ZU93bmVyID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwgeyBvd25lcjogdGhpcy5zdGF0ZS5vd25lciB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvd25lcjogcmVzLmRhdGEsXG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwi0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0LLQu9Cw0LTQtdC70YzRhtC1INGB0L7RhdGA0LDQvdC10L3QsFwiIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjaGFuZ2VPd25lciA9IChlKSA9PiB7XG4gICAgbGV0IG93bmVyO1xuICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xuICAgICAgY2FzZSBcImdlbmRlci1mXCI6XG4gICAgICAgIG93bmVyID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUub3duZXIsXG4gICAgICAgICAgZ2VuZGVyOiBcImZcIixcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ2VuZGVyLW1cIjpcbiAgICAgICAgb3duZXIgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5vd25lcixcbiAgICAgICAgICBnZW5kZXI6IFwibVwiLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG93bmVyID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUub3duZXIsXG4gICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgb3duZXIgfSk7XG4gIH07XG5cbiAgYnRuTmV3Q2FyQ2xpY2sgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XG4gICAgICAgIGJ0bl9hZGQ6IFwiXCIsXG4gICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBvd25lcl9wazogdGhpcy5zdGF0ZS5vd25lci5pZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbXCJyZWRpcmVjdFwiXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxlcnRzIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT7QkNCy0YLQvtCy0LvQsNC00LXQu9C10YY8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIj7QmNC80Y88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm93bmVyLm5hbWUgPyB0aGlzLnN0YXRlLm93bmVyLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCe0YLRh9C10YHRgtCy0L48L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm93bmVyLnBhdHJvbnltaWNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5vd25lci5wYXRyb255bWljXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNFwiPtCk0LDQvNC40LvQuNGPPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm93bmVyLmxhc3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm93bmVyLmxhc3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIiBuYW1lPVwiZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7Qu1xuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMVwiIG5hbWU9XCJnZW5kZXItbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD7QnDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC0xIGJvcmRlci0wXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyLW1cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5vd25lci5nZW5kZXIgPT09IFwibVwiID8gMSA6IDB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0xXCIgbmFtZT1cImdlbmRlci1mXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPtCWPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTEgYm9yZGVyLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXItZlwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm93bmVyLmdlbmRlciA9PT0gXCJmXCIgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIiBuYW1lPVwiYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgINCS0L7Qt9GA0LDRgdGCXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm93bmVyLmFnZSA/IHRoaXMuc3RhdGUub3duZXIuYWdlIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlnaXRzT25seX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIj7QmtC+0LzQvNC10L3RgtCw0YDQuNC5PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjZcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3duZXIuY29tbWVudH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PXt0aGlzLnRvb2x0aXBQbGFjZX1cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD17YHRvb2x0aXAtMWB9PlxuICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQvtCxINCw0LLRgtC+0LLQu9Cw0LTQtdC70YzRhtC1XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlT3duZXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT7QkNCy0YLQvtC80L7QsdC40LvQuDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNwYWNlclwiPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMudG9vbHRpcFBsYWNlfVxuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgdG9vbHRpcC0yYH0+0JTQvtCx0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZF9jYXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJ0bk5ld0NhckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5vd25lci5pZCA8IDAgPyBcImRpc2FibGVkXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8Q2Fyc1xuICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnN0YXRlLm93bmVyLmlkfVxuICAgICAgICAgICAgICAgIHdpdGhCdXR0b25zPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgd2l0aE93bmVySW5mbz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB3aXRoU2VhcmNoPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=