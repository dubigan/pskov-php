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
      showAlert: false,
      timeout: 5000
    });

    _defineProperty(_assertThisInitialized(_this), "getReactAlerts", function (array) {
      return array ? array.map(function (e, index) {
        var type = "danger";

        switch (e.type) {
          case "info":
            type = "info";
            break;

          case "success":
            type = "success";
            break;

          case "error":
            type = "danger";
            break;

          default:
            type = "danger";
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
          return _this.setState({
            showAlert: false
          });
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.getReactAlerts(_this.props.messages));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
    });

    return _this;
  }

  _createClass(Alerts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showAlert = false;
      var messages = this.props.messages;
      var prevMessages = prevProps.messages;

      if (messages && messages.length > 0 && messages !== prevMessages) {
        showAlert = true;
      }

      if (showAlert && !this.state.showAlert) {
        this.setState({
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
        status: "disconnected"
      },
      downloadFormat: "json"
    });

    _defineProperty(_assertThisInitialized(_this), "downloadUrl", "/");

    _defineProperty(_assertThisInitialized(_this), "uploadUrl", "/");

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
      var ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";

      if (window.location.hostname.toLowerCase().indexOf("localhost") >= 0) {
        return "ws://" + window.location.hostname + ":3000/";
      } // heroku deploy


      var hostname = window.location.hostname.split(".");
      console.log("getWsUrl heroku: ", hostname);

      if (hostname[1] && hostname[1].toLowerCase().indexOf("heroku") >= 0) {
        hostname[0] = "pskov-ws";
        return "".concat(ws_scheme, "://") + hostname.join(".");
      }

      return "localhost";
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

      console.log("connectWebsocket url: ", url);
      var ws = new WebSocket(url);

      ws.onopen = function () {
        self.timeout = 250; // reset timer to 250 on open of websocket connection

        clearTimeout(connectInterval); //console.log(`connected to ${url}`);

        _this.setWebsocketStatus("connected to ".concat(url));
      };

      ws.onmessage = function (evt) {
        // listen to data sent from the websocket server
        var data = JSON.parse(evt.data);

        _this.setState({
          messages: data ? [data] : []
        });
      };

      ws.onclose = function () {
        //console.log('disconnected');
        _this.setWebsocketStatus("disconnected"); // automatically try to reconnect on connection loss


        self.timeout = self.timeout + self.timeout; //increment retry interval

        connectInterval = setTimeout(_this.checkWebsocket, Math.min(10000, self.timeout)); //call check function after timeout
      };

      ws.onerror = function (e) {
        console.log("websocket error", e);

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
      var input = document.createElement("input");
      input.type = "file";

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
      reader.readAsText(_this.state.uploadFile, "UTF-8"); // here we tell the reader what to do when it's done reading...

      reader.onload = function (readerEvent) {
        var content = readerEvent.target.result; // this is the content!

        _this.state.websocket.ws.send(JSON.stringify({
          type: "utf8",
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
        messages: this.state.messages
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
        disabled: this.state.websocket.status === "disconnected" ? "disable" : ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        className: "col-2 text-left"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control col-3",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFile ? this.state.uploadFile.name : "",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === "disconnected" ? "disable" : ""
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "primary",
        className: "col-1 ml-2",
        onClick: this.sendFile,
        disabled: this.state.uploadFile ? "" : "disabled"
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
      }, "json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "csv"
      }, "csv")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInR5cGUiLCJtZXNzYWdlIiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInN0YXRlIiwiZGVsYXkiLCJwcm9wcyIsInRoZW4iLCJzZXRTdGF0ZSIsImdldFJlYWN0QWxlcnRzIiwibWVzc2FnZXMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJwcmV2TWVzc2FnZXMiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJ1cGxvYWRGaWxlIiwiY2xlYXJEQiIsIndlYnNvY2tldCIsIndzIiwic3RhdHVzIiwiZG93bmxvYWRGb3JtYXQiLCJ3c19zY2hlbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzZWxmIiwiY29ubmVjdEludGVydmFsIiwidXJsIiwiZ2V0V3NVcmwiLCJvbm9wZW4iLCJjbGVhclRpbWVvdXQiLCJzZXRXZWJzb2NrZXRTdGF0dXMiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImNoZWNrV2Vic29ja2V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJjb250ZW50IiwicmVzdWx0Iiwic2VuZCIsInN0cmluZ2lmeSIsImNsZWFyZGIiLCJuYW1lIiwic2VsZWN0RmlsZVRvVXBsb2FkIiwic2VuZEZpbGUiLCJzZWxlY3RGb3JtYXQiLCJnZXREb3dubG9hZFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3FFQW9CUyxVQUFDQyxLQUFELEVBQVc7QUFDMUIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFJQyxJQUFJLEdBQUcsUUFBWDs7QUFDQSxnQkFBUUYsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsZUFBSyxNQUFMO0FBQ0VBLGdCQUFJLEdBQUcsTUFBUDtBQUNBOztBQUNGLGVBQUssU0FBTDtBQUNFQSxnQkFBSSxHQUFHLFNBQVA7QUFDQTs7QUFDRixlQUFLLE9BQUw7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBQ0E7O0FBQ0Y7QUFDRUEsZ0JBQUksR0FBRyxRQUFQO0FBWEo7O0FBYUEsNEJBQ0UsMkRBQUMscURBQUQ7QUFBWSxpQkFBTyxFQUFFQSxJQUFyQjtBQUEyQixhQUFHLEVBQUVEO0FBQWhDLFdBQ0dELENBQUMs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REYsQ0FKRixDQTVERixDQURGO0FBOEZEOzs7O0VBak9vQ1AsZ0Q7Ozs7Ozs7Ozs7Ozs7O0FDSjFCO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUyxFQUFFO0FBQzFELEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3BELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQztBQUN2RSw4QkFBOEIsbUJBQU8sQ0FBQyxpSEFBMEM7O0FBRWhGOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsd0JBQXdCOztBQUVqRjtBQUNBO0FBQ0EsR0FBRywyRkFBMkY7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0IGFzIFJlYWN0QWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VzICE9PSBwcmV2TWVzc2FnZXMpIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gXCJkYW5nZXJcIjtcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgICAgICAgdHlwZSA9IFwiaW5mb1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgICAgICAgIHR5cGUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgICAgdHlwZSA9IFwiZGFuZ2VyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdHlwZSA9IFwiZGFuZ2VyXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3RBbGVydCB2YXJpYW50PXt0eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9SZWFjdEFsZXJ0PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9O1xuXG4gIGRlbGF5ID0gKHdhaXQpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB3YWl0KTtcbiAgICB9KTtcblxuICBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLmRlbGF5KFxuICAgICAgICB0aGlzLnByb3BzLnRpbWVvdXQgPyB0aGlzLnByb3BzLnRpbWVvdXQgOiB0aGlzLnN0YXRlLnRpbWVvdXRcbiAgICAgICkudGhlbigoKSA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJldHVybiA8Pnt0aGlzLmdldFJlYWN0QWxlcnRzKHRoaXMucHJvcHMubWVzc2FnZXMpfTwvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnNob3dBbGVydCgpfTwvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBSb3csIENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQWxlcnRzIGZyb20gXCIuL0FsZXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgdXBsb2FkRmlsZTogbnVsbCxcbiAgICBjbGVhckRCOiBmYWxzZSxcbiAgICB3ZWJzb2NrZXQ6IHtcbiAgICAgIHdzOiBudWxsLFxuICAgICAgc3RhdHVzOiBcImRpc2Nvbm5lY3RlZFwiLFxuICAgIH0sXG4gICAgZG93bmxvYWRGb3JtYXQ6IFwianNvblwiLFxuICB9O1xuXG4gIGRvd25sb2FkVXJsID0gXCIvXCI7XG4gIHVwbG9hZFVybCA9IFwiL1wiO1xuXG4gIGdldERvd25sb2FkVXJsID0gKCkgPT4ge1xuICAgIHJldHVybiBgL2FwaS9kb3dubG9hZC9gO1xuICB9O1xuXG4gIHNldFdlYnNvY2tldFN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICBjb25zdCB3ZWJzb2NrZXQgPSB7IC4uLnRoaXMuc3RhdGUud2Vic29ja2V0LCBzdGF0dXM6IHN0YXR1cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgZ2V0V3NVcmwgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhcImdldFdzVXJsIHByb3RvY29sOiBcIiwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sKTtcblxuICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPj0gMCkge1xuICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyBcIjozMDAwL1wiO1xuICAgIH1cbiAgICAvLyBoZXJva3UgZGVwbG95XG4gICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0V3NVcmwgaGVyb2t1OiBcIiwgaG9zdG5hbWUpO1xuICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJoZXJva3VcIikgPj0gMCkge1xuICAgICAgaG9zdG5hbWVbMF0gPSBcInBza292LXdzXCI7XG4gICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKFwiLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwibG9jYWxob3N0XCI7XG4gIH07XG5cbiAgY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICB9O1xuXG4gIGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICAvL2NvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgLy9jb25zdCB1cmwgPSBgd3M6Ly8ke3RoaXMuZ2V0SG9zdE5hbWUoKX06ODA4MC9gO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0V3NVcmwoKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RXZWJzb2NrZXQgdXJsOiBcIiwgdXJsKTtcblxuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIHNlbGYudGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICB9O1xuXG4gICAgd3Mub25tZXNzYWdlID0gKGV2dCkgPT4ge1xuICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEgPyBbZGF0YV0gOiBbXSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhcImRpc2Nvbm5lY3RlZFwiKTtcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgIHNlbGYudGltZW91dCA9IHNlbGYudGltZW91dCArIHNlbGYudGltZW91dDsgLy9pbmNyZW1lbnQgcmV0cnkgaW50ZXJ2YWxcbiAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IHNldFRpbWVvdXQoXG4gICAgICAgIHRoaXMuY2hlY2tXZWJzb2NrZXQsXG4gICAgICAgIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpXG4gICAgICApOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgIH07XG5cbiAgICB3cy5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgIH07XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgd3M6IHdzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25sb2FkRm9ybWF0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBzZWxlY3RGaWxlVG9VcGxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImZpbGVcIjtcblxuICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRGaWxlOiBmaWxlIH0pO1xuICAgIH07XG5cbiAgICBpbnB1dC5jbGljaygpO1xuICB9O1xuXG4gIHNlbmRGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgXCJVVEYtOFwiKTtcblxuICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3Muc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6IFwidXRmOFwiLFxuICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xuXG4gIGNsZWFyREIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxlcnRzIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCX0LDQs9GA0YPQt9C60LAg0LIgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgV2Vic29ja2V0IHN0YXR1czoge3RoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPtCe0YfQuNGB0YLQuNGC0YwgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXG4gICAgICAgICAgICAgICAgbmFtZT1cImNsZWFyQkRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNsZWFyREJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09IFwiZGlzY29ubmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImRpc2FibGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgINCk0LDQudC7INC30LDQs9GA0YPQt9C60Lgg0LIgREJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyB0aGlzLnN0YXRlLnVwbG9hZEZpbGUubmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RmlsZVRvVXBsb2FkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1cyA9PT0gXCJkaXNjb25uZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiZGlzYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRGaWxlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyBcIlwiIDogXCJkaXNhYmxlZFwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCS0YvQs9GA0YPQt9C60LAgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDRhNC+0YDQvNCw0YIg0YHQvtGF0YDQsNC90Y/QtdC80L7Qs9C+INGE0LDQudC70LBcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWxlY3RGb3JtYXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwianNvblwiPmpzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Y3N2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgey8qIDxvcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dC9wbGFpbjwvb3B0aW9uPiAqL31cbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17dGhpcy5nZXREb3dubG9hZFVybCgpfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb3JtYXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImNvbCBtbC00XCI+XG4gICAgICAgICAgICAgICAgICDQodGC0LDRgNGCXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=