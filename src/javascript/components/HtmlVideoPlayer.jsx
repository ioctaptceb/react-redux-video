import React from 'react';

const HtmlVideoPlayer = (props) => {
  return (
    <div>
      HTML Player
      <video src={props.videoUrl} controls>
      </video>
    </div>
  );
}

export default HtmlVideoPlayer;

