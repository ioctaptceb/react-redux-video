import React from 'react';
import {mount} from 'enzyme';
import { createStore } from 'redux';
import YoutubePlayer from './YoutubePlayer.jsx';

describe('YoutubePlayer', () => {
  let mockReducer;
  let store;
  beforeEach(() => {
    mockReducer = (state) => state;
    store = createStore(mockReducer, {videoInput: '123123'});
  });

  it('contains a video id', () => {
    const videoPlayer = mount(<YoutubePlayer store={store} />);
    expect(videoPlayer.find('#youtube-player').length).toBe(1);
  });

  xit('plays a video when playState changes to play', () => {
    const videoPlayer = mount(<YoutubePlayer store={store} />);
    const instance = videoPlayer.instance();
    instance.player = jasmine.createSpyObj('player', ['playVideo']);
    videoPlayer.setProps({playState: 'pause'});

    expect(instance.player.playVideo).toHaveBeenCalled();
  });

  xit('pauses a video when playState changes to pause', () => {
    const videoPlayer = mount(<YoutubePlayer store={store} />);
    const instance = videoPlayer.instance();
    instance.player = jasmine.createSpyObj('player', ['pauseVideo']);
    videoPlayer.setProps({playState: 'pause'});

    expect(instance.player.pauseVideo).toHaveBeenCalled();
  });
});
