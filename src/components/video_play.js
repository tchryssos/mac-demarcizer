import React from 'react'
import {connect} from 'react-redux'

class VideoPlay extends React.Component{
  constructor(props){
    super(props)

    this.demarcoAudio=this.demarcoAudio.bind(this)
  }

  demarcoAudio(){
    let audioCtx=new (window.AudioContext || window.webkitAudioContext)()

    let osc=audioCtx.createOscillator()
    osc.type='square'
    osc.frequency.value=400

    let gainNode=audioCtx.createGain()

    let bandpass=audioCtx.createBiquadFilter()
    bandpass.type="bandpass"
    bandpass.frequency.value=1000
    bandpass.q=2

    let delay=audioCtx.createDelay(1.0)

    osc.connect(gainNode)
    gainNode.connect(delay)
    delay.connect(audioCtx.destination)
    osc.start()

  }

  render(){
    return (
      <div>
        {/* <iframe src={this.props.url} height="360" width="640">
        </iframe> */}
        <audio>
          <source src=""/>
        </audio>
        <br/>
        <button onClick={this.demarcoAudio}>Osc</button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {url:state.url}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(VideoPlay)
