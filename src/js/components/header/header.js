/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <Link className="logo" href="/"></Link>
        <div className="avatar"></div>
        <div className="links">
          <a className="link">action</a>
          <a className="link">action</a>
          <a className="link">action</a>
        </div>
      </header>
    );
  }
});

module.exports = Header;
