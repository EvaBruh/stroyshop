import {createSlice} from "@reduxjs/toolkit";

const initialState = { opened: false }

export const modalSlice = createSlice({
        name: "modal",
        initialState,
        reducers: {
            open: (state) => {
                state.opened = true
            },
            close: (state) => {
                state.opened = false
            },
        }
    }
)


export const { open, close } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;