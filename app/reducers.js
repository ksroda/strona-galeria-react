import { SET_SEARCH_RESULTS, CHANGE_LANGUAGE } from './actions'

const initialValue = {
  searchResults: [],
  language: 'pl'
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.results,
        query: action.payload.query
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.lang
      }
    default:
      return state
  }
}

export default reducer
