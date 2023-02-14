import React from 'react'
import { useState, useEffect } from 'react';
import { addUser, getDepartment } from '../../service/api';
import { useNavigate } from "react-router-dom";
import { TabTitle } from '../../Utilities/Title';
const userCapturedVal = {
    name: "",
    email: "",
    title: "",
    mobile: "",
    photo: "",
    companyName: "",
    department: ""
}

export default function CreateUser() {
TabTitle('Create New User');
 //set captured value from client 
 const [user, setUser] = useState(userCapturedVal);
  const {name, email, title, mobile, photo, companyName, department} = user;
  
  const onValueChange =(e)=>{
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user)
  }
  // add user
let navigate = useNavigate();

const addUserDetails =async()=>{
    await addUser(user);
    navigate('/all');
}
  //render deparment 
  const [dept, setDept] = useState([]);
    useEffect(() =>{
        getAllDept();
    }, []);
    
    const getAllDept = async () =>{
        const response = await getDepartment();
        console.log(response);
        setDept(response.data);
    } 
    
  return (
    <div className="container mt-3">
        <h1>Add Contact</h1>
        <div className="row">
            <div className="col-md-5">
                <form>
                    <div className="mb-2">
                        <input type="text" placeholder="Enter Name" 
                            onChange={(e)=> onValueChange(e)} name="name" value={name}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Photo Url"
                            onChange={(e)=> onValueChange(e)} name="photo" value={photo}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="email" placeholder="Enter Email"
                            onChange={(e)=> onValueChange(e)} name="email" value={email}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Mobile"
                            onChange={(e)=> onValueChange(e)} name="mobile" value={mobile}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Enter Company Name"
                            onChange={(e)=> onValueChange(e)} name="companyName" value={companyName}
                        /> 
                    </div>
                    <div className="mb-2">
                        <input type="text" plac eholder="Enter Job Title"
                            onChange={(e)=> onValueChange(e)} name="title" value={title}
                        />
                    </div>
                    <div className="mb-2">
                        <select  onChange={(e)=> onValueChange(e)} name="department" value={department}>
                            <option disabled>Select Group</option>
                            {
                                dept.map((data) =>(
                                    <option>
                                        {data.departmentName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-2">
                        <input type="sumbit" className="btn btn-primary" onClick={()=> addUserDetails()} value="Create"/> 
                    </div>
                </form>
            </div>
            <div className="col-md-4">
                <img style={{with: 200, height:200}} src={photo} alt="logo"/>
            </div> 
        </div>
    </div>
  )
}
