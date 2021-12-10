import axios from 'axios'

const configs = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
  }
  /* cache: false,
    ContentType: false,
    processData: false */
}
export default class CreatesAPI {
  static async create (url, data) {
    return await axios.post(url, data, configs).then((response) => response, (error) => error.response)
  }
}
