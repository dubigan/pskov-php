(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/components/DeleteDialog/DeleteDialog.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/DeleteDialog/DeleteDialog.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Modal/Modal */ "./assets/components/lib/Modal/Modal.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Button */ "./assets/components/lib/Button.tsx");




var DeleteDialog = function DeleteDialog(props) {
  var handleClose = function handleClose(e) {
    if (e) props.deleteItem(e.target.value);
    return props.deleteItem(false);
  };

  var getItemInfo = function getItemInfo() {
    return props.itemInfo && props.itemInfo(props.itemToDelete);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    baseClassName: "delete-dialog",
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
    closeButton: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ", props.nameOfItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, getItemInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn-secondary",
    value: false,
    onClick: handleClose
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn-danger",
    value: true,
    onClick: handleClose
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteDialog);

/***/ }),

/***/ "./assets/components/List/ListOfItems.tsx":
/*!************************************************!*\
  !*** ./assets/components/List/ListOfItems.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Loader */ "./assets/components/Loader.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../api */ "./assets/components/api.ts");
/* harmony import */ var _lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lib/utils/utils */ "./assets/components/lib/utils/utils.ts");
/* harmony import */ var _DeleteDialog_DeleteDialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../DeleteDialog/DeleteDialog */ "./assets/components/DeleteDialog/DeleteDialog.tsx");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};














var ListOfItems = function ListOfItems(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_14__["useContext"])(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_21__["AlertContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showDeleteDialog = _useState4[0],
      setShowDeleteDialog = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      itemToDelete = _useState6[0],
      setItemToDelete = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      items = _useState8[0],
      setItems = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(props.functions.getDefaultSortedBy()),
      _useState10 = _slicedToArray(_useState9, 2),
      sortedBy = _useState10[0],
      setSortedBy = _useState10[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["useHistory"])();

  var getItems = function getItems() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _a, _b, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true); //console.log('getItems owner', this.props.owner);

              _context.prev = 1;
              _context.next = 4;
              return _api__WEBPACK_IMPORTED_MODULE_23__["default"].getItems(props.functions.url, {
                sorted_by: sortedBy,
                owner: (_a = props.owner) !== null && _a !== void 0 ? _a : -1
              });

            case 4:
              res = _context.sent;
              // console.log('ListOfItems.getItems res.data', res.data);
              setItems(res.data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              context.setAlerts(Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])((_b = _context.t0.response) === null || _b === void 0 ? void 0 : _b.data));

            case 11:
              _context.prev = 11;
              setLoading(false);
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    getItems(); // console.log('ListOfItems.getItems items', items);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    getItems();
  }, [sortedBy, props.owner]);

  var getItemById = function getItemById(id) {
    return items.filter(function (item) {
      return +item.id === +id;
    })[0];
  };

  var btnSortClick = function btnSortClick(e) {
    var sorted_name = e.target.id; //console.log('btnSortClick.sorted_name', sorted_name);

    if (!sorted_name) return;

    if (sortedBy.name !== sorted_name) {
      setSortedBy({
        name: sorted_name,
        direction: 'desc'
      });
    } else {
      var direction = sortedBy.direction === 'desc' ? 'asc' : 'desc';
      setSortedBy(Object.assign(Object.assign({}, sortedBy), {
        direction: direction
      }));
    }
  };

  var btnDelClick = function btnDelClick(e) {
    var item = getItemById(Number(e.target.value)); // console.log('ListOfItems.btnDelClick item', item);

    setItemToDelete(item);
    setShowDeleteDialog(true);
  };

  var btnAddClick = function btnAddClick(e) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(props.functions.url, {
                btn_add: ''
              });

            case 3:
              res = _context2.sent;

              if (res.data.redirect) {
                //window.location.href = res.data['redirect'];
                history.push(res.data.redirect);
              }

              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              context.setAlerts(Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context2.t0.response.data));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
  };

  var btnEditClick = function btnEditClick(e) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var item_pk, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              item_pk = e.target.value; //console.log('btnEditClick', item_pk);

              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(props.functions.url, {
                btn_edit: '',
                item_pk: item_pk,
                url: window.location.pathname
              });

            case 4:
              res = _context3.sent;

              if (res.data.redirect) {
                //console.log('btnEditClick.history', this.props);
                //window.location.href = res.data['redirect'];
                history.push(res.data.redirect);
              }

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              //console.log('btnEditClick.catch', err);
              context.setAlerts(Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context3.t0.response.data));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }));
  };

  var getItemId = function getItemId(item) {
    return item ? item.id : -1;
  };

  var deleteItem = function deleteItem(confirm) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _c, res;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setShowDeleteDialog(false);

              if (!(confirm === 'true')) {
                _context4.next = 17;
                break;
              }

              setLoading(true);
              _context4.prev = 3;
              _context4.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(props.functions.url, {
                sorted_by: sortedBy,
                btn_del: '',
                item_pk: getItemId(itemToDelete),
                owner: (_c = props.owner) !== null && _c !== void 0 ? _c : -1
              });

            case 6:
              res = _context4.sent;
              setItems(res.data);
              context.setAlerts([{
                type: 'success',
                message: "".concat(props.functions.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
              }]);
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](3);
              context.setAlerts(Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context4.t0.response.data));

            case 14:
              _context4.prev = 14;
              setLoading(false);
              return _context4.finish(14);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 11, 14, 17]]);
    }));
  };

  var getButtons = function getButtons(id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_17__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      value: id,
      variant: "primary",
      className: "btn-primary tooltip",
      onClick: btnEditClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], {
      className: "tooltip__content tooltip__content_left"
    }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      value: id,
      variant: "danger",
      className: "btn-danger btn-danger_del tooltip",
      onClick: btnDelClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], {
      className: "tooltip__content tooltip__content_left"
    }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "x"));
  };

  var getAddButton = function getAddButton() {
    if (props.functions.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      variant: "primary",
      className: "btn-primary btn-primary_add tooltip",
      onClick: btnAddClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null);
  };

  var getDeleteDialog = function getDeleteDialog(nameOfItem, itemToDelete, deleteItem, itemInfo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_DeleteDialog_DeleteDialog__WEBPACK_IMPORTED_MODULE_25__["default"], {
      itemToDelete: itemToDelete,
      deleteItem: deleteItem,
      nameOfItem: nameOfItem,
      itemInfo: itemInfo
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_20__["default"], {
    withAlerts: props.withAlerts
  }), showDeleteDialog && getDeleteDialog(props.functions.nameOfItem, itemToDelete, deleteItem, props.functions.itemInfo), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_22__["default"], null) : props.functions.getTable(items, getButtons, btnSortClick, sortedBy), getAddButton());
};

