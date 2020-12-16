import React, { Component } from 'react';
import PictionaryRules from './PictionaryRules/PictionaryRules';
import CharadesRules from './CharadesRules/CharadesRules';

class AboutPage extends Component {
  state = {
    viewPictionaryRules: false,
    viewCharadesRules: false
  }

  toggleViewPictionaryRules = () => {
    this.setState({
      viewPictionaryRules: !this.state.viewPictionaryRules
    })
  }

  toggleViewCharadesRules = () => {
    this.setState({
      viewCharadesRules: !this.state.viewCharadesRules
    })
  }
  
  render() {
    return (
      <section class="app-instructions">
      <h2>What is Running Picturades?</h2>
      
      <p>Running Picturades is a game with 2-4 teams. In every game you have a Word Giver who creates a list of words, decides whether it will pictionary or charades and then administers those words to the teams. At the beginning, each team will send one player to the Word Giver. The Word Giver will tell each player the initial word. The players run back to their teams and begin either acting or drawing depending on the game type.</p>

      <p>Whenever someone guesses the correct word they will run to the Word Giver to check that it was correct, receive the next word and run back to try and get their team to guess the correct word! This cycle continues until whichever team moves through all of the words in the list and wins!</p>
      
      <h2>How to Play</h2>
      
      <h3 onClick={this.toggleViewPictionaryRules}>Pictionary</h3>
      {this.state.viewPictionaryRules && <PictionaryRules/>}

      <h3 onClick={this.toggleViewCharadesRules}>Charades</h3>
      {this.state.viewCharadesRules && <CharadesRules/>}

    </section>
    );
  }
}

export default AboutPage;