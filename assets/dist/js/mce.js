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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/source/3.0/mce-js/mce-buttons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/source/3.0/mce-js/mce-buttons.js":
/*!*************************************************!*\
  !*** ./assets/source/3.0/mce-js/mce-buttons.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  if (typeof tinymce !== 'undefined') {\n    tinymce.PluginManager.add('mce_hbg_buttons', function (editor, url) {\n      editor.addButton('mce_hbg_buttons', {\n        text: 'Button',\n        icon: '',\n        context: 'insert',\n        tooltip: 'Add button',\n        cmd: 'mce_hbg_buttons'\n      });\n      editor.addCommand('mce_hbg_buttons', function () {\n        editor.windowManager.open({\n          title: 'Add button',\n          url: mce_hbg_buttons.themeUrl + '/library/Admin/TinyMce/MceButtons/mce-buttons-template.php',\n          width: 500,\n          height: 420,\n          buttons: [{\n            text: 'Insert',\n            onclick: function onclick(e) {\n              var $iframe = jQuery('.mce-container-body.mce-window-body.mce-abs-layout iframe').contents();\n              var btnClass = $iframe.find('#preview a').attr('class');\n              var btnText = $iframe.find('#btnText').val();\n              var btnLink = $iframe.find('#btnLink').val();\n              var button = '<a href=\"' + btnLink + '\">' + '<button class=\"' + btnClass + '\">' + '<span class=\"c-button__label\">' + '<span class=\"c-button__label-text\">' + btnText + '</span></span></button></a>';\n              editor.insertContent(button);\n              editor.windowManager.close();\n              return true;\n            }\n          }]\n        }, {\n          stylesSheet: mce_hbg_buttons.styleSheet\n        });\n      });\n    });\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc291cmNlLzMuMC9tY2UtanMvbWNlLWJ1dHRvbnMuanM/ZmE3MCJdLCJuYW1lcyI6WyJ0aW55bWNlIiwiUGx1Z2luTWFuYWdlciIsImFkZCIsImVkaXRvciIsInVybCIsImFkZEJ1dHRvbiIsInRleHQiLCJpY29uIiwiY29udGV4dCIsInRvb2x0aXAiLCJjbWQiLCJhZGRDb21tYW5kIiwid2luZG93TWFuYWdlciIsIm9wZW4iLCJ0aXRsZSIsIm1jZV9oYmdfYnV0dG9ucyIsInRoZW1lVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b25zIiwib25jbGljayIsImUiLCIkaWZyYW1lIiwialF1ZXJ5IiwiY29udGVudHMiLCJidG5DbGFzcyIsImZpbmQiLCJhdHRyIiwiYnRuVGV4dCIsInZhbCIsImJ0bkxpbmsiLCJidXR0b24iLCJpbnNlcnRDb250ZW50IiwiY2xvc2UiLCJzdHlsZXNTaGVldCIsInN0eWxlU2hlZXQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBVztBQUNSLE1BQUksT0FBT0EsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ0EsV0FBTyxDQUFDQyxhQUFSLENBQXNCQyxHQUF0QixDQUEwQixpQkFBMUIsRUFBNkMsVUFBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0I7QUFDL0RELFlBQU0sQ0FBQ0UsU0FBUCxDQUFpQixpQkFBakIsRUFBb0M7QUFDaENDLFlBQUksRUFBRSxRQUQwQjtBQUVoQ0MsWUFBSSxFQUFFLEVBRjBCO0FBR2hDQyxlQUFPLEVBQUUsUUFIdUI7QUFJaENDLGVBQU8sRUFBRSxZQUp1QjtBQUtoQ0MsV0FBRyxFQUFFO0FBTDJCLE9BQXBDO0FBUUFQLFlBQU0sQ0FBQ1EsVUFBUCxDQUFrQixpQkFBbEIsRUFBcUMsWUFBVztBQUM1Q1IsY0FBTSxDQUFDUyxhQUFQLENBQXFCQyxJQUFyQixDQUNJO0FBQ0lDLGVBQUssRUFBRSxZQURYO0FBRUlWLGFBQUcsRUFDQ1csZUFBZSxDQUFDQyxRQUFoQixHQUNBLDREQUpSO0FBS0lDLGVBQUssRUFBRSxHQUxYO0FBTUlDLGdCQUFNLEVBQUUsR0FOWjtBQU9JQyxpQkFBTyxFQUFFLENBQ0w7QUFDSWIsZ0JBQUksRUFBRSxRQURWO0FBRUljLG1CQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWTtBQUNqQixrQkFBSUMsT0FBTyxHQUFHQyxNQUFNLENBQ2hCLDJEQURnQixDQUFOLENBRVpDLFFBRlksRUFBZDtBQUdBLGtCQUFJQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLFlBQWIsRUFBMkJDLElBQTNCLENBQWdDLE9BQWhDLENBQWY7QUFDQSxrQkFBSUMsT0FBTyxHQUFHTixPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFiLEVBQXlCRyxHQUF6QixFQUFkO0FBQ0Esa0JBQUlDLE9BQU8sR0FBR1IsT0FBTyxDQUFDSSxJQUFSLENBQWEsVUFBYixFQUF5QkcsR0FBekIsRUFBZDtBQUNBLGtCQUFJRSxNQUFNLEdBQ04sY0FDQUQsT0FEQSxHQUVBLElBRkEsR0FHQSxpQkFIQSxHQUlBTCxRQUpBLEdBS0EsSUFMQSxHQU1BLGdDQU5BLEdBT0EscUNBUEEsR0FRQUcsT0FSQSxHQVNBLDZCQVZKO0FBV0F6QixvQkFBTSxDQUFDNkIsYUFBUCxDQUFxQkQsTUFBckI7QUFDQTVCLG9CQUFNLENBQUNTLGFBQVAsQ0FBcUJxQixLQUFyQjtBQUNBLHFCQUFPLElBQVA7QUFDSDtBQXZCTCxXQURLO0FBUGIsU0FESixFQW9DSTtBQUNJQyxxQkFBVyxFQUFFbkIsZUFBZSxDQUFDb0I7QUFEakMsU0FwQ0o7QUF3Q0gsT0F6Q0Q7QUEwQ0gsS0FuREQ7QUFvREg7QUFDSixDQXZERCIsImZpbGUiOiIuL2Fzc2V0cy9zb3VyY2UvMy4wL21jZS1qcy9tY2UtYnV0dG9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHRpbnltY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoJ21jZV9oYmdfYnV0dG9ucycsIGZ1bmN0aW9uKGVkaXRvciwgdXJsKSB7XG4gICAgICAgICAgICBlZGl0b3IuYWRkQnV0dG9uKCdtY2VfaGJnX2J1dHRvbnMnLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0J1dHRvbicsXG4gICAgICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ2luc2VydCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJ0FkZCBidXR0b24nLFxuICAgICAgICAgICAgICAgIGNtZDogJ21jZV9oYmdfYnV0dG9ucycsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZV9oYmdfYnV0dG9ucycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVkaXRvci53aW5kb3dNYW5hZ2VyLm9wZW4oXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWRkIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWNlX2hiZ19idXR0b25zLnRoZW1lVXJsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2xpYnJhcnkvQWRtaW4vVGlueU1jZS9NY2VCdXR0b25zL21jZS1idXR0b25zLXRlbXBsYXRlLnBocCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW5zZXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpZnJhbWUgPSBqUXVlcnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5tY2UtY29udGFpbmVyLWJvZHkubWNlLXdpbmRvdy1ib2R5Lm1jZS1hYnMtbGF5b3V0IGlmcmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuY29udGVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidG5DbGFzcyA9ICRpZnJhbWUuZmluZCgnI3ByZXZpZXcgYScpLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnRuVGV4dCA9ICRpZnJhbWUuZmluZCgnI2J0blRleHQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidG5MaW5rID0gJGlmcmFtZS5maW5kKCcjYnRuTGluaycpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5MaW5rICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DbGFzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImMtYnV0dG9uX19sYWJlbFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImMtYnV0dG9uX19sYWJlbC10ZXh0XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj48L3NwYW4+PC9idXR0b24+PC9hPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudChidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLndpbmRvd01hbmFnZXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNTaGVldDogbWNlX2hiZ19idXR0b25zLnN0eWxlU2hlZXQsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/source/3.0/mce-js/mce-buttons.js\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJqcy9tY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zb3VyY2UvMy4wL21jZS1qcy9tY2UtYnV0dG9ucy5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=