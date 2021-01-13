import config from '../config'
import TokenService from './token-service';

const ListApiService = {
  getLists() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getListWords(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}/words`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postList(title, game_type) {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        game_type
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateList(listId, title, game_type) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        game_type: game_type
      })
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e)) 
        }
      }
      )
  },
  deleteList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))  
        }
      }
      )
  }
}

export default ListApiService;