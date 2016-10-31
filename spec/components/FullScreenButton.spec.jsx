import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import FullScreenButton from '../../spec/javascript/components/FullScreenButton.jsx';

it('contains an Button element', () => {
  const wrapper = shallow(<FullScreenButton />);
  expect(FullScreenButton.find('button').length).toBe(1);
});


