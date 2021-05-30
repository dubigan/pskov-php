(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
        messages: [],
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
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: []
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




var Alerts = function Alerts(props) {
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
      delay(props.timeout ? props.timeout : defTimeout).then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImFyZ3VtZW50cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJtZXNzYWdlcyIsInVwbG9hZEZpbGUiLCJjbGVhckRCIiwid2Vic29ja2V0Iiwid3MiLCJzdGF0dXMiLCJkb3dubG9hZEZvcm1hdCIsImFzc2lnbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ3c19zY2hlbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzZWxmIiwiY29ubmVjdEludGVydmFsIiwidXJsIiwiZ2V0V3NVcmwiLCJvbm9wZW4iLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0V2Vic29ja2V0U3RhdHVzIiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJvbmNsb3NlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsImNoZWNrV2Vic29ja2V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJlIiwidGFyZ2V0IiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJjb250ZW50IiwicmVzdWx0Iiwic2VuZCIsInN0cmluZ2lmeSIsImNsZWFyZGIiLCJfYSIsIlJlYWN0IiwiQWxlcnRzIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsImNsYXNzTmFtZSIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwic2VsZWN0RmlsZVRvVXBsb2FkIiwic2VuZEZpbGUiLCJTZWxlY3QiLCJzZWxlY3RGb3JtYXQiLCJhY3Rpb24iLCJnZXREb3dubG9hZFVybCIsIm1ldGhvZCIsIkNvbXBvbmVudCIsIndpdGhSb3V0ZXIiLCJ0b29sdGlwIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJGb290ZXIiLCJUaXRsZSIsImJhc2VDbGFzcyIsImdldENsYXNzTmFtZSIsInN1ZmZpeCIsIkZvcm1MYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sU2VsZWN0IiwicHJvcHMiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsIkZyYWdtZW50IiwiYmFzZUNsYXNzTmFtZSIsIm9uU3VibWl0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImFsZXJ0cyIsInVzZUFsZXJ0cyIsImRlZlRpbWVvdXQiLCJzaG93QWxlcnRzIiwidmlldyIsImxlbmd0aCIsInVzZUVmZmVjdCIsImdldFR5cGUiLCJ0IiwiZ2V0QWxlcnRzIiwiYXJyYXkiLCJtYXAiLCJpbmRleCIsImtleSIsIm1lc3NhZ2UiLCJkZWxheSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNob3ciLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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bGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJy4vbGliL0NhcmQnO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL2xpYi9hbGVydC9BbGVydHMnO1xuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgdXBsb2FkRmlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBjbGVhckRCOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3ZWJzb2NrZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3dubG9hZEZvcm1hdDogJ2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZG93bmxvYWRVcmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICcvJ1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidXBsb2FkVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRpbWVvdXRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IDI1MFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0RG93bmxvYWRVcmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNldFdlYnNvY2tldFN0YXR1c1wiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYnNvY2tldCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS53ZWJzb2NrZXQpLCB7IHN0YXR1czogc3RhdHVzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRXc1VybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRXc1VybCBwcm90b2NvbDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbG9jYWxob3N0JykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHdzOi8vYCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzAwMC8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBoZXJva3UgZGVwbG95XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0V3NVcmwgaGVyb2t1OiAnLCBob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RuYW1lWzFdICYmIGhvc3RuYW1lWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaGVyb2t1JykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZVswXSA9ICdwc2tvdi13cyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt3c19zY2hlbWV9Oi8vYCArIGhvc3RuYW1lLmpvaW4oJy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hlY2tXZWJzb2NrZXRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgICAgICAgICAgICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7IC8vY2hlY2sgaWYgd2Vic29ja2V0IGluc3RhbmNlIGlzIGNsb3NlZCwgaWYgc28gY2FsbCBgY29ubmVjdGAgZnVuY3Rpb24uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb25uZWN0V2Vic29ja2V0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgICAgICAgICAgICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgICAgICAgICAgICAgLy9jb25zdCB1cmwgPSBgd3M6Ly8ke3RoaXMuZ2V0SG9zdE5hbWUoKX06ODA4MC9gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0V3NVcmwoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdFdlYnNvY2tldCB1cmw6ICcsIHVybCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICAgICAgICAgICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3cy5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IGdsb2JhbC5zZXRUaW1lb3V0KHRoaXMuY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUud2Vic29ja2V0KSwgeyB3czogd3MgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdEZvcm1hdFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bmxvYWRGb3JtYXQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2VsZWN0RmlsZVRvVXBsb2FkXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZW5kRmlsZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgJ1VURi04Jyk7XG4gICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IHJlYWRlckV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFyREJcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xlYXJEQjogIXRoaXMuc3RhdGUuY2xlYXJEQiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFyTWVzc2FnZXNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0cywgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sLTEyIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlYnNvY2tldCBzdGF0dXM6IFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MUVcXHUwNDQ3XFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgdHlwZTogXCJjaGVja1wiLCBuYW1lOiBcImNsZWFyQkRcIiwgdmFsdWU6IHRoaXMuc3RhdGUuY2xlYXJEQiwgb25DaGFuZ2U6IHRoaXMuY2xlYXJEQiwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDI0XFx1MDQzMFxcdTA0MzlcXHUwNDNCIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiLCBuYW1lOiBcInVwbG9hZEZpbGVOYW1lXCIsIGlkOiBcInVwbG9hZEZpbGVOYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gdGhpcy5zdGF0ZS51cGxvYWRGaWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSwgcmVhZE9ubHk6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHRoaXMuc2VsZWN0RmlsZVRvVXBsb2FkLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9LCBcIi4uLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogdGhpcy5zZW5kRmlsZSwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUudXBsb2FkRmlsZSA9PT0gbnVsbCB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBEQlwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF9kb3dubG9hZFwiIH0sIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMxXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQ0MlxcdTA0MzUgXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQyIFxcdTA0NDFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0NEZcXHUwNDM1XFx1MDQzQ1xcdTA0M0VcXHUwNDMzXFx1MDQzRSBcXHUwNDQ0XFx1MDQzMFxcdTA0MzlcXHUwNDNCXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5TZWxlY3QsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3NlbGVjdF9kb3dubG9hZFwiLCBvbkNoYW5nZTogdGhpcy5zZWxlY3RGb3JtYXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwianNvblwiIH0sIFwianNvblwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogdGhpcy5nZXREb3dubG9hZFVybCgpLCBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJmb3JtYXRcIiwgdmFsdWU6IHRoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERhc2hib2FyZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZCcgfSwgY2hpbGRyZW4pO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdmb3JtJztcbmNvbnN0IGdldENsYXNzTmFtZSA9IChjbGFzc05hbWUgPSAnJywgYXV4Q2xhc3NOYW1lID0gJycsIHN1ZmZpeCA9ICcnKSA9PiB7XG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYmFzZUNsYXNzICsgc3VmZml4ICsgKGF1eENsYXNzTmFtZSA/ICcgJyArIGF1eENsYXNzTmFtZSA6ICcnKTtcbn07XG5jb25zdCBGb3JtTGFiZWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2xhYmVsJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fZ3JvdXAnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUNvbnRyb2xTZWxlY3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb3BzLnR5cGUpXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fdGV4dCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIFxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICByZWFkT25seTogIXByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jb250cm9sJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIHJvd3M6IHByb3BzLnJvd3MgPyArcHJvcHMucm93cyA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NoZWNrJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sU2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfVxufTtcbi8vIGNvbnN0IEZvcm06IFRGb3JtID0gcHJvcHMgPT4ge1xuLy8gICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSkgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Zm9ybVxuLy8gICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4vLyAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cbi8vICAgICAgIGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKX1cbi8vICAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbi8vICAgICA+XG4vLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgPC9mb3JtPlxuLy8gICApO1xuLy8gfTtcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSlcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBwcm9wcy5hY3Rpb24sIG1ldGhvZDogcHJvcHMubWV0aG9kLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSksIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGVydHMgfSBmcm9tICcuL0FsZXJ0Q29udGV4dCc7XG5jb25zdCBBbGVydHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxlcnRzID0gdXNlQWxlcnRzKCk7XG4gICAgY29uc3QgZGVmVGltZW91dCA9IDUwMDA7XG4gICAgY29uc3Qgc2hvd0FsZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWxlcnRzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKHZpZXcpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KHNob3dBbGVydHMsIFthbGVydHMubWVzc2FnZXNdKTtcbiAgICBjb25zdCBnZXRUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdCA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0ID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGUudHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydF8nICsgdHlwZSwga2V5OiBpbmRleCB9LCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZ2xvYmFsLnNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnJyksIHdhaXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICBkZWxheShwcm9wcy50aW1lb3V0ID8gcHJvcHMudGltZW91dCA6IGRlZlRpbWVvdXQpLnRoZW4oKCkgPT4gc2V0VmlzaWJsZShmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGdldEFsZXJ0cyhhbGVydHMubWVzc2FnZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2hvdygpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNhY2hlID0ge307XG5cbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgb3B0aW9ucykge1xuICBpZiAoaGFzKGNhY2hlLCBNRVRIT0RfTkFNRSkpIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV07XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICB2YXIgQUNDRVNTT1JTID0gaGFzKG9wdGlvbnMsICdBQ0NFU1NPUlMnKSA/IG9wdGlvbnMuQUNDRVNTT1JTIDogZmFsc2U7XG4gIHZhciBhcmd1bWVudDAgPSBoYXMob3B0aW9ucywgMCkgPyBvcHRpb25zWzBdIDogdGhyb3dlcjtcbiAgdmFyIGFyZ3VtZW50MSA9IGhhcyhvcHRpb25zLCAxKSA/IG9wdGlvbnNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXSA9ICEhbWV0aG9kICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFDQ0VTU09SUyAmJiAhREVTQ1JJUFRPUlMpIHJldHVybiB0cnVlO1xuICAgIHZhciBPID0geyBsZW5ndGg6IC0xIH07XG5cbiAgICBpZiAoQUNDRVNTT1JTKSBkZWZpbmVQcm9wZXJ0eShPLCAxLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogdGhyb3dlciB9KTtcbiAgICBlbHNlIE9bMV0gPSAxO1xuXG4gICAgbWV0aG9kLmNhbGwoTywgYXJndW1lbnQwLCBhcmd1bWVudDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==