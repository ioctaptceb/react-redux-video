import React from 'react';

import PlayPauseButton from './PlayPauseButton.jsx';
import MuteButton from './MuteButton.jsx';
import FullscreenButton from './FullscreenButton.jsx';
import ElapsedTime from './ElapsedTime.jsx';
import Seekbar from './Seekbar.jsx';
import VolumeSlider from './VolumeSlider.jsx';

const Controlbar = () => {
  return (
    <div className='controlbar'>
      <PlayPauseButton />
      <MuteButton />
      <FullscreenButton />
      <ElapsedTime />
      <Seekbar />
      <VolumeSlider />
    </div>
  );
};


export default Controlbar;


