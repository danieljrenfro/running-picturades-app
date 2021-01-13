import React, { Component } from 'react';

import Team from './Team/Team';
import GameHeader from './GameHeader/GameHeader';
import ListApiService from '../services/lists-api-service';

import './GamePage.css';

class GamePage extends Component {

constructor(props) {
    super(props);
    this.state = {
      error: null,
      gameStarted: false,
      gameList: {},
      gameWords: null,
      teams: [
        {
          currentWord: 0,
          name: 'Team 1',
          number: 1
        },
        {
          currentWord: 0,
          name: 'Team 2',
          number: 2
        }
      ]
    }
  }

  handleBackButton = (teamNumber) => {
    const decrementedTeam = this.state.teams.map(team => {
      if (team.number === teamNumber && team.currentWord > 1) {
        return {
          currentWord: team.currentWord - 1,
          name: team.name,
          number: team.number
        }
      }
      return team;
    })

    this.setState({ teams: decrementedTeam })
  }

  handleNextButton = (teamNumber) => {
    const incrementTeam = this.state.teams.map(team => {
      if (team.number === teamNumber && team.currentWord !== this.state.gameWords.length + 1) {
        return {
          currentWord: team.currentWord + 1,
          name: team.name,
          number: team.number
        }
      }
      return team;
    })

    this.setState({ teams: incrementTeam });
  }

  handleStartGame = () => {
    const teamsStartGame = this.state.teams.map(team => {
      return {
        currentWord: 1,
        name: team.name,
        number: team.number
      }
    })

    this.setState({ teams: teamsStartGame, gameStarted: true })
  }

  componentDidMount() {
    ListApiService.getList(this.props.match.params.list_id)
      .then(list => {
        this.setState({ gameList: list })
      })
      .then(() => {
        ListApiService.getListWords(this.props.match.params.list_id)
          .then(words => {
            this.setState({ gameWords: words })
          });
      })
      .catch(res => this.setState({ error: res.error }))
  }

  generateTeams = () => {
    const teams = this.state.teams.map(team => {
      return <Team 
        key={team.number}
        team={team}
        words={this.state.gameWords}
        decrementTeam={this.handleBackButton}
        incrementTeam={this.handleNextButton}
      />;
    });

    return teams;
  }

  render() {

    return (
      <>
        <GameHeader 
          title={this.state.gameList.title} 
          error={this.state.error}
          startGame={this.handleStartGame}
          gameStarted={this.state.gameStarted}

        />
        <section className="game-teams">
          {(this.state.gameWords)
            ? this.generateTeams()
            : <></>}
        </section>
      </>
    )
  }
}

export default GamePage;