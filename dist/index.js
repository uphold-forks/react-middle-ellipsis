(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-middle-ellipsis"] = factory(require("react"));
	else
		root["react-middle-ellipsis"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable consistent-return */


var Component = function Component(props) {
  var prepEllipse = function prepEllipse(node) {
    var parent = node.parentNode;
    var child = parent.querySelector(".constrainedChild")
    /* Legacy. */
    || node.childNodes[0];
    var txtToEllipse = parent.querySelector(".ellipseMe") || parent.querySelector(".constrainedEllipse")
    /* Legacy. */
    || child;

    if (child !== null && txtToEllipse !== null) {
      // (Re)-set text back to data-original-text if it exists.
      if (txtToEllipse.hasAttribute("data-original")) {
        txtToEllipse.textContent = txtToEllipse.getAttribute("data-original");
      }

      ellipse( // Use the smaller width.
      node.offsetWidth > parent.offsetWidth ? parent : node, child, txtToEllipse);
    }
  },
      measuredParent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    if (node !== null) {
      window.addEventListener("resize", function () {
        return prepEllipse(node);
      });
      prepEllipse(node);
      return function () {
        return window.removeEventListener("resize", function () {
          return prepEllipse(node);
        });
      };
    }
  }, [props.children]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: measuredParent,
    style: _objectSpread({
      wordBreak: "keep-all",
      overflowWrap: "normal"
    }, props.width && {
      width: props.width
    })
  }, props.children);
};

