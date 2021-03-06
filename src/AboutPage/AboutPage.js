import React, { Component } from 'react';
import PictionaryRules from './PictionaryRules/PictionaryRules';
import CharadesRules from './CharadesRules/CharadesRules';

import './AboutPage.css';

class AboutPage extends Component {
  
  render() {
    return (
      <section className="app-instructions">
        <h2 className="about-header">What is Running Picturades?</h2>
        
        <p>Running Picturades is a game with 2 teams. In every game you have a Word Giver who creates a list of words, decides whether it will be pictionary or charades and administers those words to the teams. At the beginning, each team will send one player to the Word Giver. The Word Giver will tell each player the initial word. The players run back to their teams and begin either acting or drawing depending on the game type.</p>

        <p>Whenever someone guesses the correct word they will run to the Word Giver to check that it was correct, receive the next word and run back to try and get their team to guess the next word! This cycle continues until whichever team moves through all of the words in the list and wins!</p>

        <h2 className="about-header">Getting Setup</h2>

        <p>Getting started with Running Picturades app is super easy! To begin a game all you have to do is go to the Lists section and then select a list to start a game!</p> 

        <p>If you want to create your own lists, you will need to register and log in to an account.</p>

        <h3>Demo User</h3>
        <p>Username: testUser</p>
        <p>Password: Password1!</p>
        
        <h2 className="about-header">How to Play</h2>
        
        <h3>Pictionary</h3>
        <PictionaryRules/>

        <h3>Charades</h3>
        <CharadesRules/>
      </section>
    );
  }
}

export default AboutPage;