/* harmony default export */ __webpack_exports__["default"] = (ListOfItems);

/***/ }),

/***/ "./assets/components/List/useListFunctions.tsx":
/*!*****************************************************!*\
  !*** ./assets/components/List/useListFunctions.tsx ***!
  \*****************************************************/
/*! exports provided: useListFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useListFunctions", function() { return useListFunctions; });
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_ThCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/ThCell */ "./assets/components/parts/ThCell.tsx");
/* harmony import */ var _lib_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/Table */ "./assets/components/lib/Table.tsx");






var functions = {
  cars: {
    url: '/api/cars/',
    tooltipPlace: 'bottom',
    nameOfItem: 'Автомобиль',
    addButton: false,
    itemInfo: function itemInfo(item) {
      return [item.manufacturer, item.model].join(' ');
    },
    getTable: function getTable(items, getButtons, onClick, sortedBy) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib_Table__WEBPACK_IMPORTED_MODULE_5__["Table"], {
        className: "table table_striped table_bordered table_hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "manufacturer",
        title: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C",
        index: 1,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "model",
        title: "\u041C\u043E\u0434\u0435\u043B\u044C",
        index: 2,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "production",
        title: "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430",
        index: 3,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "color",
        title: "\u0426\u0432\u0435\u0442",
        index: 4,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "power",
        title: "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",
        index: 5,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "mileage",
        title: "\u041F\u0440\u043E\u0431\u0435\u0433",
        index: 6,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, items.map(function (o, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.model), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.production), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.color), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.power), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.mileage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
          style: {
            width: 10 + 'rem'
          }
        }, getButtons(String(o.id))));
      })));
    },
    getDefaultSortedBy: function getDefaultSortedBy() {
      return {
        name: 'model',
        direction: 'asc'
      };
    }
  },
  owners: {
    url: '/api/owners/',
    tooltipPlace: 'bottom',
    nameOfItem: 'Автовладелец',
    addButton: true,
    itemInfo: function itemInfo(item) {
      return [item.last_name, item.name, item.patronymic].join(' ');
    },
    getTable: function getTable(items, getButtons, onClick, sortedBy) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib_Table__WEBPACK_IMPORTED_MODULE_5__["Table"], {
        className: "table table_striped table_bordered table_hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "last_name",
        title: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        index: 1,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "name",
        title: "\u0418\u043C\u044F",
        index: 2,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
        id: "patronymic"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "gender",
        title: "\u041F\u043E\u043B",
        index: 4,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parts_ThCell__WEBPACK_IMPORTED_MODULE_4__["ThCell"], {
        id: "age",
        title: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
        index: 4,
        onClick: onClick,
        sortedBy: sortedBy
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, items.map(function (o, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.patronymic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.gender === 'f' ? 'Жен' : 'Муж'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, o.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
          style: {
            width: 100 + 'px'
          }
        }, getButtons(String(o.id))));
      })));
    },
    getDefaultSortedBy: function getDefaultSortedBy() {
      return {
        name: 'last_name',
        direction: 'asc'
      };
    }
  }
};
var useListFunctions = function useListFunctions(listType) {
  return functions[listType];
};

/***/ }),

/***/ "./assets/components/Loader.tsx":
/*!**************************************!*\
  !*** ./assets/components/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Loader.css */ "./assets/components/css/Loader.css");
/* harmony import */ var _css_Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Loader_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-dual-ring"
  }));
});

/***/ }),

/***/ "./assets/components/api.ts":
/*!**********************************!*\
  !*** ./assets/components/api.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // const BASE_URL = 'https://test-php.herokuapp.com/';

var BASE_URL = 'https://localhost:8002/';
var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: BASE_URL,
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  }
});
var api = {
  getItems: function getItems(url, params) {
    // console.log('api.getItems params', params);
    return instance({
      url: url,
      data: Object.assign({}, params)
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./assets/components/css/Loader.css":
/*!******************************************!*\
  !*** ./assets/components/css/Loader.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/lib/Button.tsx":
/*!******************************************!*\
  !*** ./assets/components/lib/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Button = function Button(_ref) {
  var tooltip = _ref.tooltip,
      id = _ref.id,
      className = _ref.className,
      name = _ref.name,
      value = _ref.value,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: tooltip,
    id: id,
    className: className ? className : '',
    name: name,
    value: value,
    onClick: onClick,
    disabled: disabled
  }, children);
};
Button.defaultProps = {
  className: 'btn-primary',
  name: 'btn',
  disabled: false,
  tooltip: '',
  id: '',
  value: '',
  children: 'button'
}; //export Button;

/***/ }),

