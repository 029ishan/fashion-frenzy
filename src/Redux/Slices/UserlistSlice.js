import {createSlice} from "@reduxjs/toolkit";
import { fetchUser } from "../../services/AllProduct";

const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  

const userData=createSlice({
    name: "alluser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },  
       
});
export default userData.reducer;