import store from '@/store/store.js'

let { dispatch } = store
export function startLoading() {
  dispatch({ type: 'STARTLOADING' })
}

export function endLoading() {
  dispatch({ type: 'ENDLOADING' })
}