/***/ "./assets/components/lib/Modal/Modal.tsx":
/*!***********************************************!*\
  !*** ./assets/components/lib/Modal/Modal.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var baseClass = 'modal-dialog';

var ModalHeader = function ModalHeader(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
  //   const classList = ref.current!.classList;
  //   console.log('ModalHeader.baseClass', baseClass);
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: ref,
    className: baseClass + '__header',
    id: props.id
  }, props.children);
};

var ModalTitle = function ModalTitle(props) {
  //useEffect(() => console.log('Modal.Title', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__title',
    id: props.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, props.children));
};

var ModalBody = function ModalBody(props) {
  //useEffect(() => console.log('Modal.Body', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__body',
    id: props.id
  }, props.children);
};

var ModalFooter = function ModalFooter(props) {
  //useEffect(() => console.log('Modal.Footer', baseClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: baseClass + '__footer',
    id: props.id
  }, props.children);
};

var Modal = function Modal(props) {
  var setBaseClass = function setBaseClass() {
    baseClass = props.baseClassName;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(setBaseClass, []);

  var changeShowStatus = function changeShowStatus() {
    var $body = document.querySelector('body');
    var $modal = document.querySelector('.' + props.baseClassName);
    var $modalBackdrop = document.querySelector('.' + props.baseClassName + '__backdrop');
    var $dialog = document.querySelector('.' + props.baseClassName + '__dialog'); //console.log('Modal.modal', $modal);

    if (props.show) {
      $body.classList.add('body-modal-open');
      $modalBackdrop.classList.add(props.baseClassName + '__backdrop_show');
      $modal.classList.add(props.baseClassName + '_show');
      $dialog.classList.add(props.baseClassName + '__dialog_show');
    } else {
      $body.classList.remove('body-modal-open');
      $modalBackdrop.classList.remove(props.baseClassName + '__backdrop_show');
      $modal.classList.remove(props.baseClassName + '_show');
      $dialog.classList.remove(props.baseClassName + '__dialog_show');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(changeShowStatus, [props.show]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__backdrop'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: props.baseClassName + '__dialog'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: props.baseClassName + '__children'
  }, props.children))));
};

Object.assign(Modal, {
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter
});
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./assets/components/lib/Row.tsx":
/*!***************************************!*\
  !*** ./assets/components/lib/Row.tsx ***!
  \***************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'row',
    id: id
  }, children);
};

/***/ }),

/***/ "./assets/components/lib/Table.tsx":
/*!*****************************************!*\
  !*** ./assets/components/lib/Table.tsx ***!
  \*****************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
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


var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: this.props.className ? this.props.className : 'table'
      }, this.props.children);
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ }),

/***/ "./assets/components/lib/Tooltip.tsx":
/*!*******************************************!*\
  !*** ./assets/components/lib/Tooltip.tsx ***!
  \*******************************************/
/*! exports provided: TooltipContent, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContent", function() { return TooltipContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TooltipContent = function TooltipContent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'tooltip__content'
  }, children);
};
var Tooltip = function Tooltip(_ref2) {
  var tooltip = _ref2.tooltip,
      children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TooltipContent, null, tooltip), children);
};

/***/ }),

/***/ "./assets/components/lib/alert/Alerts.tsx":
/*!************************************************!*\
  !*** ./assets/components/lib/alert/Alerts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Alerts = function Alerts(_ref) {
  var timeout = _ref.timeout,
      _ref$withAlerts = _ref.withAlerts,
      withAlerts = _ref$withAlerts === void 0 ? true : _ref$withAlerts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_12__["useAlerts"])();
  var defTimeout = 5000;

  var showAlerts = function showAlerts() {
    var view = false;
    var messages = alerts.messages; //const { messages: prevMessages } = prevProps;
    //console.log('Alerts', messages);

    if (messages && messages.length > 0) {
      view = true;
    }

    setVisible(view);
  };

  if (!withAlerts) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(showAlerts, [alerts.messages]);

  var getType = function getType(type) {
    var t;

    switch (type) {
      case 'info':
        t = 'info';
        break;

      case 'success':
        t = 'success';
        break;

      case 'error':
        t = 'danger';
        break;

      default:
        t = 'danger';
    }

    return t;
  };

  var getAlerts = function getAlerts(array) {
    return array ? array.map(function (e, index) {
      var type = getType(e.type);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: 'alert alert_' + type,
        key: index
      }, e.message);
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  };

  var delay = function delay(wait) {
    return new Promise(function (resolve) {
      return global.setTimeout(function () {
        return resolve('');
      }, wait);
    });
  };

  var show = function show() {
    if (visible) {
      delay(timeout ? timeout : defTimeout).then(function () {
        return setVisible(false);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, getAlerts(alerts.messages));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, show());
};

/* harmony default export */ __webpack_exports__["default"] = (Alerts);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/components/lib/utils/utils.ts":
/*!**********************************************!*\
  !*** ./assets/components/lib/utils/utils.ts ***!
  \**********************************************/
