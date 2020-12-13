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

    _defineProperty(_assertThisInitialized(_this), "downloadUrl", "/testforjob/api/download/");

    _defineProperty(_assertThisInitialized(_this), "uploadUrl", "/testforjob/ws/upload/");

    _defineProperty(_assertThisInitialized(_this), "getDownloadUrl", function () {
      return "/testforjob/api/download_".concat(_this.state.downloadFormat, "/");
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
      var url = "".concat(ws_scheme, "://").concat(window.location.host).concat(_this.uploadUrl);
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInZhcmlhbnQiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJnZXRSZWFjdEFsZXJ0cyIsIm1lc3NhZ2VzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJldk1lc3NhZ2VzIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzZWxmIiwiY29ubmVjdEludGVydmFsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsInVybCIsImhvc3QiLCJ1cGxvYWRVcmwiLCJvbm9wZW4iLCJjbGVhclRpbWVvdXQiLCJzZXRXZWJzb2NrZXRTdGF0dXMiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImNoZWNrV2Vic29ja2V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwibmFtZSIsInNlbGVjdEZpbGVUb1VwbG9hZCIsInNlbmRGaWxlIiwic2VsZWN0Rm9ybWF0IiwiZ2V0RG93bmxvYWRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWDtBQUNOQyxlQUFTLEVBQUUsS0FETDtBQUVOQyxhQUFPLEVBQUU7QUFGSCxLOztxRUFvQlMsVUFBQ0MsS0FBRCxFQUFXO0FBQzFCLGFBQU9BLEtBQUssR0FDVkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdEIsWUFBTUMsT0FBTyxHQUFHRixDQUFDLENBQUNHLElBQUYsS0FBVyxTQUFYLEdBQXVCLFNBQXZCLEdBQW1DLFFBQW5EO0FBQ0EsNEJBQ0UsMkRBQUMscURBQUQ7QUFBWSxpQkFBTyxFQUFFRCxPQUFyQjtBQUE4QixhQUFHLEVBQUVEO0FBQW5DLFdBQ0dELENBQUMsQ0FBQ0ksT0FETCxDQURGO0FBS0QsT0FQRCxDQURVLGdCQVVWLHVIQVZGO0FBWUQsSzs7NERBRU8sVUFBQ0MsSUFBRDtBQUFBLGFBQ04sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUN2QkMsa0JBQVUsQ0FBQztBQUFBLGlCQUFNRCxPQUFPLEVBQWI7QUFBQSxTQUFELEVBQWtCRixJQUFsQixDQUFWO0FBQ0QsT0FGRCxDQURNO0FBQUEsSzs7Z0VBS0ksWUFBTTtBQUNoQixVQUFJLE1BQUtJLEtBQUwsQ0FBV2IsU0FBZixFQUEwQjtBQUN4QixjQUFLYyxLQUFMLENBQ0UsTUFBS0MsS0FBTCxDQUFXZCxPQUFYLEdBQXFCLE1BQUtjLEtBQUwsQ0FBV2QsT0FBaEMsR0FBMEMsTUFBS1ksS0FBTCxDQUFXWixPQUR2RCxFQUVFZSxJQUZGLENBRU87QUFBQSxp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QUFYLEdBQXdCLEVBQXhCLEdBQTZCO0FBSnpDLDBDQW5CRixDQVZGLENBUEYsQ0FGRixlQWlERSxzRUFqREYsZUFrREUsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMsb0RBQUQsQ0FBTSxNQUFOLHFCQUNFLDJEQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsK0RBREYsQ0FERixlQUlFLDJEQUFDLG9EQUFELENBQU0sSUFBTixxQkFDRSwyREFBQyxtREFBRCxxQkFDRSwyREFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLHlNQURGLGVBSUUsMkRBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxpQkFBUyxFQUFDLE9BRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUt3RDtBQUhqQixzQkFLRTtBQUFRLGFBQUssRUFBQztBQUFkLGdCQUxGLGVBTUU7QUFBUSxhQUFLLEVBQUM7QUFBZCxlQU5GLENBSkYsZUFhRTtBQUFNLGNBQU0sRUFBRSxLQUFLQyxjQUFMLEVBQWQ7QUFBcUMsY0FBTSxFQUFDO0FBQTVDLHNCQUNFLDJEQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxRQUEvQjtBQUF3QyxpQkFBUyxFQUFDO0FBQWxELDBDQURGLENBYkYsQ0FERixDQUpGLENBbERGLENBREY7QUErRUQ7Ozs7RUExTG9DM0QsK0MiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0IGFzIFJlYWN0QWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lc3NhZ2VzOiBwcmV2TWVzc2FnZXMgfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VzICE9PSBwcmV2TWVzc2FnZXMpIHtcbiAgICAgIHNob3dBbGVydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVhY3RBbGVydHMgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXkgPyAoXG4gICAgICBhcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhbnQgPSBlLnR5cGUgPT09IFwic3VjY2Vzc1wiID8gXCJwcmltYXJ5XCIgOiBcImRhbmdlclwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdEFsZXJ0IHZhcmlhbnQ9e3ZhcmlhbnR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2UubWVzc2FnZX1cbiAgICAgICAgICA8L1JlYWN0QWxlcnQ+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8PjwvPlxuICAgICk7XG4gIH07XG5cbiAgZGVsYXkgPSAod2FpdCkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHdhaXQpO1xuICAgIH0pO1xuXG4gIHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuZGVsYXkoXG4gICAgICAgIHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dFxuICAgICAgKS50aGVuKCgpID0+XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcmV0dXJuIDw+e3RoaXMuZ2V0UmVhY3RBbGVydHModGhpcy5wcm9wcy5tZXNzYWdlcyl9PC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMuc2hvd0FsZXJ0KCl9PC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIFJvdywgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBBbGVydHMgZnJvbSBcIi4vQWxlcnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB1cGxvYWRGaWxlOiBudWxsLFxuICAgIGNsZWFyREI6IGZhbHNlLFxuICAgIHdlYnNvY2tldDoge1xuICAgICAgd3M6IG51bGwsXG4gICAgICBzdGF0dXM6IFwiZGlzY29ubmVjdGVkXCIsXG4gICAgfSxcbiAgICBkb3dubG9hZEZvcm1hdDogXCJqc29uXCIsXG4gIH07XG5cbiAgZG93bmxvYWRVcmwgPSBcIi90ZXN0Zm9yam9iL2FwaS9kb3dubG9hZC9cIjtcbiAgdXBsb2FkVXJsID0gXCIvdGVzdGZvcmpvYi93cy91cGxvYWQvXCI7XG5cbiAgZ2V0RG93bmxvYWRVcmwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAvdGVzdGZvcmpvYi9hcGkvZG93bmxvYWRfJHt0aGlzLnN0YXRlLmRvd25sb2FkRm9ybWF0fS9gO1xuICB9O1xuXG4gIHNldFdlYnNvY2tldFN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICBjb25zdCB3ZWJzb2NrZXQgPSB7IC4uLnRoaXMuc3RhdGUud2Vic29ja2V0LCBzdGF0dXM6IHN0YXR1cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgY2hlY2tXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICB9O1xuXG4gIGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGNvbnN0IHVybCA9IGAke3dzX3NjaGVtZX06Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7dGhpcy51cGxvYWRVcmx9YDtcbiAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBzZWxmLnRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgfTtcblxuICAgIHdzLm9ubWVzc2FnZSA9IChldnQpID0+IHtcbiAgICAgIC8vIGxpc3RlbiB0byBkYXRhIHNlbnQgZnJvbSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhID8gW2RhdGFdIDogW10sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoXCJkaXNjb25uZWN0ZWRcIik7XG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICBjb25uZWN0SW50ZXJ2YWwgPSBzZXRUaW1lb3V0KFxuICAgICAgICB0aGlzLmNoZWNrV2Vic29ja2V0LFxuICAgICAgICBNYXRoLm1pbigxMDAwMCwgc2VsZi50aW1lb3V0KVxuICAgICAgKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICB9O1xuXG4gICAgd3Mub25lcnJvciA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBlcnJvclwiLCBlKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGB3ZWJzb2NrZXQgZXJyb3I6ICR7ZX1gKTtcbiAgICB9O1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHdzOiB3cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICB9O1xuXG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfTtcblxuICBzZW5kRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsIFwiVVRGLThcIik7XG5cbiAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LndzLnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgY2xlYXJkYjogdGhpcy5zdGF0ZS5jbGVhckRCLCBjb250ZW50OiBjb250ZW50IH0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG5cbiAgY2xlYXJEQiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xlYXJEQjogIXRoaXMuc3RhdGUuY2xlYXJEQiB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGVydHMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JfQsNCz0YDRg9C30LrQsCDQsiBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICBXZWJzb2NrZXQgc3RhdHVzOiB7dGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTIgdGV4dC1sZWZ0XCI+0J7Rh9C40YHRgtC40YLRjCBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xlYXJCRFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xlYXJEQn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jbGVhckRCfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICDQpNCw0LnQuyDQt9Cw0LPRgNGD0LfQutC4INCyIERCXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC0zXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXBsb2FkRmlsZU5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwidXBsb2FkRmlsZU5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51cGxvYWRGaWxlID8gdGhpcy5zdGF0ZS51cGxvYWRGaWxlLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEZpbGVUb1VwbG9hZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRGaWxlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyBcIlwiIDogXCJkaXNhYmxlZFwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtNVwiPtCS0YvQs9GA0YPQt9C60LAgREI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDRhNC+0YDQvNCw0YIg0YHQvtGF0YDQsNC90Y/QtdC80L7Qs9C+INGE0LDQudC70LBcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWxlY3RGb3JtYXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwianNvblwiPmpzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Y3N2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgey8qIDxvcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dC9wbGFpbjwvb3B0aW9uPiAqL31cbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17dGhpcy5nZXREb3dubG9hZFVybCgpfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjb2wgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAg0KHRgtCw0YDRglxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==