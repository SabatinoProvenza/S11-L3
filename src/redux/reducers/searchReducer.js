export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
export const SET_LOADING = "SET_LOADING"
export const SET_ERROR = "SET_ERROR"

const initialState = {
  results: [],
  loading: false,
  error: null,
}

const searchReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...currentState, loading: action.payload }

    case SET_ERROR:
      return { ...currentState, error: action.payload }

    case SET_SEARCH_RESULTS:
      return { ...currentState, results: action.payload }

    default:
      return currentState
  }
}

export default searchReducer
