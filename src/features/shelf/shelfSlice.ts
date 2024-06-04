import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../app/types";

let localShelf = {}

try {
    if (localStorage.getItem("shelf")) {
        localShelf = JSON.parse(localStorage.getItem("shelf") || "")
    }
} catch (error) {
    console.error(error, "Failed to get shelf from local storage")
}

const initialState: { [key: string]: IBook } = localShelf

const shelfSLice = createSlice({
    name: "shelf",
    initialState,
    reducers: {
        addToShelf(state, action: { type: string, payload: IBook }) {
            state[action.payload.key] = action.payload
        },
        removeFromShelf(state, action: { type: string, payload: string }) {
            delete state[action.payload]
        },
    }
})

export const { addToShelf, removeFromShelf } = shelfSLice.actions


export default shelfSLice.reducer