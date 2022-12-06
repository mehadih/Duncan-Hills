import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, post} from "../../network/AxiosService";


const initialState = {
    loading: false,
    data: [],
    error: "",
    success: ''
};


export const postForm = createAsyncThunk("postForm", (params) => {
    return post(params);
});

const dataSlice = createSlice({
    name: "why-invest",
    initialState,
    reducers: {
        clear: (state) => {
            state.success = '';
            state.error = ''
        }
    },
    extraReducers: (builder) => {
       
        //-- post
        builder.addCase(postForm.pending, (state) => {
            state.loading = true;
            state.success = [];
            state.error = "";
        });
        builder.addCase(postForm.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.message;
            state.error = "";
        });
        builder.addCase(postForm.rejected, (state, action) => {
            state.loading = false;
            state.success = '';
            state.error = action.payload.message
        });

    }
});

export default dataSlice.reducer;
export const {clear} = dataSlice.actions;