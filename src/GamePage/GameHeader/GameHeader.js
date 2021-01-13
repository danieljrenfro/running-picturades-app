import React, { Component } from 'react';

class GameHeader extends Component {
  generateHeader() {
    if (this.props.error) {
      return (
        <div className="error">
          <h2>{this.props.error.message || this.props.error}</h2>
          <p>Go back or navigate to the Home or Lists page.</p>
        </div>
      ) 
    }
    return (<div className="game-header">
              <h2>Game: {this.props.title}</h2>
              {this.props.gameStarted
                ? <></>
                : <button onClick={this.props.startGame} type="button">Start Game</button>
              }
            </div>)
  }
  
  render() {
    return (
      <>
        {this.generateHeader()}
      </>
    )
  }
}

export default GameHeader;