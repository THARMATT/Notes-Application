import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";// can cross check
const Login = (props) => {
    let navigate = useNavigate();
    const [credentials,setCredentials]=useState({email:"",password:""})
  
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // fetch("http://localhost:5000/api/auth/login")
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            
          },

          body: JSON.stringify({email:credentials.email,password:credentials.password}),});
const json=await response.json()
console.log(json)
if(json.success){
    // redirect and sasve authtoken
    localStorage.setItem('token',json.authtoken)
    navigate.push("/")
     
}
else{
    alert("keep chnage")
}
    }
    const onChange = (e) => {
        setCredentials({ ...credentials , [e.target.name]: e.target.value });
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="enter your Email">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" value={credentials.password} name="password" id="password" placeholder="Password" onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
