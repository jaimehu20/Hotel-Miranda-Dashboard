import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchComments } from "./MessagesThunk";

type initialState = {
    comments: object[],
    comment: object,
    status: string,
    error: null
}
const initialState : initialState = {
    comments: [],
    comment: {},
    status: "idle",
    error: null
}


export const CommentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchComments.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(fetchComments.fulfilled, (state,action : PayloadAction<object[]>) => {
            state.comments = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAllComments = (state : any) => state.getComments.comments;
export const getComment = (state : any) => state.getComments.comment;
export const getCommentsStatus = (state : any) => state.getComments.status;
export const getCommentsError = (state : any) => state.getComments.error;