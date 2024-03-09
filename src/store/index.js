import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk'
import coursesSlice from "../modules/courses/store/slice/courses.slice";
import studentsSlice from "../modules/students/store/slice/students.slice";
import teachersSlice from "../modules/teachers/store/slice/teachers.slice";

const reducers = {
    reducer: {
        courses: coursesSlice,
        students: studentsSlice,
        teachers: teachersSlice
    }
}
const store = configureStore(reducers, applyMiddleware(thunk))

export default store

