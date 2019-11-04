import React from 'react';
import renderer from 'react-test-renderer';

import Items from '../Card.component';

it('renders correctly when there are no items', () => {
  const props = {
    panHandlers: jest.fn(), 
    rotateAndTranslate: jest.fn(), 
    likeOpacity: jest.fn(), 
    dislikeOpacity: jest.fn()
  }
  const tree = renderer.create(<Items {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});