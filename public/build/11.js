(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
/* harmony import */ var _lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Form/Form */ "./assets/components/lib/Form/Form.tsx");
/* harmony import */ var _lib_Button_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Button/Button */ "./assets/components/lib/Button/Button.tsx");
/* harmony import */ var _lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Card/Card */ "./assets/components/lib/Card/Card.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Dashboard = function Dashboard() {
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

  var context = Object(_lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_20__["useAlerts"])();

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
        context.setAlerts({
          messages: messages
        });
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "col-12 text-left"
  }, "Websocket status: ", websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
    auxClassName: "form__label_upload"
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
    type: "check",
    name: "clearBD",
    value: clearDB,
    onChange: handleClearDB,
    disabled: websocket.status === 'disconnected'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
    auxClassName: "form__label_upload"
  }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
    auxClassName: "form__text form__text_upload",
    name: "uploadFileName",
    id: "uploadFileName",
    type: "text",
    value: (_a = uploadFile) === null || _a === void 0 ? void 0 : _a.name,
    readOnly: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
  , {
    //variant="primary"
    className: "btn-primary",
    onClick: selectFileToUpload,
    disabled: websocket.status === 'disconnected'
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
  , {
    //variant="primary"
    className: "btn-primary",
    onClick: sendFile,
    disabled: uploadFile === null
  }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
    auxClassName: "form__group_horiz"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
    auxClassName: "form__label_download"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Form_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Select, {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_lib_Button_Button__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    type: "submit",
    className: "btn-primary"
  }, "\u0421\u0442\u0430\u0440\u0442"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);
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

/***/ "./assets/components/lib/Card/Card.tsx":
/*!*********************************************!*\
  !*** ./assets/components/lib/Card/Card.tsx ***!
  \*********************************************/
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

