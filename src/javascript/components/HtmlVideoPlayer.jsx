import React from 'react';
import {setDuration, updateBuffering} from '../actions.js';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';
import Track from '../timeTrackers.js';

class HtmlVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }

  componentDidMount() {
    const player = this.player;
    player.addEventListener('loadedmetadata', () =>{
      this.dispatch(setDuration(player.duration));
    });
    player.addEventListener('waiting', this.dispatch(updateBuffering(true)));
    player.addEventListener('canplay', this.dispatch(updateBuffering(false)));
    player.requestFullscreen =
      player.requestFullScreen || player.mozRequestFullScreen || player.webkitRequestFullScreen;
  }

  hasChanged(value, string) {
    value !== this.props[string];
  }

  hasSeeked(currentPosition) {
    return Math.abs(currentPosition - this.props.currentPosition) > 10;
  }

  componentWillUpdate({currentPosition, play, mute, fullscreen, volume}) {
    if (this.hasSeeked(currentPosition) ) {
      this.player.currentTime = currentPosition;
    }
    if (this.hasChanged(play, 'play')) {
      play ? this.player.play() : this.player.pause();
    }
    if (this.hasChanged(mute, 'mute')) {
      this.player.muted = mute;
    }
    if (this.hasChanged(fullscreen, 'fullscreen')) {
      this.player.requestFullscreen();
    }
    if (this.hasChanged(volume, 'volume')) {
      this.player.volume = volume / 100;
    }
  }

  componentDidUpdate() {
    Track();
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

