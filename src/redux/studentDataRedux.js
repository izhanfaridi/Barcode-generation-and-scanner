import {createSlice} from "@reduxjs/toolkit"

const studentDataSlice = createSlice({
    name:"Student",
    initialState:{
        studentData:null,
    },
    reducers:{
        addStudent:(state,action)=>{
            state.studentData=action.payload;
        },
        
       
    },
})

export const {addStudent } =studentDataSlice.actions;
export default studentDataSlice.reducer;