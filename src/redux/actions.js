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
