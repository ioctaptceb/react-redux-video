import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/javascript/components/App.jsx';
import VideoContainer from '../../src/javascript/components/VideoContainer.jsx';
import InputContainer from '../../src/javascript/components/InputContainer.jsx';


it('renders an input', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<InputContainer />)).toBe(true);
});

it('renders a video container', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<VideoContainer/>)).toBe(true);
});

