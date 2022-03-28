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


function createChatHistory(othersProfileIDObject) {
  return fetch(`${BASE_URL}/chat-history/new`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(othersProfileIDObject)
  })
  .then(res => res.json())
}

function addMessage(messageDataObject) {
  return fetch(`${BASE_URL}/chat-history/new-message`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(messageDataObject)
  })
  .then(res => res.json())
}


export {
    getChatHistories,
    createChatHistory,
    addMessage
}