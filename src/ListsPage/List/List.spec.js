import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const list = {
  id: 1,
  title: 'Title',
  game_type: 'Pictionary',
  creator_name: 'Test Name',
  creator_id: 1
}

const isListOpen = false;

const listWords = [
  {id: 1, word: 'Someword', list_id: 1},
  {id: 2, word: 'Some', list_id: 1},
  {id: 3, word: 'word', list_id: 1},
  {id: 4, word: 'another', list_id: 1},
  {id: 5, word: 'wordy', list_id: 1},
];

it('renders without crashing when list is not open', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <List list={list} isListOpen={isListOpen} listWords={listWords}/>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing when list is open', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <List list={list} isListOpen={!isListOpen} listWords={listWords}/>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing when list is open and no words', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <List list={list} isListOpen={!isListOpen}/>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})