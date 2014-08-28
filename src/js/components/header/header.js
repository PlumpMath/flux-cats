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
          <a className="link">Create</a>
          <a className="link">Develop</a>
          <a className="link">Learn</a>
        </div>
      </header>
    );
  }
});

module.exports = Header;
