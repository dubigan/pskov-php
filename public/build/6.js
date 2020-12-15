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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInZhcmlhbnQiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJnZXRSZWFjdEFsZXJ0cyIsIm1lc3NhZ2VzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJldk1lc3NhZ2VzIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzZWxmIiwiY29ubmVjdEludGVydmFsIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsInVybCIsIm9ub3BlbiIsImNsZWFyVGltZW91dCIsInNldFdlYnNvY2tldFN0YXR1cyIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJvbmNsb3NlIiwiY2hlY2tXZWJzb2NrZXQiLCJNYXRoIiwibWluIiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjbGljayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJjb250ZW50IiwicmVzdWx0Iiwic2VuZCIsInN0cmluZ2lmeSIsImNsZWFyZGIiLCJuYW1lIiwic2VsZWN0RmlsZVRvVXBsb2FkIiwic2VuZEZpbGUiLCJzZWxlY3RGb3JtYXQiLCJnZXREb3dubG9hZFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3FFQW9CUyxVQUFDQyxLQUFELEVBQVc7QUFDMUIsYUFBT0EsS0FBSyxHQUNWQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN0QixZQUFNQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0csSUFBRixLQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsUUFBbkQ7QUFDQSw0QkFDRSwyREFBQyxxREFBRDtBQUFZLGlCQUFPLEVBQUVELE9BQXJCO0FBQThCLGFBQUcsRUFBRUQ7QUFBbkMsV0FDR0QsQ0FBQyxDQUFDSSxPQURMLENBREY7QUFLRCxPQVBELENBRFUsZ0JBVVYsdUhBVkY7QUFZRCxLOzs0REFFTyxVQUFDQyxJQUFEO0FBQUEsYUFDTixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCQyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELE9BQU8sRUFBYjtBQUFBLFNBQUQsRUFBa0JGLElBQWxCLENBQVY7QUFDRCxPQUZELENBRE07QUFBQSxLOztnRUFLSSxZQUFNO0FBQ2hCLFVBQUksTUFBS0ksS0FBTCxDQUFXYixTQUFmLEVBQTBCO0FBQ3hCLGNBQUtjLEtBQUwsQ0FDRSxNQUFLQyxLQUFMLENBQVdkLE9BQVgsR0FBcUIsTUFBS2MsS0FBTCxDQUFXZCxPQUFoQyxHQUEwQyxNQUFLWSxLQUFMLENBQVdaLE9BRHZELEVBRUVlLElBRkYsQ0FFTztBQUFBLGlCQUNMLE1BQUtDLFFBQUwsQ0FB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RSwyREFBQyxvREFBRCxxQkFDRSwyREFBQyxvREFBRCxDQUFNLE1BQU4scUJBQ0UsMkRBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQztBQUF0QiwrREFERixDQURGLGVBSUUsMkRBQUMsb0RBQUQsQ0FBTSxJQUFOLHFCQUNFLDJEQUFDLG1EQUFELHFCQUNFLDJEQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIseU1BREYsZUFJRSwyREFBQyxvREFBRCxDQUFNLE9BQU47QUFDRSxVQUFFLEVBQUMsUUFETDtBQUVFLGlCQUFTLEVBQUMsT0FGWjtBQUdFLGdCQUFRLEVBQUUsS0FBS3NEO0FBSGpCLHNCQUtFO0FBQVEsYUFBSyxFQUFDO0FBQWQsZ0JBTEYsZUFNRTtBQUFRLGFBQUssRUFBQztBQUFkLGVBTkYsQ0FKRixlQWFFO0FBQU0sY0FBTSxFQUFFLEtBQUtDLGNBQUwsRUFBZDtBQUFxQyxjQUFNLEVBQUM7QUFBNUMsc0JBQ0UsMkRBQUMsc0RBQUQ7QUFBUSxlQUFPLEVBQUMsU0FBaEI7QUFBMEIsWUFBSSxFQUFDLFFBQS9CO0FBQXdDLGlCQUFTLEVBQUM7QUFBbEQsMENBREYsQ0FiRixDQURGLENBSkYsQ0FsREYsQ0FERjtBQStFRDs7OztFQTlMb0N6RCwrQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMgIT09IHByZXZNZXNzYWdlcykge1xuICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFudCA9IGUudHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInByaW1hcnlcIiA6IFwiZGFuZ2VyXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0QWxlcnQgdmFyaWFudD17dmFyaWFudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvUmVhY3RBbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDw+PC8+XG4gICAgKTtcbiAgfTtcblxuICBkZWxheSA9ICh3YWl0KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnByb3BzLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgY2xlYXJEQjogZmFsc2UsXG4gICAgd2Vic29ja2V0OiB7XG4gICAgICB3czogbnVsbCxcbiAgICAgIHN0YXR1czogXCJkaXNjb25uZWN0ZWRcIixcbiAgICB9LFxuICAgIGRvd25sb2FkRm9ybWF0OiBcImpzb25cIixcbiAgfTtcblxuICBkb3dubG9hZFVybCA9IFwiL1wiO1xuICB1cGxvYWRVcmwgPSBcIi9cIjtcblxuICBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICByZXR1cm4gYC90ZXN0Zm9yam9iL2FwaS9kb3dubG9hZF8ke3RoaXMuc3RhdGUuZG93bmxvYWRGb3JtYXR9L2A7XG4gIH07XG5cbiAgc2V0V2Vic29ja2V0U3RhdHVzID0gKHN0YXR1cykgPT4ge1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHN0YXR1czogc3RhdHVzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNvY2tldCB9KTtcbiAgfTtcblxuICBjaGVja1dlYnNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgIGlmICghd3MgfHwgd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7IC8vY2hlY2sgaWYgd2Vic29ja2V0IGluc3RhbmNlIGlzIGNsb3NlZCwgaWYgc28gY2FsbCBgY29ubmVjdGAgZnVuY3Rpb24uXG4gIH07XG5cbiAgY29ubmVjdFdlYnNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gY2FjaGUgdGhlIHRoaXNcbiAgICBsZXQgY29ubmVjdEludGVydmFsO1xuICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgY29uc3QgdXJsID0gYHdzOi8vbG9jYWxob3N0OjgwODAvYDtcbiAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBzZWxmLnRpbWVvdXQgPSAyNTA7IC8vIHJlc2V0IHRpbWVyIHRvIDI1MCBvbiBvcGVuIG9mIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgIC8vY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke3VybH1gKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgfTtcblxuICAgIHdzLm9ubWVzc2FnZSA9IChldnQpID0+IHtcbiAgICAgIC8vIGxpc3RlbiB0byBkYXRhIHNlbnQgZnJvbSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhID8gW2RhdGFdIDogW10sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoXCJkaXNjb25uZWN0ZWRcIik7XG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyeSB0byByZWNvbm5lY3Qgb24gY29ubmVjdGlvbiBsb3NzXG4gICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgKyBzZWxmLnRpbWVvdXQ7IC8vaW5jcmVtZW50IHJldHJ5IGludGVydmFsXG4gICAgICBjb25uZWN0SW50ZXJ2YWwgPSBzZXRUaW1lb3V0KFxuICAgICAgICB0aGlzLmNoZWNrV2Vic29ja2V0LFxuICAgICAgICBNYXRoLm1pbigxMDAwMCwgc2VsZi50aW1lb3V0KVxuICAgICAgKTsgLy9jYWxsIGNoZWNrIGZ1bmN0aW9uIGFmdGVyIHRpbWVvdXRcbiAgICB9O1xuXG4gICAgd3Mub25lcnJvciA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBlcnJvclwiLCBlKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKGB3ZWJzb2NrZXQgZXJyb3I6ICR7ZX1gKTtcbiAgICB9O1xuICAgIGNvbnN0IHdlYnNvY2tldCA9IHsgLi4udGhpcy5zdGF0ZS53ZWJzb2NrZXQsIHdzOiB3cyB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICB9O1xuXG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfTtcblxuICBzZW5kRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsIFwiVVRGLThcIik7XG5cbiAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LndzLnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB0eXBlOiBcInV0ZjhcIixcbiAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcblxuICBjbGVhckRCID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGVhckRCOiAhdGhpcy5zdGF0ZS5jbGVhckRCIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7Ql9Cw0LPRgNGD0LfQutCwINCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIFdlYnNvY2tldCBzdGF0dXM6IHt0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMiB0ZXh0LWxlZnRcIj7QntGH0LjRgdGC0LjRgtGMIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xuICAgICAgICAgICAgICAgIG5hbWU9XCJjbGVhckJEXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jbGVhckRCfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNsZWFyREJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgINCk0LDQudC7INC30LDQs9GA0YPQt9C60Lgg0LIgREJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyB0aGlzLnN0YXRlLnVwbG9hZEZpbGUubmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RmlsZVRvVXBsb2FkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xIG1sLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEZpbGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IFwiXCIgOiBcImRpc2FibGVkXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDQodGC0LDRgNGCXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JLRi9Cz0YDRg9C30LrQsCBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INGE0L7RgNC80LDRgiDRgdC+0YXRgNCw0L3Rj9C10LzQvtCz0L4g0YTQsNC50LvQsFxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdEZvcm1hdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+anNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjc3ZcIj5jc3Y8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0L3BsYWluPC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXt0aGlzLmdldERvd25sb2FkVXJsKCl9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImNvbCBtbC00XCI+XG4gICAgICAgICAgICAgICAgICDQodGC0LDRgNGCXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9