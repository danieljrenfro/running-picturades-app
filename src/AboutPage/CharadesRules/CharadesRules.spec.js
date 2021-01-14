import React from 'react';
import ReactDOM from 'react-dom';
import CharadesRules from './CharadesRules';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<CharadesRules />, div);

  ReactDOM.unmountComponentAtNode(div);
})