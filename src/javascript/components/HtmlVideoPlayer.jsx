import React from 'react';

const HtmlVideoPlayer = ({videoUrl}) => {
  return (
    <div>
      HTML Player
      <video src={videoUrl}>
      </video>
    </div>
  );
};

export default HtmlVideoPlayer;

