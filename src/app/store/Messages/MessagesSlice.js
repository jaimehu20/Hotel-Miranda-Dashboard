import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./MessagesThunk";

export const CommentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        comment: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchComments.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(fetchComments.fulfilled, (state,action) => {
            state.comments = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAllComments = state => state.getComments.comments;
export const getComment = state => state.getComments.comment;
export const getCommentsStatus = state => state.getComments.status;
export const getCommentsError = state => state.getComments.error;