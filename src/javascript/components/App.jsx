import React from 'react';
import {connect} from 'react-redux';

import {store, mapStateToVideoProps} from '../store.js';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubeVideoPlayer from './YoutubePlayer.jsx';

let App = ({videoInput, dispatch}) => {
  const isYoutube = () => !/(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/.test(videoInput);

  const selectVideoPlayer = () =>
    isYoutube()
      ? <YoutubeVideoPlayer />
      : <HtmlVideoPlayer />;

  const changeVideo = (url) => ({
    type: 'SET_VIDEO_URL',
    url
  });

  return (
    <div>
      <div className="input-components">
        <label> Url Input
          <input onBlur={(event) => dispatch(changeVideo(event.target.value))} />
        </label>
      </div>
      {selectVideoPlayer()}
    </div>
  );
}

App = connect(mapStateToVideoProps)(App);

export default App;
