import React from 'react';
import {connect} from 'react-redux';
import UrlInput from './UrlInput.jsx';
import {changeVideo, changeClickthrough} from '../actions';

const InputContainer = ({dispatch}) => {
  const setVideoUrl = (event) => dispatch(changeVideo(event.target.value));

  const setClickthroughUrl = (event) => dispatch(changeClickthrough(event.target.value));

  return (
    <div className="input-components">
      <UrlInput onBlur={setVideoUrl}>
        Set Video
      </UrlInput>
      <UrlInput onBlur={setClickthroughUrl}>
        Set Clickthrough
      </UrlInput>
    </div>
  );
};

export default connect()(InputContainer);

