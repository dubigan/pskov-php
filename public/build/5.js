(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wojtekmaj/date-utils/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: getYear, getMonth, getMonthHuman, getDate, getHours, getMinutes, getSeconds, getCenturyStart, getPreviousCenturyStart, getNextCenturyStart, getCenturyEnd, getPreviousCenturyEnd, getNextCenturyEnd, getCenturyRange, getDecadeStart, getPreviousDecadeStart, getNextDecadeStart, getDecadeEnd, getPreviousDecadeEnd, getNextDecadeEnd, getDecadeRange, getYearStart, getPreviousYearStart, getNextYearStart, getYearEnd, getPreviousYearEnd, getNextYearEnd, getYearRange, getMonthStart, getPreviousMonthStart, getNextMonthStart, getMonthEnd, getPreviousMonthEnd, getNextMonthEnd, getMonthRange, getDayStart, getPreviousDayStart, getNextDayStart, getDayEnd, getPreviousDayEnd, getNextDayEnd, getDayRange, getDaysInMonth, getHoursMinutes, getHoursMinutesSeconds, getISOLocalMonth, getISOLocalDate, getISOLocalDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthHuman", function() { return getMonthHuman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return getSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyStart", function() { return getCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyStart", function() { return getPreviousCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyStart", function() { return getNextCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyEnd", function() { return getCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyEnd", function() { return getPreviousCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyEnd", function() { return getNextCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyRange", function() { return getCenturyRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeStart", function() { return getDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeStart", function() { return getPreviousDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeStart", function() { return getNextDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeEnd", function() { return getDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeEnd", function() { return getPreviousDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeEnd", function() { return getNextDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeRange", function() { return getDecadeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearStart", function() { return getYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearStart", function() { return getPreviousYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearStart", function() { return getNextYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearEnd", function() { return getYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearEnd", function() { return getPreviousYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearEnd", function() { return getNextYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearRange", function() { return getYearRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStart", function() { return getMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthStart", function() { return getPreviousMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthStart", function() { return getNextMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEnd", function() { return getMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthEnd", function() { return getPreviousMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthEnd", function() { return getNextMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthRange", function() { return getMonthRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayStart", function() { return getDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayStart", function() { return getPreviousDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayStart", function() { return getNextDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayEnd", function() { return getDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayEnd", function() { return getPreviousDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayEnd", function() { return getNextDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayRange", function() { return getDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutes", function() { return getHoursMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutesSeconds", function() { return getHoursMinutesSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalMonth", function() { return getISOLocalMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDate", function() { return getISOLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDateTime", function() { return getISOLocalDateTime; });
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map(function (fn) {
      return fn(date);
    });
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */

function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */

function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */

function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var hoursString = datePieces[0];
      var hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var minutesString = datePieces[1] || 0;
      var minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var secondsString = datePieces[2] || 0;
      var seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */

function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
/**
 * Decade
 */

function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
/**
 * Year
 */

function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange([getYearStart, getYearEnd]);
/**
 * Month
 */

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
/**
 * Day
 */

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange([getDayStart, getDayEnd]);
/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */

function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var numStr = "".concat(num);

  if (numStr.length >= val) {
    return num;
  }

  return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 */


function getHoursMinutes(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  return "".concat(hours, ":").concat(minutes);
}
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 */

function getHoursMinutesSeconds(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  var seconds = padStart(getSeconds(date));
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */

function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */

function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 */

function getISOLocalDateTime(date) {
  return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

/***/ }),

/***/ "./node_modules/detect-element-overflow/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/detect-element-overflow/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRect = function getRect(element) {
  return element.getBoundingClientRect();
};

var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },

    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },

    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },

    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },

    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },

    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },

    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },

    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (detectElementOverflow);

/***/ }),

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: getUserLocales, getUserLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocales", function() { return getUserLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return getUserLocale; });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);


function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

function getUserLocalesInternal() {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
}

var getUserLocales = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

var getUserLocale = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocaleInternal);
/* harmony default export */ __webpack_exports__["default"] = (getUserLocale);

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/make-event-props/dist/entry.js":
/*!*****************************************************!*\
  !*** ./node_modules/make-event-props/dist/entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.focusEvents = exports.keyboardEvents = exports.touchEvents = exports.mouseEvents = void 0;
// As defined on the list of supported mouse events: https://reactjs.org/docs/events.html#mouse-events
var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']; // As defined on the list of supported touch events: https://reactjs.org/docs/events.html#touch-events

exports.mouseEvents = mouseEvents;
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#keyboard-events

exports.touchEvents = touchEvents;
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#focus-events

exports.keyboardEvents = keyboardEvents;
var focusEvents = ['onFocus', 'onBlur'];
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */

exports.focusEvents = focusEvents;

var makeEventProps = function makeEventProps(props, getArgs) {
  var eventProps = {};
  [].concat(mouseEvents, touchEvents, keyboardEvents, focusEvents).forEach(function (eventName) {
    if (props[eventName]) {
      eventProps[eventName] = function (event) {
        return getArgs ? props[eventName](event, getArgs(eventName)) : props[eventName](event);
      };
    }
  });
  return eventProps;
};

var _default = makeEventProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _Calendar_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendar/Navigation */ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js");
/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);
/**
 * Returns views array with disallowed values cut off.
 */

function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */


function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */


function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = value instanceof Array && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = new Date(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueDate;
}

function getDetailValue(_ref, index) {
  var value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      maxDetail = _ref.maxDetail;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  var valueType = getValueType(maxDetail);
  var detailValueFrom = [_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"], _shared_dates__WEBPACK_IMPORTED_MODULE_8__["getEnd"]][index](valueType, valuePiece);
  return Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["between"])(detailValueFrom, minDate, maxDate);
}

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

var getDetailValueArray = function getDetailValueArray(args) {
  var value = args.value;

  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};

function getActiveStartDate(props) {
  var maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(rangeType, valueFrom);
}

function getInitialActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      defaultActiveStartDate = props.defaultActiveStartDate,
      defaultValue = props.defaultValue,
      defaultView = props.defaultView,
      maxDetail = props.maxDetail,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view,
      otherProps = _objectWithoutProperties(props, ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"]);

  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;

  if (valueFrom) {
    return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(rangeType, valueFrom);
  }

  return getActiveStartDate(_objectSpread({
    maxDetail: maxDetail,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  }, otherProps));
}

var getIsSingleValue = function getIsSingleValue(value) {
  return value && [].concat(value).length === 1;
};

var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /* eslint-disable react/destructuring-assignment */
      activeStartDate: _this.props.defaultActiveStartDate,
      value: _this.props.defaultValue,
      view: _this.props.defaultView
      /* eslint-enable react/destructuring-assignment */

    });

    _defineProperty(_assertThisInitialized(_this), "setStateAndCallCallbacks", function (nextState, event, callback) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          previousActiveStartDate = _assertThisInitialize.activeStartDate,
          previousView = _assertThisInitialize.view;

      var _this$props = _this.props,
          allowPartialRange = _this$props.allowPartialRange,
          onActiveStartDateChange = _this$props.onActiveStartDateChange,
          onChange = _this$props.onChange,
          onViewChange = _this$props.onViewChange,
          selectRange = _this$props.selectRange;
      var prevArgs = {
        activeStartDate: previousActiveStartDate,
        view: previousView
      };

      _this.setState(nextState, function () {
        var args = {
          activeStartDate: nextState.activeStartDate || _this.activeStartDate,
          value: nextState.value || _this.value,
          view: nextState.view || _this.view
        };

        function shouldUpdate(key) {
          return (// Key must exist, and…
            key in nextState && ( // …key changed from undefined to defined or the other way around, or…
            _typeof(nextState[key]) !== _typeof(prevArgs[key]) // …value changed.
            || (nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
          );
        }

        if (shouldUpdate('activeStartDate')) {
          if (onActiveStartDateChange) onActiveStartDateChange(args);
        }

        if (shouldUpdate('view')) {
          if (onViewChange) onViewChange(args);
        }

        if (shouldUpdate('value')) {
          if (onChange) {
            if (selectRange) {
              var isSingleValue = getIsSingleValue(nextState.value);

              if (!isSingleValue) {
                onChange(nextState.value, event);
              } else if (allowPartialRange) {
                onChange([nextState.value], event);
              }
            } else {
              onChange(nextState.value, event);
            }
          }
        }

        if (callback) callback(args);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveStartDate", function (activeStartDate) {
      _this.setStateAndCallCallbacks({
        activeStartDate: activeStartDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drillDown", function (nextActiveStartDate, event) {
      if (!_this.drillDownAvailable) {
        return;
      }

      _this.onClickTile(nextActiveStartDate, event);

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          view = _assertThisInitialize2.view,
          views = _assertThisInitialize2.views;

      var onDrillDown = _this.props.onDrillDown;
      var nextView = views[views.indexOf(view) + 1];

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillDown);
    });

    _defineProperty(_assertThisInitialized(_this), "drillUp", function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          activeStartDate = _assertThisInitialize3.activeStartDate,
          view = _assertThisInitialize3.view,
          views = _assertThisInitialize3.views;

      var onDrillUp = _this.props.onDrillUp;
      var nextView = views[views.indexOf(view) - 1];
      var nextActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(nextView, activeStartDate);

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value, event) {
      var selectRange = _this.props.selectRange;

      _this.onClickTile(value, event);

      var nextValue;

      if (selectRange) {
        // Range selection turned on
        var _assertThisInitialize4 = _assertThisInitialized(_this),
            previousValue = _assertThisInitialize4.value,
            valueType = _assertThisInitialize4.valueType;

        if (!getIsSingleValue(previousValue)) {
          // Value has 0 or 2 elements - either way we're starting a new array
          // First value
          nextValue = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(valueType, value);
        } else {
          // Second value
          nextValue = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getValueRange"])(valueType, previousValue, value);
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
      }

      var nextActiveStartDate = getActiveStartDate(_objectSpread(_objectSpread({}, _this.props), {}, {
        value: nextValue
      }));
      event.persist();

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        value: nextValue
      }, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickTile", function (value, event) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          view = _assertThisInitialize5.view;

      var _this$props2 = _this.props,
          onClickDay = _this$props2.onClickDay,
          onClickDecade = _this$props2.onClickDecade,
          onClickMonth = _this$props2.onClickMonth,
          onClickYear = _this$props2.onClickYear;

      var callback = function () {
        switch (view) {
          case 'century':
            return onClickDecade;

          case 'decade':
            return onClickYear;

          case 'year':
            return onClickMonth;

          case 'month':
            return onClickDay;

          default:
            throw new Error("Invalid view: ".concat(view, "."));
        }
      }();

      if (callback) callback(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (value) {
      _this.setState(function (prevState) {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        hover: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props3 = this.props,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          returnValue = _this$props3.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(next) {
      var currentActiveStartDate = this.activeStartDate,
          onMouseOver = this.onMouseOver,
          valueType = this.valueType,
          value = this.value,
          view = this.view;
      var _this$props4 = this.props,
          calendarType = _this$props4.calendarType,
          locale = _this$props4.locale,
          maxDate = _this$props4.maxDate,
          minDate = _this$props4.minDate,
          selectRange = _this$props4.selectRange,
          tileClassName = _this$props4.tileClassName,
          tileContent = _this$props4.tileContent,
          tileDisabled = _this$props4.tileDisabled;
      var hover = this.hover;
      var activeStartDate = next ? Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBeginNext"])(view, currentActiveStartDate) : Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(view, currentActiveStartDate);
      var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onClick: onClick,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent,
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };

      switch (view) {
        case 'century':
          {
            var formatYear = this.props.formatYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CenturyView__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
              formatYear: formatYear
            }, commonProps));
          }

        case 'decade':
          {
            var _formatYear = this.props.formatYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DecadeView__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
              formatYear: _formatYear
            }, commonProps));
          }

        case 'year':
          {
            var _this$props5 = this.props,
                formatMonth = _this$props5.formatMonth,
                formatMonthYear = _this$props5.formatMonthYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YearView__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
              formatMonth: formatMonth,
              formatMonthYear: formatMonthYear
            }, commonProps));
          }

        case 'month':
          {
            var _this$props6 = this.props,
                formatLongDate = _this$props6.formatLongDate,
                formatShortWeekday = _this$props6.formatShortWeekday,
                onClickWeekNumber = _this$props6.onClickWeekNumber,
                showDoubleView = _this$props6.showDoubleView,
                showFixedNumberOfWeeks = _this$props6.showFixedNumberOfWeeks,
                showNeighboringMonth = _this$props6.showNeighboringMonth,
                showWeekNumbers = _this$props6.showWeekNumbers;
            var onMouseLeave = this.onMouseLeave;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
              calendarType: calendarType,
              formatLongDate: formatLongDate,
              formatShortWeekday: formatShortWeekday,
              onClickWeekNumber: onClickWeekNumber,
              onMouseLeave: selectRange ? onMouseLeave : null,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks || showDoubleView,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;

      if (!showNavigation) {
        return null;
      }

      var activeStartDate = this.activeStartDate,
          view = this.view,
          views = this.views;
      var _this$props7 = this.props,
          formatMonthYear = _this$props7.formatMonthYear,
          formatYear = _this$props7.formatYear,
          locale = _this$props7.locale,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          navigationAriaLabel = _this$props7.navigationAriaLabel,
          navigationLabel = _this$props7.navigationLabel,
          next2AriaLabel = _this$props7.next2AriaLabel,
          next2Label = _this$props7.next2Label,
          nextAriaLabel = _this$props7.nextAriaLabel,
          nextLabel = _this$props7.nextLabel,
          prev2AriaLabel = _this$props7.prev2AriaLabel,
          prev2Label = _this$props7.prev2Label,
          prevAriaLabel = _this$props7.prevAriaLabel,
          prevLabel = _this$props7.prevLabel,
          showDoubleView = _this$props7.showDoubleView;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calendar_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        formatYear: formatYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        navigationAriaLabel: navigationAriaLabel,
        navigationLabel: navigationLabel,
        next2AriaLabel: next2AriaLabel,
        next2Label: next2Label,
        nextAriaLabel: nextAriaLabel,
        nextLabel: nextLabel,
        prev2AriaLabel: prev2AriaLabel,
        prev2Label: prev2Label,
        prevAriaLabel: prevAriaLabel,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        showDoubleView: showDoubleView,
        view: view,
        views: views
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          className = _this$props8.className,
          inputRef = _this$props8.inputRef,
          selectRange = _this$props8.selectRange,
          showDoubleView = _this$props8.showDoubleView;
      var onMouseLeave = this.onMouseLeave,
          value = this.value;
      var valueArray = [].concat(value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_2__["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef
      }, this.renderNavigation(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(baseClassName, "__viewContainer"),
        onBlur: selectRange ? onMouseLeave : null,
        onMouseLeave: selectRange ? onMouseLeave : null
      }, this.renderContent(), showDoubleView && this.renderContent(true)));
    }
  }, {
    key: "activeStartDate",
    get: function get() {
      var activeStartDateProps = this.props.activeStartDate;
      var activeStartDateState = this.state.activeStartDate;
      return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
    }
  }, {
    key: "value",
    get: function get() {
      var _this$props9 = this.props,
          selectRange = _this$props9.selectRange,
          valueProps = _this$props9.value;
      var valueState = this.state.value; // In the middle of range selection, use value from state

      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }

      return valueProps !== undefined ? valueProps : valueState;
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }, {
    key: "view",
    get: function get() {
      var _this$props10 = this.props,
          minDetail = _this$props10.minDetail,
          maxDetail = _this$props10.maxDetail,
          viewProps = _this$props10.view;
      var viewState = this.state.view;
      return getView(viewProps || viewState, minDetail, maxDetail);
    }
  }, {
    key: "views",
    get: function get() {
      var _this$props11 = this.props,
          minDetail = _this$props11.minDetail,
          maxDetail = _this$props11.maxDetail;
      return getLimitedViews(minDetail, maxDetail);
    }
  }, {
    key: "hover",
    get: function get() {
      var selectRange = this.props.selectRange;
      var hover = this.state.hover;
      return selectRange ? hover : null;
    }
  }, {
    key: "drillDownAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: "drillUpAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) > 0;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Calendar.defaultProps = {
  maxDetail: 'month',
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true
};
var isActiveStartDate = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date);
var isLooseValue = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isValue"]]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isCalendarType"],
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isClassName"],
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isLooseValue,
  defaultView: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isView"],
  formatLongDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  inputRef: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isRef"],
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  maxDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isMaxDate"],
  maxDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(allViews),
  minDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isMinDate"],
  minDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(allViews),
  navigationAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  navigationLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  next2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  nextAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onActiveStartDateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickDecade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrillUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onViewChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prev2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prev2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  prevAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  returnValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['start', 'end', 'range']),
  selectRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showDoubleView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNeighboringMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showWeekNumbers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isClassName"]]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tileDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: isLooseValue,
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isView"]
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar/Navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");






var className = 'react-calendar__navigation';
function Navigation(_ref) {
  var activeStartDate = _ref.activeStartDate,
      drillUp = _ref.drillUp,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonthYear"] : _ref$formatMonthYear,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatYear"] : _ref$formatYear,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _ref$navigationAriaLa = _ref.navigationAriaLabel,
      navigationAriaLabel = _ref$navigationAriaLa === void 0 ? '' : _ref$navigationAriaLa,
      navigationLabel = _ref.navigationLabel,
      _ref$next2AriaLabel = _ref.next2AriaLabel,
      next2AriaLabel = _ref$next2AriaLabel === void 0 ? '' : _ref$next2AriaLabel,
      _ref$next2Label = _ref.next2Label,
      next2Label = _ref$next2Label === void 0 ? '»' : _ref$next2Label,
      _ref$nextAriaLabel = _ref.nextAriaLabel,
      nextAriaLabel = _ref$nextAriaLabel === void 0 ? '' : _ref$nextAriaLabel,
      _ref$nextLabel = _ref.nextLabel,
      nextLabel = _ref$nextLabel === void 0 ? '›' : _ref$nextLabel,
      _ref$prev2AriaLabel = _ref.prev2AriaLabel,
      prev2AriaLabel = _ref$prev2AriaLabel === void 0 ? '' : _ref$prev2AriaLabel,
      _ref$prev2Label = _ref.prev2Label,
      prev2Label = _ref$prev2Label === void 0 ? '«' : _ref$prev2Label,
      _ref$prevAriaLabel = _ref.prevAriaLabel,
      prevAriaLabel = _ref$prevAriaLabel === void 0 ? '' : _ref$prevAriaLabel,
      _ref$prevLabel = _ref.prevLabel,
      prevLabel = _ref$prevLabel === void 0 ? '‹' : _ref$prevLabel,
      setActiveStartDate = _ref.setActiveStartDate,
      showDoubleView = _ref.showDoubleView,
      view = _ref.view,
      views = _ref.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginPrevious"])(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons && Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginPrevious2"])(view, activeStartDate);
  var nextActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginNext"])(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons && Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginNext2"])(view, activeStartDate);

  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getEndPrevious"])(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getEndPrevious2"])(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  function renderLabel(date) {
    var label = function () {
      switch (view) {
        case 'century':
          return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getCenturyLabel"])(locale, formatYear, date);

        case 'decade':
          return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getDecadeLabel"])(locale, formatYear, date);

        case 'year':
          return formatYear(locale, date);

        case 'month':
          return formatMonthYear(locale, date);

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();

    return navigationLabel ? navigationLabel({
      date: date,
      label: label,
      locale: locale || Object(get_user_locale__WEBPACK_IMPORTED_MODULE_2__["getUserLocale"])(),
      view: view
    }) : label;
  }

  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      "aria-label": navigationAriaLabel,
      className: labelClassName,
      disabled: !drillUpAvailable,
      onClick: drillUp,
      style: {
        flexGrow: 1
      },
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from")
    }, renderLabel(activeStartDate)), showDoubleView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "".concat(labelClassName, "__divider")
    }, ' ', "\u2013", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to")
    }, renderLabel(nextActiveStartDate))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    style: {
      display: 'flex'
    }
  }, prev2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": prev2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button"
  }, prev2Label), prevLabel !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": prevAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button"
  }, prevLabel), renderButton(), nextLabel !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": nextAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button"
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": next2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button"
  }, next2Label));
}
Navigation.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  drillUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  navigationAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  navigationLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  next2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  nextAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  prev2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prev2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  prevAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  setActiveStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showDoubleView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["isView"].isRequired,
  views: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["isViews"].isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenturyView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView/Decades */ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js");


function CenturyView(props) {
  function renderDecades() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decade.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Decade; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__century-view__decades__decade';
function Decade(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatYear"] : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDecadeEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDecadeStart"],
    view: "century"
  }), Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getDecadeLabel"])(locale, formatYear, date));
}
Decade.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileProps"]), {}, {
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decades.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Decades; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Decade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decade */ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getBeginOfCenturyYear"])(activeStartDate);
  var end = start + 99;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    className: "react-calendar__century-view__decades",
    dateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__["getDecadeStart"],
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: _Decade__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
}
Decades.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DecadeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecadeView/Years */ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js");


function DecadeView(props) {
  function renderYears() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Year.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Year; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__decade-view__years__year';
function Year(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatYear"] : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYearEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYearStart"],
    view: "decade"
  }), formatYear(locale, date));
}
Year.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileProps"]), {}, {
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Years.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Years; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Year */ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginOfDecadeYear"])(activeStartDate);
  var end = start + 9;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      return new Date(year, 0, 1);
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
}
Years.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Flex.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Flex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function toPercent(num) {
  return "".concat(num, "%");
}

function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap'
    }, style)
  }, otherProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}
Flex.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])),
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonthView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MonthView_Days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonthView/Days */ "./node_modules/react-calendar/dist/esm/MonthView/Days.js");
/* harmony import */ var _MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthView/Weekdays */ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js");
/* harmony import */ var _MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView/WeekNumbers */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js");
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function getCalendarTypeFromLocale(locale) {
  return Object.keys(_shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPE_LOCALES"]).find(function (calendarType) {
    return _shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPE_LOCALES"][calendarType].includes(locale);
  }) || _shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPES"].ISO_8601;
}

function MonthView(props) {
  var activeStartDate = props.activeStartDate,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var _props$calendarType = props.calendarType,
      calendarType = _props$calendarType === void 0 ? getCalendarTypeFromLocale(locale) : _props$calendarType,
      formatShortWeekday = props.formatShortWeekday,
      onClickWeekNumber = props.onClickWeekNumber,
      showWeekNumbers = props.showWeekNumbers,
      childProps = _objectWithoutProperties(props, ["calendarType", "formatShortWeekday", "onClickWeekNumber", "showWeekNumbers"]);

  function renderWeekdays() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__["default"], {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }

  function renderDays() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_Days__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      calendarType: calendarType
    }, childProps));
  }

  var className = 'react-calendar__month-view';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, renderWeekNumbers(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flexGrow: 1,
      width: '100%'
    }
  }, renderWeekdays(), renderDays())));
}
MonthView.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"],
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showWeekNumbers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Day.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Day.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Day; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__month-view__days__day';
function Day(_ref) {
  var _ref$formatLongDate = _ref.formatLongDate,
      formatLongDate = _ref$formatLongDate === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatLongDate"] : _ref$formatLongDate,
      calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      otherProps = _objectWithoutProperties(_ref, ["formatLongDate", "calendarType", "classes", "currentMonthIndex"]);

  var date = otherProps.date;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className, Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["isWeekend"])(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    formatAbbr: formatLongDate,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDayEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDayStart"],
    view: "month"
  }), Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDate"])(date));
}
Day.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileProps"]), {}, {
  currentMonthIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  formatLongDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Days.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Days.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Days; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Day */ "./node_modules/react-calendar/dist/esm/MonthView/Day.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Days(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType;

  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
      showNeighboringMonth = props.showNeighboringMonth,
      otherProps = _objectWithoutProperties(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */

  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */

  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    var daysInMonth = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDaysInMonth"])(activeStartDate);

    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }

    return daysInMonth;
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    className: "react-calendar__month-view__days",
    count: 7,
    currentMonthIndex: monthIndex,
    dateTransform: function dateTransform(day) {
      var date = new Date();
      date.setFullYear(year, monthIndex, day);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "day",
    end: end,
    offset: offset,
    start: start,
    tile: _Day__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
}
Days.propTypes = _objectSpread({
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNeighboringMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekNumber; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  var props = {
    className: 'react-calendar__tile',
    style: {
      flexGrow: 1
    }
  };
  var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, weekNumber);
  return onClickWeekNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, props, {
    onClick: function onClick(event) {
      return onClickWeekNumber(weekNumber, date, event);
    },
    type: "button"
  }), children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, children);
}
WeekNumber.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  weekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _WeekNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeekNumber */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType,
      onClickWeekNumber = props.onClickWeekNumber,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    var numberOfDays = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDaysInMonth"])(activeStartDate);
    var startWeekday = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();

  var dates = function () {
    var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
    var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(activeStartDate);
    var day = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDate"])(activeStartDate);
    var result = [];

    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getBeginOfWeek"])(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }();

  var weekNumbers = dates.map(function (date) {
    return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getWeekNumber"])(date, calendarType);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WeekNumber__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}
WeekNumbers.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekdays; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







var className = 'react-calendar__month-view__weekdays';
function Weekdays(props) {
  var calendarType = props.calendarType,
      _props$formatShortWee = props.formatShortWeekday,
      formatShortWeekday = _props$formatShortWee === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatShortWeekday"] : _props$formatShortWee,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthStart"])(anyDate);
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(beginOfMonth);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(beginOfMonth);
  var weekdays = [];

  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getDayOfWeek"])(beginOfMonth, calendarType));
    var abbr = Object(_shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatWeekday"])(locale, weekdayDate);
    weekdays.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: weekday,
      className: "".concat(className, "__weekday")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}
Weekdays.propTypes = {
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Tile.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Tile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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






function getValue(nextProps, prop) {
  var activeStartDate = nextProps.activeStartDate,
      date = nextProps.date,
      view = nextProps.view;
  return typeof prop === 'function' ? prop({
    activeStartDate: activeStartDate,
    date: date,
    view: view
  }) : prop;
}

var Tile = /*#__PURE__*/function (_Component) {
  _inherits(Tile, _Component);

  var _super = _createSuper(Tile);

  function Tile() {
    var _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeStartDate = _this$props.activeStartDate,
          children = _this$props.children,
          classes = _this$props.classes,
          date = _this$props.date,
          formatAbbr = _this$props.formatAbbr,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxDateTransform = _this$props.maxDateTransform,
          minDate = _this$props.minDate,
          minDateTransform = _this$props.minDateTransform,
          onClick = _this$props.onClick,
          onMouseOver = _this$props.onMouseOver,
          style = _this$props.style,
          tileDisabled = _this$props.tileDisabled,
          view = _this$props.view;
      var _this$state = this.state,
          tileClassName = _this$state.tileClassName,
          tileContent = _this$state.tileContent;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_2__["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate: activeStartDate,
          date: date,
          view: view
        }),
        onClick: onClick && function (event) {
          return onClick(date, event);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        style: style,
        type: "button"
      }, formatAbbr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
      }, children) : children, tileContent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent;
      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = getValue(nextProps, tileClassName);
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = getValue(nextProps, tileContent);
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Tile.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__["tileProps"]), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  formatAbbr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  maxDateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  minDateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/TileGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/TileGroup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TileGroup(_ref) {
  var className = _ref.className,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 3 : _ref$count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tile, _extends({
      key: date.getTime(),
      classes: Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getTileClasses"])({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}
TileGroup.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__["tileGroupProps"]), {}, {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YearView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _YearView_Months__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearView/Months */ "./node_modules/react-calendar/dist/esm/YearView/Months.js");


function YearView(props) {
  function renderMonths() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YearView_Months__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Month.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Month.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Month; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__year-view__months__month';
function Month(_ref) {
  var classes = _ref.classes,
      _ref$formatMonth = _ref.formatMonth,
      formatMonth = _ref$formatMonth === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonth"] : _ref$formatMonth,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonthYear"] : _ref$formatMonthYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatMonth", "formatMonthYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    formatAbbr: formatMonthYear,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthStart"],
    view: "year"
  }), formatMonth(locale, date));
}
Month.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileProps"]), {}, {
  formatMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Months.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Months.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Months; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Month */ "./node_modules/react-calendar/dist/esm/YearView/Month.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      return new Date(year, monthIndex, 1);
    },
    dateType: "month",
    end: end,
    start: start,
    tile: _Month__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
}
Months.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileGroupProps"]), {}, {
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/index.js ***!
  \*******************************************************/
/*! exports provided: default, Calendar, CenturyView, DecadeView, YearView, MonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./node_modules/react-calendar/dist/esm/Calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenturyView", function() { return _CenturyView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecadeView", function() { return _DecadeView__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearView", function() { return _YearView__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthView", function() { return _MonthView__WEBPACK_IMPORTED_MODULE_4__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_Calendar__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/const.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/const.js ***!
  \**************************************************************/
/*! exports provided: CALENDAR_TYPES, CALENDAR_TYPE_LOCALES, WEEKDAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_TYPES", function() { return CALENDAR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_TYPE_LOCALES", function() { return CALENDAR_TYPE_LOCALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAYS", function() { return WEEKDAYS; });
var _CALENDAR_TYPE_LOCALE;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CALENDAR_TYPES = {
  ARABIC: 'Arabic',
  HEBREW: 'Hebrew',
  ISO_8601: 'ISO 8601',
  US: 'US'
};
var CALENDAR_TYPE_LOCALES = (_CALENDAR_TYPE_LOCALE = {}, _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.US, ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.ARABIC, [// ar-LB, ar-MA intentionally missing
'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.HEBREW, ['he', 'he-IL']), _CALENDAR_TYPE_LOCALE);
var WEEKDAYS = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dateFormatter.js ***!
  \**********************************************************************/
/*! exports provided: formatDate, formatLongDate, formatMonth, formatMonthYear, formatYear, formatShortWeekday, formatWeekday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLongDate", function() { return formatLongDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonth", function() { return formatMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonthYear", function() { return formatMonthYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatYear", function() { return formatYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatShortWeekday", function() { return formatShortWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWeekday", function() { return formatWeekday; });
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");


function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || Object(get_user_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatYear = getSafeFormatter(formatYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dates.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dates.js ***!
  \**************************************************************/
/*! exports provided: getDayOfWeek, getBeginOfCenturyYear, getBeginOfDecadeYear, getBeginOfWeek, getWeekNumber, getBegin, getBeginPrevious, getBeginNext, getBeginPrevious2, getBeginNext2, getEnd, getEndPrevious, getEndPrevious2, getRange, getValueRange, getCenturyLabel, getDecadeLabel, isWeekend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfWeek", function() { return getDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfCenturyYear", function() { return getBeginOfCenturyYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfDecadeYear", function() { return getBeginOfDecadeYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfWeek", function() { return getBeginOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekNumber", function() { return getWeekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBegin", function() { return getBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginPrevious", function() { return getBeginPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginNext", function() { return getBeginNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginPrevious2", function() { return getBeginPrevious2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginNext2", function() { return getBeginNext2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnd", function() { return getEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndPrevious", function() { return getEndPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndPrevious2", function() { return getEndPrevious2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return getRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueRange", function() { return getValueRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyLabel", function() { return getCenturyLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeLabel", function() { return getDecadeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeekend", function() { return isWeekend; });
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");



var SUNDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][0];
var FRIDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][5];
var SATURDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][6];
/* Simple getters - getting a property of a given point in time */

function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ARABIC:
      return (weekday + 1) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].HEBREW:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US:
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */

function getBeginOfCenturyYear(date) {
  var beginOfCentury = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyStart"])(date);
  return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(beginOfCentury);
}
/**
 * Decade
 */

function getBeginOfDecadeYear(date) {
  var beginOfDecade = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeStart"])(date);
  return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(beginOfDecade);
}
/**
 * Week
 */

/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var calendarTypeForWeekNumber = calendarType === _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US ? _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */

/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthStart"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextMonthStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeStart"])(date, -100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearStart"])(date, -10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthStart"])(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextDecadeStart"])(date, 100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextYearStart"])(date, 10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextMonthStart"])(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyEnd"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeEnd"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearEnd"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthEnd"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayEnd"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousCenturyEnd"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeEnd"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearEnd"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthEnd"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeEnd"])(date, -100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearEnd"])(date, -10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthEnd"])(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyRange"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeRange"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearRange"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthRange"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayRange"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */

function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}

function toYearLabel(locale) {
  var formatYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dateFormatter__WEBPACK_IMPORTED_MODULE_2__["formatYear"];
  var dates = arguments.length > 2 ? arguments[2] : undefined;
  return dates.map(function (date) {
    return formatYear(locale, date);
  }).join(' – ');
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyRange"])(date));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */

function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeRange"])(date));
}
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */

function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ARABIC:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US:
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/propTypes.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/propTypes.js ***!
  \******************************************************************/
/*! exports provided: isCalendarType, isClassName, isMinDate, isMaxDate, isRef, isValue, isViews, isView, tileGroupProps, tileProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCalendarType", function() { return isCalendarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassName", function() { return isClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMinDate", function() { return isMinDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaxDate", function() { return isMaxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValue", function() { return isValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViews", function() { return isViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isView", function() { return isView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileGroupProps", function() { return tileGroupProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileProps", function() { return tileProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var calendarTypes = Object.values(_const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"]);
var allViews = ['century', 'decade', 'year', 'month'];
var isCalendarType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(calendarTypes);
var isClassName = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)]);
var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var maxDate = props.maxDate;

  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }

  return null;
};
var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var minDate = props.minDate;

  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }

  return null;
};
var isRef = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  // eslint-disable-next-line react/forbid-prop-types
  current: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
})]);
var isValue = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date))]);
var isViews = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(allViews));
var isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;
  var allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  } // Everything is fine


  return null;
};

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];

  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date),
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
  value: isValue,
  valueType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
var tileProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])),
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
  tileDisabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/utils.js ***!
  \**************************************************************/
/*! exports provided: between, isValueWithinRange, isRangeWithinRange, doRangesOverlap, getTileClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueWithinRange", function() { return isValueWithinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeWithinRange", function() { return isRangeWithinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRangesOverlap", function() { return doRangesOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileClasses", function() { return getTileClasses; });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */

function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}

function getRangeClassNames(valueRange, dateRange, baseClassName) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];

  if (isRange) {
    classes.push(baseClassName);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

    if (isRangeStart) {
      classes.push("".concat(baseClassName, "Start"));
    }

    if (isRangeEnd) {
      classes.push("".concat(baseClassName, "End"));
    }

    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName, "BothEnds"));
    }
  }

  return classes;
}

function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!(date instanceof Array) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = date instanceof Array ? date : Object(_dates__WEBPACK_IMPORTED_MODULE_0__["getRange"])(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }

  if (!value) {
    return classes;
  }

  if (!(value instanceof Array) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = value instanceof Array ? value : Object(_dates__WEBPACK_IMPORTED_MODULE_0__["getRange"])(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  }

  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
  classes.push.apply(classes, _toConsumableArray(valueRangeClassNames));

  if (hover) {
    var hoverRange = hover > valueRange[1] ? [valueRange[1], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
    classes.push.apply(classes, _toConsumableArray(hoverRangeClassNames));
  }

  return classes;
}

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/react-date-picker/dist/Divider.js"));

var _DayInput = _interopRequireDefault(__webpack_require__(/*! ./DateInput/DayInput */ "./node_modules/react-date-picker/dist/DateInput/DayInput.js"));

var _MonthInput = _interopRequireDefault(__webpack_require__(/*! ./DateInput/MonthInput */ "./node_modules/react-date-picker/dist/DateInput/MonthInput.js"));

var _MonthSelect = _interopRequireDefault(__webpack_require__(/*! ./DateInput/MonthSelect */ "./node_modules/react-date-picker/dist/DateInput/MonthSelect.js"));

var _YearInput = _interopRequireDefault(__webpack_require__(/*! ./DateInput/YearInput */ "./node_modules/react-date-picker/dist/DateInput/YearInput.js"));

var _NativeInput = _interopRequireDefault(__webpack_require__(/*! ./DateInput/NativeInput */ "./node_modules/react-date-picker/dist/DateInput/NativeInput.js"));

var _dateFormatter = __webpack_require__(/*! ./shared/dateFormatter */ "./node_modules/react-date-picker/dist/shared/dateFormatter.js");

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-date-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-date-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultMinDate = new Date('0001-01-01');
var defaultMaxDate = new Date(8.64e15);
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
}
/**
 * Returns value type that can be returned with currently applied settings.
 */


function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = value instanceof Array && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = new Date(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueDate;
}

function getDetailValue(_ref, index) {
  var value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      maxDetail = _ref.maxDetail;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  var valueType = getValueType(maxDetail);
  var detailValueFrom = [_dates.getBegin, _dates.getEnd][index](valueType, valuePiece);
  return (0, _utils.between)(detailValueFrom, minDate, maxDate);
}

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

var getDetailValueArray = function getDetailValueArray(args) {
  var value = args.value;

  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};

function isInternalInput(element) {
  return element.getAttribute('data-input') === 'true';
}

function findInput(element, property) {
  var nextElement = element;

  do {
    nextElement = nextElement[property];
  } while (nextElement && !isInternalInput(nextElement));

  return nextElement;
}

function focus(element) {
  if (element) {
    element.focus();
  }
}

function _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
    return "".concat(el, "+");
  }).join('|'), 'g');
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function (arr, element, index) {
    var divider = element &&
    /*#__PURE__*/
    // eslint-disable-next-line react/no-array-index-key
    _react["default"].createElement(_Divider["default"], {
      key: "separator_".concat(index)
    }, element);

    var res = [].concat(_toConsumableArray(arr), [divider]);
    var currentMatch = matches && matches[index];

    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
        return currentMatch.match(elementFunction);
      })];

      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch, index));
        usedFunctions.push(renderFunction);
      }
    }

    return res;
  }, []);
}

var DateInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateInput, _PureComponent);

  var _super = _createSuper(DateInput);

  function DateInput() {
    var _this;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      year: null,
      month: null,
      day: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      if (event.target === event.currentTarget) {
        // Wrapper was directly clicked
        var firstInput = event.target.children[1];
        focus(firstInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case _this.divider:
          {
            event.preventDefault();
            var input = event.target;
            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      var key = event.key,
          input = event.target;
      var isNumberKey = !isNaN(parseInt(key, 10));

      if (!isNumberKey) {
        return;
      }

      var value = input.value;
      var max = input.getAttribute('max');
      /**
       * Given 1, the smallest possible number the user could type by adding another digit is 10.
       * 10 would be a valid value given max = 12, so we won't jump to the next input.
       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
       * this field doesn't make sense.
       */

      if (value * 10 > max || value.length >= max.length) {
        var property = 'nextElementSibling';
        var nextInput = findInput(input, property);
        focus(nextInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(_defineProperty({}, name, value ? parseInt(value, 10) : null), _this.onChangeExternal);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      if (!onChange) {
        return;
      }

      var processedValue = function () {
        if (!value) {
          return null;
        }

        var _value$split = value.split('-'),
            _value$split2 = _slicedToArray(_value$split, 3),
            yearString = _value$split2[0],
            monthString = _value$split2[1],
            dayString = _value$split2[2];

        var year = parseInt(yearString, 10);
        var monthIndex = parseInt(monthString, 10) - 1 || 0;
        var day = parseInt(dayString, 10) || 1;
        var proposedValue = new Date();
        proposedValue.setFullYear(year, monthIndex, day);
        proposedValue.setHours(0, 0, 0, 0);
        return proposedValue;
      }();

      onChange(processedValue, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
      var onChange = _this.props.onChange;

      if (!onChange) {
        return;
      }

      var formElements = [_this.dayInput, _this.monthInput, _this.yearInput].filter(Boolean);
      var values = {};
      formElements.forEach(function (formElement) {
        values[formElement.name] = formElement.value;
      });

      if (formElements.every(function (formElement) {
        return !formElement.value;
      })) {
        onChange(null, false);
      } else if (formElements.every(function (formElement) {
        return formElement.value && formElement.validity.valid;
      })) {
        var year = parseInt(values.year, 10);
        var monthIndex = parseInt(values.month, 10) - 1 || 0;
        var day = parseInt(values.day || 1, 10);
        var proposedValue = new Date();
        proposedValue.setFullYear(year, monthIndex, day);
        proposedValue.setHours(0, 0, 0, 0);

        var processedValue = _this.getProcessedValue(proposedValue);

        onChange(processedValue, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDay", function (currentMatch, index) {
      var _this$props = _this.props,
          autoFocus = _this$props.autoFocus,
          dayAriaLabel = _this$props.dayAriaLabel,
          dayPlaceholder = _this$props.dayPlaceholder,
          showLeadingZeros = _this$props.showLeadingZeros;
      var _this$state = _this.state,
          day = _this$state.day,
          month = _this$state.month,
          year = _this$state.year;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_DayInput["default"], _extends({
        key: "day"
      }, _this.commonInputProps, {
        ariaLabel: dayAriaLabel,
        autoFocus: index === 0 && autoFocus,
        month: month,
        placeholder: dayPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: day,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonth", function (currentMatch, index) {
      var _this$props2 = _this.props,
          autoFocus = _this$props2.autoFocus,
          locale = _this$props2.locale,
          monthAriaLabel = _this$props2.monthAriaLabel,
          monthPlaceholder = _this$props2.monthPlaceholder,
          showLeadingZeros = _this$props2.showLeadingZeros;
      var _this$state2 = _this.state,
          month = _this$state2.month,
          year = _this$state2.year;

      if (currentMatch && currentMatch.length > 4) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      if (currentMatch.length > 2) {
        return /*#__PURE__*/_react["default"].createElement(_MonthSelect["default"], _extends({
          key: "month"
        }, _this.commonInputProps, {
          ariaLabel: monthAriaLabel,
          autoFocus: index === 0 && autoFocus,
          locale: locale,
          placeholder: monthPlaceholder,
          "short": currentMatch.length === 3,
          value: month,
          year: year
        }));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_MonthInput["default"], _extends({
        key: "month"
      }, _this.commonInputProps, {
        ariaLabel: monthAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: monthPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: month,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderYear", function (currentMatch, index) {
      var _this$props3 = _this.props,
          autoFocus = _this$props3.autoFocus,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var year = _this.state.year;
      return /*#__PURE__*/_react["default"].createElement(_YearInput["default"], _extends({
        key: "year"
      }, _this.commonInputProps, {
        ariaLabel: yearAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: yearPlaceholder,
        value: year,
        valueType: _this.valueType
      }));
    });

    return _this;
  }

  _createClass(DateInput, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          maxDetail = _this$props4.maxDetail,
          returnValue = _this$props4.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
      });
    }
  }, {
    key: "renderCustomInputs",
    value: function renderCustomInputs() {
      var placeholder = this.placeholder;
      var format = this.props.format;
      var elementFunctions = {
        d: this.renderDay,
        M: this.renderMonth,
        y: this.renderYear
      };
      var allowMultipleInstances = typeof format !== 'undefined';
      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
  }, {
    key: "renderNativeInput",
    value: function renderNativeInput() {
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate,
          name = _this$props5.name,
          nativeInputAriaLabel = _this$props5.nativeInputAriaLabel,
          required = _this$props5.required;
      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement(_NativeInput["default"], {
        key: "date",
        ariaLabel: nativeInputAriaLabel,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        name: name,
        onChange: this.onChangeNative,
        required: required,
        value: value,
        valueType: this.valueType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      /* eslint-disable jsx-a11y/click-events-have-key-events */

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onClick: this.onClick
      }, this.renderNativeInput(), this.renderCustomInputs());
    }
  }, {
    key: "formatDate",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      var options = {
        year: 'numeric'
      };
      var level = allViews.indexOf(maxDetail);

      if (level >= 2) {
        options.month = 'numeric';
      }

      if (level >= 3) {
        options.day = 'numeric';
      }

      return (0, _dateFormatter.getFormatter)(options);
    }
  }, {
    key: "divider",
    get: function get() {
      return this.placeholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "placeholder",
    get: function get() {
      var _this$props6 = this.props,
          format = _this$props6.format,
          locale = _this$props6.locale;

      if (format) {
        return format;
      }

      var year = 2017;
      var monthIndex = 11;
      var day = 11;
      var date = new Date(year, monthIndex, day);
      var formattedDate = this.formatDate(locale, date);
      var datePieces = ['year', 'month', 'day'];
      var datePieceReplacements = ['y', 'M', 'd'];

      function formatDatePiece(name, dateToFormat) {
        return (0, _dateFormatter.getFormatter)(_defineProperty({
          useGrouping: false
        }, name, 'numeric'))(locale, dateToFormat).match(/\d{1,}/);
      }

      var placeholder = formattedDate;
      datePieces.forEach(function (datePiece, index) {
        var formattedDatePiece = formatDatePiece(datePiece, date);
        var datePieceReplacement = datePieceReplacements[index];
        placeholder = placeholder.replace(formattedDatePiece, datePieceReplacement);
      });
      return placeholder;
    }
  }, {
    key: "commonInputProps",
    get: function get() {
      var _this2 = this;

      var _this$props7 = this.props,
          className = _this$props7.className,
          disabled = _this$props7.disabled,
          isCalendarOpen = _this$props7.isCalendarOpen,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          required = _this$props7.required;
      return {
        className: className,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        // This is only for showing validity when editing
        required: required || isCalendarOpen,
        itemRef: function itemRef(ref, name) {
          // Save a reference to each input field
          _this2["".concat(name, "Input")] = ref;
        }
      };
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          maxDetail = nextProps.maxDetail;
      var nextState = {};
      /**
       * If isCalendarOpen flag has changed, we have to update it.
       * It's saved in state purely for use in getDerivedStateFromProps.
       */

      if (nextProps.isCalendarOpen !== prevState.isCalendarOpen) {
        nextState.isCalendarOpen = nextProps.isCalendarOpen;
      }
      /**
       * If the next value is different from the current one  (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var nextValue = getDetailValueFrom({
        value: nextProps.value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
      });
      var values = [nextValue, prevState.value];

      if ( // Toggling calendar visibility resets values
      nextState.isCalendarOpen // Flag was toggled
      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueFrom({
          value: value,
          minDate: minDate,
          maxDate: maxDate,
          maxDetail: maxDetail
        });
      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueTo({
          value: value,
          minDate: minDate,
          maxDate: maxDate,
          maxDetail: maxDetail
        });
      })))) {
        if (nextValue) {
          nextState.year = (0, _dateUtils.getYear)(nextValue);
          nextState.month = (0, _dateUtils.getMonthHuman)(nextValue);
          nextState.day = (0, _dateUtils.getDate)(nextValue);
        } else {
          nextState.year = null;
          nextState.month = null;
          nextState.day = null;
        }

        nextState.value = nextValue;
      }

      return nextState;
    }
  }]);

  return DateInput;
}(_react.PureComponent);

exports["default"] = DateInput;
DateInput.defaultProps = {
  maxDetail: 'month',
  name: 'date',
  returnValue: 'start'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DateInput.propTypes = {
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string.isRequired,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  isCalendarOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: _propTypes2.isMinDate,
  monthAriaLabel: _propTypes["default"].string,
  monthPlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/DayInput.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/DayInput.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DayInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-date-picker/dist/DateInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-date-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DayInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      month = _ref.month,
      year = _ref.year,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "month", "year"]);

  var currentMonthMaxDays = function () {
    if (!month) {
      return 31;
    }

    return (0, _dateUtils.getDaysInMonth)(new Date(year, month - 1, 1));
  }();

  function isSameMonth(date) {
    return date && year === (0, _dateUtils.getYear)(date) && month === (0, _dateUtils.getMonthHuman)(date);
  }

  var maxDay = (0, _utils.safeMin)(currentMonthMaxDays, isSameMonth(maxDate) && (0, _dateUtils.getDate)(maxDate));
  var minDay = (0, _utils.safeMax)(1, isSameMonth(minDate) && (0, _dateUtils.getDate)(minDate));
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    max: maxDay,
    min: minDay,
    name: "day"
  }, otherProps));
}

DayInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  month: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/Input.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/Input.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _updateInputWidth = _interopRequireWildcard(__webpack_require__(/*! update-input-width */ "./node_modules/update-input-width/dist/esm/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable jsx-a11y/no-autofocus */
var isEdgeLegacy = typeof window !== 'undefined' && 'navigator' in window && navigator.userAgent.match(/ Edge\/1/);

function onFocus(event) {
  var target = event.target;

  if (isEdgeLegacy) {
    requestAnimationFrame(function () {
      return target.select();
    });
  } else {
    target.select();
  }
}

function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }

  var font = (0, _updateInputWidth.getFontShorthand)(element);

  if (!font) {
    return;
  }

  var isFontLoaded = document.fonts.check(font);

  if (isFontLoaded) {
    return;
  }

  function onLoadingDone() {
    (0, _updateInputWidth["default"])(element);
  }

  document.fonts.addEventListener('loadingdone', onLoadingDone);
}

function getSelectionString() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.getSelection().toString();
}

function makeOnKeyPress(maxLength) {
  return function onKeyPress(event) {
    var key = event.key,
        input = event.target;
    var value = input.value;
    var isNumberKey = !isNaN(parseInt(key, 10));
    var selection = getSelectionString();

    if (isNumberKey && (selection || value.length < maxLength)) {
      return;
    }

    event.preventDefault();
  };
}

function Input(_ref) {
  var ariaLabel = _ref.ariaLabel,
      autoFocus = _ref.autoFocus,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      nameForClass = _ref.nameForClass,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      _onKeyUp = _ref.onKeyUp,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
      required = _ref.required,
      showLeadingZeros = _ref.showLeadingZeros,
      step = _ref.step,
      value = _ref.value;
  var hasLeadingZero = showLeadingZeros && value !== null && value < 10;
  var maxLength = max.toString().length;
  return [hasLeadingZero && /*#__PURE__*/_react["default"].createElement("span", {
    key: "leadingZero",
    className: "".concat(className, "__leadingZero")
  }, "0"), /*#__PURE__*/_react["default"].createElement("input", {
    key: "input",
    "aria-label": ariaLabel,
    autoComplete: "off",
    autoFocus: autoFocus,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
    "data-input": "true",
    disabled: disabled,
    inputMode: "numeric",
    max: max,
    min: min,
    name: name,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    onKeyPress: makeOnKeyPress(maxLength),
    onKeyUp: function onKeyUp(event) {
      (0, _updateInputWidth["default"])(event.target);

      if (_onKeyUp) {
        _onKeyUp(event);
      }
    },
    placeholder: placeholder,
    ref: function ref(_ref2) {
      if (_ref2) {
        (0, _updateInputWidth["default"])(_ref2);
        updateInputWidthOnFontLoad(_ref2);
      }

      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    step: step,
    type: "number",
    value: value !== null ? value : ''
  })];
}

Input.propTypes = {
  ariaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  name: _propTypes["default"].string,
  nameForClass: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/MonthInput.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/MonthInput.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-date-picker/dist/DateInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-date-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MonthInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      year = _ref.year,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "year"]);

  function isSameYear(date) {
    return date && year === (0, _dateUtils.getYear)(date);
  }

  var maxMonth = (0, _utils.safeMin)(12, isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
  var minMonth = (0, _utils.safeMax)(1, isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    max: maxMonth,
    min: minMonth,
    name: "month"
  }, otherProps));
}

MonthInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/MonthSelect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/MonthSelect.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthSelect;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-date-picker/dist/shared/dateFormatter.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-date-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MonthSelect(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
      _short = _ref["short"],
      value = _ref.value,
      year = _ref.year,
      otherProps = _objectWithoutProperties(_ref, ["ariaLabel", "className", "itemRef", "locale", "maxDate", "minDate", "placeholder", "short", "value", "year"]);

  function isSameYear(date) {
    return date && year === (0, _dateUtils.getYear)(date);
  }

  var maxMonth = (0, _utils.safeMin)(12, isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
  var minMonth = (0, _utils.safeMax)(1, isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));

  var dates = _toConsumableArray(Array(12)).map(function (el, index) {
    return new Date(2019, index, 1);
  });

  var name = 'month';
  var formatter = _short ? _dateFormatter.formatShortMonth : _dateFormatter.formatMonth;
  return /*#__PURE__*/_react["default"].createElement("select", _extends({
    "aria-label": ariaLabel,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
    "data-input": "true",
    name: name,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    value: value !== null ? value : ''
  }, otherProps), !value && /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder), dates.map(function (date) {
    var month = (0, _dateUtils.getMonthHuman)(date);
    var disabled = month < minMonth || month > maxMonth;
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: month,
      disabled: disabled,
      value: month
    }, formatter(locale, date));
  }));
}

MonthSelect.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  "short": _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/NativeInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/NativeInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NativeInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NativeInput(_ref) {
  var ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeInputType = function () {
    switch (valueType) {
      case 'decade':
      case 'year':
        return 'number';

      case 'month':
        return 'month';

      case 'day':
        return 'date';

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var nativeValueParser = function () {
    switch (valueType) {
      case 'century':
      case 'decade':
      case 'year':
        return _dateUtils.getYear;

      case 'month':
        return _dateUtils.getISOLocalMonth;

      case 'day':
        return _dateUtils.getISOLocalDate;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return /*#__PURE__*/_react["default"].createElement("input", {
    "aria-label": ariaLabel,
    disabled: disabled,
    max: maxDate ? nativeValueParser(maxDate) : null,
    min: minDate ? nativeValueParser(minDate) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      zIndex: '-999'
    },
    type: nativeInputType,
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DateInput/YearInput.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DateInput/YearInput.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = YearInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-date-picker/dist/DateInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-date-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function YearInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '----' : _ref$placeholder,
      valueType = _ref.valueType,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "placeholder", "valueType"]);

  var maxYear = (0, _utils.safeMin)(275760, maxDate && (0, _dateUtils.getYear)(maxDate));
  var minYear = (0, _utils.safeMax)(1, minDate && (0, _dateUtils.getYear)(minDate));

  var yearStep = function () {
    if (valueType === 'century') {
      return 10;
    }

    return 1;
  }();

  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    max: maxYear,
    min: minYear,
    name: "year",
    placeholder: placeholder,
    step: yearStep
  }, otherProps));
}

YearInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  valueType: _propTypes2.isValueType
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DatePicker.css":
/*!************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DatePicker.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-date-picker/dist/DatePicker.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-date-picker/dist/DatePicker.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _makeEventProps = _interopRequireDefault(__webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _reactCalendar = _interopRequireDefault(__webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js"));

var _reactFit = _interopRequireDefault(__webpack_require__(/*! react-fit */ "./node_modules/react-fit/dist/esm/Fit.js"));

var _DateInput = _interopRequireDefault(__webpack_require__(/*! ./DateInput */ "./node_modules/react-date-picker/dist/DateInput.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-date-picker/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var baseClassName = 'react-date-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];
var allViews = ['century', 'decade', 'year', 'month'];

var DatePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeCalendar();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.closeCalendar;
      var onChange = _this.props.onChange;

      if (closeCalendar) {
        _this.closeCalendar();
      }

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openCalendar();
    });

    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCalendar", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCalendar", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideActionListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          onCalendarClose = _this$props2.onCalendarClose,
          onCalendarOpen = _this$props2.onCalendarOpen;

      if (isOpen !== prevState.isOpen) {
        this.handleOutsideActionListeners();
        var callback = isOpen ? onCalendarOpen : onCalendarClose;
        if (callback) callback();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideActionListeners(false);
    }
  }, {
    key: "handleOutsideActionListeners",
    value: function handleOutsideActionListeners(shouldListen) {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isOpen;
      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
      outsideActionEvents.forEach(function (eventName) {
        return document[fnName](eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          autoFocus = _this$props3.autoFocus,
          calendarAriaLabel = _this$props3.calendarAriaLabel,
          calendarIcon = _this$props3.calendarIcon,
          clearAriaLabel = _this$props3.clearAriaLabel,
          clearIcon = _this$props3.clearIcon,
          dayAriaLabel = _this$props3.dayAriaLabel,
          dayPlaceholder = _this$props3.dayPlaceholder,
          disableCalendar = _this$props3.disableCalendar,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          locale = _this$props3.locale,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          minDate = _this$props3.minDate,
          monthAriaLabel = _this$props3.monthAriaLabel,
          monthPlaceholder = _this$props3.monthPlaceholder,
          name = _this$props3.name,
          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
          required = _this$props3.required,
          returnValue = _this$props3.returnValue,
          showLeadingZeros = _this$props3.showLeadingZeros,
          value = _this$props3.value,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var isOpen = this.state.isOpen;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      var ariaLabelProps = {
        dayAriaLabel: dayAriaLabel,
        monthAriaLabel: monthAriaLabel,
        nativeInputAriaLabel: nativeInputAriaLabel,
        yearAriaLabel: yearAriaLabel
      };
      var placeholderProps = {
        dayPlaceholder: dayPlaceholder,
        monthPlaceholder: monthPlaceholder,
        yearPlaceholder: yearPlaceholder
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, /*#__PURE__*/_react["default"].createElement(_DateInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
        autoFocus: autoFocus,
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isCalendarOpen: isOpen,
        locale: locale,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        name: name,
        onChange: this.onChange,
        required: required,
        returnValue: returnValue,
        showLeadingZeros: showLeadingZeros,
        value: valueFrom
      })), clearIcon !== null && /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": clearAriaLabel,
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), calendarIcon !== null && !disableCalendar && /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": calendarAriaLabel,
        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onBlur: this.resetValue,
        onClick: this.toggleCalendar,
        onFocus: this.stopPropagation,
        type: "button"
      }, calendarIcon));
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var disableCalendar = this.props.disableCalendar;
      var isOpen = this.state.isOpen;

      if (isOpen === null || disableCalendar) {
        return null;
      }

      var _this$props4 = this.props,
          calendarClassName = _this$props4.calendarClassName,
          datePickerClassName = _this$props4.className,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          calendarProps = _objectWithoutProperties(_this$props4, ["calendarClassName", "className", "onChange", "value"]);

      var className = "".concat(baseClassName, "__calendar");
      return /*#__PURE__*/_react["default"].createElement(_reactFit["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'))
      }, /*#__PURE__*/_react["default"].createElement(_reactCalendar["default"], _extends({
        className: calendarClassName,
        onChange: this.onChange,
        value: value || null
      }, calendarProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          disabled = _this$props5.disabled;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this3.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderCalendar());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps["default"])(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

exports["default"] = DatePicker;
var iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
  stroke: 'black',
  strokeWidth: 2
};

var CalendarIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon")
}), /*#__PURE__*/_react["default"].createElement("rect", {
  fill: "none",
  height: "15",
  width: "15",
  x: "2",
  y: "2"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "6",
  x2: "6",
  y1: "0",
  y2: "4"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "13",
  x2: "13",
  y1: "0",
  y2: "4"
}));

var ClearIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "4",
  x2: "15",
  y1: "4",
  y2: "15"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "15",
  x2: "4",
  y1: "4",
  y2: "15"
}));

DatePicker.defaultProps = {
  calendarIcon: CalendarIcon,
  clearIcon: ClearIcon,
  closeCalendar: true,
  isOpen: null,
  returnValue: 'start'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DatePicker.propTypes = {
  autoFocus: _propTypes["default"].bool,
  calendarAriaLabel: _propTypes["default"].string,
  calendarClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  calendarIcon: _propTypes["default"].node,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clearAriaLabel: _propTypes["default"].string,
  clearIcon: _propTypes["default"].node,
  closeCalendar: _propTypes["default"].bool,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disableCalendar: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: _propTypes2.isMinDate,
  monthAriaLabel: _propTypes["default"].string,
  monthPlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onCalendarClose: _propTypes["default"].func,
  onCalendarOpen: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/Divider.js":
/*!********************************************************!*\
  !*** ./node_modules/react-date-picker/dist/Divider.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Divider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "react-date-picker__inputGroup__divider"
  }, children);
}

Divider.propTypes = {
  children: _propTypes["default"].node
};

/***/ }),

/***/ "./node_modules/react-date-picker/dist/entry.js":
/*!******************************************************!*\
  !*** ./node_modules/react-date-picker/dist/entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");

var _DatePicker = _interopRequireDefault(__webpack_require__(/*! ./DatePicker */ "./node_modules/react-date-picker/dist/DatePicker.js"));

__webpack_require__(/*! ./DatePicker.css */ "./node_modules/react-date-picker/dist/DatePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _DatePicker["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-picker/dist/shared/dateFormatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/shared/dateFormatter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = getFormatter;
exports.formatShortMonth = exports.formatMonth = void 0;

var _getUserLocale = _interopRequireDefault(__webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatMonthOptions = {
  month: 'long'
};
var formatShortMonthOptions = {
  month: 'short'
};
var formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
var formatShortMonth = getSafeFormatter(formatShortMonthOptions);
exports.formatShortMonth = formatShortMonth;

/***/ }),

/***/ "./node_modules/react-date-picker/dist/shared/dates.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/shared/dates.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBegin = getBegin;
exports.getEnd = getEnd;

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0, _dateUtils.getCenturyStart)(date);

    case 'decade':
      return (0, _dateUtils.getDecadeStart)(date);

    case 'year':
      return (0, _dateUtils.getYearStart)(date);

    case 'month':
      return (0, _dateUtils.getMonthStart)(date);

    case 'day':
      return (0, _dateUtils.getDayStart)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0, _dateUtils.getCenturyEnd)(date);

    case 'decade':
      return (0, _dateUtils.getDecadeEnd)(date);

    case 'year':
      return (0, _dateUtils.getYearEnd)(date);

    case 'month':
      return (0, _dateUtils.getMonthEnd)(date);

    case 'day':
      return (0, _dateUtils.getDayEnd)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

/***/ }),

/***/ "./node_modules/react-date-picker/dist/shared/propTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/shared/propTypes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMaxDate = exports.isMinDate = exports.isValueType = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var isValueType = _propTypes["default"].oneOf(allValueTypes);

exports.isValueType = isValueType;

var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var maxDate = props.maxDate;

  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }

  return null;
};

exports.isMinDate = isMinDate;

var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var minDate = props.minDate;

  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }

  return null;
};

exports.isMaxDate = isMaxDate;

/***/ }),

/***/ "./node_modules/react-date-picker/dist/shared/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-date-picker/dist/shared/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.between = between;
exports.safeMin = safeMin;
exports.safeMax = safeMax;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}

function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

function safeMin() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
}

function safeMax() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
}

/***/ }),

/***/ "./node_modules/react-fit/dist/esm/Fit.js":
/*!************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/Fit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! detect-element-overflow */ "./node_modules/detect-element-overflow/dist/esm/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-fit/dist/esm/shared/utils.js");
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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var isBrowser = typeof window !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}

function findScrollContainer(element) {
  if (!element) {
    return undefined;
  }

  var parent = element.parentElement;

  while (parent) {
    var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;

    if (overflow.split(' ').every(function (o) {
      return o === 'auto' || o === 'scroll';
    })) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}

function alignAxis(_ref) {
  var axis = _ref.axis,
      container = _ref.container,
      element = _ref.element,
      invertAxis = _ref.invertAxis,
      secondary = _ref.secondary,
      scrollContainer = _ref.scrollContainer,
      spacing = _ref.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  var scrollContainerCollisions = Object(detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__["default"])(parent, scrollContainer);
  var documentCollisions = Object(detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__["default"])(parent, document.documentElement);
  var isX = axis === 'x';
  var startProperty = isX ? 'left' : 'top';
  var endProperty = isX ? 'right' : 'bottom';
  var sizeProperty = isX ? 'width' : 'height';
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var startSpacing = _typeof(spacing) === 'object' ? spacing[startProperty] : spacing;
  var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
  var endSpacing = _typeof(spacing) === 'object' ? spacing[endProperty] : spacing;
  var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;

  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }

  var offsetSize = element[offsetSizeProperty];

  function displayStart() {
    element.style[startProperty] = 'unset';
    element.style[endProperty] = secondary ? '0' : '100%';
  }

  function displayEnd() {
    element.style[startProperty] = secondary ? '0' : '100%';
    element.style[endProperty] = 'unset';
  }

  function displayIfFits(availableSpace, display) {
    var fits = offsetSize <= availableSpace;

    if (fits) {
      display();
    }

    return fits;
  }

  function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  }

  function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  }

  function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

    function shrinkToSize(size) {
      if (minSize && size < minSize) {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      }

      var newSize = Math.max(size, minSize || 0);
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    }

    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  }

  var fits;

  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }

  if (!fits) {
    displayWhereverShrinkedFits();
  }
}

function alignMainAxis(args) {
  alignAxis(args);
}

function alignSecondaryAxis(args) {
  alignAxis(_objectSpread(_objectSpread({}, args), {}, {
    axis: args.axis === 'x' ? 'y' : 'x',
    secondary: true
  }));
}

function alignBothAxis(args) {
  var invertAxis = args.invertAxis,
      invertSecondaryAxis = args.invertSecondaryAxis,
      commonArgs = _objectWithoutProperties(args, ["invertAxis", "invertSecondaryAxis"]);

  alignMainAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertAxis
  }));
  alignSecondaryAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertSecondaryAxis
  }));
}

var Fit = /*#__PURE__*/function (_Component) {
  _inherits(Fit, _Component);

  var _super = _createSuper(Fit);

  function Fit() {
    var _this;

    _classCallCheck(this, Fit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMutation", function () {
      _this.fit();
    });

    _defineProperty(_assertThisInitialized(_this), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

    _defineProperty(_assertThisInitialized(_this), "fit", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          scrollContainer = _assertThisInitialize.scrollContainer,
          container = _assertThisInitialize.container,
          element = _assertThisInitialize.element;

      if (!element) {
        return;
      }

      var elementWidth = element.clientWidth;
      var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

      if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
        return;
      } // Save the dimensions so that we know we don't need to repeat the function if unchanged


      _this.elementWidth = elementWidth;
      _this.elementHeight = elementHeight;
      var parent = container.parentElement; // Container was unmounted

      if (!parent) {
        return;
      }
      /**
       * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var style = window.getComputedStyle(element);
      var position = style.position;

      if (position !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
        element.style.position = 'absolute';
      }
      /**
       * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var parentStyle = window.getComputedStyle(parent);
      var parentPosition = parentStyle.position;

      if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
        parent.style.position = 'relative';
      }

      var _this$props = _this.props,
          invertAxis = _this$props.invertAxis,
          invertSecondaryAxis = _this$props.invertSecondaryAxis,
          mainAxis = _this$props.mainAxis,
          spacing = _this$props.spacing;
      alignBothAxis({
        container: container,
        element: element,
        invertAxis: invertAxis,
        invertSecondaryAxis: invertSecondaryAxis,
        axis: mainAxis,
        scrollContainer: scrollContainer,
        spacing: spacing
      });
    });

    return _this;
  }

  _createClass(Fit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isDisplayContentsSupported) {
        // eslint-disable-next-line react/no-find-dom-node
        var element = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this);
        this.container = element;
        this.element = element;
        this.scrollContainer = findScrollContainer(element);
      }

      this.fit();

      if (isMutationObserverSupported) {
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ['class', 'style']
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);

      if (isDisplayContentsSupported) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(container) {
            _this2.container = container;
            var element = container && container.firstChild;
            _this2.element = element;
            _this2.scrollContainer = findScrollContainer(element);
          },
          style: {
            display: 'contents'
          }
        }, child);
      }

      return child;
    }
  }]);

  return Fit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Fit.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  invertAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  invertSecondaryAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  mainAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['x', 'y']),
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  })])
};
Fit.defaultProps = {
  mainAxis: 'y',
  spacing: 8
};

/***/ }),

/***/ "./node_modules/react-fit/dist/esm/shared/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/shared/utils.js ***!
  \*********************************************************/
/*! exports provided: isProduction, warnOnDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnDev", function() { return warnOnDev; });
/**
 * Checks whether we're running on a production build or not.
 */
var isProduction = "development" === 'production';

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    }

    // eslint-disable-next-line no-console
    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};

/***/ }),

/***/ "./node_modules/update-input-width/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/update-input-width/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: getFontShorthand, measureText, updateInputWidth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontShorthand", function() { return getFontShorthand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureText", function() { return measureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputWidth", function() { return updateInputWidth; });
var allowedVariants = ['normal', 'small-caps'];
/**
 * Gets font CSS shorthand property given element.
 *
 * @param {HTMLElement} element Element to get font CSS shorthand property from
 */

function getFontShorthand(element) {
  var style = window.getComputedStyle(element);

  if (style.font) {
    return style.font;
  }

  var isFontDefined = style['font-family'] !== '';

  if (!isFontDefined) {
    return '';
  }

  var fontVariant = allowedVariants.includes(style['font-variant']) ? style['font-variant'] : 'normal';
  return "".concat(style['font-style'], " ").concat(fontVariant, " ").concat(style['font-weight'], " ").concat(style['font-size'], " / ").concat(style['line-height'], " ").concat(style['font-family']);
}
/**
 * Measures text width given text and font CSS shorthand.
 *
 * @param {String} text Text to measure
 * @param {String} font Font to use when measuring the text
 */

function measureText(text, font) {
  var canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d'); // Context type not supported

  if (!context) {
    return null;
  }

  context.font = font;

  var _context$measureText = context.measureText(text),
      width = _context$measureText.width;

  return Math.ceil(width);
}
/**
 * Updates input element width to fit its content given input element
 * @param {HTMLInputElement} element
 */

function updateInputWidth(element) {
  if (typeof window === 'undefined') {
    return null;
  }

  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);

  if (width === null) {
    return null;
  }

  element.style.width = "".concat(width, "px");
  return width;
}
/* harmony default export */ __webpack_exports__["default"] = (updateInputWidth);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvanRla21hai9kYXRlLXV0aWxzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZXRlY3QtZWxlbWVudC1vdmVyZmxvdy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LXVzZXItbG9jYWxlL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gub25jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFrZS1ldmVudC1wcm9wcy9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZXJnZS1jbGFzcy1uYW1lcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9DYWxlbmRhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DYWxlbmRhci9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DZW50dXJ5Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vQ2VudHVyeVZpZXcvRGVjYWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DZW50dXJ5Vmlldy9EZWNhZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9EZWNhZGVWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9EZWNhZGVWaWV3L1llYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0RlY2FkZVZpZXcvWWVhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vTW9udGhWaWV3L0RheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vTW9udGhWaWV3L0RheXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy9XZWVrTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9Nb250aFZpZXcvV2Vla051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy9XZWVrZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vVGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vVGlsZUdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9ZZWFyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vWWVhclZpZXcvTW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL1llYXJWaWV3L01vbnRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL3NoYXJlZC9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL2RhdGVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL3NoYXJlZC9kYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlSW5wdXQvRGF5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvRGF0ZUlucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC9Nb250aElucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC9Nb250aFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlSW5wdXQvTmF0aXZlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvRGF0ZUlucHV0L1llYXJJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlUGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL2RhdGVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL2RhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L3NoYXJlZC9wcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXQvZGlzdC9lc20vRml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXQvZGlzdC9lc20vc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cGRhdGUtaW5wdXQtd2lkdGgvZGlzdC9lc20vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2Qjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUY7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNlLCtFQUFnQixFIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRQZXJpb2QsIGdldEVkZ2VPZlBlcmlvZCwgZGVmYXVsdE9mZnNldCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWFrZUdldEVkZ2VPZk5laWdoYm9ySW50ZXJuYWwoZGF0ZSkge1xuICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPZmZzZXQ7XG4gICAgdmFyIHByZXZpb3VzUGVyaW9kID0gZ2V0UGVyaW9kKGRhdGUpICsgb2Zmc2V0O1xuICAgIHJldHVybiBnZXRFZGdlT2ZQZXJpb2QocHJldmlvdXNQZXJpb2QpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0RW5kKGdldEJlZ2luT2ZOZXh0UGVyaW9kKSB7XG4gIHJldHVybiBmdW5jdGlvbiBtYWtlR2V0RW5kSW50ZXJuYWwoZGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShnZXRCZWdpbk9mTmV4dFBlcmlvZChkYXRlKS5nZXRUaW1lKCkgLSAxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldFJhbmdlKGZ1bmN0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gbWFrZUdldFJhbmdlSW50ZXJuYWwoZGF0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuKGRhdGUpO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXG4gKiBTaW1wbGUgZ2V0dGVycyAtIGdldHRpbmcgYSBwcm9wZXJ0eSBvZiBhIGdpdmVuIHBvaW50IGluIHRpbWVcbiAqL1xuXG4vKipcbiAqIEdldHMgeWVhciBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfG51bWJlcnxzdHJpbmd9IGRhdGUgRGF0ZSB0byBnZXQgeWVhciBmcm9tLlxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXIoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIHllYXIgPSBwYXJzZUludChkYXRlLCAxMCk7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oeWVhcikpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgeWVhciBmcm9tIGRhdGU6IFwiLmNvbmNhdChkYXRlLCBcIi5cIikpO1xufVxuLyoqXG4gKiBHZXRzIG1vbnRoIGZyb20gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB0byBnZXQgbW9udGggZnJvbS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBtb250aCBmcm9tIGRhdGU6IFwiLmNvbmNhdChkYXRlLCBcIi5cIikpO1xufVxuLyoqXG4gKiBHZXRzIGh1bWFuLXJlYWRhYmxlIG1vbnRoIGZyb20gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB0byBnZXQgaHVtYW4tcmVhZGFibGUgbW9udGggZnJvbS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGhIdW1hbihkYXRlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBodW1hbi1yZWFkYWJsZSBtb250aCBmcm9tIGRhdGU6IFwiLmNvbmNhdChkYXRlLCBcIi5cIikpO1xufVxuLyoqXG4gKiBHZXRzIGh1bWFuLXJlYWRhYmxlIGRheSBvZiB0aGUgbW9udGggZnJvbSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlIHRvIGdldCBkYXkgb2YgdGhlIG1vbnRoIGZyb20uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHllYXIgZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogR2V0cyBob3VycyBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfHN0cmluZ30gZGF0ZSBEYXRlIHRvIGdldCBob3VycyBmcm9tLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycyhkYXRlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGRhdGVQaWVjZXMgPSBkYXRlLnNwbGl0KCc6Jyk7XG5cbiAgICBpZiAoZGF0ZVBpZWNlcy5sZW5ndGggPj0gMikge1xuICAgICAgdmFyIGhvdXJzU3RyaW5nID0gZGF0ZVBpZWNlc1swXTtcbiAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KGhvdXJzU3RyaW5nLCAxMCk7XG5cbiAgICAgIGlmICghaXNOYU4oaG91cnMpKSB7XG4gICAgICAgIHJldHVybiBob3VycztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGhvdXJzIGZyb20gZGF0ZTogXCIuY29uY2F0KGRhdGUsIFwiLlwiKSk7XG59XG4vKipcbiAqIEdldHMgbWludXRlcyBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfHN0cmluZ30gZGF0ZSBEYXRlIHRvIGdldCBtaW51dGVzIGZyb20uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGRhdGVQaWVjZXMgPSBkYXRlLnNwbGl0KCc6Jyk7XG5cbiAgICBpZiAoZGF0ZVBpZWNlcy5sZW5ndGggPj0gMikge1xuICAgICAgdmFyIG1pbnV0ZXNTdHJpbmcgPSBkYXRlUGllY2VzWzFdIHx8IDA7XG4gICAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXNTdHJpbmcsIDEwKTtcblxuICAgICAgaWYgKCFpc05hTihtaW51dGVzKSkge1xuICAgICAgICByZXR1cm4gbWludXRlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG1pbnV0ZXMgZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogR2V0cyBzZWNvbmRzIGZyb20gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8c3RyaW5nfSBkYXRlIERhdGUgdG8gZ2V0IHNlY29uZHMgZnJvbS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vjb25kcyhkYXRlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZGF0ZVBpZWNlcyA9IGRhdGUuc3BsaXQoJzonKTtcblxuICAgIGlmIChkYXRlUGllY2VzLmxlbmd0aCA+PSAyKSB7XG4gICAgICB2YXIgc2Vjb25kc1N0cmluZyA9IGRhdGVQaWVjZXNbMl0gfHwgMDtcbiAgICAgIHZhciBzZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kc1N0cmluZywgMTApO1xuXG4gICAgICBpZiAoIWlzTmFOKHNlY29uZHMpKSB7XG4gICAgICAgIHJldHVybiBzZWNvbmRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgc2Vjb25kcyBmcm9tIGRhdGU6IFwiLmNvbmNhdChkYXRlLCBcIi5cIikpO1xufVxuLyoqXG4gKiBDZW50dXJ5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnR1cnlTdGFydChkYXRlKSB7XG4gIHZhciB5ZWFyID0gZ2V0WWVhcihkYXRlKTtcbiAgdmFyIGNlbnR1cnlTdGFydFllYXIgPSB5ZWFyICsgKC15ZWFyICsgMSkgJSAxMDA7XG4gIHZhciBjZW50dXJ5U3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgY2VudHVyeVN0YXJ0RGF0ZS5zZXRGdWxsWWVhcihjZW50dXJ5U3RhcnRZZWFyLCAwLCAxKTtcbiAgY2VudHVyeVN0YXJ0RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGNlbnR1cnlTdGFydERhdGU7XG59XG5leHBvcnQgdmFyIGdldFByZXZpb3VzQ2VudHVyeVN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldENlbnR1cnlTdGFydCwgLTEwMCk7XG5leHBvcnQgdmFyIGdldE5leHRDZW50dXJ5U3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0Q2VudHVyeVN0YXJ0LCAxMDApO1xuZXhwb3J0IHZhciBnZXRDZW50dXJ5RW5kID0gbWFrZUdldEVuZChnZXROZXh0Q2VudHVyeVN0YXJ0KTtcbmV4cG9ydCB2YXIgZ2V0UHJldmlvdXNDZW50dXJ5RW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldENlbnR1cnlFbmQsIC0xMDApO1xuZXhwb3J0IHZhciBnZXROZXh0Q2VudHVyeUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRDZW50dXJ5RW5kLCAxMDApO1xuZXhwb3J0IHZhciBnZXRDZW50dXJ5UmFuZ2UgPSBtYWtlR2V0UmFuZ2UoW2dldENlbnR1cnlTdGFydCwgZ2V0Q2VudHVyeUVuZF0pO1xuLyoqXG4gKiBEZWNhZGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVjYWRlU3RhcnQoZGF0ZSkge1xuICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gIHZhciBkZWNhZGVTdGFydFllYXIgPSB5ZWFyICsgKC15ZWFyICsgMSkgJSAxMDtcbiAgdmFyIGRlY2FkZVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRlY2FkZVN0YXJ0RGF0ZS5zZXRGdWxsWWVhcihkZWNhZGVTdGFydFllYXIsIDAsIDEpO1xuICBkZWNhZGVTdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkZWNhZGVTdGFydERhdGU7XG59XG5leHBvcnQgdmFyIGdldFByZXZpb3VzRGVjYWRlU3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0RGVjYWRlU3RhcnQsIC0xMCk7XG5leHBvcnQgdmFyIGdldE5leHREZWNhZGVTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXREZWNhZGVTdGFydCwgMTApO1xuZXhwb3J0IHZhciBnZXREZWNhZGVFbmQgPSBtYWtlR2V0RW5kKGdldE5leHREZWNhZGVTdGFydCk7XG5leHBvcnQgdmFyIGdldFByZXZpb3VzRGVjYWRlRW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldERlY2FkZUVuZCwgLTEwKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dERlY2FkZUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXREZWNhZGVFbmQsIDEwKTtcbmV4cG9ydCB2YXIgZ2V0RGVjYWRlUmFuZ2UgPSBtYWtlR2V0UmFuZ2UoW2dldERlY2FkZVN0YXJ0LCBnZXREZWNhZGVFbmRdKTtcbi8qKlxuICogWWVhclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyU3RhcnQoZGF0ZSkge1xuICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gIHZhciB5ZWFyU3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgeWVhclN0YXJ0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCAwLCAxKTtcbiAgeWVhclN0YXJ0RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHllYXJTdGFydERhdGU7XG59XG5leHBvcnQgdmFyIGdldFByZXZpb3VzWWVhclN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldFllYXJTdGFydCwgLTEpO1xuZXhwb3J0IHZhciBnZXROZXh0WWVhclN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldFllYXJTdGFydCwgMSk7XG5leHBvcnQgdmFyIGdldFllYXJFbmQgPSBtYWtlR2V0RW5kKGdldE5leHRZZWFyU3RhcnQpO1xuZXhwb3J0IHZhciBnZXRQcmV2aW91c1llYXJFbmQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0WWVhckVuZCwgLTEpO1xuZXhwb3J0IHZhciBnZXROZXh0WWVhckVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRZZWFyRW5kLCAxKTtcbmV4cG9ydCB2YXIgZ2V0WWVhclJhbmdlID0gbWFrZUdldFJhbmdlKFtnZXRZZWFyU3RhcnQsIGdldFllYXJFbmRdKTtcbi8qKlxuICogTW9udGhcbiAqL1xuXG5mdW5jdGlvbiBtYWtlR2V0RWRnZU9mTmVpZ2hib3JNb250aChnZXRFZGdlT2ZQZXJpb2QsIGRlZmF1bHRPZmZzZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VHZXRFZGdlT2ZOZWlnaGJvck1vbnRoSW50ZXJuYWwoZGF0ZSkge1xuICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPZmZzZXQ7XG4gICAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICAgIHZhciBtb250aCA9IGdldE1vbnRoKGRhdGUpICsgb2Zmc2V0O1xuICAgIHZhciBwcmV2aW91c1BlcmlvZCA9IG5ldyBEYXRlKCk7XG4gICAgcHJldmlvdXNQZXJpb2Quc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xuICAgIHByZXZpb3VzUGVyaW9kLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBnZXRFZGdlT2ZQZXJpb2QocHJldmlvdXNQZXJpb2QpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGhTdGFydChkYXRlKSB7XG4gIHZhciB5ZWFyID0gZ2V0WWVhcihkYXRlKTtcbiAgdmFyIG1vbnRoID0gZ2V0TW9udGgoZGF0ZSk7XG4gIHZhciBtb250aFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIG1vbnRoU3RhcnREYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcbiAgbW9udGhTdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBtb250aFN0YXJ0RGF0ZTtcbn1cbmV4cG9ydCB2YXIgZ2V0UHJldmlvdXNNb250aFN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yTW9udGgoZ2V0TW9udGhTdGFydCwgLTEpO1xuZXhwb3J0IHZhciBnZXROZXh0TW9udGhTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvck1vbnRoKGdldE1vbnRoU3RhcnQsIDEpO1xuZXhwb3J0IHZhciBnZXRNb250aEVuZCA9IG1ha2VHZXRFbmQoZ2V0TmV4dE1vbnRoU3RhcnQpO1xuZXhwb3J0IHZhciBnZXRQcmV2aW91c01vbnRoRW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yTW9udGgoZ2V0TW9udGhFbmQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dE1vbnRoRW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yTW9udGgoZ2V0TW9udGhFbmQsIDEpO1xuZXhwb3J0IHZhciBnZXRNb250aFJhbmdlID0gbWFrZUdldFJhbmdlKFtnZXRNb250aFN0YXJ0LCBnZXRNb250aEVuZF0pO1xuLyoqXG4gKiBEYXlcbiAqL1xuXG5mdW5jdGlvbiBtYWtlR2V0RWRnZU9mTmVpZ2hib3JEYXkoZ2V0RWRnZU9mUGVyaW9kLCBkZWZhdWx0T2Zmc2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBtYWtlR2V0RWRnZU9mTmVpZ2hib3JEYXlJbnRlcm5hbChkYXRlKSB7XG4gICAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdE9mZnNldDtcbiAgICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gICAgdmFyIG1vbnRoID0gZ2V0TW9udGgoZGF0ZSk7XG4gICAgdmFyIGRheSA9IGdldERhdGUoZGF0ZSkgKyBvZmZzZXQ7XG4gICAgdmFyIHByZXZpb3VzUGVyaW9kID0gbmV3IERhdGUoKTtcbiAgICBwcmV2aW91c1BlcmlvZC5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF5KTtcbiAgICBwcmV2aW91c1BlcmlvZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZ2V0RWRnZU9mUGVyaW9kKHByZXZpb3VzUGVyaW9kKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheVN0YXJ0KGRhdGUpIHtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICB2YXIgbW9udGggPSBnZXRNb250aChkYXRlKTtcbiAgdmFyIGRheSA9IGdldERhdGUoZGF0ZSk7XG4gIHZhciBkYXlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXlTdGFydERhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIGRheSk7XG4gIGRheVN0YXJ0RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRheVN0YXJ0RGF0ZTtcbn1cbmV4cG9ydCB2YXIgZ2V0UHJldmlvdXNEYXlTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvckRheShnZXREYXlTdGFydCwgLTEpO1xuZXhwb3J0IHZhciBnZXROZXh0RGF5U3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3JEYXkoZ2V0RGF5U3RhcnQsIDEpO1xuZXhwb3J0IHZhciBnZXREYXlFbmQgPSBtYWtlR2V0RW5kKGdldE5leHREYXlTdGFydCk7XG5leHBvcnQgdmFyIGdldFByZXZpb3VzRGF5RW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yRGF5KGdldERheUVuZCwgLTEpO1xuZXhwb3J0IHZhciBnZXROZXh0RGF5RW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yRGF5KGdldERheUVuZCwgMSk7XG5leHBvcnQgdmFyIGdldERheVJhbmdlID0gbWFrZUdldFJhbmdlKFtnZXREYXlTdGFydCwgZ2V0RGF5RW5kXSk7XG4vKipcbiAqIE90aGVyXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aCBvZiBhIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNJbk1vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGdldERhdGUoZ2V0TW9udGhFbmQoZGF0ZSkpO1xufVxuXG5mdW5jdGlvbiBwYWRTdGFydChudW0pIHtcbiAgdmFyIHZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcbiAgdmFyIG51bVN0ciA9IFwiXCIuY29uY2F0KG51bSk7XG5cbiAgaWYgKG51bVN0ci5sZW5ndGggPj0gdmFsKSB7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIHJldHVybiBcIjAwMDBcIi5jb25jYXQobnVtU3RyKS5zbGljZSgtdmFsKTtcbn1cbi8qKlxuICogUmV0dXJucyBsb2NhbCBob3VycyBhbmQgbWludXRlcyAoaGg6bW0pLlxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzTWludXRlcyhkYXRlKSB7XG4gIHZhciBob3VycyA9IHBhZFN0YXJ0KGdldEhvdXJzKGRhdGUpKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYWRTdGFydChnZXRNaW51dGVzKGRhdGUpKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KGhvdXJzLCBcIjpcIikuY29uY2F0KG1pbnV0ZXMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGxvY2FsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIChoaDptbTpzcykuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzTWludXRlc1NlY29uZHMoZGF0ZSkge1xuICB2YXIgaG91cnMgPSBwYWRTdGFydChnZXRIb3VycyhkYXRlKSk7XG4gIHZhciBtaW51dGVzID0gcGFkU3RhcnQoZ2V0TWludXRlcyhkYXRlKSk7XG4gIHZhciBzZWNvbmRzID0gcGFkU3RhcnQoZ2V0U2Vjb25kcyhkYXRlKSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdChob3VycywgXCI6XCIpLmNvbmNhdChtaW51dGVzLCBcIjpcIikuY29uY2F0KHNlY29uZHMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGxvY2FsIG1vbnRoIGluIElTTy1saWtlIGZvcm1hdCAoWVlZWS1NTSkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0xvY2FsTW9udGgoZGF0ZSkge1xuICB2YXIgeWVhciA9IHBhZFN0YXJ0KGdldFllYXIoZGF0ZSksIDQpO1xuICB2YXIgbW9udGggPSBwYWRTdGFydChnZXRNb250aEh1bWFuKGRhdGUpKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHllYXIsIFwiLVwiKS5jb25jYXQobW9udGgpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGxvY2FsIGRhdGUgaW4gSVNPLWxpa2UgZm9ybWF0IChZWVlZLU1NLUREKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPTG9jYWxEYXRlKGRhdGUpIHtcbiAgdmFyIHllYXIgPSBwYWRTdGFydChnZXRZZWFyKGRhdGUpLCA0KTtcbiAgdmFyIG1vbnRoID0gcGFkU3RhcnQoZ2V0TW9udGhIdW1hbihkYXRlKSk7XG4gIHZhciBkYXkgPSBwYWRTdGFydChnZXREYXRlKGRhdGUpKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHllYXIsIFwiLVwiKS5jb25jYXQobW9udGgsIFwiLVwiKS5jb25jYXQoZGF5KTtcbn1cbi8qKlxuICogUmV0dXJucyBsb2NhbCBkYXRlICYgdGltZSBpbiBJU08tbGlrZSBmb3JtYXQgKFlZWVktTU0tRERUaGg6bW06c3MpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09Mb2NhbERhdGVUaW1lKGRhdGUpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KGdldElTT0xvY2FsRGF0ZShkYXRlKSwgXCJUXCIpLmNvbmNhdChnZXRIb3Vyc01pbnV0ZXNTZWNvbmRzKGRhdGUpKTtcbn0iLCJ2YXIgZ2V0UmVjdCA9IGZ1bmN0aW9uIGdldFJlY3QoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn07XG5cbnZhciBkZXRlY3RFbGVtZW50T3ZlcmZsb3cgPSBmdW5jdGlvbiBkZXRlY3RFbGVtZW50T3ZlcmZsb3coZWxlbWVudCwgY29udGFpbmVyKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0IGNvbGxpZGVkVG9wKCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoZWxlbWVudCkudG9wIDwgZ2V0UmVjdChjb250YWluZXIpLnRvcDtcbiAgICB9LFxuXG4gICAgZ2V0IGNvbGxpZGVkQm90dG9tKCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoZWxlbWVudCkuYm90dG9tID4gZ2V0UmVjdChjb250YWluZXIpLmJvdHRvbTtcbiAgICB9LFxuXG4gICAgZ2V0IGNvbGxpZGVkTGVmdCgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGVsZW1lbnQpLmxlZnQgPCBnZXRSZWN0KGNvbnRhaW5lcikubGVmdDtcbiAgICB9LFxuXG4gICAgZ2V0IGNvbGxpZGVkUmlnaHQoKSB7XG4gICAgICByZXR1cm4gZ2V0UmVjdChlbGVtZW50KS5yaWdodCA+IGdldFJlY3QoY29udGFpbmVyKS5yaWdodDtcbiAgICB9LFxuXG4gICAgZ2V0IG92ZXJmbG93VG9wKCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoY29udGFpbmVyKS50b3AgLSBnZXRSZWN0KGVsZW1lbnQpLnRvcDtcbiAgICB9LFxuXG4gICAgZ2V0IG92ZXJmbG93Qm90dG9tKCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoZWxlbWVudCkuYm90dG9tIC0gZ2V0UmVjdChjb250YWluZXIpLmJvdHRvbTtcbiAgICB9LFxuXG4gICAgZ2V0IG92ZXJmbG93TGVmdCgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGNvbnRhaW5lcikubGVmdCAtIGdldFJlY3QoZWxlbWVudCkubGVmdDtcbiAgICB9LFxuXG4gICAgZ2V0IG92ZXJmbG93UmlnaHQoKSB7XG4gICAgICByZXR1cm4gZ2V0UmVjdChlbGVtZW50KS5yaWdodCAtIGdldFJlY3QoY29udGFpbmVyKS5yaWdodDtcbiAgICB9XG5cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRldGVjdEVsZW1lbnRPdmVyZmxvdzsiLCJpbXBvcnQgb25jZSBmcm9tICdsb2Rhc2gub25jZSc7XG5cbmZ1bmN0aW9uIGZpbHRlckR1cGxpY2F0ZXMoYXJyKSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChlbCwgaW5kZXgsIHNlbGYpIHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKGVsKSA9PT0gaW5kZXg7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXhMb3dlcmNhc2VQcm9wZXJ0aWVzKGFycikge1xuICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsIHx8IGVsLmluZGV4T2YoJy0nKSA9PT0gLTEgfHwgZWwudG9Mb3dlckNhc2UoKSAhPT0gZWwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICB2YXIgc3BsaXRFbCA9IGVsLnNwbGl0KCctJyk7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNwbGl0RWxbMF0sIFwiLVwiKS5jb25jYXQoc3BsaXRFbFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJMb2NhbGVzSW50ZXJuYWwoKSB7XG4gIHZhciBsYW5ndWFnZUxpc3QgPSBbXTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMpIHtcbiAgICAgIGxhbmd1YWdlTGlzdCA9IGxhbmd1YWdlTGlzdC5jb25jYXQod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSB7XG4gICAgICBsYW5ndWFnZUxpc3QucHVzaCh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpIHtcbiAgICAgIGxhbmd1YWdlTGlzdC5wdXNoKHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UpIHtcbiAgICAgIGxhbmd1YWdlTGlzdC5wdXNoKHdpbmRvdy5uYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5zeXN0ZW1MYW5ndWFnZSkge1xuICAgICAgbGFuZ3VhZ2VMaXN0LnB1c2god2luZG93Lm5hdmlnYXRvci5zeXN0ZW1MYW5ndWFnZSk7XG4gICAgfVxuICB9XG5cbiAgbGFuZ3VhZ2VMaXN0LnB1c2goJ2VuLVVTJyk7IC8vIEZhbGxiYWNrXG5cbiAgcmV0dXJuIGZpeExvd2VyY2FzZVByb3BlcnRpZXMoZmlsdGVyRHVwbGljYXRlcyhsYW5ndWFnZUxpc3QpKTtcbn1cblxuZXhwb3J0IHZhciBnZXRVc2VyTG9jYWxlcyA9IG9uY2UoZ2V0VXNlckxvY2FsZXNJbnRlcm5hbCk7XG5cbmZ1bmN0aW9uIGdldFVzZXJMb2NhbGVJbnRlcm5hbCgpIHtcbiAgcmV0dXJuIGdldFVzZXJMb2NhbGVzKClbMF07XG59XG5cbmV4cG9ydCB2YXIgZ2V0VXNlckxvY2FsZSA9IG9uY2UoZ2V0VXNlckxvY2FsZUludGVybmFsKTtcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJMb2NhbGU7IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDgsXG4gICAgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCwgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgYW5kIGFyZ3VtZW50c1xuICogb2YgdGhlIGNyZWF0ZWQgZnVuY3Rpb24sIHdoaWxlIGl0J3MgY2FsbGVkIGxlc3MgdGhhbiBgbmAgdGltZXMuIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBjcmVhdGVkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjYWxscyBhdCB3aGljaCBgZnVuY2AgaXMgbm8gbG9uZ2VyIGludm9rZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHJlc3RyaWN0ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmJlZm9yZSg1LCBhZGRDb250YWN0VG9MaXN0KSk7XG4gKiAvLyA9PiBBbGxvd3MgYWRkaW5nIHVwIHRvIDQgY29udGFjdHMgdG8gdGhlIGxpc3QuXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZShuLCBmdW5jKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIG4gPSB0b0ludGVnZXIobik7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS1uID4gMCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpZiAobiA8PSAxKSB7XG4gICAgICBmdW5jID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGlzIHJlc3RyaWN0ZWQgdG8gaW52b2tpbmcgYGZ1bmNgIG9uY2UuIFJlcGVhdCBjYWxsc1xuICogdG8gdGhlIGZ1bmN0aW9uIHJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGludm9jYXRpb24uIFRoZSBgZnVuY2AgaXNcbiAqIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgYW5kIGFyZ3VtZW50cyBvZiB0aGUgY3JlYXRlZCBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgcmVzdHJpY3RlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGluaXRpYWxpemUgPSBfLm9uY2UoY3JlYXRlQXBwbGljYXRpb24pO1xuICogaW5pdGlhbGl6ZSgpO1xuICogaW5pdGlhbGl6ZSgpO1xuICogLy8gPT4gYGNyZWF0ZUFwcGxpY2F0aW9uYCBpcyBpbnZva2VkIG9uY2VcbiAqL1xuZnVuY3Rpb24gb25jZShmdW5jKSB7XG4gIHJldHVybiBiZWZvcmUoMiwgZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb25jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5mb2N1c0V2ZW50cyA9IGV4cG9ydHMua2V5Ym9hcmRFdmVudHMgPSBleHBvcnRzLnRvdWNoRXZlbnRzID0gZXhwb3J0cy5tb3VzZUV2ZW50cyA9IHZvaWQgMDtcbi8vIEFzIGRlZmluZWQgb24gdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIG1vdXNlIGV2ZW50czogaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2V2ZW50cy5odG1sI21vdXNlLWV2ZW50c1xudmFyIG1vdXNlRXZlbnRzID0gWydvbkNsaWNrJywgJ29uQ29udGV4dE1lbnUnLCAnb25Eb3VibGVDbGljaycsICdvbkRyYWcnLCAnb25EcmFnRW5kJywgJ29uRHJhZ0VudGVyJywgJ29uRHJhZ0V4aXQnLCAnb25EcmFnTGVhdmUnLCAnb25EcmFnT3ZlcicsICdvbkRyYWdTdGFydCcsICdvbkRyb3AnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3V0JywgJ29uTW91c2VPdmVyJywgJ29uTW91c2VVcCddOyAvLyBBcyBkZWZpbmVkIG9uIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCB0b3VjaCBldmVudHM6IGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ldmVudHMuaHRtbCN0b3VjaC1ldmVudHNcblxuZXhwb3J0cy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xudmFyIHRvdWNoRXZlbnRzID0gWydvblRvdWNoQ2FuY2VsJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaFN0YXJ0J107IC8vIEFzIGRlZmluZWQgb24gdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGtleWJvYXJkIGV2ZW50czogaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2V2ZW50cy5odG1sI2tleWJvYXJkLWV2ZW50c1xuXG5leHBvcnRzLnRvdWNoRXZlbnRzID0gdG91Y2hFdmVudHM7XG52YXIga2V5Ym9hcmRFdmVudHMgPSBbJ29uS2V5RG93bicsICdvbktleVByZXNzJywgJ29uS2V5VXAnXTsgLy8gQXMgZGVmaW5lZCBvbiB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQga2V5Ym9hcmQgZXZlbnRzOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXZlbnRzLmh0bWwjZm9jdXMtZXZlbnRzXG5cbmV4cG9ydHMua2V5Ym9hcmRFdmVudHMgPSBrZXlib2FyZEV2ZW50cztcbnZhciBmb2N1c0V2ZW50cyA9IFsnb25Gb2N1cycsICdvbkJsdXInXTtcbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBvbi1ldmVudCBjYWxsYmFjayBwcm9wcyBjdXJyaWVkIHdpdGggcHJvdmlkZWQgYXJncy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcyBwYXNzZWQgdG8gYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZ2V0QXJncyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhcmd1bWVudChzKSBvbi1ldmVudCBjYWxsYmFja3NcbiAqICAgc2hhbGwgYmUgY3VycmllZCB3aXRoLlxuICovXG5cbmV4cG9ydHMuZm9jdXNFdmVudHMgPSBmb2N1c0V2ZW50cztcblxudmFyIG1ha2VFdmVudFByb3BzID0gZnVuY3Rpb24gbWFrZUV2ZW50UHJvcHMocHJvcHMsIGdldEFyZ3MpIHtcbiAgdmFyIGV2ZW50UHJvcHMgPSB7fTtcbiAgW10uY29uY2F0KG1vdXNlRXZlbnRzLCB0b3VjaEV2ZW50cywga2V5Ym9hcmRFdmVudHMsIGZvY3VzRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRQcm9wc1tldmVudE5hbWVdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRBcmdzID8gcHJvcHNbZXZlbnROYW1lXShldmVudCwgZ2V0QXJncyhldmVudE5hbWUpKSA6IHByb3BzW2V2ZW50TmFtZV0oZXZlbnQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZXZlbnRQcm9wcztcbn07XG5cbnZhciBfZGVmYXVsdCA9IG1ha2VFdmVudFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDbGFzc05hbWVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uIChjbGFzc0xpc3QsIGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSA/IGNsYXNzTGlzdC5jb25jYXQoYXJnKSA6IGNsYXNzTGlzdDtcbiAgfSwgW10pLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtZXJnZUNsYXNzTmFtZXMgZnJvbSAnbWVyZ2UtY2xhc3MtbmFtZXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9DYWxlbmRhci9OYXZpZ2F0aW9uJztcbmltcG9ydCBDZW50dXJ5VmlldyBmcm9tICcuL0NlbnR1cnlWaWV3JztcbmltcG9ydCBEZWNhZGVWaWV3IGZyb20gJy4vRGVjYWRlVmlldyc7XG5pbXBvcnQgWWVhclZpZXcgZnJvbSAnLi9ZZWFyVmlldyc7XG5pbXBvcnQgTW9udGhWaWV3IGZyb20gJy4vTW9udGhWaWV3JztcbmltcG9ydCB7IGdldEJlZ2luLCBnZXRCZWdpbk5leHQsIGdldEVuZCwgZ2V0VmFsdWVSYW5nZSB9IGZyb20gJy4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IGlzQ2FsZW5kYXJUeXBlLCBpc0NsYXNzTmFtZSwgaXNNYXhEYXRlLCBpc01pbkRhdGUsIGlzUmVmLCBpc1ZhbHVlLCBpc1ZpZXcgfSBmcm9tICcuL3NoYXJlZC9wcm9wVHlwZXMnO1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4vc2hhcmVkL3V0aWxzJztcbnZhciBiYXNlQ2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyJztcbnZhciBhbGxWaWV3cyA9IFsnY2VudHVyeScsICdkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xudmFyIGFsbFZhbHVlVHlwZXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFsbFZpZXdzLnNsaWNlKDEpKSwgWydkYXknXSk7XG4vKipcbiAqIFJldHVybnMgdmlld3MgYXJyYXkgd2l0aCBkaXNhbGxvd2VkIHZhbHVlcyBjdXQgb2ZmLlxuICovXG5cbmZ1bmN0aW9uIGdldExpbWl0ZWRWaWV3cyhtaW5EZXRhaWwsIG1heERldGFpbCkge1xuICByZXR1cm4gYWxsVmlld3Muc2xpY2UoYWxsVmlld3MuaW5kZXhPZihtaW5EZXRhaWwpLCBhbGxWaWV3cy5pbmRleE9mKG1heERldGFpbCkgKyAxKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gdmlldyBpcyBhbGxvd2VkIHdpdGggY3VycmVudGx5IGFwcGxpZWQgc2V0dGluZ3MuXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZpZXdBbGxvd2VkKHZpZXcsIG1pbkRldGFpbCwgbWF4RGV0YWlsKSB7XG4gIHZhciB2aWV3cyA9IGdldExpbWl0ZWRWaWV3cyhtaW5EZXRhaWwsIG1heERldGFpbCk7XG4gIHJldHVybiB2aWV3cy5pbmRleE9mKHZpZXcpICE9PSAtMTtcbn1cbi8qKlxuICogR2V0cyBlaXRoZXIgcHJvdmlkZWQgdmlldyBpZiBhbGxvd2VkIGJ5IG1pbkRldGFpbCBhbmQgbWF4RGV0YWlsLCBvciBnZXRzXG4gKiB0aGUgZGVmYXVsdCB2aWV3IGlmIG5vdCBhbGxvd2VkLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0Vmlldyh2aWV3LCBtaW5EZXRhaWwsIG1heERldGFpbCkge1xuICBpZiAoaXNWaWV3QWxsb3dlZCh2aWV3LCBtaW5EZXRhaWwsIG1heERldGFpbCkpIHtcbiAgICByZXR1cm4gdmlldztcbiAgfVxuXG4gIHJldHVybiBtYXhEZXRhaWw7XG59XG4vKipcbiAqIFJldHVybnMgdmFsdWUgdHlwZSB0aGF0IGNhbiBiZSByZXR1cm5lZCB3aXRoIGN1cnJlbnRseSBhcHBsaWVkIHNldHRpbmdzLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVUeXBlKG1heERldGFpbCkge1xuICByZXR1cm4gYWxsVmFsdWVUeXBlc1thbGxWaWV3cy5pbmRleE9mKG1heERldGFpbCldO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSwgaW5kZXgpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHJhd1ZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWx1ZS5sZW5ndGggPT09IDIgPyB2YWx1ZVtpbmRleF0gOiB2YWx1ZTtcblxuICBpZiAoIXJhd1ZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdmFsdWVEYXRlID0gbmV3IERhdGUocmF3VmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZURhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZTogXCIuY29uY2F0KHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWVEYXRlO1xufVxuXG5mdW5jdGlvbiBnZXREZXRhaWxWYWx1ZShfcmVmLCBpbmRleCkge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtYXhEZXRhaWwgPSBfcmVmLm1heERldGFpbDtcbiAgdmFyIHZhbHVlUGllY2UgPSBnZXRWYWx1ZSh2YWx1ZSwgaW5kZXgpO1xuXG4gIGlmICghdmFsdWVQaWVjZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHZhbHVlVHlwZSA9IGdldFZhbHVlVHlwZShtYXhEZXRhaWwpO1xuICB2YXIgZGV0YWlsVmFsdWVGcm9tID0gW2dldEJlZ2luLCBnZXRFbmRdW2luZGV4XSh2YWx1ZVR5cGUsIHZhbHVlUGllY2UpO1xuICByZXR1cm4gYmV0d2VlbihkZXRhaWxWYWx1ZUZyb20sIG1pbkRhdGUsIG1heERhdGUpO1xufVxuXG52YXIgZ2V0RGV0YWlsVmFsdWVGcm9tID0gZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWVGcm9tKGFyZ3MpIHtcbiAgcmV0dXJuIGdldERldGFpbFZhbHVlKGFyZ3MsIDApO1xufTtcblxudmFyIGdldERldGFpbFZhbHVlVG8gPSBmdW5jdGlvbiBnZXREZXRhaWxWYWx1ZVRvKGFyZ3MpIHtcbiAgcmV0dXJuIGdldERldGFpbFZhbHVlKGFyZ3MsIDEpO1xufTtcblxudmFyIGdldERldGFpbFZhbHVlQXJyYXkgPSBmdW5jdGlvbiBnZXREZXRhaWxWYWx1ZUFycmF5KGFyZ3MpIHtcbiAgdmFyIHZhbHVlID0gYXJncy52YWx1ZTtcblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBbZ2V0RGV0YWlsVmFsdWVGcm9tLCBnZXREZXRhaWxWYWx1ZVRvXS5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZuKGFyZ3MpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVN0YXJ0RGF0ZShwcm9wcykge1xuICB2YXIgbWF4RGF0ZSA9IHByb3BzLm1heERhdGUsXG4gICAgICBtYXhEZXRhaWwgPSBwcm9wcy5tYXhEZXRhaWwsXG4gICAgICBtaW5EYXRlID0gcHJvcHMubWluRGF0ZSxcbiAgICAgIG1pbkRldGFpbCA9IHByb3BzLm1pbkRldGFpbCxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2aWV3ID0gcHJvcHMudmlldztcbiAgdmFyIHJhbmdlVHlwZSA9IGdldFZpZXcodmlldywgbWluRGV0YWlsLCBtYXhEZXRhaWwpO1xuICB2YXIgdmFsdWVGcm9tID0gZ2V0RGV0YWlsVmFsdWVGcm9tKHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgIG1heERldGFpbDogbWF4RGV0YWlsXG4gIH0pIHx8IG5ldyBEYXRlKCk7XG4gIHJldHVybiBnZXRCZWdpbihyYW5nZVR5cGUsIHZhbHVlRnJvbSk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxBY3RpdmVTdGFydERhdGUocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IHByb3BzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGRlZmF1bHRBY3RpdmVTdGFydERhdGUgPSBwcm9wcy5kZWZhdWx0QWN0aXZlU3RhcnREYXRlLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZpZXcgPSBwcm9wcy5kZWZhdWx0VmlldyxcbiAgICAgIG1heERldGFpbCA9IHByb3BzLm1heERldGFpbCxcbiAgICAgIG1pbkRldGFpbCA9IHByb3BzLm1pbkRldGFpbCxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2aWV3ID0gcHJvcHMudmlldyxcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFjdGl2ZVN0YXJ0RGF0ZVwiLCBcImRlZmF1bHRBY3RpdmVTdGFydERhdGVcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkZWZhdWx0Vmlld1wiLCBcIm1heERldGFpbFwiLCBcIm1pbkRldGFpbFwiLCBcInZhbHVlXCIsIFwidmlld1wiXSk7XG5cbiAgdmFyIHJhbmdlVHlwZSA9IGdldFZpZXcodmlldywgbWluRGV0YWlsLCBtYXhEZXRhaWwpO1xuICB2YXIgdmFsdWVGcm9tID0gYWN0aXZlU3RhcnREYXRlIHx8IGRlZmF1bHRBY3RpdmVTdGFydERhdGU7XG5cbiAgaWYgKHZhbHVlRnJvbSkge1xuICAgIHJldHVybiBnZXRCZWdpbihyYW5nZVR5cGUsIHZhbHVlRnJvbSk7XG4gIH1cblxuICByZXR1cm4gZ2V0QWN0aXZlU3RhcnREYXRlKF9vYmplY3RTcHJlYWQoe1xuICAgIG1heERldGFpbDogbWF4RGV0YWlsLFxuICAgIG1pbkRldGFpbDogbWluRGV0YWlsLFxuICAgIHZhbHVlOiB2YWx1ZSB8fCBkZWZhdWx0VmFsdWUsXG4gICAgdmlldzogdmlldyB8fCBkZWZhdWx0Vmlld1xuICB9LCBvdGhlclByb3BzKSk7XG59XG5cbnZhciBnZXRJc1NpbmdsZVZhbHVlID0gZnVuY3Rpb24gZ2V0SXNTaW5nbGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgW10uY29uY2F0KHZhbHVlKS5sZW5ndGggPT09IDE7XG59O1xuXG52YXIgQ2FsZW5kYXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbGVuZGFyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENhbGVuZGFyKTtcblxuICBmdW5jdGlvbiBDYWxlbmRhcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cbiAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogX3RoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIHZhbHVlOiBfdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICB2aWV3OiBfdGhpcy5wcm9wcy5kZWZhdWx0Vmlld1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cblxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFN0YXRlQW5kQ2FsbENhbGxiYWNrc1wiLCBmdW5jdGlvbiAobmV4dFN0YXRlLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5hY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgcHJldmlvdXNWaWV3ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnZpZXc7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFsbG93UGFydGlhbFJhbmdlID0gX3RoaXMkcHJvcHMuYWxsb3dQYXJ0aWFsUmFuZ2UsXG4gICAgICAgICAgb25BY3RpdmVTdGFydERhdGVDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkFjdGl2ZVN0YXJ0RGF0ZUNoYW5nZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uVmlld0NoYW5nZSA9IF90aGlzJHByb3BzLm9uVmlld0NoYW5nZSxcbiAgICAgICAgICBzZWxlY3RSYW5nZSA9IF90aGlzJHByb3BzLnNlbGVjdFJhbmdlO1xuICAgICAgdmFyIHByZXZBcmdzID0ge1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IHByZXZpb3VzQWN0aXZlU3RhcnREYXRlLFxuICAgICAgICB2aWV3OiBwcmV2aW91c1ZpZXdcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IHtcbiAgICAgICAgICBhY3RpdmVTdGFydERhdGU6IG5leHRTdGF0ZS5hY3RpdmVTdGFydERhdGUgfHwgX3RoaXMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICAgIHZhbHVlOiBuZXh0U3RhdGUudmFsdWUgfHwgX3RoaXMudmFsdWUsXG4gICAgICAgICAgdmlldzogbmV4dFN0YXRlLnZpZXcgfHwgX3RoaXMudmlld1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFVwZGF0ZShrZXkpIHtcbiAgICAgICAgICByZXR1cm4gKC8vIEtleSBtdXN0IGV4aXN0LCBhbmTigKZcbiAgICAgICAgICAgIGtleSBpbiBuZXh0U3RhdGUgJiYgKCAvLyDigKZrZXkgY2hhbmdlZCBmcm9tIHVuZGVmaW5lZCB0byBkZWZpbmVkIG9yIHRoZSBvdGhlciB3YXkgYXJvdW5kLCBvcuKAplxuICAgICAgICAgICAgX3R5cGVvZihuZXh0U3RhdGVba2V5XSkgIT09IF90eXBlb2YocHJldkFyZ3Nba2V5XSkgLy8g4oCmdmFsdWUgY2hhbmdlZC5cbiAgICAgICAgICAgIHx8IChuZXh0U3RhdGVba2V5XSBpbnN0YW5jZW9mIERhdGUgPyBuZXh0U3RhdGVba2V5XS5nZXRUaW1lKCkgIT09IHByZXZBcmdzW2tleV0uZ2V0VGltZSgpIDogbmV4dFN0YXRlW2tleV0gIT09IHByZXZBcmdzW2tleV0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKCdhY3RpdmVTdGFydERhdGUnKSkge1xuICAgICAgICAgIGlmIChvbkFjdGl2ZVN0YXJ0RGF0ZUNoYW5nZSkgb25BY3RpdmVTdGFydERhdGVDaGFuZ2UoYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKCd2aWV3JykpIHtcbiAgICAgICAgICBpZiAob25WaWV3Q2hhbmdlKSBvblZpZXdDaGFuZ2UoYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0UmFuZ2UpIHtcbiAgICAgICAgICAgICAgdmFyIGlzU2luZ2xlVmFsdWUgPSBnZXRJc1NpbmdsZVZhbHVlKG5leHRTdGF0ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFpc1NpbmdsZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UobmV4dFN0YXRlLnZhbHVlLCBldmVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsb3dQYXJ0aWFsUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbbmV4dFN0YXRlLnZhbHVlXSwgZXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvbkNoYW5nZShuZXh0U3RhdGUudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0QWN0aXZlU3RhcnREYXRlXCIsIGZ1bmN0aW9uIChhY3RpdmVTdGFydERhdGUpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlQW5kQ2FsbENhbGxiYWNrcyh7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogYWN0aXZlU3RhcnREYXRlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkcmlsbERvd25cIiwgZnVuY3Rpb24gKG5leHRBY3RpdmVTdGFydERhdGUsIGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLmRyaWxsRG93bkF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9uQ2xpY2tUaWxlKG5leHRBY3RpdmVTdGFydERhdGUsIGV2ZW50KTtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICB2aWV3ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMi52aWV3LFxuICAgICAgICAgIHZpZXdzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMi52aWV3cztcblxuICAgICAgdmFyIG9uRHJpbGxEb3duID0gX3RoaXMucHJvcHMub25EcmlsbERvd247XG4gICAgICB2YXIgbmV4dFZpZXcgPSB2aWV3c1t2aWV3cy5pbmRleE9mKHZpZXcpICsgMV07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlQW5kQ2FsbENhbGxiYWNrcyh7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogbmV4dEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgdmlldzogbmV4dFZpZXdcbiAgICAgIH0sIHVuZGVmaW5lZCwgb25EcmlsbERvd24pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRyaWxsVXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5kcmlsbFVwQXZhaWxhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBhY3RpdmVTdGFydERhdGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgICB2aWV3ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMy52aWV3LFxuICAgICAgICAgIHZpZXdzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMy52aWV3cztcblxuICAgICAgdmFyIG9uRHJpbGxVcCA9IF90aGlzLnByb3BzLm9uRHJpbGxVcDtcbiAgICAgIHZhciBuZXh0VmlldyA9IHZpZXdzW3ZpZXdzLmluZGV4T2YodmlldykgLSAxXTtcbiAgICAgIHZhciBuZXh0QWN0aXZlU3RhcnREYXRlID0gZ2V0QmVnaW4obmV4dFZpZXcsIGFjdGl2ZVN0YXJ0RGF0ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlQW5kQ2FsbENhbGxiYWNrcyh7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogbmV4dEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgdmlldzogbmV4dFZpZXdcbiAgICAgIH0sIHVuZGVmaW5lZCwgb25EcmlsbFVwKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNoYW5nZVwiLCBmdW5jdGlvbiAodmFsdWUsIGV2ZW50KSB7XG4gICAgICB2YXIgc2VsZWN0UmFuZ2UgPSBfdGhpcy5wcm9wcy5zZWxlY3RSYW5nZTtcblxuICAgICAgX3RoaXMub25DbGlja1RpbGUodmFsdWUsIGV2ZW50KTtcblxuICAgICAgdmFyIG5leHRWYWx1ZTtcblxuICAgICAgaWYgKHNlbGVjdFJhbmdlKSB7XG4gICAgICAgIC8vIFJhbmdlIHNlbGVjdGlvbiB0dXJuZWQgb25cbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTQgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemU0LnZhbHVlLFxuICAgICAgICAgICAgdmFsdWVUeXBlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplNC52YWx1ZVR5cGU7XG5cbiAgICAgICAgaWYgKCFnZXRJc1NpbmdsZVZhbHVlKHByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgLy8gVmFsdWUgaGFzIDAgb3IgMiBlbGVtZW50cyAtIGVpdGhlciB3YXkgd2UncmUgc3RhcnRpbmcgYSBuZXcgYXJyYXlcbiAgICAgICAgICAvLyBGaXJzdCB2YWx1ZVxuICAgICAgICAgIG5leHRWYWx1ZSA9IGdldEJlZ2luKHZhbHVlVHlwZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNlY29uZCB2YWx1ZVxuICAgICAgICAgIG5leHRWYWx1ZSA9IGdldFZhbHVlUmFuZ2UodmFsdWVUeXBlLCBwcmV2aW91c1ZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJhbmdlIHNlbGVjdGlvbiB0dXJuZWQgb2ZmXG4gICAgICAgIG5leHRWYWx1ZSA9IF90aGlzLmdldFByb2Nlc3NlZFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRBY3RpdmVTdGFydERhdGUgPSBnZXRBY3RpdmVTdGFydERhdGUoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIHt9LCB7XG4gICAgICAgIHZhbHVlOiBuZXh0VmFsdWVcbiAgICAgIH0pKTtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGVBbmRDYWxsQ2FsbGJhY2tzKHtcbiAgICAgICAgYWN0aXZlU3RhcnREYXRlOiBuZXh0QWN0aXZlU3RhcnREYXRlLFxuICAgICAgICB2YWx1ZTogbmV4dFZhbHVlXG4gICAgICB9LCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DbGlja1RpbGVcIiwgZnVuY3Rpb24gKHZhbHVlLCBldmVudCkge1xuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICB2aWV3ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplNS52aWV3O1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbGlja0RheSA9IF90aGlzJHByb3BzMi5vbkNsaWNrRGF5LFxuICAgICAgICAgIG9uQ2xpY2tEZWNhZGUgPSBfdGhpcyRwcm9wczIub25DbGlja0RlY2FkZSxcbiAgICAgICAgICBvbkNsaWNrTW9udGggPSBfdGhpcyRwcm9wczIub25DbGlja01vbnRoLFxuICAgICAgICAgIG9uQ2xpY2tZZWFyID0gX3RoaXMkcHJvcHMyLm9uQ2xpY2tZZWFyO1xuXG4gICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodmlldykge1xuICAgICAgICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2tEZWNhZGU7XG5cbiAgICAgICAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2tZZWFyO1xuXG4gICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICByZXR1cm4gb25DbGlja01vbnRoO1xuXG4gICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2tEYXk7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2aWV3OiBcIi5jb25jYXQodmlldywgXCIuXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHZhbHVlLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZU92ZXJcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUuaG92ZXIgJiYgcHJldlN0YXRlLmhvdmVyLmdldFRpbWUoKSA9PT0gdmFsdWUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdmVyOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZUxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaG92ZXI6IG51bGxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGVuZGFyLCBbe1xuICAgIGtleTogXCJnZXRQcm9jZXNzZWRWYWx1ZVwiLFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjdXJyZW50IHZhbHVlIGluIGEgZGVzaXJlZCBmb3JtYXQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByb2Nlc3NlZFZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMzLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzMy5tYXhEYXRlLFxuICAgICAgICAgIG1heERldGFpbCA9IF90aGlzJHByb3BzMy5tYXhEZXRhaWwsXG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSBfdGhpcyRwcm9wczMucmV0dXJuVmFsdWU7XG5cbiAgICAgIHZhciBwcm9jZXNzRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGV0YWlsVmFsdWVGcm9tO1xuXG4gICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZVRvO1xuXG4gICAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlQXJyYXk7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJldHVyblZhbHVlLicpO1xuICAgICAgICB9XG4gICAgICB9KCk7XG5cbiAgICAgIHJldHVybiBwcm9jZXNzRnVuY3Rpb24oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgIG1heERldGFpbDogbWF4RGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ29udGVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDb250ZW50KG5leHQpIHtcbiAgICAgIHZhciBjdXJyZW50QWN0aXZlU3RhcnREYXRlID0gdGhpcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgb25Nb3VzZU92ZXIgPSB0aGlzLm9uTW91c2VPdmVyLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMudmFsdWVUeXBlLFxuICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICB2aWV3ID0gdGhpcy52aWV3O1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2FsZW5kYXJUeXBlID0gX3RoaXMkcHJvcHM0LmNhbGVuZGFyVHlwZSxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wczQubG9jYWxlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczQubWF4RGF0ZSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM0Lm1pbkRhdGUsXG4gICAgICAgICAgc2VsZWN0UmFuZ2UgPSBfdGhpcyRwcm9wczQuc2VsZWN0UmFuZ2UsXG4gICAgICAgICAgdGlsZUNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC50aWxlQ2xhc3NOYW1lLFxuICAgICAgICAgIHRpbGVDb250ZW50ID0gX3RoaXMkcHJvcHM0LnRpbGVDb250ZW50LFxuICAgICAgICAgIHRpbGVEaXNhYmxlZCA9IF90aGlzJHByb3BzNC50aWxlRGlzYWJsZWQ7XG4gICAgICB2YXIgaG92ZXIgPSB0aGlzLmhvdmVyO1xuICAgICAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IG5leHQgPyBnZXRCZWdpbk5leHQodmlldywgY3VycmVudEFjdGl2ZVN0YXJ0RGF0ZSkgOiBnZXRCZWdpbih2aWV3LCBjdXJyZW50QWN0aXZlU3RhcnREYXRlKTtcbiAgICAgIHZhciBvbkNsaWNrID0gdGhpcy5kcmlsbERvd25BdmFpbGFibGUgPyB0aGlzLmRyaWxsRG93biA6IHRoaXMub25DaGFuZ2U7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgICAgICBvbk1vdXNlT3Zlcjogc2VsZWN0UmFuZ2UgPyBvbk1vdXNlT3ZlciA6IG51bGwsXG4gICAgICAgIHRpbGVDbGFzc05hbWU6IHRpbGVDbGFzc05hbWUsXG4gICAgICAgIHRpbGVDb250ZW50OiB0aWxlQ29udGVudCxcbiAgICAgICAgdGlsZURpc2FibGVkOiB0aWxlRGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdmFsdWVUeXBlOiB2YWx1ZVR5cGVcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodmlldykge1xuICAgICAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZm9ybWF0WWVhciA9IHRoaXMucHJvcHMuZm9ybWF0WWVhcjtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDZW50dXJ5VmlldywgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBmb3JtYXRZZWFyOiBmb3JtYXRZZWFyXG4gICAgICAgICAgICB9LCBjb21tb25Qcm9wcykpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfZm9ybWF0WWVhciA9IHRoaXMucHJvcHMuZm9ybWF0WWVhcjtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWNhZGVWaWV3LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIGZvcm1hdFllYXI6IF9mb3JtYXRZZWFyXG4gICAgICAgICAgICB9LCBjb21tb25Qcm9wcykpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBmb3JtYXRNb250aCA9IF90aGlzJHByb3BzNS5mb3JtYXRNb250aCxcbiAgICAgICAgICAgICAgICBmb3JtYXRNb250aFllYXIgPSBfdGhpcyRwcm9wczUuZm9ybWF0TW9udGhZZWFyO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFllYXJWaWV3LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIGZvcm1hdE1vbnRoOiBmb3JtYXRNb250aCxcbiAgICAgICAgICAgICAgZm9ybWF0TW9udGhZZWFyOiBmb3JtYXRNb250aFllYXJcbiAgICAgICAgICAgIH0sIGNvbW1vblByb3BzKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBmb3JtYXRMb25nRGF0ZSA9IF90aGlzJHByb3BzNi5mb3JtYXRMb25nRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXRTaG9ydFdlZWtkYXkgPSBfdGhpcyRwcm9wczYuZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2tXZWVrTnVtYmVyID0gX3RoaXMkcHJvcHM2Lm9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgICAgICAgICAgIHNob3dEb3VibGVWaWV3ID0gX3RoaXMkcHJvcHM2LnNob3dEb3VibGVWaWV3LFxuICAgICAgICAgICAgICAgIHNob3dGaXhlZE51bWJlck9mV2Vla3MgPSBfdGhpcyRwcm9wczYuc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyxcbiAgICAgICAgICAgICAgICBzaG93TmVpZ2hib3JpbmdNb250aCA9IF90aGlzJHByb3BzNi5zaG93TmVpZ2hib3JpbmdNb250aCxcbiAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnMgPSBfdGhpcyRwcm9wczYuc2hvd1dlZWtOdW1iZXJzO1xuICAgICAgICAgICAgdmFyIG9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vbnRoVmlldywgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBjYWxlbmRhclR5cGU6IGNhbGVuZGFyVHlwZSxcbiAgICAgICAgICAgICAgZm9ybWF0TG9uZ0RhdGU6IGZvcm1hdExvbmdEYXRlLFxuICAgICAgICAgICAgICBmb3JtYXRTaG9ydFdlZWtkYXk6IGZvcm1hdFNob3J0V2Vla2RheSxcbiAgICAgICAgICAgICAgb25DbGlja1dlZWtOdW1iZXI6IG9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHNlbGVjdFJhbmdlID8gb25Nb3VzZUxlYXZlIDogbnVsbCxcbiAgICAgICAgICAgICAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrczogc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyB8fCBzaG93RG91YmxlVmlldyxcbiAgICAgICAgICAgICAgc2hvd05laWdoYm9yaW5nTW9udGg6IHNob3dOZWlnaGJvcmluZ01vbnRoLFxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM6IHNob3dXZWVrTnVtYmVyc1xuICAgICAgICAgICAgfSwgY29tbW9uUHJvcHMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZpZXc6IFwiLmNvbmNhdCh2aWV3LCBcIi5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJOYXZpZ2F0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5hdmlnYXRpb24oKSB7XG4gICAgICB2YXIgc2hvd05hdmlnYXRpb24gPSB0aGlzLnByb3BzLnNob3dOYXZpZ2F0aW9uO1xuXG4gICAgICBpZiAoIXNob3dOYXZpZ2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aXZlU3RhcnREYXRlID0gdGhpcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgdmlldyA9IHRoaXMudmlldyxcbiAgICAgICAgICB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb3JtYXRNb250aFllYXIgPSBfdGhpcyRwcm9wczcuZm9ybWF0TW9udGhZZWFyLFxuICAgICAgICAgIGZvcm1hdFllYXIgPSBfdGhpcyRwcm9wczcuZm9ybWF0WWVhcixcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wczcubG9jYWxlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczcubWF4RGF0ZSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM3Lm1pbkRhdGUsXG4gICAgICAgICAgbmF2aWdhdGlvbkFyaWFMYWJlbCA9IF90aGlzJHByb3BzNy5uYXZpZ2F0aW9uQXJpYUxhYmVsLFxuICAgICAgICAgIG5hdmlnYXRpb25MYWJlbCA9IF90aGlzJHByb3BzNy5uYXZpZ2F0aW9uTGFiZWwsXG4gICAgICAgICAgbmV4dDJBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczcubmV4dDJBcmlhTGFiZWwsXG4gICAgICAgICAgbmV4dDJMYWJlbCA9IF90aGlzJHByb3BzNy5uZXh0MkxhYmVsLFxuICAgICAgICAgIG5leHRBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczcubmV4dEFyaWFMYWJlbCxcbiAgICAgICAgICBuZXh0TGFiZWwgPSBfdGhpcyRwcm9wczcubmV4dExhYmVsLFxuICAgICAgICAgIHByZXYyQXJpYUxhYmVsID0gX3RoaXMkcHJvcHM3LnByZXYyQXJpYUxhYmVsLFxuICAgICAgICAgIHByZXYyTGFiZWwgPSBfdGhpcyRwcm9wczcucHJldjJMYWJlbCxcbiAgICAgICAgICBwcmV2QXJpYUxhYmVsID0gX3RoaXMkcHJvcHM3LnByZXZBcmlhTGFiZWwsXG4gICAgICAgICAgcHJldkxhYmVsID0gX3RoaXMkcHJvcHM3LnByZXZMYWJlbCxcbiAgICAgICAgICBzaG93RG91YmxlVmlldyA9IF90aGlzJHByb3BzNy5zaG93RG91YmxlVmlldztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uLCB7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICBkcmlsbFVwOiB0aGlzLmRyaWxsVXAsXG4gICAgICAgIGZvcm1hdE1vbnRoWWVhcjogZm9ybWF0TW9udGhZZWFyLFxuICAgICAgICBmb3JtYXRZZWFyOiBmb3JtYXRZZWFyLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbkFyaWFMYWJlbDogbmF2aWdhdGlvbkFyaWFMYWJlbCxcbiAgICAgICAgbmF2aWdhdGlvbkxhYmVsOiBuYXZpZ2F0aW9uTGFiZWwsXG4gICAgICAgIG5leHQyQXJpYUxhYmVsOiBuZXh0MkFyaWFMYWJlbCxcbiAgICAgICAgbmV4dDJMYWJlbDogbmV4dDJMYWJlbCxcbiAgICAgICAgbmV4dEFyaWFMYWJlbDogbmV4dEFyaWFMYWJlbCxcbiAgICAgICAgbmV4dExhYmVsOiBuZXh0TGFiZWwsXG4gICAgICAgIHByZXYyQXJpYUxhYmVsOiBwcmV2MkFyaWFMYWJlbCxcbiAgICAgICAgcHJldjJMYWJlbDogcHJldjJMYWJlbCxcbiAgICAgICAgcHJldkFyaWFMYWJlbDogcHJldkFyaWFMYWJlbCxcbiAgICAgICAgcHJldkxhYmVsOiBwcmV2TGFiZWwsXG4gICAgICAgIHNldEFjdGl2ZVN0YXJ0RGF0ZTogdGhpcy5zZXRBY3RpdmVTdGFydERhdGUsXG4gICAgICAgIHNob3dEb3VibGVWaWV3OiBzaG93RG91YmxlVmlldyxcbiAgICAgICAgdmlldzogdmlldyxcbiAgICAgICAgdmlld3M6IHZpZXdzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzOC5jbGFzc05hbWUsXG4gICAgICAgICAgaW5wdXRSZWYgPSBfdGhpcyRwcm9wczguaW5wdXRSZWYsXG4gICAgICAgICAgc2VsZWN0UmFuZ2UgPSBfdGhpcyRwcm9wczguc2VsZWN0UmFuZ2UsXG4gICAgICAgICAgc2hvd0RvdWJsZVZpZXcgPSBfdGhpcyRwcm9wczguc2hvd0RvdWJsZVZpZXc7XG4gICAgICB2YXIgb25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIHZhbHVlQXJyYXkgPSBbXS5jb25jYXQodmFsdWUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzTmFtZXMoYmFzZUNsYXNzTmFtZSwgc2VsZWN0UmFuZ2UgJiYgdmFsdWVBcnJheS5sZW5ndGggPT09IDEgJiYgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItLXNlbGVjdFJhbmdlXCIpLCBzaG93RG91YmxlVmlldyAmJiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi0tZG91YmxlVmlld1wiKSwgY2xhc3NOYW1lKSxcbiAgICAgICAgcmVmOiBpbnB1dFJlZlxuICAgICAgfSwgdGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fdmlld0NvbnRhaW5lclwiKSxcbiAgICAgICAgb25CbHVyOiBzZWxlY3RSYW5nZSA/IG9uTW91c2VMZWF2ZSA6IG51bGwsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogc2VsZWN0UmFuZ2UgPyBvbk1vdXNlTGVhdmUgOiBudWxsXG4gICAgICB9LCB0aGlzLnJlbmRlckNvbnRlbnQoKSwgc2hvd0RvdWJsZVZpZXcgJiYgdGhpcy5yZW5kZXJDb250ZW50KHRydWUpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2ZVN0YXJ0RGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZVByb3BzID0gdGhpcy5wcm9wcy5hY3RpdmVTdGFydERhdGU7XG4gICAgICB2YXIgYWN0aXZlU3RhcnREYXRlU3RhdGUgPSB0aGlzLnN0YXRlLmFjdGl2ZVN0YXJ0RGF0ZTtcbiAgICAgIHJldHVybiBhY3RpdmVTdGFydERhdGVQcm9wcyB8fCBhY3RpdmVTdGFydERhdGVTdGF0ZSB8fCBnZXRJbml0aWFsQWN0aXZlU3RhcnREYXRlKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2VsZWN0UmFuZ2UgPSBfdGhpcyRwcm9wczkuc2VsZWN0UmFuZ2UsXG4gICAgICAgICAgdmFsdWVQcm9wcyA9IF90aGlzJHByb3BzOS52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZVN0YXRlID0gdGhpcy5zdGF0ZS52YWx1ZTsgLy8gSW4gdGhlIG1pZGRsZSBvZiByYW5nZSBzZWxlY3Rpb24sIHVzZSB2YWx1ZSBmcm9tIHN0YXRlXG5cbiAgICAgIGlmIChzZWxlY3RSYW5nZSAmJiBnZXRJc1NpbmdsZVZhbHVlKHZhbHVlU3RhdGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVQcm9wcyAhPT0gdW5kZWZpbmVkID8gdmFsdWVQcm9wcyA6IHZhbHVlU3RhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlVHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIG1heERldGFpbCA9IHRoaXMucHJvcHMubWF4RGV0YWlsO1xuICAgICAgcmV0dXJuIGdldFZhbHVlVHlwZShtYXhEZXRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2aWV3XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWluRGV0YWlsID0gX3RoaXMkcHJvcHMxMC5taW5EZXRhaWwsXG4gICAgICAgICAgbWF4RGV0YWlsID0gX3RoaXMkcHJvcHMxMC5tYXhEZXRhaWwsXG4gICAgICAgICAgdmlld1Byb3BzID0gX3RoaXMkcHJvcHMxMC52aWV3O1xuICAgICAgdmFyIHZpZXdTdGF0ZSA9IHRoaXMuc3RhdGUudmlldztcbiAgICAgIHJldHVybiBnZXRWaWV3KHZpZXdQcm9wcyB8fCB2aWV3U3RhdGUsIG1pbkRldGFpbCwgbWF4RGV0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmlld3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5EZXRhaWwgPSBfdGhpcyRwcm9wczExLm1pbkRldGFpbCxcbiAgICAgICAgICBtYXhEZXRhaWwgPSBfdGhpcyRwcm9wczExLm1heERldGFpbDtcbiAgICAgIHJldHVybiBnZXRMaW1pdGVkVmlld3MobWluRGV0YWlsLCBtYXhEZXRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJob3ZlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHNlbGVjdFJhbmdlID0gdGhpcy5wcm9wcy5zZWxlY3RSYW5nZTtcbiAgICAgIHZhciBob3ZlciA9IHRoaXMuc3RhdGUuaG92ZXI7XG4gICAgICByZXR1cm4gc2VsZWN0UmFuZ2UgPyBob3ZlciA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRyaWxsRG93bkF2YWlsYWJsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgcmV0dXJuIHZpZXdzLmluZGV4T2YodmlldykgPCB2aWV3cy5sZW5ndGggLSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkcmlsbFVwQXZhaWxhYmxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgdmlldyA9IHRoaXMudmlldyxcbiAgICAgICAgICB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICByZXR1cm4gdmlld3MuaW5kZXhPZih2aWV3KSA+IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBDYWxlbmRhciBhcyBkZWZhdWx0IH07XG5DYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1heERldGFpbDogJ21vbnRoJyxcbiAgbWluRGV0YWlsOiAnY2VudHVyeScsXG4gIHJldHVyblZhbHVlOiAnc3RhcnQnLFxuICBzaG93TmF2aWdhdGlvbjogdHJ1ZSxcbiAgc2hvd05laWdoYm9yaW5nTW9udGg6IHRydWVcbn07XG52YXIgaXNBY3RpdmVTdGFydERhdGUgPSBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKTtcbnZhciBpc0xvb3NlVmFsdWUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBpc1ZhbHVlXSk7XG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZVN0YXJ0RGF0ZTogaXNBY3RpdmVTdGFydERhdGUsXG4gIGFsbG93UGFydGlhbFJhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FsZW5kYXJUeXBlOiBpc0NhbGVuZGFyVHlwZSxcbiAgY2xhc3NOYW1lOiBpc0NsYXNzTmFtZSxcbiAgZGVmYXVsdEFjdGl2ZVN0YXJ0RGF0ZTogaXNBY3RpdmVTdGFydERhdGUsXG4gIGRlZmF1bHRWYWx1ZTogaXNMb29zZVZhbHVlLFxuICBkZWZhdWx0VmlldzogaXNWaWV3LFxuICBmb3JtYXRMb25nRGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdE1vbnRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybWF0TW9udGhZZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybWF0U2hvcnRXZWVrZGF5OiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybWF0WWVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0UmVmOiBpc1JlZixcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBpc01heERhdGUsXG4gIG1heERldGFpbDogUHJvcFR5cGVzLm9uZU9mKGFsbFZpZXdzKSxcbiAgbWluRGF0ZTogaXNNaW5EYXRlLFxuICBtaW5EZXRhaWw6IFByb3BUeXBlcy5vbmVPZihhbGxWaWV3cyksXG4gIG5hdmlnYXRpb25BcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hdmlnYXRpb25MYWJlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG5leHQyQXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuZXh0MkxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgbmV4dEFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmV4dExhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgb25BY3RpdmVTdGFydERhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2tEYXk6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrRGVjYWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja01vbnRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja1dlZWtOdW1iZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrWWVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRHJpbGxEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EcmlsbFVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WaWV3Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJldjJBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZXYyTGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBwcmV2QXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmV2TGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICByZXR1cm5WYWx1ZTogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJywgJ3JhbmdlJ10pLFxuICBzZWxlY3RSYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dEb3VibGVWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dOYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd05laWdoYm9yaW5nTW9udGg6IFByb3BUeXBlcy5ib29sLFxuICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICB0aWxlQ2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgaXNDbGFzc05hbWVdKSxcbiAgdGlsZUNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuICB0aWxlRGlzYWJsZWQ6IFByb3BUeXBlcy5mdW5jLFxuICB2YWx1ZTogaXNMb29zZVZhbHVlLFxuICB2aWV3OiBpc1ZpZXdcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRVc2VyTG9jYWxlIH0gZnJvbSAnZ2V0LXVzZXItbG9jYWxlJztcbmltcG9ydCB7IGdldENlbnR1cnlMYWJlbCwgZ2V0RGVjYWRlTGFiZWwsIGdldEJlZ2luTmV4dCwgZ2V0QmVnaW5OZXh0MiwgZ2V0QmVnaW5QcmV2aW91cywgZ2V0QmVnaW5QcmV2aW91czIsIGdldEVuZFByZXZpb3VzLCBnZXRFbmRQcmV2aW91czIgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXMnO1xuaW1wb3J0IHsgZm9ybWF0TW9udGhZZWFyIGFzIGRlZmF1bHRGb3JtYXRNb250aFllYXIsIGZvcm1hdFllYXIgYXMgZGVmYXVsdEZvcm1hdFllYXIgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZUZvcm1hdHRlcic7XG5pbXBvcnQgeyBpc1ZpZXcsIGlzVmlld3MgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbnZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX25hdmlnYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbihfcmVmKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBfcmVmLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGRyaWxsVXAgPSBfcmVmLmRyaWxsVXAsXG4gICAgICBfcmVmJGZvcm1hdE1vbnRoWWVhciA9IF9yZWYuZm9ybWF0TW9udGhZZWFyLFxuICAgICAgZm9ybWF0TW9udGhZZWFyID0gX3JlZiRmb3JtYXRNb250aFllYXIgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRNb250aFllYXIgOiBfcmVmJGZvcm1hdE1vbnRoWWVhcixcbiAgICAgIF9yZWYkZm9ybWF0WWVhciA9IF9yZWYuZm9ybWF0WWVhcixcbiAgICAgIGZvcm1hdFllYXIgPSBfcmVmJGZvcm1hdFllYXIgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRZZWFyIDogX3JlZiRmb3JtYXRZZWFyLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIF9yZWYkbmF2aWdhdGlvbkFyaWFMYSA9IF9yZWYubmF2aWdhdGlvbkFyaWFMYWJlbCxcbiAgICAgIG5hdmlnYXRpb25BcmlhTGFiZWwgPSBfcmVmJG5hdmlnYXRpb25BcmlhTGEgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRuYXZpZ2F0aW9uQXJpYUxhLFxuICAgICAgbmF2aWdhdGlvbkxhYmVsID0gX3JlZi5uYXZpZ2F0aW9uTGFiZWwsXG4gICAgICBfcmVmJG5leHQyQXJpYUxhYmVsID0gX3JlZi5uZXh0MkFyaWFMYWJlbCxcbiAgICAgIG5leHQyQXJpYUxhYmVsID0gX3JlZiRuZXh0MkFyaWFMYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJG5leHQyQXJpYUxhYmVsLFxuICAgICAgX3JlZiRuZXh0MkxhYmVsID0gX3JlZi5uZXh0MkxhYmVsLFxuICAgICAgbmV4dDJMYWJlbCA9IF9yZWYkbmV4dDJMYWJlbCA9PT0gdm9pZCAwID8gJ8K7JyA6IF9yZWYkbmV4dDJMYWJlbCxcbiAgICAgIF9yZWYkbmV4dEFyaWFMYWJlbCA9IF9yZWYubmV4dEFyaWFMYWJlbCxcbiAgICAgIG5leHRBcmlhTGFiZWwgPSBfcmVmJG5leHRBcmlhTGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRuZXh0QXJpYUxhYmVsLFxuICAgICAgX3JlZiRuZXh0TGFiZWwgPSBfcmVmLm5leHRMYWJlbCxcbiAgICAgIG5leHRMYWJlbCA9IF9yZWYkbmV4dExhYmVsID09PSB2b2lkIDAgPyAn4oC6JyA6IF9yZWYkbmV4dExhYmVsLFxuICAgICAgX3JlZiRwcmV2MkFyaWFMYWJlbCA9IF9yZWYucHJldjJBcmlhTGFiZWwsXG4gICAgICBwcmV2MkFyaWFMYWJlbCA9IF9yZWYkcHJldjJBcmlhTGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRwcmV2MkFyaWFMYWJlbCxcbiAgICAgIF9yZWYkcHJldjJMYWJlbCA9IF9yZWYucHJldjJMYWJlbCxcbiAgICAgIHByZXYyTGFiZWwgPSBfcmVmJHByZXYyTGFiZWwgPT09IHZvaWQgMCA/ICfCqycgOiBfcmVmJHByZXYyTGFiZWwsXG4gICAgICBfcmVmJHByZXZBcmlhTGFiZWwgPSBfcmVmLnByZXZBcmlhTGFiZWwsXG4gICAgICBwcmV2QXJpYUxhYmVsID0gX3JlZiRwcmV2QXJpYUxhYmVsID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkcHJldkFyaWFMYWJlbCxcbiAgICAgIF9yZWYkcHJldkxhYmVsID0gX3JlZi5wcmV2TGFiZWwsXG4gICAgICBwcmV2TGFiZWwgPSBfcmVmJHByZXZMYWJlbCA9PT0gdm9pZCAwID8gJ+KAuScgOiBfcmVmJHByZXZMYWJlbCxcbiAgICAgIHNldEFjdGl2ZVN0YXJ0RGF0ZSA9IF9yZWYuc2V0QWN0aXZlU3RhcnREYXRlLFxuICAgICAgc2hvd0RvdWJsZVZpZXcgPSBfcmVmLnNob3dEb3VibGVWaWV3LFxuICAgICAgdmlldyA9IF9yZWYudmlldyxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cztcbiAgdmFyIGRyaWxsVXBBdmFpbGFibGUgPSB2aWV3cy5pbmRleE9mKHZpZXcpID4gMDtcbiAgdmFyIHNob3VsZFNob3dQcmV2TmV4dDJCdXR0b25zID0gdmlldyAhPT0gJ2NlbnR1cnknO1xuICB2YXIgcHJldmlvdXNBY3RpdmVTdGFydERhdGUgPSBnZXRCZWdpblByZXZpb3VzKHZpZXcsIGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gIHZhciBwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZTIgPSBzaG91bGRTaG93UHJldk5leHQyQnV0dG9ucyAmJiBnZXRCZWdpblByZXZpb3VzMih2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgbmV4dEFjdGl2ZVN0YXJ0RGF0ZSA9IGdldEJlZ2luTmV4dCh2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgbmV4dEFjdGl2ZVN0YXJ0RGF0ZTIgPSBzaG91bGRTaG93UHJldk5leHQyQnV0dG9ucyAmJiBnZXRCZWdpbk5leHQyKHZpZXcsIGFjdGl2ZVN0YXJ0RGF0ZSk7XG5cbiAgdmFyIHByZXZCdXR0b25EaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJldmlvdXNBY3RpdmVTdGFydERhdGUuZ2V0RnVsbFllYXIoKSA8IDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c0FjdGl2ZUVuZERhdGUgPSBnZXRFbmRQcmV2aW91cyh2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuICAgIHJldHVybiBtaW5EYXRlICYmIG1pbkRhdGUgPj0gcHJldmlvdXNBY3RpdmVFbmREYXRlO1xuICB9KCk7XG5cbiAgdmFyIHByZXYyQnV0dG9uRGlzYWJsZWQgPSBzaG91bGRTaG93UHJldk5leHQyQnV0dG9ucyAmJiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByZXZpb3VzQWN0aXZlU3RhcnREYXRlMi5nZXRGdWxsWWVhcigpIDwgMTAwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzQWN0aXZlRW5kRGF0ZSA9IGdldEVuZFByZXZpb3VzMih2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuICAgIHJldHVybiBtaW5EYXRlICYmIG1pbkRhdGUgPj0gcHJldmlvdXNBY3RpdmVFbmREYXRlO1xuICB9KCk7XG5cbiAgdmFyIG5leHRCdXR0b25EaXNhYmxlZCA9IG1heERhdGUgJiYgbWF4RGF0ZSA8PSBuZXh0QWN0aXZlU3RhcnREYXRlO1xuICB2YXIgbmV4dDJCdXR0b25EaXNhYmxlZCA9IHNob3VsZFNob3dQcmV2TmV4dDJCdXR0b25zICYmIG1heERhdGUgJiYgbWF4RGF0ZSA8PSBuZXh0QWN0aXZlU3RhcnREYXRlMjtcblxuICBmdW5jdGlvbiBvbkNsaWNrUHJldmlvdXMoKSB7XG4gICAgc2V0QWN0aXZlU3RhcnREYXRlKHByZXZpb3VzQWN0aXZlU3RhcnREYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tQcmV2aW91czIoKSB7XG4gICAgc2V0QWN0aXZlU3RhcnREYXRlKHByZXZpb3VzQWN0aXZlU3RhcnREYXRlMik7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrTmV4dCgpIHtcbiAgICBzZXRBY3RpdmVTdGFydERhdGUobmV4dEFjdGl2ZVN0YXJ0RGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrTmV4dDIoKSB7XG4gICAgc2V0QWN0aXZlU3RhcnREYXRlKG5leHRBY3RpdmVTdGFydERhdGUyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckxhYmVsKGRhdGUpIHtcbiAgICB2YXIgbGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgICAgY2FzZSAnY2VudHVyeSc6XG4gICAgICAgICAgcmV0dXJuIGdldENlbnR1cnlMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGRhdGUpO1xuXG4gICAgICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICAgICAgcmV0dXJuIGdldERlY2FkZUxhYmVsKGxvY2FsZSwgZm9ybWF0WWVhciwgZGF0ZSk7XG5cbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdFllYXIobG9jYWxlLCBkYXRlKTtcblxuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbnRoWWVhcihsb2NhbGUsIGRhdGUpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2aWV3OiBcIi5jb25jYXQodmlldywgXCIuXCIpKTtcbiAgICAgIH1cbiAgICB9KCk7XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbkxhYmVsID8gbmF2aWdhdGlvbkxhYmVsKHtcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBnZXRVc2VyTG9jYWxlKCksXG4gICAgICB2aWV3OiB2aWV3XG4gICAgfSkgOiBsYWJlbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckJ1dHRvbigpIHtcbiAgICB2YXIgbGFiZWxDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19sYWJlbFwiKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IG5hdmlnYXRpb25BcmlhTGFiZWwsXG4gICAgICBjbGFzc05hbWU6IGxhYmVsQ2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQ6ICFkcmlsbFVwQXZhaWxhYmxlLFxuICAgICAgb25DbGljazogZHJpbGxVcCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZsZXhHcm93OiAxXG4gICAgICB9LFxuICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGxhYmVsQ2xhc3NOYW1lLCBcIl9fbGFiZWxUZXh0IFwiKS5jb25jYXQobGFiZWxDbGFzc05hbWUsIFwiX19sYWJlbFRleHQtLWZyb21cIilcbiAgICB9LCByZW5kZXJMYWJlbChhY3RpdmVTdGFydERhdGUpKSwgc2hvd0RvdWJsZVZpZXcgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGxhYmVsQ2xhc3NOYW1lLCBcIl9fZGl2aWRlclwiKVxuICAgIH0sICcgJywgXCJcXHUyMDEzXCIsICcgJyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGxhYmVsQ2xhc3NOYW1lLCBcIl9fbGFiZWxUZXh0IFwiKS5jb25jYXQobGFiZWxDbGFzc05hbWUsIFwiX19sYWJlbFRleHQtLXRvXCIpXG4gICAgfSwgcmVuZGVyTGFiZWwobmV4dEFjdGl2ZVN0YXJ0RGF0ZSkpKSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH0sIHByZXYyTGFiZWwgIT09IG51bGwgJiYgc2hvdWxkU2hvd1ByZXZOZXh0MkJ1dHRvbnMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBwcmV2MkFyaWFMYWJlbCxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2Fycm93IFwiKS5jb25jYXQoY2xhc3NOYW1lLCBcIl9fcHJldjItYnV0dG9uXCIpLFxuICAgIGRpc2FibGVkOiBwcmV2MkJ1dHRvbkRpc2FibGVkLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2tQcmV2aW91czIsXG4gICAgdHlwZTogXCJidXR0b25cIlxuICB9LCBwcmV2MkxhYmVsKSwgcHJldkxhYmVsICE9PSBudWxsICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogcHJldkFyaWFMYWJlbCxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2Fycm93IFwiKS5jb25jYXQoY2xhc3NOYW1lLCBcIl9fcHJldi1idXR0b25cIiksXG4gICAgZGlzYWJsZWQ6IHByZXZCdXR0b25EaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrUHJldmlvdXMsXG4gICAgdHlwZTogXCJidXR0b25cIlxuICB9LCBwcmV2TGFiZWwpLCByZW5kZXJCdXR0b24oKSwgbmV4dExhYmVsICE9PSBudWxsICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogbmV4dEFyaWFMYWJlbCxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2Fycm93IFwiKS5jb25jYXQoY2xhc3NOYW1lLCBcIl9fbmV4dC1idXR0b25cIiksXG4gICAgZGlzYWJsZWQ6IG5leHRCdXR0b25EaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrTmV4dCxcbiAgICB0eXBlOiBcImJ1dHRvblwiXG4gIH0sIG5leHRMYWJlbCksIG5leHQyTGFiZWwgIT09IG51bGwgJiYgc2hvdWxkU2hvd1ByZXZOZXh0MkJ1dHRvbnMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBuZXh0MkFyaWFMYWJlbCxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2Fycm93IFwiKS5jb25jYXQoY2xhc3NOYW1lLCBcIl9fbmV4dDItYnV0dG9uXCIpLFxuICAgIGRpc2FibGVkOiBuZXh0MkJ1dHRvbkRpc2FibGVkLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2tOZXh0MixcbiAgICB0eXBlOiBcImJ1dHRvblwiXG4gIH0sIG5leHQyTGFiZWwpKTtcbn1cbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICBhY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIGRyaWxsVXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcm1hdE1vbnRoWWVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdFllYXI6IFByb3BUeXBlcy5mdW5jLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbmF2aWdhdGlvbkFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmF2aWdhdGlvbkxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgbmV4dDJBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5leHQyTGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBuZXh0QXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuZXh0TGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBwcmV2MkFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldjJMYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIHByZXZBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZXZMYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIHNldEFjdGl2ZVN0YXJ0RGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvd0RvdWJsZVZpZXc6IFByb3BUeXBlcy5ib29sLFxuICB2aWV3OiBpc1ZpZXcuaXNSZXF1aXJlZCxcbiAgdmlld3M6IGlzVmlld3MuaXNSZXF1aXJlZFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlY2FkZXMgZnJvbSAnLi9DZW50dXJ5Vmlldy9EZWNhZGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnR1cnlWaWV3KHByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlbmRlckRlY2FkZXMoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlY2FkZXMsIHByb3BzKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNhbGVuZGFyX19jZW50dXJ5LXZpZXdcIlxuICB9LCByZW5kZXJEZWNhZGVzKCkpO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldERlY2FkZVN0YXJ0LCBnZXREZWNhZGVFbmQgfSBmcm9tICdAd29qdGVrbWFqL2RhdGUtdXRpbHMnO1xuaW1wb3J0IFRpbGUgZnJvbSAnLi4vVGlsZSc7XG5pbXBvcnQgeyBnZXREZWNhZGVMYWJlbCB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyBmb3JtYXRZZWFyIGFzIGRlZmF1bHRGb3JtYXRZZWFyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IHsgdGlsZVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG52YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX19jZW50dXJ5LXZpZXdfX2RlY2FkZXNfX2RlY2FkZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWNhZGUoX3JlZikge1xuICB2YXIgY2xhc3NlcyA9IF9yZWYuY2xhc3NlcyxcbiAgICAgIF9yZWYkZm9ybWF0WWVhciA9IF9yZWYuZm9ybWF0WWVhcixcbiAgICAgIGZvcm1hdFllYXIgPSBfcmVmJGZvcm1hdFllYXIgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRZZWFyIDogX3JlZiRmb3JtYXRZZWFyLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc2VzXCIsIFwiZm9ybWF0WWVhclwiXSk7XG5cbiAgdmFyIGRhdGUgPSBvdGhlclByb3BzLmRhdGUsXG4gICAgICBsb2NhbGUgPSBvdGhlclByb3BzLmxvY2FsZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGUsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgY2xhc3NlczogW10uY29uY2F0KGNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgbWF4RGF0ZVRyYW5zZm9ybTogZ2V0RGVjYWRlRW5kLFxuICAgIG1pbkRhdGVUcmFuc2Zvcm06IGdldERlY2FkZVN0YXJ0LFxuICAgIHZpZXc6IFwiY2VudHVyeVwiXG4gIH0pLCBnZXREZWNhZGVMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGRhdGUpKTtcbn1cbkRlY2FkZS5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVQcm9wcyksIHt9LCB7XG4gIGZvcm1hdFllYXI6IFByb3BUeXBlcy5mdW5jXG59KTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERlY2FkZVN0YXJ0IH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlR3JvdXAgZnJvbSAnLi4vVGlsZUdyb3VwJztcbmltcG9ydCBEZWNhZGUgZnJvbSAnLi9EZWNhZGUnO1xuaW1wb3J0IHsgZ2V0QmVnaW5PZkNlbnR1cnlZZWFyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IHRpbGVHcm91cFByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWNhZGVzKHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGU7XG4gIHZhciBzdGFydCA9IGdldEJlZ2luT2ZDZW50dXJ5WWVhcihhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgZW5kID0gc3RhcnQgKyA5OTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGVHcm91cCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNhbGVuZGFyX19jZW50dXJ5LXZpZXdfX2RlY2FkZXNcIixcbiAgICBkYXRlVHJhbnNmb3JtOiBnZXREZWNhZGVTdGFydCxcbiAgICBkYXRlVHlwZTogXCJkZWNhZGVcIixcbiAgICBlbmQ6IGVuZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgc3RlcDogMTAsXG4gICAgdGlsZTogRGVjYWRlXG4gIH0pKTtcbn1cbkRlY2FkZXMucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZCh7fSwgdGlsZUdyb3VwUHJvcHMpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWWVhcnMgZnJvbSAnLi9EZWNhZGVWaWV3L1llYXJzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlY2FkZVZpZXcocHJvcHMpIHtcbiAgZnVuY3Rpb24gcmVuZGVyWWVhcnMoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFllYXJzLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fZGVjYWRlLXZpZXdcIlxuICB9LCByZW5kZXJZZWFycygpKTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRZZWFyU3RhcnQsIGdldFllYXJFbmQgfSBmcm9tICdAd29qdGVrbWFqL2RhdGUtdXRpbHMnO1xuaW1wb3J0IFRpbGUgZnJvbSAnLi4vVGlsZSc7XG5pbXBvcnQgeyBmb3JtYXRZZWFyIGFzIGRlZmF1bHRGb3JtYXRZZWFyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IHsgdGlsZVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG52YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX19kZWNhZGUtdmlld19feWVhcnNfX3llYXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWWVhcihfcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgX3JlZiRmb3JtYXRZZWFyID0gX3JlZi5mb3JtYXRZZWFyLFxuICAgICAgZm9ybWF0WWVhciA9IF9yZWYkZm9ybWF0WWVhciA9PT0gdm9pZCAwID8gZGVmYXVsdEZvcm1hdFllYXIgOiBfcmVmJGZvcm1hdFllYXIsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzZXNcIiwgXCJmb3JtYXRZZWFyXCJdKTtcblxuICB2YXIgZGF0ZSA9IG90aGVyUHJvcHMuZGF0ZSxcbiAgICAgIGxvY2FsZSA9IG90aGVyUHJvcHMubG9jYWxlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGlsZSwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICBjbGFzc2VzOiBbXS5jb25jYXQoY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICBtYXhEYXRlVHJhbnNmb3JtOiBnZXRZZWFyRW5kLFxuICAgIG1pbkRhdGVUcmFuc2Zvcm06IGdldFllYXJTdGFydCxcbiAgICB2aWV3OiBcImRlY2FkZVwiXG4gIH0pLCBmb3JtYXRZZWFyKGxvY2FsZSwgZGF0ZSkpO1xufVxuWWVhci5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVQcm9wcyksIHt9LCB7XG4gIGZvcm1hdFllYXI6IFByb3BUeXBlcy5mdW5jXG59KTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaWxlR3JvdXAgZnJvbSAnLi4vVGlsZUdyb3VwJztcbmltcG9ydCBZZWFyIGZyb20gJy4vWWVhcic7XG5pbXBvcnQgeyBnZXRCZWdpbk9mRGVjYWRlWWVhciB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyB0aWxlR3JvdXBQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWWVhcnMocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IHByb3BzLmFjdGl2ZVN0YXJ0RGF0ZTtcbiAgdmFyIHN0YXJ0ID0gZ2V0QmVnaW5PZkRlY2FkZVllYXIoYWN0aXZlU3RhcnREYXRlKTtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgOTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGVHcm91cCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNhbGVuZGFyX19kZWNhZGUtdmlld19feWVhcnNcIixcbiAgICBkYXRlVHJhbnNmb3JtOiBmdW5jdGlvbiBkYXRlVHJhbnNmb3JtKHllYXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcbiAgICB9LFxuICAgIGRhdGVUeXBlOiBcInllYXJcIixcbiAgICBlbmQ6IGVuZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgdGlsZTogWWVhclxuICB9KSk7XG59XG5ZZWFycy5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aWxlR3JvdXBQcm9wcyk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiB0b1BlcmNlbnQobnVtKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChudW0sIFwiJVwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxleChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uLFxuICAgICAgY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgb2Zmc2V0ID0gX3JlZi5vZmZzZXQsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICB3cmFwID0gX3JlZi53cmFwLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpcmVjdGlvblwiLCBcImNvdW50XCIsIFwib2Zmc2V0XCIsIFwic3R5bGVcIiwgXCJ3cmFwXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIGZsZXhXcmFwOiB3cmFwID8gJ3dyYXAnIDogJ25vLXdyYXAnXG4gICAgfSwgc3R5bGUpXG4gIH0sIG90aGVyUHJvcHMpLCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBmbGV4QmFzaXM6IHRvUGVyY2VudCgxMDAgLyBjb3VudCksXG4gICAgICAgIG1heFdpZHRoOiB0b1BlcmNlbnQoMTAwIC8gY291bnQpLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCAmJiBpbmRleCA9PT0gMCA/IHRvUGVyY2VudCgxMDAgKiBvZmZzZXQgLyBjb3VudCkgOiBudWxsXG4gICAgICB9XG4gICAgfSkpO1xuICB9KSk7XG59XG5GbGV4LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSksXG4gIHdyYXA6IFByb3BUeXBlcy5ib29sXG59OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERheXMgZnJvbSAnLi9Nb250aFZpZXcvRGF5cyc7XG5pbXBvcnQgV2Vla2RheXMgZnJvbSAnLi9Nb250aFZpZXcvV2Vla2RheXMnO1xuaW1wb3J0IFdlZWtOdW1iZXJzIGZyb20gJy4vTW9udGhWaWV3L1dlZWtOdW1iZXJzJztcbmltcG9ydCB7IENBTEVOREFSX1RZUEVTLCBDQUxFTkRBUl9UWVBFX0xPQ0FMRVMgfSBmcm9tICcuL3NoYXJlZC9jb25zdCc7XG5pbXBvcnQgeyBpc0NhbGVuZGFyVHlwZSB9IGZyb20gJy4vc2hhcmVkL3Byb3BUeXBlcyc7XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyVHlwZUZyb21Mb2NhbGUobG9jYWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhDQUxFTkRBUl9UWVBFX0xPQ0FMRVMpLmZpbmQoZnVuY3Rpb24gKGNhbGVuZGFyVHlwZSkge1xuICAgIHJldHVybiBDQUxFTkRBUl9UWVBFX0xPQ0FMRVNbY2FsZW5kYXJUeXBlXS5pbmNsdWRlcyhsb2NhbGUpO1xuICB9KSB8fCBDQUxFTkRBUl9UWVBFUy5JU09fODYwMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9udGhWaWV3KHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBzaG93Rml4ZWROdW1iZXJPZldlZWtzID0gcHJvcHMuc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcztcblxuICB2YXIgX3Byb3BzJGNhbGVuZGFyVHlwZSA9IHByb3BzLmNhbGVuZGFyVHlwZSxcbiAgICAgIGNhbGVuZGFyVHlwZSA9IF9wcm9wcyRjYWxlbmRhclR5cGUgPT09IHZvaWQgMCA/IGdldENhbGVuZGFyVHlwZUZyb21Mb2NhbGUobG9jYWxlKSA6IF9wcm9wcyRjYWxlbmRhclR5cGUsXG4gICAgICBmb3JtYXRTaG9ydFdlZWtkYXkgPSBwcm9wcy5mb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgICBvbkNsaWNrV2Vla051bWJlciA9IHByb3BzLm9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzID0gcHJvcHMuc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2FsZW5kYXJUeXBlXCIsIFwiZm9ybWF0U2hvcnRXZWVrZGF5XCIsIFwib25DbGlja1dlZWtOdW1iZXJcIiwgXCJzaG93V2Vla051bWJlcnNcIl0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlcldlZWtkYXlzKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXZWVrZGF5cywge1xuICAgICAgY2FsZW5kYXJUeXBlOiBjYWxlbmRhclR5cGUsXG4gICAgICBmb3JtYXRTaG9ydFdlZWtkYXk6IGZvcm1hdFNob3J0V2Vla2RheSxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcldlZWtOdW1iZXJzKCkge1xuICAgIGlmICghc2hvd1dlZWtOdW1iZXJzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2Vla051bWJlcnMsIHtcbiAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogYWN0aXZlU3RhcnREYXRlLFxuICAgICAgY2FsZW5kYXJUeXBlOiBjYWxlbmRhclR5cGUsXG4gICAgICBvbkNsaWNrV2Vla051bWJlcjogb25DbGlja1dlZWtOdW1iZXIsXG4gICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICAgIHNob3dGaXhlZE51bWJlck9mV2Vla3M6IHNob3dGaXhlZE51bWJlck9mV2Vla3NcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERheXMsIF9leHRlbmRzKHtcbiAgICAgIGNhbGVuZGFyVHlwZTogY2FsZW5kYXJUeXBlXG4gICAgfSwgY2hpbGRQcm9wcykpO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZSA9ICdyZWFjdC1jYWxlbmRhcl9fbW9udGgtdmlldyc7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCBzaG93V2Vla051bWJlcnMgPyBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS13ZWVrTnVtYmVyc1wiKSA6ICcnXS5qb2luKCcgJylcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gICAgfVxuICB9LCByZW5kZXJXZWVrTnVtYmVycygpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSwgcmVuZGVyV2Vla2RheXMoKSwgcmVuZGVyRGF5cygpKSkpO1xufVxuTW9udGhWaWV3LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlU3RhcnREYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBjYWxlbmRhclR5cGU6IGlzQ2FsZW5kYXJUeXBlLFxuICBmb3JtYXRTaG9ydFdlZWtkYXk6IFByb3BUeXBlcy5mdW5jLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2tXZWVrTnVtYmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2xcbn07IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0RGF5U3RhcnQsIGdldERheUVuZCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgVGlsZSBmcm9tICcuLi9UaWxlJztcbmltcG9ydCB7IGlzV2Vla2VuZCB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyBmb3JtYXRMb25nRGF0ZSBhcyBkZWZhdWx0Rm9ybWF0TG9uZ0RhdGUgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZUZvcm1hdHRlcic7XG5pbXBvcnQgeyB0aWxlUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbnZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX21vbnRoLXZpZXdfX2RheXNfX2RheSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXkoX3JlZikge1xuICB2YXIgX3JlZiRmb3JtYXRMb25nRGF0ZSA9IF9yZWYuZm9ybWF0TG9uZ0RhdGUsXG4gICAgICBmb3JtYXRMb25nRGF0ZSA9IF9yZWYkZm9ybWF0TG9uZ0RhdGUgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRMb25nRGF0ZSA6IF9yZWYkZm9ybWF0TG9uZ0RhdGUsXG4gICAgICBjYWxlbmRhclR5cGUgPSBfcmVmLmNhbGVuZGFyVHlwZSxcbiAgICAgIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBjdXJyZW50TW9udGhJbmRleCA9IF9yZWYuY3VycmVudE1vbnRoSW5kZXgsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvcm1hdExvbmdEYXRlXCIsIFwiY2FsZW5kYXJUeXBlXCIsIFwiY2xhc3Nlc1wiLCBcImN1cnJlbnRNb250aEluZGV4XCJdKTtcblxuICB2YXIgZGF0ZSA9IG90aGVyUHJvcHMuZGF0ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGUsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgY2xhc3NlczogW10uY29uY2F0KGNsYXNzZXMsIGNsYXNzTmFtZSwgaXNXZWVrZW5kKGRhdGUsIGNhbGVuZGFyVHlwZSkgPyBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS13ZWVrZW5kXCIpIDogbnVsbCwgZGF0ZS5nZXRNb250aCgpICE9PSBjdXJyZW50TW9udGhJbmRleCA/IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItLW5laWdoYm9yaW5nTW9udGhcIikgOiBudWxsKSxcbiAgICBmb3JtYXRBYmJyOiBmb3JtYXRMb25nRGF0ZSxcbiAgICBtYXhEYXRlVHJhbnNmb3JtOiBnZXREYXlFbmQsXG4gICAgbWluRGF0ZVRyYW5zZm9ybTogZ2V0RGF5U3RhcnQsXG4gICAgdmlldzogXCJtb250aFwiXG4gIH0pLCBnZXREYXRlKGRhdGUpKTtcbn1cbkRheS5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVQcm9wcyksIHt9LCB7XG4gIGN1cnJlbnRNb250aEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGZvcm1hdExvbmdEYXRlOiBQcm9wVHlwZXMuZnVuY1xufSk7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgZ2V0TW9udGgsIGdldERheXNJbk1vbnRoIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlR3JvdXAgZnJvbSAnLi4vVGlsZUdyb3VwJztcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IGlzQ2FsZW5kYXJUeXBlLCB0aWxlR3JvdXBQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF5cyhwcm9wcykge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gcHJvcHMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgY2FsZW5kYXJUeXBlID0gcHJvcHMuY2FsZW5kYXJUeXBlO1xuXG4gIHZhciBzaG93Rml4ZWROdW1iZXJPZldlZWtzID0gcHJvcHMuc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyxcbiAgICAgIHNob3dOZWlnaGJvcmluZ01vbnRoID0gcHJvcHMuc2hvd05laWdoYm9yaW5nTW9udGgsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJzaG93Rml4ZWROdW1iZXJPZldlZWtzXCIsIFwic2hvd05laWdoYm9yaW5nTW9udGhcIl0pO1xuXG4gIHZhciB5ZWFyID0gZ2V0WWVhcihhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgbW9udGhJbmRleCA9IGdldE1vbnRoKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gIHZhciBoYXNGaXhlZE51bWJlck9mV2Vla3MgPSBzaG93Rml4ZWROdW1iZXJPZldlZWtzIHx8IHNob3dOZWlnaGJvcmluZ01vbnRoO1xuICB2YXIgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGFjdGl2ZVN0YXJ0RGF0ZSwgY2FsZW5kYXJUeXBlKTtcbiAgdmFyIG9mZnNldCA9IGhhc0ZpeGVkTnVtYmVyT2ZXZWVrcyA/IDAgOiBkYXlPZldlZWs7XG4gIC8qKlxuICAgKiBEZWZpbmVzIG9uIHdoaWNoIGRheSBvZiB0aGUgbW9udGggdGhlIGdyaWQgc2hhbGwgc3RhcnQuIElmIHdlIHNpbXBseSBzaG93IGN1cnJlbnRcbiAgICogbW9udGgsIHdlIG9idmlvdXNseSBzdGFydCBvbiBkYXkgb25lLCBidXQgaWYgc2hvd05laWdoYm9yaW5nTW9udGggaXMgc2V0IHRvXG4gICAqIHRydWUsIHdlIG5lZWQgdG8gZmluZCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB3ZWVrIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoIGlzIGluLlxuICAgKi9cblxuICB2YXIgc3RhcnQgPSAoaGFzRml4ZWROdW1iZXJPZldlZWtzID8gLWRheU9mV2VlayA6IDApICsgMTtcbiAgLyoqXG4gICAqIERlZmluZXMgb24gd2hpY2ggZGF5IG9mIHRoZSBtb250aCB0aGUgZ3JpZCBzaGFsbCBlbmQuIElmIHdlIHNpbXBseSBzaG93IGN1cnJlbnRcbiAgICogbW9udGgsIHdlIG5lZWQgdG8gc3RvcCBvbiB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoLCBidXQgaWYgc2hvd05laWdoYm9yaW5nTW9udGhcbiAgICogaXMgc2V0IHRvIHRydWUsIHdlIG5lZWQgdG8gZmluZCB0aGUgZW5kIG9mIHRoZSB3ZWVrIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggaXMgaW4uXG4gICAqL1xuXG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3dGaXhlZE51bWJlck9mV2Vla3MpIHtcbiAgICAgIC8vIEFsd2F5cyBzaG93IDYgd2Vla3NcbiAgICAgIHJldHVybiBzdGFydCArIDYgKiA3IC0gMTtcbiAgICB9XG5cbiAgICB2YXIgZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aChhY3RpdmVTdGFydERhdGUpO1xuXG4gICAgaWYgKHNob3dOZWlnaGJvcmluZ01vbnRoKSB7XG4gICAgICB2YXIgYWN0aXZlRW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBhY3RpdmVFbmREYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoSW5kZXgsIGRheXNJbk1vbnRoKTtcbiAgICAgIGFjdGl2ZUVuZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICB2YXIgZGF5c1VudGlsRW5kT2ZUaGVXZWVrID0gNyAtIGdldERheU9mV2VlayhhY3RpdmVFbmREYXRlLCBjYWxlbmRhclR5cGUpIC0gMTtcbiAgICAgIHJldHVybiBkYXlzSW5Nb250aCArIGRheXNVbnRpbEVuZE9mVGhlV2VlaztcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5c0luTW9udGg7XG4gIH0oKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGlsZUdyb3VwLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fbW9udGgtdmlld19fZGF5c1wiLFxuICAgIGNvdW50OiA3LFxuICAgIGN1cnJlbnRNb250aEluZGV4OiBtb250aEluZGV4LFxuICAgIGRhdGVUcmFuc2Zvcm06IGZ1bmN0aW9uIGRhdGVUcmFuc2Zvcm0oZGF5KSB7XG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XG4gICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcbiAgICBkYXRlVHlwZTogXCJkYXlcIixcbiAgICBlbmQ6IGVuZCxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgdGlsZTogRGF5XG4gIH0pKTtcbn1cbkRheXMucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZCh7XG4gIGNhbGVuZGFyVHlwZTogaXNDYWxlbmRhclR5cGUuaXNSZXF1aXJlZCxcbiAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dOZWlnaGJvcmluZ01vbnRoOiBQcm9wVHlwZXMuYm9vbFxufSwgdGlsZUdyb3VwUHJvcHMpOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla051bWJlcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgb25DbGlja1dlZWtOdW1iZXIgPSBfcmVmLm9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgd2Vla051bWJlciA9IF9yZWYud2Vla051bWJlcjtcbiAgdmFyIHByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJ3JlYWN0LWNhbGVuZGFyX190aWxlJyxcbiAgICBzdHlsZToge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9XG4gIH07XG4gIHZhciBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB3ZWVrTnVtYmVyKTtcbiAgcmV0dXJuIG9uQ2xpY2tXZWVrTnVtYmVyID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgcmV0dXJuIG9uQ2xpY2tXZWVrTnVtYmVyKHdlZWtOdW1iZXIsIGRhdGUsIGV2ZW50KTtcbiAgICB9LFxuICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgfSksIGNoaWxkcmVuKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHByb3BzLCBjaGlsZHJlbik7XG59XG5XZWVrTnVtYmVyLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgb25DbGlja1dlZWtOdW1iZXI6IFByb3BUeXBlcy5mdW5jLFxuICB3ZWVrTnVtYmVyOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgZ2V0TW9udGgsIGdldERhdGUsIGdldERheXNJbk1vbnRoIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBXZWVrTnVtYmVyIGZyb20gJy4vV2Vla051bWJlcic7XG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcbmltcG9ydCB7IGdldEJlZ2luT2ZXZWVrLCBnZXREYXlPZldlZWssIGdldFdlZWtOdW1iZXIgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXMnO1xuaW1wb3J0IHsgaXNDYWxlbmRhclR5cGUgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtOdW1iZXJzKHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICBjYWxlbmRhclR5cGUgPSBwcm9wcy5jYWxlbmRhclR5cGUsXG4gICAgICBvbkNsaWNrV2Vla051bWJlciA9IHByb3BzLm9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyA9IHByb3BzLnNob3dGaXhlZE51bWJlck9mV2Vla3M7XG5cbiAgdmFyIG51bWJlck9mV2Vla3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3dGaXhlZE51bWJlck9mV2Vla3MpIHtcbiAgICAgIHJldHVybiA2O1xuICAgIH1cblxuICAgIHZhciBudW1iZXJPZkRheXMgPSBnZXREYXlzSW5Nb250aChhY3RpdmVTdGFydERhdGUpO1xuICAgIHZhciBzdGFydFdlZWtkYXkgPSBnZXREYXlPZldlZWsoYWN0aXZlU3RhcnREYXRlLCBjYWxlbmRhclR5cGUpO1xuICAgIHZhciBkYXlzID0gbnVtYmVyT2ZEYXlzIC0gKDcgLSBzdGFydFdlZWtkYXkpO1xuICAgIHJldHVybiAxICsgTWF0aC5jZWlsKGRheXMgLyA3KTtcbiAgfSgpO1xuXG4gIHZhciBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeWVhciA9IGdldFllYXIoYWN0aXZlU3RhcnREYXRlKTtcbiAgICB2YXIgbW9udGhJbmRleCA9IGdldE1vbnRoKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gICAgdmFyIGRheSA9IGdldERhdGUoYWN0aXZlU3RhcnREYXRlKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyT2ZXZWVrczsgaW5kZXggKz0gMSkge1xuICAgICAgcmVzdWx0LnB1c2goZ2V0QmVnaW5PZldlZWsobmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5ICsgaW5kZXggKiA3KSwgY2FsZW5kYXJUeXBlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSgpO1xuXG4gIHZhciB3ZWVrTnVtYmVycyA9IGRhdGVzLm1hcChmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRXZWVrTnVtYmVyKGRhdGUsIGNhbGVuZGFyVHlwZSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fbW9udGgtdmlld19fd2Vla051bWJlcnNcIixcbiAgICBjb3VudDogbnVtYmVyT2ZXZWVrcyxcbiAgICBkaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgb25Gb2N1czogb25Nb3VzZUxlYXZlLFxuICAgIG9uTW91c2VPdmVyOiBvbk1vdXNlTGVhdmUsXG4gICAgc3R5bGU6IHtcbiAgICAgIGZsZXhCYXNpczogJ2NhbGMoMTAwJSAqICgxIC8gOCknLFxuICAgICAgZmxleFNocmluazogMFxuICAgIH1cbiAgfSwgd2Vla051bWJlcnMubWFwKGZ1bmN0aW9uICh3ZWVrTnVtYmVyLCB3ZWVrSW5kZXgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2Vla051bWJlciwge1xuICAgICAga2V5OiB3ZWVrTnVtYmVyLFxuICAgICAgZGF0ZTogZGF0ZXNbd2Vla0luZGV4XSxcbiAgICAgIG9uQ2xpY2tXZWVrTnVtYmVyOiBvbkNsaWNrV2Vla051bWJlcixcbiAgICAgIHdlZWtOdW1iZXI6IHdlZWtOdW1iZXJcbiAgICB9KTtcbiAgfSkpO1xufVxuV2Vla051bWJlcnMucHJvcFR5cGVzID0ge1xuICBhY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIGNhbGVuZGFyVHlwZTogaXNDYWxlbmRhclR5cGUuaXNSZXF1aXJlZCxcbiAgb25DbGlja1dlZWtOdW1iZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93Rml4ZWROdW1iZXJPZldlZWtzOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldFllYXIsIGdldE1vbnRoLCBnZXRNb250aFN0YXJ0IH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IGZvcm1hdFdlZWtkYXksIGZvcm1hdFNob3J0V2Vla2RheSBhcyBkZWZhdWx0Rm9ybWF0U2hvcnRXZWVrZGF5IH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IHsgaXNDYWxlbmRhclR5cGUgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbnZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX21vbnRoLXZpZXdfX3dlZWtkYXlzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtkYXlzKHByb3BzKSB7XG4gIHZhciBjYWxlbmRhclR5cGUgPSBwcm9wcy5jYWxlbmRhclR5cGUsXG4gICAgICBfcHJvcHMkZm9ybWF0U2hvcnRXZWUgPSBwcm9wcy5mb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgICBmb3JtYXRTaG9ydFdlZWtkYXkgPSBfcHJvcHMkZm9ybWF0U2hvcnRXZWUgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRTaG9ydFdlZWtkYXkgOiBfcHJvcHMkZm9ybWF0U2hvcnRXZWUsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmU7XG4gIHZhciBhbnlEYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIGJlZ2luT2ZNb250aCA9IGdldE1vbnRoU3RhcnQoYW55RGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0WWVhcihiZWdpbk9mTW9udGgpO1xuICB2YXIgbW9udGhJbmRleCA9IGdldE1vbnRoKGJlZ2luT2ZNb250aCk7XG4gIHZhciB3ZWVrZGF5cyA9IFtdO1xuXG4gIGZvciAodmFyIHdlZWtkYXkgPSAxOyB3ZWVrZGF5IDw9IDc7IHdlZWtkYXkgKz0gMSkge1xuICAgIHZhciB3ZWVrZGF5RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIHdlZWtkYXkgLSBnZXREYXlPZldlZWsoYmVnaW5PZk1vbnRoLCBjYWxlbmRhclR5cGUpKTtcbiAgICB2YXIgYWJiciA9IGZvcm1hdFdlZWtkYXkobG9jYWxlLCB3ZWVrZGF5RGF0ZSk7XG4gICAgd2Vla2RheXMucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAga2V5OiB3ZWVrZGF5LFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX193ZWVrZGF5XCIpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhYmJyXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBhYmJyLFxuICAgICAgdGl0bGU6IGFiYnJcbiAgICB9LCBmb3JtYXRTaG9ydFdlZWtkYXkobG9jYWxlLCB3ZWVrZGF5RGF0ZSkucmVwbGFjZSgnLicsICcnKSkpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgY291bnQ6IDcsXG4gICAgb25Gb2N1czogb25Nb3VzZUxlYXZlLFxuICAgIG9uTW91c2VPdmVyOiBvbk1vdXNlTGVhdmVcbiAgfSwgd2Vla2RheXMpO1xufVxuV2Vla2RheXMucHJvcFR5cGVzID0ge1xuICBjYWxlbmRhclR5cGU6IGlzQ2FsZW5kYXJUeXBlLmlzUmVxdWlyZWQsXG4gIGZvcm1hdFNob3J0V2Vla2RheTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xufTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtZXJnZUNsYXNzTmFtZXMgZnJvbSAnbWVyZ2UtY2xhc3MtbmFtZXMnO1xuaW1wb3J0IHsgdGlsZVByb3BzIH0gZnJvbSAnLi9zaGFyZWQvcHJvcFR5cGVzJztcblxuZnVuY3Rpb24gZ2V0VmFsdWUobmV4dFByb3BzLCBwcm9wKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBuZXh0UHJvcHMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgZGF0ZSA9IG5leHRQcm9wcy5kYXRlLFxuICAgICAgdmlldyA9IG5leHRQcm9wcy52aWV3O1xuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicgPyBwcm9wKHtcbiAgICBhY3RpdmVTdGFydERhdGU6IGFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICBkYXRlOiBkYXRlLFxuICAgIHZpZXc6IHZpZXdcbiAgfSkgOiBwcm9wO1xufVxuXG52YXIgVGlsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGlsZSwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUaWxlKTtcblxuICBmdW5jdGlvbiBUaWxlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge30pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbGUsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZSA9IF90aGlzJHByb3BzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wcy5jbGFzc2VzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wcy5kYXRlLFxuICAgICAgICAgIGZvcm1hdEFiYnIgPSBfdGhpcyRwcm9wcy5mb3JtYXRBYmJyLFxuICAgICAgICAgIGxvY2FsZSA9IF90aGlzJHByb3BzLmxvY2FsZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICBtYXhEYXRlVHJhbnNmb3JtID0gX3RoaXMkcHJvcHMubWF4RGF0ZVRyYW5zZm9ybSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMubWluRGF0ZSxcbiAgICAgICAgICBtaW5EYXRlVHJhbnNmb3JtID0gX3RoaXMkcHJvcHMubWluRGF0ZVRyYW5zZm9ybSxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMub25DbGljayxcbiAgICAgICAgICBvbk1vdXNlT3ZlciA9IF90aGlzJHByb3BzLm9uTW91c2VPdmVyLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdGlsZURpc2FibGVkID0gX3RoaXMkcHJvcHMudGlsZURpc2FibGVkLFxuICAgICAgICAgIHZpZXcgPSBfdGhpcyRwcm9wcy52aWV3O1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB0aWxlQ2xhc3NOYW1lID0gX3RoaXMkc3RhdGUudGlsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aWxlQ29udGVudCA9IF90aGlzJHN0YXRlLnRpbGVDb250ZW50O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzTmFtZXMoY2xhc3NlcywgdGlsZUNsYXNzTmFtZSksXG4gICAgICAgIGRpc2FibGVkOiBtaW5EYXRlICYmIG1pbkRhdGVUcmFuc2Zvcm0obWluRGF0ZSkgPiBkYXRlIHx8IG1heERhdGUgJiYgbWF4RGF0ZVRyYW5zZm9ybShtYXhEYXRlKSA8IGRhdGUgfHwgdGlsZURpc2FibGVkICYmIHRpbGVEaXNhYmxlZCh7XG4gICAgICAgICAgYWN0aXZlU3RhcnREYXRlOiBhY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICB2aWV3OiB2aWV3XG4gICAgICAgIH0pLFxuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrICYmIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBvbkNsaWNrKGRhdGUsIGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Gb2N1czogb25Nb3VzZU92ZXIgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBvbk1vdXNlT3ZlcihkYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb25Nb3VzZU92ZXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgfSwgZm9ybWF0QWJiciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYWJiclwiLCB7XG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBmb3JtYXRBYmJyKGxvY2FsZSwgZGF0ZSlcbiAgICAgIH0sIGNoaWxkcmVuKSA6IGNoaWxkcmVuLCB0aWxlQ29udGVudCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIHRpbGVDbGFzc05hbWUgPSBuZXh0UHJvcHMudGlsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aWxlQ29udGVudCA9IG5leHRQcm9wcy50aWxlQ29udGVudDtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgICAgaWYgKHRpbGVDbGFzc05hbWUgIT09IHByZXZTdGF0ZS50aWxlQ2xhc3NOYW1lUHJvcHMpIHtcbiAgICAgICAgbmV4dFN0YXRlLnRpbGVDbGFzc05hbWUgPSBnZXRWYWx1ZShuZXh0UHJvcHMsIHRpbGVDbGFzc05hbWUpO1xuICAgICAgICBuZXh0U3RhdGUudGlsZUNsYXNzTmFtZVByb3BzID0gdGlsZUNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbGVDb250ZW50ICE9PSBwcmV2U3RhdGUudGlsZUNvbnRlbnRQcm9wcykge1xuICAgICAgICBuZXh0U3RhdGUudGlsZUNvbnRlbnQgPSBnZXRWYWx1ZShuZXh0UHJvcHMsIHRpbGVDb250ZW50KTtcbiAgICAgICAgbmV4dFN0YXRlLnRpbGVDb250ZW50UHJvcHMgPSB0aWxlQ29udGVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGlsZTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgVGlsZSBhcyBkZWZhdWx0IH07XG5UaWxlLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGlsZVByb3BzKSwge30sIHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGZvcm1hdEFiYnI6IFByb3BUeXBlcy5mdW5jLFxuICBtYXhEYXRlVHJhbnNmb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtaW5EYXRlVHJhbnNmb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmxleCBmcm9tICcuL0ZsZXgnO1xuaW1wb3J0IHsgZ2V0VGlsZUNsYXNzZXMgfSBmcm9tICcuL3NoYXJlZC91dGlscyc7XG5pbXBvcnQgeyB0aWxlR3JvdXBQcm9wcyB9IGZyb20gJy4vc2hhcmVkL3Byb3BUeXBlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaWxlR3JvdXAoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMyA6IF9yZWYkY291bnQsXG4gICAgICBkYXRlVHJhbnNmb3JtID0gX3JlZi5kYXRlVHJhbnNmb3JtLFxuICAgICAgZGF0ZVR5cGUgPSBfcmVmLmRhdGVUeXBlLFxuICAgICAgZW5kID0gX3JlZi5lbmQsXG4gICAgICBob3ZlciA9IF9yZWYuaG92ZXIsXG4gICAgICBvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgIHN0YXJ0ID0gX3JlZi5zdGFydCxcbiAgICAgIF9yZWYkc3RlcCA9IF9yZWYuc3RlcCxcbiAgICAgIHN0ZXAgPSBfcmVmJHN0ZXAgPT09IHZvaWQgMCA/IDEgOiBfcmVmJHN0ZXAsXG4gICAgICBUaWxlID0gX3JlZi50aWxlLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgdmFsdWVUeXBlID0gX3JlZi52YWx1ZVR5cGUsXG4gICAgICB0aWxlUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3NOYW1lXCIsIFwiY291bnRcIiwgXCJkYXRlVHJhbnNmb3JtXCIsIFwiZGF0ZVR5cGVcIiwgXCJlbmRcIiwgXCJob3ZlclwiLCBcIm9mZnNldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInRpbGVcIiwgXCJ2YWx1ZVwiLCBcInZhbHVlVHlwZVwiXSk7XG5cbiAgdmFyIHRpbGVzID0gW107XG5cbiAgZm9yICh2YXIgcG9pbnQgPSBzdGFydDsgcG9pbnQgPD0gZW5kOyBwb2ludCArPSBzdGVwKSB7XG4gICAgdmFyIGRhdGUgPSBkYXRlVHJhbnNmb3JtKHBvaW50KTtcbiAgICB0aWxlcy5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlLCBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGRhdGUuZ2V0VGltZSgpLFxuICAgICAgY2xhc3NlczogZ2V0VGlsZUNsYXNzZXMoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHZhbHVlVHlwZTogdmFsdWVUeXBlLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBkYXRlVHlwZTogZGF0ZVR5cGUsXG4gICAgICAgIGhvdmVyOiBob3ZlclxuICAgICAgfSksXG4gICAgICBkYXRlOiBkYXRlLFxuICAgICAgcG9pbnQ6IHBvaW50XG4gICAgfSwgdGlsZVByb3BzKSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBjb3VudDogY291bnQsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgd3JhcDogdHJ1ZVxuICB9LCB0aWxlcyk7XG59XG5UaWxlR3JvdXAucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aWxlR3JvdXBQcm9wcyksIHt9LCB7XG4gIGFjdGl2ZVN0YXJ0RGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkYXRlVHJhbnNmb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9udGhzIGZyb20gJy4vWWVhclZpZXcvTW9udGhzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFllYXJWaWV3KHByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlbmRlck1vbnRocygpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9udGhzLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9feWVhci12aWV3XCJcbiAgfSwgcmVuZGVyTW9udGhzKCkpO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldE1vbnRoU3RhcnQsIGdldE1vbnRoRW5kIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlIGZyb20gJy4uL1RpbGUnO1xuaW1wb3J0IHsgZm9ybWF0TW9udGggYXMgZGVmYXVsdEZvcm1hdE1vbnRoLCBmb3JtYXRNb250aFllYXIgYXMgZGVmYXVsdEZvcm1hdE1vbnRoWWVhciB9IGZyb20gJy4uL3NoYXJlZC9kYXRlRm9ybWF0dGVyJztcbmltcG9ydCB7IHRpbGVQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xudmFyIGNsYXNzTmFtZSA9ICdyZWFjdC1jYWxlbmRhcl9feWVhci12aWV3X19tb250aHNfX21vbnRoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vbnRoKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBfcmVmJGZvcm1hdE1vbnRoID0gX3JlZi5mb3JtYXRNb250aCxcbiAgICAgIGZvcm1hdE1vbnRoID0gX3JlZiRmb3JtYXRNb250aCA9PT0gdm9pZCAwID8gZGVmYXVsdEZvcm1hdE1vbnRoIDogX3JlZiRmb3JtYXRNb250aCxcbiAgICAgIF9yZWYkZm9ybWF0TW9udGhZZWFyID0gX3JlZi5mb3JtYXRNb250aFllYXIsXG4gICAgICBmb3JtYXRNb250aFllYXIgPSBfcmVmJGZvcm1hdE1vbnRoWWVhciA9PT0gdm9pZCAwID8gZGVmYXVsdEZvcm1hdE1vbnRoWWVhciA6IF9yZWYkZm9ybWF0TW9udGhZZWFyLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc2VzXCIsIFwiZm9ybWF0TW9udGhcIiwgXCJmb3JtYXRNb250aFllYXJcIl0pO1xuXG4gIHZhciBkYXRlID0gb3RoZXJQcm9wcy5kYXRlLFxuICAgICAgbG9jYWxlID0gb3RoZXJQcm9wcy5sb2NhbGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIGNsYXNzZXM6IFtdLmNvbmNhdChjbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgIGZvcm1hdEFiYnI6IGZvcm1hdE1vbnRoWWVhcixcbiAgICBtYXhEYXRlVHJhbnNmb3JtOiBnZXRNb250aEVuZCxcbiAgICBtaW5EYXRlVHJhbnNmb3JtOiBnZXRNb250aFN0YXJ0LFxuICAgIHZpZXc6IFwieWVhclwiXG4gIH0pLCBmb3JtYXRNb250aChsb2NhbGUsIGRhdGUpKTtcbn1cbk1vbnRoLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGlsZVByb3BzKSwge30sIHtcbiAgZm9ybWF0TW9udGg6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtYXRNb250aFllYXI6IFByb3BUeXBlcy5mdW5jXG59KTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRZZWFyIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlR3JvdXAgZnJvbSAnLi4vVGlsZUdyb3VwJztcbmltcG9ydCBNb250aCBmcm9tICcuL01vbnRoJztcbmltcG9ydCB7IHRpbGVHcm91cFByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb250aHMocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IHByb3BzLmFjdGl2ZVN0YXJ0RGF0ZTtcbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IDExO1xuICB2YXIgeWVhciA9IGdldFllYXIoYWN0aXZlU3RhcnREYXRlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGVHcm91cCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNhbGVuZGFyX195ZWFyLXZpZXdfX21vbnRoc1wiLFxuICAgIGRhdGVUcmFuc2Zvcm06IGZ1bmN0aW9uIGRhdGVUcmFuc2Zvcm0obW9udGhJbmRleCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIDEpO1xuICAgIH0sXG4gICAgZGF0ZVR5cGU6IFwibW9udGhcIixcbiAgICBlbmQ6IGVuZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgdGlsZTogTW9udGhcbiAgfSkpO1xufVxuTW9udGhzLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGlsZUdyb3VwUHJvcHMpLCB7fSwge1xuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmdcbn0pOyIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL0NhbGVuZGFyJztcbmltcG9ydCBDZW50dXJ5VmlldyBmcm9tICcuL0NlbnR1cnlWaWV3JztcbmltcG9ydCBEZWNhZGVWaWV3IGZyb20gJy4vRGVjYWRlVmlldyc7XG5pbXBvcnQgWWVhclZpZXcgZnJvbSAnLi9ZZWFyVmlldyc7XG5pbXBvcnQgTW9udGhWaWV3IGZyb20gJy4vTW9udGhWaWV3JztcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyO1xuZXhwb3J0IHsgQ2FsZW5kYXIsIENlbnR1cnlWaWV3LCBEZWNhZGVWaWV3LCBZZWFyVmlldywgTW9udGhWaWV3IH07IiwidmFyIF9DQUxFTkRBUl9UWVBFX0xPQ0FMRTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5leHBvcnQgdmFyIENBTEVOREFSX1RZUEVTID0ge1xuICBBUkFCSUM6ICdBcmFiaWMnLFxuICBIRUJSRVc6ICdIZWJyZXcnLFxuICBJU09fODYwMTogJ0lTTyA4NjAxJyxcbiAgVVM6ICdVUydcbn07XG5leHBvcnQgdmFyIENBTEVOREFSX1RZUEVfTE9DQUxFUyA9IChfQ0FMRU5EQVJfVFlQRV9MT0NBTEUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9DQUxFTkRBUl9UWVBFX0xPQ0FMRSwgQ0FMRU5EQVJfVFlQRVMuVVMsIFsnZW4tQ0EnLCAnZW4tVVMnLCAnZXMtQVInLCAnZXMtQk8nLCAnZXMtQ0wnLCAnZXMtQ08nLCAnZXMtQ1InLCAnZXMtRE8nLCAnZXMtRUMnLCAnZXMtR1QnLCAnZXMtSE4nLCAnZXMtTVgnLCAnZXMtTkknLCAnZXMtUEEnLCAnZXMtUEUnLCAnZXMtUFInLCAnZXMtU1YnLCAnZXMtVkUnLCAncHQtQlInXSksIF9kZWZpbmVQcm9wZXJ0eShfQ0FMRU5EQVJfVFlQRV9MT0NBTEUsIENBTEVOREFSX1RZUEVTLkFSQUJJQywgWy8vIGFyLUxCLCBhci1NQSBpbnRlbnRpb25hbGx5IG1pc3NpbmdcbidhcicsICdhci1BRScsICdhci1CSCcsICdhci1EWicsICdhci1FRycsICdhci1JUScsICdhci1KTycsICdhci1LVycsICdhci1MWScsICdhci1PTScsICdhci1RQScsICdhci1TQScsICdhci1TRCcsICdhci1TWScsICdhci1ZRScsICdkdicsICdkdi1NVicsICdwcycsICdwcy1BUiddKSwgX2RlZmluZVByb3BlcnR5KF9DQUxFTkRBUl9UWVBFX0xPQ0FMRSwgQ0FMRU5EQVJfVFlQRVMuSEVCUkVXLCBbJ2hlJywgJ2hlLUlMJ10pLCBfQ0FMRU5EQVJfVFlQRV9MT0NBTEUpO1xuZXhwb3J0IHZhciBXRUVLREFZUyA9IF90b0NvbnN1bWFibGVBcnJheShBcnJheSg3KSkubWFwKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4O1xufSk7IiwiaW1wb3J0IGdldFVzZXJMb2NhbGUgZnJvbSAnZ2V0LXVzZXItbG9jYWxlJztcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsb2NhbGUsIGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhsb2NhbGUgfHwgZ2V0VXNlckxvY2FsZSgpLCBvcHRpb25zKTtcbiAgfTtcbn1cbi8qKlxuICogQ2hhbmdlcyB0aGUgaG91ciBpbiBhIERhdGUgdG8gZW5zdXJlIHJpZ2h0IGRhdGUgZm9ybWF0dGluZyBldmVuIGlmIERTVCBpcyBtZXNzZWQgdXAuXG4gKiBXb3JrYXJvdW5kIGZvciBidWcgaW4gV2ViS2l0IGFuZCBGaXJlZm94IHdpdGggaGlzdG9yaWNhbCBkYXRlcy5cbiAqIEZvciBtb3JlIGRldGFpbHMsIHNlZTpcbiAqIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc1MDQ2NVxuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM4NTY0M1xuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cblxuZnVuY3Rpb24gdG9TYWZlSG91cihkYXRlKSB7XG4gIHZhciBzYWZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICByZXR1cm4gbmV3IERhdGUoc2FmZURhdGUuc2V0SG91cnMoMTIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2FmZUZvcm1hdHRlcihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobG9jYWxlLCBkYXRlKSB7XG4gICAgcmV0dXJuIGdldEZvcm1hdHRlcihvcHRpb25zKShsb2NhbGUsIHRvU2FmZUhvdXIoZGF0ZSkpO1xuICB9O1xufVxuXG52YXIgZm9ybWF0RGF0ZU9wdGlvbnMgPSB7XG4gIGRheTogJ251bWVyaWMnLFxuICBtb250aDogJ251bWVyaWMnLFxuICB5ZWFyOiAnbnVtZXJpYydcbn07XG52YXIgZm9ybWF0TG9uZ0RhdGVPcHRpb25zID0ge1xuICBkYXk6ICdudW1lcmljJyxcbiAgbW9udGg6ICdsb25nJyxcbiAgeWVhcjogJ251bWVyaWMnXG59O1xudmFyIGZvcm1hdE1vbnRoT3B0aW9ucyA9IHtcbiAgbW9udGg6ICdsb25nJ1xufTtcbnZhciBmb3JtYXRNb250aFllYXJPcHRpb25zID0ge1xuICBtb250aDogJ2xvbmcnLFxuICB5ZWFyOiAnbnVtZXJpYydcbn07XG52YXIgZm9ybWF0WWVhck9wdGlvbnMgPSB7XG4gIHllYXI6ICdudW1lcmljJ1xufTtcbnZhciBmb3JtYXRTaG9ydFdlZWtkYXlPcHRpb25zID0ge1xuICB3ZWVrZGF5OiAnc2hvcnQnXG59O1xudmFyIGZvcm1hdFdlZWtkYXlPcHRpb25zID0ge1xuICB3ZWVrZGF5OiAnbG9uZydcbn07XG5leHBvcnQgdmFyIGZvcm1hdERhdGUgPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdERhdGVPcHRpb25zKTtcbmV4cG9ydCB2YXIgZm9ybWF0TG9uZ0RhdGUgPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdExvbmdEYXRlT3B0aW9ucyk7XG5leHBvcnQgdmFyIGZvcm1hdE1vbnRoID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRNb250aE9wdGlvbnMpO1xuZXhwb3J0IHZhciBmb3JtYXRNb250aFllYXIgPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdE1vbnRoWWVhck9wdGlvbnMpO1xuZXhwb3J0IHZhciBmb3JtYXRZZWFyID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRZZWFyT3B0aW9ucyk7XG5leHBvcnQgdmFyIGZvcm1hdFNob3J0V2Vla2RheSA9IGdldFNhZmVGb3JtYXR0ZXIoZm9ybWF0U2hvcnRXZWVrZGF5T3B0aW9ucyk7XG5leHBvcnQgdmFyIGZvcm1hdFdlZWtkYXkgPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdFdlZWtkYXlPcHRpb25zKTsiLCJpbXBvcnQgeyBnZXRZZWFyLCBnZXRNb250aCBhcyBnZXRNb250aEluZGV4LCBnZXRDZW50dXJ5U3RhcnQsIGdldFByZXZpb3VzQ2VudHVyeVN0YXJ0LCBnZXROZXh0Q2VudHVyeVN0YXJ0LCBnZXRDZW50dXJ5RW5kLCBnZXRQcmV2aW91c0NlbnR1cnlFbmQsIGdldENlbnR1cnlSYW5nZSwgZ2V0RGVjYWRlU3RhcnQsIGdldFByZXZpb3VzRGVjYWRlU3RhcnQsIGdldE5leHREZWNhZGVTdGFydCwgZ2V0RGVjYWRlRW5kLCBnZXRQcmV2aW91c0RlY2FkZUVuZCwgZ2V0RGVjYWRlUmFuZ2UsIGdldFllYXJTdGFydCwgZ2V0UHJldmlvdXNZZWFyU3RhcnQsIGdldE5leHRZZWFyU3RhcnQsIGdldFllYXJFbmQsIGdldFByZXZpb3VzWWVhckVuZCwgZ2V0WWVhclJhbmdlLCBnZXRNb250aFN0YXJ0LCBnZXRQcmV2aW91c01vbnRoU3RhcnQsIGdldE5leHRNb250aFN0YXJ0LCBnZXRNb250aEVuZCwgZ2V0UHJldmlvdXNNb250aEVuZCwgZ2V0TW9udGhSYW5nZSwgZ2V0RGF5U3RhcnQsIGdldERheUVuZCwgZ2V0RGF5UmFuZ2UgfSBmcm9tICdAd29qdGVrbWFqL2RhdGUtdXRpbHMnO1xuaW1wb3J0IHsgQ0FMRU5EQVJfVFlQRVMsIFdFRUtEQVlTIH0gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgeyBmb3JtYXRZZWFyIGFzIGRlZmF1bHRGb3JtYXRZZWFyIH0gZnJvbSAnLi9kYXRlRm9ybWF0dGVyJztcbnZhciBTVU5EQVkgPSBXRUVLREFZU1swXTtcbnZhciBGUklEQVkgPSBXRUVLREFZU1s1XTtcbnZhciBTQVRVUkRBWSA9IFdFRUtEQVlTWzZdO1xuLyogU2ltcGxlIGdldHRlcnMgLSBnZXR0aW5nIGEgcHJvcGVydHkgb2YgYSBnaXZlbiBwb2ludCBpbiB0aW1lICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSkge1xuICB2YXIgY2FsZW5kYXJUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBDQUxFTkRBUl9UWVBFUy5JU09fODYwMTtcbiAgdmFyIHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gIHN3aXRjaCAoY2FsZW5kYXJUeXBlKSB7XG4gICAgY2FzZSBDQUxFTkRBUl9UWVBFUy5JU09fODYwMTpcbiAgICAgIC8vIFNoaWZ0cyBkYXlzIG9mIHRoZSB3ZWVrIHNvIHRoYXQgTW9uZGF5IGlzIDAsIFN1bmRheSBpcyA2XG4gICAgICByZXR1cm4gKHdlZWtkYXkgKyA2KSAlIDc7XG5cbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLkFSQUJJQzpcbiAgICAgIHJldHVybiAod2Vla2RheSArIDEpICUgNztcblxuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuSEVCUkVXOlxuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuVVM6XG4gICAgICByZXR1cm4gd2Vla2RheTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGNhbGVuZGFyIHR5cGUuJyk7XG4gIH1cbn1cbi8qKlxuICogQ2VudHVyeVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZWdpbk9mQ2VudHVyeVllYXIoZGF0ZSkge1xuICB2YXIgYmVnaW5PZkNlbnR1cnkgPSBnZXRDZW50dXJ5U3RhcnQoZGF0ZSk7XG4gIHJldHVybiBnZXRZZWFyKGJlZ2luT2ZDZW50dXJ5KTtcbn1cbi8qKlxuICogRGVjYWRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZ2luT2ZEZWNhZGVZZWFyKGRhdGUpIHtcbiAgdmFyIGJlZ2luT2ZEZWNhZGUgPSBnZXREZWNhZGVTdGFydChkYXRlKTtcbiAgcmV0dXJuIGdldFllYXIoYmVnaW5PZkRlY2FkZSk7XG59XG4vKipcbiAqIFdlZWtcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJlZ2lubmluZyBvZiBhIGdpdmVuIHdlZWsuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2FsZW5kYXJUeXBlIENhbGVuZGFyIHR5cGUuIENhbiBiZSBJU08gODYwMSBvciBVUy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmVnaW5PZldlZWsoZGF0ZSkge1xuICB2YXIgY2FsZW5kYXJUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBDQUxFTkRBUl9UWVBFUy5JU09fODYwMTtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICB2YXIgbW9udGhJbmRleCA9IGdldE1vbnRoSW5kZXgoZGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKSAtIGdldERheU9mV2VlayhkYXRlLCBjYWxlbmRhclR5cGUpO1xuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5KTtcbn1cbi8qKlxuICogR2V0cyB3ZWVrIG51bWJlciBhY2NvcmRpbmcgdG8gSVNPIDg2MDEgb3IgVVMgc3RhbmRhcmQuXG4gKiBJbiBJU08gODYwMSwgQXJhYmljIGFuZCBIZWJyZXcgd2VlayAxIGlzIHRoZSBvbmUgd2l0aCBKYW51YXJ5IDQuXG4gKiBJbiBVUyBjYWxlbmRhciB3ZWVrIDEgaXMgdGhlIG9uZSB3aXRoIEphbnVhcnkgMS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjYWxlbmRhclR5cGUgQ2FsZW5kYXIgdHlwZS4gQ2FuIGJlIElTTyA4NjAxIG9yIFVTLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrTnVtYmVyKGRhdGUpIHtcbiAgdmFyIGNhbGVuZGFyVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG4gIHZhciBjYWxlbmRhclR5cGVGb3JXZWVrTnVtYmVyID0gY2FsZW5kYXJUeXBlID09PSBDQUxFTkRBUl9UWVBFUy5VUyA/IENBTEVOREFSX1RZUEVTLlVTIDogQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG4gIHZhciBiZWdpbk9mV2VlayA9IGdldEJlZ2luT2ZXZWVrKGRhdGUsIGNhbGVuZGFyVHlwZUZvcldlZWtOdW1iZXIpO1xuICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSkgKyAxO1xuICB2YXIgZGF5SW5XZWVrT25lO1xuICB2YXIgYmVnaW5PZkZpcnN0V2VlazsgLy8gTG9vayBmb3IgdGhlIGZpcnN0IHdlZWsgb25lIHRoYXQgZG9lcyBub3QgY29tZSBhZnRlciBhIGdpdmVuIGRhdGVcblxuICBkbyB7XG4gICAgZGF5SW5XZWVrT25lID0gbmV3IERhdGUoeWVhciwgMCwgY2FsZW5kYXJUeXBlRm9yV2Vla051bWJlciA9PT0gQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDEgPyA0IDogMSk7XG4gICAgYmVnaW5PZkZpcnN0V2VlayA9IGdldEJlZ2luT2ZXZWVrKGRheUluV2Vla09uZSwgY2FsZW5kYXJUeXBlRm9yV2Vla051bWJlcik7XG4gICAgeWVhciAtPSAxO1xuICB9IHdoaWxlIChkYXRlIC0gYmVnaW5PZkZpcnN0V2VlayA8IDApO1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKChiZWdpbk9mV2VlayAtIGJlZ2luT2ZGaXJzdFdlZWspIC8gKDguNjRlNyAqIDcpKSArIDE7XG59XG4vKipcbiAqIE90aGVyc1xuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVnaW5uaW5nIG9mIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlVHlwZSBSYW5nZSB0eXBlIChlLmcuICdkYXknKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZ2luKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuIGdldENlbnR1cnlTdGFydChkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0RGVjYWRlU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRZZWFyU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0TW9udGhTdGFydChkYXRlKTtcblxuICAgIGNhc2UgJ2RheSc6XG4gICAgICByZXR1cm4gZ2V0RGF5U3RhcnQoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZ2luUHJldmlvdXMocmFuZ2VUeXBlLCBkYXRlKSB7XG4gIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgY2FzZSAnY2VudHVyeSc6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNDZW50dXJ5U3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzRGVjYWRlU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c1llYXJTdGFydChkYXRlKTtcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c01vbnRoU3RhcnQoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZ2luTmV4dChyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiBnZXROZXh0Q2VudHVyeVN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiBnZXROZXh0RGVjYWRlU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXROZXh0WWVhclN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldE5leHRNb250aFN0YXJ0KGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgZ2V0QmVnaW5QcmV2aW91czIgPSBmdW5jdGlvbiBnZXRCZWdpblByZXZpb3VzMihyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzRGVjYWRlU3RhcnQoZGF0ZSwgLTEwMCk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c1llYXJTdGFydChkYXRlLCAtMTApO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzTW9udGhTdGFydChkYXRlLCAtMTIpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn07XG5leHBvcnQgdmFyIGdldEJlZ2luTmV4dDIgPSBmdW5jdGlvbiBnZXRCZWdpbk5leHQyKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0TmV4dERlY2FkZVN0YXJ0KGRhdGUsIDEwMCk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXROZXh0WWVhclN0YXJ0KGRhdGUsIDEwKTtcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXROZXh0TW9udGhTdGFydChkYXRlLCAxMik7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyB0aGUgZW5kIG9mIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlVHlwZSBSYW5nZSB0eXBlIChlLmcuICdkYXknKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZChyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiBnZXRDZW50dXJ5RW5kKGRhdGUpO1xuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiBnZXREZWNhZGVFbmQoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRZZWFyRW5kKGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldE1vbnRoRW5kKGRhdGUpO1xuXG4gICAgY2FzZSAnZGF5JzpcbiAgICAgIHJldHVybiBnZXREYXlFbmQoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZFByZXZpb3VzKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzQ2VudHVyeUVuZChkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNEZWNhZGVFbmQoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c1llYXJFbmQoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNNb250aEVuZChkYXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59XG5leHBvcnQgdmFyIGdldEVuZFByZXZpb3VzMiA9IGZ1bmN0aW9uIGdldEVuZFByZXZpb3VzMihyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzRGVjYWRlRW5kKGRhdGUsIC0xMDApO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNZZWFyRW5kKGRhdGUsIC0xMCk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNNb250aEVuZChkYXRlLCAtMTIpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn07XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgZW5kIG9mIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlVHlwZSBSYW5nZSB0eXBlIChlLmcuICdkYXknKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuIGdldENlbnR1cnlSYW5nZShkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0RGVjYWRlUmFuZ2UoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZXRZZWFyUmFuZ2UoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0TW9udGhSYW5nZShkYXRlKTtcblxuICAgIGNhc2UgJ2RheSc6XG4gICAgICByZXR1cm4gZ2V0RGF5UmFuZ2UoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZ2Ugb3V0IG9mIHR3byB2YWx1ZXMsIGVuc3VyaW5nIHRoZXkgYXJlIGluIG9yZGVyIGFuZCBjb3ZlcmluZyBlbnRpcmUgcGVyaW9kIHJhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmFuZ2VUeXBlIFJhbmdlIHR5cGUgKGUuZy4gJ2RheScpXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUxIEZpcnN0IGRhdGUuXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUyIFNlY29uZCBkYXRlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVJhbmdlKHJhbmdlVHlwZSwgZGF0ZTEsIGRhdGUyKSB7XG4gIHZhciByYXdOZXh0VmFsdWUgPSBbZGF0ZTEsIGRhdGUyXS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcbiAgcmV0dXJuIFtnZXRCZWdpbihyYW5nZVR5cGUsIHJhd05leHRWYWx1ZVswXSksIGdldEVuZChyYW5nZVR5cGUsIHJhd05leHRWYWx1ZVsxXSldO1xufVxuXG5mdW5jdGlvbiB0b1llYXJMYWJlbChsb2NhbGUpIHtcbiAgdmFyIGZvcm1hdFllYXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRGb3JtYXRZZWFyO1xuICB2YXIgZGF0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGVzLm1hcChmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXRZZWFyKGxvY2FsZSwgZGF0ZSk7XG4gIH0pLmpvaW4oJyDigJMgJyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgbGFiZWxsaW5nIGEgY2VudHVyeSBvZiBhIGdpdmVuIGRhdGUuXG4gKiBGb3IgZXhhbXBsZSwgZm9yIDIwMTcgaXQgd2lsbCByZXR1cm4gMjAwMS0yMTAwLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIERhdGUgb3IgYSB5ZWFyIGFzIGEgc3RyaW5nIG9yIGFzIGEgbnVtYmVyLlxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnR1cnlMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGRhdGUpIHtcbiAgcmV0dXJuIHRvWWVhckxhYmVsKGxvY2FsZSwgZm9ybWF0WWVhciwgZ2V0Q2VudHVyeVJhbmdlKGRhdGUpKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyBsYWJlbGxpbmcgYSBjZW50dXJ5IG9mIGEgZ2l2ZW4gZGF0ZS5cbiAqIEZvciBleGFtcGxlLCBmb3IgMjAxNyBpdCB3aWxsIHJldHVybiAyMDExLTIwMjAuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgRGF0ZSBvciBhIHllYXIgYXMgYSBzdHJpbmcgb3IgYXMgYSBudW1iZXIuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlY2FkZUxhYmVsKGxvY2FsZSwgZm9ybWF0WWVhciwgZGF0ZSkge1xuICByZXR1cm4gdG9ZZWFyTGFiZWwobG9jYWxlLCBmb3JtYXRZZWFyLCBnZXREZWNhZGVSYW5nZShkYXRlKSk7XG59XG4vKipcbiAqIFJldHVybnMgYSBib29sZWFuIGRldGVybWluaW5nIHdoZXRoZXIgYSBnaXZlbiBkYXRlIGlzIG9uIFNhdHVyZGF5IG9yIFN1bmRheS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNXZWVrZW5kKGRhdGUpIHtcbiAgdmFyIGNhbGVuZGFyVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG4gIHZhciB3ZWVrZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICBzd2l0Y2ggKGNhbGVuZGFyVHlwZSkge1xuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuQVJBQklDOlxuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuSEVCUkVXOlxuICAgICAgcmV0dXJuIHdlZWtkYXkgPT09IEZSSURBWSB8fCB3ZWVrZGF5ID09PSBTQVRVUkRBWTtcblxuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE6XG4gICAgY2FzZSBDQUxFTkRBUl9UWVBFUy5VUzpcbiAgICAgIHJldHVybiB3ZWVrZGF5ID09PSBTQVRVUkRBWSB8fCB3ZWVrZGF5ID09PSBTVU5EQVk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBjYWxlbmRhciB0eXBlLicpO1xuICB9XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ0FMRU5EQVJfVFlQRVMgfSBmcm9tICcuL2NvbnN0JztcbnZhciBjYWxlbmRhclR5cGVzID0gT2JqZWN0LnZhbHVlcyhDQUxFTkRBUl9UWVBFUyk7XG52YXIgYWxsVmlld3MgPSBbJ2NlbnR1cnknLCAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcbmV4cG9ydCB2YXIgaXNDYWxlbmRhclR5cGUgPSBQcm9wVHlwZXMub25lT2YoY2FsZW5kYXJUeXBlcyk7XG5leHBvcnQgdmFyIGlzQ2xhc3NOYW1lID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyldKTtcbmV4cG9ydCB2YXIgaXNNaW5EYXRlID0gZnVuY3Rpb24gaXNNaW5EYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgbWluRGF0ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAoIW1pbkRhdGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghKG1pbkRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9mIHR5cGUgYFwiKS5jb25jYXQoX3R5cGVvZihtaW5EYXRlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYERhdGVgLlwiKSk7XG4gIH1cblxuICB2YXIgbWF4RGF0ZSA9IHByb3BzLm1heERhdGU7XG5cbiAgaWYgKG1heERhdGUgJiYgbWluRGF0ZSA+IG1heERhdGUpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWluRGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIG1pbkRhdGUgY2Fubm90IGJlIGxhcmdlciB0aGFuIG1heERhdGUuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbmV4cG9ydCB2YXIgaXNNYXhEYXRlID0gZnVuY3Rpb24gaXNNYXhEYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgbWF4RGF0ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAoIW1heERhdGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghKG1heERhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9mIHR5cGUgYFwiKS5jb25jYXQoX3R5cGVvZihtYXhEYXRlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYERhdGVgLlwiKSk7XG4gIH1cblxuICB2YXIgbWluRGF0ZSA9IHByb3BzLm1pbkRhdGU7XG5cbiAgaWYgKG1pbkRhdGUgJiYgbWF4RGF0ZSA8IG1pbkRhdGUpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWF4RGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIG1heERhdGUgY2Fubm90IGJlIHNtYWxsZXIgdGhhbiBtaW5EYXRlLlwiKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgdmFyIGlzUmVmID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG59KV0pO1xuZXhwb3J0IHZhciBpc1ZhbHVlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpKV0pO1xuZXhwb3J0IHZhciBpc1ZpZXdzID0gUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFZpZXdzKSk7XG5leHBvcnQgdmFyIGlzVmlldyA9IGZ1bmN0aW9uIGlzVmlldyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHZpZXcgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciB2aWV3cyA9IHByb3BzLnZpZXdzO1xuICB2YXIgYWxsb3dlZFZpZXdzID0gdmlld3MgfHwgYWxsVmlld3M7XG5cbiAgaWYgKHZpZXcgIT09IHVuZGVmaW5lZCAmJiBhbGxvd2VkVmlld3MuaW5kZXhPZih2aWV3KSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB2YWx1ZSBgXCIpLmNvbmNhdCh2aWV3LCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBleHBlY3RlZCBvbmUgb2YgW1wiKS5jb25jYXQoYWxsb3dlZFZpZXdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdChhLCBcIlxcXCJcIik7XG4gICAgfSkuam9pbignLCAnKSwgXCJdLlwiKSk7XG4gIH0gLy8gRXZlcnl0aGluZyBpcyBmaW5lXG5cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmlzVmlldy5pc1JlcXVpcmVkID0gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgdmlldyA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAoIXZpZXcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYFwiKS5jb25jYXQodmlldywgXCJgLlwiKSk7XG4gIH1cblxuICByZXR1cm4gaXNWaWV3KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG59O1xuXG5leHBvcnQgdmFyIHRpbGVHcm91cFByb3BzID0ge1xuICBhY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIGhvdmVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBpc01heERhdGUsXG4gIG1pbkRhdGU6IGlzTWluRGF0ZSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGlsZUNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIGlzQ2xhc3NOYW1lXSksXG4gIHRpbGVDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IGlzVmFsdWUsXG4gIHZhbHVlVHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcbmV4cG9ydCB2YXIgdGlsZVByb3BzID0ge1xuICBhY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG4gIGRhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBpc01pbkRhdGUsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKSxcbiAgdGlsZUNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIGlzQ2xhc3NOYW1lXSksXG4gIHRpbGVDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdGlsZURpc2FibGVkOiBQcm9wVHlwZXMuZnVuY1xufTsiLCJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCB7IGdldFJhbmdlIH0gZnJvbSAnLi9kYXRlcyc7XG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSBubyBzbWFsbGVyIHRoYW4gbWluIGFuZCBubyBsYXJnZXIgdGhhbiBtYXguXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byByZXR1cm4uXG4gKiBAcGFyYW0geyp9IG1pbiBNaW5pbXVtIHJldHVybiB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gbWF4IE1heGltdW0gcmV0dXJuIHZhbHVlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiZXR3ZWVuKHZhbHVlLCBtaW4sIG1heCkge1xuICBpZiAobWluICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmIChtYXggJiYgbWF4IDwgdmFsdWUpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVXaXRoaW5SYW5nZSh2YWx1ZSwgcmFuZ2UpIHtcbiAgcmV0dXJuIHJhbmdlWzBdIDw9IHZhbHVlICYmIHJhbmdlWzFdID49IHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFuZ2VXaXRoaW5SYW5nZShncmVhdGVyUmFuZ2UsIHNtYWxsZXJSYW5nZSkge1xuICByZXR1cm4gZ3JlYXRlclJhbmdlWzBdIDw9IHNtYWxsZXJSYW5nZVswXSAmJiBncmVhdGVyUmFuZ2VbMV0gPj0gc21hbGxlclJhbmdlWzFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRvUmFuZ2VzT3ZlcmxhcChyYW5nZTEsIHJhbmdlMikge1xuICByZXR1cm4gaXNWYWx1ZVdpdGhpblJhbmdlKHJhbmdlMVswXSwgcmFuZ2UyKSB8fCBpc1ZhbHVlV2l0aGluUmFuZ2UocmFuZ2UxWzFdLCByYW5nZTIpO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5nZUNsYXNzTmFtZXModmFsdWVSYW5nZSwgZGF0ZVJhbmdlLCBiYXNlQ2xhc3NOYW1lKSB7XG4gIHZhciBpc1JhbmdlID0gZG9SYW5nZXNPdmVybGFwKGRhdGVSYW5nZSwgdmFsdWVSYW5nZSk7XG4gIHZhciBjbGFzc2VzID0gW107XG5cbiAgaWYgKGlzUmFuZ2UpIHtcbiAgICBjbGFzc2VzLnB1c2goYmFzZUNsYXNzTmFtZSk7XG4gICAgdmFyIGlzUmFuZ2VTdGFydCA9IGlzVmFsdWVXaXRoaW5SYW5nZSh2YWx1ZVJhbmdlWzBdLCBkYXRlUmFuZ2UpO1xuICAgIHZhciBpc1JhbmdlRW5kID0gaXNWYWx1ZVdpdGhpblJhbmdlKHZhbHVlUmFuZ2VbMV0sIGRhdGVSYW5nZSk7XG5cbiAgICBpZiAoaXNSYW5nZVN0YXJ0KSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJTdGFydFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUmFuZ2VFbmQpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIkVuZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUmFuZ2VTdGFydCAmJiBpc1JhbmdlRW5kKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJCb3RoRW5kc1wiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaWxlQ2xhc3NlcygpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgdmFsdWVUeXBlID0gX3JlZi52YWx1ZVR5cGUsXG4gICAgICBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgZGF0ZVR5cGUgPSBfcmVmLmRhdGVUeXBlLFxuICAgICAgaG92ZXIgPSBfcmVmLmhvdmVyO1xuXG4gIHZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX3RpbGUnO1xuICB2YXIgY2xhc3NlcyA9IFtjbGFzc05hbWVdO1xuXG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIEFycmF5KSAmJiAhZGF0ZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFRpbGVDbGFzc2VzKCk6IFVuYWJsZSB0byBnZXQgdGlsZSBhY3Rpdml0eSBjbGFzc2VzIGJlY2F1c2Ugb25lIG9yIG1vcmUgcmVxdWlyZWQgYXJndW1lbnRzIHdlcmUgbm90IHBhc3NlZC4nKTtcbiAgfVxuXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGF0ZVJhbmdlID0gZGF0ZSBpbnN0YW5jZW9mIEFycmF5ID8gZGF0ZSA6IGdldFJhbmdlKGRhdGVUeXBlLCBkYXRlKTtcblxuICBpZiAoaXNWYWx1ZVdpdGhpblJhbmdlKG5vdywgZGF0ZVJhbmdlKSkge1xuICAgIGNsYXNzZXMucHVzaChcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS1ub3dcIikpO1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgJiYgIXZhbHVlVHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0VGlsZUNsYXNzZXMoKTogVW5hYmxlIHRvIGdldCB0aWxlIGFjdGl2aXR5IGNsYXNzZXMgYmVjYXVzZSBvbmUgb3IgbW9yZSByZXF1aXJlZCBhcmd1bWVudHMgd2VyZSBub3QgcGFzc2VkLicpO1xuICB9XG5cbiAgdmFyIHZhbHVlUmFuZ2UgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWUgOiBnZXRSYW5nZSh2YWx1ZVR5cGUsIHZhbHVlKTtcblxuICBpZiAoaXNSYW5nZVdpdGhpblJhbmdlKHZhbHVlUmFuZ2UsIGRhdGVSYW5nZSkpIHtcbiAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0tYWN0aXZlXCIpKTtcbiAgfSBlbHNlIGlmIChkb1Jhbmdlc092ZXJsYXAodmFsdWVSYW5nZSwgZGF0ZVJhbmdlKSkge1xuICAgIGNsYXNzZXMucHVzaChcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS1oYXNBY3RpdmVcIikpO1xuICB9XG5cbiAgdmFyIHZhbHVlUmFuZ2VDbGFzc05hbWVzID0gZ2V0UmFuZ2VDbGFzc05hbWVzKHZhbHVlUmFuZ2UsIGRhdGVSYW5nZSwgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0tcmFuZ2VcIikpO1xuICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlUmFuZ2VDbGFzc05hbWVzKSk7XG5cbiAgaWYgKGhvdmVyKSB7XG4gICAgdmFyIGhvdmVyUmFuZ2UgPSBob3ZlciA+IHZhbHVlUmFuZ2VbMV0gPyBbdmFsdWVSYW5nZVsxXSwgaG92ZXJdIDogW2hvdmVyLCB2YWx1ZVJhbmdlWzBdXTtcbiAgICB2YXIgaG92ZXJSYW5nZUNsYXNzTmFtZXMgPSBnZXRSYW5nZUNsYXNzTmFtZXMoaG92ZXJSYW5nZSwgZGF0ZVJhbmdlLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS1ob3ZlclwiKSk7XG4gICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIF90b0NvbnN1bWFibGVBcnJheShob3ZlclJhbmdlQ2xhc3NOYW1lcykpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZShcIkB3b2p0ZWttYWovZGF0ZS11dGlsc1wiKTtcblxudmFyIF9EaXZpZGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EaXZpZGVyXCIpKTtcblxudmFyIF9EYXlJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0ZUlucHV0L0RheUlucHV0XCIpKTtcblxudmFyIF9Nb250aElucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EYXRlSW5wdXQvTW9udGhJbnB1dFwiKSk7XG5cbnZhciBfTW9udGhTZWxlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGVJbnB1dC9Nb250aFNlbGVjdFwiKSk7XG5cbnZhciBfWWVhcklucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EYXRlSW5wdXQvWWVhcklucHV0XCIpKTtcblxudmFyIF9OYXRpdmVJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0ZUlucHV0L05hdGl2ZUlucHV0XCIpKTtcblxudmFyIF9kYXRlRm9ybWF0dGVyID0gcmVxdWlyZShcIi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXJcIik7XG5cbnZhciBfZGF0ZXMgPSByZXF1aXJlKFwiLi9zaGFyZWQvZGF0ZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuL3NoYXJlZC9wcm9wVHlwZXNcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi9zaGFyZWQvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBkZWZhdWx0TWluRGF0ZSA9IG5ldyBEYXRlKCcwMDAxLTAxLTAxJyk7XG52YXIgZGVmYXVsdE1heERhdGUgPSBuZXcgRGF0ZSg4LjY0ZTE1KTtcbnZhciBhbGxWaWV3cyA9IFsnY2VudHVyeScsICdkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xudmFyIGFsbFZhbHVlVHlwZXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFsbFZpZXdzLnNsaWNlKDEpKSwgWydkYXknXSk7XG5cbmZ1bmN0aW9uIGRhdGVzQXJlRGlmZmVyZW50KGRhdGUxLCBkYXRlMikge1xuICByZXR1cm4gZGF0ZTEgJiYgIWRhdGUyIHx8ICFkYXRlMSAmJiBkYXRlMiB8fCBkYXRlMSAmJiBkYXRlMiAmJiBkYXRlMS5nZXRUaW1lKCkgIT09IGRhdGUyLmdldFRpbWUoKTtcbn1cbi8qKlxuICogUmV0dXJucyB2YWx1ZSB0eXBlIHRoYXQgY2FuIGJlIHJldHVybmVkIHdpdGggY3VycmVudGx5IGFwcGxpZWQgc2V0dGluZ3MuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZVR5cGUobWF4RGV0YWlsKSB7XG4gIHJldHVybiBhbGxWYWx1ZVR5cGVzW2FsbFZpZXdzLmluZGV4T2YobWF4RGV0YWlsKV07XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlLCBpbmRleCkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcmF3VmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbHVlLmxlbmd0aCA9PT0gMiA/IHZhbHVlW2luZGV4XSA6IHZhbHVlO1xuXG4gIGlmICghcmF3VmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB2YWx1ZURhdGUgPSBuZXcgRGF0ZShyYXdWYWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlRGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlOiBcIi5jb25jYXQodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbFZhbHVlKF9yZWYsIGluZGV4KSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIG1heERldGFpbCA9IF9yZWYubWF4RGV0YWlsO1xuICB2YXIgdmFsdWVQaWVjZSA9IGdldFZhbHVlKHZhbHVlLCBpbmRleCk7XG5cbiAgaWYgKCF2YWx1ZVBpZWNlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdmFsdWVUeXBlID0gZ2V0VmFsdWVUeXBlKG1heERldGFpbCk7XG4gIHZhciBkZXRhaWxWYWx1ZUZyb20gPSBbX2RhdGVzLmdldEJlZ2luLCBfZGF0ZXMuZ2V0RW5kXVtpbmRleF0odmFsdWVUeXBlLCB2YWx1ZVBpZWNlKTtcbiAgcmV0dXJuICgwLCBfdXRpbHMuYmV0d2VlbikoZGV0YWlsVmFsdWVGcm9tLCBtaW5EYXRlLCBtYXhEYXRlKTtcbn1cblxudmFyIGdldERldGFpbFZhbHVlRnJvbSA9IGZ1bmN0aW9uIGdldERldGFpbFZhbHVlRnJvbShhcmdzKSB7XG4gIHJldHVybiBnZXREZXRhaWxWYWx1ZShhcmdzLCAwKTtcbn07XG5cbnZhciBnZXREZXRhaWxWYWx1ZVRvID0gZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWVUbyhhcmdzKSB7XG4gIHJldHVybiBnZXREZXRhaWxWYWx1ZShhcmdzLCAxKTtcbn07XG5cbnZhciBnZXREZXRhaWxWYWx1ZUFycmF5ID0gZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWVBcnJheShhcmdzKSB7XG4gIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWU7XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gW2dldERldGFpbFZhbHVlRnJvbSwgZ2V0RGV0YWlsVmFsdWVUb10ubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbihhcmdzKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBpc0ludGVybmFsSW5wdXQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQnKSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5wdXQoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudDtcblxuICBkbyB7XG4gICAgbmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudFtwcm9wZXJ0eV07XG4gIH0gd2hpbGUgKG5leHRFbGVtZW50ICYmICFpc0ludGVybmFsSW5wdXQobmV4dEVsZW1lbnQpKTtcblxuICByZXR1cm4gbmV4dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlbmRlckN1c3RvbUlucHV0cyhwbGFjZWhvbGRlciwgZWxlbWVudEZ1bmN0aW9ucywgYWxsb3dNdWx0aXBsZUluc3RhbmNlcykge1xuICB2YXIgdXNlZEZ1bmN0aW9ucyA9IFtdO1xuICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoT2JqZWN0LmtleXMoZWxlbWVudEZ1bmN0aW9ucykubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChlbCwgXCIrXCIpO1xuICB9KS5qb2luKCd8JyksICdnJyk7XG4gIHZhciBtYXRjaGVzID0gcGxhY2Vob2xkZXIubWF0Y2gocGF0dGVybik7XG4gIHJldHVybiBwbGFjZWhvbGRlci5zcGxpdChwYXR0ZXJuKS5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgZWxlbWVudCwgaW5kZXgpIHtcbiAgICB2YXIgZGl2aWRlciA9IGVsZW1lbnQgJiZcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfRGl2aWRlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGtleTogXCJzZXBhcmF0b3JfXCIuY29uY2F0KGluZGV4KVxuICAgIH0sIGVsZW1lbnQpO1xuXG4gICAgdmFyIHJlcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSwgW2RpdmlkZXJdKTtcbiAgICB2YXIgY3VycmVudE1hdGNoID0gbWF0Y2hlcyAmJiBtYXRjaGVzW2luZGV4XTtcblxuICAgIGlmIChjdXJyZW50TWF0Y2gpIHtcbiAgICAgIHZhciByZW5kZXJGdW5jdGlvbiA9IGVsZW1lbnRGdW5jdGlvbnNbY3VycmVudE1hdGNoXSB8fCBlbGVtZW50RnVuY3Rpb25zW09iamVjdC5rZXlzKGVsZW1lbnRGdW5jdGlvbnMpLmZpbmQoZnVuY3Rpb24gKGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gY3VycmVudE1hdGNoLm1hdGNoKGVsZW1lbnRGdW5jdGlvbik7XG4gICAgICB9KV07XG5cbiAgICAgIGlmICghYWxsb3dNdWx0aXBsZUluc3RhbmNlcyAmJiB1c2VkRnVuY3Rpb25zLmluY2x1ZGVzKHJlbmRlckZ1bmN0aW9uKSkge1xuICAgICAgICByZXMucHVzaChjdXJyZW50TWF0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnB1c2gocmVuZGVyRnVuY3Rpb24oY3VycmVudE1hdGNoLCBpbmRleCkpO1xuICAgICAgICB1c2VkRnVuY3Rpb25zLnB1c2gocmVuZGVyRnVuY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH0sIFtdKTtcbn1cblxudmFyIERhdGVJbnB1dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERhdGVJbnB1dCwgX1B1cmVDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF0ZUlucHV0KTtcblxuICBmdW5jdGlvbiBEYXRlSW5wdXQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVJbnB1dCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIHllYXI6IG51bGwsXG4gICAgICBtb250aDogbnVsbCxcbiAgICAgIGRheTogbnVsbFxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIC8vIFdyYXBwZXIgd2FzIGRpcmVjdGx5IGNsaWNrZWRcbiAgICAgICAgdmFyIGZpcnN0SW5wdXQgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV07XG4gICAgICAgIGZvY3VzKGZpcnN0SW5wdXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uS2V5RG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlIF90aGlzLmRpdmlkZXI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgPyAncHJldmlvdXNFbGVtZW50U2libGluZycgOiAnbmV4dEVsZW1lbnRTaWJsaW5nJztcbiAgICAgICAgICAgIHZhciBuZXh0SW5wdXQgPSBmaW5kSW5wdXQoaW5wdXQsIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGZvY3VzKG5leHRJbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbktleVVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGtleSA9IGV2ZW50LmtleSxcbiAgICAgICAgICBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHZhciBpc051bWJlcktleSA9ICFpc05hTihwYXJzZUludChrZXksIDEwKSk7XG5cbiAgICAgIGlmICghaXNOdW1iZXJLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHZhciBtYXggPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpO1xuICAgICAgLyoqXG4gICAgICAgKiBHaXZlbiAxLCB0aGUgc21hbGxlc3QgcG9zc2libGUgbnVtYmVyIHRoZSB1c2VyIGNvdWxkIHR5cGUgYnkgYWRkaW5nIGFub3RoZXIgZGlnaXQgaXMgMTAuXG4gICAgICAgKiAxMCB3b3VsZCBiZSBhIHZhbGlkIHZhbHVlIGdpdmVuIG1heCA9IDEyLCBzbyB3ZSB3b24ndCBqdW1wIHRvIHRoZSBuZXh0IGlucHV0LlxuICAgICAgICogSG93ZXZlciwgZ2l2ZW4gMiwgc21hbGxlcnMgcG9zc2libGUgbnVtYmVyIHdvdWxkIGJlIDIwLCBhbmQgdGh1cyBrZWVwaW5nIHRoZSBmb2N1cyBpblxuICAgICAgICogdGhpcyBmaWVsZCBkb2Vzbid0IG1ha2Ugc2Vuc2UuXG4gICAgICAgKi9cblxuICAgICAgaWYgKHZhbHVlICogMTAgPiBtYXggfHwgdmFsdWUubGVuZ3RoID49IG1heC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gJ25leHRFbGVtZW50U2libGluZyc7XG4gICAgICAgIHZhciBuZXh0SW5wdXQgPSBmaW5kSW5wdXQoaW5wdXQsIHByb3BlcnR5KTtcbiAgICAgICAgZm9jdXMobmV4dElucHV0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfZXZlbnQkdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgIG5hbWUgPSBfZXZlbnQkdGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgdmFsdWUgPSBfZXZlbnQkdGFyZ2V0LnZhbHVlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIHZhbHVlID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IG51bGwpLCBfdGhpcy5vbkNoYW5nZUV4dGVybmFsKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNoYW5nZU5hdGl2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICBpZiAoIW9uQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3ZhbHVlJHNwbGl0ID0gdmFsdWUuc3BsaXQoJy0nKSxcbiAgICAgICAgICAgIF92YWx1ZSRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfdmFsdWUkc3BsaXQsIDMpLFxuICAgICAgICAgICAgeWVhclN0cmluZyA9IF92YWx1ZSRzcGxpdDJbMF0sXG4gICAgICAgICAgICBtb250aFN0cmluZyA9IF92YWx1ZSRzcGxpdDJbMV0sXG4gICAgICAgICAgICBkYXlTdHJpbmcgPSBfdmFsdWUkc3BsaXQyWzJdO1xuXG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoeWVhclN0cmluZywgMTApO1xuICAgICAgICB2YXIgbW9udGhJbmRleCA9IHBhcnNlSW50KG1vbnRoU3RyaW5nLCAxMCkgLSAxIHx8IDA7XG4gICAgICAgIHZhciBkYXkgPSBwYXJzZUludChkYXlTdHJpbmcsIDEwKSB8fCAxO1xuICAgICAgICB2YXIgcHJvcG9zZWRWYWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHByb3Bvc2VkVmFsdWUuc2V0RnVsbFllYXIoeWVhciwgbW9udGhJbmRleCwgZGF5KTtcbiAgICAgICAgcHJvcG9zZWRWYWx1ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHByb3Bvc2VkVmFsdWU7XG4gICAgICB9KCk7XG5cbiAgICAgIG9uQ2hhbmdlKHByb2Nlc3NlZFZhbHVlLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VFeHRlcm5hbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKCFvbkNoYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtRWxlbWVudHMgPSBbX3RoaXMuZGF5SW5wdXQsIF90aGlzLm1vbnRoSW5wdXQsIF90aGlzLnllYXJJbnB1dF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIHZhbHVlc1tmb3JtRWxlbWVudC5uYW1lXSA9IGZvcm1FbGVtZW50LnZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmb3JtRWxlbWVudHMuZXZlcnkoZnVuY3Rpb24gKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhZm9ybUVsZW1lbnQudmFsdWU7XG4gICAgICB9KSkge1xuICAgICAgICBvbkNoYW5nZShudWxsLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGZvcm1FbGVtZW50cy5ldmVyeShmdW5jdGlvbiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1FbGVtZW50LnZhbHVlICYmIGZvcm1FbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludCh2YWx1ZXMueWVhciwgMTApO1xuICAgICAgICB2YXIgbW9udGhJbmRleCA9IHBhcnNlSW50KHZhbHVlcy5tb250aCwgMTApIC0gMSB8fCAwO1xuICAgICAgICB2YXIgZGF5ID0gcGFyc2VJbnQodmFsdWVzLmRheSB8fCAxLCAxMCk7XG4gICAgICAgIHZhciBwcm9wb3NlZFZhbHVlID0gbmV3IERhdGUoKTtcbiAgICAgICAgcHJvcG9zZWRWYWx1ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICAgICAgICBwcm9wb3NlZFZhbHVlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IF90aGlzLmdldFByb2Nlc3NlZFZhbHVlKHByb3Bvc2VkVmFsdWUpO1xuXG4gICAgICAgIG9uQ2hhbmdlKHByb2Nlc3NlZFZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyRGF5XCIsIGZ1bmN0aW9uIChjdXJyZW50TWF0Y2gsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgICAgZGF5QXJpYUxhYmVsID0gX3RoaXMkcHJvcHMuZGF5QXJpYUxhYmVsLFxuICAgICAgICAgIGRheVBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMuZGF5UGxhY2Vob2xkZXIsXG4gICAgICAgICAgc2hvd0xlYWRpbmdaZXJvcyA9IF90aGlzJHByb3BzLnNob3dMZWFkaW5nWmVyb3M7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBkYXkgPSBfdGhpcyRzdGF0ZS5kYXksXG4gICAgICAgICAgbW9udGggPSBfdGhpcyRzdGF0ZS5tb250aCxcbiAgICAgICAgICB5ZWFyID0gX3RoaXMkc3RhdGUueWVhcjtcblxuICAgICAgaWYgKGN1cnJlbnRNYXRjaCAmJiBjdXJyZW50TWF0Y2gubGVuZ3RoID4gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCB0b2tlbjogXCIuY29uY2F0KGN1cnJlbnRNYXRjaCkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0xlYWRpbmdaZXJvc0Zyb21Gb3JtYXQgPSBjdXJyZW50TWF0Y2ggJiYgY3VycmVudE1hdGNoLmxlbmd0aCA9PT0gMjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9EYXlJbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBcImRheVwiXG4gICAgICB9LCBfdGhpcy5jb21tb25JbnB1dFByb3BzLCB7XG4gICAgICAgIGFyaWFMYWJlbDogZGF5QXJpYUxhYmVsLFxuICAgICAgICBhdXRvRm9jdXM6IGluZGV4ID09PSAwICYmIGF1dG9Gb2N1cyxcbiAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICBwbGFjZWhvbGRlcjogZGF5UGxhY2Vob2xkZXIsXG4gICAgICAgIHNob3dMZWFkaW5nWmVyb3M6IHNob3dMZWFkaW5nWmVyb3NGcm9tRm9ybWF0IHx8IHNob3dMZWFkaW5nWmVyb3MsXG4gICAgICAgIHZhbHVlOiBkYXksXG4gICAgICAgIHllYXI6IHllYXJcbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW5kZXJNb250aFwiLCBmdW5jdGlvbiAoY3VycmVudE1hdGNoLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzMi5hdXRvRm9jdXMsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMyLmxvY2FsZSxcbiAgICAgICAgICBtb250aEFyaWFMYWJlbCA9IF90aGlzJHByb3BzMi5tb250aEFyaWFMYWJlbCxcbiAgICAgICAgICBtb250aFBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMyLm1vbnRoUGxhY2Vob2xkZXIsXG4gICAgICAgICAgc2hvd0xlYWRpbmdaZXJvcyA9IF90aGlzJHByb3BzMi5zaG93TGVhZGluZ1plcm9zO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIG1vbnRoID0gX3RoaXMkc3RhdGUyLm1vbnRoLFxuICAgICAgICAgIHllYXIgPSBfdGhpcyRzdGF0ZTIueWVhcjtcblxuICAgICAgaWYgKGN1cnJlbnRNYXRjaCAmJiBjdXJyZW50TWF0Y2gubGVuZ3RoID4gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCB0b2tlbjogXCIuY29uY2F0KGN1cnJlbnRNYXRjaCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudE1hdGNoLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX01vbnRoU2VsZWN0W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICAgIGtleTogXCJtb250aFwiXG4gICAgICAgIH0sIF90aGlzLmNvbW1vbklucHV0UHJvcHMsIHtcbiAgICAgICAgICBhcmlhTGFiZWw6IG1vbnRoQXJpYUxhYmVsLFxuICAgICAgICAgIGF1dG9Gb2N1czogaW5kZXggPT09IDAgJiYgYXV0b0ZvY3VzLFxuICAgICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBtb250aFBsYWNlaG9sZGVyLFxuICAgICAgICAgIFwic2hvcnRcIjogY3VycmVudE1hdGNoLmxlbmd0aCA9PT0gMyxcbiAgICAgICAgICB2YWx1ZTogbW9udGgsXG4gICAgICAgICAgeWVhcjogeWVhclxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93TGVhZGluZ1plcm9zRnJvbUZvcm1hdCA9IGN1cnJlbnRNYXRjaCAmJiBjdXJyZW50TWF0Y2gubGVuZ3RoID09PSAyO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX01vbnRoSW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJtb250aFwiXG4gICAgICB9LCBfdGhpcy5jb21tb25JbnB1dFByb3BzLCB7XG4gICAgICAgIGFyaWFMYWJlbDogbW9udGhBcmlhTGFiZWwsXG4gICAgICAgIGF1dG9Gb2N1czogaW5kZXggPT09IDAgJiYgYXV0b0ZvY3VzLFxuICAgICAgICBwbGFjZWhvbGRlcjogbW9udGhQbGFjZWhvbGRlcixcbiAgICAgICAgc2hvd0xlYWRpbmdaZXJvczogc2hvd0xlYWRpbmdaZXJvc0Zyb21Gb3JtYXQgfHwgc2hvd0xlYWRpbmdaZXJvcyxcbiAgICAgICAgdmFsdWU6IG1vbnRoLFxuICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyWWVhclwiLCBmdW5jdGlvbiAoY3VycmVudE1hdGNoLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzMy5hdXRvRm9jdXMsXG4gICAgICAgICAgeWVhckFyaWFMYWJlbCA9IF90aGlzJHByb3BzMy55ZWFyQXJpYUxhYmVsLFxuICAgICAgICAgIHllYXJQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMy55ZWFyUGxhY2Vob2xkZXI7XG4gICAgICB2YXIgeWVhciA9IF90aGlzLnN0YXRlLnllYXI7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfWWVhcklucHV0W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IFwieWVhclwiXG4gICAgICB9LCBfdGhpcy5jb21tb25JbnB1dFByb3BzLCB7XG4gICAgICAgIGFyaWFMYWJlbDogeWVhckFyaWFMYWJlbCxcbiAgICAgICAgYXV0b0ZvY3VzOiBpbmRleCA9PT0gMCAmJiBhdXRvRm9jdXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB5ZWFyUGxhY2Vob2xkZXIsXG4gICAgICAgIHZhbHVlOiB5ZWFyLFxuICAgICAgICB2YWx1ZVR5cGU6IF90aGlzLnZhbHVlVHlwZVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVJbnB1dCwgW3tcbiAgICBrZXk6IFwiZ2V0UHJvY2Vzc2VkVmFsdWVcIixcblxuICAgIC8qKlxuICAgICAqIEdldHMgY3VycmVudCB2YWx1ZSBpbiBhIGRlc2lyZWQgZm9ybWF0LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcm9jZXNzZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzNC5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczQubWF4RGF0ZSxcbiAgICAgICAgICBtYXhEZXRhaWwgPSBfdGhpcyRwcm9wczQubWF4RGV0YWlsLFxuICAgICAgICAgIHJldHVyblZhbHVlID0gX3RoaXMkcHJvcHM0LnJldHVyblZhbHVlO1xuXG4gICAgICB2YXIgcHJvY2Vzc0Z1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlRnJvbTtcblxuICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGV0YWlsVmFsdWVUbztcblxuICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZUFycmF5O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXR1cm5WYWx1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gcHJvY2Vzc0Z1bmN0aW9uKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICBtYXhEZXRhaWw6IG1heERldGFpbFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckN1c3RvbUlucHV0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDdXN0b21JbnB1dHMoKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgICAgdmFyIGVsZW1lbnRGdW5jdGlvbnMgPSB7XG4gICAgICAgIGQ6IHRoaXMucmVuZGVyRGF5LFxuICAgICAgICBNOiB0aGlzLnJlbmRlck1vbnRoLFxuICAgICAgICB5OiB0aGlzLnJlbmRlclllYXJcbiAgICAgIH07XG4gICAgICB2YXIgYWxsb3dNdWx0aXBsZUluc3RhbmNlcyA9IHR5cGVvZiBmb3JtYXQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgcmV0dXJuIF9yZW5kZXJDdXN0b21JbnB1dHMocGxhY2Vob2xkZXIsIGVsZW1lbnRGdW5jdGlvbnMsIGFsbG93TXVsdGlwbGVJbnN0YW5jZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJOYXRpdmVJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOYXRpdmVJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHM1LmRpc2FibGVkLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczUubWF4RGF0ZSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM1Lm1pbkRhdGUsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzNS5uYW1lLFxuICAgICAgICAgIG5hdGl2ZUlucHV0QXJpYUxhYmVsID0gX3RoaXMkcHJvcHM1Lm5hdGl2ZUlucHV0QXJpYUxhYmVsLFxuICAgICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHM1LnJlcXVpcmVkO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9OYXRpdmVJbnB1dFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAga2V5OiBcImRhdGVcIixcbiAgICAgICAgYXJpYUxhYmVsOiBuYXRpdmVJbnB1dEFyaWFMYWJlbCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBtYXhEYXRlOiBtYXhEYXRlIHx8IGRlZmF1bHRNYXhEYXRlLFxuICAgICAgICBtaW5EYXRlOiBtaW5EYXRlIHx8IGRlZmF1bHRNaW5EYXRlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZU5hdGl2ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHZhbHVlVHlwZTogdGhpcy52YWx1ZVR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgICB9LCB0aGlzLnJlbmRlck5hdGl2ZUlucHV0KCksIHRoaXMucmVuZGVyQ3VzdG9tSW5wdXRzKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXREYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbWF4RGV0YWlsID0gdGhpcy5wcm9wcy5tYXhEZXRhaWw7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgICB9O1xuICAgICAgdmFyIGxldmVsID0gYWxsVmlld3MuaW5kZXhPZihtYXhEZXRhaWwpO1xuXG4gICAgICBpZiAobGV2ZWwgPj0gMikge1xuICAgICAgICBvcHRpb25zLm1vbnRoID0gJ251bWVyaWMnO1xuICAgICAgfVxuXG4gICAgICBpZiAobGV2ZWwgPj0gMykge1xuICAgICAgICBvcHRpb25zLmRheSA9ICdudW1lcmljJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfZGF0ZUZvcm1hdHRlci5nZXRGb3JtYXR0ZXIpKG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXZpZGVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlci5tYXRjaCgvW14wLTlhLXpdL2kpWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHM2LmZvcm1hdCxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wczYubG9jYWxlO1xuXG4gICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICB9XG5cbiAgICAgIHZhciB5ZWFyID0gMjAxNztcbiAgICAgIHZhciBtb250aEluZGV4ID0gMTE7XG4gICAgICB2YXIgZGF5ID0gMTE7XG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XG4gICAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZShsb2NhbGUsIGRhdGUpO1xuICAgICAgdmFyIGRhdGVQaWVjZXMgPSBbJ3llYXInLCAnbW9udGgnLCAnZGF5J107XG4gICAgICB2YXIgZGF0ZVBpZWNlUmVwbGFjZW1lbnRzID0gWyd5JywgJ00nLCAnZCddO1xuXG4gICAgICBmdW5jdGlvbiBmb3JtYXREYXRlUGllY2UobmFtZSwgZGF0ZVRvRm9ybWF0KSB7XG4gICAgICAgIHJldHVybiAoMCwgX2RhdGVGb3JtYXR0ZXIuZ2V0Rm9ybWF0dGVyKShfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgICAgICB9LCBuYW1lLCAnbnVtZXJpYycpKShsb2NhbGUsIGRhdGVUb0Zvcm1hdCkubWF0Y2goL1xcZHsxLH0vKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgIGRhdGVQaWVjZXMuZm9yRWFjaChmdW5jdGlvbiAoZGF0ZVBpZWNlLCBpbmRleCkge1xuICAgICAgICB2YXIgZm9ybWF0dGVkRGF0ZVBpZWNlID0gZm9ybWF0RGF0ZVBpZWNlKGRhdGVQaWVjZSwgZGF0ZSk7XG4gICAgICAgIHZhciBkYXRlUGllY2VSZXBsYWNlbWVudCA9IGRhdGVQaWVjZVJlcGxhY2VtZW50c1tpbmRleF07XG4gICAgICAgIHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZShmb3JtYXR0ZWREYXRlUGllY2UsIGRhdGVQaWVjZVJlcGxhY2VtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21tb25JbnB1dFByb3BzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM3LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzNy5kaXNhYmxlZCxcbiAgICAgICAgICBpc0NhbGVuZGFyT3BlbiA9IF90aGlzJHByb3BzNy5pc0NhbGVuZGFyT3BlbixcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM3Lm1heERhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzNy5taW5EYXRlLFxuICAgICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHM3LnJlcXVpcmVkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSB8fCBkZWZhdWx0TWF4RGF0ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSB8fCBkZWZhdWx0TWluRGF0ZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIG9uS2V5VXA6IHRoaXMub25LZXlVcCxcbiAgICAgICAgLy8gVGhpcyBpcyBvbmx5IGZvciBzaG93aW5nIHZhbGlkaXR5IHdoZW4gZWRpdGluZ1xuICAgICAgICByZXF1aXJlZDogcmVxdWlyZWQgfHwgaXNDYWxlbmRhck9wZW4sXG4gICAgICAgIGl0ZW1SZWY6IGZ1bmN0aW9uIGl0ZW1SZWYocmVmLCBuYW1lKSB7XG4gICAgICAgICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byBlYWNoIGlucHV0IGZpZWxkXG4gICAgICAgICAgX3RoaXMyW1wiXCIuY29uY2F0KG5hbWUsIFwiSW5wdXRcIildID0gcmVmO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBtYXhEZXRhaWwgPSB0aGlzLnByb3BzLm1heERldGFpbDtcbiAgICAgIHJldHVybiBnZXRWYWx1ZVR5cGUobWF4RGV0YWlsKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgbWluRGF0ZSA9IG5leHRQcm9wcy5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBuZXh0UHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICBtYXhEZXRhaWwgPSBuZXh0UHJvcHMubWF4RGV0YWlsO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBpc0NhbGVuZGFyT3BlbiBmbGFnIGhhcyBjaGFuZ2VkLCB3ZSBoYXZlIHRvIHVwZGF0ZSBpdC5cbiAgICAgICAqIEl0J3Mgc2F2ZWQgaW4gc3RhdGUgcHVyZWx5IGZvciB1c2UgaW4gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAgICAgICovXG5cbiAgICAgIGlmIChuZXh0UHJvcHMuaXNDYWxlbmRhck9wZW4gIT09IHByZXZTdGF0ZS5pc0NhbGVuZGFyT3Blbikge1xuICAgICAgICBuZXh0U3RhdGUuaXNDYWxlbmRhck9wZW4gPSBuZXh0UHJvcHMuaXNDYWxlbmRhck9wZW47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBuZXh0IHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZSAgKHdpdGggYW4gZXhjZXB0aW9uIG9mIHNpdHVhdGlvbiBpblxuICAgICAgICogd2hpY2ggdmFsdWVzIHByb3ZpZGVkIGFyZSBsaW1pdGVkIGJ5IG1pbkRhdGUgYW5kIG1heERhdGUgc28gdGhhdCB0aGUgZGF0ZXMgYXJlIHRoZSBzYW1lKSxcbiAgICAgICAqIGdldCBhIG5ldyBvbmUuXG4gICAgICAgKi9cblxuXG4gICAgICB2YXIgbmV4dFZhbHVlID0gZ2V0RGV0YWlsVmFsdWVGcm9tKHtcbiAgICAgICAgdmFsdWU6IG5leHRQcm9wcy52YWx1ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgbWF4RGV0YWlsOiBtYXhEZXRhaWxcbiAgICAgIH0pO1xuICAgICAgdmFyIHZhbHVlcyA9IFtuZXh0VmFsdWUsIHByZXZTdGF0ZS52YWx1ZV07XG5cbiAgICAgIGlmICggLy8gVG9nZ2xpbmcgY2FsZW5kYXIgdmlzaWJpbGl0eSByZXNldHMgdmFsdWVzXG4gICAgICBuZXh0U3RhdGUuaXNDYWxlbmRhck9wZW4gLy8gRmxhZyB3YXMgdG9nZ2xlZFxuICAgICAgfHwgZGF0ZXNBcmVEaWZmZXJlbnQuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlRnJvbSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgICBtYXhEZXRhaWw6IG1heERldGFpbFxuICAgICAgICB9KTtcbiAgICAgIH0pKSkgfHwgZGF0ZXNBcmVEaWZmZXJlbnQuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlVG8oe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgICAgbWF4RGV0YWlsOiBtYXhEZXRhaWxcbiAgICAgICAgfSk7XG4gICAgICB9KSkpKSB7XG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBuZXh0U3RhdGUueWVhciA9ICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKG5leHRWYWx1ZSk7XG4gICAgICAgICAgbmV4dFN0YXRlLm1vbnRoID0gKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhIdW1hbikobmV4dFZhbHVlKTtcbiAgICAgICAgICBuZXh0U3RhdGUuZGF5ID0gKDAsIF9kYXRlVXRpbHMuZ2V0RGF0ZSkobmV4dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0U3RhdGUueWVhciA9IG51bGw7XG4gICAgICAgICAgbmV4dFN0YXRlLm1vbnRoID0gbnVsbDtcbiAgICAgICAgICBuZXh0U3RhdGUuZGF5ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRTdGF0ZS52YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZUlucHV0O1xufShfcmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGF0ZUlucHV0O1xuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4RGV0YWlsOiAnbW9udGgnLFxuICBuYW1lOiAnZGF0ZScsXG4gIHJldHVyblZhbHVlOiAnc3RhcnQnXG59O1xuXG52YXIgaXNWYWx1ZSA9IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5pbnN0YW5jZU9mKERhdGUpXSk7XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGF1dG9Gb2N1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF5QXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRheVBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBmb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaXNDYWxlbmRhck9wZW46IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxvY2FsZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtYXhEYXRlOiBfcHJvcFR5cGVzMi5pc01heERhdGUsXG4gIG1heERldGFpbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2YoYWxsVmlld3MpLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG1vbnRoQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG1vbnRoUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBuYXRpdmVJbnB1dEFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJldHVyblZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXJ0JywgJ2VuZCcsICdyYW5nZSddKSxcbiAgc2hvd0xlYWRpbmdaZXJvczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbaXNWYWx1ZSwgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihpc1ZhbHVlKV0pLFxuICB5ZWFyQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHllYXJQbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEYXlJbnB1dDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKFwiQHdvanRla21hai9kYXRlLXV0aWxzXCIpO1xuXG52YXIgX0lucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbnB1dFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvcHJvcFR5cGVzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIERheUlucHV0KF9yZWYpIHtcbiAgdmFyIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbW9udGggPSBfcmVmLm1vbnRoLFxuICAgICAgeWVhciA9IF9yZWYueWVhcixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wibWF4RGF0ZVwiLCBcIm1pbkRhdGVcIiwgXCJtb250aFwiLCBcInllYXJcIl0pO1xuXG4gIHZhciBjdXJyZW50TW9udGhNYXhEYXlzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghbW9udGgpIHtcbiAgICAgIHJldHVybiAzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0RGF5c0luTW9udGgpKG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSkpO1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlICYmIHllYXIgPT09ICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKGRhdGUpICYmIG1vbnRoID09PSAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShkYXRlKTtcbiAgfVxuXG4gIHZhciBtYXhEYXkgPSAoMCwgX3V0aWxzLnNhZmVNaW4pKGN1cnJlbnRNb250aE1heERheXMsIGlzU2FtZU1vbnRoKG1heERhdGUpICYmICgwLCBfZGF0ZVV0aWxzLmdldERhdGUpKG1heERhdGUpKTtcbiAgdmFyIG1pbkRheSA9ICgwLCBfdXRpbHMuc2FmZU1heCkoMSwgaXNTYW1lTW9udGgobWluRGF0ZSkgJiYgKDAsIF9kYXRlVXRpbHMuZ2V0RGF0ZSkobWluRGF0ZSkpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfSW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgbWF4OiBtYXhEYXksXG4gICAgbWluOiBtaW5EYXksXG4gICAgbmFtZTogXCJkYXlcIlxuICB9LCBvdGhlclByb3BzKSk7XG59XG5cbkRheUlucHV0LnByb3BUeXBlcyA9IHtcbiAgYXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBpdGVtUmVmOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBtYXhEYXRlOiBfcHJvcFR5cGVzMi5pc01heERhdGUsXG4gIG1pbkRhdGU6IF9wcm9wVHlwZXMyLmlzTWluRGF0ZSxcbiAgbW9udGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5RG93bjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlVcDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNob3dMZWFkaW5nWmVyb3M6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIHllYXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlclxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJbnB1dDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9tZXJnZUNsYXNzTmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtZXJnZS1jbGFzcy1uYW1lc1wiKSk7XG5cbnZhciBfdXBkYXRlSW5wdXRXaWR0aCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJ1cGRhdGUtaW5wdXQtd2lkdGhcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tYXV0b2ZvY3VzICovXG52YXIgaXNFZGdlTGVnYWN5ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ25hdmlnYXRvcicgaW4gd2luZG93ICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyBFZGdlXFwvMS8pO1xuXG5mdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG4gIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgaWYgKGlzRWRnZUxlZ2FjeSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnNlbGVjdCgpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5zZWxlY3QoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoT25Gb250TG9hZChlbGVtZW50KSB7XG4gIGlmICghZG9jdW1lbnQuZm9udHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZm9udCA9ICgwLCBfdXBkYXRlSW5wdXRXaWR0aC5nZXRGb250U2hvcnRoYW5kKShlbGVtZW50KTtcblxuICBpZiAoIWZvbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaXNGb250TG9hZGVkID0gZG9jdW1lbnQuZm9udHMuY2hlY2soZm9udCk7XG5cbiAgaWYgKGlzRm9udExvYWRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9hZGluZ0RvbmUoKSB7XG4gICAgKDAsIF91cGRhdGVJbnB1dFdpZHRoW1wiZGVmYXVsdFwiXSkoZWxlbWVudCk7XG4gIH1cblxuICBkb2N1bWVudC5mb250cy5hZGRFdmVudExpc3RlbmVyKCdsb2FkaW5nZG9uZScsIG9uTG9hZGluZ0RvbmUpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb25TdHJpbmcoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBtYWtlT25LZXlQcmVzcyhtYXhMZW5ndGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5LFxuICAgICAgICBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICB2YXIgaXNOdW1iZXJLZXkgPSAhaXNOYU4ocGFyc2VJbnQoa2V5LCAxMCkpO1xuICAgIHZhciBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb25TdHJpbmcoKTtcblxuICAgIGlmIChpc051bWJlcktleSAmJiAoc2VsZWN0aW9uIHx8IHZhbHVlLmxlbmd0aCA8IG1heExlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBJbnB1dChfcmVmKSB7XG4gIHZhciBhcmlhTGFiZWwgPSBfcmVmLmFyaWFMYWJlbCxcbiAgICAgIGF1dG9Gb2N1cyA9IF9yZWYuYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBpdGVtUmVmID0gX3JlZi5pdGVtUmVmLFxuICAgICAgbWF4ID0gX3JlZi5tYXgsXG4gICAgICBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBuYW1lRm9yQ2xhc3MgPSBfcmVmLm5hbWVGb3JDbGFzcyxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgX29uS2V5VXAgPSBfcmVmLm9uS2V5VXAsXG4gICAgICBfcmVmJHBsYWNlaG9sZGVyID0gX3JlZi5wbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlaG9sZGVyID0gX3JlZiRwbGFjZWhvbGRlciA9PT0gdm9pZCAwID8gJy0tJyA6IF9yZWYkcGxhY2Vob2xkZXIsXG4gICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICBzaG93TGVhZGluZ1plcm9zID0gX3JlZi5zaG93TGVhZGluZ1plcm9zLFxuICAgICAgc3RlcCA9IF9yZWYuc3RlcCxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIGhhc0xlYWRpbmdaZXJvID0gc2hvd0xlYWRpbmdaZXJvcyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSA8IDEwO1xuICB2YXIgbWF4TGVuZ3RoID0gbWF4LnRvU3RyaW5nKCkubGVuZ3RoO1xuICByZXR1cm4gW2hhc0xlYWRpbmdaZXJvICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBrZXk6IFwibGVhZGluZ1plcm9cIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2xlYWRpbmdaZXJvXCIpXG4gIH0sIFwiMFwiKSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBrZXk6IFwiaW5wdXRcIixcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBjbGFzc05hbWU6ICgwLCBfbWVyZ2VDbGFzc05hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIl9faW5wdXRcIiksIFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX1wiKS5jb25jYXQobmFtZUZvckNsYXNzIHx8IG5hbWUpLCBoYXNMZWFkaW5nWmVybyAmJiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19pbnB1dC0taGFzTGVhZGluZ1plcm9cIikpLFxuICAgIFwiZGF0YS1pbnB1dFwiOiBcInRydWVcIixcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgaW5wdXRNb2RlOiBcIm51bWVyaWNcIixcbiAgICBtYXg6IG1heCxcbiAgICBtaW46IG1pbixcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgIG9uS2V5UHJlc3M6IG1ha2VPbktleVByZXNzKG1heExlbmd0aCksXG4gICAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcChldmVudCkge1xuICAgICAgKDAsIF91cGRhdGVJbnB1dFdpZHRoW1wiZGVmYXVsdFwiXSkoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgaWYgKF9vbktleVVwKSB7XG4gICAgICAgIF9vbktleVVwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuICAgICAgaWYgKF9yZWYyKSB7XG4gICAgICAgICgwLCBfdXBkYXRlSW5wdXRXaWR0aFtcImRlZmF1bHRcIl0pKF9yZWYyKTtcbiAgICAgICAgdXBkYXRlSW5wdXRXaWR0aE9uRm9udExvYWQoX3JlZjIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVJlZikge1xuICAgICAgICBpdGVtUmVmKF9yZWYyLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICBzdGVwOiBzdGVwLFxuICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgdmFsdWU6IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiAnJ1xuICB9KV07XG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgYXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGF1dG9Gb2N1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGl0ZW1SZWY6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG1heDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBtaW46IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgbmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBuYW1lRm9yQ2xhc3M6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5RG93bjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlVcDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNob3dMZWFkaW5nWmVyb3M6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0ZXA6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlclxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTW9udGhJbnB1dDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKFwiQHdvanRla21hai9kYXRlLXV0aWxzXCIpO1xuXG52YXIgX0lucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbnB1dFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvcHJvcFR5cGVzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIE1vbnRoSW5wdXQoX3JlZikge1xuICB2YXIgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICB5ZWFyID0gX3JlZi55ZWFyLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJtYXhEYXRlXCIsIFwibWluRGF0ZVwiLCBcInllYXJcIl0pO1xuXG4gIGZ1bmN0aW9uIGlzU2FtZVllYXIoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlICYmIHllYXIgPT09ICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKGRhdGUpO1xuICB9XG5cbiAgdmFyIG1heE1vbnRoID0gKDAsIF91dGlscy5zYWZlTWluKSgxMiwgaXNTYW1lWWVhcihtYXhEYXRlKSAmJiAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShtYXhEYXRlKSk7XG4gIHZhciBtaW5Nb250aCA9ICgwLCBfdXRpbHMuc2FmZU1heCkoMSwgaXNTYW1lWWVhcihtaW5EYXRlKSAmJiAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShtaW5EYXRlKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9JbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICBtYXg6IG1heE1vbnRoLFxuICAgIG1pbjogbWluTW9udGgsXG4gICAgbmFtZTogXCJtb250aFwiXG4gIH0sIG90aGVyUHJvcHMpKTtcbn1cblxuTW9udGhJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXRlbVJlZjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5VXA6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaG93TGVhZGluZ1plcm9zOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICB5ZWFyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1vbnRoU2VsZWN0O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX21lcmdlQ2xhc3NOYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1lcmdlLWNsYXNzLW5hbWVzXCIpKTtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKFwiQHdvanRla21hai9kYXRlLXV0aWxzXCIpO1xuXG52YXIgX2RhdGVGb3JtYXR0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXJcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvcHJvcFR5cGVzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gTW9udGhTZWxlY3QoX3JlZikge1xuICB2YXIgYXJpYUxhYmVsID0gX3JlZi5hcmlhTGFiZWwsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGl0ZW1SZWYgPSBfcmVmLml0ZW1SZWYsXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgX3JlZiRwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/ICctLScgOiBfcmVmJHBsYWNlaG9sZGVyLFxuICAgICAgX3Nob3J0ID0gX3JlZltcInNob3J0XCJdLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgeWVhciA9IF9yZWYueWVhcixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiYXJpYUxhYmVsXCIsIFwiY2xhc3NOYW1lXCIsIFwiaXRlbVJlZlwiLCBcImxvY2FsZVwiLCBcIm1heERhdGVcIiwgXCJtaW5EYXRlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzaG9ydFwiLCBcInZhbHVlXCIsIFwieWVhclwiXSk7XG5cbiAgZnVuY3Rpb24gaXNTYW1lWWVhcihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgJiYgeWVhciA9PT0gKDAsIF9kYXRlVXRpbHMuZ2V0WWVhcikoZGF0ZSk7XG4gIH1cblxuICB2YXIgbWF4TW9udGggPSAoMCwgX3V0aWxzLnNhZmVNaW4pKDEyLCBpc1NhbWVZZWFyKG1heERhdGUpICYmICgwLCBfZGF0ZVV0aWxzLmdldE1vbnRoSHVtYW4pKG1heERhdGUpKTtcbiAgdmFyIG1pbk1vbnRoID0gKDAsIF91dGlscy5zYWZlTWF4KSgxLCBpc1NhbWVZZWFyKG1pbkRhdGUpICYmICgwLCBfZGF0ZVV0aWxzLmdldE1vbnRoSHVtYW4pKG1pbkRhdGUpKTtcblxuICB2YXIgZGF0ZXMgPSBfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkoMTIpKS5tYXAoZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgyMDE5LCBpbmRleCwgMSk7XG4gIH0pO1xuXG4gIHZhciBuYW1lID0gJ21vbnRoJztcbiAgdmFyIGZvcm1hdHRlciA9IF9zaG9ydCA/IF9kYXRlRm9ybWF0dGVyLmZvcm1hdFNob3J0TW9udGggOiBfZGF0ZUZvcm1hdHRlci5mb3JtYXRNb250aDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiAoMCwgX21lcmdlQ2xhc3NOYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2lucHV0XCIpLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19cIikuY29uY2F0KG5hbWUpKSxcbiAgICBcImRhdGEtaW5wdXRcIjogXCJ0cnVlXCIsXG4gICAgbmFtZTogbmFtZSxcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuICAgICAgaWYgKGl0ZW1SZWYpIHtcbiAgICAgICAgaXRlbVJlZihfcmVmMiwgbmFtZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZTogdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6ICcnXG4gIH0sIG90aGVyUHJvcHMpLCAhdmFsdWUgJiYgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7XG4gICAgdmFsdWU6IFwiXCJcbiAgfSwgcGxhY2Vob2xkZXIpLCBkYXRlcy5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgbW9udGggPSAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShkYXRlKTtcbiAgICB2YXIgZGlzYWJsZWQgPSBtb250aCA8IG1pbk1vbnRoIHx8IG1vbnRoID4gbWF4TW9udGg7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwge1xuICAgICAga2V5OiBtb250aCxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBtb250aFxuICAgIH0sIGZvcm1hdHRlcihsb2NhbGUsIGRhdGUpKTtcbiAgfSkpO1xufVxuXG5Nb250aFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXRlbVJlZjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgbG9jYWxlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG1heERhdGU6IF9wcm9wVHlwZXMyLmlzTWF4RGF0ZSxcbiAgbWluRGF0ZTogX3Byb3BUeXBlczIuaXNNaW5EYXRlLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleVVwOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBwbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByZXF1aXJlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgXCJzaG9ydFwiOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICB5ZWFyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE5hdGl2ZUlucHV0O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2RhdGVVdGlscyA9IHJlcXVpcmUoXCJAd29qdGVrbWFqL2RhdGUtdXRpbHNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvcHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gTmF0aXZlSW5wdXQoX3JlZikge1xuICB2YXIgYXJpYUxhYmVsID0gX3JlZi5hcmlhTGFiZWwsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICB2YWx1ZVR5cGUgPSBfcmVmLnZhbHVlVHlwZTtcblxuICB2YXIgbmF0aXZlSW5wdXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aXRjaCAodmFsdWVUeXBlKSB7XG4gICAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIHJldHVybiAnbnVtYmVyJztcblxuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICByZXR1cm4gJ21vbnRoJztcblxuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgcmV0dXJuICdkYXRlJztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlVHlwZS4nKTtcbiAgICB9XG4gIH0oKTtcblxuICB2YXIgbmF0aXZlVmFsdWVQYXJzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gX2RhdGVVdGlscy5nZXRZZWFyO1xuXG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiBfZGF0ZVV0aWxzLmdldElTT0xvY2FsTW9udGg7XG5cbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIHJldHVybiBfZGF0ZVV0aWxzLmdldElTT0xvY2FsRGF0ZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlVHlwZS4nKTtcbiAgICB9XG4gIH0oKTtcblxuICBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIG1heDogbWF4RGF0ZSA/IG5hdGl2ZVZhbHVlUGFyc2VyKG1heERhdGUpIDogbnVsbCxcbiAgICBtaW46IG1pbkRhdGUgPyBuYXRpdmVWYWx1ZVBhcnNlcihtaW5EYXRlKSA6IG51bGwsXG4gICAgbmFtZTogbmFtZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25Gb2N1czogc3RvcFByb3BhZ2F0aW9uLFxuICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICBzdHlsZToge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHpJbmRleDogJy05OTknXG4gICAgfSxcbiAgICB0eXBlOiBuYXRpdmVJbnB1dFR5cGUsXG4gICAgdmFsdWU6IHZhbHVlID8gbmF0aXZlVmFsdWVQYXJzZXIodmFsdWUpIDogJydcbiAgfSk7XG59XG5cbk5hdGl2ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgYXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBtYXhEYXRlOiBfcHJvcFR5cGVzMi5pc01heERhdGUsXG4gIG1pbkRhdGU6IF9wcm9wVHlwZXMyLmlzTWluRGF0ZSxcbiAgbmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uaW5zdGFuY2VPZihEYXRlKV0pLFxuICB2YWx1ZVR5cGU6IF9wcm9wVHlwZXMyLmlzVmFsdWVUeXBlXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBZZWFySW5wdXQ7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZShcIkB3b2p0ZWttYWovZGF0ZS11dGlsc1wiKTtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBZZWFySW5wdXQoX3JlZikge1xuICB2YXIgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBfcmVmJHBsYWNlaG9sZGVyID0gX3JlZi5wbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlaG9sZGVyID0gX3JlZiRwbGFjZWhvbGRlciA9PT0gdm9pZCAwID8gJy0tLS0nIDogX3JlZiRwbGFjZWhvbGRlcixcbiAgICAgIHZhbHVlVHlwZSA9IF9yZWYudmFsdWVUeXBlLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJtYXhEYXRlXCIsIFwibWluRGF0ZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwidmFsdWVUeXBlXCJdKTtcblxuICB2YXIgbWF4WWVhciA9ICgwLCBfdXRpbHMuc2FmZU1pbikoMjc1NzYwLCBtYXhEYXRlICYmICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKG1heERhdGUpKTtcbiAgdmFyIG1pblllYXIgPSAoMCwgX3V0aWxzLnNhZmVNYXgpKDEsIG1pbkRhdGUgJiYgKDAsIF9kYXRlVXRpbHMuZ2V0WWVhcikobWluRGF0ZSkpO1xuXG4gIHZhciB5ZWFyU3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsdWVUeXBlID09PSAnY2VudHVyeScpIHtcbiAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfSgpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9JbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICBtYXg6IG1heFllYXIsXG4gICAgbWluOiBtaW5ZZWFyLFxuICAgIG5hbWU6IFwieWVhclwiLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICBzdGVwOiB5ZWFyU3RlcFxuICB9LCBvdGhlclByb3BzKSk7XG59XG5cblllYXJJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXRlbVJlZjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5VXA6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICB2YWx1ZVR5cGU6IF9wcm9wVHlwZXMyLmlzVmFsdWVUeXBlXG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX21ha2VFdmVudFByb3BzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWFrZS1ldmVudC1wcm9wc1wiKSk7XG5cbnZhciBfbWVyZ2VDbGFzc05hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWVyZ2UtY2xhc3MtbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0Q2FsZW5kYXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1jYWxlbmRhclwiKSk7XG5cbnZhciBfcmVhY3RGaXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1maXRcIikpO1xuXG52YXIgX0RhdGVJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0ZUlucHV0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMyID0gcmVxdWlyZShcIi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGJhc2VDbGFzc05hbWUgPSAncmVhY3QtZGF0ZS1waWNrZXInO1xudmFyIG91dHNpZGVBY3Rpb25FdmVudHMgPSBbJ21vdXNlZG93bicsICdmb2N1c2luJywgJ3RvdWNoc3RhcnQnXTtcbnZhciBhbGxWaWV3cyA9IFsnY2VudHVyeScsICdkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xuXG52YXIgRGF0ZVBpY2tlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERhdGVQaWNrZXIsIF9QdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERhdGVQaWNrZXIpO1xuXG4gIGZ1bmN0aW9uIERhdGVQaWNrZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVQaWNrZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25PdXRzaWRlQWN0aW9uXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLndyYXBwZXIgJiYgIV90aGlzLndyYXBwZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgY2xvc2VDYWxlbmRhciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMucHJvcHMuY2xvc2VDYWxlbmRhcjtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuXG4gICAgICBpZiAoY2xvc2VDYWxlbmRhcikge1xuICAgICAgICBfdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Gb2N1c1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgb25Gb2N1cyA9IF90aGlzJHByb3BzLm9uRm9jdXM7XG5cbiAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgICAgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciBzdGlsbCBmaXJlcyBvbkZvY3VzIG9uIGRpc2FibGVkIGVsZW1lbnRzXG5cblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMub3BlbkNhbGVuZGFyKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib3BlbkNhbGVuZGFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbG9zZUNhbGVuZGFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKCFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRvZ2dsZUNhbGVuZGFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdG9wUHJvcGFnYXRpb25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xlYXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9uQ2hhbmdlKG51bGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVQaWNrZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQWN0aW9uTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2FsZW5kYXJDbG9zZSA9IF90aGlzJHByb3BzMi5vbkNhbGVuZGFyQ2xvc2UsXG4gICAgICAgICAgb25DYWxlbmRhck9wZW4gPSBfdGhpcyRwcm9wczIub25DYWxlbmRhck9wZW47XG5cbiAgICAgIGlmIChpc09wZW4gIT09IHByZXZTdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQWN0aW9uTGlzdGVuZXJzKCk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGlzT3BlbiA/IG9uQ2FsZW5kYXJPcGVuIDogb25DYWxlbmRhckNsb3NlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQWN0aW9uTGlzdGVuZXJzKGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlT3V0c2lkZUFjdGlvbkxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVPdXRzaWRlQWN0aW9uTGlzdGVuZXJzKHNob3VsZExpc3Rlbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcbiAgICAgIHZhciBzaG91bGRMaXN0ZW5XaXRoRmFsbGJhY2sgPSB0eXBlb2Ygc2hvdWxkTGlzdGVuICE9PSAndW5kZWZpbmVkJyA/IHNob3VsZExpc3RlbiA6IGlzT3BlbjtcbiAgICAgIHZhciBmbk5hbWUgPSBzaG91bGRMaXN0ZW5XaXRoRmFsbGJhY2sgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgICBvdXRzaWRlQWN0aW9uRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRbZm5OYW1lXShldmVudE5hbWUsIF90aGlzMi5vbk91dHNpZGVBY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlcklucHV0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dHMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wczMuYXV0b0ZvY3VzLFxuICAgICAgICAgIGNhbGVuZGFyQXJpYUxhYmVsID0gX3RoaXMkcHJvcHMzLmNhbGVuZGFyQXJpYUxhYmVsLFxuICAgICAgICAgIGNhbGVuZGFySWNvbiA9IF90aGlzJHByb3BzMy5jYWxlbmRhckljb24sXG4gICAgICAgICAgY2xlYXJBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczMuY2xlYXJBcmlhTGFiZWwsXG4gICAgICAgICAgY2xlYXJJY29uID0gX3RoaXMkcHJvcHMzLmNsZWFySWNvbixcbiAgICAgICAgICBkYXlBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczMuZGF5QXJpYUxhYmVsLFxuICAgICAgICAgIGRheVBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMzLmRheVBsYWNlaG9sZGVyLFxuICAgICAgICAgIGRpc2FibGVDYWxlbmRhciA9IF90aGlzJHByb3BzMy5kaXNhYmxlQ2FsZW5kYXIsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMzLmZvcm1hdCxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wczMubG9jYWxlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczMubWF4RGF0ZSxcbiAgICAgICAgICBtYXhEZXRhaWwgPSBfdGhpcyRwcm9wczMubWF4RGV0YWlsLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczMubWluRGF0ZSxcbiAgICAgICAgICBtb250aEFyaWFMYWJlbCA9IF90aGlzJHByb3BzMy5tb250aEFyaWFMYWJlbCxcbiAgICAgICAgICBtb250aFBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMzLm1vbnRoUGxhY2Vob2xkZXIsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMy5uYW1lLFxuICAgICAgICAgIG5hdGl2ZUlucHV0QXJpYUxhYmVsID0gX3RoaXMkcHJvcHMzLm5hdGl2ZUlucHV0QXJpYUxhYmVsLFxuICAgICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHMzLnJlcXVpcmVkLFxuICAgICAgICAgIHJldHVyblZhbHVlID0gX3RoaXMkcHJvcHMzLnJldHVyblZhbHVlLFxuICAgICAgICAgIHNob3dMZWFkaW5nWmVyb3MgPSBfdGhpcyRwcm9wczMuc2hvd0xlYWRpbmdaZXJvcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMy52YWx1ZSxcbiAgICAgICAgICB5ZWFyQXJpYUxhYmVsID0gX3RoaXMkcHJvcHMzLnllYXJBcmlhTGFiZWwsXG4gICAgICAgICAgeWVhclBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMzLnllYXJQbGFjZWhvbGRlcjtcbiAgICAgIHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcblxuICAgICAgdmFyIF9jb25jYXQgPSBbXS5jb25jYXQodmFsdWUpLFxuICAgICAgICAgIF9jb25jYXQyID0gX3NsaWNlZFRvQXJyYXkoX2NvbmNhdCwgMSksXG4gICAgICAgICAgdmFsdWVGcm9tID0gX2NvbmNhdDJbMF07XG5cbiAgICAgIHZhciBhcmlhTGFiZWxQcm9wcyA9IHtcbiAgICAgICAgZGF5QXJpYUxhYmVsOiBkYXlBcmlhTGFiZWwsXG4gICAgICAgIG1vbnRoQXJpYUxhYmVsOiBtb250aEFyaWFMYWJlbCxcbiAgICAgICAgbmF0aXZlSW5wdXRBcmlhTGFiZWw6IG5hdGl2ZUlucHV0QXJpYUxhYmVsLFxuICAgICAgICB5ZWFyQXJpYUxhYmVsOiB5ZWFyQXJpYUxhYmVsXG4gICAgICB9O1xuICAgICAgdmFyIHBsYWNlaG9sZGVyUHJvcHMgPSB7XG4gICAgICAgIGRheVBsYWNlaG9sZGVyOiBkYXlQbGFjZWhvbGRlcixcbiAgICAgICAgbW9udGhQbGFjZWhvbGRlcjogbW9udGhQbGFjZWhvbGRlcixcbiAgICAgICAgeWVhclBsYWNlaG9sZGVyOiB5ZWFyUGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX3dyYXBwZXJcIilcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0RhdGVJbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBhcmlhTGFiZWxQcm9wcywgcGxhY2Vob2xkZXJQcm9wcywge1xuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9faW5wdXRHcm91cFwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgaXNDYWxlbmRhck9wZW46IGlzT3BlbixcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgIG1heERldGFpbDogbWF4RGV0YWlsLFxuICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgICAgICByZXR1cm5WYWx1ZTogcmV0dXJuVmFsdWUsXG4gICAgICAgIHNob3dMZWFkaW5nWmVyb3M6IHNob3dMZWFkaW5nWmVyb3MsXG4gICAgICAgIHZhbHVlOiB2YWx1ZUZyb21cbiAgICAgIH0pKSwgY2xlYXJJY29uICE9PSBudWxsICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBcImFyaWEtbGFiZWxcIjogY2xlYXJBcmlhTGFiZWwsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX2NsZWFyLWJ1dHRvbiBcIikuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19idXR0b25cIiksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgb25DbGljazogdGhpcy5jbGVhcixcbiAgICAgICAgb25Gb2N1czogdGhpcy5zdG9wUHJvcGFnYXRpb24sXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgIH0sIGNsZWFySWNvbiksIGNhbGVuZGFySWNvbiAhPT0gbnVsbCAmJiAhZGlzYWJsZUNhbGVuZGFyICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBcImFyaWEtbGFiZWxcIjogY2FsZW5kYXJBcmlhTGFiZWwsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX2NhbGVuZGFyLWJ1dHRvbiBcIikuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19idXR0b25cIiksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLnJlc2V0VmFsdWUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMudG9nZ2xlQ2FsZW5kYXIsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuc3RvcFByb3BhZ2F0aW9uLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICB9LCBjYWxlbmRhckljb24pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2FsZW5kYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FsZW5kYXIoKSB7XG4gICAgICB2YXIgZGlzYWJsZUNhbGVuZGFyID0gdGhpcy5wcm9wcy5kaXNhYmxlQ2FsZW5kYXI7XG4gICAgICB2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cbiAgICAgIGlmIChpc09wZW4gPT09IG51bGwgfHwgZGlzYWJsZUNhbGVuZGFyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjYWxlbmRhckNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jYWxlbmRhckNsYXNzTmFtZSxcbiAgICAgICAgICBkYXRlUGlja2VyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzNC5vbkNoYW5nZSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzNC52YWx1ZSxcbiAgICAgICAgICBjYWxlbmRhclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzNCwgW1wiY2FsZW5kYXJDbGFzc05hbWVcIiwgXCJjbGFzc05hbWVcIiwgXCJvbkNoYW5nZVwiLCBcInZhbHVlXCJdKTtcblxuICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19jYWxlbmRhclwiKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9yZWFjdEZpdFtcImRlZmF1bHRcIl0sIG51bGwsIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfbWVyZ2VDbGFzc05hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS1cIikuY29uY2F0KGlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnKSlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3JlYWN0Q2FsZW5kYXJbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogY2FsZW5kYXJDbGFzc05hbWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZTogdmFsdWUgfHwgbnVsbFxuICAgICAgfSwgY2FsZW5kYXJQcm9wcykpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM1LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzNS5kaXNhYmxlZDtcbiAgICAgIHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX21lcmdlQ2xhc3NOYW1lc1tcImRlZmF1bHRcIl0pKGJhc2VDbGFzc05hbWUsIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLS1cIikuY29uY2F0KGlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItLVwiKS5jb25jYXQoZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJ2VuYWJsZWQnKSwgY2xhc3NOYW1lKVxuICAgICAgfSwgdGhpcy5ldmVudFByb3BzLCB7XG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgIGlmICghX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMy53cmFwcGVyID0gX3JlZjtcbiAgICAgICAgfVxuICAgICAgfSksIHRoaXMucmVuZGVySW5wdXRzKCksIHRoaXMucmVuZGVyQ2FsZW5kYXIoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV2ZW50UHJvcHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAoMCwgX21ha2VFdmVudFByb3BzW1wiZGVmYXVsdFwiXSkodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKG5leHRQcm9wcy5pc09wZW4gIT09IHByZXZTdGF0ZS5pc09wZW5Qcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzT3BlbjogbmV4dFByb3BzLmlzT3BlbixcbiAgICAgICAgICBpc09wZW5Qcm9wczogbmV4dFByb3BzLmlzT3BlblxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVBpY2tlcjtcbn0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERhdGVQaWNrZXI7XG52YXIgaWNvblByb3BzID0ge1xuICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgd2lkdGg6IDE5LFxuICBoZWlnaHQ6IDE5LFxuICB2aWV3Qm94OiAnMCAwIDE5IDE5JyxcbiAgc3Ryb2tlOiAnYmxhY2snLFxuICBzdHJva2VXaWR0aDogMlxufTtcblxudmFyIENhbGVuZGFySWNvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe30sIGljb25Qcm9wcywge1xuICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19jYWxlbmRhci1idXR0b25fX2ljb24gXCIpLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fYnV0dG9uX19pY29uXCIpXG59KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBmaWxsOiBcIm5vbmVcIixcbiAgaGVpZ2h0OiBcIjE1XCIsXG4gIHdpZHRoOiBcIjE1XCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjJcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgeDE6IFwiNlwiLFxuICB4MjogXCI2XCIsXG4gIHkxOiBcIjBcIixcbiAgeTI6IFwiNFwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICB4MTogXCIxM1wiLFxuICB4MjogXCIxM1wiLFxuICB5MTogXCIwXCIsXG4gIHkyOiBcIjRcIlxufSkpO1xuXG52YXIgQ2xlYXJJY29uID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7fSwgaWNvblByb3BzLCB7XG4gIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX2NsZWFyLWJ1dHRvbl9faWNvbiBcIikuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19idXR0b25fX2ljb25cIilcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gIHgxOiBcIjRcIixcbiAgeDI6IFwiMTVcIixcbiAgeTE6IFwiNFwiLFxuICB5MjogXCIxNVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICB4MTogXCIxNVwiLFxuICB4MjogXCI0XCIsXG4gIHkxOiBcIjRcIixcbiAgeTI6IFwiMTVcIlxufSkpO1xuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FsZW5kYXJJY29uOiBDYWxlbmRhckljb24sXG4gIGNsZWFySWNvbjogQ2xlYXJJY29uLFxuICBjbG9zZUNhbGVuZGFyOiB0cnVlLFxuICBpc09wZW46IG51bGwsXG4gIHJldHVyblZhbHVlOiAnc3RhcnQnXG59O1xuXG52YXIgaXNWYWx1ZSA9IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5pbnN0YW5jZU9mKERhdGUpXSk7XG5cbkRhdGVQaWNrZXIucHJvcFR5cGVzID0ge1xuICBhdXRvRm9jdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNhbGVuZGFyQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNhbGVuZGFyQ2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcpXSksXG4gIGNhbGVuZGFySWNvbjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcpXSksXG4gIGNsZWFyQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsZWFySWNvbjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xvc2VDYWxlbmRhcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGF5QXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRheVBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVDYWxlbmRhcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZvcm1hdDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBpc09wZW46IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxvY2FsZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtYXhEYXRlOiBfcHJvcFR5cGVzMi5pc01heERhdGUsXG4gIG1heERldGFpbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2YoYWxsVmlld3MpLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG1vbnRoQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG1vbnRoUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBuYXRpdmVJbnB1dEFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvbkNhbGVuZGFyQ2xvc2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQ2FsZW5kYXJPcGVuOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Gb2N1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJldHVyblZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXJ0JywgJ2VuZCcsICdyYW5nZSddKSxcbiAgc2hvd0xlYWRpbmdaZXJvczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbaXNWYWx1ZSwgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihpc1ZhbHVlKV0pLFxuICB5ZWFyQXJpYUxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHllYXJQbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXZpZGVyO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gRGl2aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWRhdGUtcGlja2VyX19pbnB1dEdyb3VwX19kaXZpZGVyXCJcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5EaXZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm5vZGVcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxucmVxdWlyZShcInJlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzXCIpO1xuXG52YXIgX0RhdGVQaWNrZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGVQaWNrZXJcIikpO1xuXG5yZXF1aXJlKFwiLi9EYXRlUGlja2VyLmNzc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIEZpbGUgaXMgY3JlYXRlZCBkdXJpbmcgYnVpbGQgcGhhc2UgYW5kIHBsYWNlZCBpbiBkaXN0IGRpcmVjdG9yeVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG52YXIgX2RlZmF1bHQgPSBfRGF0ZVBpY2tlcltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRGb3JtYXR0ZXIgPSBnZXRGb3JtYXR0ZXI7XG5leHBvcnRzLmZvcm1hdFNob3J0TW9udGggPSBleHBvcnRzLmZvcm1hdE1vbnRoID0gdm9pZCAwO1xuXG52YXIgX2dldFVzZXJMb2NhbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJnZXQtdXNlci1sb2NhbGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsb2NhbGUsIGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhsb2NhbGUgfHwgKDAsIF9nZXRVc2VyTG9jYWxlW1wiZGVmYXVsdFwiXSkoKSwgb3B0aW9ucyk7XG4gIH07XG59XG4vKipcbiAqIENoYW5nZXMgdGhlIGhvdXIgaW4gYSBEYXRlIHRvIGVuc3VyZSByaWdodCBkYXRlIGZvcm1hdHRpbmcgZXZlbiBpZiBEU1QgaXMgbWVzc2VkIHVwLlxuICogV29ya2Fyb3VuZCBmb3IgYnVnIGluIFdlYktpdCBhbmQgRmlyZWZveCB3aXRoIGhpc3RvcmljYWwgZGF0ZXMuXG4gKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6XG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NTA0NjVcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzODU2NDNcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvU2FmZUhvdXIoZGF0ZSkge1xuICB2YXIgc2FmZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHNhZmVEYXRlLnNldEhvdXJzKDEyKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNhZmVGb3JtYXR0ZXIob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGxvY2FsZSwgZGF0ZSkge1xuICAgIHJldHVybiBnZXRGb3JtYXR0ZXIob3B0aW9ucykobG9jYWxlLCB0b1NhZmVIb3VyKGRhdGUpKTtcbiAgfTtcbn1cblxudmFyIGZvcm1hdE1vbnRoT3B0aW9ucyA9IHtcbiAgbW9udGg6ICdsb25nJ1xufTtcbnZhciBmb3JtYXRTaG9ydE1vbnRoT3B0aW9ucyA9IHtcbiAgbW9udGg6ICdzaG9ydCdcbn07XG52YXIgZm9ybWF0TW9udGggPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdE1vbnRoT3B0aW9ucyk7XG5leHBvcnRzLmZvcm1hdE1vbnRoID0gZm9ybWF0TW9udGg7XG52YXIgZm9ybWF0U2hvcnRNb250aCA9IGdldFNhZmVGb3JtYXR0ZXIoZm9ybWF0U2hvcnRNb250aE9wdGlvbnMpO1xuZXhwb3J0cy5mb3JtYXRTaG9ydE1vbnRoID0gZm9ybWF0U2hvcnRNb250aDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0QmVnaW4gPSBnZXRCZWdpbjtcbmV4cG9ydHMuZ2V0RW5kID0gZ2V0RW5kO1xuXG52YXIgX2RhdGVVdGlscyA9IHJlcXVpcmUoXCJAd29qdGVrbWFqL2RhdGUtdXRpbHNcIik7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVnaW5uaW5nIG9mIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlVHlwZSBSYW5nZSB0eXBlIChlLmcuICdkYXknKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cbmZ1bmN0aW9uIGdldEJlZ2luKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldENlbnR1cnlTdGFydCkoZGF0ZSk7XG5cbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldERlY2FkZVN0YXJ0KShkYXRlKTtcblxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldFllYXJTdGFydCkoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhTdGFydCkoZGF0ZSk7XG5cbiAgICBjYXNlICdkYXknOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldERheVN0YXJ0KShkYXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVuZCBvZiBhIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYW5nZVR5cGUgUmFuZ2UgdHlwZSAoZS5nLiAnZGF5JylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0RW5kKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldENlbnR1cnlFbmQpKGRhdGUpO1xuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXREZWNhZGVFbmQpKGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0WWVhckVuZCkoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhFbmQpKGRhdGUpO1xuXG4gICAgY2FzZSAnZGF5JzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXREYXlFbmQpKGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNNYXhEYXRlID0gZXhwb3J0cy5pc01pbkRhdGUgPSBleHBvcnRzLmlzVmFsdWVUeXBlID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBhbGxWaWV3cyA9IFsnY2VudHVyeScsICdkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xudmFyIGFsbFZhbHVlVHlwZXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFsbFZpZXdzLnNsaWNlKDEpKSwgWydkYXknXSk7XG5cbnZhciBpc1ZhbHVlVHlwZSA9IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKGFsbFZhbHVlVHlwZXMpO1xuXG5leHBvcnRzLmlzVmFsdWVUeXBlID0gaXNWYWx1ZVR5cGU7XG5cbnZhciBpc01pbkRhdGUgPSBmdW5jdGlvbiBpc01pbkRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBtaW5EYXRlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICghbWluRGF0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCEobWluRGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgXCIpLmNvbmNhdChfdHlwZW9mKG1pbkRhdGUpLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBleHBlY3RlZCBpbnN0YW5jZSBvZiBgRGF0ZWAuXCIpKTtcbiAgfVxuXG4gIHZhciBtYXhEYXRlID0gcHJvcHMubWF4RGF0ZTtcblxuICBpZiAobWF4RGF0ZSAmJiBtaW5EYXRlID4gbWF4RGF0ZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9mIHR5cGUgYFwiKS5jb25jYXQoX3R5cGVvZihtaW5EYXRlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgbWluRGF0ZSBjYW5ub3QgYmUgbGFyZ2VyIHRoYW4gbWF4RGF0ZS5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnRzLmlzTWluRGF0ZSA9IGlzTWluRGF0ZTtcblxudmFyIGlzTWF4RGF0ZSA9IGZ1bmN0aW9uIGlzTWF4RGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIG1heERhdGUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKCFtYXhEYXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIShtYXhEYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWF4RGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIGV4cGVjdGVkIGluc3RhbmNlIG9mIGBEYXRlYC5cIikpO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBwcm9wcy5taW5EYXRlO1xuXG4gIGlmIChtaW5EYXRlICYmIG1heERhdGUgPCBtaW5EYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgXCIpLmNvbmNhdChfdHlwZW9mKG1heERhdGUpLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBtYXhEYXRlIGNhbm5vdCBiZSBzbWFsbGVyIHRoYW4gbWluRGF0ZS5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnRzLmlzTWF4RGF0ZSA9IGlzTWF4RGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmV0d2VlbiA9IGJldHdlZW47XG5leHBvcnRzLnNhZmVNaW4gPSBzYWZlTWluO1xuZXhwb3J0cy5zYWZlTWF4ID0gc2FmZU1heDtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSBubyBzbWFsbGVyIHRoYW4gbWluIGFuZCBubyBsYXJnZXIgdGhhbiBtYXguXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byByZXR1cm4uXG4gKiBAcGFyYW0geyp9IG1pbiBNaW5pbXVtIHJldHVybiB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gbWF4IE1heGltdW0gcmV0dXJuIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiZXR3ZWVuKHZhbHVlLCBtaW4sIG1heCkge1xuICBpZiAobWluICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmIChtYXggJiYgbWF4IDwgdmFsdWUpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkTnVtYmVyKG51bSkge1xuICByZXR1cm4gbnVtICE9PSBudWxsICYmIG51bSAhPT0gZmFsc2UgJiYgIU51bWJlci5pc05hTihOdW1iZXIobnVtKSk7XG59XG5cbmZ1bmN0aW9uIHNhZmVNaW4oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MuZmlsdGVyKGlzVmFsaWROdW1iZXIpKSk7XG59XG5cbmZ1bmN0aW9uIHNhZmVNYXgoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncy5maWx0ZXIoaXNWYWxpZE51bWJlcikpKTtcbn0iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZXRlY3RFbGVtZW50T3ZlcmZsb3cgZnJvbSAnZGV0ZWN0LWVsZW1lbnQtb3ZlcmZsb3cnO1xuaW1wb3J0IHsgd2Fybk9uRGV2IH0gZnJvbSAnLi9zaGFyZWQvdXRpbHMnO1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGlzRGlzcGxheUNvbnRlbnRzU3VwcG9ydGVkID0gaXNCcm93c2VyICYmICdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzKCdkaXNwbGF5JywgJ2NvbnRlbnRzJyk7XG52YXIgaXNNdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkID0gaXNCcm93c2VyICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3c7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoYSkge1xuICByZXR1cm4gYVswXS50b1VwcGVyQ2FzZSgpICsgYS5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZmluZFNjcm9sbENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgX3dpbmRvdyRnZXRDb21wdXRlZFN0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSxcbiAgICAgICAgb3ZlcmZsb3cgPSBfd2luZG93JGdldENvbXB1dGVkU3Qub3ZlcmZsb3c7XG5cbiAgICBpZiAob3ZlcmZsb3cuc3BsaXQoJyAnKS5ldmVyeShmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8gPT09ICdhdXRvJyB8fCBvID09PSAnc2Nyb2xsJztcbiAgICB9KSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFsaWduQXhpcyhfcmVmKSB7XG4gIHZhciBheGlzID0gX3JlZi5heGlzLFxuICAgICAgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgaW52ZXJ0QXhpcyA9IF9yZWYuaW52ZXJ0QXhpcyxcbiAgICAgIHNlY29uZGFyeSA9IF9yZWYuc2Vjb25kYXJ5LFxuICAgICAgc2Nyb2xsQ29udGFpbmVyID0gX3JlZi5zY3JvbGxDb250YWluZXIsXG4gICAgICBzcGFjaW5nID0gX3JlZi5zcGFjaW5nO1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICB2YXIgc2Nyb2xsQ29udGFpbmVyQ29sbGlzaW9ucyA9IGRldGVjdEVsZW1lbnRPdmVyZmxvdyhwYXJlbnQsIHNjcm9sbENvbnRhaW5lcik7XG4gIHZhciBkb2N1bWVudENvbGxpc2lvbnMgPSBkZXRlY3RFbGVtZW50T3ZlcmZsb3cocGFyZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB2YXIgaXNYID0gYXhpcyA9PT0gJ3gnO1xuICB2YXIgc3RhcnRQcm9wZXJ0eSA9IGlzWCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgZW5kUHJvcGVydHkgPSBpc1ggPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIHZhciBzaXplUHJvcGVydHkgPSBpc1ggPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gIHZhciBvdmVyZmxvd1N0YXJ0UHJvcGVydHkgPSBcIm92ZXJmbG93XCIuY29uY2F0KGNhcGl0YWxpemUoc3RhcnRQcm9wZXJ0eSkpO1xuICB2YXIgb3ZlcmZsb3dFbmRQcm9wZXJ0eSA9IFwib3ZlcmZsb3dcIi5jb25jYXQoY2FwaXRhbGl6ZShlbmRQcm9wZXJ0eSkpO1xuICB2YXIgc2Nyb2xsUHJvcGVydHkgPSBcInNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHN0YXJ0UHJvcGVydHkpKTtcbiAgdmFyIHVwcGVyY2FzZWRTaXplUHJvcGVydHkgPSBjYXBpdGFsaXplKHNpemVQcm9wZXJ0eSk7XG4gIHZhciBvZmZzZXRTaXplUHJvcGVydHkgPSBcIm9mZnNldFwiLmNvbmNhdCh1cHBlcmNhc2VkU2l6ZVByb3BlcnR5KTtcbiAgdmFyIGNsaWVudFNpemVQcm9wZXJ0eSA9IFwiY2xpZW50XCIuY29uY2F0KHVwcGVyY2FzZWRTaXplUHJvcGVydHkpO1xuICB2YXIgbWluU2l6ZVByb3BlcnR5ID0gXCJtaW4tXCIuY29uY2F0KHNpemVQcm9wZXJ0eSk7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbENvbnRhaW5lcltvZmZzZXRTaXplUHJvcGVydHldIC0gc2Nyb2xsQ29udGFpbmVyW2NsaWVudFNpemVQcm9wZXJ0eV07XG4gIHZhciBzdGFydFNwYWNpbmcgPSBfdHlwZW9mKHNwYWNpbmcpID09PSAnb2JqZWN0JyA/IHNwYWNpbmdbc3RhcnRQcm9wZXJ0eV0gOiBzcGFjaW5nO1xuICB2YXIgYXZhaWxhYmxlU3RhcnRTcGFjZSA9IC1NYXRoLm1heChzY3JvbGxDb250YWluZXJDb2xsaXNpb25zW292ZXJmbG93U3RhcnRQcm9wZXJ0eV0sIGRvY3VtZW50Q29sbGlzaW9uc1tvdmVyZmxvd1N0YXJ0UHJvcGVydHldICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BlcnR5XSkgLSBzdGFydFNwYWNpbmc7XG4gIHZhciBlbmRTcGFjaW5nID0gX3R5cGVvZihzcGFjaW5nKSA9PT0gJ29iamVjdCcgPyBzcGFjaW5nW2VuZFByb3BlcnR5XSA6IHNwYWNpbmc7XG4gIHZhciBhdmFpbGFibGVFbmRTcGFjZSA9IC1NYXRoLm1heChzY3JvbGxDb250YWluZXJDb2xsaXNpb25zW292ZXJmbG93RW5kUHJvcGVydHldLCBkb2N1bWVudENvbGxpc2lvbnNbb3ZlcmZsb3dFbmRQcm9wZXJ0eV0gLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc2Nyb2xsUHJvcGVydHldKSAtIGVuZFNwYWNpbmcgLSBzY3JvbGxiYXJXaWR0aDtcblxuICBpZiAoc2Vjb25kYXJ5KSB7XG4gICAgYXZhaWxhYmxlU3RhcnRTcGFjZSArPSBwYXJlbnRbY2xpZW50U2l6ZVByb3BlcnR5XTtcbiAgICBhdmFpbGFibGVFbmRTcGFjZSArPSBwYXJlbnRbY2xpZW50U2l6ZVByb3BlcnR5XTtcbiAgfVxuXG4gIHZhciBvZmZzZXRTaXplID0gZWxlbWVudFtvZmZzZXRTaXplUHJvcGVydHldO1xuXG4gIGZ1bmN0aW9uIGRpc3BsYXlTdGFydCgpIHtcbiAgICBlbGVtZW50LnN0eWxlW3N0YXJ0UHJvcGVydHldID0gJ3Vuc2V0JztcbiAgICBlbGVtZW50LnN0eWxlW2VuZFByb3BlcnR5XSA9IHNlY29uZGFyeSA/ICcwJyA6ICcxMDAlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlFbmQoKSB7XG4gICAgZWxlbWVudC5zdHlsZVtzdGFydFByb3BlcnR5XSA9IHNlY29uZGFyeSA/ICcwJyA6ICcxMDAlJztcbiAgICBlbGVtZW50LnN0eWxlW2VuZFByb3BlcnR5XSA9ICd1bnNldCc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5SWZGaXRzKGF2YWlsYWJsZVNwYWNlLCBkaXNwbGF5KSB7XG4gICAgdmFyIGZpdHMgPSBvZmZzZXRTaXplIDw9IGF2YWlsYWJsZVNwYWNlO1xuXG4gICAgaWYgKGZpdHMpIHtcbiAgICAgIGRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZml0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlTdGFydElmRml0cygpIHtcbiAgICByZXR1cm4gZGlzcGxheUlmRml0cyhhdmFpbGFibGVTdGFydFNwYWNlLCBkaXNwbGF5U3RhcnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUVuZElmRml0cygpIHtcbiAgICByZXR1cm4gZGlzcGxheUlmRml0cyhhdmFpbGFibGVFbmRTcGFjZSwgZGlzcGxheUVuZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2hlcmV2ZXJTaHJpbmtlZEZpdHMoKSB7XG4gICAgdmFyIG1vcmVTcGFjZVN0YXJ0ID0gYXZhaWxhYmxlU3RhcnRTcGFjZSA+IGF2YWlsYWJsZUVuZFNwYWNlO1xuICAgIHZhciBtaW5TaXplID0gc3R5bGVbbWluU2l6ZVByb3BlcnR5XSAmJiBwYXJzZUludChzdHlsZVttaW5TaXplUHJvcGVydHldLCAxMCk7XG5cbiAgICBmdW5jdGlvbiBzaHJpbmtUb1NpemUoc2l6ZSkge1xuICAgICAgaWYgKG1pblNpemUgJiYgc2l6ZSA8IG1pblNpemUpIHtcbiAgICAgICAgd2Fybk9uRGV2KFwiPEZpdCAvPidzIGNoaWxkIHdpbGwgbm90IGZpdCBhbnl3aGVyZSB3aXRoIGl0cyBjdXJyZW50IFwiLmNvbmNhdChtaW5TaXplUHJvcGVydHksIFwiIG9mIFwiKS5jb25jYXQobWluU2l6ZSwgXCJweC5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2l6ZSA9IE1hdGgubWF4KHNpemUsIG1pblNpemUgfHwgMCk7XG4gICAgICB3YXJuT25EZXYoXCI8Rml0IC8+J3MgY2hpbGQgbmVlZGVkIHRvIGhhdmUgaXRzIFwiLmNvbmNhdChzaXplUHJvcGVydHksIFwiIGRlY3JlYXNlZCB0byBcIikuY29uY2F0KG5ld1NpemUsIFwicHguXCIpKTtcbiAgICAgIGVsZW1lbnQuc3R5bGVbc2l6ZVByb3BlcnR5XSA9IFwiXCIuY29uY2F0KG5ld1NpemUsIFwicHhcIik7XG4gICAgfVxuXG4gICAgaWYgKG1vcmVTcGFjZVN0YXJ0KSB7XG4gICAgICBzaHJpbmtUb1NpemUoYXZhaWxhYmxlU3RhcnRTcGFjZSk7XG4gICAgICBkaXNwbGF5U3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hyaW5rVG9TaXplKGF2YWlsYWJsZUVuZFNwYWNlKTtcbiAgICAgIGRpc3BsYXlFbmQoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZml0cztcblxuICBpZiAoaW52ZXJ0QXhpcykge1xuICAgIGZpdHMgPSBkaXNwbGF5U3RhcnRJZkZpdHMoKSB8fCBkaXNwbGF5RW5kSWZGaXRzKCk7XG4gIH0gZWxzZSB7XG4gICAgZml0cyA9IGRpc3BsYXlFbmRJZkZpdHMoKSB8fCBkaXNwbGF5U3RhcnRJZkZpdHMoKTtcbiAgfVxuXG4gIGlmICghZml0cykge1xuICAgIGRpc3BsYXlXaGVyZXZlclNocmlua2VkRml0cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsaWduTWFpbkF4aXMoYXJncykge1xuICBhbGlnbkF4aXMoYXJncyk7XG59XG5cbmZ1bmN0aW9uIGFsaWduU2Vjb25kYXJ5QXhpcyhhcmdzKSB7XG4gIGFsaWduQXhpcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFyZ3MpLCB7fSwge1xuICAgIGF4aXM6IGFyZ3MuYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnLFxuICAgIHNlY29uZGFyeTogdHJ1ZVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGFsaWduQm90aEF4aXMoYXJncykge1xuICB2YXIgaW52ZXJ0QXhpcyA9IGFyZ3MuaW52ZXJ0QXhpcyxcbiAgICAgIGludmVydFNlY29uZGFyeUF4aXMgPSBhcmdzLmludmVydFNlY29uZGFyeUF4aXMsXG4gICAgICBjb21tb25BcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGFyZ3MsIFtcImludmVydEF4aXNcIiwgXCJpbnZlcnRTZWNvbmRhcnlBeGlzXCJdKTtcblxuICBhbGlnbk1haW5BeGlzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY29tbW9uQXJncyksIHt9LCB7XG4gICAgaW52ZXJ0QXhpczogaW52ZXJ0QXhpc1xuICB9KSk7XG4gIGFsaWduU2Vjb25kYXJ5QXhpcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbW1vbkFyZ3MpLCB7fSwge1xuICAgIGludmVydEF4aXM6IGludmVydFNlY29uZGFyeUF4aXNcbiAgfSkpO1xufVxuXG52YXIgRml0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaXQsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRml0KTtcblxuICBmdW5jdGlvbiBGaXQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpdCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTXV0YXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZml0KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibXV0YXRpb25PYnNlcnZlclwiLCBpc011dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgJiYgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoX3RoaXMub25NdXRhdGlvbikpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImZpdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnNjcm9sbENvbnRhaW5lcixcbiAgICAgICAgICBjb250YWluZXIgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuY29udGFpbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuZWxlbWVudDtcblxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0OyAvLyBObyBuZWVkIHRvIHJlY2FsY3VsYXRlIC0gYWxyZWFkeSBkaWQgdGhhdCBmb3IgY3VycmVudCBkaW1lbnNpb25zXG5cbiAgICAgIGlmIChfdGhpcy5lbGVtZW50V2lkdGggPT09IGVsZW1lbnRXaWR0aCAmJiBfdGhpcy5lbGVtZW50SGVpZ2h0ID09PSBlbGVtZW50SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gU2F2ZSB0aGUgZGltZW5zaW9ucyBzbyB0aGF0IHdlIGtub3cgd2UgZG9uJ3QgbmVlZCB0byByZXBlYXQgdGhlIGZ1bmN0aW9uIGlmIHVuY2hhbmdlZFxuXG5cbiAgICAgIF90aGlzLmVsZW1lbnRXaWR0aCA9IGVsZW1lbnRXaWR0aDtcbiAgICAgIF90aGlzLmVsZW1lbnRIZWlnaHQgPSBlbGVtZW50SGVpZ2h0O1xuICAgICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50OyAvLyBDb250YWluZXIgd2FzIHVubW91bnRlZFxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgPEZpdCAvPidzIGNoaWxkIGhhcyBhIGFic29sdXRlIHBvc2l0aW9uLiBPdGhlcndpc2UsXG4gICAgICAgKiB3ZSB3b3VsZG4ndCBiZSBhYmxlIHRvIHBsYWNlIHRoZSBjaGlsZCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgdmFyIHBvc2l0aW9uID0gc3R5bGUucG9zaXRpb247XG5cbiAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ2Fic29sdXRlJykge1xuICAgICAgICB3YXJuT25EZXYoJzxGaXQgLz5cXCdzIGNoaWxkIGRvZXMgbm90IGhhdmUgYWJzb2x1dGUgcG9zaXRpb24uIFlvdSBzaG91bGQgYXBwbHkgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgdG8gaXQuJyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIGVuc3VyZSB0aGF0IDxGaXQgLz4ncyBwYXJlbnQgaGFzIGEgcmVsYXRpdmUgcG9zaXRpb24uIE90aGVyd2lzZSxcbiAgICAgICAqIHdlIHdvdWxkbid0IGJlIGFibGUgdG8gcGxhY2UgdGhlIGNoaWxkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgdmFyIHBhcmVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICAgIHZhciBwYXJlbnRQb3NpdGlvbiA9IHBhcmVudFN0eWxlLnBvc2l0aW9uO1xuXG4gICAgICBpZiAocGFyZW50UG9zaXRpb24gIT09ICdyZWxhdGl2ZScgJiYgcGFyZW50UG9zaXRpb24gIT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgd2Fybk9uRGV2KCc8Rml0IC8+XFwncyBwYXJlbnQgZG9lcyBub3QgaGF2ZSByZWxhdGl2ZSBwb3NpdGlvbi4gWW91IHNob3VsZCBhcHBseSBgcG9zaXRpb246IHJlbGF0aXZlYCB0byBpdC4nKTtcbiAgICAgICAgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaW52ZXJ0QXhpcyA9IF90aGlzJHByb3BzLmludmVydEF4aXMsXG4gICAgICAgICAgaW52ZXJ0U2Vjb25kYXJ5QXhpcyA9IF90aGlzJHByb3BzLmludmVydFNlY29uZGFyeUF4aXMsXG4gICAgICAgICAgbWFpbkF4aXMgPSBfdGhpcyRwcm9wcy5tYWluQXhpcyxcbiAgICAgICAgICBzcGFjaW5nID0gX3RoaXMkcHJvcHMuc3BhY2luZztcbiAgICAgIGFsaWduQm90aEF4aXMoe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgaW52ZXJ0QXhpczogaW52ZXJ0QXhpcyxcbiAgICAgICAgaW52ZXJ0U2Vjb25kYXJ5QXhpczogaW52ZXJ0U2Vjb25kYXJ5QXhpcyxcbiAgICAgICAgYXhpczogbWFpbkF4aXMsXG4gICAgICAgIHNjcm9sbENvbnRhaW5lcjogc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgICBzcGFjaW5nOiBzcGFjaW5nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKCFpc0Rpc3BsYXlDb250ZW50c1N1cHBvcnRlZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZVxuICAgICAgICB2YXIgZWxlbWVudCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gZmluZFNjcm9sbENvbnRhaW5lcihlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maXQoKTtcblxuICAgICAgaWYgKGlzTXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcycsICdzdHlsZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgaWYgKGlzRGlzcGxheUNvbnRlbnRzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgX3RoaXMyLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICAgICAgX3RoaXMyLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgX3RoaXMyLnNjcm9sbENvbnRhaW5lciA9IGZpbmRTY3JvbGxDb250YWluZXIoZWxlbWVudCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2NvbnRlbnRzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpdDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgRml0IGFzIGRlZmF1bHQgfTtcbkZpdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaW52ZXJ0QXhpczogUHJvcFR5cGVzLmJvb2wsXG4gIGludmVydFNlY29uZGFyeUF4aXM6IFByb3BUeXBlcy5ib29sLFxuICBtYWluQXhpczogUHJvcFR5cGVzLm9uZU9mKFsneCcsICd5J10pLFxuICBzcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0pXSlcbn07XG5GaXQuZGVmYXVsdFByb3BzID0ge1xuICBtYWluQXhpczogJ3knLFxuICBzcGFjaW5nOiA4XG59OyIsIi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgd2UncmUgcnVubmluZyBvbiBhIHByb2R1Y3Rpb24gYnVpbGQgb3Igbm90LlxuICovXG5leHBvcnQgdmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBjb25zb2xlT25EZXYgPSBmdW5jdGlvbiBjb25zb2xlT25EZXYobWV0aG9kKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgdmFyIF9jb25zb2xlO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKVttZXRob2RdLmFwcGx5KF9jb25zb2xlLCBtZXNzYWdlKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciB3YXJuT25EZXYgPSBmdW5jdGlvbiB3YXJuT25EZXYoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG1lc3NhZ2VbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBjb25zb2xlT25EZXYuYXBwbHkodm9pZCAwLCBbJ3dhcm4nXS5jb25jYXQobWVzc2FnZSkpO1xufTsiLCJ2YXIgYWxsb3dlZFZhcmlhbnRzID0gWydub3JtYWwnLCAnc21hbGwtY2FwcyddO1xuLyoqXG4gKiBHZXRzIGZvbnQgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0byBnZXQgZm9udCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udFNob3J0aGFuZChlbGVtZW50KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gIGlmIChzdHlsZS5mb250KSB7XG4gICAgcmV0dXJuIHN0eWxlLmZvbnQ7XG4gIH1cblxuICB2YXIgaXNGb250RGVmaW5lZCA9IHN0eWxlWydmb250LWZhbWlseSddICE9PSAnJztcblxuICBpZiAoIWlzRm9udERlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgZm9udFZhcmlhbnQgPSBhbGxvd2VkVmFyaWFudHMuaW5jbHVkZXMoc3R5bGVbJ2ZvbnQtdmFyaWFudCddKSA/IHN0eWxlWydmb250LXZhcmlhbnQnXSA6ICdub3JtYWwnO1xuICByZXR1cm4gXCJcIi5jb25jYXQoc3R5bGVbJ2ZvbnQtc3R5bGUnXSwgXCIgXCIpLmNvbmNhdChmb250VmFyaWFudCwgXCIgXCIpLmNvbmNhdChzdHlsZVsnZm9udC13ZWlnaHQnXSwgXCIgXCIpLmNvbmNhdChzdHlsZVsnZm9udC1zaXplJ10sIFwiIC8gXCIpLmNvbmNhdChzdHlsZVsnbGluZS1oZWlnaHQnXSwgXCIgXCIpLmNvbmNhdChzdHlsZVsnZm9udC1mYW1pbHknXSk7XG59XG4vKipcbiAqIE1lYXN1cmVzIHRleHQgd2lkdGggZ2l2ZW4gdGV4dCBhbmQgZm9udCBDU1Mgc2hvcnRoYW5kLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRleHQgdG8gbWVhc3VyZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvbnQgRm9udCB0byB1c2Ugd2hlbiBtZWFzdXJpbmcgdGhlIHRleHRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVRleHQodGV4dCwgZm9udCkge1xuICB2YXIgY2FudmFzID0gbWVhc3VyZVRleHQuY2FudmFzIHx8IChtZWFzdXJlVGV4dC5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSk7XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vIENvbnRleHQgdHlwZSBub3Qgc3VwcG9ydGVkXG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb250ZXh0LmZvbnQgPSBmb250O1xuXG4gIHZhciBfY29udGV4dCRtZWFzdXJlVGV4dCA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCksXG4gICAgICB3aWR0aCA9IF9jb250ZXh0JG1lYXN1cmVUZXh0LndpZHRoO1xuXG4gIHJldHVybiBNYXRoLmNlaWwod2lkdGgpO1xufVxuLyoqXG4gKiBVcGRhdGVzIGlucHV0IGVsZW1lbnQgd2lkdGggdG8gZml0IGl0cyBjb250ZW50IGdpdmVuIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZWxlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZm9udCA9IGdldEZvbnRTaG9ydGhhbmQoZWxlbWVudCk7XG4gIHZhciB0ZXh0ID0gZWxlbWVudC52YWx1ZSB8fCBlbGVtZW50LnBsYWNlaG9sZGVyO1xuICB2YXIgd2lkdGggPSBtZWFzdXJlVGV4dCh0ZXh0LCBmb250KTtcblxuICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKTtcbiAgcmV0dXJuIHdpZHRoO1xufVxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlSW5wdXRXaWR0aDsiXSwic291cmNlUm9vdCI6IiJ9