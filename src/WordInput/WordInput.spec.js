import React from 'react';
import ReactDOM from 'react-dom';
import WordInput from './WordInput';

const word = {
  label: 'Word 1',
  wordNumber: 'word1',
  word: 'Something',
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <WordInput word={word} />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})