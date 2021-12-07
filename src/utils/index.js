import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/'

export async function Index (url = 'https://jsonplaceholder.typicode.com/posts', limit) {
  await axios.get(URL + url, {
    params: {
      _page: 1,
      _limit: limit
    }
  }).then((response) => {
    const data = []
    for (let i = 0; i < response.data.length; i++) {
      data[i] = Object.assign({}, response.data[i], { key: i })
    }
    this.response = data
    this.pageSize = limit
  })
}

export async function Login (store, router, url, email, password) {
  await axios.post('http://127.0.0.1:8000/api/login', {
    email: email,
    password: password
  }).then((response) => {
    store.state.user = {
      id: response.data.user.id,
      email: response.data.user.email,
      email_verified_at: response.data.user.email_verified_at,
      jwt: response.data.access_token
    }
    localStorage.setItem('user', JSON.stringify(store.state.user))
    store.state.errorsApi.message = null
    router.push({ name: 'CategoriesMain' })
  }, (error) => {
    store.state.errorsApi.message = error.response.data.message
  })
}

export function Logout (e) {
  axios.get('http://127.0.0.1:8000/api/logout', {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).jwt}`
    }
  }).then((response) => {
    localStorage.removeItem('user')
    e.$store.state.user = {}
  }, (error) => {
    console.log(error)
  })
}
