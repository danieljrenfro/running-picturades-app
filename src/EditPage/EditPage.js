import React, { Component } from 'react';

import history from '../history';
import WordInput from '../WordInput/WordInput';
import ListApiService from '../services/lists-api-service';
import WordApiService from '../services/words-api-service';

import './EditPage.css';

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      listWords: [],
      title: {
        value: '', 
        updated: false
      },
      gameType: { 
        value: '', 
        updated: false
      },
      formWords: [],

    }
  }
  
  componentDidMount() {
    ListApiService.getList(this.props.match.params.list_id)
      .then(list => this.setState({ 
        list: list, 
        title: { value: list.title, updated: false }, 
        gameType: { value: list.game_type, updated: false }
      }))
      .then(() => {
        ListApiService.getListWords(this.props.match.params.list_id)
          .then(words => {
            const formWords = words.map((word, i) => {
              return {
                word: word.word,
                id: word.id,
                wordNumber: `word${i + 1}`,
                label: `Word ${i + 1}`,
                updated: false
              }
            })
            this.setState({ formWords: formWords })
          })

      })
  }

  updateTitle = (value) => {
    this.setState({ title: { value: value, updated: true } });
  }

  updateGameType = (value) => {
    this.setState({ gameType: { value: value, updated: true } });
  }

  updateWord = (event) => {
    const updatedWords = this.state.formWords.map(word => {
      if (event.target.name === word.wordNumber) {
        return {
          word: event.target.value,
          id: word.id,
          wordNumber: word.wordNumber,
          label: word.label,
          updated: true
        }
      }
      return word;
    })
    this.setState({ formWords: updatedWords })
  }

  validateForm = () => {
    if (this.state.title.value.trim() === '') {
      return 'Title cannot be empty';
    }

    if (this.state.gameType.value.trim() === '') {
      return 'Game Type cannot be empty, select a game type';
    }

    let emptyWord = false;
    this.state.formWords.forEach(word => {
      if (word.word.trim() === '') {
        emptyWord = true;
      }
    })

    if (emptyWord) {
      return 'All words must have a value. Please fill in all words.'
    }
    
    return null;
  }

  generateWordInputs = () => {
    const wordInputs = this.state.formWords.map((word, i) => {
      return <WordInput 
                key={i}
                word={word} 
                updateWord={this.updateWord} 
              />
    })
    return wordInputs;
  }

  handleCancelClick = () => {
    history.push('/lists');
  }
  
  handleEditFormSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });

    const { list, title, gameType, formWords } = this.state;

    const validationError = this.validateForm();

    if (validationError) {
      this.setState({ error: validationError });
    } else {
      ListApiService.updateList(list.id, title.value, gameType.value)
        .then(() => {
          formWords.forEach(word => {
            if (word.updated) {
              const updatedWord = { word: word.word }
              WordApiService.patchWord(word.id, updatedWord.word);
            }
          })
        })
        .then(() => history.push('/lists'));
    }

  }
  
  render() {
    return (
      <section className="edit-list-page">
        <h2>Edit List: {this.state.list.title}</h2>
        <form onSubmit={(e) => this.handleEditFormSubmit(e)} className="edit-list-form">
          <label htmlFor="title">Title:</label>
          <input onChange={(e) => this.updateTitle(e.target.value)} value={this.state.title.value} type="text" name="title" id="title" required/>

          <label htmlFor="game-type">Game Type:</label>
          <select onChange={(e) => this.updateGameType(e.target.value)} value={this.state.gameType.value} name="game-type" id="game-type">
            <option value="">Select One</option>
            <option value="Pictionary">Pictionary</option>
            <option value="Charades">Charades</option>
          </select>

          {this.generateWordInputs()}

          {this.state.error 
            ? <p className="error-message">{this.state.error}</p>
            : <></>}

          <div className="edit-form-buttons">
            <button onClick={this.handleCancelClick} type="button">Cancel</button>
            <button type="submit">Update</button>
          </div>
        </form>
      </section>
    )
  }
}

export default EditPage;