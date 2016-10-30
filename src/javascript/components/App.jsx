import React from 'react';
import {connect} from 'react-redux';

import {mapStateToVideoProps} from '../store.js';
import {changeVideo, changeClickthrough} from '../actions.js';
import UrlInput from './UrlInput.jsx';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubeVideoPlayer from './YoutubePlayer.jsx';

let App = ({videoInput, dispatch}) => {
  const isYoutube = () => !/(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/.test(videoInput);

  const selectVideoPlayer = () =>
    isYoutube()
      ? <YoutubeVideoPlayer videoId={videoInput}/>
      : <HtmlVideoPlayer videoUrl={videoInput}/>;

  const setVideoUrl = (event) => dispatch(changeVideo(event.target.value));

  const setClickthroughUrl = (event) => dispatch(changeClickthrough(event.target.value));

  return (
    <div>
      <div className="input-components">
        <UrlInput onBlur={setVideoUrl}>
          Set Video
        </UrlInput>
        <UrlInput onBlur={setClickthroughUrl}>
          Set Clickthrough
        </UrlInput>
      </div>
      {selectVideoPlayer()}
    </div>
  );
};

App = connect(mapStateToVideoProps)(App);

export default App;
