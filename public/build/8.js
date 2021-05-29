(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
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
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        messages: [],
        showAlert: false,
        timeout: 5000
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getAlerts", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(array) {
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

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: 'alert alert_' + type,
            key: index
          }, e.message);
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "delay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(wait) {
        return new Promise(function (resolve) {
          return global.setTimeout(function () {
            return resolve('');
          }, wait);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: [],
          showAlert: false
        });

        _this.props.clearMessages();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "showAlert", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        if (_this.state.showAlert) {
          _this.delay(_this.props.timeout ? _this.props.timeout : _this.state.timeout).then(_this.clearMessages);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this.getAlerts(_this.state.messages));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null);
      }
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, this.showAlert());
    }
  }]);

  return Alerts;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);


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
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/Form */ "./assets/components/lib/Form.tsx");
/* harmony import */ var _lib_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/Button */ "./assets/components/lib/Button.tsx");
/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/Card */ "./assets/components/lib/Card.tsx");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Alerts */ "./assets/components/Alerts.tsx");
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
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        messages: [],
        uploadFile: null,
        clearDB: false,
        websocket: {
          ws: null,
          status: 'disconnected'
        },
        downloadFormat: 'json'
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "downloadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "uploadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '/'
    });
    Object.defineProperty(_assertThisInitialized(_this), "timeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 250
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDownloadUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        return "/api/download/";
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setWebsocketStatus", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(status) {
        var websocket = Object.assign(Object.assign({}, _this.state.websocket), {
          status: status
        });

        _this.setState({
          websocket: websocket
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getWsUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkWebsocket", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        var ws = _this.state.websocket.ws;
        if (!ws || ws.readyState === WebSocket.CLOSED) _this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "connectWebsocket", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "selectFormat", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          downloadFormat: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "selectFileToUpload", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = function (e) {
          var file = e.target.files[0];

          _this.setState({
            uploadFile: file
          });
        };

        input.click();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "sendFile", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value(e) {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearDB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          clearDB: !_this.state.clearDB
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function value() {
        _this.setState({
          messages: []
        });
      }
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
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_19__["default"], {
        messages: this.state.messages,
        clearMessages: this.clearMessages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-12 text-left"
      }, "Websocket status: ", this.state.websocket.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
        type: "check",
        name: "clearBD",
        value: this.state.clearDB,
        onChange: this.clearDB,
        disabled: this.state.websocket.status === 'disconnected'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_upload"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Control, {
        auxClassName: "form__text form__text_upload",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: (_a = this.state.uploadFile) === null || _a === void 0 ? void 0 : _a.name,
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.selectFileToUpload,
        disabled: this.state.websocket.status === 'disconnected'
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"] //variant="primary"
      , {
        //variant="primary"
        className: "btn-primary",
        onClick: this.sendFile,
        disabled: this.state.uploadFile === null
      }, "\u0421\u0442\u0430\u0440\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 DB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Card__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
        auxClassName: "form__group_horiz"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, {
        auxClassName: "form__label_download"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Select, {
        auxClassName: "form__select_download",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
        value: "json"
      }, "json")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "hidden",
        name: "format",
        value: this.state.downloadFormat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_lib_Button__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        type: "submit",
        className: "btn-primary"
      }, "\u0421\u0442\u0430\u0440\u0442"))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Dashboard));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className ? className : 'card'
  }, children);
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
}; // const Form: TForm = props => {
//   if (props.baseClassName) baseClass = props.baseClassName;
//   return (
//     <form
//       action={props.action}
//       method={props.method}
//       className={getClassName(props.className, props.auxClassName)}
//       onSubmit={props.onSubmit}
//     >
//       {props.children}
//     </form>
//   );
// };


