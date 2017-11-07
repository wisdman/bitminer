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
/******/ 		3: 0
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
/******/ 		script.src = __webpack_require__.p + "js/" + chunkId + "." + "ef0605b872e17e57b5ac" + ".chunk.js";
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
/* 0 */
/***/ (function(module, exports) {

// ChildNode.remove
(function () {
  "use strict";

  if(!("remove" in Element.prototype)){
    Element.prototype.remove = function(){
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
})();


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/tiny-slider/src/helpers/keys.js
var keys = __webpack_require__(5);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../node_modules/tiny-slider/src/helpers/childNode.remove.js
var childNode_remove = __webpack_require__(0);
var childNode_remove_default = /*#__PURE__*/__webpack_require__.n(childNode_remove);

// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/extend.js
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/checkStorageValue.js
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/setLocalStorage.js
function setLocalStorage(key, value, access) {
  if (access) { localStorage.setItem(key, value); }
  return value;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getSlideId.js
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getBody.js
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/docElement.js
var docElement = document.documentElement;
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/setFakeBody.js


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  return docOverflow;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/resetFakeBody.js



function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/calc.js
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 





function calc() {
  var doc = document, 
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var vals = ['calc(10px)', '-moz-calc(10px)', '-webkit-calc(10px)'], val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 10) { 
        result = val.replace('(10px)', ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return result;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/subpixelLayout.js
// get subpixel support value
// @return - boolean





function subpixelLayout() {
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      parent = doc.createElement('div'),
      child1 = doc.createElement('div'),
      child2,
      supported;

  parent.style.cssText = 'width: 10px';
  child1.style.cssText = 'float: left; width: 5.5px; height: 10px;';
  child2 = child1.cloneNode(true);

  parent.appendChild(child1);
  parent.appendChild(child2);
  body.appendChild(parent);

  supported = child1.offsetTop !== child2.offsetTop;

  body.fake ? resetFakeBody(body, docOverflow) : parent.remove();

  return supported;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/mediaquerySupport.js





function mediaquerySupport () {
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return position === "absolute";
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/createStyleSheet.js
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/addCSSRule.js
// cross browsers addRule method
function addCSSRule(sheet, selector, rules, index) {
  'insertRule' in sheet ?
    sheet.insertRule(selector + '{' + rules + '}', index) :
    sheet.addRule(selector, rules, index);
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getCssRulesLength.js
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/toDegree.js
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getTouchDirection.js
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/hasClass.js
function hasClass(el, str) {
  return el.className.indexOf(str) >= 0;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/addClass.js

function addClass(el, str) {
  if (!hasClass(el,  str)) {
    el.className += ' ' + str;
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/removeClass.js

function removeClass(el, str) {
  if (hasClass(el, str)) {
    el.className = el.className.replace(str, '');
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/hasAttr.js
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getAttr.js
function getAttr(el, attr) {
  return el.getAttribute(attr);
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/isNodeList.js
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/setAttrs.js


function setAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/removeAttrs.js


function removeAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/hideElement.js



function hideElement(el) {
  if (!hasAttr(el, 'hidden')) {
    setAttrs(el, {'hidden': ''});
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/showElement.js



function showElement(el) {
  if (hasAttr(el, 'hidden')) {
    removeAttrs(el, 'hidden');
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/imageLoaded.js
// check if an image is loaded
// 1. See if "naturalWidth" and "naturalHeight" properties are available.
// 2. See if "complete" property is available.

function imageLoaded(img) {
  if (typeof img.complete === 'boolean') {
    return img.complete;
  } else if (typeof img.naturalWidth === 'number') {
    return img.naturalWidth !== 0;
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/whichProperty.js
function whichProperty(props){
  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}

// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/getEndProperty.js
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/passiveOption.js
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var passiveOption_opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, passiveOption_opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/addEvents.js


function addEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/removeEvents.js


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/events.js
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
};
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/helpers/jsTransform.js
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}
// CONCATENATED MODULE: ../node_modules/tiny-slider/src/tiny-slider.module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tns; });
// Format: ES MODULE
// Version: 2.3.0

// helper functions































// check browser version and local storage
// if browser upgraded, 
// 1. delete browser ralated data from local storage and 
// 2. recheck these options and save them to local storage
var browserInfo = navigator.userAgent,
    localStorageAccess = true,
    tnsStorage = localStorage;

try {
  if (!tnsStorage['tnsApp']) {
    tnsStorage['tnsApp'] = browserInfo;
  } else if (tnsStorage['tnsApp'] !== browserInfo) {
    tnsStorage['tnsApp'] = browserInfo;

    // tC => calc
    // tSP => subpixel
    // tMQ => mediaquery
    // tTf => transform
    // tTDu => transitionDuration
    // tTDe => transitionDelay
    // tADu => animationDuration
    // tADe => animationDelay
    // tTE => transitionEnd
    // tAE => animationEnd

    ['tC', 'tSP', 'tMQ', 'tTf', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
      tnsStorage.removeItem(item);
    })
  }
} catch(e) {
  localStorageAccess = false;
}

// get browser related data from local storage if they exist
// otherwise, run the functions again and save these data to local storage
// checkStorageValue() convert non-string value to its original value: 'true' > true
var tiny_slider_module_doc = document,
    win = window,
    KEYS = {
      ENTER: 13,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },
    CALC = checkStorageValue(tnsStorage['tC']) || setLocalStorage('tC', calc(), localStorageAccess),
    SUBPIXEL = checkStorageValue(tnsStorage['tSP']) || setLocalStorage('tSP', subpixelLayout(), localStorageAccess),
    CSSMQ = checkStorageValue(tnsStorage['tMQ']) || setLocalStorage('tMQ', mediaquerySupport(), localStorageAccess),
    TRANSFORM = checkStorageValue(tnsStorage['tTf']) || setLocalStorage('tTf', whichProperty([
      'transform', 
      'WebkitTransform', 
      'MozTransform', 
      'msTransform', 
      'OTransform'
    ]), localStorageAccess),
    TRANSITIONDURATION = checkStorageValue(tnsStorage['tTDu']) || setLocalStorage('tTDu', whichProperty([
      'transitionDuration', 
      'WebkitTransitionDuration', 
      'MozTransitionDuration', 
      'OTransitionDuration'
    ]), localStorageAccess),
    TRANSITIONDELAY = checkStorageValue(tnsStorage['tTDe']) || setLocalStorage('tTDe', whichProperty([
      'transitionDelay', 
      'WebkitTransitionDelay', 
      'MozTransitionDelay', 
      'OTransitionDelay'
    ]), localStorageAccess),
    ANIMATIONDURATION = checkStorageValue(tnsStorage['tADu']) || setLocalStorage('tADu', whichProperty([
      'animationDuration', 
      'WebkitAnimationDuration', 
      'MozAnimationDuration', 
      'OAnimationDuration'
    ]), localStorageAccess),
    ANIMATIONDELAY = checkStorageValue(tnsStorage['tADe']) || setLocalStorage('tADe', whichProperty([
      'animationDelay', 
      'WebkitAnimationDelay', 
      'MozAnimationDelay', 
      'OAnimationDelay'
    ]), localStorageAccess),
    TRANSITIONEND = checkStorageValue(tnsStorage['tTE']) || setLocalStorage('tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
    ANIMATIONEND = checkStorageValue(tnsStorage['tAE']) || setLocalStorage('tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);

// reset SUBPIXEL for IE8
if (!CSSMQ) { SUBPIXEL = false; }

var tns = function(options) {
  options = extend({
    container: tiny_slider_module_doc.querySelector('.slider'),
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    nav: true,
    navContainer: false,
    // navAnimationIn: false,
    // navAnimationOut: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    // animateIn: 'tns-fadeIn',
    // animateOut: 'tns-fadeOut',
    // animateNormal: 'tns-normal',
    // animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    nested: false,
    freezable: true,
    onInit: false
  }, options || {});
  
  // get element nodes from selectors
  ['container', 'controlsContainer', 'navContainer', 'autoplayButton'].forEach(function(item) {
    if (typeof options[item] === 'string') { options[item] = tiny_slider_module_doc.querySelector(options[item]); }
  });

  // make sure slide container exists
  if (!options.container || !options.container.nodeName || options.container.children.length < 2) { return; }

  // update responsive
  // from: { 
  //    300: 2, 
  //    800: {
  //      loop: false
  //    }
  // }
  // to: {
  //    300: { 
  //      items: 2 
  //    }, 
  //    800: {
  //      loop: false
  //    }
  // }
  if (options.responsive) {
    var resTem = {}, res = options.responsive;
    for(var key in res) {
      var val = res[key];
      resTem[key] = typeof val === 'number' ? {items: val} :  val;
    }

    options.responsive = resTem;
    resTem = null;
  }

  // === define and set variables ===
  var carousel = options.mode === 'carousel' ? true : false;

  if (!carousel) {
    options.axis = 'horizontal';
    options.rewind = false;
    options.loop = true;
    options.edgePadding = false;

    var animateIn = 'tns-fadeIn',
        animateOut = 'tns-fadeOut',
        animateDelay = false,
        animateNormal = options.animateNormal || 'tns-normal';

    if (TRANSITIONEND && ANIMATIONEND) {
      animateIn = options.animateIn || animateIn;
      animateOut = options.animateOut || animateOut;
      animateDelay = options.animateDelay || animateDelay;
    }
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = tiny_slider_module_doc.createElement('div'),
      innerWrapper = tiny_slider_module_doc.createElement('div'),
      container = options.container,
      containerParent = container.parentNode,
      slideItems = container.children,
      slideCount = slideItems.length,
      vpOuter = containerParent.clientWidth,
      vpInner,
      responsive = options.responsive,
      responsiveItems = [],
      breakpoints = false,
      breakpointZone = 0,
      breakpointZoneAdjust = 0;

  if (responsive) {
    breakpoints = Object.keys(responsive)
      .map(function (x) { return parseInt(x); })
      .sort(function (a, b) { return a - b; });
    if (breakpoints.indexOf(0) < 0) { breakpointZoneAdjust = 1; }

    breakpoints.forEach(function(bp) {
      responsiveItems = responsiveItems.concat(Object.keys(responsive[bp]));
    });
    var arr = [];
    responsiveItems.forEach(function (item) { if (arr.indexOf(item) < 0) { arr.push(item); } });
    responsiveItems = arr;
    // alert(responsiveItems);

    breakpointZone = getBreakpointZone();
  } 

  var items = getOption('items'),
      slideBy = getOption('slideBy') === 'page' ? items : getOption('slideBy'),
      nested = options.nested,
      gutter = getOption('gutter'),
      edgePadding = getOption('edgePadding'),
      fixedWidth = getOption('fixedWidth'),
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      sheet = createStyleSheet(),
      lazyload = options.lazyload,
      slideOffsetTops, // collection of slide offset tops
      slideItemsOut = [],
      cloneCount = loop ? slideCount * 2 : checkOption('edgePadding') ? 1 : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = fixedWidth && !loop && !edgePadding ? true : false,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      index = !carousel ? 0 : cloneCount,
      indexCached = index,
      indexAdjust = !loop && checkOption('edgePadding') ? 1 : 0,
      indexMin = indexAdjust,
      indexMax = slideCountNew - items - indexAdjust,
      // resize
      resizeTimer,
      touchedOrDraged,
      running = false,
      onInit = options.onInit,
      events = new Events(),
      // id, class
      containerIdCached = container.id,
      classContainer = ' tns-slider tns-' + options.mode,
      slideId = container.id || getSlideId(),
      disable = getOption('disable'),
      freezable = options.freezable,
      freeze = disable ? true : freezable ? slideCount <= items : false,
      importantStr = nested === 'inner' ? ' !important' : '',
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onTouchOrMouseStart,
        'touchmove': onTouchOrMouseMove,
        'touchend': onTouchOrMouseEnd,
        'touchcancel': onTouchOrMouseEnd
      }, dragEvents = {
        'mousedown': onTouchOrMouseStart,
        'mousemove': onTouchOrMouseMove,
        'mouseup': onTouchOrMouseEnd,
        'mouseleave': onTouchOrMouseEnd
      },
      hasControls = checkOption('controls'),
      hasNav = checkOption('nav'),
      hasAutoplay = checkOption('autoplay'),
      hasTouch = checkOption('touch'),
      hasMouseDrag = checkOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active';

  // controls
  if (hasControls) {
    var controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        controlsContainer = options.controlsContainer,
        prevButton,
        nextButton,
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var nav = getOption('nav'),
        navContainer = options.navContainer,
        // navAnimationIn = options.navAnimationIn,
        // navAnimationOut = options.navAnimationOut,
        navItems,
        visibleNavIndexes = [],
        visibleNavIndexesCached = visibleNavIndexes,
        navClicked = -1,
        navCurrentIndex = 0,
        navCurrentIndexCached = 0,
        navActiveClass = 'tns-nav-active';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayTimer,
        autoplayButton = options.autoplayButton,
        animating = false,
        autoplayHoverStopped = false,
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        autoplayResetVisibilityState = false;
  }

  // touch
  if (hasTouch) {
    var touch = getOption('touch'),
        startX = null,
        startY = null,
        translateInit,
        disX,
        disY;
  }

  // mouse drag
  if (hasMouseDrag) {
    var mouseDrag = getOption('mouseDrag'),
        isDragEvent = false;
  }

  // disable slider when slidecount <= items
  if (freeze) {
    controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';
    transformPrefix += horizontal ? 'X(' : 'Y(';
    transformPostfix = ')';
  }

  // === COMMON FUNCTIONS === //
  function checkOption (item) {
    var result = options[item];
    if (!result && breakpoints && responsiveItems.indexOf(item) >= 0) {
      breakpoints.forEach(function (bp) {
        if (responsive[bp][item]) { result = true; }
      });
    }
    return result;
  }

  function getOption (item, view) {
    view = view ? view : vpOuter;
    var result;

    if (item === 'items' && getOption('fixedWidth')) {
      result = Math.floor(view / (getOption('fixedWidth') + getOption('gutter')));
    } else if (item === 'slideBy' && !carousel) {
      result = 'page';
    } else if (item === 'edgePadding' && !carousel) {
      result = false;
    } else if (item === 'autoHeight' && (!carousel || nested === 'outer')) {
      result = true;
    } else {
      result = options[item];

      if (breakpoints && responsiveItems.indexOf(item) >= 0) {
        for (var i = 0, len = breakpoints.length; i < len; i++) {
          var bp = breakpoints[i];
          if (view >= bp) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          } else { break; }
        }
      }

    }

    if (item === 'items') { result = Math.max(1, Math.min(slideCount, result)); }
    if (item === 'slideBy' && result === 'page') { result = getOption('items'); }

    return result;
  }

  function getSlideMarginLeft (i) {
    var str = CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
    return str;
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem) {
    var str = '';
    if (edgePaddingTem) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap += gutterTem; }
      if (fixedWidthTem) {
        str = 'margin: 0px ' + (vpOuter%(fixedWidthTem + gutterTem) + gutterTem) / 2 + 'px';
      } else {
        str = horizontal ?
          'margin: 0 ' + edgePaddingTem + 'px 0 ' + gap + 'px;' :
          'padding: ' + gap + 'px 0 ' + edgePaddingTem + 'px 0;';
      }
    } else if (gutterTem && !fixedWidthTem) {
      var dir = horizontal ? 'right' : 'bottom';
      str = 'margin-' + dir + ': -' + gutterTem + 'px;'
    }

    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    itemsTem = Math.min(slideCount, itemsTem);
    var str;

    if (fixedWidthTem) {
      str = (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      str = CALC ? 
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : 
        slideCountNew * 100 / itemsTem + '%';
    }

    return str;
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    itemsTem = Math.min(slideCount, itemsTem);
    var str = '';

    if (horizontal) {
      str = 'width:';
      if (fixedWidthTem) {
        str += (fixedWidthTem + gutterTem) + 'px';
      } else {
        var dividend = carousel ? slideCountNew : Math.min(slideCount, itemsTem);
        str += CALC ? 
          CALC + '(100% / ' + dividend + ')' : 
          100 / dividend + '%';
      }
      str += importantStr + ';';
    }

    return str;
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  (function sliderInit () {
    // First thing first, wrap container with 'outerWrapper > innerWrapper',
    // to get the correct view width
    outerWrapper.appendChild(innerWrapper);
    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);
    vpInner = innerWrapper.clientWidth;

    var classOuter = 'tns-outer',
        classInner = 'tns-inner';

    if (carousel) {
      if (horizontal) {
        if (checkOption('edgePadding') || checkOption('gutter') && !options.fixedWidth) {
          classOuter += ' tns-ovh';
        } else {
          classInner += ' tns-ovh';
        }
      } else {
        classInner += ' tns-ovh';
      }
    } else if (checkOption('gutter')) {
      classOuter += ' tns-ovh';
    }

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    innerWrapper.id = slideId + '-iw';
    if (autoHeight) {
      innerWrapper.className += ' tns-ah';
      innerWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }

    // set container properties
    if (container.id === '') { container.id = slideId; }
    classContainer += SUBPIXEL ? ' tns-subpixel' : ' tns-no-subpixel';
    classContainer += CALC ? ' tns-calc' : ' tns-no-calc';
    if (carousel) { classContainer += ' tns-' + options.axis; }
    container.className += classContainer;
    // add event
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }

    // delete datas after init
    classOuter = classInner = null;

    // add id, class, aria attributes 
    // before clone slides
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];
      if (!item.id) { item.id = slideId + '-item' + x; }
      addClass(item, 'tns-item');
      if (!carousel && animateNormal) { addClass(item, animateNormal); }
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }

    // clone slides
    if (loop || edgePadding) {
      var fragmentBefore = tiny_slider_module_doc.createDocumentFragment(), 
          fragmentAfter = tiny_slider_module_doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        removeAttrs(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          removeAttrs(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

    // activate visible slides
    // add aria attrs
    // set animation classes and left value for gallery slider
    for (var i = index; i < index + items; i++) {
      var item = slideItems[i];
      setAttrs(item, {'aria-hidden': 'false'});
      removeAttrs(item, ['tabindex']);
      addClass(item, slideActiveClass);

      if (!carousel) { 
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    if (carousel && horizontal) {
      // set font-size rules
      // for modern browsers
      // run once
      if (SUBPIXEL) {
        var cssFontSize = win.getComputedStyle(slideItems[0]).fontSize;
        // em, rem to px (for IE8-)
        if (cssFontSize.indexOf('em') > 0) {
          cssFontSize = parseFloat(cssFontSize) * 16 + 'px';
        }

        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + cssFontSize + ';', getCssRulesLength(sheet));

      // slide left margin
      // for IE8 & webkit browsers (no subpixel)
      } else {
        [].forEach.call(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }

    if (CSSMQ) {
      // inner wrapper styles
      var str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth);
      addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

      // container styles
      if (carousel && horizontal) {
        str = 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items);
        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
      }

      // slide styles
      if (horizontal || options.gutter) {
        str = getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) + 
              getSlideGutterStyle(options.gutter);
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
      }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);

      // container styles
      if (carousel && horizontal) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      if (horizontal || gutter) {
        var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                  getSlideGutterStyle(gutter);
        // append to the last line
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
      }
    }

    if (!horizontal && !disable) {
      getSlideOffsetTops();
      updateContentWrapperHeight();
    }

    // media queries
    if (responsive && CSSMQ) {
      breakpoints.forEach(function(bp) {
        var opts = responsive[bp],
            str = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = getOption('items', bp),
            fixedWidthBP = getOption('fixedWidth', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            gutterBP = getOption('gutter', bp);

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP) + '}';
        }

        // container string
        if (carousel && horizontal && ('fixedWidth' in opts || 'gutter' in opts || 'items' in opts)) {
          containerStr = '#' + slideId + '{' + 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + '}';
        }

        // slide string
        if ('fixedWidth' in opts || checkOption('fixedWidth') && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        if (slideStr.length > 0) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        str = innerWrapperStr + containerStr + slideStr;

        if (str.length > 0) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      });
    }


    // set container transform property
    if (carousel && !disable) {
      doContainerTransform();
    }


    // == msInit ==
    // for IE10
    if (navigator.msMaxTouchPoints) {
      addClass(outerWrapper, 'ms-touch');
      addEvents(outerWrapper, {'scroll': ie10Scroll});
      setSnapInterval();
    }

 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        [].forEach.call(navItems, function (item, index) {
          setAttrs(item, {
            'data-nav': index,
            'tabindex': '-1',
            'aria-selected': 'false',
            'aria-controls': slideItems[initIndex + index].id,
          });
          // if (navAnimationOut) {
          //   addClass(item, navAnimationOut);
          // }
        });

      // generated nav 
      } else {
        var navHtml = '';
            // classStr = navAnimationOut ? 'class="' + navAnimationOut + '"' : '';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          // navHtml += '<button ' + classStr + ' data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideId + '-item' + i +'" hidden type="button"></button>';
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideItems[initIndex + i].id +'" hidden type="button"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML('afterbegin', navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;

        updateNavVisibility();
      }

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
      }

      setAttrs(navItems[0], {'tabindex': '0', 'aria-selected': 'true'});
      addClass(navItems[0], navActiveClass);
      // if (navAnimationOut) {
      //   removeClass(navItems[0], navAnimationOut);
      // }
      // if (navAnimationIn) {
      //   addClass(navItems[0], navAnimationIn);
      // }

      // add events
      addEvents(navContainer, navEvents);

      if (!nav) { hideElement(navContainer); }
    }


    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        innerWrapper.insertAdjacentHTML('beforebegin', '<button data-action="' + txt + '" type="button">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        addEvents(autoplayButton, {'click': toggleAnimation});
      }

      if (!autoplay) {
        if (autoplayButton) {
          hideElement(autoplayButton);
        }
      } else {
        startAction();
        if (autoplayHoverPause) { addEvents(container, hoverEvents); }
        if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
      }
    }


    // == controlsInit ==
    if (hasControls) {
      if (controlsContainer) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
        setAttrs(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
        setAttrs(controlsContainer.children, {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      } else {
        outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      if (!loop) { disEnableElement(prevIsButton, prevButton, true); }

      // add events
      addEvents(controlsContainer, controlsEvents);

      if (!controls) { hideElement(controlsContainer); }
    }


    if (touch) { addEvents(container, touchEvents); }
    if (mouseDrag) { addEvents(container, dragEvents); }
    if (arrowKeys) { addEvents(tiny_slider_module_doc, docmentKeydownEvent); }


    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else {
      addEvents(win, {'resize': onResize});
      if (nested === 'outer') {
        events.on('innerLoaded', runAutoHeight);
      }
    }

    lazyLoad();
    runAutoHeight();
    checkFixedWidthSlideCount();

    events.on('indexChanged', additionalUpdates);

    if (typeof onInit === 'function') { onInit(info()); }
    if (nested === 'inner') { events.emit('innerLoaded', info()); }

    if (disable) { disableSlider(true); }
  })();





// === ON RESIZE ===
  function onResize (e) {
    e = e || win.event;

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (vpOuter !== outerWrapper.clientWidth) {
        resizeTasks();
        if (nested === 'outer') { 
          events.emit('outerResized', info(e)); 
        }
      }
    }, 100); // update after stop resizing for 100 ms
  }

  function resizeTasks () {
    var breakpointZoneTem = breakpointZone,
        indexTem = index, 
        itemsTem = items,
        freezeTem = freeze;

    vpOuter = outerWrapper.clientWidth;
    vpInner = innerWrapper.clientWidth;
    if (breakpoints) { breakpointZone = getBreakpointZone(); }


    // things do when breakpoint zone change
    if (breakpointZoneTem !== breakpointZone || fixedWidth) {
      var slideByTem = slideBy,
          arrowKeysTem = arrowKeys,
          autoHeightTem = autoHeight,
          fixedWidthTem = fixedWidth,
          edgePaddingTem = edgePadding,
          gutterTem = gutter,
          disableTem = disable;

      // get options for current breakpoint zone
      var opts = breakpointZone > 0 ? responsive[breakpoints[breakpointZone - 1]] : options;

      // update variables
      items = getOption('items');
      slideBy = getOption('slideBy');
      disable = getOption('disable');
      freeze = disable ? true : freezable ? slideCount <= items : false;

      if (items !== itemsTem) {
        indexMax = slideCountNew - items - indexAdjust;
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }

      if (disable !== disableTem) {
        disableSlider(disable);
      }
      
      if (freeze !== freezeTem && freeze) {
        // reset index to initial status
        index = !carousel ? 0 : cloneCount;
      }
      
      if (breakpointZoneTem !== breakpointZone) {
        speed = opts.speed || getOption('speed');
        edgePadding = opts.edgePadding || getOption('edgePadding');
        gutter = opts.gutter || getOption('gutter');

        fixedWidth = opts.fixedWidth || getOption('fixedWidth');
        if (!disable && fixedWidth !== fixedWidthTem) {
          doContainerTransform();
        }

        autoHeight = getOption('autoHeight');
        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) { innerWrapper.style.height = ''; }
        }
      }

      arrowKeys = freeze ? false : opts.arrowKeys || getOption('arrowKeys');
      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ?
          addEvents(tiny_slider_module_doc, docmentKeydownEvent) :
          removeEvents(tiny_slider_module_doc, docmentKeydownEvent);
      }

      if (hasControls) {
        var controlsTem = controls,
            controlsTextTem = controlsText;
        controls = freeze ? false : opts.controls || getOption('controls');
        controlsText = opts.controlsText || getOption('controlsText');

        if (controls !== controlsTem) {
          controls ?
            showElement(controlsContainer) :
            hideElement(controlsContainer); 
        }
        if (controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }
      }
      if (hasNav) {
        var navTem = nav;
        nav = freeze ? false : opts.nav || getOption('nav');

        if (nav !== navTem) {
          if (nav) {
            showElement(navContainer);
            updateNavVisibility();
          } else {
            hideElement(navContainer);
          }
        }
      }
      if (hasTouch) {
        var touchTem = touch;
        touch = freeze ? false : opts.touch || getOption('touch');

        if (touch !== touchTem && carousel) {
          touch ?
            addEvents(container, touchEvents) :
            removeEvents(container, touchEvents);
        }
      }
      if (hasMouseDrag) {
        var mouseDragTem = mouseDrag;
        mouseDrag = freeze ? false : opts.mouseDrag || getOption('mouseDrag');

        if (mouseDrag !== mouseDragTem && carousel) {
          mouseDrag ?
            addEvents(container, dragEvents) :
            removeEvents(container, dragEvents);
        }
      }
      if (hasAutoplay) {
        var autoplayTem = autoplay,
            autoplayHoverPauseTem = autoplayHoverPause,
            autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
            autoplayTextTem = autoplayText;

        if (freeze) {
          autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
        } else {
          autoplay = opts.autoplay || getOption('autoplay');
          
          if (autoplay) {
            autoplayHoverPause = opts.autoplayHoverPause || getOption('autoplayHoverPause');
            autoplayResetOnVisibility = opts.autoplayResetOnVisibility || getOption('autoplayResetOnVisibility');
          } else {
            autoplayHoverPause = autoplayResetOnVisibility = false;
          }
        }
        autoplayText = opts.autoplayText || getOption('autoplayText');
        autoplayTimeout = opts.autoplayTimeout || getOption('autoplayTimeout');

        if (autoplay !== autoplayTem) {
          if (autoplay) {
            if (autoplayButton) { showElement(autoplayButton); }
            if (!animating) { startAction(); }
          } else {
            if (autoplayButton) { hideElement(autoplayButton); }
            if (animating) { stopAction(); }
          }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) {
          autoplayHoverPause ?
            addEvents(container, hoverEvents) :
            removeEvents(container, hoverEvents);
        }
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
          autoplayResetOnVisibility ?
            addEvents(tiny_slider_module_doc, visibilityEvent) :
            removeEvents(tiny_slider_module_doc, visibilityEvent);
        }
        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;
          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      }

      // IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)
      if (!CSSMQ) {
        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
        }

        // container styles
        if (carousel && horizontal && (fixedWidth !== fixedWidthTem || gutter !== gutterTem || items !== itemsTem)) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        }

        // slide styles
        // always need to get width property
        var str = getSlideWidthStyle(fixedWidth, gutter, items);
        if (gutter !== gutterTem) {
          str += getSlideGutterStyle(gutter);
        }

        // remove the last line and
        // add it again
        if (str.length > 0) {
          sheet.removeRule(getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }

        // will do transform later if index !== indexTem
        // make sure doTransform will only run once
        if (!fixedWidth && index === indexTem) { doTransform(0); }
      }

      if (index !== indexTem) { 
        events.emit('indexChanged', info());
        doTransform(0); 
        indexCached = index;
      }

      if (items !== itemsTem) { 
        additionalUpdates();
        runAutoHeight();

        if (navigator.msMaxTouchPoints) { setSnapInterval(); }
      }
    }

    // things always do regardless of breakpoint zone changing
    if (!horizontal && !disable) {
      getSlideOffsetTops();
      updateContentWrapperHeight();
      doContainerTransform();
    }

    checkFixedWidthSlideCount();
    // auto height
    runAutoHeight();
  }





  // === INITIALIZATION FUNCTIONS === //
  function getBreakpointZone () {
    breakpointZone = 0;
    breakpoints.forEach(function(bp, i) {
      if (vpOuter >= bp) { breakpointZone = i + breakpointZoneAdjust; }
    });
    return breakpointZone;
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      function () {
        var leftEdge = indexMin + slideBy, rightEdge = indexMax - slideBy;

        var gt = gutter ? gutter : 0;
        if (fixedWidth && vpOuter%(fixedWidth + gt) > gt) { rightEdge -= 1; }

        if (index > rightEdge) {
          while(index >= leftEdge + slideCount) { index -= slideCount; }
        } else if(index < leftEdge) {
          while(index <= rightEdge - slideCount) { index += slideCount; }
        }
      } :
      function () { index = Math.max(indexMin, Math.min(indexMax, index)); };
  })();

  function checkFixedWidthSlideCount () {
    if (fixedWidth && cloneCount) {
      var str = 'tns-transparent';

      if (freeze) {
        if (!hasClass(slideItems[0], str)) {
          // remove edge padding from inner wrapper
          if (edgePadding) { innerWrapper.style.margin = '0'; }
          // add class tns-transparent to cloned slides
          for (var i = cloneCount; i--;) {
            addClass(slideItems[i], str);
            addClass(slideItems[slideCountNew - i - 1], str);
          }
        }
      } else {
        // restore edge padding for inner wrapper
        if (edgePadding) {
          if (vpOuter <= (fixedWidth + gutter)) {
            if (innerWrapper.style.margin !== '0px') { innerWrapper.style.margin = '0'; }
          } else {
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
          }
        }

        if (hasClass(slideItems[0], str)) {
          // remove class tns-transparent to cloned slides
          for (var i = cloneCount; i--;) {
            removeClass(slideItems[i], str);
            removeClass(slideItems[slideCountNew - i - 1], str);
          }
        }
      }
    }
  }

  function disableSlider (disable) {
    var len = slideItems.length;
    
    if (disable) {
      sheet.disabled = true;
      container.className = container.className.replace(classContainer.substring(1), '');
      container.style = '';
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { hideElement(slideItems[j]); }
          hideElement(slideItems[len - j - 1]);
        }
      }

      // vertical slider
      if (!horizontal || !carousel) { innerWrapper.style = ''; }

      // gallery
      if (!carousel) { 
        for (var i = index; i < index + slideCount; i++) {
          var item = slideItems[i];
          item.style = '';
          removeClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      }
    } else {
      sheet.disabled = false;
      container.className += classContainer;

      // vertical slider: get offsetTops before container transform
      if (!horizontal) { getSlideOffsetTops(); }

      doContainerTransform();
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { showElement(slideItems[j]); }
          showElement(slideItems[len - j - 1]);
        }
      }

      // gallery
      if (!carousel) { 
        for (var i = index; i < index + slideCount; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, classN);
        }
      }
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAction(); 
      autoplayHoverStopped = true;
    }
  }

  function mouseoutRestart () {
    if (!animating && autoplayHoverStopped) { 
      startAction(); 
      autoplayHoverStopped = false;
    }
  }

  // lazyload
  function lazyLoad () {
    if (lazyload && !disable) {
      var i = index, 
          len = index + items;
          
      if (edgePadding) {
        i -=1;
        len +=1;
      }

      for(; i < len; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('.tns-lazy-img'), function (img) {
          // stop propagationl transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          if (!hasClass(img, 'loaded')) {
            img.src = getAttr(img, 'data-src');
            addClass(img, 'loaded');
          }
        });
      }
    }
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight () {
    if (autoHeight && !disable) {
      // get all images inside visible slide items
      var images = [];

      for (var i = index; i < index + items; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('img'), function (img) {
          images.push(img);
        });
      }

      if (images.length === 0) {
        updateInnerWrapperHeight(); 
      } else {
        checkImagesLoaded(images);
      }
    }
  }

  function checkImagesLoaded (images) {
    images.forEach(function (img, index) {
      if (imageLoaded(img)) { images.splice(index, 1); }
    });

    if (images.length === 0) {
      updateInnerWrapperHeight();
    } else {
      setTimeout(function () { 
        checkImagesLoaded(images); 
      }, 16);
    }
  } 

  function additionalUpdates () {
    lazyLoad(); 
    updateSlideStatus();
    updateControlsStatus();
    updateNavVisibility();
    updateNavStatus();
  }


  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var heights = [], maxHeight;
    for (var i = index; i < index + items; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    maxHeight = Math.max.apply(null, heights);

    if (innerWrapper.style.height !== maxHeight) {
      if (TRANSITIONDURATION) { setDurations(speed); }
      innerWrapper.style.height = maxHeight + 'px';
    }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slideOffsetTops
  function getSlideOffsetTops () {
    slideOffsetTops = [0];
    var topFirst = slideItems[0].getBoundingClientRect().top, attr;
    for (var i = 1; i < slideCountNew; i++) {
      attr = slideItems[i].getBoundingClientRect().top;
      slideOffsetTops.push(attr - topFirst);
    }
  }

  // set snapInterval (for IE10)
  function setSnapInterval () {
    outerWrapper.style.msScrollSnapPointsX = 'snapInterval(0%, ' + (100 / items) + '%)';
  }

  // update slide
  function updateSlideStatus () {
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];
      // visible slides
      if (i >= index && i < index + items) {
        if (hasAttr(item, 'tabindex')) {
          setAttrs(item, {'aria-hidden': 'false'});
          removeAttrs(item, ['tabindex']);
          addClass(item, slideActiveClass);
        }
      // hidden slides
      } else {
        if (!hasAttr(item, 'tabindex')) {
          setAttrs(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
        }
        if (hasClass(item, slideActiveClass)) {
          removeClass(item, slideActiveClass);
        }
      }
    }
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked !== -1 ? navClicked : (index - indexAdjust)%slideCount;
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        setAttrs(navPrev, {
          'tabindex': '-1',
          'aria-selected': 'false'
        });
        setAttrs(navCurrent, {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        removeClass(navPrev, navActiveClass);
        addClass(navCurrent, navActiveClass);

        // if (navAnimationOut) {
        //   removeClass(navPrev, navAnimationIn);
        //   addClass(navPrev, navAnimationOut);
        // }
        // if (navAnimationIn) {
        //   removeClass(navCurrent, navAnimationOut);
        //   addClass(navCurrent, navAnimationIn);
        // }
      }
    }
  }

  function isButton (el) {
    return el.nodeName.toLowerCase() === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index === indexMin) ? true : false,
        disableNext = (!rewind && index === indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function setDurations (duration, target) {
    duration = !duration ? '' : duration / 1000 + 's';
    target = target || container;
    target.style[TRANSITIONDURATION] = duration;

    if (!carousel) {
      target.style[ANIMATIONDURATION] = duration;
    }
    if (!horizontal) {
      innerWrapper.style[TRANSITIONDURATION] = duration;
    }
  }

  function getContainerTransformValue () {
    var val;
    if (horizontal) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * index + 'px';
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        val = - index * 100 / denominator + '%';
      }
    } else {
      val = - slideOffsetTops[index] + 'px';
    }
    return val;
  }

  function doContainerTransform (val) {
    if (!val) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    for (var i = number, l = number + items; i < l; i++) {
      var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (TRANSITIONDURATION) { setDurations(speed, item); }
      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      removeClass(item, classOut);
      addClass(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function (duration, distance) {
        if (!distance) { distance = getContainerTransformValue(); }
        // constrain the distance when non-loop no-edgePadding fixedWidth reaches the right edge
        if (hasRightDeadZone && index === indexMax) {
          var containerRightEdge = TRANSFORM ? 
              - ((slideCountNew - items) / slideCountNew) * 100 : 
              - (slideCountNew / items - 1) * 100; 
          distance = Math.max(parseFloat(distance), containerRightEdge) + '%';
        }

        if (TRANSITIONDURATION || !duration) {
          doContainerTransform(distance);
          if (speed === 0) { onTransitionEnd(); }
        } else {
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, distance, speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        if (!TRANSITIONEND || !ANIMATIONEND || speed === 0) { setTimeout(onTransitionEnd, 0); }
      };
  })();

  function doTransform (duration, distance) {
    if (duration === undefined) { duration = speed; }
    if (TRANSITIONDURATION) { setDurations(duration); }
    transformCore(duration, distance);
  }

  function render () {
    if (updateIndexBeforeTransform) { updateIndex(); }
    if (index !== indexCached) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      running = true;
      doTransform();
    }

  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < items; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (TRANSITIONDURATION) { setDurations(0, item); }
          if (animateDelay && TRANSITIONDELAY) { 
            item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = '';
          }
          removeClass(item, animateOut);
          addClass(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            if (TRANSITIONDURATION) { setDurations(0); }
            doContainerTransform();
          }
        } 

        runAutoHeight();

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        navCurrentIndexCached = navCurrentIndex;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(null, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(null, 1);

    // go to exact slide
    } else if (!running) {
      var absIndex = index%slideCount, 
          indexGap = 0;
      if (!loop && checkOption('edgePadding')) { absIndex--; }
      if (absIndex < 0) { absIndex += slideCount; }

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = slideCount - items - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }
        if (!isNaN(targetIndex)) {
          var absTargetIndex = targetIndex%slideCount;
          if (absTargetIndex < 0) { absTargetIndex += slideCount; }
          if (!loop && edgePadding) { absTargetIndex += 1; }
          indexGap = absTargetIndex - absIndex;
        }
      }

      index += indexGap;

      // if index is changed, start rendering
      if (index%slideCount !== indexCached%slideCount) {
        render();
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (!running) {
      // var shouldRender;

      if (!dir) {
        e = e || win.event;
        var target = e.target || e.srcElement;

        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

        if (target === prevButton) {
          dir = -1; 
        } else if (target === nextButton) {
          dir = 1;
        }
      }

      if (dir === -1) {
        index -= slideBy;
      } else if (dir === 1) {
        // Go to the first if reach the end in rewind mode
        // Otherwise go to the next
        if (rewind && index === indexMax){
          goTo(0);
        } else {
          index += slideBy;
        }
      }

      render();
    }
  }

  // on nav click
  function onNavClick (e) {
    if (!running) {
      e = e || win.event;
      var target = e.target || e.srcElement,
          navIndex;

      // find the clicked nav item
      while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
      if (hasAttr(target, 'data-nav')) {
        navIndex = navClicked = [].indexOf.call(navItems, target);
        goTo(navIndex);
      }
    }
  }

  function updateAutoplayButton (action, txt) {
    setAttrs(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAction () {
    resetActionTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }

    animating = true;
  }

  function stopAction () {
    pauseActionTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }

    animating = false;
  }

  function pauseActionTimer () {
    animating = 'paused';
    clearInterval(autoplayTimer);
  }

  function resetActionTimer () {
    if (animating === true) { return; }
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);
  }

  function toggleAnimation () {
    if (animating) {
      stopAction();
    } else {
      startAction();
    }
  }

  function onVisibilityChange () {
    if (autoplayResetVisibilityState != tiny_slider_module_doc.hidden && animating !== false) {
      tiny_slider_module_doc.hidden ? pauseActionTimer() : resetActionTimer();
    }
    autoplayResetVisibilityState = tiny_slider_module_doc.hidden;
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = e || win.event;
    switch(e.keyCode) {
      case KEYS.LEFT:
        onControlsClick(null, -1);
        break;
      case KEYS.RIGHT:
        onControlsClick(null, 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = e || win.event;
    var code = e.keyCode;

    switch (code) {
      case KEYS.LEFT:
      case KEYS.UP:
      case KEYS.PAGEUP:
          if (!prevButton.disabled) {
            onControlsClick(null, -1);
          }
          break;
      case KEYS.RIGHT:
      case KEYS.DOWN:
      case KEYS.PAGEDOWN:
          if (!nextButton.disabled) {
            onControlsClick(null, 1);
          }
          break;
      case KEYS.HOME:
        goTo(0);
        break;
      case KEYS.END:
        goTo(slideCount - 1);
        break;
    }
  }

  // set focus
  function setFocus (focus) {
    focus.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    var curElement = tiny_slider_module_doc.activeElement;
    if (!hasAttr(curElement, 'data-nav')) { return; }

    e = e || win.event;
    var code = e.keyCode,
        navIndex = [].indexOf.call(navItems, curElement),
        len = visibleNavIndexes.length,
        current = visibleNavIndexes.indexOf(navIndex);

    if (options.navContainer) {
      len = slideCount;
      current = navIndex;
    }

    function getNavIndex (num) {
      return options.navContainer ? num : visibleNavIndexes[num];
    }

    switch(code) {
      case KEYS.LEFT:
      case KEYS.PAGEUP:
        if (current > 0) { setFocus(navItems[getNavIndex(current - 1)]); }
        break;

      case KEYS.UP:
      case KEYS.HOME:
        if (current > 0) { setFocus(navItems[getNavIndex(0)]); }
        break;

      case KEYS.RIGHT:
      case KEYS.PAGEDOWN:
        if (current < len - 1) { setFocus(navItems[getNavIndex(current + 1)]); }
        break;

      case KEYS.DOWN:
      case KEYS.END:
        if (current < len - 1) { setFocus(navItems[getNavIndex(len - 1)]); }
        break;

      // Can't use onNavClick here,
      // Because onNavClick require event.target as nav items
      case KEYS.ENTER:
      case KEYS.SPACE:
        navClicked = navIndex;
        goTo(navIndex);
        break;
    }
  }

  // IE10 scroll function
  function ie10Scroll () {
    doTransform(0, container.scrollLeft());
    indexCached = index;
  }

  function getTarget (e) {
    return e.target || e.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
  }

  function onTouchOrMouseStart (e) {
    if (!running) {
      e = e || win.event;
      var ev;

      if (isTouchEvent(e)) {
        ev = e.changedTouches[0];
        events.emit('touchStart', info(e));
      } else {
        ev = e;
        preventDefaultBehavior(e);
        events.emit('dragStart', info(e));
      }

      startX = parseInt(ev.clientX);
      startY = parseInt(ev.clientY);
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, '').replace(transformPostfix, ''));
    }
  }

  function onTouchOrMouseMove (e) {
    if (!running) {
      e = e || win.event;
      // make sure touch started or mouse draged
      if (startX !== null) {
        var ev;
        if (isTouchEvent(e)) {
          ev = e.changedTouches[0];
        } else {
          ev = e;
          preventDefaultBehavior(e);
        }

        disX = parseInt(ev.clientX) - startX;
        disY = parseInt(ev.clientY) - startY;

        if (getTouchDirection(toDegree(disY, disX), 15) === options.axis && disX) {
          if (isTouchEvent(e)) {
            events.emit('touchMove', info(e));
          } else {
            // "mousemove" event after "mousedown" indecate 
            // it is "drag", not "click"
            if (!isDragEvent) { isDragEvent = true; }
            events.emit('dragMove', info(e));
          }
          if (!touchedOrDraged) { touchedOrDraged = true; }

          var x = translateInit;
          if (horizontal) {
            if (fixedWidth) {
              x += disX;
              x += 'px';
            } else {
              var percentageX = TRANSFORM ? disX * items * 100 / (vpInner * slideCountNew): disX * 100 / vpInner;
              x += percentageX;
              x += '%';
            }
          } else {
            x += disY;
            x += 'px';
          }

          if (TRANSFORM) { setDurations(0); }
          container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
      }
    }
  }

  function onTouchOrMouseEnd (e) {
    if (!running) {
      e = e || win.event;

      if (touchedOrDraged) {
        touchedOrDraged = false;
        var ev;

        if (isTouchEvent(e)) {
          ev = e.changedTouches[0];
          events.emit('touchEnd', info(e));
        } else {
          ev = e;
          events.emit('dragEnd', info(e));
        }

        disX = parseInt(ev.clientX) - startX;
        disY = parseInt(ev.clientY) - startY;

        // reset startX, startY
        startX = startY = null;

        if (horizontal) {
          var indexMoved = - disX * items / vpInner;
          indexMoved = disX > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
          index += indexMoved;
        } else {
          var moved = - (translateInit + disY);
          if (moved <= 0) {
            index = indexMin;
          } else if (moved >= slideOffsetTops[slideOffsetTops.length - 1]) {
            index = indexMax;
          } else {
            var i = 0;
            do {
              i++;
              index = disY < 0 ? i + 1 : i;
            } while (i < slideCountNew && moved >= slideOffsetTops[i + 1]);
          }
        }
        
        render();

        // drag vs click
        if (isDragEvent) { 
          // reset isDragEvent
          isDragEvent = false;

          // prevent "click"
          var target = getTarget(e);
          addEvents(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            removeEvents(target, {'click': preventClick});
          }}); 
        } 
      }
    }
  }

  // === RESIZE FUNCTIONS === //
  // (slideOffsetTops, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    innerWrapper.style.height = slideOffsetTops[index + items] - slideOffsetTops[index] + 'px';
  }

  /*
   * get nav item indexes per items
   * add 1 more if the nav items cann't cover all slides
   * [0, 1, 2, 3, 4] / 3 => [0, 3]
   */
  function getVisibleNavIndex () {
    // reset visibleNavIndexes
    visibleNavIndexes = [];

    var temIndex = !loop && edgePadding ? (index - 1) : index;
    var absIndexMin = temIndex%slideCount%items;
    while (absIndexMin < slideCount) {
      if (!loop && absIndexMin + items > slideCount) { absIndexMin = slideCount - items; }
      visibleNavIndexes.push(absIndexMin);
      absIndexMin += items;
    }

    // nav count * items < slide count means
    // some slides can not be displayed only by nav clicking
    if (loop && visibleNavIndexes.length * items < slideCount ||
        !loop && visibleNavIndexes[0] > 0) {
      visibleNavIndexes.unshift(0);
    }
  }
  
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || options.navContainer) { return; }

    // update nav visibility when visibleNavIndexes doesn't contain current index
    if (visibleNavIndexes.indexOf(index%slideCount) < 0) {
      // update visible nav indexes
      getVisibleNavIndex();

      if (visibleNavIndexes !== visibleNavIndexesCached) {
        // add 'hidden' attribute to previous visible navs
        if (visibleNavIndexesCached.length > 0) {
          visibleNavIndexesCached.forEach(function (ind) {
            hideElement(navItems[ind]);
          });
        }

        // remove 'hidden' attribute from visible navs
        if (visibleNavIndexes.length > 0) {
          visibleNavIndexes.forEach(function (ind) {
            showElement(navItems[ind]);
          });
        }

        // cache visible nav indexes
        visibleNavIndexesCached = visibleNavIndexes;
      }
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      visibleNavIndexes: visibleNavIndexes,
      visibleNavIndexesCached: visibleNavIndexesCached,
      event: e || {},
    };
  }

  return {
    getInfo: info,
    events: events,
    goTo: goTo,

    destroy: function () {
      // sheet
      sheet.disabled = true;

      // cloned items
      if (loop) {
        for (var j = cloneCount; j--;) {
          slideItems[0].remove();
          slideItems[slideItems.length - 1].remove();
        }
      }

      // Slide Items
      for (var i = slideCount; i--;) {
        var slide = slideItems[i];
        if (slide.id.indexOf(slideId + '-item') >= 0) { slide.id = ''; }
        slide.classList.remove('tns-item');
      }
      removeAttrs(slideItems, ['style', 'aria-hidden', 'tabindex']);
      slideItems = slideId = slideCount = slideCountNew = cloneCount = null;

      // controls
      if (controls) {
        removeEvents(controlsContainer, controlsEvents);
        if (options.controlsContainer) {
          removeAttrs(controlsContainer, ['aria-label', 'tabindex']);
          removeAttrs(controlsContainer.children, ['aria-controls', 'aria-disabled', 'tabindex']);
        }
        controlsContainer = prevButton = nextButton = null;
      }

      // nav
      if (nav) {
        removeEvents(navContainer, navEvents);
        if (options.navContainer) {
          removeAttrs(navContainer, ['aria-label']);
          removeAttrs(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
        }
        navContainer = navItems = null;
      }

      // auto
      if (autoplay) {
        clearInterval(autoplayTimer);
        if (autoplayButton) {
          removeEvents(autoplayButton, {'click': toggleAnimation});
        }
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (options.autoplayButton) {
          removeAttrs(autoplayButton, ['data-action'])
        }
      }

      // container
      container.id = containerIdCached || '';
      container.className = container.className.replace(classContainer, '');
      container.style = '';
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        removeEvents(container, eve);
      }
      removeEvents(container, touchEvents);
      removeEvents(container, dragEvents);

      // outerWrapper
      containerParent.insertBefore(container, outerWrapper);
      outerWrapper.remove();
      outerWrapper = innerWrapper = container = null;

      // remove arrowKeys eventlistener
      removeEvents(tiny_slider_module_doc, docmentKeydownEvent);

      // remove win event listeners
      removeEvents(win, {'resize': onResize});
    }
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// keys
if (!Object.keys) {
    Object.keys = function (object) {
        var keys = [];
        for (var name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
                keys.push(name);
            }
        }
        return keys;
    };
}

