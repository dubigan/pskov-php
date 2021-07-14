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
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Row */ "./assets/components/lib/Row.tsx");
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Row__WEBPACK_IMPORTED_MODULE_17__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_19__["Button"], {
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
})(["color:#0d6efd;border-color:#0d6efd;&.active{color:white;background-color:#0d6efd;border-color:#0d6efd;}&:hover{color:#fff;background-color:#0d6efd;}"]);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L3VzZUxpc3RGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQuZWxlbWVudHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Qb3J0YWwvUG9ydGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Ub29sdGlwLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFydHMvVGhDZWxsLnRzeCJdLCJuYW1lcyI6WyJEZWxldGVEaWFsb2ciLCJwcm9wcyIsImhhbmRsZUNsb3NlIiwiZSIsImRlbGV0ZUl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldEl0ZW1JbmZvIiwiaXRlbUluZm8iLCJpdGVtVG9EZWxldGUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsIndpZHRoIiwiY2xvc2UiLCJvbkNsb3NlIiwiTW9kYWxIZWFkZXIiLCJNb2RhbFRpdGxlIiwiTW9kYWxCb2R5IiwiTW9kYWxCb2R5TmFtZU9mSXRlbSIsIm5hbWVPZkl0ZW0iLCJNb2RhbEJvZHlOYW1lIiwiTW9kYWxGb290ZXIiLCJCdG5TZWNvbmRhcnkiLCJzaGFkb3ciLCJvbkNsaWNrIiwiQnRuRGFuZ2VyIiwic3R5bGVkIiwiZGl2IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiTGlzdE9mSXRlbXMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0Q29udGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaG93RGVsZXRlRGlhbG9nIiwic2V0U2hvd0RlbGV0ZURpYWxvZyIsInVuZGVmaW5lZCIsInNldEl0ZW1Ub0RlbGV0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJmdW5jdGlvbnMiLCJnZXREZWZhdWx0U29ydGVkQnkiLCJzb3J0ZWRCeSIsInNldFNvcnRlZEJ5IiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJnZXRJdGVtcyIsImFwaSIsInVybCIsInNvcnRlZF9ieSIsIm93bmVyIiwiX2EiLCJyZXMiLCJkYXRhIiwic2V0QWxlcnRzIiwiZ2V0RXJyb3JzIiwiX2IiLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsImdldEl0ZW1CeUlkIiwiaWQiLCJmaWx0ZXIiLCJpdGVtIiwiYnRuU29ydENsaWNrIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYnRuRGVsQ2xpY2siLCJOdW1iZXIiLCJidG5BZGRDbGljayIsImF4aW9zIiwicG9zdCIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsInB1c2giLCJidG5FZGl0Q2xpY2siLCJpdGVtX3BrIiwiYnRuX2VkaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ2V0SXRlbUlkIiwiY29uZmlybSIsImJ0bl9kZWwiLCJfYyIsInR5cGUiLCJtZXNzYWdlIiwiZ2V0QnV0dG9ucyIsIlJvdyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJUb29sdGlwQ29udGVudCIsImdldEFkZEJ1dHRvbiIsImFkZEJ1dHRvbiIsIkZyYWdtZW50IiwiQWxlcnRzIiwid2l0aEFsZXJ0cyIsIkxvYWRlciIsImdldFRhYmxlIiwiY2FycyIsInRvb2x0aXBQbGFjZSIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwiam9pbiIsIlRhYmxlIiwiVGhDZWxsIiwidGl0bGUiLCJpbmRleCIsIm1hcCIsIm8iLCJrZXkiLCJwcm9kdWN0aW9uIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJzdHlsZSIsIlN0cmluZyIsIm93bmVycyIsImxhc3RfbmFtZSIsInBhdHJvbnltaWMiLCJnZW5kZXIiLCJhZ2UiLCJ1c2VMaXN0RnVuY3Rpb25zIiwibGlzdFR5cGUiLCJCQVNFX1VSTCIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJidXR0b24iLCJCdG5QcmltYXJ5IiwiQnRuT3V0bGluZVByaW1hcnkiLCJ0b29sdGlwIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsIkNlbnRlciIsIk1vZGFsQ29udGFpbmVyIiwiekluZGV4IiwiTW9kYWxDb21wb25lbnRJbm5lciIsIm5CciIsIk1vZGFsQ29tcG9uZW50IiwibW9iTWFyZyIsImhhbmRsZUNvbnRhaW5lckNsaWNrIiwiY3VycmVudFRhcmdldCIsIlBvcnRhbCIsIlN0eWxlZCIsInVzZU1lbW8iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUG9ydGFsIiwiQ29tcG9uZW50IiwiVG9vbHRpcCIsInRpbWVvdXQiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImFsZXJ0cyIsInVzZUFsZXJ0cyIsImRlZlRpbWVvdXQiLCJzaG93QWxlcnRzIiwidmlldyIsIm1lc3NhZ2VzIiwibGVuZ3RoIiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsImRlbGF5Iiwid2FpdCIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJzaG93IiwiZ2V0S2V5VmFsdWUiLCJvYmoiLCJrZXlzIiwiZGlyIiwiZ29CYWNrIiwiZGlnaXRzT25seSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJ1cEFycm93IiwiZG93bkFycm93IiwiYXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkIsUUFBSUEsQ0FBSixFQUNJRixLQUFLLENBQUNHLFVBQU4sQ0FBaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUExQjtBQUNKLFdBQU9MLEtBQUssQ0FBQ0csVUFBTixDQUFpQixLQUFqQixDQUFQO0FBQ0gsR0FKRDs7QUFLQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFdBQU9OLEtBQUssQ0FBQ08sUUFBTixJQUFrQlAsS0FBSyxDQUFDTyxRQUFOLENBQWVQLEtBQUssQ0FBQ1EsWUFBckIsQ0FBekI7QUFDSCxHQUZEOztBQUdBLHNCQUFRQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyw2REFBcEIsRUFBMkI7QUFBRUMsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQUssRUFBRSxJQUF2QjtBQUE2QkMsV0FBTyxFQUFFZCxLQUFLLENBQUNjO0FBQTVDLEdBQTNCLGVBQ0pMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JLLG1FQUFwQixFQUFpQyxJQUFqQyxlQUNJTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CTSxrRUFBcEIsRUFBZ0MsSUFBaEMsRUFBc0MsNENBQXRDLENBREosQ0FESSxlQUdKUCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBSEksZUFJSkQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQk8saUVBQXBCLEVBQStCLElBQS9CLGVBQ0lSLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JRLG1CQUFwQixFQUF5QyxJQUF6QyxFQUNJbEIsS0FBSyxDQUFDbUIsVUFEVixFQUVJLEdBRkosQ0FESixlQUlJViw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CVSxhQUFwQixFQUFtQyxJQUFuQyxFQUF5Q2QsV0FBVyxFQUFwRCxDQUpKLENBSkksZUFTSkcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixDQVRJLGVBVUpELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JXLG1FQUFwQixFQUFpQyxJQUFqQyxlQUNJWiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CWSxzRUFBcEIsRUFBa0M7QUFBRUMsVUFBTSxFQUFFLElBQVY7QUFBZ0JsQixTQUFLLEVBQUUsS0FBdkI7QUFBOEJtQixXQUFPLEVBQUV2QjtBQUF2QyxHQUFsQyxFQUF3RixzQ0FBeEYsQ0FESixlQUVJUSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZSxtRUFBcEIsRUFBK0I7QUFBRUYsVUFBTSxFQUFFLElBQVY7QUFBZ0JsQixTQUFLLEVBQUUsSUFBdkI7QUFBNkJtQixXQUFPLEVBQUV2QjtBQUF0QyxHQUEvQixFQUFvRiw0Q0FBcEYsQ0FGSixDQVZJLENBQVI7QUFhSCxDQXRCRDs7QUF1QkEsSUFBTWlCLG1CQUFtQixHQUFHUSx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUF6Qjs7QUFLQSxJQUFNUCxhQUFhLEdBQUdNLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbURBQW5COztBQUtlNUIsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQSxJQUFJNkIsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWU1QixLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZMEIsQ0FBakIsR0FBcUIxQixLQUFyQixHQUE2QixJQUFJMEIsQ0FBSixDQUFNLFVBQVVHLE9BQVYsRUFBbUI7QUFBRUEsYUFBTyxDQUFDN0IsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUswQixDQUFDLEtBQUtBLENBQUMsR0FBR0ksT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJoQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRWlDLFlBQUksQ0FBQ04sU0FBUyxDQUFDTyxJQUFWLENBQWVsQyxLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPSCxDQUFQLEVBQVU7QUFBRWtDLGNBQU0sQ0FBQ2xDLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNzQyxRQUFULENBQWtCbkMsS0FBbEIsRUFBeUI7QUFBRSxVQUFJO0FBQUVpQyxZQUFJLENBQUNOLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUIzQixLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT0gsQ0FBUCxFQUFVO0FBQUVrQyxjQUFNLENBQUNsQyxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTb0MsSUFBVCxDQUFjRyxNQUFkLEVBQXNCO0FBQUVBLFlBQU0sQ0FBQ0MsSUFBUCxHQUFjUixPQUFPLENBQUNPLE1BQU0sQ0FBQ3BDLEtBQVIsQ0FBckIsR0FBc0M0QixLQUFLLENBQUNRLE1BQU0sQ0FBQ3BDLEtBQVIsQ0FBTCxDQUFvQnNDLElBQXBCLENBQXlCTixTQUF6QixFQUFvQ0csUUFBcEMsQ0FBdEM7QUFBc0Y7O0FBQzlHRixRQUFJLENBQUMsQ0FBQ04sU0FBUyxHQUFHQSxTQUFTLENBQUNZLEtBQVYsQ0FBZ0JmLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFMsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzdDLEtBQUQsRUFBVztBQUMzQixNQUFNOEMsT0FBTyxHQUFHQyx5REFBVSxDQUFDQyxxRUFBRCxDQUExQjs7QUFEMkIsa0JBRUdDLHVEQUFRLENBQUMsS0FBRCxDQUZYO0FBQUE7QUFBQSxNQUVwQkMsT0FGb0I7QUFBQSxNQUVYQyxVQUZXOztBQUFBLG1CQUdxQkYsdURBQVEsQ0FBQyxLQUFELENBSDdCO0FBQUE7QUFBQSxNQUdwQkcsZ0JBSG9CO0FBQUEsTUFHRkMsbUJBSEU7O0FBQUEsbUJBSWFKLHVEQUFRLENBQUNLLFNBQUQsQ0FKckI7QUFBQTtBQUFBLE1BSXBCOUMsWUFKb0I7QUFBQSxNQUlOK0MsZUFKTTs7QUFBQSxtQkFLRE4sdURBQVEsQ0FBQyxFQUFELENBTFA7QUFBQTtBQUFBLE1BS3BCTyxLQUxvQjtBQUFBLE1BS2JDLFFBTGE7O0FBQUEsbUJBTUtSLHVEQUFRLENBQUNqRCxLQUFLLENBQUMwRCxTQUFOLENBQWdCQyxrQkFBaEIsRUFBRCxDQU5iO0FBQUE7QUFBQSxNQU1wQkMsUUFOb0I7QUFBQSxNQU1WQyxXQU5VOztBQU8zQixNQUFNQyxPQUFPLEdBQUdDLG9FQUFVLEVBQTFCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTXBDLFNBQVMsQ0FBQyxLQUFLLENBQU4sRUFBUyxLQUFLLENBQWQsRUFBaUIsS0FBSyxDQUF0Qix1Q0FBeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyRHVCLHdCQUFVLENBQUMsSUFBRCxDQUFWLENBRnFELENBR3JEOztBQUhxRDtBQUFBO0FBS3JDLHFCQUFNYyw2Q0FBRyxDQUFDRCxRQUFKLENBQWFoRSxLQUFLLENBQUMwRCxTQUFOLENBQWdCUSxHQUE3QixFQUFrQztBQUNoREMseUJBQVMsRUFBRVAsUUFEcUM7QUFFaERRLHFCQUFLLEVBQUUsQ0FBQ0MsRUFBRSxHQUFHckUsS0FBSyxDQUFDb0UsS0FBWixNQUF1QixJQUF2QixJQUErQkMsRUFBRSxLQUFLLEtBQUssQ0FBM0MsR0FBK0NBLEVBQS9DLEdBQW9ELENBQUM7QUFGWixlQUFsQyxDQUFOOztBQUxxQztBQUszQ0MsaUJBTDJDO0FBU2pEO0FBQ0FiLHNCQUFRLENBQUNhLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSO0FBVmlEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYWpEekIscUJBQU8sQ0FBQzBCLFNBQVIsQ0FBa0JDLG1FQUFTLENBQUMsQ0FBQ0MsRUFBRSxHQUFHLFlBQUlDLFFBQVYsTUFBd0IsSUFBeEIsSUFBZ0NELEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ0gsSUFBN0QsQ0FBM0I7O0FBYmlEO0FBQUE7QUFnQmpEcEIsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFoQmlEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXpCLEVBQWY7QUFBQSxHQUFqQjs7QUFtQkF5QiwwREFBUyxDQUFDLFlBQU07QUFDWlosWUFBUSxHQURJLENBRVo7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUFZLDBEQUFTLENBQUMsWUFBTTtBQUNaWixZQUFRO0FBQ1gsR0FGUSxFQUVOLENBQUNKLFFBQUQsRUFBVzVELEtBQUssQ0FBQ29FLEtBQWpCLENBRk0sQ0FBVDs7QUFHQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQVE7QUFDeEIsV0FBT3RCLEtBQUssQ0FBQ3VCLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFJLENBQUNGLEVBQU4sS0FBYSxDQUFDQSxFQUF4QjtBQUFBLEtBQWIsRUFBeUMsQ0FBekMsQ0FBUDtBQUNILEdBRkQ7O0FBR0EsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQy9FLENBQUQsRUFBTztBQUN4QixRQUFNZ0YsV0FBVyxHQUFHaEYsQ0FBQyxDQUFDRSxNQUFGLENBQVMwRSxFQUE3QixDQUR3QixDQUV4Qjs7QUFDQSxRQUFJLENBQUNJLFdBQUwsRUFDSTs7QUFDSixRQUFJdEIsUUFBUSxDQUFDdUIsSUFBVCxLQUFrQkQsV0FBdEIsRUFBbUM7QUFDL0JyQixpQkFBVyxDQUFDO0FBQ1JzQixZQUFJLEVBQUVELFdBREU7QUFFUkUsaUJBQVMsRUFBRTtBQUZILE9BQUQsQ0FBWDtBQUlILEtBTEQsTUFNSztBQUNELFVBQU1BLFNBQVMsR0FBR3hCLFFBQVEsQ0FBQ3dCLFNBQVQsS0FBdUIsTUFBdkIsR0FBZ0MsS0FBaEMsR0FBd0MsTUFBMUQ7QUFDQXZCLGlCQUFXLENBQUN3QixNQUFNLENBQUNDLE1BQVAsQ0FBY0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjFCLFFBQWxCLENBQWQsRUFBMkM7QUFBRXdCLGlCQUFTLEVBQUVBO0FBQWIsT0FBM0MsQ0FBRCxDQUFYO0FBQ0g7QUFDSixHQWZEOztBQWdCQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDckYsQ0FBRCxFQUFPO0FBQ3ZCLFFBQU04RSxJQUFJLEdBQUdILFdBQVcsQ0FBQ1csTUFBTSxDQUFDdEYsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBUCxDQUF4QixDQUR1QixDQUV2Qjs7QUFDQWtELG1CQUFlLENBQUN5QixJQUFELENBQWY7QUFDQTNCLHVCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSCxHQUxEOztBQU1BLE1BQU1vQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDdkYsQ0FBRDtBQUFBLFdBQU8wQixTQUFTLENBQUMsS0FBSyxDQUFOLEVBQVMsS0FBSyxDQUFkLEVBQWlCLEtBQUssQ0FBdEIsdUNBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFekMscUJBQU04RCw2Q0FBSyxDQUFDQyxJQUFOLENBQVczRixLQUFLLENBQUMwRCxTQUFOLENBQWdCUSxHQUEzQixFQUFnQztBQUFFMEIsdUJBQU8sRUFBRTtBQUFYLGVBQWhDLENBQU47O0FBRnlDO0FBRS9DdEIsaUJBRitDOztBQUdyRCxrQkFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNzQixRQUFiLEVBQXVCO0FBQ25CO0FBQ0EvQix1QkFBTyxDQUFDZ0MsSUFBUixDQUFheEIsR0FBRyxDQUFDQyxJQUFKLENBQVNzQixRQUF0QjtBQUNIOztBQU5vRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNyRC9DLHFCQUFPLENBQUMwQixTQUFSLENBQWtCQyxtRUFBUyxDQUFDLGFBQUlFLFFBQUosQ0FBYUosSUFBZCxDQUEzQjs7QUFUcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekIsRUFBaEI7QUFBQSxHQUFwQjs7QUFZQSxNQUFNd0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzdGLENBQUQ7QUFBQSxXQUFPMEIsU0FBUyxDQUFDLEtBQUssQ0FBTixFQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLENBQXRCLHVDQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcERvRSxxQkFEb0QsR0FDMUM5RixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FEaUMsRUFFMUQ7O0FBRjBEO0FBQUE7QUFJMUMscUJBQU1xRiw2Q0FBSyxDQUFDQyxJQUFOLENBQVczRixLQUFLLENBQUMwRCxTQUFOLENBQWdCUSxHQUEzQixFQUFnQztBQUM5QytCLHdCQUFRLEVBQUUsRUFEb0M7QUFFOUNELHVCQUFPLEVBQUVBLE9BRnFDO0FBRzlDOUIsbUJBQUcsRUFBRWdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFIeUIsZUFBaEMsQ0FBTjs7QUFKMEM7QUFJaEQ5QixpQkFKZ0Q7O0FBU3RELGtCQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU3NCLFFBQWIsRUFBdUI7QUFDbkI7QUFDQTtBQUNBL0IsdUJBQU8sQ0FBQ2dDLElBQVIsQ0FBYXhCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTc0IsUUFBdEI7QUFDSDs7QUFicUQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQnREO0FBQ0EvQyxxQkFBTyxDQUFDMEIsU0FBUixDQUFrQkMsbUVBQVMsQ0FBQyxhQUFJRSxRQUFKLENBQWFKLElBQWQsQ0FBM0I7O0FBakJzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6QixFQUFoQjtBQUFBLEdBQXJCOztBQW9CQSxNQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3JCLElBQUQ7QUFBQSxXQUFXQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0YsRUFBUixHQUFhLENBQUMsQ0FBN0I7QUFBQSxHQUFsQjs7QUFDQSxNQUFNM0UsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ21HLE9BQUQ7QUFBQSxXQUFhMUUsU0FBUyxDQUFDLEtBQUssQ0FBTixFQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLENBQXRCLHVDQUF5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTlEeUIsaUNBQW1CLENBQUMsS0FBRCxDQUFuQjs7QUFGOEQsb0JBRzFEaUQsT0FBTyxLQUFLLE1BSDhDO0FBQUE7QUFBQTtBQUFBOztBQUkxRG5ELHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBSjBEO0FBQUE7QUFNMUMscUJBQU11Qyw2Q0FBSyxDQUFDQyxJQUFOLENBQVczRixLQUFLLENBQUMwRCxTQUFOLENBQWdCUSxHQUEzQixFQUFnQztBQUM5Q0MseUJBQVMsRUFBRVAsUUFEbUM7QUFFOUMyQyx1QkFBTyxFQUFFLEVBRnFDO0FBRzlDUCx1QkFBTyxFQUFFSyxTQUFTLENBQUM3RixZQUFELENBSDRCO0FBSTlDNEQscUJBQUssRUFBRSxDQUFDb0MsRUFBRSxHQUFHeEcsS0FBSyxDQUFDb0UsS0FBWixNQUF1QixJQUF2QixJQUErQm9DLEVBQUUsS0FBSyxLQUFLLENBQTNDLEdBQStDQSxFQUEvQyxHQUFvRCxDQUFDO0FBSmQsZUFBaEMsQ0FBTjs7QUFOMEM7QUFNaERsQyxpQkFOZ0Q7QUFZdERiLHNCQUFRLENBQUNhLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSO0FBQ0F6QixxQkFBTyxDQUFDMEIsU0FBUixDQUFrQixDQUNkO0FBQ0lpQyxvQkFBSSxFQUFFLFNBRFY7QUFFSUMsdUJBQU8sWUFBSzFHLEtBQUssQ0FBQzBELFNBQU4sQ0FBZ0J2QyxVQUFyQjtBQUZYLGVBRGMsQ0FBbEI7QUFic0Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQnREMkIscUJBQU8sQ0FBQzBCLFNBQVIsQ0FBa0JDLG1FQUFTLENBQUMsYUFBSUUsUUFBSixDQUFhSixJQUFkLENBQTNCOztBQXJCc0Q7QUFBQTtBQXdCdERwQix3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQXhCc0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekIsRUFBdEI7QUFBQSxHQUFuQjs7QUE0QkEsTUFBTXdELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUM3QixFQUFELEVBQVE7QUFDdkIsd0JBQVFyRSw2Q0FBSyxDQUFDQyxhQUFOLENBQW9Ca0csNkNBQXBCLEVBQXlCLElBQXpCLGVBQ0puRyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CbUcsMERBQXBCLEVBQTRCO0FBQUV4RyxXQUFLLEVBQUV5RSxFQUFUO0FBQWFnQyxhQUFPLEVBQUUsU0FBdEI7QUFBaUNDLGVBQVMsRUFBRSxxQkFBNUM7QUFBbUV2RixhQUFPLEVBQUV1RTtBQUE1RSxLQUE1QixlQUNJdEYsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQnNHLDREQUFwQixFQUFvQztBQUFFRCxlQUFTLEVBQUU7QUFBYixLQUFwQyxFQUE2RixzRkFBN0YsQ0FESixFQUVJLFFBRkosQ0FESSxlQUlKdEcsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQm1HLDBEQUFwQixFQUE0QjtBQUFFeEcsV0FBSyxFQUFFeUUsRUFBVDtBQUFhZ0MsYUFBTyxFQUFFLFFBQXRCO0FBQWdDQyxlQUFTLEVBQUUsbUNBQTNDO0FBQWdGdkYsYUFBTyxFQUFFK0Q7QUFBekYsS0FBNUIsZUFDSTlFLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JzRyw0REFBcEIsRUFBb0M7QUFBRUQsZUFBUyxFQUFFO0FBQWIsS0FBcEMsRUFBNkYsa0RBQTdGLENBREosRUFFSSxNQUZKLENBSkksQ0FBUjtBQU9ILEdBUkQ7O0FBU0EsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFJakgsS0FBSyxDQUFDMEQsU0FBTixDQUFnQndELFNBQXBCLEVBQ0ksb0JBQVF6Ryw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CbUcsMERBQXBCLEVBQTRCO0FBQUVDLGFBQU8sRUFBRSxTQUFYO0FBQXNCQyxlQUFTLEVBQUUscUNBQWpDO0FBQXdFdkYsYUFBTyxFQUFFaUU7QUFBakYsS0FBNUIsZUFDSmhGLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JzRyw0REFBcEIsRUFBb0MsSUFBcEMsRUFBMEMsd0xBQTFDLENBREksRUFFSixHQUZJLENBQVI7QUFHSix3QkFBT3ZHLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDZDQUFLLENBQUMwRyxRQUExQixFQUFvQyxJQUFwQyxDQUFQO0FBQ0gsR0FORDs7QUFPQSxzQkFBUTFHLDZDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsZUFDSkQsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQjBHLDBEQUFwQixFQUE0QjtBQUFFQyxjQUFVLEVBQUVySCxLQUFLLENBQUNxSDtBQUFwQixHQUE1QixDQURJLEVBRUpqRSxnQkFBZ0IsaUJBQUszQyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CWCxtRUFBcEIsRUFBa0M7QUFBRW9CLGNBQVUsRUFBRW5CLEtBQUssQ0FBQzBELFNBQU4sQ0FBZ0J2QyxVQUE5QjtBQUEwQ1gsZ0JBQVksRUFBRUEsWUFBeEQ7QUFBc0VMLGNBQVUsRUFBRUEsVUFBbEY7QUFBOEZJLFlBQVEsRUFBRVAsS0FBSyxDQUFDMEQsU0FBTixDQUFnQm5ELFFBQXhIO0FBQWtJTyxXQUFPLEVBQUU7QUFBQSxhQUFNdUMsbUJBQW1CLENBQUMsS0FBRCxDQUF6QjtBQUFBO0FBQTNJLEdBQWxDLENBRmpCLEVBR0pILE9BQU8sZ0JBQUd6Qyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CNEcsZ0RBQXBCLEVBQTRCLElBQTVCLENBQUgsR0FBdUN0SCxLQUFLLENBQUMwRCxTQUFOLENBQWdCNkQsUUFBaEIsQ0FBeUIvRCxLQUF6QixFQUFnQ21ELFVBQWhDLEVBQTRDMUIsWUFBNUMsRUFBMERyQixRQUExRCxDQUgxQyxFQUlKcUQsWUFBWSxFQUpSLENBQVI7QUFLSCxDQTdJRDs7QUE4SWVwRSwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0EsSUFBTWEsU0FBUyxHQUFHO0FBQ2Q4RCxNQUFJLEVBQUU7QUFDRnRELE9BQUcsRUFBRSxZQURIO0FBRUZ1RCxnQkFBWSxFQUFFLFFBRlo7QUFHRnRHLGNBQVUsRUFBRSxZQUhWO0FBSUYrRixhQUFTLEVBQUUsS0FKVDtBQUtGM0csWUFBUSxFQUFFLGtCQUFDeUUsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBSSxDQUFDMEMsWUFBTixFQUFvQjFDLElBQUksQ0FBQzJDLEtBQXpCLEVBQWdDQyxJQUFoQyxDQUFxQyxHQUFyQyxDQUFWO0FBQUEsS0FMUjtBQU1GTCxZQUFRLEVBQUUsa0JBQUMvRCxLQUFELEVBQVFtRCxVQUFSLEVBQW9CbkYsT0FBcEIsRUFBNkJvQyxRQUE3QjtBQUFBLDBCQUEyQ25ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JtSCxnREFBcEIsRUFBMkI7QUFBRWQsaUJBQVMsRUFBRTtBQUFiLE9BQTNCLGVBQ2pEdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixPQUFwQixFQUE2QixJQUE3QixlQUNJRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLGVBQ0lELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxjQUFOO0FBQXNCaUQsYUFBSyxFQUFFLGdGQUE3QjtBQUErR0MsYUFBSyxFQUFFLENBQXRIO0FBQXlIeEcsZUFBTyxFQUFFQSxPQUFsSTtBQUEySW9DLGdCQUFRLEVBQUVBO0FBQXJKLE9BQTVCLENBREosZUFFSW5ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxPQUFOO0FBQWVpRCxhQUFLLEVBQUUsc0NBQXRCO0FBQThEQyxhQUFLLEVBQUUsQ0FBckU7QUFBd0V4RyxlQUFPLEVBQUVBLE9BQWpGO0FBQTBGb0MsZ0JBQVEsRUFBRUE7QUFBcEcsT0FBNUIsQ0FGSixlQUdJbkQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm9ILG9EQUFwQixFQUE0QjtBQUFFaEQsVUFBRSxFQUFFLFlBQU47QUFBb0JpRCxhQUFLLEVBQUUscUVBQTNCO0FBQWtHQyxhQUFLLEVBQUUsQ0FBekc7QUFBNEd4RyxlQUFPLEVBQUVBLE9BQXJIO0FBQThIb0MsZ0JBQVEsRUFBRUE7QUFBeEksT0FBNUIsQ0FISixlQUlJbkQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm9ILG9EQUFwQixFQUE0QjtBQUFFaEQsVUFBRSxFQUFFLE9BQU47QUFBZWlELGFBQUssRUFBRSwwQkFBdEI7QUFBa0RDLGFBQUssRUFBRSxDQUF6RDtBQUE0RHhHLGVBQU8sRUFBRUEsT0FBckU7QUFBOEVvQyxnQkFBUSxFQUFFQTtBQUF4RixPQUE1QixDQUpKLGVBS0luRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0gsb0RBQXBCLEVBQTRCO0FBQUVoRCxVQUFFLEVBQUUsT0FBTjtBQUFlaUQsYUFBSyxFQUFFLGtEQUF0QjtBQUEwRUMsYUFBSyxFQUFFLENBQWpGO0FBQW9GeEcsZUFBTyxFQUFFQSxPQUE3RjtBQUFzR29DLGdCQUFRLEVBQUVBO0FBQWhILE9BQTVCLENBTEosZUFNSW5ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxTQUFOO0FBQWlCaUQsYUFBSyxFQUFFLHNDQUF4QjtBQUFnRUMsYUFBSyxFQUFFLENBQXZFO0FBQTBFeEcsZUFBTyxFQUFFQSxPQUFuRjtBQUE0Rm9DLGdCQUFRLEVBQUVBO0FBQXRHLE9BQTVCLENBTkosZUFPSW5ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FQSixDQURKLENBRGlELGVBVWpERCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE9BQXBCLEVBQTZCLElBQTdCLEVBQW1DOEMsS0FBSyxDQUFDeUUsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUYsS0FBSixFQUFjO0FBQ3ZELDRCQUFRdkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFFeUgsYUFBRyxFQUFFSDtBQUFQLFNBQTFCLGVBQ0p2SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDUixZQUFsQyxDQURJLGVBRUpqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDUCxLQUFsQyxDQUZJLGVBR0psSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDRSxVQUFsQyxDQUhJLGVBSUozSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDRyxLQUFsQyxDQUpJLGVBS0o1SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDSSxLQUFsQyxDQUxJLGVBTUo3SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDSyxPQUFsQyxDQU5JLGVBT0o5SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCO0FBQUU4SCxlQUFLLEVBQUU7QUFBRTVILGlCQUFLLEVBQUUsS0FBSztBQUFkO0FBQVQsU0FBMUIsRUFBNEQrRixVQUFVLENBQUM4QixNQUFNLENBQUNQLENBQUMsQ0FBQ3BELEVBQUgsQ0FBUCxDQUF0RSxDQVBJLENBQVI7QUFRSCxPQVRrQyxDQUFuQyxDQVZpRCxDQUEzQztBQUFBLEtBTlI7QUEwQkZuQixzQkFBa0IsRUFBRTtBQUFBLGFBQU87QUFDdkJ3QixZQUFJLEVBQUUsT0FEaUI7QUFFdkJDLGlCQUFTLEVBQUU7QUFGWSxPQUFQO0FBQUE7QUExQmxCLEdBRFE7QUFnQ2RzRCxRQUFNLEVBQUU7QUFDSnhFLE9BQUcsRUFBRSxjQUREO0FBRUp1RCxnQkFBWSxFQUFFLFFBRlY7QUFHSnRHLGNBQVUsRUFBRSxjQUhSO0FBSUorRixhQUFTLEVBQUUsSUFKUDtBQUtKM0csWUFBUSxFQUFFLGtCQUFDeUUsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBSSxDQUFDMkQsU0FBTixFQUFpQjNELElBQUksQ0FBQ0csSUFBdEIsRUFBNEJILElBQUksQ0FBQzRELFVBQWpDLEVBQTZDaEIsSUFBN0MsQ0FBa0QsR0FBbEQsQ0FBVjtBQUFBLEtBTE47QUFNSkwsWUFBUSxFQUFFLGtCQUFDL0QsS0FBRCxFQUFRbUQsVUFBUixFQUFvQm5GLE9BQXBCLEVBQTZCb0MsUUFBN0IsRUFBMEM7QUFDaEQsMEJBQVFuRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CbUgsZ0RBQXBCLEVBQTJCO0FBQUVkLGlCQUFTLEVBQUU7QUFBYixPQUEzQixlQUNKdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixPQUFwQixFQUE2QixJQUE3QixlQUNJRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLGVBQ0lELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxXQUFOO0FBQW1CaUQsYUFBSyxFQUFFLDRDQUExQjtBQUF3RUMsYUFBSyxFQUFFLENBQS9FO0FBQWtGeEcsZUFBTyxFQUFFQSxPQUEzRjtBQUFvR29DLGdCQUFRLEVBQUVBO0FBQTlHLE9BQTVCLENBREosZUFFSW5ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxNQUFOO0FBQWNpRCxhQUFLLEVBQUUsb0JBQXJCO0FBQTJDQyxhQUFLLEVBQUUsQ0FBbEQ7QUFBcUR4RyxlQUFPLEVBQUVBLE9BQTlEO0FBQXVFb0MsZ0JBQVEsRUFBRUE7QUFBakYsT0FBNUIsQ0FGSixlQUdJbkQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFFb0UsVUFBRSxFQUFFO0FBQU4sT0FBMUIsRUFBZ0Qsa0RBQWhELENBSEosZUFJSXJFLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxRQUFOO0FBQWdCaUQsYUFBSyxFQUFFLG9CQUF2QjtBQUE2Q0MsYUFBSyxFQUFFLENBQXBEO0FBQXVEeEcsZUFBTyxFQUFFQSxPQUFoRTtBQUF5RW9DLGdCQUFRLEVBQUVBO0FBQW5GLE9BQTVCLENBSkosZUFLSW5ELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSCxvREFBcEIsRUFBNEI7QUFBRWhELFVBQUUsRUFBRSxLQUFOO0FBQWFpRCxhQUFLLEVBQUUsNENBQXBCO0FBQWtFQyxhQUFLLEVBQUUsQ0FBekU7QUFBNEV4RyxlQUFPLEVBQUVBLE9BQXJGO0FBQThGb0MsZ0JBQVEsRUFBRUE7QUFBeEcsT0FBNUIsQ0FMSixlQU1JbkQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixDQU5KLENBREosQ0FESSxlQVNKRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE9BQXBCLEVBQTZCLElBQTdCLEVBQW1DOEMsS0FBSyxDQUFDeUUsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUYsS0FBSixFQUFjO0FBQ3ZELDRCQUFRdkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFFeUgsYUFBRyxFQUFFSDtBQUFQLFNBQTFCLGVBQ0p2SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDUyxTQUFsQyxDQURJLGVBRUpsSSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDd0gsQ0FBQyxDQUFDL0MsSUFBbEMsQ0FGSSxlQUdKMUUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQ3dILENBQUMsQ0FBQ1UsVUFBbEMsQ0FISSxlQUlKbkksNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQ3dILENBQUMsQ0FBQ1csTUFBRixLQUFhLEdBQWIsR0FBbUIsS0FBbkIsR0FBMkIsS0FBM0QsQ0FKSSxlQUtKcEksNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQ3dILENBQUMsQ0FBQ1ksR0FBbEMsQ0FMSSxlQU1KckksNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFFOEgsZUFBSyxFQUFFO0FBQUU1SCxpQkFBSyxFQUFFLE1BQU07QUFBZjtBQUFULFNBQTFCLEVBQTREK0YsVUFBVSxDQUFDOEIsTUFBTSxDQUFDUCxDQUFDLENBQUNwRCxFQUFILENBQVAsQ0FBdEUsQ0FOSSxDQUFSO0FBT0gsT0FSa0MsQ0FBbkMsQ0FUSSxDQUFSO0FBa0JILEtBekJHO0FBMEJKbkIsc0JBQWtCLEVBQUU7QUFBQSxhQUFPO0FBQ3ZCd0IsWUFBSSxFQUFFLFdBRGlCO0FBRXZCQyxpQkFBUyxFQUFFO0FBRlksT0FBUDtBQUFBO0FBMUJoQjtBQWhDTSxDQUFsQjtBQWdFTyxJQUFNMkQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxRQUFELEVBQWM7QUFDMUMsU0FBT3RGLFNBQVMsQ0FBQ3NGLFFBQUQsQ0FBaEI7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ25FUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlO0FBQUEsc0JBQU92SSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVxRyxhQUFTLEVBQUU7QUFBYixHQUEzQixlQUNsQnRHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRXFHLGFBQVMsRUFBRTtBQUFiLEdBQTNCLENBRGtCLENBQVA7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0RBOztBQUNBLElBQU1rQyxRQUFRLEdBQUcseUJBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHeEQsNENBQUssQ0FBQ3lELE1BQU4sQ0FBYTtBQUMxQkMsU0FBTyxFQUFFSCxRQURpQjtBQUUxQkksUUFBTSxFQUFFLE1BRmtCO0FBRzFCQyxTQUFPLEVBQUU7QUFDTCxvQkFBZ0I7QUFEWDtBQUhpQixDQUFiLENBQWpCO0FBT0EsSUFBTXJGLEdBQUcsR0FBRztBQUNSRCxVQUFRLEVBQUUsa0JBQUNFLEdBQUQsRUFBTXFGLE1BQU4sRUFBaUI7QUFDdkI7QUFDQSxXQUFPTCxRQUFRLENBQUM7QUFDWmhGLFNBQUcsRUFBSEEsR0FEWTtBQUVaSyxVQUFJLEVBQUVjLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JpRSxNQUFsQjtBQUZNLEtBQUQsQ0FBZjtBQUlIO0FBUE8sQ0FBWjtBQVNldEYsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ08sSUFBTTRDLE1BQU0sR0FBR25GLHlEQUFNLENBQUM4SCxNQUFWO0FBQUE7QUFBQTtBQUFBLHlrQkFvQkgsVUFBQXhKLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUN1QixNQUFOLEdBQWUsZ0NBQWYsR0FBa0QsTUFBdkQ7QUFBQSxDQXBCRixFQXFCUixVQUFBdkIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1ksS0FBVjtBQUFBLENBckJHLENBQVo7QUE4QkEsSUFBTTZJLFVBQVUsR0FBRy9ILGlFQUFNLENBQUNtRixNQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUVBQWhCO0FBS0EsSUFBTXZGLFlBQVksR0FBR0ksaUVBQU0sQ0FBQ21GLE1BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpRUFBbEI7QUFLQSxJQUFNcEYsU0FBUyxHQUFHQyxpRUFBTSxDQUFDbUYsTUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlFQUFmO0FBS0EsSUFBTTZDLGlCQUFpQixHQUFHaEksaUVBQU0sQ0FBQ21GLE1BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0SkFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDUDtBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTJFO0FBQUEsTUFBeEU4QyxPQUF3RSxRQUF4RUEsT0FBd0U7QUFBQSxNQUEvRDdFLEVBQStELFFBQS9EQSxFQUErRDtBQUFBLE1BQTNEaUMsU0FBMkQsUUFBM0RBLFNBQTJEO0FBQUEsTUFBaEQ1QixJQUFnRCxRQUFoREEsSUFBZ0Q7QUFBQSxNQUExQzlFLEtBQTBDLFFBQTFDQSxLQUEwQztBQUFBLE1BQW5DbUIsT0FBbUMsUUFBbkNBLE9BQW1DO0FBQUEsTUFBMUJvSSxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCO0FBQzdGLHNCQUFRcEosNENBQUssQ0FBQ0MsYUFBTixDQUFvQixRQUFwQixFQUE4QjtBQUFFcUgsU0FBSyxFQUFFNEIsT0FBVDtBQUFrQjdFLE1BQUUsRUFBRUEsRUFBdEI7QUFBMEJpQyxhQUFTLEVBQUVBLFNBQVMsR0FBR0EsU0FBSCxHQUFlLEVBQTdEO0FBQWlFNUIsUUFBSSxFQUFFQSxJQUF2RTtBQUE2RTlFLFNBQUssRUFBRUEsS0FBcEY7QUFBMkZtQixXQUFPLEVBQUVBLE9BQXBHO0FBQTZHb0ksWUFBUSxFQUFFQTtBQUF2SCxHQUE5QixFQUFpS0MsUUFBakssQ0FBUjtBQUNILENBRk07QUFHUGhELE1BQU0sQ0FBQ2lELFlBQVAsR0FBc0I7QUFDbEIvQyxXQUFTLEVBQUUsYUFETztBQUVsQjVCLE1BQUksRUFBRSxLQUZZO0FBR2xCeUUsVUFBUSxFQUFFLEtBSFE7QUFJbEJELFNBQU8sRUFBRSxFQUpTO0FBS2xCN0UsSUFBRSxFQUFFLEVBTGM7QUFNbEJ6RSxPQUFLLEVBQUUsRUFOVztBQU9sQndKLFVBQVEsRUFBRTtBQVBRLENBQXRCLEMsQ0FTQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTyxJQUFNRSxNQUFNLEdBQUdySSx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJHQUFaLEMsQ0FPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNcUksY0FBYyxHQUFHdEkseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1SkFTZCxVQUFBM0IsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ2lLLE1BQVY7QUFBQSxDQVRTLENBQXBCO0FBWUEsSUFBTUMsbUJBQW1CLEdBQUd4SSx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFKQUViLFVBQUEzQixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDbUssR0FBTixHQUFZLEdBQVosR0FBa0IsS0FBdkI7QUFBQSxDQUZRLENBQXpCO0FBU0EsSUFBTUMsY0FBYyxHQUFHMUkseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrWEFNaEIsVUFBQTNCLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNZLEtBQU4sR0FBY1osS0FBSyxDQUFDWSxLQUFwQixHQUE0QixHQUFqQztBQUFBLENBTlcsRUFzQmIsVUFBQVosS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ3FLLE9BQU4sR0FBZ0IsV0FBaEIsR0FBOEIsV0FBbkM7QUFBQSxDQXRCUSxDQUFwQjtBQXlDQSxJQUFNdEosV0FBVyxHQUFHVyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJGQUFqQjtBQVFBLElBQU1YLFVBQVUsR0FBR1UseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBaEI7QUFPQSxJQUFNVixTQUFTLEdBQUdTLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0pBQWY7QUFZQSxJQUFNTixXQUFXLEdBQUdLLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0tBQWpCLEM7Ozs7Ozs7Ozs7OztBQzNHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLElBQU1oQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUEwRTtBQUFBLE1BQXZFa0osUUFBdUUsUUFBdkVBLFFBQXVFO0FBQUEsTUFBN0QvSSxPQUE2RCxRQUE3REEsT0FBNkQ7QUFBQSxNQUFwREYsS0FBb0QsUUFBcERBLEtBQW9EO0FBQUEseUJBQTdDcUosTUFBNkM7QUFBQSxNQUE3Q0EsTUFBNkMsNEJBQXBDLE9BQW9DO0FBQUEsTUFBM0JJLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCeEosS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWHNKLEdBQVcsUUFBWEEsR0FBVzs7QUFDM0YsTUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDcEssQ0FBRCxFQUFPO0FBQ2hDLFFBQUlBLENBQUMsQ0FBQ3FLLGFBQUYsS0FBb0JySyxDQUFDLENBQUNFLE1BQTFCLEVBQWtDO0FBQzlCVSxhQUFPO0FBQ1Y7QUFDSixHQUpEOztBQUtBLHNCQUFRTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9COEoscURBQXBCLEVBQTRCLElBQTVCLGVBQ0ovSiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK0oscUVBQXBCLEVBQTJDO0FBQUVSLFVBQU0sRUFBRUEsTUFBVjtBQUFrQnpJLFdBQU8sRUFBRThJO0FBQTNCLEdBQTNDLGVBQ0k3Siw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK0oscUVBQXBCLEVBQTJDO0FBQUU3SixTQUFLLEVBQUVBLEtBQVQ7QUFBZ0J5SixXQUFPLEVBQUVBO0FBQXpCLEdBQTNDLGVBQ0k1Siw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK0osMEVBQXBCLEVBQWdEO0FBQUVOLE9BQUcsRUFBRUE7QUFBUCxHQUFoRCxFQUNJdEosS0FBSyxpQkFBS0osNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFcUcsYUFBUyxFQUFFLE9BQWI7QUFBc0J2RixXQUFPLEVBQUVWO0FBQS9CLEdBQTVCLEVBQXNFLE1BQXRFLENBRGQsRUFFSStJLFFBRkosQ0FESixDQURKLENBREksQ0FBUjtBQU1ILENBWk07QUFhQSxJQUFNN0ksVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBa0I7QUFBQSxNQUFmNkksUUFBZSxTQUFmQSxRQUFlO0FBQ3hDLHNCQUFPcEosNENBQUssQ0FBQ0MsYUFBTixDQUFvQitKLGlFQUFwQixFQUF1QyxJQUF2QyxFQUE2Q1osUUFBN0MsQ0FBUDtBQUNILENBRk07QUFHQSxJQUFNOUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBa0I7QUFBQSxNQUFmOEksUUFBZSxTQUFmQSxRQUFlO0FBQ3pDLHNCQUFPcEosNENBQUssQ0FBQ0MsYUFBTixDQUFvQitKLGtFQUFwQixFQUF3QyxJQUF4QyxFQUE4Q1osUUFBOUMsQ0FBUDtBQUNILENBRk07QUFHQSxJQUFNNUksU0FBUyxHQUFHLFNBQVpBLFNBQVksUUFBa0I7QUFBQSxNQUFmNEksUUFBZSxTQUFmQSxRQUFlO0FBQ3ZDLHNCQUFPcEosNENBQUssQ0FBQ0MsYUFBTixDQUFvQitKLGdFQUFwQixFQUFzQyxJQUF0QyxFQUE0Q1osUUFBNUMsQ0FBUDtBQUNILENBRk07QUFHQSxJQUFNeEksV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBa0I7QUFBQSxNQUFmd0ksUUFBZSxTQUFmQSxRQUFlO0FBQ3pDLHNCQUFPcEosNENBQUssQ0FBQ0MsYUFBTixDQUFvQitKLGtFQUFwQixFQUF3QyxJQUF4QyxFQUE4Q1osUUFBOUMsQ0FBUDtBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7O0FDekJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDTyxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBLE1BQWZYLFFBQWUsUUFBZkEsUUFBZTtBQUNwQyxNQUFNbEksR0FBRyxHQUFHK0kscURBQU8sQ0FBQztBQUFBLFdBQU1DLFFBQVEsQ0FBQ2pLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTjtBQUFBLEdBQUQsRUFBc0MsRUFBdEMsQ0FBbkI7QUFDQWtFLHlEQUFTLENBQUMsWUFBTTtBQUNaK0YsWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEJsSixHQUExQjtBQUNBLFdBQU8sWUFBTTtBQUNUZ0osY0FBUSxDQUFDQyxJQUFULENBQWNFLFdBQWQsQ0FBMEJuSixHQUExQjtBQUNILEtBRkQ7QUFHSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsc0JBQU9vSiw4REFBWSxDQUFDbEIsUUFBRCxFQUFXbEksR0FBWCxDQUFuQjtBQUNILENBVE0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1pRixHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpQztBQUFBLE1BQTlCaUQsUUFBOEIsUUFBOUJBLFFBQThCO0FBQUEsTUFBcEI5QyxTQUFvQixRQUFwQkEsU0FBb0I7QUFBQSxNQUFUakMsRUFBUyxRQUFUQSxFQUFTO0FBQ2hELHNCQUFRckUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFcUcsYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZSxLQUFyQztBQUE0Q2pDLE1BQUUsRUFBRUE7QUFBaEQsR0FBM0IsRUFBaUYrRSxRQUFqRixDQUFSO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDtBQUNPLElBQU1oQyxLQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDYTtBQUNMLDBCQUFPcEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixPQUFwQixFQUE2QjtBQUFFcUcsaUJBQVMsRUFBRSxLQUFLL0csS0FBTCxDQUFXK0csU0FBWCxHQUF1QixLQUFLL0csS0FBTCxDQUFXK0csU0FBbEMsR0FBOEM7QUFBM0QsT0FBN0IsRUFBbUcsS0FBSy9HLEtBQUwsQ0FBVzZKLFFBQTlHLENBQVA7QUFDSDtBQUhMOztBQUFBO0FBQUEsRUFBMkJwSiw0Q0FBSyxDQUFDdUssU0FBakMsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTWhFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBNkI7QUFBQSxNQUExQjZDLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCOUMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3ZELHNCQUFPdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFcUcsYUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZTtBQUFyQyxHQUEzQixFQUFzRjhDLFFBQXRGLENBQVA7QUFDSCxDQUZNO0FBR0EsSUFBTW9CLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQTJCO0FBQUEsTUFBeEJ0QixPQUF3QixTQUF4QkEsT0FBd0I7QUFBQSxNQUFmRSxRQUFlLFNBQWZBLFFBQWU7QUFDOUMsc0JBQVFwSiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVxRyxhQUFTLEVBQUU7QUFBYixHQUEzQixlQUNKdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnNHLGNBQXBCLEVBQW9DLElBQXBDLEVBQTBDMkMsT0FBMUMsQ0FESSxFQUVKRSxRQUZJLENBQVI7QUFHSCxDQUpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTs7QUFDQSxJQUFNekMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0M7QUFBQSxNQUFqQzhELE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLDZCQUF4QjdELFVBQXdCO0FBQUEsTUFBeEJBLFVBQXdCLGdDQUFYLElBQVc7O0FBQUEsa0JBQ2pCcEUsdURBQVEsQ0FBQyxLQUFELENBRFM7QUFBQTtBQUFBLE1BQ3hDa0ksT0FEd0M7QUFBQSxNQUMvQkMsVUFEK0I7O0FBRS9DLE1BQU1DLE1BQU0sR0FBR0MsZ0VBQVMsRUFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBbkI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJQyxJQUFJLEdBQUcsS0FBWDtBQURxQixRQUViQyxRQUZhLEdBRUFMLE1BRkEsQ0FFYkssUUFGYSxFQUdyQjtBQUNBOztBQUNBLFFBQUlBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLENBQWxDLEVBQXFDO0FBQ2pDRixVQUFJLEdBQUcsSUFBUDtBQUNIOztBQUNETCxjQUFVLENBQUNLLElBQUQsQ0FBVjtBQUNILEdBVEQ7O0FBVUEsTUFBSSxDQUFDcEUsVUFBTCxFQUNJLG9CQUFPNUcsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNkNBQUssQ0FBQzBHLFFBQTFCLEVBQW9DLElBQXBDLENBQVA7QUFDSnZDLDBEQUFTLENBQUM0RyxVQUFELEVBQWEsQ0FBQ0gsTUFBTSxDQUFDSyxRQUFSLENBQWIsQ0FBVDs7QUFDQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbkYsSUFBRCxFQUFVO0FBQ3RCLFFBQUlvRixDQUFKOztBQUNBLFlBQVFwRixJQUFSO0FBQ0ksV0FBSyxNQUFMO0FBQ0lvRixTQUFDLEdBQUcsTUFBSjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJQSxTQUFDLEdBQUcsU0FBSjtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNJQSxTQUFDLEdBQUcsUUFBSjtBQUNBOztBQUNKO0FBQ0lBLFNBQUMsR0FBRyxRQUFKO0FBWFI7O0FBYUEsV0FBT0EsQ0FBUDtBQUNILEdBaEJEOztBQWlCQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekIsV0FBT0EsS0FBSyxHQUFJQSxLQUFLLENBQUM5RCxHQUFOLENBQVUsVUFBQy9ILENBQUQsRUFBSThILEtBQUosRUFBYztBQUNwQyxVQUFNdkIsSUFBSSxHQUFHbUYsT0FBTyxDQUFDMUwsQ0FBQyxDQUFDdUcsSUFBSCxDQUFwQjtBQUNBLDBCQUFRaEcsNkNBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFcUcsaUJBQVMsRUFBRSxpQkFBaUJOLElBQTlCO0FBQW9DMEIsV0FBRyxFQUFFSDtBQUF6QyxPQUEzQixFQUE2RTlILENBQUMsQ0FBQ3dHLE9BQS9FLENBQVI7QUFDSCxLQUhlLENBQUosZ0JBR0xqRyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDMEcsUUFBMUIsRUFBb0MsSUFBcEMsQ0FIUDtBQUlILEdBTEQ7O0FBTUEsTUFBTTZFLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBVTtBQUNwQixXQUFPLElBQUk5SixPQUFKLENBQVksVUFBQUQsT0FBTztBQUFBLGFBQUlnSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxlQUFNakssT0FBTyxDQUFDLEVBQUQsQ0FBYjtBQUFBLE9BQWxCLEVBQXFDK0osSUFBckMsQ0FBSjtBQUFBLEtBQW5CLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixRQUFJakIsT0FBSixFQUFhO0FBQ1RhLFdBQUssQ0FBQ2QsT0FBTyxHQUFHQSxPQUFILEdBQWFLLFVBQXJCLENBQUwsQ0FBc0M1SSxJQUF0QyxDQUEyQztBQUFBLGVBQU15SSxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQTNDO0FBQ0EsMEJBQU8zSyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDMEcsUUFBMUIsRUFBb0MsSUFBcEMsRUFBMEMyRSxTQUFTLENBQUNULE1BQU0sQ0FBQ0ssUUFBUixDQUFuRCxDQUFQO0FBQ0g7O0FBQ0Qsd0JBQU9qTCw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDMEcsUUFBMUIsRUFBb0MsSUFBcEMsQ0FBUDtBQUNILEdBTkQ7O0FBT0Esc0JBQU8xRyw2Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw2Q0FBSyxDQUFDMEcsUUFBMUIsRUFBb0MsSUFBcEMsRUFBMENpRixJQUFJLEVBQTlDLENBQVA7QUFDSCxDQW5ERDs7QUFvRGVoRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REEsSUFBTWlGLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTW5FLEdBQU47QUFBQSxTQUFjbUUsR0FBRyxDQUFDbkUsR0FBRCxDQUFqQjtBQUFBLENBQXBCOztBQUNPLElBQU0xRCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixJQUFELEVBQVU7QUFDL0IsTUFBSSxDQUFDQSxJQUFMLEVBQ0ksT0FBTyxDQUFDO0FBQUVrQyxRQUFJLEVBQUUsT0FBUjtBQUFpQkMsV0FBTyxFQUFFO0FBQTFCLEdBQUQsQ0FBUDtBQUNKLFNBQU9yQixNQUFNLENBQUNrSCxJQUFQLENBQVloSSxJQUFaLEVBQWtCMEQsR0FBbEIsQ0FBc0IsVUFBQ0UsR0FBRCxFQUFTO0FBQ2xDLFdBQU87QUFBRTFCLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxhQUFPLEVBQUUyRixXQUFXLENBQUM5SCxJQUFELEVBQU80RCxHQUFQO0FBQXJDLEtBQVA7QUFDSCxHQUZNLENBQVA7QUFHSCxDQU5NO0FBT0EsSUFBTXRDLFFBQVEsR0FBRyxrQkFBQy9CLE9BQUQsRUFBVStCLFNBQVY7QUFBQSxNQUFvQjJHLEdBQXBCLHVFQUEwQixFQUExQjtBQUFBLFNBQWlDM0csU0FBUSxJQUFJMkcsR0FBRyxLQUFLLE1BQXBCLEdBQTZCMUksT0FBTyxDQUFDMkksTUFBUixFQUE3QixHQUFnRDNJLE9BQU8sQ0FBQ2dDLElBQVIsQ0FBYUQsU0FBYixDQUFqRjtBQUFBLENBQWpCO0FBQ0EsSUFBTTZHLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN4TSxDQUFELEVBQU87QUFDN0IsTUFBSXlNLFFBQVEsR0FBR3pNLENBQUMsQ0FBQ3lNLFFBQWpCLENBRDZCLENBRTdCOztBQUNBLE1BQUlBLFFBQVEsR0FBRyxFQUFYLElBQWlCQSxRQUFRLEdBQUcsRUFBaEMsRUFBb0M7QUFDaEM7QUFDQXpNLEtBQUMsQ0FBQzBNLGNBQUY7QUFDSDtBQUNKLENBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFFBQWhCLEMsQ0FDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsUUFBbEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQzNILFNBQUQ7QUFBQSxTQUFlQSxTQUFTLEtBQUssS0FBZCxHQUFzQnlILE9BQXRCLEdBQWdDQyxTQUEvQztBQUFBLENBQWQ7O0FBQ08sSUFBTWhGLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZDO0FBQUEsTUFBMUNoRCxFQUEwQyxRQUExQ0EsRUFBMEM7QUFBQSxNQUF0Q2lELEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFBQSxNQUF4QnhHLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZvQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0Qsc0JBQVFuRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCO0FBQUVxRyxhQUFTLEVBQUUsU0FBYjtBQUF3QmpDLE1BQUUsRUFBRUEsRUFBNUI7QUFBZ0N0RCxXQUFPLEVBQUVBLE9BQXpDO0FBQWtEMkcsT0FBRyxFQUFFSDtBQUF2RCxHQUExQixlQUNKdkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnNHLDJEQUFwQixFQUFvQyxJQUFwQyxFQUEwQyxrSUFBMUMsQ0FESSxlQUVKdkcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmtHLDRDQUFwQixFQUF5QjtBQUFFOUIsTUFBRSxFQUFFQSxFQUFOO0FBQVVpQyxhQUFTLEVBQUU7QUFBckIsR0FBekIsRUFDSSxDQUFDbkQsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQ3VCLElBQTlELE1BQXdFTCxFQUF4RSxpQkFBOEVyRSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVvRSxNQUFFLEVBQUVBO0FBQU4sR0FBM0IsRUFBdUNpSSxLQUFLLENBQUNuSixRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDd0IsU0FBOUQsQ0FBNUMsQ0FEbEYsRUFFSSxHQUZKLGVBR0kzRSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVvRSxNQUFFLEVBQUVBLEVBQU47QUFBVWlDLGFBQVMsRUFBRTtBQUFyQixHQUEzQixFQUFzRWdCLEtBQXRFLENBSEosQ0FGSSxDQUFSO0FBTUgsQ0FQTSxDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsVGl0bGUsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIE1vZGFsSGVhZGVyIH0gZnJvbSAnLi4vbGliL01vZGFsL01vZGFsLnN0eWxlZCc7XG5pbXBvcnQgeyBCdG5EYW5nZXIsIEJ0blNlY29uZGFyeSB9IGZyb20gJy4uL2xpYi9CdXR0b24vQnV0dG9uLnN0eWxlZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzL21hY3JvJztcbmNvbnN0IERlbGV0ZURpYWxvZyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBwcm9wcy5kZWxldGVJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHByb3BzLmRlbGV0ZUl0ZW0oZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SXRlbUluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9wcy5pdGVtSW5mbyAmJiBwcm9wcy5pdGVtSW5mbyhwcm9wcy5pdGVtVG9EZWxldGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7IHdpZHRoOiBcIjUwJVwiLCBjbG9zZTogdHJ1ZSwgb25DbG9zZTogcHJvcHMub25DbG9zZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFRpdGxlLCBudWxsLCBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxCb2R5LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEJvZHlOYW1lT2ZJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BzLm5hbWVPZkl0ZW0sXG4gICAgICAgICAgICAgICAgXCI6XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEJvZHlOYW1lLCBudWxsLCBnZXRJdGVtSW5mbygpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEZvb3RlciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnRuU2Vjb25kYXJ5LCB7IHNoYWRvdzogdHJ1ZSwgdmFsdWU6IGZhbHNlLCBvbkNsaWNrOiBoYW5kbGVDbG9zZSB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzMFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnRuRGFuZ2VyLCB7IHNoYWRvdzogdHJ1ZSwgdmFsdWU6IHRydWUsIG9uQ2xpY2s6IGhhbmRsZUNsb3NlIH0sIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiKSkpKTtcbn07XG5jb25zdCBNb2RhbEJvZHlOYW1lT2ZJdGVtID0gc3R5bGVkLmRpdiBgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbmA7XG5jb25zdCBNb2RhbEJvZHlOYW1lID0gc3R5bGVkLmRpdiBgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMCAxcmVtO1xuYDtcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZURpYWxvZztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vbGliL1Jvdyc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4uL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xpYi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IGdldEVycm9ycyB9IGZyb20gJy4uL2xpYi91dGlscy91dGlscyc7XG5pbXBvcnQgRGVsZXRlRGlhbG9nIGZyb20gJy4uL0RlbGV0ZURpYWxvZy9EZWxldGVEaWFsb2cnO1xuY29uc3QgTGlzdE9mSXRlbXMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0RlbGV0ZURpYWxvZywgc2V0U2hvd0RlbGV0ZURpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2l0ZW1Ub0RlbGV0ZSwgc2V0SXRlbVRvRGVsZXRlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NvcnRlZEJ5LCBzZXRTb3J0ZWRCeV0gPSB1c2VTdGF0ZShwcm9wcy5mdW5jdGlvbnMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCkpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGFwaS5nZXRJdGVtcyhwcm9wcy5mdW5jdGlvbnMudXJsLCB7XG4gICAgICAgICAgICAgICAgc29ydGVkX2J5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICBvd25lcjogKF9hID0gcHJvcHMub3duZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IC0xLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuZ2V0SXRlbXMgcmVzLmRhdGEnLCByZXMuZGF0YSk7XG4gICAgICAgICAgICBzZXRJdGVtcyhyZXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoZ2V0RXJyb3JzKChfYiA9IGVyci5yZXNwb25zZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0SXRlbXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0xpc3RPZkl0ZW1zLmdldEl0ZW1zIGl0ZW1zJywgaXRlbXMpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRJdGVtcygpO1xuICAgIH0sIFtzb3J0ZWRCeSwgcHJvcHMub3duZXJdKTtcbiAgICBjb25zdCBnZXRJdGVtQnlJZCA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pZCA9PT0gK2lkKVswXTtcbiAgICB9O1xuICAgIGNvbnN0IGJ0blNvcnRDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvcnRlZF9uYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2J0blNvcnRDbGljay5zb3J0ZWRfbmFtZScsIHNvcnRlZF9uYW1lKTtcbiAgICAgICAgaWYgKCFzb3J0ZWRfbmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHNvcnRlZEJ5Lm5hbWUgIT09IHNvcnRlZF9uYW1lKSB7XG4gICAgICAgICAgICBzZXRTb3J0ZWRCeSh7XG4gICAgICAgICAgICAgICAgbmFtZTogc29ydGVkX25hbWUsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnZGVzYycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNvcnRlZEJ5LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgICAgICBzZXRTb3J0ZWRCeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNvcnRlZEJ5KSwgeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJ0bkRlbENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGdldEl0ZW1CeUlkKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuYnRuRGVsQ2xpY2sgaXRlbScsIGl0ZW0pO1xuICAgICAgICBzZXRJdGVtVG9EZWxldGUoaXRlbSk7XG4gICAgICAgIHNldFNob3dEZWxldGVEaWFsb2codHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBidG5BZGRDbGljayA9IChlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QocHJvcHMuZnVuY3Rpb25zLnVybCwgeyBidG5fYWRkOiAnJyB9KTtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2gocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYnRuRWRpdENsaWNrID0gKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBpdGVtX3BrID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljaycsIGl0ZW1fcGspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChwcm9wcy5mdW5jdGlvbnMudXJsLCB7XG4gICAgICAgICAgICAgICAgYnRuX2VkaXQ6ICcnLFxuICAgICAgICAgICAgICAgIGl0ZW1fcGs6IGl0ZW1fcGssXG4gICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljay5oaXN0b3J5JywgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuRWRpdENsaWNrLmNhdGNoJywgZXJyKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZ2V0SXRlbUlkID0gKGl0ZW0pID0+IChpdGVtID8gaXRlbS5pZCA6IC0xKTtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGNvbmZpcm0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2M7XG4gICAgICAgIHNldFNob3dEZWxldGVEaWFsb2coZmFsc2UpO1xuICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fcGs6IGdldEl0ZW1JZChpdGVtVG9EZWxldGUpLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogKF9jID0gcHJvcHMub3duZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IC0xLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyhbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmZ1bmN0aW9ucy5uYW1lT2ZJdGVtfSDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKGdldEVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRCdXR0b25zID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5FZGl0Q2xpY2sgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiIH0sIFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgJ1xcdTI3ZjYnKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJkYW5nZXJcIiwgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXIgYnRuLWRhbmdlcl9kZWwgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5EZWxDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICBcIlxcdTAwRDdcIikpKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmZ1bmN0aW9ucy5hZGRCdXR0b24pXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIiwgb25DbGljazogYnRuQWRkQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzVcXHUwMEEwXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzNcXHUwNDNFXFx1MDBBMFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzQlxcdTA0MzBcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQ0NlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgXCIrXCIpKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCB7IHdpdGhBbGVydHM6IHByb3BzLndpdGhBbGVydHMgfSksXG4gICAgICAgIHNob3dEZWxldGVEaWFsb2cgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlRGlhbG9nLCB7IG5hbWVPZkl0ZW06IHByb3BzLmZ1bmN0aW9ucy5uYW1lT2ZJdGVtLCBpdGVtVG9EZWxldGU6IGl0ZW1Ub0RlbGV0ZSwgZGVsZXRlSXRlbTogZGVsZXRlSXRlbSwgaXRlbUluZm86IHByb3BzLmZ1bmN0aW9ucy5pdGVtSW5mbywgb25DbG9zZTogKCkgPT4gc2V0U2hvd0RlbGV0ZURpYWxvZyhmYWxzZSkgfSkpLFxuICAgICAgICBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIG51bGwpIDogcHJvcHMuZnVuY3Rpb25zLmdldFRhYmxlKGl0ZW1zLCBnZXRCdXR0b25zLCBidG5Tb3J0Q2xpY2ssIHNvcnRlZEJ5KSxcbiAgICAgICAgZ2V0QWRkQnV0dG9uKCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMaXN0T2ZJdGVtcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaENlbGwgfSBmcm9tICcuLi9wYXJ0cy9UaENlbGwnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuLi9saWIvVGFibGUnO1xuY29uc3QgZnVuY3Rpb25zID0ge1xuICAgIGNhcnM6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9jYXJzLycsXG4gICAgICAgIHRvb2x0aXBQbGFjZTogJ2JvdHRvbScsXG4gICAgICAgIG5hbWVPZkl0ZW06ICfQkNCy0YLQvtC80L7QsdC40LvRjCcsXG4gICAgICAgIGFkZEJ1dHRvbjogZmFsc2UsXG4gICAgICAgIGl0ZW1JbmZvOiAoaXRlbSkgPT4gW2l0ZW0ubWFudWZhY3R1cmVyLCBpdGVtLm1vZGVsXS5qb2luKCcgJyksXG4gICAgICAgIGdldFRhYmxlOiAoaXRlbXMsIGdldEJ1dHRvbnMsIG9uQ2xpY2ssIHNvcnRlZEJ5KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBjbGFzc05hbWU6IFwidGFibGUgdGFibGVfc3RyaXBlZCB0YWJsZV9ib3JkZXJlZCB0YWJsZV9ob3ZlclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibWFudWZhY3R1cmVyXCIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzhcXHUwNDM3XFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiwgaW5kZXg6IDEsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibW9kZWxcIiwgdGl0bGU6IFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIsIGluZGV4OiAyLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcInByb2R1Y3Rpb25cIiwgdGl0bGU6IFwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDMyXFx1MDQ0QlxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0M0FcXHUwNDMwXCIsIGluZGV4OiAzLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImNvbG9yXCIsIHRpdGxlOiBcIlxcdTA0MjZcXHUwNDMyXFx1MDQzNVxcdTA0NDJcIiwgaW5kZXg6IDQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwicG93ZXJcIiwgdGl0bGU6IFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDQ5XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NENcIiwgaW5kZXg6IDUsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibWlsZWFnZVwiLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzNVxcdTA0MzNcIiwgaW5kZXg6IDYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5tYW51ZmFjdHVyZXIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5tb2RlbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5jb2xvciksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnBvd2VyKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubWlsZWFnZSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCArICdyZW0nIH0gfSwgZ2V0QnV0dG9ucyhTdHJpbmcoby5pZCkpKSkpO1xuICAgICAgICAgICAgfSkpKSksXG4gICAgICAgIGdldERlZmF1bHRTb3J0ZWRCeTogKCkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6ICdtb2RlbCcsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIG93bmVyczoge1xuICAgICAgICB1cmw6ICcvYXBpL293bmVycy8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBuYW1lT2ZJdGVtOiAn0JDQstGC0L7QstC70LDQtNC10LvQtdGGJyxcbiAgICAgICAgYWRkQnV0dG9uOiB0cnVlLFxuICAgICAgICBpdGVtSW5mbzogKGl0ZW0pID0+IFtpdGVtLmxhc3RfbmFtZSwgaXRlbS5uYW1lLCBpdGVtLnBhdHJvbnltaWNdLmpvaW4oJyAnKSxcbiAgICAgICAgZ2V0VGFibGU6IChpdGVtcywgZ2V0QnV0dG9ucywgb25DbGljaywgc29ydGVkQnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBjbGFzc05hbWU6IFwidGFibGUgdGFibGVfc3RyaXBlZCB0YWJsZV9ib3JkZXJlZCB0YWJsZV9ob3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibGFzdF9uYW1lXCIsIHRpdGxlOiBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzQ1xcdTA0MzhcXHUwNDNCXFx1MDQzOFxcdTA0NEZcIiwgaW5kZXg6IDEsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcIm5hbWVcIiwgdGl0bGU6IFwiXFx1MDQxOFxcdTA0M0NcXHUwNDRGXCIsIGluZGV4OiAyLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBpZDogXCJwYXRyb255bWljXCIgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0NDdcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImdlbmRlclwiLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcIiwgaW5kZXg6IDQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImFnZVwiLCB0aXRsZTogXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzdcXHUwNDQwXFx1MDQzMFxcdTA0NDFcXHUwNDQyXCIsIGluZGV4OiA0LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmxhc3RfbmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnBhdHJvbnltaWMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8uZ2VuZGVyID09PSAnZicgPyAn0JbQtdC9JyA6ICfQnNGD0LYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogeyB3aWR0aDogMTAwICsgJ3B4JyB9IH0sIGdldEJ1dHRvbnMoU3RyaW5nKG8uaWQpKSkpKTtcbiAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGVmYXVsdFNvcnRlZEJ5OiAoKSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogJ2xhc3RfbmFtZScsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9KSxcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCB1c2VMaXN0RnVuY3Rpb25zID0gKGxpc3RUeXBlKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uc1tsaXN0VHlwZV07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjZW50ZXItbG9hZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxkcy1kdWFsLXJpbmdcIiB9KSkpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdGVzdC1waHAuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODAwMi8nO1xuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxufSk7XG5jb25zdCBhcGkgPSB7XG4gICAgZ2V0SXRlbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBpLmdldEl0ZW1zIHBhcmFtcycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbWFjcm8nO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b24gYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkZGFyaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbWFyZ2luOiAwLjM3NXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAocHJvcHMuc2hhZG93ID8gJzFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KScgOiAnbm9uZScpfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICAmOmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICB9XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQnRuUHJpbWFyeSA9IHN0eWxlZChCdXR0b24pIGBcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcbmA7XG5leHBvcnQgY29uc3QgQnRuU2Vjb25kYXJ5ID0gc3R5bGVkKEJ1dHRvbikgYFxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xuYDtcbmV4cG9ydCBjb25zdCBCdG5EYW5nZXIgPSBzdHlsZWQoQnV0dG9uKSBgXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG5gO1xuZXhwb3J0IGNvbnN0IEJ0bk91dGxpbmVQcmltYXJ5ID0gc3R5bGVkKEJ1dHRvbikgYFxuICBjb2xvcjogIzBkNmVmZDtcbiAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzL21hY3JvJztcbmV4cG9ydCBjb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2IGBcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMy41cmVtKTtcbiAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG5gO1xuLy8gZXhwb3J0IGNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuLy8gICB3aWR0aDogMzM1cHg7XG4vLyAgIGhlaWdodDogNDEwcHg7XG4vLyAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbi8vIGA7XG5leHBvcnQgY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnpJbmRleH07XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudElubmVyID0gc3R5bGVkLmRpdiBgXG4gIG1hcmdpbjogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IChwcm9wcy5uQnIgPyAnMCcgOiAnOHB4Jyl9O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNyksIDNweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm94LXNoYWRvdzogN3B4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsQ29tcG9uZW50ID0gc3R5bGVkLmRpdiBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCA6ICcwJyl9O1xuICAvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM3MgZWFzZS1vdXQ7XG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNHJlbSk7XG4gIC8vIGFuaW1hdGlvbjogMC4zcyBlYXNlIG9wYWNpdHk7IC8vLCAwLjNzIGVhc2UgdHJhbnNpdGlvbjtcbiAgdG9wOiA0cmVtO1xuICBhbmltYXRpb246IDAuM3MgZWFzZSB0cmFuc2l0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDYlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46ICR7cHJvcHMgPT4gKHByb3BzLm1vYk1hcmcgPyAnNTBweCAyMHB4JyA6ICc1MHB4IGF1dG8nKX07XG4gIH1cbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdHJhbnNpdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRvcDogNHJlbTtcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTW9kYWxIZWFkZXIgPSBzdHlsZWQuZGl2IGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjQuNXB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbmA7XG5leHBvcnQgY29uc3QgTW9kYWxUaXRsZSA9IHN0eWxlZC5kaXYgYFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNC41cHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgTW9kYWxCb2R5ID0gc3R5bGVkLmRpdiBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZyZXgtd3JhcDogbm93cmFwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtIDA7XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gc3R5bGVkLmRpdiBgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0LjVweDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC43NXJlbTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vTW9kYWwuc3R5bGVkLmVsZW1lbnRzJztcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uL1BvcnRhbC9Qb3J0YWwnO1xuZXhwb3J0IGNvbnN0IE1vZGFsID0gKHsgY2hpbGRyZW4sIG9uQ2xvc2UsIHdpZHRoLCB6SW5kZXggPSAnOTk5OTknLCBtb2JNYXJnLCBjbG9zZSwgbkJyLCB9KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ29udGFpbmVyQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbENvbnRhaW5lciwgeyB6SW5kZXg6IHpJbmRleCwgb25DbGljazogaGFuZGxlQ29udGFpbmVyQ2xpY2sgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsQ29tcG9uZW50LCB7IHdpZHRoOiB3aWR0aCwgbW9iTWFyZzogbW9iTWFyZyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsQ29tcG9uZW50SW5uZXIsIHsgbkJyOiBuQnIgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImNsb3NlXCIsIG9uQ2xpY2s6IG9uQ2xvc2UgfSwgXCJcXHUwMEQ3XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4pKSkpKTtcbn07XG5leHBvcnQgY29uc3QgTW9kYWxUaXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxUaXRsZSwgbnVsbCwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBNb2RhbEhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxIZWFkZXIsIG51bGwsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgTW9kYWxCb2R5ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbEJvZHksIG51bGwsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsRm9vdGVyLCBudWxsLCBjaGlsZHJlbik7XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmV4cG9ydCBjb25zdCBQb3J0YWwgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gdXNlTWVtbygoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgZGl2KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdyb3cnLCBpZDogaWQgfSwgY2hpbGRyZW4pKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAndGFibGUnIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuY29uc3QgQWxlcnRzID0gKHsgdGltZW91dCwgd2l0aEFsZXJ0cyA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBkZWZUaW1lb3V0ID0gNTAwMDtcbiAgICBjb25zdCBzaG93QWxlcnRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdmlldyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGVydHM7XG4gICAgICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldFZpc2libGUodmlldyk7XG4gICAgfTtcbiAgICBpZiAoIXdpdGhBbGVydHMpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB1c2VFZmZlY3Qoc2hvd0FsZXJ0cywgW2FsZXJ0cy5tZXNzYWdlc10pO1xuICAgIGNvbnN0IGdldFR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2luZm8nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgdCA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXkgPyAoYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoZS50eXBlKTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2FsZXJ0IGFsZXJ0XycgKyB0eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgICAgICB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgIH07XG4gICAgY29uc3QgZGVsYXkgPSAod2FpdCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCcnKSwgd2FpdCkpO1xuICAgIH07XG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIGRlbGF5KHRpbWVvdXQgPyB0aW1lb3V0IDogZGVmVGltZW91dCkudGhlbigoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgZ2V0QWxlcnRzKGFsZXJ0cy5tZXNzYWdlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBzaG93KCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiIsImNvbnN0IGdldEtleVZhbHVlID0gKG9iaiwga2V5KSA9PiBvYmpba2V5XTtcbmV4cG9ydCBjb25zdCBnZXRFcnJvcnMgPSAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIFt7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdVbmtub3duIGVycm9yJyB9XTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogZ2V0S2V5VmFsdWUoZGF0YSwga2V5KSB9O1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCByZWRpcmVjdCA9IChoaXN0b3J5LCByZWRpcmVjdCwgZGlyID0gJycpID0+IHJlZGlyZWN0ICYmIGRpciA9PT0gJ2JhY2snID8gaGlzdG9yeS5nb0JhY2soKSA6IGhpc3RvcnkucHVzaChyZWRpcmVjdCk7XG5leHBvcnQgY29uc3QgZGlnaXRzT25seSA9IChlKSA9PiB7XG4gICAgbGV0IGNoYXJDb2RlID0gZS5jaGFyQ29kZTtcbiAgICAvL2NvbnNvbGUubG9nKGNoYXJDb2RlKTtcbiAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgIC8vIGRpZ2l0cyBvbmx5XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi4vbGliL1Rvb2x0aXAnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vbGliL1Jvdyc7XG5jb25zdCB1cEFycm93ID0gJ1xcdTIxOTEnO1xuLy9kb3duQXJyb3cgPSAnJiN4MDIyNUM7JztcbmNvbnN0IGRvd25BcnJvdyA9ICdcXHUyMTkzJztcbmNvbnN0IGFycm93ID0gKGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uID09PSAnYXNjJyA/IHVwQXJyb3cgOiBkb3duQXJyb3c7XG5leHBvcnQgY29uc3QgVGhDZWxsID0gKHsgaWQsIHRpdGxlLCBpbmRleCwgb25DbGljaywgc29ydGVkQnkgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBcIiwgaWQ6IGlkLCBvbkNsaWNrOiBvbkNsaWNrLCBrZXk6IGluZGV4IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzQ1xcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTAwQTBcXHUwNDM0XFx1MDQzQlxcdTA0NEZcXHUwMEEwXFx1MDQ0MVxcdTA0M0VcXHUwNDQwXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDNBXFx1MDQzOFwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFwic29ydGVkLXJvd1wiIH0sXG4gICAgICAgICAgICAoc29ydGVkQnkgPT09IG51bGwgfHwgc29ydGVkQnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRlZEJ5Lm5hbWUpID09PSBpZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGlkIH0sIGFycm93KHNvcnRlZEJ5ID09PSBudWxsIHx8IHNvcnRlZEJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3J0ZWRCeS5kaXJlY3Rpb24pKSxcbiAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93X190ZXh0XCIgfSwgdGl0bGUpKSkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=