/*! exports provided: getErrors, redirect, digitsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitsOnly", function() { return digitsOnly; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__);



var getKeyValue = function getKeyValue(obj, key) {
  return obj[key];
};

var getErrors = function getErrors(data) {
  if (!data) return [{
    type: 'error',
    message: 'Unknown error'
  }];
  return Object.keys(data).map(function (key) {
    return {
      type: 'error',
      message: getKeyValue(data, key)
    };
  });
};
var redirect = function redirect(history, _redirect) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return _redirect && dir === 'back' ? history.goBack() : history.push(_redirect);
};
var digitsOnly = function digitsOnly(e) {
  var charCode = e.charCode; //console.log(charCode);

  if (charCode < 48 || charCode > 57) {
    // digits only
    e.preventDefault();
  }
};

/***/ }),

/***/ "./assets/components/parts/ThCell.tsx":
/*!********************************************!*\
  !*** ./assets/components/parts/ThCell.tsx ***!
  \********************************************/
/*! exports provided: ThCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThCell", function() { return ThCell; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Row */ "./assets/components/lib/Row.tsx");




var upArrow = "\u2191"; //downArrow = '&#x0225C;';

var downArrow = "\u2193";

var arrow = function arrow(direction) {
  return direction === 'asc' ? upArrow : downArrow;
};

