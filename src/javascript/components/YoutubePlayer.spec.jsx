import React from 'react';
import {shallow} from 'enzyme';
import YoutubePlayer from './YoutubePlayer.jsx';

it('contains a video id', () => {
  const sampleId = '12312312';
  const videoPlayer = shallow(<YoutubePlayer videoId={sampleId}/>);

  expect(videoPlayer.find('#youtube-player').length).toBe(1);
});

it('plays a video when playState changes to play', () => {
  const sampleId = '12312312';
  const videoPlayer = shallow(<YoutubePlayer videoId={sampleId} />);
  const instance = videoPlayer.instance();
  instance.player = jasmine.createSpyObj('player', ['playVideo', 'pauseVideo']);
  videoPlayer.setProps({playState: 'play'});

  expect(instance.player.playVideo).toHaveBeenCalled();
});

it('pauses a video when playState changes to pause', () => {
  const sampleId = '12312312';
  const videoPlayer = shallow(<YoutubePlayer videoId={sampleId} />);
  const instance = videoPlayer.instance();
  instance.player = jasmine.createSpyObj('player', ['playVideo', 'pauseVideo']);
  videoPlayer.setProps({playState: 'pause'});

  expect(instance.player.pauseVideo).toHaveBeenCalled();
});

