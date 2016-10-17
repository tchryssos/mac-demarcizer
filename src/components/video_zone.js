import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class VideoZone extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <h2> Video Goes Here </h2>
    )
  }
}

export default VideoZone;
