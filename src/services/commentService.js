import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/comments`
//const NEWSFEED_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts/newsfeed`
//const EXPLORE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts/explore`

function createComment(comment) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(comment)
      //body: comment
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

export {
    createComment,
    toggleLike
}
