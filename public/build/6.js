(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsIm1lc3NhZ2VzIiwic2hvd0FsZXJ0IiwidGltZW91dCIsImFycmF5IiwibWFwIiwiZSIsImluZGV4IiwidHlwZSIsIm1lc3NhZ2UiLCJ3YWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJkZWxheSIsInByb3BzIiwidGhlbiIsInNldFN0YXRlIiwiY2xlYXJNZXNzYWdlcyIsImdldFJlYWN0QWxlcnRzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbXBvbmVudCIsIkRhc2hib2FyZCIsInVwbG9hZEZpbGUiLCJjbGVhckRCIiwid2Vic29ja2V0Iiwid3MiLCJzdGF0dXMiLCJkb3dubG9hZEZvcm1hdCIsIndzX3NjaGVtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImpvaW4iLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwiY29ubmVjdFdlYnNvY2tldCIsInNlbGYiLCJjb25uZWN0SW50ZXJ2YWwiLCJ1cmwiLCJnZXRXc1VybCIsIm9ub3BlbiIsImNsZWFyVGltZW91dCIsInNldFdlYnNvY2tldFN0YXR1cyIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJwYXJzZSIsInB1c2giLCJvbmNsb3NlIiwiY2hlY2tXZWJzb2NrZXQiLCJNYXRoIiwibWluIiwib25lcnJvciIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsImNsaWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzZW5kIiwiY2xlYXJkYiIsIm5hbWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJzZW5kRmlsZSIsInNlbGVjdEZvcm1hdCIsImdldERvd25sb2FkVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ1g7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsZUFBUyxFQUFFLEtBRkw7QUFHTkMsYUFBTyxFQUFFO0FBSEgsSzs7cUVBNEJTLFVBQUFDLEtBQUssRUFBSTtBQUN4QixhQUFPQSxLQUFLLEdBQ1ZBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3RCLFlBQUlDLElBQUksR0FBRyxRQUFYOztBQUNBLGdCQUFRRixDQUFDLENBQUNFLElBQVY7QUFDRSxlQUFLLE1BQUw7QUFDRUEsZ0JBQUksR0FBRyxNQUFQO0FBQ0E7O0FBQ0YsZUFBSyxTQUFMO0FBQ0VBLGdCQUFJLEdBQUcsU0FBUDtBQUNBOztBQUNGLGVBQUssT0FBTDtBQUNFQSxnQkFBSSxHQUFHLFFBQVA7QUFDQTs7QUFDRjtBQUNFQSxnQkFBSSxHQUFHLFFBQVA7QUFYSjs7QUFhQSw0QkFDRSwyREFBQyxxREFBRDtBQUFZLGlCQUFPLEVBQUVBLElBQXJCO0FBQTJC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Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydCBhcyBSZWFjdEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuXG4gICAgaWYgKFxuICAgICAgbWVzc2FnZXMgJiZcbiAgICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcylcbiAgICApIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdEFsZXJ0IHZhcmlhbnQ9e3R5cGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2UubWVzc2FnZX1cbiAgICAgICAgICA8L1JlYWN0QWxlcnQ+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8PjwvPlxuICAgICk7XG4gIH07XG5cbiAgZGVsYXkgPSB3YWl0ID0+XG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnN0YXRlLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIFJvdywgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgY2xlYXJEQjogZmFsc2UsXG4gICAgd2Vic29ja2V0OiB7XG4gICAgICB3czogbnVsbCxcbiAgICAgIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgfSxcbiAgICBkb3dubG9hZEZvcm1hdDogJ2pzb24nLFxuICB9O1xuXG4gIGRvd25sb2FkVXJsID0gJy8nO1xuICB1cGxvYWRVcmwgPSAnLyc7XG5cbiAgZ2V0RG93bmxvYWRVcmwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gIH07XG5cbiAgc2V0V2Vic29ja2V0U3RhdHVzID0gc3RhdHVzID0+IHtcbiAgICBjb25zdCB3ZWJzb2NrZXQgPSB7IC4uLnRoaXMuc3RhdGUud2Vic29ja2V0LCBzdGF0dXM6IHN0YXR1cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgZ2V0V3NVcmwgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcblxuICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgIHJldHVybiBgd3M6Ly9gICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozMDAwLyc7XG4gICAgfVxuICAgIC8vIGhlcm9rdSBkZXBsb3lcbiAgICBjb25zdCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgIGNvbnNvbGUubG9nKCdnZXRXc1VybCBoZXJva3U6ICcsIGhvc3RuYW1lKTtcbiAgICBpZiAoaG9zdG5hbWVbMV0gJiYgaG9zdG5hbWVbMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoZXJva3UnKSA+PSAwKSB7XG4gICAgICBob3N0bmFtZVswXSA9ICdwc2tvdi13cyc7XG4gICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgfVxuICAgIHJldHVybiAnbG9jYWxob3N0JztcbiAgfTtcblxuICBjaGVja1dlYnNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7IC8vY2hlY2sgaWYgd2Vic29ja2V0IGluc3RhbmNlIGlzIGNsb3NlZCwgaWYgc28gY2FsbCBgY29ubmVjdGAgZnVuY3Rpb24uXG4gIH07XG5cbiAgY29ubmVjdFdlYnNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgIC8vY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICAvL2NvbnN0IHVybCA9IGB3czovLyR7dGhpcy5nZXRIb3N0TmFtZSgpfTo4MDgwL2A7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRXc1VybCgpO1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0V2Vic29ja2V0IHVybDogJywgdXJsKTtcblxuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIHNlbGYudGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICB9O1xuXG4gICAgd3Mub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgIC8vIGxpc3RlbiB0byBkYXRhIHNlbnQgZnJvbSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnb25tZXNzYWdlJywgZGF0YSk7XG5cbiAgICAgICAgbWVzc2FnZXMucHVzaChkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0ICsgc2VsZi50aW1lb3V0OyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgY29ubmVjdEludGVydmFsID0gc2V0VGltZW91dChcbiAgICAgICAgdGhpcy5jaGVja1dlYnNvY2tldCxcbiAgICAgICAgTWF0aC5taW4oMTAwMDAsIHNlbGYudGltZW91dClcbiAgICAgICk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgfTtcblxuICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGB3ZWJzb2NrZXQgZXJyb3I6ICR7ZX1gKTtcbiAgICB9O1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHdzOiB3cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZG93bmxvYWRGb3JtYXQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIHNlbGVjdEZpbGVUb1VwbG9hZCA9IGUgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuXG4gICAgaW5wdXQub25jaGFuZ2UgPSBlID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRGaWxlOiBmaWxlIH0pO1xuICAgIH07XG5cbiAgICBpbnB1dC5jbGljaygpO1xuICB9O1xuXG4gIHNlbmRGaWxlID0gZSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsICdVVEYtOCcpO1xuXG4gICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgcmVhZGVyLm9ubG9hZCA9IHJlYWRlckV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3Muc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcblxuICBjbGVhckRCID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGVhckRCOiAhdGhpcy5zdGF0ZS5jbGVhckRCIH0pO1xuICB9O1xuXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHNcbiAgICAgICAgICBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc31cbiAgICAgICAgICBjbGVhck1lc3NhZ2VzPXt0aGlzLmNsZWFyTWVzc2FnZXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JfQsNCz0YDRg9C30LrQsCDQsiBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICBXZWJzb2NrZXQgc3RhdHVzOiB7dGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTIgdGV4dC1sZWZ0XCI+0J7Rh9C40YHRgtC40YLRjCBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xlYXJCRFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jbGVhckRCfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCdcbiAgICAgICAgICAgICAgICAgICAgPyAnZGlzYWJsZSdcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAg0KTQsNC50Lsg0LfQsNCz0YDRg9C30LrQuCDQsiBEQlxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtM1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IHRoaXMuc3RhdGUudXBsb2FkRmlsZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RmlsZVRvVXBsb2FkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCdcbiAgICAgICAgICAgICAgICAgICAgPyAnZGlzYWJsZSdcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRGaWxlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyAnJyA6ICdkaXNhYmxlZCd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDQodGC0LDRgNGCXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JLRi9Cz0YDRg9C30LrQsCBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INGE0L7RgNC80LDRgiDRgdC+0YXRgNCw0L3Rj9C10LzQvtCz0L4g0YTQsNC50LvQsFxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdEZvcm1hdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+anNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Y3N2PC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQvcGxhaW48L29wdGlvbj4gKi99XG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e3RoaXMuZ2V0RG93bmxvYWRVcmwoKX0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRvd25sb2FkRm9ybWF0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjb2wgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9