/** @jsx React.DOM */
var React = require('react');
var CourseStore = require('../../stores/course-store');
var CourseActions = require('../../actions/course-actions');
var StoreWatchMixin = require('../../mixins/store-watch');
var Link = require('react-router-component').Link;

var CourseOverview = require('../course/course-overview');

function course(component) {
  var id = component.props.course.id;

  return { course: CourseStore.getCourse(id) };
}

var PreviousCourse = React.createClass({
  mixins: [StoreWatchMixin(course, CourseStore)],

  handleEdit: function(e) {
    var id = this.state.course.id;
    var newTitle = this.refs.title.getDOMNode().innerHTML;

    CourseActions.updateCourseTitle(newTitle, id);
  },

  // stop navigation if somebody clicks editable text
  handleClick: function(e) {
    return false;
  },

  render: function() {
    return (
      <div className="course course-history">
        <Link className="course-btn" href={"/course/" + this.state.course.id}>
          <p
            ref="title"
            contentEditable="true"
            onBlur={this.handleEdit}
            onClick={this.handleClick}
            className="editable">
            {this.state.course.title}
          </p>
        </Link>
      </div>
    );
  }
});

module.exports = PreviousCourse;