/***/ }),
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWYwNjA1Yjg3MmUxN2U1N2I1YWMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jaGlsZE5vZGUucmVtb3ZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFyYmEuanMvZGlzdC9iYXJiYS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NoZWNrU3RvcmFnZVZhbHVlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0TG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9kb2NFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0RmFrZUJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZXNldEZha2VCb2R5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3N1YnBpeGVsTGF5b3V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvbWVkaWFxdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jcmVhdGVTdHlsZVNoZWV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ1NTUnVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvdG9EZWdyZWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRUb3VjaERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0NsYXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRBdHRyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaXNOb2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEF0dHJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oaWRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaW1hZ2VMb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy93aGljaFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9wYXNzaXZlT3B0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkRXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvanNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXIubW9kdWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3BhcnRpY2xlc2pzL2Rpc3QvcGFydGljbGVzLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQSxrREFBMEMsb0JBQW9CLFdBQVc7Ozs7Ozs7QUNqSnpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztB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Q0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFlBQVk7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUN2QyxHQUFHOzs7Ozs7QUFNSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7OztBQUc1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsNkJBQTZCO0FBQzlELDZCQUE2QixlQUFlO0FBQzVDLFdBQVc7QUFDWCxpQ0FBaUMsNkJBQTZCO0FBQzlELDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUFBRSxhQUFhLFVBQVUsNERBQTRELE1BQU0saUJBQWlCLG1DQUFtQyx3QkFBd0Isa0NBQWtDLHdNQUF3TSw4QkFBOEIsV0FBVyxtSUFBbUksOENBQThDLGtEQUFrRCw4REFBOEQsK0JBQStCLGdHQUFnRywyQ0FBMkMsOEJBQThCLEVBQUUsU0FBUyxrQkFBa0IsWUFBWSxhQUFhLG1EQUFvRSxpQkFBaUI7QUFBQSxvTUFBaUcsRyIsImZpbGUiOiJqcy92ZW5kb3IuZWYwNjA1Yjg3MmUxN2U1N2I1YWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cbiBcdFx0aWYoZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0XHRmb3IoaT0wOyBpIDwgZXhlY3V0ZU1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZXhlY3V0ZU1vZHVsZXNbaV0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQzOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImpzL1wiICsgY2h1bmtJZCArIFwiLlwiICsgXCJlZjA2MDViODcyZTE3ZTU3YjVhY1wiICsgXCIuY2h1bmsuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmMDYwNWI4NzJlMTdlNTdiNWFjIiwiLy8gQ2hpbGROb2RlLnJlbW92ZVxuKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYoIShcInJlbW92ZVwiIGluIEVsZW1lbnQucHJvdG90eXBlKSl7XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jaGlsZE5vZGUucmVtb3ZlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQmFyYmFcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQmFyYmFcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQmFyYmFcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZGlzdFwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly9Qcm9taXNlIHBvbHlmaWxsIGh0dHBzOi8vZ2l0aHViLmNvbS90YXlsb3JoYWtlcy9wcm9taXNlLXBvbHlmaWxsXG5cdFxuXHRpZiAodHlwZW9mIFByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcblx0IHdpbmRvdy5Qcm9taXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0fVxuXHRcblx0dmFyIEJhcmJhID0ge1xuXHQgIHZlcnNpb246ICcxLjAuMCcsXG5cdCAgQmFzZVRyYW5zaXRpb246IF9fd2VicGFja19yZXF1aXJlX18oNCksXG5cdCAgQmFzZVZpZXc6IF9fd2VicGFja19yZXF1aXJlX18oNiksXG5cdCAgQmFzZUNhY2hlOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLFxuXHQgIERpc3BhdGNoZXI6IF9fd2VicGFja19yZXF1aXJlX18oNyksXG5cdCAgSGlzdG9yeU1hbmFnZXI6IF9fd2VicGFja19yZXF1aXJlX18oOSksXG5cdCAgUGpheDogX193ZWJwYWNrX3JlcXVpcmVfXygxMCksXG5cdCAgUHJlZmV0Y2g6IF9fd2VicGFja19yZXF1aXJlX18oMTMpLFxuXHQgIFV0aWxzOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IEJhcmJhO1xuXG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oc2V0SW1tZWRpYXRlKSB7KGZ1bmN0aW9uIChyb290KSB7XG5cdFxuXHQgIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG5cdCAgLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG5cdCAgdmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblx0XG5cdCAgZnVuY3Rpb24gbm9vcCgpIHtcblx0ICB9XG5cdFxuXHQgIC8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuXHQgIHZhciBhc2FwID0gKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiYgc2V0SW1tZWRpYXRlKSB8fFxuXHQgICAgZnVuY3Rpb24gKGZuKSB7XG5cdCAgICAgIHNldFRpbWVvdXRGdW5jKGZuLCAwKTtcblx0ICAgIH07XG5cdFxuXHQgIHZhciBvblVuaGFuZGxlZFJlamVjdGlvbiA9IGZ1bmN0aW9uIG9uVW5oYW5kbGVkUmVqZWN0aW9uKGVycikge1xuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG5cdCAgICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgfVxuXHQgIH07XG5cdFxuXHQgIC8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuXHQgIGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG5cdCAgICB9O1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gUHJvbWlzZShmbikge1xuXHQgICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG5cdCAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuXHQgICAgdGhpcy5fc3RhdGUgPSAwO1xuXHQgICAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuXHQgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblx0XG5cdCAgICBkb1Jlc29sdmUoZm4sIHRoaXMpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG5cdCAgICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcblx0ICAgICAgc2VsZiA9IHNlbGYuX3ZhbHVlO1xuXHQgICAgfVxuXHQgICAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG5cdCAgICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgc2VsZi5faGFuZGxlZCA9IHRydWU7XG5cdCAgICBhc2FwKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG5cdCAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xuXHQgICAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHJldDtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICByZXQgPSBjYihzZWxmLl92YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcblx0ICAgIH0pO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcblx0ICAgICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuXHQgICAgICBpZiAobmV3VmFsdWUgJiYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuXHQgICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcblx0ICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdCAgICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG5cdCAgICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHQgICAgICAgICAgZmluYWxlKHNlbGYpO1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHNlbGYuX3N0YXRlID0gMTtcblx0ICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0ICAgICAgZmluYWxlKHNlbGYpO1xuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICByZWplY3Qoc2VsZiwgZSk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcblx0ICAgIHNlbGYuX3N0YXRlID0gMjtcblx0ICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdCAgICBmaW5hbGUoc2VsZik7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuXHQgICAgaWYgKHNlbGYuX3N0YXRlID09PSAyICYmIHNlbGYuX2RlZmVycmVkcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgYXNhcChmdW5jdGlvbigpIHtcblx0ICAgICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcblx0ICAgICAgICAgIG9uVW5oYW5kbGVkUmVqZWN0aW9uKHNlbGYuX3ZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaGFuZGxlKHNlbGYsIHNlbGYuX2RlZmVycmVkc1tpXSk7XG5cdCAgICB9XG5cdCAgICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xuXHQgICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcblx0ICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG5cdCAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcblx0ICAgKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cblx0ICAgKlxuXHQgICAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cblx0ICAgKi9cblx0ICBmdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcblx0ICAgIHZhciBkb25lID0gZmFsc2U7XG5cdCAgICB0cnkge1xuXHQgICAgICBmbihmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuXHQgICAgICAgIGRvbmUgPSB0cnVlO1xuXHQgICAgICAgIHJlc29sdmUoc2VsZiwgdmFsdWUpO1xuXHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcblx0ICAgICAgICBkb25lID0gdHJ1ZTtcblx0ICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcblx0ICAgICAgfSk7XG5cdCAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuXHQgICAgICBkb25lID0gdHJ1ZTtcblx0ICAgICAgcmVqZWN0KHNlbGYsIGV4KTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIFByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcblx0ICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHQgICAgdmFyIHByb20gPSBuZXcgKHRoaXMuY29uc3RydWN0b3IpKG5vb3ApO1xuXHRcblx0ICAgIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuXHQgICAgcmV0dXJuIHByb207XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG5cdCAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG5cdFxuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG5cdCAgICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblx0XG5cdCAgICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0ICAgICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbCwgZnVuY3Rpb24gKHZhbCkge1xuXHQgICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG5cdCAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcblx0ICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGFyZ3NbaV0gPSB2YWw7XG5cdCAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcblx0ICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICAgICAgcmVqZWN0KGV4KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHJlcyhpLCBhcmdzW2ldKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdCAgICAgIHJlc29sdmUodmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICAgIHJlamVjdCh2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICB9O1xuXHRcblx0ICBQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG5cdCAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgfTtcblx0XG5cdCAgLyoqXG5cdCAgICogU2V0IHRoZSBpbW1lZGlhdGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSBjYWxsYmFja3Ncblx0ICAgKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0byBleGVjdXRlXG5cdCAgICogQHByaXZhdGVcblx0ICAgKi9cblx0ICBQcm9taXNlLl9zZXRJbW1lZGlhdGVGbiA9IGZ1bmN0aW9uIF9zZXRJbW1lZGlhdGVGbihmbikge1xuXHQgICAgYXNhcCA9IGZuO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UuX3NldFVuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3NldFVuaGFuZGxlZFJlamVjdGlvbkZuKGZuKSB7XG5cdCAgICBvblVuaGFuZGxlZFJlamVjdGlvbiA9IGZuO1xuXHQgIH07XG5cdFxuXHQgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHQgICAgbW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXHQgIH0gZWxzZSBpZiAoIXJvb3QuUHJvbWlzZSkge1xuXHQgICAgcm9vdC5Qcm9taXNlID0gUHJvbWlzZTtcblx0ICB9XG5cdFxuXHR9KSh0aGlzKTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLnNldEltbWVkaWF0ZSkpXG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oc2V0SW1tZWRpYXRlLCBjbGVhckltbWVkaWF0ZSkge3ZhciBuZXh0VGljayA9IF9fd2VicGFja19yZXF1aXJlX18oMykubmV4dFRpY2s7XG5cdHZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblx0dmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXHR2YXIgaW1tZWRpYXRlSWRzID0ge307XG5cdHZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXHRcblx0Ly8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3Ncblx0XG5cdGV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuXHQgIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcblx0fTtcblx0ZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuXHQgIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xuXHR9O1xuXHRleHBvcnRzLmNsZWFyVGltZW91dCA9XG5cdGV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXHRcblx0ZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuXHQgIHRoaXMuX2lkID0gaWQ7XG5cdCAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG5cdH1cblx0VGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuXHRUaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHQgIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcblx0fTtcblx0XG5cdC8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuXHRleHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG5cdCAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXHQgIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG5cdH07XG5cdFxuXHRleHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuXHQgIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblx0ICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cdFxuXHQgIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuXHQgIGlmIChtc2VjcyA+PSAwKSB7XG5cdCAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG5cdCAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG5cdCAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG5cdCAgICB9LCBtc2Vjcyk7XG5cdCAgfVxuXHR9O1xuXHRcblx0Ly8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5cdGV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcblx0ICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcblx0ICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdFxuXHQgIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXHRcblx0ICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuXHQgICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcblx0ICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuXHQgICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuXHQgICAgICBpZiAoYXJncykge1xuXHQgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGZuLmNhbGwobnVsbCk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG5cdCAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gaWQ7XG5cdH07XG5cdFxuXHRleHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG5cdCAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG5cdH07XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLnNldEltbWVkaWF0ZSwgX193ZWJwYWNrX3JlcXVpcmVfXygyKS5jbGVhckltbWVkaWF0ZSkpXG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblx0XG5cdHZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblx0XG5cdC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuXHQvLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcblx0Ly8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXHRcblx0dmFyIGNhY2hlZFNldFRpbWVvdXQ7XG5cdHZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cdFxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIHRyeSB7XG5cdCAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICB9IGNhdGNoIChlKSB7XG5cdCAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgdHJ5IHtcblx0ICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblx0ICB9IGNhdGNoIChlKSB7XG5cdCAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG5cdCAgICB9XG5cdCAgfVxuXHR9ICgpKVxuXHR2YXIgcXVldWUgPSBbXTtcblx0dmFyIGRyYWluaW5nID0gZmFsc2U7XG5cdHZhciBjdXJyZW50UXVldWU7XG5cdHZhciBxdWV1ZUluZGV4ID0gLTE7XG5cdFxuXHRmdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG5cdCAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICB9XG5cdCAgICBpZiAocXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgZHJhaW5RdWV1ZSgpO1xuXHQgICAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuXHQgICAgaWYgKGRyYWluaW5nKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG5cdCAgICBkcmFpbmluZyA9IHRydWU7XG5cdFxuXHQgICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIHdoaWxlKGxlbikge1xuXHQgICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuXHQgICAgICAgIHF1ZXVlID0gW107XG5cdCAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuXHQgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIH1cblx0ICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHR9XG5cdFxuXHRwcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuXHQgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblx0ICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG5cdCAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcblx0ICAgIH1cblx0fTtcblx0XG5cdC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblx0ZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG5cdCAgICB0aGlzLmZ1biA9IGZ1bjtcblx0ICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcblx0fVxuXHRJdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcblx0fTtcblx0cHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcblx0cHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcblx0cHJvY2Vzcy5lbnYgPSB7fTtcblx0cHJvY2Vzcy5hcmd2ID0gW107XG5cdHByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXHRwcm9jZXNzLnZlcnNpb25zID0ge307XG5cdFxuXHRmdW5jdGlvbiBub29wKCkge31cblx0XG5cdHByb2Nlc3Mub24gPSBub29wO1xuXHRwcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5vbmNlID0gbm9vcDtcblx0cHJvY2Vzcy5vZmYgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xuXHRwcm9jZXNzLmVtaXQgPSBub29wO1xuXHRcblx0cHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0XG5cdHByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5cdHByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xuXHR9O1xuXHRwcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0LyoqXG5cdCAqIEJhc2VUcmFuc2l0aW9uIHRvIGV4dGVuZFxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgQmFzZVRyYW5zaXRpb24gPSB7XG5cdCAgLyoqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIG9sZENvbnRhaW5lcjogdW5kZWZpbmVkLFxuXHRcblx0ICAvKipcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG5cdCAgICovXG5cdCAgbmV3Q29udGFpbmVyOiB1bmRlZmluZWQsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEB0eXBlIHtQcm9taXNlfVxuXHQgICAqL1xuXHQgIG5ld0NvbnRhaW5lckxvYWRpbmc6IHVuZGVmaW5lZCxcblx0XG5cdCAgLyoqXG5cdCAgICogSGVscGVyIHRvIGV4dGVuZCB0aGUgb2JqZWN0XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAcGFyYW0gIHtPYmplY3R9IG5ld09iamVjdFxuXHQgICAqIEByZXR1cm4ge09iamVjdH0gbmV3SW5oZXJpdE9iamVjdFxuXHQgICAqL1xuXHQgIGV4dGVuZDogZnVuY3Rpb24ob2JqKXtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQodGhpcywgb2JqKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmcm9tIFBqYXggbW9kdWxlIHRvIGluaXRpYWxpemVcblx0ICAgKiB0aGUgdHJhbnNpdGlvbi5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IG9sZENvbnRhaW5lclxuXHQgICAqIEBwYXJhbSAge1Byb21pc2V9IG5ld0NvbnRhaW5lclxuXHQgICAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAgICovXG5cdCAgaW5pdDogZnVuY3Rpb24ob2xkQ29udGFpbmVyLCBuZXdDb250YWluZXIpIHtcblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgdGhpcy5vbGRDb250YWluZXIgPSBvbGRDb250YWluZXI7XG5cdCAgICB0aGlzLl9uZXdDb250YWluZXJQcm9taXNlID0gbmV3Q29udGFpbmVyO1xuXHRcblx0ICAgIHRoaXMuZGVmZXJyZWQgPSBVdGlscy5kZWZlcnJlZCgpO1xuXHQgICAgdGhpcy5uZXdDb250YWluZXJSZWFkeSA9IFV0aWxzLmRlZmVycmVkKCk7XG5cdCAgICB0aGlzLm5ld0NvbnRhaW5lckxvYWRpbmcgPSB0aGlzLm5ld0NvbnRhaW5lclJlYWR5LnByb21pc2U7XG5cdFxuXHQgICAgdGhpcy5zdGFydCgpO1xuXHRcblx0ICAgIHRoaXMuX25ld0NvbnRhaW5lclByb21pc2UudGhlbihmdW5jdGlvbihuZXdDb250YWluZXIpIHtcblx0ICAgICAgX3RoaXMubmV3Q29udGFpbmVyID0gbmV3Q29udGFpbmVyO1xuXHQgICAgICBfdGhpcy5uZXdDb250YWluZXJSZWFkeS5yZXNvbHZlKCk7XG5cdCAgICB9KTtcblx0XG5cdCAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgY2FsbGVkIGFzIHNvb24gdGhlIFRyYW5zaXRpb24gaXMgZmluaXNoZWRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqL1xuXHQgIGRvbmU6IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5vbGRDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm9sZENvbnRhaW5lcik7XG5cdCAgICB0aGlzLm5ld0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHQgICAgdGhpcy5kZWZlcnJlZC5yZXNvbHZlKCk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogQ29uc3RydWN0b3IgZm9yIHlvdXIgVHJhbnNpdGlvblxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQGFic3RyYWN0XG5cdCAgICovXG5cdCAgc3RhcnQ6IGZ1bmN0aW9uKCkge30sXG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IEJhc2VUcmFuc2l0aW9uO1xuXG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogSnVzdCBhbiBvYmplY3Qgd2l0aCBzb21lIGhlbHBmdWwgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuVXRpbHNcblx0ICovXG5cdHZhciBVdGlscyA9IHtcblx0ICAvKipcblx0ICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdXJsXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IGN1cnJlbnRVcmxcblx0ICAgKi9cblx0ICBnZXRDdXJyZW50VXJsOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICtcblx0ICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCArXG5cdCAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICtcblx0ICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdpdmVuIGFuIHVybCwgcmV0dXJuIGl0IHdpdGhvdXQgdGhlIGhhc2hcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IG5ld0NsZWFuVXJsXG5cdCAgICovXG5cdCAgY2xlYW5MaW5rOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHJldHVybiB1cmwucmVwbGFjZSgvIy4qLywgJycpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFRpbWUgaW4gbWlsbGlzZWNvbmQgYWZ0ZXIgdGhlIHhociByZXF1ZXN0IGdvZXMgaW4gdGltZW91dFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHR5cGUge051bWJlcn1cblx0ICAgKiBAZGVmYXVsdFxuXHQgICAqL1xuXHQgIHhoclRpbWVvdXQ6IDUwMDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIFN0YXJ0IGFuIFhNTEh0dHBSZXF1ZXN0KCkgYW5kIHJldHVybiBhIFByb21pc2Vcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG5cdCAgICogQHJldHVybiB7UHJvbWlzZX1cblx0ICAgKi9cblx0ICB4aHI6IGZ1bmN0aW9uKHVybCkge1xuXHQgICAgdmFyIGRlZmVycmVkID0gdGhpcy5kZWZlcnJlZCgpO1xuXHQgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcblx0ICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XG5cdCAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuXHQgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnJlc29sdmUocmVxLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCd4aHI6IEhUVFAgY29kZSBpcyBub3QgMjAwJykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICByZXEub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgIHJldHVybiBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCd4aHI6IFRpbWVvdXQgZXhjZWVkZWQnKSk7XG5cdCAgICB9O1xuXHRcblx0ICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuXHQgICAgcmVxLnRpbWVvdXQgPSB0aGlzLnhoclRpbWVvdXQ7XG5cdCAgICByZXEuc2V0UmVxdWVzdEhlYWRlcigneC1iYXJiYScsICd5ZXMnKTtcblx0ICAgIHJlcS5zZW5kKCk7XG5cdFxuXHQgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IG9iaiBhbmQgcHJvcHMgYW5kIHJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydHkgbWVyZ2VkXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcGFyYW0gIHtvYmplY3R9IG9ialxuXHQgICAqIEBwYXJhbSAge29iamVjdH0gcHJvcHNcblx0ICAgKiBAcmV0dXJuIHtvYmplY3R9XG5cdCAgICovXG5cdCAgZXh0ZW5kOiBmdW5jdGlvbihvYmosIHByb3BzKSB7XG5cdCAgICB2YXIgbmV3T2JqID0gT2JqZWN0LmNyZWF0ZShvYmopO1xuXHRcblx0ICAgIGZvcih2YXIgcHJvcCBpbiBwcm9wcykge1xuXHQgICAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHQgICAgICAgIG5ld09ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXR1cm4gYSBuZXcgXCJEZWZlcnJlZFwiIG9iamVjdFxuXHQgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9KYXZhU2NyaXB0X2NvZGVfbW9kdWxlcy9Qcm9taXNlLmpzbS9EZWZlcnJlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHJldHVybiB7RGVmZXJyZWR9XG5cdCAgICovXG5cdCAgZGVmZXJyZWQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIG5ldyBmdW5jdGlvbigpIHtcblx0ICAgICAgdGhpcy5yZXNvbHZlID0gbnVsbDtcblx0ICAgICAgdGhpcy5yZWplY3QgPSBudWxsO1xuXHRcblx0ICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcblx0ICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcblx0ICAgICAgfS5iaW5kKHRoaXMpKTtcblx0ICAgIH07XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIHRoZSBwb3J0IG51bWJlciBub3JtYWxpemVkLCBldmVudHVhbGx5IHlvdSBjYW4gcGFzcyBhIHN0cmluZyB0byBiZSBub3JtYWxpemVkLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBcblx0ICAgKiBAcmV0dXJuIHtJbnR9IHBvcnRcblx0ICAgKi9cblx0ICBnZXRQb3J0OiBmdW5jdGlvbihwKSB7XG5cdCAgICB2YXIgcG9ydCA9IHR5cGVvZiBwICE9PSAndW5kZWZpbmVkJyA/IHAgOiB3aW5kb3cubG9jYXRpb24ucG9ydDtcblx0ICAgIHZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcblx0XG5cdCAgICBpZiAocG9ydCAhPSAnJylcblx0ICAgICAgcmV0dXJuIHBhcnNlSW50KHBvcnQpO1xuXHRcblx0ICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHA6Jylcblx0ICAgICAgcmV0dXJuIDgwO1xuXHRcblx0ICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHBzOicpXG5cdCAgICAgIHJldHVybiA0NDM7XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBVdGlscztcblxuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIERpc3BhdGNoZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHR2YXIgVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0LyoqXG5cdCAqIEJhc2VWaWV3IHRvIGJlIGV4dGVuZGVkXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuQmFzZVZpZXdcblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBCYXNlVmlldyAgPSB7XG5cdCAgLyoqXG5cdCAgICogTmFtZXNwYWNlIG9mIHRoZSB2aWV3LlxuXHQgICAqIChuZWVkIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGF0YS1uYW1lc3BhY2Ugb2YgdGhlIGNvbnRhaW5lcilcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVmlld1xuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICovXG5cdCAgbmFtZXNwYWNlOiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBIZWxwZXIgdG8gZXh0ZW5kIHRoZSBvYmplY3Rcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVmlld1xuXHQgICAqIEBwYXJhbSAge09iamVjdH0gbmV3T2JqZWN0XG5cdCAgICogQHJldHVybiB7T2JqZWN0fSBuZXdJbmhlcml0T2JqZWN0XG5cdCAgICovXG5cdCAgZXh0ZW5kOiBmdW5jdGlvbihvYmope1xuXHQgICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh0aGlzLCBvYmopO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluaXQgdGhlIHZpZXcuXG5cdCAgICogUC5TLiBJcyBzdWdnZXN0ZWQgdG8gaW5pdCB0aGUgdmlldyBiZWZvcmUgc3RhcnRpbmcgQmFyYmEuUGpheC5zdGFydCgpLFxuXHQgICAqIGluIHRoaXMgd2F5IC5vbkVudGVyKCkgYW5kIC5vbkVudGVyQ29tcGxldGVkKCkgd2lsbCBiZSBmaXJlZCBmb3IgdGhlIGN1cnJlbnRcblx0ICAgKiBjb250YWluZXIgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQuXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKi9cblx0ICBpbml0OiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci5vbignaW5pdFN0YXRlQ2hhbmdlJyxcblx0ICAgICAgZnVuY3Rpb24obmV3U3RhdHVzLCBvbGRTdGF0dXMpIHtcblx0ICAgICAgICBpZiAob2xkU3RhdHVzICYmIG9sZFN0YXR1cy5uYW1lc3BhY2UgPT09IF90aGlzLm5hbWVzcGFjZSlcblx0ICAgICAgICAgIF90aGlzLm9uTGVhdmUoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0XG5cdCAgICBEaXNwYXRjaGVyLm9uKCduZXdQYWdlUmVhZHknLFxuXHQgICAgICBmdW5jdGlvbihuZXdTdGF0dXMsIG9sZFN0YXR1cywgY29udGFpbmVyKSB7XG5cdCAgICAgICAgX3RoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcblx0ICAgICAgICBpZiAobmV3U3RhdHVzLm5hbWVzcGFjZSA9PT0gX3RoaXMubmFtZXNwYWNlKVxuXHQgICAgICAgICAgX3RoaXMub25FbnRlcigpO1xuXHQgICAgICB9XG5cdCAgICApO1xuXHRcblx0ICAgIERpc3BhdGNoZXIub24oJ3RyYW5zaXRpb25Db21wbGV0ZWQnLFxuXHQgICAgICBmdW5jdGlvbihuZXdTdGF0dXMsIG9sZFN0YXR1cykge1xuXHQgICAgICAgIGlmIChuZXdTdGF0dXMubmFtZXNwYWNlID09PSBfdGhpcy5uYW1lc3BhY2UpXG5cdCAgICAgICAgICBfdGhpcy5vbkVudGVyQ29tcGxldGVkKCk7XG5cdFxuXHQgICAgICAgIGlmIChvbGRTdGF0dXMgJiYgb2xkU3RhdHVzLm5hbWVzcGFjZSA9PT0gX3RoaXMubmFtZXNwYWNlKVxuXHQgICAgICAgICAgX3RoaXMub25MZWF2ZUNvbXBsZXRlZCgpO1xuXHQgICAgICB9XG5cdCAgICApO1xuXHQgIH0sXG5cdFxuXHQgLyoqXG5cdCAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgd2hlbiB0aGUgY29udGFpbmVyXG5cdCAgKiBpcyByZWFkeSBhbmQgYXR0YWNoZWQgdG8gdGhlIERPTS5cblx0ICAqXG5cdCAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAqIEBhYnN0cmFjdFxuXHQgICovXG5cdCAgb25FbnRlcjogZnVuY3Rpb24oKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gdGhlIHRyYW5zaXRpb25cblx0ICAgKiB0byB0aGlzIGNvbnRhaW5lciBoYXMganVzdCBmaW5pc2hlZC5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVmlld1xuXHQgICAqIEBhYnN0cmFjdFxuXHQgICAqL1xuXHQgIG9uRW50ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uXG5cdCAgICogdG8gYSBuZXcgY29udGFpbmVyIGhhcyBqdXN0IHN0YXJ0ZWQuXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAYWJzdHJhY3Rcblx0ICAgKi9cblx0ICBvbkxlYXZlOiBmdW5jdGlvbigpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgd2hlbiB0aGUgY29udGFpbmVyXG5cdCAgICogaGFzIGp1c3QgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVmlld1xuXHQgICAqIEBhYnN0cmFjdFxuXHQgICAqL1xuXHQgIG9uTGVhdmVDb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge31cblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldztcblxuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIExpdHRsZSBEaXNwYXRjaGVyIGluc3BpcmVkIGJ5IE1pY3JvRXZlbnQuanNcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5EaXNwYXRjaGVyXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgRGlzcGF0Y2hlciA9IHtcblx0ICAvKipcblx0ICAgKiBPYmplY3QgdGhhdCBrZWVwcyBhbGwgdGhlIGV2ZW50c1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkRpc3BhdGNoZXJcblx0ICAgKiBAcmVhZE9ubHlcblx0ICAgKiBAdHlwZSB7T2JqZWN0fVxuXHQgICAqL1xuXHQgIGV2ZW50czoge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJpbmQgYSBjYWxsYmFjayB0byBhbiBldmVudFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkRpc3BhdGNoZXJcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jdGlvblxuXHQgICAqL1xuXHQgIG9uOiBmdW5jdGlvbihlLCBmKSB7XG5cdCAgICB0aGlzLmV2ZW50c1tlXSA9IHRoaXMuZXZlbnRzW2VdIHx8IFtdO1xuXHQgICAgdGhpcy5ldmVudHNbZV0ucHVzaChmKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBVbmJpbmQgZXZlbnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudE5hbWVcblx0ICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuY3Rpb25cblx0ICAgKi9cblx0ICBvZmY6IGZ1bmN0aW9uKGUsIGYpIHtcblx0ICAgIGlmKGUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKVxuXHQgICAgICByZXR1cm47XG5cdFxuXHQgICAgdGhpcy5ldmVudHNbZV0uc3BsaWNlKHRoaXMuZXZlbnRzW2VdLmluZGV4T2YoZiksIDEpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEZpcmUgdGhlIGV2ZW50IHJ1bm5pbmcgYWxsIHRoZSBldmVudCBhc3NvY2lhdGVkIHRvIGl0XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuRGlzcGF0Y2hlclxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnROYW1lXG5cdCAgICogQHBhcmFtICB7Li4uKn0gYXJnc1xuXHQgICAqL1xuXHQgIHRyaWdnZXI6IGZ1bmN0aW9uKGUpIHsvL2UsIC4uLmFyZ3Ncblx0ICAgIGlmIChlIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSlcblx0ICAgICAgcmV0dXJuO1xuXHRcblx0ICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tlXS5sZW5ndGg7IGkrKyl7XG5cdCAgICAgIHRoaXMuZXZlbnRzW2VdW2ldLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlcjtcblxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNlQ2FjaGUgaXQncyBhIHNpbXBsZSBzdGF0aWMgY2FjaGVcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5CYXNlQ2FjaGVcblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBCYXNlQ2FjaGUgPSB7XG5cdCAgLyoqXG5cdCAgICogVGhlIE9iamVjdCB0aGF0IGtlZXBzIGFsbCB0aGUga2V5IHZhbHVlIGluZm9ybWF0aW9uXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICogQHR5cGUge09iamVjdH1cblx0ICAgKi9cblx0ICBkYXRhOiB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogSGVscGVyIHRvIGV4dGVuZCB0aGlzIG9iamVjdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VDYWNoZVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7T2JqZWN0fSBuZXdPYmplY3Rcblx0ICAgKiBAcmV0dXJuIHtPYmplY3R9IG5ld0luaGVyaXRPYmplY3Rcblx0ICAgKi9cblx0ICBleHRlbmQ6IGZ1bmN0aW9uKG9iaikge1xuXHQgICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh0aGlzLCBvYmopO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFNldCBhIGtleSBhbmQgdmFsdWUgZGF0YSwgbWFpbmx5IEJhcmJhIGlzIGdvaW5nIHRvIHNhdmUgcHJvbWlzZXNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlQ2FjaGVcblx0ICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG5cdCAgICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgICAqL1xuXHQgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwpIHtcblx0ICAgIHRoaXMuZGF0YVtrZXldID0gdmFsO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHJpZXZlIHRoZSBkYXRhIHVzaW5nIHRoZSBrZXlcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlQ2FjaGVcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleVxuXHQgICAqIEByZXR1cm4geyp9XG5cdCAgICovXG5cdCAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcblx0ICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGbHVzaCB0aGUgY2FjaGVcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlQ2FjaGVcblx0ICAgKi9cblx0ICByZXNldDogZnVuY3Rpb24oKSB7XG5cdCAgICB0aGlzLmRhdGEgPSB7fTtcblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IEJhc2VDYWNoZTtcblxuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIEhpc3RvcnlNYW5hZ2VyIGhlbHBzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG5hdmlnYXRpb25cblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIEhpc3RvcnlNYW5hZ2VyID0ge1xuXHQgIC8qKlxuXHQgICAqIEtlZXAgdHJhY2sgb2YgdGhlIHN0YXR1cyBpbiBoaXN0b3JpYyBvcmRlclxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkhpc3RvcnlNYW5hZ2VyXG5cdCAgICogQHJlYWRPbmx5XG5cdCAgICogQHR5cGUge0FycmF5fVxuXHQgICAqL1xuXHQgIGhpc3Rvcnk6IFtdLFxuXHRcblx0ICAvKipcblx0ICAgKiBBZGQgYSBuZXcgc2V0IG9mIHVybCBhbmQgbmFtZXNwYWNlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuSGlzdG9yeU1hbmFnZXJcblx0ICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgYWRkOiBmdW5jdGlvbih1cmwsIG5hbWVzcGFjZSkge1xuXHQgICAgaWYgKCFuYW1lc3BhY2UpXG5cdCAgICAgIG5hbWVzcGFjZSA9IHVuZGVmaW5lZDtcblx0XG5cdCAgICB0aGlzLmhpc3RvcnkucHVzaCh7XG5cdCAgICAgIHVybDogdXJsLFxuXHQgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuXHQgICAgfSk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHN0YXR1c1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkhpc3RvcnlNYW5hZ2VyXG5cdCAgICogQHJldHVybiB7T2JqZWN0fVxuXHQgICAqL1xuXHQgIGN1cnJlbnRTdGF0dXM6IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcmV2aW91cyBzdGF0dXNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgICAqIEByZXR1cm4ge09iamVjdH1cblx0ICAgKi9cblx0ICBwcmV2U3RhdHVzOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5O1xuXHRcblx0ICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA8IDIpXG5cdCAgICAgIHJldHVybiBudWxsO1xuXHRcblx0ICAgIHJldHVybiBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMl07XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5TWFuYWdlcjtcblxuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBEaXNwYXRjaGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0dmFyIEhpZGVTaG93VHJhbnNpdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgQmFzZUNhY2hlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0XG5cdHZhciBIaXN0b3J5TWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBEb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdC8qKlxuXHQgKiBQamF4IGlzIGEgc3RhdGljIG9iamVjdCB3aXRoIG1haW4gZnVuY3Rpb25cblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5QamF4XG5cdCAqIEBib3Jyb3dzIERvbSBhcyBEb21cblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBQamF4ID0ge1xuXHQgIERvbTogRG9tLFxuXHQgIEhpc3Rvcnk6IEhpc3RvcnlNYW5hZ2VyLFxuXHQgIENhY2hlOiBCYXNlQ2FjaGUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluZGljYXRlIHdldGhlciBvciBub3QgdXNlIHRoZSBjYWNoZVxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICAgKiBAZGVmYXVsdFxuXHQgICAqL1xuXHQgIGNhY2hlRW5hYmxlZDogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogSW5kaWNhdGUgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGluIHByb2dyZXNzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEByZWFkT25seVxuXHQgICAqIEB0eXBlIHtCb29sZWFufVxuXHQgICAqL1xuXHQgIHRyYW5zaXRpb25Qcm9ncmVzczogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIENsYXNzIG5hbWUgdXNlZCB0byBpZ25vcmUgbGlua3Ncblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHR5cGUge1N0cmluZ31cblx0ICAgKiBAZGVmYXVsdFxuXHQgICAqL1xuXHQgIGlnbm9yZUNsYXNzTGluazogJ25vLWJhcmJhJyxcblx0XG5cdCAgLyoqXG5cdCAgICogRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIHN0YXJ0IFBqYXhcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICovXG5cdCAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5pbml0KCk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogSW5pdCB0aGUgZXZlbnRzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgaW5pdDogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgY29udGFpbmVyID0gdGhpcy5Eb20uZ2V0Q29udGFpbmVyKCk7XG5cdCAgICB2YXIgd3JhcHBlciA9IHRoaXMuRG9tLmdldFdyYXBwZXIoKTtcblx0XG5cdCAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuXHRcblx0ICAgIHRoaXMuSGlzdG9yeS5hZGQoXG5cdCAgICAgIHRoaXMuZ2V0Q3VycmVudFVybCgpLFxuXHQgICAgICB0aGlzLkRvbS5nZXROYW1lc3BhY2UoY29udGFpbmVyKVxuXHQgICAgKTtcblx0XG5cdCAgICAvL0ZpcmUgZm9yIHRoZSBjdXJyZW50IHZpZXcuXG5cdCAgICBEaXNwYXRjaGVyLnRyaWdnZXIoJ2luaXRTdGF0ZUNoYW5nZScsIHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCkpO1xuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCduZXdQYWdlUmVhZHknLFxuXHQgICAgICB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpLFxuXHQgICAgICB7fSxcblx0ICAgICAgY29udGFpbmVyLFxuXHQgICAgICB0aGlzLkRvbS5jdXJyZW50SFRNTFxuXHQgICAgKTtcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcigndHJhbnNpdGlvbkNvbXBsZXRlZCcsIHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCkpO1xuXHRcblx0ICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEF0dGFjaCB0aGUgZXZlbnRsaXN0ZW5lcnNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKi9cblx0ICBiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcblx0ICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcblx0ICAgICAgdGhpcy5vbkxpbmtDbGljay5iaW5kKHRoaXMpXG5cdCAgICApO1xuXHRcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsXG5cdCAgICAgIHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXG5cdCAgICApO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiB0aGUgY3VycmVudFVSTCBjbGVhbmVkXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEByZXR1cm4ge1N0cmluZ30gY3VycmVudFVybFxuXHQgICAqL1xuXHQgIGdldEN1cnJlbnRVcmw6IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIFV0aWxzLmNsZWFuTGluayhcblx0ICAgICAgVXRpbHMuZ2V0Q3VycmVudFVybCgpXG5cdCAgICApO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIENoYW5nZSB0aGUgVVJMIHdpdGggcHVzaHN0YXRlIGFuZCB0cmlnZ2VyIHRoZSBzdGF0ZSBjaGFuZ2Vcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IG5ld1VybFxuXHQgICAqL1xuXHQgIGdvVG86IGZ1bmN0aW9uKHVybCkge1xuXHQgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybCk7XG5cdCAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGb3JjZSB0aGUgYnJvd3NlciB0byBnbyB0byBhIGNlcnRhaW4gdXJsXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIGZvcmNlR29UbzogZnVuY3Rpb24odXJsKSB7XG5cdCAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogTG9hZCBhbiB1cmwsIHdpbGwgc3RhcnQgYW4geGhyIHJlcXVlc3Qgb3IgbG9hZCBmcm9tIHRoZSBjYWNoZVxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG5cdCAgICogQHJldHVybiB7UHJvbWlzZX1cblx0ICAgKi9cblx0ICBsb2FkOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHZhciBkZWZlcnJlZCA9IFV0aWxzLmRlZmVycmVkKCk7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgdmFyIHhocjtcblx0XG5cdCAgICB4aHIgPSB0aGlzLkNhY2hlLmdldCh1cmwpO1xuXHRcblx0ICAgIGlmICgheGhyKSB7XG5cdCAgICAgIHhociA9IFV0aWxzLnhocih1cmwpO1xuXHQgICAgICB0aGlzLkNhY2hlLnNldCh1cmwsIHhocik7XG5cdCAgICB9XG5cdFxuXHQgICAgeGhyLnRoZW4oXG5cdCAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcblx0ICAgICAgICB2YXIgY29udGFpbmVyID0gX3RoaXMuRG9tLnBhcnNlUmVzcG9uc2UoZGF0YSk7XG5cdFxuXHQgICAgICAgIF90aGlzLkRvbS5wdXRDb250YWluZXIoY29udGFpbmVyKTtcblx0XG5cdCAgICAgICAgaWYgKCFfdGhpcy5jYWNoZUVuYWJsZWQpXG5cdCAgICAgICAgICBfdGhpcy5DYWNoZS5yZXNldCgpO1xuXHRcblx0ICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbnRhaW5lcik7XG5cdCAgICAgIH0sXG5cdCAgICAgIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIC8vU29tZXRoaW5nIHdlbnQgd3JvbmcgKHRpbWVvdXQsIDQwNCwgNTA1Li4uKVxuXHQgICAgICAgIF90aGlzLmZvcmNlR29Ubyh1cmwpO1xuXHRcblx0ICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0XG5cdCAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHZXQgdGhlIC5ocmVmIHBhcmFtZXRlciBvdXQgb2YgYW4gZWxlbWVudFxuXHQgICAqIGFuZCBoYW5kbGUgc3BlY2lhbCBjYXNlcyAobGlrZSB4bGluazpocmVmKVxuXHQgICAqXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxuXHQgICAqIEByZXR1cm4ge1N0cmluZ30gaHJlZlxuXHQgICAqL1xuXHQgIGdldEhyZWY6IGZ1bmN0aW9uKGVsKSB7XG5cdCAgICBpZiAoIWVsKSB7XG5cdCAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSAmJiB0eXBlb2YgZWwuZ2V0QXR0cmlidXRlKCd4bGluazpocmVmJykgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnKTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAodHlwZW9mIGVsLmhyZWYgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHJldHVybiBlbC5ocmVmO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogQ2FsbGJhY2sgY2FsbGVkIGZyb20gY2xpY2sgZXZlbnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxuXHQgICAqL1xuXHQgIG9uTGlua0NsaWNrOiBmdW5jdGlvbihldnQpIHtcblx0ICAgIHZhciBlbCA9IGV2dC50YXJnZXQ7XG5cdFxuXHQgICAgLy9HbyB1cCBpbiB0aGUgbm9kZWxpc3QgdW50aWwgd2Vcblx0ICAgIC8vZmluZCBzb21ldGhpbmcgd2l0aCBhbiBocmVmXG5cdCAgICB3aGlsZSAoZWwgJiYgIXRoaXMuZ2V0SHJlZihlbCkpIHtcblx0ICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmICh0aGlzLnByZXZlbnRDaGVjayhldnQsIGVsKSkge1xuXHQgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCdsaW5rQ2xpY2tlZCcsIGVsLCBldnQpO1xuXHRcblx0ICAgICAgdmFyIGhyZWYgPSB0aGlzLmdldEhyZWYoZWwpO1xuXHQgICAgICB0aGlzLmdvVG8oaHJlZik7XG5cdCAgICB9XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRGV0ZXJtaW5lIGlmIHRoZSBsaW5rIHNob3VsZCBiZSBmb2xsb3dlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBldnRcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCAgICovXG5cdCAgcHJldmVudENoZWNrOiBmdW5jdGlvbihldnQsIGVsZW1lbnQpIHtcblx0ICAgIGlmICghd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgdmFyIGhyZWYgPSB0aGlzLmdldEhyZWYoZWxlbWVudCk7XG5cdFxuXHQgICAgLy9Vc2VyXG5cdCAgICBpZiAoIWVsZW1lbnQgfHwgIWhyZWYpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICAvL01pZGRsZSBjbGljaywgY21kIGNsaWNrLCBhbmQgY3RybCBjbGlja1xuXHQgICAgaWYgKGV2dC53aGljaCA+IDEgfHwgZXZ0Lm1ldGFLZXkgfHwgZXZ0LmN0cmxLZXkgfHwgZXZ0LnNoaWZ0S2V5IHx8IGV2dC5hbHRLZXkpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICAvL0lnbm9yZSB0YXJnZXQgd2l0aCBfYmxhbmsgdGFyZ2V0XG5cdCAgICBpZiAoZWxlbWVudC50YXJnZXQgJiYgZWxlbWVudC50YXJnZXQgPT09ICdfYmxhbmsnKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9DaGVjayBpZiBpdCdzIHRoZSBzYW1lIGRvbWFpblxuXHQgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gZWxlbWVudC5wcm90b2NvbCB8fCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT09IGVsZW1lbnQuaG9zdG5hbWUpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICAvL0NoZWNrIGlmIHRoZSBwb3J0IGlzIHRoZSBzYW1lXG5cdCAgICBpZiAoVXRpbHMuZ2V0UG9ydCgpICE9PSBVdGlscy5nZXRQb3J0KGVsZW1lbnQucG9ydCkpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICAvL0lnbm9yZSBjYXNlIHdoZW4gYSBoYXNoIGlzIGJlaW5nIHRhY2tlZCBvbiB0aGUgY3VycmVudCBVUkxcblx0ICAgIGlmIChocmVmLmluZGV4T2YoJyMnKSA+IC0xKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JZ25vcmUgY2FzZSB3aGVyZSB0aGVyZSBpcyBkb3dubG9hZCBhdHRyaWJ1dGVcblx0ICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSAmJiB0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgPT09ICdzdHJpbmcnKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JbiBjYXNlIHlvdSdyZSB0cnlpbmcgdG8gbG9hZCB0aGUgc2FtZSBwYWdlXG5cdCAgICBpZiAoVXRpbHMuY2xlYW5MaW5rKGhyZWYpID09IFV0aWxzLmNsZWFuTGluayhsb2NhdGlvbi5ocmVmKSlcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmlnbm9yZUNsYXNzTGluaykpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXR1cm4gYSB0cmFuc2l0aW9uIG9iamVjdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcmV0dXJuIHtCYXJiYS5UcmFuc2l0aW9ufSBUcmFuc2l0aW9uIG9iamVjdFxuXHQgICAqL1xuXHQgIGdldFRyYW5zaXRpb246IGZ1bmN0aW9uKCkge1xuXHQgICAgLy9Vc2VyIGN1c3RvbWl6YWJsZVxuXHQgICAgcmV0dXJuIEhpZGVTaG93VHJhbnNpdGlvbjtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBNZXRob2QgY2FsbGVkIGFmdGVyIGEgJ3BvcHN0YXRlJyBvciBmcm9tIC5nb1RvKClcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKi9cblx0ICBvblN0YXRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBuZXdVcmwgPSB0aGlzLmdldEN1cnJlbnRVcmwoKTtcblx0XG5cdCAgICBpZiAodGhpcy50cmFuc2l0aW9uUHJvZ3Jlc3MpXG5cdCAgICAgIHRoaXMuZm9yY2VHb1RvKG5ld1VybCk7XG5cdFxuXHQgICAgaWYgKHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCkudXJsID09PSBuZXdVcmwpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICB0aGlzLkhpc3RvcnkuYWRkKG5ld1VybCk7XG5cdFxuXHQgICAgdmFyIG5ld0NvbnRhaW5lciA9IHRoaXMubG9hZChuZXdVcmwpO1xuXHQgICAgdmFyIHRyYW5zaXRpb24gPSBPYmplY3QuY3JlYXRlKHRoaXMuZ2V0VHJhbnNpdGlvbigpKTtcblx0XG5cdCAgICB0aGlzLnRyYW5zaXRpb25Qcm9ncmVzcyA9IHRydWU7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCdpbml0U3RhdGVDaGFuZ2UnLFxuXHQgICAgICB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpLFxuXHQgICAgICB0aGlzLkhpc3RvcnkucHJldlN0YXR1cygpXG5cdCAgICApO1xuXHRcblx0ICAgIHZhciB0cmFuc2l0aW9uSW5zdGFuY2UgPSB0cmFuc2l0aW9uLmluaXQoXG5cdCAgICAgIHRoaXMuRG9tLmdldENvbnRhaW5lcigpLFxuXHQgICAgICBuZXdDb250YWluZXJcblx0ICAgICk7XG5cdFxuXHQgICAgbmV3Q29udGFpbmVyLnRoZW4oXG5cdCAgICAgIHRoaXMub25OZXdDb250YWluZXJMb2FkZWQuYmluZCh0aGlzKVxuXHQgICAgKTtcblx0XG5cdCAgICB0cmFuc2l0aW9uSW5zdGFuY2UudGhlbihcblx0ICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGdW5jdGlvbiBjYWxsZWQgYXMgc29vbiB0aGUgbmV3IGNvbnRhaW5lciBpcyByZWFkeVxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuXHQgICAqL1xuXHQgIG9uTmV3Q29udGFpbmVyTG9hZGVkOiBmdW5jdGlvbihjb250YWluZXIpIHtcblx0ICAgIHZhciBjdXJyZW50U3RhdHVzID0gdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKTtcblx0ICAgIGN1cnJlbnRTdGF0dXMubmFtZXNwYWNlID0gdGhpcy5Eb20uZ2V0TmFtZXNwYWNlKGNvbnRhaW5lcik7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCduZXdQYWdlUmVhZHknLFxuXHQgICAgICB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpLFxuXHQgICAgICB0aGlzLkhpc3RvcnkucHJldlN0YXR1cygpLFxuXHQgICAgICBjb250YWluZXIsXG5cdCAgICAgIHRoaXMuRG9tLmN1cnJlbnRIVE1MXG5cdCAgICApO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEZ1bmN0aW9uIGNhbGxlZCBhcyBzb29uIHRoZSB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMudHJhbnNpdGlvblByb2dyZXNzID0gZmFsc2U7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCd0cmFuc2l0aW9uQ29tcGxldGVkJyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAgdGhpcy5IaXN0b3J5LnByZXZTdGF0dXMoKVxuXHQgICAgKTtcblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IFBqYXg7XG5cblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgQmFzZVRyYW5zaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0LyoqXG5cdCAqIEJhc2ljIFRyYW5zaXRpb24gb2JqZWN0LCB3YWl0IGZvciB0aGUgbmV3IENvbnRhaW5lciB0byBiZSByZWFkeSxcblx0ICogc2Nyb2xsIHRvcCwgYW5kIGZpbmlzaCB0aGUgdHJhbnNpdGlvbiAocmVtb3ZpbmcgdGhlIG9sZCBjb250YWluZXIgYW5kIGRpc3BsYXlpbmcgdGhlIG5ldyBvbmUpXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuSGlkZVNob3dUcmFuc2l0aW9uXG5cdCAqIEBhdWdtZW50cyBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgKi9cblx0dmFyIEhpZGVTaG93VHJhbnNpdGlvbiA9IEJhc2VUcmFuc2l0aW9uLmV4dGVuZCh7XG5cdCAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5uZXdDb250YWluZXJMb2FkaW5nLnRoZW4odGhpcy5maW5pc2guYmluZCh0aGlzKSk7XG5cdCAgfSxcblx0XG5cdCAgZmluaXNoOiBmdW5jdGlvbigpIHtcblx0ICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcblx0ICAgIHRoaXMuZG9uZSgpO1xuXHQgIH1cblx0fSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IEhpZGVTaG93VHJhbnNpdGlvbjtcblxuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBPYmplY3QgdGhhdCBpcyBnb2luZyB0byBkZWFsIHdpdGggRE9NIHBhcnNpbmcvbWFuaXB1bGF0aW9uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuUGpheC5Eb21cblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBEb20gPSB7XG5cdCAgLyoqXG5cdCAgICogVGhlIG5hbWUgb2YgdGhlIGRhdGEgYXR0cmlidXRlIG9uIHRoZSBjb250YWluZXJcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBkYXRhTmFtZXNwYWNlOiAnbmFtZXNwYWNlJyxcblx0XG5cdCAgLyoqXG5cdCAgICogSWQgb2YgdGhlIG1haW4gd3JhcHBlclxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHR5cGUge1N0cmluZ31cblx0ICAgKiBAZGVmYXVsdFxuXHQgICAqL1xuXHQgIHdyYXBwZXJJZDogJ2JhcmJhLXdyYXBwZXInLFxuXHRcblx0ICAvKipcblx0ICAgKiBDbGFzcyBuYW1lIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGNvbnRhaW5lcnNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBjb250YWluZXJDbGFzczogJ2JhcmJhLWNvbnRhaW5lcicsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEZ1bGwgSFRNTCBTdHJpbmcgb2YgdGhlIGN1cnJlbnQgcGFnZS5cblx0ICAgKiBCeSBkZWZhdWx0IGlzIHRoZSBpbm5lckhUTUwgb2YgdGhlIGluaXRpYWwgbG9hZGVkIHBhZ2UuXG5cdCAgICpcblx0ICAgKiBFYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQsIHRoZSB2YWx1ZSBpcyB0aGUgcmVzcG9uc2Ugb2YgdGhlIHhociBjYWxsLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHR5cGUge1N0cmluZ31cblx0ICAgKi9cblx0ICBjdXJyZW50SFRNTDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCxcblx0XG5cdCAgLyoqXG5cdCAgICogUGFyc2UgdGhlIHJlc3BvbnNlVGV4dCBvYnRhaW5lZCBmcm9tIHRoZSB4aHIgY2FsbFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHJlc3BvbnNlVGV4dFxuXHQgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIHBhcnNlUmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlVGV4dCkge1xuXHQgICAgdGhpcy5jdXJyZW50SFRNTCA9IHJlc3BvbnNlVGV4dDtcblx0XG5cdCAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQgICAgd3JhcHBlci5pbm5lckhUTUwgPSByZXNwb25zZVRleHQ7XG5cdFxuXHQgICAgdmFyIHRpdGxlRWwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cdFxuXHQgICAgaWYgKHRpdGxlRWwpXG5cdCAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVFbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIod3JhcHBlcik7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSBtYWluIGJhcmJhIHdyYXBwZXIgYnkgdGhlIElEIGB3cmFwcGVySWRgXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqL1xuXHQgIGdldFdyYXBwZXI6IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLndyYXBwZXJJZCk7XG5cdFxuXHQgICAgaWYgKCF3cmFwcGVyKVxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhcmJhLmpzOiB3cmFwcGVyIG5vdCBmb3VuZCEnKTtcblx0XG5cdCAgICByZXR1cm4gd3JhcHBlcjtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHZXQgdGhlIGNvbnRhaW5lciBvbiB0aGUgY3VycmVudCBET00sXG5cdCAgICogb3IgZnJvbSBhbiBIVE1MRWxlbWVudCBwYXNzZWQgdmlhIGFyZ3VtZW50XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG5cdCAgICovXG5cdCAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdCAgICBpZiAoIWVsZW1lbnQpXG5cdCAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuXHRcblx0ICAgIGlmICghZWxlbWVudClcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXJiYS5qczogRE9NIG5vdCByZWFkeSEnKTtcblx0XG5cdCAgICB2YXIgY29udGFpbmVyID0gdGhpcy5wYXJzZUNvbnRhaW5lcihlbGVtZW50KTtcblx0XG5cdCAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5qcXVlcnkpXG5cdCAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lclswXTtcblx0XG5cdCAgICBpZiAoIWNvbnRhaW5lcilcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXJiYS5qczogbm8gY29udGFpbmVyIGZvdW5kJyk7XG5cdFxuXHQgICAgcmV0dXJuIGNvbnRhaW5lcjtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiB0aGUgY29udGFpbmVyXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICogQHJldHVybiB7U3RyaW5nfVxuXHQgICAqL1xuXHQgIGdldE5hbWVzcGFjZTogZnVuY3Rpb24oZWxlbWVudCkge1xuXHQgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5kYXRhc2V0KSB7XG5cdCAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXRbdGhpcy5kYXRhTmFtZXNwYWNlXTtcblx0ICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuXHQgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHRoaXMuZGF0YU5hbWVzcGFjZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIG51bGw7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUHV0IHRoZSBjb250YWluZXIgb24gdGhlIHBhZ2Vcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKi9cblx0ICBwdXRDb250YWluZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0ICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcblx0ICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG5cdCAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdldCBjb250YWluZXIgc2VsZWN0b3Jcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqL1xuXHQgIHBhcnNlQ29udGFpbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdCAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gRG9tO1xuXG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0dmFyIFBqYXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0XG5cdC8qKlxuXHQgKiBQcmVmZXRjaFxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLlByZWZldGNoXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgUHJlZmV0Y2ggPSB7XG5cdCAgLyoqXG5cdCAgICogQ2xhc3MgbmFtZSB1c2VkIHRvIGlnbm9yZSBwcmVmZXRjaCBvbiBsaW5rc1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlByZWZldGNoXG5cdCAgICogQHR5cGUge1N0cmluZ31cblx0ICAgKiBAZGVmYXVsdFxuXHQgICAqL1xuXHQgIGlnbm9yZUNsYXNzTGluazogJ25vLWJhcmJhLXByZWZldGNoJyxcblx0XG5cdCAgLyoqXG5cdCAgICogSW5pdCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gbW91c2VvdmVyIGFuZCB0b3VjaHN0YXJ0XG5cdCAgICogZm9yIHRoZSBwcmVmZXRjaFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlByZWZldGNoXG5cdCAgICovXG5cdCAgaW5pdDogZnVuY3Rpb24oKSB7XG5cdCAgICBpZiAoIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdFxuXHQgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTGlua0VudGVyLmJpbmQodGhpcykpO1xuXHQgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkxpbmtFbnRlci5iaW5kKHRoaXMpKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBDYWxsYmFjayBmb3IgdGhlIG1vdXNlaG92ZXIvdG91Y2hzdGFydFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlByZWZldGNoXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2dFxuXHQgICAqL1xuXHQgIG9uTGlua0VudGVyOiBmdW5jdGlvbihldnQpIHtcblx0ICAgIHZhciBlbCA9IGV2dC50YXJnZXQ7XG5cdFxuXHQgICAgd2hpbGUgKGVsICYmICFQamF4LmdldEhyZWYoZWwpKSB7XG5cdCAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAoIWVsIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmlnbm9yZUNsYXNzTGluaykpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHRcblx0ICAgIHZhciB1cmwgPSBQamF4LmdldEhyZWYoZWwpO1xuXHRcblx0ICAgIC8vQ2hlY2sgaWYgdGhlIGxpbmsgaXMgZWxlZ2libGUgZm9yIFBqYXhcblx0ICAgIGlmIChQamF4LnByZXZlbnRDaGVjayhldnQsIGVsKSAmJiAhUGpheC5DYWNoZS5nZXQodXJsKSkge1xuXHQgICAgICB2YXIgeGhyID0gVXRpbHMueGhyKHVybCk7XG5cdCAgICAgIFBqYXguQ2FjaGUuc2V0KHVybCwgeGhyKTtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IFByZWZldGNoO1xuXG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhcmJhLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYXJiYS5qcy9kaXN0L2JhcmJhLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydCBmdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciBvYmosIG5hbWUsIGNvcHksXG4gICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICBpID0gMSxcbiAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgob2JqID0gYXJndW1lbnRzW2ldKSAhPT0gbnVsbCkge1xuICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICBjb3B5ID0gb2JqW25hbWVdO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IGNvcHkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2V4dGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiBjaGVja1N0b3JhZ2VWYWx1ZSAodmFsdWUpIHtcbiAgcmV0dXJuIFsndHJ1ZScsICdmYWxzZSddLmluZGV4T2YodmFsdWUpID49IDAgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jaGVja1N0b3JhZ2VWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSwgYWNjZXNzKSB7XG4gIGlmIChhY2Nlc3MpIHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7IH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRMb2NhbFN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2xpZGVJZCgpIHtcbiAgdmFyIGlkID0gd2luZG93LnRuc0lkO1xuICB3aW5kb3cudG5zSWQgPSAhaWQgPyAxIDogaWQgKyAxO1xuICBcbiAgcmV0dXJuICd0bnMnICsgd2luZG93LnRuc0lkO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRTbGlkZUlkLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZG9jLmJvZHk7XG5cbiAgaWYgKCFib2R5KSB7XG4gICAgYm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgYm9keS5mYWtlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBib2R5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9kb2NFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGYWtlQm9keSAoYm9keSkge1xuICB2YXIgZG9jT3ZlcmZsb3cgPSAnJztcbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAvL2F2b2lkIGNyYXNoaW5nIElFOCwgaWYgYmFja2dyb3VuZCBpbWFnZSBpcyB1c2VkXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gIH1cblxuICByZXR1cm4gZG9jT3ZlcmZsb3c7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEZha2VCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0ICcuL2NoaWxkTm9kZS5yZW1vdmUnO1xuaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZha2VCb2R5IChib2R5LCBkb2NPdmVyZmxvdykge1xuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5yZW1vdmUoKTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZXNldEZha2VCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8gZ2V0IGNzcy1jYWxjIFxuLy8gQHJldHVybiAtIGZhbHNlIHwgY2FsYyB8IC13ZWJraXQtY2FsYyB8IC1tb3otY2FsY1xuLy8gQHVzYWdlIC0gdmFyIGNhbGMgPSBnZXRDYWxjKCk7IFxuaW1wb3J0ICcuL2NoaWxkTm9kZS5yZW1vdmUnO1xuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keSc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHknO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsIFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksIFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB0cnkge1xuICAgIHZhciB2YWxzID0gWydjYWxjKDEwcHgpJywgJy1tb3otY2FsYygxMHB4KScsICctd2Via2l0LWNhbGMoMTBweCknXSwgdmFsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB2YWwgPSB2YWxzW2ldO1xuICAgICAgZGl2LnN0eWxlLndpZHRoID0gdmFsO1xuICAgICAgaWYgKGRpdi5vZmZzZXRXaWR0aCA9PT0gMTApIHsgXG4gICAgICAgIHJlc3VsdCA9IHZhbC5yZXBsYWNlKCcoMTBweCknLCAnJyk7IFxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIFxuICBib2R5LmZha2UgPyByZXNldEZha2VCb2R5KGJvZHksIGRvY092ZXJmbG93KSA6IGRpdi5yZW1vdmUoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jYWxjLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8gZ2V0IHN1YnBpeGVsIHN1cHBvcnQgdmFsdWVcbi8vIEByZXR1cm4gLSBib29sZWFuXG5pbXBvcnQgJy4vY2hpbGROb2RlLnJlbW92ZSc7XG5pbXBvcnQgeyBnZXRCb2R5IH0gZnJvbSAnLi9nZXRCb2R5JztcbmltcG9ydCB7IHNldEZha2VCb2R5IH0gZnJvbSAnLi9zZXRGYWtlQm9keSc7XG5pbXBvcnQgeyByZXNldEZha2VCb2R5IH0gZnJvbSAnLi9yZXNldEZha2VCb2R5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnBpeGVsTGF5b3V0KCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZ2V0Qm9keSgpLFxuICAgICAgZG9jT3ZlcmZsb3cgPSBzZXRGYWtlQm9keShib2R5KSxcbiAgICAgIHBhcmVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGNoaWxkMSA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGNoaWxkMixcbiAgICAgIHN1cHBvcnRlZDtcblxuICBwYXJlbnQuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMTBweCc7XG4gIGNoaWxkMS5zdHlsZS5jc3NUZXh0ID0gJ2Zsb2F0OiBsZWZ0OyB3aWR0aDogNS41cHg7IGhlaWdodDogMTBweDsnO1xuICBjaGlsZDIgPSBjaGlsZDEuY2xvbmVOb2RlKHRydWUpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZDEpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChwYXJlbnQpO1xuXG4gIHN1cHBvcnRlZCA9IGNoaWxkMS5vZmZzZXRUb3AgIT09IGNoaWxkMi5vZmZzZXRUb3A7XG5cbiAgYm9keS5mYWtlID8gcmVzZXRGYWtlQm9keShib2R5LCBkb2NPdmVyZmxvdykgOiBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHN1cHBvcnRlZDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc3VicGl4ZWxMYXlvdXQuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgJy4vY2hpbGROb2RlLnJlbW92ZSc7XG5pbXBvcnQgeyBnZXRCb2R5IH0gZnJvbSAnLi9nZXRCb2R5JztcbmltcG9ydCB7IHNldEZha2VCb2R5IH0gZnJvbSAnLi9zZXRGYWtlQm9keSc7XG5pbXBvcnQgeyByZXNldEZha2VCb2R5IH0gZnJvbSAnLi9yZXNldEZha2VCb2R5JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhcXVlcnlTdXBwb3J0ICgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgICAgcnVsZSA9ICdAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjFweCl7LnRucy1tcS10ZXN0e3Bvc2l0aW9uOmFic29sdXRlfX0nLFxuICAgICAgcG9zaXRpb247XG5cbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIGRpdi5jbGFzc05hbWUgPSAndG5zLW1xLXRlc3QnO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gIH1cblxuICBwb3NpdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KS5wb3NpdGlvbiA6IGRpdi5jdXJyZW50U3R5bGVbJ3Bvc2l0aW9uJ107XG5cbiAgYm9keS5mYWtlID8gcmVzZXRGYWtlQm9keShib2R5LCBkb2NPdmVyZmxvdykgOiBkaXYucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09PSBcImFic29sdXRlXCI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL21lZGlhcXVlcnlTdXBwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8gY3JlYXRlIGFuZCBhcHBlbmQgc3R5bGUgc2hlZXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0IChtZWRpYSkge1xuICAvLyBDcmVhdGUgdGhlIDxzdHlsZT4gdGFnXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuXG4gIC8vIEFkZCBhIG1lZGlhIChhbmQvb3IgbWVkaWEgcXVlcnkpIGhlcmUgaWYgeW91J2QgbGlrZSFcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCJzY3JlZW5cIilcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEwMjRweClcIilcbiAgaWYgKG1lZGlhKSB7IHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTsgfVxuXG4gIC8vIFdlYktpdCBoYWNrIDooXG4gIC8vIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcblxuICAvLyBBZGQgdGhlIDxzdHlsZT4gZWxlbWVudCB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIHJldHVybiBzdHlsZS5zaGVldCA/IHN0eWxlLnNoZWV0IDogc3R5bGUuc3R5bGVTaGVldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NyZWF0ZVN0eWxlU2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvLyBjcm9zcyBicm93c2VycyBhZGRSdWxlIG1ldGhvZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU1J1bGUoc2hlZXQsIHNlbGVjdG9yLCBydWxlcywgaW5kZXgpIHtcbiAgJ2luc2VydFJ1bGUnIGluIHNoZWV0ID9cbiAgICBzaGVldC5pbnNlcnRSdWxlKHNlbGVjdG9yICsgJ3snICsgcnVsZXMgKyAnfScsIGluZGV4KSA6XG4gICAgc2hlZXQuYWRkUnVsZShzZWxlY3RvciwgcnVsZXMsIGluZGV4KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ1NTUnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkge1xuICB2YXIgcnVsZSA9ICgnaW5zZXJ0UnVsZScgaW4gc2hlZXQpID8gc2hlZXQuY3NzUnVsZXMgOiBzaGVldC5ydWxlcztcbiAgcmV0dXJuIHJ1bGUubGVuZ3RoO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRDc3NSdWxlc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZSAoeSwgeCkge1xuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KSAqICgxODAgLyBNYXRoLlBJKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvdG9EZWdyZWUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hEaXJlY3Rpb24oYW5nbGUsIHJhbmdlKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBmYWxzZSxcbiAgICAgIGdhcCA9IE1hdGguYWJzKDkwIC0gTWF0aC5hYnMoYW5nbGUpKTtcbiAgICAgIFxuICBpZiAoZ2FwID49IDkwIC0gcmFuZ2UpIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSBpZiAoZ2FwIDw9IHJhbmdlKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBzdHIpIHtcbiAgcmV0dXJuIGVsLmNsYXNzTmFtZS5pbmRleE9mKHN0cikgPj0gMDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBoYXNDbGFzcyB9IGZyb20gJy4vaGFzQ2xhc3MnO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBzdHIpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbCwgIHN0cikpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgc3RyO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZENsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgaGFzQ2xhc3MgfSBmcm9tICcuL2hhc0NsYXNzJztcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgc3RyKSB7XG4gIGlmIChoYXNDbGFzcyhlbCwgc3RyKSkge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHN0ciwgJycpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0F0dHIoZWwsIGF0dHIpIHtcbiAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShhdHRyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQXR0ci5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGVsLCBhdHRyKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEF0dHIuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgZnVuY3Rpb24gaXNOb2RlTGlzdChlbCkge1xuICAvLyBPbmx5IE5vZGVMaXN0IGhhcyB0aGUgXCJpdGVtKClcIiBmdW5jdGlvblxuICByZXR1cm4gdHlwZW9mIGVsLml0ZW0gIT09IFwidW5kZWZpbmVkXCI7IFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc05vZGVMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgaXNOb2RlTGlzdCB9IGZyb20gXCIuL2lzTm9kZUxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJzKGVscywgYXR0cnMpIHtcbiAgZWxzID0gKGlzTm9kZUxpc3QoZWxzKSB8fCBlbHMgaW5zdGFuY2VvZiBBcnJheSkgPyBlbHMgOiBbZWxzXTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhdHRycykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7IHJldHVybjsgfVxuXG4gIGZvciAodmFyIGkgPSBlbHMubGVuZ3RoOyBpLS07KSB7XG4gICAgZm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgIGVsc1tpXS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0QXR0cnMuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBpc05vZGVMaXN0IH0gZnJvbSBcIi4vaXNOb2RlTGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0cnMoZWxzLCBhdHRycykge1xuICBlbHMgPSAoaXNOb2RlTGlzdChlbHMpIHx8IGVscyBpbnN0YW5jZW9mIEFycmF5KSA/IGVscyA6IFtlbHNdO1xuICBhdHRycyA9IChhdHRycyBpbnN0YW5jZW9mIEFycmF5KSA/IGF0dHJzIDogW2F0dHJzXTtcblxuICB2YXIgYXR0ckxlbmd0aCA9IGF0dHJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IGVscy5sZW5ndGg7IGktLTspIHtcbiAgICBmb3IgKHZhciBqID0gYXR0ckxlbmd0aDsgai0tOykge1xuICAgICAgZWxzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyc1tqXSk7XG4gICAgfVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUF0dHJzLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgaGFzQXR0ciB9IGZyb20gJy4vaGFzQXR0cic7XG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4vc2V0QXR0cnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWwpIHtcbiAgaWYgKCFoYXNBdHRyKGVsLCAnaGlkZGVuJykpIHtcbiAgICBzZXRBdHRycyhlbCwgeydoaWRkZW4nOiAnJ30pO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hpZGVFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgaGFzQXR0ciB9IGZyb20gJy4vaGFzQXR0cic7XG5pbXBvcnQgeyByZW1vdmVBdHRycyB9IGZyb20gJy4vcmVtb3ZlQXR0cnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWwpIHtcbiAgaWYgKGhhc0F0dHIoZWwsICdoaWRkZW4nKSkge1xuICAgIHJlbW92ZUF0dHJzKGVsLCAnaGlkZGVuJyk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2hvd0VsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvLyBjaGVjayBpZiBhbiBpbWFnZSBpcyBsb2FkZWRcbi8vIDEuIFNlZSBpZiBcIm5hdHVyYWxXaWR0aFwiIGFuZCBcIm5hdHVyYWxIZWlnaHRcIiBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUuXG4vLyAyLiBTZWUgaWYgXCJjb21wbGV0ZVwiIHByb3BlcnR5IGlzIGF2YWlsYWJsZS5cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlTG9hZGVkKGltZykge1xuICBpZiAodHlwZW9mIGltZy5jb21wbGV0ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGltZy5jb21wbGV0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW1nLm5hdHVyYWxXaWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gaW1nLm5hdHVyYWxXaWR0aCAhPT0gMDtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pbWFnZUxvYWRlZC5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBmdW5jdGlvbiB3aGljaFByb3BlcnR5KHByb3BzKXtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKSxcbiAgICAgIGxlbiA9IHByb3BzLmxlbmd0aDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKXtcbiAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgIGlmKCBlbC5zdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkICl7IHJldHVybiBwcm9wOyB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7IC8vIGV4cGxpY2l0IGZvciBpZTktXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvd2hpY2hQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8vIGdldCB0cmFuc2l0aW9uZW5kLCBhbmltYXRpb25lbmQgYmFzZWQgb24gdHJhbnNpdGlvbkR1cmF0aW9uXG4vLyBAcHJvcGluOiBzdHJpbmdcbi8vIEBwcm9wT3V0OiBzdHJpbmcsIGZpcnN0LWxldHRlciB1cHBlcmNhc2Vcbi8vIFVzYWdlOiBnZXRFbmRQcm9wZXJ0eSgnV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uJywgJ1RyYW5zaXRpb24nKSA9PiB3ZWJraXRUcmFuc2l0aW9uRW5kXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kUHJvcGVydHkocHJvcEluLCBwcm9wT3V0KSB7XG4gIHZhciBlbmRQcm9wID0gZmFsc2U7XG4gIGlmICgvXldlYmtpdC8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICd3ZWJraXQnICsgcHJvcE91dCArICdFbmQnO1xuICB9IGVsc2UgaWYgKC9eTy8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICdvJyArIHByb3BPdXQgKyAnRW5kJztcbiAgfSBlbHNlIGlmIChwcm9wSW4pIHtcbiAgICBlbmRQcm9wID0gcHJvcE91dC50b0xvd2VyQ2FzZSgpICsgJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIGVuZFByb3A7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEVuZFByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xudHJ5IHtcbiAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbn0gY2F0Y2ggKGUpIHt9XG5leHBvcnQgdmFyIHBhc3NpdmVPcHRpb24gPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9wYXNzaXZlT3B0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgcGFzc2l2ZU9wdGlvbiB9IGZyb20gJy4vcGFzc2l2ZU9wdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHMoZWwsIG9iaikge1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHZhciBvcHRpb24gPSAocHJvcCA9PT0gJ3RvdWNoc3RhcnQnIHx8IHByb3AgPT09ICd0b3VjaG1vdmUnKSA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHByb3AsIG9ialtwcm9wXSwgb3B0aW9uKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hZGRFdmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBwYXNzaXZlT3B0aW9uIH0gZnJvbSAnLi9wYXNzaXZlT3B0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50cyhlbCwgb2JqKSB7XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgdmFyIG9wdGlvbiA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXS5pbmRleE9mKHByb3ApID49IDAgPyBwYXNzaXZlT3B0aW9uIDogZmFsc2U7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihwcm9wLCBvYmpbcHJvcF0sIG9wdGlvbik7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGZ1bmN0aW9uIEV2ZW50cygpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3BpY3M6IHt9LFxuICAgIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXSA9IHRoaXMudG9waWNzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudE5hbWUsIGZuKSB7XG4gICAgICBpZiAodGhpcy50b3BpY3NbZXZlbnROYW1lXSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG9waWNzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BpY3NbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy50b3BpY3NbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGZ1bmN0aW9uIGpzVHJhbnNmb3JtKGVsZW1lbnQsIGF0dHIsIHByZWZpeCwgcG9zdGZpeCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgdGljayA9IE1hdGgubWluKGR1cmF0aW9uLCAxMCksXG4gICAgICB1bml0ID0gKHRvLmluZGV4T2YoJyUnKSA+PSAwKSA/ICclJyA6ICdweCcsXG4gICAgICB0byA9IHRvLnJlcGxhY2UodW5pdCwgJycpLFxuICAgICAgZnJvbSA9IE51bWJlcihlbGVtZW50LnN0eWxlW2F0dHJdLnJlcGxhY2UocHJlZml4LCAnJykucmVwbGFjZShwb3N0Zml4LCAnJykucmVwbGFjZSh1bml0LCAnJykpLFxuICAgICAgcG9zaXRpb25UaWNrID0gKHRvIC0gZnJvbSkgLyBkdXJhdGlvbiAqIHRpY2ssXG4gICAgICBydW5uaW5nO1xuXG4gIHNldFRpbWVvdXQobW92ZUVsZW1lbnQsIHRpY2spO1xuICBmdW5jdGlvbiBtb3ZlRWxlbWVudCgpIHtcbiAgICBkdXJhdGlvbiAtPSB0aWNrO1xuICAgIGZyb20gKz0gcG9zaXRpb25UaWNrO1xuICAgIGVsZW1lbnQuc3R5bGVbYXR0cl0gPSBwcmVmaXggKyBmcm9tICsgdW5pdCArIHBvc3RmaXg7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkgeyBcbiAgICAgIHNldFRpbWVvdXQobW92ZUVsZW1lbnQsIHRpY2spOyBcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvanNUcmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvLyBGb3JtYXQ6IEVTIE1PRFVMRVxuLy8gVmVyc2lvbjogMi4zLjBcblxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuaW1wb3J0ICcuL2hlbHBlcnMva2V5cyc7XG5pbXBvcnQgJy4vaGVscGVycy9jaGlsZE5vZGUucmVtb3ZlJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vaGVscGVycy9leHRlbmQnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlVmFsdWUgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tTdG9yYWdlVmFsdWUnO1xuaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9oZWxwZXJzL3NldExvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBnZXRTbGlkZUlkIH0gZnJvbSAnLi9oZWxwZXJzL2dldFNsaWRlSWQnO1xuaW1wb3J0IHsgY2FsYyB9IGZyb20gJy4vaGVscGVycy9jYWxjJztcbmltcG9ydCB7IHN1YnBpeGVsTGF5b3V0IH0gZnJvbSAnLi9oZWxwZXJzL3N1YnBpeGVsTGF5b3V0JztcbmltcG9ydCB7IG1lZGlhcXVlcnlTdXBwb3J0IH0gZnJvbSAnLi9oZWxwZXJzL21lZGlhcXVlcnlTdXBwb3J0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3R5bGVTaGVldCc7XG5pbXBvcnQgeyBhZGRDU1NSdWxlIH0gZnJvbSAnLi9oZWxwZXJzL2FkZENTU1J1bGUnO1xuaW1wb3J0IHsgZ2V0Q3NzUnVsZXNMZW5ndGggfSBmcm9tICcuL2hlbHBlcnMvZ2V0Q3NzUnVsZXNMZW5ndGgnO1xuaW1wb3J0IHsgdG9EZWdyZWUgfSBmcm9tICcuL2hlbHBlcnMvdG9EZWdyZWUnO1xuaW1wb3J0IHsgZ2V0VG91Y2hEaXJlY3Rpb24gfSBmcm9tICcuL2hlbHBlcnMvZ2V0VG91Y2hEaXJlY3Rpb24nO1xuaW1wb3J0IHsgaGFzQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvaGFzQ2xhc3MnO1xuaW1wb3J0IHsgYWRkQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvYWRkQ2xhc3MnO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHsgaGFzQXR0ciB9IGZyb20gJy4vaGVscGVycy9oYXNBdHRyJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL2hlbHBlcnMvZ2V0QXR0cic7XG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4vaGVscGVycy9zZXRBdHRycyc7XG5pbXBvcnQgeyByZW1vdmVBdHRycyB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVBdHRycyc7XG5pbXBvcnQgeyBoaWRlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9oaWRlRWxlbWVudCc7XG5pbXBvcnQgeyBzaG93RWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9zaG93RWxlbWVudCc7XG5pbXBvcnQgeyBpbWFnZUxvYWRlZCB9IGZyb20gJy4vaGVscGVycy9pbWFnZUxvYWRlZCc7XG5pbXBvcnQgeyB3aGljaFByb3BlcnR5IH0gZnJvbSAnLi9oZWxwZXJzL3doaWNoUHJvcGVydHknO1xuaW1wb3J0IHsgZ2V0RW5kUHJvcGVydHkgfSBmcm9tICcuL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHknO1xuaW1wb3J0IHsgYWRkRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZEV2ZW50cyc7XG5pbXBvcnQgeyByZW1vdmVFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlRXZlbnRzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9ldmVudHMnO1xuaW1wb3J0IHsganNUcmFuc2Zvcm0gfSBmcm9tICcuL2hlbHBlcnMvanNUcmFuc2Zvcm0nO1xuXG4vLyBjaGVjayBicm93c2VyIHZlcnNpb24gYW5kIGxvY2FsIHN0b3JhZ2Vcbi8vIGlmIGJyb3dzZXIgdXBncmFkZWQsIFxuLy8gMS4gZGVsZXRlIGJyb3dzZXIgcmFsYXRlZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgXG4vLyAyLiByZWNoZWNrIHRoZXNlIG9wdGlvbnMgYW5kIHNhdmUgdGhlbSB0byBsb2NhbCBzdG9yYWdlXG52YXIgYnJvd3NlckluZm8gPSBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IHRydWUsXG4gICAgdG5zU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcblxudHJ5IHtcbiAgaWYgKCF0bnNTdG9yYWdlWyd0bnNBcHAnXSkge1xuICAgIHRuc1N0b3JhZ2VbJ3Ruc0FwcCddID0gYnJvd3NlckluZm87XG4gIH0gZWxzZSBpZiAodG5zU3RvcmFnZVsndG5zQXBwJ10gIT09IGJyb3dzZXJJbmZvKSB7XG4gICAgdG5zU3RvcmFnZVsndG5zQXBwJ10gPSBicm93c2VySW5mbztcblxuICAgIC8vIHRDID0+IGNhbGNcbiAgICAvLyB0U1AgPT4gc3VicGl4ZWxcbiAgICAvLyB0TVEgPT4gbWVkaWFxdWVyeVxuICAgIC8vIHRUZiA9PiB0cmFuc2Zvcm1cbiAgICAvLyB0VER1ID0+IHRyYW5zaXRpb25EdXJhdGlvblxuICAgIC8vIHRURGUgPT4gdHJhbnNpdGlvbkRlbGF5XG4gICAgLy8gdEFEdSA9PiBhbmltYXRpb25EdXJhdGlvblxuICAgIC8vIHRBRGUgPT4gYW5pbWF0aW9uRGVsYXlcbiAgICAvLyB0VEUgPT4gdHJhbnNpdGlvbkVuZFxuICAgIC8vIHRBRSA9PiBhbmltYXRpb25FbmRcblxuICAgIFsndEMnLCAndFNQJywgJ3RNUScsICd0VGYnLCAndFREdScsICd0VERlJywgJ3RBRHUnLCAndEFEZScsICd0VEUnLCAndEFFJ10uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdG5zU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH0pXG4gIH1cbn0gY2F0Y2goZSkge1xuICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSBmYWxzZTtcbn1cblxuLy8gZ2V0IGJyb3dzZXIgcmVsYXRlZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0XG4vLyBvdGhlcndpc2UsIHJ1biB0aGUgZnVuY3Rpb25zIGFnYWluIGFuZCBzYXZlIHRoZXNlIGRhdGEgdG8gbG9jYWwgc3RvcmFnZVxuLy8gY2hlY2tTdG9yYWdlVmFsdWUoKSBjb252ZXJ0IG5vbi1zdHJpbmcgdmFsdWUgdG8gaXRzIG9yaWdpbmFsIHZhbHVlOiAndHJ1ZScgPiB0cnVlXG52YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgd2luID0gd2luZG93LFxuICAgIEtFWVMgPSB7XG4gICAgICBFTlRFUjogMTMsXG4gICAgICBTUEFDRTogMzIsXG4gICAgICBQQUdFVVA6IDMzLFxuICAgICAgUEFHRURPV046IDM0LFxuICAgICAgRU5EOiAzNSxcbiAgICAgIEhPTUU6IDM2LFxuICAgICAgTEVGVDogMzcsXG4gICAgICBVUDogMzgsXG4gICAgICBSSUdIVDogMzksXG4gICAgICBET1dOOiA0MFxuICAgIH0sXG4gICAgQ0FMQyA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RDJ10pIHx8IHNldExvY2FsU3RvcmFnZSgndEMnLCBjYWxjKCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgU1VCUElYRUwgPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0U1AnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0U1AnLCBzdWJwaXhlbExheW91dCgpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIENTU01RID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndE1RJ10pIHx8IHNldExvY2FsU3RvcmFnZSgndE1RJywgbWVkaWFxdWVyeVN1cHBvcnQoKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBUUkFOU0ZPUk0gPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VGYnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0VGYnLCB3aGljaFByb3BlcnR5KFtcbiAgICAgICd0cmFuc2Zvcm0nLCBcbiAgICAgICdXZWJraXRUcmFuc2Zvcm0nLCBcbiAgICAgICdNb3pUcmFuc2Zvcm0nLCBcbiAgICAgICdtc1RyYW5zZm9ybScsIFxuICAgICAgJ09UcmFuc2Zvcm0nXG4gICAgXSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgVFJBTlNJVElPTkRVUkFUSU9OID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREdSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RURHUnLCB3aGljaFByb3BlcnR5KFtcbiAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nLCBcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uRHVyYXRpb24nLCBcbiAgICAgICdNb3pUcmFuc2l0aW9uRHVyYXRpb24nLCBcbiAgICAgICdPVHJhbnNpdGlvbkR1cmF0aW9uJ1xuICAgIF0pLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIFRSQU5TSVRJT05ERUxBWSA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RURGUnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0VERlJywgd2hpY2hQcm9wZXJ0eShbXG4gICAgICAndHJhbnNpdGlvbkRlbGF5JywgXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbkRlbGF5JywgXG4gICAgICAnTW96VHJhbnNpdGlvbkRlbGF5JywgXG4gICAgICAnT1RyYW5zaXRpb25EZWxheSdcbiAgICBdKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBBTklNQVRJT05EVVJBVElPTiA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RBRHUnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0QUR1Jywgd2hpY2hQcm9wZXJ0eShbXG4gICAgICAnYW5pbWF0aW9uRHVyYXRpb24nLCBcbiAgICAgICdXZWJraXRBbmltYXRpb25EdXJhdGlvbicsIFxuICAgICAgJ01vekFuaW1hdGlvbkR1cmF0aW9uJywgXG4gICAgICAnT0FuaW1hdGlvbkR1cmF0aW9uJ1xuICAgIF0pLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIEFOSU1BVElPTkRFTEFZID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFEZSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RBRGUnLCB3aGljaFByb3BlcnR5KFtcbiAgICAgICdhbmltYXRpb25EZWxheScsIFxuICAgICAgJ1dlYmtpdEFuaW1hdGlvbkRlbGF5JywgXG4gICAgICAnTW96QW5pbWF0aW9uRGVsYXknLCBcbiAgICAgICdPQW5pbWF0aW9uRGVsYXknXG4gICAgXSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgVFJBTlNJVElPTkVORCA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RURSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RURScsIGdldEVuZFByb3BlcnR5KFRSQU5TSVRJT05EVVJBVElPTiwgJ1RyYW5zaXRpb24nKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBBTklNQVRJT05FTkQgPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QUUnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0QUUnLCBnZXRFbmRQcm9wZXJ0eShBTklNQVRJT05EVVJBVElPTiwgJ0FuaW1hdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpO1xuXG4vLyByZXNldCBTVUJQSVhFTCBmb3IgSUU4XG5pZiAoIUNTU01RKSB7IFNVQlBJWEVMID0gZmFsc2U7IH1cblxuZXhwb3J0IHZhciB0bnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgIGNvbnRhaW5lcjogZG9jLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKSxcbiAgICBtb2RlOiAnY2Fyb3VzZWwnLFxuICAgIGF4aXM6ICdob3Jpem9udGFsJyxcbiAgICBpdGVtczogMSxcbiAgICBndXR0ZXI6IDAsXG4gICAgZWRnZVBhZGRpbmc6IDAsXG4gICAgZml4ZWRXaWR0aDogZmFsc2UsXG4gICAgc2xpZGVCeTogMSxcbiAgICBjb250cm9sczogdHJ1ZSxcbiAgICBjb250cm9sc1RleHQ6IFsncHJldicsICduZXh0J10sXG4gICAgY29udHJvbHNDb250YWluZXI6IGZhbHNlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBuYXZDb250YWluZXI6IGZhbHNlLFxuICAgIC8vIG5hdkFuaW1hdGlvbkluOiBmYWxzZSxcbiAgICAvLyBuYXZBbmltYXRpb25PdXQ6IGZhbHNlLFxuICAgIGFycm93S2V5czogZmFsc2UsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgIGF1dG9wbGF5RGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgYXV0b3BsYXlUZXh0OiBbJ3N0YXJ0JywgJ3N0b3AnXSxcbiAgICBhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuICAgIGF1dG9wbGF5QnV0dG9uOiBmYWxzZSxcbiAgICBhdXRvcGxheUJ1dHRvbk91dHB1dDogdHJ1ZSxcbiAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5OiB0cnVlLFxuICAgIC8vIGFuaW1hdGVJbjogJ3Rucy1mYWRlSW4nLFxuICAgIC8vIGFuaW1hdGVPdXQ6ICd0bnMtZmFkZU91dCcsXG4gICAgLy8gYW5pbWF0ZU5vcm1hbDogJ3Rucy1ub3JtYWwnLFxuICAgIC8vIGFuaW1hdGVEZWxheTogZmFsc2UsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICByZXdpbmQ6IGZhbHNlLFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgIGxhenlsb2FkOiBmYWxzZSxcbiAgICB0b3VjaDogdHJ1ZSxcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxuICAgIG5lc3RlZDogZmFsc2UsXG4gICAgZnJlZXphYmxlOiB0cnVlLFxuICAgIG9uSW5pdDogZmFsc2VcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG4gIFxuICAvLyBnZXQgZWxlbWVudCBub2RlcyBmcm9tIHNlbGVjdG9yc1xuICBbJ2NvbnRhaW5lcicsICdjb250cm9sc0NvbnRhaW5lcicsICduYXZDb250YWluZXInLCAnYXV0b3BsYXlCdXR0b24nXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNbaXRlbV0gPT09ICdzdHJpbmcnKSB7IG9wdGlvbnNbaXRlbV0gPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25zW2l0ZW1dKTsgfVxuICB9KTtcblxuICAvLyBtYWtlIHN1cmUgc2xpZGUgY29udGFpbmVyIGV4aXN0c1xuICBpZiAoIW9wdGlvbnMuY29udGFpbmVyIHx8ICFvcHRpb25zLmNvbnRhaW5lci5ub2RlTmFtZSB8fCBvcHRpb25zLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPCAyKSB7IHJldHVybjsgfVxuXG4gIC8vIHVwZGF0ZSByZXNwb25zaXZlXG4gIC8vIGZyb206IHsgXG4gIC8vICAgIDMwMDogMiwgXG4gIC8vICAgIDgwMDoge1xuICAvLyAgICAgIGxvb3A6IGZhbHNlXG4gIC8vICAgIH1cbiAgLy8gfVxuICAvLyB0bzoge1xuICAvLyAgICAzMDA6IHsgXG4gIC8vICAgICAgaXRlbXM6IDIgXG4gIC8vICAgIH0sIFxuICAvLyAgICA4MDA6IHtcbiAgLy8gICAgICBsb29wOiBmYWxzZVxuICAvLyAgICB9XG4gIC8vIH1cbiAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgIHZhciByZXNUZW0gPSB7fSwgcmVzID0gb3B0aW9ucy5yZXNwb25zaXZlO1xuICAgIGZvcih2YXIga2V5IGluIHJlcykge1xuICAgICAgdmFyIHZhbCA9IHJlc1trZXldO1xuICAgICAgcmVzVGVtW2tleV0gPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHtpdGVtczogdmFsfSA6ICB2YWw7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gcmVzVGVtO1xuICAgIHJlc1RlbSA9IG51bGw7XG4gIH1cblxuICAvLyA9PT0gZGVmaW5lIGFuZCBzZXQgdmFyaWFibGVzID09PVxuICB2YXIgY2Fyb3VzZWwgPSBvcHRpb25zLm1vZGUgPT09ICdjYXJvdXNlbCcgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKCFjYXJvdXNlbCkge1xuICAgIG9wdGlvbnMuYXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBvcHRpb25zLnJld2luZCA9IGZhbHNlO1xuICAgIG9wdGlvbnMubG9vcCA9IHRydWU7XG4gICAgb3B0aW9ucy5lZGdlUGFkZGluZyA9IGZhbHNlO1xuXG4gICAgdmFyIGFuaW1hdGVJbiA9ICd0bnMtZmFkZUluJyxcbiAgICAgICAgYW5pbWF0ZU91dCA9ICd0bnMtZmFkZU91dCcsXG4gICAgICAgIGFuaW1hdGVEZWxheSA9IGZhbHNlLFxuICAgICAgICBhbmltYXRlTm9ybWFsID0gb3B0aW9ucy5hbmltYXRlTm9ybWFsIHx8ICd0bnMtbm9ybWFsJztcblxuICAgIGlmIChUUkFOU0lUSU9ORU5EICYmIEFOSU1BVElPTkVORCkge1xuICAgICAgYW5pbWF0ZUluID0gb3B0aW9ucy5hbmltYXRlSW4gfHwgYW5pbWF0ZUluO1xuICAgICAgYW5pbWF0ZU91dCA9IG9wdGlvbnMuYW5pbWF0ZU91dCB8fCBhbmltYXRlT3V0O1xuICAgICAgYW5pbWF0ZURlbGF5ID0gb3B0aW9ucy5hbmltYXRlRGVsYXkgfHwgYW5pbWF0ZURlbGF5O1xuICAgIH1cbiAgfVxuXG4gIHZhciBob3Jpem9udGFsID0gb3B0aW9ucy5heGlzID09PSAnaG9yaXpvbnRhbCcgPyB0cnVlIDogZmFsc2UsXG4gICAgICBvdXRlcldyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBpbm5lcldyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lclBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnROb2RlLFxuICAgICAgc2xpZGVJdGVtcyA9IGNvbnRhaW5lci5jaGlsZHJlbixcbiAgICAgIHNsaWRlQ291bnQgPSBzbGlkZUl0ZW1zLmxlbmd0aCxcbiAgICAgIHZwT3V0ZXIgPSBjb250YWluZXJQYXJlbnQuY2xpZW50V2lkdGgsXG4gICAgICB2cElubmVyLFxuICAgICAgcmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSxcbiAgICAgIHJlc3BvbnNpdmVJdGVtcyA9IFtdLFxuICAgICAgYnJlYWtwb2ludHMgPSBmYWxzZSxcbiAgICAgIGJyZWFrcG9pbnRab25lID0gMCxcbiAgICAgIGJyZWFrcG9pbnRab25lQWRqdXN0ID0gMDtcblxuICBpZiAocmVzcG9uc2l2ZSkge1xuICAgIGJyZWFrcG9pbnRzID0gT2JqZWN0LmtleXMocmVzcG9uc2l2ZSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHBhcnNlSW50KHgpOyB9KVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcbiAgICBpZiAoYnJlYWtwb2ludHMuaW5kZXhPZigwKSA8IDApIHsgYnJlYWtwb2ludFpvbmVBZGp1c3QgPSAxOyB9XG5cbiAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKGJwKSB7XG4gICAgICByZXNwb25zaXZlSXRlbXMgPSByZXNwb25zaXZlSXRlbXMuY29uY2F0KE9iamVjdC5rZXlzKHJlc3BvbnNpdmVbYnBdKSk7XG4gICAgfSk7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHJlc3BvbnNpdmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IGlmIChhcnIuaW5kZXhPZihpdGVtKSA8IDApIHsgYXJyLnB1c2goaXRlbSk7IH0gfSk7XG4gICAgcmVzcG9uc2l2ZUl0ZW1zID0gYXJyO1xuICAgIC8vIGFsZXJ0KHJlc3BvbnNpdmVJdGVtcyk7XG5cbiAgICBicmVha3BvaW50Wm9uZSA9IGdldEJyZWFrcG9pbnRab25lKCk7XG4gIH0gXG5cbiAgdmFyIGl0ZW1zID0gZ2V0T3B0aW9uKCdpdGVtcycpLFxuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpID09PSAncGFnZScgPyBpdGVtcyA6IGdldE9wdGlvbignc2xpZGVCeScpLFxuICAgICAgbmVzdGVkID0gb3B0aW9ucy5uZXN0ZWQsXG4gICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpLFxuICAgICAgZWRnZVBhZGRpbmcgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyksXG4gICAgICBmaXhlZFdpZHRoID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJyksXG4gICAgICBhcnJvd0tleXMgPSBnZXRPcHRpb24oJ2Fycm93S2V5cycpLFxuICAgICAgc3BlZWQgPSBnZXRPcHRpb24oJ3NwZWVkJyksXG4gICAgICByZXdpbmQgPSBvcHRpb25zLnJld2luZCxcbiAgICAgIGxvb3AgPSByZXdpbmQgPyBmYWxzZSA6IG9wdGlvbnMubG9vcCxcbiAgICAgIGF1dG9IZWlnaHQgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnKSxcbiAgICAgIHNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgpLFxuICAgICAgbGF6eWxvYWQgPSBvcHRpb25zLmxhenlsb2FkLFxuICAgICAgc2xpZGVPZmZzZXRUb3BzLCAvLyBjb2xsZWN0aW9uIG9mIHNsaWRlIG9mZnNldCB0b3BzXG4gICAgICBzbGlkZUl0ZW1zT3V0ID0gW10sXG4gICAgICBjbG9uZUNvdW50ID0gbG9vcCA/IHNsaWRlQ291bnQgKiAyIDogY2hlY2tPcHRpb24oJ2VkZ2VQYWRkaW5nJykgPyAxIDogMCxcbiAgICAgIHNsaWRlQ291bnROZXcgPSAhY2Fyb3VzZWwgPyBzbGlkZUNvdW50ICsgY2xvbmVDb3VudCA6IHNsaWRlQ291bnQgKyBjbG9uZUNvdW50ICogMixcbiAgICAgIGhhc1JpZ2h0RGVhZFpvbmUgPSBmaXhlZFdpZHRoICYmICFsb29wICYmICFlZGdlUGFkZGluZyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gIWNhcm91c2VsIHx8ICFsb29wID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgLy8gdHJhbnNmb3JtXG4gICAgICB0cmFuc2Zvcm1BdHRyID0gaG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnLFxuICAgICAgdHJhbnNmb3JtUHJlZml4ID0gJycsXG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJycsXG4gICAgICAvLyBpbmRleFxuICAgICAgaW5kZXggPSAhY2Fyb3VzZWwgPyAwIDogY2xvbmVDb3VudCxcbiAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXgsXG4gICAgICBpbmRleEFkanVzdCA9ICFsb29wICYmIGNoZWNrT3B0aW9uKCdlZGdlUGFkZGluZycpID8gMSA6IDAsXG4gICAgICBpbmRleE1pbiA9IGluZGV4QWRqdXN0LFxuICAgICAgaW5kZXhNYXggPSBzbGlkZUNvdW50TmV3IC0gaXRlbXMgLSBpbmRleEFkanVzdCxcbiAgICAgIC8vIHJlc2l6ZVxuICAgICAgcmVzaXplVGltZXIsXG4gICAgICB0b3VjaGVkT3JEcmFnZWQsXG4gICAgICBydW5uaW5nID0gZmFsc2UsXG4gICAgICBvbkluaXQgPSBvcHRpb25zLm9uSW5pdCxcbiAgICAgIGV2ZW50cyA9IG5ldyBFdmVudHMoKSxcbiAgICAgIC8vIGlkLCBjbGFzc1xuICAgICAgY29udGFpbmVySWRDYWNoZWQgPSBjb250YWluZXIuaWQsXG4gICAgICBjbGFzc0NvbnRhaW5lciA9ICcgdG5zLXNsaWRlciB0bnMtJyArIG9wdGlvbnMubW9kZSxcbiAgICAgIHNsaWRlSWQgPSBjb250YWluZXIuaWQgfHwgZ2V0U2xpZGVJZCgpLFxuICAgICAgZGlzYWJsZSA9IGdldE9wdGlvbignZGlzYWJsZScpLFxuICAgICAgZnJlZXphYmxlID0gb3B0aW9ucy5mcmVlemFibGUsXG4gICAgICBmcmVlemUgPSBkaXNhYmxlID8gdHJ1ZSA6IGZyZWV6YWJsZSA/IHNsaWRlQ291bnQgPD0gaXRlbXMgOiBmYWxzZSxcbiAgICAgIGltcG9ydGFudFN0ciA9IG5lc3RlZCA9PT0gJ2lubmVyJyA/ICcgIWltcG9ydGFudCcgOiAnJyxcbiAgICAgIGNvbnRyb2xzRXZlbnRzID0ge1xuICAgICAgICAnY2xpY2snOiBvbkNvbnRyb2xzQ2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25Db250cm9sc0tleWRvd25cbiAgICAgIH0sXG4gICAgICBuYXZFdmVudHMgPSB7XG4gICAgICAgICdjbGljayc6IG9uTmF2Q2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25OYXZLZXlkb3duXG4gICAgICB9LFxuICAgICAgaG92ZXJFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZW92ZXInOiBtb3VzZW92ZXJQYXVzZSxcbiAgICAgICAgJ21vdXNlb3V0JzogbW91c2VvdXRSZXN0YXJ0XG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eUV2ZW50ID0geyd2aXNpYmlsaXR5Y2hhbmdlJzogb25WaXNpYmlsaXR5Q2hhbmdlfSxcbiAgICAgIGRvY21lbnRLZXlkb3duRXZlbnQgPSB7J2tleWRvd24nOiBvbkRvY3VtZW50S2V5ZG93bn0sXG4gICAgICB0b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgJ3RvdWNoc3RhcnQnOiBvblRvdWNoT3JNb3VzZVN0YXJ0LFxuICAgICAgICAndG91Y2htb3ZlJzogb25Ub3VjaE9yTW91c2VNb3ZlLFxuICAgICAgICAndG91Y2hlbmQnOiBvblRvdWNoT3JNb3VzZUVuZCxcbiAgICAgICAgJ3RvdWNoY2FuY2VsJzogb25Ub3VjaE9yTW91c2VFbmRcbiAgICAgIH0sIGRyYWdFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZWRvd24nOiBvblRvdWNoT3JNb3VzZVN0YXJ0LFxuICAgICAgICAnbW91c2Vtb3ZlJzogb25Ub3VjaE9yTW91c2VNb3ZlLFxuICAgICAgICAnbW91c2V1cCc6IG9uVG91Y2hPck1vdXNlRW5kLFxuICAgICAgICAnbW91c2VsZWF2ZSc6IG9uVG91Y2hPck1vdXNlRW5kXG4gICAgICB9LFxuICAgICAgaGFzQ29udHJvbHMgPSBjaGVja09wdGlvbignY29udHJvbHMnKSxcbiAgICAgIGhhc05hdiA9IGNoZWNrT3B0aW9uKCduYXYnKSxcbiAgICAgIGhhc0F1dG9wbGF5ID0gY2hlY2tPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBoYXNUb3VjaCA9IGNoZWNrT3B0aW9uKCd0b3VjaCcpLFxuICAgICAgaGFzTW91c2VEcmFnID0gY2hlY2tPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgc2xpZGVBY3RpdmVDbGFzcyA9ICd0bnMtc2xpZGUtYWN0aXZlJztcblxuICAvLyBjb250cm9sc1xuICBpZiAoaGFzQ29udHJvbHMpIHtcbiAgICB2YXIgY29udHJvbHMgPSBnZXRPcHRpb24oJ2NvbnRyb2xzJyksXG4gICAgICAgIGNvbnRyb2xzVGV4dCA9IGdldE9wdGlvbignY29udHJvbHNUZXh0JyksXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyID0gb3B0aW9ucy5jb250cm9sc0NvbnRhaW5lcixcbiAgICAgICAgcHJldkJ1dHRvbixcbiAgICAgICAgbmV4dEJ1dHRvbixcbiAgICAgICAgcHJldklzQnV0dG9uLFxuICAgICAgICBuZXh0SXNCdXR0b247XG4gIH1cblxuICAvLyBuYXZcbiAgaWYgKGhhc05hdikge1xuICAgIHZhciBuYXYgPSBnZXRPcHRpb24oJ25hdicpLFxuICAgICAgICBuYXZDb250YWluZXIgPSBvcHRpb25zLm5hdkNvbnRhaW5lcixcbiAgICAgICAgLy8gbmF2QW5pbWF0aW9uSW4gPSBvcHRpb25zLm5hdkFuaW1hdGlvbkluLFxuICAgICAgICAvLyBuYXZBbmltYXRpb25PdXQgPSBvcHRpb25zLm5hdkFuaW1hdGlvbk91dCxcbiAgICAgICAgbmF2SXRlbXMsXG4gICAgICAgIHZpc2libGVOYXZJbmRleGVzID0gW10sXG4gICAgICAgIHZpc2libGVOYXZJbmRleGVzQ2FjaGVkID0gdmlzaWJsZU5hdkluZGV4ZXMsXG4gICAgICAgIG5hdkNsaWNrZWQgPSAtMSxcbiAgICAgICAgbmF2Q3VycmVudEluZGV4ID0gMCxcbiAgICAgICAgbmF2Q3VycmVudEluZGV4Q2FjaGVkID0gMCxcbiAgICAgICAgbmF2QWN0aXZlQ2xhc3MgPSAndG5zLW5hdi1hY3RpdmUnO1xuICB9XG5cbiAgLy8gYXV0b3BsYXlcbiAgaWYgKGhhc0F1dG9wbGF5KSB7XG4gICAgdmFyIGF1dG9wbGF5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheScpLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGltZW91dCcpLFxuICAgICAgICBhdXRvcGxheURpcmVjdGlvbiA9IG9wdGlvbnMuYXV0b3BsYXlEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IDEgOiAtMSxcbiAgICAgICAgYXV0b3BsYXlUZXh0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRleHQnKSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlID0gZ2V0T3B0aW9uKCdhdXRvcGxheUhvdmVyUGF1c2UnKSxcbiAgICAgICAgYXV0b3BsYXlUaW1lcixcbiAgICAgICAgYXV0b3BsYXlCdXR0b24gPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uLFxuICAgICAgICBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclN0b3BwZWQgPSBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlIdG1sU3RyaW5ncyA9IFsnPHNwYW4gY2xhc3M9XFwndG5zLXZpc3VhbGx5LWhpZGRlblxcJz4nLCAnIGFuaW1hdGlvbjwvc3Bhbj4nXSxcbiAgICAgICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGdldE9wdGlvbignYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eScpLFxuICAgICAgICBhdXRvcGxheVJlc2V0VmlzaWJpbGl0eVN0YXRlID0gZmFsc2U7XG4gIH1cblxuICAvLyB0b3VjaFxuICBpZiAoaGFzVG91Y2gpIHtcbiAgICB2YXIgdG91Y2ggPSBnZXRPcHRpb24oJ3RvdWNoJyksXG4gICAgICAgIHN0YXJ0WCA9IG51bGwsXG4gICAgICAgIHN0YXJ0WSA9IG51bGwsXG4gICAgICAgIHRyYW5zbGF0ZUluaXQsXG4gICAgICAgIGRpc1gsXG4gICAgICAgIGRpc1k7XG4gIH1cblxuICAvLyBtb3VzZSBkcmFnXG4gIGlmIChoYXNNb3VzZURyYWcpIHtcbiAgICB2YXIgbW91c2VEcmFnID0gZ2V0T3B0aW9uKCdtb3VzZURyYWcnKSxcbiAgICAgICAgaXNEcmFnRXZlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGRpc2FibGUgc2xpZGVyIHdoZW4gc2xpZGVjb3VudCA8PSBpdGVtc1xuICBpZiAoZnJlZXplKSB7XG4gICAgY29udHJvbHMgPSBuYXYgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IGFycm93S2V5cyA9IGF1dG9wbGF5ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKFRSQU5TRk9STSkge1xuICAgIHRyYW5zZm9ybUF0dHIgPSBUUkFOU0ZPUk07XG4gICAgdHJhbnNmb3JtUHJlZml4ID0gJ3RyYW5zbGF0ZSc7XG4gICAgdHJhbnNmb3JtUHJlZml4ICs9IGhvcml6b250YWwgPyAnWCgnIDogJ1koJztcbiAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJyknO1xuICB9XG5cbiAgLy8gPT09IENPTU1PTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIGNoZWNrT3B0aW9uIChpdGVtKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9wdGlvbnNbaXRlbV07XG4gICAgaWYgKCFyZXN1bHQgJiYgYnJlYWtwb2ludHMgJiYgcmVzcG9uc2l2ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPj0gMCkge1xuICAgICAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnApIHtcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVbYnBdW2l0ZW1dKSB7IHJlc3VsdCA9IHRydWU7IH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3B0aW9uIChpdGVtLCB2aWV3KSB7XG4gICAgdmlldyA9IHZpZXcgPyB2aWV3IDogdnBPdXRlcjtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgaWYgKGl0ZW0gPT09ICdpdGVtcycgJiYgZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJykpIHtcbiAgICAgIHJlc3VsdCA9IE1hdGguZmxvb3IodmlldyAvIChnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKSArIGdldE9wdGlvbignZ3V0dGVyJykpKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdzbGlkZUJ5JyAmJiAhY2Fyb3VzZWwpIHtcbiAgICAgIHJlc3VsdCA9ICdwYWdlJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdlZGdlUGFkZGluZycgJiYgIWNhcm91c2VsKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdhdXRvSGVpZ2h0JyAmJiAoIWNhcm91c2VsIHx8IG5lc3RlZCA9PT0gJ291dGVyJykpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnNbaXRlbV07XG5cbiAgICAgIGlmIChicmVha3BvaW50cyAmJiByZXNwb25zaXZlSXRlbXMuaW5kZXhPZihpdGVtKSA+PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBicmVha3BvaW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBicCA9IGJyZWFrcG9pbnRzW2ldO1xuICAgICAgICAgIGlmICh2aWV3ID49IGJwKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSBpbiByZXNwb25zaXZlW2JwXSkgeyByZXN1bHQgPSByZXNwb25zaXZlW2JwXVtpdGVtXTsgfVxuICAgICAgICAgIH0gZWxzZSB7IGJyZWFrOyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmIChpdGVtID09PSAnaXRlbXMnKSB7IHJlc3VsdCA9IE1hdGgubWF4KDEsIE1hdGgubWluKHNsaWRlQ291bnQsIHJlc3VsdCkpOyB9XG4gICAgaWYgKGl0ZW0gPT09ICdzbGlkZUJ5JyAmJiByZXN1bHQgPT09ICdwYWdlJykgeyByZXN1bHQgPSBnZXRPcHRpb24oJ2l0ZW1zJyk7IH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZU1hcmdpbkxlZnQgKGkpIHtcbiAgICB2YXIgc3RyID0gQ0FMQyA/IFxuICAgICAgQ0FMQyArICcoJyArIGkgKiAxMDAgKyAnJSAvICcgKyBzbGlkZUNvdW50TmV3ICsgJyknIDogXG4gICAgICBpICogMTAwIC8gc2xpZGVDb3VudE5ldyArICclJztcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzIChlZGdlUGFkZGluZ1RlbSwgZ3V0dGVyVGVtLCBmaXhlZFdpZHRoVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGlmIChlZGdlUGFkZGluZ1RlbSkge1xuICAgICAgdmFyIGdhcCA9IGVkZ2VQYWRkaW5nVGVtO1xuICAgICAgaWYgKGd1dHRlclRlbSkgeyBnYXAgKz0gZ3V0dGVyVGVtOyB9XG4gICAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgICBzdHIgPSAnbWFyZ2luOiAwcHggJyArICh2cE91dGVyJShmaXhlZFdpZHRoVGVtICsgZ3V0dGVyVGVtKSArIGd1dHRlclRlbSkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGhvcml6b250YWwgP1xuICAgICAgICAgICdtYXJnaW46IDAgJyArIGVkZ2VQYWRkaW5nVGVtICsgJ3B4IDAgJyArIGdhcCArICdweDsnIDpcbiAgICAgICAgICAncGFkZGluZzogJyArIGdhcCArICdweCAwICcgKyBlZGdlUGFkZGluZ1RlbSArICdweCAwOyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndXR0ZXJUZW0gJiYgIWZpeGVkV2lkdGhUZW0pIHtcbiAgICAgIHZhciBkaXIgPSBob3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICAgICAgc3RyID0gJ21hcmdpbi0nICsgZGlyICsgJzogLScgKyBndXR0ZXJUZW0gKyAncHg7J1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250YWluZXJXaWR0aCAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIGl0ZW1zVGVtID0gTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXNUZW0pO1xuICAgIHZhciBzdHI7XG5cbiAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgc3RyID0gKGZpeGVkV2lkdGhUZW0gKyBndXR0ZXJUZW0pICogc2xpZGVDb3VudE5ldyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IENBTEMgPyBcbiAgICAgICAgQ0FMQyArICcoJyArIHNsaWRlQ291bnROZXcgKiAxMDAgKyAnJSAvICcgKyBpdGVtc1RlbSArICcpJyA6IFxuICAgICAgICBzbGlkZUNvdW50TmV3ICogMTAwIC8gaXRlbXNUZW0gKyAnJSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlV2lkdGhTdHlsZSAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIGl0ZW1zVGVtID0gTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXNUZW0pO1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBzdHIgPSAnd2lkdGg6JztcbiAgICAgIGlmIChmaXhlZFdpZHRoVGVtKSB7XG4gICAgICAgIHN0ciArPSAoZml4ZWRXaWR0aFRlbSArIGd1dHRlclRlbSkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRpdmlkZW5kID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50TmV3IDogTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXNUZW0pO1xuICAgICAgICBzdHIgKz0gQ0FMQyA/IFxuICAgICAgICAgIENBTEMgKyAnKDEwMCUgLyAnICsgZGl2aWRlbmQgKyAnKScgOiBcbiAgICAgICAgICAxMDAgLyBkaXZpZGVuZCArICclJztcbiAgICAgIH1cbiAgICAgIHN0ciArPSBpbXBvcnRhbnRTdHIgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlR3V0dGVyU3R5bGUgKGd1dHRlclRlbSkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIC8vIGd1dHRlciBtYXliZSBpbnRlcmdlciB8fCAwXG4gICAgLy8gc28gY2FuJ3QgdXNlICdpZiAoZ3V0dGVyKSdcbiAgICBpZiAoZ3V0dGVyVGVtICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHByb3AgPSBob3Jpem9udGFsID8gJ3BhZGRpbmctJyA6ICdtYXJnaW4tJyxcbiAgICAgICAgICBkaXIgPSBob3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICAgICAgc3RyID0gcHJvcCArICBkaXIgKyAnOiAnICsgZ3V0dGVyVGVtICsgJ3B4Oyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIChmdW5jdGlvbiBzbGlkZXJJbml0ICgpIHtcbiAgICAvLyBGaXJzdCB0aGluZyBmaXJzdCwgd3JhcCBjb250YWluZXIgd2l0aCAnb3V0ZXJXcmFwcGVyID4gaW5uZXJXcmFwcGVyJyxcbiAgICAvLyB0byBnZXQgdGhlIGNvcnJlY3QgdmlldyB3aWR0aFxuICAgIG91dGVyV3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUob3V0ZXJXcmFwcGVyLCBjb250YWluZXIpO1xuICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHZwSW5uZXIgPSBpbm5lcldyYXBwZXIuY2xpZW50V2lkdGg7XG5cbiAgICB2YXIgY2xhc3NPdXRlciA9ICd0bnMtb3V0ZXInLFxuICAgICAgICBjbGFzc0lubmVyID0gJ3Rucy1pbm5lcic7XG5cbiAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGlmIChjaGVja09wdGlvbignZWRnZVBhZGRpbmcnKSB8fCBjaGVja09wdGlvbignZ3V0dGVyJykgJiYgIW9wdGlvbnMuZml4ZWRXaWR0aCkge1xuICAgICAgICAgIGNsYXNzT3V0ZXIgKz0gJyB0bnMtb3ZoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGFzc0lubmVyICs9ICcgdG5zLW92aCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzSW5uZXIgKz0gJyB0bnMtb3ZoJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoZWNrT3B0aW9uKCdndXR0ZXInKSkge1xuICAgICAgY2xhc3NPdXRlciArPSAnIHRucy1vdmgnO1xuICAgIH1cblxuICAgIG91dGVyV3JhcHBlci5jbGFzc05hbWUgPSBjbGFzc091dGVyO1xuICAgIGlubmVyV3JhcHBlci5jbGFzc05hbWUgPSBjbGFzc0lubmVyO1xuICAgIGlubmVyV3JhcHBlci5pZCA9IHNsaWRlSWQgKyAnLWl3JztcbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgaW5uZXJXcmFwcGVyLmNsYXNzTmFtZSArPSAnIHRucy1haCc7XG4gICAgICBpbm5lcldyYXBwZXIuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IHNwZWVkIC8gMTAwMCArICdzJztcbiAgICB9XG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHByb3BlcnRpZXNcbiAgICBpZiAoY29udGFpbmVyLmlkID09PSAnJykgeyBjb250YWluZXIuaWQgPSBzbGlkZUlkOyB9XG4gICAgY2xhc3NDb250YWluZXIgKz0gU1VCUElYRUwgPyAnIHRucy1zdWJwaXhlbCcgOiAnIHRucy1uby1zdWJwaXhlbCc7XG4gICAgY2xhc3NDb250YWluZXIgKz0gQ0FMQyA/ICcgdG5zLWNhbGMnIDogJyB0bnMtbm8tY2FsYyc7XG4gICAgaWYgKGNhcm91c2VsKSB7IGNsYXNzQ29udGFpbmVyICs9ICcgdG5zLScgKyBvcHRpb25zLmF4aXM7IH1cbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IGNsYXNzQ29udGFpbmVyO1xuICAgIC8vIGFkZCBldmVudFxuICAgIGlmIChjYXJvdXNlbCAmJiBUUkFOU0lUSU9ORU5EKSB7XG4gICAgICB2YXIgZXZlID0ge307XG4gICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBvblRyYW5zaXRpb25FbmQ7XG4gICAgICBhZGRFdmVudHMoY29udGFpbmVyLCBldmUpO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBkYXRhcyBhZnRlciBpbml0XG4gICAgY2xhc3NPdXRlciA9IGNsYXNzSW5uZXIgPSBudWxsO1xuXG4gICAgLy8gYWRkIGlkLCBjbGFzcywgYXJpYSBhdHRyaWJ1dGVzIFxuICAgIC8vIGJlZm9yZSBjbG9uZSBzbGlkZXNcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNsaWRlQ291bnQ7IHgrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW3hdO1xuICAgICAgaWYgKCFpdGVtLmlkKSB7IGl0ZW0uaWQgPSBzbGlkZUlkICsgJy1pdGVtJyArIHg7IH1cbiAgICAgIGFkZENsYXNzKGl0ZW0sICd0bnMtaXRlbScpO1xuICAgICAgaWYgKCFjYXJvdXNlbCAmJiBhbmltYXRlTm9ybWFsKSB7IGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpOyB9XG4gICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xvbmUgc2xpZGVzXG4gICAgaWYgKGxvb3AgfHwgZWRnZVBhZGRpbmcpIHtcbiAgICAgIHZhciBmcmFnbWVudEJlZm9yZSA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIFxuICAgICAgICAgIGZyYWdtZW50QWZ0ZXIgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICB2YXIgbnVtID0gaiVzbGlkZUNvdW50LFxuICAgICAgICAgICAgY2xvbmVGaXJzdCA9IHNsaWRlSXRlbXNbbnVtXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHJlbW92ZUF0dHJzKGNsb25lRmlyc3QsICdpZCcpO1xuICAgICAgICBmcmFnbWVudEFmdGVyLmluc2VydEJlZm9yZShjbG9uZUZpcnN0LCBmcmFnbWVudEFmdGVyLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICAgIHZhciBjbG9uZUxhc3QgPSBzbGlkZUl0ZW1zW3NsaWRlQ291bnQgLSAxIC0gbnVtXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoY2xvbmVMYXN0LCAnaWQnKTtcbiAgICAgICAgICBmcmFnbWVudEJlZm9yZS5hcHBlbmRDaGlsZChjbG9uZUxhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZnJhZ21lbnRCZWZvcmUsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudEFmdGVyKTtcbiAgICAgIHNsaWRlSXRlbXMgPSBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgdmlzaWJsZSBzbGlkZXNcbiAgICAvLyBhZGQgYXJpYSBhdHRyc1xuICAgIC8vIHNldCBhbmltYXRpb24gY2xhc3NlcyBhbmQgbGVmdCB2YWx1ZSBmb3IgZ2FsbGVyeSBzbGlkZXJcbiAgICBmb3IgKHZhciBpID0gaW5kZXg7IGkgPCBpbmRleCArIGl0ZW1zOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcbiAgICAgIHNldEF0dHJzKGl0ZW0sIHsnYXJpYS1oaWRkZW4nOiAnZmFsc2UnfSk7XG4gICAgICByZW1vdmVBdHRycyhpdGVtLCBbJ3RhYmluZGV4J10pO1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgICAgIGlmICghY2Fyb3VzZWwpIHsgXG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsKSB7XG4gICAgICAvLyBzZXQgZm9udC1zaXplIHJ1bGVzXG4gICAgICAvLyBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAvLyBydW4gb25jZVxuICAgICAgaWYgKFNVQlBJWEVMKSB7XG4gICAgICAgIHZhciBjc3NGb250U2l6ZSA9IHdpbi5nZXRDb21wdXRlZFN0eWxlKHNsaWRlSXRlbXNbMF0pLmZvbnRTaXplO1xuICAgICAgICAvLyBlbSwgcmVtIHRvIHB4IChmb3IgSUU4LSlcbiAgICAgICAgaWYgKGNzc0ZvbnRTaXplLmluZGV4T2YoJ2VtJykgPiAwKSB7XG4gICAgICAgICAgY3NzRm9udFNpemUgPSBwYXJzZUZsb2F0KGNzc0ZvbnRTaXplKSAqIDE2ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQsICdmb250LXNpemU6MDsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsICdmb250LXNpemU6JyArIGNzc0ZvbnRTaXplICsgJzsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuXG4gICAgICAvLyBzbGlkZSBsZWZ0IG1hcmdpblxuICAgICAgLy8gZm9yIElFOCAmIHdlYmtpdCBicm93c2VycyAobm8gc3VicGl4ZWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoc2xpZGVJdGVtcywgZnVuY3Rpb24gKHNsaWRlLCBpKSB7XG4gICAgICAgICAgc2xpZGUuc3R5bGUubWFyZ2luTGVmdCA9IGdldFNsaWRlTWFyZ2luTGVmdChpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKENTU01RKSB7XG4gICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgdmFyIHN0ciA9IGdldElubmVyV3JhcHBlclN0eWxlcyhvcHRpb25zLmVkZ2VQYWRkaW5nLCBvcHRpb25zLmd1dHRlciwgb3B0aW9ucy5maXhlZFdpZHRoKTtcbiAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnLWl3Jywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuXG4gICAgICAvLyBjb250YWluZXIgc3R5bGVzXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCkge1xuICAgICAgICBzdHIgPSAnd2lkdGg6JyArIGdldENvbnRhaW5lcldpZHRoKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgaWYgKGhvcml6b250YWwgfHwgb3B0aW9ucy5ndXR0ZXIpIHtcbiAgICAgICAgc3RyID0gZ2V0U2xpZGVXaWR0aFN0eWxlKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpICsgXG4gICAgICAgICAgICAgIGdldFNsaWRlR3V0dGVyU3R5bGUob3B0aW9ucy5ndXR0ZXIpO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgIC8vIG5vbiBDU1MgbWVkaWFxdWVyaWVzOiBJRThcbiAgICAvLyAjIyB1cGRhdGUgaW5uZXIgd3JhcHBlciwgY29udGFpbmVyLCBzbGlkZXMgaWYgbmVlZGVkXG4gICAgLy8gc2V0IGlubGluZSBzdHlsZXMgZm9yIGlubmVyIHdyYXBwZXIgJiBjb250YWluZXJcbiAgICAvLyBpbnNlcnQgc3R5bGVzaGVldCAob25lIGxpbmUpIGZvciBzbGlkZXMgb25seSAoc2luY2Ugc2xpZGVzIGFyZSBtYW55KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmcsIGd1dHRlciwgZml4ZWRXaWR0aCk7XG5cbiAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgIGlmIChob3Jpem9udGFsIHx8IGd1dHRlcikge1xuICAgICAgICB2YXIgc3RyID0gZ2V0U2xpZGVXaWR0aFN0eWxlKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpICtcbiAgICAgICAgICAgICAgICAgIGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyKTtcbiAgICAgICAgLy8gYXBwZW5kIHRvIHRoZSBsYXN0IGxpbmVcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFob3Jpem9udGFsICYmICFkaXNhYmxlKSB7XG4gICAgICBnZXRTbGlkZU9mZnNldFRvcHMoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgLy8gbWVkaWEgcXVlcmllc1xuICAgIGlmIChyZXNwb25zaXZlICYmIENTU01RKSB7XG4gICAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKGJwKSB7XG4gICAgICAgIHZhciBvcHRzID0gcmVzcG9uc2l2ZVticF0sXG4gICAgICAgICAgICBzdHIgPSAnJyxcbiAgICAgICAgICAgIGlubmVyV3JhcHBlclN0ciA9ICcnLFxuICAgICAgICAgICAgY29udGFpbmVyU3RyID0gJycsXG4gICAgICAgICAgICBzbGlkZVN0ciA9ICcnLFxuICAgICAgICAgICAgaXRlbXNCUCA9IGdldE9wdGlvbignaXRlbXMnLCBicCksXG4gICAgICAgICAgICBmaXhlZFdpZHRoQlAgPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnLCBicCksXG4gICAgICAgICAgICBlZGdlUGFkZGluZ0JQID0gZ2V0T3B0aW9uKCdlZGdlUGFkZGluZycsIGJwKSxcbiAgICAgICAgICAgIGd1dHRlckJQID0gZ2V0T3B0aW9uKCdndXR0ZXInLCBicCk7XG5cbiAgICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHJpbmdcbiAgICAgICAgaWYgKCdlZGdlUGFkZGluZycgaW4gb3B0cyB8fCAnZ3V0dGVyJyBpbiBvcHRzKSB7XG4gICAgICAgICAgaW5uZXJXcmFwcGVyU3RyID0gJyMnICsgc2xpZGVJZCArICctaXd7JyArIGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZ0JQLCBndXR0ZXJCUCwgZml4ZWRXaWR0aEJQKSArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnRhaW5lciBzdHJpbmdcbiAgICAgICAgaWYgKGNhcm91c2VsICYmIGhvcml6b250YWwgJiYgKCdmaXhlZFdpZHRoJyBpbiBvcHRzIHx8ICdndXR0ZXInIGluIG9wdHMgfHwgJ2l0ZW1zJyBpbiBvcHRzKSkge1xuICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICcjJyArIHNsaWRlSWQgKyAneycgKyAnd2lkdGg6JyArIGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGhCUCwgZ3V0dGVyQlAsIGl0ZW1zQlApICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2xpZGUgc3RyaW5nXG4gICAgICAgIGlmICgnZml4ZWRXaWR0aCcgaW4gb3B0cyB8fCBjaGVja09wdGlvbignZml4ZWRXaWR0aCcpICYmICdndXR0ZXInIGluIG9wdHMgfHwgIWNhcm91c2VsICYmICdpdGVtcycgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2d1dHRlcicgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyQlApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZVN0ci5sZW5ndGggPiAwKSB7IHNsaWRlU3RyID0gJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW17JyArIHNsaWRlU3RyICsgJ30nOyB9XG5cbiAgICAgICAgc3RyID0gaW5uZXJXcmFwcGVyU3RyICsgY29udGFpbmVyU3RyICsgc2xpZGVTdHI7XG5cbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSgnQG1lZGlhIChtaW4td2lkdGg6ICcgKyBicCAvIDE2ICsgJ2VtKSB7JyArIHN0ciArICd9Jywgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgIGlmIChjYXJvdXNlbCAmJiAhZGlzYWJsZSkge1xuICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm0oKTtcbiAgICB9XG5cblxuICAgIC8vID09IG1zSW5pdCA9PVxuICAgIC8vIGZvciBJRTEwXG4gICAgaWYgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzKSB7XG4gICAgICBhZGRDbGFzcyhvdXRlcldyYXBwZXIsICdtcy10b3VjaCcpO1xuICAgICAgYWRkRXZlbnRzKG91dGVyV3JhcHBlciwgeydzY3JvbGwnOiBpZTEwU2Nyb2xsfSk7XG4gICAgICBzZXRTbmFwSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiBcbiAgICAvLyA9PSBuYXZJbml0ID09XG4gICAgaWYgKGhhc05hdikge1xuICAgICAgdmFyIGluaXRJbmRleCA9ICFjYXJvdXNlbCA/IDAgOiBjbG9uZUNvdW50O1xuICAgICAgLy8gY3VzdG9taXplZCBuYXZcbiAgICAgIC8vIHdpbGwgbm90IGhpZGUgdGhlIG5hdnMgaW4gY2FzZSB0aGV5J3JlIHRodW1ibmFpbHNcbiAgICAgIGlmIChuYXZDb250YWluZXIpIHtcbiAgICAgICAgc2V0QXR0cnMobmF2Q29udGFpbmVyLCB7J2FyaWEtbGFiZWwnOiAnQ2Fyb3VzZWwgUGFnaW5hdGlvbid9KTtcbiAgICAgICAgbmF2SXRlbXMgPSBuYXZDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChuYXZJdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAgICAgJ2RhdGEtbmF2JzogaW5kZXgsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLFxuICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBzbGlkZUl0ZW1zW2luaXRJbmRleCArIGluZGV4XS5pZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBpZiAobmF2QW5pbWF0aW9uT3V0KSB7XG4gICAgICAgICAgLy8gICBhZGRDbGFzcyhpdGVtLCBuYXZBbmltYXRpb25PdXQpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlZCBuYXYgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmF2SHRtbCA9ICcnO1xuICAgICAgICAgICAgLy8gY2xhc3NTdHIgPSBuYXZBbmltYXRpb25PdXQgPyAnY2xhc3M9XCInICsgbmF2QW5pbWF0aW9uT3V0ICsgJ1wiJyA6ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlQ291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGhpZGUgbmF2IGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgICAvLyBuYXZIdG1sICs9ICc8YnV0dG9uICcgKyBjbGFzc1N0ciArICcgZGF0YS1uYXY9XCInICsgaSArJ1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKyAnLWl0ZW0nICsgaSArJ1wiIGhpZGRlbiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+JztcbiAgICAgICAgICBuYXZIdG1sICs9ICc8YnV0dG9uIGRhdGEtbmF2PVwiJyArIGkgKydcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUl0ZW1zW2luaXRJbmRleCArIGldLmlkICsnXCIgaGlkZGVuIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nO1xuICAgICAgICB9XG4gICAgICAgIG5hdkh0bWwgPSAnPGRpdiBjbGFzcz1cInRucy1uYXZcIiBhcmlhLWxhYmVsPVwiQ2Fyb3VzZWwgUGFnaW5hdGlvblwiPicgKyBuYXZIdG1sICsgJzwvZGl2Pic7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBuYXZIdG1sKTtcblxuICAgICAgICBuYXZDb250YWluZXIgPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignLnRucy1uYXYnKTtcbiAgICAgICAgbmF2SXRlbXMgPSBuYXZDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICAgICAgdXBkYXRlTmF2VmlzaWJpbGl0eSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgdHJhbnNpdGlvblxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikge1xuICAgICAgICB2YXIgcHJlZml4ID0gVFJBTlNJVElPTkRVUkFUSU9OLnN1YnN0cmluZygwLCBUUkFOU0lUSU9ORFVSQVRJT04ubGVuZ3RoIC0gMTgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBzdHIgPSAndHJhbnNpdGlvbjogYWxsICcgKyBzcGVlZCAvIDEwMDAgKyAncyc7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIHN0ciA9ICctJyArIHByZWZpeCArICctJyArIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICdbYXJpYS1jb250cm9sc149JyArIHNsaWRlSWQgKyAnLWl0ZW1dJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRycyhuYXZJdGVtc1swXSwgeyd0YWJpbmRleCc6ICcwJywgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZSd9KTtcbiAgICAgIGFkZENsYXNzKG5hdkl0ZW1zWzBdLCBuYXZBY3RpdmVDbGFzcyk7XG4gICAgICAvLyBpZiAobmF2QW5pbWF0aW9uT3V0KSB7XG4gICAgICAvLyAgIHJlbW92ZUNsYXNzKG5hdkl0ZW1zWzBdLCBuYXZBbmltYXRpb25PdXQpO1xuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKG5hdkFuaW1hdGlvbkluKSB7XG4gICAgICAvLyAgIGFkZENsYXNzKG5hdkl0ZW1zWzBdLCBuYXZBbmltYXRpb25Jbik7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGFkZCBldmVudHNcbiAgICAgIGFkZEV2ZW50cyhuYXZDb250YWluZXIsIG5hdkV2ZW50cyk7XG5cbiAgICAgIGlmICghbmF2KSB7IGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICB9XG5cblxuICAgIC8vID09IGF1dG9wbGF5SW5pdCA9PVxuICAgIGlmIChoYXNBdXRvcGxheSkge1xuICAgICAgdmFyIHR4dCA9IGF1dG9wbGF5ID8gJ3N0b3AnIDogJ3N0YXJ0JztcbiAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikge1xuICAgICAgICBzZXRBdHRycyhhdXRvcGxheUJ1dHRvbiwgeydkYXRhLWFjdGlvbic6IHR4dH0pO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmF1dG9wbGF5QnV0dG9uT3V0cHV0KSB7XG4gICAgICAgIGlubmVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgJzxidXR0b24gZGF0YS1hY3Rpb249XCInICsgdHh0ICsgJ1wiIHR5cGU9XCJidXR0b25cIj4nICsgYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIHR4dCArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyBhdXRvcGxheVRleHRbMF0gKyAnPC9idXR0b24+Jyk7XG4gICAgICAgIGF1dG9wbGF5QnV0dG9uID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbl0nKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGV2ZW50XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgYWRkRXZlbnRzKGF1dG9wbGF5QnV0dG9uLCB7J2NsaWNrJzogdG9nZ2xlQW5pbWF0aW9ufSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXV0b3BsYXkpIHtcbiAgICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7XG4gICAgICAgICAgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydEFjdGlvbigpO1xuICAgICAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlKSB7IGFkZEV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTsgfVxuICAgICAgICBpZiAoYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpOyB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyA9PSBjb250cm9sc0luaXQgPT1cbiAgICBpZiAoaGFzQ29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBwcmV2QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMF07XG4gICAgICAgIG5leHRCdXR0b24gPSBjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlblsxXTtcbiAgICAgICAgc2V0QXR0cnMoY29udHJvbHNDb250YWluZXIsIHtcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdDYXJvdXNlbCBOYXZpZ2F0aW9uJyxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEF0dHJzKHByZXZCdXR0b24sIHsnZGF0YS1jb250cm9scycgOiAncHJldid9KTtcbiAgICAgICAgc2V0QXR0cnMobmV4dEJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICduZXh0J30pO1xuICAgICAgICBzZXRBdHRycyhjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlbiwge1xuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc2xpZGVJZCxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnPGRpdiBjbGFzcz1cInRucy1jb250cm9sc1wiIGFyaWEtbGFiZWw9XCJDYXJvdXNlbCBOYXZpZ2F0aW9uXCIgdGFiaW5kZXg9XCIwXCI+PGJ1dHRvbiBkYXRhLWNvbnRyb2xzPVwicHJldlwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKydcIiB0eXBlPVwiYnV0dG9uXCI+JyArIGNvbnRyb2xzVGV4dFswXSArICc8L2J1dHRvbj48YnV0dG9uIGRhdGEtY29udHJvbHM9XCJuZXh0XCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArJ1wiIHR5cGU9XCJidXR0b25cIj4nICsgY29udHJvbHNUZXh0WzFdICsgJzwvYnV0dG9uPjwvZGl2PicpO1xuXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtY29udHJvbHMnKTtcbiAgICAgICAgcHJldkJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBuZXh0QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMV07XG4gICAgICB9XG5cbiAgICAgIHByZXZJc0J1dHRvbiA9IGlzQnV0dG9uKHByZXZCdXR0b24pO1xuICAgICAgbmV4dElzQnV0dG9uID0gaXNCdXR0b24obmV4dEJ1dHRvbik7XG5cbiAgICAgIGlmICghbG9vcCkgeyBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7IH1cblxuICAgICAgLy8gYWRkIGV2ZW50c1xuICAgICAgYWRkRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7XG5cbiAgICAgIGlmICghY29udHJvbHMpIHsgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpOyB9XG4gICAgfVxuXG5cbiAgICBpZiAodG91Y2gpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyBhZGRFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuICAgIGlmIChhcnJvd0tleXMpIHsgYWRkRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cblxuXG4gICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykge1xuICAgICAgZXZlbnRzLm9uKCdvdXRlclJlc2l6ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2l6ZVRhc2tzKCk7XG4gICAgICAgIGV2ZW50cy5lbWl0KCdpbm5lckxvYWRlZCcsIGluZm8oKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnRzKHdpbiwgeydyZXNpemUnOiBvblJlc2l6ZX0pO1xuICAgICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykge1xuICAgICAgICBldmVudHMub24oJ2lubmVyTG9hZGVkJywgcnVuQXV0b0hlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGF6eUxvYWQoKTtcbiAgICBydW5BdXRvSGVpZ2h0KCk7XG4gICAgY2hlY2tGaXhlZFdpZHRoU2xpZGVDb3VudCgpO1xuXG4gICAgZXZlbnRzLm9uKCdpbmRleENoYW5nZWQnLCBhZGRpdGlvbmFsVXBkYXRlcyk7XG5cbiAgICBpZiAodHlwZW9mIG9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykgeyBvbkluaXQoaW5mbygpKTsgfVxuICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHsgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTsgfVxuXG4gICAgaWYgKGRpc2FibGUpIHsgZGlzYWJsZVNsaWRlcih0cnVlKTsgfVxuICB9KSgpO1xuXG5cblxuXG5cbi8vID09PSBPTiBSRVNJWkUgPT09XG4gIGZ1bmN0aW9uIG9uUmVzaXplIChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuXG4gICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVyKTtcbiAgICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHZwT3V0ZXIgIT09IG91dGVyV3JhcHBlci5jbGllbnRXaWR0aCkge1xuICAgICAgICByZXNpemVUYXNrcygpO1xuICAgICAgICBpZiAobmVzdGVkID09PSAnb3V0ZXInKSB7IFxuICAgICAgICAgIGV2ZW50cy5lbWl0KCdvdXRlclJlc2l6ZWQnLCBpbmZvKGUpKTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDApOyAvLyB1cGRhdGUgYWZ0ZXIgc3RvcCByZXNpemluZyBmb3IgMTAwIG1zXG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVUYXNrcyAoKSB7XG4gICAgdmFyIGJyZWFrcG9pbnRab25lVGVtID0gYnJlYWtwb2ludFpvbmUsXG4gICAgICAgIGluZGV4VGVtID0gaW5kZXgsIFxuICAgICAgICBpdGVtc1RlbSA9IGl0ZW1zLFxuICAgICAgICBmcmVlemVUZW0gPSBmcmVlemU7XG5cbiAgICB2cE91dGVyID0gb3V0ZXJXcmFwcGVyLmNsaWVudFdpZHRoO1xuICAgIHZwSW5uZXIgPSBpbm5lcldyYXBwZXIuY2xpZW50V2lkdGg7XG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7IGJyZWFrcG9pbnRab25lID0gZ2V0QnJlYWtwb2ludFpvbmUoKTsgfVxuXG5cbiAgICAvLyB0aGluZ3MgZG8gd2hlbiBicmVha3BvaW50IHpvbmUgY2hhbmdlXG4gICAgaWYgKGJyZWFrcG9pbnRab25lVGVtICE9PSBicmVha3BvaW50Wm9uZSB8fCBmaXhlZFdpZHRoKSB7XG4gICAgICB2YXIgc2xpZGVCeVRlbSA9IHNsaWRlQnksXG4gICAgICAgICAgYXJyb3dLZXlzVGVtID0gYXJyb3dLZXlzLFxuICAgICAgICAgIGF1dG9IZWlnaHRUZW0gPSBhdXRvSGVpZ2h0LFxuICAgICAgICAgIGZpeGVkV2lkdGhUZW0gPSBmaXhlZFdpZHRoLFxuICAgICAgICAgIGVkZ2VQYWRkaW5nVGVtID0gZWRnZVBhZGRpbmcsXG4gICAgICAgICAgZ3V0dGVyVGVtID0gZ3V0dGVyLFxuICAgICAgICAgIGRpc2FibGVUZW0gPSBkaXNhYmxlO1xuXG4gICAgICAvLyBnZXQgb3B0aW9ucyBmb3IgY3VycmVudCBicmVha3BvaW50IHpvbmVcbiAgICAgIHZhciBvcHRzID0gYnJlYWtwb2ludFpvbmUgPiAwID8gcmVzcG9uc2l2ZVticmVha3BvaW50c1ticmVha3BvaW50Wm9uZSAtIDFdXSA6IG9wdGlvbnM7XG5cbiAgICAgIC8vIHVwZGF0ZSB2YXJpYWJsZXNcbiAgICAgIGl0ZW1zID0gZ2V0T3B0aW9uKCdpdGVtcycpO1xuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpO1xuICAgICAgZGlzYWJsZSA9IGdldE9wdGlvbignZGlzYWJsZScpO1xuICAgICAgZnJlZXplID0gZGlzYWJsZSA/IHRydWUgOiBmcmVlemFibGUgPyBzbGlkZUNvdW50IDw9IGl0ZW1zIDogZmFsc2U7XG5cbiAgICAgIGlmIChpdGVtcyAhPT0gaXRlbXNUZW0pIHtcbiAgICAgICAgaW5kZXhNYXggPSBzbGlkZUNvdW50TmV3IC0gaXRlbXMgLSBpbmRleEFkanVzdDtcbiAgICAgICAgLy8gY2hlY2sgaW5kZXggYmVmb3JlIHRyYW5zZm9ybSBpbiBjYXNlXG4gICAgICAgIC8vIHNsaWRlciByZWFjaCB0aGUgcmlnaHQgZWRnZSB0aGVuIGl0ZW1zIGJlY29tZSBiaWdnZXJcbiAgICAgICAgdXBkYXRlSW5kZXgoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpc2FibGUgIT09IGRpc2FibGVUZW0pIHtcbiAgICAgICAgZGlzYWJsZVNsaWRlcihkaXNhYmxlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGZyZWV6ZSAhPT0gZnJlZXplVGVtICYmIGZyZWV6ZSkge1xuICAgICAgICAvLyByZXNldCBpbmRleCB0byBpbml0aWFsIHN0YXR1c1xuICAgICAgICBpbmRleCA9ICFjYXJvdXNlbCA/IDAgOiBjbG9uZUNvdW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoYnJlYWtwb2ludFpvbmVUZW0gIT09IGJyZWFrcG9pbnRab25lKSB7XG4gICAgICAgIHNwZWVkID0gb3B0cy5zcGVlZCB8fCBnZXRPcHRpb24oJ3NwZWVkJyk7XG4gICAgICAgIGVkZ2VQYWRkaW5nID0gb3B0cy5lZGdlUGFkZGluZyB8fCBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyk7XG4gICAgICAgIGd1dHRlciA9IG9wdHMuZ3V0dGVyIHx8IGdldE9wdGlvbignZ3V0dGVyJyk7XG5cbiAgICAgICAgZml4ZWRXaWR0aCA9IG9wdHMuZml4ZWRXaWR0aCB8fCBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKTtcbiAgICAgICAgaWYgKCFkaXNhYmxlICYmIGZpeGVkV2lkdGggIT09IGZpeGVkV2lkdGhUZW0pIHtcbiAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXV0b0hlaWdodCA9IGdldE9wdGlvbignYXV0b0hlaWdodCcpO1xuICAgICAgICBpZiAoYXV0b0hlaWdodCAhPT0gYXV0b0hlaWdodFRlbSkge1xuICAgICAgICAgIGlmICghYXV0b0hlaWdodCkgeyBpbm5lcldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJyc7IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcnJvd0tleXMgPSBmcmVlemUgPyBmYWxzZSA6IG9wdHMuYXJyb3dLZXlzIHx8IGdldE9wdGlvbignYXJyb3dLZXlzJyk7XG4gICAgICBpZiAoYXJyb3dLZXlzICE9PSBhcnJvd0tleXNUZW0pIHtcbiAgICAgICAgYXJyb3dLZXlzID9cbiAgICAgICAgICBhZGRFdmVudHMoZG9jLCBkb2NtZW50S2V5ZG93bkV2ZW50KSA6XG4gICAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNDb250cm9scykge1xuICAgICAgICB2YXIgY29udHJvbHNUZW0gPSBjb250cm9scyxcbiAgICAgICAgICAgIGNvbnRyb2xzVGV4dFRlbSA9IGNvbnRyb2xzVGV4dDtcbiAgICAgICAgY29udHJvbHMgPSBmcmVlemUgPyBmYWxzZSA6IG9wdHMuY29udHJvbHMgfHwgZ2V0T3B0aW9uKCdjb250cm9scycpO1xuICAgICAgICBjb250cm9sc1RleHQgPSBvcHRzLmNvbnRyb2xzVGV4dCB8fCBnZXRPcHRpb24oJ2NvbnRyb2xzVGV4dCcpO1xuXG4gICAgICAgIGlmIChjb250cm9scyAhPT0gY29udHJvbHNUZW0pIHtcbiAgICAgICAgICBjb250cm9scyA/XG4gICAgICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcikgOlxuICAgICAgICAgICAgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpOyBcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbHNUZXh0ICE9PSBjb250cm9sc1RleHRUZW0pIHtcbiAgICAgICAgICBwcmV2QnV0dG9uLmlubmVySFRNTCA9IGNvbnRyb2xzVGV4dFswXTtcbiAgICAgICAgICBuZXh0QnV0dG9uLmlubmVySFRNTCA9IGNvbnRyb2xzVGV4dFsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc05hdikge1xuICAgICAgICB2YXIgbmF2VGVtID0gbmF2O1xuICAgICAgICBuYXYgPSBmcmVlemUgPyBmYWxzZSA6IG9wdHMubmF2IHx8IGdldE9wdGlvbignbmF2Jyk7XG5cbiAgICAgICAgaWYgKG5hdiAhPT0gbmF2VGVtKSB7XG4gICAgICAgICAgaWYgKG5hdikge1xuICAgICAgICAgICAgc2hvd0VsZW1lbnQobmF2Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlkZUVsZW1lbnQobmF2Q29udGFpbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChoYXNUb3VjaCkge1xuICAgICAgICB2YXIgdG91Y2hUZW0gPSB0b3VjaDtcbiAgICAgICAgdG91Y2ggPSBmcmVlemUgPyBmYWxzZSA6IG9wdHMudG91Y2ggfHwgZ2V0T3B0aW9uKCd0b3VjaCcpO1xuXG4gICAgICAgIGlmICh0b3VjaCAhPT0gdG91Y2hUZW0gJiYgY2Fyb3VzZWwpIHtcbiAgICAgICAgICB0b3VjaCA/XG4gICAgICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cykgOlxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaGFzTW91c2VEcmFnKSB7XG4gICAgICAgIHZhciBtb3VzZURyYWdUZW0gPSBtb3VzZURyYWc7XG4gICAgICAgIG1vdXNlRHJhZyA9IGZyZWV6ZSA/IGZhbHNlIDogb3B0cy5tb3VzZURyYWcgfHwgZ2V0T3B0aW9uKCdtb3VzZURyYWcnKTtcblxuICAgICAgICBpZiAobW91c2VEcmFnICE9PSBtb3VzZURyYWdUZW0gJiYgY2Fyb3VzZWwpIHtcbiAgICAgICAgICBtb3VzZURyYWcgP1xuICAgICAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cykgOlxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChoYXNBdXRvcGxheSkge1xuICAgICAgICB2YXIgYXV0b3BsYXlUZW0gPSBhdXRvcGxheSxcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZVRlbSA9IGF1dG9wbGF5SG92ZXJQYXVzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0gPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5LFxuICAgICAgICAgICAgYXV0b3BsYXlUZXh0VGVtID0gYXV0b3BsYXlUZXh0O1xuXG4gICAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgICBhdXRvcGxheSA9IGF1dG9wbGF5SG92ZXJQYXVzZSA9IGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdXRvcGxheSA9IG9wdHMuYXV0b3BsYXkgfHwgZ2V0T3B0aW9uKCdhdXRvcGxheScpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlID0gb3B0cy5hdXRvcGxheUhvdmVyUGF1c2UgfHwgZ2V0T3B0aW9uKCdhdXRvcGxheUhvdmVyUGF1c2UnKTtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBvcHRzLmF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgfHwgZ2V0T3B0aW9uKCdhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA9IGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXlUZXh0ID0gb3B0cy5hdXRvcGxheVRleHQgfHwgZ2V0T3B0aW9uKCdhdXRvcGxheVRleHQnKTtcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gb3B0cy5hdXRvcGxheVRpbWVvdXQgfHwgZ2V0T3B0aW9uKCdhdXRvcGxheVRpbWVvdXQnKTtcblxuICAgICAgICBpZiAoYXV0b3BsYXkgIT09IGF1dG9wbGF5VGVtKSB7XG4gICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgc2hvd0VsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGluZykgeyBzdGFydEFjdGlvbigpOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyBoaWRlRWxlbWVudChhdXRvcGxheUJ1dHRvbik7IH1cbiAgICAgICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEFjdGlvbigpOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvcGxheUhvdmVyUGF1c2UgIT09IGF1dG9wbGF5SG92ZXJQYXVzZVRlbSkge1xuICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA/XG4gICAgICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cykgOlxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgaG92ZXJFdmVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ICE9PSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtKSB7XG4gICAgICAgICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA/XG4gICAgICAgICAgICBhZGRFdmVudHMoZG9jLCB2aXNpYmlsaXR5RXZlbnQpIDpcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhkb2MsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uICYmIGF1dG9wbGF5VGV4dCAhPT0gYXV0b3BsYXlUZXh0VGVtKSB7XG4gICAgICAgICAgdmFyIGkgPSBhdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgICAgICBodG1sID0gYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICBsZW4gPSBodG1sLmxlbmd0aCAtIGF1dG9wbGF5VGV4dFRlbVtpXS5sZW5ndGg7XG4gICAgICAgICAgaWYgKGh0bWwuc3Vic3RyaW5nKGxlbikgPT09IGF1dG9wbGF5VGV4dFRlbVtpXSkge1xuICAgICAgICAgICAgYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MID0gaHRtbC5zdWJzdHJpbmcoMCwgbGVuKSArIGF1dG9wbGF5VGV4dFtpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSUU4XG4gICAgICAvLyAjIyB1cGRhdGUgaW5uZXIgd3JhcHBlciwgY29udGFpbmVyLCBzbGlkZXMgaWYgbmVlZGVkXG4gICAgICAvLyBzZXQgaW5saW5lIHN0eWxlcyBmb3IgaW5uZXIgd3JhcHBlciAmIGNvbnRhaW5lclxuICAgICAgLy8gaW5zZXJ0IHN0eWxlc2hlZXQgKG9uZSBsaW5lKSBmb3Igc2xpZGVzIG9ubHkgKHNpbmNlIHNsaWRlcyBhcmUgbWFueSlcbiAgICAgIGlmICghQ1NTTVEpIHtcbiAgICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgICAgaWYgKGVkZ2VQYWRkaW5nICE9PSBlZGdlUGFkZGluZ1RlbSB8fCBndXR0ZXIgIT09IGd1dHRlclRlbSkge1xuICAgICAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCAmJiAoZml4ZWRXaWR0aCAhPT0gZml4ZWRXaWR0aFRlbSB8fCBndXR0ZXIgIT09IGd1dHRlclRlbSB8fCBpdGVtcyAhPT0gaXRlbXNUZW0pKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgICAgLy8gYWx3YXlzIG5lZWQgdG8gZ2V0IHdpZHRoIHByb3BlcnR5XG4gICAgICAgIHZhciBzdHIgPSBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICAgIGlmIChndXR0ZXIgIT09IGd1dHRlclRlbSkge1xuICAgICAgICAgIHN0ciArPSBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgbGluZSBhbmRcbiAgICAgICAgLy8gYWRkIGl0IGFnYWluXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNoZWV0LnJlbW92ZVJ1bGUoZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpIC0gMSk7XG4gICAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3aWxsIGRvIHRyYW5zZm9ybSBsYXRlciBpZiBpbmRleCAhPT0gaW5kZXhUZW1cbiAgICAgICAgLy8gbWFrZSBzdXJlIGRvVHJhbnNmb3JtIHdpbGwgb25seSBydW4gb25jZVxuICAgICAgICBpZiAoIWZpeGVkV2lkdGggJiYgaW5kZXggPT09IGluZGV4VGVtKSB7IGRvVHJhbnNmb3JtKDApOyB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gaW5kZXhUZW0pIHsgXG4gICAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuICAgICAgICBkb1RyYW5zZm9ybSgwKTsgXG4gICAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtcyAhPT0gaXRlbXNUZW0pIHsgXG4gICAgICAgIGFkZGl0aW9uYWxVcGRhdGVzKCk7XG4gICAgICAgIHJ1bkF1dG9IZWlnaHQoKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpIHsgc2V0U25hcEludGVydmFsKCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGluZ3MgYWx3YXlzIGRvIHJlZ2FyZGxlc3Mgb2YgYnJlYWtwb2ludCB6b25lIGNoYW5naW5nXG4gICAgaWYgKCFob3Jpem9udGFsICYmICFkaXNhYmxlKSB7XG4gICAgICBnZXRTbGlkZU9mZnNldFRvcHMoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7XG4gICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIGNoZWNrRml4ZWRXaWR0aFNsaWRlQ291bnQoKTtcbiAgICAvLyBhdXRvIGhlaWdodFxuICAgIHJ1bkF1dG9IZWlnaHQoKTtcbiAgfVxuXG5cblxuXG5cbiAgLy8gPT09IElOSVRJQUxJWkFUSU9OIEZVTkNUSU9OUyA9PT0gLy9cbiAgZnVuY3Rpb24gZ2V0QnJlYWtwb2ludFpvbmUgKCkge1xuICAgIGJyZWFrcG9pbnRab25lID0gMDtcbiAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKGJwLCBpKSB7XG4gICAgICBpZiAodnBPdXRlciA+PSBicCkgeyBicmVha3BvaW50Wm9uZSA9IGkgKyBicmVha3BvaW50Wm9uZUFkanVzdDsgfVxuICAgIH0pO1xuICAgIHJldHVybiBicmVha3BvaW50Wm9uZTtcbiAgfVxuXG4gIC8vIChzbGlkZUJ5LCBpbmRleE1pbiwgaW5kZXhNYXgpID0+IGluZGV4XG4gIHZhciB1cGRhdGVJbmRleCA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxvb3AgPyBcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlZnRFZGdlID0gaW5kZXhNaW4gKyBzbGlkZUJ5LCByaWdodEVkZ2UgPSBpbmRleE1heCAtIHNsaWRlQnk7XG5cbiAgICAgICAgdmFyIGd0ID0gZ3V0dGVyID8gZ3V0dGVyIDogMDtcbiAgICAgICAgaWYgKGZpeGVkV2lkdGggJiYgdnBPdXRlciUoZml4ZWRXaWR0aCArIGd0KSA+IGd0KSB7IHJpZ2h0RWRnZSAtPSAxOyB9XG5cbiAgICAgICAgaWYgKGluZGV4ID4gcmlnaHRFZGdlKSB7XG4gICAgICAgICAgd2hpbGUoaW5kZXggPj0gbGVmdEVkZ2UgKyBzbGlkZUNvdW50KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgfSBlbHNlIGlmKGluZGV4IDwgbGVmdEVkZ2UpIHtcbiAgICAgICAgICB3aGlsZShpbmRleCA8PSByaWdodEVkZ2UgLSBzbGlkZUNvdW50KSB7IGluZGV4ICs9IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgfVxuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiAoKSB7IGluZGV4ID0gTWF0aC5tYXgoaW5kZXhNaW4sIE1hdGgubWluKGluZGV4TWF4LCBpbmRleCkpOyB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRml4ZWRXaWR0aFNsaWRlQ291bnQgKCkge1xuICAgIGlmIChmaXhlZFdpZHRoICYmIGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcblxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBpZiAoIWhhc0NsYXNzKHNsaWRlSXRlbXNbMF0sIHN0cikpIHtcbiAgICAgICAgICAvLyByZW1vdmUgZWRnZSBwYWRkaW5nIGZyb20gaW5uZXIgd3JhcHBlclxuICAgICAgICAgIGlmIChlZGdlUGFkZGluZykgeyBpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luID0gJzAnOyB9XG4gICAgICAgICAgLy8gYWRkIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGNsb25lQ291bnQ7IGktLTspIHtcbiAgICAgICAgICAgIGFkZENsYXNzKHNsaWRlSXRlbXNbaV0sIHN0cik7XG4gICAgICAgICAgICBhZGRDbGFzcyhzbGlkZUl0ZW1zW3NsaWRlQ291bnROZXcgLSBpIC0gMV0sIHN0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXN0b3JlIGVkZ2UgcGFkZGluZyBmb3IgaW5uZXIgd3JhcHBlclxuICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICBpZiAodnBPdXRlciA8PSAoZml4ZWRXaWR0aCArIGd1dHRlcikpIHtcbiAgICAgICAgICAgIGlmIChpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luICE9PSAnMHB4JykgeyBpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luID0gJzAnOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNDbGFzcyhzbGlkZUl0ZW1zWzBdLCBzdHIpKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGNsb25lQ291bnQ7IGktLTspIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbaV0sIHN0cik7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZUl0ZW1zW3NsaWRlQ291bnROZXcgLSBpIC0gMV0sIHN0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZVNsaWRlciAoZGlzYWJsZSkge1xuICAgIHZhciBsZW4gPSBzbGlkZUl0ZW1zLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZShjbGFzc0NvbnRhaW5lci5zdWJzdHJpbmcoMSksICcnKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZSA9ICcnO1xuICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgICBpZiAoY2Fyb3VzZWwpIHsgaGlkZUVsZW1lbnQoc2xpZGVJdGVtc1tqXSk7IH1cbiAgICAgICAgICBoaWRlRWxlbWVudChzbGlkZUl0ZW1zW2xlbiAtIGogLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdmVydGljYWwgc2xpZGVyXG4gICAgICBpZiAoIWhvcml6b250YWwgfHwgIWNhcm91c2VsKSB7IGlubmVyV3JhcHBlci5zdHlsZSA9ICcnOyB9XG5cbiAgICAgIC8vIGdhbGxlcnlcbiAgICAgIGlmICghY2Fyb3VzZWwpIHsgXG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleDsgaSA8IGluZGV4ICsgc2xpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgICAgIGl0ZW0uc3R5bGUgPSAnJztcbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoZWV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IGNsYXNzQ29udGFpbmVyO1xuXG4gICAgICAvLyB2ZXJ0aWNhbCBzbGlkZXI6IGdldCBvZmZzZXRUb3BzIGJlZm9yZSBjb250YWluZXIgdHJhbnNmb3JtXG4gICAgICBpZiAoIWhvcml6b250YWwpIHsgZ2V0U2xpZGVPZmZzZXRUb3BzKCk7IH1cblxuICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm0oKTtcbiAgICAgIGlmIChsb29wKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBjbG9uZUNvdW50OyBqLS07KSB7XG4gICAgICAgICAgaWYgKGNhcm91c2VsKSB7IHNob3dFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgICAgc2hvd0VsZW1lbnQoc2xpZGVJdGVtc1tsZW4gLSBqIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGdhbGxlcnlcbiAgICAgIGlmICghY2Fyb3VzZWwpIHsgXG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleDsgaSA8IGluZGV4ICsgc2xpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldLFxuICAgICAgICAgICAgICBjbGFzc04gPSBpIDwgaW5kZXggKyBpdGVtcyA/IGFuaW1hdGVJbiA6IGFuaW1hdGVOb3JtYWw7XG4gICAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgICBhZGRDbGFzcyhpdGVtLCBjbGFzc04pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdmVyUGF1c2UgKCkge1xuICAgIGlmIChhbmltYXRpbmcpIHsgXG4gICAgICBzdG9wQWN0aW9uKCk7IFxuICAgICAgYXV0b3BsYXlIb3ZlclN0b3BwZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0UmVzdGFydCAoKSB7XG4gICAgaWYgKCFhbmltYXRpbmcgJiYgYXV0b3BsYXlIb3ZlclN0b3BwZWQpIHsgXG4gICAgICBzdGFydEFjdGlvbigpOyBcbiAgICAgIGF1dG9wbGF5SG92ZXJTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gbGF6eWxvYWRcbiAgZnVuY3Rpb24gbGF6eUxvYWQgKCkge1xuICAgIGlmIChsYXp5bG9hZCAmJiAhZGlzYWJsZSkge1xuICAgICAgdmFyIGkgPSBpbmRleCwgXG4gICAgICAgICAgbGVuID0gaW5kZXggKyBpdGVtcztcbiAgICAgICAgICBcbiAgICAgIGlmIChlZGdlUGFkZGluZykge1xuICAgICAgICBpIC09MTtcbiAgICAgICAgbGVuICs9MTtcbiAgICAgIH1cblxuICAgICAgZm9yKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChzbGlkZUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy50bnMtbGF6eS1pbWcnKSwgZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgIC8vIHN0b3AgcHJvcGFnYXRpb25sIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gY29udGFpbmVyXG4gICAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IGZ1bmN0aW9uIChlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH07XG4gICAgICAgICAgYWRkRXZlbnRzKGltZywgZXZlKTtcblxuICAgICAgICAgIGlmICghaGFzQ2xhc3MoaW1nLCAnbG9hZGVkJykpIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBnZXRBdHRyKGltZywgJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhpbWcsICdsb2FkZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrIGlmIGFsbCB2aXNpYmxlIGltYWdlcyBhcmUgbG9hZGVkXG4gIC8vIGFuZCB1cGRhdGUgY29udGFpbmVyIGhlaWdodCBpZiBpdCdzIGRvbmVcbiAgZnVuY3Rpb24gcnVuQXV0b0hlaWdodCAoKSB7XG4gICAgaWYgKGF1dG9IZWlnaHQgJiYgIWRpc2FibGUpIHtcbiAgICAgIC8vIGdldCBhbGwgaW1hZ2VzIGluc2lkZSB2aXNpYmxlIHNsaWRlIGl0ZW1zXG4gICAgICB2YXIgaW1hZ2VzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSBpbmRleDsgaSA8IGluZGV4ICsgaXRlbXM7IGkrKykge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoc2xpZGVJdGVtc1tpXS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKSwgZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgIGltYWdlcy5wdXNoKGltZyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQoKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0ltYWdlc0xvYWRlZChpbWFnZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSW1hZ2VzTG9hZGVkIChpbWFnZXMpIHtcbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nLCBpbmRleCkge1xuICAgICAgaWYgKGltYWdlTG9hZGVkKGltZykpIHsgaW1hZ2VzLnNwbGljZShpbmRleCwgMSk7IH1cbiAgICB9KTtcblxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IFxuICAgICAgICBjaGVja0ltYWdlc0xvYWRlZChpbWFnZXMpOyBcbiAgICAgIH0sIDE2KTtcbiAgICB9XG4gIH0gXG5cbiAgZnVuY3Rpb24gYWRkaXRpb25hbFVwZGF0ZXMgKCkge1xuICAgIGxhenlMb2FkKCk7IFxuICAgIHVwZGF0ZVNsaWRlU3RhdHVzKCk7XG4gICAgdXBkYXRlQ29udHJvbHNTdGF0dXMoKTtcbiAgICB1cGRhdGVOYXZWaXNpYmlsaXR5KCk7XG4gICAgdXBkYXRlTmF2U3RhdHVzKCk7XG4gIH1cblxuXG4gIC8vIHVwZGF0ZSBpbm5lciB3cmFwcGVyIGhlaWdodFxuICAvLyAxLiBnZXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIHZpc2libGUgc2xpZGVzXG4gIC8vIDIuIHNldCB0cmFuc2l0aW9uRHVyYXRpb24gdG8gc3BlZWRcbiAgLy8gMy4gdXBkYXRlIGlubmVyIHdyYXBwZXIgaGVpZ2h0IHRvIG1heC1oZWlnaHRcbiAgLy8gNC4gc2V0IHRyYW5zaXRpb25EdXJhdGlvbiB0byAwcyBhZnRlciB0cmFuc2l0aW9uIGRvbmVcbiAgZnVuY3Rpb24gdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0ICgpIHtcbiAgICB2YXIgaGVpZ2h0cyA9IFtdLCBtYXhIZWlnaHQ7XG4gICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBpdGVtczsgaSsrKSB7XG4gICAgICBoZWlnaHRzLnB1c2goc2xpZGVJdGVtc1tpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcblxuICAgIGlmIChpbm5lcldyYXBwZXIuc3R5bGUuaGVpZ2h0ICE9PSBtYXhIZWlnaHQpIHtcbiAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2V0RHVyYXRpb25zKHNwZWVkKTsgfVxuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AgZWRnZSBvZiB0aGUgZmlyc3Qgc2xpZGUgdG8gZWFjaCBzbGlkZVxuICAvLyAoaW5pdCkgPT4gc2xpZGVPZmZzZXRUb3BzXG4gIGZ1bmN0aW9uIGdldFNsaWRlT2Zmc2V0VG9wcyAoKSB7XG4gICAgc2xpZGVPZmZzZXRUb3BzID0gWzBdO1xuICAgIHZhciB0b3BGaXJzdCA9IHNsaWRlSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBhdHRyO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc2xpZGVDb3VudE5ldzsgaSsrKSB7XG4gICAgICBhdHRyID0gc2xpZGVJdGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBzbGlkZU9mZnNldFRvcHMucHVzaChhdHRyIC0gdG9wRmlyc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBzbmFwSW50ZXJ2YWwgKGZvciBJRTEwKVxuICBmdW5jdGlvbiBzZXRTbmFwSW50ZXJ2YWwgKCkge1xuICAgIG91dGVyV3JhcHBlci5zdHlsZS5tc1Njcm9sbFNuYXBQb2ludHNYID0gJ3NuYXBJbnRlcnZhbCgwJSwgJyArICgxMDAgLyBpdGVtcykgKyAnJSknO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNsaWRlXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlU3RhdHVzICgpIHtcbiAgICBmb3IgKHZhciBpID0gc2xpZGVDb3VudE5ldzsgaS0tOykge1xuICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgLy8gdmlzaWJsZSBzbGlkZXNcbiAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBpbmRleCArIGl0ZW1zKSB7XG4gICAgICAgIGlmIChoYXNBdHRyKGl0ZW0sICd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgc2V0QXR0cnMoaXRlbSwgeydhcmlhLWhpZGRlbic6ICdmYWxzZSd9KTtcbiAgICAgICAgICByZW1vdmVBdHRycyhpdGVtLCBbJ3RhYmluZGV4J10pO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIHNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAvLyBoaWRkZW4gc2xpZGVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc0F0dHIoaXRlbSwgJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0NsYXNzKGl0ZW0sIHNsaWRlQWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgdGFiaW5kZXggJiBhcmlhLXNlbGVjdGVkIG9uIE5hdlxuICBmdW5jdGlvbiB1cGRhdGVOYXZTdGF0dXMgKCkge1xuICAgIC8vIGdldCBjdXJyZW50IG5hdlxuICAgIGlmIChuYXYpIHtcbiAgICAgIG5hdkN1cnJlbnRJbmRleCA9IG5hdkNsaWNrZWQgIT09IC0xID8gbmF2Q2xpY2tlZCA6IChpbmRleCAtIGluZGV4QWRqdXN0KSVzbGlkZUNvdW50O1xuICAgICAgbmF2Q2xpY2tlZCA9IC0xO1xuXG4gICAgICBpZiAobmF2Q3VycmVudEluZGV4ICE9PSBuYXZDdXJyZW50SW5kZXhDYWNoZWQpIHtcbiAgICAgICAgdmFyIG5hdlByZXYgPSBuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhDYWNoZWRdLFxuICAgICAgICAgICAgbmF2Q3VycmVudCA9IG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF07XG5cbiAgICAgICAgc2V0QXR0cnMobmF2UHJldiwge1xuICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRBdHRycyhuYXZDdXJyZW50LCB7XG4gICAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnXG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVDbGFzcyhuYXZQcmV2LCBuYXZBY3RpdmVDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzKG5hdkN1cnJlbnQsIG5hdkFjdGl2ZUNsYXNzKTtcblxuICAgICAgICAvLyBpZiAobmF2QW5pbWF0aW9uT3V0KSB7XG4gICAgICAgIC8vICAgcmVtb3ZlQ2xhc3MobmF2UHJldiwgbmF2QW5pbWF0aW9uSW4pO1xuICAgICAgICAvLyAgIGFkZENsYXNzKG5hdlByZXYsIG5hdkFuaW1hdGlvbk91dCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKG5hdkFuaW1hdGlvbkluKSB7XG4gICAgICAgIC8vICAgcmVtb3ZlQ2xhc3MobmF2Q3VycmVudCwgbmF2QW5pbWF0aW9uT3V0KTtcbiAgICAgICAgLy8gICBhZGRDbGFzcyhuYXZDdXJyZW50LCBuYXZBbmltYXRpb25Jbik7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0J1dHRvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FyaWFEaXNhYmxlZCAoZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc0VuYWJsZUVsZW1lbnQgKGlzQnV0dG9uLCBlbCwgdmFsKSB7XG4gICAgaWYgKGlzQnV0dG9uKSB7XG4gICAgICBlbC5kaXNhYmxlZCA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCAnZGlzYWJsZWQnIHRvIHRydWUgb24gY29udHJvbHMgd2hlbiByZWFjaCB0aGUgZWRnZXNcbiAgZnVuY3Rpb24gdXBkYXRlQ29udHJvbHNTdGF0dXMgKCkge1xuICAgIGlmICghY29udHJvbHMgfHwgbG9vcCkgeyByZXR1cm47IH1cblxuICAgIHZhciBwcmV2RGlzYWJsZWQgPSAocHJldklzQnV0dG9uKSA/IHByZXZCdXR0b24uZGlzYWJsZWQgOiBpc0FyaWFEaXNhYmxlZChwcmV2QnV0dG9uKSxcbiAgICAgICAgbmV4dERpc2FibGVkID0gKG5leHRJc0J1dHRvbikgPyBuZXh0QnV0dG9uLmRpc2FibGVkIDogaXNBcmlhRGlzYWJsZWQobmV4dEJ1dHRvbiksXG4gICAgICAgIGRpc2FibGVQcmV2ID0gKGluZGV4ID09PSBpbmRleE1pbikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVOZXh0ID0gKCFyZXdpbmQgJiYgaW5kZXggPT09IGluZGV4TWF4KSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChkaXNhYmxlUHJldiAmJiAhcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghZGlzYWJsZVByZXYgJiYgcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZU5leHQgJiYgIW5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVOZXh0ICYmIG5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZHVyYXRpb25cbiAgZnVuY3Rpb24gc2V0RHVyYXRpb25zIChkdXJhdGlvbiwgdGFyZ2V0KSB7XG4gICAgZHVyYXRpb24gPSAhZHVyYXRpb24gPyAnJyA6IGR1cmF0aW9uIC8gMTAwMCArICdzJztcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgY29udGFpbmVyO1xuICAgIHRhcmdldC5zdHlsZVtUUkFOU0lUSU9ORFVSQVRJT05dID0gZHVyYXRpb247XG5cbiAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICB0YXJnZXQuc3R5bGVbQU5JTUFUSU9ORFVSQVRJT05dID0gZHVyYXRpb247XG4gICAgfVxuICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlW1RSQU5TSVRJT05EVVJBVElPTl0gPSBkdXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZSAoKSB7XG4gICAgdmFyIHZhbDtcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgdmFsID0gLSAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBpbmRleCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGVub21pbmF0b3IgPSBUUkFOU0ZPUk0gPyBzbGlkZUNvdW50TmV3IDogaXRlbXM7XG4gICAgICAgIHZhbCA9IC0gaW5kZXggKiAxMDAgLyBkZW5vbWluYXRvciArICclJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gLSBzbGlkZU9mZnNldFRvcHNbaW5kZXhdICsgJ3B4JztcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtICh2YWwpIHtcbiAgICBpZiAoIXZhbCkgeyB2YWwgPSBnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZSgpOyB9XG4gICAgY29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybUF0dHJdID0gdHJhbnNmb3JtUHJlZml4ICsgdmFsICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGVTbGlkZSAobnVtYmVyLCBjbGFzc091dCwgY2xhc3NJbiwgaXNPdXQpIHtcbiAgICBmb3IgKHZhciBpID0gbnVtYmVyLCBsID0gbnVtYmVyICsgaXRlbXM7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcblxuICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICBpZiAoIWlzT3V0KSB7IGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7IH1cblxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzZXREdXJhdGlvbnMoc3BlZWQsIGl0ZW0pOyB9XG4gICAgICBpZiAoYW5pbWF0ZURlbGF5ICYmIFRSQU5TSVRJT05ERUxBWSkge1xuICAgICAgICBpdGVtLnN0eWxlW1RSQU5TSVRJT05ERUxBWV0gPSBpdGVtLnN0eWxlW0FOSU1BVElPTkRFTEFZXSA9IGFuaW1hdGVEZWxheSAqIChpIC0gbnVtYmVyKSAvIDEwMDAgKyAncyc7XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyhpdGVtLCBjbGFzc091dCk7XG4gICAgICBhZGRDbGFzcyhpdGVtLCBjbGFzc0luKTtcbiAgICAgIFxuICAgICAgaWYgKGlzT3V0KSB7IHNsaWRlSXRlbXNPdXQucHVzaChpdGVtKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG1ha2UgdHJhbnNmZXIgYWZ0ZXIgY2xpY2svZHJhZzpcbiAgLy8gMS4gY2hhbmdlICd0cmFuc2Zvcm0nIHByb3BlcnR5IGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gIC8vIDIuIGNoYW5nZSAnbGVmdCcgcHJvcGVydHkgZm9yIGxlZ2FjeSBicm93c2Vyc1xuICB2YXIgdHJhbnNmb3JtQ29yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhcm91c2VsID9cbiAgICAgIGZ1bmN0aW9uIChkdXJhdGlvbiwgZGlzdGFuY2UpIHtcbiAgICAgICAgaWYgKCFkaXN0YW5jZSkgeyBkaXN0YW5jZSA9IGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCk7IH1cbiAgICAgICAgLy8gY29uc3RyYWluIHRoZSBkaXN0YW5jZSB3aGVuIG5vbi1sb29wIG5vLWVkZ2VQYWRkaW5nIGZpeGVkV2lkdGggcmVhY2hlcyB0aGUgcmlnaHQgZWRnZVxuICAgICAgICBpZiAoaGFzUmlnaHREZWFkWm9uZSAmJiBpbmRleCA9PT0gaW5kZXhNYXgpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmlnaHRFZGdlID0gVFJBTlNGT1JNID8gXG4gICAgICAgICAgICAgIC0gKChzbGlkZUNvdW50TmV3IC0gaXRlbXMpIC8gc2xpZGVDb3VudE5ldykgKiAxMDAgOiBcbiAgICAgICAgICAgICAgLSAoc2xpZGVDb3VudE5ldyAvIGl0ZW1zIC0gMSkgKiAxMDA7IFxuICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5tYXgocGFyc2VGbG9hdChkaXN0YW5jZSksIGNvbnRhaW5lclJpZ2h0RWRnZSkgKyAnJSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OIHx8ICFkdXJhdGlvbikge1xuICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKGRpc3RhbmNlKTtcbiAgICAgICAgICBpZiAoc3BlZWQgPT09IDApIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1RyYW5zZm9ybShjb250YWluZXIsIHRyYW5zZm9ybUF0dHIsIHRyYW5zZm9ybVByZWZpeCwgdHJhbnNmb3JtUG9zdGZpeCwgZGlzdGFuY2UsIHNwZWVkLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFob3Jpem9udGFsKSB7IHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7IH1cbiAgICAgIH0gOlxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzbGlkZUl0ZW1zT3V0ID0gW107XG5cbiAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBldmVbQU5JTUFUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgcmVtb3ZlRXZlbnRzKHNsaWRlSXRlbXNbaW5kZXhDYWNoZWRdLCBldmUpO1xuICAgICAgICBhZGRFdmVudHMoc2xpZGVJdGVtc1tpbmRleF0sIGV2ZSk7XG5cbiAgICAgICAgYW5pbWF0ZVNsaWRlKGluZGV4Q2FjaGVkLCBhbmltYXRlSW4sIGFuaW1hdGVPdXQsIHRydWUpO1xuICAgICAgICBhbmltYXRlU2xpZGUoaW5kZXgsIGFuaW1hdGVOb3JtYWwsIGFuaW1hdGVJbik7XG5cbiAgICAgICAgaWYgKCFUUkFOU0lUSU9ORU5EIHx8ICFBTklNQVRJT05FTkQgfHwgc3BlZWQgPT09IDApIHsgc2V0VGltZW91dChvblRyYW5zaXRpb25FbmQsIDApOyB9XG4gICAgICB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGRvVHJhbnNmb3JtIChkdXJhdGlvbiwgZGlzdGFuY2UpIHtcbiAgICBpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkgeyBkdXJhdGlvbiA9IHNwZWVkOyB9XG4gICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzZXREdXJhdGlvbnMoZHVyYXRpb24pOyB9XG4gICAgdHJhbnNmb3JtQ29yZShkdXJhdGlvbiwgZGlzdGFuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICBpZiAodXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0pIHsgdXBkYXRlSW5kZXgoKTsgfVxuICAgIGlmIChpbmRleCAhPT0gaW5kZXhDYWNoZWQpIHtcbiAgICAgIC8vIGV2ZW50c1xuICAgICAgZXZlbnRzLmVtaXQoJ2luZGV4Q2hhbmdlZCcsIGluZm8oKSk7XG4gICAgICBldmVudHMuZW1pdCgndHJhbnNpdGlvblN0YXJ0JywgaW5mbygpKTtcblxuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICBkb1RyYW5zZm9ybSgpO1xuICAgIH1cblxuICB9XG5cbiAgLypcbiAgICogVHJhbnNmZXIgcHJlZml4ZWQgcHJvcGVydGllcyB0byB0aGUgc2FtZSBmb3JtYXRcbiAgICogQ1NTOiAtV2Via2l0LVRyYW5zZm9ybSA9PiB3ZWJraXR0cmFuc2Zvcm1cbiAgICogSlM6IFdlYmtpdFRyYW5zZm9ybSA9PiB3ZWJraXR0cmFuc2Zvcm1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHByb3BlcnR5XG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBzdHJUcmFucyAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJycpO1xuICB9XG5cbiAgLy8gQUZURVIgVFJBTlNGT1JNXG4gIC8vIFRoaW5ncyBuZWVkIHRvIGJlIGRvbmUgYWZ0ZXIgYSB0cmFuc2ZlcjpcbiAgLy8gMS4gY2hlY2sgaW5kZXhcbiAgLy8gMi4gYWRkIGNsYXNzZXMgdG8gdmlzaWJsZSBzbGlkZVxuICAvLyAzLiBkaXNhYmxlIGNvbnRyb2xzIGJ1dHRvbnMgd2hlbiByZWFjaCB0aGUgZmlyc3QvbGFzdCBzbGlkZSBpbiBub24tbG9vcCBzbGlkZXJcbiAgLy8gNC4gdXBkYXRlIG5hdiBzdGF0dXNcbiAgLy8gNS4gbGF6eWxvYWQgaW1hZ2VzXG4gIC8vIDYuIHVwZGF0ZSBjb250YWluZXIgaGVpZ2h0XG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCAoZXZlbnQpIHtcbiAgICAvLyBjaGVjayBydW5uaW5nIG9uIGdhbGxlcnkgbW9kZVxuICAgIC8vIG1ha2Ugc3VyZSB0cmFudGlvbmVuZC9hbmltYXRpb25lbmQgZXZlbnRzIHJ1biBvbmx5IG9uY2VcbiAgICBpZiAoY2Fyb3VzZWwgfHwgcnVubmluZykge1xuICAgICAgZXZlbnRzLmVtaXQoJ3RyYW5zaXRpb25FbmQnLCBpbmZvKGV2ZW50KSk7XG5cbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgc2xpZGVJdGVtc091dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXM7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc091dFtpXTtcbiAgICAgICAgICAvLyBzZXQgaXRlbSBwb3NpdGlvbnNcbiAgICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAnJztcblxuICAgICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2V0RHVyYXRpb25zKDAsIGl0ZW0pOyB9XG4gICAgICAgICAgaWYgKGFuaW1hdGVEZWxheSAmJiBUUkFOU0lUSU9OREVMQVkpIHsgXG4gICAgICAgICAgICBpdGVtLnN0eWxlW1RSQU5TSVRJT05ERUxBWV0gPSBpdGVtLnN0eWxlW0FOSU1BVElPTkRFTEFZXSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlT3V0KTtcbiAgICAgICAgICBhZGRDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiB1cGRhdGUgc2xpZGVzLCBuYXYsIGNvbnRyb2xzIGFmdGVyIGNoZWNraW5nIC4uLlxuICAgICAgICogPT4gbGVnYWN5IGJyb3dzZXJzIHdobyBkb24ndCBzdXBwb3J0ICdldmVudCcgXG4gICAgICAgKiAgICBoYXZlIHRvIGNoZWNrIGV2ZW50IGZpcnN0LCBvdGhlcndpc2UgZXZlbnQudGFyZ2V0IHdpbGwgY2F1c2UgYW4gZXJyb3IgXG4gICAgICAgKiA9PiBvciAnZ2FsbGVyeScgbW9kZTogXG4gICAgICAgKiAgICsgZXZlbnQgdGFyZ2V0IGlzIHNsaWRlIGl0ZW1cbiAgICAgICAqID0+IG9yICdjYXJvdXNlbCcgbW9kZTogXG4gICAgICAgKiAgICsgZXZlbnQgdGFyZ2V0IGlzIGNvbnRhaW5lciwgXG4gICAgICAgKiAgICsgZXZlbnQucHJvcGVydHkgaXMgdGhlIHNhbWUgd2l0aCB0cmFuc2Zvcm0gYXR0cmlidXRlXG4gICAgICAgKi9cbiAgICAgIGlmICghZXZlbnQgfHwgXG4gICAgICAgICAgIWNhcm91c2VsICYmIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlID09PSBjb250YWluZXIgfHwgXG4gICAgICAgICAgZXZlbnQudGFyZ2V0ID09PSBjb250YWluZXIgJiYgc3RyVHJhbnMoZXZlbnQucHJvcGVydHlOYW1lKSA9PT0gc3RyVHJhbnModHJhbnNmb3JtQXR0cikpIHtcblxuICAgICAgICBpZiAoIXVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7IFxuICAgICAgICAgIHZhciBpbmRleFRlbSA9IGluZGV4O1xuICAgICAgICAgIHVwZGF0ZUluZGV4KCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBpbmRleFRlbSkgeyBcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuXG4gICAgICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7IHNldER1cmF0aW9ucygwKTsgfVxuICAgICAgICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgcnVuQXV0b0hlaWdodCgpO1xuXG4gICAgICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHsgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTsgfVxuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IG5hdkN1cnJlbnRJbmRleDtcbiAgICAgICAgaW5kZXhDYWNoZWQgPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8vICMgQUNUSU9OU1xuICBmdW5jdGlvbiBnb1RvICh0YXJnZXRJbmRleCkge1xuICAgIGlmIChmcmVlemUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBwcmV2IHNsaWRlQnlcbiAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdwcmV2Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIC0xKTtcblxuICAgIC8vIG5leHQgc2xpZGVCeVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0SW5kZXggPT09ICduZXh0Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIDEpO1xuXG4gICAgLy8gZ28gdG8gZXhhY3Qgc2xpZGVcbiAgICB9IGVsc2UgaWYgKCFydW5uaW5nKSB7XG4gICAgICB2YXIgYWJzSW5kZXggPSBpbmRleCVzbGlkZUNvdW50LCBcbiAgICAgICAgICBpbmRleEdhcCA9IDA7XG4gICAgICBpZiAoIWxvb3AgJiYgY2hlY2tPcHRpb24oJ2VkZ2VQYWRkaW5nJykpIHsgYWJzSW5kZXgtLTsgfVxuICAgICAgaWYgKGFic0luZGV4IDwgMCkgeyBhYnNJbmRleCArPSBzbGlkZUNvdW50OyB9XG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICBpbmRleEdhcCA9IC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldEluZGV4ID09PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSBzbGlkZUNvdW50IC0gaXRlbXMgLSBhYnNJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0SW5kZXggIT09ICdudW1iZXInKSB7IHRhcmdldEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0SW5kZXgpOyB9XG4gICAgICAgIGlmICghaXNOYU4odGFyZ2V0SW5kZXgpKSB7XG4gICAgICAgICAgdmFyIGFic1RhcmdldEluZGV4ID0gdGFyZ2V0SW5kZXglc2xpZGVDb3VudDtcbiAgICAgICAgICBpZiAoYWJzVGFyZ2V0SW5kZXggPCAwKSB7IGFic1RhcmdldEluZGV4ICs9IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgICBpZiAoIWxvb3AgJiYgZWRnZVBhZGRpbmcpIHsgYWJzVGFyZ2V0SW5kZXggKz0gMTsgfVxuICAgICAgICAgIGluZGV4R2FwID0gYWJzVGFyZ2V0SW5kZXggLSBhYnNJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBpbmRleEdhcDtcblxuICAgICAgLy8gaWYgaW5kZXggaXMgY2hhbmdlZCwgc3RhcnQgcmVuZGVyaW5nXG4gICAgICBpZiAoaW5kZXglc2xpZGVDb3VudCAhPT0gaW5kZXhDYWNoZWQlc2xpZGVDb3VudCkge1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8vIG9uIGNvbnRyb2xzIGNsaWNrXG4gIGZ1bmN0aW9uIG9uQ29udHJvbHNDbGljayAoZSwgZGlyKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAvLyB2YXIgc2hvdWxkUmVuZGVyO1xuXG4gICAgICBpZiAoIWRpcikge1xuICAgICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY29udHJvbHNDb250YWluZXIgJiYgW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KSA8IDApIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cblxuICAgICAgICBpZiAodGFyZ2V0ID09PSBwcmV2QnV0dG9uKSB7XG4gICAgICAgICAgZGlyID0gLTE7IFxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gbmV4dEJ1dHRvbikge1xuICAgICAgICAgIGRpciA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpciA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggLT0gc2xpZGVCeTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSAxKSB7XG4gICAgICAgIC8vIEdvIHRvIHRoZSBmaXJzdCBpZiByZWFjaCB0aGUgZW5kIGluIHJld2luZCBtb2RlXG4gICAgICAgIC8vIE90aGVyd2lzZSBnbyB0byB0aGUgbmV4dFxuICAgICAgICBpZiAocmV3aW5kICYmIGluZGV4ID09PSBpbmRleE1heCl7XG4gICAgICAgICAgZ29UbygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleCArPSBzbGlkZUJ5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uIG5hdiBjbGlja1xuICBmdW5jdGlvbiBvbk5hdkNsaWNrIChlKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LFxuICAgICAgICAgIG5hdkluZGV4O1xuXG4gICAgICAvLyBmaW5kIHRoZSBjbGlja2VkIG5hdiBpdGVtXG4gICAgICB3aGlsZSAodGFyZ2V0ICE9PSBuYXZDb250YWluZXIgJiYgIWhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkgeyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTsgfVxuICAgICAgaWYgKGhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkge1xuICAgICAgICBuYXZJbmRleCA9IG5hdkNsaWNrZWQgPSBbXS5pbmRleE9mLmNhbGwobmF2SXRlbXMsIHRhcmdldCk7XG4gICAgICAgIGdvVG8obmF2SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUF1dG9wbGF5QnV0dG9uIChhY3Rpb24sIHR4dCkge1xuICAgIHNldEF0dHJzKGF1dG9wbGF5QnV0dG9uLCB7J2RhdGEtYWN0aW9uJzogYWN0aW9ufSk7XG4gICAgYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MID0gYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIGFjdGlvbiArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyB0eHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEFjdGlvbiAoKSB7XG4gICAgcmVzZXRBY3Rpb25UaW1lcigpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyB1cGRhdGVBdXRvcGxheUJ1dHRvbignc3RvcCcsIGF1dG9wbGF5VGV4dFsxXSk7IH1cblxuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQWN0aW9uICgpIHtcbiAgICBwYXVzZUFjdGlvblRpbWVyKCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHVwZGF0ZUF1dG9wbGF5QnV0dG9uKCdzdGFydCcsIGF1dG9wbGF5VGV4dFswXSk7IH1cblxuICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2VBY3Rpb25UaW1lciAoKSB7XG4gICAgYW5pbWF0aW5nID0gJ3BhdXNlZCc7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0QWN0aW9uVGltZXIgKCkge1xuICAgIGlmIChhbmltYXRpbmcgPT09IHRydWUpIHsgcmV0dXJuOyB9XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTtcbiAgICBhdXRvcGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIGF1dG9wbGF5RGlyZWN0aW9uKTtcbiAgICB9LCBhdXRvcGxheVRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICBzdG9wQWN0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0QWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlICgpIHtcbiAgICBpZiAoYXV0b3BsYXlSZXNldFZpc2liaWxpdHlTdGF0ZSAhPSBkb2MuaGlkZGVuICYmIGFuaW1hdGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIGRvYy5oaWRkZW4gPyBwYXVzZUFjdGlvblRpbWVyKCkgOiByZXNldEFjdGlvblRpbWVyKCk7XG4gICAgfVxuICAgIGF1dG9wbGF5UmVzZXRWaXNpYmlsaXR5U3RhdGUgPSBkb2MuaGlkZGVuO1xuICB9XG5cbiAgLy8ga2V5ZG93biBldmVudHMgb24gZG9jdW1lbnQgXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlkb3duIChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgS0VZUy5MRUZUOlxuICAgICAgICBvbkNvbnRyb2xzQ2xpY2sobnVsbCwgLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5SSUdIVDpcbiAgICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uIGtleSBjb250cm9sXG4gIGZ1bmN0aW9uIG9uQ29udHJvbHNLZXlkb3duIChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIEtFWVMuTEVGVDpcbiAgICAgIGNhc2UgS0VZUy5VUDpcbiAgICAgIGNhc2UgS0VZUy5QQUdFVVA6XG4gICAgICAgICAgaWYgKCFwcmV2QnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBvbkNvbnRyb2xzQ2xpY2sobnVsbCwgLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5SSUdIVDpcbiAgICAgIGNhc2UgS0VZUy5ET1dOOlxuICAgICAgY2FzZSBLRVlTLlBBR0VET1dOOlxuICAgICAgICAgIGlmICghbmV4dEJ1dHRvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5IT01FOlxuICAgICAgICBnb1RvKDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5FTkQ6XG4gICAgICAgIGdvVG8oc2xpZGVDb3VudCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZm9jdXNcbiAgZnVuY3Rpb24gc2V0Rm9jdXMgKGZvY3VzKSB7XG4gICAgZm9jdXMuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIG9uIGtleSBuYXZcbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChlKSB7XG4gICAgdmFyIGN1ckVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoIWhhc0F0dHIoY3VyRWxlbWVudCwgJ2RhdGEtbmF2JykpIHsgcmV0dXJuOyB9XG5cbiAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgdmFyIGNvZGUgPSBlLmtleUNvZGUsXG4gICAgICAgIG5hdkluZGV4ID0gW10uaW5kZXhPZi5jYWxsKG5hdkl0ZW1zLCBjdXJFbGVtZW50KSxcbiAgICAgICAgbGVuID0gdmlzaWJsZU5hdkluZGV4ZXMubGVuZ3RoLFxuICAgICAgICBjdXJyZW50ID0gdmlzaWJsZU5hdkluZGV4ZXMuaW5kZXhPZihuYXZJbmRleCk7XG5cbiAgICBpZiAob3B0aW9ucy5uYXZDb250YWluZXIpIHtcbiAgICAgIGxlbiA9IHNsaWRlQ291bnQ7XG4gICAgICBjdXJyZW50ID0gbmF2SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmF2SW5kZXggKG51bSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubmF2Q29udGFpbmVyID8gbnVtIDogdmlzaWJsZU5hdkluZGV4ZXNbbnVtXTtcbiAgICB9XG5cbiAgICBzd2l0Y2goY29kZSkge1xuICAgICAgY2FzZSBLRVlTLkxFRlQ6XG4gICAgICBjYXNlIEtFWVMuUEFHRVVQOlxuICAgICAgICBpZiAoY3VycmVudCA+IDApIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoY3VycmVudCAtIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS0VZUy5VUDpcbiAgICAgIGNhc2UgS0VZUy5IT01FOlxuICAgICAgICBpZiAoY3VycmVudCA+IDApIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoMCldKTsgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBLRVlTLlJJR0hUOlxuICAgICAgY2FzZSBLRVlTLlBBR0VET1dOOlxuICAgICAgICBpZiAoY3VycmVudCA8IGxlbiAtIDEpIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoY3VycmVudCArIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS0VZUy5ET1dOOlxuICAgICAgY2FzZSBLRVlTLkVORDpcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBsZW4gLSAxKSB7IHNldEZvY3VzKG5hdkl0ZW1zW2dldE5hdkluZGV4KGxlbiAtIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIENhbid0IHVzZSBvbk5hdkNsaWNrIGhlcmUsXG4gICAgICAvLyBCZWNhdXNlIG9uTmF2Q2xpY2sgcmVxdWlyZSBldmVudC50YXJnZXQgYXMgbmF2IGl0ZW1zXG4gICAgICBjYXNlIEtFWVMuRU5URVI6XG4gICAgICBjYXNlIEtFWVMuU1BBQ0U6XG4gICAgICAgIG5hdkNsaWNrZWQgPSBuYXZJbmRleDtcbiAgICAgICAgZ29UbyhuYXZJbmRleCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElFMTAgc2Nyb2xsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGllMTBTY3JvbGwgKCkge1xuICAgIGRvVHJhbnNmb3JtKDAsIGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkpO1xuICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXJnZXQgKGUpIHtcbiAgICByZXR1cm4gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUb3VjaEV2ZW50IChlKSB7XG4gICAgcmV0dXJuIGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yIChlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoT3JNb3VzZVN0YXJ0IChlKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICB2YXIgZXY7XG5cbiAgICAgIGlmIChpc1RvdWNoRXZlbnQoZSkpIHtcbiAgICAgICAgZXYgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBldmVudHMuZW1pdCgndG91Y2hTdGFydCcsIGluZm8oZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXYgPSBlO1xuICAgICAgICBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yKGUpO1xuICAgICAgICBldmVudHMuZW1pdCgnZHJhZ1N0YXJ0JywgaW5mbyhlKSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0WCA9IHBhcnNlSW50KGV2LmNsaWVudFgpO1xuICAgICAgc3RhcnRZID0gcGFyc2VJbnQoZXYuY2xpZW50WSk7XG4gICAgICB0cmFuc2xhdGVJbml0ID0gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0ucmVwbGFjZSh0cmFuc2Zvcm1QcmVmaXgsICcnKS5yZXBsYWNlKHRyYW5zZm9ybVBvc3RmaXgsICcnKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE9yTW91c2VNb3ZlIChlKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICAvLyBtYWtlIHN1cmUgdG91Y2ggc3RhcnRlZCBvciBtb3VzZSBkcmFnZWRcbiAgICAgIGlmIChzdGFydFggIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGV2O1xuICAgICAgICBpZiAoaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgICAgZXYgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ID0gZTtcbiAgICAgICAgICBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzWCA9IHBhcnNlSW50KGV2LmNsaWVudFgpIC0gc3RhcnRYO1xuICAgICAgICBkaXNZID0gcGFyc2VJbnQoZXYuY2xpZW50WSkgLSBzdGFydFk7XG5cbiAgICAgICAgaWYgKGdldFRvdWNoRGlyZWN0aW9uKHRvRGVncmVlKGRpc1ksIGRpc1gpLCAxNSkgPT09IG9wdGlvbnMuYXhpcyAmJiBkaXNYKSB7XG4gICAgICAgICAgaWYgKGlzVG91Y2hFdmVudChlKSkge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoJ3RvdWNoTW92ZScsIGluZm8oZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBcIm1vdXNlbW92ZVwiIGV2ZW50IGFmdGVyIFwibW91c2Vkb3duXCIgaW5kZWNhdGUgXG4gICAgICAgICAgICAvLyBpdCBpcyBcImRyYWdcIiwgbm90IFwiY2xpY2tcIlxuICAgICAgICAgICAgaWYgKCFpc0RyYWdFdmVudCkgeyBpc0RyYWdFdmVudCA9IHRydWU7IH1cbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdkcmFnTW92ZScsIGluZm8oZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRvdWNoZWRPckRyYWdlZCkgeyB0b3VjaGVkT3JEcmFnZWQgPSB0cnVlOyB9XG5cbiAgICAgICAgICB2YXIgeCA9IHRyYW5zbGF0ZUluaXQ7XG4gICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgICAgICAgIHggKz0gZGlzWDtcbiAgICAgICAgICAgICAgeCArPSAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2VYID0gVFJBTlNGT1JNID8gZGlzWCAqIGl0ZW1zICogMTAwIC8gKHZwSW5uZXIgKiBzbGlkZUNvdW50TmV3KTogZGlzWCAqIDEwMCAvIHZwSW5uZXI7XG4gICAgICAgICAgICAgIHggKz0gcGVyY2VudGFnZVg7XG4gICAgICAgICAgICAgIHggKz0gJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ICs9IGRpc1k7XG4gICAgICAgICAgICB4ICs9ICdweCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFRSQU5TRk9STSkgeyBzZXREdXJhdGlvbnMoMCk7IH1cbiAgICAgICAgICBjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0gPSB0cmFuc2Zvcm1QcmVmaXggKyB4ICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hPck1vdXNlRW5kIChlKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG5cbiAgICAgIGlmICh0b3VjaGVkT3JEcmFnZWQpIHtcbiAgICAgICAgdG91Y2hlZE9yRHJhZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBldjtcblxuICAgICAgICBpZiAoaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgICAgZXYgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgIGV2ZW50cy5lbWl0KCd0b3VjaEVuZCcsIGluZm8oZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ID0gZTtcbiAgICAgICAgICBldmVudHMuZW1pdCgnZHJhZ0VuZCcsIGluZm8oZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzWCA9IHBhcnNlSW50KGV2LmNsaWVudFgpIC0gc3RhcnRYO1xuICAgICAgICBkaXNZID0gcGFyc2VJbnQoZXYuY2xpZW50WSkgLSBzdGFydFk7XG5cbiAgICAgICAgLy8gcmVzZXQgc3RhcnRYLCBzdGFydFlcbiAgICAgICAgc3RhcnRYID0gc3RhcnRZID0gbnVsbDtcblxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHZhciBpbmRleE1vdmVkID0gLSBkaXNYICogaXRlbXMgLyB2cElubmVyO1xuICAgICAgICAgIGluZGV4TW92ZWQgPSBkaXNYID4gMCA/IE1hdGguZmxvb3IoaW5kZXhNb3ZlZCkgOiBNYXRoLmNlaWwoaW5kZXhNb3ZlZCk7XG4gICAgICAgICAgaW5kZXggKz0gaW5kZXhNb3ZlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbW92ZWQgPSAtICh0cmFuc2xhdGVJbml0ICsgZGlzWSk7XG4gICAgICAgICAgaWYgKG1vdmVkIDw9IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXhNaW47XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlZCA+PSBzbGlkZU9mZnNldFRvcHNbc2xpZGVPZmZzZXRUb3BzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IGluZGV4TWF4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgaW5kZXggPSBkaXNZIDwgMCA/IGkgKyAxIDogaTtcbiAgICAgICAgICAgIH0gd2hpbGUgKGkgPCBzbGlkZUNvdW50TmV3ICYmIG1vdmVkID49IHNsaWRlT2Zmc2V0VG9wc1tpICsgMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgLy8gZHJhZyB2cyBjbGlja1xuICAgICAgICBpZiAoaXNEcmFnRXZlbnQpIHsgXG4gICAgICAgICAgLy8gcmVzZXQgaXNEcmFnRXZlbnRcbiAgICAgICAgICBpc0RyYWdFdmVudCA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gcHJldmVudCBcImNsaWNrXCJcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpO1xuICAgICAgICAgIGFkZEV2ZW50cyh0YXJnZXQsIHsnY2xpY2snOiBmdW5jdGlvbiBwcmV2ZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudHModGFyZ2V0LCB7J2NsaWNrJzogcHJldmVudENsaWNrfSk7XG4gICAgICAgICAgfX0pOyBcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA9PT0gUkVTSVpFIEZVTkNUSU9OUyA9PT0gLy9cbiAgLy8gKHNsaWRlT2Zmc2V0VG9wcywgaW5kZXgsIGl0ZW1zKSA9PiB2ZXJ0aWNhbF9jb25lbnRXcmFwcGVyLmhlaWdodFxuICBmdW5jdGlvbiB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCAoKSB7XG4gICAgaW5uZXJXcmFwcGVyLnN0eWxlLmhlaWdodCA9IHNsaWRlT2Zmc2V0VG9wc1tpbmRleCArIGl0ZW1zXSAtIHNsaWRlT2Zmc2V0VG9wc1tpbmRleF0gKyAncHgnO1xuICB9XG5cbiAgLypcbiAgICogZ2V0IG5hdiBpdGVtIGluZGV4ZXMgcGVyIGl0ZW1zXG4gICAqIGFkZCAxIG1vcmUgaWYgdGhlIG5hdiBpdGVtcyBjYW5uJ3QgY292ZXIgYWxsIHNsaWRlc1xuICAgKiBbMCwgMSwgMiwgMywgNF0gLyAzID0+IFswLCAzXVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmlzaWJsZU5hdkluZGV4ICgpIHtcbiAgICAvLyByZXNldCB2aXNpYmxlTmF2SW5kZXhlc1xuICAgIHZpc2libGVOYXZJbmRleGVzID0gW107XG5cbiAgICB2YXIgdGVtSW5kZXggPSAhbG9vcCAmJiBlZGdlUGFkZGluZyA/IChpbmRleCAtIDEpIDogaW5kZXg7XG4gICAgdmFyIGFic0luZGV4TWluID0gdGVtSW5kZXglc2xpZGVDb3VudCVpdGVtcztcbiAgICB3aGlsZSAoYWJzSW5kZXhNaW4gPCBzbGlkZUNvdW50KSB7XG4gICAgICBpZiAoIWxvb3AgJiYgYWJzSW5kZXhNaW4gKyBpdGVtcyA+IHNsaWRlQ291bnQpIHsgYWJzSW5kZXhNaW4gPSBzbGlkZUNvdW50IC0gaXRlbXM7IH1cbiAgICAgIHZpc2libGVOYXZJbmRleGVzLnB1c2goYWJzSW5kZXhNaW4pO1xuICAgICAgYWJzSW5kZXhNaW4gKz0gaXRlbXM7XG4gICAgfVxuXG4gICAgLy8gbmF2IGNvdW50ICogaXRlbXMgPCBzbGlkZSBjb3VudCBtZWFuc1xuICAgIC8vIHNvbWUgc2xpZGVzIGNhbiBub3QgYmUgZGlzcGxheWVkIG9ubHkgYnkgbmF2IGNsaWNraW5nXG4gICAgaWYgKGxvb3AgJiYgdmlzaWJsZU5hdkluZGV4ZXMubGVuZ3RoICogaXRlbXMgPCBzbGlkZUNvdW50IHx8XG4gICAgICAgICFsb29wICYmIHZpc2libGVOYXZJbmRleGVzWzBdID4gMCkge1xuICAgICAgdmlzaWJsZU5hdkluZGV4ZXMudW5zaGlmdCgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qXG4gICAqIDEuIHVwZGF0ZSB2aXNpYmxlIG5hdiBpdGVtcyBsaXN0XG4gICAqIDIuIGFkZCBcImhpZGRlblwiIGF0dHJpYnV0ZXMgdG8gcHJldmlvdXMgdmlzaWJsZSBuYXYgaXRlbXNcbiAgICogMy4gcmVtb3ZlIFwiaGlkZGVuXCIgYXR0cnVidXRlcyB0byBuZXcgdmlzaWJsZSBuYXYgaXRlbXNcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdlZpc2liaWxpdHkgKCkge1xuICAgIGlmICghbmF2IHx8IG9wdGlvbnMubmF2Q29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgLy8gdXBkYXRlIG5hdiB2aXNpYmlsaXR5IHdoZW4gdmlzaWJsZU5hdkluZGV4ZXMgZG9lc24ndCBjb250YWluIGN1cnJlbnQgaW5kZXhcbiAgICBpZiAodmlzaWJsZU5hdkluZGV4ZXMuaW5kZXhPZihpbmRleCVzbGlkZUNvdW50KSA8IDApIHtcbiAgICAgIC8vIHVwZGF0ZSB2aXNpYmxlIG5hdiBpbmRleGVzXG4gICAgICBnZXRWaXNpYmxlTmF2SW5kZXgoKTtcblxuICAgICAgaWYgKHZpc2libGVOYXZJbmRleGVzICE9PSB2aXNpYmxlTmF2SW5kZXhlc0NhY2hlZCkge1xuICAgICAgICAvLyBhZGQgJ2hpZGRlbicgYXR0cmlidXRlIHRvIHByZXZpb3VzIHZpc2libGUgbmF2c1xuICAgICAgICBpZiAodmlzaWJsZU5hdkluZGV4ZXNDYWNoZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZpc2libGVOYXZJbmRleGVzQ2FjaGVkLmZvckVhY2goZnVuY3Rpb24gKGluZCkge1xuICAgICAgICAgICAgaGlkZUVsZW1lbnQobmF2SXRlbXNbaW5kXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgJ2hpZGRlbicgYXR0cmlidXRlIGZyb20gdmlzaWJsZSBuYXZzXG4gICAgICAgIGlmICh2aXNpYmxlTmF2SW5kZXhlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmlzaWJsZU5hdkluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kKSB7XG4gICAgICAgICAgICBzaG93RWxlbWVudChuYXZJdGVtc1tpbmRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhY2hlIHZpc2libGUgbmF2IGluZGV4ZXNcbiAgICAgICAgdmlzaWJsZU5hdkluZGV4ZXNDYWNoZWQgPSB2aXNpYmxlTmF2SW5kZXhlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbmZvIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgc2xpZGVJdGVtczogc2xpZGVJdGVtcyxcbiAgICAgIG5hdkNvbnRhaW5lcjogbmF2Q29udGFpbmVyLFxuICAgICAgbmF2SXRlbXM6IG5hdkl0ZW1zLFxuICAgICAgY29udHJvbHNDb250YWluZXI6IGNvbnRyb2xzQ29udGFpbmVyLFxuICAgICAgcHJldkJ1dHRvbjogcHJldkJ1dHRvbixcbiAgICAgIG5leHRCdXR0b246IG5leHRCdXR0b24sXG4gICAgICBpdGVtczogaXRlbXMsXG4gICAgICBzbGlkZUJ5OiBzbGlkZUJ5LFxuICAgICAgY2xvbmVDb3VudDogY2xvbmVDb3VudCxcbiAgICAgIHNsaWRlQ291bnQ6IHNsaWRlQ291bnQsXG4gICAgICBzbGlkZUNvdW50TmV3OiBzbGlkZUNvdW50TmV3LFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgaW5kZXhDYWNoZWQ6IGluZGV4Q2FjaGVkLFxuICAgICAgbmF2Q3VycmVudEluZGV4OiBuYXZDdXJyZW50SW5kZXgsXG4gICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQ6IG5hdkN1cnJlbnRJbmRleENhY2hlZCxcbiAgICAgIHZpc2libGVOYXZJbmRleGVzOiB2aXNpYmxlTmF2SW5kZXhlcyxcbiAgICAgIHZpc2libGVOYXZJbmRleGVzQ2FjaGVkOiB2aXNpYmxlTmF2SW5kZXhlc0NhY2hlZCxcbiAgICAgIGV2ZW50OiBlIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEluZm86IGluZm8sXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgZ29UbzogZ29UbyxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNoZWV0XG4gICAgICBzaGVldC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgIC8vIGNsb25lZCBpdGVtc1xuICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgICBzbGlkZUl0ZW1zWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIHNsaWRlSXRlbXNbc2xpZGVJdGVtcy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTbGlkZSBJdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IHNsaWRlQ291bnQ7IGktLTspIHtcbiAgICAgICAgdmFyIHNsaWRlID0gc2xpZGVJdGVtc1tpXTtcbiAgICAgICAgaWYgKHNsaWRlLmlkLmluZGV4T2Yoc2xpZGVJZCArICctaXRlbScpID49IDApIHsgc2xpZGUuaWQgPSAnJzsgfVxuICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCd0bnMtaXRlbScpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQXR0cnMoc2xpZGVJdGVtcywgWydzdHlsZScsICdhcmlhLWhpZGRlbicsICd0YWJpbmRleCddKTtcbiAgICAgIHNsaWRlSXRlbXMgPSBzbGlkZUlkID0gc2xpZGVDb3VudCA9IHNsaWRlQ291bnROZXcgPSBjbG9uZUNvdW50ID0gbnVsbDtcblxuICAgICAgLy8gY29udHJvbHNcbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICByZW1vdmVFdmVudHMoY29udHJvbHNDb250YWluZXIsIGNvbnRyb2xzRXZlbnRzKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICByZW1vdmVBdHRycyhjb250cm9sc0NvbnRhaW5lciwgWydhcmlhLWxhYmVsJywgJ3RhYmluZGV4J10pO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuLCBbJ2FyaWEtY29udHJvbHMnLCAnYXJpYS1kaXNhYmxlZCcsICd0YWJpbmRleCddKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sc0NvbnRhaW5lciA9IHByZXZCdXR0b24gPSBuZXh0QnV0dG9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gbmF2XG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIHJlbW92ZUV2ZW50cyhuYXZDb250YWluZXIsIG5hdkV2ZW50cyk7XG4gICAgICAgIGlmIChvcHRpb25zLm5hdkNvbnRhaW5lcikge1xuICAgICAgICAgIHJlbW92ZUF0dHJzKG5hdkNvbnRhaW5lciwgWydhcmlhLWxhYmVsJ10pO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKG5hdkl0ZW1zLCBbJ2FyaWEtc2VsZWN0ZWQnLCAnYXJpYS1jb250cm9scycsICd0YWJpbmRleCddKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZDb250YWluZXIgPSBuYXZJdGVtcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICBjbGVhckludGVydmFsKGF1dG9wbGF5VGltZXIpO1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgICByZW1vdmVFdmVudHMoYXV0b3BsYXlCdXR0b24sIHsnY2xpY2snOiB0b2dnbGVBbmltYXRpb259KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7XG4gICAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9wbGF5QnV0dG9uKSB7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoYXV0b3BsYXlCdXR0b24sIFsnZGF0YS1hY3Rpb24nXSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb250YWluZXJcbiAgICAgIGNvbnRhaW5lci5pZCA9IGNvbnRhaW5lcklkQ2FjaGVkIHx8ICcnO1xuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZShjbGFzc0NvbnRhaW5lciwgJycpO1xuICAgICAgY29udGFpbmVyLnN0eWxlID0gJyc7XG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgVFJBTlNJVElPTkVORCkge1xuICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgZXZlKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIHRvdWNoRXZlbnRzKTtcbiAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpO1xuXG4gICAgICAvLyBvdXRlcldyYXBwZXJcbiAgICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBvdXRlcldyYXBwZXIpO1xuICAgICAgb3V0ZXJXcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgb3V0ZXJXcmFwcGVyID0gaW5uZXJXcmFwcGVyID0gY29udGFpbmVyID0gbnVsbDtcblxuICAgICAgLy8gcmVtb3ZlIGFycm93S2V5cyBldmVudGxpc3RlbmVyXG4gICAgICByZW1vdmVFdmVudHMoZG9jLCBkb2NtZW50S2V5ZG93bkV2ZW50KTtcblxuICAgICAgLy8gcmVtb3ZlIHdpbiBldmVudCBsaXN0ZW5lcnNcbiAgICAgIHJlbW92ZUV2ZW50cyh3aW4sIHsncmVzaXplJzogb25SZXNpemV9KTtcbiAgICB9XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXIubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8ga2V5c1xuaWYgKCFPYmplY3Qua2V5cykge1xuICAgIE9iamVjdC5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyohXG4gKiBBIGxpZ2h0d2VpZ2h0LCBkZXBlbmRlbmN5LWZyZWUgYW5kIHJlc3BvbnNpdmUgamF2YXNjcmlwdCBwbHVnaW4gZm9yIHBhcnRpY2xlIGJhY2tncm91bmRzLlxuICpcbiAqIEBhdXRob3IgTWFyYyBCcnVlZGVybGluIDxoZWxsb0BtYXJjYnJ1ZWRlcmxpbi5jb20+XG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjYnJ1ZWRlcmxpbi9wYXJ0aWNsZXMuanNcbiAqL1xudmFyIFBhcnRpY2xlcz1mdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4gdC54PGUueD8tMTp0Lng+ZS54PzE6dC55PGUueT8tMTp0Lnk+ZS55PzE6MH12YXIgaSxvPXt9O3JldHVybiBpPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmRlZmF1bHRzPXtyZXNwb25zaXZlOm51bGwsc2VsZWN0b3I6bnVsbCxtYXhQYXJ0aWNsZXM6MTAwLHNpemVWYXJpYXRpb25zOjMsc2hvd1BhcnRpY2xlczohMCxzcGVlZDouNSxjb2xvcjpcIiMwMDAwMDBcIixtaW5EaXN0YW5jZToxMjAsY29ubmVjdFBhcnRpY2xlczohMX0sdC5lbGVtZW50PW51bGwsdC5jb250ZXh0PW51bGwsdC5yYXRpbz1udWxsLHQuYnJlYWtwb2ludHM9W10sdC5hY3RpdmVCcmVha3BvaW50PW51bGwsdC5icmVha3BvaW50U2V0dGluZ3M9W10sdC5vcmlnaW5hbFNldHRpbmdzPW51bGwsdC5zdG9yYWdlPVtdLHQudXNpbmdQb2x5ZmlsbD0hMX19KCksaS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybiBlLm9wdGlvbnM9ZS5fZXh0ZW5kKGUuZGVmYXVsdHMsdCksZS5vcHRpb25zLmNvbG9yPXQuY29sb3I/ZS5faGV4MnJnYih0LmNvbG9yKTplLl9oZXgycmdiKGUuZGVmYXVsdHMuY29sb3IpLGUub3JpZ2luYWxTZXR0aW5ncz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUub3B0aW9ucykpLGUuX2FuaW1hdGU9ZS5fYW5pbWF0ZS5iaW5kKGUpLGUuX2luaXRpYWxpemVDYW52YXMoKSxlLl9pbml0aWFsaXplRXZlbnRzKCksZS5fcmVnaXN0ZXJCcmVha3BvaW50cygpLGUuX2NoZWNrUmVzcG9uc2l2ZSgpLGUuX2luaXRpYWxpemVTdG9yYWdlKCksZS5fYW5pbWF0ZSgpLGV9LGkucHJvdG90eXBlLl9pbml0aWFsaXplQ2FudmFzPWZ1bmN0aW9uKCl7dmFyIG4saSxvPXRoaXM7aWYoIW8ub3B0aW9ucy5zZWxlY3RvcilyZXR1cm4gY29uc29sZS53YXJuKFwicGFydGljbGVzLmpzOiBObyBzZWxlY3RvciBzcGVjaWZpZWQhIENoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjYnJ1ZWRlcmxpbi9wYXJ0aWNsZXMuanMjb3B0aW9uc1wiKSwhMTtvLmVsZW1lbnQ9ZS5xdWVyeVNlbGVjdG9yKG8ub3B0aW9ucy5zZWxlY3Rvciksby5jb250ZXh0PW8uZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIiksbj10LmRldmljZVBpeGVsUmF0aW98fDEsaT1vLmNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpb3x8by5jb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW98fG8uY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW98fG8uY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpb3x8by5jb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW98fDEsby5yYXRpbz1uL2ksby5lbGVtZW50LndpZHRoPW8uZWxlbWVudC5vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGgqby5yYXRpbyxcIkJPRFlcIj09PW8uZWxlbWVudC5vZmZzZXRQYXJlbnQubm9kZU5hbWU/by5lbGVtZW50LmhlaWdodD10LmlubmVySGVpZ2h0Km8ucmF0aW86by5lbGVtZW50LmhlaWdodD1vLmVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCpvLnJhdGlvLG8uZWxlbWVudC5zdHlsZS53aWR0aD1cIjEwMCVcIixvLmVsZW1lbnQuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiLG8uY29udGV4dC5zY2FsZShvLnJhdGlvLG8ucmF0aW8pfSxpLnByb3RvdHlwZS5faW5pdGlhbGl6ZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5fcmVzaXplLmJpbmQoZSksITEpfSxpLnByb3RvdHlwZS5faW5pdGlhbGl6ZVN0b3JhZ2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3Quc3RvcmFnZT1bXTtmb3IodmFyIGU9dC5vcHRpb25zLm1heFBhcnRpY2xlcztlLS07KXQuc3RvcmFnZS5wdXNoKG5ldyBvKHQuY29udGV4dCx0Lm9wdGlvbnMpKX0saS5wcm90b3R5cGUuX3JlZ2lzdGVyQnJlYWtwb2ludHM9ZnVuY3Rpb24oKXt2YXIgdCxlLG4saT10aGlzLG89aS5vcHRpb25zLnJlc3BvbnNpdmV8fG51bGw7aWYoXCJvYmplY3RcIj09dHlwZW9mIG8mJm51bGwhPT1vJiZvLmxlbmd0aCl7Zm9yKHQgaW4gbylpZihuPWkuYnJlYWtwb2ludHMubGVuZ3RoLTEsZT1vW3RdLmJyZWFrcG9pbnQsby5oYXNPd25Qcm9wZXJ0eSh0KSl7Zm9yKG9bdF0ub3B0aW9ucy5jb2xvciYmKG9bdF0ub3B0aW9ucy5jb2xvcj1pLl9oZXgycmdiKG9bdF0ub3B0aW9ucy5jb2xvcikpO24+PTA7KWkuYnJlYWtwb2ludHNbbl0mJmkuYnJlYWtwb2ludHNbbl09PT1lJiZpLmJyZWFrcG9pbnRzLnNwbGljZShuLDEpLG4tLTtpLmJyZWFrcG9pbnRzLnB1c2goZSksaS5icmVha3BvaW50U2V0dGluZ3NbZV09b1t0XS5vcHRpb25zfWkuYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiBlLXR9KX19LGkucHJvdG90eXBlLl9jaGVja1Jlc3BvbnNpdmU9ZnVuY3Rpb24oKXt2YXIgZSxuPXRoaXMsaT0hMSxvPXQuaW5uZXJXaWR0aDtpZihuLm9wdGlvbnMucmVzcG9uc2l2ZSYmbi5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoJiZudWxsIT09bi5vcHRpb25zLnJlc3BvbnNpdmUpe2k9bnVsbDtmb3IoZSBpbiBuLmJyZWFrcG9pbnRzKW4uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoZSkmJm88PW4uYnJlYWtwb2ludHNbZV0mJihpPW4uYnJlYWtwb2ludHNbZV0pO251bGwhPT1pPyhuLmFjdGl2ZUJyZWFrcG9pbnQ9aSxuLm9wdGlvbnM9bi5fZXh0ZW5kKG4ub3B0aW9ucyxuLmJyZWFrcG9pbnRTZXR0aW5nc1tpXSkpOm51bGwhPT1uLmFjdGl2ZUJyZWFrcG9pbnQmJihuLmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCxpPW51bGwsbi5vcHRpb25zPW4uX2V4dGVuZChuLm9wdGlvbnMsbi5vcmlnaW5hbFNldHRpbmdzKSl9fSxpLnByb3RvdHlwZS5fcmVmcmVzaD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5faW5pdGlhbGl6ZVN0b3JhZ2UoKSx0Ll9kcmF3KCl9LGkucHJvdG90eXBlLl9yZXNpemU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuZWxlbWVudC53aWR0aD1lLmVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoKmUucmF0aW8sXCJCT0RZXCI9PT1lLmVsZW1lbnQub2Zmc2V0UGFyZW50Lm5vZGVOYW1lP2UuZWxlbWVudC5oZWlnaHQ9dC5pbm5lckhlaWdodCplLnJhdGlvOmUuZWxlbWVudC5oZWlnaHQ9ZS5lbGVtZW50Lm9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQqZS5yYXRpbyxlLmNvbnRleHQuc2NhbGUoZS5yYXRpbyxlLnJhdGlvKSxjbGVhclRpbWVvdXQoZS53aW5kb3dEZWxheSksZS53aW5kb3dEZWxheT10LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLl9jaGVja1Jlc3BvbnNpdmUoKSxlLl9yZWZyZXNoKCl9LDUwKX0saS5wcm90b3R5cGUuX2FuaW1hdGU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2RyYXcoKSxlLl9hbmltYXRpb249dC5yZXF1ZXN0QW5pbUZyYW1lKGUuX2FuaW1hdGUpfSxpLnByb3RvdHlwZS5yZXN1bWVBbmltYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuX2FuaW1hdGlvbnx8dC5fYW5pbWF0ZSgpfSxpLnByb3RvdHlwZS5wYXVzZUFuaW1hdGlvbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fYW5pbWF0aW9uJiYoZS51c2luZ1BvbHlmaWxsP3QuY2xlYXJUaW1lb3V0KGUuX2FuaW1hdGlvbik6KHQuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHQud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHQubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUpKGUuX2FuaW1hdGlvbiksZS5fYW5pbWF0aW9uPW51bGwpfSxpLnByb3RvdHlwZS5fZHJhdz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsaT1lLmVsZW1lbnQsbz1pLm9mZnNldFBhcmVudC5jbGllbnRXaWR0aCxyPWkub2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCxhPWUub3B0aW9ucy5zaG93UGFydGljbGVzLHM9ZS5zdG9yYWdlO1wiQk9EWVwiPT09aS5vZmZzZXRQYXJlbnQubm9kZU5hbWUmJihyPXQuaW5uZXJIZWlnaHQpLGUuY29udGV4dC5jbGVhclJlY3QoMCwwLGkud2lkdGgsaS5oZWlnaHQpLGUuY29udGV4dC5iZWdpblBhdGgoKSxlLmNvbnRleHQuZmlsbFN0eWxlPVwicmdiKFwiK2Uub3B0aW9ucy5jb2xvci5yK1wiLCBcIitlLm9wdGlvbnMuY29sb3IuZytcIiwgXCIrZS5vcHRpb25zLmNvbG9yLmIrXCIpXCI7Zm9yKHZhciBsPXMubGVuZ3RoO2wtLTspe3ZhciBjPXNbbF07YSYmYy5fZHJhdygpLGMuX3VwZGF0ZUNvb3JkaW5hdGVzKG8scil9ZS5jb250ZXh0LmZpbGwoKSxlLm9wdGlvbnMuY29ubmVjdFBhcnRpY2xlcyYmKHMuc29ydChuKSxlLl91cGRhdGVFZGdlcygpKX0saS5wcm90b3R5cGUuX3VwZGF0ZUVkZ2VzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsZT10Lm9wdGlvbnMubWluRGlzdGFuY2Usbj10Lm9wdGlvbnMuY29sb3IsaT1NYXRoLnNxcnQsbz1NYXRoLmFicyxyPXQuc3RvcmFnZSxhPXIubGVuZ3RoLHM9XCJyZ2JhKFwiK24ucitcIixcIituLmcrXCIsXCIrbi5iK1wiLFwiLGw9MDtsPGE7bCsrKWZvcih2YXIgYz1yW2xdLHA9bCsxO3A8YTtwKyspe3ZhciB1LGY9cltwXSxoPWMueC1mLngsbT1jLnktZi55O2lmKHU9aShoKmgrbSptKSxvKGgpPmUpYnJlYWs7dTw9ZSYmdC5fZHJhd0VkZ2UoYyxmLHMrKDEuMi11L2UpK1wiKVwiKX19LGkucHJvdG90eXBlLl9kcmF3RWRnZT1mdW5jdGlvbih0LGUsbil7dmFyIGk9dGhpcy5jb250ZXh0O2kuYmVnaW5QYXRoKCksaS5zdHJva2VTdHlsZT1uLGkubW92ZVRvKHQueCx0LnkpLGkubGluZVRvKGUueCxlLnkpLGkuc3Ryb2tlKCksaS5jbG9zZVBhdGgoKX0saS5wcm90b3R5cGUuX2V4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Rbbl09ZVtuXX0pLHR9LGkucHJvdG90eXBlLl9oZXgycmdiPWZ1bmN0aW9uKHQpe3ZhciBlPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyh0KTtyZXR1cm4gZT97cjpwYXJzZUludChlWzFdLDE2KSxnOnBhcnNlSW50KGVbMl0sMTYpLGI6cGFyc2VJbnQoZVszXSwxNil9Om51bGx9LG89ZnVuY3Rpb24obixpKXt2YXIgbz10aGlzLHI9TWF0aC5yYW5kb20sYT1pLnNwZWVkO28uY29udGV4dD1uLG8ub3B0aW9ucz1pO3ZhciBzPWUucXVlcnlTZWxlY3RvcihpLnNlbGVjdG9yKTtvLng9cigpKnMub2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoLFwiQk9EWVwiPT09cy5vZmZzZXRQYXJlbnQubm9kZU5hbWU/by55PXIoKSp0LmlubmVySGVpZ2h0Om8ueT1yKCkqcy5vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0LG8udng9cigpKmEqMi1hLG8udnk9cigpKmEqMi1hLG8ucmFkaXVzPXIoKSpyKCkqaS5zaXplVmFyaWF0aW9ucyxvLl9kcmF3KCl9LG8ucHJvdG90eXBlLl9kcmF3PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmNvbnRleHQuc2F2ZSgpLHQuY29udGV4dC50cmFuc2xhdGUodC54LHQueSksdC5jb250ZXh0Lm1vdmVUbygwLDApLHQuY29udGV4dC5hcmMoMCwwLHQucmFkaXVzLDAsMipNYXRoLlBJLCExKSx0LmNvbnRleHQucmVzdG9yZSgpfSxvLnByb3RvdHlwZS5fdXBkYXRlQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLGk9bi54K3RoaXMudngsbz1uLnkrdGhpcy52eSxyPW4ucmFkaXVzO2krcj50P2k9cjppLXI8MCYmKGk9dC1yKSxvK3I+ZT9vPXI6by1yPDAmJihvPWUtciksbi54PWksbi55PW99LHQucmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsbj10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO3JldHVybiBufHwoZS5fdXNpbmdQb2x5ZmlsbD0hMCxmdW5jdGlvbihlKXtyZXR1cm4gdC5zZXRUaW1lb3V0KGUsMWUzLzYwKX0pfSgpLG5ldyBpfSh3aW5kb3csZG9jdW1lbnQpOyFmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJQYXJ0aWNsZXNcIixmdW5jdGlvbigpe3JldHVybiBQYXJ0aWNsZXN9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1QYXJ0aWNsZXM6d2luZG93LlBhcnRpY2xlcz1QYXJ0aWNsZXN9KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3BhcnRpY2xlc2pzL2Rpc3QvcGFydGljbGVzLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9