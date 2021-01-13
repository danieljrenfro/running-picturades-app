import React, { Component } from 'react';

import ListApiService from '../services/lists-api-service';
import WordApiService from '../services/words-api-service';
import WordInput from '../WordInput/WordInput';
import './CreateListPage.css';

class CreateListPage extends Component {
  state = {
    error: null,
    title: '',
    gameType: '',
    words: [
      {word: '', list_id: null, wordNumber: 'word1', label: 'Word 1' },
      {word: '', list_id: null, wordNumber: 'word2', label: 'Word 2' },
      {word: '', list_id: null, wordNumber: 'word3', label: 'Word 3' },
      {word: '', list_id: null, wordNumber: 'word4', label: 'Word 4' },
      {word: '', list_id: null, wordNumber: 'word5', label: 'Word 5' },
      {word: '', list_id: null, wordNumber: 'word6', label: 'Word 6' },
      {word: '', list_id: null, wordNumber: 'word7', label: 'Word 7' },
      {word: '', list_id: null, wordNumber: 'word8', label: 'Word 8' },
      {word: '', list_id: null, wordNumber: 'word9', label: 'Word 9' },
      {word: '', list_id: null, wordNumber: 'word10', label: 'Word 10' },
      {word: '', list_id: null, wordNumber: 'word11', label: 'Word 11' },
      {word: '', list_id: null, wordNumber: 'word12', label: 'Word 12' },
      {word: '', list_id: null, wordNumber: 'word13', label: 'Word 13' },
      {word: '', list_id: null, wordNumber: 'word14', label: 'Word 14' },
      {word: '', list_id: null, wordNumber: 'word15', label: 'Word 15' },
    ]
  }

  validateForm = () => {
    if (this.state.title.trim() === '') {
      return 'Title cannot be empty';
    }

    if (this.state.gameType.trim() === '') {
      return 'Game Type cannot be empty, select a game type';
    }

    let emptyWord = false;
    this.state.words.forEach(word => {
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
    const wordInputs = this.state.words.map((word, i) => {
      return <WordInput 
                key={i}
                word={word} 
                updateWord={this.updateWord} 
              />
    })
    return wordInputs;
  }

  updateWord = (event) => {
    const updatedWords = this.state.words.map(word => {
      if (event.target.name === word.wordNumber) {
        return {
          word: event.target.value,
          list_id: word.listId,
          wordNumber: word.wordNumber,
          label: word.label
        }
      }
      return word;
    })
    this.setState({ words: updatedWords })
  }

  updateTitle = (value) => {
    this.setState({ title: value });
  }

  updateGameType = (value) => {
    this.setState({ gameType: value });
  }

  resetCreateForm = () => {
    const clearedWords = this.state.words.map(word => {
      return {
        word: '',
        list_id: word.listId,
        wordNumber: word.wordNumber,
        label: word.label
      }
    })
    this.setState({
      title: '',
      gameType: '',
      words: clearedWords
    });
  }

  addListIdToWords = (listId) => {
    const wordsWithListId = this.state.words.map(word => {
      return {
        word: word.word,
        list_id: listId,
        wordNumber: word.wordNumber,
        label: word.label
      }
    })
    this.setState({ words: wordsWithListId })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });

    const { title, gameType } = this.state;

    const validationError = this.validateForm();

    if (validationError) {
      this.setState({ error: validationError })
    } else {
      ListApiService.postList(title, gameType)
        .then(list => {
          this.addListIdToWords(list.id);
        })
        .then(() => {
          const newWords = this.state.words.map(word => {
            return {
              word: word.word,
              list_id: word.list_id
            }
          })
          WordApiService.postWord(newWords)
        })
    }
  }

  render() {
    return (
      <section className="create-list-page">
        <h2>Create New List</h2>
        <form onSubmit={(e) => this.handleFormSubmit(e)} className="create-list-form">
          <label htmlFor="title">Title:</label>
          <input onChange={(e) => this.updateTitle(e.target.value)} value={this.state.title} type="text" name="title" id="title" required/>

          <label htmlFor="game-type">Game Type:</label>
          <select onChange={(e) => this.updateGameType(e.target.value)} value={this.state.gameType} name="game-type" id="game-type">
            <option value="">Select One</option>
            <option value="Pictionary">Pictionary</option>
            <option value="Charades">Charades</option>
          </select>

          {this.generateWordInputs()}

          {this.state.error 
            ? <p className="error-message">{this.state.error}</p>
            : <></>}

          <div className="create-form-buttons">
            <button onClick={this.resetCreateForm} type="button">Clear</button>
            <button type="submit">Create</button>
          </div>
        </form>
      </section>
    )
  }
}

export default CreateListPage;