import {createSlice} from "@reduxjs/toolkit";
import { fetchCarousal } from "../../services/AllProduct";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  

const carousalData=createSlice({
    name: "carousalslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCarousal.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCarousal.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchCarousal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default carousalData.reducer;