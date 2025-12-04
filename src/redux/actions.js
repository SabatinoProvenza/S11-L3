import {
  SET_SEARCH_RESULTS,
  SET_LOADING,
  SET_ERROR,
} from "./reducers/searchReducer"

export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"

export const addFavouriteAction = (companyName) => {
  return {
    type: ADD_FAVOURITE,
    payload: companyName,
  }
}

export const removeFavouriteAction = (companyName) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: companyName,
  }
}

export const setSearchResultsAction = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
})

export const setLoadingAction = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
})

export const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error,
})

export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingAction(true))
      dispatch(setErrorAction(null))

      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      )

      if (response.ok) {
        const { data } = await response.json()
        dispatch(setSearchResultsAction(data))
        dispatch(setLoadingAction(false))
      } else {
        throw new Error("Errore nel recupero dei dati")
      }
    } catch (err) {
      dispatch(setErrorAction(err.message))
      dispatch(setLoadingAction(false))
    }
  }
}
