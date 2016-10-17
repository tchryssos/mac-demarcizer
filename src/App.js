import React, { Component } from 'react';
import Header from "./components/header"
import './App.css';
import {Link} from 'react-router'
import VideoZone from './components/video_zone'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <VideoZone/>
      </div>
    );
  }
}

export default App;
