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
    id: 'course' + i,
    title: 'Course #' + i,
    summary: 'This is a cool course!',
    description: 'Longer course description',
    thumbnail: '/assets/course-thumbnail.jpeg',
    cover: '/assets/course-cover.jpeg'
  });
}

/**
 * All the courses previously visited
 */
var _courseHistory = [];

/**
 * Retrieve a particular course by id
 */
function _getCourse(id) {
  for (var i = 0; i < _courses.length; i++) {
    if (_courses[i].id === id) {
      return _courses[i];
    }
  }
}

/**
 * Adds a course to history if it doesn't already exist there
 * @param {Number} index Index of the course in question in _courses
 */
function _addCourseToHistory(id) {
  var course = _getCourse(id);

  for (var i = 0; i < _courseHistory.length; i++) {
    if (_courseHistory[i].id === course.id) {
      return;
    }
  }

  _courseHistory.push(course);
}

/**
 * Update a course's title
 * @param {string} title New title of course
 * @param {number} index Index of course in _courses
 */
function _updateCourseTitle(title, id) {
  _getCourse(id).title = title;
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

  getCourse: function(id) {
    return _getCourse(id);
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
        _addCourseToHistory(action.id);
        break;

      case CourseConstants.COURSE_UPDATE_TITLE:
        _updateCourseTitle(action.title, action.id);
        break;
    }

    CourseStore.emitChange();

    return true; // resolve promise
  })
});

module.exports = CourseStore;
