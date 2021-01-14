import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Router } from 'react-router-dom';
import history from '../history';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router history={history}>
      <Header />
    </Router>, 
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})