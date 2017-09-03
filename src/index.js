/* eslint-disable import/default */
import 'babel-polyfill'; //should just pull individual polyfills, probably just object.assign on this project
import React from 'react';
import { render } from 'react-dom';//from React.14 we have to pull it, otherwise we have no render that works is browser
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';//it attaches our store to our React container components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
