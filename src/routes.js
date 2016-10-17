import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Header from './components/header'
import VideoZone from './components/video_zone'
import VideoPlay from './components/video_play'
import App from './App.js';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={VideoZone} />
    <Route path="demarcized" component={VideoPlay}/>
  </Route>
)
