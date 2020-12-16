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
        var variant = e.type === "success" ? "primary" : "danger";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
          variant: variant,
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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.js");
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

    _defineProperty(_assertThisInitialized(_this), "checkWebsocket", function () {
      var ws = _this.state.websocket.ws;
      if (!ws || ws.readyState === WebSocket.CLOSED) _this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
    });

    _defineProperty(_assertThisInitialized(_this), "connectWebsocket", function () {
      var self = _assertThisInitialized(_this); // cache the this


      var connectInterval;
      var ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
      var url = "ws://localhost:8080/";
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_8__["default"], {
        messages: this.state.messages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-5"
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-2 text-left"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Check, {
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        className: "ml-2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-2 text-left"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "form-control col-3",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFile ? this.state.uploadFile.name : "",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        variant: "primary",
        className: "",
        onClick: this.selectFileToUpload
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        variant: "primary",
        className: "col-1 ml-2",
        onClick: this.sendFile,
        disabled: this.state.uploadFile ? "" : "disabled"
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-5"
      }, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
        className: "col-3 text-left"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
        as: "select",
        className: "col-2",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "json"
      }, "json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "csv"
      }, "csv")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "hidden",
        name: "format",
        value: this.state.downloadFormat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        variant: "primary",
        type: "submit",
        className: "col ml-4"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInZhcmlhbnQiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJnZXRSZWFjdEFsZXJ0cyIsIm1lc3NhZ2VzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJldk1lc3NhZ2VzIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzZWxmIiwiY29ubmVjdEludGVydmFsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsInVybCIsIm9ub3BlbiIsImNsZWFyVGltZW91dCIsInNldFdlYnNvY2tldFN0YXR1cyIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJvbmNsb3NlIiwiY2hlY2tXZWJzb2NrZXQiLCJNYXRoIiwibWluIiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJjb250ZW50IiwicmVzdWx0Iiwic2VuZCIsInN0cmluZ2lmeSIsImNsZWFyZGIiLCJuYW1lIiwic2VsZWN0RmlsZVRvVXBsb2FkIiwic2VuZEZpbGUiLCJzZWxlY3RGb3JtYXQiLCJnZXREb3dubG9hZFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3FFQW9CUyxVQUFDQyxLQUFELEVBQVc7QUFDMUIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFNQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0csSUFBRixLQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsUUFBbkQ7QUFDQSw0QkFDRSwyREFBQyxxREFBRDtBQUFZLGlCQUFPLEVBQUVELE9BQXJCO0FBQThCLGFBQUcsRUFBRUQ7QUFBbkMsV0FDR0QsQ0FBQyxDQUFDSSxPQURMLENBREY7QUFLRCxPQVBELENBRFUsZ0JBVVYsdUhBVkY7QUFZRCxLOzs0REFFTyxVQUFDQyxJQUFEO0FBQUEsYUFDTixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRE07QUFBQSxLOztnRUFLSSxZQUFNO0FBQ2hCLFVBQUksTUFBS0ksS0FBTCxDQUFXYixTQUFmLEVBQTBCO0FBQ3hCLGNBQUtjLEtBQUwsQ0FDRSxNQUFLQyxLQUFMLENBQVdkLE9BQVgsR0FBcUIsTUFBS2MsS0FBTCxDQUFXZCxPQUFoQyxHQUEwQyxNQUFLWSxLQUFMLENBQVdaLE9BRHZELEVBRUVlLElBRkYsQ0FFTztBQUFBLGlCQUNMLE1BQUtDLFFBQUwsQ0FB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Q0FBTSxNQUFOLHFCQUNFLDJEQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsK0RBREYsQ0FERixlQUlFLDJEQUFDLG9EQUFELENBQU0sSUFBTixxQkFDRSwyREFBQyxtREFBRCxxQkFDRSwyREFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLHlNQURGLGVBSUUsMkRBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxpQkFBUyxFQUFDLE9BRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUtzRDtBQUhqQixzQkFLRTtBQUFRLGFBQUssRUFBQztBQUFkLGdCQUxGLGVBTUU7QUFBUSxhQUFLLEVBQUM7QUFBZCxlQU5GLENBSkYsZUFhRTtBQUFNLGNBQU0sRUFBRSxLQUFLQyxjQUFMLEVBQWQ7QUFBcUMsY0FBTSxFQUFDO0FBQTVDLHNCQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGFBQUssRUFBRSxLQUFLcEUsS0FBTCxDQUFXa0I7QUFIcEIsUUFERixlQU1FLDJEQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxRQUEvQjtBQUF3QyxpQkFBUyxFQUFDO0FBQWxELDBDQU5GLENBYkYsQ0FERixDQUpGLENBbERGLENBREY7QUFvRkQ7Ozs7RUFuTW9DUCwrQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMgIT09IHByZXZNZXNzYWdlcykge1xuICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFudCA9IGUudHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInByaW1hcnlcIiA6IFwiZGFuZ2VyXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0QWxlcnQgdmFyaWFudD17dmFyaWFudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvUmVhY3RBbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDw+PC8+XG4gICAgKTtcbiAgfTtcblxuICBkZWxheSA9ICh3YWl0KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnByb3BzLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgY2xlYXJEQjogZmFsc2UsXG4gICAgd2Vic29ja2V0OiB7XG4gICAgICB3czogbnVsbCxcbiAgICAgIHN0YXR1czogXCJkaXNjb25uZWN0ZWRcIixcbiAgICB9LFxuICAgIGRvd25sb2FkRm9ybWF0OiBcImpzb25cIixcbiAgfTtcblxuICBkb3dubG9hZFVybCA9IFwiL1wiO1xuICB1cGxvYWRVcmwgPSBcIi9cIjtcblxuICBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgfTtcblxuICBzZXRXZWJzb2NrZXRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgc3RhdHVzOiBzdGF0dXMgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICB9O1xuXG4gIGNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgaWYgKCF3cyB8fCB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTsgLy9jaGVjayBpZiB3ZWJzb2NrZXQgaW5zdGFuY2UgaXMgY2xvc2VkLCBpZiBzbyBjYWxsIGBjb25uZWN0YCBmdW5jdGlvbi5cbiAgfTtcblxuICBjb25uZWN0V2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgY29uc3Qgd3Nfc2NoZW1lID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBjb25zdCB1cmwgPSBgd3M6Ly9sb2NhbGhvc3Q6ODA4MC9gO1xuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIHNlbGYudGltZW91dCA9IDI1MDsgLy8gcmVzZXQgdGltZXIgdG8gMjUwIG9uIG9wZW4gb2Ygd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgIGNsZWFyVGltZW91dChjb25uZWN0SW50ZXJ2YWwpO1xuICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICB9O1xuXG4gICAgd3Mub25tZXNzYWdlID0gKGV2dCkgPT4ge1xuICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEgPyBbZGF0YV0gOiBbXSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhcImRpc2Nvbm5lY3RlZFwiKTtcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgIHNlbGYudGltZW91dCA9IHNlbGYudGltZW91dCArIHNlbGYudGltZW91dDsgLy9pbmNyZW1lbnQgcmV0cnkgaW50ZXJ2YWxcbiAgICAgIGNvbm5lY3RJbnRlcnZhbCA9IHNldFRpbWVvdXQoXG4gICAgICAgIHRoaXMuY2hlY2tXZWJzb2NrZXQsXG4gICAgICAgIE1hdGgubWluKDEwMDAwLCBzZWxmLnRpbWVvdXQpXG4gICAgICApOyAvL2NhbGwgY2hlY2sgZnVuY3Rpb24gYWZ0ZXIgdGltZW91dFxuICAgIH07XG5cbiAgICB3cy5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgIH07XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgd3M6IHdzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25sb2FkRm9ybWF0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBzZWxlY3RGaWxlVG9VcGxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImZpbGVcIjtcblxuICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRGaWxlOiBmaWxlIH0pO1xuICAgIH07XG5cbiAgICBpbnB1dC5jbGljaygpO1xuICB9O1xuXG4gIHNlbmRGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KHRoaXMuc3RhdGUudXBsb2FkRmlsZSwgXCJVVEYtOFwiKTtcblxuICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3Muc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6IFwidXRmOFwiLFxuICAgICAgICAgIGNsZWFyZGI6IHRoaXMuc3RhdGUuY2xlYXJEQixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xuXG4gIGNsZWFyREIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxlcnRzIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCX0LDQs9GA0YPQt9C60LAg0LIgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgV2Vic29ja2V0IHN0YXR1czoge3RoaXMuc3RhdGUud2Vic29ja2V0LnN0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPtCe0YfQuNGB0YLQuNGC0YwgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXG4gICAgICAgICAgICAgICAgbmFtZT1cImNsZWFyQkRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNsZWFyREJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAg0KTQsNC50Lsg0LfQsNCz0YDRg9C30LrQuCDQsiBEQlxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtM1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVwbG9hZEZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IHRoaXMuc3RhdGUudXBsb2FkRmlsZS5uYW1lIDogXCJcIn1cbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RGaWxlVG9VcGxvYWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEgbWwtMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kRmlsZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS51cGxvYWRGaWxlID8gXCJcIiA6IFwiZGlzYWJsZWRcIn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7QktGL0LPRgNGD0LfQutCwIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0zIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0YTQvtGA0LzQsNGCINGB0L7RhdGA0LDQvdGP0LXQvNC+0LPQviDRhNCw0LnQu9CwXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VsZWN0Rm9ybWF0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImpzb25cIj5qc29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNzdlwiPmNzdjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQvcGxhaW48L29wdGlvbj4gKi99XG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e3RoaXMuZ2V0RG93bmxvYWRVcmwoKX0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRvd25sb2FkRm9ybWF0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjb2wgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==