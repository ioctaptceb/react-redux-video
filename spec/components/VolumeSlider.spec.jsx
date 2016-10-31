import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import VolumeSlider from '../spec/javascript/components/VolumeSlider.jsx';

it('contains an Button element', () => {
  const wrapper = shallow(<VolumeSlider />);
  expect(wrapper.find('input').length).toBe(1);
});



