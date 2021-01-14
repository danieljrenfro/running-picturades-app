import React from 'react';
import ReactDOM from 'react-dom';
import PictionaryRules from './PictionaryRules';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PictionaryRules />, div);

  ReactDOM.unmountComponentAtNode(div);
})