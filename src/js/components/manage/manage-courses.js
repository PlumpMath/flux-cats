/** @jsx React.DOM */
var React = require('react');
var CourseActions = require('../../actions/course-actions');
var CourseStore = require('../../stores/course-store');
var StoreWatchMixin = require('../../mixins/store-watch');
var PreviousCourse = require('./previous-course');
var Link = require('react-router-component').Link;

function courseHistory() {
  return { courseHistory: CourseStore.getCourseHistory() };
}

var Manage = React.createClass({
  mixins: [StoreWatchMixin(courseHistory, CourseStore)],

  render: function() {
    var courseHistory = this.state.courseHistory.map(function(course) {
      return (
        <PreviousCourse course={course} />
      );
    });

    return (
      <div className="course-history-container">
        <div className="course course-history">
          <Link className="course-btn" href="/">
            <p>All</p>
          </Link>
        </div>
        {courseHistory}
      </div>
    );
  }
});

module.exports = Manage;
