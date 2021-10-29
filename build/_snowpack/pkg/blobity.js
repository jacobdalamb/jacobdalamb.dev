var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
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
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

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
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

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
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kinet = function () {
    function Kinet(options) {
        var _this = this;

        _classCallCheck(this, Kinet);

        this._handlers = {
            set: [],
            start: [],
            tick: [],
            end: []
        };

        var dafaults = {
            friction: 1 - 0.3,
            acceleration: 0.04,
            initialValue: 0,
            names: ["x"],
            test: function test(instance) {
                return Math.abs(instance.current - instance.target) > 0.1;
            }
        };

        this._options = _extends({}, dafaults, options);

        // to set correct value (1 - x)
        if (options && options.friction) {
            this._options.friction = 1 - options.friction;
        }

        this._instances = {};
        this._options.names.forEach(function (name) {
            _this._instances[name] = new KinetItem(_this._options.initialValue, _this._options.acceleration, _this._options.friction);
        });

        this._raf = null;
    }

    _createClass(Kinet, [{
        key: 'set',
        value: function set(name, num) {
            var _this2 = this;

            if (num == null) {
                console.warn('Define a value.');
                return;
            }
            if (this._instances[name] == null) {
                console.warn('Instance "' + name + '" doesn\'t exist.');
                return;
            }
            this._instances[name].current = num;
            this._instances[name].target = num;
            if (!this._raf) {
                this._handlers['set'].forEach(function (handler) {
                    return handler(_this2._instances);
                });
                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this2._instances);
                });
            }
        }
    }, {
        key: 'animate',
        value: function animate(name, num) {
            var _this3 = this;

            if (num == null) {
                console.warn('Define a value.');
                return;
            }
            if (this._instances[name] == null) {
                console.warn('Instance ' + name + ' doesn\'t exist.');
                return;
            }
            if (this._instances[name].target !== num) {
                this._instances[name].target = num;
                if (!this._raf) {
                    this._handlers['start'].forEach(function (handler) {
                        return handler(_this3._instances, _this3._instances);
                    });
                    this._animateValues();
                }
                return num;
            }

            return false;
        }
    }, {
        key: '_animateValues',
        value: function _animateValues() {
            var _this4 = this;

            var done = true;

            Object.keys(this._instances).forEach(function (key) {
                _this4._instances[key].update();

                if (_this4._options.test(_this4._instances[key])) {
                    done = false;
                }
            });

            if (!done) {
                this._raf = requestAnimationFrame(this._animateValues.bind(this));
                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
            } else {
                // set to final values
                Object.keys(this._instances).forEach(function (key) {
                    _this4._instances[key].current = _this4._instances[key].target;
                    _this4._instances[key].velocity = 0;
                });

                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
                this._handlers['end'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
                this._raf = null;
            }
        }
    }, {
        key: 'on',
        value: function on(event, handler) {
            if (this._handlers[event]) {
                this._handlers[event].push(handler);
            } else {
                console.warn('Unsupported event ' + event + '.');
            }
        }
    }, {
        key: 'off',
        value: function off(event, handler) {
            var _this5 = this;

            if (event != null) {
                if (handler != null) {
                    if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
                        return savedHandler === handler;
                    }).length) {
                        var toRemove = this._handlers[event].filter(function (savedHandler) {
                            return savedHandler === handler;
                        })[0];
                        var index = this._handlers[event].indexOf(toRemove);
                        if (index > -1) {
                            this._handlers[event].splice(index, 1);
                        }
                    } else {
                        console.warn('Handler for event ' + event + ' no found.');
                    }
                } else {
                    this._handlers[event] = [];
                }
            } else {
                Object.keys(this._handlers).forEach(function (keys) {
                    _this5._handlers[keys] = [];
                });
            }
        }
    }]);

    return Kinet;
}();

exports.default = Kinet;

