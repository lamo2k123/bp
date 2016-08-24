/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ function(module, exports) {

	"use strict";

	/*
	import { render } from 'react-dom';
	import { resolve } from 'universal-router';
	import { createHistory } from 'history';


	import routes from 'route';

	const removeHistoryListener = createHistory.listen(function(location) {
	    console.log('dddd', ...arguments);/!*
	    resolve(routes, {
	        path: location.pathname,
	        query: location.query,
	        state: location.state,
	        context,
	        render: render.bind(undefined, container, location.state), // eslint-disable-line react/jsx-no-bind, max-len
	    }).catch(err => console.error(err));*!/
	});
	createHistory.replace(createHistory.getCurrentLocation());

	// render(, document.getElementById('app'));*/

	console.log(123);

/***/ }
/******/ ]);