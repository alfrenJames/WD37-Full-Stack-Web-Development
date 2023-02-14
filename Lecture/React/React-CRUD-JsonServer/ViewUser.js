import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getAllUser } from '../../service/api';
const userIniatialVal = {
    name: "",
    email: "",
    title: "",
    mobile: "",
    photo: "",
    companyName: "",
    department: ""
}
export default function ViewUser() {
    const [user, setUser] = useState(userIniatialVal);
    const {name, email, title, mobile, photo, companyName, department} = user;
    const {id} = useParams();
    const loadUserData = async()=>{
        const response = await getAllUser(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserData();
    }, []);
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card my-2 list-group-item-success shadow-lg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-sm-4">
                                <img style={{ width: 100, height:100}} src={'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'} alt="logo"/>
                            </div>
                            <div className="col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item">Name: <span className="fw-bold">{name}</span></li>
                                    <li className="list-group-item">Email: <span className="fw-bold">{email}</span></li>
                                    <li className="list-group-item">Mobile: <span className="fw-bold">{mobile}</span></li>   
                                </ul>
                            </div>
                            <div className="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-warning my-1">
                                    <i className="fa fa-eye"></i>
                                </button>
                                 <button className="btn btn-primary my-1">
                                    <i className="fa fa-pen"></i>
                                </button>
                                 <button className="btn btn-danger my-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
  )
}
