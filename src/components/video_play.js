import React from 'react'
import {connect} from 'react-redux'

class VideoPlay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <iframe src={this.props.url} height="360" width="640">
      </iframe>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {url:state.url}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(VideoPlay)
