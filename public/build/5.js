(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/components/Dashboard.tsx":
/*!*****************************************!*\
  !*** ./assets/components/Dashboard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/alert/Alerts */ "./assets/components/lib/alert/Alerts.tsx");
/* harmony import */ var _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/alert/AlertContext */ "./assets/components/lib/alert/AlertContext.tsx");
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









var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.apply(this, arguments);
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        //messages: [],
        uploadFile: null,
        clearDB: false,
        websocket: {
          ws: null,
          status: 'disconnected'
        },
        downloadFormat: 'json'
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "downloadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "uploadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "timeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 250
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDownloadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        return "/api/download/";
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setWebsocketStatus", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(status) {
        var websocket = Object.assign(Object.assign({}, _this.state.websocket), {
          status: status
        });

        _this.setState({
          websocket: websocket
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getWsUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkWebsocket", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        var ws = _this.state.websocket.ws;
        if (!ws || ws.readyState === WebSocket.CLOSED) _this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "connectWebsocket", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
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
          var messages = [];

          if (data) {
            //console.log('onmessage', data);
            messages.push(data);

            _this.context.setAlerts(messages);
          }
        };

        ws.onclose = function () {
          //console.log('disconnected');
          _this.setWebsocketStatus('disconnected'); // automatically try to reconnect on connection loss


          self.timeout = self.timeout + self.timeout; //increment retry interval

          connectInterval = global.setTimeout(_this.checkWebsocket, Math.min(10000, self.timeout)); //call check function after timeout
        };

        ws.onerror = function (e) {
          console.log('websocket error', e);

          _this.setWebsocketStatus("websocket error: ".concat(e));
        };

        var websocket = Object.assign(Object.assign({}, _this.state.websocket), {
          ws: ws
        });

        _this.setState({
          websocket: websocket
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "selectFormat", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          downloadFormat: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "selectFileToUpload", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = function (e) {
          var file = e.target.files[0];

          _this.setState({
            uploadFile: file
          });
        };

        input.click();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "sendFile", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var reader = new FileReader();
        reader.readAsText(_this.state.uploadFile, 'UTF-8'); // here we tell the reader what to do when it's done reading...

        reader.onload = function (readerEvent) {
          var content = readerEvent.target.result; // this is the content!

          var ws = _this.state.websocket.ws;

          if (ws !== null) {
            ws.send(JSON.stringify({
              type: 'utf8',
              cleardb: _this.state.clearDB,
              content: content
            }));
          }
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearDB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          clearDB: !_this.state.clearDB
        });
      }
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
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_alert_Alerts__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
        type: "check",
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        disabled: this.state.websocket.status === 'disconnected'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
        auxClassName: "form__text form__text_upload",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: (_a = this.state.uploadFile) === null || _a === void 0 ? void 0 : _a.name,
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected'
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.sendFile,
        disabled: this.state.uploadFile === null
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_download"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Select, {
        auxClassName: "form__select_download",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
        value: "json"
      }, "json")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "hidden",
        name: "format",
        value: this.state.downloadFormat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        type: "submit",
        className: "btn-primary"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

