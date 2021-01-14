import React from 'react';
import ReactDOM from 'react-dom';
import GameHeader from './GameHeader';

const title = 'SomeTitle';

const noError = null;

const error = 'SomeError';

const errorMessage = { message: 'Error Message' };

const gameStarted = false;

it('renders without crashing with regular error', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GameHeader title={title} error={error} gameStarted={gameStarted}/>, div);

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing with message error', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GameHeader title={title} error={errorMessage} gameStarted={gameStarted}/>, div);

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing with no error and gameStarted is false', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GameHeader title={title} error={noError} gameStarted={gameStarted}/>, div);

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing when game has started', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GameHeader title={title} error={noError} gameStarted={!gameStarted}/>, div);

  ReactDOM.unmountComponentAtNode(div);
})