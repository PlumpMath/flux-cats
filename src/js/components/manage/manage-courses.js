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
    var component = this;

    // make "all" active if no id passed in
    var classNames = (!this.props.id) ? 'course-btn active' : 'course-btn';

    var courseHistory = this.state.courseHistory.map(function(course) {
      var active = component.props.id === course.id;

      return (
        <PreviousCourse course={course} active={active} />
      );
    });

    return (
      <div className="course-history-container">
        <h2>Course history</h2>
        <div className="course course-history">
          <Link className={classNames} href="/">
            <p>All</p>
          </Link>
        </div>
        {courseHistory}
      </div>
    );
  }
});

module.exports = Manage;
