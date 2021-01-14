import React, { Component } from 'react';

class Team extends Component {

  static defaultProps = {
    team: {},
    words: []
  };

  render() {
    const { team, words } = this.props;

    return (
      <div className="team">
        {(team.currentWord === words.length + 1)
          ? <></>
          : <h3 className="team-name">{team.name}</h3>}
        {(team.currentWord === words.length + 1)
          ? <h4 className="game-winner">{team.name} wins!!!</h4>
          : <></>}
        {(team.currentWord === 0)
          ? <p>Waiting for game to start...</p>
          : <></>}
        {(team.currentWord > 0 && team.currentWord < words.length + 1)
          ? (<>
            <p className="current-word">Word {team.currentWord}: {words[team.currentWord - 1]['word']}</p>
            <p className="next-word">
              {(team.currentWord === words.length) ? <></> : `Next Word: ${words[team.currentWord]['word']}`}
            </p>
          </>)
          : <></>}
        
        {(team.currentWord >= 1 && team.currentWord !== words.length + 1)
          ? (<div className="team-buttons">
              <button onClick={() => this.props.decrementTeam(team.number)} type="button">Back</button>
              <button onClick={() => this.props.incrementTeam(team.number)} type="button">
                {team.currentWord === words.length ? 'Finish!' : 'Next'}
              </button>
            </div>)
          : <></>}
        
      </div>
    )
  }
}

export default Team;