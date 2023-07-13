import { createSlice } from "@reduxjs/toolkit"

const initialState={
   
}

const usersSlice= createSlice({
    name:'userSlice',
    initialState,
    
})

export const {  logout } = usersSlice.actions;
export default usersSlice.reducer