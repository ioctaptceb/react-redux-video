import React from 'react';

class HtmlVideoPlayer extends React.Component {
  constructor() {
    super();
  }

  componentWillUpdate({playState}) {
    switch(playState) {
    case 'play':
      return this.player.play();
    case 'pause':
      return this.player.pause();
    default:
      return;
    }
  }

  render() {
    return (
      <div>
        HTML Player
        <video ref={(node) => {this.player = node;}} src={this.props.videoUrl}>
        </video>
      </div>
    );
  }
}

export default HtmlVideoPlayer;

