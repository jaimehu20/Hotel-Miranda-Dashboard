import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/CustomerData/"


function delayData(commentData, delay = 200){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(commentData)
        }, [delay])
    });
}

export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    const response = await delayData(data);
    return response;
})

export const fetchComment = createAsyncThunk("comments/fetchComment", async () => {
    const response = await delayData(data);
    return response;
})

export const newComment = createAsyncThunk("comments/newComment", async () => {
    const response = await delayData(data);
    return response;
})

export const editComment = createAsyncThunk("comments/editComment", async () => {
    const response = await delayData(data);
    return response;
})

export const deleteComment = createAsyncThunk("comments/deleteComment", async () => {
    const response = await delayData(data);
    return response;
})