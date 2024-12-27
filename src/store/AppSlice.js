import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
}

const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
})

export default AppSlice.reducer