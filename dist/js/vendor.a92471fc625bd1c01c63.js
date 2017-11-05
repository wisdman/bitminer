/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + chunkId + "." + "a92471fc625bd1c01c63" + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Barba", [], factory);
	else if(typeof exports === 'object')
		exports["Barba"] = factory();
	else
		root["Barba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//Promise polyfill https://github.com/taylorhakes/promise-polyfill
	
	if (typeof Promise !== 'function') {
	 window.Promise = __webpack_require__(1);
	}
	
	var Barba = {
	  version: '1.0.0',
	  BaseTransition: __webpack_require__(4),
	  BaseView: __webpack_require__(6),
	  BaseCache: __webpack_require__(8),
	  Dispatcher: __webpack_require__(7),
	  HistoryManager: __webpack_require__(9),
	  Pjax: __webpack_require__(10),
	  Prefetch: __webpack_require__(13),
	  Utils: __webpack_require__(5)
	};
	
	module.exports = Barba;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {
	  }
	
	  // Use polyfill for setImmediate for performance gains
	  var asap = (typeof setImmediate === 'function' && setImmediate) ||
	    function (fn) {
	      setTimeoutFunc(fn, 0);
	    };
	
	  var onUnhandledRejection = function onUnhandledRejection(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    asap(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      asap(function() {
	        if (!self._handled) {
	          onUnhandledRejection(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new (this.constructor)(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);
	
	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @private
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    asap = fn;
	  };
	
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    onUnhandledRejection = fn;
	  };
	
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	
	/**
	 * BaseTransition to extend
	 *
	 * @namespace Barba.BaseTransition
	 * @type {Object}
	 */
	var BaseTransition = {
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {HTMLElement}
	   */
	  oldContainer: undefined,
	
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {HTMLElement}
	   */
	  newContainer: undefined,
	
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {Promise}
	   */
	  newContainerLoading: undefined,
	
	  /**
	   * Helper to extend the object
	   *
	   * @memberOf Barba.BaseTransition
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj){
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * This function is called from Pjax module to initialize
	   * the transition.
	   *
	   * @memberOf Barba.BaseTransition
	   * @private
	   * @param  {HTMLElement} oldContainer
	   * @param  {Promise} newContainer
	   * @return {Promise}
	   */
	  init: function(oldContainer, newContainer) {
	    var _this = this;
	
	    this.oldContainer = oldContainer;
	    this._newContainerPromise = newContainer;
	
	    this.deferred = Utils.deferred();
	    this.newContainerReady = Utils.deferred();
	    this.newContainerLoading = this.newContainerReady.promise;
	
	    this.start();
	
	    this._newContainerPromise.then(function(newContainer) {
	      _this.newContainer = newContainer;
	      _this.newContainerReady.resolve();
	    });
	
	    return this.deferred.promise;
	  },
	
	  /**
	   * This function needs to be called as soon the Transition is finished
	   *
	   * @memberOf Barba.BaseTransition
	   */
	  done: function() {
	    this.oldContainer.parentNode.removeChild(this.oldContainer);
	    this.newContainer.style.visibility = 'visible';
	    this.deferred.resolve();
	  },
	
	  /**
	   * Constructor for your Transition
	   *
	   * @memberOf Barba.BaseTransition
	   * @abstract
	   */
	  start: function() {},
	};
	
	module.exports = BaseTransition;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Just an object with some helpful functions
	 *
	 * @type {Object}
	 * @namespace Barba.Utils
	 */
	var Utils = {
	  /**
	   * Return the current url
	   *
	   * @memberOf Barba.Utils
	   * @return {String} currentUrl
	   */
	  getCurrentUrl: function() {
	    return window.location.protocol + '//' +
	           window.location.host +
	           window.location.pathname +
	           window.location.search;
	  },
	
	  /**
	   * Given an url, return it without the hash
	   *
	   * @memberOf Barba.Utils
	   * @private
	   * @param  {String} url
	   * @return {String} newCleanUrl
	   */
	  cleanLink: function(url) {
	    return url.replace(/#.*/, '');
	  },
	
	  /**
	   * Time in millisecond after the xhr request goes in timeout
	   *
	   * @memberOf Barba.Utils
	   * @type {Number}
	   * @default
	   */
	  xhrTimeout: 5000,
	
	  /**
	   * Start an XMLHttpRequest() and return a Promise
	   *
	   * @memberOf Barba.Utils
	   * @param  {String} url
	   * @return {Promise}
	   */
	  xhr: function(url) {
	    var deferred = this.deferred();
	    var req = new XMLHttpRequest();
	
	    req.onreadystatechange = function() {
	      if (req.readyState === 4) {
	        if (req.status === 200) {
	          return deferred.resolve(req.responseText);
	        } else {
	          return deferred.reject(new Error('xhr: HTTP code is not 200'));
	        }
	      }
	    };
	
	    req.ontimeout = function() {
	      return deferred.reject(new Error('xhr: Timeout exceeded'));
	    };
	
	    req.open('GET', url);
	    req.timeout = this.xhrTimeout;
	    req.setRequestHeader('x-barba', 'yes');
	    req.send();
	
	    return deferred.promise;
	  },
	
	  /**
	   * Get obj and props and return a new object with the property merged
	   *
	   * @memberOf Barba.Utils
	   * @param  {object} obj
	   * @param  {object} props
	   * @return {object}
	   */
	  extend: function(obj, props) {
	    var newObj = Object.create(obj);
	
	    for(var prop in props) {
	      if(props.hasOwnProperty(prop)) {
	        newObj[prop] = props[prop];
	      }
	    }
	
	    return newObj;
	  },
	
	  /**
	   * Return a new "Deferred" object
	   * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
	   *
	   * @memberOf Barba.Utils
	   * @return {Deferred}
	   */
	  deferred: function() {
	    return new function() {
	      this.resolve = null;
	      this.reject = null;
	
	      this.promise = new Promise(function(resolve, reject) {
	        this.resolve = resolve;
	        this.reject = reject;
	      }.bind(this));
	    };
	  },
	
	  /**
	   * Return the port number normalized, eventually you can pass a string to be normalized.
	   *
	   * @memberOf Barba.Utils
	   * @private
	   * @param  {String} p
	   * @return {Int} port
	   */
	  getPort: function(p) {
	    var port = typeof p !== 'undefined' ? p : window.location.port;
	    var protocol = window.location.protocol;
	
	    if (port != '')
	      return parseInt(port);
	
	    if (protocol === 'http:')
	      return 80;
	
	    if (protocol === 'https:')
	      return 443;
	  }
	};
	
	module.exports = Utils;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(7);
	var Utils = __webpack_require__(5);
	
	/**
	 * BaseView to be extended
	 *
	 * @namespace Barba.BaseView
	 * @type {Object}
	 */
	var BaseView  = {
	  /**
	   * Namespace of the view.
	   * (need to be associated with the data-namespace of the container)
	   *
	   * @memberOf Barba.BaseView
	   * @type {String}
	   */
	  namespace: null,
	
	  /**
	   * Helper to extend the object
	   *
	   * @memberOf Barba.BaseView
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj){
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * Init the view.
	   * P.S. Is suggested to init the view before starting Barba.Pjax.start(),
	   * in this way .onEnter() and .onEnterCompleted() will be fired for the current
	   * container when the page is loaded.
	   *
	   * @memberOf Barba.BaseView
	   */
	  init: function() {
	    var _this = this;
	
	    Dispatcher.on('initStateChange',
	      function(newStatus, oldStatus) {
	        if (oldStatus && oldStatus.namespace === _this.namespace)
	          _this.onLeave();
	      }
	    );
	
	    Dispatcher.on('newPageReady',
	      function(newStatus, oldStatus, container) {
	        _this.container = container;
	
	        if (newStatus.namespace === _this.namespace)
	          _this.onEnter();
	      }
	    );
	
	    Dispatcher.on('transitionCompleted',
	      function(newStatus, oldStatus) {
	        if (newStatus.namespace === _this.namespace)
	          _this.onEnterCompleted();
	
	        if (oldStatus && oldStatus.namespace === _this.namespace)
	          _this.onLeaveCompleted();
	      }
	    );
	  },
	
	 /**
	  * This function will be fired when the container
	  * is ready and attached to the DOM.
	  *
	  * @memberOf Barba.BaseView
	  * @abstract
	  */
	  onEnter: function() {},
	
	  /**
	   * This function will be fired when the transition
	   * to this container has just finished.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onEnterCompleted: function() {},
	
	  /**
	   * This function will be fired when the transition
	   * to a new container has just started.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onLeave: function() {},
	
	  /**
	   * This function will be fired when the container
	   * has just been removed from the DOM.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onLeaveCompleted: function() {}
	}
	
	module.exports = BaseView;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Little Dispatcher inspired by MicroEvent.js
	 *
	 * @namespace Barba.Dispatcher
	 * @type {Object}
	 */
	var Dispatcher = {
	  /**
	   * Object that keeps all the events
	   *
	   * @memberOf Barba.Dispatcher
	   * @readOnly
	   * @type {Object}
	   */
	  events: {},
	
	  /**
	   * Bind a callback to an event
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {Function} function
	   */
	  on: function(e, f) {
	    this.events[e] = this.events[e] || [];
	    this.events[e].push(f);
	  },
	
	  /**
	   * Unbind event
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {Function} function
	   */
	  off: function(e, f) {
	    if(e in this.events === false)
	      return;
	
	    this.events[e].splice(this.events[e].indexOf(f), 1);
	  },
	
	  /**
	   * Fire the event running all the event associated to it
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {...*} args
	   */
	  trigger: function(e) {//e, ...args
	    if (e in this.events === false)
	      return;
	
	    for(var i = 0; i < this.events[e].length; i++){
	      this.events[e][i].apply(this, Array.prototype.slice.call(arguments, 1));
	    }
	  }
	};
	
	module.exports = Dispatcher;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	
	/**
	 * BaseCache it's a simple static cache
	 *
	 * @namespace Barba.BaseCache
	 * @type {Object}
	 */
	var BaseCache = {
	  /**
	   * The Object that keeps all the key value information
	   *
	   * @memberOf Barba.BaseCache
	   * @type {Object}
	   */
	  data: {},
	
	  /**
	   * Helper to extend this object
	   *
	   * @memberOf Barba.BaseCache
	   * @private
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj) {
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * Set a key and value data, mainly Barba is going to save promises
	   *
	   * @memberOf Barba.BaseCache
	   * @param {String} key
	   * @param {*} value
	   */
	  set: function(key, val) {
	    this.data[key] = val;
	  },
	
	  /**
	   * Retrieve the data using the key
	   *
	   * @memberOf Barba.BaseCache
	   * @param  {String} key
	   * @return {*}
	   */
	  get: function(key) {
	    return this.data[key];
	  },
	
	  /**
	   * Flush the cache
	   *
	   * @memberOf Barba.BaseCache
	   */
	  reset: function() {
	    this.data = {};
	  }
	};
	
	module.exports = BaseCache;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * HistoryManager helps to keep track of the navigation
	 *
	 * @namespace Barba.HistoryManager
	 * @type {Object}
	 */
	var HistoryManager = {
	  /**
	   * Keep track of the status in historic order
	   *
	   * @memberOf Barba.HistoryManager
	   * @readOnly
	   * @type {Array}
	   */
	  history: [],
	
	  /**
	   * Add a new set of url and namespace
	   *
	   * @memberOf Barba.HistoryManager
	   * @param {String} url
	   * @param {String} namespace
	   * @private
	   */
	  add: function(url, namespace) {
	    if (!namespace)
	      namespace = undefined;
	
	    this.history.push({
	      url: url,
	      namespace: namespace
	    });
	  },
	
	  /**
	   * Return information about the current status
	   *
	   * @memberOf Barba.HistoryManager
	   * @return {Object}
	   */
	  currentStatus: function() {
	    return this.history[this.history.length - 1];
	  },
	
	  /**
	   * Return information about the previous status
	   *
	   * @memberOf Barba.HistoryManager
	   * @return {Object}
	   */
	  prevStatus: function() {
	    var history = this.history;
	
	    if (history.length < 2)
	      return null;
	
	    return history[history.length - 2];
	  }
	};
	
	module.exports = HistoryManager;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	var Dispatcher = __webpack_require__(7);
	var HideShowTransition = __webpack_require__(11);
	var BaseCache = __webpack_require__(8);
	
	var HistoryManager = __webpack_require__(9);
	var Dom = __webpack_require__(12);
	
	/**
	 * Pjax is a static object with main function
	 *
	 * @namespace Barba.Pjax
	 * @borrows Dom as Dom
	 * @type {Object}
	 */
	var Pjax = {
	  Dom: Dom,
	  History: HistoryManager,
	  Cache: BaseCache,
	
	  /**
	   * Indicate wether or not use the cache
	   *
	   * @memberOf Barba.Pjax
	   * @type {Boolean}
	   * @default
	   */
	  cacheEnabled: true,
	
	  /**
	   * Indicate if there is an animation in progress
	   *
	   * @memberOf Barba.Pjax
	   * @readOnly
	   * @type {Boolean}
	   */
	  transitionProgress: false,
	
	  /**
	   * Class name used to ignore links
	   *
	   * @memberOf Barba.Pjax
	   * @type {String}
	   * @default
	   */
	  ignoreClassLink: 'no-barba',
	
	  /**
	   * Function to be called to start Pjax
	   *
	   * @memberOf Barba.Pjax
	   */
	  start: function() {
	    this.init();
	  },
	
	  /**
	   * Init the events
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  init: function() {
	    var container = this.Dom.getContainer();
	    var wrapper = this.Dom.getWrapper();
	
	    wrapper.setAttribute('aria-live', 'polite');
	
	    this.History.add(
	      this.getCurrentUrl(),
	      this.Dom.getNamespace(container)
	    );
	
	    //Fire for the current view.
	    Dispatcher.trigger('initStateChange', this.History.currentStatus());
	    Dispatcher.trigger('newPageReady',
	      this.History.currentStatus(),
	      {},
	      container,
	      this.Dom.currentHTML
	    );
	    Dispatcher.trigger('transitionCompleted', this.History.currentStatus());
	
	    this.bindEvents();
	  },
	
	  /**
	   * Attach the eventlisteners
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  bindEvents: function() {
	    document.addEventListener('click',
	      this.onLinkClick.bind(this)
	    );
	
	    window.addEventListener('popstate',
	      this.onStateChange.bind(this)
	    );
	  },
	
	  /**
	   * Return the currentURL cleaned
	   *
	   * @memberOf Barba.Pjax
	   * @return {String} currentUrl
	   */
	  getCurrentUrl: function() {
	    return Utils.cleanLink(
	      Utils.getCurrentUrl()
	    );
	  },
	
	  /**
	   * Change the URL with pushstate and trigger the state change
	   *
	   * @memberOf Barba.Pjax
	   * @param {String} newUrl
	   */
	  goTo: function(url) {
	    window.history.pushState(null, null, url);
	    this.onStateChange();
	  },
	
	  /**
	   * Force the browser to go to a certain url
	   *
	   * @memberOf Barba.Pjax
	   * @param {String} url
	   * @private
	   */
	  forceGoTo: function(url) {
	    window.location = url;
	  },
	
	  /**
	   * Load an url, will start an xhr request or load from the cache
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param  {String} url
	   * @return {Promise}
	   */
	  load: function(url) {
	    var deferred = Utils.deferred();
	    var _this = this;
	    var xhr;
	
	    xhr = this.Cache.get(url);
	
	    if (!xhr) {
	      xhr = Utils.xhr(url);
	      this.Cache.set(url, xhr);
	    }
	
	    xhr.then(
	      function(data) {
	        var container = _this.Dom.parseResponse(data);
	
	        _this.Dom.putContainer(container);
	
	        if (!_this.cacheEnabled)
	          _this.Cache.reset();
	
	        deferred.resolve(container);
	      },
	      function() {
	        //Something went wrong (timeout, 404, 505...)
	        _this.forceGoTo(url);
	
	        deferred.reject();
	      }
	    );
	
	    return deferred.promise;
	  },
	
	  /**
	   * Get the .href parameter out of an element
	   * and handle special cases (like xlink:href)
	   *
	   * @private
	   * @memberOf Barba.Pjax
	   * @param  {HTMLElement} el
	   * @return {String} href
	   */
	  getHref: function(el) {
	    if (!el) {
	      return undefined;
	    }
	
	    if (el.getAttribute && typeof el.getAttribute('xlink:href') === 'string') {
	      return el.getAttribute('xlink:href');
	    }
	
	    if (typeof el.href === 'string') {
	      return el.href;
	    }
	
	    return undefined;
	  },
	
	  /**
	   * Callback called from click event
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param {MouseEvent} evt
	   */
	  onLinkClick: function(evt) {
	    var el = evt.target;
	
	    //Go up in the nodelist until we
	    //find something with an href
	    while (el && !this.getHref(el)) {
	      el = el.parentNode;
	    }
	
	    if (this.preventCheck(evt, el)) {
	      evt.stopPropagation();
	      evt.preventDefault();
	
	      Dispatcher.trigger('linkClicked', el, evt);
	
	      var href = this.getHref(el);
	      this.goTo(href);
	    }
	  },
	
	  /**
	   * Determine if the link should be followed
	   *
	   * @memberOf Barba.Pjax
	   * @param  {MouseEvent} evt
	   * @param  {HTMLElement} element
	   * @return {Boolean}
	   */
	  preventCheck: function(evt, element) {
	    if (!window.history.pushState)
	      return false;
	
	    var href = this.getHref(element);
	
	    //User
	    if (!element || !href)
	      return false;
	
	    //Middle click, cmd click, and ctrl click
	    if (evt.which > 1 || evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey)
	      return false;
	
	    //Ignore target with _blank target
	    if (element.target && element.target === '_blank')
	      return false;
	
	    //Check if it's the same domain
	    if (window.location.protocol !== element.protocol || window.location.hostname !== element.hostname)
	      return false;
	
	    //Check if the port is the same
	    if (Utils.getPort() !== Utils.getPort(element.port))
	      return false;
	
	    //Ignore case when a hash is being tacked on the current URL
	    if (href.indexOf('#') > -1)
	      return false;
	
	    //Ignore case where there is download attribute
	    if (element.getAttribute && typeof element.getAttribute('download') === 'string')
	      return false;
	
	    //In case you're trying to load the same page
	    if (Utils.cleanLink(href) == Utils.cleanLink(location.href))
	      return false;
	
	    if (element.classList.contains(this.ignoreClassLink))
	      return false;
	
	    return true;
	  },
	
	  /**
	   * Return a transition object
	   *
	   * @memberOf Barba.Pjax
	   * @return {Barba.Transition} Transition object
	   */
	  getTransition: function() {
	    //User customizable
	    return HideShowTransition;
	  },
	
	  /**
	   * Method called after a 'popstate' or from .goTo()
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  onStateChange: function() {
	    var newUrl = this.getCurrentUrl();
	
	    if (this.transitionProgress)
	      this.forceGoTo(newUrl);
	
	    if (this.History.currentStatus().url === newUrl)
	      return false;
	
	    this.History.add(newUrl);
	
	    var newContainer = this.load(newUrl);
	    var transition = Object.create(this.getTransition());
	
	    this.transitionProgress = true;
	
	    Dispatcher.trigger('initStateChange',
	      this.History.currentStatus(),
	      this.History.prevStatus()
	    );
	
	    var transitionInstance = transition.init(
	      this.Dom.getContainer(),
	      newContainer
	    );
	
	    newContainer.then(
	      this.onNewContainerLoaded.bind(this)
	    );
	
	    transitionInstance.then(
	      this.onTransitionEnd.bind(this)
	    );
	  },
	
	  /**
	   * Function called as soon the new container is ready
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param {HTMLElement} container
	   */
	  onNewContainerLoaded: function(container) {
	    var currentStatus = this.History.currentStatus();
	    currentStatus.namespace = this.Dom.getNamespace(container);
	
	    Dispatcher.trigger('newPageReady',
	      this.History.currentStatus(),
	      this.History.prevStatus(),
	      container,
	      this.Dom.currentHTML
	    );
	  },
	
	  /**
	   * Function called as soon the transition is finished
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  onTransitionEnd: function() {
	    this.transitionProgress = false;
	
	    Dispatcher.trigger('transitionCompleted',
	      this.History.currentStatus(),
	      this.History.prevStatus()
	    );
	  }
	};
	
	module.exports = Pjax;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var BaseTransition = __webpack_require__(4);
	
	/**
	 * Basic Transition object, wait for the new Container to be ready,
	 * scroll top, and finish the transition (removing the old container and displaying the new one)
	 *
	 * @private
	 * @namespace Barba.HideShowTransition
	 * @augments Barba.BaseTransition
	 */
	var HideShowTransition = BaseTransition.extend({
	  start: function() {
	    this.newContainerLoading.then(this.finish.bind(this));
	  },
	
	  finish: function() {
	    document.body.scrollTop = 0;
	    this.done();
	  }
	});
	
	module.exports = HideShowTransition;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Object that is going to deal with DOM parsing/manipulation
	 *
	 * @namespace Barba.Pjax.Dom
	 * @type {Object}
	 */
	var Dom = {
	  /**
	   * The name of the data attribute on the container
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  dataNamespace: 'namespace',
	
	  /**
	   * Id of the main wrapper
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  wrapperId: 'barba-wrapper',
	
	  /**
	   * Class name used to identify the containers
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  containerClass: 'barba-container',
	
	  /**
	   * Full HTML String of the current page.
	   * By default is the innerHTML of the initial loaded page.
	   *
	   * Each time a new page is loaded, the value is the response of the xhr call.
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   */
	  currentHTML: document.documentElement.innerHTML,
	
	  /**
	   * Parse the responseText obtained from the xhr call
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {String} responseText
	   * @return {HTMLElement}
	   */
	  parseResponse: function(responseText) {
	    this.currentHTML = responseText;
	
	    var wrapper = document.createElement('div');
	    wrapper.innerHTML = responseText;
	
	    var titleEl = wrapper.querySelector('title');
	
	    if (titleEl)
	      document.title = titleEl.textContent;
	
	    return this.getContainer(wrapper);
	  },
	
	  /**
	   * Get the main barba wrapper by the ID `wrapperId`
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @return {HTMLElement} element
	   */
	  getWrapper: function() {
	    var wrapper = document.getElementById(this.wrapperId);
	
	    if (!wrapper)
	      throw new Error('Barba.js: wrapper not found!');
	
	    return wrapper;
	  },
	
	  /**
	   * Get the container on the current DOM,
	   * or from an HTMLElement passed via argument
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {HTMLElement}
	   */
	  getContainer: function(element) {
	    if (!element)
	      element = document.body;
	
	    if (!element)
	      throw new Error('Barba.js: DOM not ready!');
	
	    var container = this.parseContainer(element);
	
	    if (container && container.jquery)
	      container = container[0];
	
	    if (!container)
	      throw new Error('Barba.js: no container found');
	
	    return container;
	  },
	
	  /**
	   * Get the namespace of the container
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {String}
	   */
	  getNamespace: function(element) {
	    if (element && element.dataset) {
	      return element.dataset[this.dataNamespace];
	    } else if (element) {
	      return element.getAttribute('data-' + this.dataNamespace);
	    }
	
	    return null;
	  },
	
	  /**
	   * Put the container on the page
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   */
	  putContainer: function(element) {
	    element.style.visibility = 'hidden';
	
	    var wrapper = this.getWrapper();
	    wrapper.appendChild(element);
	  },
	
	  /**
	   * Get container selector
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {HTMLElement} element
	   */
	  parseContainer: function(element) {
	    return element.querySelector('.' + this.containerClass);
	  }
	};
	
	module.exports = Dom;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	var Pjax = __webpack_require__(10);
	
	/**
	 * Prefetch
	 *
	 * @namespace Barba.Prefetch
	 * @type {Object}
	 */
	var Prefetch = {
	  /**
	   * Class name used to ignore prefetch on links
	   *
	   * @memberOf Barba.Prefetch
	   * @type {String}
	   * @default
	   */
	  ignoreClassLink: 'no-barba-prefetch',
	
	  /**
	   * Init the event listener on mouseover and touchstart
	   * for the prefetch
	   *
	   * @memberOf Barba.Prefetch
	   */
	  init: function() {
	    if (!window.history.pushState) {
	      return false;
	    }
	
	    document.body.addEventListener('mouseover', this.onLinkEnter.bind(this));
	    document.body.addEventListener('touchstart', this.onLinkEnter.bind(this));
	  },
	
	  /**
	   * Callback for the mousehover/touchstart
	   *
	   * @memberOf Barba.Prefetch
	   * @private
	   * @param  {Object} evt
	   */
	  onLinkEnter: function(evt) {
	    var el = evt.target;
	
	    while (el && !Pjax.getHref(el)) {
	      el = el.parentNode;
	    }
	
	    if (!el || el.classList.contains(this.ignoreClassLink)) {
	      return;
	    }
	
	    var url = Pjax.getHref(el);
	
	    //Check if the link is elegible for Pjax
	    if (Pjax.preventCheck(evt, el) && !Pjax.Cache.get(url)) {
	      var xhr = Utils.xhr(url);
	      Pjax.Cache.set(url, xhr);
	    }
	  }
	};
	
	module.exports = Prefetch;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=barba.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * A lightweight, dependency-free and responsive javascript plugin for particle backgrounds.
 *
 * @author Marc Bruederlin <hello@marcbruederlin.com>
 * @version 2.1.0
 * @license MIT
 * @see https://github.com/marcbruederlin/particles.js
 */
var Particles=function(t,e){"use strict";function n(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}var i,o={};return i=function(){return function(){var t=this;t.defaults={responsive:null,selector:null,maxParticles:100,sizeVariations:3,showParticles:!0,speed:.5,color:"#000000",minDistance:120,connectParticles:!1},t.element=null,t.context=null,t.ratio=null,t.breakpoints=[],t.activeBreakpoint=null,t.breakpointSettings=[],t.originalSettings=null,t.storage=[],t.usingPolyfill=!1}}(),i.prototype.init=function(t){var e=this;return e.options=e._extend(e.defaults,t),e.options.color=t.color?e._hex2rgb(t.color):e._hex2rgb(e.defaults.color),e.originalSettings=JSON.parse(JSON.stringify(e.options)),e._animate=e._animate.bind(e),e._initializeCanvas(),e._initializeEvents(),e._registerBreakpoints(),e._checkResponsive(),e._initializeStorage(),e._animate(),e},i.prototype._initializeCanvas=function(){var n,i,o=this;if(!o.options.selector)return console.warn("particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options"),!1;o.element=e.querySelector(o.options.selector),o.context=o.element.getContext("2d"),n=t.devicePixelRatio||1,i=o.context.webkitBackingStorePixelRatio||o.context.mozBackingStorePixelRatio||o.context.msBackingStorePixelRatio||o.context.oBackingStorePixelRatio||o.context.backingStorePixelRatio||1,o.ratio=n/i,o.element.width=o.element.offsetParent.clientWidth*o.ratio,"BODY"===o.element.offsetParent.nodeName?o.element.height=t.innerHeight*o.ratio:o.element.height=o.element.offsetParent.clientHeight*o.ratio,o.element.style.width="100%",o.element.style.height="100%",o.context.scale(o.ratio,o.ratio)},i.prototype._initializeEvents=function(){var e=this;t.addEventListener("resize",e._resize.bind(e),!1)},i.prototype._initializeStorage=function(){var t=this;t.storage=[];for(var e=t.options.maxParticles;e--;)t.storage.push(new o(t.context,t.options))},i.prototype._registerBreakpoints=function(){var t,e,n,i=this,o=i.options.responsive||null;if("object"==typeof o&&null!==o&&o.length){for(t in o)if(n=i.breakpoints.length-1,e=o[t].breakpoint,o.hasOwnProperty(t)){for(o[t].options.color&&(o[t].options.color=i._hex2rgb(o[t].options.color));n>=0;)i.breakpoints[n]&&i.breakpoints[n]===e&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(e),i.breakpointSettings[e]=o[t].options}i.breakpoints.sort(function(t,e){return e-t})}},i.prototype._checkResponsive=function(){var e,n=this,i=!1,o=t.innerWidth;if(n.options.responsive&&n.options.responsive.length&&null!==n.options.responsive){i=null;for(e in n.breakpoints)n.breakpoints.hasOwnProperty(e)&&o<=n.breakpoints[e]&&(i=n.breakpoints[e]);null!==i?(n.activeBreakpoint=i,n.options=n._extend(n.options,n.breakpointSettings[i])):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,i=null,n.options=n._extend(n.options,n.originalSettings))}},i.prototype._refresh=function(){var t=this;t._initializeStorage(),t._draw()},i.prototype._resize=function(){var e=this;e.element.width=e.element.offsetParent.clientWidth*e.ratio,"BODY"===e.element.offsetParent.nodeName?e.element.height=t.innerHeight*e.ratio:e.element.height=e.element.offsetParent.clientHeight*e.ratio,e.context.scale(e.ratio,e.ratio),clearTimeout(e.windowDelay),e.windowDelay=t.setTimeout(function(){e._checkResponsive(),e._refresh()},50)},i.prototype._animate=function(){var e=this;e._draw(),e._animation=t.requestAnimFrame(e._animate)},i.prototype.resumeAnimation=function(){var t=this;t._animation||t._animate()},i.prototype.pauseAnimation=function(){var e=this;e._animation&&(e.usingPolyfill?t.clearTimeout(e._animation):(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame)(e._animation),e._animation=null)},i.prototype._draw=function(){var e=this,i=e.element,o=i.offsetParent.clientWidth,r=i.offsetParent.clientHeight,a=e.options.showParticles,s=e.storage;"BODY"===i.offsetParent.nodeName&&(r=t.innerHeight),e.context.clearRect(0,0,i.width,i.height),e.context.beginPath(),e.context.fillStyle="rgb("+e.options.color.r+", "+e.options.color.g+", "+e.options.color.b+")";for(var l=s.length;l--;){var c=s[l];a&&c._draw(),c._updateCoordinates(o,r)}e.context.fill(),e.options.connectParticles&&(s.sort(n),e._updateEdges())},i.prototype._updateEdges=function(){for(var t=this,e=t.options.minDistance,n=t.options.color,i=Math.sqrt,o=Math.abs,r=t.storage,a=r.length,s="rgba("+n.r+","+n.g+","+n.b+",",l=0;l<a;l++)for(var c=r[l],p=l+1;p<a;p++){var u,f=r[p],h=c.x-f.x,m=c.y-f.y;if(u=i(h*h+m*m),o(h)>e)break;u<=e&&t._drawEdge(c,f,s+(1.2-u/e)+")")}},i.prototype._drawEdge=function(t,e,n){var i=this.context;i.beginPath(),i.strokeStyle=n,i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.closePath()},i.prototype._extend=function(t,e){return Object.keys(e).forEach(function(n){t[n]=e[n]}),t},i.prototype._hex2rgb=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},o=function(n,i){var o=this,r=Math.random,a=i.speed;o.context=n,o.options=i;var s=e.querySelector(i.selector);o.x=r()*s.offsetParent.clientWidth,"BODY"===s.offsetParent.nodeName?o.y=r()*t.innerHeight:o.y=r()*s.offsetParent.clientHeight,o.vx=r()*a*2-a,o.vy=r()*a*2-a,o.radius=r()*r()*i.sizeVariations,o._draw()},o.prototype._draw=function(){var t=this;t.context.save(),t.context.translate(t.x,t.y),t.context.moveTo(0,0),t.context.arc(0,0,t.radius,0,2*Math.PI,!1),t.context.restore()},o.prototype._updateCoordinates=function(t,e){var n=this,i=n.x+this.vx,o=n.y+this.vy,r=n.radius;i+r>t?i=r:i-r<0&&(i=t-r),o+r>e?o=r:o-r<0&&(o=e-r),n.x=i,n.y=o},t.requestAnimFrame=function(){var e=this,n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame;return n||(e._usingPolyfill=!0,function(e){return t.setTimeout(e,1e3/60)})}(),new i}(window,document);!function(){"use strict"; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Particles}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=Particles:window.Particles=Particles}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTkyNDcxZmM2MjViZDFjMDFjNjMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYXJiYS5qcy9kaXN0L2JhcmJhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGFydGljbGVzanMvZGlzdC9wYXJ0aWNsZXMubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBWSwyQkFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlD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O0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxZQUFZO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7QUM3cURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYSxnQkFBZ0IsbURBQW1ELFdBQVcsb0JBQW9CLGtCQUFrQixXQUFXLFlBQVksOElBQThJLHNLQUFzSyxnQ0FBZ0MsV0FBVyx5VUFBeVUsMENBQTBDLGVBQWUsbUpBQW1KLHFsQkFBcWxCLDBDQUEwQyxXQUFXLGtEQUFrRCwyQ0FBMkMsV0FBVyxhQUFhLGlDQUFpQyxJQUFJLDRDQUE0Qyw2Q0FBNkMsOENBQThDLDJDQUEyQyw4RUFBOEUsNEVBQTRFLEtBQUssdUVBQXVFLDJEQUEyRCxpQ0FBaUMsV0FBVyxHQUFHLHlDQUF5QyxpQ0FBaUMsbUZBQW1GLE9BQU8sa0dBQWtHLHNNQUFzTSxpQ0FBaUMsV0FBVyxpQ0FBaUMsZ0NBQWdDLFdBQVcsMlNBQTJTLGtDQUFrQyxLQUFLLGlDQUFpQyxXQUFXLHNEQUFzRCx3Q0FBd0MsV0FBVywyQkFBMkIsdUNBQXVDLFdBQVcsK0tBQStLLDhCQUE4Qix3SEFBd0gsbU5BQW1OLG1CQUFtQixJQUFJLEVBQUUsV0FBVyx1Q0FBdUMsMEVBQTBFLHFDQUFxQyw2SUFBNkksSUFBSSx5QkFBeUIsSUFBSSxLQUFLLGlDQUFpQyw2QkFBNkIsd0NBQXdDLHVDQUF1QyxtQkFBbUIsMkZBQTJGLG1DQUFtQywwQ0FBMEMsVUFBVSxJQUFJLGtDQUFrQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGFBQWEsVUFBVSw0REFBNEQsTUFBTSxpQkFBaUIsbUNBQW1DLHdCQUF3QixrQ0FBa0Msd01BQXdNLDhCQUE4QixXQUFXLG1JQUFtSSw4Q0FBOEMsa0RBQWtELDhEQUE4RCwrQkFBK0IsZ0dBQWdHLDJDQUEyQyw4QkFBOEIsRUFBRSxTQUFTLGtCQUFrQixZQUFZLGFBQWEsbURBQW9FLGlCQUFpQjtBQUFBLG9NQUFpRyxHIiwiZmlsZSI6ImpzL3ZlbmRvci5hOTI0NzFmYzYyNWJkMWMwMWM2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuIFx0XHRpZihleGVjdXRlTW9kdWxlcykge1xuIFx0XHRcdGZvcihpPTA7IGkgPCBleGVjdXRlTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBleGVjdXRlTW9kdWxlc1tpXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDQ6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwianMvXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcImE5MjQ3MWZjNjI1YmQxYzAxYzYzXCIgKyBcIi5jaHVuay5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTkyNDcxZmM2MjViZDFjMDFjNjMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkJhcmJhXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhcmJhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJhcmJhXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rpc3RcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vUHJvbWlzZSBwb2x5ZmlsbCBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbFxuXHRcblx0aWYgKHR5cGVvZiBQcm9taXNlICE9PSAnZnVuY3Rpb24nKSB7XG5cdCB3aW5kb3cuUHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdH1cblx0XG5cdHZhciBCYXJiYSA9IHtcblx0ICB2ZXJzaW9uOiAnMS4wLjAnLFxuXHQgIEJhc2VUcmFuc2l0aW9uOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLFxuXHQgIEJhc2VWaWV3OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLFxuXHQgIEJhc2VDYWNoZTogX193ZWJwYWNrX3JlcXVpcmVfXyg4KSxcblx0ICBEaXNwYXRjaGVyOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLFxuXHQgIEhpc3RvcnlNYW5hZ2VyOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLFxuXHQgIFBqYXg6IF9fd2VicGFja19yZXF1aXJlX18oMTApLFxuXHQgIFByZWZldGNoOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSxcblx0ICBVdGlsczogX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXJiYTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHNldEltbWVkaWF0ZSkgeyhmdW5jdGlvbiAocm9vdCkge1xuXHRcblx0ICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuXHQgIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuXHQgIHZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cdFxuXHQgIGZ1bmN0aW9uIG5vb3AoKSB7XG5cdCAgfVxuXHRcblx0ICAvLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblx0ICB2YXIgYXNhcCA9ICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIHNldEltbWVkaWF0ZSkgfHxcblx0ICAgIGZ1bmN0aW9uIChmbikge1xuXHQgICAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG5cdCAgICB9O1xuXHRcblx0ICB2YXIgb25VbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiBvblVuaGFuZGxlZFJlamVjdGlvbihlcnIpIHtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xuXHQgICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgIH1cblx0ICB9O1xuXHRcblx0ICAvLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0ICBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuXHQgICAgfTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcblx0ICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuXHQgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcblx0ICAgIHRoaXMuX3N0YXRlID0gMDtcblx0ICAgIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcblx0ICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuXHQgICAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cdFxuXHQgICAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuXHQgICAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG5cdCAgICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcblx0ICAgIH1cblx0ICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuXHQgICAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuXHQgICAgYXNhcChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuXHQgICAgICBpZiAoY2IgPT09IG51bGwpIHtcblx0ICAgICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciByZXQ7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuXHQgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIGUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICByZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG5cdCAgICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcblx0ICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0ICAgICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG5cdCAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHQgICAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuXHQgICAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0ICAgICAgICAgIGZpbmFsZShzZWxmKTtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBzZWxmLl9zdGF0ZSA9IDE7XG5cdCAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdCAgICAgIGZpbmFsZShzZWxmKTtcblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgcmVqZWN0KHNlbGYsIGUpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG5cdCAgICBzZWxmLl9zdGF0ZSA9IDI7XG5cdCAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHQgICAgZmluYWxlKHNlbGYpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcblx0ICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgIGFzYXAoZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG5cdCAgICAgICAgICBvblVuaGFuZGxlZFJlamVjdGlvbihzZWxmLl92YWx1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuXHQgICAgfVxuXHQgICAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcblx0ICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG5cdCAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuXHQgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG5cdCAgICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG5cdCAgICpcblx0ICAgKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG5cdCAgICovXG5cdCAgZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG5cdCAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgZm4oZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcblx0ICAgICAgICBkb25lID0gdHJ1ZTtcblx0ICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcblx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICAgIGlmIChkb25lKSByZXR1cm47XG5cdCAgICAgICAgZG9uZSA9IHRydWU7XG5cdCAgICAgICAgcmVqZWN0KHNlbGYsIHJlYXNvbik7XG5cdCAgICAgIH0pO1xuXHQgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgaWYgKGRvbmUpIHJldHVybjtcblx0ICAgICAgZG9uZSA9IHRydWU7XG5cdCAgICAgIHJlamVjdChzZWxmLCBleCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG5cdCAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0ICAgIHZhciBwcm9tID0gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShub29wKTtcblx0XG5cdCAgICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcblx0ICAgIHJldHVybiBwcm9tO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UuYWxsID0gZnVuY3Rpb24gKGFycikge1xuXHQgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuXHRcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuXHQgICAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cdFxuXHQgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG5cdCAgICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuXHQgICAgICAgICAgICAgIH0sIHJlamVjdCk7XG5cdCAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuXHQgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG5cdCAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgICAgIHJlamVjdChleCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHQgICAgICByZXNvbHZlKHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICByZWplY3QodmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIC8qKlxuXHQgICAqIFNldCB0aGUgaW1tZWRpYXRlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgY2FsbGJhY2tzXG5cdCAgICogQHBhcmFtIGZuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgUHJvbWlzZS5fc2V0SW1tZWRpYXRlRm4gPSBmdW5jdGlvbiBfc2V0SW1tZWRpYXRlRm4oZm4pIHtcblx0ICAgIGFzYXAgPSBmbjtcblx0ICB9O1xuXHRcblx0ICBQcm9taXNlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbihmbikge1xuXHQgICAgb25VbmhhbmRsZWRSZWplY3Rpb24gPSBmbjtcblx0ICB9O1xuXHRcblx0ICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0ICAgIG1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblx0ICB9IGVsc2UgaWYgKCFyb290LlByb21pc2UpIHtcblx0ICAgIHJvb3QuUHJvbWlzZSA9IFByb21pc2U7XG5cdCAgfVxuXHRcblx0fSkodGhpcyk7XG5cdFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygyKS5zZXRJbW1lZGlhdGUpKVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHNldEltbWVkaWF0ZSwgY2xlYXJJbW1lZGlhdGUpIHt2YXIgbmV4dFRpY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLm5leHRUaWNrO1xuXHR2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblx0dmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xuXHR2YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblx0XG5cdC8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cdFxuXHRleHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcblx0ICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG5cdH07XG5cdGV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcblx0ICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcblx0fTtcblx0ZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuXHRleHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblx0XG5cdGZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcblx0ICB0aGlzLl9pZCA9IGlkO1xuXHQgIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xuXHR9XG5cdFRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblx0VGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0ICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG5cdH07XG5cdFxuXHQvLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cblx0ZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuXHQgIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblx0ICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cdCAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcblx0fTtcblx0XG5cdGV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdCAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXHRcblx0ICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcblx0ICBpZiAobXNlY3MgPj0gMCkge1xuXHQgICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuXHQgICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuXHQgICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuXHQgICAgfSwgbXNlY3MpO1xuXHQgIH1cblx0fTtcblx0XG5cdC8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuXHRleHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG5cdCAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG5cdCAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRcblx0ICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblx0XG5cdCAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcblx0ICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG5cdCAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2Vcblx0ICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3Vcblx0ICAgICAgaWYgKGFyZ3MpIHtcblx0ICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBmbi5jYWxsKG51bGwpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuXHQgICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcblx0ICAgIH1cblx0ICB9KTtcblx0XG5cdCAgcmV0dXJuIGlkO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuXHQgIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xuXHR9O1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygyKS5zZXRJbW1lZGlhdGUsIF9fd2VicGFja19yZXF1aXJlX18oMikuY2xlYXJJbW1lZGlhdGUpKVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cdFxuXHR2YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cdFxuXHQvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcblx0Ly8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG5cdC8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblx0XG5cdHZhciBjYWNoZWRTZXRUaW1lb3V0O1xuXHR2YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXHRcblx0KGZ1bmN0aW9uICgpIHtcblx0ICB0cnkge1xuXHQgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHRyeSB7XG5cdCAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuXHQgICAgfVxuXHQgIH1cblx0fSAoKSlcblx0dmFyIHF1ZXVlID0gW107XG5cdHZhciBkcmFpbmluZyA9IGZhbHNlO1xuXHR2YXIgY3VycmVudFF1ZXVlO1xuXHR2YXIgcXVldWVJbmRleCA9IC0xO1xuXHRcblx0ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuXHQgICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgfVxuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIGRyYWluUXVldWUoKTtcblx0ICAgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcblx0ICAgIGlmIChkcmFpbmluZykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuXHQgICAgZHJhaW5pbmcgPSB0cnVlO1xuXHRcblx0ICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB3aGlsZShsZW4pIHtcblx0ICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcblx0ICAgICAgICBxdWV1ZSA9IFtdO1xuXHQgICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcblx0ICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB9XG5cdCAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0fVxuXHRcblx0cHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcblx0ICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cdCAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG5cdCAgICB9XG5cdH07XG5cdFxuXHQvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cdGZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuXHQgICAgdGhpcy5mdW4gPSBmdW47XG5cdCAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG5cdH1cblx0SXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG5cdH07XG5cdHByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5cdHByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5cdHByb2Nlc3MuZW52ID0ge307XG5cdHByb2Nlc3MuYXJndiA9IFtdO1xuXHRwcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblx0cHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXHRcblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cdFxuXHRwcm9jZXNzLm9uID0gbm9vcDtcblx0cHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3Mub25jZSA9IG5vb3A7XG5cdHByb2Nlc3Mub2ZmID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcblx0cHJvY2Vzcy5lbWl0ID0gbm9vcDtcblx0XG5cdHByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdFxuXHRwcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xuXHRwcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0cHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNlVHJhbnNpdGlvbiB0byBleHRlbmRcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIEJhc2VUcmFuc2l0aW9uID0ge1xuXHQgIC8qKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cblx0ICAgKi9cblx0ICBvbGRDb250YWluZXI6IHVuZGVmaW5lZCxcblx0XG5cdCAgLyoqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIG5ld0NvbnRhaW5lcjogdW5kZWZpbmVkLFxuXHRcblx0ICAvKipcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAdHlwZSB7UHJvbWlzZX1cblx0ICAgKi9cblx0ICBuZXdDb250YWluZXJMb2FkaW5nOiB1bmRlZmluZWQsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEhlbHBlciB0byBleHRlbmQgdGhlIG9iamVjdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQHBhcmFtICB7T2JqZWN0fSBuZXdPYmplY3Rcblx0ICAgKiBAcmV0dXJuIHtPYmplY3R9IG5ld0luaGVyaXRPYmplY3Rcblx0ICAgKi9cblx0ICBleHRlbmQ6IGZ1bmN0aW9uKG9iail7XG5cdCAgICByZXR1cm4gVXRpbHMuZXh0ZW5kKHRoaXMsIG9iaik7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBQamF4IG1vZHVsZSB0byBpbml0aWFsaXplXG5cdCAgICogdGhlIHRyYW5zaXRpb24uXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBvbGRDb250YWluZXJcblx0ICAgKiBAcGFyYW0gIHtQcm9taXNlfSBuZXdDb250YWluZXJcblx0ICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyKSB7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgIHRoaXMub2xkQ29udGFpbmVyID0gb2xkQ29udGFpbmVyO1xuXHQgICAgdGhpcy5fbmV3Q29udGFpbmVyUHJvbWlzZSA9IG5ld0NvbnRhaW5lcjtcblx0XG5cdCAgICB0aGlzLmRlZmVycmVkID0gVXRpbHMuZGVmZXJyZWQoKTtcblx0ICAgIHRoaXMubmV3Q29udGFpbmVyUmVhZHkgPSBVdGlscy5kZWZlcnJlZCgpO1xuXHQgICAgdGhpcy5uZXdDb250YWluZXJMb2FkaW5nID0gdGhpcy5uZXdDb250YWluZXJSZWFkeS5wcm9taXNlO1xuXHRcblx0ICAgIHRoaXMuc3RhcnQoKTtcblx0XG5cdCAgICB0aGlzLl9uZXdDb250YWluZXJQcm9taXNlLnRoZW4oZnVuY3Rpb24obmV3Q29udGFpbmVyKSB7XG5cdCAgICAgIF90aGlzLm5ld0NvbnRhaW5lciA9IG5ld0NvbnRhaW5lcjtcblx0ICAgICAgX3RoaXMubmV3Q29udGFpbmVyUmVhZHkucmVzb2x2ZSgpO1xuXHQgICAgfSk7XG5cdFxuXHQgICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZCBhcyBzb29uIHRoZSBUcmFuc2l0aW9uIGlzIGZpbmlzaGVkXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKi9cblx0ICBkb25lOiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMub2xkQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vbGRDb250YWluZXIpO1xuXHQgICAgdGhpcy5uZXdDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0ICAgIHRoaXMuZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIENvbnN0cnVjdG9yIGZvciB5b3VyIFRyYW5zaXRpb25cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEBhYnN0cmFjdFxuXHQgICAqL1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHt9LFxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXNlVHJhbnNpdGlvbjtcblxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIEp1c3QgYW4gb2JqZWN0IHdpdGggc29tZSBoZWxwZnVsIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLlV0aWxzXG5cdCAqL1xuXHR2YXIgVXRpbHMgPSB7XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIHRoZSBjdXJyZW50IHVybFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHJldHVybiB7U3RyaW5nfSBjdXJyZW50VXJsXG5cdCAgICovXG5cdCAgZ2V0Q3VycmVudFVybDogZnVuY3Rpb24oKSB7XG5cdCAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArXG5cdCAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuXHQgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXG5cdCAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHaXZlbiBhbiB1cmwsIHJldHVybiBpdCB3aXRob3V0IHRoZSBoYXNoXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG5cdCAgICogQHJldHVybiB7U3RyaW5nfSBuZXdDbGVhblVybFxuXHQgICAqL1xuXHQgIGNsZWFuTGluazogZnVuY3Rpb24odXJsKSB7XG5cdCAgICByZXR1cm4gdXJsLnJlcGxhY2UoLyMuKi8sICcnKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kIGFmdGVyIHRoZSB4aHIgcmVxdWVzdCBnb2VzIGluIHRpbWVvdXRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICB4aHJUaW1lb3V0OiA1MDAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBTdGFydCBhbiBYTUxIdHRwUmVxdWVzdCgpIGFuZCByZXR1cm4gYSBQcm9taXNlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuXHQgICAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAgICovXG5cdCAgeGhyOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuZGVmZXJyZWQoKTtcblx0ICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XG5cdCAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHQgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcblx0ICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKHJlcS5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcigneGhyOiBIVFRQIGNvZGUgaXMgbm90IDIwMCcpKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgcmVxLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcigneGhyOiBUaW1lb3V0IGV4Y2VlZGVkJykpO1xuXHQgICAgfTtcblx0XG5cdCAgICByZXEub3BlbignR0VUJywgdXJsKTtcblx0ICAgIHJlcS50aW1lb3V0ID0gdGhpcy54aHJUaW1lb3V0O1xuXHQgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ3gtYmFyYmEnLCAneWVzJyk7XG5cdCAgICByZXEuc2VuZCgpO1xuXHRcblx0ICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdldCBvYmogYW5kIHByb3BzIGFuZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggdGhlIHByb3BlcnR5IG1lcmdlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHBhcmFtICB7b2JqZWN0fSBvYmpcblx0ICAgKiBAcGFyYW0gIHtvYmplY3R9IHByb3BzXG5cdCAgICogQHJldHVybiB7b2JqZWN0fVxuXHQgICAqL1xuXHQgIGV4dGVuZDogZnVuY3Rpb24ob2JqLCBwcm9wcykge1xuXHQgICAgdmFyIG5ld09iaiA9IE9iamVjdC5jcmVhdGUob2JqKTtcblx0XG5cdCAgICBmb3IodmFyIHByb3AgaW4gcHJvcHMpIHtcblx0ICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblx0ICAgICAgICBuZXdPYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBuZXdPYmo7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGEgbmV3IFwiRGVmZXJyZWRcIiBvYmplY3Rcblx0ICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvSmF2YVNjcmlwdF9jb2RlX21vZHVsZXMvUHJvbWlzZS5qc20vRGVmZXJyZWRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEByZXR1cm4ge0RlZmVycmVkfVxuXHQgICAqL1xuXHQgIGRlZmVycmVkOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBuZXcgZnVuY3Rpb24oKSB7XG5cdCAgICAgIHRoaXMucmVzb2x2ZSA9IG51bGw7XG5cdCAgICAgIHRoaXMucmVqZWN0ID0gbnVsbDtcblx0XG5cdCAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG5cdCAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG5cdCAgICAgIH0uYmluZCh0aGlzKSk7XG5cdCAgICB9O1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiB0aGUgcG9ydCBudW1iZXIgbm9ybWFsaXplZCwgZXZlbnR1YWxseSB5b3UgY2FuIHBhc3MgYSBzdHJpbmcgdG8gYmUgbm9ybWFsaXplZC5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBwXG5cdCAgICogQHJldHVybiB7SW50fSBwb3J0XG5cdCAgICovXG5cdCAgZ2V0UG9ydDogZnVuY3Rpb24ocCkge1xuXHQgICAgdmFyIHBvcnQgPSB0eXBlb2YgcCAhPT0gJ3VuZGVmaW5lZCcgPyBwIDogd2luZG93LmxvY2F0aW9uLnBvcnQ7XG5cdCAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XG5cdFxuXHQgICAgaWYgKHBvcnQgIT0gJycpXG5cdCAgICAgIHJldHVybiBwYXJzZUludChwb3J0KTtcblx0XG5cdCAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwOicpXG5cdCAgICAgIHJldHVybiA4MDtcblx0XG5cdCAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwczonKVxuXHQgICAgICByZXR1cm4gNDQzO1xuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBEaXNwYXRjaGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNlVmlldyB0byBiZSBleHRlbmRlZFxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLkJhc2VWaWV3XG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgQmFzZVZpZXcgID0ge1xuXHQgIC8qKlxuXHQgICAqIE5hbWVzcGFjZSBvZiB0aGUgdmlldy5cblx0ICAgKiAobmVlZCB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGEtbmFtZXNwYWNlIG9mIHRoZSBjb250YWluZXIpXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqL1xuXHQgIG5hbWVzcGFjZTogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogSGVscGVyIHRvIGV4dGVuZCB0aGUgb2JqZWN0XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAcGFyYW0gIHtPYmplY3R9IG5ld09iamVjdFxuXHQgICAqIEByZXR1cm4ge09iamVjdH0gbmV3SW5oZXJpdE9iamVjdFxuXHQgICAqL1xuXHQgIGV4dGVuZDogZnVuY3Rpb24ob2JqKXtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQodGhpcywgb2JqKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBJbml0IHRoZSB2aWV3LlxuXHQgICAqIFAuUy4gSXMgc3VnZ2VzdGVkIHRvIGluaXQgdGhlIHZpZXcgYmVmb3JlIHN0YXJ0aW5nIEJhcmJhLlBqYXguc3RhcnQoKSxcblx0ICAgKiBpbiB0aGlzIHdheSAub25FbnRlcigpIGFuZCAub25FbnRlckNvbXBsZXRlZCgpIHdpbGwgYmUgZmlyZWQgZm9yIHRoZSBjdXJyZW50XG5cdCAgICogY29udGFpbmVyIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgICovXG5cdCAgaW5pdDogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgIERpc3BhdGNoZXIub24oJ2luaXRTdGF0ZUNoYW5nZScsXG5cdCAgICAgIGZ1bmN0aW9uKG5ld1N0YXR1cywgb2xkU3RhdHVzKSB7XG5cdCAgICAgICAgaWYgKG9sZFN0YXR1cyAmJiBvbGRTdGF0dXMubmFtZXNwYWNlID09PSBfdGhpcy5uYW1lc3BhY2UpXG5cdCAgICAgICAgICBfdGhpcy5vbkxlYXZlKCk7XG5cdCAgICAgIH1cblx0ICAgICk7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci5vbignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgZnVuY3Rpb24obmV3U3RhdHVzLCBvbGRTdGF0dXMsIGNvbnRhaW5lcikge1xuXHQgICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XG5cdCAgICAgICAgaWYgKG5ld1N0YXR1cy5uYW1lc3BhY2UgPT09IF90aGlzLm5hbWVzcGFjZSlcblx0ICAgICAgICAgIF90aGlzLm9uRW50ZXIoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0XG5cdCAgICBEaXNwYXRjaGVyLm9uKCd0cmFuc2l0aW9uQ29tcGxldGVkJyxcblx0ICAgICAgZnVuY3Rpb24obmV3U3RhdHVzLCBvbGRTdGF0dXMpIHtcblx0ICAgICAgICBpZiAobmV3U3RhdHVzLm5hbWVzcGFjZSA9PT0gX3RoaXMubmFtZXNwYWNlKVxuXHQgICAgICAgICAgX3RoaXMub25FbnRlckNvbXBsZXRlZCgpO1xuXHRcblx0ICAgICAgICBpZiAob2xkU3RhdHVzICYmIG9sZFN0YXR1cy5uYW1lc3BhY2UgPT09IF90aGlzLm5hbWVzcGFjZSlcblx0ICAgICAgICAgIF90aGlzLm9uTGVhdmVDb21wbGV0ZWQoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0IC8qKlxuXHQgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gdGhlIGNvbnRhaW5lclxuXHQgICogaXMgcmVhZHkgYW5kIGF0dGFjaGVkIHRvIHRoZSBET00uXG5cdCAgKlxuXHQgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgKiBAYWJzdHJhY3Rcblx0ICAqL1xuXHQgIG9uRW50ZXI6IGZ1bmN0aW9uKCkge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uXG5cdCAgICogdG8gdGhpcyBjb250YWluZXIgaGFzIGp1c3QgZmluaXNoZWQuXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAYWJzdHJhY3Rcblx0ICAgKi9cblx0ICBvbkVudGVyQ29tcGxldGVkOiBmdW5jdGlvbigpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvblxuXHQgICAqIHRvIGEgbmV3IGNvbnRhaW5lciBoYXMganVzdCBzdGFydGVkLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgICogQGFic3RyYWN0XG5cdCAgICovXG5cdCAgb25MZWF2ZTogZnVuY3Rpb24oKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gdGhlIGNvbnRhaW5lclxuXHQgICAqIGhhcyBqdXN0IGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAYWJzdHJhY3Rcblx0ICAgKi9cblx0ICBvbkxlYXZlQ29tcGxldGVkOiBmdW5jdGlvbigpIHt9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXc7XG5cblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBMaXR0bGUgRGlzcGF0Y2hlciBpbnNwaXJlZCBieSBNaWNyb0V2ZW50LmpzXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuRGlzcGF0Y2hlclxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIERpc3BhdGNoZXIgPSB7XG5cdCAgLyoqXG5cdCAgICogT2JqZWN0IHRoYXQga2VlcHMgYWxsIHRoZSBldmVudHNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG5cdCAgICogQHJlYWRPbmx5XG5cdCAgICogQHR5cGUge09iamVjdH1cblx0ICAgKi9cblx0ICBldmVudHM6IHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCaW5kIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudE5hbWVcblx0ICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuY3Rpb25cblx0ICAgKi9cblx0ICBvbjogZnVuY3Rpb24oZSwgZikge1xuXHQgICAgdGhpcy5ldmVudHNbZV0gPSB0aGlzLmV2ZW50c1tlXSB8fCBbXTtcblx0ICAgIHRoaXMuZXZlbnRzW2VdLnB1c2goZik7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogVW5iaW5kIGV2ZW50XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuRGlzcGF0Y2hlclxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnROYW1lXG5cdCAgICogQHBhcmFtICB7RnVuY3Rpb259IGZ1bmN0aW9uXG5cdCAgICovXG5cdCAgb2ZmOiBmdW5jdGlvbihlLCBmKSB7XG5cdCAgICBpZihlIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSlcblx0ICAgICAgcmV0dXJuO1xuXHRcblx0ICAgIHRoaXMuZXZlbnRzW2VdLnNwbGljZSh0aGlzLmV2ZW50c1tlXS5pbmRleE9mKGYpLCAxKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGaXJlIHRoZSBldmVudCBydW5uaW5nIGFsbCB0aGUgZXZlbnQgYXNzb2NpYXRlZCB0byBpdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkRpc3BhdGNoZXJcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgICAqIEBwYXJhbSAgey4uLip9IGFyZ3Ncblx0ICAgKi9cblx0ICB0cmlnZ2VyOiBmdW5jdGlvbihlKSB7Ly9lLCAuLi5hcmdzXG5cdCAgICBpZiAoZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpXG5cdCAgICAgIHJldHVybjtcblx0XG5cdCAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbZV0ubGVuZ3RoOyBpKyspe1xuXHQgICAgICB0aGlzLmV2ZW50c1tlXVtpXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG5cblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHQvKipcblx0ICogQmFzZUNhY2hlIGl0J3MgYSBzaW1wbGUgc3RhdGljIGNhY2hlXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuQmFzZUNhY2hlXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgQmFzZUNhY2hlID0ge1xuXHQgIC8qKlxuXHQgICAqIFRoZSBPYmplY3QgdGhhdCBrZWVwcyBhbGwgdGhlIGtleSB2YWx1ZSBpbmZvcm1hdGlvblxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VDYWNoZVxuXHQgICAqIEB0eXBlIHtPYmplY3R9XG5cdCAgICovXG5cdCAgZGF0YToge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEhlbHBlciB0byBleHRlbmQgdGhpcyBvYmplY3Rcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlQ2FjaGVcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge09iamVjdH0gbmV3T2JqZWN0XG5cdCAgICogQHJldHVybiB7T2JqZWN0fSBuZXdJbmhlcml0T2JqZWN0XG5cdCAgICovXG5cdCAgZXh0ZW5kOiBmdW5jdGlvbihvYmopIHtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQodGhpcywgb2JqKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBTZXQgYSBrZXkgYW5kIHZhbHVlIGRhdGEsIG1haW5seSBCYXJiYSBpcyBnb2luZyB0byBzYXZlIHByb21pc2VzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuXHQgICAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICAgKi9cblx0ICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG5cdCAgICB0aGlzLmRhdGFba2V5XSA9IHZhbDtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXRyaWV2ZSB0aGUgZGF0YSB1c2luZyB0aGUga2V5XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBrZXlcblx0ICAgKiBAcmV0dXJuIHsqfVxuXHQgICAqL1xuXHQgIGdldDogZnVuY3Rpb24oa2V5KSB7XG5cdCAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRmx1c2ggdGhlIGNhY2hlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICovXG5cdCAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5kYXRhID0ge307XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXNlQ2FjaGU7XG5cblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBIaXN0b3J5TWFuYWdlciBoZWxwcyB0byBrZWVwIHRyYWNrIG9mIHRoZSBuYXZpZ2F0aW9uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuSGlzdG9yeU1hbmFnZXJcblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBIaXN0b3J5TWFuYWdlciA9IHtcblx0ICAvKipcblx0ICAgKiBLZWVwIHRyYWNrIG9mIHRoZSBzdGF0dXMgaW4gaGlzdG9yaWMgb3JkZXJcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgICAqIEByZWFkT25seVxuXHQgICAqIEB0eXBlIHtBcnJheX1cblx0ICAgKi9cblx0ICBoaXN0b3J5OiBbXSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWRkIGEgbmV3IHNldCBvZiB1cmwgYW5kIG5hbWVzcGFjZVxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkhpc3RvcnlNYW5hZ2VyXG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIGFkZDogZnVuY3Rpb24odXJsLCBuYW1lc3BhY2UpIHtcblx0ICAgIGlmICghbmFtZXNwYWNlKVxuXHQgICAgICBuYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG5cdFxuXHQgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xuXHQgICAgICB1cmw6IHVybCxcblx0ICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0ICAgIH0pO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBzdGF0dXNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgICAqIEByZXR1cm4ge09iamVjdH1cblx0ICAgKi9cblx0ICBjdXJyZW50U3RhdHVzOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJldmlvdXMgc3RhdHVzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuSGlzdG9yeU1hbmFnZXJcblx0ICAgKiBAcmV0dXJuIHtPYmplY3R9XG5cdCAgICovXG5cdCAgcHJldlN0YXR1czogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblx0XG5cdCAgICBpZiAoaGlzdG9yeS5sZW5ndGggPCAyKVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0XG5cdCAgICByZXR1cm4gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gSGlzdG9yeU1hbmFnZXI7XG5cblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHR2YXIgRGlzcGF0Y2hlciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBIaWRlU2hvd1RyYW5zaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIEJhc2VDYWNoZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdFxuXHR2YXIgSGlzdG9yeU1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgRG9tID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHQvKipcblx0ICogUGpheCBpcyBhIHN0YXRpYyBvYmplY3Qgd2l0aCBtYWluIGZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuUGpheFxuXHQgKiBAYm9ycm93cyBEb20gYXMgRG9tXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgUGpheCA9IHtcblx0ICBEb206IERvbSxcblx0ICBIaXN0b3J5OiBIaXN0b3J5TWFuYWdlcixcblx0ICBDYWNoZTogQmFzZUNhY2hlLFxuXHRcblx0ICAvKipcblx0ICAgKiBJbmRpY2F0ZSB3ZXRoZXIgb3Igbm90IHVzZSB0aGUgY2FjaGVcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHR5cGUge0Jvb2xlYW59XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBjYWNoZUVuYWJsZWQ6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluZGljYXRlIGlmIHRoZXJlIGlzIGFuIGFuaW1hdGlvbiBpbiBwcm9ncmVzc1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcmVhZE9ubHlcblx0ICAgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICAgKi9cblx0ICB0cmFuc2l0aW9uUHJvZ3Jlc3M6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBDbGFzcyBuYW1lIHVzZWQgdG8gaWdub3JlIGxpbmtzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBpZ25vcmVDbGFzc0xpbms6ICduby1iYXJiYScsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBzdGFydCBQamF4XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqL1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuaW5pdCgpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluaXQgdGhlIGV2ZW50c1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuRG9tLmdldENvbnRhaW5lcigpO1xuXHQgICAgdmFyIHdyYXBwZXIgPSB0aGlzLkRvbS5nZXRXcmFwcGVyKCk7XG5cdFxuXHQgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcblx0XG5cdCAgICB0aGlzLkhpc3RvcnkuYWRkKFxuXHQgICAgICB0aGlzLmdldEN1cnJlbnRVcmwoKSxcblx0ICAgICAgdGhpcy5Eb20uZ2V0TmFtZXNwYWNlKGNvbnRhaW5lcilcblx0ICAgICk7XG5cdFxuXHQgICAgLy9GaXJlIGZvciB0aGUgY3VycmVudCB2aWV3LlxuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCdpbml0U3RhdGVDaGFuZ2UnLCB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpKTtcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAge30sXG5cdCAgICAgIGNvbnRhaW5lcixcblx0ICAgICAgdGhpcy5Eb20uY3VycmVudEhUTUxcblx0ICAgICk7XG5cdCAgICBEaXNwYXRjaGVyLnRyaWdnZXIoJ3RyYW5zaXRpb25Db21wbGV0ZWQnLCB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpKTtcblx0XG5cdCAgICB0aGlzLmJpbmRFdmVudHMoKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBdHRhY2ggdGhlIGV2ZW50bGlzdGVuZXJzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgYmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG5cdCAgICAgIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKVxuXHQgICAgKTtcblx0XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLFxuXHQgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXR1cm4gdGhlIGN1cnJlbnRVUkwgY2xlYW5lZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IGN1cnJlbnRVcmxcblx0ICAgKi9cblx0ICBnZXRDdXJyZW50VXJsOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBVdGlscy5jbGVhbkxpbmsoXG5cdCAgICAgIFV0aWxzLmdldEN1cnJlbnRVcmwoKVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBDaGFuZ2UgdGhlIFVSTCB3aXRoIHB1c2hzdGF0ZSBhbmQgdHJpZ2dlciB0aGUgc3RhdGUgY2hhbmdlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdVcmxcblx0ICAgKi9cblx0ICBnb1RvOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xuXHQgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRm9yY2UgdGhlIGJyb3dzZXIgdG8gZ28gdG8gYSBjZXJ0YWluIHVybFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG5cdCAgICogQHByaXZhdGVcblx0ICAgKi9cblx0ICBmb3JjZUdvVG86IGZ1bmN0aW9uKHVybCkge1xuXHQgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIExvYWQgYW4gdXJsLCB3aWxsIHN0YXJ0IGFuIHhociByZXF1ZXN0IG9yIGxvYWQgZnJvbSB0aGUgY2FjaGVcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuXHQgICAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAgICovXG5cdCAgbG9hZDogZnVuY3Rpb24odXJsKSB7XG5cdCAgICB2YXIgZGVmZXJyZWQgPSBVdGlscy5kZWZlcnJlZCgpO1xuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgIHZhciB4aHI7XG5cdFxuXHQgICAgeGhyID0gdGhpcy5DYWNoZS5nZXQodXJsKTtcblx0XG5cdCAgICBpZiAoIXhocikge1xuXHQgICAgICB4aHIgPSBVdGlscy54aHIodXJsKTtcblx0ICAgICAgdGhpcy5DYWNoZS5zZXQodXJsLCB4aHIpO1xuXHQgICAgfVxuXHRcblx0ICAgIHhoci50aGVuKFxuXHQgICAgICBmdW5jdGlvbihkYXRhKSB7XG5cdCAgICAgICAgdmFyIGNvbnRhaW5lciA9IF90aGlzLkRvbS5wYXJzZVJlc3BvbnNlKGRhdGEpO1xuXHRcblx0ICAgICAgICBfdGhpcy5Eb20ucHV0Q29udGFpbmVyKGNvbnRhaW5lcik7XG5cdFxuXHQgICAgICAgIGlmICghX3RoaXMuY2FjaGVFbmFibGVkKVxuXHQgICAgICAgICAgX3RoaXMuQ2FjaGUucmVzZXQoKTtcblx0XG5cdCAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb250YWluZXIpO1xuXHQgICAgICB9LFxuXHQgICAgICBmdW5jdGlvbigpIHtcblx0ICAgICAgICAvL1NvbWV0aGluZyB3ZW50IHdyb25nICh0aW1lb3V0LCA0MDQsIDUwNS4uLilcblx0ICAgICAgICBfdGhpcy5mb3JjZUdvVG8odXJsKTtcblx0XG5cdCAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG5cdCAgICAgIH1cblx0ICAgICk7XG5cdFxuXHQgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSAuaHJlZiBwYXJhbWV0ZXIgb3V0IG9mIGFuIGVsZW1lbnRcblx0ICAgKiBhbmQgaGFuZGxlIHNwZWNpYWwgY2FzZXMgKGxpa2UgeGxpbms6aHJlZilcblx0ICAgKlxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IGhyZWZcblx0ICAgKi9cblx0ICBnZXRIcmVmOiBmdW5jdGlvbihlbCkge1xuXHQgICAgaWYgKCFlbCkge1xuXHQgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUgJiYgdHlwZW9mIGVsLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpID09PSAnc3RyaW5nJykge1xuXHQgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd4bGluazpocmVmJyk7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKHR5cGVvZiBlbC5ocmVmID09PSAnc3RyaW5nJykge1xuXHQgICAgICByZXR1cm4gZWwuaHJlZjtcblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIENhbGxiYWNrIGNhbGxlZCBmcm9tIGNsaWNrIGV2ZW50XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldnRcblx0ICAgKi9cblx0ICBvbkxpbmtDbGljazogZnVuY3Rpb24oZXZ0KSB7XG5cdCAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuXHRcblx0ICAgIC8vR28gdXAgaW4gdGhlIG5vZGVsaXN0IHVudGlsIHdlXG5cdCAgICAvL2ZpbmQgc29tZXRoaW5nIHdpdGggYW4gaHJlZlxuXHQgICAgd2hpbGUgKGVsICYmICF0aGlzLmdldEhyZWYoZWwpKSB7XG5cdCAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAodGhpcy5wcmV2ZW50Q2hlY2soZXZ0LCBlbCkpIHtcblx0ICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblx0XG5cdCAgICAgIERpc3BhdGNoZXIudHJpZ2dlcignbGlua0NsaWNrZWQnLCBlbCwgZXZ0KTtcblx0XG5cdCAgICAgIHZhciBocmVmID0gdGhpcy5nZXRIcmVmKGVsKTtcblx0ICAgICAgdGhpcy5nb1RvKGhyZWYpO1xuXHQgICAgfVxuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIERldGVybWluZSBpZiB0aGUgbGluayBzaG91bGQgYmUgZm9sbG93ZWRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHBhcmFtICB7TW91c2VFdmVudH0gZXZ0XG5cdCAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKiBAcmV0dXJuIHtCb29sZWFufVxuXHQgICAqL1xuXHQgIHByZXZlbnRDaGVjazogZnVuY3Rpb24oZXZ0LCBlbGVtZW50KSB7XG5cdCAgICBpZiAoIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSlcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIHZhciBocmVmID0gdGhpcy5nZXRIcmVmKGVsZW1lbnQpO1xuXHRcblx0ICAgIC8vVXNlclxuXHQgICAgaWYgKCFlbGVtZW50IHx8ICFocmVmKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9NaWRkbGUgY2xpY2ssIGNtZCBjbGljaywgYW5kIGN0cmwgY2xpY2tcblx0ICAgIGlmIChldnQud2hpY2ggPiAxIHx8IGV2dC5tZXRhS2V5IHx8IGV2dC5jdHJsS2V5IHx8IGV2dC5zaGlmdEtleSB8fCBldnQuYWx0S2V5KVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JZ25vcmUgdGFyZ2V0IHdpdGggX2JsYW5rIHRhcmdldFxuXHQgICAgaWYgKGVsZW1lbnQudGFyZ2V0ICYmIGVsZW1lbnQudGFyZ2V0ID09PSAnX2JsYW5rJylcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vQ2hlY2sgaWYgaXQncyB0aGUgc2FtZSBkb21haW5cblx0ICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IGVsZW1lbnQucHJvdG9jb2wgfHwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9PSBlbGVtZW50Lmhvc3RuYW1lKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9DaGVjayBpZiB0aGUgcG9ydCBpcyB0aGUgc2FtZVxuXHQgICAgaWYgKFV0aWxzLmdldFBvcnQoKSAhPT0gVXRpbHMuZ2V0UG9ydChlbGVtZW50LnBvcnQpKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JZ25vcmUgY2FzZSB3aGVuIGEgaGFzaCBpcyBiZWluZyB0YWNrZWQgb24gdGhlIGN1cnJlbnQgVVJMXG5cdCAgICBpZiAoaHJlZi5pbmRleE9mKCcjJykgPiAtMSlcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vSWdub3JlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgZG93bmxvYWQgYXR0cmlidXRlXG5cdCAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkb3dubG9hZCcpID09PSAnc3RyaW5nJylcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vSW4gY2FzZSB5b3UncmUgdHJ5aW5nIHRvIGxvYWQgdGhlIHNhbWUgcGFnZVxuXHQgICAgaWYgKFV0aWxzLmNsZWFuTGluayhocmVmKSA9PSBVdGlscy5jbGVhbkxpbmsobG9jYXRpb24uaHJlZikpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pZ25vcmVDbGFzc0xpbmspKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGEgdHJhbnNpdGlvbiBvYmplY3Rcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHJldHVybiB7QmFyYmEuVHJhbnNpdGlvbn0gVHJhbnNpdGlvbiBvYmplY3Rcblx0ICAgKi9cblx0ICBnZXRUcmFuc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0ICAgIC8vVXNlciBjdXN0b21pemFibGVcblx0ICAgIHJldHVybiBIaWRlU2hvd1RyYW5zaXRpb247XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogTWV0aG9kIGNhbGxlZCBhZnRlciBhICdwb3BzdGF0ZScgb3IgZnJvbSAuZ29UbygpXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgb25TdGF0ZUNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgbmV3VXJsID0gdGhpcy5nZXRDdXJyZW50VXJsKCk7XG5cdFxuXHQgICAgaWYgKHRoaXMudHJhbnNpdGlvblByb2dyZXNzKVxuXHQgICAgICB0aGlzLmZvcmNlR29UbyhuZXdVcmwpO1xuXHRcblx0ICAgIGlmICh0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpLnVybCA9PT0gbmV3VXJsKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgdGhpcy5IaXN0b3J5LmFkZChuZXdVcmwpO1xuXHRcblx0ICAgIHZhciBuZXdDb250YWluZXIgPSB0aGlzLmxvYWQobmV3VXJsKTtcblx0ICAgIHZhciB0cmFuc2l0aW9uID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmdldFRyYW5zaXRpb24oKSk7XG5cdFxuXHQgICAgdGhpcy50cmFuc2l0aW9uUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignaW5pdFN0YXRlQ2hhbmdlJyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAgdGhpcy5IaXN0b3J5LnByZXZTdGF0dXMoKVxuXHQgICAgKTtcblx0XG5cdCAgICB2YXIgdHJhbnNpdGlvbkluc3RhbmNlID0gdHJhbnNpdGlvbi5pbml0KFxuXHQgICAgICB0aGlzLkRvbS5nZXRDb250YWluZXIoKSxcblx0ICAgICAgbmV3Q29udGFpbmVyXG5cdCAgICApO1xuXHRcblx0ICAgIG5ld0NvbnRhaW5lci50aGVuKFxuXHQgICAgICB0aGlzLm9uTmV3Q29udGFpbmVyTG9hZGVkLmJpbmQodGhpcylcblx0ICAgICk7XG5cdFxuXHQgICAgdHJhbnNpdGlvbkluc3RhbmNlLnRoZW4oXG5cdCAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcylcblx0ICAgICk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRnVuY3Rpb24gY2FsbGVkIGFzIHNvb24gdGhlIG5ldyBjb250YWluZXIgaXMgcmVhZHlcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcblx0ICAgKi9cblx0ICBvbk5ld0NvbnRhaW5lckxvYWRlZDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdCAgICB2YXIgY3VycmVudFN0YXR1cyA9IHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCk7XG5cdCAgICBjdXJyZW50U3RhdHVzLm5hbWVzcGFjZSA9IHRoaXMuRG9tLmdldE5hbWVzcGFjZShjb250YWluZXIpO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAgdGhpcy5IaXN0b3J5LnByZXZTdGF0dXMoKSxcblx0ICAgICAgY29udGFpbmVyLFxuXHQgICAgICB0aGlzLkRvbS5jdXJyZW50SFRNTFxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGdW5jdGlvbiBjYWxsZWQgYXMgc29vbiB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oKSB7XG5cdCAgICB0aGlzLnRyYW5zaXRpb25Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcigndHJhbnNpdGlvbkNvbXBsZXRlZCcsXG5cdCAgICAgIHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCksXG5cdCAgICAgIHRoaXMuSGlzdG9yeS5wcmV2U3RhdHVzKClcblx0ICAgICk7XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBQamF4O1xuXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIEJhc2VUcmFuc2l0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNpYyBUcmFuc2l0aW9uIG9iamVjdCwgd2FpdCBmb3IgdGhlIG5ldyBDb250YWluZXIgdG8gYmUgcmVhZHksXG5cdCAqIHNjcm9sbCB0b3AsIGFuZCBmaW5pc2ggdGhlIHRyYW5zaXRpb24gKHJlbW92aW5nIHRoZSBvbGQgY29udGFpbmVyIGFuZCBkaXNwbGF5aW5nIHRoZSBuZXcgb25lKVxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLkhpZGVTaG93VHJhbnNpdGlvblxuXHQgKiBAYXVnbWVudHMgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICovXG5cdHZhciBIaWRlU2hvd1RyYW5zaXRpb24gPSBCYXNlVHJhbnNpdGlvbi5leHRlbmQoe1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMubmV3Q29udGFpbmVyTG9hZGluZy50aGVuKHRoaXMuZmluaXNoLmJpbmQodGhpcykpO1xuXHQgIH0sXG5cdFxuXHQgIGZpbmlzaDogZnVuY3Rpb24oKSB7XG5cdCAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG5cdCAgICB0aGlzLmRvbmUoKTtcblx0ICB9XG5cdH0pO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBIaWRlU2hvd1RyYW5zaXRpb247XG5cblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogT2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gZGVhbCB3aXRoIERPTSBwYXJzaW5nL21hbmlwdWxhdGlvblxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLlBqYXguRG9tXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgRG9tID0ge1xuXHQgIC8qKlxuXHQgICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhIGF0dHJpYnV0ZSBvbiB0aGUgY29udGFpbmVyXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqIEBkZWZhdWx0XG5cdCAgICovXG5cdCAgZGF0YU5hbWVzcGFjZTogJ25hbWVzcGFjZScsXG5cdFxuXHQgIC8qKlxuXHQgICAqIElkIG9mIHRoZSBtYWluIHdyYXBwZXJcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICB3cmFwcGVySWQ6ICdiYXJiYS13cmFwcGVyJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQ2xhc3MgbmFtZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBjb250YWluZXJzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqIEBkZWZhdWx0XG5cdCAgICovXG5cdCAgY29udGFpbmVyQ2xhc3M6ICdiYXJiYS1jb250YWluZXInLFxuXHRcblx0ICAvKipcblx0ICAgKiBGdWxsIEhUTUwgU3RyaW5nIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAgICogQnkgZGVmYXVsdCBpcyB0aGUgaW5uZXJIVE1MIG9mIHRoZSBpbml0aWFsIGxvYWRlZCBwYWdlLlxuXHQgICAqXG5cdCAgICogRWFjaCB0aW1lIGEgbmV3IHBhZ2UgaXMgbG9hZGVkLCB0aGUgdmFsdWUgaXMgdGhlIHJlc3BvbnNlIG9mIHRoZSB4aHIgY2FsbC5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICovXG5cdCAgY3VycmVudEhUTUw6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIFBhcnNlIHRoZSByZXNwb25zZVRleHQgb2J0YWluZWQgZnJvbSB0aGUgeGhyIGNhbGxcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSByZXNwb25zZVRleHRcblx0ICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cblx0ICAgKi9cblx0ICBwYXJzZVJlc3BvbnNlOiBmdW5jdGlvbihyZXNwb25zZVRleHQpIHtcblx0ICAgIHRoaXMuY3VycmVudEhUTUwgPSByZXNwb25zZVRleHQ7XG5cdFxuXHQgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gcmVzcG9uc2VUZXh0O1xuXHRcblx0ICAgIHZhciB0aXRsZUVsID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXHRcblx0ICAgIGlmICh0aXRsZUVsKVxuXHQgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlRWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKHdyYXBwZXIpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdldCB0aGUgbWFpbiBiYXJiYSB3cmFwcGVyIGJ5IHRoZSBJRCBgd3JhcHBlcklkYFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKi9cblx0ICBnZXRXcmFwcGVyOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy53cmFwcGVySWQpO1xuXHRcblx0ICAgIGlmICghd3JhcHBlcilcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXJiYS5qczogd3JhcHBlciBub3QgZm91bmQhJyk7XG5cdFxuXHQgICAgcmV0dXJuIHdyYXBwZXI7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSBjb250YWluZXIgb24gdGhlIGN1cnJlbnQgRE9NLFxuXHQgICAqIG9yIGZyb20gYW4gSFRNTEVsZW1lbnQgcGFzc2VkIHZpYSBhcmd1bWVudFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIGdldENvbnRhaW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHQgICAgaWYgKCFlbGVtZW50KVxuXHQgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblx0XG5cdCAgICBpZiAoIWVsZW1lbnQpXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignQmFyYmEuanM6IERPTSBub3QgcmVhZHkhJyk7XG5cdFxuXHQgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucGFyc2VDb250YWluZXIoZWxlbWVudCk7XG5cdFxuXHQgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuanF1ZXJ5KVxuXHQgICAgICBjb250YWluZXIgPSBjb250YWluZXJbMF07XG5cdFxuXHQgICAgaWYgKCFjb250YWluZXIpXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignQmFyYmEuanM6IG5vIGNvbnRhaW5lciBmb3VuZCcpO1xuXHRcblx0ICAgIHJldHVybiBjb250YWluZXI7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgdGhlIGNvbnRhaW5lclxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqIEByZXR1cm4ge1N0cmluZ31cblx0ICAgKi9cblx0ICBnZXROYW1lc3BhY2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0ICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuZGF0YXNldCkge1xuXHQgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W3RoaXMuZGF0YU5hbWVzcGFjZV07XG5cdCAgICB9IGVsc2UgaWYgKGVsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyB0aGlzLmRhdGFOYW1lc3BhY2UpO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBudWxsO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFB1dCB0aGUgY29udGFpbmVyIG9uIHRoZSBwYWdlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICovXG5cdCAgcHV0Q29udGFpbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdCAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XG5cdCAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuXHQgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHZXQgY29udGFpbmVyIHNlbGVjdG9yXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKi9cblx0ICBwYXJzZUNvbnRhaW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHQgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmNvbnRhaW5lckNsYXNzKTtcblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IERvbTtcblxuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBQamF4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHQvKipcblx0ICogUHJlZmV0Y2hcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5QcmVmZXRjaFxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIFByZWZldGNoID0ge1xuXHQgIC8qKlxuXHQgICAqIENsYXNzIG5hbWUgdXNlZCB0byBpZ25vcmUgcHJlZmV0Y2ggb24gbGlua3Ncblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBpZ25vcmVDbGFzc0xpbms6ICduby1iYXJiYS1wcmVmZXRjaCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluaXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIG1vdXNlb3ZlciBhbmQgdG91Y2hzdGFydFxuXHQgICAqIGZvciB0aGUgcHJlZmV0Y2hcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgaWYgKCF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHRcblx0ICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbkxpbmtFbnRlci5iaW5kKHRoaXMpKTtcblx0ICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25MaW5rRW50ZXIuYmluZCh0aGlzKSk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogQ2FsbGJhY2sgZm9yIHRoZSBtb3VzZWhvdmVyL3RvdWNoc3RhcnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcblx0ICAgKi9cblx0ICBvbkxpbmtFbnRlcjogZnVuY3Rpb24oZXZ0KSB7XG5cdCAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuXHRcblx0ICAgIHdoaWxlIChlbCAmJiAhUGpheC5nZXRIcmVmKGVsKSkge1xuXHQgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKCFlbCB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pZ25vcmVDbGFzc0xpbmspKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0XG5cdCAgICB2YXIgdXJsID0gUGpheC5nZXRIcmVmKGVsKTtcblx0XG5cdCAgICAvL0NoZWNrIGlmIHRoZSBsaW5rIGlzIGVsZWdpYmxlIGZvciBQamF4XG5cdCAgICBpZiAoUGpheC5wcmV2ZW50Q2hlY2soZXZ0LCBlbCkgJiYgIVBqYXguQ2FjaGUuZ2V0KHVybCkpIHtcblx0ICAgICAgdmFyIHhociA9IFV0aWxzLnhocih1cmwpO1xuXHQgICAgICBQamF4LkNhY2hlLnNldCh1cmwsIHhocik7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmVmZXRjaDtcblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXJiYS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFyYmEuanMvZGlzdC9iYXJiYS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvKiFcbiAqIEEgbGlnaHR3ZWlnaHQsIGRlcGVuZGVuY3ktZnJlZSBhbmQgcmVzcG9uc2l2ZSBqYXZhc2NyaXB0IHBsdWdpbiBmb3IgcGFydGljbGUgYmFja2dyb3VuZHMuXG4gKlxuICogQGF1dGhvciBNYXJjIEJydWVkZXJsaW4gPGhlbGxvQG1hcmNicnVlZGVybGluLmNvbT5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21hcmNicnVlZGVybGluL3BhcnRpY2xlcy5qc1xuICovXG52YXIgUGFydGljbGVzPWZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0Lng8ZS54Py0xOnQueD5lLng/MTp0Lnk8ZS55Py0xOnQueT5lLnk/MTowfXZhciBpLG89e307cmV0dXJuIGk9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuZGVmYXVsdHM9e3Jlc3BvbnNpdmU6bnVsbCxzZWxlY3RvcjpudWxsLG1heFBhcnRpY2xlczoxMDAsc2l6ZVZhcmlhdGlvbnM6MyxzaG93UGFydGljbGVzOiEwLHNwZWVkOi41LGNvbG9yOlwiIzAwMDAwMFwiLG1pbkRpc3RhbmNlOjEyMCxjb25uZWN0UGFydGljbGVzOiExfSx0LmVsZW1lbnQ9bnVsbCx0LmNvbnRleHQ9bnVsbCx0LnJhdGlvPW51bGwsdC5icmVha3BvaW50cz1bXSx0LmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCx0LmJyZWFrcG9pbnRTZXR0aW5ncz1bXSx0Lm9yaWdpbmFsU2V0dGluZ3M9bnVsbCx0LnN0b3JhZ2U9W10sdC51c2luZ1BvbHlmaWxsPSExfX0oKSxpLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIGUub3B0aW9ucz1lLl9leHRlbmQoZS5kZWZhdWx0cyx0KSxlLm9wdGlvbnMuY29sb3I9dC5jb2xvcj9lLl9oZXgycmdiKHQuY29sb3IpOmUuX2hleDJyZ2IoZS5kZWZhdWx0cy5jb2xvciksZS5vcmlnaW5hbFNldHRpbmdzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZS5vcHRpb25zKSksZS5fYW5pbWF0ZT1lLl9hbmltYXRlLmJpbmQoZSksZS5faW5pdGlhbGl6ZUNhbnZhcygpLGUuX2luaXRpYWxpemVFdmVudHMoKSxlLl9yZWdpc3RlckJyZWFrcG9pbnRzKCksZS5fY2hlY2tSZXNwb25zaXZlKCksZS5faW5pdGlhbGl6ZVN0b3JhZ2UoKSxlLl9hbmltYXRlKCksZX0saS5wcm90b3R5cGUuX2luaXRpYWxpemVDYW52YXM9ZnVuY3Rpb24oKXt2YXIgbixpLG89dGhpcztpZighby5vcHRpb25zLnNlbGVjdG9yKXJldHVybiBjb25zb2xlLndhcm4oXCJwYXJ0aWNsZXMuanM6IE5vIHNlbGVjdG9yIHNwZWNpZmllZCEgQ2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL21hcmNicnVlZGVybGluL3BhcnRpY2xlcy5qcyNvcHRpb25zXCIpLCExO28uZWxlbWVudD1lLnF1ZXJ5U2VsZWN0b3Ioby5vcHRpb25zLnNlbGVjdG9yKSxvLmNvbnRleHQ9by5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSxuPXQuZGV2aWNlUGl4ZWxSYXRpb3x8MSxpPW8uY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvfHxvLmNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpb3x8by5jb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpb3x8by5jb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvfHxvLmNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpb3x8MSxvLnJhdGlvPW4vaSxvLmVsZW1lbnQud2lkdGg9by5lbGVtZW50Lm9mZnNldFBhcmVudC5jbGllbnRXaWR0aCpvLnJhdGlvLFwiQk9EWVwiPT09by5lbGVtZW50Lm9mZnNldFBhcmVudC5ub2RlTmFtZT9vLmVsZW1lbnQuaGVpZ2h0PXQuaW5uZXJIZWlnaHQqby5yYXRpbzpvLmVsZW1lbnQuaGVpZ2h0PW8uZWxlbWVudC5vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0Km8ucmF0aW8sby5lbGVtZW50LnN0eWxlLndpZHRoPVwiMTAwJVwiLG8uZWxlbWVudC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsby5jb250ZXh0LnNjYWxlKG8ucmF0aW8sby5yYXRpbyl9LGkucHJvdG90eXBlLl9pbml0aWFsaXplRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLl9yZXNpemUuYmluZChlKSwhMSl9LGkucHJvdG90eXBlLl9pbml0aWFsaXplU3RvcmFnZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5zdG9yYWdlPVtdO2Zvcih2YXIgZT10Lm9wdGlvbnMubWF4UGFydGljbGVzO2UtLTspdC5zdG9yYWdlLnB1c2gobmV3IG8odC5jb250ZXh0LHQub3B0aW9ucykpfSxpLnByb3RvdHlwZS5fcmVnaXN0ZXJCcmVha3BvaW50cz1mdW5jdGlvbigpe3ZhciB0LGUsbixpPXRoaXMsbz1pLm9wdGlvbnMucmVzcG9uc2l2ZXx8bnVsbDtpZihcIm9iamVjdFwiPT10eXBlb2YgbyYmbnVsbCE9PW8mJm8ubGVuZ3RoKXtmb3IodCBpbiBvKWlmKG49aS5icmVha3BvaW50cy5sZW5ndGgtMSxlPW9bdF0uYnJlYWtwb2ludCxvLmhhc093blByb3BlcnR5KHQpKXtmb3Iob1t0XS5vcHRpb25zLmNvbG9yJiYob1t0XS5vcHRpb25zLmNvbG9yPWkuX2hleDJyZ2Iob1t0XS5vcHRpb25zLmNvbG9yKSk7bj49MDspaS5icmVha3BvaW50c1tuXSYmaS5icmVha3BvaW50c1tuXT09PWUmJmkuYnJlYWtwb2ludHMuc3BsaWNlKG4sMSksbi0tO2kuYnJlYWtwb2ludHMucHVzaChlKSxpLmJyZWFrcG9pbnRTZXR0aW5nc1tlXT1vW3RdLm9wdGlvbnN9aS5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUtdH0pfX0saS5wcm90b3R5cGUuX2NoZWNrUmVzcG9uc2l2ZT1mdW5jdGlvbigpe3ZhciBlLG49dGhpcyxpPSExLG89dC5pbm5lcldpZHRoO2lmKG4ub3B0aW9ucy5yZXNwb25zaXZlJiZuLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgmJm51bGwhPT1uLm9wdGlvbnMucmVzcG9uc2l2ZSl7aT1udWxsO2ZvcihlIGluIG4uYnJlYWtwb2ludHMpbi5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShlKSYmbzw9bi5icmVha3BvaW50c1tlXSYmKGk9bi5icmVha3BvaW50c1tlXSk7bnVsbCE9PWk/KG4uYWN0aXZlQnJlYWtwb2ludD1pLG4ub3B0aW9ucz1uLl9leHRlbmQobi5vcHRpb25zLG4uYnJlYWtwb2ludFNldHRpbmdzW2ldKSk6bnVsbCE9PW4uYWN0aXZlQnJlYWtwb2ludCYmKG4uYWN0aXZlQnJlYWtwb2ludD1udWxsLGk9bnVsbCxuLm9wdGlvbnM9bi5fZXh0ZW5kKG4ub3B0aW9ucyxuLm9yaWdpbmFsU2V0dGluZ3MpKX19LGkucHJvdG90eXBlLl9yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0Ll9pbml0aWFsaXplU3RvcmFnZSgpLHQuX2RyYXcoKX0saS5wcm90b3R5cGUuX3Jlc2l6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5lbGVtZW50LndpZHRoPWUuZWxlbWVudC5vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGgqZS5yYXRpbyxcIkJPRFlcIj09PWUuZWxlbWVudC5vZmZzZXRQYXJlbnQubm9kZU5hbWU/ZS5lbGVtZW50LmhlaWdodD10LmlubmVySGVpZ2h0KmUucmF0aW86ZS5lbGVtZW50LmhlaWdodD1lLmVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCplLnJhdGlvLGUuY29udGV4dC5zY2FsZShlLnJhdGlvLGUucmF0aW8pLGNsZWFyVGltZW91dChlLndpbmRvd0RlbGF5KSxlLndpbmRvd0RlbGF5PXQuc2V0VGltZW91dChmdW5jdGlvbigpe2UuX2NoZWNrUmVzcG9uc2l2ZSgpLGUuX3JlZnJlc2goKX0sNTApfSxpLnByb3RvdHlwZS5fYW5pbWF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZHJhdygpLGUuX2FuaW1hdGlvbj10LnJlcXVlc3RBbmltRnJhbWUoZS5fYW5pbWF0ZSl9LGkucHJvdG90eXBlLnJlc3VtZUFuaW1hdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5fYW5pbWF0aW9ufHx0Ll9hbmltYXRlKCl9LGkucHJvdG90eXBlLnBhdXNlQW5pbWF0aW9uPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9hbmltYXRpb24mJihlLnVzaW5nUG9seWZpbGw/dC5jbGVhclRpbWVvdXQoZS5fYW5pbWF0aW9uKToodC5jYW5jZWxBbmltYXRpb25GcmFtZXx8dC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8dC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSkoZS5fYW5pbWF0aW9uKSxlLl9hbmltYXRpb249bnVsbCl9LGkucHJvdG90eXBlLl9kcmF3PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxpPWUuZWxlbWVudCxvPWkub2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoLHI9aS5vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0LGE9ZS5vcHRpb25zLnNob3dQYXJ0aWNsZXMscz1lLnN0b3JhZ2U7XCJCT0RZXCI9PT1pLm9mZnNldFBhcmVudC5ub2RlTmFtZSYmKHI9dC5pbm5lckhlaWdodCksZS5jb250ZXh0LmNsZWFyUmVjdCgwLDAsaS53aWR0aCxpLmhlaWdodCksZS5jb250ZXh0LmJlZ2luUGF0aCgpLGUuY29udGV4dC5maWxsU3R5bGU9XCJyZ2IoXCIrZS5vcHRpb25zLmNvbG9yLnIrXCIsIFwiK2Uub3B0aW9ucy5jb2xvci5nK1wiLCBcIitlLm9wdGlvbnMuY29sb3IuYitcIilcIjtmb3IodmFyIGw9cy5sZW5ndGg7bC0tOyl7dmFyIGM9c1tsXTthJiZjLl9kcmF3KCksYy5fdXBkYXRlQ29vcmRpbmF0ZXMobyxyKX1lLmNvbnRleHQuZmlsbCgpLGUub3B0aW9ucy5jb25uZWN0UGFydGljbGVzJiYocy5zb3J0KG4pLGUuX3VwZGF0ZUVkZ2VzKCkpfSxpLnByb3RvdHlwZS5fdXBkYXRlRWRnZXM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcyxlPXQub3B0aW9ucy5taW5EaXN0YW5jZSxuPXQub3B0aW9ucy5jb2xvcixpPU1hdGguc3FydCxvPU1hdGguYWJzLHI9dC5zdG9yYWdlLGE9ci5sZW5ndGgscz1cInJnYmEoXCIrbi5yK1wiLFwiK24uZytcIixcIituLmIrXCIsXCIsbD0wO2w8YTtsKyspZm9yKHZhciBjPXJbbF0scD1sKzE7cDxhO3ArKyl7dmFyIHUsZj1yW3BdLGg9Yy54LWYueCxtPWMueS1mLnk7aWYodT1pKGgqaCttKm0pLG8oaCk+ZSlicmVhazt1PD1lJiZ0Ll9kcmF3RWRnZShjLGYscysoMS4yLXUvZSkrXCIpXCIpfX0saS5wcm90b3R5cGUuX2RyYXdFZGdlPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT10aGlzLmNvbnRleHQ7aS5iZWdpblBhdGgoKSxpLnN0cm9rZVN0eWxlPW4saS5tb3ZlVG8odC54LHQueSksaS5saW5lVG8oZS54LGUueSksaS5zdHJva2UoKSxpLmNsb3NlUGF0aCgpfSxpLnByb3RvdHlwZS5fZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dFtuXT1lW25dfSksdH0saS5wcm90b3R5cGUuX2hleDJyZ2I9ZnVuY3Rpb24odCl7dmFyIGU9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKHQpO3JldHVybiBlP3tyOnBhcnNlSW50KGVbMV0sMTYpLGc6cGFyc2VJbnQoZVsyXSwxNiksYjpwYXJzZUludChlWzNdLDE2KX06bnVsbH0sbz1mdW5jdGlvbihuLGkpe3ZhciBvPXRoaXMscj1NYXRoLnJhbmRvbSxhPWkuc3BlZWQ7by5jb250ZXh0PW4sby5vcHRpb25zPWk7dmFyIHM9ZS5xdWVyeVNlbGVjdG9yKGkuc2VsZWN0b3IpO28ueD1yKCkqcy5vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGgsXCJCT0RZXCI9PT1zLm9mZnNldFBhcmVudC5ub2RlTmFtZT9vLnk9cigpKnQuaW5uZXJIZWlnaHQ6by55PXIoKSpzLm9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQsby52eD1yKCkqYSoyLWEsby52eT1yKCkqYSoyLWEsby5yYWRpdXM9cigpKnIoKSppLnNpemVWYXJpYXRpb25zLG8uX2RyYXcoKX0sby5wcm90b3R5cGUuX2RyYXc9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuY29udGV4dC5zYXZlKCksdC5jb250ZXh0LnRyYW5zbGF0ZSh0LngsdC55KSx0LmNvbnRleHQubW92ZVRvKDAsMCksdC5jb250ZXh0LmFyYygwLDAsdC5yYWRpdXMsMCwyKk1hdGguUEksITEpLHQuY29udGV4dC5yZXN0b3JlKCl9LG8ucHJvdG90eXBlLl91cGRhdGVDb29yZGluYXRlcz1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMsaT1uLngrdGhpcy52eCxvPW4ueSt0aGlzLnZ5LHI9bi5yYWRpdXM7aStyPnQ/aT1yOmktcjwwJiYoaT10LXIpLG8rcj5lP289cjpvLXI8MCYmKG89ZS1yKSxuLng9aSxuLnk9b30sdC5yZXF1ZXN0QW5pbUZyYW1lPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxuPXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7cmV0dXJuIG58fChlLl91c2luZ1BvbHlmaWxsPSEwLGZ1bmN0aW9uKGUpe3JldHVybiB0LnNldFRpbWVvdXQoZSwxZTMvNjApfSl9KCksbmV3IGl9KHdpbmRvdyxkb2N1bWVudCk7IWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlBhcnRpY2xlc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFBhcnRpY2xlc30pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVBhcnRpY2xlczp3aW5kb3cuUGFydGljbGVzPVBhcnRpY2xlc30oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcGFydGljbGVzanMvZGlzdC9wYXJ0aWNsZXMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=