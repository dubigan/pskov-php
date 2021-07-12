(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/* harmony import */ var _lib_Button_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Button/Button */ "./assets/components/lib/Button/Button.tsx");
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_18__["Button"] //variant="primary"
  , {
    //variant="primary"
    className: "btn-primary",
    onClick: selectFileToUpload,
    disabled: websocket.status === 'disconnected'
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_18__["Button"] //variant="primary"
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_18__["Button"], {
    type: "submit",
    className: "btn-primary"
  }, "\u0421\u0442\u0430\u0440\u0442"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(Dashboard));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9hbGVydC9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwiX2EiLCJ1c2VTdGF0ZSIsIndzIiwic3RhdHVzIiwid2Vic29ja2V0Iiwic2V0V2Vic29ja2V0IiwidXBsb2FkRmlsZSIsInNldFVwbG9hZEZpbGUiLCJjbGVhckRCIiwic2V0Q2xlYXJEQiIsImRvd25sb2FkRm9ybWF0Iiwic2V0RG93bmxvYWRGb3JtYXQiLCJjb250ZXh0IiwidXNlQWxlcnRzIiwiZ2V0RG93bmxvYWRVcmwiLCJzZXRXZWJzb2NrZXRTdGF0dXMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRXc1VybCIsIndzX3NjaGVtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImpvaW4iLCJjaGVja1dlYnNvY2tldCIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0IiwidGltZW91dCIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsIm9ub3BlbiIsImNsZWFyVGltZW91dCIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlcyIsInB1c2giLCJzZXRBbGVydHMiLCJvbmNsb3NlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwiZSIsInVzZUVmZmVjdCIsInNlbGVjdEZvcm1hdCIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0RmlsZVRvVXBsb2FkIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInNlbmRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzZW5kIiwic3RyaW5naWZ5IiwiY2xlYXJkYiIsImhhbmRsZUNsZWFyREIiLCJSZWFjdCIsIkFsZXJ0cyIsIkNhcmQiLCJIZWFkZXIiLCJGb3JtIiwiTGFiZWwiLCJjbGFzc05hbWUiLCJCb2R5IiwiR3JvdXAiLCJhdXhDbGFzc05hbWUiLCJDb250cm9sIiwibmFtZSIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJpZCIsInJlYWRPbmx5IiwiQnV0dG9uIiwib25DbGljayIsIlNlbGVjdCIsImFjdGlvbiIsIm1ldGhvZCIsIndpdGhSb3V0ZXIiLCJ0b29sdGlwIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJGb290ZXIiLCJUaXRsZSIsImJhc2VDbGFzcyIsImdldENsYXNzTmFtZSIsInN1ZmZpeCIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sU2VsZWN0IiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJGcmFnbWVudCIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCIsIndpdGhBbGVydHMiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImFsZXJ0cyIsImRlZlRpbWVvdXQiLCJzaG93QWxlcnRzIiwidmlldyIsImxlbmd0aCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJtYXAiLCJpbmRleCIsImtleSIsIm1lc3NhZ2UiLCJkZWxheSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNob3ciLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtB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Qyx5RkFBOEI7QUFDakQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0ZBQWdGO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDckJBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHFGQUE0Qjs7QUFFakQ7QUFDQTtBQUNBLEdBQUcsaUVBQWlFO0FBQ3BFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2xpYi9Gb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IFt3ZWJzb2NrZXQsIHNldFdlYnNvY2tldF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdzOiBudWxsLFxuICAgICAgICBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLFxuICAgIH0pO1xuICAgIGNvbnN0IFt1cGxvYWRGaWxlLCBzZXRVcGxvYWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjbGVhckRCLCBzZXRDbGVhckRCXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZG93bmxvYWRGb3JtYXQsIHNldERvd25sb2FkRm9ybWF0XSA9IHVzZVN0YXRlKCdqc29uJyk7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGdldERvd25sb2FkVXJsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgICB9O1xuICAgIGNvbnN0IHNldFdlYnNvY2tldFN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgc2V0V2Vic29ja2V0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd2Vic29ja2V0KSwgeyBzdGF0dXM6IHN0YXR1cyB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRXc1VybCA9ICgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcbiAgICAgICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgd3M6Ly9gICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozMDAwLyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGVyb2t1IGRlcGxveVxuICAgICAgICBjb25zdCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0V3NVcmwgaGVyb2t1OiAnLCBob3N0bmFtZSk7XG4gICAgICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgICAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgICAgICAgIHJldHVybiBgJHt3c19zY2hlbWV9Oi8vYCArIGhvc3RuYW1lLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2xvY2FsaG9zdCc7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1dlYnNvY2tldCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd3MgPSB3ZWJzb2NrZXQud3M7XG4gICAgICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRClcbiAgICAgICAgICAgIGNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgICB9O1xuICAgIGNvbnN0IGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gMjUwO1xuICAgICAgICAvL2NvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgICAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgICAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICAgICAgY29uc3QgdXJsID0gZ2V0V3NVcmwoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ29ubWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMobWVzc2FnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICBzZXRXZWJzb2NrZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgICAgICAgdGltZW91dCAqPSAyOyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgICAgICAgY29ubmVjdEludGVydmFsID0gZ2xvYmFsLnNldFRpbWVvdXQoY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCB0aW1lb3V0KSk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldFdlYnNvY2tldChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdlYnNvY2tldCksIHsgd3M6IHdzIH0pKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgc2VsZWN0Rm9ybWF0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0RG93bmxvYWRGb3JtYXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3Qgc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICBzZXRVcGxvYWRGaWxlKGZpbGUpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgIH07XG4gICAgY29uc3Qgc2VuZEZpbGUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dCh1cGxvYWRGaWxlLCAnVVRGLTgnKTtcbiAgICAgICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgICAgICAgIGNvbnN0IHdzID0gd2Vic29ja2V0LndzO1xuICAgICAgICAgICAgaWYgKHdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJkYjogY2xlYXJEQixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbGVhckRCID0gKCkgPT4ge1xuICAgICAgICBzZXRDbGVhckRCKCFjbGVhckRCKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtMTIgdGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJXZWJzb2NrZXQgc3RhdHVzOiBcIixcbiAgICAgICAgICAgICAgICAgICAgd2Vic29ja2V0LnN0YXR1cykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDFFXFx1MDQ0N1xcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgdHlwZTogXCJjaGVja1wiLCBuYW1lOiBcImNsZWFyQkRcIiwgdmFsdWU6IGNsZWFyREIsIG9uQ2hhbmdlOiBoYW5kbGVDbGVhckRCLCBkaXNhYmxlZDogd2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQyNFxcdTA0MzBcXHUwNDM5XFx1MDQzQiBcXHUwNDM3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzOCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiLCBuYW1lOiBcInVwbG9hZEZpbGVOYW1lXCIsIGlkOiBcInVwbG9hZEZpbGVOYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gdXBsb2FkRmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUsIHJlYWRPbmx5OiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogc2VsZWN0RmlsZVRvVXBsb2FkLCBkaXNhYmxlZDogd2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSwgXCIuLi5cIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiBzZW5kRmlsZSwgZGlzYWJsZWQ6IHVwbG9hZEZpbGUgPT09IG51bGwgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBEQlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF9kb3dubG9hZFwiIH0sIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMxXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQ0MlxcdTA0MzUgXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQyIFxcdTA0NDFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0NEZcXHUwNDM1XFx1MDQzQ1xcdTA0M0VcXHUwNDMzXFx1MDQzRSBcXHUwNDQ0XFx1MDQzMFxcdTA0MzlcXHUwNDNCXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlNlbGVjdCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fc2VsZWN0X2Rvd25sb2FkXCIsIG9uQ2hhbmdlOiBzZWxlY3RGb3JtYXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJqc29uXCIgfSwgXCJqc29uXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IGdldERvd25sb2FkVXJsKCksIG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiZm9ybWF0XCIsIHZhbHVlOiBkb3dubG9hZEZvcm1hdCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihEYXNoYm9hcmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKTtcbn07XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnZm9ybSc7XG5jb25zdCBnZXRDbGFzc05hbWUgPSAoY2xhc3NOYW1lID0gJycsIGF1eENsYXNzTmFtZSA9ICcnLCBzdWZmaXggPSAnJykgPT4ge1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJhc2VDbGFzcyArIHN1ZmZpeCArIChhdXhDbGFzc05hbWUgPyAnICcgKyBhdXhDbGFzc05hbWUgOiAnJyk7XG59O1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19sYWJlbCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtR3JvdXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2dyb3VwJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Db250cm9sU2VsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3NlbGVjdCcpLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IChwcm9wcykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG4vLyBjb25zdCBGb3JtOiBURm9ybSA9IHByb3BzID0+IHtcbi8vICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGZvcm1cbi8vICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuLy8gICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XG4vLyAgICAgICBjbGFzc05hbWU9e2dldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSl9XG4vLyAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4vLyAgICAgPlxuLy8gICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgIDwvZm9ybT5cbi8vICAgKTtcbi8vIH07XG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpXG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogcHJvcHMuYWN0aW9uLCBtZXRob2Q6IHByb3BzLm1ldGhvZCwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpLCBvblN1Ym1pdDogcHJvcHMub25TdWJtaXQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn1cbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uU2VsZWN0ID0gRm9ybUNvbnRyb2xTZWxlY3Q7XG5Gb3JtLkdyb3VwID0gRm9ybUdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuY29uc3QgQWxlcnRzID0gKHsgdGltZW91dCwgd2l0aEFsZXJ0cyA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBkZWZUaW1lb3V0ID0gNTAwMDtcbiAgICBjb25zdCBzaG93QWxlcnRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdmlldyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGVydHM7XG4gICAgICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldFZpc2libGUodmlldyk7XG4gICAgfTtcbiAgICBpZiAoIXdpdGhBbGVydHMpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB1c2VFZmZlY3Qoc2hvd0FsZXJ0cywgW2FsZXJ0cy5tZXNzYWdlc10pO1xuICAgIGNvbnN0IGdldFR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2luZm8nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgdCA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXkgPyAoYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoZS50eXBlKTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2FsZXJ0IGFsZXJ0XycgKyB0eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgICAgICB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgIH07XG4gICAgY29uc3QgZGVsYXkgPSAod2FpdCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCcnKSwgd2FpdCkpO1xuICAgIH07XG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIGRlbGF5KHRpbWVvdXQgPyB0aW1lb3V0IDogZGVmVGltZW91dCkudGhlbigoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgZ2V0QWxlcnRzKGFsZXJ0cy5tZXNzYWdlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBzaG93KCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY2FjaGUgPSB7fTtcblxudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFERVNDUklQVE9SUykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBzaG91bGQgaGF2ZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgKEVkZ2UgYnVnKVxuICBpZiAoREVTQ1JJUFRPUlMgJiYgbmF0aXZlQXNzaWduKHsgYjogMSB9LCBuYXRpdmVBc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogbmF0aXZlQXNzaWduO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=