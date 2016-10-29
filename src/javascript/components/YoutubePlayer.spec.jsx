import React from 'react';
import {shallow} from 'enzyme';
import YoutubePlayer from './YoutubePlayer.jsx';

it('contains a video element', () => {
  const sampleVideo = 'http://something.com/some-video'
  const videoPlayer = shallow(<YoutubePlayer videoUrl={sampleVideo}/>);

  expect(videoPlayer.find('video').props().src).toBe(sampleVideo);
});

