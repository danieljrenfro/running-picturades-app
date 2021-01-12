import React, { Component, Fragment } from 'react';

import ListApiService from '../services/lists-api-service';
import config from '../config';

import PicturadesContext from '../PicturadesContext';
import List from './List/List';
import './ListsPage.css';


class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      listWords: [],
      openList: null,
      listType: {
        value: 'All',
        touched: false
      },
      listTitle: {
        value: '',
        touched: false
      },
      listCreator: {
        value: '',
        touched: false
      },
    }
  }
  
  static contextType = PicturadesContext;

  componentDidMount() {
    ListApiService.getLists()
      .then(lists => this.setState({ lists: lists }))
  }

  openList = (listId) => {
    ListApiService.getListWords(listId)
      .then(words => {
        const listWords = words.map((word, i) => {
          return <li className="word" key={i}>{word.word}</li>
        })

        this.setState({
          listWords: listWords,
          openList: listId
        })
      })
    
  }

  closeList = () => {
    this.setState({
      listWords: [],
      openList: null
    })
  }
  
  generateLists() {
    const { listType, listTitle, listCreator } = this.state;
    
    return this.state.lists.map(list => {
      if (listType.touched && listType.value !== list.game_type && listType.value !== 'All') {
        return '';
      }

      if (listTitle.touched && !list.title.toLowerCase().includes(listTitle.value.toLowerCase().trim())) {
        return '';
      }

      if (listCreator.touched && !list.creator_name.toLowerCase().includes(listCreator.value.toLowerCase().trim())) {
        return '';
      }

      let listWords = [];

      if (this.state.openList === list.id) {
        listWords = this.state.listWords;
      }
      
      return <List 
          key={list.id} 
          list={list} 
          openList={this.openList}
          closeList={this.closeList}
          isListOpen={this.state.openList}
          listWords={listWords}
        />
    })
  }

  updateListType = (value) => {
    this.setState({
      listType: {
        value: value,
        touched: true
      }
    })
  }

  updateListTitle = (value) => {
    this.setState({
      listTitle: {
        value: value,
        touched: true
      }
    })
  }

  updateListCreator = (value) => {
    this.setState({
      listCreator: {
        value: value,
        touched: true
      }
    })
  }

  clearFilters = () => {
    this.setState({
      listType: {
        value: 'all',
        touched: false
      },
      listTitle: {
        value: '',
        touched: false
      },
      listCreator: {
        value: '',
        touched: false
      }
    })
  }

  render() {

    return (
      <Fragment>
        <h2>Lists</h2>
        <section>
          <form className="filter-form">
            <label htmlFor="search-creator">List Creator</label>
            <input 
              onChange={(e) => this.updateListCreator(e.target.value)}
              value={this.state.listCreator.value} 
              name="search-creator" 
              id="search-creator" 
              type="text"
            />
            <label htmlFor="search-title">List Title</label>
            <input
              onChange={(e) => this.updateListTitle(e.target.value)} 
              value={this.state.listTitle.value} 
              name="search-title" 
              id="search-title" 
              type="text"
            />
            <label htmlFor="select-type">List Type</label>
            <select
              onChange={(e) => {this.updateListType(e.target.value)}}
              value={this.state.listType.value}
            >
              <option value="All">All</option>
              <option value="Pictionary">Pictionary</option>
              <option value="Charades">Charades</option>
            </select>
            <button onClick={this.clearFilters} type="button">Clear</button>
          </form>
        </section>
        <section className="lists-section">
          <ul>
            {this.generateLists()}
          </ul>
        </section>
      </Fragment>
    )
  }
}

export default Lists;