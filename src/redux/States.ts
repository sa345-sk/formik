import { createSlice } from '@reduxjs/toolkit'
import {TuserInitialValues} from  '../Validation'

const data: TuserInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    LGA: "",
    gender: "",
    phoneNumber: "",
    state: "",
    nin: "",
    maritalStatus: "",
    courseID: "",
    course: ""
}
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [data]
    },
    reducers: {
        GETDATA: (state, action) => {
            // const d: TuserInitialValues = [...action.payload]
            state.data = [...action.payload]
            // console.log(state.data);
        },
        UPDATEDATA: (state, action) => {
        state.data = [state.data, ...action.payload]
    }
    }
})
export const { GETDATA, UPDATEDATA } = dataSlice.actions
export default dataSlice.reducer