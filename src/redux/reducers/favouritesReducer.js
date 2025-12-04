import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions"

const initialState = {
  content: [],
}

const favouritesReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...currentState,

        content: [...currentState.content, action.payload],
      }

    case REMOVE_FAVOURITE:
      return {
        ...currentState,

        content: currentState.content.filter(
          (company) => company !== action.payload
        ),
      }

    default:
      return currentState
  }
}

export default favouritesReducer
