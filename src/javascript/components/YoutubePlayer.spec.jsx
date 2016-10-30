import React from 'react';
import {shallow} from 'enzyme';
import YoutubePlayer from './YoutubePlayer.jsx';

it('contains a video id', () => {
  const sampleId = '12312312';
  const videoPlayer = shallow(<YoutubePlayer videoId={sampleId}/>);

  expect(videoPlayer.find('#youtube-player').length).toBe(1);
});

