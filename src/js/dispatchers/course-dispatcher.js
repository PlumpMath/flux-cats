var Dispatcher = require('./dispatcher');
var merge = require('react/lib/merge');

var CourseDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action) {
    console.log('action', action);

    this.dispatch({
      source: 'COURSE_VIEW_ACTION',
      action: action
    });
  }
});
