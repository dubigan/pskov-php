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
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout,
      _ref$withAlerts = _ref.withAlerts,
      withAlerts = _ref$withAlerts === void 0 ? true : _ref$withAlerts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var alerts = Object(_AlertContext__WEBPACK_IMPORTED_MODULE_11__["useAlerts"])();
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (alerts.messages && alerts.messages.length > 0) {
      setVisible(true);
      global.setTimeout(function () {
        return setVisible(false);
      }, timeout);
    }
  }, [alerts.messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, visible && withAlerts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts_elements__WEBPACK_IMPORTED_MODULE_12__["Container"], null, alerts.messages.map(function (e, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLmVsZW1lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvYWxlcnQvQWxlcnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJfYSIsInVzZVN0YXRlIiwid3MiLCJzdGF0dXMiLCJ3ZWJzb2NrZXQiLCJzZXRXZWJzb2NrZXQiLCJ1cGxvYWRGaWxlIiwic2V0VXBsb2FkRmlsZSIsImNsZWFyREIiLCJzZXRDbGVhckRCIiwiZG93bmxvYWRGb3JtYXQiLCJzZXREb3dubG9hZEZvcm1hdCIsImNvbnRleHQiLCJ1c2VBbGVydHMiLCJnZXREb3dubG9hZFVybCIsInNldFdlYnNvY2tldFN0YXR1cyIsIk9iamVjdCIsImFzc2lnbiIsImdldFdzVXJsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImNoZWNrV2Vic29ja2V0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJ0aW1lb3V0IiwiY29ubmVjdEludGVydmFsIiwidXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2VzIiwicHVzaCIsInNldEFsZXJ0cyIsIm9uY2xvc2UiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJlIiwidXNlRWZmZWN0Iiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwic2VuZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwiaGFuZGxlQ2xlYXJEQiIsIlJlYWN0IiwiQWxlcnRzIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsImNsYXNzTmFtZSIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwidG9vbHRpcCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsInByb3BzIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJGcmFnbWVudCIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFsZXJ0Iiwic2hhZG93Iiwid2l0aEFsZXJ0cyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwibGVuZ3RoIiwiU3R5bGVkIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsTUFBSUMsRUFBSjs7QUFEb0Isa0JBRWNDLHVEQUFRLENBQUM7QUFDdkNDLE1BQUUsRUFBRSxJQURtQztBQUV2Q0MsVUFBTSxFQUFFO0FBRitCLEdBQUQsQ0FGdEI7QUFBQTtBQUFBLE1BRWJDLFNBRmE7QUFBQSxNQUVGQyxZQUZFOztBQUFBLG1CQU1nQkosdURBQVEsQ0FBQyxJQUFELENBTnhCO0FBQUE7QUFBQSxNQU1iSyxVQU5hO0FBQUEsTUFNREMsYUFOQzs7QUFBQSxtQkFPVU4sdURBQVEsQ0FBQyxLQUFELENBUGxCO0FBQUE7QUFBQSxNQU9iTyxPQVBhO0FBQUEsTUFPSkMsVUFQSTs7QUFBQSxtQkFRd0JSLHVEQUFRLENBQUMsTUFBRCxDQVJoQztBQUFBO0FBQUEsTUFRYlMsY0FSYTtBQUFBLE1BUUdDLGlCQVJIOztBQVNwQixNQUFNQyxPQUFPLEdBQUdDLDBFQUFTLEVBQXpCOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtC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TSxFQUFFLElBQVY7QUFBZ0JuRSxVQUFJLEVBQUVULENBQUMsQ0FBQ1MsSUFBeEI7QUFBOEI0RSxTQUFHLEVBQUVEO0FBQW5DLEtBQWxDLEVBQThFcEYsQ0FBQyxDQUFDc0YsT0FBaEYsQ0FBUjtBQUNILEdBRnVILENBQTVDLENBQXBFLENBQVI7QUFHSCxDQVpEOztBQWFlM0QscUVBQWYsRTs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVMsRUFBRTtBQUMxRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDdkUsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjs7QUFFQTtBQUNBO0FBQ0EseURBQXlELHdCQUF3Qjs7QUFFakY7QUFDQTtBQUNBLEdBQUcsMkZBQTJGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0vRm9ybSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJy4vbGliL0NhcmQvQ2FyZCc7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBbd2Vic29ja2V0LCBzZXRXZWJzb2NrZXRdID0gdXNlU3RhdGUoe1xuICAgICAgICB3czogbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICB9KTtcbiAgICBjb25zdCBbdXBsb2FkRmlsZSwgc2V0VXBsb2FkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY2xlYXJEQiwgc2V0Q2xlYXJEQl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rvd25sb2FkRm9ybWF0LCBzZXREb3dubG9hZEZvcm1hdF0gPSB1c2VTdGF0ZSgnanNvbicpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VBbGVydHMoKTtcbiAgICBjb25zdCBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gICAgfTtcbiAgICBjb25zdCBzZXRXZWJzb2NrZXRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgIHNldFdlYnNvY2tldChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdlYnNvY2tldCksIHsgc3RhdHVzOiBzdGF0dXMgfSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0V3NVcmwgPSAoKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRXc1VybCBwcm90b2NvbDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCk7XG4gICAgICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsb2NhbGhvc3QnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHdzOi8vYCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzAwMC8nO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlcm9rdSBkZXBsb3lcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgICAgICBpZiAoaG9zdG5hbWVbMV0gJiYgaG9zdG5hbWVbMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoZXJva3UnKSA+PSAwKSB7XG4gICAgICAgICAgICBob3N0bmFtZVswXSA9ICdwc2tvdi13cyc7XG4gICAgICAgICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdzID0gd2Vic29ja2V0LndzO1xuICAgICAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpXG4gICAgICAgICAgICBjb25uZWN0V2Vic29ja2V0KCk7IC8vY2hlY2sgaWYgd2Vic29ja2V0IGluc3RhbmNlIGlzIGNsb3NlZCwgaWYgc28gY2FsbCBgY29ubmVjdGAgZnVuY3Rpb24uXG4gICAgfTtcbiAgICBjb25zdCBjb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IDI1MDtcbiAgICAgICAgLy9jb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICAgICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICAgICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgICAgICAvL2NvbnN0IHVybCA9IGB3czovLyR7dGhpcy5nZXRIb3N0TmFtZSgpfTo4MDgwL2A7XG4gICAgICAgIGNvbnN0IHVybCA9IGdldFdzVXJsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0V2Vic29ja2V0IHVybDogJywgdXJsKTtcbiAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgICAgIHNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICB9O1xuICAgICAgICB3cy5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QWxlcnRzKHsgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIHNldFdlYnNvY2tldFN0YXR1cygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICAgICAgICB0aW1lb3V0ICo9IDI7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICAgICAgICBjb25uZWN0SW50ZXJ2YWwgPSBnbG9iYWwuc2V0VGltZW91dChjaGVja1dlYnNvY2tldCwgTWF0aC5taW4oMTAwMDAsIHRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgfTtcbiAgICAgICAgd3Mub25lcnJvciA9IGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgc2V0V2Vic29ja2V0U3RhdHVzKGB3ZWJzb2NrZXQgZXJyb3I6ICR7ZX1gKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0V2Vic29ja2V0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd2Vic29ja2V0KSwgeyB3czogd3MgfSkpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29ubmVjdFdlYnNvY2tldCgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZWxlY3RGb3JtYXQgPSAoZSkgPT4ge1xuICAgICAgICBzZXREb3dubG9hZEZvcm1hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBzZWxlY3RGaWxlVG9VcGxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIHNldFVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfTtcbiAgICBjb25zdCBzZW5kRmlsZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KHVwbG9hZEZpbGUsICdVVEYtOCcpO1xuICAgICAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IHJlYWRlckV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgICAgICAgY29uc3Qgd3MgPSB3ZWJzb2NrZXQud3M7XG4gICAgICAgICAgICBpZiAod3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgICAgICAgICAgICBjbGVhcmRiOiBjbGVhckRCLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsZWFyREIgPSAoKSA9PiB7XG4gICAgICAgIHNldENsZWFyREIoIWNsZWFyREIpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbC0xMiB0ZXh0LWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBcIldlYnNvY2tldCBzdGF0dXM6IFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWJzb2NrZXQuc3RhdHVzKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MUVcXHUwNDQ3XFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcImNoZWNrXCIsIG5hbWU6IFwiY2xlYXJCRFwiLCB2YWx1ZTogY2xlYXJEQiwgb25DaGFuZ2U6IGhhbmRsZUNsZWFyREIsIGRpc2FibGVkOiB3ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDI0XFx1MDQzMFxcdTA0MzlcXHUwNDNCIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX190ZXh0IGZvcm1fX3RleHRfdXBsb2FkXCIsIG5hbWU6IFwidXBsb2FkRmlsZU5hbWVcIiwgaWQ6IFwidXBsb2FkRmlsZU5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2EgPSB1cGxvYWRGaWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSwgcmVhZE9ubHk6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiBzZWxlY3RGaWxlVG9VcGxvYWQsIGRpc2FibGVkOiB3ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9LCBcIi4uLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHNlbmRGaWxlLCBkaXNhYmxlZDogdXBsb2FkRmlsZSA9PT0gbnVsbCB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIERCXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX2Rvd25sb2FkXCIgfSwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzFcXHUwNDM1XFx1MDQ0MFxcdTA0MzhcXHUwNDQyXFx1MDQzNSBcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzMFxcdTA0NDIgXFx1MDQ0MVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQ0RlxcdTA0MzVcXHUwNDNDXFx1MDQzRVxcdTA0MzNcXHUwNDNFIFxcdTA0NDRcXHUwNDMwXFx1MDQzOVxcdTA0M0JcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uU2VsZWN0LCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19zZWxlY3RfZG93bmxvYWRcIiwgb25DaGFuZ2U6IHNlbGVjdEZvcm1hdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImpzb25cIiB9LCBcImpzb25cIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogZ2V0RG93bmxvYWRVcmwoKSwgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJmb3JtYXRcIiwgdmFsdWU6IGRvd25sb2FkRm9ybWF0IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZCcgfSwgY2hpbGRyZW4pO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdmb3JtJztcbmNvbnN0IGdldENsYXNzTmFtZSA9IChjbGFzc05hbWUgPSAnJywgYXV4Q2xhc3NOYW1lID0gJycsIHN1ZmZpeCA9ICcnKSA9PiB7XG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYmFzZUNsYXNzICsgc3VmZml4ICsgKGF1eENsYXNzTmFtZSA/ICcgJyArIGF1eENsYXNzTmFtZSA6ICcnKTtcbn07XG5jb25zdCBGb3JtTGFiZWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2xhYmVsJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fZ3JvdXAnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUNvbnRyb2xTZWxlY3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb3BzLnR5cGUpXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fdGV4dCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIFxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICByZWFkT25seTogIXByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jb250cm9sJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIHJvd3M6IHByb3BzLnJvd3MgPyArcHJvcHMucm93cyA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NoZWNrJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sU2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfVxufTtcbi8vIGNvbnN0IEZvcm06IFRGb3JtID0gcHJvcHMgPT4ge1xuLy8gICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSkgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Zm9ybVxuLy8gICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4vLyAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cbi8vICAgICAgIGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKX1cbi8vICAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbi8vICAgICA+XG4vLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgPC9mb3JtPlxuLy8gICApO1xuLy8gfTtcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSlcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBwcm9wcy5hY3Rpb24sIG1ldGhvZDogcHJvcHMubWV0aG9kLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSksIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDM1JTtcbmA7XG5leHBvcnQgY29uc3QgQWxlcnQgPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IChwcm9wcy5zaGFkb3cgPyAnMXB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjgpJyA6ICdub25lJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnZGFuZ2VyJyA/ICcjZGMzNTQ1JyA6ICcnKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICdlcnJvcicgPyAnI2RjMzU0NScgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnc3VjY2VzcycgPyAnIzE5ODc1NCcgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnaW5mbycgPyAnIzBkY2FmMCcgOiAnJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAnd2FybmluZycgPyAnI2ZmYzEwNycgOiAnJyl9O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vQWxlcnRzLmVsZW1lbnRzJztcbmNvbnN0IEFsZXJ0cyA9ICh7IHRpbWVvdXQgPSA1MDAwLCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhbGVydHMubWVzc2FnZXMgJiYgYWxlcnRzLm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9LCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB2aXNpYmxlICYmIHdpdGhBbGVydHMgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkLkNvbnRhaW5lciwgbnVsbCwgYWxlcnRzLm1lc3NhZ2VzLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZC5BbGVydCwgeyBzaGFkb3c6IHRydWUsIHR5cGU6IGUudHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9