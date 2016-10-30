import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import PlayPauseButton from './PlayPauseButton.jsx';

it('contains an Button element', () => {
  const wrapper = shallow(<PlayPauseButton />);
  expect(wrapper.find('button').length).toBe(1);
});
