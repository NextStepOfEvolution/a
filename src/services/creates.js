import axios from 'axios'

const configs = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
  }
}
export default class CreatesAPI {
  static create (url, data) {
    return axios.post(url, data, configs)
      .then((response) => response, (error) => error.response)
  }
}
