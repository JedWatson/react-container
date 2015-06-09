require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var Container = require('react-container');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		var items = [];
		for (var i = 0; i < 42; i++) items.push(i);
		return React.createElement(
			'div',
			{ style: { background: '#eee', width: 480, height: 540, padding: 10 } },
			React.createElement(
				Container,
				{ fill: true, style: { background: 'white' } },
				React.createElement(
					Container,
					{ direction: 'column' },
					React.createElement(
						Container,
						{ style: { background: '#ddd' } },
						'Header'
					),
					React.createElement(
						Container,
						{ style: { background: 'white' }, fill: true },
						React.createElement(
							Container,
							{ scrollable: true },
							items.map(function (i) {
								return React.createElement(
									'div',
									{ style: { padding: 10 } },
									'Item ',
									i
								);
							})
						)
					)
				)
			)
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-container":undefined}]},{},[1]);
