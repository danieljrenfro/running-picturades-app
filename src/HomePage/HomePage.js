import React, { Component } from 'react';
import history from '../history';

import './HomePage.css';

class HomePage extends Component {

  onStartGameClicked() {
    history.push('/lists');
  }

  onViewListsClicked() {
    history.push('/lists');
  }

  onReadRulesClicked() {
    history.push('/about');
  }

  render() {
    return (
      <section className="nav-cards">
        <article className="card">
          <h2>Game</h2>
          <button onClick={this.onStartGameClicked} className="card-button" type="button">Start Game</button>
        </article>
        <article className="card">
          <h2>Lists</h2>
          <button onClick={this.onViewListsClicked} className="card-button" type="button">View Lists</button>
        </article>
        <article className="card">
          <h2>Rules</h2>
          <button onClick={this.onReadRulesClicked} className="card-button" type="button">Read Rules</button>
        </article>
      </section>
    )
  }
}

export default HomePage;