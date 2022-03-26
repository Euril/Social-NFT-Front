import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfile(email) {
  //console.log('email in getProfile', email)
  return fetch(`${BASE_URL}/${email}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

function follow(profiles) {
  console.log('coming in to follow function: ', profiles )
  return fetch(`${BASE_URL}/follow`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(profiles)
  })
  .then(res => res.json())
}


export { 
  getAllProfiles,
  getProfile,
  follow,
}
