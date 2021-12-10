import axios from 'axios'

export default class IndexApi {
  static async index (url = 'http://127.0.0.1:8000/api/categories', page) {
    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
      },
      params: {
        page
      }
    }).then((response) => response.data.categories, (error) => {
      console.log(error)
    })
  }

  static remove (url = 'http://127.0.0.1:8000/api/categories', id) {
    return axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
      }
    })
  }
}