var ellipse = function ellipse(parentNode, childNode, txtNode) {
  var childWidth = childNode.offsetWidth;
  var containerWidth = parentNode.offsetWidth;
  var txtWidth = txtNode.offsetWidth;
  var targetWidth = childWidth > txtWidth ? childWidth : txtWidth;

  if (targetWidth > containerWidth) {
    var str = txtNode.textContent;
    var txtChars = str.length;
    var avgLetterSize = txtWidth / txtChars;
    var canFit = (containerWidth - (targetWidth - txtWidth)) / avgLetterSize;
    var delEachSide = (txtChars - canFit + 5) / 2;
    var endLeft = Math.floor(txtChars / 2 - delEachSide);
    var startRight = Math.ceil(txtChars / 2 + delEachSide);
    txtNode.setAttribute("data-original", txtNode.textContent);
    txtNode.textContent = str.substr(0, endLeft) + "..." + str.substr(startRight);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1taWRkbGUtZWxsaXBzaXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3JlYWN0LW1pZGRsZS1lbGxpcHNpcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1taWRkbGUtZWxsaXBzaXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbWlkZGxlLWVsbGlwc2lzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJwcmVwRWxsaXBzZSIsIm5vZGUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGROb2RlcyIsInR4dFRvRWxsaXBzZSIsImhhc0F0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiZ2V0QXR0cmlidXRlIiwiZWxsaXBzZSIsIm9mZnNldFdpZHRoIiwibWVhc3VyZWRQYXJlbnQiLCJ1c2VDYWxsYmFjayIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJ3b3JkQnJlYWsiLCJvdmVyZmxvd1dyYXAiLCJ3aWR0aCIsImNoaWxkTm9kZSIsInR4dE5vZGUiLCJjaGlsZFdpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJ0eHRXaWR0aCIsInRhcmdldFdpZHRoIiwic3RyIiwidHh0Q2hhcnMiLCJsZW5ndGgiLCJhdmdMZXR0ZXJTaXplIiwiY2FuRml0IiwiZGVsRWFjaFNpZGUiLCJlbmRMZWZ0IiwiTWF0aCIsImZsb29yIiwic3RhcnRSaWdodCIsImNlaWwiLCJzZXRBdHRyaWJ1dGUiLCJzdWJzdHIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7QUN4RUEsbUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1taWRkbGUtZWxsaXBzaXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3QtbWlkZGxlLWVsbGlwc2lzXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgcHJlcEVsbGlwc2UgPSBub2RlID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IGNoaWxkID1cbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3RyYWluZWRDaGlsZFwiKSAvKiBMZWdhY3kuICovIHx8XG4gICAgICAgIG5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICAgIGNvbnN0IHR4dFRvRWxsaXBzZSA9XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmVsbGlwc2VNZVwiKSB8fFxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdHJhaW5lZEVsbGlwc2VcIikgLyogTGVnYWN5LiAqLyB8fFxuICAgICAgICBjaGlsZDtcblxuICAgICAgaWYgKGNoaWxkICE9PSBudWxsICYmIHR4dFRvRWxsaXBzZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyAoUmUpLXNldCB0ZXh0IGJhY2sgdG8gZGF0YS1vcmlnaW5hbC10ZXh0IGlmIGl0IGV4aXN0cy5cbiAgICAgICAgaWYgKHR4dFRvRWxsaXBzZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9yaWdpbmFsXCIpKSB7XG4gICAgICAgICAgdHh0VG9FbGxpcHNlLnRleHRDb250ZW50ID0gdHh0VG9FbGxpcHNlLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZ2luYWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBlbGxpcHNlKFxuICAgICAgICAgIC8vIFVzZSB0aGUgc21hbGxlciB3aWR0aC5cbiAgICAgICAgICBub2RlLm9mZnNldFdpZHRoID4gcGFyZW50Lm9mZnNldFdpZHRoID8gcGFyZW50IDogbm9kZSxcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICB0eHRUb0VsbGlwc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lYXN1cmVkUGFyZW50ID0gdXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBwcmVwRWxsaXBzZShub2RlKSk7XG4gICAgICAgIHByZXBFbGxpcHNlKG5vZGUpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBwcmVwRWxsaXBzZShub2RlKSk7XG4gICAgICB9XG4gICAgfSwgW3Byb3BzLmNoaWxkcmVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e21lYXN1cmVkUGFyZW50fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd29yZEJyZWFrOiBcImtlZXAtYWxsXCIsXG4gICAgICAgIG92ZXJmbG93V3JhcDogXCJub3JtYWxcIixcbiAgICAgICAgLi4uKHByb3BzLndpZHRoICYmIHsgd2lkdGg6IHByb3BzLndpZHRoIH0pXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGVsbGlwc2UgPSAocGFyZW50Tm9kZSwgY2hpbGROb2RlLCB0eHROb2RlKSA9PiB7XG4gIGNvbnN0IGNoaWxkV2lkdGggPSBjaGlsZE5vZGUub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gcGFyZW50Tm9kZS5vZmZzZXRXaWR0aDtcbiAgY29uc3QgdHh0V2lkdGggPSB0eHROb2RlLm9mZnNldFdpZHRoO1xuICBjb25zdCB0YXJnZXRXaWR0aCA9IGNoaWxkV2lkdGggPiB0eHRXaWR0aCA/IGNoaWxkV2lkdGggOiB0eHRXaWR0aDtcblxuICBpZiAodGFyZ2V0V2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuICAgIGNvbnN0IHN0ciA9IHR4dE5vZGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdHh0Q2hhcnMgPSBzdHIubGVuZ3RoO1xuICAgIGNvbnN0IGF2Z0xldHRlclNpemUgPSB0eHRXaWR0aCAvIHR4dENoYXJzO1xuICAgIGNvbnN0IGNhbkZpdCA9IChjb250YWluZXJXaWR0aCAtICh0YXJnZXRXaWR0aCAtIHR4dFdpZHRoKSkgLyBhdmdMZXR0ZXJTaXplO1xuICAgIGNvbnN0IGRlbEVhY2hTaWRlID0gKHR4dENoYXJzIC0gY2FuRml0ICsgNSkgLyAyO1xuICAgIGNvbnN0IGVuZExlZnQgPSBNYXRoLmZsb29yKHR4dENoYXJzIC8gMiAtIGRlbEVhY2hTaWRlKTtcbiAgICBjb25zdCBzdGFydFJpZ2h0ID0gTWF0aC5jZWlsKHR4dENoYXJzIC8gMiArIGRlbEVhY2hTaWRlKTtcblxuICAgIHR4dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmlnaW5hbFwiLCB0eHROb2RlLnRleHRDb250ZW50KTtcbiAgICB0eHROb2RlLnRleHRDb250ZW50ID1cbiAgICAgIHN0ci5zdWJzdHIoMCwgZW5kTGVmdCkgKyBcIi4uLlwiICsgc3RyLnN1YnN0cihzdGFydFJpZ2h0KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==