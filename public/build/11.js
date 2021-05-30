(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL2FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIm1lc3NhZ2VzIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0IiwiYXNzaWduIiwic3RhdGUiLCJzZXRTdGF0ZSIsIndzX3NjaGVtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImpvaW4iLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwiY29ubmVjdFdlYnNvY2tldCIsInNlbGYiLCJjb25uZWN0SW50ZXJ2YWwiLCJ1cmwiLCJnZXRXc1VybCIsIm9ub3BlbiIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRXZWJzb2NrZXRTdGF0dXMiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsIm9uY2xvc2UiLCJnbG9iYWwiLCJzZXRUaW1lb3V0IiwiY2hlY2tXZWJzb2NrZXQiLCJNYXRoIiwibWluIiwib25lcnJvciIsImUiLCJ0YXJnZXQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzZW5kIiwic3RyaW5naWZ5IiwiY2xlYXJkYiIsIl9hIiwiUmVhY3QiLCJBbGVydHMiLCJDYXJkIiwiSGVhZGVyIiwiRm9ybSIsIkxhYmVsIiwiY2xhc3NOYW1lIiwiQm9keSIsIkdyb3VwIiwiYXV4Q2xhc3NOYW1lIiwiQ29udHJvbCIsIm5hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiaWQiLCJyZWFkT25seSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJzZW5kRmlsZSIsIlNlbGVjdCIsInNlbGVjdEZvcm1hdCIsImFjdGlvbiIsImdldERvd25sb2FkVXJsIiwibWV0aG9kIiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJwcm9wcyIsIkZvcm1Db250cm9sIiwicGxhY2Vob2xkZXIiLCJtYXhMZW5ndGgiLCJ1bmRlZmluZWQiLCJyb3dzIiwiRnJhZ21lbnQiLCJiYXNlQ2xhc3NOYW1lIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYWxlcnRzIiwidXNlQWxlcnRzIiwiZGVmVGltZW91dCIsInNob3dBbGVydHMiLCJ2aWV3IiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZ2V0VHlwZSIsInQiLCJnZXRBbGVydHMiLCJhcnJheSIsIm1hcCIsImluZGV4Iiwia2V5IiwibWVzc2FnZSIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hvdyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxTOzs7OztBQUNGLHVCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNDLFNBQVQ7QUFDQUMsVUFBTSxDQUFDQyxjQUFQLGdDQUE0QixPQUE1QixFQUFxQztBQUNqQ0MsZ0JBQVUsRUFBRSxJQURxQjtBQUVqQ0Msa0JBQVksRUFBRSxJQUZtQjtBQUdqQ0MsY0FBUSxFQUFFLElBSHVCO0FBSWpDQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRSxFQURQO0FBRUhDLGtCQUFVLEVBQUUsSUFGVDtBQUdIQyxlQUFPLEVBQUUsS0FITjtBQUlIQyxpQkFBUyxFQUFFO0FBQ1BDLFlBQUUsRUFBRSxJQURHO0FBRVBDLGdCQUFNLEVBQUU7QUFGRCxTQUpSO0FBUUhDLHNCQUFjLEVBQUU7QUFSYjtBQUowQixLQUFyQztBQWVBWixVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLGFBQTVCLEVBQTJDO0FBQ3ZDQyxnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxrQkFBWSxFQUFFLElBRnlCO0FBR3ZDQyxjQUFRLEVBQUUsSUFINkI7QUFJdkNDLFdBQUssRUFBRTtBQUpnQyxLQUEzQztBQU1BTCxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLFdBQTVCLEVB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Q0E7QUFDQSx5REFBeUQsd0JBQXdCOztBQUVqRjtBQUNBO0FBQ0EsR0FBRywyRkFBMkY7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2xpYi9Gb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9saWIvYWxlcnQvQWxlcnRzJztcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgY2xlYXJEQjogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2Vic29ja2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHdzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG93bmxvYWRGb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRvd25sb2FkVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwbG9hZFVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0aW1lb3V0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAyNTBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldERvd25sb2FkVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXRXZWJzb2NrZXRTdGF0dXNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUud2Vic29ja2V0KSwgeyBzdGF0dXM6IHN0YXR1cyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0V3NVcmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0V3NVcmwgcHJvdG9jb2w6IFwiLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjMwMDAvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaGVyb2t1IGRlcGxveVxuICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWVbMF0gPSAncHNrb3Ytd3MnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnbG9jYWxob3N0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoZWNrV2Vic29ja2V0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICAgICAgICAgICAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY29ubmVjdFdlYnNvY2tldFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgICAgICAgICAgICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFdzVXJsKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICAgICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd3Mub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnb25tZXNzYWdlJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0ICsgc2VsZi50aW1lb3V0OyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0SW50ZXJ2YWwgPSBnbG9iYWwuc2V0VGltZW91dCh0aGlzLmNoZWNrV2Vic29ja2V0LCBNYXRoLm1pbigxMDAwMCwgc2VsZi50aW1lb3V0KSk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3Qgd2Vic29ja2V0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLndlYnNvY2tldCksIHsgd3M6IHdzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWxlY3RGb3JtYXRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25sb2FkRm9ybWF0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdEZpbGVUb1VwbG9hZFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZEZpbGU6IGZpbGUgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2VuZEZpbGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsICdVVEYtOCcpO1xuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgICAgICAgICAgICAgICAgICBpZiAod3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGVhckRCXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGVhck1lc3NhZ2VzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbC0xMiB0ZXh0LWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZWJzb2NrZXQgc3RhdHVzOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDFFXFx1MDQ0N1xcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IHR5cGU6IFwiY2hlY2tcIiwgbmFtZTogXCJjbGVhckJEXCIsIHZhbHVlOiB0aGlzLnN0YXRlLmNsZWFyREIsIG9uQ2hhbmdlOiB0aGlzLmNsZWFyREIsIGRpc2FibGVkOiB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQyNFxcdTA0MzBcXHUwNDM5XFx1MDQzQiBcXHUwNDM3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzOCBcXHUwNDMyIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3RleHQgZm9ybV9fdGV4dF91cGxvYWRcIiwgbmFtZTogXCJ1cGxvYWRGaWxlTmFtZVwiLCBpZDogXCJ1cGxvYWRGaWxlTmFtZVwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IChfYSA9IHRoaXMuc3RhdGUudXBsb2FkRmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUsIHJlYWRPbmx5OiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiB0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZCwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSwgXCIuLi5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHRoaXMuc2VuZEZpbGUsIGRpc2FibGVkOiB0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPT09IG51bGwgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgREJcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIiB9LCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzMVxcdTA0MzVcXHUwNDQwXFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0MiBcXHUwNDQxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDRGXFx1MDQzNVxcdTA0M0NcXHUwNDNFXFx1MDQzM1xcdTA0M0UgXFx1MDQ0NFxcdTA0MzBcXHUwNDM5XFx1MDQzQlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uU2VsZWN0LCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19zZWxlY3RfZG93bmxvYWRcIiwgb25DaGFuZ2U6IHRoaXMuc2VsZWN0Rm9ybWF0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImpzb25cIiB9LCBcImpzb25cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHRoaXMuZ2V0RG93bmxvYWRVcmwoKSwgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiZm9ybWF0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLmRvd25sb2FkRm9ybWF0IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihEYXNoYm9hcmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0b29sdGlwLCBpZCwgY2xhc3NOYW1lLCBuYW1lLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQsIGNoaWxkcmVuLCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKTtcbn07XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnZm9ybSc7XG5jb25zdCBnZXRDbGFzc05hbWUgPSAoY2xhc3NOYW1lID0gJycsIGF1eENsYXNzTmFtZSA9ICcnLCBzdWZmaXggPSAnJykgPT4ge1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJhc2VDbGFzcyArIHN1ZmZpeCArIChhdXhDbGFzc05hbWUgPyAnICcgKyBhdXhDbGFzc05hbWUgOiAnJyk7XG59O1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19sYWJlbCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtR3JvdXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2dyb3VwJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Db250cm9sU2VsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3NlbGVjdCcpLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IChwcm9wcykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG4vLyBjb25zdCBGb3JtOiBURm9ybSA9IHByb3BzID0+IHtcbi8vICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGZvcm1cbi8vICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuLy8gICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XG4vLyAgICAgICBjbGFzc05hbWU9e2dldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSl9XG4vLyAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4vLyAgICAgPlxuLy8gICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgIDwvZm9ybT5cbi8vICAgKTtcbi8vIH07XG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpXG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogcHJvcHMuYWN0aW9uLCBtZXRob2Q6IHByb3BzLm1ldGhvZCwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpLCBvblN1Ym1pdDogcHJvcHMub25TdWJtaXQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn1cbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uU2VsZWN0ID0gRm9ybUNvbnRyb2xTZWxlY3Q7XG5Gb3JtLkdyb3VwID0gRm9ybUdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxlcnRzIH0gZnJvbSAnLi9BbGVydENvbnRleHQnO1xuY29uc3QgQWxlcnRzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsZXJ0cyA9IHVzZUFsZXJ0cygpO1xuICAgIGNvbnN0IGRlZlRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IHNob3dBbGVydHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsZXJ0cztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZSh2aWV3KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChzaG93QWxlcnRzLCBbYWxlcnRzLm1lc3NhZ2VzXSk7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHQgPSAnaW5mbyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0ID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHQgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdCA9ICdkYW5nZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheSA/IChhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShlLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZGVsYXkocHJvcHMudGltZW91dCA/IHByb3BzLnRpbWVvdXQgOiBkZWZUaW1lb3V0KS50aGVuKCgpID0+IHNldFZpc2libGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBnZXRBbGVydHMoYWxlcnRzLm1lc3NhZ2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHNob3coKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9