var KinetItem = function () {
    function KinetItem(intitalValue, acceleration, friction) {
        _classCallCheck(this, KinetItem);

        this.current = intitalValue;
        this.target = intitalValue;
        this._acceleration = acceleration;
        this._friction = friction;
        this.velocity = 0;
    }

    _createClass(KinetItem, [{
        key: 'update',
        value: function update() {
            var distance = this.target - this.current;
            var attraction = distance * this._acceleration;

            this.applyForce(attraction);

            this.velocity *= this._friction;
            this.current += this.velocity;

            return distance;
        }
    }, {
        key: 'applyForce',
        value: function applyForce(force) {
            this.velocity += force;
        }
    }]);

    return KinetItem;
}();
});

var helpers = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.negative = exports.positive = exports.isGradient = exports.convertColor = exports.extractRgbFromRgb = exports.extractRgbFromHex = void 0;
var extractRgbFromHex = function (hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return { r: r, g: g, b: b };
};
exports.extractRgbFromHex = extractRgbFromHex;
var extractRgbFromRgb = function (rgb) {
    var match = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(rgb);
    if (match === null) {
        throw new Error("Couldn't convert color string " + rgb);
    }
    return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
    };
};
exports.extractRgbFromRgb = extractRgbFromRgb;
var convertColor = function (color) {
    if (color.includes('rgb')) {
        return exports.extractRgbFromRgb(color);
    }
    else if (color.startsWith('#')) {
        return exports.extractRgbFromHex(color);
    }
    throw new Error("Couldn't convert color string " + color);
};
exports.convertColor = convertColor;
var isGradient = function (color) {
    return Array.isArray(color);
};
exports.isGradient = isGradient;
var positive = function (n) { return Math.max(n, 0); };
exports.positive = positive;
var negative = function (n) { return Math.min(n, 0); };
exports.negative = negative;
});

var Magnetic_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kinet_1 = __importDefault(lib);
var throttle_1$1 = __importDefault(throttle_1);
var Magnetic = /** @class */ (function () {
    function Magnetic(element) {
        var _this = this;
        this.destroying = false;
        this.onTick = null;
        this.destroy = function () {
            window.removeEventListener('mousemove', _this.throttledMouseMove);
            _this.destroying = true;
            _this.kinetInstance.animate('x', 0);
            _this.kinetInstance.animate('y', 0);
        };
        this.mouseMove = function (event) {
            var distance = _this.getDistance(event.clientX + window.scrollX, event.clientY + window.scrollY);
            _this.render(distance, -1 * (_this.center.x - event.clientX - window.scrollX), -1 * (_this.center.y - event.clientY - window.scrollY));
        };
        this.kinetInstance = new kinet_1.default({
            names: ['x', 'y'],
            acceleration: 0.1,
            friction: 0.4,
        });
        this.element = element;
        this.rect = this.element.getBoundingClientRect();
        this.center = {
            x: this.rect.x + window.scrollX + this.element.offsetWidth / 2,
            y: this.rect.y + window.scrollY + this.element.offsetHeight / 2,
        };
        this.maxDistanceX = this.element.offsetWidth / 2;
        this.maxDistanceY = this.element.offsetWidth / 2;
        this.throttledMouseMove = throttle_1$1.default(this.mouseMove);
        window.addEventListener('mousemove', this.throttledMouseMove, {
            passive: true,
        });
        this.kinetInstance.on('tick', function (instances) {
            _this.element.style.transform = "translate3d(" + instances.x.current + "px, " + instances.y.current + "px, 0) rotateY(" + instances.x.current / 2 + "deg) rotateX(" + instances.y.current / 2 + "deg)";
            _this.onTick && _this.onTick();
        });
        this.kinetInstance.on('end', function () {
            if (_this.destroying) {
                _this.element.style.transform = '';
            }
        });
    }
    Magnetic.prototype.getDistance = function (x, y) {
        return Math.round(Math.sqrt(Math.pow(this.center.x - x, 2) + Math.pow(this.center.y - y, 2)));
    };
    Magnetic.prototype.render = function (distance, x, y) {
        if (Math.abs(x) < this.maxDistanceX &&
            Math.abs(y) < this.maxDistanceY) {
            var percentX = x / this.maxDistanceX;
            var percentY = y / this.maxDistanceY;
            this.kinetInstance.animate('x', Math.round(20 * percentX));
            this.kinetInstance.animate('y', Math.round(20 * percentY));
        }
        else {
            this.kinetInstance.animate('x', 0);
            this.kinetInstance.animate('y', 0);
        }
    };
    return Magnetic;
}());
exports.default = Magnetic;
});

