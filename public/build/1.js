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
              context.setAlerts({
                messages: Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])((_b = _context.t0.response) === null || _b === void 0 ? void 0 : _b.data)
              });

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
              context.setAlerts({
                messages: Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context2.t0.response.data)
              });

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
              context.setAlerts({
                messages: Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context3.t0.response.data)
              });

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
              context.setAlerts({
                messages: [{
                  type: 'success',
                  message: "".concat(props.functions.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
                }]
              });
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](3);
              context.setAlerts({
                messages: Object(_lib_utils_utils__WEBPACK_IMPORTED_MODULE_24__["getErrors"])(_context4.t0.response.data)
              });

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
})(["display:inline-block;font-weight:400;line-height:1.5;color:$dark;background-color:transparent;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;margin:0.375rem;font-size:1.6rem;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;box-shadow:", ";width:", ";&:disabled{pointer-events:none;opacity:0.65;}&:hover{transform:scale(1.03);}"], function (props) {
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
})(["color:#0d6efd;border-color:#0d6efd;"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Table = function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: className ? className : 'table'
  }, children);
};

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

/***/ "./assets/components/lib/alert/Alerts.elements.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/lib/alert/Alerts.elements.tsx ***!
  \*********************************************************/
/*! exports provided: Container, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  margin-bottom: 0.8rem;\n  font-size: 1.8rem;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #fff;\n  box-shadow: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1000;\n  margin: 0 auto;\n  left: 35%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return props.shadow ? '1px 4px 4px rgba(0, 0, 0, 0.8)' : 'none';
}, function (props) {
  return props.type === 'danger' ? '#dc3545' : '';
}, function (props) {
  return props.type === 'error' ? '#dc3545' : '';
}, function (props) {
  return props.type === 'success' ? '#198754' : '';
}, function (props) {
  return props.type === 'info' ? '#0dcaf0' : '';
}, function (props) {
  return props.type === 'warning' ? '#ffc107' : '';
});

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
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
/* harmony import */ var _Alerts_elements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Alerts.elements */ "./assets/components/lib/alert/Alerts.elements.tsx");











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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_11__["useAlerts"])();
  var defTimeout = 5000;
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    setVisible(true);
    global.setTimeout(function () {
      return setVisible(false);
    }, timeout ? timeout : defTimeout);
  }, [alerts.messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, visible && withAlerts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Container"], null, alerts.messages.map(function (e, index) {
    // const type = getType(e.type);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
      shadow: true,
      type: e.type,
      key: index
    }, e.message);
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZWxldGVEaWFsb2cvRGVsZXRlRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L0xpc3RPZkl0ZW1zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaXN0L3VzZUxpc3RGdW5jdGlvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Nzcy9Mb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQuZWxlbWVudHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Qb3J0YWwvUG9ydGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvUm93L1Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy5lbGVtZW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcnRzL1RoQ2VsbC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiXSwibmFtZXMiOlsiRGVsZXRlRGlhbG9nIiwicHJvcHMiLCJoYW5kbGVDbG9zZSIsImUiLCJkZWxldGVJdGVtIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJdGVtSW5mbyIsIml0ZW1JbmZvIiwiaXRlbVRvRGVsZXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJ3aWR0aCIsImNsb3NlIiwib25DbG9zZSIsIk1vZGFsSGVhZGVyIiwiTW9kYWxUaXRsZSIsIk1vZGFsQm9keSIsIk1vZGFsQm9keU5hbWVPZkl0ZW0iLCJuYW1lT2ZJdGVtIiwiTW9kYWxCb2R5TmFtZSIsIk1vZGFsRm9vdGVyIiwiQnRuU2Vjb25kYXJ5Iiwic2hhZG93Iiwib25DbGljayIsIkJ0bkRhbmdlciIsInN0eWxlZCIsImRpdiIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkxpc3RPZkl0ZW1zIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0RlbGV0ZURpYWxvZyIsInNldFNob3dEZWxldGVEaWFsb2ciLCJ1bmRlZmluZWQiLCJzZXRJdGVtVG9EZWxldGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZnVuY3Rpb25zIiwiZ2V0RGVmYXVsdFNvcnRlZEJ5Iiwic29ydGVkQnkiLCJzZXRTb3J0ZWRCeSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiZ2V0SXRlbXMiLCJhcGkiLCJ1cmwiLCJzb3J0ZWRfYnkiLCJvd25lciIsIl9hIiwicmVzIiwiZGF0YSIsInNldEFsZXJ0cyIsIm1lc3NhZ2VzIiwiZ2V0RXJyb3JzIiwiX2IiLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsImdldEl0ZW1CeUlkIiwiaWQiLCJmaWx0ZXIiLCJpdGVtIiwiYnRuU29ydENsaWNrIiwic29ydGVkX25hbWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYnRuRGVsQ2xpY2siLCJOdW1iZXIiLCJidG5BZGRDbGljayIsImF4aW9zIiwicG9zdCIsImJ0bl9hZGQiLCJyZWRpcmVjdCIsInB1c2giLCJidG5FZGl0Q2xpY2siLCJpdGVtX3BrIiwiYnRuX2VkaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ2V0SXRlbUlkIiwiY29uZmlybSIsImJ0bl9kZWwiLCJfYyIsInR5cGUiLCJtZXNzYWdlIiwiZ2V0QnV0dG9ucyIsIlJvdyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJUb29sdGlwQ29udGVudCIsImdldEFkZEJ1dHRvbiIsImFkZEJ1dHRvbiIsIkZyYWdtZW50IiwiQWxlcnRzIiwid2l0aEFsZXJ0cyIsIkxvYWRlciIsImdldFRhYmxlIiwiY2FycyIsInRvb2x0aXBQbGFjZSIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwiam9pbiIsIlRhYmxlIiwiVGhDZWxsIiwidGl0bGUiLCJpbmRleCIsIm1hcCIsIm8iLCJrZXkiLCJwcm9kdWN0aW9uIiwiY29sb3IiLCJwb3dlciIsIm1pbGVhZ2UiLCJzdHlsZSIsIlN0cmluZyIsIm93bmVycyIsImxhc3RfbmFtZSIsInBhdHJvbnltaWMiLCJnZW5kZXIiLCJhZ2UiLCJ1c2VMaXN0RnVuY3Rpb25zIiwibGlzdFR5cGUiLCJCQVNFX1VSTCIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJidXR0b24iLCJCdG5QcmltYXJ5IiwiQnRuT3V0bGluZVByaW1hcnkiLCJ0b29sdGlwIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsIkNlbnRlciIsIk1vZGFsQ29udGFpbmVyIiwiekluZGV4IiwiTW9kYWxDb21wb25lbnRJbm5lciIsIm5CciIsIk1vZGFsQ29tcG9uZW50IiwibW9iTWFyZyIsImhhbmRsZUNvbnRhaW5lckNsaWNrIiwiY3VycmVudFRhcmdldCIsIlBvcnRhbCIsIlN0eWxlZCIsInVzZU1lbW8iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUG9ydGFsIiwiVG9vbHRpcCIsIkNvbnRhaW5lciIsIkFsZXJ0IiwidGltZW91dCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJnZXRLZXlWYWx1ZSIsIm9iaiIsImtleXMiLCJkaXIiLCJnb0JhY2siLCJkaWdpdHNPbmx5IiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInVw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QUFDOUUsK0JBQStCLG1CQUFPLENBQUMsK0hBQWlEO0FBQ3hGLHFCQUFxQixtQkFBTyxDQUFDLHVHQUFxQztBQUNsRSxXQUFXLG1CQUFPLENBQUMsaUZBQTBCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0MsY0FBYyxPQUFPO0FBQ3pELHFDQUFxQyxjQUFjLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUNBQXFDLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxUaXRsZSwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgTW9kYWxIZWFkZXIgfSBmcm9tICcuLi9saWIvTW9kYWwvTW9kYWwuc3R5bGVkJztcbmltcG9ydCB7IEJ0bkRhbmdlciwgQnRuU2Vjb25kYXJ5IH0gZnJvbSAnLi4vbGliL0J1dHRvbi9CdXR0b24uc3R5bGVkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbWFjcm8nO1xuY29uc3QgRGVsZXRlRGlhbG9nID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIHByb3BzLmRlbGV0ZUl0ZW0oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICByZXR1cm4gcHJvcHMuZGVsZXRlSXRlbShmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJdGVtSW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb3BzLml0ZW1JbmZvICYmIHByb3BzLml0ZW1JbmZvKHByb3BzLml0ZW1Ub0RlbGV0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIHsgd2lkdGg6IFwiNTAlXCIsIGNsb3NlOiB0cnVlLCBvbkNsb3NlOiBwcm9wcy5vbkNsb3NlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxIZWFkZXIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsVGl0bGUsIG51bGwsIFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEJvZHksIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsQm9keU5hbWVPZkl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgcHJvcHMubmFtZU9mSXRlbSxcbiAgICAgICAgICAgICAgICBcIjpcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsQm9keU5hbWUsIG51bGwsIGdldEl0ZW1JbmZvKCkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsRm9vdGVyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdG5TZWNvbmRhcnksIHsgc2hhZG93OiB0cnVlLCB2YWx1ZTogZmFsc2UsIG9uQ2xpY2s6IGhhbmRsZUNsb3NlIH0sIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDMwXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdG5EYW5nZXIsIHsgc2hhZG93OiB0cnVlLCB2YWx1ZTogdHJ1ZSwgb25DbGljazogaGFuZGxlQ2xvc2UgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIpKSkpO1xufTtcbmNvbnN0IE1vZGFsQm9keU5hbWVPZkl0ZW0gPSBzdHlsZWQuZGl2IGBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuYDtcbmNvbnN0IE1vZGFsQm9keU5hbWUgPSBzdHlsZWQuZGl2IGBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAwIDFyZW07XG5gO1xuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRGlhbG9nO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9saWIvUm93L1Jvdyc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4uL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xpYi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IGdldEVycm9ycyB9IGZyb20gJy4uL2xpYi91dGlscy91dGlscyc7XG5pbXBvcnQgRGVsZXRlRGlhbG9nIGZyb20gJy4uL0RlbGV0ZURpYWxvZy9EZWxldGVEaWFsb2cnO1xuY29uc3QgTGlzdE9mSXRlbXMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0RlbGV0ZURpYWxvZywgc2V0U2hvd0RlbGV0ZURpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2l0ZW1Ub0RlbGV0ZSwgc2V0SXRlbVRvRGVsZXRlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NvcnRlZEJ5LCBzZXRTb3J0ZWRCeV0gPSB1c2VTdGF0ZShwcm9wcy5mdW5jdGlvbnMuZ2V0RGVmYXVsdFNvcnRlZEJ5KCkpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0SXRlbXMgb3duZXInLCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGFwaS5nZXRJdGVtcyhwcm9wcy5mdW5jdGlvbnMudXJsLCB7XG4gICAgICAgICAgICAgICAgc29ydGVkX2J5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICBvd25lcjogKF9hID0gcHJvcHMub3duZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IC0xLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuZ2V0SXRlbXMgcmVzLmRhdGEnLCByZXMuZGF0YSk7XG4gICAgICAgICAgICBzZXRJdGVtcyhyZXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoeyBtZXNzYWdlczogZ2V0RXJyb3JzKChfYiA9IGVyci5yZXNwb25zZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRhdGEpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRJdGVtcygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTGlzdE9mSXRlbXMuZ2V0SXRlbXMgaXRlbXMnLCBpdGVtcyk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEl0ZW1zKCk7XG4gICAgfSwgW3NvcnRlZEJ5LCBwcm9wcy5vd25lcl0pO1xuICAgIGNvbnN0IGdldEl0ZW1CeUlkID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmlkID09PSAraWQpWzBdO1xuICAgIH07XG4gICAgY29uc3QgYnRuU29ydENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkX25hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYnRuU29ydENsaWNrLnNvcnRlZF9uYW1lJywgc29ydGVkX25hbWUpO1xuICAgICAgICBpZiAoIXNvcnRlZF9uYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoc29ydGVkQnkubmFtZSAhPT0gc29ydGVkX25hbWUpIHtcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzb3J0ZWRfbmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gc29ydGVkQnkuZGlyZWN0aW9uID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcbiAgICAgICAgICAgIHNldFNvcnRlZEJ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydGVkQnkpLCB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYnRuRGVsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZ2V0SXRlbUJ5SWQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMaXN0T2ZJdGVtcy5idG5EZWxDbGljayBpdGVtJywgaXRlbSk7XG4gICAgICAgIHNldEl0ZW1Ub0RlbGV0ZShpdGVtKTtcbiAgICAgICAgc2V0U2hvd0RlbGV0ZURpYWxvZyh0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGJ0bkFkZENsaWNrID0gKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgYXhpb3MucG9zdChwcm9wcy5mdW5jdGlvbnMudXJsLCB7IGJ0bl9hZGQ6ICcnIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhWydyZWRpcmVjdCddO1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChyZXMuZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoeyBtZXNzYWdlczogZ2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhKSB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ0bkVkaXRDbGljayA9IChlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgaXRlbV9wayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2snLCBpdGVtX3BrKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGF4aW9zLnBvc3QocHJvcHMuZnVuY3Rpb25zLnVybCwge1xuICAgICAgICAgICAgICAgIGJ0bl9lZGl0OiAnJyxcbiAgICAgICAgICAgICAgICBpdGVtX3BrOiBpdGVtX3BrLFxuICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidG5FZGl0Q2xpY2suaGlzdG9yeScsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YVsncmVkaXJlY3QnXTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2gocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J0bkVkaXRDbGljay5jYXRjaCcsIGVycik7XG4gICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzOiBnZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZ2V0SXRlbUlkID0gKGl0ZW0pID0+IChpdGVtID8gaXRlbS5pZCA6IC0xKTtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGNvbmZpcm0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2M7XG4gICAgICAgIHNldFNob3dEZWxldGVEaWFsb2coZmFsc2UpO1xuICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBheGlvcy5wb3N0KHByb3BzLmZ1bmN0aW9ucy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkX2J5OiBzb3J0ZWRCeSxcbiAgICAgICAgICAgICAgICAgICAgYnRuX2RlbDogJycsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fcGs6IGdldEl0ZW1JZChpdGVtVG9EZWxldGUpLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogKF9jID0gcHJvcHMub3duZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IC0xLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmZ1bmN0aW9ucy5uYW1lT2ZJdGVtfSDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzOiBnZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRCdXR0b25zID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YWx1ZTogaWQsIHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5FZGl0Q2xpY2sgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ0b29sdGlwX19jb250ZW50IHRvb2x0aXBfX2NvbnRlbnRfbGVmdFwiIH0sIFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgJ1xcdTI3ZjYnKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhbHVlOiBpZCwgdmFyaWFudDogXCJkYW5nZXJcIiwgY2xhc3NOYW1lOiBcImJ0bi1kYW5nZXIgYnRuLWRhbmdlcl9kZWwgdG9vbHRpcFwiLCBvbkNsaWNrOiBidG5EZWxDbGljayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2NvbnRlbnQgdG9vbHRpcF9fY29udGVudF9sZWZ0XCIgfSwgXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICBcIlxcdTAwRDdcIikpKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmZ1bmN0aW9ucy5hZGRCdXR0b24pXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnkgYnRuLXByaW1hcnlfYWRkIHRvb2x0aXBcIiwgb25DbGljazogYnRuQWRkQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb250ZW50LCBudWxsLCBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzVcXHUwMEEwXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzNcXHUwNDNFXFx1MDBBMFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzQlxcdTA0MzBcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQ0NlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgXCIrXCIpKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCB7IHdpdGhBbGVydHM6IHByb3BzLndpdGhBbGVydHMgfSksXG4gICAgICAgIHNob3dEZWxldGVEaWFsb2cgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlRGlhbG9nLCB7IG5hbWVPZkl0ZW06IHByb3BzLmZ1bmN0aW9ucy5uYW1lT2ZJdGVtLCBpdGVtVG9EZWxldGU6IGl0ZW1Ub0RlbGV0ZSwgZGVsZXRlSXRlbTogZGVsZXRlSXRlbSwgaXRlbUluZm86IHByb3BzLmZ1bmN0aW9ucy5pdGVtSW5mbywgb25DbG9zZTogKCkgPT4gc2V0U2hvd0RlbGV0ZURpYWxvZyhmYWxzZSkgfSkpLFxuICAgICAgICBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIG51bGwpIDogcHJvcHMuZnVuY3Rpb25zLmdldFRhYmxlKGl0ZW1zLCBnZXRCdXR0b25zLCBidG5Tb3J0Q2xpY2ssIHNvcnRlZEJ5KSxcbiAgICAgICAgZ2V0QWRkQnV0dG9uKCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMaXN0T2ZJdGVtcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaENlbGwgfSBmcm9tICcuLi9wYXJ0cy9UaENlbGwnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuLi9saWIvVGFibGUnO1xuY29uc3QgZnVuY3Rpb25zID0ge1xuICAgIGNhcnM6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9jYXJzLycsXG4gICAgICAgIHRvb2x0aXBQbGFjZTogJ2JvdHRvbScsXG4gICAgICAgIG5hbWVPZkl0ZW06ICfQkNCy0YLQvtC80L7QsdC40LvRjCcsXG4gICAgICAgIGFkZEJ1dHRvbjogZmFsc2UsXG4gICAgICAgIGl0ZW1JbmZvOiAoaXRlbSkgPT4gW2l0ZW0ubWFudWZhY3R1cmVyLCBpdGVtLm1vZGVsXS5qb2luKCcgJyksXG4gICAgICAgIGdldFRhYmxlOiAoaXRlbXMsIGdldEJ1dHRvbnMsIG9uQ2xpY2ssIHNvcnRlZEJ5KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBjbGFzc05hbWU6IFwidGFibGUgdGFibGVfc3RyaXBlZCB0YWJsZV9ib3JkZXJlZCB0YWJsZV9ob3ZlclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibWFudWZhY3R1cmVyXCIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzhcXHUwNDM3XFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcIiwgaW5kZXg6IDEsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibW9kZWxcIiwgdGl0bGU6IFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRDXCIsIGluZGV4OiAyLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcInByb2R1Y3Rpb25cIiwgdGl0bGU6IFwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDMyXFx1MDQ0QlxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0M0FcXHUwNDMwXCIsIGluZGV4OiAzLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImNvbG9yXCIsIHRpdGxlOiBcIlxcdTA0MjZcXHUwNDMyXFx1MDQzNVxcdTA0NDJcIiwgaW5kZXg6IDQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwicG93ZXJcIiwgdGl0bGU6IFwiXFx1MDQxQ1xcdTA0M0VcXHUwNDQ5XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NENcIiwgaW5kZXg6IDUsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibWlsZWFnZVwiLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzNVxcdTA0MzNcIiwgaW5kZXg6IDYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5tYW51ZmFjdHVyZXIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5tb2RlbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5jb2xvciksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnBvd2VyKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8ubWlsZWFnZSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCArICdyZW0nIH0gfSwgZ2V0QnV0dG9ucyhTdHJpbmcoby5pZCkpKSkpO1xuICAgICAgICAgICAgfSkpKSksXG4gICAgICAgIGdldERlZmF1bHRTb3J0ZWRCeTogKCkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6ICdtb2RlbCcsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIG93bmVyczoge1xuICAgICAgICB1cmw6ICcvYXBpL293bmVycy8nLFxuICAgICAgICB0b29sdGlwUGxhY2U6ICdib3R0b20nLFxuICAgICAgICBuYW1lT2ZJdGVtOiAn0JDQstGC0L7QstC70LDQtNC10LvQtdGGJyxcbiAgICAgICAgYWRkQnV0dG9uOiB0cnVlLFxuICAgICAgICBpdGVtSW5mbzogKGl0ZW0pID0+IFtpdGVtLmxhc3RfbmFtZSwgaXRlbS5uYW1lLCBpdGVtLnBhdHJvbnltaWNdLmpvaW4oJyAnKSxcbiAgICAgICAgZ2V0VGFibGU6IChpdGVtcywgZ2V0QnV0dG9ucywgb25DbGljaywgc29ydGVkQnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBjbGFzc05hbWU6IFwidGFibGUgdGFibGVfc3RyaXBlZCB0YWJsZV9ib3JkZXJlZCB0YWJsZV9ob3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaENlbGwsIHsgaWQ6IFwibGFzdF9uYW1lXCIsIHRpdGxlOiBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzQ1xcdTA0MzhcXHUwNDNCXFx1MDQzOFxcdTA0NEZcIiwgaW5kZXg6IDEsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcIm5hbWVcIiwgdGl0bGU6IFwiXFx1MDQxOFxcdTA0M0NcXHUwNDRGXCIsIGluZGV4OiAyLCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBpZDogXCJwYXRyb255bWljXCIgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0NDdcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImdlbmRlclwiLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcIiwgaW5kZXg6IDQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHNvcnRlZEJ5OiBzb3J0ZWRCeSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhDZWxsLCB7IGlkOiBcImFnZVwiLCB0aXRsZTogXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzdcXHUwNDQwXFx1MDQzMFxcdTA0NDFcXHUwNDQyXCIsIGluZGV4OiA0LCBvbkNsaWNrOiBvbkNsaWNrLCBzb3J0ZWRCeTogc29ydGVkQnkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgaXRlbXMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmxhc3RfbmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgby5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLnBhdHJvbnltaWMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIG8uZ2VuZGVyID09PSAnZicgPyAn0JbQtdC9JyA6ICfQnNGD0LYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBvLmFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogeyB3aWR0aDogMTAwICsgJ3B4JyB9IH0sIGdldEJ1dHRvbnMoU3RyaW5nKG8uaWQpKSkpKTtcbiAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGVmYXVsdFNvcnRlZEJ5OiAoKSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogJ2xhc3RfbmFtZScsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnLFxuICAgICAgICB9KSxcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCB1c2VMaXN0RnVuY3Rpb25zID0gKGxpc3RUeXBlKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uc1tsaXN0VHlwZV07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9jc3MvTG9hZGVyLmNzcyc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjZW50ZXItbG9hZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxkcy1kdWFsLXJpbmdcIiB9KSkpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdGVzdC1waHAuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODAwMi8nO1xuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxufSk7XG5jb25zdCBhcGkgPSB7XG4gICAgZ2V0SXRlbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBpLmdldEl0ZW1zIHBhcmFtcycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbWFjcm8nO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b24gYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkZGFyaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbWFyZ2luOiAwLjM3NXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAocHJvcHMuc2hhZG93ID8gJzFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KScgOiAnbm9uZScpfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICAmOmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICB9XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQnRuUHJpbWFyeSA9IHN0eWxlZChCdXR0b24pIGBcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcbmA7XG5leHBvcnQgY29uc3QgQnRuU2Vjb25kYXJ5ID0gc3R5bGVkKEJ1dHRvbikgYFxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xuYDtcbmV4cG9ydCBjb25zdCBCdG5EYW5nZXIgPSBzdHlsZWQoQnV0dG9uKSBgXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG5gO1xuZXhwb3J0IGNvbnN0IEJ0bk91dGxpbmVQcmltYXJ5ID0gc3R5bGVkKEJ1dHRvbikgYFxuICBjb2xvcjogIzBkNmVmZDtcbiAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuICAvLyAmOmhvdmVyIHtcbiAgLy8gICBjb2xvcjogI2ZmZjtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICAvLyB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9tYWNybyc7XG5leHBvcnQgY29uc3QgQ2VudGVyID0gc3R5bGVkLmRpdiBgXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XG4gIG1hcmdpbjogMS43NXJlbSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuYDtcbi8vIGV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbi8vICAgd2lkdGg6IDMzNXB4O1xuLy8gICBoZWlnaHQ6IDQxMHB4O1xuLy8gICBwYWRkaW5nOiAyMHB4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4vLyBgO1xuZXhwb3J0IGNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy56SW5kZXh9O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5leHBvcnQgY29uc3QgTW9kYWxDb21wb25lbnRJbm5lciA9IHN0eWxlZC5kaXYgYFxuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiAocHJvcHMubkJyID8gJzAnIDogJzhweCcpfTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgLy8gYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpLCAzcHggMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IDdweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuYDtcbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudCA9IHN0eWxlZC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogYXV0bztcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggOiAnMCcpfTtcbiAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNzIGVhc2Utb3V0O1xuICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDRyZW0pO1xuICAvLyBhbmltYXRpb246IDAuM3MgZWFzZSBvcGFjaXR5OyAvLywgMC4zcyBlYXNlIHRyYW5zaXRpb247XG4gIHRvcDogNHJlbTtcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgdHJhbnNpdGlvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA2JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAke3Byb3BzID0+IChwcm9wcy5tb2JNYXJnID8gJzUwcHggMjBweCcgOiAnNTBweCBhdXRvJyl9O1xuICB9XG4gIEBrZXlmcmFtZXMgb3BhY2l0eSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHRyYW5zaXRpb24ge1xuICAgIGZyb20ge1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0b3A6IDRyZW07XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsSGVhZGVyID0gc3R5bGVkLmRpdiBgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0LjVweDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsVGl0bGUgPSBzdHlsZWQuZGl2IGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjQuNXB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuZXhwb3J0IGNvbnN0IE1vZGFsQm9keSA9IHN0eWxlZC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmcmV4LXdyYXA6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbSAwO1xuYDtcbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXYgYFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNC41cHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL01vZGFsLnN0eWxlZC5lbGVtZW50cyc7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi9Qb3J0YWwvUG9ydGFsJztcbmV4cG9ydCBjb25zdCBNb2RhbCA9ICh7IGNoaWxkcmVuLCBvbkNsb3NlLCB3aWR0aCwgekluZGV4ID0gJzk5OTk5JywgbW9iTWFyZywgY2xvc2UsIG5CciwgfSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNvbnRhaW5lckNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxDb250YWluZXIsIHsgekluZGV4OiB6SW5kZXgsIG9uQ2xpY2s6IGhhbmRsZUNvbnRhaW5lckNsaWNrIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbENvbXBvbmVudCwgeyB3aWR0aDogd2lkdGgsIG1vYk1hcmc6IG1vYk1hcmcgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbENvbXBvbmVudElubmVyLCB7IG5CcjogbkJyIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJjbG9zZVwiLCBvbkNsaWNrOiBvbkNsb3NlIH0sIFwiXFx1MDBEN1wiKSksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuKSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE1vZGFsVGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsVGl0bGUsIG51bGwsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLk1vZGFsSGVhZGVyLCBudWxsLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IE1vZGFsQm9keSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuTW9kYWxCb2R5LCBudWxsLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5Nb2RhbEZvb3RlciwgbnVsbCwgY2hpbGRyZW4pO1xufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgY29uc3QgUG9ydGFsID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IHVzZU1lbW8oKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGRpdik7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3cgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpZCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAncm93JywgaWQ6IGlkIH0sIGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBUYWJsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICd0YWJsZScgfSwgY2hpbGRyZW4pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRlbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ3Rvb2x0aXBfX2NvbnRlbnQnIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXAsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRlbnQsIG51bGwsIHRvb2x0aXApLFxuICAgICAgICBjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAzNSU7XG5gO1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gc3R5bGVkLmRpdiBgXG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAocHJvcHMuc2hhZG93ID8gJzFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KScgOiAnbm9uZScpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2RhbmdlcicgPyAnI2RjMzU0NScgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnZXJyb3InID8gJyNkYzM1NDUnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyMxOTg3NTQnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2luZm8nID8gJyMwZGNhZjAnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3dhcm5pbmcnID8gJyNmZmMxMDcnIDogJycpfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL0FsZXJ0cy5lbGVtZW50cyc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0LCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoZmFsc2UpLCB0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpO1xuICAgIH0sIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHZpc2libGUgJiYgd2l0aEFsZXJ0cyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuQ29udGFpbmVyLCBudWxsLCBhbGVydHMubWVzc2FnZXMubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLkFsZXJ0LCB7IHNoYWRvdzogdHJ1ZSwgdHlwZTogZS50eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCJjb25zdCBnZXRLZXlWYWx1ZSA9IChvYmosIGtleSkgPT4gb2JqW2tleV07XG5leHBvcnQgY29uc3QgZ2V0RXJyb3JzID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBbeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnVW5rbm93biBlcnJvcicgfV07XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IGdldEtleVZhbHVlKGRhdGEsIGtleSkgfTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgcmVkaXJlY3QgPSAoaGlzdG9yeSwgcmVkaXJlY3QsIGRpciA9ICcnKSA9PiByZWRpcmVjdCAmJiBkaXIgPT09ICdiYWNrJyA/IGhpc3RvcnkuZ29CYWNrKCkgOiBoaXN0b3J5LnB1c2gocmVkaXJlY3QpO1xuZXhwb3J0IGNvbnN0IGRpZ2l0c09ubHkgPSAoZSkgPT4ge1xuICAgIGxldCBjaGFyQ29kZSA9IGUuY2hhckNvZGU7XG4gICAgLy9jb25zb2xlLmxvZyhjaGFyQ29kZSk7XG4gICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgICAvLyBkaWdpdHMgb25seVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4uL2xpYi9Ub29sdGlwJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL2xpYi9Sb3cvUm93JztcbmNvbnN0IHVwQXJyb3cgPSAnXFx1MjE5MSc7XG4vL2Rvd25BcnJvdyA9ICcmI3gwMjI1QzsnO1xuY29uc3QgZG93bkFycm93ID0gJ1xcdTIxOTMnO1xuY29uc3QgYXJyb3cgPSAoZGlyZWN0aW9uKSA9PiBkaXJlY3Rpb24gPT09ICdhc2MnID8gdXBBcnJvdyA6IGRvd25BcnJvdztcbmV4cG9ydCBjb25zdCBUaENlbGwgPSAoeyBpZCwgdGl0bGUsIGluZGV4LCBvbkNsaWNrLCBzb3J0ZWRCeSB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBjbGFzc05hbWU6IFwidG9vbHRpcFwiLCBpZDogaWQsIG9uQ2xpY2s6IG9uQ2xpY2ssIGtleTogaW5kZXggfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzZcXHUwNDNDXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDBBMFxcdTA0MzRcXHUwNDNCXFx1MDQ0RlxcdTAwQTBcXHUwNDQxXFx1MDQzRVxcdTA0NDBcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0M0FcXHUwNDM4XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgeyBpZDogaWQsIGNsYXNzTmFtZTogXCJzb3J0ZWQtcm93XCIgfSxcbiAgICAgICAgICAgIChzb3J0ZWRCeSA9PT0gbnVsbCB8fCBzb3J0ZWRCeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc29ydGVkQnkubmFtZSkgPT09IGlkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogaWQgfSwgYXJyb3coc29ydGVkQnkgPT09IG51bGwgfHwgc29ydGVkQnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRlZEJ5LmRpcmVjdGlvbikpLFxuICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInNvcnRlZC1yb3dfX3RleHRcIiB9LCB0aXRsZSkpKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG5cbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciBOYXRpdmVOdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBOdW1iZXJQcm90b3R5cGUgPSBOYXRpdmVOdW1iZXIucHJvdG90eXBlO1xuXG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ0xBU1NPRiA9IGNsYXNzb2YoY3JlYXRlKE51bWJlclByb3RvdHlwZSkpID09IE5VTUJFUjtcblxuLy8gYFRvTnVtYmVyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxuaWYgKGlzRm9yY2VkKE5VTUJFUiwgIU5hdGl2ZU51bWJlcignIDBvMScpIHx8ICFOYXRpdmVOdW1iZXIoJzBiMScpIHx8IE5hdGl2ZU51bWJlcignKzB4MScpKSkge1xuICB2YXIgTnVtYmVyV3JhcHBlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciBkdW1teSA9IHRoaXM7XG4gICAgcmV0dXJuIGR1bW15IGluc3RhbmNlb2YgTnVtYmVyV3JhcHBlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NMQVNTT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IE51bWJlclByb3RvdHlwZS52YWx1ZU9mLmNhbGwoZHVtbXkpOyB9KSA6IGNsYXNzb2YoZHVtbXkpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlTnVtYmVyKHRvTnVtYmVyKGl0KSksIGR1bW15LCBOdW1iZXJXcmFwcGVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IERFU0NSSVBUT1JTID8gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVOdW1iZXIpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVMyMDE1IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVMyMDE1IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlciwnICtcbiAgICAvLyBFU05leHRcbiAgICAnZnJvbVN0cmluZyxyYW5nZSdcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoTmF0aXZlTnVtYmVyLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKE51bWJlcldyYXBwZXIsIGtleSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlcldyYXBwZXIsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5hdGl2ZU51bWJlciwga2V5KSk7XG4gICAgfVxuICB9XG4gIE51bWJlcldyYXBwZXIucHJvdG90eXBlID0gTnVtYmVyUHJvdG90eXBlO1xuICBOdW1iZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJXcmFwcGVyO1xuICByZWRlZmluZShnbG9iYWwsIE5VTUJFUiwgTnVtYmVyV3JhcHBlcik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9