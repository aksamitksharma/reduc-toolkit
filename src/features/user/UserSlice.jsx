import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export  const fecthUsers = createAsyncThunk('user/fecthUsers', () => {
 return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.data)
    
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fecthUsers.pending, (state) => {
            state.loading= true
        })
        builder.addCase(fecthUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ''
        })
        builder.addCase(fecthUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.payload
        })
    }
})

export default userSlice.reducer