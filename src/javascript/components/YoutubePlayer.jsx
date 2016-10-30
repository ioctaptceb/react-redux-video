import React from 'react';
import waitForYoutube from '../waitForYoutube.js';
import {setDuration, updateCurrentPosition} from '../actions.js';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';

const sanitizeYoutubeVars = {
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
      this.player = new youtube.Player('youtube-player', {
        height: '390',
        width: '640',
        playerVars: sanitizeYoutubeVars,
        videoId: this.props.videoInput,
        events: {
          'onReady': () => {
            this.setDuration(this.player.getDuration());
            this.player.pauseVideo();
          }
        }
      });
    });
  }

  setDuration(duration) {
    this.dispatch(setDuration(duration));
  }

  play() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  componentWillUpdate({playState, currentPosition}) {
    if (currentPosition !== this.props.currentPosition) {
      console.log(currentPosition);
      this.player.seekTo(currentPosition);
    }
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
