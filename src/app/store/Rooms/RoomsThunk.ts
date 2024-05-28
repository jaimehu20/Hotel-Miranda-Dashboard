import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInfo } from "../../fetchInfo";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const fetchedRooms = await fetchInfo("/rooms");
    return fetchedRooms;
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async (id : string) => {
    const fetchedRoom = data.find((item) => item.room_id === id);
    return fetchedRoom;
})

export const newRoom = createAsyncThunk('rooms/newRoom', async () => {
    const response = await fetchInfo(data);
    return response;
})

export const editRoom = createAsyncThunk('rooms/editRoom', async () => {
    const response = await fetchInfo(data);
    return response;
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async () => {
    const response = await fetchInfo(data);
    return response;
})