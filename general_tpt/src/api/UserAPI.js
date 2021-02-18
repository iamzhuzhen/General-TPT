import { post, get } from './axios.js'

// login
export const signIn = (param) => {
  return post('/signIn', param)
}

