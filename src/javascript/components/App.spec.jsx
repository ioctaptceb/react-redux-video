import React from 'react';
import {mount} from 'enzyme';
import { createStore } from 'redux';
import {changeVideo, changeClickthrough} from '../actions.js';
import App from './App.jsx';
import HtmlVideoPlayer from './HtmlVideoPlayer.jsx';
import YoutubePlayer from './YoutubePlayer.jsx';
import UrlInput from './UrlInput.jsx';

const mockReducer = (state) => state;

it('renders an input', () => {
  const defaultStore = createStore(mockReducer, {});
  const wrapper = mount(<App store={defaultStore} />);
  expect(wrapper.find(UrlInput).length).toBe(2);
});

it('renders an html video when an extension is present', () => {
  const defaultStore = createStore(mockReducer, {videoInput: 'something.mp4'});
  const wrapper = mount(<App store={defaultStore} />);
  expect(wrapper.contains(<HtmlVideoPlayer />)).toBe(true);
});

it('renders a youtube video when the store has a youtube url', () => {
  const youtubeStore = createStore(mockReducer, {videoInput: '123123'});
  const wrapper = mount(<App store={youtubeStore} />);
  expect(wrapper.contains(<YoutubePlayer />)).toBe(true);
});

it('dispatches an event when the input is blurred', () => {
  const defaultStore = createStore(mockReducer, {});
  defaultStore.dispatch = jasmine.createSpy('dispatch');

  const wrapper = mount(<App store={defaultStore} />);
  const input = wrapper.find('input').at(0);
  const newUrl = 'newUrl';
  input.simulate('blur', {target: {value: newUrl}});
  expect(defaultStore.dispatch).toHaveBeenCalledWith({type: 'SET_VIDEO_URL', url: newUrl});
});

it('dispatches an event when the input is blurred', () => {
  const defaultStore = createStore(mockReducer, {});
  defaultStore.dispatch = jasmine.createSpy('dispatch');

  const wrapper = mount(<App store={defaultStore} />);
  const input = wrapper.find('input').at(1);
  const newUrl = 'newUrl';
  input.simulate('blur', {target: {value: newUrl}});
  expect(defaultStore.dispatch).toHaveBeenCalledWith({type: 'SET_CLICKTHROUGH_URL', url: newUrl});
});
