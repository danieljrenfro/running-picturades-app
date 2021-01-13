import React, { Component, Fragment } from 'react';
import history from '../../history';
import ListApiService from '../../services/lists-api-service';

import './List.css';

class List extends Component {

  // This function conditionally creates a View List button with a different cb function depending on whether or not the list is open or closed. 
  generateViewButton = () => {
    if (this.props.isListOpen === this.props.list.id) {
      return <button onClick={this.props.closeList} type="button">Close List</button>
    }
    return <button onClick={() => this.props.openList(this.props.list.id)} type="button">View List</button>
  }

  startGame = () => {
    history.push(`/game/${this.props.list.id}`)
  }

  handleEditClick = (listId) => {
    history.push(`/lists/${listId}/edit`)
  }

  handleDeleteClick = (listId) => {
    ListApiService.deleteList(listId)
      .then(() => this.props.deleteListFromState(listId));
  }

  render() {
    const { list } = this.props; 

    return (
      <Fragment>
        <li className="list">
          <div className="list-details">
            <h3 className="list-title">{list.title}</h3>
            <p className="list-creator">{list.creator_name}</p>
            <p className="list-type">{list.game_type}</p>
            <div className="manage-list-buttons">
              <button onClick={() => this.handleEditClick(list.id)} type="button">Edit</button>
              <button onClick={() => this.handleDeleteClick(list.id)} type="button">Delete</button>
            </div>
          </div>
          <div className="list-buttons">
            {this.generateViewButton()}
            <button onClick={this.startGame} type="button">Start Game</button>
          </div>
        </li>
        {/* This is conditionally rendering the word list based on whether a list 'isOpen'. */}
        {this.props.isListOpen === list.id 
          ? (<ul className="words-list">
            {this.props.listWords}
          </ul>)
          : <></>
        }
      </Fragment>
    )
  }
}

export default List;