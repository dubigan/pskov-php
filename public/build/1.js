(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/components/DeleteDialog/DeleteDialog.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/DeleteDialog/DeleteDialog.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Modal/Modal.styled */ "./assets/components/lib/Modal/Modal.styled.tsx");
/* harmony import */ var _lib_Button_Button_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Button/Button.styled */ "./assets/components/lib/Button/Button.styled.tsx");





var DeleteDialog = function DeleteDialog(props) {
  var handleClose = function handleClose(e) {
    if (e) props.deleteItem(e.target.value);
    return props.deleteItem(false);
  };

  var getItemInfo = function getItemInfo() {
    return props.itemInfo && props.itemInfo(props.itemToDelete);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    width: "50%",
    close: true,
    onClose: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalBodyNameOfItem, null, props.nameOfItem, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalBodyName, null, getItemInfo())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Modal_Modal_styled__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Button_Button_styled__WEBPACK_IMPORTED_MODULE_3__["BtnSecondary"], {
    shadow: true,
    value: false,
    onClick: handleClose
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Button_Button_styled__WEBPACK_IMPORTED_MODULE_3__["BtnDanger"], {
    shadow: true,
    value: true,
    onClick: handleClose
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
};

var ModalBodyNameOfItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DeleteDialog__ModalBodyNameOfItem",
  componentId: "sc-12j29r9-0"
})(["text-align:left;width:40%;padding-left:1rem;"]);

var ModalBodyName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DeleteDialog__ModalBodyName",
  componentId: "sc-12j29r9-1"
})(["text-align:center;width:60%;padding:0 1rem;"]);

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
/* harmony import */ var _lib_Row_Row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Row/Row */ "./assets/components/lib/Row/Row.tsx");
/* harmony import */ var _lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/Tooltip */ "./assets/components/lib/Tooltip.tsx");
/* harmony import */ var _lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/Button/Button */ "./assets/components/lib/Button/Button.tsx");
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Row_Row__WEBPACK_IMPORTED_MODULE_17__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      value: id,
      variant: "primary",
      className: "btn-primary tooltip",
      onClick: btnEditClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], {
      className: "tooltip__content tooltip__content_left"
    }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), "\u27F6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      value: id,
      variant: "danger",
      className: "btn-danger btn-danger_del tooltip",
      onClick: btnDelClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], {
      className: "tooltip__content tooltip__content_left"
    }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435"), "\xD7"));
  };

  var getAddButton = function getAddButton() {
    if (props.functions.addButton) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
      variant: "primary",
      className: "btn-primary btn-primary_add tooltip",
      onClick: btnAddClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipContent"], null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\xA0\u043D\u043E\u0432\u043E\u0433\u043E\xA0\u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430"), "+");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_20__["default"], {
    withAlerts: props.withAlerts
  }), showDeleteDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_DeleteDialog_DeleteDialog__WEBPACK_IMPORTED_MODULE_25__["default"], {
    nameOfItem: props.functions.nameOfItem,
    itemToDelete: itemToDelete,
    deleteItem: deleteItem,
    itemInfo: props.functions.itemInfo,
    onClose: function onClose() {
      return setShowDeleteDialog(false);
    }
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_22__["default"], null) : props.functions.getTable(items, getButtons, btnSortClick, sortedBy), getAddButton());
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

/***/ "./assets/components/lib/Button/Button.styled.tsx":
/*!********************************************************!*\
  !*** ./assets/components/lib/Button/Button.styled.tsx ***!
  \********************************************************/
/*! exports provided: Button, BtnPrimary, BtnSecondary, BtnDanger, BtnOutlinePrimary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPrimary", function() { return BtnPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnSecondary", function() { return BtnSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnDanger", function() { return BtnDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnOutlinePrimary", function() { return BtnOutlinePrimary; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Buttonstyled__Button",
  componentId: "sc-e9hgp9-0"
})(["display:inline-block;font-weight:400;line-height:1.5;color:$dark;background-color:transparent;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;margin:0.375rem;font-size:1.6rem;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;box-shadow:", ";width:", ";&:disabled{pointer-events:none;opacity:0.65;}&:hover{transform:scale(1.05);}"], function (props) {
  return props.shadow ? '1px 4px 4px rgba(0, 0, 0, 0.5)' : 'none';
}, function (props) {
  return props.width;
});
var BtnPrimary = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button).withConfig({
  displayName: "Buttonstyled__BtnPrimary",
  componentId: "sc-e9hgp9-1"
})(["color:#fff;background-color:#0d6efd;border-color:#0d6efd;"]);
var BtnSecondary = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button).withConfig({
  displayName: "Buttonstyled__BtnSecondary",
  componentId: "sc-e9hgp9-2"
})(["color:#fff;background-color:#6c757d;border-color:#6c757d;"]);
var BtnDanger = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button).withConfig({
  displayName: "Buttonstyled__BtnDanger",
  componentId: "sc-e9hgp9-3"
})(["color:#fff;background-color:#dc3545;border-color:#dc3545;"]);
var BtnOutlinePrimary = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button).withConfig({
  displayName: "Buttonstyled__BtnOutlinePrimary",
  componentId: "sc-e9hgp9-4"
})(["color:#0d6efd;border-color:#0d6efd;&.active{color:white;background-color:#0d6efd;border-color:#0d6efd;}"]);

/***/ }),

