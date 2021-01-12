import config from '../config'
import TokenService from './token-service';

const WordApiService = {
  getWord(wordId) {
    return fetch(`${config.API_ENDPOINT}/words/${wordId}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      ) 
  },
  patchWord(wordId, updatedWord) {
    return fetch(`${config.API_ENDPOINT}/words/${wordId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ word: updatedWord})
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWord(words, listId) {
    return fetch(`${config.API_ENDPOINT}/words`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        words,
        listId
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default WordApiService;