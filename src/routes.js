import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Header from './components/header'
import App from './App.js';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Header} />
  </Route>
)
