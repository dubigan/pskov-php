(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/components/Alerts.js":
/*!*************************************!*\
  !*** ./assets/components/Alerts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Alerts = /*#__PURE__*/function (_Component) {
  _inherits(Alerts, _Component);

  var _super = _createSuper(Alerts);

  function Alerts() {
    var _this;

    _classCallCheck(this, Alerts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      messages: [],
      showAlert: false,
      timeout: 7000
    });

    _defineProperty(_assertThisInitialized(_this), "getAlerts", function (array) {
      return array ? array.map(function (e, index) {
        var type = 'danger';

        switch (e.type) {
          case 'info':
            type = 'info';
            break;

          case 'success':
            type = 'success';
            break;

          case 'error':
            type = 'danger';
            break;

          default:
            type = 'danger';
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: 'alert alert_' + type,
          key: index
        }, e.message);
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);
    });

    _defineProperty(_assertThisInitialized(_this), "delay", function (wait) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          return resolve();
        }, wait);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showAlert", function () {
      if (_this.state.showAlert) {
        _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(function () {
          _this.setState({
            messages: [],
            showAlert: false
          });

          _this.props.clearMessages();
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
    });

    return _this;
  }

  _createClass(Alerts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showAlert = false;
      var messages = this.props.messages; //const { messages: prevMessages } = prevProps;
      //console.log('Alerts', messages);

      if (messages && messages.length > 0 && JSON.stringify(this.state.messages) !== JSON.stringify(messages)) {
        showAlert = true;
      }

      if (showAlert && !this.state.showAlert) {
        this.setState({
          messages: messages,
          showAlert: showAlert
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_defineProperty(Alerts, "propTypes", {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array.isRequired,
  clearMessages: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
});



/***/ }),

/***/ "./assets/components/Dashboard.js":
/*!****************************************!*\
  !*** ./assets/components/Dashboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "check",
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        auxClassName: "form__text form__text_upload",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFile ? this.state.uploadFile.name : '',
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_13__["Button"] //variant="primary"
      , {
        className: "btn-primary",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_13__["Button"] //variant="primary"
      , {
        className: "btn-primary",
        onClick: this.sendFile,
        disabled: this.state.uploadFile ? '' : 'disabled'
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
        auxClassName: "form__label_download"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Select, {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        type: "submit",
        className: "btn-primary"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Dashboard));

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
  // let Body: typeof CardBody;
  // let Footer: typeof CardFooter;
  return (
    /*#__PURE__*/
    // {
    //   Header: CardHeader,
    //   Title: CardTitle,
    //   Body: CardBody,
    //   Footer: CardFooter
    // }
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className ? className : 'card'
    }, children)
  );
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
};

