import React from 'react';

const VideoPlayer = (props) => {
  return (
    <div>
      HTML Player
      <video src={props.videoUrl} controls>
      </video>
    </div>
  );
}

export default VideoPlayer;

