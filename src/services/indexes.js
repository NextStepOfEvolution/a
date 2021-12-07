import axios from 'axios'

export default class IndexApi {
  static async Index (url = 'http://127.0.0.1:8000/api/categories') {
    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).jwt : null}`
      }
    }).then((response) => response.data.categories, (error) => {
      console.log(error)
    })
  }
}
