import React from 'react';
import {setDuration} from '../actions/time';
import config from '../config';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store';
import track from '../utils/track';
import {hasSeeked, hasChanged, getFullscreen} from '../utils/helpers';

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
    player.requestFullscreen = getFullscreen(player);
  }

  componentWillUpdate({currentPosition, play, mute, fullscreen, volume}) {
    const oldProps = this.props;
    if (hasSeeked(currentPosition, oldProps.currentPosition) ) {
      this.player.currentTime = currentPosition;
    }
    if (hasChanged(play, oldProps.play)) {
      play ? this.player.play() : this.player.pause();
    }
    if (hasChanged(mute, oldProps.mute)) {
      this.player.muted = mute;
    }
    if (hasChanged(fullscreen, oldProps.fullscreen)) {
      this.player.requestFullscreen();
    }
    if (hasChanged(volume, oldProps.volume)) {
      this.player.volume = volume / 100;
    }
  }

  componentDidUpdate() {
    track(
      this.props.currentPosition,
      this.props.duration,
      this.props.totalTime,
      this.props.play
    );
  }

  render() {
    return (
      <video
        width={config.width}
        height={config.height}
        ref={(node) => {this.player = node;}}
        src={this.props.videoInput}
      >
      </video>
    );
  }
}

export default connect(mapStateToProps)(HtmlVideoPlayer);

