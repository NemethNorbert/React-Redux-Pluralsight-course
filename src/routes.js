import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  //allways load the app component and pass the others as children
  <Route path="/" component={App}>
    // IndexRoute references homepage
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
