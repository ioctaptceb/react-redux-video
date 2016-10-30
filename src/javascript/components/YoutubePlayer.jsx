import React from 'react';
import waitForYoutube from '../waitForYoutube.js';

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
  constructor() {
    super();
  }

  componentDidMount() {
    waitForYoutube.then((youtube) => {
      this.player = new youtube.Player('youtube-player', {
        height: '390',
        width: '640',
        playerVars: sanitizeYoutubeVars,
        videoId: this.props.videoId,
        events: {
          'onReady': () => this.player.pauseVideo()
        }
      });
    });
  }

  componentWillUpdate({playState}) {
    switch(playState) {
    case 'play':
      return this.player.playVideo();
    case 'pause':
      return this.player.pauseVideo();
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

export default YoutubePlayer;
