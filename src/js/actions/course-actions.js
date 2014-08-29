var CourseConstants = require('../constants/course-constants');
var CourseDispatcher = require('../dispatchers/course-dispatcher');

var CourseActions = {
  addCourseToHistory: function(id) {
    CourseDispatcher.handleViewAction({
      actionType: CourseConstants.COURSE_ADD_TO_HISTORY,
      id: id
    });
  },

  updateCourseTitle: function(title, id) {
    console.log(title, id);
    CourseDispatcher.handleViewAction({
      actionType: CourseConstants.COURSE_UPDATE_TITLE,
      title: title,
      id: id
    });
  }
};

module.exports = CourseActions;
