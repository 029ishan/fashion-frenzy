import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    data:[],
}

const addTocard=createSlice({
    name:"addtocard",
    initialState,
    reducers:{
        updataCard:(state,action)=>{
            state.loading=true;
            state.data=action.payload; //action.payload adds new data 
        },

        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
    }
})
export const {updataCard,setLoading}=addTocard.actions;
export default addTocard.reducer;