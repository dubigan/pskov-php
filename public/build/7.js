(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLmVsZW1lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJfYSIsInVzZVN0YXRlIiwid3MiLCJzdGF0dXMiLCJ3ZWJzb2NrZXQiLCJzZXRXZWJzb2NrZXQiLCJ1cGxvYWRGaWxlIiwic2V0VXBsb2FkRmlsZSIsImNsZWFyREIiLCJzZXRDbGVhckRCIiwiZG93bmxvYWRGb3JtYXQiLCJzZXREb3dubG9hZEZvcm1hdCIsImNvbnRleHQiLCJ1c2VBbGVydHMiLCJnZXREb3dubG9hZFVybCIsInNldFdlYnNvY2tldFN0YXR1cyIsIk9iamVjdCIsImFzc2lnbiIsImdldFdzVXJsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImNoZWNrV2Vic29ja2V0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJ0aW1lb3V0IiwiY29ubmVjdEludGVydmFsIiwidXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2VzIiwicHVzaCIsInNldEFsZXJ0cyIsIm9uY2xvc2UiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJlIiwidXNlRWZmZWN0Iiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwic2VuZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwiaGFuZGxlQ2xlYXJEQiIsIlJlYWN0IiwiQWxlcnRzIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsImNsYXNzTmFtZSIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwidG9vbHRpcCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsInByb3BzIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJGcmFnbWVudCIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFsZXJ0Iiwic2hhZG93Iiwid2l0aEFsZXJ0cyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwiZGVmVGltZW91dCIsIlN0eWxlZCIsIm1hcCIsImluZGV4Iiwia2V5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQUlDLEVBQUo7O0FBRG9CLGtCQUVjQyx1REFBUSxDQUFDO0FBQ3ZDQyxNQUFFLEVBQUUsSUFEbUM7QUFFdkNDLFVBQU0sRUFBRTtBQUYrQixHQUFELENBRnRCO0FBQUE7QUFBQSxNQUViQyxTQUZhO0FBQUEsTUFFRkMsWUFGRTs7QUFBQSxtQkFNZ0JKLHVEQUFRLENBQUMsSUFBRCxDQU54QjtBQUFBO0FBQUEsTUFNYkssVUFOYTtBQUFBLE1BTURDLGFBTkM7O0FBQUEsbUJBT1VOLHVEQUFRLENBQUMsS0FBRCxDQVBsQjtBQUFBO0FBQUEsTUFPYk8sT0FQYTtBQUFBLE1BT0pDLFVBUEk7O0FBQUEsbUJBUXdCUix1REFBUSxDQUFDLE1BQUQsQ0FSaEM7QUFBQTtBQUFBLE1BUWJTLGNBUmE7QUFBQSxNQVFHQyxpQkFSSDs7QUFTcEIsTUFBTUMsT0FBTyxHQUFHQywwRUFBUyxFQUF6Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekI7QUFDSCxHQUZEOztBQUdBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJC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NEUsU0FBRyxFQUFFRDtBQUFuQyxLQUFsQyxFQUE4RXBGLENBQUMsQ0FBQ3NGLE9BQWhGLENBQVI7QUFDSCxHQUh1SCxDQUE1QyxDQUFwRSxDQUFSO0FBSUgsQ0FaRDs7QUFhZTNELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYixZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTLEVBQUU7QUFDMUQsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDcEQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3ZFLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCx3QkFBd0I7O0FBRWpGO0FBQ0E7QUFDQSxHQUFHLDJGQUEyRjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxzRUFBc0U7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2xpYi9Gb3JtL0Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkL0NhcmQnO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL2xpYi9hbGVydC9BbGVydHMnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRDb250ZXh0JztcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgW3dlYnNvY2tldCwgc2V0V2Vic29ja2V0XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgd3M6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgfSk7XG4gICAgY29uc3QgW3VwbG9hZEZpbGUsIHNldFVwbG9hZEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NsZWFyREIsIHNldENsZWFyREJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkb3dubG9hZEZvcm1hdCwgc2V0RG93bmxvYWRGb3JtYXRdID0gdXNlU3RhdGUoJ2pzb24nKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZ2V0RG93bmxvYWRVcmwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgL2FwaS9kb3dubG9hZC9gO1xuICAgIH07XG4gICAgY29uc3Qgc2V0V2Vic29ja2V0U3RhdHVzID0gKHN0YXR1cykgPT4ge1xuICAgICAgICBzZXRXZWJzb2NrZXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJzb2NrZXQpLCB7IHN0YXR1czogc3RhdHVzIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFdzVXJsID0gKCkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0V3NVcmwgcHJvdG9jb2w6IFwiLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpO1xuICAgICAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzcycgOiAnd3MnO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbG9jYWxob3N0JykgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjMwMDAvJztcbiAgICAgICAgfVxuICAgICAgICAvLyBoZXJva3UgZGVwbG95XG4gICAgICAgIGNvbnN0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRXc1VybCBoZXJva3U6ICcsIGhvc3RuYW1lKTtcbiAgICAgICAgaWYgKGhvc3RuYW1lWzFdICYmIGhvc3RuYW1lWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaGVyb2t1JykgPj0gMCkge1xuICAgICAgICAgICAgaG9zdG5hbWVbMF0gPSAncHNrb3Ytd3MnO1xuICAgICAgICAgICAgcmV0dXJuIGAke3dzX3NjaGVtZX06Ly9gICsgaG9zdG5hbWUuam9pbignLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnbG9jYWxob3N0JztcbiAgICB9O1xuICAgIGNvbnN0IGNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3cyA9IHdlYnNvY2tldC53cztcbiAgICAgICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKVxuICAgICAgICAgICAgY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICAgIH07XG4gICAgY29uc3QgY29ubmVjdFdlYnNvY2tldCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSAyNTA7XG4gICAgICAgIC8vY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgICAgIC8vY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICAgICAgLy9jb25zdCB1cmwgPSBgd3M6Ly8ke3RoaXMuZ2V0SG9zdE5hbWUoKX06ODA4MC9gO1xuICAgICAgICBjb25zdCB1cmwgPSBnZXRXc1VybCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdFdlYnNvY2tldCB1cmw6ICcsIHVybCk7XG4gICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgICAgICBzZXRXZWJzb2NrZXRTdGF0dXMoYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3Mub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIC8vIGxpc3RlbiB0byBkYXRhIHNlbnQgZnJvbSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnb25tZXNzYWdlJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEFsZXJ0cyh7IG1lc3NhZ2VzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICBzZXRXZWJzb2NrZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgICAgICAgdGltZW91dCAqPSAyOyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgICAgICAgY29ubmVjdEludGVydmFsID0gZ2xvYmFsLnNldFRpbWVvdXQoY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCB0aW1lb3V0KSk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldFdlYnNvY2tldChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdlYnNvY2tldCksIHsgd3M6IHdzIH0pKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgc2VsZWN0Rm9ybWF0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0RG93bmxvYWRGb3JtYXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3Qgc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICBzZXRVcGxvYWRGaWxlKGZpbGUpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgIH07XG4gICAgY29uc3Qgc2VuZEZpbGUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dCh1cGxvYWRGaWxlLCAnVVRGLTgnKTtcbiAgICAgICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgICAgICAgIGNvbnN0IHdzID0gd2Vic29ja2V0LndzO1xuICAgICAgICAgICAgaWYgKHdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJkYjogY2xlYXJEQixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbGVhckRCID0gKCkgPT4ge1xuICAgICAgICBzZXRDbGVhckRCKCFjbGVhckRCKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtMTIgdGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJXZWJzb2NrZXQgc3RhdHVzOiBcIixcbiAgICAgICAgICAgICAgICAgICAgd2Vic29ja2V0LnN0YXR1cykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDFFXFx1MDQ0N1xcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgdHlwZTogXCJjaGVja1wiLCBuYW1lOiBcImNsZWFyQkRcIiwgdmFsdWU6IGNsZWFyREIsIG9uQ2hhbmdlOiBoYW5kbGVDbGVhckRCLCBkaXNhYmxlZDogd2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQyNFxcdTA0MzBcXHUwNDM5XFx1MDQzQiBcXHUwNDM3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzOCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiLCBuYW1lOiBcInVwbG9hZEZpbGVOYW1lXCIsIGlkOiBcInVwbG9hZEZpbGVOYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gdXBsb2FkRmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUsIHJlYWRPbmx5OiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogc2VsZWN0RmlsZVRvVXBsb2FkLCBkaXNhYmxlZDogd2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSwgXCIuLi5cIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiBzZW5kRmlsZSwgZGlzYWJsZWQ6IHVwbG9hZEZpbGUgPT09IG51bGwgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBEQlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF9kb3dubG9hZFwiIH0sIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMxXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQ0MlxcdTA0MzUgXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQyIFxcdTA0NDFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0NEZcXHUwNDM1XFx1MDQzQ1xcdTA0M0VcXHUwNDMzXFx1MDQzRSBcXHUwNDQ0XFx1MDQzMFxcdTA0MzlcXHUwNDNCXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlNlbGVjdCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fc2VsZWN0X2Rvd25sb2FkXCIsIG9uQ2hhbmdlOiBzZWxlY3RGb3JtYXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJqc29uXCIgfSwgXCJqc29uXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IGdldERvd25sb2FkVXJsKCksIG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiZm9ybWF0XCIsIHZhbHVlOiBkb3dubG9hZEZvcm1hdCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKTtcbn07XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnZm9ybSc7XG5jb25zdCBnZXRDbGFzc05hbWUgPSAoY2xhc3NOYW1lID0gJycsIGF1eENsYXNzTmFtZSA9ICcnLCBzdWZmaXggPSAnJykgPT4ge1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJhc2VDbGFzcyArIHN1ZmZpeCArIChhdXhDbGFzc05hbWUgPyAnICcgKyBhdXhDbGFzc05hbWUgOiAnJyk7XG59O1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19sYWJlbCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtR3JvdXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2dyb3VwJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Db250cm9sU2VsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3NlbGVjdCcpLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IChwcm9wcykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG4vLyBjb25zdCBGb3JtOiBURm9ybSA9IHByb3BzID0+IHtcbi8vICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGZvcm1cbi8vICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuLy8gICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XG4vLyAgICAgICBjbGFzc05hbWU9e2dldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSl9XG4vLyAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4vLyAgICAgPlxuLy8gICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgIDwvZm9ybT5cbi8vICAgKTtcbi8vIH07XG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpXG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogcHJvcHMuYWN0aW9uLCBtZXRob2Q6IHByb3BzLm1ldGhvZCwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpLCBvblN1Ym1pdDogcHJvcHMub25TdWJtaXQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn1cbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uU2VsZWN0ID0gRm9ybUNvbnRyb2xTZWxlY3Q7XG5Gb3JtLkdyb3VwID0gRm9ybUdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAzNSU7XG5gO1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gc3R5bGVkLmRpdiBgXG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAocHJvcHMuc2hhZG93ID8gJzFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KScgOiAnbm9uZScpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2RhbmdlcicgPyAnI2RjMzU0NScgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnZXJyb3InID8gJyNkYzM1NDUnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyMxOTg3NTQnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ2luZm8nID8gJyMwZGNhZjAnIDogJycpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3dhcm5pbmcnID8gJyNmZmMxMDcnIDogJycpfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsZXJ0cyB9IGZyb20gJy4vQWxlcnRDb250ZXh0JztcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL0FsZXJ0cy5lbGVtZW50cyc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0LCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoZmFsc2UpLCB0aW1lb3V0ID8gdGltZW91dCA6IGRlZlRpbWVvdXQpO1xuICAgIH0sIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHZpc2libGUgJiYgd2l0aEFsZXJ0cyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWQuQ29udGFpbmVyLCBudWxsLCBhbGVydHMubWVzc2FnZXMubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLkFsZXJ0LCB7IHNoYWRvdzogdHJ1ZSwgdHlwZTogZS50eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=