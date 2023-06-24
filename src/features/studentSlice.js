import { createSlice } from "@reduxjs/toolkit";

const studentsData = [
    {
        id:1,
        name:"Rajesh",
        email:"rajesh@gmail.com",
        phone:"+91993657355",
        status:"fsd",
    },
    {
        id:2,
        name:"Satish Anna",
        email:"satish@gmail.com",
        phone:"+91837656747",
        status:"ds",
    },
    {
        id:3,
        name:"Fathima",
        email:"fathima@gmail.com",
        phone:"+91993774255",
        status:"fsd",
    },
    {
        id:4,
        name:"Rahul",
        email:"rahul@gmail.com",
        phone:"+9199399995",
        status:"ds",
    },
    {
        id:5,
        name:"Mahesh",
        email:"mahesh@gmail.com",
        phone:"+91376487355",
        status:"fsd",
    },
    {
        id:6,
        name:"Saad",
        email:"saad@gmail.com",
        phone:"+91554667355",
        status:"ds",
    },
]

const studentSlice = createSlice({
    name:'student',
    initialState:{
        value:studentsData       
    }, 
    reducers:{
        addStudent:(state, action) => {
           state.value.push(action.payload)
        },
        updateStudent:(state, action) => {
            state.value.map((upstudent) => {
                if(upstudent.id==action.payload.id){
                    upstudent.name = action.payload.name
                    upstudent.status = action.payload.status
                    upstudent.email = action.payload.email
                    upstudent.phone = action.payload.phone
                }
            })
        },
        deleteStudent:(state, action) => {
            state.value = state.value.filter((destudent) => destudent.id!==action.payload.id)
        },
    },
});

export const {addStudent, updateStudent, deleteStudent, viewStudent} = studentSlice.actions;
export default studentSlice.reducer;