import React from 'react';

import InputContainer from './InputContainer.jsx';
import PlayPauseButton from './PlayPauseButton.jsx';
import MuteButton from './MuteButton.jsx';
import FullscreenButton from './FullscreenButton.jsx';
import VideoContainer from './VideoContainer.jsx';
import ElapsedTime from './ElapsedTime.jsx';
import Seekbar from './Seekbar.jsx';
import VolumeSlider from './VolumeSlider.jsx';

const App = () => {
  return (
    <div>
      <VideoContainer />
      <PlayPauseButton />
      <MuteButton />
      <FullscreenButton />
      <ElapsedTime />
      <Seekbar />
      <VolumeSlider />
      <InputContainer />
    </div>
  );
};


export default App;