var ThCell = function ThCell(_ref) {
  var id = _ref.id,
      title = _ref.title,
      index = _ref.index,
      onClick = _ref.onClick,
      sortedBy = _ref.sortedBy;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "tooltip",
    id: id,
    onClick: onClick,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    id: id,
    className: "sorted-row"
  }, (sortedBy === null || sortedBy === void 0 ? void 0 : sortedBy.name) === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id
  }, arrow(sortedBy === null || sortedBy === void 0 ? void 0 : sortedBy.direction)), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id,
    className: "sorted-row__text"
  }, title)));
};

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

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L3VzZUxpc3RGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcnRzL1RoQ2VsbC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwicHJvcHMiLCJoYW5kbGVDbG9zZSIsImUiLCJkZWxldGVJdGVtIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJdGVtSW5mbyIsIml0ZW1JbmZvIiwiaXRlbVRvRGVsZXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJiYXNlQ2xhc3NOYW1lIiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIm5hbWVPZkl0ZW0iLCJCb2R5IiwiRm9vdGVyIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkxpc3RPZkl0ZW1zIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0RlbGV0ZURpYWxvZyIsInNldFNob3dEZWxldGVEaWFsb2ciLCJ1bmRlZmluZWQiLCJzZXRJdGVtVG9EZWxldGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZnVuY3Rpb25zIiwiZ2V0RGVmYXVsdFNvcnRlZEJ5Iiwic29ydGVkQnkiLCJzZXRTb3J0ZWRCeSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiZ2V0SXRlbXMiLCJhcGkiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJvd25lciIsIl9hIiwicmVzIiwiZGF0YSIsInNldEFsZXJ0cyIsImdldEVycm9ycyIsIl9iIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtQnlJZCIsImlkIiwiZmlsdGVyIiwiaXRlbSIsImJ0blNvcnRDbGljayIsInNvcnRlZF9uYW1lIiwibmFtZSIsImRpcmVjdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImJ0bkRlbENsaWNrIiwiTnVtYmVyIiwiYnRuQWRkQ2xpY2siLCJheGlvcyIsInBvc3QiLCJidG5fYWRkIiwicmVkaXJlY3QiLCJwdXNoIiwiYnRuRWRpdENsaWNrIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldEl0ZW1JZCIsImNvbmZpcm0iLCJidG5fZGVsIiwiX2MiLCJ0eXBlIiwibWVzc2FnZSIsImdldEJ1dHRvbnMiLCJSb3ciLCJ2YXJpYW50IiwiVG9vbHRpcENvbnRlbnQiLCJnZXRBZGRCdXR0b24iLCJhZGRCdXR0b24iLCJGcmFnbWVudCIsImdldERlbGV0ZURpYWxvZyIsIkFsZXJ0cyIsIndpdGhBbGVydHMiLCJMb2FkZXIiLCJnZXRUYWJsZSIsImNhcnMiLCJ0b29sdGlwUGxhY2UiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsImpvaW4iLCJUYWJsZSIsIlRoQ2VsbCIsInRpdGxlIiwiaW5kZXgiLCJtYXAiLCJvIiwia2V5IiwicHJvZHVjdGlvbiIsImNvbG9yIiwicG93ZXIiLCJtaWxlYWdlIiwic3R5bGUiLCJ3aWR0aCIsIlN0cmluZyIsIm93bmVycyIsImxhc3RfbmFtZSIsInBhdHJvbnltaWMiLCJnZW5kZXIiLCJhZ2UiLCJ1c2VMaXN0RnVuY3Rpb25zIiwibGlzdFR5cGUiLCJCQVNFX1VSTCIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJ0b29sdGlwIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsImJhc2VDbGFzcyIsIk1vZGFsSGVhZGVyIiwicmVmIiwidXNlUmVmIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwic2V0QmFzZUNsYXNzIiwiY2hhbmdlU2hvd1N0YXR1cyIsIiRib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1vZGFsIiwiJG1vZGFsQmFja2Ryb3AiLCIkZGlhbG9nIiwic2hvdyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkNvbXBvbmVudCIsIlRvb2x0aXAiLCJ0aW1lb3V0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJkZWZUaW1lb3V0Iiwic2hvd0FsZXJ0cyIsInZpZXciLCJtZXNzYWdlcyIsImxlbmd0aCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJkZWxheSIsIndhaXQiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiZ2V0S2V5VmFsdWUiLCJvYmoiLCJrZXlzIiwiZGlyIiwiZ29CYWNrIiwiZGlnaXRzT25seSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJ1cEFycm93IiwiZG93bkFycm93IiwiYXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkIsUUFBSUEsQ0FBSixFQUNJRixLQUFLLENBQUNHLFVBQU4sQ0FBaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUExQjtBQUNKLFdBQU9MLEtBQUssQ0FBQ0csVUFBTixDQUFpQixLQUFqQixDQUFQO0FB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QTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2xpYi9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9saWIvQnV0dG9uJztcbmNvbnN0IERlbGV0ZURpYWxvZyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBwcm9wcy5kZWxldGVJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHByb3BzLmRlbGV0ZUl0ZW0oZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9wcy5pdGVtSW5mbyAmJiBwcm9wcy5pdGVtSW5mbyhwcm9wcy5pdGVtVG9EZWxldGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7IGJhc2VDbGFzc05hbWU6IFwiZGVsZXRlLWRpYWxvZ1wiLCBvbkhpZGU6IGhhbmRsZUNsb3NlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwuSGVhZGVyLCB7IGNsb3NlQnV0dG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbC5UaXRsZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXCIsXG4gICAgICAgICAgICAgICAgcHJvcHMubmFtZU9mSXRlbSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkJvZHksIG51bGwsIGdldEl0ZW1JbmZvKCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLkZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJidG4tc2Vjb25kYXJ5XCIsIHZhbHVlOiBmYWxzZSwgb25DbGljazogaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6IFwiYnRuLWRhbmdlclwiLCB2YWx1ZTogdHJ1ZSwgb25DbGljazogaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZURpYWxvZztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vbGliL1Jvdyc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4uL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xpYi9CdXR0b24nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCB7IEFsZXJ0Q29udGV4dCB9IGZyb20gJy4uL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgZ2V0RXJyb3JzIH0gZnJvbSAnLi4vbGliL3V0aWxzL3V0aWxzJztcbmltcG9ydCBEZWxldGVEaWFsb2cgZnJvbSAnLi4vRGVsZXRlRGlhbG9nL0RlbGV0ZURpYWxvZyc7XG5jb25zdCBMaXN0T2ZJdGVtcyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93RGVsZXRlRGlhbG9nLCBzZXRTaG93RGVsZXRlRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXRlbVRvRGVsZXRlLCBzZXRJdGVtVG9EZWxldGVdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc29ydGVkQnksIHNldFNvcnRlZEJ5XSA9IHVzZVN0YXRlKHByb3BzLmZ1bmN0aW9ucy5nZXREZWZhdWx0U29ydGVkQnkoKSk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtcyBvd25lcicsIHRoaXMucHJvcHMub3duZXIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXBpLmdldEl0ZW1zKHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgIG93bmVyOiAoX2EgPSBwcm9wcy5vd25lcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLTEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMaXN0T2ZJdGVtcy5nZXRJdGVtcyByZXMuZGF0YScsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIHNldEl0ZW1zKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyhnZXRFcnJvcnMoKF9iID0gZXJyLnJlc3BvbnNlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRJdGVtcygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuZ2V0SXRlbXMgaXRlbXMnLCBpdGVtcyk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEl0ZW1zKCk7XG4gICAgfSwgW3NvcnRlZEJ5LCBwcm9wcy5vd25lcl0pO1xuICAgIGNvbnN0IGdldEl0ZW1CeUlkID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICAgIH07XG4gICAgY29uc3QgYnRuU29ydENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkX25hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuU29ydENsaWNrLnNvcnRlZF9uYW1lJywgc29ydGVkX25hbWUpO1xuICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydGVkQnkpLCB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYnRuRGVsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZ2V0SXRlbUJ5SWQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMaXN0T2ZJdGVtcy5idG5EZWxDbGljayBpdGVtJywgaXRlbSk7XG4gICAgICAgIHNldEl0ZW1Ub0RlbGV0ZShpdGVtKTtcbiAgICAgICAgc2V0U2hvd0RlbGV0ZURpYWxvZyh0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGJ0bkFkZENsaWNrID0gKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChwcm9wcy5mdW5jdGlvbnMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidG5FZGl0Q2xpY2sgPSAoZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrJywgaXRlbV9wayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICBidG5fZWRpdDogJycsXG4gICAgICAgICAgICAgICAgaXRlbV9wazogaXRlbV9wayxcbiAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmhpc3RvcnknLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suY2F0Y2gnLCBlcnIpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRJdGVtSWQgPSAoaXRlbSkgPT4gKGl0ZW0gPyBpdGVtLmlkIDogLTEpO1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoY29uZmlybSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYztcbiAgICAgICAgc2V0U2hvd0RlbGV0ZURpYWxvZyhmYWxzZSk7XG4gICAgICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QocHJvcHMuZnVuY3Rpb25zLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICBidG5fZGVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9wazogZ2V0SXRlbUlkKGl0ZW1Ub0RlbGV0ZSksXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiAoX2MgPSBwcm9wcy5vd25lcikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMuZnVuY3Rpb25zLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGdldEJ1dHRvbnMgPSAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSB0b29sdGlwXCIsIG9uQ2xpY2s6IGJ0bkVkaXRDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAnXFx1MjdmNicpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFsdWU6IGlkLCB2YXJpYW50OiBcImRhbmdlclwiLCBjbGFzc05hbWU6IFwiYnRuLWRhbmdlciBidG4tZGFuZ2VyX2RlbCB0b29sdGlwXCIsIG9uQ2xpY2s6IGJ0bkRlbENsaWNrIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgIFwieFwiKSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZnVuY3Rpb25zLmFkZEJ1dHRvbilcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9hZGQgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5BZGRDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVxcdTAwQTBcXHUwNDNEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQzM1xcdTA0M0VcXHUwMEEwXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDQ2XFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICBcIitcIikpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBnZXREZWxldGVEaWFsb2cgPSAobmFtZU9mSXRlbSwgaXRlbVRvRGVsZXRlLCBkZWxldGVJdGVtLCBpdGVtSW5mbykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlRGlhbG9nLCB7IGl0ZW1Ub0RlbGV0ZTogaXRlbVRvRGVsZXRlLCBkZWxldGVJdGVtOiBkZWxldGVJdGVtLCBuYW1lT2ZJdGVtOiBuYW1lT2ZJdGVtLCBpdGVtSW5mbzogaXRlbUluZm8gfSkpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgeyB3aXRoQWxlcnRzOiBwcm9wcy53aXRoQWxlcnRzIH0pLFxuICAgICAgICBzaG93RGVsZXRlRGlhbG9nICYmXG4gICAgICAgICAgICBnZXREZWxldGVEaWFsb2cocHJvcHMuZnVuY3Rpb25zLm5hbWVPZkl0ZW0sIGl0ZW1Ub0RlbGV0ZSwgZGVsZXRlSXRlbSwgcHJvcHMuZnVuY3Rpb25zLml0ZW1JbmZvKSxcbiAgICAgICAgbG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBudWxsKSA6IHByb3BzLmZ1bmN0aW9ucy5nZXRUYWJsZShpdGVtcywgZ2V0QnV0dG9ucywgYnRuU29ydENsaWNrLCBzb3J0ZWRCeSksXG4gICAgICAgIGdldEFkZEJ1dHRvbigpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTGlzdE9mSXRlbXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhDZWxsIH0gZnJvbSAnLi4vcGFydHMvVGhDZWxsJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vbGliL1RhYmxlJztcbmNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgICBjYXJzOiB7XG4gICAgICAgIHVybDogJy9hcGkvY2Fycy8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBuYW1lT2ZJdGVtOiAn0JDQstGC0L7QvNC+0LHQuNC70YwnLFxuICAgICAgICBhZGRCdXR0b246IGZhbHNlLFxuICAgICAgICBpdGVtSW5mbzogKGl0ZW0pID0+IFtpdGVtLm1hbnVmYWN0dXJlciwgaXRlbS5tb2RlbF0uam9pbignICcpLFxuICAgICAgICBnZXRUYWJsZTogKGl0ZW1zLCBnZXRCdXR0b25zLCBvbkNsaWNrLCBzb3J0ZWRCeSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsgY2xhc3NOYW1lOiBcInRhYmxlIHRhYmxlX3N0cmlwZWQgdGFibGVfYm9yZGVyZWQgdGFibGVfaG92ZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcIm1hbnVmYWN0dXJlclwiLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDM4XFx1MDQzN1xcdTA0MzJcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIsIGluZGV4OiAxLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcIm1vZGVsXCIsIHRpdGxlOiBcIlxcdTA0MUNcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiLCBpbmRleDogMiwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJwcm9kdWN0aW9uXCIsIHRpdGxlOiBcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0MzAgXFx1MDQzMlxcdTA0NEJcXHUwNDNGXFx1MDQ0M1xcdTA0NDFcXHUwNDNBXFx1MDQzMFwiLCBpbmRleDogMywgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJjb2xvclwiLCB0aXRsZTogXCJcXHUwNDI2XFx1MDQzMlxcdTA0MzVcXHUwNDQyXCIsIGluZGV4OiA0LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcInBvd2VyXCIsIHRpdGxlOiBcIlxcdTA0MUNcXHUwNDNFXFx1MDQ0OVxcdTA0M0RcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDRDXCIsIGluZGV4OiA1LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcIm1pbGVhZ2VcIiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzMVxcdTA0MzVcXHUwNDMzXCIsIGluZGV4OiA2LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIGl0ZW1zLm1hcCgobywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubWFudWZhY3R1cmVyKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubW9kZWwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5wcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8uY29sb3IpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5wb3dlciksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLm1pbGVhZ2UpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogeyB3aWR0aDogMTAgKyAncmVtJyB9IH0sIGdldEJ1dHRvbnMoU3RyaW5nKG8uaWQpKSkpKTtcbiAgICAgICAgICAgIH0pKSkpLFxuICAgICAgICBnZXREZWZhdWx0U29ydGVkQnk6ICgpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiAnbW9kZWwnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICBvd25lcnM6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9vd25lcnMvJyxcbiAgICAgICAgdG9vbHRpcFBsYWNlOiAnYm90dG9tJyxcbiAgICAgICAgbmFtZU9mSXRlbTogJ9CQ0LLRgtC+0LLQu9Cw0LTQtdC70LXRhicsXG4gICAgICAgIGFkZEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgaXRlbUluZm86IChpdGVtKSA9PiBbaXRlbS5sYXN0X25hbWUsIGl0ZW0ubmFtZSwgaXRlbS5wYXRyb255bWljXS5qb2luKCcgJyksXG4gICAgICAgIGdldFRhYmxlOiAoaXRlbXMsIGdldEJ1dHRvbnMsIG9uQ2xpY2ssIHNvcnRlZEJ5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsgY2xhc3NOYW1lOiBcInRhYmxlIHRhYmxlX3N0cmlwZWQgdGFibGVfYm9yZGVyZWQgdGFibGVfaG92ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImxhc3RfbmFtZVwiLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzMFxcdTA0M0NcXHUwNDM4XFx1MDQzQlxcdTA0MzhcXHUwNDRGXCIsIGluZGV4OiAxLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJuYW1lXCIsIHRpdGxlOiBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RlwiLCBpbmRleDogMiwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgaWQ6IFwicGF0cm9ueW1pY1wiIH0sIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDQ3XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJnZW5kZXJcIiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXCIsIGluZGV4OiA0LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJhZ2VcIiwgdGl0bGU6IFwiXFx1MDQxMlxcdTA0M0VcXHUwNDM3XFx1MDQ0MFxcdTA0MzBcXHUwNDQxXFx1MDQ0MlwiLCBpbmRleDogNCwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIGl0ZW1zLm1hcCgobywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5sYXN0X25hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5wYXRyb255bWljKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmdlbmRlciA9PT0gJ2YnID8gJ9CW0LXQvScgOiAn0JzRg9C2JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5hZ2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHsgd2lkdGg6IDEwMCArICdweCcgfSB9LCBnZXRCdXR0b25zKFN0cmluZyhvLmlkKSkpKSk7XG4gICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERlZmF1bHRTb3J0ZWRCeTogKCkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0X25hbWUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAgICAgfSksXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3QgdXNlTGlzdEZ1bmN0aW9ucyA9IChsaXN0VHlwZSkgPT4ge1xuICAgIHJldHVybiBmdW5jdGlvbnNbbGlzdFR5cGVdO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vY3NzL0xvYWRlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY2VudGVyLWxvYWRlclwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJsZHMtZHVhbC1yaW5nXCIgfSkpKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3Rlc3QtcGhwLmhlcm9rdWFwcC5jb20vJztcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vbG9jYWxob3N0OjgwMDIvJztcbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBCQVNFX1VSTCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbn0pO1xuY29uc3QgYXBpID0ge1xuICAgIGdldEl0ZW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwaS5nZXRJdGVtcyBwYXJhbXMnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ21vZGFsLWRpYWxvZyc7XG5jb25zdCBNb2RhbEhlYWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgY29uc3QgY2xhc3NMaXN0ID0gcmVmLmN1cnJlbnQhLmNsYXNzTGlzdDtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdNb2RhbEhlYWRlci5iYXNlQ2xhc3MnLCBiYXNlQ2xhc3MpO1xuICAgIC8vIH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogcmVmLCBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX2hlYWRlcicsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuVGl0bGUnLCBiYXNlQ2xhc3MpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGJhc2VDbGFzcyArICdfX3RpdGxlJywgaWQ6IHByb3BzLmlkIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBudWxsLCBwcm9wcy5jaGlsZHJlbikpKTtcbn07XG5jb25zdCBNb2RhbEJvZHkgPSAocHJvcHMpID0+IHtcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwuQm9keScsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fYm9keScsIGlkOiBwcm9wcy5pZCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IE1vZGFsRm9vdGVyID0gKHByb3BzKSA9PiB7XG4gICAgLy91c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coJ01vZGFsLkZvb3RlcicsIGJhc2VDbGFzcykpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYmFzZUNsYXNzICsgJ19fZm9vdGVyJywgaWQ6IHByb3BzLmlkIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzZXRCYXNlQ2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgfTtcbiAgICB1c2VFZmZlY3Qoc2V0QmFzZUNsYXNzLCBbXSk7XG4gICAgY29uc3QgY2hhbmdlU2hvd1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgcHJvcHMuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0ICRtb2RhbEJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3AnKTtcbiAgICAgICAgY29uc3QgJGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2RpYWxvZycpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb2RhbC5tb2RhbCcsICRtb2RhbCk7XG4gICAgICAgIGlmIChwcm9wcy5zaG93KSB7XG4gICAgICAgICAgICAkYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LW1vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICRtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5hZGQocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wX3Nob3cnKTtcbiAgICAgICAgICAgICRtb2RhbC5jbGFzc0xpc3QuYWRkKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX3Nob3cnKTtcbiAgICAgICAgICAgICRkaWFsb2cuY2xhc3NMaXN0LmFkZChwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nX3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgJG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fYmFja2Ryb3Bfc2hvdycpO1xuICAgICAgICAgICAgJG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUocHJvcHMuYmFzZUNsYXNzTmFtZSArICdfc2hvdycpO1xuICAgICAgICAgICAgJGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLmJhc2VDbGFzc05hbWUgKyAnX19kaWFsb2dfc2hvdycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoY2hhbmdlU2hvd1N0YXR1cywgW3Byb3BzLnNob3ddKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogcHJvcHMuaWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2JhY2tkcm9wJyB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ2xhc3NOYW1lICsgJ19fZGlhbG9nJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogcHJvcHMuaWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNsYXNzTmFtZSArICdfX2NoaWxkcmVuJyB9LCBwcm9wcy5jaGlsZHJlbikpKSkpO1xufTtcbk9iamVjdC5hc3NpZ24oTW9kYWwsIHtcbiAgICBIZWFkZXI6IE1vZGFsSGVhZGVyLFxuICAgIFRpdGxlOiBNb2RhbFRpdGxlLFxuICAgIEJvZHk6IE1vZGFsQm9keSxcbiAgICBGb290ZXI6IE1vZGFsRm9vdGVyLFxufSk7XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm93ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWQgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3JvdycsIGlkOiBpZCB9LCBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICd0YWJsZScgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAndG9vbHRpcF9fY29udGVudCcgfSwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gKHsgdG9vbHRpcCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgdG9vbHRpcCksXG4gICAgICAgIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0LCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIGlmICghd2l0aEFsZXJ0cylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkodGltZW91dCA/IHRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiY29uc3QgZ2V0S2V5VmFsdWUgPSAob2JqLCBrZXkpID0+IG9ialtrZXldO1xuZXhwb3J0IGNvbnN0IGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gW3sgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1Vua25vd24gZXJyb3InIH1dO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBnZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlZGlyZWN0ID0gKGhpc3RvcnksIHJlZGlyZWN0LCBkaXIgPSAnJykgPT4gcmVkaXJlY3QgJiYgZGlyID09PSAnYmFjaycgPyBoaXN0b3J5LmdvQmFjaygpIDogaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbmV4cG9ydCBjb25zdCBkaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9saWIvUm93JztcbmNvbnN0IHVwQXJyb3cgPSAnXFx1MjE5MSc7XG4vL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuY29uc3QgZG93bkFycm93ID0gJ1xcdTIxOTMnO1xuY29uc3QgYXJyb3cgPSAoZGlyZWN0aW9uKSA9PiBkaXJlY3Rpb24gPT09ICdhc2MnID8gdXBBcnJvdyA6IGRvd25BcnJvdztcbmV4cG9ydCBjb25zdCBUaENlbGwgPSAoeyBpZCwgdGl0bGUsIGluZGV4LCBvbkNsaWNrLCBzb3J0ZWRCeSB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiLCBpZDogaWQsIG9uQ2xpY2s6IG9uQ2xpY2ssIGtleTogaW5kZXggfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzZcXHUwNDNDXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDBBMFxcdTA0MzRcXHUwNDNCXFx1MDQ0RlxcdTAwQTBcXHUwNDQxXFx1MDQzRVxcdTA0NDBcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0M0FcXHUwNDM4XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93XCIgfSxcbiAgICAgICAgICAgIChzb3J0ZWRCeSA9PT0gbnVsbCB8fCBzb3J0ZWRCeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc29ydGVkQnkubmFtZSkgPT09IGlkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQgfSwgYXJyb3coc29ydGVkQnkgPT09IG51bGwgfHwgc29ydGVkQnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRlZEJ5LmRpcmVjdGlvbikpLFxuICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dfX3RleHRcIiB9LCB0aXRsZSkpKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG5cbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciBOYXRpdmVOdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBOdW1iZXJQcm90b3R5cGUgPSBOYXRpdmVOdW1iZXIucHJvdG90eXBlO1xuXG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ0xBU1NPRiA9IGNsYXNzb2YoY3JlYXRlKE51bWJlclByb3RvdHlwZSkpID09IE5VTUJFUjtcblxuLy8gYFRvTnVtYmVyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxuaWYgKGlzRm9yY2VkKE5VTUJFUiwgIU5hdGl2ZU51bWJlcignIDBvMScpIHx8ICFOYXRpdmVOdW1iZXIoJzBiMScpIHx8IE5hdGl2ZU51bWJlcignKzB4MScpKSkge1xuICB2YXIgTnVtYmVyV3JhcHBlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciBkdW1teSA9IHRoaXM7XG4gICAgcmV0dXJuIGR1bW15IGluc3RhbmNlb2YgTnVtYmVyV3JhcHBlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NMQVNTT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IE51bWJlclByb3RvdHlwZS52YWx1ZU9mLmNhbGwoZHVtbXkpOyB9KSA6IGNsYXNzb2YoZHVtbXkpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlTnVtYmVyKHRvTnVtYmVyKGl0KSksIGR1bW15LCBOdW1iZXJXcmFwcGVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IERFU0NSSVBUT1JTID8gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVOdW1iZXIpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVMyMDE1IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVMyMDE1IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlciwnICtcbiAgICAvLyBFU05leHRcbiAgICAnZnJvbVN0cmluZyxyYW5nZSdcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoTmF0aXZlTnVtYmVyLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKE51bWJlcldyYXBwZXIsIGtleSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlcldyYXBwZXIsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5hdGl2ZU51bWJlciwga2V5KSk7XG4gICAgfVxuICB9XG4gIE51bWJlcldyYXBwZXIucHJvdG90eXBlID0gTnVtYmVyUHJvdG90eXBlO1xuICBOdW1iZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJXcmFwcGVyO1xuICByZWRlZmluZShnbG9iYWwsIE5VTUJFUiwgTnVtYmVyV3JhcHBlcik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9