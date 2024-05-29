import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInfo } from "../../fetchInfo";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const fetchedRooms = await fetchInfo("/rooms");
    return fetchedRooms;
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async (id : string) => {
    const fetchedRoom = await fetchInfo(`/rooms/${id}`);
    return fetchedRoom;
})

export const newRoom = createAsyncThunk('rooms/newRoom', async (data : any) => {
    const response = await fetchInfo("/rooms", "POST", data );
    return response;
})

export const editRoom = createAsyncThunk('rooms/editRoom', async (id: string) => {
    const response = await fetchInfo(`/rooms/${id}`);
    return response;
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id: string) => {
    const response = await fetchInfo(`/rooms/${id}`);
    return response;
})