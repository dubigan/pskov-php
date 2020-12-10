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
      owner: {
        id: -10,
        // indicate new owner, -1 is not acceptable
        cars: [],
        name: "",
        patronymic: "",
        last_name: "",
        gender: "",
        age: "",
        comment: ""
      }
    });

    _defineProperty(_assertThisInitialized(_this), "url", "/testforjob/api/owner/");

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
        var owner = _objectSpread(_objectSpread({}, res.data), {}, {
          id: res.data["id"] ? res.data["id"] : -10
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRldGFpbC5qcyJdLCJuYW1lcyI6WyJPd25lckRldGFpbCIsIm1lc3NhZ2VzIiwib3duZXIiLCJpZCIsImNhcnMiLCJuYW1lIiwicGF0cm9ueW1pYyIsImxhc3RfbmFtZSIsImdlbmRlciIsImFnZSIsImNvbW1lbnQiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidHlwZSIsIm1lc3NhZ2UiLCJheGlvcyIsInBvc3QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRFcnJvcnMiLCJyZXNwb25zZSIsInN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJidG5fYWRkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm93bmVyX3BrIiwicmVkaXJlY3QiLCJocmVmIiwiZ2V0T3duZXIiLCJjaGFuZ2VPd25lciIsImRpZ2l0c09ubHkiLCJ0b29sdGlwUGxhY2UiLCJzYXZlT3duZXIiLCJidG5OZXdDYXJDbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ1g7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFO0FBQ0xDLFVBQUUsRUFBRSxDQUFDLEVBREE7QUFDSTtBQUNUQyxZQUFJLEVBQUUsRUFGRDtBQUdMQyxZQUFJLEVBQUUsRUFIRDtBQUlMQyxrQkFBVSxFQUFFLEVBSlA7QUFLTEMsaUJBQVMsRUFBRSxFQUxOO0FBTUxDLGNBQU0sRUFBRSxFQU5IO0FBT0xDLFdBQUcsRUFBRSxFQVBBO0FBUUxDLGVBQU8sRUFBRTtBQVJKO0FBRkQsSzs7MERBY0Ys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QUFYLENBQWlCQyxFQUQxQjtBQUVFLG1CQUFXLEVBQUMsTUFGZDtBQUdFLHFCQUFhLEVBQUMsT0FIaEI7QUFJRSxrQkFBVSxFQUFDO0FBSmIsUUFERixDQURGLENBekJGLENBbEhGLENBREY7QUF5SkQ7Ozs7RUE5UXNDMkMsK0MiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIFJvdyxcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBDb2wsXG4gIFRvb2x0aXAsXG4gIE92ZXJsYXlUcmlnZ2VyLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQ2FycyBmcm9tIFwiLi9DYXJzXCI7XG5pbXBvcnQgQWxlcnRzIGZyb20gXCIuL0FsZXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lckRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBvd25lcjoge1xuICAgICAgaWQ6IC0xMCwgLy8gaW5kaWNhdGUgbmV3IG93bmVyLCAtMSBpcyBub3QgYWNjZXB0YWJsZVxuICAgICAgY2FyczogW10sXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGF0cm9ueW1pYzogXCJcIixcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgIGdlbmRlcjogXCJcIixcbiAgICAgIGFnZTogXCJcIixcbiAgICAgIGNvbW1lbnQ6IFwiXCIsXG4gICAgfSxcbiAgfTtcblxuICB1cmwgPSBcIi90ZXN0Zm9yam9iL2FwaS9vd25lci9cIjtcbiAgdG9vbHRpcFBsYWNlID0gXCJib3R0b21cIjtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldE93bmVyKCk7XG4gIH1cblxuICBkaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcImVycm9yXCIsIG1lc3NhZ2U6IGRhdGFba2V5XSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGdldE93bmVyID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge30pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG93bmVyID0ge1xuICAgICAgICAgIC4uLnJlcy5kYXRhLFxuICAgICAgICAgIGlkOiByZXMuZGF0YVtcImlkXCJdID8gcmVzLmRhdGFbXCJpZFwiXSA6IC0xMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG93bmVyOiBvd25lciB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNhdmVPd25lciA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QodGhpcy51cmwsIHsgb3duZXI6IHRoaXMuc3RhdGUub3duZXIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3duZXI6IHJlcy5kYXRhLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICB7IHR5cGU6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBcItCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INCy0LvQsNC00LXQu9GM0YbQtSDRgdC+0YXRgNCw0L3QtdC90LBcIiB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiB0aGlzLmdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY2hhbmdlT3duZXIgPSAoZSkgPT4ge1xuICAgIGxldCBvd25lcjtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGNhc2UgXCJnZW5kZXItZlwiOlxuICAgICAgICBvd25lciA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm93bmVyLFxuICAgICAgICAgIGdlbmRlcjogXCJmXCIsXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImdlbmRlci1tXCI6XG4gICAgICAgIG93bmVyID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUub3duZXIsXG4gICAgICAgICAgZ2VuZGVyOiBcIm1cIixcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvd25lciA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm93bmVyLFxuICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG93bmVyIH0pO1xuICB9O1xuXG4gIGJ0bk5ld0NhckNsaWNrID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xuICAgICAgICBidG5fYWRkOiBcIlwiLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgb3duZXJfcGs6IHRoaXMuc3RhdGUub3duZXIuaWQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhW1wicmVkaXJlY3RcIl07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5nZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QstC70LDQtNC10LvQtdGGPC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCI+0JjQvNGPPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vd25lci5uYW1lID8gdGhpcy5zdGF0ZS5vd25lci5uYW1lIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIj7QntGC0YfQtdGB0YLQstC+PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXRyb255bWljXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vd25lci5wYXRyb255bWljXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUub3duZXIucGF0cm9ueW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTRcIj7QpNCw0LzQuNC70LjRjzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vd25lci5sYXN0X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5vd25lci5sYXN0X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCIgbmFtZT1cImdlbmRlclwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0LtcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTFcIiBuYW1lPVwiZ2VuZGVyLW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+0Jw8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtMSBib3JkZXItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlci1tXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUub3duZXIuZ2VuZGVyID09PSBcIm1cIiA/IDEgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMVwiIG5hbWU9XCJnZW5kZXItZlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD7Qljwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC0xIGJvcmRlci0wXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyLWZcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5vd25lci5nZW5kZXIgPT09IFwiZlwiID8gMSA6IDB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCIgbmFtZT1cImFnZVwiPlxuICAgICAgICAgICAgICAgICAgICDQktC+0LfRgNCw0YHRglxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vd25lci5hZ2UgPyB0aGlzLnN0YXRlLm93bmVyLmFnZSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU93bmVyfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpZ2l0c09ubHl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtN1wiPlxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC00XCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm93bmVyLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VPd25lcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy50b29sdGlwUGxhY2V9XG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2B0b29sdGlwLTFgfT5cbiAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L7QsSDQsNCy0YLQvtCy0LvQsNC00LXQu9GM0YbQtVxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZU93bmVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuVGl0bGU+0JDQstGC0L7QvNC+0LHQuNC70Lg8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJzcGFjZXJcIj5cbiAgICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAga2V5PXsyfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PXt0aGlzLnRvb2x0aXBQbGFjZX1cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD17YHRvb2x0aXAtMmB9PtCU0L7QsdCw0LLQuNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70Yw8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRfY2FyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5idG5OZXdDYXJDbGlja31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUub3duZXIuaWQgPCAwID8gXCJkaXNhYmxlZFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPENhcnNcbiAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5zdGF0ZS5vd25lci5pZH1cbiAgICAgICAgICAgICAgICB3aXRoQnV0dG9ucz1cInRydWVcIlxuICAgICAgICAgICAgICAgIHdpdGhPd25lckluZm89XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgd2l0aFNlYXJjaD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9