import React, { Component, Fragment } from 'react';

import PicturadesContext from '../PicturadesContext';
import List from './List/List';
import './ListsPage.css';


class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openList: {
        isOpen: false,
        listId: null
      },
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

  openList = (listId) => {
    this.setState({
      openList: {
        isOpen: true,
        listId: listId
      }
    })
  }

  closeList = () => {
    this.setState({
      openList: {
        isOpen: false,
        listId: null
      }
    })
  }
  
  generateLists() {
    const { listType, listTitle, listCreator } = this.state;
    
    return this.context.lists.map(list => {
      const listWords = this.context.words.filter(word => word.list_id === list.id)
      const listUser = this.context.users.find(user => user.id === list.user_id);
      
      if (listType.touched && listType.value !== list.type && listType.value !== 'All') {
        return '';
      }

      if (listTitle.touched && !list.title.toLowerCase().includes(listTitle.value.toLowerCase().trim())) {
        return '';
      }

      if (listCreator.touched && !listUser.user_name.toLowerCase().includes(listCreator.value.toLowerCase().trim())) {
        return '';
      }
      
      return <List 
          key={list.id} 
          list={list} 
          listWords={listWords} 
          listUser={listUser}
          openList={this.openList}
          closeList={this.closeList}
          isListOpen={this.state.openList}
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