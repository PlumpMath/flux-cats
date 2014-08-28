/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/header');
var Courses = require('./courses/courses');
var Course = require('./courses/course');
var ManageCourses = require('./manage/manage-courses');
var ManageCourse = require('./manage/manage-course');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

/**
 * This file handles constructing the overall layout of the app
 * and hooking up routers. This app has two routers:
 * 1. controlling the active view of the manage sidebar
 * 2. controlling the active view of the content area
 *
 * As the number of URLs grow this component would likely get
 * refactored out into several files.
 */

var ManageRouter = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/courses" handler={ManageCourses} />
        <Location path="/course/:course" handler={ManageCourse} />
      </Locations>
    );
  }
});

var ContentRouter = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/courses" handler={Courses} />
        <Location path="/course/:course" handler={Course} />
      </Locations>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <div className="manage sidebar">
          <ManageRouter />
        </div>
        <div className="content container">
          <ContentRouter />
        </div>
      </div>
    );
  }
});

module.exports = App;
