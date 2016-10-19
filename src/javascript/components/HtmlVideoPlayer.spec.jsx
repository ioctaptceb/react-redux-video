import React from 'react';
import {shallow} from 'enzyme';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';

it('contains a video element', () => {
  const videoPlayer = shallow(<HtmlVideoPlayer />);

  expect(videoPlayer.find('video')).toEqual('On');
});
