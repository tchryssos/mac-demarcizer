import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import VideoForm from './video_form'


class VideoZone extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <VideoForm/>
    )
  }
}

export default VideoZone;
