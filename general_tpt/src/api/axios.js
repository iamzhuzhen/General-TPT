import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 15 * 60 * 1000,
});

export function post(url, data) {
  return instance.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function get(url) {
  return instance.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}