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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/source/3.0/mce-js/mce-pricons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/source/3.0/mce-js/mce-pricons.js":
/*!*************************************************!*\
  !*** ./assets/source/3.0/mce-js/mce-pricons.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  tinymce.PluginManager.add('pricons', function (editor, url) {\n    editor.addButton('pricons', {\n      text: '',\n      icon: 'pricon-smiley-cool',\n      context: 'insert',\n      tooltip: 'Pricon',\n      cmd: 'openInsertPiconModal'\n    });\n    editor.addCommand('openInsertPiconModal', function () {\n      editor.windowManager.open({\n        title: 'Pricons',\n        url: url + '/mce-picons.php',\n        width: 500,\n        height: 400,\n        buttons: [{\n          text: 'Insert',\n          onclick: function onclick(e) {\n            var $iframe = jQuery('.mce-container-body.mce-window-body.mce-abs-layout iframe').contents();\n            var size = $iframe.find('[name=\"pricon-size\"]').val();\n            var color = $iframe.find('[name=\"pricon-color\"]').val();\n            var icon = $iframe.find('[name=\"pricon-icon\"]').val();\n\n            if (!icon.length) {\n              editor.windowManager.close();\n              return false;\n            }\n\n            var shortcode = '[pricon icon=\"' + icon + '\"';\n\n            if (color.length) {\n              shortcode = shortcode + ' color=\"' + color + '\"';\n            }\n\n            if (size.length) {\n              shortcode = shortcode + ' size=\"' + size + '\"';\n            }\n\n            shortcode = shortcode + ']';\n            editor.insertContent(shortcode);\n            editor.windowManager.close();\n            return true;\n          }\n        }]\n      });\n    });\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc291cmNlLzMuMC9tY2UtanMvbWNlLXByaWNvbnMuanM/OWQzNiJdLCJuYW1lcyI6WyJ0aW55bWNlIiwiUGx1Z2luTWFuYWdlciIsImFkZCIsImVkaXRvciIsInVybCIsImFkZEJ1dHRvbiIsInRleHQiLCJpY29uIiwiY29udGV4dCIsInRvb2x0aXAiLCJjbWQiLCJhZGRDb21tYW5kIiwid2luZG93TWFuYWdlciIsIm9wZW4iLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9ucyIsIm9uY2xpY2siLCJlIiwiJGlmcmFtZSIsImpRdWVyeSIsImNvbnRlbnRzIiwic2l6ZSIsImZpbmQiLCJ2YWwiLCJjb2xvciIsImxlbmd0aCIsImNsb3NlIiwic2hvcnRjb2RlIiwiaW5zZXJ0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFXO0FBQ1JBLFNBQU8sQ0FBQ0MsYUFBUixDQUFzQkMsR0FBdEIsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0I7QUFDdkRELFVBQU0sQ0FBQ0UsU0FBUCxDQUFpQixTQUFqQixFQUE0QjtBQUN4QkMsVUFBSSxFQUFFLEVBRGtCO0FBRXhCQyxVQUFJLEVBQUUsb0JBRmtCO0FBR3hCQyxhQUFPLEVBQUUsUUFIZTtBQUl4QkMsYUFBTyxFQUFFLFFBSmU7QUFLeEJDLFNBQUcsRUFBRTtBQUxtQixLQUE1QjtBQVNBUCxVQUFNLENBQUNRLFVBQVAsQ0FBa0Isc0JBQWxCLEVBQTBDLFlBQVc7QUFDakRSLFlBQU0sQ0FBQ1MsYUFBUCxDQUFxQkMsSUFBckIsQ0FBMEI7QUFDdEJDLGFBQUssRUFBRSxTQURlO0FBRXRCVixXQUFHLEVBQUVBLEdBQUcsR0FBRyxpQkFGVztBQUd0QlcsYUFBSyxFQUFFLEdBSGU7QUFJdEJDLGNBQU0sRUFBRSxHQUpjO0FBS3RCQyxlQUFPLEVBQUUsQ0FDTDtBQUNJWCxjQUFJLEVBQUUsUUFEVjtBQUVJWSxpQkFBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVk7QUFDakIsZ0JBQUlDLE9BQU8sR0FBR0MsTUFBTSxDQUFDLDJEQUFELENBQU4sQ0FBb0VDLFFBQXBFLEVBQWQ7QUFDQSxnQkFBSUMsSUFBSSxHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxzQkFBYixFQUFxQ0MsR0FBckMsRUFBWDtBQUNBLGdCQUFJQyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLHVCQUFiLEVBQXNDQyxHQUF0QyxFQUFaO0FBQ0EsZ0JBQUlsQixJQUFJLEdBQUdhLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLHNCQUFiLEVBQXFDQyxHQUFyQyxFQUFYOztBQUVBLGdCQUFJLENBQUNsQixJQUFJLENBQUNvQixNQUFWLEVBQWtCO0FBQ2R4QixvQkFBTSxDQUFDUyxhQUFQLENBQXFCZ0IsS0FBckI7QUFDQSxxQkFBTyxLQUFQO0FBQ0g7O0FBRUQsZ0JBQUlDLFNBQVMsR0FBRyxtQkFBbUJ0QixJQUFuQixHQUEwQixHQUExQzs7QUFFQSxnQkFBSW1CLEtBQUssQ0FBQ0MsTUFBVixFQUFrQjtBQUNkRSx1QkFBUyxHQUFHQSxTQUFTLEdBQUcsVUFBWixHQUF5QkgsS0FBekIsR0FBaUMsR0FBN0M7QUFDSDs7QUFFRCxnQkFBSUgsSUFBSSxDQUFDSSxNQUFULEVBQWlCO0FBQ2JFLHVCQUFTLEdBQUdBLFNBQVMsR0FBRyxTQUFaLEdBQXdCTixJQUF4QixHQUErQixHQUEzQztBQUNIOztBQUVETSxxQkFBUyxHQUFHQSxTQUFTLEdBQUcsR0FBeEI7QUFFQTFCLGtCQUFNLENBQUMyQixhQUFQLENBQXFCRCxTQUFyQjtBQUVBMUIsa0JBQU0sQ0FBQ1MsYUFBUCxDQUFxQmdCLEtBQXJCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBN0JMLFNBREs7QUFMYSxPQUExQjtBQXdDSCxLQXpDRDtBQTBDSCxHQXBERDtBQXFESCxDQXRERCIsImZpbGUiOiIuL2Fzc2V0cy9zb3VyY2UvMy4wL21jZS1qcy9tY2UtcHJpY29ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICB0aW55bWNlLlBsdWdpbk1hbmFnZXIuYWRkKCdwcmljb25zJywgZnVuY3Rpb24oZWRpdG9yLCB1cmwpIHtcbiAgICAgICAgZWRpdG9yLmFkZEJ1dHRvbigncHJpY29ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ3ByaWNvbi1zbWlsZXktY29vbCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW5zZXJ0JyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICdQcmljb24nLFxuICAgICAgICAgICAgY21kOiAnb3Blbkluc2VydFBpY29uTW9kYWwnXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgZWRpdG9yLmFkZENvbW1hbmQoJ29wZW5JbnNlcnRQaWNvbk1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ByaWNvbnMnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsICsgJy9tY2UtcGljb25zLnBocCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbnNlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaWZyYW1lID0galF1ZXJ5KCcubWNlLWNvbnRhaW5lci1ib2R5Lm1jZS13aW5kb3ctYm9keS5tY2UtYWJzLWxheW91dCBpZnJhbWUnKS5jb250ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gJGlmcmFtZS5maW5kKCdbbmFtZT1cInByaWNvbi1zaXplXCJdJykudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gJGlmcmFtZS5maW5kKCdbbmFtZT1cInByaWNvbi1jb2xvclwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uID0gJGlmcmFtZS5maW5kKCdbbmFtZT1cInByaWNvbi1pY29uXCJdJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci53aW5kb3dNYW5hZ2VyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hvcnRjb2RlID0gJ1twcmljb24gaWNvbj1cIicgKyBpY29uICsgJ1wiJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlID0gc2hvcnRjb2RlICsgJyBjb2xvcj1cIicgKyBjb2xvciArICdcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpemUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZSA9IHNob3J0Y29kZSArICcgc2l6ZT1cIicgKyBzaXplICsgJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGUgPSBzaG9ydGNvZGUgKyAnXSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudChzaG9ydGNvZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLndpbmRvd01hbmFnZXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/source/3.0/mce-js/mce-pricons.js\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJqcy9tY2UtcHJpY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NvdXJjZS8zLjAvbWNlLWpzL21jZS1wcmljb25zLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==