var Blobity_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var throttle_1$1 = __importDefault(throttle_1);
var kinet_1 = __importDefault(lib);

var Magnetic_1$1 = __importDefault(Magnetic_1);
var Blobity = /** @class */ (function () {
    function Blobity(options) {
        var _this = this;
        this.options = {
            color: 'rgb(180, 180, 180)',
            opacity: 1,
            licenseKey: null,
            size: 40,
            focusableElements: '[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
            focusableElementsOffsetX: 0,
            focusableElementsOffsetY: 0,
            zIndex: -1,
            invert: false,
            dotColor: null,
            magnetic: true,
            mode: 'normal',
            radius: 4,
            font: 'sans-serif',
            fontWeight: 400,
            fontSize: 40,
            fontColor: '#000000',
            tooltipPadding: 12,
        };
        this.initialized = false;
        this.color = { r: 0, g: 0, b: 0 };
        this.fontColor = { r: 0, g: 0, b: 0 };
        this.stickedToElement = null;
        this.sticketToElementTooltip = null;
        this.disablingStickedToElementTimeout = null;
        this.isActive = true;
        this.destroyed = false;
        this.currentMagnetic = null;
        this.kinetPresets = {
            normal: {
                acceleration: 0.1,
                friction: 0.35,
            },
            bouncy: {
                acceleration: 0.1,
                friction: 0.28,
            },
            slow: {
                acceleration: 0.06,
                friction: 0.35,
            },
        };
        this.lastKnownCoordinates = { x: 0, y: 0 };
        this.currentOffsetX = 0;
        this.currentOffsetY = 0;
        this.manuallySetFocusedElement = null;
        this.manuallySetTooltipText = null;
        this.disableTimeStamp = new Date().getTime();
        this.reduceMotionSetting = false;
        this.kinetDefaultMethod = 'animate';
        this.updateOptions = function (newOptions) {
            _this.options = __assign(__assign({}, _this.options), newOptions);
            if (Array.isArray(_this.options.color)) {
                _this.color = _this.options.color.map(function (color) { return helpers.convertColor(color); });
            }
            else {
                _this.color = helpers.convertColor(_this.options.color);
            }
            _this.fontColor = helpers.convertColor(_this.options.fontColor);
            if (_this.options.invert) {
                _this.color = helpers.convertColor('rgb(255, 255, 255)');
            }
            if (_this.options.dotColor) {
                if (_this.globalStyles) {
                    document.head.removeChild(_this.globalStyles);
                    _this.globalStyles = undefined;
                }
                if (!_this.globalStyles) {
                    var dot = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\"><circle cx=\"4\" cy=\"4\" r=\"4\" fill-rule=\"evenodd\" fill=\"" + _this.options.dotColor + "\"/></svg>";
                    _this.globalStyles = document.createElement('style');
                    _this.globalStyles.setAttribute('data-blobity-global-styles', '');
                    _this.globalStyles.appendChild(document.createTextNode('* {cursor: inherit}'));
                    _this.globalStyles.appendChild(document.createTextNode("html { cursor: url(data:image/svg+xml;base64," + btoa(dot) + ") 4 4, auto;}"));
                    document.head.appendChild(_this.globalStyles);
                }
            }
            else {
                if (_this.globalStyles) {
                    document.head.removeChild(_this.globalStyles);
                }
                _this.globalStyles = undefined;
            }
            _this.canvas.style.cssText = "\n            position: fixed;\n            z-index: -1;\n            top: 0;\n            left: 0;\n            pointer-events: none;\n            opacity: 1;\n            will-change: transform;\n            overflow: visible;\n            opacity: " + _this.options.opacity + "; \n            z-index: " + (_this.options.invert ? 2147483647 : _this.options.zIndex) + "; \n            " + (_this.options.invert && 'mix-blend-mode: difference') + ";\n        ";
            _this.currentOffsetX = _this.options.focusableElementsOffsetX;
            _this.currentOffsetY = _this.options.focusableElementsOffsetY;
            _this.resize();
            if (_this.kinetInstance) {
                Object.entries(_this.kinetInstance._instances)
                    .filter(function (_a) {
                    var name = _a[0];
                    return name !== 'scale';
                })
                    .forEach(function (_a) {
                    var instance = _a[1];
                    instance._friction =
                        1 - _this.kinetPresets[_this.options.mode].friction;
                    instance._acceleration =
                        _this.kinetPresets[_this.options.mode].acceleration;
                });
                if (!_this.stickedToElement && !_this.sticketToElementTooltip) {
                    if (newOptions.radius !== undefined) {
                        _this.kinetInstance[_this.kinetDefaultMethod]('radius', _this.options.radius);
                    }
                    _this.kinetInstance[_this.kinetDefaultMethod]('width', _this.options.size);
                    _this.kinetInstance[_this.kinetDefaultMethod]('height', _this.options.size);
                    _this.kinetInstance[_this.kinetDefaultMethod]('x', _this.lastKnownCoordinates.x - _this.options.size / 2);
                    _this.kinetInstance[_this.kinetDefaultMethod]('y', _this.lastKnownCoordinates.y - _this.options.size / 2);
                }
            }
        };
        this.destroy = function () {
            if (_this.destroyed) {
                return;
            }
            window.removeEventListener('resize', _this.resize);
            window.removeEventListener('mousemove', _this.throttledMouseMove);
            document.removeEventListener('mouseenter', _this.windowMouseEnter);
            document.removeEventListener('mouseleave', _this.windowMouseLeave);
            document.removeEventListener('mouseover', _this.focusableElementMouseEnter);
            document.removeEventListener('mouseout', _this.focusableElementMouseLeave);
            document.removeEventListener('touchstart', _this.disable);
            document.removeEventListener('touchend', _this.disable);
            document.removeEventListener('mousemove', _this.enable);
            _this.prefersReducedMotionMediaQuery.removeEventListener('change', _this.updatePrefersReducedMotionSetting);
            document.body.removeChild(_this.canvas);
            document.documentElement.style.cursor = '';
            if (_this.globalStyles) {
                document.head.removeChild(_this.globalStyles);
            }
            _this.destroyed = true;
        };
        this.disable = function () {
            // sometimes we can have false positive enable called right after
            // so we save the time here so we can prevent it in enable method
            _this.disableTimeStamp = new Date().getTime();
            _this.isActive = false;
            _this.clear();
        };
        this.enable = function () {
            var disableAge = new Date().getTime() - _this.disableTimeStamp;
            if (disableAge > 16) {
                // let's take one cca frame as a limit
                _this.isActive = true;
            }
        };
        this.updatePrefersReducedMotionSetting = function () {
            _this.reduceMotionSetting = _this.prefersReducedMotionMediaQuery.matches;
            _this.kinetDefaultMethod = _this.reduceMotionSetting ? 'set' : 'animate';
        };
        this.focusElement = function (element) {
            _this.manuallySetTooltipText = null;
            _this.manuallySetFocusedElement = element;
            _this.highlightElement(element);
        };
        this.showTooltip = function (text) {
            _this.manuallySetFocusedElement = null;
            _this.manuallySetTooltipText = text;
            _this.displayTooltip(text, _this.lastKnownCoordinates.x, _this.lastKnownCoordinates.y);
        };
        this.reset = function () {
            _this.manuallySetFocusedElement = null;
            _this.manuallySetTooltipText = null;
            if (_this.activeTooltip) {
                _this.displayTooltip(_this.activeTooltip, _this.lastKnownCoordinates.x, _this.lastKnownCoordinates.y);
                return;
            }
            if (_this.activeFocusedElement) {
                _this.highlightElement(_this.activeFocusedElement);
                return;
            }
            _this.resetMorph(_this.lastKnownCoordinates.x - _this.options.size / 2, _this.lastKnownCoordinates.y - _this.options.size / 2);
        };
        this.focusableElementMouseEnter = function (event) {
            if (_this.isActive && event.target) {
                var element_1 = event.target.closest(_this.options.focusableElements);
                if (element_1) {
                    _this.stickedToElement = element_1;
                    var tooltip = element_1.getAttribute('data-blobity-tooltip');
                    if (element_1 && tooltip != undefined) {
                        _this.sticketToElementTooltip = tooltip;
                    }
                    _this.currentOffsetX = element_1.getAttribute('data-blobity-offset-x')
                        ? parseInt(String(element_1.getAttribute('data-blobity-offset-x')))
                        : _this.options.focusableElementsOffsetX;
                    _this.currentOffsetY = element_1.getAttribute('data-blobity-offset-y')
                        ? parseInt(String(element_1.getAttribute('data-blobity-offset-y')))
                        : _this.options.focusableElementsOffsetY;
                    var magnetic = element_1.getAttribute('data-blobity-magnetic');
                    if (!_this.reduceMotionSetting) {
                        if (magnetic === 'true' ||
                            (_this.options.magnetic && magnetic !== 'false')) {
                            _this.currentMagnetic = new Magnetic_1$1.default(element_1);
                            _this.currentMagnetic.onTick = function () {
                                if (!_this.activeTooltip &&
                                    _this.activeFocusedElement === element_1) {
                                    var _a = element_1.getBoundingClientRect(), width = _a.width, height = _a.height, x = _a.x, y = _a.y;
                                    var radius = element_1.getAttribute('data-blobity-radius');
                                    _this.kinetInstance[_this.kinetDefaultMethod]('textOpacity', 0);
                                    _this.morph({
                                        width: width + _this.currentOffsetX * 2,
                                        height: height + _this.currentOffsetY * 2,
                                        x: x - _this.currentOffsetX,
                                        y: y - _this.currentOffsetY,
                                    }, radius != undefined
                                        ? parseInt(radius)
                                        : _this.options.radius);
                                }
                            };
                        }
                    }
                }
            }
        };
        this.focusableElementMouseLeave = function (event) {
            if (event.target) {
                var element = event.target.closest(_this.options.focusableElements);
                if (element) {
                    _this.stickedToElement = null;
                    _this.sticketToElementTooltip = null;
                    _this.currentOffsetX = _this.options.focusableElementsOffsetX;
                    _this.currentOffsetY = _this.options.focusableElementsOffsetY;
                    if (_this.currentMagnetic) {
                        _this.currentMagnetic.destroy();
                        _this.currentMagnetic.onTick = null;
                        _this.currentMagnetic = null;
                    }
                    _this.resetMorph(event.clientX, event.clientY);
                }
            }
        };
        this.mouseDown = function () {
            _this.kinetInstance[_this.kinetDefaultMethod]('scale', 97);
        };
        this.mouseUp = function () {
            _this.bounce();
        };
        this.windowMouseEnter = function () {
            _this.kinetInstance[_this.kinetDefaultMethod]('opacity', 1);
        };
        this.windowMouseLeave = function () {
            _this.kinetInstance[_this.kinetDefaultMethod]('opacity', 0);
        };
        this.highlightElement = function (element) {
            var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height, x = _a.x, y = _a.y;
            var radius = element.getAttribute('data-blobity-radius');
            _this.kinetInstance[_this.kinetDefaultMethod]('textOpacity', 0);
            _this.morph({
                width: width + _this.currentOffsetX * 2,
                height: height + _this.currentOffsetY * 2,
                x: x - _this.currentOffsetX,
                y: y - _this.currentOffsetY,
            }, radius != undefined ? parseInt(radius) : _this.options.radius);
        };
        this.displayTooltip = function (text, x, y) {
            _this.ctx.font = _this.options.fontWeight + " " + _this.options.fontSize + "px " + _this.options.font;
            _this.ctx.textBaseline = 'bottom';
            _this.ctx.textAlign = 'left';
            var _a = _this.ctx.measureText(text), actualBoundingBoxAscent = _a.actualBoundingBoxAscent, width = _a.width;
            var padding = _this.options.tooltipPadding * 2;
            _this.kinetInstance[_this.kinetDefaultMethod]('textOpacity', 100);
            _this.morph({
                x: x + 6,
                y: y + 6,
                width: width + padding,
                height: actualBoundingBoxAscent + padding,
            }, 4);
        };
        this.mouseMove = function (event) {
            if (_this.initialized) {
                _this.lastKnownCoordinates = {
                    x: event.clientX,
                    y: event.clientY,
                };
                if (_this.activeTooltip) {
                    _this.displayTooltip(_this.activeTooltip, event.clientX, event.clientY);
                }
                else if (_this.activeFocusedElement) {
                    _this.highlightElement(_this.activeFocusedElement);
                }
                else {
                    _this.kinetInstance[_this.kinetDefaultMethod]('textOpacity', 0);
                    _this.kinetInstance[_this.kinetDefaultMethod]('x', event.clientX - _this.options.size / 2);
                    _this.kinetInstance[_this.kinetDefaultMethod]('y', event.clientY - _this.options.size / 2);
                    _this.kinetInstance[_this.kinetDefaultMethod]('width', _this.options.size);
                    _this.kinetInstance[_this.kinetDefaultMethod]('height', _this.options.size);
                    _this.kinetInstance[_this.kinetDefaultMethod]('radius', _this.options.size / 2);
                }
            }
            else {
                _this.initialized = true;
                _this.kinetInstance.set('x', event.clientX - _this.options.size / 2);
                _this.kinetInstance.set('y', event.clientY - _this.options.size / 2);
                _this.kinetInstance[_this.kinetDefaultMethod]('opacity', 1);
            }
        };
        this.resetMorph = function (x, y) {
            _this.disablingStickedToElementTimeout = setTimeout(function () {
                _this.kinetInstance[_this.kinetDefaultMethod]('width', _this.options.size);
                _this.kinetInstance[_this.kinetDefaultMethod]('height', _this.options.size);
                _this.kinetInstance[_this.kinetDefaultMethod]('radius', _this.options.size / 2);
                _this.kinetInstance[_this.kinetDefaultMethod]('x', x);
                _this.kinetInstance[_this.kinetDefaultMethod]('y', y);
            });
        };
        this.clear = function () {
            _this.ctx.resetTransform();
            _this.ctx.rotate(0);
            _this.ctx.clearRect(-20, -20, window.innerWidth * window.devicePixelRatio + 20, window.innerHeight * window.devicePixelRatio + 20);
        };
        this.resize = function () {
            _this.ctx.canvas.style.width = window.innerWidth + "px";
            _this.ctx.canvas.style.height = window.innerHeight + "px";
            _this.ctx.canvas.width = window.innerWidth * window.devicePixelRatio;
            _this.ctx.canvas.height = window.innerHeight * window.devicePixelRatio;
            if (window.devicePixelRatio > 1) {
                _this.ctx.imageSmoothingEnabled = false;
            }
        };
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.updateOptions(__assign({}, options));
        if (!this.options.licenseKey) {
            console.warn('Valid license number for Blobity is required. You can get one at https://blobity.gmrchk.com.');
        }
        this.kinetInstance = new kinet_1.default({
            names: [
                'x',
                'y',
                'opacity',
                'textOpacity',
                'width',
                'height',
                'radius',
                'scale',
            ],
            acceleration: this.kinetPresets[this.options.mode].acceleration,
            friction: this.kinetPresets[this.options.mode].friction,
        });
        this.kinetInstance._instances.scale._acceleration = 0.06;
        this.kinetInstance._instances.scale._friction = 1 - 0.1;
        this.kinetInstance.set('x', window.innerWidth / 2);
        this.kinetInstance.set('y', window.innerHeight / 2);
        this.kinetInstance.set('width', this.options.size);
        this.kinetInstance.set('height', this.options.size);
        this.kinetInstance.set('opacity', 0);
        this.kinetInstance.set('textOpacity', 0);
        this.kinetInstance.set('radius', this.options.size / 2);
        this.kinetInstance.set('scale', 100);
        this.kinetInstance.on('tick', function (instances) {
            _this.render(instances.x.current, instances.y.current, instances.width.current, instances.height.current, instances.radius.current, instances.x.velocity, instances.y.velocity, instances.opacity.current, instances.scale.current, instances.textOpacity.current);
        });
        this.throttledMouseMove = throttle_1$1.default(this.mouseMove);
        window.addEventListener('resize', this.resize, { passive: true });
        this.resize();
        window.addEventListener('mousemove', this.throttledMouseMove, {
            passive: true,
        });
        document.addEventListener('mouseenter', this.windowMouseEnter);
        document.addEventListener('mouseleave', this.windowMouseLeave);
        document.addEventListener('mouseover', this.focusableElementMouseEnter);
        document.addEventListener('mouseout', this.focusableElementMouseLeave);
        document.addEventListener('mousedown', this.mouseDown);
        document.addEventListener('mouseup', this.mouseUp);
        document.addEventListener('touchstart', this.disable);
        document.addEventListener('touchend', this.disable);
        document.addEventListener('mousemove', this.enable, {
            passive: true,
        });
        this.prefersReducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.prefersReducedMotionMediaQuery.addEventListener('change', this.updatePrefersReducedMotionSetting);
        this.updatePrefersReducedMotionSetting();
    }
    Blobity.prototype.bounce = function () {
        if (this.reduceMotionSetting) {
            this.kinetInstance.set('scale', 100);
        }
        else {
            this.kinetInstance.set('scale', 97);
            this.kinetInstance._instances.scale.velocity = 3;
            this.kinetInstance.animate('scale', 100);
        }
    };
    Object.defineProperty(Blobity.prototype, "activeTooltip", {
        get: function () {
            return this.manuallySetTooltipText || this.sticketToElementTooltip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blobity.prototype, "activeFocusedElement", {
        get: function () {
            return this.manuallySetFocusedElement || this.stickedToElement;
        },
        enumerable: false,
        configurable: true
    });
    Blobity.prototype.morph = function (_a, radius) {
        var width = _a.width, height = _a.height, x = _a.x, y = _a.y;
        if (this.disablingStickedToElementTimeout) {
            clearTimeout(this.disablingStickedToElementTimeout);
        }
        this.kinetInstance[this.kinetDefaultMethod]('radius', radius);
        this.kinetInstance[this.kinetDefaultMethod]('width', width);
        this.kinetInstance[this.kinetDefaultMethod]('height', height);
        this.kinetInstance[this.kinetDefaultMethod]('x', x);
        this.kinetInstance[this.kinetDefaultMethod]('y', y);
    };
    Blobity.prototype.render = function (x, y, width, height, radius, velocityX, velocityY, opacity, scale, textOpacity) {
        this.clear();
        var maxDelta = this.activeFocusedElement
            ? 0
            : (this.options.size / 8) * 7;
        x = x * window.devicePixelRatio;
        y = y * window.devicePixelRatio;
        width =
            (this.activeTooltip ? width : Math.max(width, maxDelta)) *
                window.devicePixelRatio;
        height =
            (this.activeTooltip ? height : Math.max(height, maxDelta)) *
                window.devicePixelRatio;
        radius = radius * window.devicePixelRatio;
        velocityX = velocityX * window.devicePixelRatio;
        velocityY = velocityY * window.devicePixelRatio;
        if (this.isActive) {
            var ctx = this.ctx;
            ctx.globalAlpha = opacity;
            ctx.setTransform(scale / 100, 0, 0, scale / 100, x, y);
            ctx.translate(width, height);
            ctx.scale(scale / 100, scale / 100);
            ctx.translate(-width, -height);
            var activateBlur = Math.abs(width - this.options.size * window.devicePixelRatio) <
                2 &&
                Math.abs(height - this.options.size * window.devicePixelRatio) <
                    2 &&
                Math.abs(radius - (this.options.size * window.devicePixelRatio) / 2) < 2;
            if (activateBlur) {
                var angle = (Math.atan2(velocityY, velocityX) * 180) / Math.PI + 180;
                ctx.translate(radius, radius);
                ctx.rotate((angle * Math.PI) / 180);
                ctx.translate(-radius, -radius);
            }
            var cumulativeVelocity = activateBlur
                ? Math.min(Math.sqrt(Math.pow(Math.abs(velocityX), 2) +
                    Math.pow(Math.abs(velocityY), 2)) * 2, // so the distortion starts sooner
                60 // shape becomes too distorted once velocity is too big
                ) / 2
                : 0;
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.arcTo(width + cumulativeVelocity, cumulativeVelocity / 2, width + cumulativeVelocity, height + cumulativeVelocity / 2, helpers.positive(radius - cumulativeVelocity / 2));
            ctx.arcTo(width + cumulativeVelocity, height - cumulativeVelocity / 2, cumulativeVelocity, height - cumulativeVelocity / 2, helpers.positive(radius - cumulativeVelocity / 2));
            ctx.arcTo(0, height, 0, 0, helpers.positive(radius));
            ctx.arcTo(0, 0, width, 0, helpers.positive(radius));
            ctx.closePath();
            if (helpers.isGradient(this.color)) {
                var gradient_1 = ctx.createLinearGradient(0, 0, width, height);
                var length_1 = this.color.length;
                this.color.forEach(function (color, index) {
                    gradient_1.addColorStop((1 / (length_1 - 1)) * index, "rgb(" + color.r + ", " + color.g + ", " + color.b + ")");
                });
                ctx.fillStyle = gradient_1;
            }
            else {
                ctx.fillStyle = "rgb(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
            }
            ctx.fill();
            if (this.activeTooltip) {
                ctx.setTransform(scale / 100, 0, 0, scale / 100, x, y);
                this.ctx.textBaseline = 'top';
                this.ctx.textAlign = 'left';
                this.ctx.font = this.options.fontWeight + " " + this.options.fontSize *
                    window.devicePixelRatio *
                    (scale / 100) + "px " + this.options.font;
                ctx.fillStyle = "rgba(\n                    " + this.fontColor.r + ", " + this.fontColor.g + ", \n                    " + this.fontColor.b + ", " + textOpacity / 100 + ")";
                ctx.fillText(this.activeTooltip, this.options.tooltipPadding * window.devicePixelRatio -
                    ((scale - 100) / 100) * width, this.options.tooltipPadding * window.devicePixelRatio -
                    ((scale - 100) / 100) * height);
            }
        }
    };
    return Blobity;
}());
exports.default = Blobity;
});

var lib$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Blobity_1$1 = __importDefault(Blobity_1);
exports.default = Blobity_1$1.default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(lib$1);

export default __pika_web_default_export_for_treeshaking__;
