(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/components/OwnerDeleteDialog.js":
/*!************************************************!*\
  !*** ./assets/components/OwnerDeleteDialog.js ***!
  \************************************************/
/*! exports provided: OwnerDeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDeleteDialog", function() { return OwnerDeleteDialog; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteDialog */ "./assets/components/DeleteDialog.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React from "react";
// import { Modal, Button } from "react-bootstrap";

var OwnerDeleteDialog = /*#__PURE__*/function (_DeleteDialog) {
  _inherits(OwnerDeleteDialog, _DeleteDialog);

  var _super = _createSuper(OwnerDeleteDialog);

  function OwnerDeleteDialog() {
    var _this;

    _classCallCheck(this, OwnerDeleteDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "nameOfItem", "автовладельца");

    _defineProperty(_assertThisInitialized(_this), "itemInfo", function (item) {
      return [item.last_name, item.name, item.patronymic].join(" ");
    });

    return _this;
  }

  return OwnerDeleteDialog;
}(_DeleteDialog__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ }),

/***/ "./assets/components/Owners.js":
/*!*************************************!*\
  !*** ./assets/components/Owners.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Owners; });
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
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListOfItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListOfItems */ "./assets/components/ListOfItems.js");
/* harmony import */ var _OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OwnerDeleteDialog */ "./assets/components/OwnerDeleteDialog.js");
/* harmony import */ var _lib_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/Table */ "./assets/components/lib/Table.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








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





var DEFAULT_SORTED_BY = {
  name: 'last_name',
  direction: 'ASC'
};

