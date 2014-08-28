var CourseConstants = require('../constants/course-constants');
var CourseDispatcher = require('../dispatchers/course-dispatcher');

var CourseActions = {
  addCourseToHistory: function(index) {
    CourseDispatcher.handleViewAction({
      actionType: CourseConstants.ADD_COURSE_TO_HISTORY,
      index: index
    });
  }
};

module.exports = CourseActions;
