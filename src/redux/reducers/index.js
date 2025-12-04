import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions"

const initialState = {
  prefs: {
    content: [],
  },
}

const mainReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...currentState,
        prefs: {
          ...currentState.prefs,
          content: [...currentState.prefs.content, action.payload],
        },
      }

    case REMOVE_FAVOURITE:
      return {
        ...currentState,
        prefs: {
          ...currentState.prefs,
          content: currentState.prefs.content.filter(
            (company) => company !== action.payload
          ),
        },
      }

    default:
      return currentState
  }
}

export default mainReducer
