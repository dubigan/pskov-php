(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/components/Dashboard.js":
/*!****************************************!*\
  !*** ./assets/components/Dashboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/Row */ "./assets/components/lib/Row.tsx");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

 //import { Form, Button, Row, Card } from 'react-bootstrap';







var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      messages: [],
      uploadFile: null,
      clearDB: false,
      websocket: {
        ws: null,
        status: 'disconnected'
      },
      downloadFormat: 'json'
    });

    _defineProperty(_assertThisInitialized(_this), "downloadUrl", '/');

    _defineProperty(_assertThisInitialized(_this), "uploadUrl", '/');

    _defineProperty(_assertThisInitialized(_this), "getDownloadUrl", function () {
      return "/api/download/";
    });

    _defineProperty(_assertThisInitialized(_this), "setWebsocketStatus", function (status) {
      var websocket = _objectSpread(_objectSpread({}, _this.state.websocket), {}, {
        status: status
      });

      _this.setState({
        websocket: websocket
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getWsUrl", function () {
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
    });

    _defineProperty(_assertThisInitialized(_this), "checkWebsocket", function () {
      var ws = _this.state.websocket.ws;
      if (!ws || ws.readyState === WebSocket.CLOSED) _this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
    });

    _defineProperty(_assertThisInitialized(_this), "connectWebsocket", function () {
      var self = _assertThisInitialized(_this); // cache the this


      var connectInterval; //const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
      //const url = `ws://${this.getHostName()}:8080/`;

      var url = _this.getWsUrl();

      console.log('connectWebsocket url: ', url);
      var ws = new WebSocket(url);

      ws.onopen = function () {
        self.timeout = 250; // reset timer to 250 on open of websocket connection

        clearTimeout(connectInterval); //console.log(`connected to ${url}`);

        _this.setWebsocketStatus("connected to ".concat(url));
      };

      ws.onmessage = function (evt) {
        // listen to data sent from the websocket server
        var data = JSON.parse(evt.data);
        var messages = _this.state.messages;

        if (data) {
          //console.log('onmessage', data);
          messages.push(data);

          _this.setState({
            messages: messages
          });
        }
      };

      ws.onclose = function () {
        //console.log('disconnected');
        _this.setWebsocketStatus('disconnected'); // automatically try to reconnect on connection loss


        self.timeout = self.timeout + self.timeout; //increment retry interval

        connectInterval = setTimeout(_this.checkWebsocket, Math.min(10000, self.timeout)); //call check function after timeout
      };

      ws.onerror = function (e) {
        console.log('websocket error', e);

        _this.setWebsocketStatus("websocket error: ".concat(e));
      };

      var websocket = _objectSpread(_objectSpread({}, _this.state.websocket), {}, {
        ws: ws
      });

      _this.setState({
        websocket: websocket
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFormat", function (e) {
      _this.setState({
        downloadFormat: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFileToUpload", function (e) {
      var input = document.createElement('input');
      input.type = 'file';

      input.onchange = function (e) {
        var file = e.target.files[0];

        _this.setState({
          uploadFile: file
        });
      };

      input.click();
    });

    _defineProperty(_assertThisInitialized(_this), "sendFile", function (e) {
      var reader = new FileReader();
      reader.readAsText(_this.state.uploadFile, 'UTF-8'); // here we tell the reader what to do when it's done reading...

      reader.onload = function (readerEvent) {
        var content = readerEvent.target.result; // this is the content!

        _this.state.websocket.ws.send(JSON.stringify({
          type: 'utf8',
          cleardb: _this.state.clearDB,
          content: content
        }));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "clearDB", function () {
      _this.setState({
        clearDB: !_this.state.clearDB
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearMessages", function () {
      _this.setState({
        messages: []
      });
    });

    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connectWebsocket();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_15__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Control, {
        type: "check",
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Control, {
        auxClassName: "form__text form__text_upload",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFile ? this.state.uploadFile.name : '',
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_12__["Button"] //variant="primary"
      , {
        className: "btn-primary",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_12__["Button"] //variant="primary"
      , {
        className: "btn-primary",
        onClick: this.sendFile,
        disabled: this.state.uploadFile ? '' : 'disabled'
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
        auxClassName: "form__label_download"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Select, {
        auxClassName: "form__select_download",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "json"
      }, "json")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "format",
        value: this.state.downloadFormat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        type: "submit",
        className: "btn-primary"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwibWVzc2FnZXMiLCJ1cGxvYWRGaWxlIiwiY2xlYXJEQiIsIndlYnNvY2tldCIsIndzIiwic3RhdHVzIiwiZG93bmxvYWRGb3JtYXQiLCJzdGF0ZSIsInNldFN0YXRlIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsImdldFdzVXJsIiwib25vcGVuIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFdlYnNvY2tldFN0YXR1cyIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwib25jbG9zZSIsInNldFRpbWVvdXQiLCJjaGVja1dlYnNvY2tldCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJjb250ZW50IiwicmVzdWx0Iiwic2VuZCIsInN0cmluZ2lmeSIsImNsZWFyZGIiLCJjbGVhck1lc3NhZ2VzIiwibmFtZSIsInNlbGVjdEZpbGVUb1VwbG9hZCIsInNlbmRGaWxlIiwic2VsZWN0Rm9ybWF0IiwiZ2V0RG93bmxvYWRVcmwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLGdCQUFVLEVBQUUsSUFGTjtBQUdOQyxhQUFPLEVBQUUsS0FISDtBQUlOQyxlQUFTLEVBQUU7QUFDVEMsVUFBRSxFQUFFLElBREs7QUFFVEMsY0FBTSxFQUFFO0FBRkMsT0FKTDtBQVFOQyxvQkFBYyxFQUFFO0FBUlYsSzs7a0VBV00sRzs7Z0VBQ0YsRzs7cUVBRUssWUFBTTtBQUNyQjtBQUNELEs7O3lFQUVvQixVQUFBRCxNQUFNLEVBQUk7QUFDN0IsVUFBTUYsU0FBUyxtQ0FBUSxNQUFLSSxLQUFMLENBQVdKLFNBQW5CO0FBQThCRSxjQUFNLEVBQUVBO0FBQXRDLFFBQWY7O0FBQ0EsWUFBS0csUUFBTCxDQUFjO0FBQUVMLGlCQUFTLEVBQVRBO0FBQUYsT0FBZDtBQUNELEs7OytEQUVVLFlBQU07QUFDZjtBQUVBLFVBQU1NLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixRQUE3QixHQUF3QyxLQUF4QyxHQUFnRCxJQUFsRTs7QUFDQSxVQUFJRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLFFBQWhCLENBQXlCQyxXQUF6QixHQUF1Q0MsT0FBdkMsQ0FBK0MsV0FBL0MsS0FBK0QsQ0FBbkUsRUFBc0U7QUFDcEUsZUFBTyxVQUFVTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JF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bnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL1Jvdyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgdXBsb2FkRmlsZTogbnVsbCxcbiAgICBjbGVhckRCOiBmYWxzZSxcbiAgICB3ZWJzb2NrZXQ6IHtcbiAgICAgIHdzOiBudWxsLFxuICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICB9LFxuICAgIGRvd25sb2FkRm9ybWF0OiAnanNvbicsXG4gIH07XG5cbiAgZG93bmxvYWRVcmwgPSAnLyc7XG4gIHVwbG9hZFVybCA9ICcvJztcblxuICBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgfTtcblxuICBzZXRXZWJzb2NrZXRTdGF0dXMgPSBzdGF0dXMgPT4ge1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHN0YXR1czogc3RhdHVzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBnZXRXc1VybCA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0V3NVcmwgcHJvdG9jb2w6IFwiLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpO1xuXG4gICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbG9jYWxob3N0JykgPj0gMCkge1xuICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjMwMDAvJztcbiAgICB9XG4gICAgLy8gaGVyb2t1IGRlcGxveVxuICAgIGNvbnN0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgIHJldHVybiBgJHt3c19zY2hlbWV9Oi8vYCArIGhvc3RuYW1lLmpvaW4oJy4nKTtcbiAgICB9XG4gICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICB9O1xuXG4gIGNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgfTtcblxuICBjb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFdzVXJsKCk7XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuXG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgIH07XG5cbiAgICB3cy5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXM7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcblxuICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICBjb25uZWN0SW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHRoaXMuY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICB9O1xuXG4gICAgd3Mub25lcnJvciA9IGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgIH07XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgd3M6IHdzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgc2VsZWN0RmlsZVRvVXBsb2FkID0gZSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9IGUgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZEZpbGU6IGZpbGUgfSk7XG4gICAgfTtcblxuICAgIGlucHV0LmNsaWNrKCk7XG4gIH07XG5cbiAgc2VuZEZpbGUgPSBlID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgJ1VURi04Jyk7XG5cbiAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICByZWFkZXIub25sb2FkID0gcmVhZGVyRXZlbnQgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC53cy5zZW5kKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xuXG4gIGNsZWFyREIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gIH07XG5cbiAgY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD7Ql9Cw0LPRgNGD0LfQutCwINCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1sZWZ0XCI+V2Vic29ja2V0IHN0YXR1czoge3RoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhdXhDbGFzc05hbWU9XCJmb3JtX19ncm91cF9ob3JpelwiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBhdXhDbGFzc05hbWU9XCJmb3JtX19sYWJlbF91cGxvYWRcIj7QntGH0LjRgdGC0LjRgtGMIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xlYXJCRFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jbGVhckRCfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnID8gJ2Rpc2FibGUnIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhdXhDbGFzc05hbWU9XCJmb3JtX19ncm91cF9ob3JpelwiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBhdXhDbGFzc05hbWU9XCJmb3JtX19sYWJlbF91cGxvYWRcIj7QpNCw0LnQuyDQt9Cw0LPRgNGD0LfQutC4INCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IHRoaXMuc3RhdGUudXBsb2FkRmlsZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyA/ICdkaXNhYmxlJyA6ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEZpbGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/ICcnIDogJ2Rpc2FibGVkJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPtCS0YvQs9GA0YPQt9C60LAgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INGE0L7RgNC80LDRgiDRgdC+0YXRgNCw0L3Rj9C10LzQvtCz0L4g0YTQsNC50LvQsFxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBhdXhDbGFzc05hbWU9XCJmb3JtX19zZWxlY3RfZG93bmxvYWRcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3RGb3JtYXR9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+anNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Y3N2PC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQvcGxhaW48L29wdGlvbj4gKi99XG4gICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17dGhpcy5nZXREb3dubG9hZFVybCgpfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXR9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=