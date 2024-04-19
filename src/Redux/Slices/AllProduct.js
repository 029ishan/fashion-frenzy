import {createSlice} from "@reduxjs/toolkit";
import { fetchData } from "../../services/AllProduct";

const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  

const allProductData=createSlice({
    name: "allproduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default allProductData.reducer;