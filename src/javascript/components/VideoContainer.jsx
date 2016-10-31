import React from 'react';
import {connect} from 'react-redux';

import {mapStateToProps} from '../store';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubePlayer from './YoutubePlayer.jsx';

const VideoContainer = ({videoInput}) => {
  const isYoutube = () => !/(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/.test(videoInput);
  const selectVideoPlayer = () =>
    isYoutube()
      ? <YoutubePlayer />
      : <HtmlVideoPlayer />;

  return (
    <div>
      {selectVideoPlayer()}
    </div>
  );
};


export default connect(mapStateToProps)(VideoContainer);

