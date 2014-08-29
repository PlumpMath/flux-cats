/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/header');
var Courses = require('./courses/courses');
var CourseOverview = require('./course/course-overview');
var ManageCourses = require('./manage/manage-courses');
var AnimatedLocations = require('./util/animated-transition');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

/**
 * This file handles constructing the overall layout of the app
 * and hooking up routers. This app has two routers:
 * 1. controlling the active view of the manage sidebar
 * 		- note that currently manage sidebar only have one view to worry about
 * 2. controlling the active view of the content area
 *
 * As the number of URLs grow this component would likely get
 * refactored out into several files.
 */

var ManageRouter = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/" handler={ManageCourses} />
        <Location path="/course/:id" handler={ManageCourses} />
      </Locations>
    );
  }
});

var ContentRouter = React.createClass({
  render: function() {
    return (
      <AnimatedLocations transitionName="page-fade">
        <Location path="/" handler={Courses} />
        <Location path="/course/:id" handler={CourseOverview} />
      </AnimatedLocations>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <div className="page-container">
          <div className="manage sidebar">
            <ManageRouter />
          </div>
          <div className="content container">
            <ContentRouter />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