function Form(props) {
  if (props.baseClassName) baseClass = props.baseClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: props.action,
    method: props.method,
    className: getClassName(props.className, props.auxClassName),
    onSubmit: props.onSubmit
  }, props.children);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BbGVydHMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGliL0NhcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xpYi9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyJdLCJuYW1lcyI6WyJBbGVydHMiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwibWVzc2FnZXMiLCJzaG93QWxlcnQiLCJ0aW1lb3V0IiwiYXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJ0eXBlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwibWVzc2FnZSIsIkZyYWdtZW50Iiwid2FpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2xvYmFsIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwicHJvcHMiLCJjbGVhck1lc3NhZ2VzIiwic3RhdGUiLCJkZWxheSIsInRoZW4iLCJnZXRBbGVydHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIiwidXBsb2FkRmlsZSIsImNsZWFyREIiLCJ3ZWJzb2NrZXQiLCJ3cyIsInN0YXR1cyIsImRvd25sb2FkRm9ybWF0IiwiYXNzaWduIiwid3Nfc2NoZW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInJlYWR5U3RhdGUiLCJXZWJTb2NrZXQiLCJDTE9TRUQiLCJjb25uZWN0V2Vic29ja2V0Iiwic2VsZiIsImNvbm5lY3RJbnRlcnZhbCIsInVybCIsImdldFdzVXJsIiwib25vcGVuIiwiY2xlYXJUaW1lb3V0Iiwic2V0V2Vic29ja2V0U3RhdHVzIiwib25tZXNzYWdlIiwiZXZ0IiwiZGF0YSIsInBhcnNlIiwicHVzaCIsIm9uY2xvc2UiLCJjaGVja1dlYnNvY2tldCIsIk1hdGgiLCJtaW4iLCJvbmVycm9yIiwidGFyZ2V0IiwiaW5wdXQiLCJkb2N1bWVudCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiY2xpY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwiY29udGVudCIsInJlc3VsdCIsInNlbmQiLCJjbGVhcmRiIiwiX2EiLCJDYXJkIiwiSGVhZGVyIiwiRm9ybSIsIkxhYmVsIiwiQm9keSIsIkdyb3VwIiwiYXV4Q2xhc3NOYW1lIiwiQ29udHJvbCIsIm5hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiaWQiLCJyZWFkT25seSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJzZWxlY3RGaWxlVG9VcGxvYWQiLCJzZW5kRmlsZSIsIlNlbGVjdCIsInNlbGVjdEZvcm1hdCIsImFjdGlvbiIsImdldERvd25sb2FkVXJsIiwibWV0aG9kIiwid2l0aFJvdXRlciIsInRvb2x0aXAiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkZvb3RlciIsIlRpdGxlIiwiYmFzZUNsYXNzIiwiZ2V0Q2xhc3NOYW1lIiwic3VmZml4IiwiRm9ybUxhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2xTZWxlY3QiLCJGb3JtQ29udHJvbCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsImJhc2VDbGFzc05hbWUiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTTs7Ozs7QUFDakIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBQyxVQUFNLENBQUNDLGNBQVAsZ0NBQTRCLE9BQTVCLEVBQXFDO0FBQ2pDQyxnQkFBVSxFQUFFLElBRHFCO0FBRWpDQyxrQkFBWSxFQUFFLElBRm1CO0FBR2pDQyxjQUFRLEVBQUUsSUFIdUI7QUFJakNDLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFLEVBRFA7QUFFSEMsaUJBQVMsRUFBRSxLQUZSO0FBR0hDLGVBQU8sRUFBRTtBQUhOO0FBSjBCLEtBQXJDO0FBVUFSLFVBQU0sQ0FBQ0MsY0FBUCxnQ0FBNEIsV0FBNUIsRUFBeUM7QUFDckNDLGdCQUFVLEVBQUUsSUFEeUI7QUFFckNDLGtCQUFZLEVBQUUsSUFGdUI7QUFHckNDLGNBQVEsRUFBRSxJQUgyQjtBQUlyQ0MsV0FBSyxFQUFFLGVBQUNJLEtBQUQsRUFBVztBQUNkLGVBQU9BLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDcEMsY0FBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0Esa0JBQVFGLENBQUMsQ0FBQ0UsSUFBVjtBQUNJLGlCQUFLLE1BQUw7QUFDSUEsa0JBQUksR0FBRyxNQUFQO0FBQ0E7O0FBQ0osaUJBQUssU0FBTDtBQUNJQSxrQkFBSSxHQUFHLFNBQVA7QUFDQTs7QUFDSixpQkFBSyxPQUFMO0FBQ0lBLGtC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bUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0QWxlcnRzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkgPyAoYXJyYXkubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnRfJyArIHR5cGUsIGtleTogaW5kZXggfSwgZS5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRlbGF5XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAod2FpdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJycpLCB3YWl0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGVhck1lc3NhZ2VzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNob3dBbGVydFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGVydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5KHRoaXMucHJvcHMudGltZW91dCA/IHRoaXMucHJvcHMudGltZW91dCA6IHRoaXMuc3RhdGUudGltZW91dCkudGhlbih0aGlzLmNsZWFyTWVzc2FnZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdGhpcy5nZXRBbGVydHModGhpcy5zdGF0ZS5tZXNzYWdlcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBsZXQgc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vY29uc3QgeyBtZXNzYWdlczogcHJldk1lc3NhZ2VzIH0gPSBwcmV2UHJvcHM7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0FsZXJ0cycsIG1lc3NhZ2VzKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzICYmXG4gICAgICAgICAgICBtZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lc3NhZ2VzKSAhPT0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpKSB7XG4gICAgICAgICAgICBzaG93QWxlcnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93QWxlcnQgJiYgIXRoaXMuc3RhdGUuc2hvd0FsZXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdGhpcy5zaG93QWxlcnQoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9saWIvRm9ybSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xpYi9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9saWIvQ2FyZCc7XG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJztcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHVwbG9hZEZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgY2xlYXJEQjogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2Vic29ja2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHdzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG93bmxvYWRGb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRvd25sb2FkVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAnLydcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwbG9hZFVybFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0aW1lb3V0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAyNTBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldERvd25sb2FkVXJsXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvYXBpL2Rvd25sb2FkL2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXRXZWJzb2NrZXRTdGF0dXNcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUud2Vic29ja2V0KSwgeyBzdGF0dXM6IHN0YXR1cyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2Vic29ja2V0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0V3NVcmxcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0V3NVcmwgcHJvdG9jb2w6IFwiLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzX3NjaGVtZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB3czovL2AgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjMwMDAvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaGVyb2t1IGRlcGxveVxuICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFdzVXJsIGhlcm9rdTogJywgaG9zdG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChob3N0bmFtZVsxXSAmJiBob3N0bmFtZVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2hlcm9rdScpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWVbMF0gPSAncHNrb3Ytd3MnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7d3Nfc2NoZW1lfTovL2AgKyBob3N0bmFtZS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnbG9jYWxob3N0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoZWNrV2Vic29ja2V0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3MgPSB0aGlzLnN0YXRlLndlYnNvY2tldC53cztcbiAgICAgICAgICAgICAgICBpZiAoIXdzIHx8IHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdFdlYnNvY2tldCgpOyAvL2NoZWNrIGlmIHdlYnNvY2tldCBpbnN0YW5jZSBpcyBjbG9zZWQsIGlmIHNvIGNhbGwgYGNvbm5lY3RgIGZ1bmN0aW9uLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY29ubmVjdFdlYnNvY2tldFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBjYWNoZSB0aGUgdGhpc1xuICAgICAgICAgICAgICAgIGxldCBjb25uZWN0SW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgLy9jb25zdCB3c19zY2hlbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgdXJsID0gYHdzOi8vJHt0aGlzLmdldEhvc3ROYW1lKCl9OjgwODAvYDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFdzVXJsKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RXZWJzb2NrZXQgdXJsOiAnLCB1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICAgICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gMjUwOyAvLyByZXNldCB0aW1lciB0byAyNTAgb24gb3BlbiBvZiB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cyhgY29ubmVjdGVkIHRvICR7dXJsfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd3Mub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIHRvIGRhdGEgc2VudCBmcm9tIHRoZSB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnb25tZXNzYWdlJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdlYnNvY2tldFN0YXR1cygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHJlY29ubmVjdCBvbiBjb25uZWN0aW9uIGxvc3NcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0ICsgc2VsZi50aW1lb3V0OyAvL2luY3JlbWVudCByZXRyeSBpbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0SW50ZXJ2YWwgPSBnbG9iYWwuc2V0VGltZW91dCh0aGlzLmNoZWNrV2Vic29ja2V0LCBNYXRoLm1pbigxMDAwMCwgc2VsZi50aW1lb3V0KSk7IC8vY2FsbCBjaGVjayBmdW5jdGlvbiBhZnRlciB0aW1lb3V0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3cy5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXZWJzb2NrZXRTdGF0dXMoYHdlYnNvY2tldCBlcnJvcjogJHtlfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3Qgd2Vic29ja2V0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLndlYnNvY2tldCksIHsgd3M6IHdzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzb2NrZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWxlY3RGb3JtYXRcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25sb2FkRm9ybWF0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdEZpbGVUb1VwbG9hZFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZEZpbGU6IGZpbGUgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic2VuZEZpbGVcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dCh0aGlzLnN0YXRlLnVwbG9hZEZpbGUsICdVVEYtOCcpO1xuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdGVsbCB0aGUgcmVhZGVyIHdoYXQgdG8gZG8gd2hlbiBpdCdzIGRvbmUgcmVhZGluZy4uLlxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQucmVzdWx0OyAvLyB0aGlzIGlzIHRoZSBjb250ZW50IVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cyA9IHRoaXMuc3RhdGUud2Vic29ja2V0LndzO1xuICAgICAgICAgICAgICAgICAgICBpZiAod3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmRiOiB0aGlzLnN0YXRlLmNsZWFyREIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGVhckRCXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsZWFyREI6ICF0aGlzLnN0YXRlLmNsZWFyREIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGVhck1lc3NhZ2VzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RXZWJzb2NrZXQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydHMsIHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUubWVzc2FnZXMsIGNsZWFyTWVzc2FnZXM6IHRoaXMuY2xlYXJNZXNzYWdlcyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtMTIgdGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2Vic29ja2V0IHN0YXR1czogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX3VwbG9hZFwiIH0sIFwiXFx1MDQxRVxcdTA0NDdcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgREJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgeyB0eXBlOiBcImNoZWNrXCIsIG5hbWU6IFwiY2xlYXJCRFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5jbGVhckRCLCBvbkNoYW5nZTogdGhpcy5jbGVhckRCLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS53ZWJzb2NrZXQuc3RhdHVzID09PSAnZGlzY29ubmVjdGVkJyB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBfaG9yaXpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19sYWJlbF91cGxvYWRcIiB9LCBcIlxcdTA0MjRcXHUwNDMwXFx1MDQzOVxcdTA0M0IgXFx1MDQzN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzggXFx1MDQzMiBEQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX190ZXh0IGZvcm1fX3RleHRfdXBsb2FkXCIsIG5hbWU6IFwidXBsb2FkRmlsZU5hbWVcIiwgaWQ6IFwidXBsb2FkRmlsZU5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiAoX2EgPSB0aGlzLnN0YXRlLnVwbG9hZEZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lLCByZWFkT25seTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiwgb25DbGljazogdGhpcy5zZWxlY3RGaWxlVG9VcGxvYWQsIGRpc2FibGVkOiB0aGlzLnN0YXRlLndlYnNvY2tldC5zdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnIH0sIFwiLi4uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiB0aGlzLnNlbmRGaWxlLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS51cGxvYWRGaWxlID09PSBudWxsIH0sIFwiXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQ0MFxcdTA0NDJcIikpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlxcdTA0MTJcXHUwNDRCXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIERCXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGF1eENsYXNzTmFtZTogXCJmb3JtX19ncm91cF9ob3JpelwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIHsgYXV4Q2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsX2Rvd25sb2FkXCIgfSwgXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzFcXHUwNDM1XFx1MDQ0MFxcdTA0MzhcXHUwNDQyXFx1MDQzNSBcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzMFxcdTA0NDIgXFx1MDQ0MVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQ0RlxcdTA0MzVcXHUwNDNDXFx1MDQzRVxcdTA0MzNcXHUwNDNFIFxcdTA0NDRcXHUwNDMwXFx1MDQzOVxcdTA0M0JcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlNlbGVjdCwgeyBhdXhDbGFzc05hbWU6IFwiZm9ybV9fc2VsZWN0X2Rvd25sb2FkXCIsIG9uQ2hhbmdlOiB0aGlzLnNlbGVjdEZvcm1hdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJqc29uXCIgfSwgXCJqc29uXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiB0aGlzLmdldERvd25sb2FkVXJsKCksIG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImZvcm1hdFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5kb3dubG9hZEZvcm1hdCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuLXByaW1hcnlcIiB9LCBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQyXCIpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGFzaGJvYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdG9vbHRpcCwgaWQsIGNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRpdGxlOiB0b29sdGlwLCBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DbGljazogb25DbGljaywgZGlzYWJsZWQ6IGRpc2FibGVkIH0sIGNoaWxkcmVuKSk7XG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScsXG4gICAgbmFtZTogJ2J0bicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgY2hpbGRyZW46ICdidXR0b24nLFxufTtcbi8vZXhwb3J0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDYXJkSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19oZWFkZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX3RpdGxlJyB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ2FyZEJvZHkgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJ2NhcmRfX2JvZHknIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkX19mb290ZXInIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICdjYXJkJyB9LCBjaGlsZHJlbik7XG59O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSA9ICcnLCBhdXhDbGFzc05hbWUgPSAnJywgc3VmZml4ID0gJycpID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIHJldHVybiBiYXNlQ2xhc3MgKyBzdWZmaXggKyAoYXV4Q2xhc3NOYW1lID8gJyAnICsgYXV4Q2xhc3NOYW1lIDogJycpO1xufTtcbmNvbnN0IEZvcm1MYWJlbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGF1eENsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGdldENsYXNzTmFtZShjbGFzc05hbWUsIGF1eENsYXNzTmFtZSwgJ19fbGFiZWwnKSB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgRm9ybUdyb3VwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSwgYXV4Q2xhc3NOYW1lLCAnX19ncm91cCcpIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBGb3JtQ29udHJvbFNlbGVjdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX19zZWxlY3QnKSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuY29uc3QgRm9ybUNvbnRyb2wgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcbiAgICBpZiAocHJvcHMudHlwZSlcbiAgICAgICAgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lLCAnX190ZXh0JyksIG5hbWU6IHByb3BzLm5hbWUsIHZhbHVlOiBwcm9wcy52YWx1ZSwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCA/ICtwcm9wcy5tYXhMZW5ndGggOiB1bmRlZmluZWQsIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSwgXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUsICdfX2NvbnRyb2wnKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgcm93czogcHJvcHMucm93cyA/ICtwcm9wcy5yb3dzIDogdW5kZWZpbmVkLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UgfSkpKTtcbiAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjbGFzc05hbWU6IGdldENsYXNzTmFtZShwcm9wcy5jbGFzc05hbWUsIHByb3BzLmF1eENsYXNzTmFtZSwgJ19fY2hlY2snKSwgbmFtZTogcHJvcHMubmFtZSwgdmFsdWU6IHByb3BzLnZhbHVlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoID8gK3Byb3BzLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlIH0pKSk7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xTZWxlY3QsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgICB9XG59O1xuLy8gY29uc3QgRm9ybTogVEZvcm0gPSBwcm9wcyA9PiB7XG4vLyAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKSBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtXG4vLyAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbi8vICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxuLy8gICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5hdXhDbGFzc05hbWUpfVxuLy8gICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuLy8gICAgID5cbi8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy5iYXNlQ2xhc3NOYW1lKVxuICAgICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHByb3BzLmFjdGlvbiwgbWV0aG9kOiBwcm9wcy5tZXRob2QsIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMuYXV4Q2xhc3NOYW1lKSwgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH0sIHByb3BzLmNoaWxkcmVuKSk7XG59XG5Gb3JtLkxhYmVsID0gRm9ybUxhYmVsO1xuRm9ybS5Db250cm9sID0gRm9ybUNvbnRyb2w7XG5Gb3JtLlNlbGVjdCA9IEZvcm1Db250cm9sU2VsZWN0O1xuRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=