(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/components/Alerts.tsx":
/*!**************************************!*\
  !*** ./assets/components/Alerts.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
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



var Alerts = /*#__PURE__*/function (_Component) {
  _inherits(Alerts, _Component);

  var _super = _createSuper(Alerts);

  function Alerts() {
    var _this;

    _classCallCheck(this, Alerts);

    _this = _super.apply(this, arguments);
    _this.state = {
      messages: [],
      showAlert: false,
      timeout: 5000
    };

    _this.getAlerts = function (array) {
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: 'alert alert_' + type,
          key: index
        }, e.message);
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null);
    };

    _this.delay = function (wait) {
      return new Promise(function (resolve) {
        return global.setTimeout(function () {
          return resolve('');
        }, wait);
      });
    };

    _this.clearMessages = function () {
      _this.setState({
        messages: [],
        showAlert: false
      });

      _this.props.clearMessages();
    };

    _this.showAlert = function () {
      if (_this.state.showAlert) {
        _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(_this.clearMessages);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null);
    };

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.tsx");
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
    _this.state = {
      messages: [],
      uploadFile: null,
      clearDB: false,
      websocket: {
        ws: null,
        status: 'disconnected'
      },
      downloadFormat: 'json'
    };
    _this.downloadUrl = '/';
    _this.uploadUrl = '/';
    _this.timeout = 250;

    _this.getDownloadUrl = function () {
      return "/api/download/";
    };

    _this.setWebsocketStatus = function (status) {
      var websocket = Object.assign(Object.assign({}, _this.state.websocket), {
        status: status
      });

      _this.setState({
        websocket: websocket
      });
    };

    _this.getWsUrl = function () {
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

    _this.checkWebsocket = function () {
      var ws = _this.state.websocket.ws;
      if (!ws || ws.readyState === WebSocket.CLOSED) _this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
    };

    _this.connectWebsocket = function () {
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
    };

    _this.selectFormat = function (e) {
      _this.setState({
        downloadFormat: e.target.value
      });
    };

    _this.selectFileToUpload = function (e) {
      var input = document.createElement('input');
      input.type = 'file';

      input.onchange = function (e) {
        var file = e.target.files[0];

        _this.setState({
          uploadFile: file
        });
      };

      input.click();
    };

    _this.sendFile = function (e) {
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
    };

    _this.clearDB = function () {
      _this.setState({
        clearDB: !_this.state.clearDB
      });
    };

    _this.clearMessages = function () {
      _this.setState({
        messages: []
      });
    };

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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_18__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Control, {
        type: "check",
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        disabled: this.state.websocket.status === 'disconnected'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Control, {
        auxClassName: "form__text form__text_upload",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: (_a = this.state.uploadFile) === null || _a === void 0 ? void 0 : _a.name,
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected'
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.sendFile,
        disabled: this.state.uploadFile === null
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, {
        auxClassName: "form__label_download"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Select, {
        auxClassName: "form__select_download",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
        value: "json"
      }, "json")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
        type: "hidden",
        name: "format",
        value: this.state.downloadFormat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        type: "submit",
        className: "btn-primary"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Dashboard));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJhcmd1bWVudHMiLCJzdGF0ZSIsIm1lc3NhZ2VzIiwic2hvd0FsZXJ0IiwidGltZW91dCIsImdldEFsZXJ0cyIsImFycmF5IiwibWFwIiwiZSIsImluZGV4IiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsIm1lc3NhZ2UiLCJGcmFnbWVudCIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsImNsZWFyTWVzc2FnZXMiLCJzZXRTdGF0ZSIsInByb3BzIiwidGhlbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJ1cGxvYWRGaWxlIiwiY2xlYXJEQiIsIndlYnNvY2tldCIsIndzIiwic3RhdHVzIiwiZG93bmxvYWRGb3JtYXQiLCJkb3dubG9hZFVybCIsInVwbG9hZFVybCIsImdldERvd25sb2FkVXJsIiwic2V0V2Vic29ja2V0U3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0V3NVcmwiLCJ3c19zY2hlbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY2hlY2tXZWJzb2NrZXQiLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwiY29ubmVjdFdlYnNvY2tldCIsInNlbGYiLCJjb25uZWN0SW50ZXJ2YWwiLCJ1cmwiLCJvbm9wZW4iLCJjbGVhclRpbWVvdXQiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwicGFyc2UiLCJwdXNoIiwib25jbG9zZSIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50Iiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInNlbmRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzZW5kIiwiY2xlYXJkYiIsIl9hIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTTs7Ozs7QUFDakIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUUsRUFERDtBQUVUQyxlQUFTLEVBQUUsS0FGRjtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiOztBQUtBLFVBQUtDLFNBQUwsR0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGFBQU9BLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDcEMsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNJLGVBQUssTUFBTDtBQUNJQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDSixlQUFLLFNBQUw7QUFDSUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0osZUFBSyxPQUFMO0FBQ0lBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNKO0FBQ0lBLGdCQUFJLEdBQUcsUUFBUDtBQVhSOztBQWFBLDRCQUFRQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVDLG1CQUFTLEVBQUUsaUJBQWlCSCxJQUE5QjtBQUFvQ0ksYUFBRyxFQUFFTDtBQUF6QyxTQUEzQixFQUE2RUQsQ0FBQyxDQUFDTyxPQUEvRSxDQUFSO0FBQ0gsT0FoQmUsQ0FBSixnQkFnQkxKLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNLLFFBQTFCLEVB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QWQ7QUFDQWhDLElBQUksQ0FBQ0csS0FBTCxHQUFhNEIsU0FBYjtBQUNlL0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNhO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUyxFQUFFO0FBQzFELEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3BELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQztBQUN2RSw4QkFBOEIsbUJBQU8sQ0FBQyxpSEFBMEM7O0FBRWhGOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsd0JBQXdCOztBQUVqRjtBQUNBO0FBQ0EsR0FBRywyRkFBMkY7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0QWxlcnRzID0gKGFycmF5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkgPyAoYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgICAgICB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGF5ID0gKHdhaXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5KHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dCkudGhlbih0aGlzLmNsZWFyTWVzc2FnZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLmdldEFsZXJ0cyh0aGlzLnN0YXRlLm1lc3NhZ2VzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy9jb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnQWxlcnRzJywgbWVzc2FnZXMpO1xuICAgICAgICBpZiAobWVzc2FnZXMgJiZcbiAgICAgICAgICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeShtZXNzYWdlcykpIHtcbiAgICAgICAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICBzaG93QWxlcnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnNob3dBbGVydCgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2xpYi9Gb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbGliL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2xpYi9DYXJkJztcbmltcG9ydCBBbGVydHMgZnJvbSAnLi9BbGVydHMnO1xuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgICAgICAgICBjbGVhckRCOiBmYWxzZSxcbiAgICAgICAgICAgIHdlYnNvY2tldDoge1xuICAgICAgICAgICAgICAgIHdzOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWRGb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kb3dubG9hZFVybCA9ICcvJztcbiAgICAgICAgdGhpcy51cGxvYWRVcmwgPSAnLyc7XG4gICAgICAgIHRoaXMudGltZW91dCA9IDI1MDtcbiAgICAgICAgdGhpcy5nZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgL2FwaS9kb3dubG9hZC9gO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlYnNvY2tldCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS53ZWJzb2NrZXQpLCB7IHN0YXR1czogc3RhdHVzIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRXc1VybCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRXc1VybCBwcm90b2NvbDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCk7XG4gICAgICAgICAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzcycgOiAnd3MnO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHdzOi8vYCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzAwMC8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGVyb2t1IGRlcGxveVxuICAgICAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRXc1VybCBoZXJva3U6ICcsIGhvc3RuYW1lKTtcbiAgICAgICAgICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZVswXSA9ICdwc2tvdi13cyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3dzX3NjaGVtZX06Ly9gICsgaG9zdG5hbWUuam9pbignLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdsb2NhbGhvc3QnO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICAgICAgICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgICAgICAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgICAgICAgICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgICAgICAgICAgLy9jb25zdCB1cmwgPSBgd3M6Ly8ke3RoaXMuZ2V0SG9zdE5hbWUoKX06ODA4MC9gO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRXc1VybCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICAgICAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdzLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvbm1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0ICsgc2VsZi50aW1lb3V0OyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgICAgICAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IGdsb2JhbC5zZXRUaW1lb3V0KHRoaXMuY2hlY2tXZWJzb2NrZXQsIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGB3ZWJzb2NrZXQgZXJyb3I6ICR7ZX1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUud2Vic29ja2V0KSwgeyB3czogd3MgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbGVjdEZvcm1hdCA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bmxvYWRGb3JtYXQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmRGaWxlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsICdVVEYtOCcpO1xuICAgICAgICAgICAgLy8gaGVyZSB3ZSB0ZWxsIHRoZSByZWFkZXIgd2hhdCB0byBkbyB3aGVuIGl0J3MgZG9uZSByZWFkaW5nLi4uXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gcmVhZGVyRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgICAgICAgICAgICAgaWYgKHdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJkYjogdGhpcy5zdGF0ZS5jbGVhckRCLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJEQiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGVhckRCOiAhdGhpcy5zdGF0ZS5jbGVhckRCIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFtdIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRzLCB7IG1lc3NhZ2VzOiB0aGlzLnN0YXRlLm1lc3NhZ2VzLCBjbGVhck1lc3NhZ2VzOiB0aGlzLmNsZWFyTWVzc2FnZXMgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sLTEyIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlYnNvY2tldCBzdGF0dXM6IFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MUVcXHUwNDQ3XFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIERCXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIHsgdHlwZTogXCJjaGVja1wiLCBuYW1lOiBcImNsZWFyQkRcIiwgdmFsdWU6IHRoaXMuc3RhdGUuY2xlYXJEQiwgb25DaGFuZ2U6IHRoaXMuY2xlYXJEQiwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwX2hvcml6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxfdXBsb2FkXCIgfSwgXCJcXHUwNDI0XFx1MDQzMFxcdTA0MzlcXHUwNDNCIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzIgREJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fdGV4dCBmb3JtX190ZXh0X3VwbG9hZFwiLCBuYW1lOiBcInVwbG9hZEZpbGVOYW1lXCIsIGlkOiBcInVwbG9hZEZpbGVOYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogKF9hID0gdGhpcy5zdGF0ZS51cGxvYWRGaWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSwgcmVhZE9ubHk6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIsIG9uQ2xpY2s6IHRoaXMuc2VsZWN0RmlsZVRvVXBsb2FkLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9LCBcIi4uLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogdGhpcy5zZW5kRmlsZSwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUudXBsb2FkRmlsZSA9PT0gbnVsbCB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBEQlwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF9kb3dubG9hZFwiIH0sIFwiXFx1MDQxMlxcdTA0NEJcXHUwNDMxXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQ0MlxcdTA0MzUgXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQyIFxcdTA0NDFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0NEZcXHUwNDM1XFx1MDQzQ1xcdTA0M0VcXHUwNDMzXFx1MDQzRSBcXHUwNDQ0XFx1MDQzMFxcdTA0MzlcXHUwNDNCXFx1MDQzMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5TZWxlY3QsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX3NlbGVjdF9kb3dubG9hZFwiLCBvbkNoYW5nZTogdGhpcy5zZWxlY3RGb3JtYXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwianNvblwiIH0sIFwianNvblwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogdGhpcy5nZXREb3dubG9hZFVybCgpLCBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJmb3JtYXRcIiwgdmFsdWU6IHRoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0bi1wcmltYXJ5XCIgfSwgXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0MlwiKSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERhc2hib2FyZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHRvb2x0aXAsIGlkLCBjbGFzc05hbWUsIG5hbWUsIHZhbHVlLCBvbkNsaWNrLCBkaXNhYmxlZCwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0aXRsZTogdG9vbHRpcCwgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBjaGlsZHJlbikpO1xufTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgIG5hbWU6ICdidG4nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0b29sdGlwOiAnJyxcbiAgICBpZDogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGNoaWxkcmVuOiAnYnV0dG9uJyxcbn07XG4vL2V4cG9ydCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ2FyZEhlYWRlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9faGVhZGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX190aXRsZScgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IENhcmRCb2R5ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19ib2R5JyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEZvb3RlciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZF9fZm9vdGVyJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIC8vIGxldCBCb2R5OiB0eXBlb2YgQ2FyZEJvZHk7XG4gICAgLy8gbGV0IEZvb3RlcjogdHlwZW9mIENhcmRGb290ZXI7XG4gICAgcmV0dXJuIChcbiAgICAvLyB7XG4gICAgLy8gICBIZWFkZXI6IENhcmRIZWFkZXIsXG4gICAgLy8gICBUaXRsZTogQ2FyZFRpdGxlLFxuICAgIC8vICAgQm9keTogQ2FyZEJvZHksXG4gICAgLy8gICBGb290ZXI6IENhcmRGb290ZXJcbiAgICAvLyB9XG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmQnIH0sIGNoaWxkcmVuKSk7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fc2VsZWN0JyksIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcbmNvbnN0IEZvcm1Db250cm9sID0gcHJvcHMgPT4ge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9wcy50eXBlKVxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX3RleHQnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY29udHJvbCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCByb3dzOiBwcm9wcy5yb3dzID8gK3Byb3BzLnJvd3MgOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jaGVjaycpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbFNlbGVjdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBwcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpO1xuICAgIH1cbn07XG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuRm9ybS5MYWJlbCA9IEZvcm1MYWJlbDtcbkZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRm9ybS5TZWxlY3QgPSBGb3JtQ29udHJvbFNlbGVjdDtcbkZvcm0uR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9