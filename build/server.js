(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
  !*** ./server.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _http = __webpack_require__(/*! http */ 1);

	var _http2 = _interopRequireDefault(_http);

	var _https = __webpack_require__(/*! https */ 2);

	var _https2 = _interopRequireDefault(_https);

	var _express = __webpack_require__(/*! express */ 3);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _cookieParser = __webpack_require__(/*! cookie-parser */ 5);

	var _cookieParser2 = _interopRequireDefault(_cookieParser);

	var _bodyParser = __webpack_require__(/*! body-parser */ 6);

	var _universalRouter = __webpack_require__(/*! universal-router */ 7);

	var _server = __webpack_require__(/*! react-dom/server */ 8);

	var _index = __webpack_require__(/*! ./routes/index */ 9);

	var _index2 = _interopRequireDefault(_index);

	var _configs = __webpack_require__(/*! ./../configs */ 13);

	var _configs2 = _interopRequireDefault(_configs);

	var _html = __webpack_require__(/*! component/html */ 14);

	var _html2 = _interopRequireDefault(_html);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const app = (0, _express2.default)();

	app.use((0, _cookieParser2.default)());
	app.use((0, _bodyParser.urlencoded)({ extended: true }));
	app.use((0, _bodyParser.json)());

	app.get('*', (req, res, next) => {
	    let statusCode = 200;
	    /*
	            let css = [];
	    
	            const data = { title: '', description: '', style: '', script: assets.main.js, children: '' };
	    */

	    console.log();

	    (0, _universalRouter.resolve)(_index2.default, {
	        path: req.path,
	        query: req.query,
	        context: {
	            /*                insertCss: (...styles) => {
	                                styles.forEach(style => css.push(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
	                            },
	                            setTitle: value => (data.title = value),
	                            setMeta: (key, value) => (data[key] = value),*/
	        },
	        render: (component, status = 200) => {
	            console.log('RENDER', component, status);
	            // statusCode = status;
	            /*                data.children = ReactDOM.renderToString(component);
	                            data.style = css.join('');*/
	            return component;
	        }
	    }).then(component => {
	        console.log('RESOLVE', component);
	        const props = {
	            children: (0, _server.renderToString)(component)
	        };

	        console.log('props', props);

	        const html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_html2.default, props));

	        console.log('RES');
	        res.status(200);
	        res.send(`<!doctype html>${ html }`);
	    }, error => {
	        console.log('error', error);
	    });
	});

	let server = app;

	if (_configs2.default.server.protocol == 'https') {
	    server = _https2.default.createServer(_configs2.default.server.options, app);
	} else {
	    server = _http2.default.createServer(app);
	}

	server.listen(_configs2.default.server.port, _configs2.default.server.hostname, _configs2.default.server.backlog, () => {
	    console.log('Listen port %s, hostname %s, backlog %s', _configs2.default.server.port, _configs2.default.server.hostname, _configs2.default.server.backlog);
	});

/***/ },
/* 1 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 2 */
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("https");

/***/ },
/* 3 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/*!***********************************!*\
  !*** external "universal-router" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("universal-router");

/***/ },
/* 8 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 9 */
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _app = __webpack_require__(/*! component/app */ 10);

	var _app2 = _interopRequireDefault(_app);

	var _test = __webpack_require__(/*! route/test */ 12);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Child routes
	/*import home from './home';
	import contact from './contact';
	import login from './login';
	import register from './register';
	import content from './content';
	import error from './error';*/

	exports.default = {
	    path: '/',
	    children: [_test2.default
	    /*        home,
	            contact,
	            login,
	            register,
	    
	            // place new routes before...
	            content,
	            error,*/
	    ],

	    action: ({ next, render, context }) => {
	        // console.log('action', next, render, context);
	        const component = next();

	        return component.then(result => {
	            return render(_react2.default.createElement(
	                _app2.default,
	                { context: context },
	                result
	            ));
	        }, console.log);
	    }

	};

/***/ },
/* 10 */
/*!*********************************!*\
  !*** ./components/app/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.style = exports.default = undefined;

	var _style = __webpack_require__(/*! ./style */ 11);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	class App extends _react.Component {

	    render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'div',
	                null,
	                'header'
	            ),
	            this.props.children,
	            _react2.default.createElement(
	                'div',
	                null,
	                'footer'
	            )
	        );
	    }

	}

	App.propTypes = {};
	exports.default = App;
	exports.style = _style2.default;

/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./components/app/style.pcss ***!
  \***********************************/
/***/ function(module, exports) {

	

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./routes/test/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	class Contact extends _react.Component {
	    render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            'Contact1'
	        );
	    }
	}

	exports.default = {

	    path: '/contact',

	    action: () => {
	        return _react2.default.createElement(Contact, null);
	    }

	};

/***/ },
/* 13 */
/*!*********************!*\
  !*** ../configs.js ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = {
	    "server" : {
	        "protocol"  : "http", // or https
	        "port"      : 3000,
	        "hostname"  : "0.0.0.0",
	        "backlog"   : 511,
	        "options"   : {
	            "key" : "ssl/key.pem",
	            "cert": "ssl/cert.pem",
	            // or
	            "pfx" : "ssl/server.pfx"
	        }
	    }
	};

/***/ },
/* 14 */
/*!**********************************!*\
  !*** ./components/html/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.style = exports.default = undefined;

	var _style = __webpack_require__(/*! ./style */ 15);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	class Html extends _react.Component {

	    render() {
	        return _react2.default.createElement(
	            'html',
	            null,
	            _react2.default.createElement('head', null),
	            _react2.default.createElement(
	                'body',
	                null,
	                _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.children } }),
	                '123',
	                _react2.default.createElement('script', { src: '/build/client.js' })
	            )
	        );
	    }

	}

	Html.displayName = 'Components [html]';
	Html.defaultProps = {};
	Html.propTypes = {};
	exports.default = Html;
	exports.style = _style2.default;

/***/ },
/* 15 */
/*!************************************!*\
  !*** ./components/html/style.pcss ***!
  \************************************/
/***/ function(module, exports) {

	

/***/ }
/******/ ])));