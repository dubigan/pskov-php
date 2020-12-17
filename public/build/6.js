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
      var ws = _this.state.websocket.ws; //if (!ws || ws.readyState === WebSocket.CLOSED) this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
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
    value: function componentDidMount() {//this.connectWebsocket();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkFsZXJ0cyIsInNob3dBbGVydCIsInRpbWVvdXQiLCJhcnJheSIsIm1hcCIsImUiLCJpbmRleCIsInZhcmlhbnQiLCJ0eXBlIiwibWVzc2FnZSIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImRlbGF5IiwicHJvcHMiLCJ0aGVuIiwic2V0U3RhdGUiLCJnZXRSZWFjdEFsZXJ0cyIsIm1lc3NhZ2VzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJldk1lc3NhZ2VzIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsIndzX3NjaGVtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJ1cmwiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjbGVhclRpbWVvdXQiLCJzZXRXZWJzb2NrZXRTdGF0dXMiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImNoZWNrV2Vic29ja2V0IiwiTWF0aCIsIm1pbiIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJzdHJpbmdpZnkiLCJjbGVhcmRiIiwibmFtZSIsInNlbGVjdEZp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QU47QUFBWSxpQkFBUyxFQUFDO0FBQXRCLHlNQURGLGVBSUUsMkRBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxpQkFBUyxFQUFDLE9BRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUttRDtBQUhqQixzQkFLRTtBQUFRLGFBQUssRUFBQztBQUFkLGdCQUxGLGVBTUU7QUFBUSxhQUFLLEVBQUM7QUFBZCxlQU5GLENBSkYsZUFhRTtBQUFNLGNBQU0sRUFBRSxLQUFLQyxjQUFMLEVBQWQ7QUFBcUMsY0FBTSxFQUFDO0FBQTVDLHNCQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGFBQUssRUFBRSxLQUFLakUsS0FBTCxDQUFXa0I7QUFIcEIsUUFERixlQU1FLDJEQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxRQUEvQjtBQUF3QyxpQkFBUyxFQUFDO0FBQWxELDBDQU5GLENBYkYsQ0FERixDQUpGLENBbERGLENBREY7QUFvRkQ7Ozs7RUFuTW9DUCwrQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgYXMgUmVhY3RBbGVydCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB0aW1lb3V0OiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGxldCBzaG93QWxlcnQgPSBmYWxzZTtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVzc2FnZXM6IHByZXZNZXNzYWdlcyB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMgIT09IHByZXZNZXNzYWdlcykge1xuICAgICAgc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3dBbGVydCAmJiAhdGhpcy5zdGF0ZS5zaG93QWxlcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93QWxlcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWFjdEFsZXJ0cyA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheSA/IChcbiAgICAgIGFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFudCA9IGUudHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInByaW1hcnlcIiA6IFwiZGFuZ2VyXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0QWxlcnQgdmFyaWFudD17dmFyaWFudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7ZS5tZXNzYWdlfVxuICAgICAgICAgIDwvUmVhY3RBbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDw+PC8+XG4gICAgKTtcbiAgfTtcblxuICBkZWxheSA9ICh3YWl0KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgd2FpdCk7XG4gICAgfSk7XG5cbiAgc2hvd0FsZXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgdGhpcy5kZWxheShcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lb3V0ID8gdGhpcy5wcm9wcy50aW1lb3V0IDogdGhpcy5zdGF0ZS50aW1lb3V0XG4gICAgICApLnRoZW4oKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gPD57dGhpcy5nZXRSZWFjdEFsZXJ0cyh0aGlzLnByb3BzLm1lc3NhZ2VzKX08Lz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5zaG93QWxlcnQoKX08Lz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgY2xlYXJEQjogZmFsc2UsXG4gICAgd2Vic29ja2V0OiB7XG4gICAgICB3czogbnVsbCxcbiAgICAgIHN0YXR1czogXCJkaXNjb25uZWN0ZWRcIixcbiAgICB9LFxuICAgIGRvd25sb2FkRm9ybWF0OiBcImpzb25cIixcbiAgfTtcblxuICBkb3dubG9hZFVybCA9IFwiL1wiO1xuICB1cGxvYWRVcmwgPSBcIi9cIjtcblxuICBnZXREb3dubG9hZFVybCA9ICgpID0+IHtcbiAgICByZXR1cm4gYC9hcGkvZG93bmxvYWQvYDtcbiAgfTtcblxuICBzZXRXZWJzb2NrZXRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XG4gICAgY29uc3Qgd2Vic29ja2V0ID0geyAuLi50aGlzLnN0YXRlLndlYnNvY2tldCwgc3RhdHVzOiBzdGF0dXMgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICB9O1xuXG4gIGNoZWNrV2Vic29ja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdzID0gdGhpcy5zdGF0ZS53ZWJzb2NrZXQud3M7XG4gICAgLy9pZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICB9O1xuXG4gIGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGNhY2hlIHRoZSB0aGlzXG4gICAgbGV0IGNvbm5lY3RJbnRlcnZhbDtcbiAgICBjb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGNvbnN0IHVybCA9IGB3czovL2xvY2FsaG9zdDo4MDgwL2A7XG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3RJbnRlcnZhbCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gJHt1cmx9YCk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgIH07XG5cbiAgICB3cy5vbm1lc3NhZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAvLyBsaXN0ZW4gdG8gZGF0YSBzZW50IGZyb20gdGhlIHdlYnNvY2tldCBzZXJ2ZXJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogZGF0YSA/IFtkYXRhXSA6IFtdLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgIHRoaXMuc2V0V2Vic29ja2V0U3RhdHVzKFwiZGlzY29ubmVjdGVkXCIpO1xuICAgICAgLy8gYXV0b21hdGljYWxseSB0cnkgdG8gcmVjb25uZWN0IG9uIGNvbm5lY3Rpb24gbG9zc1xuICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0ICsgc2VsZi50aW1lb3V0OyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgY29ubmVjdEludGVydmFsID0gc2V0VGltZW91dChcbiAgICAgICAgdGhpcy5jaGVja1dlYnNvY2tldCxcbiAgICAgICAgTWF0aC5taW4oMTAwMDAsIHNlbGYudGltZW91dClcbiAgICAgICk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgfTtcblxuICAgIHdzLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgZXJyb3JcIiwgZSk7XG4gICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgd2Vic29ja2V0IGVycm9yOiAke2V9YCk7XG4gICAgfTtcbiAgICBjb25zdCB3ZWJzb2NrZXQgPSB7IC4uLnRoaXMuc3RhdGUud2Vic29ja2V0LCB3czogd3MgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vdGhpcy5jb25uZWN0V2Vic29ja2V0KCk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3dubG9hZEZvcm1hdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgc2VsZWN0RmlsZVRvVXBsb2FkID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkRmlsZTogZmlsZSB9KTtcbiAgICB9O1xuXG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfTtcblxuICBzZW5kRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsIFwiVVRGLThcIik7XG5cbiAgICAvLyBoZXJlIHdlIHRlbGwgdGhlIHJlYWRlciB3aGF0IHRvIGRvIHdoZW4gaXQncyBkb25lIHJlYWRpbmcuLi5cbiAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDsgLy8gdGhpcyBpcyB0aGUgY29udGVudCFcbiAgICAgIHRoaXMuc3RhdGUud2Vic29ja2V0LndzLnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB0eXBlOiBcInV0ZjhcIixcbiAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcblxuICBjbGVhckRCID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGVhckRCOiAhdGhpcy5zdGF0ZS5jbGVhckRCIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0cyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwiY29sLTVcIj7Ql9Cw0LPRgNGD0LfQutCwINCyIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIFdlYnNvY2tldCBzdGF0dXM6IHt0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMiB0ZXh0LWxlZnRcIj7QntGH0LjRgdGC0LjRgtGMIERCPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xuICAgICAgICAgICAgICAgIG5hbWU9XCJjbGVhckJEXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jbGVhckRCfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNsZWFyREJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgINCk0LDQudC7INC30LDQs9GA0YPQt9C60Lgg0LIgREJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1cGxvYWRGaWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZEZpbGUgPyB0aGlzLnN0YXRlLnVwbG9hZEZpbGUubmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RmlsZVRvVXBsb2FkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xIG1sLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEZpbGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkRmlsZSA/IFwiXCIgOiBcImRpc2FibGVkXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDQodGC0LDRgNGCXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+0JLRi9Cz0YDRg9C30LrQsCBEQjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJjb2wtMyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INGE0L7RgNC80LDRgiDRgdC+0YXRgNCw0L3Rj9C10LzQvtCz0L4g0YTQsNC50LvQsFxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdEZvcm1hdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+anNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjc3ZcIj5jc3Y8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0L3BsYWluPC9vcHRpb24+ICovfVxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXt0aGlzLmdldERvd25sb2FkVXJsKCl9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kb3dubG9hZEZvcm1hdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY29sIG1sLTRcIj5cbiAgICAgICAgICAgICAgICAgINCh0YLQsNGA0YJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=