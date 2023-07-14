import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchronous action creator for user login
export const login = createAsyncThunk(
    'userSlice/login',
    async (userData) => {
        const { data } = await axios.post("http://localhost:3001/api/v1/user/login", userData);
        // console.log(data.body)
        return data.body;
    }
);


const initialState={
   
}

const usersSlice= createSlice({
    name:'userSlice',
    initialState,
    
})

export const {  logout } = usersSlice.actions;
export default usersSlice.reducer;