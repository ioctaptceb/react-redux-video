import React from 'react';
import {shallow} from 'enzyme';
import App from './App.jsx';
import VideoContainer from './VideoContainer.jsx';
import InputContainer from './InputContainer.jsx';


it('renders an input', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<InputContainer />)).toBe(true);
});

it('renders a video container', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<VideoContainer/>)).toBe(true);
});

