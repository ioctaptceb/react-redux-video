import React from 'react';
import {setDuration, updateBuffering} from '../actions.js';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';

class HtmlVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }

  componentDidMount() {
    this.player.addEventListener('loadedmetadata', () =>{
      this.setDuration(this.player.duration);
    });
    this.player.addEventListener('waiting', this.dispatch(updateBuffering(true)));
    this.player.addEventListener('canplay', this.dispatch(updateBuffering(false)));
  }

  setDuration(duration) {
    this.dispatch(setDuration(duration));
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  componentWillUpdate({playState, muteState, currentPosition}) {
    if (currentPosition !== this.props.currentPosition ) {
      this.player.currentTime = currentPosition;
    }
    if (playState) {
      this.play();
    } else {
      this.pause();
    }
    if (muteState !== this.props.muteState) {
      this.player.muted = muteState;
    }
  }

  render() {
    return (
      <div>
        HTML Player
        <video ref={(node) => {this.player = node;}} src={this.props.videoInput}>
        </video>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HtmlVideoPlayer);

