import React from 'react';
import ReactDOM from 'react-dom';
import ListsPage from './ListsPage';

it('renders without crashing when list is not open', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ListsPage />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})