/***/ "./assets/components/lib/Button/Button.tsx":
/*!*************************************************!*\
  !*** ./assets/components/lib/Button/Button.tsx ***!
  \*************************************************/
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

/***/ "./assets/components/lib/Modal/Modal.styled.elements.tsx":
/*!***************************************************************!*\
  !*** ./assets/components/lib/Modal/Modal.styled.elements.tsx ***!
  \***************************************************************/
/*! exports provided: Center, ModalContainer, ModalComponentInner, ModalComponent, ModalHeader, ModalTitle, ModalBody, ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponentInner", function() { return ModalComponentInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return ModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Center = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__Center",
  componentId: "sc-5y1sjz-0"
})(["min-height:calc(100% - 3.5rem);margin:1.75rem auto;display:flex;align-items:center;transition:0.3s;"]); // export const ModalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-color: #f2f2f2;
//   width: 335px;
//   height: 410px;
//   padding: 20px;
//   border: 1px solid rgba(255, 255, 255, 0.5);
// `;

var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalContainer",
  componentId: "sc-5y1sjz-1"
})(["position:fixed;top:0;left:0%;width:100%;height:100%;background-color:rgba(0,0,0,0.2);display:block;transition:0.3s;z-index:", ";overflow:auto;"], function (props) {
  return props.zIndex;
});
var ModalComponentInner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalComponentInner",
  componentId: "sc-5y1sjz-2"
})(["margin:0 20px;border-radius:", ";border:1px solid #e5e7eb;box-shadow:7px 7px 3px rgba(0,0,0,0.7);position:relative;background-color:#f2f2f2;"], function (props) {
  return props.nBr ? '0' : '8px';
});
var ModalComponent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalComponent",
  componentId: "sc-5y1sjz-3"
})(["display:flex;flex-direction:column;justify-content:center;margin:0 auto;cursor:auto;width:", ";top:4rem;animation:0.3s ease transition;position:relative;span{position:absolute;right:20px;top:6%;cursor:pointer;z-index:9999;font-size:18px;}@media (max-width:768px){margin:", ";}@keyframes opacity{from{opacity:0;}to{opacity:1;}}@keyframes transition{from{top:0;}to{top:4rem;}}"], function (props) {
  return props.width ? props.width : '0';
}, function (props) {
  return props.mobMarg ? '50px 20px' : '50px auto';
});
var ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalHeader",
  componentId: "sc-5y1sjz-4"
})(["font-weight:700;font-size:18px;line-height:24.5px;text-align:center;padding:1rem 0;"]);
var ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalTitle",
  componentId: "sc-5y1sjz-5"
})(["font-weight:700;font-size:18px;line-height:24.5px;text-align:center;"]);
var ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalBody",
  componentId: "sc-5y1sjz-6"
})(["display:flex;flex-direction:row;frex-wrap:nowrap;font-weight:700;font-size:2rem;line-height:2.5rem;justify-content:space-between;padding:1rem 0;"]);
var ModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Modalstyledelements__ModalFooter",
  componentId: "sc-5y1sjz-7"
})(["font-weight:700;font-size:18px;line-height:24.5px;display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:0.75rem;"]);

/***/ }),

/***/ "./assets/components/lib/Modal/Modal.styled.tsx":
/*!******************************************************!*\
  !*** ./assets/components/lib/Modal/Modal.styled.tsx ***!
  \******************************************************/
/*! exports provided: Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return ModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.styled.elements */ "./assets/components/lib/Modal/Modal.styled.elements.tsx");
/* harmony import */ var _Portal_Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal/Portal */ "./assets/components/lib/Portal/Portal.tsx");



var Modal = function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      width = _ref.width,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? '99999' : _ref$zIndex,
      mobMarg = _ref.mobMarg,
      close = _ref.close,
      nBr = _ref.nBr;

  var handleContainerClick = function handleContainerClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__["Portal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalContainer"], {
    zIndex: zIndex,
    onClick: handleContainerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], {
    width: width,
    mobMarg: mobMarg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalComponentInner"], {
    nBr: nBr
  }, close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "close",
    onClick: onClose
  }, "\xD7"), children))));
};
var ModalTitle = function ModalTitle(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, children);
};
var ModalHeader = function ModalHeader(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], null, children);
};
var ModalBody = function ModalBody(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, children);
};
var ModalFooter = function ModalFooter(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_styled_elements__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, children);
};

/***/ }),