var Owners = /*#__PURE__*/function (_ListOfItems) {
  _inherits(Owners, _ListOfItems);

  var _super = _createSuper(Owners);

  function Owners() {
    var _this;

    _classCallCheck(this, Owners);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "url", '/api/owners/');

    _defineProperty(_assertThisInitialized(_this), "tooltipPlace", 'bottom');

    _defineProperty(_assertThisInitialized(_this), "nameOfItem", 'Автовладелец');

    _defineProperty(_assertThisInitialized(_this), "addButton", true);

    _defineProperty(_assertThisInitialized(_this), "getTable", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Table__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        className: "table table_striped table_bordered table_hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, _this.getThCell('last_name', 'Фамилия', 1), _this.getThCell('name', 'Имя', 2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        id: "patronymic"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), _this.getThCell('gender', 'Пол', 3), _this.getThCell('age', 'Возраст', 4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, _this.state.items.map(function (o, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, o.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, o.patronymic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, o.gender === 'f' ? 'Жен' : 'Муж'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, o.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          style: {
            width: 100 + 'px'
          }
        }, _this.getButtons(o.id)));
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "getDeleteDialog", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_8__["OwnerDeleteDialog"], {
        params: _this.state,
        itemDelete: _this.itemDelete
      });
    });

    return _this;
  }

  _createClass(Owners, [{
    key: "getDefaultSortedBy",
    value: function getDefaultSortedBy() {
      return DEFAULT_SORTED_BY;
    }
  }]);

  return Owners;
}(_ListOfItems__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRlbGV0ZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lcnMuanMiXSwibmFtZXMiOlsiT3duZXJEZWxldGVEaWFsb2ciLCJpdGVtIiwibGFzdF9uYW1lIiwibmFtZSIsInBhdHJvbnltaWMiLCJqb2luIiwiRGVsZXRlRGlhbG9nIiwiREVGQVVMVF9TT1JURURfQlkiLCJkaXJlY3Rpb24iLCJPd25lcnMiLCJnZXRUaENlbGwiLCJzdGF0ZSIsIml0ZW1zIiwibWFwIiwibyIsImluZGV4IiwiZ2VuZGVyIiwiYWdlIiwid2lkdGgiLCJnZXRCdXR0b25zIiwiaWQiLCJpdGVtRGVsZXRlIiwiTGlzdE9mSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLGlFQUNlLGVBRGY7O0FBQUEsK0RBRWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDQyxTQUFOLEVBQWlCRCxJQUFJLENBQUNFLElBQXRCLEVBQTRCRixJQUFJLENBQUNHLFVBQWpDLEVBQTZDQyxJQUE3QyxDQUFrRCxHQUFsRCxDQUFQO0FBQ0QsS0FKSDs7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBdUNDLHFEQUF2QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJKLE1BQUksRUFBRSxXQURrQjtBQUV4QkssV0FBUyxFQUFFO0FBRmEsQ0FBMUI7O0lBSXFCQyxNOzs7Ozs7Ozs7Ozs7Ozs7OzBEQUNiLGM7O21FQUNTLFE7O2lFQUNGLGM7O2dFQUNELEk7OytEQU1ELFlBQU07QUFDZiwwQkFDRSwyREFBQyxnREFBRDtBQUFPLGlCQUFTLEVBQUM7QUFBakIsc0JBQ0UsdUZBQ0UsdUVBQ0csTUFBS0MsU0FBTCxDQUFlLFdBQWYsRUFBNEIsU0FBNUIsRUFBdUMsQ0FBdkMsQ0FESCxFQUVHLE1BQUtBLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLENBQTlCLENBRkgsZUFHRTtBQUFJLFVBQUUsRUFBQztBQUFQLDREQUhGLEVBSUcsTUFBS0EsU0FBTCxDQUFlLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsQ0FBaEMsQ0FKSCxFQUtHLE1BQUtBLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLFNBQXRCLEVBQWlDLENBQWpDLENBTEgsZUFNRSxzRUFORixDQURGLENBREYsZUFXRSwwRUFDRyxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ2xDLDRCQUNFO0FBQUksYUFBRyxFQUFFQTtBQUFULHdCQUNFLHVFQUFLRCxDQUFDLENBQUNaLFNBQVAsQ0FERixlQUVFLHVFQUFLWSxDQUFDLENBQUNYLElBQVAsQ0FGRixlQUdFLHVFQUFLVyxDQUFDLENBQUNWLFVBQVAsQ0FIRixlQUlFLHVFQUFLVSxDQUFDLENBQUNFLE1BQUYsS0FBYSxHQUFiLEdBQW1CLEtBQW5CLEdBQTJCLEtBQWhDLENBSkYsZUFLRSx1RUFBS0YsQ0FBQyxDQUFDRyxHQUFQLENBTEYsZUFNRTtBQUFJLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE1BQU07QUFBZjtBQUFYLFdBQW1DLE1BQUtDLFVBQUwsQ0FBZ0JMLENBQUMsQ0FBQ00sRUFBbEIsQ0FBbkMsQ0FORixDQURGO0FBVUQsT0FYQSxDQURILENBWEYsQ0FERjtBQTRCRCxLOztzRUFFaUIsWUFBTTtBQUN0QiwwQkFBTywyREFBQyxvRUFBRDtBQUFtQixjQUFNLEVBQUUsTUFBS1QsS0FBaEM7QUFBdUMsa0JBQVUsRUFBRSxNQUFLVTtBQUF4RCxRQUFQO0FBQ0QsSzs7Ozs7Ozt5Q0FyQ29CO0FBQ25CLGFBQU9kLGlCQUFQO0FBQ0Q7Ozs7RUFSaUNlLG9EIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IERlbGV0ZURpYWxvZyBmcm9tIFwiLi9EZWxldGVEaWFsb2dcIjtcblxuZXhwb3J0IGNsYXNzIE93bmVyRGVsZXRlRGlhbG9nIGV4dGVuZHMgRGVsZXRlRGlhbG9nIHtcbiAgbmFtZU9mSXRlbSA9IFwi0LDQstGC0L7QstC70LDQtNC10LvRjNGG0LBcIjtcbiAgaXRlbUluZm8gPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBbaXRlbS5sYXN0X25hbWUsIGl0ZW0ubmFtZSwgaXRlbS5wYXRyb255bWljXS5qb2luKFwiIFwiKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdE9mSXRlbXMgZnJvbSAnLi9MaXN0T2ZJdGVtcyc7XG5pbXBvcnQgeyBPd25lckRlbGV0ZURpYWxvZyB9IGZyb20gJy4vT3duZXJEZWxldGVEaWFsb2cnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL2xpYi9UYWJsZSc7XG5cbmNvbnN0IERFRkFVTFRfU09SVEVEX0JZID0ge1xuICBuYW1lOiAnbGFzdF9uYW1lJyxcbiAgZGlyZWN0aW9uOiAnQVNDJyxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lcnMgZXh0ZW5kcyBMaXN0T2ZJdGVtcyB7XG4gIHVybCA9ICcvYXBpL293bmVycy8nO1xuICB0b29sdGlwUGxhY2UgPSAnYm90dG9tJztcbiAgbmFtZU9mSXRlbSA9ICfQkNCy0YLQvtCy0LvQsNC00LXQu9C10YYnO1xuICBhZGRCdXR0b24gPSB0cnVlO1xuXG4gIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICByZXR1cm4gREVGQVVMVF9TT1JURURfQlk7XG4gIH1cblxuICBnZXRUYWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlX3N0cmlwZWQgdGFibGVfYm9yZGVyZWQgdGFibGVfaG92ZXJcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHt0aGlzLmdldFRoQ2VsbCgnbGFzdF9uYW1lJywgJ9Ck0LDQvNC40LvQuNGPJywgMSl9XG4gICAgICAgICAgICB7dGhpcy5nZXRUaENlbGwoJ25hbWUnLCAn0JjQvNGPJywgMil9XG4gICAgICAgICAgICA8dGggaWQ9XCJwYXRyb255bWljXCI+0J7RgtGH0LXRgdGC0LLQvjwvdGg+XG4gICAgICAgICAgICB7dGhpcy5nZXRUaENlbGwoJ2dlbmRlcicsICfQn9C+0LsnLCAzKX1cbiAgICAgICAgICAgIHt0aGlzLmdldFRoQ2VsbCgnYWdlJywgJ9CS0L7Qt9GA0LDRgdGCJywgNCl9XG4gICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57by5sYXN0X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e28ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57by5wYXRyb255bWljfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntvLmdlbmRlciA9PT0gJ2YnID8gJ9CW0LXQvScgOiAn0JzRg9C2J308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57by5hZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCArICdweCcgfX0+e3RoaXMuZ2V0QnV0dG9ucyhvLmlkKX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgKTtcbiAgfTtcblxuICBnZXREZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxPd25lckRlbGV0ZURpYWxvZyBwYXJhbXM9e3RoaXMuc3RhdGV9IGl0ZW1EZWxldGU9e3RoaXMuaXRlbURlbGV0ZX0gLz47XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9