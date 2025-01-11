import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
}

const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      toggleDarkMode: (state, action) => {
        state.darkMode = action.payload
        console.log(action.payload)
      }
    }
})

export const { toggleDarkMode } = AppSlice.actions

export default AppSlice.reducer