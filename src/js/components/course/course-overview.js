/** @jsx React.DOM */
var React = require('react');
var CourseStore = require('../../stores/course-store');
var StoreWatchMixin = require('../../mixins/store-watch');

function getCourse(component) {
  var thisCourse;

  CourseStore.getCourses().forEach(function(course) {
    if (course.id.toString() === component.props.course) {
      thisCourse = course;
    }
  });

  return { course: thisCourse };
}

var CourseOverview = React.createClass({
  mixins: [StoreWatchMixin(getCourse, CourseStore)],

  render: function() {
    return (
      <div className="course-overview">
        <h2>{this.state.course.title}</h2>
        <p>{this.state.course.description}</p>
      </div>
    );
  }
});

module.exports = CourseOverview;
