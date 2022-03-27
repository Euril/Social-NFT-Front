import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/messages`

function getChatHistories() {
    return fetch(BASE_URL, {
      headers: {
        //'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    .then(res => res.json())
  }

export {
    getChatHistories
}