(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteDialog */ "./assets/components/DeleteDialog.tsx");
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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _ListOfItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListOfItems */ "./assets/components/ListOfItems.js");
/* harmony import */ var _OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OwnerDeleteDialog */ "./assets/components/OwnerDeleteDialog.js");
/* harmony import */ var _lib_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/Table */ "./assets/components/lib/Table.tsx");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_Table__WEBPACK_IMPORTED_MODULE_10__["Table"], {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_9__["OwnerDeleteDialog"], {
        show: _this.state.showDeleteDialog,
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
}(_ListOfItems__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Owners));

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lckRlbGV0ZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Pd25lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5LmpzIl0sIm5hbWVzIjpbIk93bmVyRGVsZXRlRGlhbG9nIiwiaXRlbSIsImxhc3RfbmFtZSIsIm5hbWUiLCJwYXRyb255bWljIiwiam9pbiIsIkRlbGV0ZURpYWxvZyIsIkRFRkFVTFRfU09SVEVEX0JZIiwiZGlyZWN0aW9uIiwiT3duZXJzIiwiZ2V0VGhDZWxsIiwic3RhdGUiLCJpdGVtcyIsIm1hcCIsIm8iLCJpbmRleCIsImdlbmRlciIsImFnZSIsIndpZHRoIiwiZ2V0QnV0dG9ucyIsImlkIiwic2hvd0RlbGV0ZURpYWxvZyIsIml0ZW1EZWxldGUiLCJMaXN0T2ZJdGVtcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLGlFQUNlLGVBRGY7O0FBQUEsK0RBRWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDQyxTQUFOLEVBQWlCRCxJQUFJLENB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Qyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsb0JBQW9CLG1CQUFPLENBQUMsK0dBQXlDO0FBQ3JFLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELHlCQUF5QixtQkFBTyxDQUFDLGlHQUFrQztBQUNuRSxxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDM0QsZUFBZSxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFOUM7QUFDQTtBQUNBLDJDQUEyQyxvQkFBb0IsY0FBYyxFQUFFLGVBQWUsY0FBYztBQUM1RyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLGtFQUFrRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVUsRUFBRTtBQUM1RSxPQUFPO0FBQ1A7QUFDQSxnRUFBZ0UsU0FBUyxFQUFFO0FBQzNFLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBEZWxldGVEaWFsb2cgZnJvbSBcIi4vRGVsZXRlRGlhbG9nXCI7XG5cbmV4cG9ydCBjbGFzcyBPd25lckRlbGV0ZURpYWxvZyBleHRlbmRzIERlbGV0ZURpYWxvZyB7XG4gIG5hbWVPZkl0ZW0gPSBcItCw0LLRgtC+0LLQu9Cw0LTQtdC70YzRhtCwXCI7XG4gIGl0ZW1JbmZvID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gW2l0ZW0ubGFzdF9uYW1lLCBpdGVtLm5hbWUsIGl0ZW0ucGF0cm9ueW1pY10uam9pbihcIiBcIik7XG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgTGlzdE9mSXRlbXMgZnJvbSAnLi9MaXN0T2ZJdGVtcyc7XG5pbXBvcnQgeyBPd25lckRlbGV0ZURpYWxvZyB9IGZyb20gJy4vT3duZXJEZWxldGVEaWFsb2cnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL2xpYi9UYWJsZSc7XG5cbmNvbnN0IERFRkFVTFRfU09SVEVEX0JZID0ge1xuICBuYW1lOiAnbGFzdF9uYW1lJyxcbiAgZGlyZWN0aW9uOiAnQVNDJyxcbn07XG5jbGFzcyBPd25lcnMgZXh0ZW5kcyBMaXN0T2ZJdGVtcyB7XG4gIHVybCA9ICcvYXBpL293bmVycy8nO1xuICB0b29sdGlwUGxhY2UgPSAnYm90dG9tJztcbiAgbmFtZU9mSXRlbSA9ICfQkNCy0YLQvtCy0LvQsNC00LXQu9C10YYnO1xuICBhZGRCdXR0b24gPSB0cnVlO1xuXG4gIGdldERlZmF1bHRTb3J0ZWRCeSgpIHtcbiAgICByZXR1cm4gREVGQVVMVF9TT1JURURfQlk7XG4gIH1cblxuICBnZXRUYWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlX3N0cmlwZWQgdGFibGVfYm9yZGVyZWQgdGFibGVfaG92ZXJcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHt0aGlzLmdldFRoQ2VsbCgnbGFzdF9uYW1lJywgJ9Ck0LDQvNC40LvQuNGPJywgMSl9XG4gICAgICAgICAgICB7dGhpcy5nZXRUaENlbGwoJ25hbWUnLCAn0JjQvNGPJywgMil9XG4gICAgICAgICAgICA8dGggaWQ9XCJwYXRyb255bWljXCI+0J7RgtGH0LXRgdGC0LLQvjwvdGg+XG4gICAgICAgICAgICB7dGhpcy5nZXRUaENlbGwoJ2dlbmRlcicsICfQn9C+0LsnLCAzKX1cbiAgICAgICAgICAgIHt0aGlzLmdldFRoQ2VsbCgnYWdlJywgJ9CS0L7Qt9GA0LDRgdGCJywgNCl9XG4gICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57by5sYXN0X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e28ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57by5wYXRyb255bWljfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntvLmdlbmRlciA9PT0gJ2YnID8gJ9CW0LXQvScgOiAn0JzRg9C2J308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57by5hZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCArICdweCcgfX0+e3RoaXMuZ2V0QnV0dG9ucyhvLmlkKX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgKTtcbiAgfTtcblxuICBnZXREZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxPd25lckRlbGV0ZURpYWxvZ1xuICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dEZWxldGVEaWFsb2d9XG4gICAgICAgIHBhcmFtcz17dGhpcy5zdGF0ZX1cbiAgICAgICAgaXRlbURlbGV0ZT17dGhpcy5pdGVtRGVsZXRlfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE93bmVycyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXS5jYWxsKHsgdGhlbjogZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9IH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9