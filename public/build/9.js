(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/components/Alerts.tsx":
/*!**************************************!*\
  !*** ./assets/components/Alerts.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
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
      timeout: 7000
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
        setTimeout(function () {
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
        _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(function () {
          return _this.clearMessages;
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJhcmd1bWVudHMiLCJzdGF0ZSIsIm1lc3NhZ2VzIiwic2hvd0FsZXJ0IiwidGltZW91dCIsImdldEFsZXJ0cyIsImFycmF5IiwibWFwIiwiZSIsImluZGV4IiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsIm1lc3NhZ2UiLCJGcmFnbWVudCIsImRlbGF5Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNsZWFyTWVzc2FnZXMiLCJzZXRTdGF0ZSIsInByb3BzIiwidGhlbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJ1cGxvYWRGaWxlIiwiY2xlYXJEQiIsIndlYnNvY2tldCIsIndzIiwic3RhdHVzIiwiZG93bmxvYWRGb3JtYXQiLCJkb3dubG9hZFVybCIsInVwbG9hZFVybCIsImdldERvd25sb2FkVXJsIiwic2V0V2Vic29ja2V0U3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0V3NVcmwiLCJ3c19zY2hlbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY2hlY2tXZWJzb2NrZXQiLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwiY29ubmVjdFdlYnNvY2tldCIsInNlbGYiLCJjb25uZWN0SW50ZXJ2YWwiLCJ1cmwiLCJvbm9wZW4iLCJjbGVhclRpbWVvdXQiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwicGFyc2UiLCJwdXNoIiwib25jbG9zZSIsImdsb2JhbCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwic2VsZWN0Rm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJpbnB1dCIsImRvY3VtZW50Iiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInNlbmRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzZW5kIiwiY2xlYXJkYiIsIl9hIiwiQ2FyZCIsIkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsIkJvZHkiLCJHcm91cCIsImF1eENsYXNzTmFtZSIsIkNvbnRyb2wiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlkIiwicmVhZE9ubHkiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2VsZWN0IiwiYWN0aW9uIiwibWV0aG9kIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTTs7Ozs7QUFDakIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUUsRUFERDtBQUVUQyxlQUFTLEVBQUUsS0FGRjtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiOztBQUtBLFVBQUtDLFNBQUwsR0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGFBQU9BLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDcEMsWUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsZ0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNJLGVBQUssTUFBTDtBQUNJQSxnQkFBSSxHQUFHLE1BQVA7QUFDQTs7QUFDSixlQUFLLFNBQUw7QUFDSUEsZ0JBQUksR0FBRyxTQUFQO0FBQ0E7O0FBQ0osZUFBSyxPQUFMO0FBQ0lBLGdCQUFJLEdBQUcsUUFBUDtBQUNBOztBQUNKO0FBQ0lBLGdCQUFJLEdBQUcsUUFBUDtBQVhSOztBQWFBLDRCQUFRQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVDLG1CQUFTLEVBQUUsaUJBQWlCSCxJQUE5QjtBQUFvQ0ksYUFBRyxFQUFFTDtBQUF6QyxTQUEzQixFQUE2RUQsQ0FBQyxDQUFDTyxPQUEvRSxDQUFSO0FBQ0gsT0FoQmUsQ0FBSixnQkFnQkxKLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNLLFFBQTFCLEVB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Y21CLGlCQUFkO0FBQ0FoQyxJQUFJLENBQUNHLEtBQUwsR0FBYTRCLFNBQWI7QUFDZS9CLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQzVDYTtBQUNiLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVMsRUFBRTtBQUMxRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDdkUsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjs7QUFFQTtBQUNBO0FBQ0EseURBQXlELHdCQUF3Qjs7QUFFakY7QUFDQTtBQUNBLEdBQUcsMkZBQTJGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lb3V0OiA3MDAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ID8gKGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2FsZXJ0IGFsZXJ0XycgKyB0eXBlLCBrZXk6IGluZGV4IH0sIGUubWVzc2FnZSkpO1xuICAgICAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWxheSA9ICh3YWl0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCcnKSwgd2FpdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJNZXNzYWdlcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNob3dBbGVydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkodGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0KS50aGVuKCgpID0+IHRoaXMuY2xlYXJNZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMuZ2V0QWxlcnRzKHRoaXMuc3RhdGUubWVzc2FnZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHNob3dBbGVydCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvL2NvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbGVydHMnLCBtZXNzYWdlcyk7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5tZXNzYWdlcykgIT09IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VzKSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0FsZXJ0ICYmICF0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIHNob3dBbGVydCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMuc2hvd0FsZXJ0KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJy4vbGliL0Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9saWIvQnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJy4vbGliL0NhcmQnO1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL0FsZXJ0cyc7XG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgdXBsb2FkRmlsZTogbnVsbCxcbiAgICAgICAgICAgIGNsZWFyREI6IGZhbHNlLFxuICAgICAgICAgICAgd2Vic29ja2V0OiB7XG4gICAgICAgICAgICAgICAgd3M6IG51bGwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZGlzY29ubmVjdGVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZEZvcm1hdDogJ2pzb24nLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvd25sb2FkVXJsID0gJy8nO1xuICAgICAgICB0aGlzLnVwbG9hZFVybCA9ICcvJztcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gMjUwO1xuICAgICAgICB0aGlzLmdldERvd25sb2FkVXJsID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzID0gKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vic29ja2V0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLndlYnNvY2tldCksIHsgc3RhdHVzOiBzdGF0dXMgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFdzVXJsID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcbiAgICAgICAgICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbG9jYWxob3N0JykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgd3M6Ly9gICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozMDAwLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoZXJva3UgZGVwbG95XG4gICAgICAgICAgICBjb25zdCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lWzFdICYmIGhvc3RuYW1lWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaGVyb2t1JykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGhvc3RuYW1lWzBdID0gJ3Bza292LXdzJztcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2xvY2FsaG9zdCc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgICAgICAgICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKVxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICAgICAgICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgICAgICAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgICAgICAgICAvL2NvbnN0IHVybCA9IGB3czovLyR7dGhpcy5nZXRIb3N0TmFtZSgpfTo4MDgwL2A7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFdzVXJsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdFdlYnNvY2tldCB1cmw6ICcsIHVybCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd3Mub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ29ubWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICAgICAgICAgICAgY29ubmVjdEludGVydmFsID0gZ2xvYmFsLnNldFRpbWVvdXQodGhpcy5jaGVja1dlYnNvY2tldCwgTWF0aC5taW4oMTAwMDAsIHNlbGYudGltZW91dCkpOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHdlYnNvY2tldCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS53ZWJzb2NrZXQpLCB7IHdzOiB3cyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0Rm9ybWF0ID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRGaWxlOiBmaWxlIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZEZpbGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgJ1VURi04Jyk7XG4gICAgICAgICAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQ7IC8vIHRoaXMgaXMgdGhlIGNvbnRlbnQhXG4gICAgICAgICAgICAgICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICAgICAgICAgICAgICBpZiAod3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXRmOCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhckRCID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUubWVzc2FnZXMsIGNsZWFyTWVzc2FnZXM6IHRoaXMuY2xlYXJNZXNzYWdlcyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtMTIgdGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2Vic29ja2V0IHN0YXR1czogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQxRVxcdTA0NDdcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgREJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcImNoZWNrXCIsIG5hbWU6IFwiY2xlYXJCRFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5jbGVhckRCLCBvbkNoYW5nZTogdGhpcy5jbGVhckRCLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzOVxcdTA0M0IgXFx1MDQzN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzggXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX190ZXh0IGZvcm1fX3RleHRfdXBsb2FkXCIsIG5hbWU6IFwidXBsb2FkRmlsZU5hbWVcIiwgaWQ6IFwidXBsb2FkRmlsZU5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2EgPSB0aGlzLnN0YXRlLnVwbG9hZEZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lLCByZWFkT25seTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogdGhpcy5zZWxlY3RGaWxlVG9VcGxvYWQsIGRpc2FibGVkOiB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0sIFwiLi4uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiB0aGlzLnNlbmRGaWxlLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS51cGxvYWRGaWxlID09PSBudWxsIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIERCXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX2Rvd25sb2FkXCIgfSwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzFcXHUwNDM1XFx1MDQ0MFxcdTA0MzhcXHUwNDQyXFx1MDQzNSBcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzMFxcdTA0NDIgXFx1MDQ0MVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQ0RlxcdTA0MzVcXHUwNDNDXFx1MDQzRVxcdTA0MzNcXHUwNDNFIFxcdTA0NDRcXHUwNDMwXFx1MDQzOVxcdTA0M0JcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlNlbGVjdCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fc2VsZWN0X2Rvd25sb2FkXCIsIG9uQ2hhbmdlOiB0aGlzLnNlbGVjdEZvcm1hdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJqc29uXCIgfSwgXCJqc29uXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiB0aGlzLmdldERvd25sb2FkVXJsKCksIG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImZvcm1hdFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5kb3dubG9hZEZvcm1hdCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGFzaGJvYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgLy8gbGV0IEJvZHk6IHR5cGVvZiBDYXJkQm9keTtcbiAgICAvLyBsZXQgRm9vdGVyOiB0eXBlb2YgQ2FyZEZvb3RlcjtcbiAgICByZXR1cm4gKFxuICAgIC8vIHtcbiAgICAvLyAgIEhlYWRlcjogQ2FyZEhlYWRlcixcbiAgICAvLyAgIFRpdGxlOiBDYXJkVGl0bGUsXG4gICAgLy8gICBCb2R5OiBDYXJkQm9keSxcbiAgICAvLyAgIEZvb3RlcjogQ2FyZEZvb3RlclxuICAgIC8vIH1cbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnY2FyZCcgfSwgY2hpbGRyZW4pKTtcbn07XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBiYXNlQ2xhc3MgPSAnZm9ybSc7XG5jb25zdCBnZXRDbGFzc05hbWUgPSAoY2xhc3NOYW1lID0gJycsIGF1eENsYXNzTmFtZSA9ICcnLCBzdWZmaXggPSAnJykgPT4ge1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJhc2VDbGFzcyArIHN1ZmZpeCArIChhdXhDbGFzc05hbWUgPyAnICcgKyBhdXhDbGFzc05hbWUgOiAnJyk7XG59O1xuY29uc3QgRm9ybUxhYmVsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19sYWJlbCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtR3JvdXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBhdXhDbGFzc05hbWUsICdfX2dyb3VwJykgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IEZvcm1Db250cm9sU2VsZWN0ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSBwcm9wcyA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb3BzLnR5cGUpXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fdGV4dCcpLCBuYW1lOiBwcm9wcy5uYW1lLCB2YWx1ZTogcHJvcHMudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGggPyArcHJvcHMubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIFxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICByZWFkT25seTogIXByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19jb250cm9sJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIHJvd3M6IHByb3BzLnJvd3MgPyArcHJvcHMucm93cyA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NoZWNrJyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSB9KSkpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sU2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgfVxufTtcbmNvbnN0IEZvcm0gPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmJhc2VDbGFzc05hbWUpXG4gICAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogcHJvcHMuYWN0aW9uLCBtZXRob2Q6IHByb3BzLm1ldGhvZCwgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpLCBvblN1Ym1pdDogcHJvcHMub25TdWJtaXQgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=