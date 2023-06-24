import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../features/studentSlice';
import { toast } from 'react-toastify';

// const studentsData = [
//     {
//         id:1,
//         name:"Rajesh",
//         email:"rajesh@gmail.com",
//         phone:"+91993657355",
//         status:"Active",
//     },
//     {
//         id:2,
//         name:"Satish Anna",
//         email:"satish@gmail.com",
//         phone:"+91837656747",
//         status:"InActive",
//     },
//     {
//         id:3,
//         name:"Fathima",
//         email:"fathima@gmail.com",
//         phone:"+91993774255",
//         status:"Active",
//     },
//     {
//         id:4,
//         name:"Rahul",
//         email:"rahul@gmail.com",
//         phone:"+9199399995",
//         status:"InActive",
//     },
//     {
//         id:5,
//         name:"Mahesh",
//         email:"mahesh@gmail.com",
//         phone:"+91376487355",
//         status:"Active",
//     },
//     {
//         id:6,
//         name:"Saad",
//         email:"saad@gmail.com",
//         phone:"+91554667355",
//         status:"InActive",
//     },
//     {
//         id:7,
//         name:"Meghana",
//         email:"meghana@gmail.com",
//         phone:"+917745637",
//         status:"Active",
//     },
//     {
//         id:8,
//         name:"Ahmed",
//         email:"ahmed@gmail.com",
//         phone:"+9134421785",
//         status:"InActive",
//     },
//     {
//         id:9,
//         name:"Bhagyasri",
//         email:"rajesh@gmail.com",
//         phone:"+91884665755",
//         status:"Active",
//     }
  
// ];

const Home = (id) => {
     const students = useSelector((state) => state.student.value);
     const [filter, setFilter] = useState('')

     const filteredData = students.filter((val) => {
      return val.status.toLowerCase().includes(filter.toLowerCase())
     })

     console.log("students data", students);
     const dispatch = useDispatch('')
    const onDeleteStudent = (id) => {
        if(
         window.confirm("Are you sure that you wanted to delete this particular student data ?")   
        ){
          dispatch(deleteStudent({id:id}))
          toast("Deleted sucessfully!")
        }
    }
  return (
    <div style={{marginTop:"150px"}}>
      <Link to="/addstudent">
        <button className='btn-add-student'>ADD STUDENT</button>
      </Link>
      <table className='style-table'>
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>SNO.</th>
                <th style={{textAlign:"center"}}>NAME</th>
                <th style={{textAlign:"center"}}>EMAIL</th>
                <th style={{textAlign:"center"}}>PHONE</th>
                <th style={{textAlign:"center"}}>BRANCH</th>
                <th style={{textAlign:"center"}}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                filteredData.map((student, index)=>{
                    return(
                        <tr id={student.id}>
                            <th className='num-add'>{index+1}</th>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.status}</td>
                            <td><Link to={`/update/${student.id}`}><button className='btn-btn-edit'><EditOutlined /></button></Link>
                            <button className='btn-btn-delete' onClick={() => onDeleteStudent(student.id)}><DeleteOutlined /></button>
                            <Link to={`/view/${student.id}`}><button className='btn-btn-view'><EyeOutlined /></button></Link>
                            </td>                          
                        </tr>                        
                    )
                })
            }
        </tbody>
      </table>
      <br/>
      <br/>
      <select name='status' className='dropdown' onChange={(e) => {
        setFilter(e.target.value)
      }}>
            <option value="">INNOMATICS</option>
            <option value="fsd">fsd</option>
            <option value="ds">ds</option>
      </select>
    </div>
  )
}

export default Home
