import React from 'react';
import waitForYoutube from '../waitForYoutube.js';
import {setDuration} from '../actions.js';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';
import Track from '../timeTrackers.js';

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
        height: '390',
        width: '640',
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
      player.requestFullscreen =
        player.requestFullScreen || player.mozRequestFullScreen || player.webkitRequestFullScreen;
      this.player = player;
    });
  }

  hasChanged(value, string) {
    return value !== this.props[string];
  }

  hasSeeked(currentPosition) {
    return Math.abs(currentPosition - this.props.currentPosition) > 10;
  }

  componentWillUpdate({currentPosition, play, mute, fullscreen, volume}) {
    if (this.hasSeeked(currentPosition) ) {
      this.player.seekTo(currentPosition);
    }
    if (this.hasChanged(play, 'play')) {
      play ? this.player.playVideo() : this.player.pauseVideo();
    }
    if (this.hasChanged(mute, 'mute')) {
      mute ? this.player.mute() : this.player.unMute();
    }
    if (this.hasChanged(fullscreen, 'fullscreen')) {
      this.player.requestFullScreen();
    }
    if (this.hasChanged(volume, 'volume')) {
      this.player.setVolume(volume);
    }
  }

  componentDidUpdate() {
    Track();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <div id="youtube-player"></div>
    );
  }
}

export default connect(mapStateToProps)(YoutubePlayer);