Object.defineProperty(Dashboard, "contextType", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _lib_alert_AlertContext__WEBPACK_IMPORTED_MODULE_20__["AlertContext"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Dashboard));
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

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImFyZ3VtZW50cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJ1cGxvYWRGaWxlIiwiY2xlYXJEQiIsIndlYnNvY2tldCIsIndzIiwic3RhdHVzIiwiZG93bmxvYWRGb3JtYXQiLCJhc3NpZ24iLCJzdGF0ZSIsInNldFN0YXRlIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsImdldFdzVXJsIiwib25vcGVuIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFdlYnNvY2tldFN0YXR1cyIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlcyIsInB1c2giLCJjb250ZXh0Iiwic2V0QWxlcnRzIiwib25jbG9zZSIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJjaGVja1dlYnNvY2tldCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwiZSIsInRhcmdldCIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwiX2EiLCJSZWFjdCIsIkFsZXJ0cyIsIkNhcmQiLCJIZWFkZXIiLCJGb3JtIiwiTGFiZWwiLCJjbGFzc05hbWUiLCJCb2R5IiwiR3JvdXAiLCJhdXhDbGFzc05hbWUiLCJDb250cm9sIiwibmFtZSIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJpZCIsInJlYWRPbmx5IiwiQnV0dG9uIiwib25DbGljayIsInNlbGVjdEZpbGVUb1VwbG9hZCIsInNlbmRGaWxlIiwiU2VsZWN0Iiwic2VsZWN0Rm9ybWF0IiwiYWN0aW9uIiwiZ2V0RG93bmxvYWRVcmwiLCJtZXRob2QiLCJDb21wb25lbnQiLCJBbGVydENvbnRleHQiLCJ3aXRoUm91dGVyIiwidG9vbHRpcCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsInByb3BzIiwiRm9ybUNvbnRyb2wiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJGcmFnbWVudCIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCIsIndpdGhBbGVydHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsIm1hcCIsImluZGV4Iiwia2V5IiwibWVzc2FnZSIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hvdyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9saWIvRm9ybSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vbGliL2FsZXJ0L0FsZXJ0cyc7XG5pbXBvcnQgeyBBbGVydENvbnRleHQgfSBmcm9tICcuL2xpYi9hbGVydC9BbGVydENvbnRleHQnO1xuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAvL21lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgICB1cGxvYWRGaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNsZWFyREI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdlYnNvY2tldDoge1xuICAgICAgICAgICAgICAgICAgICB3czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvd25sb2FkRm9ybWF0OiAnanNvbicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkb3dubG9hZFVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cGxvYWRVcmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidGltZW91dFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogMjUwXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXREb3dubG9hZFVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgL2FwaS9kb3dubG9hZC9gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2V0V2Vic29ja2V0U3RhdHVzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2Vic29ja2V0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLndlYnNvY2tldCksIHsgc3RhdHVzOiBzdGF0dXMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFdzVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzcycgOiAnd3MnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsb2NhbGhvc3QnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgd3M6Ly9gICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozMDAwLyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGhlcm9rdSBkZXBsb3lcbiAgICAgICAgICAgICAgICBjb25zdCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRXc1VybCBoZXJva3U6ICcsIGhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9zdG5hbWVbMV0gJiYgaG9zdG5hbWVbMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoZXJva3UnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3dzX3NjaGVtZX06Ly9gICsgaG9zdG5hbWUuam9pbignLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xvY2FsaG9zdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGVja1dlYnNvY2tldFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgICAgICAgICAgICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbm5lY3RXZWJzb2NrZXRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICAgICAgICAgICAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgICAgICAgICAgICAgIC8vY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHVybCA9IGB3czovLyR7dGhpcy5nZXRIb3N0TmFtZSgpfTo4MDgwL2A7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRXc1VybCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0V2Vic29ja2V0IHVybDogJywgdXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICAgICAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdzLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiB0byBkYXRhIHNlbnQgZnJvbSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0QWxlcnRzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IGdsb2JhbC5zZXRUaW1lb3V0KHRoaXMuY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUud2Vic29ja2V0KSwgeyB3czogd3MgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdEZvcm1hdFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bmxvYWRGb3JtYXQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2VsZWN0RmlsZVRvVXBsb2FkXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZW5kRmlsZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgJ1VURi04Jyk7XG4gICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IHJlYWRlckV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFyREJcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xlYXJEQjogIXRoaXMuc3RhdGUuY2xlYXJEQiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbC0xMiB0ZXh0LWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZWJzb2NrZXQgc3RhdHVzOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDFFXFx1MDQ0N1xcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwiY2hlY2tcIiwgbmFtZTogXCJjbGVhckJEXCIsIHZhbHVlOiB0aGlzLnN0YXRlLmNsZWFyREIsIG9uQ2hhbmdlOiB0aGlzLmNsZWFyREIsIGRpc2FibGVkOiB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQyNFxcdTA0MzBcXHUwNDM5XFx1MDQzQiBcXHUwNDM3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzOCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3RleHQgZm9ybV9fdGV4dF91cGxvYWRcIiwgbmFtZTogXCJ1cGxvYWRGaWxlTmFtZVwiLCBpZDogXCJ1cGxvYWRGaWxlTmFtZVwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IHRoaXMuc3RhdGUudXBsb2FkRmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUsIHJlYWRPbmx5OiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiB0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZCwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSwgXCIuLi5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHRoaXMuc2VuZEZpbGUsIGRpc2FibGVkOiB0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPT09IG51bGwgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgREJcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIiB9LCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzMVxcdTA0MzVcXHUwNDQwXFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0MiBcXHUwNDQxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDRGXFx1MDQzNVxcdTA0M0NcXHUwNDNFXFx1MDQzM1xcdTA0M0UgXFx1MDQ0NFxcdTA0MzBcXHUwNDM5XFx1MDQzQlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uU2VsZWN0LCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19zZWxlY3RfZG93bmxvYWRcIiwgb25DaGFuZ2U6IHRoaXMuc2VsZWN0Rm9ybWF0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImpzb25cIiB9LCBcImpzb25cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHRoaXMuZ2V0RG93bmxvYWRVcmwoKSwgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiZm9ybWF0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLmRvd25sb2FkRm9ybWF0IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSkpKSk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KERhc2hib2FyZCwgXCJjb250ZXh0VHlwZVwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IEFsZXJ0Q29udGV4dFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERhc2hib2FyZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZCcgfSwgY2hpbGRyZW4pO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdmb3JtJztcbmNvbnN0IGdldENsYXNzTmFtZSA9IChjbGFzc05hbWUgPSAnJywgYXV4Q2xhc3NOYW1lID0gJycsIHN1ZmZpeCA9ICcnKSA9PiB7XG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYmFzZUNsYXNzICsgc3VmZml4ICsgKGF1eENsYXNzTmFtZSA/ICcgJyArIGF1eENsYXNzTmFtZSA6ICcnKTtcbn07XG5jb25zdCBGb3JtTGFiZWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2xhYmVsJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fZ3JvdXAnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUNvbnRyb2xTZWxlY3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb3BzLnR5cGUpXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fdGV4dCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIFxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICByZWFkT25seTogIXByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jb250cm9sJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIHJvd3M6IHByb3BzLnJvd3MgPyArcHJvcHMucm93cyA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NoZWNrJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sU2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfVxufTtcbi8vIGNvbnN0IEZvcm06IFRGb3JtID0gcHJvcHMgPT4ge1xuLy8gICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSkgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Zm9ybVxuLy8gICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4vLyAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cbi8vICAgICAgIGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKX1cbi8vICAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbi8vICAgICA+XG4vLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgPC9mb3JtPlxuLy8gICApO1xuLy8gfTtcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSlcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBwcm9wcy5hY3Rpb24sIG1ldGhvZDogcHJvcHMubWV0aG9kLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSksIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5jb25zdCBBbGVydHMgPSAoeyB0aW1lb3V0LCB3aXRoQWxlcnRzID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIGlmICghd2l0aEFsZXJ0cylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkodGltZW91dCA/IHRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIG9wdGlvbnMpIHtcbiAgaWYgKGhhcyhjYWNoZSwgTUVUSE9EX05BTUUpKSByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgdmFyIEFDQ0VTU09SUyA9IGhhcyhvcHRpb25zLCAnQUNDRVNTT1JTJykgPyBvcHRpb25zLkFDQ0VTU09SUyA6IGZhbHNlO1xuICB2YXIgYXJndW1lbnQwID0gaGFzKG9wdGlvbnMsIDApID8gb3B0aW9uc1swXSA6IHRocm93ZXI7XG4gIHZhciBhcmd1bWVudDEgPSBoYXMob3B0aW9ucywgMSkgPyBvcHRpb25zWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV0gPSAhIW1ldGhvZCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBQ0NFU1NPUlMgJiYgIURFU0NSSVBUT1JTKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgTyA9IHsgbGVuZ3RoOiAtMSB9O1xuXG4gICAgaWYgKEFDQ0VTU09SUykgZGVmaW5lUHJvcGVydHkoTywgMSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IHRocm93ZXIgfSk7XG4gICAgZWxzZSBPWzFdID0gMTtcblxuICAgIG1ldGhvZC5jYWxsKE8sIGFyZ3VtZW50MCwgYXJndW1lbnQxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcblxudmFyIG5hdGl2ZUFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbm1vZHVsZS5leHBvcnRzID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHNob3VsZCBoYXZlIGNvcnJlY3Qgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoRWRnZSBidWcpXG4gIGlmIChERVNDUklQVE9SUyAmJiBuYXRpdmVBc3NpZ24oeyBiOiAxIH0sIG5hdGl2ZUFzc2lnbihkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdiJywge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksIHsgYjogMiB9KSkuYiAhPT0gMSkgcmV0dXJuIHRydWU7XG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW3N5bWJvbF0gPSA3O1xuICBhbHBoYWJldC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hyKSB7IEJbY2hyXSA9IGNocjsgfSk7XG4gIHJldHVybiBuYXRpdmVBc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKG5hdGl2ZUFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG4gIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgIHZhciBTID0gSW5kZXhlZE9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiBuYXRpdmVBc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuLy8gRkY0OS0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=