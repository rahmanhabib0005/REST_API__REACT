import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Logo from "../assets/loading.gif"

export const Show = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
const [messages, setMessages] = useState([]);

  const navigate = useNavigate();
     const [value, setValue] = useState({'cname':'','caddress':'','cmobile':''})
     const onsubmit = (e) => {
          e.preventDefault();
          fetch("http://localhost:8000/api/client/"+id+"/edit", {
               method: 'PUT',
               body:JSON.stringify(value),
               headers: {
               'Content-type': 'application/json: charset=UTF-8'
               },
          })
          .then((response) =>{return response.json()})
          .then((data => setMessages(data.message)))
          setValue({'cname':'','caddress':'','cmobile':''})
          setTimeout(() => {
            navigate('/')
          }, 3000);
     }
     

     useEffect(() => {
          fetch("http://localhost:8000/api/client/"+id+"/show")
               .then(response => {
               return response.json()
               })
               .then(data => {
                setValue({...value, cname:data.client.cname, caddress:data.client.caddress, cmobile: data.client.cmobile})
                setLoading(false)
              })
               .catch(err => console.log(err))
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  return (
    <>
   
    {messages != ''?<span className='text-center fw-bold fs-2 mx-auto d-block'>{messages}</span>:<div className="container">
        <div className="row pt-3">
            <div className="col-md-6 m-auto">
            {loading?<img className='rounded mx-auto d-block' src={Logo} />:
              <form onSubmit={onsubmit}>
                <div className="form-floating mb-3">                
                  <input  type="text" className="form-control" id="floatingInput" name='cname'onChange={e => setValue({...value, cname:e.target.value})} value={value.cname}/>
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">                
                  <input type="text" onChange={e => setValue({...value, caddress: e.target.value})} className="form-control" id="address" value={value.caddress} />
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="Number" onChange={e => setValue({...value, cmobile: e.target.value})} value={value.cmobile} />
                  <label htmlFor="Number">Number</label>
                </div>
                <button type="submit" className="btn btn-primary float-start mt-3">Submit</button>
              </form>
              }
            </div>
        </div>
      </div>
      }
    </>
  )
}
