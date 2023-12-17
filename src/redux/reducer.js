import { createSlice } from "@reduxjs/toolkit";


const initialSlice = {
    count: 0,
}

const listSlice = createSlice({
    name: 'list',
    initialState: initialSlice,
    reducers: {
        like : (state, action) => {
            state.count = state.count + 1            
        },
        unlike: (state, action) => {
            if (state.count > 0) {
                state.count = state.count - 1
            }
            else{
                state.count = 0
            }
        }
    }
})

export const listAction = listSlice.actions
export const listReducer = listSlice.reducer
export const listSelector = (state) => state.listReducer.count