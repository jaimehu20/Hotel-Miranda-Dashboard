import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../apiRequest";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const fetchedRooms = await apiRequest("/rooms");
    return fetchedRooms;
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async (id : string) => {
    const fetchedRoom = await apiRequest(`/rooms/${id}`);
    return fetchedRoom;
})

export const newRoom = createAsyncThunk('rooms/newRoom', async (data : any) => {
    const response = await apiRequest("/rooms", "POST", data );
    return response;
})

export const editRoom = createAsyncThunk('rooms/editRoom', async (data: {id : string, data : any}) => {
    const response = await apiRequest(`/rooms/${data.id}`, "PATCH", data.data);
    return response;
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id: string) => {
    const response = await apiRequest(`/rooms/${id}`, "DELETE");
    return response;
})