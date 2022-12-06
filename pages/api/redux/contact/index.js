import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, post} from "../../network/AxiosService";
// import {fetchPosts} from "../../thunk/home";

const initialState = {
    loading: false,
    data: [],
    error: "",
    success: ''
};

export const fetchData = createAsyncThunk("contact", (params) => {
    return get(params);
});

export const postForm = createAsyncThunk("postForm", (params) => {
    return post(params);
});


const dataSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        clear: (state) => {
            state.success = '';
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = "";
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error;
        });

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