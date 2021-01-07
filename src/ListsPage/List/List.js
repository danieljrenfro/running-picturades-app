import React, { Component, Fragment } from 'react';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  generateWords = () => {
    const words = this.props.listWords.map((word, i) => {
      return <li className="word" key={i}>{word.word}</li>
    })
    return words;
  }

  // This function conditionally creates a View List button with a different cb function depending on whether or not the list is open or closed. 
  generateViewButton = () => {
    if (this.props.isListOpen.isOpen && this.props.isListOpen.listId === this.props.list.id) {
      return <button onClick={this.props.closeList} type="button">Close List</button>
    }
    return <button onClick={() => this.props.openList(this.props.list.id)} type="button">View List</button>
  }

  render() {
    return (
      <Fragment>
        <li className="list">
          <div className="list-details">
            <h3 className="list-title">{this.props.list.title}</h3>
            <p className="list-creator">{this.props.listUser.user_name}</p>
            <p className="list-type">{this.props.list.type}</p>
          </div>
          <div className="list-buttons">
            {this.generateViewButton()}
            <button type="button">Start Game</button>
          </div>
        </li>
        {/* This is conditionally rendering the word list based on whether a list 'isOpen'. */}
        {this.props.isListOpen.isOpen && 
         this.props.isListOpen.listId === this.props.list.id && 
          <ul className="words-list">
            {this.generateWords()}
          </ul>
        }
      </Fragment>
    )
  }
}

export default List;