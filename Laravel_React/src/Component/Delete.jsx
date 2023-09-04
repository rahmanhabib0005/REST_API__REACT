import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
     const [message, setMessage] = useState([])

     const navigate = useNavigate();
     const {id} = useParams();
     const handleClick = () => {
          const deletes = async () => {
               const response = await fetch(`http://localhost:8000/api/delete/${id}`,{
                    method: 'Delete',
                    headers: {
                         'Content-type': 'application/json: charset=UTF-8'
                         },
               });
               const newData = await response.json();
               setMessage(newData.message)
               setTimeout(() => {
                    navigate('/');
               }, 1500);
             };
             deletes()
     }
  return (
     <>
    {message != ''?<span className='text-center fw-bold fs-2 mx-auto d-block'>{message}</span>:<div className="container">
     <span className="text-danger"><b><u>Do You Want to Delete it? </u></b></span>
     <button className="btn btn-danger fs-5 text-light fw-bold text-center m-0" onClick={handleClick}>Yes</button> 
     <Link to={'/'} className="btn btn-primary fs-5 text-dark fw-bold text-center mx-2">No</Link> 
     </div>}
     </>
  )
}
