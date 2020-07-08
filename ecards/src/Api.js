import axios from 'axios'

const request = axios.create({
  baseURL: 'https://brown-shoe.herokuapp.com/api/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/cards/all_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    // console.log(res.data.results)
    return res.data.results
  })
}

export function getUsersCards (token) {
  return request.get('/cards/my_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    // console.log(res.data)
    return res.data.results
  })
}

export function getUsersInfo (token) {
  return request.get('/user/info/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    // console.log(res.data)
    return res.data
  })
}

export function deleteCard (token, cardId) {
  return request.delete(`/cards/${cardId}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    console.log(response.data)
  })
}

export function getFriendsList (token) {
  return request.get('/friends/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('friendslist', res.data)
    return res.data
  })
}

export function getFriendsCards (token) {
  return request.get('/cards/friends_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('getfriends', res.data)
    return res.data
  })
}
