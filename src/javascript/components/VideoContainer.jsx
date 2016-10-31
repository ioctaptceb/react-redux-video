import React from 'react';
import {connect} from 'react-redux';

import {mapStateToProps} from '../store';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubePlayer from './YoutubePlayer.jsx';
import Overlay from './Overlay.jsx';

const VideoContainer = ({videoInput}) => {
  const isYoutube = () => !/(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/.test(videoInput);
  const selectVideoPlayer = () =>
    isYoutube()
      ? <YoutubePlayer />
      : <HtmlVideoPlayer />;

  return (
    <div className='video-container'>
      {selectVideoPlayer()}
      <Overlay />
    </div>
  );
};


export default connect(mapStateToProps)(VideoContainer);

