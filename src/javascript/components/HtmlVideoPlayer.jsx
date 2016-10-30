import React from 'react';
import {setDuration, updateCurrentPosition} from '../actions.js';
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
  }

  setDuration(duration) {
    this.dispatch(setDuration(duration));
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
    this.dispatch(updateCurrentPosition(this.player.currentTime));
  }
  componentWillUpdate({playState}) {
    switch(playState) {
    case 'play':
      this.play();
      return;
    case 'pause':
      this.pause();
      return;
    default:
      return;
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

