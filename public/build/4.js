(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvanRla21hai9kYXRlLXV0aWxzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZXRlY3QtZWxlbWVudC1vdmVyZmxvdy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LXVzZXItbG9jYWxlL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gub25jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFrZS1ldmVudC1wcm9wcy9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZXJnZS1jbGFzcy1uYW1lcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9DYWxlbmRhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DYWxlbmRhci9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DZW50dXJ5Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vQ2VudHVyeVZpZXcvRGVjYWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9DZW50dXJ5Vmlldy9EZWNhZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9EZWNhZGVWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9EZWNhZGVWaWV3L1llYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0RlY2FkZVZpZXcvWWVhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL0ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vTW9udGhWaWV3L0RheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vTW9udGhWaWV3L0RheXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy9XZWVrTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9Nb250aFZpZXcvV2Vla051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL01vbnRoVmlldy9XZWVrZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vVGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vVGlsZUdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L2VzbS9ZZWFyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vWWVhclZpZXcvTW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL1llYXJWaWV3L01vbnRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL3NoYXJlZC9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL2RhdGVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbGVuZGFyL2Rpc3QvZXNtL3NoYXJlZC9kYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FsZW5kYXIvZGlzdC9lc20vc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlSW5wdXQvRGF5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvRGF0ZUlucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC9Nb250aElucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RhdGVJbnB1dC9Nb250aFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlSW5wdXQvTmF0aXZlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvRGF0ZUlucHV0L1llYXJJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlUGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1waWNrZXIvZGlzdC9EYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L0RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL2RhdGVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL2RhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXBpY2tlci9kaXN0L3NoYXJlZC9wcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcGlja2VyL2Rpc3Qvc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXQvZGlzdC9lc20vRml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXQvZGlzdC9lc20vc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cGRhdGUtaW5wdXQtd2lkdGgvZGlzdC9lc20vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FB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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQW9ELEdBQUc7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q3BGO0FBQ0E7O0FBRUE7O0FBRUEsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsK0VBQStFO0FBQy9FO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSwrRUFBZ0IsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0UGVyaW9kLCBnZXRFZGdlT2ZQZXJpb2QsIGRlZmF1bHRPZmZzZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VHZXRFZGdlT2ZOZWlnaGJvckludGVybmFsKGRhdGUpIHtcbiAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0T2Zmc2V0O1xuICAgIHZhciBwcmV2aW91c1BlcmlvZCA9IGdldFBlcmlvZChkYXRlKSArIG9mZnNldDtcbiAgICByZXR1cm4gZ2V0RWRnZU9mUGVyaW9kKHByZXZpb3VzUGVyaW9kKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldEVuZChnZXRCZWdpbk9mTmV4dFBlcmlvZCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWFrZUdldEVuZEludGVybmFsKGRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZ2V0QmVnaW5PZk5leHRQZXJpb2QoZGF0ZSkuZ2V0VGltZSgpIC0gMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VHZXRSYW5nZShmdW5jdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VHZXRSYW5nZUludGVybmFsKGRhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbihkYXRlKTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogU2ltcGxlIGdldHRlcnMgLSBnZXR0aW5nIGEgcHJvcGVydHkgb2YgYSBnaXZlbiBwb2ludCBpbiB0aW1lXG4gKi9cblxuLyoqXG4gKiBHZXRzIHllYXIgZnJvbSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxudW1iZXJ8c3RyaW5nfSBkYXRlIERhdGUgdG8gZ2V0IHllYXIgZnJvbS5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciB5ZWFyID0gcGFyc2VJbnQoZGF0ZSwgMTApO1xuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKHllYXIpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHllYXIgZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogR2V0cyBtb250aCBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUgdG8gZ2V0IG1vbnRoIGZyb20uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbW9udGggZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogR2V0cyBodW1hbi1yZWFkYWJsZSBtb250aCBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUgdG8gZ2V0IGh1bWFuLXJlYWRhYmxlIG1vbnRoIGZyb20uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoSHVtYW4oZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgaHVtYW4tcmVhZGFibGUgbW9udGggZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogR2V0cyBodW1hbi1yZWFkYWJsZSBkYXkgb2YgdGhlIG1vbnRoIGZyb20gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB0byBnZXQgZGF5IG9mIHRoZSBtb250aCBmcm9tLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB5ZWFyIGZyb20gZGF0ZTogXCIuY29uY2F0KGRhdGUsIFwiLlwiKSk7XG59XG4vKipcbiAqIEdldHMgaG91cnMgZnJvbSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxzdHJpbmd9IGRhdGUgRGF0ZSB0byBnZXQgaG91cnMgZnJvbS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBkYXRlUGllY2VzID0gZGF0ZS5zcGxpdCgnOicpO1xuXG4gICAgaWYgKGRhdGVQaWVjZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIHZhciBob3Vyc1N0cmluZyA9IGRhdGVQaWVjZXNbMF07XG4gICAgICB2YXIgaG91cnMgPSBwYXJzZUludChob3Vyc1N0cmluZywgMTApO1xuXG4gICAgICBpZiAoIWlzTmFOKGhvdXJzKSkge1xuICAgICAgICByZXR1cm4gaG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBob3VycyBmcm9tIGRhdGU6IFwiLmNvbmNhdChkYXRlLCBcIi5cIikpO1xufVxuLyoqXG4gKiBHZXRzIG1pbnV0ZXMgZnJvbSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxzdHJpbmd9IGRhdGUgRGF0ZSB0byBnZXQgbWludXRlcyBmcm9tLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW51dGVzKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBkYXRlUGllY2VzID0gZGF0ZS5zcGxpdCgnOicpO1xuXG4gICAgaWYgKGRhdGVQaWVjZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIHZhciBtaW51dGVzU3RyaW5nID0gZGF0ZVBpZWNlc1sxXSB8fCAwO1xuICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzU3RyaW5nLCAxMCk7XG5cbiAgICAgIGlmICghaXNOYU4obWludXRlcykpIHtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBtaW51dGVzIGZyb20gZGF0ZTogXCIuY29uY2F0KGRhdGUsIFwiLlwiKSk7XG59XG4vKipcbiAqIEdldHMgc2Vjb25kcyBmcm9tIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfHN0cmluZ30gZGF0ZSBEYXRlIHRvIGdldCBzZWNvbmRzIGZyb20uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHMoZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGRhdGVQaWVjZXMgPSBkYXRlLnNwbGl0KCc6Jyk7XG5cbiAgICBpZiAoZGF0ZVBpZWNlcy5sZW5ndGggPj0gMikge1xuICAgICAgdmFyIHNlY29uZHNTdHJpbmcgPSBkYXRlUGllY2VzWzJdIHx8IDA7XG4gICAgICB2YXIgc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHNTdHJpbmcsIDEwKTtcblxuICAgICAgaWYgKCFpc05hTihzZWNvbmRzKSkge1xuICAgICAgICByZXR1cm4gc2Vjb25kcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHNlY29uZHMgZnJvbSBkYXRlOiBcIi5jb25jYXQoZGF0ZSwgXCIuXCIpKTtcbn1cbi8qKlxuICogQ2VudHVyeVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50dXJ5U3RhcnQoZGF0ZSkge1xuICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gIHZhciBjZW50dXJ5U3RhcnRZZWFyID0geWVhciArICgteWVhciArIDEpICUgMTAwO1xuICB2YXIgY2VudHVyeVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNlbnR1cnlTdGFydERhdGUuc2V0RnVsbFllYXIoY2VudHVyeVN0YXJ0WWVhciwgMCwgMSk7XG4gIGNlbnR1cnlTdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBjZW50dXJ5U3RhcnREYXRlO1xufVxuZXhwb3J0IHZhciBnZXRQcmV2aW91c0NlbnR1cnlTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRDZW50dXJ5U3RhcnQsIC0xMDApO1xuZXhwb3J0IHZhciBnZXROZXh0Q2VudHVyeVN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldENlbnR1cnlTdGFydCwgMTAwKTtcbmV4cG9ydCB2YXIgZ2V0Q2VudHVyeUVuZCA9IG1ha2VHZXRFbmQoZ2V0TmV4dENlbnR1cnlTdGFydCk7XG5leHBvcnQgdmFyIGdldFByZXZpb3VzQ2VudHVyeUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRDZW50dXJ5RW5kLCAtMTAwKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dENlbnR1cnlFbmQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0Q2VudHVyeUVuZCwgMTAwKTtcbmV4cG9ydCB2YXIgZ2V0Q2VudHVyeVJhbmdlID0gbWFrZUdldFJhbmdlKFtnZXRDZW50dXJ5U3RhcnQsIGdldENlbnR1cnlFbmRdKTtcbi8qKlxuICogRGVjYWRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlY2FkZVN0YXJ0KGRhdGUpIHtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICB2YXIgZGVjYWRlU3RhcnRZZWFyID0geWVhciArICgteWVhciArIDEpICUgMTA7XG4gIHZhciBkZWNhZGVTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICBkZWNhZGVTdGFydERhdGUuc2V0RnVsbFllYXIoZGVjYWRlU3RhcnRZZWFyLCAwLCAxKTtcbiAgZGVjYWRlU3RhcnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGVjYWRlU3RhcnREYXRlO1xufVxuZXhwb3J0IHZhciBnZXRQcmV2aW91c0RlY2FkZVN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldERlY2FkZVN0YXJ0LCAtMTApO1xuZXhwb3J0IHZhciBnZXROZXh0RGVjYWRlU3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0RGVjYWRlU3RhcnQsIDEwKTtcbmV4cG9ydCB2YXIgZ2V0RGVjYWRlRW5kID0gbWFrZUdldEVuZChnZXROZXh0RGVjYWRlU3RhcnQpO1xuZXhwb3J0IHZhciBnZXRQcmV2aW91c0RlY2FkZUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXREZWNhZGVFbmQsIC0xMCk7XG5leHBvcnQgdmFyIGdldE5leHREZWNhZGVFbmQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0RGVjYWRlRW5kLCAxMCk7XG5leHBvcnQgdmFyIGdldERlY2FkZVJhbmdlID0gbWFrZUdldFJhbmdlKFtnZXREZWNhZGVTdGFydCwgZ2V0RGVjYWRlRW5kXSk7XG4vKipcbiAqIFllYXJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhclN0YXJ0KGRhdGUpIHtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICB2YXIgeWVhclN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHllYXJTdGFydERhdGUuc2V0RnVsbFllYXIoeWVhciwgMCwgMSk7XG4gIHllYXJTdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiB5ZWFyU3RhcnREYXRlO1xufVxuZXhwb3J0IHZhciBnZXRQcmV2aW91c1llYXJTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRZZWFyU3RhcnQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dFllYXJTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvcihnZXRZZWFyLCBnZXRZZWFyU3RhcnQsIDEpO1xuZXhwb3J0IHZhciBnZXRZZWFyRW5kID0gbWFrZUdldEVuZChnZXROZXh0WWVhclN0YXJ0KTtcbmV4cG9ydCB2YXIgZ2V0UHJldmlvdXNZZWFyRW5kID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yKGdldFllYXIsIGdldFllYXJFbmQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dFllYXJFbmQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3IoZ2V0WWVhciwgZ2V0WWVhckVuZCwgMSk7XG5leHBvcnQgdmFyIGdldFllYXJSYW5nZSA9IG1ha2VHZXRSYW5nZShbZ2V0WWVhclN0YXJ0LCBnZXRZZWFyRW5kXSk7XG4vKipcbiAqIE1vbnRoXG4gKi9cblxuZnVuY3Rpb24gbWFrZUdldEVkZ2VPZk5laWdoYm9yTW9udGgoZ2V0RWRnZU9mUGVyaW9kLCBkZWZhdWx0T2Zmc2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBtYWtlR2V0RWRnZU9mTmVpZ2hib3JNb250aEludGVybmFsKGRhdGUpIHtcbiAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0T2Zmc2V0O1xuICAgIHZhciB5ZWFyID0gZ2V0WWVhcihkYXRlKTtcbiAgICB2YXIgbW9udGggPSBnZXRNb250aChkYXRlKSArIG9mZnNldDtcbiAgICB2YXIgcHJldmlvdXNQZXJpb2QgPSBuZXcgRGF0ZSgpO1xuICAgIHByZXZpb3VzUGVyaW9kLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcbiAgICBwcmV2aW91c1BlcmlvZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZ2V0RWRnZU9mUGVyaW9kKHByZXZpb3VzUGVyaW9kKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoU3RhcnQoZGF0ZSkge1xuICB2YXIgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gIHZhciBtb250aCA9IGdldE1vbnRoKGRhdGUpO1xuICB2YXIgbW9udGhTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICBtb250aFN0YXJ0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XG4gIG1vbnRoU3RhcnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gbW9udGhTdGFydERhdGU7XG59XG5leHBvcnQgdmFyIGdldFByZXZpb3VzTW9udGhTdGFydCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvck1vbnRoKGdldE1vbnRoU3RhcnQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dE1vbnRoU3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3JNb250aChnZXRNb250aFN0YXJ0LCAxKTtcbmV4cG9ydCB2YXIgZ2V0TW9udGhFbmQgPSBtYWtlR2V0RW5kKGdldE5leHRNb250aFN0YXJ0KTtcbmV4cG9ydCB2YXIgZ2V0UHJldmlvdXNNb250aEVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvck1vbnRoKGdldE1vbnRoRW5kLCAtMSk7XG5leHBvcnQgdmFyIGdldE5leHRNb250aEVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvck1vbnRoKGdldE1vbnRoRW5kLCAxKTtcbmV4cG9ydCB2YXIgZ2V0TW9udGhSYW5nZSA9IG1ha2VHZXRSYW5nZShbZ2V0TW9udGhTdGFydCwgZ2V0TW9udGhFbmRdKTtcbi8qKlxuICogRGF5XG4gKi9cblxuZnVuY3Rpb24gbWFrZUdldEVkZ2VPZk5laWdoYm9yRGF5KGdldEVkZ2VPZlBlcmlvZCwgZGVmYXVsdE9mZnNldCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWFrZUdldEVkZ2VPZk5laWdoYm9yRGF5SW50ZXJuYWwoZGF0ZSkge1xuICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPZmZzZXQ7XG4gICAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpO1xuICAgIHZhciBtb250aCA9IGdldE1vbnRoKGRhdGUpO1xuICAgIHZhciBkYXkgPSBnZXREYXRlKGRhdGUpICsgb2Zmc2V0O1xuICAgIHZhciBwcmV2aW91c1BlcmlvZCA9IG5ldyBEYXRlKCk7XG4gICAgcHJldmlvdXNQZXJpb2Quc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIGRheSk7XG4gICAgcHJldmlvdXNQZXJpb2Quc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGdldEVkZ2VPZlBlcmlvZChwcmV2aW91c1BlcmlvZCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlTdGFydChkYXRlKSB7XG4gIHZhciB5ZWFyID0gZ2V0WWVhcihkYXRlKTtcbiAgdmFyIG1vbnRoID0gZ2V0TW9udGgoZGF0ZSk7XG4gIHZhciBkYXkgPSBnZXREYXRlKGRhdGUpO1xuICB2YXIgZGF5U3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgZGF5U3RhcnREYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkpO1xuICBkYXlTdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXlTdGFydERhdGU7XG59XG5leHBvcnQgdmFyIGdldFByZXZpb3VzRGF5U3RhcnQgPSBtYWtlR2V0RWRnZU9mTmVpZ2hib3JEYXkoZ2V0RGF5U3RhcnQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dERheVN0YXJ0ID0gbWFrZUdldEVkZ2VPZk5laWdoYm9yRGF5KGdldERheVN0YXJ0LCAxKTtcbmV4cG9ydCB2YXIgZ2V0RGF5RW5kID0gbWFrZUdldEVuZChnZXROZXh0RGF5U3RhcnQpO1xuZXhwb3J0IHZhciBnZXRQcmV2aW91c0RheUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvckRheShnZXREYXlFbmQsIC0xKTtcbmV4cG9ydCB2YXIgZ2V0TmV4dERheUVuZCA9IG1ha2VHZXRFZGdlT2ZOZWlnaGJvckRheShnZXREYXlFbmQsIDEpO1xuZXhwb3J0IHZhciBnZXREYXlSYW5nZSA9IG1ha2VHZXRSYW5nZShbZ2V0RGF5U3RhcnQsIGdldERheUVuZF0pO1xuLyoqXG4gKiBPdGhlclxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgYSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzSW5Nb250aChkYXRlKSB7XG4gIHJldHVybiBnZXREYXRlKGdldE1vbnRoRW5kKGRhdGUpKTtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQobnVtKSB7XG4gIHZhciB2YWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDI7XG4gIHZhciBudW1TdHIgPSBcIlwiLmNvbmNhdChudW0pO1xuXG4gIGlmIChudW1TdHIubGVuZ3RoID49IHZhbCkge1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICByZXR1cm4gXCIwMDAwXCIuY29uY2F0KG51bVN0cikuc2xpY2UoLXZhbCk7XG59XG4vKipcbiAqIFJldHVybnMgbG9jYWwgaG91cnMgYW5kIG1pbnV0ZXMgKGhoOm1tKS5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3Vyc01pbnV0ZXMoZGF0ZSkge1xuICB2YXIgaG91cnMgPSBwYWRTdGFydChnZXRIb3VycyhkYXRlKSk7XG4gIHZhciBtaW51dGVzID0gcGFkU3RhcnQoZ2V0TWludXRlcyhkYXRlKSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdChob3VycywgXCI6XCIpLmNvbmNhdChtaW51dGVzKTtcbn1cbi8qKlxuICogUmV0dXJucyBsb2NhbCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyAoaGg6bW06c3MpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3Vyc01pbnV0ZXNTZWNvbmRzKGRhdGUpIHtcbiAgdmFyIGhvdXJzID0gcGFkU3RhcnQoZ2V0SG91cnMoZGF0ZSkpO1xuICB2YXIgbWludXRlcyA9IHBhZFN0YXJ0KGdldE1pbnV0ZXMoZGF0ZSkpO1xuICB2YXIgc2Vjb25kcyA9IHBhZFN0YXJ0KGdldFNlY29uZHMoZGF0ZSkpO1xuICByZXR1cm4gXCJcIi5jb25jYXQoaG91cnMsIFwiOlwiKS5jb25jYXQobWludXRlcywgXCI6XCIpLmNvbmNhdChzZWNvbmRzKTtcbn1cbi8qKlxuICogUmV0dXJucyBsb2NhbCBtb250aCBpbiBJU08tbGlrZSBmb3JtYXQgKFlZWVktTU0pLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09Mb2NhbE1vbnRoKGRhdGUpIHtcbiAgdmFyIHllYXIgPSBwYWRTdGFydChnZXRZZWFyKGRhdGUpLCA0KTtcbiAgdmFyIG1vbnRoID0gcGFkU3RhcnQoZ2V0TW9udGhIdW1hbihkYXRlKSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdCh5ZWFyLCBcIi1cIikuY29uY2F0KG1vbnRoKTtcbn1cbi8qKlxuICogUmV0dXJucyBsb2NhbCBkYXRlIGluIElTTy1saWtlIGZvcm1hdCAoWVlZWS1NTS1ERCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0xvY2FsRGF0ZShkYXRlKSB7XG4gIHZhciB5ZWFyID0gcGFkU3RhcnQoZ2V0WWVhcihkYXRlKSwgNCk7XG4gIHZhciBtb250aCA9IHBhZFN0YXJ0KGdldE1vbnRoSHVtYW4oZGF0ZSkpO1xuICB2YXIgZGF5ID0gcGFkU3RhcnQoZ2V0RGF0ZShkYXRlKSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdCh5ZWFyLCBcIi1cIikuY29uY2F0KG1vbnRoLCBcIi1cIikuY29uY2F0KGRheSk7XG59XG4vKipcbiAqIFJldHVybnMgbG9jYWwgZGF0ZSAmIHRpbWUgaW4gSVNPLWxpa2UgZm9ybWF0IChZWVlZLU1NLUREVGhoOm1tOnNzKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPTG9jYWxEYXRlVGltZShkYXRlKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChnZXRJU09Mb2NhbERhdGUoZGF0ZSksIFwiVFwiKS5jb25jYXQoZ2V0SG91cnNNaW51dGVzU2Vjb25kcyhkYXRlKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xuXG4vLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbi8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY2xhc3NvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBhcnJheVB1c2ggPSBbXS5wdXNoO1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIE1BWF9VSU5UMzIgPSAweEZGRkZGRkZGO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gIVJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKFNQTElULCBuYXRpdmVTcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XG4gICAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPSAyIHx8XG4gICAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPSA0IHx8XG4gICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAgICcnLnNwbGl0KC8uPy8pLmxlbmd0aFxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtzdHJpbmddO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltKTtcbiAgICAgIH1cbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weS5sYXN0SW5kZXg7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmcubGVuZ3RoKSBhcnJheVB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID49IGxpbSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHkubGFzdEluZGV4ID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IG5hdGl2ZVNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIGludGVybmFsU3BsaXQgPSBuYXRpdmVTcGxpdDtcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgIVNVUFBPUlRTX1kpO1xuIiwidmFyIGdldFJlY3QgPSBmdW5jdGlvbiBnZXRSZWN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59O1xuXG52YXIgZGV0ZWN0RWxlbWVudE92ZXJmbG93ID0gZnVuY3Rpb24gZGV0ZWN0RWxlbWVudE92ZXJmbG93KGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICByZXR1cm4ge1xuICAgIGdldCBjb2xsaWRlZFRvcCgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGVsZW1lbnQpLnRvcCA8IGdldFJlY3QoY29udGFpbmVyKS50b3A7XG4gICAgfSxcblxuICAgIGdldCBjb2xsaWRlZEJvdHRvbSgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGVsZW1lbnQpLmJvdHRvbSA+IGdldFJlY3QoY29udGFpbmVyKS5ib3R0b207XG4gICAgfSxcblxuICAgIGdldCBjb2xsaWRlZExlZnQoKSB7XG4gICAgICByZXR1cm4gZ2V0UmVjdChlbGVtZW50KS5sZWZ0IDwgZ2V0UmVjdChjb250YWluZXIpLmxlZnQ7XG4gICAgfSxcblxuICAgIGdldCBjb2xsaWRlZFJpZ2h0KCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoZWxlbWVudCkucmlnaHQgPiBnZXRSZWN0KGNvbnRhaW5lcikucmlnaHQ7XG4gICAgfSxcblxuICAgIGdldCBvdmVyZmxvd1RvcCgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGNvbnRhaW5lcikudG9wIC0gZ2V0UmVjdChlbGVtZW50KS50b3A7XG4gICAgfSxcblxuICAgIGdldCBvdmVyZmxvd0JvdHRvbSgpIHtcbiAgICAgIHJldHVybiBnZXRSZWN0KGVsZW1lbnQpLmJvdHRvbSAtIGdldFJlY3QoY29udGFpbmVyKS5ib3R0b207XG4gICAgfSxcblxuICAgIGdldCBvdmVyZmxvd0xlZnQoKSB7XG4gICAgICByZXR1cm4gZ2V0UmVjdChjb250YWluZXIpLmxlZnQgLSBnZXRSZWN0KGVsZW1lbnQpLmxlZnQ7XG4gICAgfSxcblxuICAgIGdldCBvdmVyZmxvd1JpZ2h0KCkge1xuICAgICAgcmV0dXJuIGdldFJlY3QoZWxlbWVudCkucmlnaHQgLSBnZXRSZWN0KGNvbnRhaW5lcikucmlnaHQ7XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXRlY3RFbGVtZW50T3ZlcmZsb3c7IiwiaW1wb3J0IG9uY2UgZnJvbSAnbG9kYXNoLm9uY2UnO1xuXG5mdW5jdGlvbiBmaWx0ZXJEdXBsaWNhdGVzKGFycikge1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWwsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZihlbCkgPT09IGluZGV4O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZml4TG93ZXJjYXNlUHJvcGVydGllcyhhcnIpIHtcbiAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbCB8fCBlbC5pbmRleE9mKCctJykgPT09IC0xIHx8IGVsLnRvTG93ZXJDYXNlKCkgIT09IGVsKSB7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0RWwgPSBlbC5zcGxpdCgnLScpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzcGxpdEVsWzBdLCBcIi1cIikuY29uY2F0KHNwbGl0RWxbMV0udG9VcHBlckNhc2UoKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyTG9jYWxlc0ludGVybmFsKCkge1xuICB2YXIgbGFuZ3VhZ2VMaXN0ID0gW107XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzKSB7XG4gICAgICBsYW5ndWFnZUxpc3QgPSBsYW5ndWFnZUxpc3QuY29uY2F0KHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkge1xuICAgICAgbGFuZ3VhZ2VMaXN0LnB1c2god2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlKSB7XG4gICAgICBsYW5ndWFnZUxpc3QucHVzaCh3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlKSB7XG4gICAgICBsYW5ndWFnZUxpc3QucHVzaCh3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iuc3lzdGVtTGFuZ3VhZ2UpIHtcbiAgICAgIGxhbmd1YWdlTGlzdC5wdXNoKHdpbmRvdy5uYXZpZ2F0b3Iuc3lzdGVtTGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGxhbmd1YWdlTGlzdC5wdXNoKCdlbi1VUycpOyAvLyBGYWxsYmFja1xuXG4gIHJldHVybiBmaXhMb3dlcmNhc2VQcm9wZXJ0aWVzKGZpbHRlckR1cGxpY2F0ZXMobGFuZ3VhZ2VMaXN0KSk7XG59XG5cbmV4cG9ydCB2YXIgZ2V0VXNlckxvY2FsZXMgPSBvbmNlKGdldFVzZXJMb2NhbGVzSW50ZXJuYWwpO1xuXG5mdW5jdGlvbiBnZXRVc2VyTG9jYWxlSW50ZXJuYWwoKSB7XG4gIHJldHVybiBnZXRVc2VyTG9jYWxlcygpWzBdO1xufVxuXG5leHBvcnQgdmFyIGdldFVzZXJMb2NhbGUgPSBvbmNlKGdldFVzZXJMb2NhbGVJbnRlcm5hbCk7XG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyTG9jYWxlOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LFxuICAgIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2AsIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIGFuZCBhcmd1bWVudHNcbiAqIG9mIHRoZSBjcmVhdGVkIGZ1bmN0aW9uLCB3aGlsZSBpdCdzIGNhbGxlZCBsZXNzIHRoYW4gYG5gIHRpbWVzLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgY3JlYXRlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2FsbHMgYXQgd2hpY2ggYGZ1bmNgIGlzIG5vIGxvbmdlciBpbnZva2VkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyByZXN0cmljdGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5iZWZvcmUoNSwgYWRkQ29udGFjdFRvTGlzdCkpO1xuICogLy8gPT4gQWxsb3dzIGFkZGluZyB1cCB0byA0IGNvbnRhY3RzIHRvIHRoZSBsaXN0LlxuICovXG5mdW5jdGlvbiBiZWZvcmUobiwgZnVuYykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBuID0gdG9JbnRlZ2VyKG4pO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKC0tbiA+IDApIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKG4gPD0gMSkge1xuICAgICAgZnVuYyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpcyByZXN0cmljdGVkIHRvIGludm9raW5nIGBmdW5jYCBvbmNlLiBSZXBlYXQgY2FsbHNcbiAqIHRvIHRoZSBmdW5jdGlvbiByZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBpbnZvY2F0aW9uLiBUaGUgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIGFuZCBhcmd1bWVudHMgb2YgdGhlIGNyZWF0ZWQgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHJlc3RyaWN0ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBpbml0aWFsaXplID0gXy5vbmNlKGNyZWF0ZUFwcGxpY2F0aW9uKTtcbiAqIGluaXRpYWxpemUoKTtcbiAqIGluaXRpYWxpemUoKTtcbiAqIC8vID0+IGBjcmVhdGVBcHBsaWNhdGlvbmAgaXMgaW52b2tlZCBvbmNlXG4gKi9cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICByZXR1cm4gYmVmb3JlKDIsIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZm9jdXNFdmVudHMgPSBleHBvcnRzLmtleWJvYXJkRXZlbnRzID0gZXhwb3J0cy50b3VjaEV2ZW50cyA9IGV4cG9ydHMubW91c2VFdmVudHMgPSB2b2lkIDA7XG4vLyBBcyBkZWZpbmVkIG9uIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBtb3VzZSBldmVudHM6IGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ldmVudHMuaHRtbCNtb3VzZS1ldmVudHNcbnZhciBtb3VzZUV2ZW50cyA9IFsnb25DbGljaycsICdvbkNvbnRleHRNZW51JywgJ29uRG91YmxlQ2xpY2snLCAnb25EcmFnJywgJ29uRHJhZ0VuZCcsICdvbkRyYWdFbnRlcicsICdvbkRyYWdFeGl0JywgJ29uRHJhZ0xlYXZlJywgJ29uRHJhZ092ZXInLCAnb25EcmFnU3RhcnQnLCAnb25Ecm9wJywgJ29uTW91c2VEb3duJywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlTGVhdmUnLCAnb25Nb3VzZU1vdmUnLCAnb25Nb3VzZU91dCcsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlVXAnXTsgLy8gQXMgZGVmaW5lZCBvbiB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgdG91Y2ggZXZlbnRzOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXZlbnRzLmh0bWwjdG91Y2gtZXZlbnRzXG5cbmV4cG9ydHMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbnZhciB0b3VjaEV2ZW50cyA9IFsnb25Ub3VjaENhbmNlbCcsICdvblRvdWNoRW5kJywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hTdGFydCddOyAvLyBBcyBkZWZpbmVkIG9uIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBrZXlib2FyZCBldmVudHM6IGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ldmVudHMuaHRtbCNrZXlib2FyZC1ldmVudHNcblxuZXhwb3J0cy50b3VjaEV2ZW50cyA9IHRvdWNoRXZlbnRzO1xudmFyIGtleWJvYXJkRXZlbnRzID0gWydvbktleURvd24nLCAnb25LZXlQcmVzcycsICdvbktleVVwJ107IC8vIEFzIGRlZmluZWQgb24gdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGtleWJvYXJkIGV2ZW50czogaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2V2ZW50cy5odG1sI2ZvY3VzLWV2ZW50c1xuXG5leHBvcnRzLmtleWJvYXJkRXZlbnRzID0ga2V5Ym9hcmRFdmVudHM7XG52YXIgZm9jdXNFdmVudHMgPSBbJ29uRm9jdXMnLCAnb25CbHVyJ107XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggb24tZXZlbnQgY2FsbGJhY2sgcHJvcHMgY3VycmllZCB3aXRoIHByb3ZpZGVkIGFyZ3MuXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMgcGFzc2VkIHRvIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGdldEFyZ3MgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYXJndW1lbnQocykgb24tZXZlbnQgY2FsbGJhY2tzXG4gKiAgIHNoYWxsIGJlIGN1cnJpZWQgd2l0aC5cbiAqL1xuXG5leHBvcnRzLmZvY3VzRXZlbnRzID0gZm9jdXNFdmVudHM7XG5cbnZhciBtYWtlRXZlbnRQcm9wcyA9IGZ1bmN0aW9uIG1ha2VFdmVudFByb3BzKHByb3BzLCBnZXRBcmdzKSB7XG4gIHZhciBldmVudFByb3BzID0ge307XG4gIFtdLmNvbmNhdChtb3VzZUV2ZW50cywgdG91Y2hFdmVudHMsIGtleWJvYXJkRXZlbnRzLCBmb2N1c0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50UHJvcHNbZXZlbnROYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZ2V0QXJncyA/IHByb3BzW2V2ZW50TmFtZV0oZXZlbnQsIGdldEFyZ3MoZXZlbnROYW1lKSkgOiBwcm9wc1tldmVudE5hbWVdKGV2ZW50KTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGV2ZW50UHJvcHM7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBtYWtlRXZlbnRQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NOYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbiAoY2xhc3NMaXN0LCBhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkgPyBjbGFzc0xpc3QuY29uY2F0KGFyZykgOiBjbGFzc0xpc3Q7XG4gIH0sIFtdKS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbWVyZ2VDbGFzc05hbWVzIGZyb20gJ21lcmdlLWNsYXNzLW5hbWVzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vQ2FsZW5kYXIvTmF2aWdhdGlvbic7XG5pbXBvcnQgQ2VudHVyeVZpZXcgZnJvbSAnLi9DZW50dXJ5Vmlldyc7XG5pbXBvcnQgRGVjYWRlVmlldyBmcm9tICcuL0RlY2FkZVZpZXcnO1xuaW1wb3J0IFllYXJWaWV3IGZyb20gJy4vWWVhclZpZXcnO1xuaW1wb3J0IE1vbnRoVmlldyBmcm9tICcuL01vbnRoVmlldyc7XG5pbXBvcnQgeyBnZXRCZWdpbiwgZ2V0QmVnaW5OZXh0LCBnZXRFbmQsIGdldFZhbHVlUmFuZ2UgfSBmcm9tICcuL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyBpc0NhbGVuZGFyVHlwZSwgaXNDbGFzc05hbWUsIGlzTWF4RGF0ZSwgaXNNaW5EYXRlLCBpc1JlZiwgaXNWYWx1ZSwgaXNWaWV3IH0gZnJvbSAnLi9zaGFyZWQvcHJvcFR5cGVzJztcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuL3NoYXJlZC91dGlscyc7XG52YXIgYmFzZUNsYXNzTmFtZSA9ICdyZWFjdC1jYWxlbmRhcic7XG52YXIgYWxsVmlld3MgPSBbJ2NlbnR1cnknLCAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcbnZhciBhbGxWYWx1ZVR5cGVzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhbGxWaWV3cy5zbGljZSgxKSksIFsnZGF5J10pO1xuLyoqXG4gKiBSZXR1cm5zIHZpZXdzIGFycmF5IHdpdGggZGlzYWxsb3dlZCB2YWx1ZXMgY3V0IG9mZi5cbiAqL1xuXG5mdW5jdGlvbiBnZXRMaW1pdGVkVmlld3MobWluRGV0YWlsLCBtYXhEZXRhaWwpIHtcbiAgcmV0dXJuIGFsbFZpZXdzLnNsaWNlKGFsbFZpZXdzLmluZGV4T2YobWluRGV0YWlsKSwgYWxsVmlld3MuaW5kZXhPZihtYXhEZXRhaWwpICsgMSk7XG59XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIHZpZXcgaXMgYWxsb3dlZCB3aXRoIGN1cnJlbnRseSBhcHBsaWVkIHNldHRpbmdzLlxuICovXG5cblxuZnVuY3Rpb24gaXNWaWV3QWxsb3dlZCh2aWV3LCBtaW5EZXRhaWwsIG1heERldGFpbCkge1xuICB2YXIgdmlld3MgPSBnZXRMaW1pdGVkVmlld3MobWluRGV0YWlsLCBtYXhEZXRhaWwpO1xuICByZXR1cm4gdmlld3MuaW5kZXhPZih2aWV3KSAhPT0gLTE7XG59XG4vKipcbiAqIEdldHMgZWl0aGVyIHByb3ZpZGVkIHZpZXcgaWYgYWxsb3dlZCBieSBtaW5EZXRhaWwgYW5kIG1heERldGFpbCwgb3IgZ2V0c1xuICogdGhlIGRlZmF1bHQgdmlldyBpZiBub3QgYWxsb3dlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFZpZXcodmlldywgbWluRGV0YWlsLCBtYXhEZXRhaWwpIHtcbiAgaWYgKGlzVmlld0FsbG93ZWQodmlldywgbWluRGV0YWlsLCBtYXhEZXRhaWwpKSB7XG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cblxuICByZXR1cm4gbWF4RGV0YWlsO1xufVxuLyoqXG4gKiBSZXR1cm5zIHZhbHVlIHR5cGUgdGhhdCBjYW4gYmUgcmV0dXJuZWQgd2l0aCBjdXJyZW50bHkgYXBwbGllZCBzZXR0aW5ncy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFZhbHVlVHlwZShtYXhEZXRhaWwpIHtcbiAgcmV0dXJuIGFsbFZhbHVlVHlwZXNbYWxsVmlld3MuaW5kZXhPZihtYXhEZXRhaWwpXTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUsIGluZGV4KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciByYXdWYWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsdWUubGVuZ3RoID09PSAyID8gdmFsdWVbaW5kZXhdIDogdmFsdWU7XG5cbiAgaWYgKCFyYXdWYWx1ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHZhbHVlRGF0ZSA9IG5ldyBEYXRlKHJhd1ZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWVEYXRlLmdldFRpbWUoKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGU6IFwiLmNvbmNhdCh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWUoX3JlZiwgaW5kZXgpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgbWF4RGV0YWlsID0gX3JlZi5tYXhEZXRhaWw7XG4gIHZhciB2YWx1ZVBpZWNlID0gZ2V0VmFsdWUodmFsdWUsIGluZGV4KTtcblxuICBpZiAoIXZhbHVlUGllY2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB2YWx1ZVR5cGUgPSBnZXRWYWx1ZVR5cGUobWF4RGV0YWlsKTtcbiAgdmFyIGRldGFpbFZhbHVlRnJvbSA9IFtnZXRCZWdpbiwgZ2V0RW5kXVtpbmRleF0odmFsdWVUeXBlLCB2YWx1ZVBpZWNlKTtcbiAgcmV0dXJuIGJldHdlZW4oZGV0YWlsVmFsdWVGcm9tLCBtaW5EYXRlLCBtYXhEYXRlKTtcbn1cblxudmFyIGdldERldGFpbFZhbHVlRnJvbSA9IGZ1bmN0aW9uIGdldERldGFpbFZhbHVlRnJvbShhcmdzKSB7XG4gIHJldHVybiBnZXREZXRhaWxWYWx1ZShhcmdzLCAwKTtcbn07XG5cbnZhciBnZXREZXRhaWxWYWx1ZVRvID0gZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWVUbyhhcmdzKSB7XG4gIHJldHVybiBnZXREZXRhaWxWYWx1ZShhcmdzLCAxKTtcbn07XG5cbnZhciBnZXREZXRhaWxWYWx1ZUFycmF5ID0gZnVuY3Rpb24gZ2V0RGV0YWlsVmFsdWVBcnJheShhcmdzKSB7XG4gIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWU7XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gW2dldERldGFpbFZhbHVlRnJvbSwgZ2V0RGV0YWlsVmFsdWVUb10ubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbihhcmdzKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVTdGFydERhdGUocHJvcHMpIHtcbiAgdmFyIG1heERhdGUgPSBwcm9wcy5tYXhEYXRlLFxuICAgICAgbWF4RGV0YWlsID0gcHJvcHMubWF4RGV0YWlsLFxuICAgICAgbWluRGF0ZSA9IHByb3BzLm1pbkRhdGUsXG4gICAgICBtaW5EZXRhaWwgPSBwcm9wcy5taW5EZXRhaWwsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgdmlldyA9IHByb3BzLnZpZXc7XG4gIHZhciByYW5nZVR5cGUgPSBnZXRWaWV3KHZpZXcsIG1pbkRldGFpbCwgbWF4RGV0YWlsKTtcbiAgdmFyIHZhbHVlRnJvbSA9IGdldERldGFpbFZhbHVlRnJvbSh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICBtYXhEZXRhaWw6IG1heERldGFpbFxuICB9KSB8fCBuZXcgRGF0ZSgpO1xuICByZXR1cm4gZ2V0QmVnaW4ocmFuZ2VUeXBlLCB2YWx1ZUZyb20pO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsQWN0aXZlU3RhcnREYXRlKHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICBkZWZhdWx0QWN0aXZlU3RhcnREYXRlID0gcHJvcHMuZGVmYXVsdEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGRlZmF1bHRWaWV3ID0gcHJvcHMuZGVmYXVsdFZpZXcsXG4gICAgICBtYXhEZXRhaWwgPSBwcm9wcy5tYXhEZXRhaWwsXG4gICAgICBtaW5EZXRhaWwgPSBwcm9wcy5taW5EZXRhaWwsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgdmlldyA9IHByb3BzLnZpZXcsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3RpdmVTdGFydERhdGVcIiwgXCJkZWZhdWx0QWN0aXZlU3RhcnREYXRlXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGVmYXVsdFZpZXdcIiwgXCJtYXhEZXRhaWxcIiwgXCJtaW5EZXRhaWxcIiwgXCJ2YWx1ZVwiLCBcInZpZXdcIl0pO1xuXG4gIHZhciByYW5nZVR5cGUgPSBnZXRWaWV3KHZpZXcsIG1pbkRldGFpbCwgbWF4RGV0YWlsKTtcbiAgdmFyIHZhbHVlRnJvbSA9IGFjdGl2ZVN0YXJ0RGF0ZSB8fCBkZWZhdWx0QWN0aXZlU3RhcnREYXRlO1xuXG4gIGlmICh2YWx1ZUZyb20pIHtcbiAgICByZXR1cm4gZ2V0QmVnaW4ocmFuZ2VUeXBlLCB2YWx1ZUZyb20pO1xuICB9XG5cbiAgcmV0dXJuIGdldEFjdGl2ZVN0YXJ0RGF0ZShfb2JqZWN0U3ByZWFkKHtcbiAgICBtYXhEZXRhaWw6IG1heERldGFpbCxcbiAgICBtaW5EZXRhaWw6IG1pbkRldGFpbCxcbiAgICB2YWx1ZTogdmFsdWUgfHwgZGVmYXVsdFZhbHVlLFxuICAgIHZpZXc6IHZpZXcgfHwgZGVmYXVsdFZpZXdcbiAgfSwgb3RoZXJQcm9wcykpO1xufVxuXG52YXIgZ2V0SXNTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldElzU2luZ2xlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIFtdLmNvbmNhdCh2YWx1ZSkubGVuZ3RoID09PSAxO1xufTtcblxudmFyIENhbGVuZGFyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDYWxlbmRhciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDYWxlbmRhcik7XG5cbiAgZnVuY3Rpb24gQ2FsZW5kYXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGVuZGFyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KF9hcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXG4gICAgICBhY3RpdmVTdGFydERhdGU6IF90aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVTdGFydERhdGUsXG4gICAgICB2YWx1ZTogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgdmlldzogX3RoaXMucHJvcHMuZGVmYXVsdFZpZXdcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXG5cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRTdGF0ZUFuZENhbGxDYWxsYmFja3NcIiwgZnVuY3Rpb24gKG5leHRTdGF0ZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgcHJldmlvdXNBY3RpdmVTdGFydERhdGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICAgIHByZXZpb3VzVmlldyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS52aWV3O1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd1BhcnRpYWxSYW5nZSA9IF90aGlzJHByb3BzLmFsbG93UGFydGlhbFJhbmdlLFxuICAgICAgICAgIG9uQWN0aXZlU3RhcnREYXRlQ2hhbmdlID0gX3RoaXMkcHJvcHMub25BY3RpdmVTdGFydERhdGVDaGFuZ2UsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBvblZpZXdDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vblZpZXdDaGFuZ2UsXG4gICAgICAgICAgc2VsZWN0UmFuZ2UgPSBfdGhpcyRwcm9wcy5zZWxlY3RSYW5nZTtcbiAgICAgIHZhciBwcmV2QXJncyA9IHtcbiAgICAgICAgYWN0aXZlU3RhcnREYXRlOiBwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgdmlldzogcHJldmlvdXNWaWV3XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgYWN0aXZlU3RhcnREYXRlOiBuZXh0U3RhdGUuYWN0aXZlU3RhcnREYXRlIHx8IF90aGlzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgICB2YWx1ZTogbmV4dFN0YXRlLnZhbHVlIHx8IF90aGlzLnZhbHVlLFxuICAgICAgICAgIHZpZXc6IG5leHRTdGF0ZS52aWV3IHx8IF90aGlzLnZpZXdcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBzaG91bGRVcGRhdGUoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuICgvLyBLZXkgbXVzdCBleGlzdCwgYW5k4oCmXG4gICAgICAgICAgICBrZXkgaW4gbmV4dFN0YXRlICYmICggLy8g4oCma2V5IGNoYW5nZWQgZnJvbSB1bmRlZmluZWQgdG8gZGVmaW5lZCBvciB0aGUgb3RoZXIgd2F5IGFyb3VuZCwgb3LigKZcbiAgICAgICAgICAgIF90eXBlb2YobmV4dFN0YXRlW2tleV0pICE9PSBfdHlwZW9mKHByZXZBcmdzW2tleV0pIC8vIOKApnZhbHVlIGNoYW5nZWQuXG4gICAgICAgICAgICB8fCAobmV4dFN0YXRlW2tleV0gaW5zdGFuY2VvZiBEYXRlID8gbmV4dFN0YXRlW2tleV0uZ2V0VGltZSgpICE9PSBwcmV2QXJnc1trZXldLmdldFRpbWUoKSA6IG5leHRTdGF0ZVtrZXldICE9PSBwcmV2QXJnc1trZXldKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSgnYWN0aXZlU3RhcnREYXRlJykpIHtcbiAgICAgICAgICBpZiAob25BY3RpdmVTdGFydERhdGVDaGFuZ2UpIG9uQWN0aXZlU3RhcnREYXRlQ2hhbmdlKGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSgndmlldycpKSB7XG4gICAgICAgICAgaWYgKG9uVmlld0NoYW5nZSkgb25WaWV3Q2hhbmdlKGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSgndmFsdWUnKSkge1xuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdFJhbmdlKSB7XG4gICAgICAgICAgICAgIHZhciBpc1NpbmdsZVZhbHVlID0gZ2V0SXNTaW5nbGVWYWx1ZShuZXh0U3RhdGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgIGlmICghaXNTaW5nbGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5leHRTdGF0ZS52YWx1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsbG93UGFydGlhbFJhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW25leHRTdGF0ZS52YWx1ZV0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobmV4dFN0YXRlLnZhbHVlLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldEFjdGl2ZVN0YXJ0RGF0ZVwiLCBmdW5jdGlvbiAoYWN0aXZlU3RhcnREYXRlKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZUFuZENhbGxDYWxsYmFja3Moe1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IGFjdGl2ZVN0YXJ0RGF0ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZHJpbGxEb3duXCIsIGZ1bmN0aW9uIChuZXh0QWN0aXZlU3RhcnREYXRlLCBldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5kcmlsbERvd25BdmFpbGFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vbkNsaWNrVGlsZShuZXh0QWN0aXZlU3RhcnREYXRlLCBldmVudCk7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgdmlldyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIudmlldyxcbiAgICAgICAgICB2aWV3cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIudmlld3M7XG5cbiAgICAgIHZhciBvbkRyaWxsRG93biA9IF90aGlzLnByb3BzLm9uRHJpbGxEb3duO1xuICAgICAgdmFyIG5leHRWaWV3ID0gdmlld3Nbdmlld3MuaW5kZXhPZih2aWV3KSArIDFdO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZUFuZENhbGxDYWxsYmFja3Moe1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IG5leHRBY3RpdmVTdGFydERhdGUsXG4gICAgICAgIHZpZXc6IG5leHRWaWV3XG4gICAgICB9LCB1bmRlZmluZWQsIG9uRHJpbGxEb3duKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkcmlsbFVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZHJpbGxVcEF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgYWN0aXZlU3RhcnREYXRlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMy5hY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgdmlldyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMudmlldyxcbiAgICAgICAgICB2aWV3cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMudmlld3M7XG5cbiAgICAgIHZhciBvbkRyaWxsVXAgPSBfdGhpcy5wcm9wcy5vbkRyaWxsVXA7XG4gICAgICB2YXIgbmV4dFZpZXcgPSB2aWV3c1t2aWV3cy5pbmRleE9mKHZpZXcpIC0gMV07XG4gICAgICB2YXIgbmV4dEFjdGl2ZVN0YXJ0RGF0ZSA9IGdldEJlZ2luKG5leHRWaWV3LCBhY3RpdmVTdGFydERhdGUpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZUFuZENhbGxDYWxsYmFja3Moe1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IG5leHRBY3RpdmVTdGFydERhdGUsXG4gICAgICAgIHZpZXc6IG5leHRWaWV3XG4gICAgICB9LCB1bmRlZmluZWQsIG9uRHJpbGxVcCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VcIiwgZnVuY3Rpb24gKHZhbHVlLCBldmVudCkge1xuICAgICAgdmFyIHNlbGVjdFJhbmdlID0gX3RoaXMucHJvcHMuc2VsZWN0UmFuZ2U7XG5cbiAgICAgIF90aGlzLm9uQ2xpY2tUaWxlKHZhbHVlLCBldmVudCk7XG5cbiAgICAgIHZhciBuZXh0VmFsdWU7XG5cbiAgICAgIGlmIChzZWxlY3RSYW5nZSkge1xuICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb24gdHVybmVkIG9uXG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemU0ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplNC52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTQudmFsdWVUeXBlO1xuXG4gICAgICAgIGlmICghZ2V0SXNTaW5nbGVWYWx1ZShwcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgIC8vIFZhbHVlIGhhcyAwIG9yIDIgZWxlbWVudHMgLSBlaXRoZXIgd2F5IHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IGFycmF5XG4gICAgICAgICAgLy8gRmlyc3QgdmFsdWVcbiAgICAgICAgICBuZXh0VmFsdWUgPSBnZXRCZWdpbih2YWx1ZVR5cGUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZWNvbmQgdmFsdWVcbiAgICAgICAgICBuZXh0VmFsdWUgPSBnZXRWYWx1ZVJhbmdlKHZhbHVlVHlwZSwgcHJldmlvdXNWYWx1ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb24gdHVybmVkIG9mZlxuICAgICAgICBuZXh0VmFsdWUgPSBfdGhpcy5nZXRQcm9jZXNzZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0QWN0aXZlU3RhcnREYXRlID0gZ2V0QWN0aXZlU3RhcnREYXRlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCB7fSwge1xuICAgICAgICB2YWx1ZTogbmV4dFZhbHVlXG4gICAgICB9KSk7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlQW5kQ2FsbENhbGxiYWNrcyh7XG4gICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogbmV4dEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IG5leHRWYWx1ZVxuICAgICAgfSwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2xpY2tUaWxlXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemU1ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgdmlldyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTUudmlldztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2tEYXkgPSBfdGhpcyRwcm9wczIub25DbGlja0RheSxcbiAgICAgICAgICBvbkNsaWNrRGVjYWRlID0gX3RoaXMkcHJvcHMyLm9uQ2xpY2tEZWNhZGUsXG4gICAgICAgICAgb25DbGlja01vbnRoID0gX3RoaXMkcHJvcHMyLm9uQ2xpY2tNb250aCxcbiAgICAgICAgICBvbkNsaWNrWWVhciA9IF90aGlzJHByb3BzMi5vbkNsaWNrWWVhcjtcblxuICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgICAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgICAgICAgIHJldHVybiBvbkNsaWNrRGVjYWRlO1xuXG4gICAgICAgICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgICAgICAgIHJldHVybiBvbkNsaWNrWWVhcjtcblxuICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2tNb250aDtcblxuICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHJldHVybiBvbkNsaWNrRGF5O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmlldzogXCIuY29uY2F0KHZpZXcsIFwiLlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0oKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh2YWx1ZSwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VPdmVyXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLmhvdmVyICYmIHByZXZTdGF0ZS5ob3Zlci5nZXRUaW1lKCkgPT09IHZhbHVlLmdldFRpbWUoKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3ZlcjogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VMZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhvdmVyOiBudWxsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxlbmRhciwgW3tcbiAgICBrZXk6IFwiZ2V0UHJvY2Vzc2VkVmFsdWVcIixcblxuICAgIC8qKlxuICAgICAqIEdldHMgY3VycmVudCB2YWx1ZSBpbiBhIGRlc2lyZWQgZm9ybWF0LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcm9jZXNzZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzMy5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczMubWF4RGF0ZSxcbiAgICAgICAgICBtYXhEZXRhaWwgPSBfdGhpcyRwcm9wczMubWF4RGV0YWlsLFxuICAgICAgICAgIHJldHVyblZhbHVlID0gX3RoaXMkcHJvcHMzLnJldHVyblZhbHVlO1xuXG4gICAgICB2YXIgcHJvY2Vzc0Z1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlRnJvbTtcblxuICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGV0YWlsVmFsdWVUbztcblxuICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZUFycmF5O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXR1cm5WYWx1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gcHJvY2Vzc0Z1bmN0aW9uKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICBtYXhEZXRhaWw6IG1heERldGFpbFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNvbnRlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29udGVudChuZXh0KSB7XG4gICAgICB2YXIgY3VycmVudEFjdGl2ZVN0YXJ0RGF0ZSA9IHRoaXMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICAgIG9uTW91c2VPdmVyID0gdGhpcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLnZhbHVlVHlwZSxcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgdmlldyA9IHRoaXMudmlldztcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNhbGVuZGFyVHlwZSA9IF90aGlzJHByb3BzNC5jYWxlbmRhclR5cGUsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHM0LmxvY2FsZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM0Lm1heERhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzNC5taW5EYXRlLFxuICAgICAgICAgIHNlbGVjdFJhbmdlID0gX3RoaXMkcHJvcHM0LnNlbGVjdFJhbmdlLFxuICAgICAgICAgIHRpbGVDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQudGlsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aWxlQ29udGVudCA9IF90aGlzJHByb3BzNC50aWxlQ29udGVudCxcbiAgICAgICAgICB0aWxlRGlzYWJsZWQgPSBfdGhpcyRwcm9wczQudGlsZURpc2FibGVkO1xuICAgICAgdmFyIGhvdmVyID0gdGhpcy5ob3ZlcjtcbiAgICAgIHZhciBhY3RpdmVTdGFydERhdGUgPSBuZXh0ID8gZ2V0QmVnaW5OZXh0KHZpZXcsIGN1cnJlbnRBY3RpdmVTdGFydERhdGUpIDogZ2V0QmVnaW4odmlldywgY3VycmVudEFjdGl2ZVN0YXJ0RGF0ZSk7XG4gICAgICB2YXIgb25DbGljayA9IHRoaXMuZHJpbGxEb3duQXZhaWxhYmxlID8gdGhpcy5kcmlsbERvd24gOiB0aGlzLm9uQ2hhbmdlO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0ge1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IGFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgICAgb25Nb3VzZU92ZXI6IHNlbGVjdFJhbmdlID8gb25Nb3VzZU92ZXIgOiBudWxsLFxuICAgICAgICB0aWxlQ2xhc3NOYW1lOiB0aWxlQ2xhc3NOYW1lLFxuICAgICAgICB0aWxlQ29udGVudDogdGlsZUNvbnRlbnQsXG4gICAgICAgIHRpbGVEaXNhYmxlZDogdGlsZURpc2FibGVkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHZhbHVlVHlwZTogdmFsdWVUeXBlXG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgICAgY2FzZSAnY2VudHVyeSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZvcm1hdFllYXIgPSB0aGlzLnByb3BzLmZvcm1hdFllYXI7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2VudHVyeVZpZXcsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgZm9ybWF0WWVhcjogZm9ybWF0WWVhclxuICAgICAgICAgICAgfSwgY29tbW9uUHJvcHMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX2Zvcm1hdFllYXIgPSB0aGlzLnByb3BzLmZvcm1hdFllYXI7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjYWRlVmlldywgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBmb3JtYXRZZWFyOiBfZm9ybWF0WWVhclxuICAgICAgICAgICAgfSwgY29tbW9uUHJvcHMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZm9ybWF0TW9udGggPSBfdGhpcyRwcm9wczUuZm9ybWF0TW9udGgsXG4gICAgICAgICAgICAgICAgZm9ybWF0TW9udGhZZWFyID0gX3RoaXMkcHJvcHM1LmZvcm1hdE1vbnRoWWVhcjtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChZZWFyVmlldywgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBmb3JtYXRNb250aDogZm9ybWF0TW9udGgsXG4gICAgICAgICAgICAgIGZvcm1hdE1vbnRoWWVhcjogZm9ybWF0TW9udGhZZWFyXG4gICAgICAgICAgICB9LCBjb21tb25Qcm9wcykpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZm9ybWF0TG9uZ0RhdGUgPSBfdGhpcyRwcm9wczYuZm9ybWF0TG9uZ0RhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0U2hvcnRXZWVrZGF5ID0gX3RoaXMkcHJvcHM2LmZvcm1hdFNob3J0V2Vla2RheSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrV2Vla051bWJlciA9IF90aGlzJHByb3BzNi5vbkNsaWNrV2Vla051bWJlcixcbiAgICAgICAgICAgICAgICBzaG93RG91YmxlVmlldyA9IF90aGlzJHByb3BzNi5zaG93RG91YmxlVmlldyxcbiAgICAgICAgICAgICAgICBzaG93Rml4ZWROdW1iZXJPZldlZWtzID0gX3RoaXMkcHJvcHM2LnNob3dGaXhlZE51bWJlck9mV2Vla3MsXG4gICAgICAgICAgICAgICAgc2hvd05laWdoYm9yaW5nTW9udGggPSBfdGhpcyRwcm9wczYuc2hvd05laWdoYm9yaW5nTW9udGgsXG4gICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzID0gX3RoaXMkcHJvcHM2LnNob3dXZWVrTnVtYmVycztcbiAgICAgICAgICAgIHZhciBvbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZTtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb250aFZpZXcsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgY2FsZW5kYXJUeXBlOiBjYWxlbmRhclR5cGUsXG4gICAgICAgICAgICAgIGZvcm1hdExvbmdEYXRlOiBmb3JtYXRMb25nRGF0ZSxcbiAgICAgICAgICAgICAgZm9ybWF0U2hvcnRXZWVrZGF5OiBmb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgICAgICAgICAgIG9uQ2xpY2tXZWVrTnVtYmVyOiBvbkNsaWNrV2Vla051bWJlcixcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiBzZWxlY3RSYW5nZSA/IG9uTW91c2VMZWF2ZSA6IG51bGwsXG4gICAgICAgICAgICAgIHNob3dGaXhlZE51bWJlck9mV2Vla3M6IHNob3dGaXhlZE51bWJlck9mV2Vla3MgfHwgc2hvd0RvdWJsZVZpZXcsXG4gICAgICAgICAgICAgIHNob3dOZWlnaGJvcmluZ01vbnRoOiBzaG93TmVpZ2hib3JpbmdNb250aCxcbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiBzaG93V2Vla051bWJlcnNcbiAgICAgICAgICAgIH0sIGNvbW1vblByb3BzKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2aWV3OiBcIi5jb25jYXQodmlldywgXCIuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTmF2aWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOYXZpZ2F0aW9uKCkge1xuICAgICAgdmFyIHNob3dOYXZpZ2F0aW9uID0gdGhpcy5wcm9wcy5zaG93TmF2aWdhdGlvbjtcblxuICAgICAgaWYgKCFzaG93TmF2aWdhdGlvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IHRoaXMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICAgIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0TW9udGhZZWFyID0gX3RoaXMkcHJvcHM3LmZvcm1hdE1vbnRoWWVhcixcbiAgICAgICAgICBmb3JtYXRZZWFyID0gX3RoaXMkcHJvcHM3LmZvcm1hdFllYXIsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHM3LmxvY2FsZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM3Lm1heERhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzNy5taW5EYXRlLFxuICAgICAgICAgIG5hdmlnYXRpb25BcmlhTGFiZWwgPSBfdGhpcyRwcm9wczcubmF2aWdhdGlvbkFyaWFMYWJlbCxcbiAgICAgICAgICBuYXZpZ2F0aW9uTGFiZWwgPSBfdGhpcyRwcm9wczcubmF2aWdhdGlvbkxhYmVsLFxuICAgICAgICAgIG5leHQyQXJpYUxhYmVsID0gX3RoaXMkcHJvcHM3Lm5leHQyQXJpYUxhYmVsLFxuICAgICAgICAgIG5leHQyTGFiZWwgPSBfdGhpcyRwcm9wczcubmV4dDJMYWJlbCxcbiAgICAgICAgICBuZXh0QXJpYUxhYmVsID0gX3RoaXMkcHJvcHM3Lm5leHRBcmlhTGFiZWwsXG4gICAgICAgICAgbmV4dExhYmVsID0gX3RoaXMkcHJvcHM3Lm5leHRMYWJlbCxcbiAgICAgICAgICBwcmV2MkFyaWFMYWJlbCA9IF90aGlzJHByb3BzNy5wcmV2MkFyaWFMYWJlbCxcbiAgICAgICAgICBwcmV2MkxhYmVsID0gX3RoaXMkcHJvcHM3LnByZXYyTGFiZWwsXG4gICAgICAgICAgcHJldkFyaWFMYWJlbCA9IF90aGlzJHByb3BzNy5wcmV2QXJpYUxhYmVsLFxuICAgICAgICAgIHByZXZMYWJlbCA9IF90aGlzJHByb3BzNy5wcmV2TGFiZWwsXG4gICAgICAgICAgc2hvd0RvdWJsZVZpZXcgPSBfdGhpcyRwcm9wczcuc2hvd0RvdWJsZVZpZXc7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbiwge1xuICAgICAgICBhY3RpdmVTdGFydERhdGU6IGFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgICAgZHJpbGxVcDogdGhpcy5kcmlsbFVwLFxuICAgICAgICBmb3JtYXRNb250aFllYXI6IGZvcm1hdE1vbnRoWWVhcixcbiAgICAgICAgZm9ybWF0WWVhcjogZm9ybWF0WWVhcixcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICAgIG5hdmlnYXRpb25BcmlhTGFiZWw6IG5hdmlnYXRpb25BcmlhTGFiZWwsXG4gICAgICAgIG5hdmlnYXRpb25MYWJlbDogbmF2aWdhdGlvbkxhYmVsLFxuICAgICAgICBuZXh0MkFyaWFMYWJlbDogbmV4dDJBcmlhTGFiZWwsXG4gICAgICAgIG5leHQyTGFiZWw6IG5leHQyTGFiZWwsXG4gICAgICAgIG5leHRBcmlhTGFiZWw6IG5leHRBcmlhTGFiZWwsXG4gICAgICAgIG5leHRMYWJlbDogbmV4dExhYmVsLFxuICAgICAgICBwcmV2MkFyaWFMYWJlbDogcHJldjJBcmlhTGFiZWwsXG4gICAgICAgIHByZXYyTGFiZWw6IHByZXYyTGFiZWwsXG4gICAgICAgIHByZXZBcmlhTGFiZWw6IHByZXZBcmlhTGFiZWwsXG4gICAgICAgIHByZXZMYWJlbDogcHJldkxhYmVsLFxuICAgICAgICBzZXRBY3RpdmVTdGFydERhdGU6IHRoaXMuc2V0QWN0aXZlU3RhcnREYXRlLFxuICAgICAgICBzaG93RG91YmxlVmlldzogc2hvd0RvdWJsZVZpZXcsXG4gICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgIHZpZXdzOiB2aWV3c1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczguY2xhc3NOYW1lLFxuICAgICAgICAgIGlucHV0UmVmID0gX3RoaXMkcHJvcHM4LmlucHV0UmVmLFxuICAgICAgICAgIHNlbGVjdFJhbmdlID0gX3RoaXMkcHJvcHM4LnNlbGVjdFJhbmdlLFxuICAgICAgICAgIHNob3dEb3VibGVWaWV3ID0gX3RoaXMkcHJvcHM4LnNob3dEb3VibGVWaWV3O1xuICAgICAgdmFyIG9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZUFycmF5ID0gW10uY29uY2F0KHZhbHVlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc05hbWVzKGJhc2VDbGFzc05hbWUsIHNlbGVjdFJhbmdlICYmIHZhbHVlQXJyYXkubGVuZ3RoID09PSAxICYmIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLS1zZWxlY3RSYW5nZVwiKSwgc2hvd0RvdWJsZVZpZXcgJiYgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItLWRvdWJsZVZpZXdcIiksIGNsYXNzTmFtZSksXG4gICAgICAgIHJlZjogaW5wdXRSZWZcbiAgICAgIH0sIHRoaXMucmVuZGVyTmF2aWdhdGlvbigpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX3ZpZXdDb250YWluZXJcIiksXG4gICAgICAgIG9uQmx1cjogc2VsZWN0UmFuZ2UgPyBvbk1vdXNlTGVhdmUgOiBudWxsLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHNlbGVjdFJhbmdlID8gb25Nb3VzZUxlYXZlIDogbnVsbFxuICAgICAgfSwgdGhpcy5yZW5kZXJDb250ZW50KCksIHNob3dEb3VibGVWaWV3ICYmIHRoaXMucmVuZGVyQ29udGVudCh0cnVlKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhY3RpdmVTdGFydERhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBhY3RpdmVTdGFydERhdGVQcm9wcyA9IHRoaXMucHJvcHMuYWN0aXZlU3RhcnREYXRlO1xuICAgICAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS5hY3RpdmVTdGFydERhdGU7XG4gICAgICByZXR1cm4gYWN0aXZlU3RhcnREYXRlUHJvcHMgfHwgYWN0aXZlU3RhcnREYXRlU3RhdGUgfHwgZ2V0SW5pdGlhbEFjdGl2ZVN0YXJ0RGF0ZSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNlbGVjdFJhbmdlID0gX3RoaXMkcHJvcHM5LnNlbGVjdFJhbmdlLFxuICAgICAgICAgIHZhbHVlUHJvcHMgPSBfdGhpcyRwcm9wczkudmFsdWU7XG4gICAgICB2YXIgdmFsdWVTdGF0ZSA9IHRoaXMuc3RhdGUudmFsdWU7IC8vIEluIHRoZSBtaWRkbGUgb2YgcmFuZ2Ugc2VsZWN0aW9uLCB1c2UgdmFsdWUgZnJvbSBzdGF0ZVxuXG4gICAgICBpZiAoc2VsZWN0UmFuZ2UgJiYgZ2V0SXNTaW5nbGVWYWx1ZSh2YWx1ZVN0YXRlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWVTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlUHJvcHMgIT09IHVuZGVmaW5lZCA/IHZhbHVlUHJvcHMgOiB2YWx1ZVN0YXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBtYXhEZXRhaWwgPSB0aGlzLnByb3BzLm1heERldGFpbDtcbiAgICAgIHJldHVybiBnZXRWYWx1ZVR5cGUobWF4RGV0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmlld1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG1pbkRldGFpbCA9IF90aGlzJHByb3BzMTAubWluRGV0YWlsLFxuICAgICAgICAgIG1heERldGFpbCA9IF90aGlzJHByb3BzMTAubWF4RGV0YWlsLFxuICAgICAgICAgIHZpZXdQcm9wcyA9IF90aGlzJHByb3BzMTAudmlldztcbiAgICAgIHZhciB2aWV3U3RhdGUgPSB0aGlzLnN0YXRlLnZpZXc7XG4gICAgICByZXR1cm4gZ2V0Vmlldyh2aWV3UHJvcHMgfHwgdmlld1N0YXRlLCBtaW5EZXRhaWwsIG1heERldGFpbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZpZXdzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWluRGV0YWlsID0gX3RoaXMkcHJvcHMxMS5taW5EZXRhaWwsXG4gICAgICAgICAgbWF4RGV0YWlsID0gX3RoaXMkcHJvcHMxMS5tYXhEZXRhaWw7XG4gICAgICByZXR1cm4gZ2V0TGltaXRlZFZpZXdzKG1pbkRldGFpbCwgbWF4RGV0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaG92ZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZWxlY3RSYW5nZSA9IHRoaXMucHJvcHMuc2VsZWN0UmFuZ2U7XG4gICAgICB2YXIgaG92ZXIgPSB0aGlzLnN0YXRlLmhvdmVyO1xuICAgICAgcmV0dXJuIHNlbGVjdFJhbmdlID8gaG92ZXIgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkcmlsbERvd25BdmFpbGFibGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciB2aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgIHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgIHJldHVybiB2aWV3cy5pbmRleE9mKHZpZXcpIDwgdmlld3MubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHJpbGxVcEF2YWlsYWJsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgcmV0dXJuIHZpZXdzLmluZGV4T2YodmlldykgPiAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWxlbmRhcjtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgQ2FsZW5kYXIgYXMgZGVmYXVsdCB9O1xuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBtYXhEZXRhaWw6ICdtb250aCcsXG4gIG1pbkRldGFpbDogJ2NlbnR1cnknLFxuICByZXR1cm5WYWx1ZTogJ3N0YXJ0JyxcbiAgc2hvd05hdmlnYXRpb246IHRydWUsXG4gIHNob3dOZWlnaGJvcmluZ01vbnRoOiB0cnVlXG59O1xudmFyIGlzQWN0aXZlU3RhcnREYXRlID0gUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSk7XG52YXIgaXNMb29zZVZhbHVlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgaXNWYWx1ZV0pO1xuQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICBhY3RpdmVTdGFydERhdGU6IGlzQWN0aXZlU3RhcnREYXRlLFxuICBhbGxvd1BhcnRpYWxSYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNhbGVuZGFyVHlwZTogaXNDYWxlbmRhclR5cGUsXG4gIGNsYXNzTmFtZTogaXNDbGFzc05hbWUsXG4gIGRlZmF1bHRBY3RpdmVTdGFydERhdGU6IGlzQWN0aXZlU3RhcnREYXRlLFxuICBkZWZhdWx0VmFsdWU6IGlzTG9vc2VWYWx1ZSxcbiAgZGVmYXVsdFZpZXc6IGlzVmlldyxcbiAgZm9ybWF0TG9uZ0RhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtYXRNb250aDogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdE1vbnRoWWVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdFNob3J0V2Vla2RheTogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdFllYXI6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dFJlZjogaXNSZWYsXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogaXNNYXhEYXRlLFxuICBtYXhEZXRhaWw6IFByb3BUeXBlcy5vbmVPZihhbGxWaWV3cyksXG4gIG1pbkRhdGU6IGlzTWluRGF0ZSxcbiAgbWluRGV0YWlsOiBQcm9wVHlwZXMub25lT2YoYWxsVmlld3MpLFxuICBuYXZpZ2F0aW9uQXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYXZpZ2F0aW9uTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICBuZXh0MkFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmV4dDJMYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIG5leHRBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5leHRMYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIG9uQWN0aXZlU3RhcnREYXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrRGF5OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja0RlY2FkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2tNb250aDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2tXZWVrTnVtYmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja1llYXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyaWxsRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRHJpbGxVcDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmlld0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHByZXYyQXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmV2MkxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgcHJldkFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldkxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgcmV0dXJuVmFsdWU6IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2VuZCcsICdyYW5nZSddKSxcbiAgc2VsZWN0UmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBzaG93RG91YmxlVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGaXhlZE51bWJlck9mV2Vla3M6IFByb3BUeXBlcy5ib29sLFxuICBzaG93TmF2aWdhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dOZWlnaGJvcmluZ01vbnRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGlsZUNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIGlzQ2xhc3NOYW1lXSksXG4gIHRpbGVDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdGlsZURpc2FibGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgdmFsdWU6IGlzTG9vc2VWYWx1ZSxcbiAgdmlldzogaXNWaWV3XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VXNlckxvY2FsZSB9IGZyb20gJ2dldC11c2VyLWxvY2FsZSc7XG5pbXBvcnQgeyBnZXRDZW50dXJ5TGFiZWwsIGdldERlY2FkZUxhYmVsLCBnZXRCZWdpbk5leHQsIGdldEJlZ2luTmV4dDIsIGdldEJlZ2luUHJldmlvdXMsIGdldEJlZ2luUHJldmlvdXMyLCBnZXRFbmRQcmV2aW91cywgZ2V0RW5kUHJldmlvdXMyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IGZvcm1hdE1vbnRoWWVhciBhcyBkZWZhdWx0Rm9ybWF0TW9udGhZZWFyLCBmb3JtYXRZZWFyIGFzIGRlZmF1bHRGb3JtYXRZZWFyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IHsgaXNWaWV3LCBpc1ZpZXdzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG52YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX19uYXZpZ2F0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oX3JlZikge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gX3JlZi5hY3RpdmVTdGFydERhdGUsXG4gICAgICBkcmlsbFVwID0gX3JlZi5kcmlsbFVwLFxuICAgICAgX3JlZiRmb3JtYXRNb250aFllYXIgPSBfcmVmLmZvcm1hdE1vbnRoWWVhcixcbiAgICAgIGZvcm1hdE1vbnRoWWVhciA9IF9yZWYkZm9ybWF0TW9udGhZZWFyID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9ybWF0TW9udGhZZWFyIDogX3JlZiRmb3JtYXRNb250aFllYXIsXG4gICAgICBfcmVmJGZvcm1hdFllYXIgPSBfcmVmLmZvcm1hdFllYXIsXG4gICAgICBmb3JtYXRZZWFyID0gX3JlZiRmb3JtYXRZZWFyID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9ybWF0WWVhciA6IF9yZWYkZm9ybWF0WWVhcixcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBfcmVmJG5hdmlnYXRpb25BcmlhTGEgPSBfcmVmLm5hdmlnYXRpb25BcmlhTGFiZWwsXG4gICAgICBuYXZpZ2F0aW9uQXJpYUxhYmVsID0gX3JlZiRuYXZpZ2F0aW9uQXJpYUxhID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkbmF2aWdhdGlvbkFyaWFMYSxcbiAgICAgIG5hdmlnYXRpb25MYWJlbCA9IF9yZWYubmF2aWdhdGlvbkxhYmVsLFxuICAgICAgX3JlZiRuZXh0MkFyaWFMYWJlbCA9IF9yZWYubmV4dDJBcmlhTGFiZWwsXG4gICAgICBuZXh0MkFyaWFMYWJlbCA9IF9yZWYkbmV4dDJBcmlhTGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRuZXh0MkFyaWFMYWJlbCxcbiAgICAgIF9yZWYkbmV4dDJMYWJlbCA9IF9yZWYubmV4dDJMYWJlbCxcbiAgICAgIG5leHQyTGFiZWwgPSBfcmVmJG5leHQyTGFiZWwgPT09IHZvaWQgMCA/ICfCuycgOiBfcmVmJG5leHQyTGFiZWwsXG4gICAgICBfcmVmJG5leHRBcmlhTGFiZWwgPSBfcmVmLm5leHRBcmlhTGFiZWwsXG4gICAgICBuZXh0QXJpYUxhYmVsID0gX3JlZiRuZXh0QXJpYUxhYmVsID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkbmV4dEFyaWFMYWJlbCxcbiAgICAgIF9yZWYkbmV4dExhYmVsID0gX3JlZi5uZXh0TGFiZWwsXG4gICAgICBuZXh0TGFiZWwgPSBfcmVmJG5leHRMYWJlbCA9PT0gdm9pZCAwID8gJ+KAuicgOiBfcmVmJG5leHRMYWJlbCxcbiAgICAgIF9yZWYkcHJldjJBcmlhTGFiZWwgPSBfcmVmLnByZXYyQXJpYUxhYmVsLFxuICAgICAgcHJldjJBcmlhTGFiZWwgPSBfcmVmJHByZXYyQXJpYUxhYmVsID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkcHJldjJBcmlhTGFiZWwsXG4gICAgICBfcmVmJHByZXYyTGFiZWwgPSBfcmVmLnByZXYyTGFiZWwsXG4gICAgICBwcmV2MkxhYmVsID0gX3JlZiRwcmV2MkxhYmVsID09PSB2b2lkIDAgPyAnwqsnIDogX3JlZiRwcmV2MkxhYmVsLFxuICAgICAgX3JlZiRwcmV2QXJpYUxhYmVsID0gX3JlZi5wcmV2QXJpYUxhYmVsLFxuICAgICAgcHJldkFyaWFMYWJlbCA9IF9yZWYkcHJldkFyaWFMYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHByZXZBcmlhTGFiZWwsXG4gICAgICBfcmVmJHByZXZMYWJlbCA9IF9yZWYucHJldkxhYmVsLFxuICAgICAgcHJldkxhYmVsID0gX3JlZiRwcmV2TGFiZWwgPT09IHZvaWQgMCA/ICfigLknIDogX3JlZiRwcmV2TGFiZWwsXG4gICAgICBzZXRBY3RpdmVTdGFydERhdGUgPSBfcmVmLnNldEFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIHNob3dEb3VibGVWaWV3ID0gX3JlZi5zaG93RG91YmxlVmlldyxcbiAgICAgIHZpZXcgPSBfcmVmLnZpZXcsXG4gICAgICB2aWV3cyA9IF9yZWYudmlld3M7XG4gIHZhciBkcmlsbFVwQXZhaWxhYmxlID0gdmlld3MuaW5kZXhPZih2aWV3KSA+IDA7XG4gIHZhciBzaG91bGRTaG93UHJldk5leHQyQnV0dG9ucyA9IHZpZXcgIT09ICdjZW50dXJ5JztcbiAgdmFyIHByZXZpb3VzQWN0aXZlU3RhcnREYXRlID0gZ2V0QmVnaW5QcmV2aW91cyh2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgcHJldmlvdXNBY3RpdmVTdGFydERhdGUyID0gc2hvdWxkU2hvd1ByZXZOZXh0MkJ1dHRvbnMgJiYgZ2V0QmVnaW5QcmV2aW91czIodmlldywgYWN0aXZlU3RhcnREYXRlKTtcbiAgdmFyIG5leHRBY3RpdmVTdGFydERhdGUgPSBnZXRCZWdpbk5leHQodmlldywgYWN0aXZlU3RhcnREYXRlKTtcbiAgdmFyIG5leHRBY3RpdmVTdGFydERhdGUyID0gc2hvdWxkU2hvd1ByZXZOZXh0MkJ1dHRvbnMgJiYgZ2V0QmVnaW5OZXh0Mih2aWV3LCBhY3RpdmVTdGFydERhdGUpO1xuXG4gIHZhciBwcmV2QnV0dG9uRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByZXZpb3VzQWN0aXZlU3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgPCAxMDAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNBY3RpdmVFbmREYXRlID0gZ2V0RW5kUHJldmlvdXModmlldywgYWN0aXZlU3RhcnREYXRlKTtcbiAgICByZXR1cm4gbWluRGF0ZSAmJiBtaW5EYXRlID49IHByZXZpb3VzQWN0aXZlRW5kRGF0ZTtcbiAgfSgpO1xuXG4gIHZhciBwcmV2MkJ1dHRvbkRpc2FibGVkID0gc2hvdWxkU2hvd1ByZXZOZXh0MkJ1dHRvbnMgJiYgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZTIuZ2V0RnVsbFllYXIoKSA8IDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c0FjdGl2ZUVuZERhdGUgPSBnZXRFbmRQcmV2aW91czIodmlldywgYWN0aXZlU3RhcnREYXRlKTtcbiAgICByZXR1cm4gbWluRGF0ZSAmJiBtaW5EYXRlID49IHByZXZpb3VzQWN0aXZlRW5kRGF0ZTtcbiAgfSgpO1xuXG4gIHZhciBuZXh0QnV0dG9uRGlzYWJsZWQgPSBtYXhEYXRlICYmIG1heERhdGUgPD0gbmV4dEFjdGl2ZVN0YXJ0RGF0ZTtcbiAgdmFyIG5leHQyQnV0dG9uRGlzYWJsZWQgPSBzaG91bGRTaG93UHJldk5leHQyQnV0dG9ucyAmJiBtYXhEYXRlICYmIG1heERhdGUgPD0gbmV4dEFjdGl2ZVN0YXJ0RGF0ZTI7XG5cbiAgZnVuY3Rpb24gb25DbGlja1ByZXZpb3VzKCkge1xuICAgIHNldEFjdGl2ZVN0YXJ0RGF0ZShwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrUHJldmlvdXMyKCkge1xuICAgIHNldEFjdGl2ZVN0YXJ0RGF0ZShwcmV2aW91c0FjdGl2ZVN0YXJ0RGF0ZTIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGlja05leHQoKSB7XG4gICAgc2V0QWN0aXZlU3RhcnREYXRlKG5leHRBY3RpdmVTdGFydERhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGlja05leHQyKCkge1xuICAgIHNldEFjdGl2ZVN0YXJ0RGF0ZShuZXh0QWN0aXZlU3RhcnREYXRlMik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJMYWJlbChkYXRlKSB7XG4gICAgdmFyIGxhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgICAgIHJldHVybiBnZXRDZW50dXJ5TGFiZWwobG9jYWxlLCBmb3JtYXRZZWFyLCBkYXRlKTtcblxuICAgICAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgICAgIHJldHVybiBnZXREZWNhZGVMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGRhdGUpO1xuXG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHJldHVybiBmb3JtYXRZZWFyKGxvY2FsZSwgZGF0ZSk7XG5cbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHJldHVybiBmb3JtYXRNb250aFllYXIobG9jYWxlLCBkYXRlKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmlldzogXCIuY29uY2F0KHZpZXcsIFwiLlwiKSk7XG4gICAgICB9XG4gICAgfSgpO1xuXG4gICAgcmV0dXJuIG5hdmlnYXRpb25MYWJlbCA/IG5hdmlnYXRpb25MYWJlbCh7XG4gICAgICBkYXRlOiBkYXRlLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgZ2V0VXNlckxvY2FsZSgpLFxuICAgICAgdmlldzogdmlld1xuICAgIH0pIDogbGFiZWw7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCdXR0b24oKSB7XG4gICAgdmFyIGxhYmVsQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIl9fbGFiZWxcIik7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBuYXZpZ2F0aW9uQXJpYUxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBsYWJlbENsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkOiAhZHJpbGxVcEF2YWlsYWJsZSxcbiAgICAgIG9uQ2xpY2s6IGRyaWxsVXAsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmbGV4R3JvdzogMVxuICAgICAgfSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChsYWJlbENsYXNzTmFtZSwgXCJfX2xhYmVsVGV4dCBcIikuY29uY2F0KGxhYmVsQ2xhc3NOYW1lLCBcIl9fbGFiZWxUZXh0LS1mcm9tXCIpXG4gICAgfSwgcmVuZGVyTGFiZWwoYWN0aXZlU3RhcnREYXRlKSksIHNob3dEb3VibGVWaWV3ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChsYWJlbENsYXNzTmFtZSwgXCJfX2RpdmlkZXJcIilcbiAgICB9LCAnICcsIFwiXFx1MjAxM1wiLCAnICcpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChsYWJlbENsYXNzTmFtZSwgXCJfX2xhYmVsVGV4dCBcIikuY29uY2F0KGxhYmVsQ2xhc3NOYW1lLCBcIl9fbGFiZWxUZXh0LS10b1wiKVxuICAgIH0sIHJlbmRlckxhYmVsKG5leHRBY3RpdmVTdGFydERhdGUpKSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfVxuICB9LCBwcmV2MkxhYmVsICE9PSBudWxsICYmIHNob3VsZFNob3dQcmV2TmV4dDJCdXR0b25zICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogcHJldjJBcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19hcnJvdyBcIikuY29uY2F0KGNsYXNzTmFtZSwgXCJfX3ByZXYyLWJ1dHRvblwiKSxcbiAgICBkaXNhYmxlZDogcHJldjJCdXR0b25EaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrUHJldmlvdXMyLFxuICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgfSwgcHJldjJMYWJlbCksIHByZXZMYWJlbCAhPT0gbnVsbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IHByZXZBcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19hcnJvdyBcIikuY29uY2F0KGNsYXNzTmFtZSwgXCJfX3ByZXYtYnV0dG9uXCIpLFxuICAgIGRpc2FibGVkOiBwcmV2QnV0dG9uRGlzYWJsZWQsXG4gICAgb25DbGljazogb25DbGlja1ByZXZpb3VzLFxuICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgfSwgcHJldkxhYmVsKSwgcmVuZGVyQnV0dG9uKCksIG5leHRMYWJlbCAhPT0gbnVsbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IG5leHRBcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19hcnJvdyBcIikuY29uY2F0KGNsYXNzTmFtZSwgXCJfX25leHQtYnV0dG9uXCIpLFxuICAgIGRpc2FibGVkOiBuZXh0QnV0dG9uRGlzYWJsZWQsXG4gICAgb25DbGljazogb25DbGlja05leHQsXG4gICAgdHlwZTogXCJidXR0b25cIlxuICB9LCBuZXh0TGFiZWwpLCBuZXh0MkxhYmVsICE9PSBudWxsICYmIHNob3VsZFNob3dQcmV2TmV4dDJCdXR0b25zICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogbmV4dDJBcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19hcnJvdyBcIikuY29uY2F0KGNsYXNzTmFtZSwgXCJfX25leHQyLWJ1dHRvblwiKSxcbiAgICBkaXNhYmxlZDogbmV4dDJCdXR0b25EaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrTmV4dDIsXG4gICAgdHlwZTogXCJidXR0b25cIlxuICB9LCBuZXh0MkxhYmVsKSk7XG59XG5OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlU3RhcnREYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBkcmlsbFVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBmb3JtYXRNb250aFllYXI6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtYXRZZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG5hdmlnYXRpb25BcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hdmlnYXRpb25MYWJlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG5leHQyQXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuZXh0MkxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgbmV4dEFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmV4dExhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgcHJldjJBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZXYyTGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBwcmV2QXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmV2TGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBzZXRBY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dEb3VibGVWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlldzogaXNWaWV3LmlzUmVxdWlyZWQsXG4gIHZpZXdzOiBpc1ZpZXdzLmlzUmVxdWlyZWRcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWNhZGVzIGZyb20gJy4vQ2VudHVyeVZpZXcvRGVjYWRlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZW50dXJ5Vmlldyhwcm9wcykge1xuICBmdW5jdGlvbiByZW5kZXJEZWNhZGVzKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWNhZGVzLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fY2VudHVyeS12aWV3XCJcbiAgfSwgcmVuZGVyRGVjYWRlcygpKTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXREZWNhZGVTdGFydCwgZ2V0RGVjYWRlRW5kIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlIGZyb20gJy4uL1RpbGUnO1xuaW1wb3J0IHsgZ2V0RGVjYWRlTGFiZWwgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXMnO1xuaW1wb3J0IHsgZm9ybWF0WWVhciBhcyBkZWZhdWx0Rm9ybWF0WWVhciB9IGZyb20gJy4uL3NoYXJlZC9kYXRlRm9ybWF0dGVyJztcbmltcG9ydCB7IHRpbGVQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xudmFyIGNsYXNzTmFtZSA9ICdyZWFjdC1jYWxlbmRhcl9fY2VudHVyeS12aWV3X19kZWNhZGVzX19kZWNhZGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjYWRlKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBfcmVmJGZvcm1hdFllYXIgPSBfcmVmLmZvcm1hdFllYXIsXG4gICAgICBmb3JtYXRZZWFyID0gX3JlZiRmb3JtYXRZZWFyID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9ybWF0WWVhciA6IF9yZWYkZm9ybWF0WWVhcixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3Nlc1wiLCBcImZvcm1hdFllYXJcIl0pO1xuXG4gIHZhciBkYXRlID0gb3RoZXJQcm9wcy5kYXRlLFxuICAgICAgbG9jYWxlID0gb3RoZXJQcm9wcy5sb2NhbGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIGNsYXNzZXM6IFtdLmNvbmNhdChjbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgIG1heERhdGVUcmFuc2Zvcm06IGdldERlY2FkZUVuZCxcbiAgICBtaW5EYXRlVHJhbnNmb3JtOiBnZXREZWNhZGVTdGFydCxcbiAgICB2aWV3OiBcImNlbnR1cnlcIlxuICB9KSwgZ2V0RGVjYWRlTGFiZWwobG9jYWxlLCBmb3JtYXRZZWFyLCBkYXRlKSk7XG59XG5EZWNhZGUucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aWxlUHJvcHMpLCB7fSwge1xuICBmb3JtYXRZZWFyOiBQcm9wVHlwZXMuZnVuY1xufSk7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREZWNhZGVTdGFydCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgVGlsZUdyb3VwIGZyb20gJy4uL1RpbGVHcm91cCc7XG5pbXBvcnQgRGVjYWRlIGZyb20gJy4vRGVjYWRlJztcbmltcG9ydCB7IGdldEJlZ2luT2ZDZW50dXJ5WWVhciB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyB0aWxlR3JvdXBQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjYWRlcyhwcm9wcykge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gcHJvcHMuYWN0aXZlU3RhcnREYXRlO1xuICB2YXIgc3RhcnQgPSBnZXRCZWdpbk9mQ2VudHVyeVllYXIoYWN0aXZlU3RhcnREYXRlKTtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgOTk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlR3JvdXAsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fY2VudHVyeS12aWV3X19kZWNhZGVzXCIsXG4gICAgZGF0ZVRyYW5zZm9ybTogZ2V0RGVjYWRlU3RhcnQsXG4gICAgZGF0ZVR5cGU6IFwiZGVjYWRlXCIsXG4gICAgZW5kOiBlbmQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHN0ZXA6IDEwLFxuICAgIHRpbGU6IERlY2FkZVxuICB9KSk7XG59XG5EZWNhZGVzLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoe30sIHRpbGVHcm91cFByb3BzKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFllYXJzIGZyb20gJy4vRGVjYWRlVmlldy9ZZWFycyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWNhZGVWaWV3KHByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlbmRlclllYXJzKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChZZWFycywgcHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY2FsZW5kYXJfX2RlY2FkZS12aWV3XCJcbiAgfSwgcmVuZGVyWWVhcnMoKSk7XG59IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0WWVhclN0YXJ0LCBnZXRZZWFyRW5kIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCBUaWxlIGZyb20gJy4uL1RpbGUnO1xuaW1wb3J0IHsgZm9ybWF0WWVhciBhcyBkZWZhdWx0Rm9ybWF0WWVhciB9IGZyb20gJy4uL3NoYXJlZC9kYXRlRm9ybWF0dGVyJztcbmltcG9ydCB7IHRpbGVQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xudmFyIGNsYXNzTmFtZSA9ICdyZWFjdC1jYWxlbmRhcl9fZGVjYWRlLXZpZXdfX3llYXJzX195ZWFyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFllYXIoX3JlZikge1xuICB2YXIgY2xhc3NlcyA9IF9yZWYuY2xhc3NlcyxcbiAgICAgIF9yZWYkZm9ybWF0WWVhciA9IF9yZWYuZm9ybWF0WWVhcixcbiAgICAgIGZvcm1hdFllYXIgPSBfcmVmJGZvcm1hdFllYXIgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRZZWFyIDogX3JlZiRmb3JtYXRZZWFyLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc2VzXCIsIFwiZm9ybWF0WWVhclwiXSk7XG5cbiAgdmFyIGRhdGUgPSBvdGhlclByb3BzLmRhdGUsXG4gICAgICBsb2NhbGUgPSBvdGhlclByb3BzLmxvY2FsZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGUsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgY2xhc3NlczogW10uY29uY2F0KGNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgbWF4RGF0ZVRyYW5zZm9ybTogZ2V0WWVhckVuZCxcbiAgICBtaW5EYXRlVHJhbnNmb3JtOiBnZXRZZWFyU3RhcnQsXG4gICAgdmlldzogXCJkZWNhZGVcIlxuICB9KSwgZm9ybWF0WWVhcihsb2NhbGUsIGRhdGUpKTtcbn1cblllYXIucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aWxlUHJvcHMpLCB7fSwge1xuICBmb3JtYXRZZWFyOiBQcm9wVHlwZXMuZnVuY1xufSk7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGlsZUdyb3VwIGZyb20gJy4uL1RpbGVHcm91cCc7XG5pbXBvcnQgWWVhciBmcm9tICcuL1llYXInO1xuaW1wb3J0IHsgZ2V0QmVnaW5PZkRlY2FkZVllYXIgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXMnO1xuaW1wb3J0IHsgdGlsZUdyb3VwUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFllYXJzKHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGU7XG4gIHZhciBzdGFydCA9IGdldEJlZ2luT2ZEZWNhZGVZZWFyKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gIHZhciBlbmQgPSBzdGFydCArIDk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlR3JvdXAsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9fZGVjYWRlLXZpZXdfX3llYXJzXCIsXG4gICAgZGF0ZVRyYW5zZm9ybTogZnVuY3Rpb24gZGF0ZVRyYW5zZm9ybSh5ZWFyKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgMCwgMSk7XG4gICAgfSxcbiAgICBkYXRlVHlwZTogXCJ5ZWFyXCIsXG4gICAgZW5kOiBlbmQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHRpbGU6IFllYXJcbiAgfSkpO1xufVxuWWVhcnMucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZCh7fSwgdGlsZUdyb3VwUHJvcHMpOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gdG9QZXJjZW50KG51bSkge1xuICByZXR1cm4gXCJcIi5jb25jYXQobnVtLCBcIiVcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsZXgoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbixcbiAgICAgIGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIG9mZnNldCA9IF9yZWYub2Zmc2V0LFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgd3JhcCA9IF9yZWYud3JhcCxcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXJlY3Rpb25cIiwgXCJjb3VudFwiLCBcIm9mZnNldFwiLCBcInN0eWxlXCIsIFwid3JhcFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBmbGV4V3JhcDogd3JhcCA/ICd3cmFwJyA6ICduby13cmFwJ1xuICAgIH0sIHN0eWxlKVxuICB9LCBvdGhlclByb3BzKSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY2hpbGQucHJvcHMpLCB7fSwge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZmxleEJhc2lzOiB0b1BlcmNlbnQoMTAwIC8gY291bnQpLFxuICAgICAgICBtYXhXaWR0aDogdG9QZXJjZW50KDEwMCAvIGNvdW50KSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgJiYgaW5kZXggPT09IDAgPyB0b1BlcmNlbnQoMTAwICogb2Zmc2V0IC8gY291bnQpIDogbnVsbFxuICAgICAgfVxuICAgIH0pKTtcbiAgfSkpO1xufVxuRmxleC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEYXlzIGZyb20gJy4vTW9udGhWaWV3L0RheXMnO1xuaW1wb3J0IFdlZWtkYXlzIGZyb20gJy4vTW9udGhWaWV3L1dlZWtkYXlzJztcbmltcG9ydCBXZWVrTnVtYmVycyBmcm9tICcuL01vbnRoVmlldy9XZWVrTnVtYmVycyc7XG5pbXBvcnQgeyBDQUxFTkRBUl9UWVBFUywgQ0FMRU5EQVJfVFlQRV9MT0NBTEVTIH0gZnJvbSAnLi9zaGFyZWQvY29uc3QnO1xuaW1wb3J0IHsgaXNDYWxlbmRhclR5cGUgfSBmcm9tICcuL3NoYXJlZC9wcm9wVHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDYWxlbmRhclR5cGVGcm9tTG9jYWxlKGxvY2FsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoQ0FMRU5EQVJfVFlQRV9MT0NBTEVTKS5maW5kKGZ1bmN0aW9uIChjYWxlbmRhclR5cGUpIHtcbiAgICByZXR1cm4gQ0FMRU5EQVJfVFlQRV9MT0NBTEVTW2NhbGVuZGFyVHlwZV0uaW5jbHVkZXMobG9jYWxlKTtcbiAgfSkgfHwgQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vbnRoVmlldyhwcm9wcykge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gcHJvcHMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyA9IHByb3BzLnNob3dGaXhlZE51bWJlck9mV2Vla3M7XG5cbiAgdmFyIF9wcm9wcyRjYWxlbmRhclR5cGUgPSBwcm9wcy5jYWxlbmRhclR5cGUsXG4gICAgICBjYWxlbmRhclR5cGUgPSBfcHJvcHMkY2FsZW5kYXJUeXBlID09PSB2b2lkIDAgPyBnZXRDYWxlbmRhclR5cGVGcm9tTG9jYWxlKGxvY2FsZSkgOiBfcHJvcHMkY2FsZW5kYXJUeXBlLFxuICAgICAgZm9ybWF0U2hvcnRXZWVrZGF5ID0gcHJvcHMuZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgICAgb25DbGlja1dlZWtOdW1iZXIgPSBwcm9wcy5vbkNsaWNrV2Vla051bWJlcixcbiAgICAgIHNob3dXZWVrTnVtYmVycyA9IHByb3BzLnNob3dXZWVrTnVtYmVycyxcbiAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNhbGVuZGFyVHlwZVwiLCBcImZvcm1hdFNob3J0V2Vla2RheVwiLCBcIm9uQ2xpY2tXZWVrTnVtYmVyXCIsIFwic2hvd1dlZWtOdW1iZXJzXCJdKTtcblxuICBmdW5jdGlvbiByZW5kZXJXZWVrZGF5cygpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2Vla2RheXMsIHtcbiAgICAgIGNhbGVuZGFyVHlwZTogY2FsZW5kYXJUeXBlLFxuICAgICAgZm9ybWF0U2hvcnRXZWVrZGF5OiBmb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJXZWVrTnVtYmVycygpIHtcbiAgICBpZiAoIXNob3dXZWVrTnVtYmVycykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdlZWtOdW1iZXJzLCB7XG4gICAgICBhY3RpdmVTdGFydERhdGU6IGFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGNhbGVuZGFyVHlwZTogY2FsZW5kYXJUeXBlLFxuICAgICAgb25DbGlja1dlZWtOdW1iZXI6IG9uQ2xpY2tXZWVrTnVtYmVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICBzaG93Rml4ZWROdW1iZXJPZldlZWtzOiBzaG93Rml4ZWROdW1iZXJPZldlZWtzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXlzLCBfZXh0ZW5kcyh7XG4gICAgICBjYWxlbmRhclR5cGU6IGNhbGVuZGFyVHlwZVxuICAgIH0sIGNoaWxkUHJvcHMpKTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX21vbnRoLXZpZXcnO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogW2NsYXNzTmFtZSwgc2hvd1dlZWtOdW1iZXJzID8gXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0td2Vla051bWJlcnNcIikgOiAnJ10uam9pbignICcpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICAgIH1cbiAgfSwgcmVuZGVyV2Vla051bWJlcnMoKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH0sIHJlbmRlcldlZWtkYXlzKCksIHJlbmRlckRheXMoKSkpKTtcbn1cbk1vbnRoVmlldy5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZVN0YXJ0RGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgY2FsZW5kYXJUeXBlOiBpc0NhbGVuZGFyVHlwZSxcbiAgZm9ybWF0U2hvcnRXZWVrZGF5OiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrV2Vla051bWJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dGaXhlZE51bWJlck9mV2Vla3M6IFByb3BUeXBlcy5ib29sLFxuICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sXG59OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldERhdGUsIGdldERheVN0YXJ0LCBnZXREYXlFbmQgfSBmcm9tICdAd29qdGVrbWFqL2RhdGUtdXRpbHMnO1xuaW1wb3J0IFRpbGUgZnJvbSAnLi4vVGlsZSc7XG5pbXBvcnQgeyBpc1dlZWtlbmQgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXMnO1xuaW1wb3J0IHsgZm9ybWF0TG9uZ0RhdGUgYXMgZGVmYXVsdEZvcm1hdExvbmdEYXRlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IHsgdGlsZVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG52YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX19tb250aC12aWV3X19kYXlzX19kYXknO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF5KF9yZWYpIHtcbiAgdmFyIF9yZWYkZm9ybWF0TG9uZ0RhdGUgPSBfcmVmLmZvcm1hdExvbmdEYXRlLFxuICAgICAgZm9ybWF0TG9uZ0RhdGUgPSBfcmVmJGZvcm1hdExvbmdEYXRlID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9ybWF0TG9uZ0RhdGUgOiBfcmVmJGZvcm1hdExvbmdEYXRlLFxuICAgICAgY2FsZW5kYXJUeXBlID0gX3JlZi5jYWxlbmRhclR5cGUsXG4gICAgICBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgY3VycmVudE1vbnRoSW5kZXggPSBfcmVmLmN1cnJlbnRNb250aEluZGV4LFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJmb3JtYXRMb25nRGF0ZVwiLCBcImNhbGVuZGFyVHlwZVwiLCBcImNsYXNzZXNcIiwgXCJjdXJyZW50TW9udGhJbmRleFwiXSk7XG5cbiAgdmFyIGRhdGUgPSBvdGhlclByb3BzLmRhdGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIGNsYXNzZXM6IFtdLmNvbmNhdChjbGFzc2VzLCBjbGFzc05hbWUsIGlzV2Vla2VuZChkYXRlLCBjYWxlbmRhclR5cGUpID8gXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0td2Vla2VuZFwiKSA6IG51bGwsIGRhdGUuZ2V0TW9udGgoKSAhPT0gY3VycmVudE1vbnRoSW5kZXggPyBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLS1uZWlnaGJvcmluZ01vbnRoXCIpIDogbnVsbCksXG4gICAgZm9ybWF0QWJicjogZm9ybWF0TG9uZ0RhdGUsXG4gICAgbWF4RGF0ZVRyYW5zZm9ybTogZ2V0RGF5RW5kLFxuICAgIG1pbkRhdGVUcmFuc2Zvcm06IGdldERheVN0YXJ0LFxuICAgIHZpZXc6IFwibW9udGhcIlxuICB9KSwgZ2V0RGF0ZShkYXRlKSk7XG59XG5EYXkucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aWxlUHJvcHMpLCB7fSwge1xuICBjdXJyZW50TW9udGhJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBmb3JtYXRMb25nRGF0ZTogUHJvcFR5cGVzLmZ1bmNcbn0pOyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldFllYXIsIGdldE1vbnRoLCBnZXREYXlzSW5Nb250aCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgVGlsZUdyb3VwIGZyb20gJy4uL1RpbGVHcm91cCc7XG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5JztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyBpc0NhbGVuZGFyVHlwZSwgdGlsZUdyb3VwUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERheXMocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZVN0YXJ0RGF0ZSA9IHByb3BzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGNhbGVuZGFyVHlwZSA9IHByb3BzLmNhbGVuZGFyVHlwZTtcblxuICB2YXIgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyA9IHByb3BzLnNob3dGaXhlZE51bWJlck9mV2Vla3MsXG4gICAgICBzaG93TmVpZ2hib3JpbmdNb250aCA9IHByb3BzLnNob3dOZWlnaGJvcmluZ01vbnRoLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wic2hvd0ZpeGVkTnVtYmVyT2ZXZWVrc1wiLCBcInNob3dOZWlnaGJvcmluZ01vbnRoXCJdKTtcblxuICB2YXIgeWVhciA9IGdldFllYXIoYWN0aXZlU3RhcnREYXRlKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBnZXRNb250aChhY3RpdmVTdGFydERhdGUpO1xuICB2YXIgaGFzRml4ZWROdW1iZXJPZldlZWtzID0gc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrcyB8fCBzaG93TmVpZ2hib3JpbmdNb250aDtcbiAgdmFyIGRheU9mV2VlayA9IGdldERheU9mV2VlayhhY3RpdmVTdGFydERhdGUsIGNhbGVuZGFyVHlwZSk7XG4gIHZhciBvZmZzZXQgPSBoYXNGaXhlZE51bWJlck9mV2Vla3MgPyAwIDogZGF5T2ZXZWVrO1xuICAvKipcbiAgICogRGVmaW5lcyBvbiB3aGljaCBkYXkgb2YgdGhlIG1vbnRoIHRoZSBncmlkIHNoYWxsIHN0YXJ0LiBJZiB3ZSBzaW1wbHkgc2hvdyBjdXJyZW50XG4gICAqIG1vbnRoLCB3ZSBvYnZpb3VzbHkgc3RhcnQgb24gZGF5IG9uZSwgYnV0IGlmIHNob3dOZWlnaGJvcmluZ01vbnRoIGlzIHNldCB0b1xuICAgKiB0cnVlLCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGJlZ2lubmluZyBvZiB0aGUgd2VlayB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aCBpcyBpbi5cbiAgICovXG5cbiAgdmFyIHN0YXJ0ID0gKGhhc0ZpeGVkTnVtYmVyT2ZXZWVrcyA/IC1kYXlPZldlZWsgOiAwKSArIDE7XG4gIC8qKlxuICAgKiBEZWZpbmVzIG9uIHdoaWNoIGRheSBvZiB0aGUgbW9udGggdGhlIGdyaWQgc2hhbGwgZW5kLiBJZiB3ZSBzaW1wbHkgc2hvdyBjdXJyZW50XG4gICAqIG1vbnRoLCB3ZSBuZWVkIHRvIHN0b3Agb24gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aCwgYnV0IGlmIHNob3dOZWlnaGJvcmluZ01vbnRoXG4gICAqIGlzIHNldCB0byB0cnVlLCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGVuZCBvZiB0aGUgd2VlayB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGlzIGluLlxuICAgKi9cblxuICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG93Rml4ZWROdW1iZXJPZldlZWtzKSB7XG4gICAgICAvLyBBbHdheXMgc2hvdyA2IHdlZWtzXG4gICAgICByZXR1cm4gc3RhcnQgKyA2ICogNyAtIDE7XG4gICAgfVxuXG4gICAgdmFyIGRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGgoYWN0aXZlU3RhcnREYXRlKTtcblxuICAgIGlmIChzaG93TmVpZ2hib3JpbmdNb250aCkge1xuICAgICAgdmFyIGFjdGl2ZUVuZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgYWN0aXZlRW5kRGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aEluZGV4LCBkYXlzSW5Nb250aCk7XG4gICAgICBhY3RpdmVFbmREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgdmFyIGRheXNVbnRpbEVuZE9mVGhlV2VlayA9IDcgLSBnZXREYXlPZldlZWsoYWN0aXZlRW5kRGF0ZSwgY2FsZW5kYXJUeXBlKSAtIDE7XG4gICAgICByZXR1cm4gZGF5c0luTW9udGggKyBkYXlzVW50aWxFbmRPZlRoZVdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXNJbk1vbnRoO1xuICB9KCk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbGVHcm91cCwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY2FsZW5kYXJfX21vbnRoLXZpZXdfX2RheXNcIixcbiAgICBjb3VudDogNyxcbiAgICBjdXJyZW50TW9udGhJbmRleDogbW9udGhJbmRleCxcbiAgICBkYXRlVHJhbnNmb3JtOiBmdW5jdGlvbiBkYXRlVHJhbnNmb3JtKGRheSkge1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG4gICAgZGF0ZVR5cGU6IFwiZGF5XCIsXG4gICAgZW5kOiBlbmQsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHRpbGU6IERheVxuICB9KSk7XG59XG5EYXlzLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoe1xuICBjYWxlbmRhclR5cGU6IGlzQ2FsZW5kYXJUeXBlLmlzUmVxdWlyZWQsXG4gIHNob3dGaXhlZE51bWJlck9mV2Vla3M6IFByb3BUeXBlcy5ib29sLFxuICBzaG93TmVpZ2hib3JpbmdNb250aDogUHJvcFR5cGVzLmJvb2xcbn0sIHRpbGVHcm91cFByb3BzKTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtOdW1iZXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIG9uQ2xpY2tXZWVrTnVtYmVyID0gX3JlZi5vbkNsaWNrV2Vla051bWJlcixcbiAgICAgIHdlZWtOdW1iZXIgPSBfcmVmLndlZWtOdW1iZXI7XG4gIHZhciBwcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICdyZWFjdC1jYWxlbmRhcl9fdGlsZScsXG4gICAgc3R5bGU6IHtcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfVxuICB9O1xuICB2YXIgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgd2Vla051bWJlcik7XG4gIHJldHVybiBvbkNsaWNrV2Vla051bWJlciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHJldHVybiBvbkNsaWNrV2Vla051bWJlcih3ZWVrTnVtYmVyLCBkYXRlLCBldmVudCk7XG4gICAgfSxcbiAgICB0eXBlOiBcImJ1dHRvblwiXG4gIH0pLCBjaGlsZHJlbikgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBwcm9wcywgY2hpbGRyZW4pO1xufVxuV2Vla051bWJlci5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tXZWVrTnVtYmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgd2Vla051bWJlcjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldFllYXIsIGdldE1vbnRoLCBnZXREYXRlLCBnZXREYXlzSW5Nb250aCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgV2Vla051bWJlciBmcm9tICcuL1dlZWtOdW1iZXInO1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5pbXBvcnQgeyBnZXRCZWdpbk9mV2VlaywgZ2V0RGF5T2ZXZWVrLCBnZXRXZWVrTnVtYmVyIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGVzJztcbmltcG9ydCB7IGlzQ2FsZW5kYXJUeXBlIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrTnVtYmVycyhwcm9wcykge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gcHJvcHMuYWN0aXZlU3RhcnREYXRlLFxuICAgICAgY2FsZW5kYXJUeXBlID0gcHJvcHMuY2FsZW5kYXJUeXBlLFxuICAgICAgb25DbGlja1dlZWtOdW1iZXIgPSBwcm9wcy5vbkNsaWNrV2Vla051bWJlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgIHNob3dGaXhlZE51bWJlck9mV2Vla3MgPSBwcm9wcy5zaG93Rml4ZWROdW1iZXJPZldlZWtzO1xuXG4gIHZhciBudW1iZXJPZldlZWtzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG93Rml4ZWROdW1iZXJPZldlZWtzKSB7XG4gICAgICByZXR1cm4gNjtcbiAgICB9XG5cbiAgICB2YXIgbnVtYmVyT2ZEYXlzID0gZ2V0RGF5c0luTW9udGgoYWN0aXZlU3RhcnREYXRlKTtcbiAgICB2YXIgc3RhcnRXZWVrZGF5ID0gZ2V0RGF5T2ZXZWVrKGFjdGl2ZVN0YXJ0RGF0ZSwgY2FsZW5kYXJUeXBlKTtcbiAgICB2YXIgZGF5cyA9IG51bWJlck9mRGF5cyAtICg3IC0gc3RhcnRXZWVrZGF5KTtcbiAgICByZXR1cm4gMSArIE1hdGguY2VpbChkYXlzIC8gNyk7XG4gIH0oKTtcblxuICB2YXIgZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHllYXIgPSBnZXRZZWFyKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gICAgdmFyIG1vbnRoSW5kZXggPSBnZXRNb250aChhY3RpdmVTdGFydERhdGUpO1xuICAgIHZhciBkYXkgPSBnZXREYXRlKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG51bWJlck9mV2Vla3M7IGluZGV4ICs9IDEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGdldEJlZ2luT2ZXZWVrKG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSArIGluZGV4ICogNyksIGNhbGVuZGFyVHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0oKTtcblxuICB2YXIgd2Vla051bWJlcnMgPSBkYXRlcy5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0V2Vla051bWJlcihkYXRlLCBjYWxlbmRhclR5cGUpO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY2FsZW5kYXJfX21vbnRoLXZpZXdfX3dlZWtOdW1iZXJzXCIsXG4gICAgY291bnQ6IG51bWJlck9mV2Vla3MsXG4gICAgZGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG9uRm9jdXM6IG9uTW91c2VMZWF2ZSxcbiAgICBvbk1vdXNlT3Zlcjogb25Nb3VzZUxlYXZlLFxuICAgIHN0eWxlOiB7XG4gICAgICBmbGV4QmFzaXM6ICdjYWxjKDEwMCUgKiAoMSAvIDgpJyxcbiAgICAgIGZsZXhTaHJpbms6IDBcbiAgICB9XG4gIH0sIHdlZWtOdW1iZXJzLm1hcChmdW5jdGlvbiAod2Vla051bWJlciwgd2Vla0luZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdlZWtOdW1iZXIsIHtcbiAgICAgIGtleTogd2Vla051bWJlcixcbiAgICAgIGRhdGU6IGRhdGVzW3dlZWtJbmRleF0sXG4gICAgICBvbkNsaWNrV2Vla051bWJlcjogb25DbGlja1dlZWtOdW1iZXIsXG4gICAgICB3ZWVrTnVtYmVyOiB3ZWVrTnVtYmVyXG4gICAgfSk7XG4gIH0pKTtcbn1cbldlZWtOdW1iZXJzLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlU3RhcnREYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBjYWxlbmRhclR5cGU6IGlzQ2FsZW5kYXJUeXBlLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tXZWVrTnVtYmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd0ZpeGVkTnVtYmVyT2ZXZWVrczogUHJvcFR5cGVzLmJvb2xcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRZZWFyLCBnZXRNb250aCwgZ2V0TW9udGhTdGFydCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3NoYXJlZC9kYXRlcyc7XG5pbXBvcnQgeyBmb3JtYXRXZWVrZGF5LCBmb3JtYXRTaG9ydFdlZWtkYXkgYXMgZGVmYXVsdEZvcm1hdFNob3J0V2Vla2RheSB9IGZyb20gJy4uL3NoYXJlZC9kYXRlRm9ybWF0dGVyJztcbmltcG9ydCB7IGlzQ2FsZW5kYXJUeXBlIH0gZnJvbSAnLi4vc2hhcmVkL3Byb3BUeXBlcyc7XG52YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX19tb250aC12aWV3X193ZWVrZGF5cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrZGF5cyhwcm9wcykge1xuICB2YXIgY2FsZW5kYXJUeXBlID0gcHJvcHMuY2FsZW5kYXJUeXBlLFxuICAgICAgX3Byb3BzJGZvcm1hdFNob3J0V2VlID0gcHJvcHMuZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgICAgZm9ybWF0U2hvcnRXZWVrZGF5ID0gX3Byb3BzJGZvcm1hdFNob3J0V2VlID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9ybWF0U2hvcnRXZWVrZGF5IDogX3Byb3BzJGZvcm1hdFNob3J0V2VlLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlO1xuICB2YXIgYW55RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBiZWdpbk9mTW9udGggPSBnZXRNb250aFN0YXJ0KGFueURhdGUpO1xuICB2YXIgeWVhciA9IGdldFllYXIoYmVnaW5PZk1vbnRoKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBnZXRNb250aChiZWdpbk9mTW9udGgpO1xuICB2YXIgd2Vla2RheXMgPSBbXTtcblxuICBmb3IgKHZhciB3ZWVrZGF5ID0gMTsgd2Vla2RheSA8PSA3OyB3ZWVrZGF5ICs9IDEpIHtcbiAgICB2YXIgd2Vla2RheURhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCB3ZWVrZGF5IC0gZ2V0RGF5T2ZXZWVrKGJlZ2luT2ZNb250aCwgY2FsZW5kYXJUeXBlKSk7XG4gICAgdmFyIGFiYnIgPSBmb3JtYXRXZWVrZGF5KGxvY2FsZSwgd2Vla2RheURhdGUpO1xuICAgIHdlZWtkYXlzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGtleTogd2Vla2RheSxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIl9fd2Vla2RheVwiKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYWJiclwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogYWJicixcbiAgICAgIHRpdGxlOiBhYmJyXG4gICAgfSwgZm9ybWF0U2hvcnRXZWVrZGF5KGxvY2FsZSwgd2Vla2RheURhdGUpLnJlcGxhY2UoJy4nLCAnJykpKSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIGNvdW50OiA3LFxuICAgIG9uRm9jdXM6IG9uTW91c2VMZWF2ZSxcbiAgICBvbk1vdXNlT3Zlcjogb25Nb3VzZUxlYXZlXG4gIH0sIHdlZWtkYXlzKTtcbn1cbldlZWtkYXlzLnByb3BUeXBlcyA9IHtcbiAgY2FsZW5kYXJUeXBlOiBpc0NhbGVuZGFyVHlwZS5pc1JlcXVpcmVkLFxuICBmb3JtYXRTaG9ydFdlZWtkYXk6IFByb3BUeXBlcy5mdW5jLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmNcbn07IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbWVyZ2VDbGFzc05hbWVzIGZyb20gJ21lcmdlLWNsYXNzLW5hbWVzJztcbmltcG9ydCB7IHRpbGVQcm9wcyB9IGZyb20gJy4vc2hhcmVkL3Byb3BUeXBlcyc7XG5cbmZ1bmN0aW9uIGdldFZhbHVlKG5leHRQcm9wcywgcHJvcCkge1xuICB2YXIgYWN0aXZlU3RhcnREYXRlID0gbmV4dFByb3BzLmFjdGl2ZVN0YXJ0RGF0ZSxcbiAgICAgIGRhdGUgPSBuZXh0UHJvcHMuZGF0ZSxcbiAgICAgIHZpZXcgPSBuZXh0UHJvcHMudmlldztcbiAgcmV0dXJuIHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nID8gcHJvcCh7XG4gICAgYWN0aXZlU3RhcnREYXRlOiBhY3RpdmVTdGFydERhdGUsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICB2aWV3OiB2aWV3XG4gIH0pIDogcHJvcDtcbn1cblxudmFyIFRpbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRpbGUsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVGlsZSk7XG5cbiAgZnVuY3Rpb24gVGlsZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlsZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHt9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaWxlLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmVTdGFydERhdGUgPSBfdGhpcyRwcm9wcy5hY3RpdmVTdGFydERhdGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHMuZGF0ZSxcbiAgICAgICAgICBmb3JtYXRBYmJyID0gX3RoaXMkcHJvcHMuZm9ybWF0QWJicixcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzLm1heERhdGUsXG4gICAgICAgICAgbWF4RGF0ZVRyYW5zZm9ybSA9IF90aGlzJHByb3BzLm1heERhdGVUcmFuc2Zvcm0sXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzLm1pbkRhdGUsXG4gICAgICAgICAgbWluRGF0ZVRyYW5zZm9ybSA9IF90aGlzJHByb3BzLm1pbkRhdGVUcmFuc2Zvcm0sXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZU92ZXIgPSBfdGhpcyRwcm9wcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIHRpbGVEaXNhYmxlZCA9IF90aGlzJHByb3BzLnRpbGVEaXNhYmxlZCxcbiAgICAgICAgICB2aWV3ID0gX3RoaXMkcHJvcHMudmlldztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgdGlsZUNsYXNzTmFtZSA9IF90aGlzJHN0YXRlLnRpbGVDbGFzc05hbWUsXG4gICAgICAgICAgdGlsZUNvbnRlbnQgPSBfdGhpcyRzdGF0ZS50aWxlQ29udGVudDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc05hbWVzKGNsYXNzZXMsIHRpbGVDbGFzc05hbWUpLFxuICAgICAgICBkaXNhYmxlZDogbWluRGF0ZSAmJiBtaW5EYXRlVHJhbnNmb3JtKG1pbkRhdGUpID4gZGF0ZSB8fCBtYXhEYXRlICYmIG1heERhdGVUcmFuc2Zvcm0obWF4RGF0ZSkgPCBkYXRlIHx8IHRpbGVEaXNhYmxlZCAmJiB0aWxlRGlzYWJsZWQoe1xuICAgICAgICAgIGFjdGl2ZVN0YXJ0RGF0ZTogYWN0aXZlU3RhcnREYXRlLFxuICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgdmlldzogdmlld1xuICAgICAgICB9KSxcbiAgICAgICAgb25DbGljazogb25DbGljayAmJiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gb25DbGljayhkYXRlLCBldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXM6IG9uTW91c2VPdmVyICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb25Nb3VzZU92ZXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlciAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uTW91c2VPdmVyKGRhdGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgIH0sIGZvcm1hdEFiYnIgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFiYnJcIiwge1xuICAgICAgICBcImFyaWEtbGFiZWxcIjogZm9ybWF0QWJicihsb2NhbGUsIGRhdGUpXG4gICAgICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbiwgdGlsZUNvbnRlbnQpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhciB0aWxlQ2xhc3NOYW1lID0gbmV4dFByb3BzLnRpbGVDbGFzc05hbWUsXG4gICAgICAgICAgdGlsZUNvbnRlbnQgPSBuZXh0UHJvcHMudGlsZUNvbnRlbnQ7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICAgIGlmICh0aWxlQ2xhc3NOYW1lICE9PSBwcmV2U3RhdGUudGlsZUNsYXNzTmFtZVByb3BzKSB7XG4gICAgICAgIG5leHRTdGF0ZS50aWxlQ2xhc3NOYW1lID0gZ2V0VmFsdWUobmV4dFByb3BzLCB0aWxlQ2xhc3NOYW1lKTtcbiAgICAgICAgbmV4dFN0YXRlLnRpbGVDbGFzc05hbWVQcm9wcyA9IHRpbGVDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aWxlQ29udGVudCAhPT0gcHJldlN0YXRlLnRpbGVDb250ZW50UHJvcHMpIHtcbiAgICAgICAgbmV4dFN0YXRlLnRpbGVDb250ZW50ID0gZ2V0VmFsdWUobmV4dFByb3BzLCB0aWxlQ29udGVudCk7XG4gICAgICAgIG5leHRTdGF0ZS50aWxlQ29udGVudFByb3BzID0gdGlsZUNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbGU7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IFRpbGUgYXMgZGVmYXVsdCB9O1xuVGlsZS5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVQcm9wcyksIHt9LCB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBmb3JtYXRBYmJyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWF4RGF0ZVRyYW5zZm9ybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWluRGF0ZVRyYW5zZm9ybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSk7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4JztcbmltcG9ydCB7IGdldFRpbGVDbGFzc2VzIH0gZnJvbSAnLi9zaGFyZWQvdXRpbHMnO1xuaW1wb3J0IHsgdGlsZUdyb3VwUHJvcHMgfSBmcm9tICcuL3NoYXJlZC9wcm9wVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGlsZUdyb3VwKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRjb3VudCA9IF9yZWYuY291bnQsXG4gICAgICBjb3VudCA9IF9yZWYkY291bnQgPT09IHZvaWQgMCA/IDMgOiBfcmVmJGNvdW50LFxuICAgICAgZGF0ZVRyYW5zZm9ybSA9IF9yZWYuZGF0ZVRyYW5zZm9ybSxcbiAgICAgIGRhdGVUeXBlID0gX3JlZi5kYXRlVHlwZSxcbiAgICAgIGVuZCA9IF9yZWYuZW5kLFxuICAgICAgaG92ZXIgPSBfcmVmLmhvdmVyLFxuICAgICAgb2Zmc2V0ID0gX3JlZi5vZmZzZXQsXG4gICAgICBzdGFydCA9IF9yZWYuc3RhcnQsXG4gICAgICBfcmVmJHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICBzdGVwID0gX3JlZiRzdGVwID09PSB2b2lkIDAgPyAxIDogX3JlZiRzdGVwLFxuICAgICAgVGlsZSA9IF9yZWYudGlsZSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHZhbHVlVHlwZSA9IF9yZWYudmFsdWVUeXBlLFxuICAgICAgdGlsZVByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImNvdW50XCIsIFwiZGF0ZVRyYW5zZm9ybVwiLCBcImRhdGVUeXBlXCIsIFwiZW5kXCIsIFwiaG92ZXJcIiwgXCJvZmZzZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJ0aWxlXCIsIFwidmFsdWVcIiwgXCJ2YWx1ZVR5cGVcIl0pO1xuXG4gIHZhciB0aWxlcyA9IFtdO1xuXG4gIGZvciAodmFyIHBvaW50ID0gc3RhcnQ7IHBvaW50IDw9IGVuZDsgcG9pbnQgKz0gc3RlcCkge1xuICAgIHZhciBkYXRlID0gZGF0ZVRyYW5zZm9ybShwb2ludCk7XG4gICAgdGlsZXMucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGlsZSwgX2V4dGVuZHMoe1xuICAgICAga2V5OiBkYXRlLmdldFRpbWUoKSxcbiAgICAgIGNsYXNzZXM6IGdldFRpbGVDbGFzc2VzKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB2YWx1ZVR5cGU6IHZhbHVlVHlwZSxcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgZGF0ZVR5cGU6IGRhdGVUeXBlLFxuICAgICAgICBob3ZlcjogaG92ZXJcbiAgICAgIH0pLFxuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIHBvaW50OiBwb2ludFxuICAgIH0sIHRpbGVQcm9wcykpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgY291bnQ6IGNvdW50LFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHdyYXA6IHRydWVcbiAgfSwgdGlsZXMpO1xufVxuVGlsZUdyb3VwLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGlsZUdyb3VwUHJvcHMpLCB7fSwge1xuICBhY3RpdmVTdGFydERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGF0ZVRyYW5zZm9ybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbnRocyBmcm9tICcuL1llYXJWaWV3L01vbnRocyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZZWFyVmlldyhwcm9wcykge1xuICBmdW5jdGlvbiByZW5kZXJNb250aHMoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vbnRocywgcHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY2FsZW5kYXJfX3llYXItdmlld1wiXG4gIH0sIHJlbmRlck1vbnRocygpKTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRNb250aFN0YXJ0LCBnZXRNb250aEVuZCB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgVGlsZSBmcm9tICcuLi9UaWxlJztcbmltcG9ydCB7IGZvcm1hdE1vbnRoIGFzIGRlZmF1bHRGb3JtYXRNb250aCwgZm9ybWF0TW9udGhZZWFyIGFzIGRlZmF1bHRGb3JtYXRNb250aFllYXIgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZUZvcm1hdHRlcic7XG5pbXBvcnQgeyB0aWxlUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvcHJvcFR5cGVzJztcbnZhciBjbGFzc05hbWUgPSAncmVhY3QtY2FsZW5kYXJfX3llYXItdmlld19fbW9udGhzX19tb250aCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb250aChfcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgX3JlZiRmb3JtYXRNb250aCA9IF9yZWYuZm9ybWF0TW9udGgsXG4gICAgICBmb3JtYXRNb250aCA9IF9yZWYkZm9ybWF0TW9udGggPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRNb250aCA6IF9yZWYkZm9ybWF0TW9udGgsXG4gICAgICBfcmVmJGZvcm1hdE1vbnRoWWVhciA9IF9yZWYuZm9ybWF0TW9udGhZZWFyLFxuICAgICAgZm9ybWF0TW9udGhZZWFyID0gX3JlZiRmb3JtYXRNb250aFllYXIgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXRNb250aFllYXIgOiBfcmVmJGZvcm1hdE1vbnRoWWVhcixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3Nlc1wiLCBcImZvcm1hdE1vbnRoXCIsIFwiZm9ybWF0TW9udGhZZWFyXCJdKTtcblxuICB2YXIgZGF0ZSA9IG90aGVyUHJvcHMuZGF0ZSxcbiAgICAgIGxvY2FsZSA9IG90aGVyUHJvcHMubG9jYWxlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGlsZSwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICBjbGFzc2VzOiBbXS5jb25jYXQoY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICBmb3JtYXRBYmJyOiBmb3JtYXRNb250aFllYXIsXG4gICAgbWF4RGF0ZVRyYW5zZm9ybTogZ2V0TW9udGhFbmQsXG4gICAgbWluRGF0ZVRyYW5zZm9ybTogZ2V0TW9udGhTdGFydCxcbiAgICB2aWV3OiBcInllYXJcIlxuICB9KSwgZm9ybWF0TW9udGgobG9jYWxlLCBkYXRlKSk7XG59XG5Nb250aC5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVQcm9wcyksIHt9LCB7XG4gIGZvcm1hdE1vbnRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybWF0TW9udGhZZWFyOiBQcm9wVHlwZXMuZnVuY1xufSk7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0WWVhciB9IGZyb20gJ0B3b2p0ZWttYWovZGF0ZS11dGlscyc7XG5pbXBvcnQgVGlsZUdyb3VwIGZyb20gJy4uL1RpbGVHcm91cCc7XG5pbXBvcnQgTW9udGggZnJvbSAnLi9Nb250aCc7XG5pbXBvcnQgeyB0aWxlR3JvdXBQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9wcm9wVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9udGhzKHByb3BzKSB7XG4gIHZhciBhY3RpdmVTdGFydERhdGUgPSBwcm9wcy5hY3RpdmVTdGFydERhdGU7XG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAxMTtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGFjdGl2ZVN0YXJ0RGF0ZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaWxlR3JvdXAsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jYWxlbmRhcl9feWVhci12aWV3X19tb250aHNcIixcbiAgICBkYXRlVHJhbnNmb3JtOiBmdW5jdGlvbiBkYXRlVHJhbnNmb3JtKG1vbnRoSW5kZXgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCAxKTtcbiAgICB9LFxuICAgIGRhdGVUeXBlOiBcIm1vbnRoXCIsXG4gICAgZW5kOiBlbmQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHRpbGU6IE1vbnRoXG4gIH0pKTtcbn1cbk1vbnRocy5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRpbGVHcm91cFByb3BzKSwge30sIHtcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nXG59KTsiLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgQ2VudHVyeVZpZXcgZnJvbSAnLi9DZW50dXJ5Vmlldyc7XG5pbXBvcnQgRGVjYWRlVmlldyBmcm9tICcuL0RlY2FkZVZpZXcnO1xuaW1wb3J0IFllYXJWaWV3IGZyb20gJy4vWWVhclZpZXcnO1xuaW1wb3J0IE1vbnRoVmlldyBmcm9tICcuL01vbnRoVmlldyc7XG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbmV4cG9ydCB7IENhbGVuZGFyLCBDZW50dXJ5VmlldywgRGVjYWRlVmlldywgWWVhclZpZXcsIE1vbnRoVmlldyB9OyIsInZhciBfQ0FMRU5EQVJfVFlQRV9MT0NBTEU7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZXhwb3J0IHZhciBDQUxFTkRBUl9UWVBFUyA9IHtcbiAgQVJBQklDOiAnQXJhYmljJyxcbiAgSEVCUkVXOiAnSGVicmV3JyxcbiAgSVNPXzg2MDE6ICdJU08gODYwMScsXG4gIFVTOiAnVVMnXG59O1xuZXhwb3J0IHZhciBDQUxFTkRBUl9UWVBFX0xPQ0FMRVMgPSAoX0NBTEVOREFSX1RZUEVfTE9DQUxFID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfQ0FMRU5EQVJfVFlQRV9MT0NBTEUsIENBTEVOREFSX1RZUEVTLlVTLCBbJ2VuLUNBJywgJ2VuLVVTJywgJ2VzLUFSJywgJ2VzLUJPJywgJ2VzLUNMJywgJ2VzLUNPJywgJ2VzLUNSJywgJ2VzLURPJywgJ2VzLUVDJywgJ2VzLUdUJywgJ2VzLUhOJywgJ2VzLU1YJywgJ2VzLU5JJywgJ2VzLVBBJywgJ2VzLVBFJywgJ2VzLVBSJywgJ2VzLVNWJywgJ2VzLVZFJywgJ3B0LUJSJ10pLCBfZGVmaW5lUHJvcGVydHkoX0NBTEVOREFSX1RZUEVfTE9DQUxFLCBDQUxFTkRBUl9UWVBFUy5BUkFCSUMsIFsvLyBhci1MQiwgYXItTUEgaW50ZW50aW9uYWxseSBtaXNzaW5nXG4nYXInLCAnYXItQUUnLCAnYXItQkgnLCAnYXItRFonLCAnYXItRUcnLCAnYXItSVEnLCAnYXItSk8nLCAnYXItS1cnLCAnYXItTFknLCAnYXItT00nLCAnYXItUUEnLCAnYXItU0EnLCAnYXItU0QnLCAnYXItU1knLCAnYXItWUUnLCAnZHYnLCAnZHYtTVYnLCAncHMnLCAncHMtQVInXSksIF9kZWZpbmVQcm9wZXJ0eShfQ0FMRU5EQVJfVFlQRV9MT0NBTEUsIENBTEVOREFSX1RZUEVTLkhFQlJFVywgWydoZScsICdoZS1JTCddKSwgX0NBTEVOREFSX1RZUEVfTE9DQUxFKTtcbmV4cG9ydCB2YXIgV0VFS0RBWVMgPSBfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkoNykpLm1hcChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleDtcbn0pOyIsImltcG9ydCBnZXRVc2VyTG9jYWxlIGZyb20gJ2dldC11c2VyLWxvY2FsZSc7XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlcihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobG9jYWxlLCBkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcobG9jYWxlIHx8IGdldFVzZXJMb2NhbGUoKSwgb3B0aW9ucyk7XG4gIH07XG59XG4vKipcbiAqIENoYW5nZXMgdGhlIGhvdXIgaW4gYSBEYXRlIHRvIGVuc3VyZSByaWdodCBkYXRlIGZvcm1hdHRpbmcgZXZlbiBpZiBEU1QgaXMgbWVzc2VkIHVwLlxuICogV29ya2Fyb3VuZCBmb3IgYnVnIGluIFdlYktpdCBhbmQgRmlyZWZveCB3aXRoIGhpc3RvcmljYWwgZGF0ZXMuXG4gKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6XG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NTA0NjVcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzODU2NDNcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvU2FmZUhvdXIoZGF0ZSkge1xuICB2YXIgc2FmZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHNhZmVEYXRlLnNldEhvdXJzKDEyKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNhZmVGb3JtYXR0ZXIob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGxvY2FsZSwgZGF0ZSkge1xuICAgIHJldHVybiBnZXRGb3JtYXR0ZXIob3B0aW9ucykobG9jYWxlLCB0b1NhZmVIb3VyKGRhdGUpKTtcbiAgfTtcbn1cblxudmFyIGZvcm1hdERhdGVPcHRpb25zID0ge1xuICBkYXk6ICdudW1lcmljJyxcbiAgbW9udGg6ICdudW1lcmljJyxcbiAgeWVhcjogJ251bWVyaWMnXG59O1xudmFyIGZvcm1hdExvbmdEYXRlT3B0aW9ucyA9IHtcbiAgZGF5OiAnbnVtZXJpYycsXG4gIG1vbnRoOiAnbG9uZycsXG4gIHllYXI6ICdudW1lcmljJ1xufTtcbnZhciBmb3JtYXRNb250aE9wdGlvbnMgPSB7XG4gIG1vbnRoOiAnbG9uZydcbn07XG52YXIgZm9ybWF0TW9udGhZZWFyT3B0aW9ucyA9IHtcbiAgbW9udGg6ICdsb25nJyxcbiAgeWVhcjogJ251bWVyaWMnXG59O1xudmFyIGZvcm1hdFllYXJPcHRpb25zID0ge1xuICB5ZWFyOiAnbnVtZXJpYydcbn07XG52YXIgZm9ybWF0U2hvcnRXZWVrZGF5T3B0aW9ucyA9IHtcbiAgd2Vla2RheTogJ3Nob3J0J1xufTtcbnZhciBmb3JtYXRXZWVrZGF5T3B0aW9ucyA9IHtcbiAgd2Vla2RheTogJ2xvbmcnXG59O1xuZXhwb3J0IHZhciBmb3JtYXREYXRlID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXREYXRlT3B0aW9ucyk7XG5leHBvcnQgdmFyIGZvcm1hdExvbmdEYXRlID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRMb25nRGF0ZU9wdGlvbnMpO1xuZXhwb3J0IHZhciBmb3JtYXRNb250aCA9IGdldFNhZmVGb3JtYXR0ZXIoZm9ybWF0TW9udGhPcHRpb25zKTtcbmV4cG9ydCB2YXIgZm9ybWF0TW9udGhZZWFyID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRNb250aFllYXJPcHRpb25zKTtcbmV4cG9ydCB2YXIgZm9ybWF0WWVhciA9IGdldFNhZmVGb3JtYXR0ZXIoZm9ybWF0WWVhck9wdGlvbnMpO1xuZXhwb3J0IHZhciBmb3JtYXRTaG9ydFdlZWtkYXkgPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdFNob3J0V2Vla2RheU9wdGlvbnMpO1xuZXhwb3J0IHZhciBmb3JtYXRXZWVrZGF5ID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRXZWVrZGF5T3B0aW9ucyk7IiwiaW1wb3J0IHsgZ2V0WWVhciwgZ2V0TW9udGggYXMgZ2V0TW9udGhJbmRleCwgZ2V0Q2VudHVyeVN0YXJ0LCBnZXRQcmV2aW91c0NlbnR1cnlTdGFydCwgZ2V0TmV4dENlbnR1cnlTdGFydCwgZ2V0Q2VudHVyeUVuZCwgZ2V0UHJldmlvdXNDZW50dXJ5RW5kLCBnZXRDZW50dXJ5UmFuZ2UsIGdldERlY2FkZVN0YXJ0LCBnZXRQcmV2aW91c0RlY2FkZVN0YXJ0LCBnZXROZXh0RGVjYWRlU3RhcnQsIGdldERlY2FkZUVuZCwgZ2V0UHJldmlvdXNEZWNhZGVFbmQsIGdldERlY2FkZVJhbmdlLCBnZXRZZWFyU3RhcnQsIGdldFByZXZpb3VzWWVhclN0YXJ0LCBnZXROZXh0WWVhclN0YXJ0LCBnZXRZZWFyRW5kLCBnZXRQcmV2aW91c1llYXJFbmQsIGdldFllYXJSYW5nZSwgZ2V0TW9udGhTdGFydCwgZ2V0UHJldmlvdXNNb250aFN0YXJ0LCBnZXROZXh0TW9udGhTdGFydCwgZ2V0TW9udGhFbmQsIGdldFByZXZpb3VzTW9udGhFbmQsIGdldE1vbnRoUmFuZ2UsIGdldERheVN0YXJ0LCBnZXREYXlFbmQsIGdldERheVJhbmdlIH0gZnJvbSAnQHdvanRla21hai9kYXRlLXV0aWxzJztcbmltcG9ydCB7IENBTEVOREFSX1RZUEVTLCBXRUVLREFZUyB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgZm9ybWF0WWVhciBhcyBkZWZhdWx0Rm9ybWF0WWVhciB9IGZyb20gJy4vZGF0ZUZvcm1hdHRlcic7XG52YXIgU1VOREFZID0gV0VFS0RBWVNbMF07XG52YXIgRlJJREFZID0gV0VFS0RBWVNbNV07XG52YXIgU0FUVVJEQVkgPSBXRUVLREFZU1s2XTtcbi8qIFNpbXBsZSBnZXR0ZXJzIC0gZ2V0dGluZyBhIHByb3BlcnR5IG9mIGEgZ2l2ZW4gcG9pbnQgaW4gdGltZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGUpIHtcbiAgdmFyIGNhbGVuZGFyVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG4gIHZhciB3ZWVrZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICBzd2l0Y2ggKGNhbGVuZGFyVHlwZSkge1xuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE6XG4gICAgICAvLyBTaGlmdHMgZGF5cyBvZiB0aGUgd2VlayBzbyB0aGF0IE1vbmRheSBpcyAwLCBTdW5kYXkgaXMgNlxuICAgICAgcmV0dXJuICh3ZWVrZGF5ICsgNikgJSA3O1xuXG4gICAgY2FzZSBDQUxFTkRBUl9UWVBFUy5BUkFCSUM6XG4gICAgICByZXR1cm4gKHdlZWtkYXkgKyAxKSAlIDc7XG5cbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLkhFQlJFVzpcbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLlVTOlxuICAgICAgcmV0dXJuIHdlZWtkYXk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBjYWxlbmRhciB0eXBlLicpO1xuICB9XG59XG4vKipcbiAqIENlbnR1cnlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmVnaW5PZkNlbnR1cnlZZWFyKGRhdGUpIHtcbiAgdmFyIGJlZ2luT2ZDZW50dXJ5ID0gZ2V0Q2VudHVyeVN0YXJ0KGRhdGUpO1xuICByZXR1cm4gZ2V0WWVhcihiZWdpbk9mQ2VudHVyeSk7XG59XG4vKipcbiAqIERlY2FkZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZWdpbk9mRGVjYWRlWWVhcihkYXRlKSB7XG4gIHZhciBiZWdpbk9mRGVjYWRlID0gZ2V0RGVjYWRlU3RhcnQoZGF0ZSk7XG4gIHJldHVybiBnZXRZZWFyKGJlZ2luT2ZEZWNhZGUpO1xufVxuLyoqXG4gKiBXZWVrXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiZWdpbm5pbmcgb2YgYSBnaXZlbiB3ZWVrLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICogQHBhcmFtIHtTdHJpbmd9IGNhbGVuZGFyVHlwZSBDYWxlbmRhciB0eXBlLiBDYW4gYmUgSVNPIDg2MDEgb3IgVVMuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZ2luT2ZXZWVrKGRhdGUpIHtcbiAgdmFyIGNhbGVuZGFyVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogQ0FMRU5EQVJfVFlQRVMuSVNPXzg2MDE7XG4gIHZhciB5ZWFyID0gZ2V0WWVhcihkYXRlKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBnZXRNb250aEluZGV4KGRhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCkgLSBnZXREYXlPZldlZWsoZGF0ZSwgY2FsZW5kYXJUeXBlKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XG59XG4vKipcbiAqIEdldHMgd2VlayBudW1iZXIgYWNjb3JkaW5nIHRvIElTTyA4NjAxIG9yIFVTIHN0YW5kYXJkLlxuICogSW4gSVNPIDg2MDEsIEFyYWJpYyBhbmQgSGVicmV3IHdlZWsgMSBpcyB0aGUgb25lIHdpdGggSmFudWFyeSA0LlxuICogSW4gVVMgY2FsZW5kYXIgd2VlayAxIGlzIHRoZSBvbmUgd2l0aCBKYW51YXJ5IDEuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2FsZW5kYXJUeXBlIENhbGVuZGFyIHR5cGUuIENhbiBiZSBJU08gODYwMSBvciBVUy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcihkYXRlKSB7XG4gIHZhciBjYWxlbmRhclR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IENBTEVOREFSX1RZUEVTLklTT184NjAxO1xuICB2YXIgY2FsZW5kYXJUeXBlRm9yV2Vla051bWJlciA9IGNhbGVuZGFyVHlwZSA9PT0gQ0FMRU5EQVJfVFlQRVMuVVMgPyBDQUxFTkRBUl9UWVBFUy5VUyA6IENBTEVOREFSX1RZUEVTLklTT184NjAxO1xuICB2YXIgYmVnaW5PZldlZWsgPSBnZXRCZWdpbk9mV2VlayhkYXRlLCBjYWxlbmRhclR5cGVGb3JXZWVrTnVtYmVyKTtcbiAgdmFyIHllYXIgPSBnZXRZZWFyKGRhdGUpICsgMTtcbiAgdmFyIGRheUluV2Vla09uZTtcbiAgdmFyIGJlZ2luT2ZGaXJzdFdlZWs7IC8vIExvb2sgZm9yIHRoZSBmaXJzdCB3ZWVrIG9uZSB0aGF0IGRvZXMgbm90IGNvbWUgYWZ0ZXIgYSBnaXZlbiBkYXRlXG5cbiAgZG8ge1xuICAgIGRheUluV2Vla09uZSA9IG5ldyBEYXRlKHllYXIsIDAsIGNhbGVuZGFyVHlwZUZvcldlZWtOdW1iZXIgPT09IENBTEVOREFSX1RZUEVTLklTT184NjAxID8gNCA6IDEpO1xuICAgIGJlZ2luT2ZGaXJzdFdlZWsgPSBnZXRCZWdpbk9mV2VlayhkYXlJbldlZWtPbmUsIGNhbGVuZGFyVHlwZUZvcldlZWtOdW1iZXIpO1xuICAgIHllYXIgLT0gMTtcbiAgfSB3aGlsZSAoZGF0ZSAtIGJlZ2luT2ZGaXJzdFdlZWsgPCAwKTtcblxuICByZXR1cm4gTWF0aC5yb3VuZCgoYmVnaW5PZldlZWsgLSBiZWdpbk9mRmlyc3RXZWVrKSAvICg4LjY0ZTcgKiA3KSkgKyAxO1xufVxuLyoqXG4gKiBPdGhlcnNcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJlZ2lubmluZyBvZiBhIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYW5nZVR5cGUgUmFuZ2UgdHlwZSAoZS5nLiAnZGF5JylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZWdpbihyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiBnZXRDZW50dXJ5U3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldERlY2FkZVN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0WWVhclN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldE1vbnRoU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICdkYXknOlxuICAgICAgcmV0dXJuIGdldERheVN0YXJ0KGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZWdpblByZXZpb3VzKHJhbmdlVHlwZSwgZGF0ZSkge1xuICBzd2l0Y2ggKHJhbmdlVHlwZSkge1xuICAgIGNhc2UgJ2NlbnR1cnknOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzQ2VudHVyeVN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c0RlY2FkZVN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNZZWFyU3RhcnQoZGF0ZSk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNNb250aFN0YXJ0KGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZWdpbk5leHQocmFuZ2VUeXBlLCBkYXRlKSB7XG4gIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgY2FzZSAnY2VudHVyeSc6XG4gICAgICByZXR1cm4gZ2V0TmV4dENlbnR1cnlTdGFydChkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0TmV4dERlY2FkZVN0YXJ0KGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0TmV4dFllYXJTdGFydChkYXRlKTtcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXROZXh0TW9udGhTdGFydChkYXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59XG5leHBvcnQgdmFyIGdldEJlZ2luUHJldmlvdXMyID0gZnVuY3Rpb24gZ2V0QmVnaW5QcmV2aW91czIocmFuZ2VUeXBlLCBkYXRlKSB7XG4gIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c0RlY2FkZVN0YXJ0KGRhdGUsIC0xMDApO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNZZWFyU3RhcnQoZGF0ZSwgLTEwKTtcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c01vbnRoU3RhcnQoZGF0ZSwgLTEyKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59O1xuZXhwb3J0IHZhciBnZXRCZWdpbk5leHQyID0gZnVuY3Rpb24gZ2V0QmVnaW5OZXh0MihyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldE5leHREZWNhZGVTdGFydChkYXRlLCAxMDApO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0TmV4dFllYXJTdGFydChkYXRlLCAxMCk7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2V0TmV4dE1vbnRoU3RhcnQoZGF0ZSwgMTIpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn07XG4vKipcbiAqIFJldHVybnMgdGhlIGVuZCBvZiBhIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYW5nZVR5cGUgUmFuZ2UgdHlwZSAoZS5nLiAnZGF5JylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmQocmFuZ2VUeXBlLCBkYXRlKSB7XG4gIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgY2FzZSAnY2VudHVyeSc6XG4gICAgICByZXR1cm4gZ2V0Q2VudHVyeUVuZChkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gZ2V0RGVjYWRlRW5kKGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0WWVhckVuZChkYXRlKTtcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXRNb250aEVuZChkYXRlKTtcblxuICAgIGNhc2UgJ2RheSc6XG4gICAgICByZXR1cm4gZ2V0RGF5RW5kKGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRQcmV2aW91cyhyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c0NlbnR1cnlFbmQoZGF0ZSk7XG5cbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzRGVjYWRlRW5kKGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNZZWFyRW5kKGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzTW9udGhFbmQoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuZXhwb3J0IHZhciBnZXRFbmRQcmV2aW91czIgPSBmdW5jdGlvbiBnZXRFbmRQcmV2aW91czIocmFuZ2VUeXBlLCBkYXRlKSB7XG4gIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c0RlY2FkZUVuZChkYXRlLCAtMTAwKTtcblxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzWWVhckVuZChkYXRlLCAtMTApO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldFByZXZpb3VzTW9udGhFbmQoZGF0ZSwgLTEyKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZCBvZiBhIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYW5nZVR5cGUgUmFuZ2UgdHlwZSAoZS5nLiAnZGF5JylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZShyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiBnZXRDZW50dXJ5UmFuZ2UoZGF0ZSk7XG5cbiAgICBjYXNlICdkZWNhZGUnOlxuICAgICAgcmV0dXJuIGdldERlY2FkZVJhbmdlKGRhdGUpO1xuXG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0WWVhclJhbmdlKGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIGdldE1vbnRoUmFuZ2UoZGF0ZSk7XG5cbiAgICBjYXNlICdkYXknOlxuICAgICAgcmV0dXJuIGdldERheVJhbmdlKGRhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmFuZ2VUeXBlOiBcIi5jb25jYXQocmFuZ2VUeXBlKSk7XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmdlIG91dCBvZiB0d28gdmFsdWVzLCBlbnN1cmluZyB0aGV5IGFyZSBpbiBvcmRlciBhbmQgY292ZXJpbmcgZW50aXJlIHBlcmlvZCByYW5nZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlVHlwZSBSYW5nZSB0eXBlIChlLmcuICdkYXknKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlMSBGaXJzdCBkYXRlLlxuICogQHBhcmFtIHtEYXRlfSBkYXRlMiBTZWNvbmQgZGF0ZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVSYW5nZShyYW5nZVR5cGUsIGRhdGUxLCBkYXRlMikge1xuICB2YXIgcmF3TmV4dFZhbHVlID0gW2RhdGUxLCBkYXRlMl0uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG4gIHJldHVybiBbZ2V0QmVnaW4ocmFuZ2VUeXBlLCByYXdOZXh0VmFsdWVbMF0pLCBnZXRFbmQocmFuZ2VUeXBlLCByYXdOZXh0VmFsdWVbMV0pXTtcbn1cblxuZnVuY3Rpb24gdG9ZZWFyTGFiZWwobG9jYWxlKSB7XG4gIHZhciBmb3JtYXRZZWFyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0Rm9ybWF0WWVhcjtcbiAgdmFyIGRhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRlcy5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0WWVhcihsb2NhbGUsIGRhdGUpO1xuICB9KS5qb2luKCcg4oCTICcpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIGxhYmVsbGluZyBhIGNlbnR1cnkgb2YgYSBnaXZlbiBkYXRlLlxuICogRm9yIGV4YW1wbGUsIGZvciAyMDE3IGl0IHdpbGwgcmV0dXJuIDIwMDEtMjEwMC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSBEYXRlIG9yIGEgeWVhciBhcyBhIHN0cmluZyBvciBhcyBhIG51bWJlci5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50dXJ5TGFiZWwobG9jYWxlLCBmb3JtYXRZZWFyLCBkYXRlKSB7XG4gIHJldHVybiB0b1llYXJMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGdldENlbnR1cnlSYW5nZShkYXRlKSk7XG59XG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgbGFiZWxsaW5nIGEgY2VudHVyeSBvZiBhIGdpdmVuIGRhdGUuXG4gKiBGb3IgZXhhbXBsZSwgZm9yIDIwMTcgaXQgd2lsbCByZXR1cm4gMjAxMS0yMDIwLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIERhdGUgb3IgYSB5ZWFyIGFzIGEgc3RyaW5nIG9yIGFzIGEgbnVtYmVyLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWNhZGVMYWJlbChsb2NhbGUsIGZvcm1hdFllYXIsIGRhdGUpIHtcbiAgcmV0dXJuIHRvWWVhckxhYmVsKGxvY2FsZSwgZm9ybWF0WWVhciwgZ2V0RGVjYWRlUmFuZ2UoZGF0ZSkpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgYm9vbGVhbiBkZXRlcm1pbmluZyB3aGV0aGVyIGEgZ2l2ZW4gZGF0ZSBpcyBvbiBTYXR1cmRheSBvciBTdW5kYXkuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2Vla2VuZChkYXRlKSB7XG4gIHZhciBjYWxlbmRhclR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IENBTEVOREFSX1RZUEVTLklTT184NjAxO1xuICB2YXIgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgc3dpdGNoIChjYWxlbmRhclR5cGUpIHtcbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLkFSQUJJQzpcbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLkhFQlJFVzpcbiAgICAgIHJldHVybiB3ZWVrZGF5ID09PSBGUklEQVkgfHwgd2Vla2RheSA9PT0gU0FUVVJEQVk7XG5cbiAgICBjYXNlIENBTEVOREFSX1RZUEVTLklTT184NjAxOlxuICAgIGNhc2UgQ0FMRU5EQVJfVFlQRVMuVVM6XG4gICAgICByZXR1cm4gd2Vla2RheSA9PT0gU0FUVVJEQVkgfHwgd2Vla2RheSA9PT0gU1VOREFZO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgY2FsZW5kYXIgdHlwZS4nKTtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENBTEVOREFSX1RZUEVTIH0gZnJvbSAnLi9jb25zdCc7XG52YXIgY2FsZW5kYXJUeXBlcyA9IE9iamVjdC52YWx1ZXMoQ0FMRU5EQVJfVFlQRVMpO1xudmFyIGFsbFZpZXdzID0gWydjZW50dXJ5JywgJ2RlY2FkZScsICd5ZWFyJywgJ21vbnRoJ107XG5leHBvcnQgdmFyIGlzQ2FsZW5kYXJUeXBlID0gUHJvcFR5cGVzLm9uZU9mKGNhbGVuZGFyVHlwZXMpO1xuZXhwb3J0IHZhciBpc0NsYXNzTmFtZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXSk7XG5leHBvcnQgdmFyIGlzTWluRGF0ZSA9IGZ1bmN0aW9uIGlzTWluRGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIG1pbkRhdGUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKCFtaW5EYXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIShtaW5EYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWluRGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIGV4cGVjdGVkIGluc3RhbmNlIG9mIGBEYXRlYC5cIikpO1xuICB9XG5cbiAgdmFyIG1heERhdGUgPSBwcm9wcy5tYXhEYXRlO1xuXG4gIGlmIChtYXhEYXRlICYmIG1pbkRhdGUgPiBtYXhEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgXCIpLmNvbmNhdChfdHlwZW9mKG1pbkRhdGUpLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBtaW5EYXRlIGNhbm5vdCBiZSBsYXJnZXIgdGhhbiBtYXhEYXRlLlwiKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgdmFyIGlzTWF4RGF0ZSA9IGZ1bmN0aW9uIGlzTWF4RGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIG1heERhdGUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKCFtYXhEYXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIShtYXhEYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWF4RGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIGV4cGVjdGVkIGluc3RhbmNlIG9mIGBEYXRlYC5cIikpO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBwcm9wcy5taW5EYXRlO1xuXG4gIGlmIChtaW5EYXRlICYmIG1heERhdGUgPCBtaW5EYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgXCIpLmNvbmNhdChfdHlwZW9mKG1heERhdGUpLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBtYXhEYXRlIGNhbm5vdCBiZSBzbWFsbGVyIHRoYW4gbWluRGF0ZS5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IHZhciBpc1JlZiA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgY3VycmVudDogUHJvcFR5cGVzLmFueVxufSldKTtcbmV4cG9ydCB2YXIgaXNWYWx1ZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSldKTtcbmV4cG9ydCB2YXIgaXNWaWV3cyA9IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihhbGxWaWV3cykpO1xuZXhwb3J0IHZhciBpc1ZpZXcgPSBmdW5jdGlvbiBpc1ZpZXcocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciB2aWV3ID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgdmlld3MgPSBwcm9wcy52aWV3cztcbiAgdmFyIGFsbG93ZWRWaWV3cyA9IHZpZXdzIHx8IGFsbFZpZXdzO1xuXG4gIGlmICh2aWV3ICE9PSB1bmRlZmluZWQgJiYgYWxsb3dlZFZpZXdzLmluZGV4T2YodmlldykgPT09IC0xKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdmFsdWUgYFwiKS5jb25jYXQodmlldywgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgZXhwZWN0ZWQgb25lIG9mIFtcIikuY29uY2F0KGFsbG93ZWRWaWV3cy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQoYSwgXCJcXFwiXCIpO1xuICAgIH0pLmpvaW4oJywgJyksIFwiXS5cIikpO1xuICB9IC8vIEV2ZXJ5dGhpbmcgaXMgZmluZVxuXG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5pc1ZpZXcuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHZpZXcgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKCF2aWV3KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGBcIikuY29uY2F0KHZpZXcsIFwiYC5cIikpO1xuICB9XG5cbiAgcmV0dXJuIGlzVmlldyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xufTtcblxuZXhwb3J0IHZhciB0aWxlR3JvdXBQcm9wcyA9IHtcbiAgYWN0aXZlU3RhcnREYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBob3ZlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBpc01pbkRhdGUsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpbGVDbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBpc0NsYXNzTmFtZV0pLFxuICB0aWxlQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIHZhbHVlOiBpc1ZhbHVlLFxuICB2YWx1ZVR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5leHBvcnQgdmFyIHRpbGVQcm9wcyA9IHtcbiAgYWN0aXZlU3RhcnREYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBkYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IGlzTWF4RGF0ZSxcbiAgbWluRGF0ZTogaXNNaW5EYXRlLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSksXG4gIHRpbGVDbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBpc0NsYXNzTmFtZV0pLFxuICB0aWxlQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIHRpbGVEaXNhYmxlZDogUHJvcFR5cGVzLmZ1bmNcbn07IiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5pbXBvcnQgeyBnZXRSYW5nZSB9IGZyb20gJy4vZGF0ZXMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgbm8gc21hbGxlciB0aGFuIG1pbiBhbmQgbm8gbGFyZ2VyIHRoYW4gbWF4LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gcmV0dXJuLlxuICogQHBhcmFtIHsqfSBtaW4gTWluaW11bSByZXR1cm4gdmFsdWUuXG4gKiBAcGFyYW0geyp9IG1heCBNYXhpbXVtIHJldHVybiB2YWx1ZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmV0d2Vlbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKG1pbiAmJiBtaW4gPiB2YWx1ZSkge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAobWF4ICYmIG1heCA8IHZhbHVlKSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlV2l0aGluUmFuZ2UodmFsdWUsIHJhbmdlKSB7XG4gIHJldHVybiByYW5nZVswXSA8PSB2YWx1ZSAmJiByYW5nZVsxXSA+PSB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1JhbmdlV2l0aGluUmFuZ2UoZ3JlYXRlclJhbmdlLCBzbWFsbGVyUmFuZ2UpIHtcbiAgcmV0dXJuIGdyZWF0ZXJSYW5nZVswXSA8PSBzbWFsbGVyUmFuZ2VbMF0gJiYgZ3JlYXRlclJhbmdlWzFdID49IHNtYWxsZXJSYW5nZVsxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkb1Jhbmdlc092ZXJsYXAocmFuZ2UxLCByYW5nZTIpIHtcbiAgcmV0dXJuIGlzVmFsdWVXaXRoaW5SYW5nZShyYW5nZTFbMF0sIHJhbmdlMikgfHwgaXNWYWx1ZVdpdGhpblJhbmdlKHJhbmdlMVsxXSwgcmFuZ2UyKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZ2VDbGFzc05hbWVzKHZhbHVlUmFuZ2UsIGRhdGVSYW5nZSwgYmFzZUNsYXNzTmFtZSkge1xuICB2YXIgaXNSYW5nZSA9IGRvUmFuZ2VzT3ZlcmxhcChkYXRlUmFuZ2UsIHZhbHVlUmFuZ2UpO1xuICB2YXIgY2xhc3NlcyA9IFtdO1xuXG4gIGlmIChpc1JhbmdlKSB7XG4gICAgY2xhc3Nlcy5wdXNoKGJhc2VDbGFzc05hbWUpO1xuICAgIHZhciBpc1JhbmdlU3RhcnQgPSBpc1ZhbHVlV2l0aGluUmFuZ2UodmFsdWVSYW5nZVswXSwgZGF0ZVJhbmdlKTtcbiAgICB2YXIgaXNSYW5nZUVuZCA9IGlzVmFsdWVXaXRoaW5SYW5nZSh2YWx1ZVJhbmdlWzFdLCBkYXRlUmFuZ2UpO1xuXG4gICAgaWYgKGlzUmFuZ2VTdGFydCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiU3RhcnRcIikpO1xuICAgIH1cblxuICAgIGlmIChpc1JhbmdlRW5kKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJFbmRcIikpO1xuICAgIH1cblxuICAgIGlmIChpc1JhbmdlU3RhcnQgJiYgaXNSYW5nZUVuZCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiQm90aEVuZHNcIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlsZUNsYXNzZXMoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHZhbHVlVHlwZSA9IF9yZWYudmFsdWVUeXBlLFxuICAgICAgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIGRhdGVUeXBlID0gX3JlZi5kYXRlVHlwZSxcbiAgICAgIGhvdmVyID0gX3JlZi5ob3ZlcjtcblxuICB2YXIgY2xhc3NOYW1lID0gJ3JlYWN0LWNhbGVuZGFyX190aWxlJztcbiAgdmFyIGNsYXNzZXMgPSBbY2xhc3NOYW1lXTtcblxuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBBcnJheSkgJiYgIWRhdGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnZXRUaWxlQ2xhc3NlcygpOiBVbmFibGUgdG8gZ2V0IHRpbGUgYWN0aXZpdHkgY2xhc3NlcyBiZWNhdXNlIG9uZSBvciBtb3JlIHJlcXVpcmVkIGFyZ3VtZW50cyB3ZXJlIG5vdCBwYXNzZWQuJyk7XG4gIH1cblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRhdGVSYW5nZSA9IGRhdGUgaW5zdGFuY2VvZiBBcnJheSA/IGRhdGUgOiBnZXRSYW5nZShkYXRlVHlwZSwgZGF0ZSk7XG5cbiAgaWYgKGlzVmFsdWVXaXRoaW5SYW5nZShub3csIGRhdGVSYW5nZSkpIHtcbiAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0tbm93XCIpKTtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGlmICghKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpICYmICF2YWx1ZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFRpbGVDbGFzc2VzKCk6IFVuYWJsZSB0byBnZXQgdGlsZSBhY3Rpdml0eSBjbGFzc2VzIGJlY2F1c2Ugb25lIG9yIG1vcmUgcmVxdWlyZWQgYXJndW1lbnRzIHdlcmUgbm90IHBhc3NlZC4nKTtcbiAgfVxuXG4gIHZhciB2YWx1ZVJhbmdlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IHZhbHVlIDogZ2V0UmFuZ2UodmFsdWVUeXBlLCB2YWx1ZSk7XG5cbiAgaWYgKGlzUmFuZ2VXaXRoaW5SYW5nZSh2YWx1ZVJhbmdlLCBkYXRlUmFuZ2UpKSB7XG4gICAgY2xhc3Nlcy5wdXNoKFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItLWFjdGl2ZVwiKSk7XG4gIH0gZWxzZSBpZiAoZG9SYW5nZXNPdmVybGFwKHZhbHVlUmFuZ2UsIGRhdGVSYW5nZSkpIHtcbiAgICBjbGFzc2VzLnB1c2goXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0taGFzQWN0aXZlXCIpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZVJhbmdlQ2xhc3NOYW1lcyA9IGdldFJhbmdlQ2xhc3NOYW1lcyh2YWx1ZVJhbmdlLCBkYXRlUmFuZ2UsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItLXJhbmdlXCIpKTtcbiAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZVJhbmdlQ2xhc3NOYW1lcykpO1xuXG4gIGlmIChob3Zlcikge1xuICAgIHZhciBob3ZlclJhbmdlID0gaG92ZXIgPiB2YWx1ZVJhbmdlWzFdID8gW3ZhbHVlUmFuZ2VbMV0sIGhvdmVyXSA6IFtob3ZlciwgdmFsdWVSYW5nZVswXV07XG4gICAgdmFyIGhvdmVyUmFuZ2VDbGFzc05hbWVzID0gZ2V0UmFuZ2VDbGFzc05hbWVzKGhvdmVyUmFuZ2UsIGRhdGVSYW5nZSwgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0taG92ZXJcIikpO1xuICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCBfdG9Db25zdW1hYmxlQXJyYXkoaG92ZXJSYW5nZUNsYXNzTmFtZXMpKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2RhdGVVdGlscyA9IHJlcXVpcmUoXCJAd29qdGVrbWFqL2RhdGUtdXRpbHNcIik7XG5cbnZhciBfRGl2aWRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGl2aWRlclwiKSk7XG5cbnZhciBfRGF5SW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGVJbnB1dC9EYXlJbnB1dFwiKSk7XG5cbnZhciBfTW9udGhJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0ZUlucHV0L01vbnRoSW5wdXRcIikpO1xuXG52YXIgX01vbnRoU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EYXRlSW5wdXQvTW9udGhTZWxlY3RcIikpO1xuXG52YXIgX1llYXJJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0ZUlucHV0L1llYXJJbnB1dFwiKSk7XG5cbnZhciBfTmF0aXZlSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGVJbnB1dC9OYXRpdmVJbnB1dFwiKSk7XG5cbnZhciBfZGF0ZUZvcm1hdHRlciA9IHJlcXVpcmUoXCIuL3NoYXJlZC9kYXRlRm9ybWF0dGVyXCIpO1xuXG52YXIgX2RhdGVzID0gcmVxdWlyZShcIi4vc2hhcmVkL2RhdGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi9zaGFyZWQvcHJvcFR5cGVzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vc2hhcmVkL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgZGVmYXVsdE1pbkRhdGUgPSBuZXcgRGF0ZSgnMDAwMS0wMS0wMScpO1xudmFyIGRlZmF1bHRNYXhEYXRlID0gbmV3IERhdGUoOC42NGUxNSk7XG52YXIgYWxsVmlld3MgPSBbJ2NlbnR1cnknLCAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcbnZhciBhbGxWYWx1ZVR5cGVzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhbGxWaWV3cy5zbGljZSgxKSksIFsnZGF5J10pO1xuXG5mdW5jdGlvbiBkYXRlc0FyZURpZmZlcmVudChkYXRlMSwgZGF0ZTIpIHtcbiAgcmV0dXJuIGRhdGUxICYmICFkYXRlMiB8fCAhZGF0ZTEgJiYgZGF0ZTIgfHwgZGF0ZTEgJiYgZGF0ZTIgJiYgZGF0ZTEuZ2V0VGltZSgpICE9PSBkYXRlMi5nZXRUaW1lKCk7XG59XG4vKipcbiAqIFJldHVybnMgdmFsdWUgdHlwZSB0aGF0IGNhbiBiZSByZXR1cm5lZCB3aXRoIGN1cnJlbnRseSBhcHBsaWVkIHNldHRpbmdzLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVUeXBlKG1heERldGFpbCkge1xuICByZXR1cm4gYWxsVmFsdWVUeXBlc1thbGxWaWV3cy5pbmRleE9mKG1heERldGFpbCldO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSwgaW5kZXgpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHJhd1ZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWx1ZS5sZW5ndGggPT09IDIgPyB2YWx1ZVtpbmRleF0gOiB2YWx1ZTtcblxuICBpZiAoIXJhd1ZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdmFsdWVEYXRlID0gbmV3IERhdGUocmF3VmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZURhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZTogXCIuY29uY2F0KHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWVEYXRlO1xufVxuXG5mdW5jdGlvbiBnZXREZXRhaWxWYWx1ZShfcmVmLCBpbmRleCkge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtYXhEZXRhaWwgPSBfcmVmLm1heERldGFpbDtcbiAgdmFyIHZhbHVlUGllY2UgPSBnZXRWYWx1ZSh2YWx1ZSwgaW5kZXgpO1xuXG4gIGlmICghdmFsdWVQaWVjZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHZhbHVlVHlwZSA9IGdldFZhbHVlVHlwZShtYXhEZXRhaWwpO1xuICB2YXIgZGV0YWlsVmFsdWVGcm9tID0gW19kYXRlcy5nZXRCZWdpbiwgX2RhdGVzLmdldEVuZF1baW5kZXhdKHZhbHVlVHlwZSwgdmFsdWVQaWVjZSk7XG4gIHJldHVybiAoMCwgX3V0aWxzLmJldHdlZW4pKGRldGFpbFZhbHVlRnJvbSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG59XG5cbnZhciBnZXREZXRhaWxWYWx1ZUZyb20gPSBmdW5jdGlvbiBnZXREZXRhaWxWYWx1ZUZyb20oYXJncykge1xuICByZXR1cm4gZ2V0RGV0YWlsVmFsdWUoYXJncywgMCk7XG59O1xuXG52YXIgZ2V0RGV0YWlsVmFsdWVUbyA9IGZ1bmN0aW9uIGdldERldGFpbFZhbHVlVG8oYXJncykge1xuICByZXR1cm4gZ2V0RGV0YWlsVmFsdWUoYXJncywgMSk7XG59O1xuXG52YXIgZ2V0RGV0YWlsVmFsdWVBcnJheSA9IGZ1bmN0aW9uIGdldERldGFpbFZhbHVlQXJyYXkoYXJncykge1xuICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlO1xuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIFtnZXREZXRhaWxWYWx1ZUZyb20sIGdldERldGFpbFZhbHVlVG9dLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gZm4oYXJncyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gaXNJbnRlcm5hbElucHV0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlucHV0JykgPT09ICd0cnVlJztcbn1cblxuZnVuY3Rpb24gZmluZElucHV0KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHZhciBuZXh0RWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgZG8ge1xuICAgIG5leHRFbGVtZW50ID0gbmV4dEVsZW1lbnRbcHJvcGVydHldO1xuICB9IHdoaWxlIChuZXh0RWxlbWVudCAmJiAhaXNJbnRlcm5hbElucHV0KG5leHRFbGVtZW50KSk7XG5cbiAgcmV0dXJuIG5leHRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBmb2N1cyhlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJDdXN0b21JbnB1dHMocGxhY2Vob2xkZXIsIGVsZW1lbnRGdW5jdGlvbnMsIGFsbG93TXVsdGlwbGVJbnN0YW5jZXMpIHtcbiAgdmFyIHVzZWRGdW5jdGlvbnMgPSBbXTtcbiAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKE9iamVjdC5rZXlzKGVsZW1lbnRGdW5jdGlvbnMpLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZWwsIFwiK1wiKTtcbiAgfSkuam9pbignfCcpLCAnZycpO1xuICB2YXIgbWF0Y2hlcyA9IHBsYWNlaG9sZGVyLm1hdGNoKHBhdHRlcm4pO1xuICByZXR1cm4gcGxhY2Vob2xkZXIuc3BsaXQocGF0dGVybikucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGVsZW1lbnQsIGluZGV4KSB7XG4gICAgdmFyIGRpdmlkZXIgPSBlbGVtZW50ICYmXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0RpdmlkZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBrZXk6IFwic2VwYXJhdG9yX1wiLmNvbmNhdChpbmRleClcbiAgICB9LCBlbGVtZW50KTtcblxuICAgIHZhciByZXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyciksIFtkaXZpZGVyXSk7XG4gICAgdmFyIGN1cnJlbnRNYXRjaCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1tpbmRleF07XG5cbiAgICBpZiAoY3VycmVudE1hdGNoKSB7XG4gICAgICB2YXIgcmVuZGVyRnVuY3Rpb24gPSBlbGVtZW50RnVuY3Rpb25zW2N1cnJlbnRNYXRjaF0gfHwgZWxlbWVudEZ1bmN0aW9uc1tPYmplY3Qua2V5cyhlbGVtZW50RnVuY3Rpb25zKS5maW5kKGZ1bmN0aW9uIChlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNYXRjaC5tYXRjaChlbGVtZW50RnVuY3Rpb24pO1xuICAgICAgfSldO1xuXG4gICAgICBpZiAoIWFsbG93TXVsdGlwbGVJbnN0YW5jZXMgJiYgdXNlZEZ1bmN0aW9ucy5pbmNsdWRlcyhyZW5kZXJGdW5jdGlvbikpIHtcbiAgICAgICAgcmVzLnB1c2goY3VycmVudE1hdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5wdXNoKHJlbmRlckZ1bmN0aW9uKGN1cnJlbnRNYXRjaCwgaW5kZXgpKTtcbiAgICAgICAgdXNlZEZ1bmN0aW9ucy5wdXNoKHJlbmRlckZ1bmN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9LCBbXSk7XG59XG5cbnZhciBEYXRlSW5wdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRlSW5wdXQsIF9QdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERhdGVJbnB1dCk7XG5cbiAgZnVuY3Rpb24gRGF0ZUlucHV0KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlSW5wdXQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICB5ZWFyOiBudWxsLFxuICAgICAgbW9udGg6IG51bGwsXG4gICAgICBkYXk6IG51bGxcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAvLyBXcmFwcGVyIHdhcyBkaXJlY3RseSBjbGlja2VkXG4gICAgICAgIHZhciBmaXJzdElucHV0ID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdO1xuICAgICAgICBmb2N1cyhmaXJzdElucHV0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbktleURvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSBfdGhpcy5kaXZpZGVyOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnID8gJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnIDogJ25leHRFbGVtZW50U2libGluZyc7XG4gICAgICAgICAgICB2YXIgbmV4dElucHV0ID0gZmluZElucHV0KGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICBmb2N1cyhuZXh0SW5wdXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25LZXlVcFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICAgICAgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB2YXIgaXNOdW1iZXJLZXkgPSAhaXNOYU4ocGFyc2VJbnQoa2V5LCAxMCkpO1xuXG4gICAgICBpZiAoIWlzTnVtYmVyS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICB2YXIgbWF4ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKTtcbiAgICAgIC8qKlxuICAgICAgICogR2l2ZW4gMSwgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIG51bWJlciB0aGUgdXNlciBjb3VsZCB0eXBlIGJ5IGFkZGluZyBhbm90aGVyIGRpZ2l0IGlzIDEwLlxuICAgICAgICogMTAgd291bGQgYmUgYSB2YWxpZCB2YWx1ZSBnaXZlbiBtYXggPSAxMiwgc28gd2Ugd29uJ3QganVtcCB0byB0aGUgbmV4dCBpbnB1dC5cbiAgICAgICAqIEhvd2V2ZXIsIGdpdmVuIDIsIHNtYWxsZXJzIHBvc3NpYmxlIG51bWJlciB3b3VsZCBiZSAyMCwgYW5kIHRodXMga2VlcGluZyB0aGUgZm9jdXMgaW5cbiAgICAgICAqIHRoaXMgZmllbGQgZG9lc24ndCBtYWtlIHNlbnNlLlxuICAgICAgICovXG5cbiAgICAgIGlmICh2YWx1ZSAqIDEwID4gbWF4IHx8IHZhbHVlLmxlbmd0aCA+PSBtYXgubGVuZ3RoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9ICduZXh0RWxlbWVudFNpYmxpbmcnO1xuICAgICAgICB2YXIgbmV4dElucHV0ID0gZmluZElucHV0KGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGZvY3VzKG5leHRJbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX2V2ZW50JHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICBuYW1lID0gX2V2ZW50JHRhcmdldC5uYW1lLFxuICAgICAgICAgIHZhbHVlID0gX2V2ZW50JHRhcmdldC52YWx1ZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlLCAxMCkgOiBudWxsKSwgX3RoaXMub25DaGFuZ2VFeHRlcm5hbCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VOYXRpdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKCFvbkNoYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdCA9IHZhbHVlLnNwbGl0KCctJyksXG4gICAgICAgICAgICBfdmFsdWUkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0LCAzKSxcbiAgICAgICAgICAgIHllYXJTdHJpbmcgPSBfdmFsdWUkc3BsaXQyWzBdLFxuICAgICAgICAgICAgbW9udGhTdHJpbmcgPSBfdmFsdWUkc3BsaXQyWzFdLFxuICAgICAgICAgICAgZGF5U3RyaW5nID0gX3ZhbHVlJHNwbGl0MlsyXTtcblxuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHJpbmcsIDEwKTtcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBwYXJzZUludChtb250aFN0cmluZywgMTApIC0gMSB8fCAwO1xuICAgICAgICB2YXIgZGF5ID0gcGFyc2VJbnQoZGF5U3RyaW5nLCAxMCkgfHwgMTtcbiAgICAgICAgdmFyIHByb3Bvc2VkVmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBwcm9wb3NlZFZhbHVlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XG4gICAgICAgIHByb3Bvc2VkVmFsdWUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBwcm9wb3NlZFZhbHVlO1xuICAgICAgfSgpO1xuXG4gICAgICBvbkNoYW5nZShwcm9jZXNzZWRWYWx1ZSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2hhbmdlRXh0ZXJuYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmICghb25DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybUVsZW1lbnRzID0gW190aGlzLmRheUlucHV0LCBfdGhpcy5tb250aElucHV0LCBfdGhpcy55ZWFySW5wdXRdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtRWxlbWVudCkge1xuICAgICAgICB2YWx1ZXNbZm9ybUVsZW1lbnQubmFtZV0gPSBmb3JtRWxlbWVudC52YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZm9ybUVsZW1lbnRzLmV2ZXJ5KGZ1bmN0aW9uIChmb3JtRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gIWZvcm1FbGVtZW50LnZhbHVlO1xuICAgICAgfSkpIHtcbiAgICAgICAgb25DaGFuZ2UobnVsbCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChmb3JtRWxlbWVudHMuZXZlcnkoZnVuY3Rpb24gKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmb3JtRWxlbWVudC52YWx1ZSAmJiBmb3JtRWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQodmFsdWVzLnllYXIsIDEwKTtcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBwYXJzZUludCh2YWx1ZXMubW9udGgsIDEwKSAtIDEgfHwgMDtcbiAgICAgICAgdmFyIGRheSA9IHBhcnNlSW50KHZhbHVlcy5kYXkgfHwgMSwgMTApO1xuICAgICAgICB2YXIgcHJvcG9zZWRWYWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHByb3Bvc2VkVmFsdWUuc2V0RnVsbFllYXIoeWVhciwgbW9udGhJbmRleCwgZGF5KTtcbiAgICAgICAgcHJvcG9zZWRWYWx1ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSBfdGhpcy5nZXRQcm9jZXNzZWRWYWx1ZShwcm9wb3NlZFZhbHVlKTtcblxuICAgICAgICBvbkNoYW5nZShwcm9jZXNzZWRWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlckRheVwiLCBmdW5jdGlvbiAoY3VycmVudE1hdGNoLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICAgIGRheUFyaWFMYWJlbCA9IF90aGlzJHByb3BzLmRheUFyaWFMYWJlbCxcbiAgICAgICAgICBkYXlQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzLmRheVBsYWNlaG9sZGVyLFxuICAgICAgICAgIHNob3dMZWFkaW5nWmVyb3MgPSBfdGhpcyRwcm9wcy5zaG93TGVhZGluZ1plcm9zO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZGF5ID0gX3RoaXMkc3RhdGUuZGF5LFxuICAgICAgICAgIG1vbnRoID0gX3RoaXMkc3RhdGUubW9udGgsXG4gICAgICAgICAgeWVhciA9IF90aGlzJHN0YXRlLnllYXI7XG5cbiAgICAgIGlmIChjdXJyZW50TWF0Y2ggJiYgY3VycmVudE1hdGNoLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdG9rZW46IFwiLmNvbmNhdChjdXJyZW50TWF0Y2gpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dMZWFkaW5nWmVyb3NGcm9tRm9ybWF0ID0gY3VycmVudE1hdGNoICYmIGN1cnJlbnRNYXRjaC5sZW5ndGggPT09IDI7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfRGF5SW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJkYXlcIlxuICAgICAgfSwgX3RoaXMuY29tbW9uSW5wdXRQcm9wcywge1xuICAgICAgICBhcmlhTGFiZWw6IGRheUFyaWFMYWJlbCxcbiAgICAgICAgYXV0b0ZvY3VzOiBpbmRleCA9PT0gMCAmJiBhdXRvRm9jdXMsXG4gICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IGRheVBsYWNlaG9sZGVyLFxuICAgICAgICBzaG93TGVhZGluZ1plcm9zOiBzaG93TGVhZGluZ1plcm9zRnJvbUZvcm1hdCB8fCBzaG93TGVhZGluZ1plcm9zLFxuICAgICAgICB2YWx1ZTogZGF5LFxuICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyTW9udGhcIiwgZnVuY3Rpb24gKGN1cnJlbnRNYXRjaCwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wczIuYXV0b0ZvY3VzLFxuICAgICAgICAgIGxvY2FsZSA9IF90aGlzJHByb3BzMi5sb2NhbGUsXG4gICAgICAgICAgbW9udGhBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczIubW9udGhBcmlhTGFiZWwsXG4gICAgICAgICAgbW9udGhQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMi5tb250aFBsYWNlaG9sZGVyLFxuICAgICAgICAgIHNob3dMZWFkaW5nWmVyb3MgPSBfdGhpcyRwcm9wczIuc2hvd0xlYWRpbmdaZXJvcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBtb250aCA9IF90aGlzJHN0YXRlMi5tb250aCxcbiAgICAgICAgICB5ZWFyID0gX3RoaXMkc3RhdGUyLnllYXI7XG5cbiAgICAgIGlmIChjdXJyZW50TWF0Y2ggJiYgY3VycmVudE1hdGNoLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdG9rZW46IFwiLmNvbmNhdChjdXJyZW50TWF0Y2gpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRNYXRjaC5sZW5ndGggPiAyKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Nb250aFNlbGVjdFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgICBrZXk6IFwibW9udGhcIlxuICAgICAgICB9LCBfdGhpcy5jb21tb25JbnB1dFByb3BzLCB7XG4gICAgICAgICAgYXJpYUxhYmVsOiBtb250aEFyaWFMYWJlbCxcbiAgICAgICAgICBhdXRvRm9jdXM6IGluZGV4ID09PSAwICYmIGF1dG9Gb2N1cyxcbiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogbW9udGhQbGFjZWhvbGRlcixcbiAgICAgICAgICBcInNob3J0XCI6IGN1cnJlbnRNYXRjaC5sZW5ndGggPT09IDMsXG4gICAgICAgICAgdmFsdWU6IG1vbnRoLFxuICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0xlYWRpbmdaZXJvc0Zyb21Gb3JtYXQgPSBjdXJyZW50TWF0Y2ggJiYgY3VycmVudE1hdGNoLmxlbmd0aCA9PT0gMjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Nb250aElucHV0W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IFwibW9udGhcIlxuICAgICAgfSwgX3RoaXMuY29tbW9uSW5wdXRQcm9wcywge1xuICAgICAgICBhcmlhTGFiZWw6IG1vbnRoQXJpYUxhYmVsLFxuICAgICAgICBhdXRvRm9jdXM6IGluZGV4ID09PSAwICYmIGF1dG9Gb2N1cyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IG1vbnRoUGxhY2Vob2xkZXIsXG4gICAgICAgIHNob3dMZWFkaW5nWmVyb3M6IHNob3dMZWFkaW5nWmVyb3NGcm9tRm9ybWF0IHx8IHNob3dMZWFkaW5nWmVyb3MsXG4gICAgICAgIHZhbHVlOiBtb250aCxcbiAgICAgICAgeWVhcjogeWVhclxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlclllYXJcIiwgZnVuY3Rpb24gKGN1cnJlbnRNYXRjaCwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wczMuYXV0b0ZvY3VzLFxuICAgICAgICAgIHllYXJBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczMueWVhckFyaWFMYWJlbCxcbiAgICAgICAgICB5ZWFyUGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczMueWVhclBsYWNlaG9sZGVyO1xuICAgICAgdmFyIHllYXIgPSBfdGhpcy5zdGF0ZS55ZWFyO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1llYXJJbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBcInllYXJcIlxuICAgICAgfSwgX3RoaXMuY29tbW9uSW5wdXRQcm9wcywge1xuICAgICAgICBhcmlhTGFiZWw6IHllYXJBcmlhTGFiZWwsXG4gICAgICAgIGF1dG9Gb2N1czogaW5kZXggPT09IDAgJiYgYXV0b0ZvY3VzLFxuICAgICAgICBwbGFjZWhvbGRlcjogeWVhclBsYWNlaG9sZGVyLFxuICAgICAgICB2YWx1ZTogeWVhcixcbiAgICAgICAgdmFsdWVUeXBlOiBfdGhpcy52YWx1ZVR5cGVcbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlSW5wdXQsIFt7XG4gICAga2V5OiBcImdldFByb2Nlc3NlZFZhbHVlXCIsXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGN1cnJlbnQgdmFsdWUgaW4gYSBkZXNpcmVkIGZvcm1hdC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJvY2Vzc2VkVmFsdWUodmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczQubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM0Lm1heERhdGUsXG4gICAgICAgICAgbWF4RGV0YWlsID0gX3RoaXMkcHJvcHM0Lm1heERldGFpbCxcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IF90aGlzJHByb3BzNC5yZXR1cm5WYWx1ZTtcblxuICAgICAgdmFyIHByb2Nlc3NGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZUZyb207XG5cbiAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgcmV0dXJuIGdldERldGFpbFZhbHVlVG87XG5cbiAgICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGV0YWlsVmFsdWVBcnJheTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmV0dXJuVmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICAgIH0oKTtcblxuICAgICAgcmV0dXJuIHByb2Nlc3NGdW5jdGlvbih7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgbWF4RGV0YWlsOiBtYXhEZXRhaWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDdXN0b21JbnB1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ3VzdG9tSW5wdXRzKCkge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcbiAgICAgIHZhciBlbGVtZW50RnVuY3Rpb25zID0ge1xuICAgICAgICBkOiB0aGlzLnJlbmRlckRheSxcbiAgICAgICAgTTogdGhpcy5yZW5kZXJNb250aCxcbiAgICAgICAgeTogdGhpcy5yZW5kZXJZZWFyXG4gICAgICB9O1xuICAgICAgdmFyIGFsbG93TXVsdGlwbGVJbnN0YW5jZXMgPSB0eXBlb2YgZm9ybWF0ICE9PSAndW5kZWZpbmVkJztcbiAgICAgIHJldHVybiBfcmVuZGVyQ3VzdG9tSW5wdXRzKHBsYWNlaG9sZGVyLCBlbGVtZW50RnVuY3Rpb25zLCBhbGxvd011bHRpcGxlSW5zdGFuY2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTmF0aXZlSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTmF0aXZlSW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzNS5kaXNhYmxlZCxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM1Lm1heERhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzNS5taW5EYXRlLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczUubmFtZSxcbiAgICAgICAgICBuYXRpdmVJbnB1dEFyaWFMYWJlbCA9IF90aGlzJHByb3BzNS5uYXRpdmVJbnB1dEFyaWFMYWJlbCxcbiAgICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzNS5yZXF1aXJlZDtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfTmF0aXZlSW5wdXRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGtleTogXCJkYXRlXCIsXG4gICAgICAgIGFyaWFMYWJlbDogbmF0aXZlSW5wdXRBcmlhTGFiZWwsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSB8fCBkZWZhdWx0TWF4RGF0ZSxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSB8fCBkZWZhdWx0TWluRGF0ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VOYXRpdmUsXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB2YWx1ZVR5cGU6IHRoaXMudmFsdWVUeXBlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cblxuICAgICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgICAgfSwgdGhpcy5yZW5kZXJOYXRpdmVJbnB1dCgpLCB0aGlzLnJlbmRlckN1c3RvbUlucHV0cygpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0RGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIG1heERldGFpbCA9IHRoaXMucHJvcHMubWF4RGV0YWlsO1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgICAgfTtcbiAgICAgIHZhciBsZXZlbCA9IGFsbFZpZXdzLmluZGV4T2YobWF4RGV0YWlsKTtcblxuICAgICAgaWYgKGxldmVsID49IDIpIHtcbiAgICAgICAgb3B0aW9ucy5tb250aCA9ICdudW1lcmljJztcbiAgICAgIH1cblxuICAgICAgaWYgKGxldmVsID49IDMpIHtcbiAgICAgICAgb3B0aW9ucy5kYXkgPSAnbnVtZXJpYyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2RhdGVGb3JtYXR0ZXIuZ2V0Rm9ybWF0dGVyKShvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGl2aWRlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIubWF0Y2goL1teMC05YS16XS9pKVswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF90aGlzJHByb3BzNi5mb3JtYXQsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHM2LmxvY2FsZTtcblxuICAgICAgaWYgKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgfVxuXG4gICAgICB2YXIgeWVhciA9IDIwMTc7XG4gICAgICB2YXIgbW9udGhJbmRleCA9IDExO1xuICAgICAgdmFyIGRheSA9IDExO1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICAgICAgdmFyIGZvcm1hdHRlZERhdGUgPSB0aGlzLmZvcm1hdERhdGUobG9jYWxlLCBkYXRlKTtcbiAgICAgIHZhciBkYXRlUGllY2VzID0gWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddO1xuICAgICAgdmFyIGRhdGVQaWVjZVJlcGxhY2VtZW50cyA9IFsneScsICdNJywgJ2QnXTtcblxuICAgICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVBpZWNlKG5hbWUsIGRhdGVUb0Zvcm1hdCkge1xuICAgICAgICByZXR1cm4gKDAsIF9kYXRlRm9ybWF0dGVyLmdldEZvcm1hdHRlcikoX2RlZmluZVByb3BlcnR5KHtcbiAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgICAgfSwgbmFtZSwgJ251bWVyaWMnKSkobG9jYWxlLCBkYXRlVG9Gb3JtYXQpLm1hdGNoKC9cXGR7MSx9Lyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IGZvcm1hdHRlZERhdGU7XG4gICAgICBkYXRlUGllY2VzLmZvckVhY2goZnVuY3Rpb24gKGRhdGVQaWVjZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZERhdGVQaWVjZSA9IGZvcm1hdERhdGVQaWVjZShkYXRlUGllY2UsIGRhdGUpO1xuICAgICAgICB2YXIgZGF0ZVBpZWNlUmVwbGFjZW1lbnQgPSBkYXRlUGllY2VSZXBsYWNlbWVudHNbaW5kZXhdO1xuICAgICAgICBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyLnJlcGxhY2UoZm9ybWF0dGVkRGF0ZVBpZWNlLCBkYXRlUGllY2VSZXBsYWNlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tbW9uSW5wdXRQcm9wc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczcuZGlzYWJsZWQsXG4gICAgICAgICAgaXNDYWxlbmRhck9wZW4gPSBfdGhpcyRwcm9wczcuaXNDYWxlbmRhck9wZW4sXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzNy5tYXhEYXRlLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczcubWluRGF0ZSxcbiAgICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzNy5yZXF1aXJlZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG1heERhdGU6IG1heERhdGUgfHwgZGVmYXVsdE1heERhdGUsXG4gICAgICAgIG1pbkRhdGU6IG1pbkRhdGUgfHwgZGVmYXVsdE1pbkRhdGUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICBvbktleVVwOiB0aGlzLm9uS2V5VXAsXG4gICAgICAgIC8vIFRoaXMgaXMgb25seSBmb3Igc2hvd2luZyB2YWxpZGl0eSB3aGVuIGVkaXRpbmdcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkIHx8IGlzQ2FsZW5kYXJPcGVuLFxuICAgICAgICBpdGVtUmVmOiBmdW5jdGlvbiBpdGVtUmVmKHJlZiwgbmFtZSkge1xuICAgICAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gZWFjaCBpbnB1dCBmaWVsZFxuICAgICAgICAgIF90aGlzMltcIlwiLmNvbmNhdChuYW1lLCBcIklucHV0XCIpXSA9IHJlZjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVUeXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbWF4RGV0YWlsID0gdGhpcy5wcm9wcy5tYXhEZXRhaWw7XG4gICAgICByZXR1cm4gZ2V0VmFsdWVUeXBlKG1heERldGFpbCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIG1pbkRhdGUgPSBuZXh0UHJvcHMubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gbmV4dFByb3BzLm1heERhdGUsXG4gICAgICAgICAgbWF4RGV0YWlsID0gbmV4dFByb3BzLm1heERldGFpbDtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICAgIC8qKlxuICAgICAgICogSWYgaXNDYWxlbmRhck9wZW4gZmxhZyBoYXMgY2hhbmdlZCwgd2UgaGF2ZSB0byB1cGRhdGUgaXQuXG4gICAgICAgKiBJdCdzIHNhdmVkIGluIHN0YXRlIHB1cmVseSBmb3IgdXNlIGluIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgICAgICAqL1xuXG4gICAgICBpZiAobmV4dFByb3BzLmlzQ2FsZW5kYXJPcGVuICE9PSBwcmV2U3RhdGUuaXNDYWxlbmRhck9wZW4pIHtcbiAgICAgICAgbmV4dFN0YXRlLmlzQ2FsZW5kYXJPcGVuID0gbmV4dFByb3BzLmlzQ2FsZW5kYXJPcGVuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgbmV4dCB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBvbmUgICh3aXRoIGFuIGV4Y2VwdGlvbiBvZiBzaXR1YXRpb24gaW5cbiAgICAgICAqIHdoaWNoIHZhbHVlcyBwcm92aWRlZCBhcmUgbGltaXRlZCBieSBtaW5EYXRlIGFuZCBtYXhEYXRlIHNvIHRoYXQgdGhlIGRhdGVzIGFyZSB0aGUgc2FtZSksXG4gICAgICAgKiBnZXQgYSBuZXcgb25lLlxuICAgICAgICovXG5cblxuICAgICAgdmFyIG5leHRWYWx1ZSA9IGdldERldGFpbFZhbHVlRnJvbSh7XG4gICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWUsXG4gICAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgIG1heERldGFpbDogbWF4RGV0YWlsXG4gICAgICB9KTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbbmV4dFZhbHVlLCBwcmV2U3RhdGUudmFsdWVdO1xuXG4gICAgICBpZiAoIC8vIFRvZ2dsaW5nIGNhbGVuZGFyIHZpc2liaWxpdHkgcmVzZXRzIHZhbHVlc1xuICAgICAgbmV4dFN0YXRlLmlzQ2FsZW5kYXJPcGVuIC8vIEZsYWcgd2FzIHRvZ2dsZWRcbiAgICAgIHx8IGRhdGVzQXJlRGlmZmVyZW50LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZUZyb20oe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgICAgbWF4RGV0YWlsOiBtYXhEZXRhaWxcbiAgICAgICAgfSk7XG4gICAgICB9KSkpIHx8IGRhdGVzQXJlRGlmZmVyZW50LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXREZXRhaWxWYWx1ZVRvKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICAgIG1heERldGFpbDogbWF4RGV0YWlsXG4gICAgICAgIH0pO1xuICAgICAgfSkpKSkge1xuICAgICAgICBpZiAobmV4dFZhbHVlKSB7XG4gICAgICAgICAgbmV4dFN0YXRlLnllYXIgPSAoMCwgX2RhdGVVdGlscy5nZXRZZWFyKShuZXh0VmFsdWUpO1xuICAgICAgICAgIG5leHRTdGF0ZS5tb250aCA9ICgwLCBfZGF0ZVV0aWxzLmdldE1vbnRoSHVtYW4pKG5leHRWYWx1ZSk7XG4gICAgICAgICAgbmV4dFN0YXRlLmRheSA9ICgwLCBfZGF0ZVV0aWxzLmdldERhdGUpKG5leHRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dFN0YXRlLnllYXIgPSBudWxsO1xuICAgICAgICAgIG5leHRTdGF0ZS5tb250aCA9IG51bGw7XG4gICAgICAgICAgbmV4dFN0YXRlLmRheSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0U3RhdGUudmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVJbnB1dDtcbn0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERhdGVJbnB1dDtcbkRhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1heERldGFpbDogJ21vbnRoJyxcbiAgbmFtZTogJ2RhdGUnLFxuICByZXR1cm5WYWx1ZTogJ3N0YXJ0J1xufTtcblxudmFyIGlzVmFsdWUgPSBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uaW5zdGFuY2VPZihEYXRlKV0pO1xuXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xuICBhdXRvRm9jdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRheUFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkYXlQbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgZm9ybWF0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGlzQ2FsZW5kYXJPcGVuOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBsb2NhbGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtYXhEZXRhaWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKGFsbFZpZXdzKSxcbiAgbWluRGF0ZTogX3Byb3BUeXBlczIuaXNNaW5EYXRlLFxuICBtb250aEFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb250aFBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG5hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmF0aXZlSW5wdXRBcmlhTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXR1cm5WYWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2YoWydzdGFydCcsICdlbmQnLCAncmFuZ2UnXSksXG4gIHNob3dMZWFkaW5nWmVyb3M6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW2lzVmFsdWUsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoaXNWYWx1ZSldKSxcbiAgeWVhckFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB5ZWFyUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGF5SW5wdXQ7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZShcIkB3b2p0ZWttYWovZGF0ZS11dGlsc1wiKTtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBEYXlJbnB1dChfcmVmKSB7XG4gIHZhciBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1vbnRoID0gX3JlZi5tb250aCxcbiAgICAgIHllYXIgPSBfcmVmLnllYXIsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm1heERhdGVcIiwgXCJtaW5EYXRlXCIsIFwibW9udGhcIiwgXCJ5ZWFyXCJdKTtcblxuICB2YXIgY3VycmVudE1vbnRoTWF4RGF5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1vbnRoKSB7XG4gICAgICByZXR1cm4gMzE7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldERheXNJbk1vbnRoKShuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpKTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSAmJiB5ZWFyID09PSAoMCwgX2RhdGVVdGlscy5nZXRZZWFyKShkYXRlKSAmJiBtb250aCA9PT0gKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhIdW1hbikoZGF0ZSk7XG4gIH1cblxuICB2YXIgbWF4RGF5ID0gKDAsIF91dGlscy5zYWZlTWluKShjdXJyZW50TW9udGhNYXhEYXlzLCBpc1NhbWVNb250aChtYXhEYXRlKSAmJiAoMCwgX2RhdGVVdGlscy5nZXREYXRlKShtYXhEYXRlKSk7XG4gIHZhciBtaW5EYXkgPSAoMCwgX3V0aWxzLnNhZmVNYXgpKDEsIGlzU2FtZU1vbnRoKG1pbkRhdGUpICYmICgwLCBfZGF0ZVV0aWxzLmdldERhdGUpKG1pbkRhdGUpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0lucHV0W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgIG1heDogbWF4RGF5LFxuICAgIG1pbjogbWluRGF5LFxuICAgIG5hbWU6IFwiZGF5XCJcbiAgfSwgb3RoZXJQcm9wcykpO1xufVxuXG5EYXlJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXRlbVJlZjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG1vbnRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5VXA6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaG93TGVhZGluZ1plcm9zOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICB5ZWFyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW5wdXQ7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfbWVyZ2VDbGFzc05hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWVyZ2UtY2xhc3MtbmFtZXNcIikpO1xuXG52YXIgX3VwZGF0ZUlucHV0V2lkdGggPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwidXBkYXRlLWlucHV0LXdpZHRoXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLWF1dG9mb2N1cyAqL1xudmFyIGlzRWRnZUxlZ2FjeSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICduYXZpZ2F0b3InIGluIHdpbmRvdyAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8gRWRnZVxcLzEvKTtcblxuZnVuY3Rpb24gb25Gb2N1cyhldmVudCkge1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIGlmIChpc0VkZ2VMZWdhY3kpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuc2VsZWN0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aE9uRm9udExvYWQoZWxlbWVudCkge1xuICBpZiAoIWRvY3VtZW50LmZvbnRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGZvbnQgPSAoMCwgX3VwZGF0ZUlucHV0V2lkdGguZ2V0Rm9udFNob3J0aGFuZCkoZWxlbWVudCk7XG5cbiAgaWYgKCFmb250KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlzRm9udExvYWRlZCA9IGRvY3VtZW50LmZvbnRzLmNoZWNrKGZvbnQpO1xuXG4gIGlmIChpc0ZvbnRMb2FkZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBvbkxvYWRpbmdEb25lKCkge1xuICAgICgwLCBfdXBkYXRlSW5wdXRXaWR0aFtcImRlZmF1bHRcIl0pKGVsZW1lbnQpO1xuICB9XG5cbiAgZG9jdW1lbnQuZm9udHMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGluZ2RvbmUnLCBvbkxvYWRpbmdEb25lKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uU3RyaW5nKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gbWFrZU9uS2V5UHJlc3MobWF4TGVuZ3RoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleSxcbiAgICAgICAgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgdmFyIGlzTnVtYmVyS2V5ID0gIWlzTmFOKHBhcnNlSW50KGtleSwgMTApKTtcbiAgICB2YXIgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uU3RyaW5nKCk7XG5cbiAgICBpZiAoaXNOdW1iZXJLZXkgJiYgKHNlbGVjdGlvbiB8fCB2YWx1ZS5sZW5ndGggPCBtYXhMZW5ndGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5wdXQoX3JlZikge1xuICB2YXIgYXJpYUxhYmVsID0gX3JlZi5hcmlhTGFiZWwsXG4gICAgICBhdXRvRm9jdXMgPSBfcmVmLmF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgaXRlbVJlZiA9IF9yZWYuaXRlbVJlZixcbiAgICAgIG1heCA9IF9yZWYubWF4LFxuICAgICAgbWluID0gX3JlZi5taW4sXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgbmFtZUZvckNsYXNzID0gX3JlZi5uYW1lRm9yQ2xhc3MsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvbktleURvd24gPSBfcmVmLm9uS2V5RG93bixcbiAgICAgIF9vbktleVVwID0gX3JlZi5vbktleVVwLFxuICAgICAgX3JlZiRwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/ICctLScgOiBfcmVmJHBsYWNlaG9sZGVyLFxuICAgICAgcmVxdWlyZWQgPSBfcmVmLnJlcXVpcmVkLFxuICAgICAgc2hvd0xlYWRpbmdaZXJvcyA9IF9yZWYuc2hvd0xlYWRpbmdaZXJvcyxcbiAgICAgIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBoYXNMZWFkaW5nWmVybyA9IHNob3dMZWFkaW5nWmVyb3MgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgPCAxMDtcbiAgdmFyIG1heExlbmd0aCA9IG1heC50b1N0cmluZygpLmxlbmd0aDtcbiAgcmV0dXJuIFtoYXNMZWFkaW5nWmVybyAmJiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAga2V5OiBcImxlYWRpbmdaZXJvXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19sZWFkaW5nWmVyb1wiKVxuICB9LCBcIjBcIiksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAga2V5OiBcImlucHV0XCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgY2xhc3NOYW1lOiAoMCwgX21lcmdlQ2xhc3NOYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJfX2lucHV0XCIpLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19cIikuY29uY2F0KG5hbWVGb3JDbGFzcyB8fCBuYW1lKSwgaGFzTGVhZGluZ1plcm8gJiYgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIl9faW5wdXQtLWhhc0xlYWRpbmdaZXJvXCIpKSxcbiAgICBcImRhdGEtaW5wdXRcIjogXCJ0cnVlXCIsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGlucHV0TW9kZTogXCJudW1lcmljXCIsXG4gICAgbWF4OiBtYXgsXG4gICAgbWluOiBtaW4sXG4gICAgbmFtZTogbmFtZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBvbktleVByZXNzOiBtYWtlT25LZXlQcmVzcyhtYXhMZW5ndGgpLFxuICAgIG9uS2V5VXA6IGZ1bmN0aW9uIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICgwLCBfdXBkYXRlSW5wdXRXaWR0aFtcImRlZmF1bHRcIl0pKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmIChfb25LZXlVcCkge1xuICAgICAgICBfb25LZXlVcChldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcbiAgICAgIGlmIChfcmVmMikge1xuICAgICAgICAoMCwgX3VwZGF0ZUlucHV0V2lkdGhbXCJkZWZhdWx0XCJdKShfcmVmMik7XG4gICAgICAgIHVwZGF0ZUlucHV0V2lkdGhPbkZvbnRMb2FkKF9yZWYyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1SZWYpIHtcbiAgICAgICAgaXRlbVJlZihfcmVmMiwgbmFtZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgc3RlcDogc3RlcCxcbiAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgIHZhbHVlOiB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogJydcbiAgfSldO1xufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhdXRvRm9jdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBpdGVtUmVmOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBtYXg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgbWluOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIG5hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmFtZUZvckNsYXNzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5VXA6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaG93TGVhZGluZ1plcm9zOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdGVwOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1vbnRoSW5wdXQ7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZShcIkB3b2p0ZWttYWovZGF0ZS11dGlsc1wiKTtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBNb250aElucHV0KF9yZWYpIHtcbiAgdmFyIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgeWVhciA9IF9yZWYueWVhcixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wibWF4RGF0ZVwiLCBcIm1pbkRhdGVcIiwgXCJ5ZWFyXCJdKTtcblxuICBmdW5jdGlvbiBpc1NhbWVZZWFyKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSAmJiB5ZWFyID09PSAoMCwgX2RhdGVVdGlscy5nZXRZZWFyKShkYXRlKTtcbiAgfVxuXG4gIHZhciBtYXhNb250aCA9ICgwLCBfdXRpbHMuc2FmZU1pbikoMTIsIGlzU2FtZVllYXIobWF4RGF0ZSkgJiYgKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhIdW1hbikobWF4RGF0ZSkpO1xuICB2YXIgbWluTW9udGggPSAoMCwgX3V0aWxzLnNhZmVNYXgpKDEsIGlzU2FtZVllYXIobWluRGF0ZSkgJiYgKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhIdW1hbikobWluRGF0ZSkpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfSW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgbWF4OiBtYXhNb250aCxcbiAgICBtaW46IG1pbk1vbnRoLFxuICAgIG5hbWU6IFwibW9udGhcIlxuICB9LCBvdGhlclByb3BzKSk7XG59XG5cbk1vbnRoSW5wdXQucHJvcFR5cGVzID0ge1xuICBhcmlhTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGl0ZW1SZWY6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG1heERhdGU6IF9wcm9wVHlwZXMyLmlzTWF4RGF0ZSxcbiAgbWluRGF0ZTogX3Byb3BUeXBlczIuaXNNaW5EYXRlLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleVVwOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBwbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByZXF1aXJlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2hvd0xlYWRpbmdaZXJvczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgeWVhcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNb250aFNlbGVjdDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9tZXJnZUNsYXNzTmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtZXJnZS1jbGFzcy1uYW1lc1wiKSk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZShcIkB3b2p0ZWttYWovZGF0ZS11dGlsc1wiKTtcblxudmFyIF9kYXRlRm9ybWF0dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9kYXRlRm9ybWF0dGVyXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIE1vbnRoU2VsZWN0KF9yZWYpIHtcbiAgdmFyIGFyaWFMYWJlbCA9IF9yZWYuYXJpYUxhYmVsLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpdGVtUmVmID0gX3JlZi5pdGVtUmVmLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIF9yZWYkcGxhY2Vob2xkZXIgPSBfcmVmLnBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmJHBsYWNlaG9sZGVyID09PSB2b2lkIDAgPyAnLS0nIDogX3JlZiRwbGFjZWhvbGRlcixcbiAgICAgIF9zaG9ydCA9IF9yZWZbXCJzaG9ydFwiXSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHllYXIgPSBfcmVmLnllYXIsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImFyaWFMYWJlbFwiLCBcImNsYXNzTmFtZVwiLCBcIml0ZW1SZWZcIiwgXCJsb2NhbGVcIiwgXCJtYXhEYXRlXCIsIFwibWluRGF0ZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwic2hvcnRcIiwgXCJ2YWx1ZVwiLCBcInllYXJcIl0pO1xuXG4gIGZ1bmN0aW9uIGlzU2FtZVllYXIoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlICYmIHllYXIgPT09ICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKGRhdGUpO1xuICB9XG5cbiAgdmFyIG1heE1vbnRoID0gKDAsIF91dGlscy5zYWZlTWluKSgxMiwgaXNTYW1lWWVhcihtYXhEYXRlKSAmJiAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShtYXhEYXRlKSk7XG4gIHZhciBtaW5Nb250aCA9ICgwLCBfdXRpbHMuc2FmZU1heCkoMSwgaXNTYW1lWWVhcihtaW5EYXRlKSAmJiAoMCwgX2RhdGVVdGlscy5nZXRNb250aEh1bWFuKShtaW5EYXRlKSk7XG5cbiAgdmFyIGRhdGVzID0gX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5KDEyKSkubWFwKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoMjAxOSwgaW5kZXgsIDEpO1xuICB9KTtcblxuICB2YXIgbmFtZSA9ICdtb250aCc7XG4gIHZhciBmb3JtYXR0ZXIgPSBfc2hvcnQgPyBfZGF0ZUZvcm1hdHRlci5mb3JtYXRTaG9ydE1vbnRoIDogX2RhdGVGb3JtYXR0ZXIuZm9ybWF0TW9udGg7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIGNsYXNzTmFtZTogKDAsIF9tZXJnZUNsYXNzTmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiX19pbnB1dFwiKSwgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIl9fXCIpLmNvbmNhdChuYW1lKSksXG4gICAgXCJkYXRhLWlucHV0XCI6IFwidHJ1ZVwiLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcbiAgICAgIGlmIChpdGVtUmVmKSB7XG4gICAgICAgIGl0ZW1SZWYoX3JlZjIsIG5hbWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiAnJ1xuICB9LCBvdGhlclByb3BzKSwgIXZhbHVlICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwge1xuICAgIHZhbHVlOiBcIlwiXG4gIH0sIHBsYWNlaG9sZGVyKSwgZGF0ZXMubWFwKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIG1vbnRoID0gKDAsIF9kYXRlVXRpbHMuZ2V0TW9udGhIdW1hbikoZGF0ZSk7XG4gICAgdmFyIGRpc2FibGVkID0gbW9udGggPCBtaW5Nb250aCB8fCBtb250aCA+IG1heE1vbnRoO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHtcbiAgICAgIGtleTogbW9udGgsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogbW9udGhcbiAgICB9LCBmb3JtYXR0ZXIobG9jYWxlLCBkYXRlKSk7XG4gIH0pKTtcbn1cblxuTW9udGhTZWxlY3QucHJvcFR5cGVzID0ge1xuICBhcmlhTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGl0ZW1SZWY6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGxvY2FsZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtYXhEYXRlOiBfcHJvcFR5cGVzMi5pc01heERhdGUsXG4gIG1pbkRhdGU6IF9wcm9wVHlwZXMyLmlzTWluRGF0ZSxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uS2V5RG93bjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlVcDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmVxdWlyZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIFwic2hvcnRcIjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgeWVhcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOYXRpdmVJbnB1dDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKFwiQHdvanRla21hai9kYXRlLXV0aWxzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIE5hdGl2ZUlucHV0KF9yZWYpIHtcbiAgdmFyIGFyaWFMYWJlbCA9IF9yZWYuYXJpYUxhYmVsLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgcmVxdWlyZWQgPSBfcmVmLnJlcXVpcmVkLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgdmFsdWVUeXBlID0gX3JlZi52YWx1ZVR5cGU7XG5cbiAgdmFyIG5hdGl2ZUlucHV0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gJ251bWJlcic7XG5cbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgcmV0dXJuICdtb250aCc7XG5cbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZVR5cGUuJyk7XG4gICAgfVxuICB9KCk7XG5cbiAgdmFyIG5hdGl2ZVZhbHVlUGFyc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aXRjaCAodmFsdWVUeXBlKSB7XG4gICAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgcmV0dXJuIF9kYXRlVXRpbHMuZ2V0WWVhcjtcblxuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICByZXR1cm4gX2RhdGVVdGlscy5nZXRJU09Mb2NhbE1vbnRoO1xuXG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICByZXR1cm4gX2RhdGVVdGlscy5nZXRJU09Mb2NhbERhdGU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZVR5cGUuJyk7XG4gICAgfVxuICB9KCk7XG5cbiAgZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBtYXg6IG1heERhdGUgPyBuYXRpdmVWYWx1ZVBhcnNlcihtYXhEYXRlKSA6IG51bGwsXG4gICAgbWluOiBtaW5EYXRlID8gbmF0aXZlVmFsdWVQYXJzZXIobWluRGF0ZSkgOiBudWxsLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uRm9jdXM6IHN0b3BQcm9wYWdhdGlvbixcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgc3R5bGU6IHtcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6ICctOTk5J1xuICAgIH0sXG4gICAgdHlwZTogbmF0aXZlSW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZSA/IG5hdGl2ZVZhbHVlUGFyc2VyKHZhbHVlKSA6ICcnXG4gIH0pO1xufVxuXG5OYXRpdmVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzMi5pc01pbkRhdGUsXG4gIG5hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmluc3RhbmNlT2YoRGF0ZSldKSxcbiAgdmFsdWVUeXBlOiBfcHJvcFR5cGVzMi5pc1ZhbHVlVHlwZVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gWWVhcklucHV0O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2RhdGVVdGlscyA9IHJlcXVpcmUoXCJAd29qdGVrbWFqL2RhdGUtdXRpbHNcIik7XG5cbnZhciBfSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0lucHV0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9wcm9wVHlwZXNcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gWWVhcklucHV0KF9yZWYpIHtcbiAgdmFyIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgX3JlZiRwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/ICctLS0tJyA6IF9yZWYkcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZVR5cGUgPSBfcmVmLnZhbHVlVHlwZSxcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wibWF4RGF0ZVwiLCBcIm1pbkRhdGVcIiwgXCJwbGFjZWhvbGRlclwiLCBcInZhbHVlVHlwZVwiXSk7XG5cbiAgdmFyIG1heFllYXIgPSAoMCwgX3V0aWxzLnNhZmVNaW4pKDI3NTc2MCwgbWF4RGF0ZSAmJiAoMCwgX2RhdGVVdGlscy5nZXRZZWFyKShtYXhEYXRlKSk7XG4gIHZhciBtaW5ZZWFyID0gKDAsIF91dGlscy5zYWZlTWF4KSgxLCBtaW5EYXRlICYmICgwLCBfZGF0ZVV0aWxzLmdldFllYXIpKG1pbkRhdGUpKTtcblxuICB2YXIgeWVhclN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHZhbHVlVHlwZSA9PT0gJ2NlbnR1cnknKSB7XG4gICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH0oKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfSW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgbWF4OiBtYXhZZWFyLFxuICAgIG1pbjogbWluWWVhcixcbiAgICBuYW1lOiBcInllYXJcIixcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgc3RlcDogeWVhclN0ZXBcbiAgfSwgb3RoZXJQcm9wcykpO1xufVxuXG5ZZWFySW5wdXQucHJvcFR5cGVzID0ge1xuICBhcmlhTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGl0ZW1SZWY6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG1heERhdGU6IF9wcm9wVHlwZXMyLmlzTWF4RGF0ZSxcbiAgbWluRGF0ZTogX3Byb3BUeXBlczIuaXNNaW5EYXRlLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbktleVVwOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBwbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByZXF1aXJlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmFsdWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgdmFsdWVUeXBlOiBfcHJvcFR5cGVzMi5pc1ZhbHVlVHlwZVxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9tYWtlRXZlbnRQcm9wcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1ha2UtZXZlbnQtcHJvcHNcIikpO1xuXG52YXIgX21lcmdlQ2xhc3NOYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1lcmdlLWNsYXNzLW5hbWVzXCIpKTtcblxudmFyIF9yZWFjdENhbGVuZGFyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtY2FsZW5kYXJcIikpO1xuXG52YXIgX3JlYWN0Rml0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZml0XCIpKTtcblxudmFyIF9EYXRlSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGVJbnB1dFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuL3NoYXJlZC9wcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBiYXNlQ2xhc3NOYW1lID0gJ3JlYWN0LWRhdGUtcGlja2VyJztcbnZhciBvdXRzaWRlQWN0aW9uRXZlbnRzID0gWydtb3VzZWRvd24nLCAnZm9jdXNpbicsICd0b3VjaHN0YXJ0J107XG52YXIgYWxsVmlld3MgPSBbJ2NlbnR1cnknLCAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcblxudmFyIERhdGVQaWNrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRlUGlja2VyLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXRlUGlja2VyKTtcblxuICBmdW5jdGlvbiBEYXRlUGlja2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlUGlja2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge30pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uT3V0c2lkZUFjdGlvblwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy53cmFwcGVyICYmICFfdGhpcy53cmFwcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VDYWxlbmRhcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2hhbmdlXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGNsb3NlQ2FsZW5kYXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnByb3BzLmNsb3NlQ2FsZW5kYXI7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKGNsb3NlQ2FsZW5kYXIpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VDYWxlbmRhcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRm9jdXNcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wcy5vbkZvY3VzO1xuXG4gICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICBvbkZvY3VzKGV2ZW50KTtcbiAgICAgIH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgc3RpbGwgZmlyZXMgb25Gb2N1cyBvbiBkaXNhYmxlZCBlbGVtZW50c1xuXG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9wZW5DYWxlbmRhcigpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9wZW5DYWxlbmRhclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xvc2VDYWxlbmRhclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIGlmICghcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0b2dnbGVDYWxlbmRhclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFByb3BhZ2F0aW9uXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsZWFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vbkNoYW5nZShudWxsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlUGlja2VyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUFjdGlvbkxpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNhbGVuZGFyQ2xvc2UgPSBfdGhpcyRwcm9wczIub25DYWxlbmRhckNsb3NlLFxuICAgICAgICAgIG9uQ2FsZW5kYXJPcGVuID0gX3RoaXMkcHJvcHMyLm9uQ2FsZW5kYXJPcGVuO1xuXG4gICAgICBpZiAoaXNPcGVuICE9PSBwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUFjdGlvbkxpc3RlbmVycygpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBpc09wZW4gPyBvbkNhbGVuZGFyT3BlbiA6IG9uQ2FsZW5kYXJDbG9zZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUFjdGlvbkxpc3RlbmVycyhmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU91dHNpZGVBY3Rpb25MaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUFjdGlvbkxpc3RlbmVycyhzaG91bGRMaXN0ZW4pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG4gICAgICB2YXIgc2hvdWxkTGlzdGVuV2l0aEZhbGxiYWNrID0gdHlwZW9mIHNob3VsZExpc3RlbiAhPT0gJ3VuZGVmaW5lZCcgPyBzaG91bGRMaXN0ZW4gOiBpc09wZW47XG4gICAgICB2YXIgZm5OYW1lID0gc2hvdWxkTGlzdGVuV2l0aEZhbGxiYWNrID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICAgICAgb3V0c2lkZUFjdGlvbkV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50W2ZuTmFtZV0oZXZlbnROYW1lLCBfdGhpczIub25PdXRzaWRlQWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXRzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMzLmF1dG9Gb2N1cyxcbiAgICAgICAgICBjYWxlbmRhckFyaWFMYWJlbCA9IF90aGlzJHByb3BzMy5jYWxlbmRhckFyaWFMYWJlbCxcbiAgICAgICAgICBjYWxlbmRhckljb24gPSBfdGhpcyRwcm9wczMuY2FsZW5kYXJJY29uLFxuICAgICAgICAgIGNsZWFyQXJpYUxhYmVsID0gX3RoaXMkcHJvcHMzLmNsZWFyQXJpYUxhYmVsLFxuICAgICAgICAgIGNsZWFySWNvbiA9IF90aGlzJHByb3BzMy5jbGVhckljb24sXG4gICAgICAgICAgZGF5QXJpYUxhYmVsID0gX3RoaXMkcHJvcHMzLmRheUFyaWFMYWJlbCxcbiAgICAgICAgICBkYXlQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMy5kYXlQbGFjZWhvbGRlcixcbiAgICAgICAgICBkaXNhYmxlQ2FsZW5kYXIgPSBfdGhpcyRwcm9wczMuZGlzYWJsZUNhbGVuZGFyLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGZvcm1hdCA9IF90aGlzJHByb3BzMy5mb3JtYXQsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMzLmxvY2FsZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHMzLm1heERhdGUsXG4gICAgICAgICAgbWF4RGV0YWlsID0gX3RoaXMkcHJvcHMzLm1heERldGFpbCxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMzLm1pbkRhdGUsXG4gICAgICAgICAgbW9udGhBcmlhTGFiZWwgPSBfdGhpcyRwcm9wczMubW9udGhBcmlhTGFiZWwsXG4gICAgICAgICAgbW9udGhQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMy5tb250aFBsYWNlaG9sZGVyLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczMubmFtZSxcbiAgICAgICAgICBuYXRpdmVJbnB1dEFyaWFMYWJlbCA9IF90aGlzJHByb3BzMy5uYXRpdmVJbnB1dEFyaWFMYWJlbCxcbiAgICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzMy5yZXF1aXJlZCxcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IF90aGlzJHByb3BzMy5yZXR1cm5WYWx1ZSxcbiAgICAgICAgICBzaG93TGVhZGluZ1plcm9zID0gX3RoaXMkcHJvcHMzLnNob3dMZWFkaW5nWmVyb3MsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczMudmFsdWUsXG4gICAgICAgICAgeWVhckFyaWFMYWJlbCA9IF90aGlzJHByb3BzMy55ZWFyQXJpYUxhYmVsLFxuICAgICAgICAgIHllYXJQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMy55ZWFyUGxhY2Vob2xkZXI7XG4gICAgICB2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cbiAgICAgIHZhciBfY29uY2F0ID0gW10uY29uY2F0KHZhbHVlKSxcbiAgICAgICAgICBfY29uY2F0MiA9IF9zbGljZWRUb0FycmF5KF9jb25jYXQsIDEpLFxuICAgICAgICAgIHZhbHVlRnJvbSA9IF9jb25jYXQyWzBdO1xuXG4gICAgICB2YXIgYXJpYUxhYmVsUHJvcHMgPSB7XG4gICAgICAgIGRheUFyaWFMYWJlbDogZGF5QXJpYUxhYmVsLFxuICAgICAgICBtb250aEFyaWFMYWJlbDogbW9udGhBcmlhTGFiZWwsXG4gICAgICAgIG5hdGl2ZUlucHV0QXJpYUxhYmVsOiBuYXRpdmVJbnB1dEFyaWFMYWJlbCxcbiAgICAgICAgeWVhckFyaWFMYWJlbDogeWVhckFyaWFMYWJlbFxuICAgICAgfTtcbiAgICAgIHZhciBwbGFjZWhvbGRlclByb3BzID0ge1xuICAgICAgICBkYXlQbGFjZWhvbGRlcjogZGF5UGxhY2Vob2xkZXIsXG4gICAgICAgIG1vbnRoUGxhY2Vob2xkZXI6IG1vbnRoUGxhY2Vob2xkZXIsXG4gICAgICAgIHllYXJQbGFjZWhvbGRlcjogeWVhclBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX193cmFwcGVyXCIpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9EYXRlSW5wdXRbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgYXJpYUxhYmVsUHJvcHMsIHBsYWNlaG9sZGVyUHJvcHMsIHtcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX2lucHV0R3JvdXBcIiksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgIGlzQ2FsZW5kYXJPcGVuOiBpc09wZW4sXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICBtYXhEZXRhaWw6IG1heERldGFpbCxcbiAgICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICAgICAgcmV0dXJuVmFsdWU6IHJldHVyblZhbHVlLFxuICAgICAgICBzaG93TGVhZGluZ1plcm9zOiBzaG93TGVhZGluZ1plcm9zLFxuICAgICAgICB2YWx1ZTogdmFsdWVGcm9tXG4gICAgICB9KSksIGNsZWFySWNvbiAhPT0gbnVsbCAmJiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsZWFyQXJpYUxhYmVsLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19jbGVhci1idXR0b24gXCIpLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fYnV0dG9uXCIpLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuY2xlYXIsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuc3RvcFByb3BhZ2F0aW9uLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICB9LCBjbGVhckljb24pLCBjYWxlbmRhckljb24gIT09IG51bGwgJiYgIWRpc2FibGVDYWxlbmRhciAmJiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhbGVuZGFyQXJpYUxhYmVsLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19jYWxlbmRhci1idXR0b24gXCIpLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fYnV0dG9uXCIpLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5yZXNldFZhbHVlLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZUNhbGVuZGFyLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLnN0b3BQcm9wYWdhdGlvbixcbiAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgfSwgY2FsZW5kYXJJY29uKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNhbGVuZGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNhbGVuZGFyKCkge1xuICAgICAgdmFyIGRpc2FibGVDYWxlbmRhciA9IHRoaXMucHJvcHMuZGlzYWJsZUNhbGVuZGFyO1xuICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXG4gICAgICBpZiAoaXNPcGVuID09PSBudWxsIHx8IGRpc2FibGVDYWxlbmRhcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2FsZW5kYXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2FsZW5kYXJDbGFzc05hbWUsXG4gICAgICAgICAgZGF0ZVBpY2tlckNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wczQub25DaGFuZ2UsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczQudmFsdWUsXG4gICAgICAgICAgY2FsZW5kYXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczQsIFtcImNhbGVuZGFyQ2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lXCIsIFwib25DaGFuZ2VcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fY2FsZW5kYXJcIik7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfcmVhY3RGaXRbXCJkZWZhdWx0XCJdLCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX21lcmdlQ2xhc3NOYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi0tXCIpLmNvbmNhdChpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJykpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9yZWFjdENhbGVuZGFyW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNhbGVuZGFyQ2xhc3NOYW1lLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlIHx8IG51bGxcbiAgICAgIH0sIGNhbGVuZGFyUHJvcHMpKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNS5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczUuZGlzYWJsZWQ7XG4gICAgICB2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9tZXJnZUNsYXNzTmFtZXNbXCJkZWZhdWx0XCJdKShiYXNlQ2xhc3NOYW1lLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi0tXCIpLmNvbmNhdChpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJyksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLS1cIikuY29uY2F0KGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJyksIGNsYXNzTmFtZSlcbiAgICAgIH0sIHRoaXMuZXZlbnRQcm9wcywge1xuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICBpZiAoIV9yZWYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczMud3JhcHBlciA9IF9yZWY7XG4gICAgICAgIH1cbiAgICAgIH0pLCB0aGlzLnJlbmRlcklucHV0cygpLCB0aGlzLnJlbmRlckNhbGVuZGFyKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJldmVudFByb3BzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gKDAsIF9tYWtlRXZlbnRQcm9wc1tcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuaXNPcGVuICE9PSBwcmV2U3RhdGUuaXNPcGVuUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc09wZW46IG5leHRQcm9wcy5pc09wZW4sXG4gICAgICAgICAgaXNPcGVuUHJvcHM6IG5leHRQcm9wcy5pc09wZW5cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVQaWNrZXI7XG59KF9yZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEYXRlUGlja2VyO1xudmFyIGljb25Qcm9wcyA9IHtcbiAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIHdpZHRoOiAxOSxcbiAgaGVpZ2h0OiAxOSxcbiAgdmlld0JveDogJzAgMCAxOSAxOScsXG4gIHN0cm9rZTogJ2JsYWNrJyxcbiAgc3Ryb2tlV2lkdGg6IDJcbn07XG5cbnZhciBDYWxlbmRhckljb24gPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHt9LCBpY29uUHJvcHMsIHtcbiAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fY2FsZW5kYXItYnV0dG9uX19pY29uIFwiKS5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCJfX2J1dHRvbl9faWNvblwiKVxufSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgZmlsbDogXCJub25lXCIsXG4gIGhlaWdodDogXCIxNVwiLFxuICB3aWR0aDogXCIxNVwiLFxuICB4OiBcIjJcIixcbiAgeTogXCIyXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gIHgxOiBcIjZcIixcbiAgeDI6IFwiNlwiLFxuICB5MTogXCIwXCIsXG4gIHkyOiBcIjRcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgeDE6IFwiMTNcIixcbiAgeDI6IFwiMTNcIixcbiAgeTE6IFwiMFwiLFxuICB5MjogXCI0XCJcbn0pKTtcblxudmFyIENsZWFySWNvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe30sIGljb25Qcm9wcywge1xuICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiX19jbGVhci1idXR0b25fX2ljb24gXCIpLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIl9fYnV0dG9uX19pY29uXCIpXG59KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICB4MTogXCI0XCIsXG4gIHgyOiBcIjE1XCIsXG4gIHkxOiBcIjRcIixcbiAgeTI6IFwiMTVcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgeDE6IFwiMTVcIixcbiAgeDI6IFwiNFwiLFxuICB5MTogXCI0XCIsXG4gIHkyOiBcIjE1XCJcbn0pKTtcblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbGVuZGFySWNvbjogQ2FsZW5kYXJJY29uLFxuICBjbGVhckljb246IENsZWFySWNvbixcbiAgY2xvc2VDYWxlbmRhcjogdHJ1ZSxcbiAgaXNPcGVuOiBudWxsLFxuICByZXR1cm5WYWx1ZTogJ3N0YXJ0J1xufTtcblxudmFyIGlzVmFsdWUgPSBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uaW5zdGFuY2VPZihEYXRlKV0pO1xuXG5EYXRlUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgYXV0b0ZvY3VzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBjYWxlbmRhckFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjYWxlbmRhckNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nKV0pLFxuICBjYWxlbmRhckljb246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nKV0pLFxuICBjbGVhckFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGVhckljb246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsb3NlQ2FsZW5kYXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRheUFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkYXlQbGFjZWhvbGRlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkaXNhYmxlQ2FsZW5kYXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBmb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaXNPcGVuOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBsb2NhbGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlczIuaXNNYXhEYXRlLFxuICBtYXhEZXRhaWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKGFsbFZpZXdzKSxcbiAgbWluRGF0ZTogX3Byb3BUeXBlczIuaXNNaW5EYXRlLFxuICBtb250aEFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb250aFBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG5hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmF0aXZlSW5wdXRBcmlhTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb25DYWxlbmRhckNsb3NlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkNhbGVuZGFyT3BlbjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHJlcXVpcmVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXR1cm5WYWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2YoWydzdGFydCcsICdlbmQnLCAncmFuZ2UnXSksXG4gIHNob3dMZWFkaW5nWmVyb3M6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW2lzVmFsdWUsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoaXNWYWx1ZSldKSxcbiAgeWVhckFyaWFMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB5ZWFyUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGl2aWRlcjtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIERpdmlkZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1kYXRlLXBpY2tlcl9faW5wdXRHcm91cF9fZGl2aWRlclwiXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuRGl2aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ub2RlXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnJlcXVpcmUoXCJyZWFjdC1jYWxlbmRhci9kaXN0L0NhbGVuZGFyLmNzc1wiKTtcblxudmFyIF9EYXRlUGlja2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EYXRlUGlja2VyXCIpKTtcblxucmVxdWlyZShcIi4vRGF0ZVBpY2tlci5jc3NcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBGaWxlIGlzIGNyZWF0ZWQgZHVyaW5nIGJ1aWxkIHBoYXNlIGFuZCBwbGFjZWQgaW4gZGlzdCBkaXJlY3Rvcnlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxudmFyIF9kZWZhdWx0ID0gX0RhdGVQaWNrZXJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Rm9ybWF0dGVyID0gZ2V0Rm9ybWF0dGVyO1xuZXhwb3J0cy5mb3JtYXRTaG9ydE1vbnRoID0gZXhwb3J0cy5mb3JtYXRNb250aCA9IHZvaWQgMDtcblxudmFyIF9nZXRVc2VyTG9jYWxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZ2V0LXVzZXItbG9jYWxlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlcihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobG9jYWxlLCBkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcobG9jYWxlIHx8ICgwLCBfZ2V0VXNlckxvY2FsZVtcImRlZmF1bHRcIl0pKCksIG9wdGlvbnMpO1xuICB9O1xufVxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBob3VyIGluIGEgRGF0ZSB0byBlbnN1cmUgcmlnaHQgZGF0ZSBmb3JtYXR0aW5nIGV2ZW4gaWYgRFNUIGlzIG1lc3NlZCB1cC5cbiAqIFdvcmthcm91bmQgZm9yIGJ1ZyBpbiBXZWJLaXQgYW5kIEZpcmVmb3ggd2l0aCBoaXN0b3JpY2FsIGRhdGVzLlxuICogRm9yIG1vcmUgZGV0YWlscywgc2VlOlxuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzUwNDY1XG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzg1NjQzXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKi9cblxuXG5mdW5jdGlvbiB0b1NhZmVIb3VyKGRhdGUpIHtcbiAgdmFyIHNhZmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXcgRGF0ZShzYWZlRGF0ZS5zZXRIb3VycygxMikpO1xufVxuXG5mdW5jdGlvbiBnZXRTYWZlRm9ybWF0dGVyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsb2NhbGUsIGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpKGxvY2FsZSwgdG9TYWZlSG91cihkYXRlKSk7XG4gIH07XG59XG5cbnZhciBmb3JtYXRNb250aE9wdGlvbnMgPSB7XG4gIG1vbnRoOiAnbG9uZydcbn07XG52YXIgZm9ybWF0U2hvcnRNb250aE9wdGlvbnMgPSB7XG4gIG1vbnRoOiAnc2hvcnQnXG59O1xudmFyIGZvcm1hdE1vbnRoID0gZ2V0U2FmZUZvcm1hdHRlcihmb3JtYXRNb250aE9wdGlvbnMpO1xuZXhwb3J0cy5mb3JtYXRNb250aCA9IGZvcm1hdE1vbnRoO1xudmFyIGZvcm1hdFNob3J0TW9udGggPSBnZXRTYWZlRm9ybWF0dGVyKGZvcm1hdFNob3J0TW9udGhPcHRpb25zKTtcbmV4cG9ydHMuZm9ybWF0U2hvcnRNb250aCA9IGZvcm1hdFNob3J0TW9udGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEJlZ2luID0gZ2V0QmVnaW47XG5leHBvcnRzLmdldEVuZCA9IGdldEVuZDtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKFwiQHdvanRla21hai9kYXRlLXV0aWxzXCIpO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJlZ2lubmluZyBvZiBhIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYW5nZVR5cGUgUmFuZ2UgdHlwZSAoZS5nLiAnZGF5JylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICovXG5mdW5jdGlvbiBnZXRCZWdpbihyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXRDZW50dXJ5U3RhcnQpKGRhdGUpO1xuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXREZWNhZGVTdGFydCkoZGF0ZSk7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXRZZWFyU3RhcnQpKGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldE1vbnRoU3RhcnQpKGRhdGUpO1xuXG4gICAgY2FzZSAnZGF5JzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXREYXlTdGFydCkoZGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByYW5nZVR5cGU6IFwiLmNvbmNhdChyYW5nZVR5cGUpKTtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbmQgb2YgYSBnaXZlbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmFuZ2VUeXBlIFJhbmdlIHR5cGUgKGUuZy4gJ2RheScpXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVuZChyYW5nZVR5cGUsIGRhdGUpIHtcbiAgc3dpdGNoIChyYW5nZVR5cGUpIHtcbiAgICBjYXNlICdjZW50dXJ5JzpcbiAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5nZXRDZW50dXJ5RW5kKShkYXRlKTtcblxuICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0RGVjYWRlRW5kKShkYXRlKTtcblxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldFllYXJFbmQpKGRhdGUpO1xuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuICgwLCBfZGF0ZVV0aWxzLmdldE1vbnRoRW5kKShkYXRlKTtcblxuICAgIGNhc2UgJ2RheSc6XG4gICAgICByZXR1cm4gKDAsIF9kYXRlVXRpbHMuZ2V0RGF5RW5kKShkYXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJhbmdlVHlwZTogXCIuY29uY2F0KHJhbmdlVHlwZSkpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzTWF4RGF0ZSA9IGV4cG9ydHMuaXNNaW5EYXRlID0gZXhwb3J0cy5pc1ZhbHVlVHlwZSA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgYWxsVmlld3MgPSBbJ2NlbnR1cnknLCAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcbnZhciBhbGxWYWx1ZVR5cGVzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhbGxWaWV3cy5zbGljZSgxKSksIFsnZGF5J10pO1xuXG52YXIgaXNWYWx1ZVR5cGUgPSBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihhbGxWYWx1ZVR5cGVzKTtcblxuZXhwb3J0cy5pc1ZhbHVlVHlwZSA9IGlzVmFsdWVUeXBlO1xuXG52YXIgaXNNaW5EYXRlID0gZnVuY3Rpb24gaXNNaW5EYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgbWluRGF0ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAoIW1pbkRhdGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghKG1pbkRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9mIHR5cGUgYFwiKS5jb25jYXQoX3R5cGVvZihtaW5EYXRlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYERhdGVgLlwiKSk7XG4gIH1cblxuICB2YXIgbWF4RGF0ZSA9IHByb3BzLm1heERhdGU7XG5cbiAgaWYgKG1heERhdGUgJiYgbWluRGF0ZSA+IG1heERhdGUpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KF90eXBlb2YobWluRGF0ZSksIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIG1pbkRhdGUgY2Fubm90IGJlIGxhcmdlciB0aGFuIG1heERhdGUuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0cy5pc01pbkRhdGUgPSBpc01pbkRhdGU7XG5cbnZhciBpc01heERhdGUgPSBmdW5jdGlvbiBpc01heERhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBtYXhEYXRlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICghbWF4RGF0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCEobWF4RGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgXCIpLmNvbmNhdChfdHlwZW9mKG1heERhdGUpLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLCBleHBlY3RlZCBpbnN0YW5jZSBvZiBgRGF0ZWAuXCIpKTtcbiAgfVxuXG4gIHZhciBtaW5EYXRlID0gcHJvcHMubWluRGF0ZTtcblxuICBpZiAobWluRGF0ZSAmJiBtYXhEYXRlIDwgbWluRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9mIHR5cGUgYFwiKS5jb25jYXQoX3R5cGVvZihtYXhEYXRlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgbWF4RGF0ZSBjYW5ub3QgYmUgc21hbGxlciB0aGFuIG1pbkRhdGUuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0cy5pc01heERhdGUgPSBpc01heERhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJldHdlZW4gPSBiZXR3ZWVuO1xuZXhwb3J0cy5zYWZlTWluID0gc2FmZU1pbjtcbmV4cG9ydHMuc2FmZU1heCA9IHNhZmVNYXg7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgbm8gc21hbGxlciB0aGFuIG1pbiBhbmQgbm8gbGFyZ2VyIHRoYW4gbWF4LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gcmV0dXJuLlxuICogQHBhcmFtIHsqfSBtaW4gTWluaW11bSByZXR1cm4gdmFsdWUuXG4gKiBAcGFyYW0geyp9IG1heCBNYXhpbXVtIHJldHVybiB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmV0d2Vlbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKG1pbiAmJiBtaW4gPiB2YWx1ZSkge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAobWF4ICYmIG1heCA8IHZhbHVlKSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bSAhPT0gbnVsbCAmJiBudW0gIT09IGZhbHNlICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKG51bSkpO1xufVxuXG5mdW5jdGlvbiBzYWZlTWluKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShhcmdzLmZpbHRlcihpc1ZhbGlkTnVtYmVyKSkpO1xufVxuXG5mdW5jdGlvbiBzYWZlTWF4KCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MuZmlsdGVyKGlzVmFsaWROdW1iZXIpKSk7XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGV0ZWN0RWxlbWVudE92ZXJmbG93IGZyb20gJ2RldGVjdC1lbGVtZW50LW92ZXJmbG93JztcbmltcG9ydCB7IHdhcm5PbkRldiB9IGZyb20gJy4vc2hhcmVkL3V0aWxzJztcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBpc0Rpc3BsYXlDb250ZW50c1N1cHBvcnRlZCA9IGlzQnJvd3NlciAmJiAnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cygnZGlzcGxheScsICdjb250ZW50cycpO1xudmFyIGlzTXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IGlzQnJvd3NlciAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93O1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKGEpIHtcbiAgcmV0dXJuIGFbMF0udG9VcHBlckNhc2UoKSArIGEuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTY3JvbGxDb250YWluZXIoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICB3aGlsZSAocGFyZW50KSB7XG4gICAgdmFyIF93aW5kb3ckZ2V0Q29tcHV0ZWRTdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCksXG4gICAgICAgIG92ZXJmbG93ID0gX3dpbmRvdyRnZXRDb21wdXRlZFN0Lm92ZXJmbG93O1xuXG4gICAgaWYgKG92ZXJmbG93LnNwbGl0KCcgJykuZXZlcnkoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvID09PSAnYXV0bycgfHwgbyA9PT0gJ3Njcm9sbCc7XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhbGlnbkF4aXMoX3JlZikge1xuICB2YXIgYXhpcyA9IF9yZWYuYXhpcyxcbiAgICAgIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIGludmVydEF4aXMgPSBfcmVmLmludmVydEF4aXMsXG4gICAgICBzZWNvbmRhcnkgPSBfcmVmLnNlY29uZGFyeSxcbiAgICAgIHNjcm9sbENvbnRhaW5lciA9IF9yZWYuc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgc3BhY2luZyA9IF9yZWYuc3BhY2luZztcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgdmFyIHNjcm9sbENvbnRhaW5lckNvbGxpc2lvbnMgPSBkZXRlY3RFbGVtZW50T3ZlcmZsb3cocGFyZW50LCBzY3JvbGxDb250YWluZXIpO1xuICB2YXIgZG9jdW1lbnRDb2xsaXNpb25zID0gZGV0ZWN0RWxlbWVudE92ZXJmbG93KHBhcmVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgdmFyIGlzWCA9IGF4aXMgPT09ICd4JztcbiAgdmFyIHN0YXJ0UHJvcGVydHkgPSBpc1ggPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIGVuZFByb3BlcnR5ID0gaXNYID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICB2YXIgc2l6ZVByb3BlcnR5ID0gaXNYID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICB2YXIgb3ZlcmZsb3dTdGFydFByb3BlcnR5ID0gXCJvdmVyZmxvd1wiLmNvbmNhdChjYXBpdGFsaXplKHN0YXJ0UHJvcGVydHkpKTtcbiAgdmFyIG92ZXJmbG93RW5kUHJvcGVydHkgPSBcIm92ZXJmbG93XCIuY29uY2F0KGNhcGl0YWxpemUoZW5kUHJvcGVydHkpKTtcbiAgdmFyIHNjcm9sbFByb3BlcnR5ID0gXCJzY3JvbGxcIi5jb25jYXQoY2FwaXRhbGl6ZShzdGFydFByb3BlcnR5KSk7XG4gIHZhciB1cHBlcmNhc2VkU2l6ZVByb3BlcnR5ID0gY2FwaXRhbGl6ZShzaXplUHJvcGVydHkpO1xuICB2YXIgb2Zmc2V0U2l6ZVByb3BlcnR5ID0gXCJvZmZzZXRcIi5jb25jYXQodXBwZXJjYXNlZFNpemVQcm9wZXJ0eSk7XG4gIHZhciBjbGllbnRTaXplUHJvcGVydHkgPSBcImNsaWVudFwiLmNvbmNhdCh1cHBlcmNhc2VkU2l6ZVByb3BlcnR5KTtcbiAgdmFyIG1pblNpemVQcm9wZXJ0eSA9IFwibWluLVwiLmNvbmNhdChzaXplUHJvcGVydHkpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxDb250YWluZXJbb2Zmc2V0U2l6ZVByb3BlcnR5XSAtIHNjcm9sbENvbnRhaW5lcltjbGllbnRTaXplUHJvcGVydHldO1xuICB2YXIgc3RhcnRTcGFjaW5nID0gX3R5cGVvZihzcGFjaW5nKSA9PT0gJ29iamVjdCcgPyBzcGFjaW5nW3N0YXJ0UHJvcGVydHldIDogc3BhY2luZztcbiAgdmFyIGF2YWlsYWJsZVN0YXJ0U3BhY2UgPSAtTWF0aC5tYXgoc2Nyb2xsQ29udGFpbmVyQ29sbGlzaW9uc1tvdmVyZmxvd1N0YXJ0UHJvcGVydHldLCBkb2N1bWVudENvbGxpc2lvbnNbb3ZlcmZsb3dTdGFydFByb3BlcnR5XSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wZXJ0eV0pIC0gc3RhcnRTcGFjaW5nO1xuICB2YXIgZW5kU3BhY2luZyA9IF90eXBlb2Yoc3BhY2luZykgPT09ICdvYmplY3QnID8gc3BhY2luZ1tlbmRQcm9wZXJ0eV0gOiBzcGFjaW5nO1xuICB2YXIgYXZhaWxhYmxlRW5kU3BhY2UgPSAtTWF0aC5tYXgoc2Nyb2xsQ29udGFpbmVyQ29sbGlzaW9uc1tvdmVyZmxvd0VuZFByb3BlcnR5XSwgZG9jdW1lbnRDb2xsaXNpb25zW292ZXJmbG93RW5kUHJvcGVydHldIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BlcnR5XSkgLSBlbmRTcGFjaW5nIC0gc2Nyb2xsYmFyV2lkdGg7XG5cbiAgaWYgKHNlY29uZGFyeSkge1xuICAgIGF2YWlsYWJsZVN0YXJ0U3BhY2UgKz0gcGFyZW50W2NsaWVudFNpemVQcm9wZXJ0eV07XG4gICAgYXZhaWxhYmxlRW5kU3BhY2UgKz0gcGFyZW50W2NsaWVudFNpemVQcm9wZXJ0eV07XG4gIH1cblxuICB2YXIgb2Zmc2V0U2l6ZSA9IGVsZW1lbnRbb2Zmc2V0U2l6ZVByb3BlcnR5XTtcblxuICBmdW5jdGlvbiBkaXNwbGF5U3RhcnQoKSB7XG4gICAgZWxlbWVudC5zdHlsZVtzdGFydFByb3BlcnR5XSA9ICd1bnNldCc7XG4gICAgZWxlbWVudC5zdHlsZVtlbmRQcm9wZXJ0eV0gPSBzZWNvbmRhcnkgPyAnMCcgOiAnMTAwJSc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5RW5kKCkge1xuICAgIGVsZW1lbnQuc3R5bGVbc3RhcnRQcm9wZXJ0eV0gPSBzZWNvbmRhcnkgPyAnMCcgOiAnMTAwJSc7XG4gICAgZWxlbWVudC5zdHlsZVtlbmRQcm9wZXJ0eV0gPSAndW5zZXQnO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUlmRml0cyhhdmFpbGFibGVTcGFjZSwgZGlzcGxheSkge1xuICAgIHZhciBmaXRzID0gb2Zmc2V0U2l6ZSA8PSBhdmFpbGFibGVTcGFjZTtcblxuICAgIGlmIChmaXRzKSB7XG4gICAgICBkaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHM7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5U3RhcnRJZkZpdHMoKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlJZkZpdHMoYXZhaWxhYmxlU3RhcnRTcGFjZSwgZGlzcGxheVN0YXJ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlFbmRJZkZpdHMoKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlJZkZpdHMoYXZhaWxhYmxlRW5kU3BhY2UsIGRpc3BsYXlFbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVdoZXJldmVyU2hyaW5rZWRGaXRzKCkge1xuICAgIHZhciBtb3JlU3BhY2VTdGFydCA9IGF2YWlsYWJsZVN0YXJ0U3BhY2UgPiBhdmFpbGFibGVFbmRTcGFjZTtcbiAgICB2YXIgbWluU2l6ZSA9IHN0eWxlW21pblNpemVQcm9wZXJ0eV0gJiYgcGFyc2VJbnQoc3R5bGVbbWluU2l6ZVByb3BlcnR5XSwgMTApO1xuXG4gICAgZnVuY3Rpb24gc2hyaW5rVG9TaXplKHNpemUpIHtcbiAgICAgIGlmIChtaW5TaXplICYmIHNpemUgPCBtaW5TaXplKSB7XG4gICAgICAgIHdhcm5PbkRldihcIjxGaXQgLz4ncyBjaGlsZCB3aWxsIG5vdCBmaXQgYW55d2hlcmUgd2l0aCBpdHMgY3VycmVudCBcIi5jb25jYXQobWluU2l6ZVByb3BlcnR5LCBcIiBvZiBcIikuY29uY2F0KG1pblNpemUsIFwicHguXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1NpemUgPSBNYXRoLm1heChzaXplLCBtaW5TaXplIHx8IDApO1xuICAgICAgd2Fybk9uRGV2KFwiPEZpdCAvPidzIGNoaWxkIG5lZWRlZCB0byBoYXZlIGl0cyBcIi5jb25jYXQoc2l6ZVByb3BlcnR5LCBcIiBkZWNyZWFzZWQgdG8gXCIpLmNvbmNhdChuZXdTaXplLCBcInB4LlwiKSk7XG4gICAgICBlbGVtZW50LnN0eWxlW3NpemVQcm9wZXJ0eV0gPSBcIlwiLmNvbmNhdChuZXdTaXplLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGlmIChtb3JlU3BhY2VTdGFydCkge1xuICAgICAgc2hyaW5rVG9TaXplKGF2YWlsYWJsZVN0YXJ0U3BhY2UpO1xuICAgICAgZGlzcGxheVN0YXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNocmlua1RvU2l6ZShhdmFpbGFibGVFbmRTcGFjZSk7XG4gICAgICBkaXNwbGF5RW5kKCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpdHM7XG5cbiAgaWYgKGludmVydEF4aXMpIHtcbiAgICBmaXRzID0gZGlzcGxheVN0YXJ0SWZGaXRzKCkgfHwgZGlzcGxheUVuZElmRml0cygpO1xuICB9IGVsc2Uge1xuICAgIGZpdHMgPSBkaXNwbGF5RW5kSWZGaXRzKCkgfHwgZGlzcGxheVN0YXJ0SWZGaXRzKCk7XG4gIH1cblxuICBpZiAoIWZpdHMpIHtcbiAgICBkaXNwbGF5V2hlcmV2ZXJTaHJpbmtlZEZpdHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGlnbk1haW5BeGlzKGFyZ3MpIHtcbiAgYWxpZ25BeGlzKGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBhbGlnblNlY29uZGFyeUF4aXMoYXJncykge1xuICBhbGlnbkF4aXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhcmdzKSwge30sIHtcbiAgICBheGlzOiBhcmdzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4JyxcbiAgICBzZWNvbmRhcnk6IHRydWVcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBhbGlnbkJvdGhBeGlzKGFyZ3MpIHtcbiAgdmFyIGludmVydEF4aXMgPSBhcmdzLmludmVydEF4aXMsXG4gICAgICBpbnZlcnRTZWNvbmRhcnlBeGlzID0gYXJncy5pbnZlcnRTZWNvbmRhcnlBeGlzLFxuICAgICAgY29tbW9uQXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhhcmdzLCBbXCJpbnZlcnRBeGlzXCIsIFwiaW52ZXJ0U2Vjb25kYXJ5QXhpc1wiXSk7XG5cbiAgYWxpZ25NYWluQXhpcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbW1vbkFyZ3MpLCB7fSwge1xuICAgIGludmVydEF4aXM6IGludmVydEF4aXNcbiAgfSkpO1xuICBhbGlnblNlY29uZGFyeUF4aXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjb21tb25BcmdzKSwge30sIHtcbiAgICBpbnZlcnRBeGlzOiBpbnZlcnRTZWNvbmRhcnlBeGlzXG4gIH0pKTtcbn1cblxudmFyIEZpdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRml0LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZpdCk7XG5cbiAgZnVuY3Rpb24gRml0KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaXQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk11dGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmZpdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGF0aW9uT2JzZXJ2ZXJcIiwgaXNNdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkICYmIG5ldyBNdXRhdGlvbk9ic2VydmVyKF90aGlzLm9uTXV0YXRpb24pKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJmaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgIHNjcm9sbENvbnRhaW5lciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5zY3JvbGxDb250YWluZXIsXG4gICAgICAgICAgY29udGFpbmVyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLmNvbnRhaW5lcixcbiAgICAgICAgICBlbGVtZW50ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDsgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSAtIGFscmVhZHkgZGlkIHRoYXQgZm9yIGN1cnJlbnQgZGltZW5zaW9uc1xuXG4gICAgICBpZiAoX3RoaXMuZWxlbWVudFdpZHRoID09PSBlbGVtZW50V2lkdGggJiYgX3RoaXMuZWxlbWVudEhlaWdodCA9PT0gZWxlbWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFNhdmUgdGhlIGRpbWVuc2lvbnMgc28gdGhhdCB3ZSBrbm93IHdlIGRvbid0IG5lZWQgdG8gcmVwZWF0IHRoZSBmdW5jdGlvbiBpZiB1bmNoYW5nZWRcblxuXG4gICAgICBfdGhpcy5lbGVtZW50V2lkdGggPSBlbGVtZW50V2lkdGg7XG4gICAgICBfdGhpcy5lbGVtZW50SGVpZ2h0ID0gZWxlbWVudEhlaWdodDtcbiAgICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50RWxlbWVudDsgLy8gQ29udGFpbmVyIHdhcyB1bm1vdW50ZWRcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIGVuc3VyZSB0aGF0IDxGaXQgLz4ncyBjaGlsZCBoYXMgYSBhYnNvbHV0ZSBwb3NpdGlvbi4gT3RoZXJ3aXNlLFxuICAgICAgICogd2Ugd291bGRuJ3QgYmUgYWJsZSB0byBwbGFjZSB0aGUgY2hpbGQgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICAgKi9cblxuXG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IHN0eWxlLnBvc2l0aW9uO1xuXG4gICAgICBpZiAocG9zaXRpb24gIT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgd2Fybk9uRGV2KCc8Rml0IC8+XFwncyBjaGlsZCBkb2VzIG5vdCBoYXZlIGFic29sdXRlIHBvc2l0aW9uLiBZb3Ugc2hvdWxkIGFwcGx5IGBwb3NpdGlvbjogYWJzb2x1dGVgIHRvIGl0LicpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogV2UgbmVlZCB0byBlbnN1cmUgdGhhdCA8Rml0IC8+J3MgcGFyZW50IGhhcyBhIHJlbGF0aXZlIHBvc2l0aW9uLiBPdGhlcndpc2UsXG4gICAgICAgKiB3ZSB3b3VsZG4ndCBiZSBhYmxlIHRvIHBsYWNlIHRoZSBjaGlsZCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIHZhciBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgICB2YXIgcGFyZW50UG9zaXRpb24gPSBwYXJlbnRTdHlsZS5wb3NpdGlvbjtcblxuICAgICAgaWYgKHBhcmVudFBvc2l0aW9uICE9PSAncmVsYXRpdmUnICYmIHBhcmVudFBvc2l0aW9uICE9PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIHdhcm5PbkRldignPEZpdCAvPlxcJ3MgcGFyZW50IGRvZXMgbm90IGhhdmUgcmVsYXRpdmUgcG9zaXRpb24uIFlvdSBzaG91bGQgYXBwbHkgYHBvc2l0aW9uOiByZWxhdGl2ZWAgdG8gaXQuJyk7XG4gICAgICAgIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGludmVydEF4aXMgPSBfdGhpcyRwcm9wcy5pbnZlcnRBeGlzLFxuICAgICAgICAgIGludmVydFNlY29uZGFyeUF4aXMgPSBfdGhpcyRwcm9wcy5pbnZlcnRTZWNvbmRhcnlBeGlzLFxuICAgICAgICAgIG1haW5BeGlzID0gX3RoaXMkcHJvcHMubWFpbkF4aXMsXG4gICAgICAgICAgc3BhY2luZyA9IF90aGlzJHByb3BzLnNwYWNpbmc7XG4gICAgICBhbGlnbkJvdGhBeGlzKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIGludmVydEF4aXM6IGludmVydEF4aXMsXG4gICAgICAgIGludmVydFNlY29uZGFyeUF4aXM6IGludmVydFNlY29uZGFyeUF4aXMsXG4gICAgICAgIGF4aXM6IG1haW5BeGlzLFxuICAgICAgICBzY3JvbGxDb250YWluZXI6IHNjcm9sbENvbnRhaW5lcixcbiAgICAgICAgc3BhY2luZzogc3BhY2luZ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRml0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghaXNEaXNwbGF5Q29udGVudHNTdXBwb3J0ZWQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWZpbmQtZG9tLW5vZGVcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IGZpbmRTY3JvbGxDb250YWluZXIoZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0KCk7XG5cbiAgICAgIGlmIChpc011dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnLCAnc3R5bGUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICAgIGlmIChpc0Rpc3BsYXlDb250ZW50c1N1cHBvcnRlZCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjb250YWluZXIpIHtcbiAgICAgICAgICAgIF90aGlzMi5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIF90aGlzMi5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIF90aGlzMi5zY3JvbGxDb250YWluZXIgPSBmaW5kU2Nyb2xsQ29udGFpbmVyKGVsZW1lbnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdjb250ZW50cydcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXQ7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IEZpdCBhcyBkZWZhdWx0IH07XG5GaXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGludmVydEF4aXM6IFByb3BUeXBlcy5ib29sLFxuICBpbnZlcnRTZWNvbmRhcnlBeGlzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFpbkF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ3gnLCAneSddKSxcbiAgc3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBib3R0b206IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcmlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9KV0pXG59O1xuRml0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWFpbkF4aXM6ICd5JyxcbiAgc3BhY2luZzogOFxufTsiLCIvKipcbiAqIENoZWNrcyB3aGV0aGVyIHdlJ3JlIHJ1bm5pbmcgb24gYSBwcm9kdWN0aW9uIGJ1aWxkIG9yIG5vdC5cbiAqL1xuZXhwb3J0IHZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgY29uc29sZU9uRGV2ID0gZnVuY3Rpb24gY29uc29sZU9uRGV2KG1ldGhvZCkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgKF9jb25zb2xlID0gY29uc29sZSlbbWV0aG9kXS5hcHBseShfY29uc29sZSwgbWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgd2Fybk9uRGV2ID0gZnVuY3Rpb24gd2Fybk9uRGV2KCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBtZXNzYWdlW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gY29uc29sZU9uRGV2LmFwcGx5KHZvaWQgMCwgWyd3YXJuJ10uY29uY2F0KG1lc3NhZ2UpKTtcbn07IiwidmFyIGFsbG93ZWRWYXJpYW50cyA9IFsnbm9ybWFsJywgJ3NtYWxsLWNhcHMnXTtcbi8qKlxuICogR2V0cyBmb250IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdG8gZ2V0IGZvbnQgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBmcm9tXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnRTaG9ydGhhbmQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICBpZiAoc3R5bGUuZm9udCkge1xuICAgIHJldHVybiBzdHlsZS5mb250O1xuICB9XG5cbiAgdmFyIGlzRm9udERlZmluZWQgPSBzdHlsZVsnZm9udC1mYW1pbHknXSAhPT0gJyc7XG5cbiAgaWYgKCFpc0ZvbnREZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGZvbnRWYXJpYW50ID0gYWxsb3dlZFZhcmlhbnRzLmluY2x1ZGVzKHN0eWxlWydmb250LXZhcmlhbnQnXSkgPyBzdHlsZVsnZm9udC12YXJpYW50J10gOiAnbm9ybWFsJztcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHN0eWxlWydmb250LXN0eWxlJ10sIFwiIFwiKS5jb25jYXQoZm9udFZhcmlhbnQsIFwiIFwiKS5jb25jYXQoc3R5bGVbJ2ZvbnQtd2VpZ2h0J10sIFwiIFwiKS5jb25jYXQoc3R5bGVbJ2ZvbnQtc2l6ZSddLCBcIiAvIFwiKS5jb25jYXQoc3R5bGVbJ2xpbmUtaGVpZ2h0J10sIFwiIFwiKS5jb25jYXQoc3R5bGVbJ2ZvbnQtZmFtaWx5J10pO1xufVxuLyoqXG4gKiBNZWFzdXJlcyB0ZXh0IHdpZHRoIGdpdmVuIHRleHQgYW5kIGZvbnQgQ1NTIHNob3J0aGFuZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUZXh0IHRvIG1lYXN1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb250IEZvbnQgdG8gdXNlIHdoZW4gbWVhc3VyaW5nIHRoZSB0ZXh0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmVUZXh0KHRleHQsIGZvbnQpIHtcbiAgdmFyIGNhbnZhcyA9IG1lYXN1cmVUZXh0LmNhbnZhcyB8fCAobWVhc3VyZVRleHQuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpO1xuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAvLyBDb250ZXh0IHR5cGUgbm90IHN1cHBvcnRlZFxuXG4gIGlmICghY29udGV4dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29udGV4dC5mb250ID0gZm9udDtcblxuICB2YXIgX2NvbnRleHQkbWVhc3VyZVRleHQgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLFxuICAgICAgd2lkdGggPSBfY29udGV4dCRtZWFzdXJlVGV4dC53aWR0aDtcblxuICByZXR1cm4gTWF0aC5jZWlsKHdpZHRoKTtcbn1cbi8qKlxuICogVXBkYXRlcyBpbnB1dCBlbGVtZW50IHdpZHRoIHRvIGZpdCBpdHMgY29udGVudCBnaXZlbiBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGZvbnQgPSBnZXRGb250U2hvcnRoYW5kKGVsZW1lbnQpO1xuICB2YXIgdGV4dCA9IGVsZW1lbnQudmFsdWUgfHwgZWxlbWVudC5wbGFjZWhvbGRlcjtcbiAgdmFyIHdpZHRoID0gbWVhc3VyZVRleHQodGV4dCwgZm9udCk7XG5cbiAgaWYgKHdpZHRoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIik7XG4gIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUlucHV0V2lkdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==