import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRooms, fetchRoom, newRoom, editRoom, deleteRoom  } from "./RoomsThunk";

type initialState = {
    rooms: object[],
    room: object | null,
    status: string,
    error: string | undefined
}

const initialState : initialState = {
    rooms: [],
    room: null,
    status: "idle",
    error: undefined
}

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRooms.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(fetchRooms.fulfilled, (state,action : PayloadAction<any>) => {
            state.rooms = action.payload.allRooms;
            state.status = "fulfilled";
        })

        builder.addCase(fetchRoom.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRoom.rejected, (state,action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(fetchRoom.fulfilled, (state,action : PayloadAction<any>) => {
            state.room = action.payload.individualRoom;
            state.status = "fulfilled";
        })

        builder.addCase(newRoom.pending, (state, action) => {
            state.status = "pending";
        }).addCase(newRoom.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(newRoom.fulfilled, (state, action) => {
            state.rooms.push(action.payload.room[0])
            state.status = "fulfilled"
        })

        builder.addCase(editRoom.pending, (state, action) => {
            state.status = "pending";
        }).addCase(editRoom.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(editRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.map((item) => item._id == action.payload.room._id ? action.payload.room : item)
            state.status = "fulfilled";
        })

        builder.addCase(deleteRoom.pending, (state, action) => {
            state.status = "pending";
        }).addCase(deleteRoom.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(deleteRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.filter((item) => item._id != action.payload.room._id)
            state.status = "fulfilled";
        })
    }
})

export const getAllRooms = (state : any) => state.getRooms.rooms;
export const getRoom = (state : any) => state.getRooms.room;
