import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, post} from "../../network/AxiosService";
// import {fetchPosts} from "../../thunk/home";

const initialState = {
    loading: false,
    posts: [],
    error: "",
    detail: [],
    detailLoading: false,
    detailError: "",
    success: ''
};

export const fetchPosts = createAsyncThunk("project", (params) => {
    return get(params);
});

export const fetchPostDetail = createAsyncThunk("project/detail", (params) => {
    return get(params);
});

export const postForm = createAsyncThunk("postForm", (params) => {
    return post(params);
});


const postSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        clear: (state) => {
            state.success = '';
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
        builder.addCase(fetchPostDetail.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchPostDetail.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
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

export default postSlice.reducer;
export const {clear} = postSlice.actions;