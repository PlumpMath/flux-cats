/** @jsx React.DOM */
var React = require('react');
var CourseStore = require('../../stores/course-store');
var CourseActions = require('../../actions/course-actions');
var StoreWatchMixin = require('../../mixins/store-watch');

function getCourse(component, id) {
  // id is passed in if the component calls this to manually update state
  var course = (id) ?
    CourseStore.getCourse(id) :
    CourseStore.getCourse(component.props.id);

  return { course: course };
}

var CourseOverview = React.createClass({
  mixins: [StoreWatchMixin(getCourse, CourseStore)],

  componentWillMount: function() {
    CourseActions.addCourseToHistory(this.state.course.id);
  },

  /**
   * This manually updates the state if new course is received
   * from the router.
   * @param {object} nextProps The new course to be rendered
   */
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState(getCourse(null, nextProps.id));
    }
  },

  handleEdit: function(e) {
    var newTitle = this.refs.title.getDOMNode().innerHTML;

    CourseActions.updateCourseTitle(newTitle, this.state.course.id);
  },

  render: function() {
    return (
      <div className="course-overview">
        <div>
          <h2
            className="editable"
            contentEditable="true"
            ref="title"
            onBlur={this.handleEdit}>
            {this.state.course.title}
          </h2>
        </div>
        <img className="cover" src={this.state.course.cover} />
        <p>{this.state.course.description}</p>
      </div>
    );
  }
});

module.exports = CourseOverview;
