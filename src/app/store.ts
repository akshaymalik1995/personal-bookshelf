import shelfReducer from "../features/shelf/shelfSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import { addToShelf } from "../features/shelf/shelfSlice";
import { removeFromShelf } from "../features/shelf/shelfSlice";

const shelfMiddleware = (store) => next => action => {
    if (action.type === "shelf/addToShelf") {
        try {
            localStorage.setItem("shelf", JSON.stringify(shelfReducer(store.getState().shelf, addToShelf(action.payload))))
        } catch (error) {
            console.error(error, "Failed to save shelf to the local storage")
        }
    }
    if (action.type === "shelf/removeFromShelf") {
        try {
            localStorage.setItem("shelf", JSON.stringify(shelfReducer(store.getState().shelf, removeFromShelf(action.payload))))
        } catch (error) {
            console.error(error, "Failed to save shelf to the local storage")
        }
    }
    return next(action)
}


export const store = configureStore({
    reducer: {
        shelf: shelfReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shelfMiddleware)
})


