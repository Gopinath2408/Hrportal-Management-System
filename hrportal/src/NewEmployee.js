import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const NewEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/newemp', { name, email, position, salary })
    .then(result => {
        console.log(result);
          
    })
    .catch(err => {
        console.log(err);
    });
   // console.log('Submitted:', { name, email, position, salary });
  };

  return (
    <div>
      <Nav />
      <h2 style={{textAlign:'center'}}>Employee Information</h2>
      <form onSubmit={handleSubmit} style={{width:"50%",marginLeft:'400px'}}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{marginLeft:"350px",padding:"20px",marginTop:"10px"}}>Submit</button>
      </form>
    </div>
  );
};

export default NewEmployee;
