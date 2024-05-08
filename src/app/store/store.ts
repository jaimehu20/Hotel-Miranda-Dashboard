import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BookingsSlice } from "./Bookings/BookingsSlice";
import { EmployeesSlice } from "./Employees/EmployeesSlice";
import { RoomsSlice } from "./Rooms/RoomsSlice";
import { CommentsSlice } from "./Messages/MessagesSlice";


export const store = configureStore({
    reducer: {
        getBookings: BookingsSlice.reducer,
        getEmployees: EmployeesSlice.reducer,
        getRooms: RoomsSlice.reducer,
        getComments: CommentsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
