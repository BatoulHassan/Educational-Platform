import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchStudents = createAsyncThunk('students/fetch', async() => {
    return await axiosInstance
    .get("https://batoulhassan.github.io/api/db.json")
    .then(res => res.data.students)
})

const studentsReducer = createSlice({
    name: 'students',
    initialState: {
        students: [],
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.students = action.payload
        })
    }
})

export default studentsReducer.reducer