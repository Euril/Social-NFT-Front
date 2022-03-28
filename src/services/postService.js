import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts`
const NEWSFEED_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts/newsfeed`
const EXPLORE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts/explore`


function create(post) {
  console.log('post: ',typeof post)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      //'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
   // body: JSON.stringify(post)
    body: post
  })
  .then(res => res.json())
}

function getNewsFeed() {
  return fetch(NEWSFEED_URL, {
    headers: {
      //'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function getExploreFeed() {
  return fetch(EXPLORE_URL, {
    headers: {
      //'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function toggleLike(likeInfo) {
  //console.log(profileID)
  return fetch(`${BASE_URL}/likes`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(likeInfo)
    //body: comment
  })
  .then(res => res.json())
}


function deletePost(postIDObject) {
  //console.log(profileID)
  return fetch(`${BASE_URL}/delete`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(postIDObject)
    //body: comment
  })
  .then(res => res.json())
}

export {
  create,
  getNewsFeed,
getExploreFeed,
  toggleLike,
  deletePost
}