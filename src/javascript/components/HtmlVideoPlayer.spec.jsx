import React from 'react';
import {shallow} from 'enzyme';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';

it('contains a video element', () => {
  const sampleVideo = 'http://something.com/some-video'
  const videoPlayer = shallow(<HtmlVideoPlayer videoUrl={sampleVideo}/>);

  expect(videoPlayer.find('video').props().src).toBe(sampleVideo);
});
