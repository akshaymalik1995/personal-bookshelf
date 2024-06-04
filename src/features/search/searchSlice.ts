import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../app/types";

import { ISearchState } from "../../app/types";

const initialState: ISearchState = {
    inputValue: "",
    results: []
}

const searchSLice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateResults(state, action: { type: string, payload: IBook[] }) {
            state.results = action.payload
        },
        updateInputValue(state, action: { type: string, payload: string }) {
            state.inputValue = action.payload
        },
    }
})

export const { updateResults, updateInputValue } = searchSLice.actions


export default searchSLice.reducer