import React from 'react';
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class VideoForm extends React.Component{
  constructor(props){
    super(props)
    this.onUrlSubmit=this.onUrlSubmit.bind(this)
    this.onUrlType=this.onUrlType.bind(this)
    this.state={url:null}
  }

  onUrlSubmit(url){
    this.props.actions.urlSubmit(url)
  }

  onUrlType(event){
    this.setState({url:event.target.value})
  }

  render(){
    return(
      <div className="video-form">
        <form onSubmit={()=> {this.onUrlSubmit(this.state.url)}}>
          <input type="text" placeholder="Youtube URL" onChange={this.onUrlType}></input>
          <input type="submit" value="Demarcize!"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(VideoForm)
