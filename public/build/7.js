(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
      timeout: 5000
    });

    _defineProperty(_assertThisInitialized(_this), "getReactAlerts", function (array) {
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
          variant: type,
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getReactAlerts(_this.state.messages));
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_12__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-2 text-left"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        className: "ml-2",
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-2 text-left"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control col-3",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFile ? this.state.uploadFile.name : '',
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected' ? 'disable' : ''
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "col-1 ml-2",
        onClick: this.sendFile,
        disabled: this.state.uploadFile ? '' : 'disabled'
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-5"
      }, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-3 text-left"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        as: "select",
        className: "col-2",
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        type: "submit",
        className: "col ml-4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsIm1lc3NhZ2VzIiwic2hvd0FsZXJ0IiwidGltZW91dCIsImFycmF5IiwibWFwIiwiZSIsImluZGV4IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiY2xlYXJNZXNzYWdlcyIsImdldFJlYWN0QWxlcnRzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0Iiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsImdldFdzVXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwic2V0V2Vic29ja2V0U3RhdHVzIiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsInBhcnNlIiwicHVzaCIsIm9uY2xvc2UiLCJjaGVja1dlYnNvY2tldCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJjbGVhcmRiIiwibmFtZSIsInNlbGVjdEZpbGVUb1VwbG9hZCIsInNlbmRGaWxlIiwic2VsZWN0Rm9ybWF0IiwiZ2V0RG93bmxvYWRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7NERBTVg7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsZUFBUyxFQUFFLEtBRkw7QUFHTkMsYUFBTyxFQUFFO0FBSEgsSzs7cUVBNEJTLFVBQUFDLEtBQUssRUFBSTtBQUN4QixhQUFPQSxLQUFLLEdBQ1ZBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3RCLFlBQUlDLElBQUksR0FBRyxRQUFYOztBQUNBLGdCQUFRRixDQUFDLENBQUNFLElBQVY7QUFDRSxlQUFLLE1BQUw7QUFDRUEsZ0JBQUksR0FBRyxNQUFQO0FBQ0E7O0FBQ0YsZUFBSyxTQUFMO0FBQ0VBLGdCQUFJLEdBQUcsU0FBUDtBQUNBOztBQUNGLGVBQUssT0FBTDtBQUNFQSxnQkFBSSxHQUFHLFFBQVA7QUFDQTs7QUFDRjtBQUNFQSxnQkFBSSxHQUFHLFFBQVA7QUFYSjs7QUFhQSw0QkFDRSwy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QUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lc3NhZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBjbGVhck1lc3NhZ2VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcblxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2VzICYmXG4gICAgICBtZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpXG4gICAgKSB7XG4gICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGFycmF5ID8gKFxuICAgICAgYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt0eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gd2FpdCA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkoXG4gICAgICAgIHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dFxuICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0UmVhY3RBbGVydHModGhpcy5zdGF0ZS5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBSb3csIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL0FsZXJ0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB1cGxvYWRGaWxlOiBudWxsLFxuICAgIGNsZWFyREI6IGZhbHNlLFxuICAgIHdlYnNvY2tldDoge1xuICAgICAgd3M6IG51bGwsXG4gICAgICBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLFxuICAgIH0sXG4gICAgZG93bmxvYWRGb3JtYXQ6ICdqc29uJyxcbiAgfTtcblxuICBkb3dubG9hZFVybCA9ICcvJztcbiAgdXBsb2FkVXJsID0gJy8nO1xuXG4gIGdldERvd25sb2FkVXJsID0gKCkgPT4ge1xuICAgIHJldHVybiBgL2FwaS9kb3dubG9hZC9gO1xuICB9O1xuXG4gIHNldFdlYnNvY2tldFN0YXR1cyA9IHN0YXR1cyA9PiB7XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgc3RhdHVzOiBzdGF0dXMgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICB9O1xuXG4gIGdldFdzVXJsID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coXCJnZXRXc1VybCBwcm90b2NvbDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCk7XG5cbiAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzcycgOiAnd3MnO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsb2NhbGhvc3QnKSA+PSAwKSB7XG4gICAgICByZXR1cm4gYHdzOi8vYCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzAwMC8nO1xuICAgIH1cbiAgICAvLyBoZXJva3UgZGVwbG95XG4gICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICBjb25zb2xlLmxvZygnZ2V0V3NVcmwgaGVyb2t1OiAnLCBob3N0bmFtZSk7XG4gICAgaWYgKGhvc3RuYW1lWzFdICYmIGhvc3RuYW1lWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaGVyb2t1JykgPj0gMCkge1xuICAgICAgaG9zdG5hbWVbMF0gPSAncHNrb3Ytd3MnO1xuICAgICAgcmV0dXJuIGAke3dzX3NjaGVtZX06Ly9gICsgaG9zdG5hbWUuam9pbignLicpO1xuICAgIH1cbiAgICByZXR1cm4gJ2xvY2FsaG9zdCc7XG4gIH07XG5cbiAgY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICB9O1xuXG4gIGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgLy9jb25zdCB1cmwgPSBgd3M6Ly8ke3RoaXMuZ2V0SG9zdE5hbWUoKX06ODA4MC9gO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0V3NVcmwoKTtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdFdlYnNvY2tldCB1cmw6ICcsIHVybCk7XG5cbiAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBzZWxmLnRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgfTtcblxuICAgIHdzLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ29ubWVzc2FnZScsIGRhdGEpO1xuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgIHNlbGYudGltZW91dCA9IHNlbGYudGltZW91dCArIHNlbGYudGltZW91dDsgLy9pbmNyZW1lbnQgcmV0cnkgaW50ZXJ2YWxcbiAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IHNldFRpbWVvdXQoXG4gICAgICAgIHRoaXMuY2hlY2tXZWJzb2NrZXQsXG4gICAgICAgIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpXG4gICAgICApOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgIH07XG5cbiAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgfTtcbiAgICBjb25zdCB3ZWJzb2NrZXQgPSB7IC4uLnRoaXMuc3RhdGUud2Vic29ja2V0LCB3czogd3MgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpO1xuICB9XG5cbiAgc2VsZWN0Rm9ybWF0ID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25sb2FkRm9ybWF0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBzZWxlY3RGaWxlVG9VcGxvYWQgPSBlID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICdmaWxlJztcblxuICAgIGlucHV0Lm9uY2hhbmdlID0gZSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICB9O1xuXG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfTtcblxuICBzZW5kRmlsZSA9IGUgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQodGhpcy5zdGF0ZS51cGxvYWRGaWxlLCAnVVRGLTgnKTtcblxuICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LndzLnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB0eXBlOiAndXRmOCcsXG4gICAgICAgICAgY2xlYXJkYjogdGhpcy5zdGF0ZS5jbGVhckRCLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG5cbiAgY2xlYXJEQiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xlYXJEQjogIXRoaXMuc3RhdGUuY2xlYXJEQiB9KTtcbiAgfTtcblxuICBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxlcnRzXG4gICAgICAgICAgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9XG4gICAgICAgICAgY2xlYXJNZXNzYWdlcz17dGhpcy5jbGVhck1lc3NhZ2VzfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCX0LDQs9GA0YPQt9C60LAg0LIgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgV2Vic29ja2V0IHN0YXR1czoge3RoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPtCe0YfQuNGB0YLQuNGC0YwgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXG4gICAgICAgICAgICAgICAgbmFtZT1cImNsZWFyQkRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNsZWFyREJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnXG4gICAgICAgICAgICAgICAgICAgID8gJ2Rpc2FibGUnXG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgINCk0LDQudC7INC30LDQs9GA0YPQt9C60Lgg0LIgREJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyB0aGlzLnN0YXRlLnVwbG9hZEZpbGUubmFtZSA6ICcnfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnXG4gICAgICAgICAgICAgICAgICAgID8gJ2Rpc2FibGUnXG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEgbWwtMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kRmlsZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS51cGxvYWRGaWxlID8gJycgOiAnZGlzYWJsZWQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCS0YvQs9GA0YPQt9C60LAgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDRhNC+0YDQvNCw0YIg0YHQvtGF0YDQsNC90Y/QtdC80L7Qs9C+INGE0LDQudC70LBcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWxlY3RGb3JtYXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwianNvblwiPmpzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cImNzdlwiPmNzdjwvb3B0aW9uPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0L3BsYWluPC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXt0aGlzLmdldERvd25sb2FkVXJsKCl9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kb3dubG9hZEZvcm1hdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY29sIG1sLTRcIj5cbiAgICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==