import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../semantics/NavBar';
import { getAllUser } from '../../service/api';
import { TabTitle } from '../../Utilities/Title';
export default function AllUser() {
TabTitle('Show All User');       
const [user, setUser] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);
    
    const getUsers = async () =>{
        const response = await getAllUser();
        console.log(response);
        setUser(response.data);
    } 
  return (
    <div className='container'>
        <NavBar></NavBar>
        <h1>All Records</h1>
        <div className="container">
        <Link className='btn btn-primary mb-3' to={"/add"}><i className="fa fa-plus-circle"></i> Add User</Link> 
        <form>
        <div className="row mb-5"> 
            <div className="col-md-6">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Search Name"/>
                    </div>
                    <div className="col">
                        <input type="submit" className="btn btn-outline-primary"/>
                    </div>
                </div>
            </div>
            </div>
        </form>
    </div>
        <div className="container">
        <div className="row">
            {
                user.map((data) =>(
                <div className="col-md-6">
                    <div className="card my-2 list-group-item-success shadow-lg">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-sm-4">
                                    <img style={{ width: 100, height:100}} src={data.photo} alt="logo"/>
                                </div>
                            <div className="col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item">Name: <span className="fw-bold">{data.name}</span></li>
                                    <li className="list-group-item">Email: <span className="fw-bold">{data.email}</span></li>
                                    <li className="list-group-item">Mobile: <span className="fw-bold">{data.mobile}</span></li>   
                                </ul>
                            </div>
                            <div className="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <Link className="btn btn-warning my-1" to={`/view/${data.id}`}>
                                    <i className="fa fa-eye"></i>
                                </Link>
                                 <Link className="btn btn-primary my-1" to={'/edit/:id'}>
                                    <i className="fa fa-pen"></i>
                                </Link>
                                 <button className="btn btn-danger my-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>    
            ))    
            }
        </div>
    </div>
    </div>
  )
}