/***/ "./assets/components/lib/Form/Form.tsx":
/*!*********************************************!*\
  !*** ./assets/components/lib/Form/Form.tsx ***!
  \*********************************************/
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLmVsZW1lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJfYSIsInVzZVN0YXRlIiwid3MiLCJzdGF0dXMiLCJ3ZWJzb2NrZXQiLCJzZXRXZWJzb2NrZXQiLCJ1cGxvYWRGaWxlIiwic2V0VXBsb2FkRmlsZSIsImNsZWFyREIiLCJzZXRDbGVhckRCIiwiZG93bmxvYWRGb3JtYXQiLCJzZXREb3dubG9hZEZvcm1hdCIsImNvbnRleHQiLCJ1c2VBbGVydHMiLCJnZXREb3dubG9hZFVybCIsInNldFdlYnNvY2tldFN0YXR1cyIsIk9iamVjdCIsImFzc2lnbiIsImdldFdzVXJsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImNoZWNrV2Vic29ja2V0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJ0aW1lb3V0IiwiY29ubmVjdEludGVydmFsIiwidXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2VzIiwicHVzaCIsInNldEFsZXJ0cyIsIm9uY2xvc2UiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJlIiwidXNlRWZmZWN0Iiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwic2VuZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwiaGFuZGxlQ2xlYXJEQiIsIlJlYWN0IiwiQWxlcnRzIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsImNsYXNzTmFtZSIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwidG9vbHRpcCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsInByb3BzIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJGcmFnbWVudCIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFsZXJ0Iiwic2hhZG93Iiwid2l0aEFsZXJ0cyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwiZGVmVGltZW91dCIsIlN0eWxlZCIsIm1hcCIsImluZGV4Iiwia2V5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQUlDLEVBQUo7O0FBRG9CLGtCQUVjQyx1REFBUSxDQUFDO0FBQ3ZDQyxNQUFFLEVBQUUsSUFEbUM7QUFFdkNDLFVBQU0sRUFBRTtBQUYrQixHQUFELENBRnRCO0FBQUE7QUFBQSxNQUViQyxTQUZhO0FBQUEsTUFFRkMsWUFGRTs7QUFBQSxtQkFNZ0JKLHVEQUFRLENBQUMsSUFBRCxDQU54QjtBQUFBO0FBQUEsTUFNYkssVUFOYTtBQUFBLE1BTURDLGFBTkM7O0FBQUEsbUJBT1VOLHVEQUFRLENBQUMsS0FBRCxDQVBsQjtBQUFBO0FBQUEsTUFPYk8sT0FQYTtBQUFBLE1BT0pDLFVBUEk7O0FBQUEsbUJBUXdCUix1REFBUSxDQUFDLE1BQUQsQ0FSaEM7QUFBQTtBQUFBLE1BUWJTLGNBUmE7QUFBQSxNQVFHQyxpQkFSSDs7QUFTcEIsTUFBTUMsT0FBTyxHQUFHQywwRUFBUyxFQUF6Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekI7QUFDSCxHQUZEOztBQUdBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJC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NEUsU0FBRyxFQUFFRDtBQUFuQyxLQUFsQyxFQUE4RXBGLENBQUMsQ0FBQ3NGLE9BQWhGLENBQVI7QUFDSCxHQUh1SCxDQUE1QyxDQUFwRSxDQUFSO0FBSUgsQ0FaRDs7QUFhZTNELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYixZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTLEVBQUU7QUFDMUQsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDcEQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3ZFLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCx3QkFBd0I7O0FBRWpGO0FBQ0E7QUFDQSxHQUFHLDJGQUEyRjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxzRUFBc0U7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9saWIvRm9ybS9Gb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZC9DYXJkJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRzJztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0Q29udGV4dCc7XG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IFt3ZWJzb2NrZXQsIHNldFdlYnNvY2tldF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdzOiBudWxsLFxuICAgICAgICBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLFxuICAgIH0pO1xuICAgIGNvbnN0IFt1cGxvYWRGaWxlLCBzZXRVcGxvYWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjbGVhckRCLCBzZXRDbGVhckRCXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZG93bmxvYWRGb3JtYXQsIHNldERvd25sb2FkRm9ybWF0XSA9IHVzZVN0YXRlKCdqc29uJyk7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGdldERvd25sb2FkVXJsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgICB9O1xuICAgIGNvbnN0IHNldFdlYnNvY2tldFN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgc2V0V2Vic29ja2V0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd2Vic29ja2V0KSwgeyBzdGF0dXM6IHN0YXR1cyB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRXc1VybCA9ICgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcbiAgICAgICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgd3M6Ly9gICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozMDAwLyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGVyb2t1IGRlcGxveVxuICAgICAgICBjb25zdCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0V3NVcmwgaGVyb2t1OiAnLCBob3N0bmFtZSk7XG4gICAgICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgICAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgICAgICAgIHJldHVybiBgJHt3c19zY2hlbWV9Oi8vYCArIGhvc3RuYW1lLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2xvY2FsaG9zdCc7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1dlYnNvY2tldCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd3MgPSB3ZWJzb2NrZXQud3M7XG4gICAgICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRClcbiAgICAgICAgICAgIGNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgICB9O1xuICAgIGNvbnN0IGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gMjUwO1xuICAgICAgICAvL2NvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgICAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgICAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICAgICAgY29uc3QgdXJsID0gZ2V0V3NVcmwoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ29ubWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRBbGVydHMoeyBtZXNzYWdlcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgICAgICAgIHRpbWVvdXQgKj0gMjsgLy9pbmNyZW1lbnQgcmV0cnkgaW50ZXJ2YWxcbiAgICAgICAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IGdsb2JhbC5zZXRUaW1lb3V0KGNoZWNrV2Vic29ja2V0LCBNYXRoLm1pbigxMDAwMCwgdGltZW91dCkpOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgICAgICB9O1xuICAgICAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgICAgICAgICBzZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgICAgICB9O1xuICAgICAgICBzZXRXZWJzb2NrZXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJzb2NrZXQpLCB7IHdzOiB3cyB9KSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25uZWN0V2Vic29ja2V0KCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNlbGVjdEZvcm1hdCA9IChlKSA9PiB7XG4gICAgICAgIHNldERvd25sb2FkRm9ybWF0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdEZpbGVUb1VwbG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgc2V0VXBsb2FkRmlsZShmaWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICB9O1xuICAgIGNvbnN0IHNlbmRGaWxlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQodXBsb2FkRmlsZSwgJ1VURi04Jyk7XG4gICAgICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgICAgICByZWFkZXIub25sb2FkID0gcmVhZGVyRXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICAgICAgICBjb25zdCB3cyA9IHdlYnNvY2tldC53cztcbiAgICAgICAgICAgIGlmICh3cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXRmOCcsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyZGI6IGNsZWFyREIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xlYXJEQiA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2xlYXJEQighY2xlYXJEQik7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sLTEyIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiV2Vic29ja2V0IHN0YXR1czogXCIsXG4gICAgICAgICAgICAgICAgICAgIHdlYnNvY2tldC5zdGF0dXMpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQxRVxcdTA0NDdcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgREJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwiY2hlY2tcIiwgbmFtZTogXCJjbGVhckJEXCIsIHZhbHVlOiBjbGVhckRCLCBvbkNoYW5nZTogaGFuZGxlQ2xlYXJEQiwgZGlzYWJsZWQ6IHdlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzOVxcdTA0M0IgXFx1MDQzN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzggXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3RleHQgZm9ybV9fdGV4dF91cGxvYWRcIiwgbmFtZTogXCJ1cGxvYWRGaWxlTmFtZVwiLCBpZDogXCJ1cGxvYWRGaWxlTmFtZVwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IHVwbG9hZEZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lLCByZWFkT25seTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHNlbGVjdEZpbGVUb1VwbG9hZCwgZGlzYWJsZWQ6IHdlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0sIFwiLi4uXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogc2VuZEZpbGUsIGRpc2FibGVkOiB1cGxvYWRGaWxlID09PSBudWxsIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgREJcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIiB9LCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzMVxcdTA0MzVcXHUwNDQwXFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0MiBcXHUwNDQxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDRGXFx1MDQzNVxcdTA0M0NcXHUwNDNFXFx1MDQzM1xcdTA0M0UgXFx1MDQ0NFxcdTA0MzBcXHUwNDM5XFx1MDQzQlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5TZWxlY3QsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3NlbGVjdF9kb3dubG9hZFwiLCBvbkNoYW5nZTogc2VsZWN0Rm9ybWF0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwianNvblwiIH0sIFwianNvblwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBnZXREb3dubG9hZFVybCgpLCBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImZvcm1hdFwiLCB2YWx1ZTogZG93bmxvYWRGb3JtYXQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMzUlO1xuYDtcbmV4cG9ydCBjb25zdCBBbGVydCA9IHN0eWxlZC5kaXYgYFxuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gKHByb3BzLnNoYWRvdyA/ICcxcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCknIDogJ25vbmUnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdkYW5nZXInID8gJyNkYzM1NDUnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2Vycm9yJyA/ICcjZGMzNTQ1JyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdzdWNjZXNzJyA/ICcjMTk4NzU0JyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdpbmZvJyA/ICcjMGRjYWYwJyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICd3YXJuaW5nJyA/ICcjZmZjMTA3JyA6ICcnKX07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9BbGVydHMuZWxlbWVudHMnO1xuY29uc3QgQWxlcnRzID0gKHsgdGltZW91dCwgd2l0aEFsZXJ0cyA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGVydHMgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBkZWZUaW1lb3V0ID0gNTAwMDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgdGltZW91dCA/IHRpbWVvdXQgOiBkZWZUaW1lb3V0KTtcbiAgICB9LCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB2aXNpYmxlICYmIHdpdGhBbGVydHMgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLkNvbnRhaW5lciwgbnVsbCwgYWxlcnRzLm1lc3NhZ2VzLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdHlwZSA9IGdldFR5cGUoZS50eXBlKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5BbGVydCwgeyBzaGFkb3c6IHRydWUsIHR5cGU6IGUudHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9