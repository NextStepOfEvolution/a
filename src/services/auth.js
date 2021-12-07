import axios from 'axios'

export default class AuthAPI {
  static login (store, router, url, email, password) {
    return axios.post('http://127.0.0.1:8000/api/login', {
      email,
      password
    }).then((response) => response, (error) => error.response)
  }

  static logout (e) {
    return axios.get('http://127.0.0.1:8000/api/logout', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
      }
    }).then((response) => {
      localStorage.removeItem('user')
      e.$store.state.user = {}
    }, (error) => {
      console.log(error)
    })
  }
}
