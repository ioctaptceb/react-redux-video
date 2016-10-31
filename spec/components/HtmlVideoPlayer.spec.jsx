import React from 'react';
import {shallow} from 'enzyme';
import HtmlVideoPlayer from '../../src/javascript/components/HtmlVideoPlayer.jsx';

it('contains a video element', () => {
  const sampleVideo = 'http://something.com/some-video';
  const videoPlayer = shallow(<HtmlVideoPlayer videoUrl={sampleVideo}/>);

  expect(videoPlayer.find('video').props().src).toBe(sampleVideo);
});

it('plays a video when playState changes to play', () => {
  const sampleVideo = 'http://something.com/some-video';
  const videoPlayer = shallow(<HtmlVideoPlayer videoUrl={sampleVideo}/>);
  const instance = videoPlayer.instance();
  instance.player = jasmine.createSpyObj('player', ['play', 'pause']);
  videoPlayer.setProps({playState: 'play'});
  expect(instance.player.play).toHaveBeenCalled();
});

it('pauses a video when playState changes to pause', () => {
  const sampleVideo = 'http://something.com/some-video';
  const videoPlayer = shallow(<HtmlVideoPlayer videoUrl={sampleVideo}/>);
  const instance = videoPlayer.instance();
  instance.player = jasmine.createSpyObj('player', ['play', 'pause']);
  videoPlayer.setProps({playState: 'pause'});

  expect(instance.player.pause).toHaveBeenCalled();
});

