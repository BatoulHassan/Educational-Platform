import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchTeachers = createAsyncThunk('teachers/fetch', async() => {
    return await axiosInstance
    .get("https://batoulhassan.github.io/api/db.json")
    .then(res => res.data.teachers)
})

const teachersReducer = createSlice({
    name: 'teachers',
    initialState: {
        teachers: []
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchTeachers.fulfilled, (state, action) => {
            state.teachers = action.payload
        })
    }
})

export default teachersReducer.reducer