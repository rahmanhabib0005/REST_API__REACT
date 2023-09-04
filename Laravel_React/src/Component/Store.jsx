import { useState } from "react"
import { Link } from "react-router-dom";

export const Store = () => {
  const [value, setValue] = useState({cname:'',caddress:'',cmobile:''});
  const [messages, setMessages] = useState([]);
  

  const onsubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/store", {
      method: 'POST',
      body:JSON.stringify(value),
      headers: {
        'Content-type': 'application/json: charset=UTF-8'
      },
    })
    .then((response) => response.json(),setValue({cname:'',caddress:'',cmobile:''}))
    .then((data => setMessages(data.message)))
    .then((json) => console.log(json));
  }

  setTimeout(() => {
    if(messages != ''){
      setMessages('');
    }
  }, 1500);




  return (
    <>
    {messages != ''?<span className='text-center fw-bold fs-2 mx-auto d-block'>{messages}</span>:
      <div className="container">
        <div className="row pt-3">
            <div className="col-md-6 m-auto">
              <form onSubmit={onsubmit}>
                <div className="form-floating mb-3">                
                  <input onChange={e => setValue({...value,cname:e.target.value})} type="text" className="form-control" value={value.cname} id="floatingInput" placeholder="Enter Your Name"/>
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">                
                  <input onChange={e => setValue({...value,caddress:e.target.value})} type="text" className="form-control" value={value.caddress} id="address" placeholder="Enter Your Address"/>
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating">
                  <input onChange={e => setValue({...value,cmobile:e.target.value})} type="text" className="form-control" value={value.cmobile} id="Number" placeholder="Enter Your Number"/>
                  <label htmlFor="Number">Number</label>
                </div>
                <button type="submit" className="btn btn-primary float-start mt-3">Submit</button>
              </form>
              <Link className="btn btn-dark float-start mt-3 mx-2" to={'/'}>Back</Link>
            </div>
        </div>
      </div>}
    </>
  )
}
