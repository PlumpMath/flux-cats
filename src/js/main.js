/** @jsx React.DOM */
var React = require('react');
var App = require('./components/app');

/**
 * Entry point for the React application.
 */

React.renderComponent(<App />, document.querySelector('#app'));
