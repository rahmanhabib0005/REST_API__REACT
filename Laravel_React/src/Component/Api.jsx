import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/loading.gif"

export const Api =() => {
const [records, setRecords] = useState(['']);
const [loading, setLoading] = useState(true);

useEffect(() => {
          const fetchData = async () => {
               const response = await fetch(`http://localhost:8000/api/default`);
               const newData = await response.json();
               setRecords(newData.clients);
               setLoading(false);
             };
          fetchData()
},[]);

 return(
     <>
     <Link className="btn btn-primary float-end mb-3 fixed-top" to={'store'}>Add a New Client</Link>
          <div className="container ">        
               <div className="row d-flex justify-content-between align-items-center ">
                    {loading?<img className="rounded mt-5 mx-auto d-block" src={Logo} alt="" />:!records?<span className="text-center text-warning fw-bold" >No data Found Here</span>: records.map((list,index) => (
                              <div className="card col-md-4 mb-3" width="18rem" key={index}>
                              <h1  className="text-light text-center p-5 bg-dark">
                                   {list.cname}
                              </h1>
                              <div className="card-body">
                                   <h5 className="card-title">{list.cname}</h5>
                                   <p className="card-text"><b>Address: </b>{list.caddress}</p>
                                   <p className="card-text"><b>Mobile no: </b>{list.cmobile}</p>
                                   <Link to={'/delete/'+list.id+'/client'} id={list.id} className="btn btn-danger ">Delete</Link>
                                   <Link to={'/edit/'+list.id+'/client'} id={list.id} className="btn btn-primary mx-3">Edit</Link>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     </>
 )         
}
