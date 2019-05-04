import React from 'react';
import Table from './Table';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = renderer.create(
    <Table />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it('renders data', () => {
  const rows = [
    [{ id: 1, url: 'https://abc.com', title: 'ABC' }],
    [{ id: 2, url: 'https://def.com', title: 'DEF' }]
  ];
  const component = renderer.create(
    <Table rows={rows}/>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

