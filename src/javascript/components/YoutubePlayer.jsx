import React from 'react';
import waitForYoutube from '../utils/waitForYoutube';
import config from '../config';
import {setDuration} from '../actions/time';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store';
import {hasSeeked, hasChanged, getFullscreen} from '../utils/helpers';
import {track} from '../utils/track';

const YOUTUBE_VARS = {
  controls: 0,
  showinfo: 0,
  disablekb: 1,
  autoplay: 1,
  rel: 0,
  origin: 'http://localhost:8080',
  modestbranding: 1
};

class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }

  componentDidMount() {
    waitForYoutube.then((youtube) => {
      const player = new youtube.Player('youtube-player', {
        height: config.height,
        width: config.width,
        playerVars: YOUTUBE_VARS,
        allowfullscreen: true,
        videoId: this.props.videoInput,
        events: {
          'onReady': () => {
            this.dispatch(setDuration(player.getDuration()));
            player.pauseVideo();
          }
        }
      });
      player.requestFullscreen = getFullscreen(player);
      this.player = player;
    });
  }

  componentWillUpdate({currentPosition, play, mute, fullscreen, volume}) {
    const oldProps = this.props;
    if (hasSeeked(currentPosition, oldProps.currentPosition) ) {
      this.player.seekTo(currentPosition);
    }
    if (hasChanged(play, oldProps.play)) {
      play ? this.player.playVideo() : this.player.pauseVideo();
    }
    if (hasChanged(mute, oldProps.mute)) {
      mute ? this.player.mute() : this.player.unMute();
    }
    if (hasChanged(fullscreen, oldProps.fullscreen)) {
      this.player.requestFullScreen();
    }
    if (hasChanged(volume, oldProps.volume)) {
      this.player.setVolume(volume);
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

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <div
        id="youtube-player"
        className='video'
      ></div>
    );
  }
}

export default connect(mapStateToProps)(YoutubePlayer);
