import React, { useState } from 'react';
const Login = () => {

    const [name,Setname]=useState("");
    const [password,Setpassword]=useState("");

    const check =(e)=>
    {
        console.log(Setname);
        console.log(Setname);
    }


  return (
    <div>
      <h1 style={{textAlign:'center'}}>Login Page</h1>
     <form onSubmit={check}>
     <label>UserName :</label>
     <input 
       type='text'
       onChange={Setname((e)=>e.target.value)}

     /><br></br>
     <label>Password :</label>
     <input 
     type='password'
     onChange={Setpassword((e)=>e.target.value)}
     
     />

     </form>
    </div>
  )
}

export default Login
