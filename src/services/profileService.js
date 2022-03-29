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

function unfollow(profiles) {
  console.log('coming in to unfollow function: ', profiles )
  return fetch(`${BASE_URL}/unfollow`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(profiles)
  })
  .then(res => res.json())
}

function getSelectProfiles (profileList) {
  return fetch(`${BASE_URL}/select`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({profileList})
  })
  .then(res => res.json())
}

function updateProfile(updatedProfileInformation) {
  console.log('coming in to follow function: ', updatedProfileInformation )
  for (let entry of updatedProfileInformation.entries()) {
    console.log('entry: ', entry)
  }
  return fetch(`${BASE_URL}/update`, {
    method: 'PATCH',
    headers: {
     // 'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: updatedProfileInformation
  })
  .then(res => res.json())
}

export { 
  getAllProfiles,
  getProfile,
  follow,
  unfollow,
  getSelectProfiles,
  updateProfile
}
