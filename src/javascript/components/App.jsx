import React from 'react';
import {connect} from 'react-redux';

import {mapStateToVideoProps} from '../store.js';
import {changeVideo, changeClickthrough, changePlayState, setDuration} from '../actions.js';
import UrlInput from './UrlInput.jsx';
import Seekbar from './Seekbar.jsx';
import PlayPauseButton from './PlayPauseButton.jsx';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubeVideoPlayer from './YoutubePlayer.jsx';

let App = ({videoInput, playState, duration, dispatch}) => {
  const isYoutube = () => !/(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/.test(videoInput);

  const selectVideoPlayer = () =>
    isYoutube()
      ? <YoutubeVideoPlayer videoId={videoInput} playState={playState} setDuration={setVideoDuration}/>
      : <HtmlVideoPlayer videoUrl={videoInput} playState={playState} setDuration={setVideoDuration}/>;

  const setVideoUrl = (event) => dispatch(changeVideo(event.target.value));
  const setVideoDuration = (duration) => {
    dispatch(setDuration(duration));
  };

  const setClickthroughUrl = (event) => dispatch(changeClickthrough(event.target.value));
  const togglePlayPause = () => dispatch(changePlayState(playState));

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
      <PlayPauseButton onClick={togglePlayPause} />
      {duration}
    </div>
  );
};

App = connect(mapStateToVideoProps)(App);

export default App;
