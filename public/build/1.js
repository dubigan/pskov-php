(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/components/Dashboard.tsx":
/*!*****************************************!*\
  !*** ./assets/components/Dashboard.tsx ***!
  \*****************************************/
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
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Dashboard = function Dashboard(props) {
  var _a;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])({
    ws: null,
    status: 'disconnected'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      websocket = _useState2[0],
      setWebsocket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      uploadFile = _useState4[0],
      setUploadFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      clearDB = _useState6[0],
      setClearDB = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])('json'),
      _useState8 = _slicedToArray(_useState7, 2),
      downloadFormat = _useState8[0],
      setDownloadFormat = _useState8[1];

  var context = Object(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_21__["useAlerts"])();

  var getDownloadUrl = function getDownloadUrl() {
    return "/api/download/";
  };

  var setWebsocketStatus = function setWebsocketStatus(status) {
    setWebsocket(Object.assign(Object.assign({}, websocket), {
      status: status
    }));
  };

  var getWsUrl = function getWsUrl() {
    //console.log("getWsUrl protocol: ", window.location.protocol);
    var ws_scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';

    if (window.location.hostname.toLowerCase().indexOf('localhost') >= 0) {
      return "ws://" + window.location.hostname + ':3000/';
    } // heroku deploy


    var hostname = window.location.hostname.split('.');
    console.log('getWsUrl heroku: ', hostname);

    if (hostname[1] && hostname[1].toLowerCase().indexOf('heroku') >= 0) {
      hostname[0] = 'pskov-ws';
      return "".concat(ws_scheme, "://") + hostname.join('.');
    }

    return 'localhost';
  };

  var checkWebsocket = function checkWebsocket() {
    var ws = websocket.ws;
    if (!ws || ws.readyState === WebSocket.CLOSED) connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
  };

  var connectWebsocket = function connectWebsocket() {
    var timeout = 250; //const self = this; // cache the this

    var connectInterval; //const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
    //const url = `ws://${this.getHostName()}:8080/`;

    var url = getWsUrl();
    console.log('connectWebsocket url: ', url);
    var ws = new WebSocket(url);

    ws.onopen = function () {
      timeout = 250; // reset timer to 250 on open of websocket connection

      clearTimeout(connectInterval); //console.log(`connected to ${url}`);

      setWebsocketStatus("connected to ".concat(url));
    };

    ws.onmessage = function (evt) {
      // listen to data sent from the websocket server
      var data = JSON.parse(evt.data);
      var messages = [];

      if (data) {
        //console.log('onmessage', data);
        messages.push(data);
        context.setAlerts(messages);
      }
    };

    ws.onclose = function () {
      //console.log('disconnected');
      setWebsocketStatus('disconnected'); // automatically try to reconnect on connection loss

      timeout *= 2; //increment retry interval

      connectInterval = global.setTimeout(checkWebsocket, Math.min(10000, timeout)); //call check function after timeout
    };

    ws.onerror = function (e) {
      console.log('websocket error', e);
      setWebsocketStatus("websocket error: ".concat(e));
    };

    setWebsocket(Object.assign(Object.assign({}, websocket), {
      ws: ws
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_15__["useEffect"])(function () {
    connectWebsocket();
  }, []);

  var selectFormat = function selectFormat(e) {
    setDownloadFormat(e.target.value);
  };

  var selectFileToUpload = function selectFileToUpload(e) {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = function (e) {
      var file = e.target.files[0];
      setUploadFile(file);
    };

    input.click();
  };

  var sendFile = function sendFile(e) {
    var reader = new FileReader();
    reader.readAsText(uploadFile, 'UTF-8'); // here we tell the reader what to do when it's done reading...

    reader.onload = function (readerEvent) {
      var content = readerEvent.target.result; // this is the content!

      var ws = websocket.ws;

      if (ws !== null) {
        ws.send(JSON.stringify({
          type: 'utf8',
          cleardb: clearDB,
          content: content
        }));
      }
    };
  };

  var handleClearDB = function handleClearDB() {
    setClearDB(!clearDB);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "col-12 text-left"
  }, "Websocket status: ", websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
    auxClassName: "form__label_upload"
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
    type: "check",
    name: "clearBD",
    value: clearDB,
    onChange: handleClearDB,
    disabled: websocket.status === 'disconnected'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
    auxClassName: "form__label_upload"
  }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
    auxClassName: "form__text form__text_upload",
    name: "uploadFileName",
    id: "uploadFileName",
    type: "text",
    value: (_a = uploadFile) === null || _a === void 0 ? void 0 : _a.name,
    readOnly: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"] //variant="primary"
  , {
    //variant="primary"
    className: "btn-primary",
    onClick: selectFileToUpload,
    disabled: websocket.status === 'disconnected'
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"] //variant="primary"
  , {
    //variant="primary"
    className: "btn-primary",
    onClick: sendFile,
    disabled: uploadFile === null
  }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
    auxClassName: "form__label_download"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Select, {
    auxClassName: "form__select_download",
    onChange: selectFormat
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
    value: "json"
  }, "json")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
    action: getDownloadUrl(),
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "hidden",
    name: "format",
    value: downloadFormat
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
    type: "submit",
    className: "btn-primary"
  }, "\u0421\u0442\u0430\u0440\u0442"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(Dashboard));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./assets/components/lib/Card.tsx":
