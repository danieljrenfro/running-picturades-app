import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';

const team = {
  currentWord: 0,
  name: 'Team 1',
  number: 1
};

const words = [
  {id: 1, word: 'something', list_id: 1},
  {id: 2, word: 'else', list_id: 1},
  {id: 3, word: 'besides', list_id: 1}
]

it('renders without crashing with team and words', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Team team={team} words={words} />, div);

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing with no team or words', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Team />, div);

  ReactDOM.unmountComponentAtNode(div);
})