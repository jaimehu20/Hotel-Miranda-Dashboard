import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/CustomerData/";
import { delay } from "../../delay";


export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    const response = await delay(data);
    return response;
})

export const fetchComment = createAsyncThunk("comments/fetchComment", async () => {
    const response = await delay(data);
    return response;
})

export const newComment = createAsyncThunk("comments/newComment", async () => {
    const response = await delay(data);
    return response;
})

export const editComment = createAsyncThunk("comments/editComment", async () => {
    const response = await delay(data);
    return response;
})

export const deleteComment = createAsyncThunk("comments/deleteComment", async () => {
    const response = await delay(data);
    return response;
})