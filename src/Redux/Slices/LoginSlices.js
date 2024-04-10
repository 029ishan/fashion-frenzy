import {createSlice} from "@reduxjs/toolkit";
import { userLogin } from "../../services/LoginAction";

const initialState={
    loading:false,
    userInfo:null,
    userToken: null,
    error:null,
    success:false,
};
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.userInfo={data:[]};
            state.userToken=null;
        },
    },
    extraReducers:{
        [userLogin.pending]:(state)=>{
            state.loading=true;
            state.error=null;
        },
        [userLogin.fullfilled]: (state, {payload }) => {
            state.loading=false;
            state.userInfo=payload;
            state.userToken=payload?.data?.token;
        },
        [userLogin.rejected]: (state,{payload})=>{
            state.loading= flase;
            state.error=payload;
        },

        },
        prepare: (state)=>{
            if(userToken){
                state.userToken=userToken;
            }
        },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;