/***/ "./assets/components/lib/Portal/Portal.tsx":
/*!*************************************************!*\
  !*** ./assets/components/lib/Portal/Portal.tsx ***!
  \*************************************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


var Portal = function Portal(_ref) {
  var children = _ref.children;
  var div = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return document.createElement('div');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.appendChild(div);
    return function () {
      document.body.removeChild(div);
    };
  }, []);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, div);
};

/***/ }),

/***/ "./assets/components/lib/Row/Row.tsx":
/*!*******************************************!*\
  !*** ./assets/components/lib/Row/Row.tsx ***!
  \*******************************************/
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
/* harmony import */ var _lib_Row_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Row/Row */ "./assets/components/lib/Row/Row.tsx");




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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipContent"], null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435\xA0\u0434\u043B\u044F\xA0\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_Row_Row__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    id: id,
    className: "sorted-row"
  }, (sortedBy === null || sortedBy === void 0 ? void 0 : sortedBy.name) === id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id
  }, arrow(sortedBy === null || sortedBy === void 0 ? void 0 : sortedBy.direction)), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id,
    className: "sorted-row__text"
  }, title)));
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L3VzZUxpc3RGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQuZWxlbWVudHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Qb3J0YWwvUG9ydGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93L1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcnRzL1RoQ2VsbC50c3giXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwicHJvcHMiLCJoYW5kbGVDbG9zZSIsImUiLCJkZWxldGVJdGVtIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJdGVtSW5mbyIsIml0ZW1JbmZvIiwiaXRlbVRvRGVsZXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJ3aWR0aCIsImNsb3NlIiwib25DbG9zZSIsIk1vZGFsSGVhZGVyIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsQm9keU5hbWVPZkl0ZW0iLCJuYW1lT2ZJdGVtIiwiTW9kYWxCb2R5TmFtZSIsIk1vZGFsRm9vdGVyIiwiQnRuU2Vjb25kYXJ5Iiwic2hhZG93Iiwib25DbGljayIsIkJ0bkRhbmdlciIsInN0eWxlZCIsImRpdiIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkxpc3RPZkl0ZW1zIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0RlbGV0ZURpYWxvZyIsInNldFNob3dEZWxldGVEaWFsb2ciLCJ1bmRlZmluZWQiLCJzZXRJdGVtVG9EZWxldGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZnVuY3Rpb25zIiwiZ2V0RGVmYXVsdFNvcnRlZEJ5Iiwic29ydGVkQnkiLCJzZXRTb3J0ZWRCeSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiZ2V0SXRlbXMiLCJhcGkiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJvd25lciIsIl9hIiwicmVzIiwiZGF0YSIsInNldEFsZXJ0cyIsImdldEVycm9ycyIsIl9iIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtQnlJZCIsImlkIiwiZmlsdGVyIiwiaXRlbSIsImJ0blNvcnRDbGljayIsInNvcnRlZF9uYW1lIiwibmFtZSIsImRpcmVjdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImJ0bkRlbENsaWNrIiwiTnVtYmVyIiwiYnRuQWRkQ2xpY2siLCJheGlvcyIsInBvc3QiLCJidG5fYWRkIiwicmVkaXJlY3QiLCJwdXNoIiwiYnRuRWRpdENsaWNrIiwiaXRlbV9wayIsImJ0bl9lZGl0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldEl0ZW1JZCIsImNvbmZpcm0iLCJidG5fZGVsIiwiX2MiLCJ0eXBlIiwibWVzc2FnZSIsImdldEJ1dHRvbnMiLCJSb3ciLCJCdXR0b24iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwiVG9vbHRpcENvbnRlbnQiLCJnZXRBZGRCdXR0b24iLCJhZGRCdXR0b24iLCJGcmFnbWVudCIsIkFsZXJ0cyIsIndpdGhBbGVydHMiLCJMb2FkZXIiLCJnZXRUYWJsZSIsImNhcnMiLCJ0b29sdGlwUGxhY2UiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsImpvaW4iLCJUYWJsZSIsIlRoQ2VsbCIsInRpdGxlIiwiaW5kZXgiLCJtYXAiLCJvIiwia2V5IiwicHJvZHVjdGlvbiIsImNvbG9yIiwicG93ZXIiLCJtaWxlYWdlIiwic3R5bGUiLCJTdHJpbmciLCJvd25lcnMiLCJsYXN0X25hbWUiLCJwYXRyb255bWljIiwiZ2VuZGVyIiwiYWdlIiwidXNlTGlzdEZ1bmN0aW9ucyIsImxpc3RUeXBlIiwiQkFTRV9VUkwiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwicGFyYW1zIiwiYnV0dG9uIiwiQnRuUHJpbWFyeSIsIkJ0bk91dGxpbmVQcmltYXJ5IiwidG9vbHRpcCIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiLCJDZW50ZXIiLCJNb2RhbENvbnRhaW5lciIsInpJbmRleCIsIk1vZGFsQ29tcG9uZW50SW5uZXIiLCJuQnIiLCJNb2RhbENvbXBvbmVudCIsIm1vYk1hcmciLCJoYW5kbGVDb250YWluZXJDbGljayIsImN1cnJlbnRUYXJnZXQiLCJQb3J0YWwiLCJTdHlsZWQiLCJ1c2VNZW1vIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVBvcnRhbCIsIkNvbXBvbmVudCIsIlRvb2x0aXAiLCJ0aW1lb3V0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhbGVydHMiLCJ1c2VBbGVydHMiLCJkZWZUaW1lb3V0Iiwic2hvd0FsZXJ0cyIsInZpZXciLCJtZXNzYWdlcyIsImxlbmd0aCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJkZWxheSIsIndhaXQiLCJnbG9iYWwiLCJzZXRUaW1lb3V0Iiwic2hvdyIsImdldEtleVZhbHVlIiwib2JqIiwia2V5cyIsImRpciIsImdvQmFjayIsImRpZ2l0c09ubHkiLCJjaGFyQ29kZSIsInByZXZlbnREZWZhdWx0IiwidXBBcnJvdyIsImRvd25BcnJvdyIsImFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUlBLENBQUosRUFDSUYsS0FBSyxDQUFDRyxVQUFOLENBQWlCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBMUI7QUFDSixXQUFPTCxLQUFLLENBQUNHLFVBQU4sQ0FBaUIsS0FBakIsQ0FBUDtBQUNILEdBSkQ7O0FBS0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixXQUFPTixLQUFLLENBQUNPLFFBQU4sSUFBa0JQLEtBQUssQ0FBQ08sUUFBTixDQUFlUCxLQUFLLENBQUNRLFlBQXJCLENBQXpCO0FBQ0gsR0FGRDs7QUFHQSxzQkFBUUMsNENB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QU4sQ0FBb0JrRyxnREFBcEIsRUFBeUI7QUFBRTlCLE1BQUUsRUFBRUEsRUFBTjtBQUFVaUMsYUFBUyxFQUFFO0FBQXJCLEdBQXpCLEVBQ0ksQ0FBQ25ELFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUN1QixJQUE5RCxNQUF3RUwsRUFBeEUsaUJBQThFckUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFb0UsTUFBRSxFQUFFQTtBQUFOLEdBQTNCLEVBQXVDaUksS0FBSyxDQUFDbkosUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQ3dCLFNBQTlELENBQTVDLENBRGxGLEVBRUksR0FGSixlQUdJM0UsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFb0UsTUFBRSxFQUFFQSxFQUFOO0FBQVVpQyxhQUFTLEVBQUU7QUFBckIsR0FBM0IsRUFBc0VnQixLQUF0RSxDQUhKLENBRkksQ0FBUjtBQU1ILENBUE0sQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbFRpdGxlLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBNb2RhbEhlYWRlciB9IGZyb20gJy4uL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQnO1xuaW1wb3J0IHsgQnRuRGFuZ2VyLCBCdG5TZWNvbmRhcnkgfSBmcm9tICcuLi9saWIvQnV0dG9uL0J1dHRvbi5zdHlsZWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9tYWNybyc7XG5jb25zdCBEZWxldGVEaWFsb2cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgcHJvcHMuZGVsZXRlSXRlbShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBwcm9wcy5kZWxldGVJdGVtKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEl0ZW1JbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvcHMuaXRlbUluZm8gJiYgcHJvcHMuaXRlbUluZm8ocHJvcHMuaXRlbVRvRGVsZXRlKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgeyB3aWR0aDogXCI1MCVcIiwgY2xvc2U6IHRydWUsIG9uQ2xvc2U6IHByb3BzLm9uQ2xvc2UgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxUaXRsZSwgbnVsbCwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsQm9keSwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxCb2R5TmFtZU9mSXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9wcy5uYW1lT2ZJdGVtLFxuICAgICAgICAgICAgICAgIFwiOlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxCb2R5TmFtZSwgbnVsbCwgZ2V0SXRlbUluZm8oKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxGb290ZXIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ0blNlY29uZGFyeSwgeyBzaGFkb3c6IHRydWUsIHZhbHVlOiBmYWxzZSwgb25DbGljazogaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ0bkRhbmdlciwgeyBzaGFkb3c6IHRydWUsIHZhbHVlOiB0cnVlLCBvbkNsaWNrOiBoYW5kbGVDbG9zZSB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpKSk7XG59O1xuY29uc3QgTW9kYWxCb2R5TmFtZU9mSXRlbSA9IHN0eWxlZC5kaXYgYFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5gO1xuY29uc3QgTW9kYWxCb2R5TmFtZSA9IHN0eWxlZC5kaXYgYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbmA7XG5leHBvcnQgZGVmYXVsdCBEZWxldGVEaWFsb2c7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL2xpYi9Sb3cvUm93JztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi4vbGliL1Rvb2x0aXAnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGliL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCB7IEFsZXJ0Q29udGV4dCB9IGZyb20gJy4uL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgZ2V0RXJyb3JzIH0gZnJvbSAnLi4vbGliL3V0aWxzL3V0aWxzJztcbmltcG9ydCBEZWxldGVEaWFsb2cgZnJvbSAnLi4vRGVsZXRlRGlhbG9nL0RlbGV0ZURpYWxvZyc7XG5jb25zdCBMaXN0T2ZJdGVtcyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93RGVsZXRlRGlhbG9nLCBzZXRTaG93RGVsZXRlRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXRlbVRvRGVsZXRlLCBzZXRJdGVtVG9EZWxldGVdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc29ydGVkQnksIHNldFNvcnRlZEJ5XSA9IHVzZVN0YXRlKHByb3BzLmZ1bmN0aW9ucy5nZXREZWZhdWx0U29ydGVkQnkoKSk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRJdGVtcyBvd25lcicsIHRoaXMucHJvcHMub3duZXIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXBpLmdldEl0ZW1zKHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgIG93bmVyOiAoX2EgPSBwcm9wcy5vd25lcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLTEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMaXN0T2ZJdGVtcy5nZXRJdGVtcyByZXMuZGF0YScsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIHNldEl0ZW1zKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyhnZXRFcnJvcnMoKF9iID0gZXJyLnJlc3BvbnNlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRJdGVtcygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuZ2V0SXRlbXMgaXRlbXMnLCBpdGVtcyk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEl0ZW1zKCk7XG4gICAgfSwgW3NvcnRlZEJ5LCBwcm9wcy5vd25lcl0pO1xuICAgIGNvbnN0IGdldEl0ZW1CeUlkID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICAgIH07XG4gICAgY29uc3QgYnRuU29ydENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkX25hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuU29ydENsaWNrLnNvcnRlZF9uYW1lJywgc29ydGVkX25hbWUpO1xuICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydGVkQnkpLCB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYnRuRGVsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZ2V0SXRlbUJ5SWQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMaXN0T2ZJdGVtcy5idG5EZWxDbGljayBpdGVtJywgaXRlbSk7XG4gICAgICAgIHNldEl0ZW1Ub0RlbGV0ZShpdGVtKTtcbiAgICAgICAgc2V0U2hvd0RlbGV0ZURpYWxvZyh0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGJ0bkFkZENsaWNrID0gKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChwcm9wcy5mdW5jdGlvbnMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidG5FZGl0Q2xpY2sgPSAoZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1fcGsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrJywgaXRlbV9wayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICBidG5fZWRpdDogJycsXG4gICAgICAgICAgICAgICAgaXRlbV9wazogaXRlbV9wayxcbiAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmhpc3RvcnknLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGFbJ3JlZGlyZWN0J107XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHJlcy5kYXRhLnJlZGlyZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suY2F0Y2gnLCBlcnIpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRJdGVtSWQgPSAoaXRlbSkgPT4gKGl0ZW0gPyBpdGVtLmlkIDogLTEpO1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoY29uZmlybSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYztcbiAgICAgICAgc2V0U2hvd0RlbGV0ZURpYWxvZyhmYWxzZSk7XG4gICAgICAgIGlmIChjb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QocHJvcHMuZnVuY3Rpb25zLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRfYnk6IHNvcnRlZEJ5LFxuICAgICAgICAgICAgICAgICAgICBidG5fZGVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9wazogZ2V0SXRlbUlkKGl0ZW1Ub0RlbGV0ZSksXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiAoX2MgPSBwcm9wcy5vd25lcikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMuZnVuY3Rpb25zLm5hbWVPZkl0ZW19INGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGdldEJ1dHRvbnMgPSAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSB0b29sdGlwXCIsIG9uQ2xpY2s6IGJ0bkVkaXRDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAnXFx1MjdmNicpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFsdWU6IGlkLCB2YXJpYW50OiBcImRhbmdlclwiLCBjbGFzc05hbWU6IFwiYnRuLWRhbmdlciBidG4tZGFuZ2VyX2RlbCB0b29sdGlwXCIsIG9uQ2xpY2s6IGJ0bkRlbENsaWNrIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fY29udGVudCB0b29sdGlwX19jb250ZW50X2xlZnRcIiB9LCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgIFwiXFx1MDBEN1wiKSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZnVuY3Rpb25zLmFkZEJ1dHRvbilcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeSBidG4tcHJpbWFyeV9hZGQgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5BZGRDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVxcdTAwQTBcXHUwNDNEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQzM1xcdTA0M0VcXHUwMEEwXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDQ2XFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICBcIitcIikpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgd2l0aEFsZXJ0czogcHJvcHMud2l0aEFsZXJ0cyB9KSxcbiAgICAgICAgc2hvd0RlbGV0ZURpYWxvZyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVEaWFsb2csIHsgbmFtZU9mSXRlbTogcHJvcHMuZnVuY3Rpb25zLm5hbWVPZkl0ZW0sIGl0ZW1Ub0RlbGV0ZTogaXRlbVRvRGVsZXRlLCBkZWxldGVJdGVtOiBkZWxldGVJdGVtLCBpdGVtSW5mbzogcHJvcHMuZnVuY3Rpb25zLml0ZW1JbmZvLCBvbkNsb3NlOiAoKSA9PiBzZXRTaG93RGVsZXRlRGlhbG9nKGZhbHNlKSB9KSksXG4gICAgICAgIGxvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRlciwgbnVsbCkgOiBwcm9wcy5mdW5jdGlvbnMuZ2V0VGFibGUoaXRlbXMsIGdldEJ1dHRvbnMsIGJ0blNvcnRDbGljaywgc29ydGVkQnkpLFxuICAgICAgICBnZXRBZGRCdXR0b24oKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExpc3RPZkl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoQ2VsbCB9IGZyb20gJy4uL3BhcnRzL1RoQ2VsbCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4uL2xpYi9UYWJsZSc7XG5jb25zdCBmdW5jdGlvbnMgPSB7XG4gICAgY2Fyczoge1xuICAgICAgICB1cmw6ICcvYXBpL2NhcnMvJyxcbiAgICAgICAgdG9vbHRpcFBsYWNlOiAnYm90dG9tJyxcbiAgICAgICAgbmFtZU9mSXRlbTogJ9CQ0LLRgtC+0LzQvtCx0LjQu9GMJyxcbiAgICAgICAgYWRkQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgaXRlbUluZm86IChpdGVtKSA9PiBbaXRlbS5tYW51ZmFjdHVyZXIsIGl0ZW0ubW9kZWxdLmpvaW4oJyAnKSxcbiAgICAgICAgZ2V0VGFibGU6IChpdGVtcywgZ2V0QnV0dG9ucywgb25DbGljaywgc29ydGVkQnkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlLCB7IGNsYXNzTmFtZTogXCJ0YWJsZSB0YWJsZV9zdHJpcGVkIHRhYmxlX2JvcmRlcmVkIHRhYmxlX2hvdmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJtYW51ZmFjdHVyZXJcIiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzOFxcdTA0MzdcXHUwNDMyXFx1MDQzRVxcdTA0MzRcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1wiLCBpbmRleDogMSwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJtb2RlbFwiLCB0aXRsZTogXCJcXHUwNDFDXFx1MDQzRVxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiwgaW5kZXg6IDIsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwicHJvZHVjdGlvblwiLCB0aXRsZTogXCJcXHUwNDE0XFx1MDQzMFxcdTA0NDJcXHUwNDMwIFxcdTA0MzJcXHUwNDRCXFx1MDQzRlxcdTA0NDNcXHUwNDQxXFx1MDQzQVxcdTA0MzBcIiwgaW5kZXg6IDMsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwiY29sb3JcIiwgdGl0bGU6IFwiXFx1MDQyNlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlwiLCBpbmRleDogNCwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJwb3dlclwiLCB0aXRsZTogXCJcXHUwNDFDXFx1MDQzRVxcdTA0NDlcXHUwNDNEXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0Q1wiLCBpbmRleDogNSwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJtaWxlYWdlXCIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzFcXHUwNDM1XFx1MDQzM1wiLCBpbmRleDogNiwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBpdGVtcy5tYXAoKG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLm1hbnVmYWN0dXJlciksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLm1vZGVsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ucHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ucG93ZXIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5taWxlYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHsgd2lkdGg6IDEwICsgJ3JlbScgfSB9LCBnZXRCdXR0b25zKFN0cmluZyhvLmlkKSkpKSk7XG4gICAgICAgICAgICB9KSkpKSxcbiAgICAgICAgZ2V0RGVmYXVsdFNvcnRlZEJ5OiAoKSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogJ21vZGVsJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYycsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgb3duZXJzOiB7XG4gICAgICAgIHVybDogJy9hcGkvb3duZXJzLycsXG4gICAgICAgIHRvb2x0aXBQbGFjZTogJ2JvdHRvbScsXG4gICAgICAgIG5hbWVPZkl0ZW06ICfQkNCy0YLQvtCy0LvQsNC00LXQu9C10YYnLFxuICAgICAgICBhZGRCdXR0b246IHRydWUsXG4gICAgICAgIGl0ZW1JbmZvOiAoaXRlbSkgPT4gW2l0ZW0ubGFzdF9uYW1lLCBpdGVtLm5hbWUsIGl0ZW0ucGF0cm9ueW1pY10uam9pbignICcpLFxuICAgICAgICBnZXRUYWJsZTogKGl0ZW1zLCBnZXRCdXR0b25zLCBvbkNsaWNrLCBzb3J0ZWRCeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlLCB7IGNsYXNzTmFtZTogXCJ0YWJsZSB0YWJsZV9zdHJpcGVkIHRhYmxlX2JvcmRlcmVkIHRhYmxlX2hvdmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRoQ2VsbCwgeyBpZDogXCJsYXN0X25hbWVcIiwgdGl0bGU6IFwiXFx1MDQyNFxcdTA0MzBcXHUwNDNDXFx1MDQzOFxcdTA0M0JcXHUwNDM4XFx1MDQ0RlwiLCBpbmRleDogMSwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibmFtZVwiLCB0aXRsZTogXCJcXHUwNDE4XFx1MDQzQ1xcdTA0NEZcIiwgaW5kZXg6IDIsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGlkOiBcInBhdHJvbnltaWNcIiB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQ0N1xcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzJcXHUwNDNFXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwiZ2VuZGVyXCIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzQlwiLCBpbmRleDogNCwgb25DbGljazogb25DbGljaywgc29ydGVkQnk6IHNvcnRlZEJ5IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwiYWdlXCIsIHRpdGxlOiBcIlxcdTA0MTJcXHUwNDNFXFx1MDQzN1xcdTA0NDBcXHUwNDMwXFx1MDQ0MVxcdTA0NDJcIiwgaW5kZXg6IDQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBpdGVtcy5tYXAoKG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubGFzdF9uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ucGF0cm9ueW1pYyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5nZW5kZXIgPT09ICdmJyA/ICfQltC10L0nIDogJ9Cc0YPQticpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8uYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMDAgKyAncHgnIH0gfSwgZ2V0QnV0dG9ucyhTdHJpbmcoby5pZCkpKSkpO1xuICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREZWZhdWx0U29ydGVkQnk6ICgpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiAnbGFzdF9uYW1lJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYycsXG4gICAgICAgIH0pLFxuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHVzZUxpc3RGdW5jdGlvbnMgPSAobGlzdFR5cGUpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb25zW2xpc3RUeXBlXTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Nzcy9Mb2FkZXIuY3NzJztcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNlbnRlci1sb2FkZXJcIiB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibGRzLWR1YWwtcmluZ1wiIH0pKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly90ZXN0LXBocC5oZXJva3VhcHAuY29tLyc7XG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2xvY2FsaG9zdDo4MDAyLyc7XG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG59KTtcbmNvbnN0IGFwaSA9IHtcbiAgICBnZXRJdGVtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcGkuZ2V0SXRlbXMgcGFyYW1zJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlKHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9tYWNybyc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbiBgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICRkYXJrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBtYXJnaW46IDAuMzc1cmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IChwcm9wcy5zaGFkb3cgPyAnMXB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpJyA6ICdub25lJyl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gICY6ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBCdG5QcmltYXJ5ID0gc3R5bGVkKEJ1dHRvbikgYFxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcbiAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuYDtcbmV4cG9ydCBjb25zdCBCdG5TZWNvbmRhcnkgPSBzdHlsZWQoQnV0dG9uKSBgXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG5gO1xuZXhwb3J0IGNvbnN0IEJ0bkRhbmdlciA9IHN0eWxlZChCdXR0b24pIGBcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbmA7XG5leHBvcnQgY29uc3QgQnRuT3V0bGluZVByaW1hcnkgPSBzdHlsZWQoQnV0dG9uKSBgXG4gIGNvbG9yOiAjMGQ2ZWZkO1xuICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gIH1cbiAgLy8gJjpob3ZlciB7XG4gIC8vICAgY29sb3I6ICNmZmY7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcbiAgLy8gfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbWFjcm8nO1xuZXhwb3J0IGNvbnN0IENlbnRlciA9IHN0eWxlZC5kaXYgYFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xuICBtYXJnaW46IDEuNzVyZW0gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbmA7XG4vLyBleHBvcnQgY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4vLyAgIHdpZHRoOiAzMzVweDtcbi8vICAgaGVpZ2h0OiA0MTBweDtcbi8vICAgcGFkZGluZzogMjBweDtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuLy8gYDtcbmV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMuekluZGV4fTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsQ29tcG9uZW50SW5uZXIgPSBzdHlsZWQuZGl2IGBcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLm5CciA/ICcwJyA6ICc4cHgnKX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIC8vIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC43KSwgM3B4IDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3gtc2hhZG93OiA3cHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbmA7XG5leHBvcnQgY29uc3QgTW9kYWxDb21wb25lbnQgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IGF1dG87XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA/IHByb3BzLndpZHRoIDogJzAnKX07XG4gIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcyBlYXNlLW91dDtcbiAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0cmVtKTtcbiAgLy8gYW5pbWF0aW9uOiAwLjNzIGVhc2Ugb3BhY2l0eTsgLy8sIDAuM3MgZWFzZSB0cmFuc2l0aW9uO1xuICB0b3A6IDRyZW07XG4gIGFuaW1hdGlvbjogMC4zcyBlYXNlIHRyYW5zaXRpb247XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNiU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogJHtwcm9wcyA9PiAocHJvcHMubW9iTWFyZyA/ICc1MHB4IDIwcHgnIDogJzUwcHggYXV0bycpfTtcbiAgfVxuICBAa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0cmFuc2l0aW9uIHtcbiAgICBmcm9tIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdG9wOiA0cmVtO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBNb2RhbEhlYWRlciA9IHN0eWxlZC5kaXYgYFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNC41cHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuYDtcbmV4cG9ydCBjb25zdCBNb2RhbFRpdGxlID0gc3R5bGVkLmRpdiBgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0LjVweDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmV4cG9ydCBjb25zdCBNb2RhbEJvZHkgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZnJleC13cmFwOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW0gMDtcbmA7XG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBzdHlsZWQuZGl2IGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjQuNXB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9Nb2RhbC5zdHlsZWQuZWxlbWVudHMnO1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vUG9ydGFsL1BvcnRhbCc7XG5leHBvcnQgY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgb25DbG9zZSwgd2lkdGgsIHpJbmRleCA9ICc5OTk5OScsIG1vYk1hcmcsIGNsb3NlLCBuQnIsIH0pID0+IHtcbiAgICBjb25zdCBoYW5kbGVDb250YWluZXJDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsQ29udGFpbmVyLCB7IHpJbmRleDogekluZGV4LCBvbkNsaWNrOiBoYW5kbGVDb250YWluZXJDbGljayB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxDb21wb25lbnQsIHsgd2lkdGg6IHdpZHRoLCBtb2JNYXJnOiBtb2JNYXJnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxDb21wb25lbnRJbm5lciwgeyBuQnI6IG5CciB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiY2xvc2VcIiwgb25DbGljazogb25DbG9zZSB9LCBcIlxcdTAwRDdcIikpLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbikpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBNb2RhbFRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbFRpdGxlLCBudWxsLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IE1vZGFsSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbEhlYWRlciwgbnVsbCwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBNb2RhbEJvZHkgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsQm9keSwgbnVsbCwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxGb290ZXIsIG51bGwsIGNoaWxkcmVuKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuZXhwb3J0IGNvbnN0IFBvcnRhbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBkaXYgPSB1c2VNZW1vKCgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBkaXYpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm93ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWQgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3JvdycsIGlkOiBpZCB9LCBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICd0YWJsZScgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAndG9vbHRpcF9fY29udGVudCcgfSwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gKHsgdG9vbHRpcCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgdG9vbHRpcCksXG4gICAgICAgIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0LCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIGlmICghd2l0aEFsZXJ0cylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkodGltZW91dCA/IHRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiY29uc3QgZ2V0S2V5VmFsdWUgPSAob2JqLCBrZXkpID0+IG9ialtrZXldO1xuZXhwb3J0IGNvbnN0IGdldEVycm9ycyA9IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gW3sgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1Vua25vd24gZXJyb3InIH1dO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBnZXRLZXlWYWx1ZShkYXRhLCBrZXkpIH07XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlZGlyZWN0ID0gKGhpc3RvcnksIHJlZGlyZWN0LCBkaXIgPSAnJykgPT4gcmVkaXJlY3QgJiYgZGlyID09PSAnYmFjaycgPyBoaXN0b3J5LmdvQmFjaygpIDogaGlzdG9yeS5wdXNoKHJlZGlyZWN0KTtcbmV4cG9ydCBjb25zdCBkaWdpdHNPbmx5ID0gKGUpID0+IHtcbiAgICBsZXQgY2hhckNvZGUgPSBlLmNoYXJDb2RlO1xuICAgIC8vY29uc29sZS5sb2coY2hhckNvZGUpO1xuICAgIGlmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpIHtcbiAgICAgICAgLy8gZGlnaXRzIG9ubHlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuLi9saWIvVG9vbHRpcCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9saWIvUm93L1Jvdyc7XG5jb25zdCB1cEFycm93ID0gJ1xcdTIxOTEnO1xuLy9kb3duQXJyb3cgPSAnJiN4MDIyNUM7JztcbmNvbnN0IGRvd25BcnJvdyA9ICdcXHUyMTkzJztcbmNvbnN0IGFycm93ID0gKGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uID09PSAnYXNjJyA/IHVwQXJyb3cgOiBkb3duQXJyb3c7XG5leHBvcnQgY29uc3QgVGhDZWxsID0gKHsgaWQsIHRpdGxlLCBpbmRleCwgb25DbGljaywgc29ydGVkQnkgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiwgaWQ6IGlkLCBvbkNsaWNrOiBvbkNsaWNrLCBrZXk6IGluZGV4IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzQ1xcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTAwQTBcXHUwNDM0XFx1MDQzQlxcdTA0NEZcXHUwMEEwXFx1MDQ0MVxcdTA0M0VcXHUwNDQwXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDNBXFx1MDQzOFwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd1wiIH0sXG4gICAgICAgICAgICAoc29ydGVkQnkgPT09IG51bGwgfHwgc29ydGVkQnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRlZEJ5Lm5hbWUpID09PSBpZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkIH0sIGFycm93KHNvcnRlZEJ5ID09PSBudWxsIHx8IHNvcnRlZEJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3J0ZWRCeS5kaXJlY3Rpb24pKSxcbiAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93X190ZXh0XCIgfSwgdGl0bGUpKSkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=