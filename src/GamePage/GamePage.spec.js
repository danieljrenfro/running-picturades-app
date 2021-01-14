import React from 'react';
import ReactDOM from 'react-dom';
import GamePage from './GamePage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GamePage match={{params: { list_id: 1 }, isExact: true, path: '', url: '' }}/>, div);

  ReactDOM.unmountComponentAtNode(div);
})