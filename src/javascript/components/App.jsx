import React from 'react';

import InputContainer from './InputContainer.jsx';
import PlayPauseButton from './PlayPauseButton.jsx';
import VideoContainer from './VideoContainer.jsx';
import ElapsedTime from './ElapsedTime.jsx';
import Seekbar from './Seekbar.jsx';

const App = () => {
  return (
    <div>
      <InputContainer />
      <VideoContainer />
      <PlayPauseButton />
      <ElapsedTime />
      <Seekbar />
    </div>
  );
};


export default App;
