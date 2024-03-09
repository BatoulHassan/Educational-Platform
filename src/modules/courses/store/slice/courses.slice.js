import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchCourses = createAsyncThunk('courses/fetch', async() => {
    return await axiosInstance
    .get("https://batoulhassan.github.io/api/db.json")
    .then(res => res.data.courses)
})

const coursesReducer = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.courses = action.payload
        })
       
    }
})

export default coursesReducer.reducer