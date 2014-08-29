/** @jsx React.DOM */
var React = require('react');
var CourseStore = require('../../stores/course-store');
var CourseActions = require('../../actions/course-actions');
var StoreWatchMixin = require('../../mixins/store-watch');
var Link = require('react-router-component').Link;

function course(component) {
  var id = component.props.course.id;

  return { course: CourseStore.getCourse(id) };
}

var PreviousCourse = React.createClass({
  mixins: [StoreWatchMixin(course, CourseStore)],

  handleEdit: function(e) {
    var id = this.state.course.id;
    // if you must reference an actual DOM node this is how you do it
    var newTitle = this.refs.title.getDOMNode().innerHTML;

    CourseActions.updateCourseTitle(newTitle, id);
  },

  // stop navigation if somebody clicks editable text
  handleClick: function(e) {
    return false;
  },

  render: function() {
    // attach active classname if prop active?
    var classNames = (this.props.active) ? 'course-btn active' : 'course-btn';

    return (
      <div className="course course-history">
        <Link className={classNames} href={"/course/" + this.state.course.id}>
          <p
            ref="title"
            contentEditable="true"
            onBlur={this.handleEdit}
            onClick={this.handleClick}
            className='edtitable'>
            {this.state.course.title}
          </p>
        </Link>
      </div>
    );
  }
});

module.exports = PreviousCourse;
