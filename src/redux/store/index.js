import { configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import searchReducer from "../reducers/searchReducer"

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    search: searchReducer,
  },
})

export default store
