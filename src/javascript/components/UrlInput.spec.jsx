import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import UrlInput from './UrlInput.jsx';
const mockReducer = (state) => state;

it('contains an input element', () => {
  const defaultStore = createStore(mockReducer, {});
  const wrapper = shallow(<UrlInput store={defaultStore} />);
  expect(wrapper.find('input').length).toBe(1);
});

