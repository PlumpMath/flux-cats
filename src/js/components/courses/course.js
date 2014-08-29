/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var Course = React.createClass({
  render: function() {
    return (
      <div className="course-container">
        <p>{this.props.course.title}</p>
        <p>{this.props.course.summary}</p>
        <img className="thumbnail" src={this.props.course.thumbnail} />
        <Link href={"/course/" + this.props.course.id}>
          Learn more
        </Link>
      </div>
    );
  }
});

module.exports = Course;
