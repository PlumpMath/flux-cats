/** @jsx React.DOM */
var React = require('react');
var CourseStore = require('../../stores/course-store');
var StoreWatchMixin = require('../../mixins/store-watch');
var Course = require('./course');

function getCourses() {
  return { courses: CourseStore.getCourses() };
}

var Courses = React.createClass({
  mixins: [StoreWatchMixin(getCourses, CourseStore)],

  render: function() {
    var courses = this.state.courses.map(function(course) {
      return <Course course={course} />;
    });

    return (
      <div className="courses-container">
        <h2>Courses view</h2>
        {courses}
      </div>
    );
  }
});

module.exports = Courses;