var Form = function Form(props) {
  if (props.baseClassName) baseClass = props.baseClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: props.action,
    method: props.method,
    className: getClassName(props.className, props.auxClassName),
    onSubmit: props.onSubmit
  }, props.children);
};

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormControlSelect;
Form.Group = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Form);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9saWIvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiXSwibmFtZXMiOlsiQWxlcnRzIiwibWVzc2FnZXMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJjbGVhck1lc3NhZ2VzIiwiZ2V0QWxlcnRzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0Iiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsImdldFdzVXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwic2V0V2Vic29ja2V0U3RhdHVzIiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsInBhcnNlIiwicHVzaCIsIm9uY2xvc2UiLCJjaGVja1dlYnNvY2tldCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJjbGVhcmRiIiwibmFtZSIsInNlbGVjdEZpbGVUb1VwbG9hZCIsInNlbmRGaWxlIiwic2VsZWN0Rm9ybWF0IiwiZ2V0RG93bmxvYWRVcmwiLCJ3aXRoUm91dGVyIiwiQnV0dG9uIiwidG9vbHRpcCIsImlkIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJSZWFjdCIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmQiLCJIZWFkZXIiLCJCb2R5IiwiRm9vdGVyIiwiVGl0bGUiLCJiYXNlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJhdXhDbGFzc05hbWUiLCJzdWZmaXgiLCJGb3JtTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbFNlbGVjdCIsIm9uQ2hhbmdlIiwiRm9ybUNvbnRyb2wiLCJPYmplY3QiLCJhc3NpZ24iLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsInJlYWRPbmx5Iiwicm93cyIsIkZyYWdtZW50IiwiRm9ybSIsImJhc2VDbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsIkxhYmVsIiwiQ29udHJvbCIsIlNlbGVjdCIsIkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQU1YO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLGVBQVMsRUFBRSxLQUZMO0FBR05DLGFBQU8sRUFBRTtBQUhILEs7O2dFQXdCSSxVQUFBQyxLQUFLLEVBQUk7QUFDbkIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFJQyxJQUFJLEdBQUcsUUFBWDs7QUFDQSxnQkFBUUYsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsZUFBSyxNQUFMO0FBQ0VBLGdCQUFJLEdBQUcsTUFBUDtBQUNBOztBQUNGLGVBQUssU0FBTDtBQUNFQSxnQkFBSSxHQUFHLFNBQVA7QUFDQTs7QUFDRixlQUFLLE9BQUw7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBQ0E7O0FBQ0Y7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBWEo7O0FBYUEsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFLGlCQUFpQkEsSUFBakM7QUFBdUMsYUFBRyxFQUFFRDtBQUE1QyxXQUNHRCxDQUFDLENBQUNHLE9BREwsQ0FERjtBQUtELE9BcEJELENBRFUsZ0JBdUJWLHVIQXZCRjtBQXlCRCxLOzs0REFFTyxVQUFBQyxJQUFJO0FBQUEsYUFDVixJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQ3JCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRFU7QUFBQSxLOztnRUFL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R0FBcUM7QUFDdkUsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjs7QUFFQTtBQUNBO0FBQ0EseURBQXlELHdCQUF3Qjs7QUFFakY7QUFDQTtBQUNBLEdBQUcsMkZBQTJGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lc3NhZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBjbGVhck1lc3NhZ2VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDcwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcblxuICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwICYmIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcykpIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGVydHMgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0IGFsZXJ0XycgKyB0eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8PjwvPlxuICAgICk7XG4gIH07XG5cbiAgZGVsYXkgPSB3YWl0ID0+XG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheSh0aGlzLnByb3BzLnRpbWVvdXQgPyB0aGlzLnByb3BzLnRpbWVvdXQgOiB0aGlzLnN0YXRlLnRpbWVvdXQpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRBbGVydHModGhpcy5zdGF0ZS5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2xpYi9Gb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgdXBsb2FkRmlsZTogbnVsbCxcbiAgICBjbGVhckRCOiBmYWxzZSxcbiAgICB3ZWJzb2NrZXQ6IHtcbiAgICAgIHdzOiBudWxsLFxuICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICB9LFxuICAgIGRvd25sb2FkRm9ybWF0OiAnanNvbicsXG4gIH07XG5cbiAgZG93bmxvYWRVcmwgPSAnLyc7XG4gIHVwbG9hZFVybCA9ICcvJztcblxuICBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgfTtcblxuICBzZXRXZWJzb2NrZXRTdGF0dXMgPSBzdGF0dXMgPT4ge1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHN0YXR1czogc3RhdHVzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBnZXRXc1VybCA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0V3NVcmwgcHJvdG9jb2w6IFwiLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpO1xuXG4gICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbG9jYWxob3N0JykgPj0gMCkge1xuICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjMwMDAvJztcbiAgICB9XG4gICAgLy8gaGVyb2t1IGRlcGxveVxuICAgIGNvbnN0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgIHJldHVybiBgJHt3c19zY2hlbWV9Oi8vYCArIGhvc3RuYW1lLmpvaW4oJy4nKTtcbiAgICB9XG4gICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICB9O1xuXG4gIGNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgfTtcblxuICBjb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFdzVXJsKCk7XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuXG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgIH07XG5cbiAgICB3cy5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXM7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcblxuICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICBjb25uZWN0SW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHRoaXMuY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICB9O1xuXG4gICAgd3Mub25lcnJvciA9IGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgIH07XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgd3M6IHdzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgc2VsZWN0RmlsZVRvVXBsb2FkID0gZSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9IGUgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZEZpbGU6IGZpbGUgfSk7XG4gICAgfTtcblxuICAgIGlucHV0LmNsaWNrKCk7XG4gIH07XG5cbiAgc2VuZEZpbGUgPSBlID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgJ1VURi04Jyk7XG5cbiAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICByZWFkZXIub25sb2FkID0gcmVhZGVyRXZlbnQgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC53cy5zZW5kKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xuXG4gIGNsZWFyREIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gIH07XG5cbiAgY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD7Ql9Cw0LPRgNGD0LfQutCwINCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1sZWZ0XCI+V2Vic29ja2V0IHN0YXR1czoge3RoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhdXhDbGFzc05hbWU9XCJmb3JtX19ncm91cF9ob3JpelwiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBhdXhDbGFzc05hbWU9XCJmb3JtX19sYWJlbF91cGxvYWRcIj7QntGH0LjRgdGC0LjRgtGMIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xlYXJCRFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jbGVhckRCfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnID8gJ2Rpc2FibGUnIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhdXhDbGFzc05hbWU9XCJmb3JtX19ncm91cF9ob3JpelwiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBhdXhDbGFzc05hbWU9XCJmb3JtX19sYWJlbF91cGxvYWRcIj7QpNCw0LnQuyDQt9Cw0LPRgNGD0LfQutC4INCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IHRoaXMuc3RhdGUudXBsb2FkRmlsZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyA/ICdkaXNhYmxlJyA6ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEZpbGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/ICcnIDogJ2Rpc2FibGVkJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPtCS0YvQs9GA0YPQt9C60LAgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXBfaG9yaXpcIj5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgYXV4Q2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxfZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INGE0L7RgNC80LDRgiDRgdC+0YXRgNCw0L3Rj9C10LzQvtCz0L4g0YTQsNC50LvQsFxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBhdXhDbGFzc05hbWU9XCJmb3JtX19zZWxlY3RfZG93bmxvYWRcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3RGb3JtYXR9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+anNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Y3N2PC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQvcGxhaW48L29wdGlvbj4gKi99XG4gICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17dGhpcy5nZXREb3dubG9hZFVybCgpfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXR9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGFzaGJvYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdGl0bGU6IHRvb2x0aXAsIGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgY2hpbGRyZW4pKTtcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICBuYW1lOiAnYnRuJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdG9vbHRpcDogJycsXG4gICAgaWQ6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjaGlsZHJlbjogJ2J1dHRvbicsXG59O1xuLy9leHBvcnQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IENhcmRIZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2hlYWRlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fdGl0bGUnIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkQm9keSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fYm9keScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRGb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2Zvb3RlcicgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICAvLyBsZXQgQm9keTogdHlwZW9mIENhcmRCb2R5O1xuICAgIC8vIGxldCBGb290ZXI6IHR5cGVvZiBDYXJkRm9vdGVyO1xuICAgIHJldHVybiAoXG4gICAgLy8ge1xuICAgIC8vICAgSGVhZGVyOiBDYXJkSGVhZGVyLFxuICAgIC8vICAgVGl0bGU6IENhcmRUaXRsZSxcbiAgICAvLyAgIEJvZHk6IENhcmRCb2R5LFxuICAgIC8vICAgRm9vdGVyOiBDYXJkRm9vdGVyXG4gICAgLy8gfVxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbikpO1xufTtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGJhc2VDbGFzcyA9ICdmb3JtJztcbmNvbnN0IGdldENsYXNzTmFtZSA9IChjbGFzc05hbWUgPSAnJywgYXV4Q2xhc3NOYW1lID0gJycsIHN1ZmZpeCA9ICcnKSA9PiB7XG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYmFzZUNsYXNzICsgc3VmZml4ICsgKGF1eENsYXNzTmFtZSA/ICcgJyArIGF1eENsYXNzTmFtZSA6ICcnKTtcbn07XG5jb25zdCBGb3JtTGFiZWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2xhYmVsJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Hcm91cCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fZ3JvdXAnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUNvbnRyb2xTZWxlY3QgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3NlbGVjdCcpLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbCA9IHByb3BzID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuY29uc3QgRm9ybSA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMuYmFzZUNsYXNzTmFtZSlcbiAgICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzTmFtZTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBwcm9wcy5hY3Rpb24sIG1ldGhvZDogcHJvcHMubWV0aG9kLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSksIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbkZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5Gb3JtLkNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbkZvcm0uU2VsZWN0ID0gRm9ybUNvbnRyb2xTZWxlY3Q7XG5Gb3JtLkdyb3VwID0gRm9ybUdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==