const initialState = {
  isLoading: false
}


function projectReducer(state = initialState, action) {
  switch (action.type) {
    case 'STARTLOADING':
      return Object.assign({}, state, { isLoading: true })
    case 'ENDLOADING':
      return Object.assign({}, state, { isLoading: false })
    default:
      return state;
  }
}

export default projectReducer