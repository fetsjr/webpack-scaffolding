/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 327);
/******/ })
/************************************************************************/
/******/ ({

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _styles = __webpack_require__(328);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// function AppComponent() {\n// \tvar element = document.createElement('h1');\n// \tvar textNode = document.createTextNode('Webpack Scaffolding is working');\n// \telement.appendChild(textNode);\n\n// \tdocument.body.appendChild(element);\n// }\n\n// AppComponent();\n\nvar app;\n\nvar config = {};\n\nvar AppComponent = function AppComponent() {\n  app = document.createElement('div');\n  app.id = \"app\";\n  app.className = \"\";\n  var h1 = document.createElement('h1');\n  var textNode = document.createTextNode('Webpack Scaffolding is working');\n  h1.appendChild(textNode);\n  app.appendChild(h1);\n  document.body.className = \"\";\n  document.body.appendChild(app);\n};\n\nAppComponent();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJhcHAiLCJjb25maWciLCJBcHBDb21wb25lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTmFtZSIsImgxIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFJQSxHQUFKOztBQUVBLElBQU1DLFNBQVMsRUFBZjs7QUFFQSxJQUFJQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkYsUUFBTUcsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ0FKLE1BQUlLLEVBQUosR0FBUyxLQUFUO0FBQ0FMLE1BQUlNLFNBQUosR0FBZ0IsRUFBaEI7QUFDQSxNQUFJQyxLQUFLSixTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQSxNQUFJSSxXQUFXTCxTQUFTTSxjQUFULENBQXdCLGdDQUF4QixDQUFmO0FBQ0FGLEtBQUdHLFdBQUgsQ0FBZUYsUUFBZjtBQUNBUixNQUFJVSxXQUFKLENBQWdCSCxFQUFoQjtBQUNBSixXQUFTUSxJQUFULENBQWNMLFNBQWQsR0FBMEIsRUFBMUI7QUFDQUgsV0FBU1EsSUFBVCxDQUFjRCxXQUFkLENBQTBCVixHQUExQjtBQUNELENBVkQ7O0FBWUFFIiwiZmlsZSI6IjMyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzJztcclxuXHJcbi8vIGZ1bmN0aW9uIEFwcENvbXBvbmVudCgpIHtcclxuLy8gXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbi8vIFx0dmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1dlYnBhY2sgU2NhZmZvbGRpbmcgaXMgd29ya2luZycpO1xyXG4vLyBcdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cclxuLy8gXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4vLyB9XHJcblxyXG4vLyBBcHBDb21wb25lbnQoKTtcclxuXHJcbnZhciBhcHA7XHJcblxyXG5jb25zdCBjb25maWcgPSB7fTtcclxuXHJcbnZhciBBcHBDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXBwLmlkID0gXCJhcHBcIjtcclxuICBhcHAuY2xhc3NOYW1lID0gXCJcIjtcclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGxldCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdXZWJwYWNrIFNjYWZmb2xkaW5nIGlzIHdvcmtpbmcnKTtcclxuICBoMS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcbiAgYXBwLmFwcGVuZENoaWxkKGgxKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xyXG59XHJcblxyXG5BcHBDb21wb25lbnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///327\n");

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz9iMDkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///328\n");

/***/ })

/******/ });