/*!****************************************!*\
  !*** ./assets/components/lib/Card.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__header'
  }, children);
};

var CardTitle = function CardTitle(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__title'
  }, children);
};

var CardBody = function CardBody(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__body'
  }, children);
};

var CardFooter = function CardFooter(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card__footer'
  }, children);
};

var Card = function Card(_ref5) {
  var children = _ref5.children,
      className = _ref5.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card'
  }, children);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./assets/components/lib/Form.tsx":
/*!****************************************!*\
  !*** ./assets/components/lib/Form.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var baseClass = 'form';

var getClassName = function getClassName() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var auxClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (className) return className;
  return baseClass + suffix + (auxClassName ? ' ' + auxClassName : '');
};

var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      auxClassName = _ref.auxClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: getClassName(className, auxClassName, '__label')
  }, children);
};

var FormGroup = function FormGroup(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      auxClassName = _ref2.auxClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: getClassName(className, auxClassName, '__group')
  }, children);
};

var FormControlSelect = function FormControlSelect(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: getClassName(props.className, props.auxClassName, '__select'),
    onChange: props.onChange
  }, props.children);
};

var FormControl = function FormControl(props) {
  var type = 'text';
  if (props.type) type = props.type;

  switch (type) {
    case 'text':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object.assign({}, props, {
        type: "text",
        className: getClassName(props.className, props.auxClassName, '__text'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange,
        //onClick={props.onClick}
        readOnly: !props.onChange
      }));

    case 'textarea':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", Object.assign({}, props, {
        className: getClassName(props.className, props.auxClassName, '__control'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        rows: props.rows ? +props.rows : undefined,
        onChange: props.onChange
      }));

    case 'check':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object.assign({}, props, {
        type: "checkbox",
        className: getClassName(props.className, props.auxClassName, '__check'),
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength ? +props.maxLength : undefined,
        onChange: props.onChange
      }));

    case 'select':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormControlSelect, Object.assign({}, props), props.children);

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }
}; // const Form: TForm = props => {
//   if (props.baseClassName) baseClass = props.baseClassName;
//   return (
//     <form
//       action={props.action}
//       method={props.method}
//       className={getClassName(props.className, props.auxClassName)}
//       onSubmit={props.onSubmit}
//     >
//       {props.children}
//     </form>
//   );
// };


function Form(props) {
  if (props.baseClassName) baseClass = props.baseClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: props.action,
    method: props.method,
    className: getClassName(props.className, props.auxClassName),
    onSubmit: props.onSubmit
  }, props.children);
}

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormControlSelect;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
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

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
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

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJfYSIsInVzZVN0YXRlIiwid3MiLCJzdGF0dXMiLCJ3ZWJzb2NrZXQiLCJzZXRXZWJzb2NrZXQiLCJ1cGxvYWRGaWxlIiwic2V0VXBsb2FkRmlsZSIsImNsZWFyREIiLCJzZXRDbGVhckRCIiwiZG93bmxvYWRGb3JtYXQiLCJzZXREb3dubG9hZEZvcm1hdCIsImNvbnRleHQiLCJ1c2VBbGVydHMiLCJnZXREb3dubG9hZFVybCIsInNldFdlYnNvY2tldFN0YXR1cyIsIk9iamVjdCIsImFzc2lnbiIsImdldFdzVXJsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImNoZWNrV2Vic29ja2V0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJ0aW1lb3V0IiwiY29ubmVjdEludGVydmFsIiwidXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2VzIiwicHVzaCIsInNldEFsZXJ0cyIsIm9uY2xvc2UiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJlIiwidXNlRWZmZWN0Iiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwic2VuZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwiaGFuZGxlQ2xlYXJEQiIsIlJlYWN0IiwiQWxlcnRzIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsImNsYXNzTmFtZSIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsIkZyYWdtZW50IiwiYmFzZUNsYXNzTmFtZSIsIm9uU3VibWl0Iiwid2l0aEFsZXJ0cyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibGVuZ3RoIiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsIm1hcCIsImluZGV4Iiwia2V5IiwibWVzc2FnZSIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hvdyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFX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QjtBQUNqRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnRkFBZ0Y7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakJELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNyQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMscUZBQTRCOztBQUVqRDtBQUNBO0FBQ0EsR0FBRyxpRUFBaUU7QUFDcEU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUV4RDtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJy4vbGliL0NhcmQnO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL2xpYi9hbGVydC9BbGVydHMnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBbd2Vic29ja2V0LCBzZXRXZWJzb2NrZXRdID0gdXNlU3RhdGUoe1xuICAgICAgICB3czogbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICB9KTtcbiAgICBjb25zdCBbdXBsb2FkRmlsZSwgc2V0VXBsb2FkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY2xlYXJEQiwgc2V0Q2xlYXJEQl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rvd25sb2FkRm9ybWF0LCBzZXREb3dubG9hZEZvcm1hdF0gPSB1c2VTdGF0ZSgnanNvbicpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gICAgfTtcbiAgICBjb25zdCBzZXRXZWJzb2NrZXRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgIHNldFdlYnNvY2tldChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdlYnNvY2tldCksIHsgc3RhdHVzOiBzdGF0dXMgfSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0V3NVcmwgPSAoKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRXc1VybCBwcm90b2NvbDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCk7XG4gICAgICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsb2NhbGhvc3QnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHdzOi8vYCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzAwMC8nO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlcm9rdSBkZXBsb3lcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgICAgICBpZiAoaG9zdG5hbWVbMV0gJiYgaG9zdG5hbWVbMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoZXJva3UnKSA+PSAwKSB7XG4gICAgICAgICAgICBob3N0bmFtZVswXSA9ICdwc2tvdi13cyc7XG4gICAgICAgICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdzID0gd2Vic29ja2V0LndzO1xuICAgICAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpXG4gICAgICAgICAgICBjb25uZWN0V2Vic29ja2V0KCk7IC8vY2hlY2sgaWYgd2Vic29ja2V0IGluc3RhbmNlIGlzIGNsb3NlZCwgaWYgc28gY2FsbCBgY29ubmVjdGAgZnVuY3Rpb24uXG4gICAgfTtcbiAgICBjb25zdCBjb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IDI1MDtcbiAgICAgICAgLy9jb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICAgICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICAgICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgICAgICAvL2NvbnN0IHVybCA9IGB3czovLyR7dGhpcy5nZXRIb3N0TmFtZSgpfTo4MDgwL2A7XG4gICAgICAgIGNvbnN0IHVybCA9IGdldFdzVXJsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0V2Vic29ja2V0IHVybDogJywgdXJsKTtcbiAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgICAgIHNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICB9O1xuICAgICAgICB3cy5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgICAgICAgIHRpbWVvdXQgKj0gMjsgLy9pbmNyZW1lbnQgcmV0cnkgaW50ZXJ2YWxcbiAgICAgICAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IGdsb2JhbC5zZXRUaW1lb3V0KGNoZWNrV2Vic29ja2V0LCBNYXRoLm1pbigxMDAwMCwgdGltZW91dCkpOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgICAgICB9O1xuICAgICAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgICAgICAgICBzZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgICAgICB9O1xuICAgICAgICBzZXRXZWJzb2NrZXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJzb2NrZXQpLCB7IHdzOiB3cyB9KSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25uZWN0V2Vic29ja2V0KCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNlbGVjdEZvcm1hdCA9IChlKSA9PiB7XG4gICAgICAgIHNldERvd25sb2FkRm9ybWF0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdEZpbGVUb1VwbG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgc2V0VXBsb2FkRmlsZShmaWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICB9O1xuICAgIGNvbnN0IHNlbmRGaWxlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQodXBsb2FkRmlsZSwgJ1VURi04Jyk7XG4gICAgICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgICAgICByZWFkZXIub25sb2FkID0gcmVhZGVyRXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICAgICAgICBjb25zdCB3cyA9IHdlYnNvY2tldC53cztcbiAgICAgICAgICAgIGlmICh3cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXRmOCcsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyZGI6IGNsZWFyREIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xlYXJEQiA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2xlYXJEQighY2xlYXJEQik7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sLTEyIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiV2Vic29ja2V0IHN0YXR1czogXCIsXG4gICAgICAgICAgICAgICAgICAgIHdlYnNvY2tldC5zdGF0dXMpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQxRVxcdTA0NDdcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgREJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwiY2hlY2tcIiwgbmFtZTogXCJjbGVhckJEXCIsIHZhbHVlOiBjbGVhckRCLCBvbkNoYW5nZTogaGFuZGxlQ2xlYXJEQiwgZGlzYWJsZWQ6IHdlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzOVxcdTA0M0IgXFx1MDQzN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzggXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3RleHQgZm9ybV9fdGV4dF91cGxvYWRcIiwgbmFtZTogXCJ1cGxvYWRGaWxlTmFtZVwiLCBpZDogXCJ1cGxvYWRGaWxlTmFtZVwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IHVwbG9hZEZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lLCByZWFkT25seTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHNlbGVjdEZpbGVUb1VwbG9hZCwgZGlzYWJsZWQ6IHdlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0sIFwiLi4uXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogc2VuZEZpbGUsIGRpc2FibGVkOiB1cGxvYWRGaWxlID09PSBudWxsIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgREJcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIiB9LCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzMVxcdTA0MzVcXHUwNDQwXFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0MiBcXHUwNDQxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDRGXFx1MDQzNVxcdTA0M0NcXHUwNDNFXFx1MDQzM1xcdTA0M0UgXFx1MDQ0NFxcdTA0MzBcXHUwNDM5XFx1MDQzQlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5TZWxlY3QsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3NlbGVjdF9kb3dubG9hZFwiLCBvbkNoYW5nZTogc2VsZWN0Rm9ybWF0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwianNvblwiIH0sIFwianNvblwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBnZXREb3dubG9hZFVybCgpLCBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImZvcm1hdFwiLCB2YWx1ZTogZG93bmxvYWRGb3JtYXQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGFzaGJvYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQsIHdpdGhBbGVydHMgPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgaWYgKCF3aXRoQWxlcnRzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheSh0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNhY2hlID0ge307XG5cbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgb3B0aW9ucykge1xuICBpZiAoaGFzKGNhY2hlLCBNRVRIT0RfTkFNRSkpIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV07XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICB2YXIgQUNDRVNTT1JTID0gaGFzKG9wdGlvbnMsICdBQ0NFU1NPUlMnKSA/IG9wdGlvbnMuQUNDRVNTT1JTIDogZmFsc2U7XG4gIHZhciBhcmd1bWVudDAgPSBoYXMob3B0aW9ucywgMCkgPyBvcHRpb25zWzBdIDogdGhyb3dlcjtcbiAgdmFyIGFyZ3VtZW50MSA9IGhhcyhvcHRpb25zLCAxKSA/IG9wdGlvbnNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXSA9ICEhbWV0aG9kICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFDQ0VTU09SUyAmJiAhREVTQ1JJUFRPUlMpIHJldHVybiB0cnVlO1xuICAgIHZhciBPID0geyBsZW5ndGg6IC0xIH07XG5cbiAgICBpZiAoQUNDRVNTT1JTKSBkZWZpbmVQcm9wZXJ0eShPLCAxLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogdGhyb3dlciB9KTtcbiAgICBlbHNlIE9bMV0gPSAxO1xuXG4gICAgbWV0aG9kLmNhbGwoTywgYXJndW1lbnQwLCBhcmd1bWVudDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9