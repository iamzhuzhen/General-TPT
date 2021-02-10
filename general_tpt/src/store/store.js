import { combineReducers, createStore } from 'redux'

// import reducers
import projectReducer from './reducers/projectReducer'

// all reducer will write here and wait to combine
let readyForCombinedReducers = {
    projectReducer
}

let reducer = combineReducers(readyForCombinedReducers)

let store = createStore(reducer)
export default store