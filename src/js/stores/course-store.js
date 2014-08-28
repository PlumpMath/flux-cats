var CourseDispatcher = require('../dispatchers/course-dispatcher');
var CourseConstants = require('../constants/course-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'course-change';

/**
 * For the purposes of this example, I'm using static data defined
 * in this store. In the Real Deal (TM), this would be a resource
 * fetched server-side.
 */
var _courses = [];

for (var i = 1; i < 10; i++) {
  _courses.push({
    id: 'Class' + i,
    title: 'Class #' + i,
    summary: 'This is a cool course!',
    description: 'Longer course description',
    thumbnail: 'assets/course-thumbnail.png',
    cover: 'assets/course-cover.png'
  });
}

/**
 * All the courses previously visited
 */
var _courseHistory = [];

/**
 * Adds a course to history if it doesn't already exist there
 * @param {Number} index Index of the course in question in _courses
 */
function _addCourseToHistory(index) {
  var course = _courses[index];

  _courseHistory.forEach(function(c) {
    if (c.id === course.id) {
      return;
    }
  });

  _previousCourses.push(course);
}

var CourseStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCourses: function() {
    return _courses;
  },

  getCourseHistory: function() {
    return _courseHistory;
  },

  dispatcherIndex: CourseDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case CourseConstants.COURSE_ADD_TO_HISTORY:
        _addCourseToHistory(action.index);
        break;
    }

    CourseStore.emitChange();

    return true; // resolve promise
  })
});

module.exports = CourseStore;
