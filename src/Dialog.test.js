import React from 'react';
import Dialog from './Dialog';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = renderer.create(
    <Dialog />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
