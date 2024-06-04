import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../app/types";

import { ISearchState } from "../../app/types";

const initialState: ISearchState = {
    results: []
}

const searchSLice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateResults(state, action: { type: string, payload: IBook[] }) {
            state.results = action.payload
        },

    }
})

export const { updateResults } = searchSLice.actions


export default searchSLice.reducer