import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav';

const Leave_Application = () => {
    const [type, setType] = useState("");
    const [fromdate, setFromdate] = useState("");
    const [todate, setTodate] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        console.log(1)
        e.preventDefault();
        axios.post('http://localhost:3001/leave', { type, fromdate, todate, description })
            .then(result => {
                console.log(result);
              
                 
            })
            .catch(err => {
                console.log(err);
                setError("Failed to submit leave application.");
            });
    }

    return (
        <div>
            <Nav />
            <center>
                <div className="leave-form">
                    <h2>Leave Application Form</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form id="leaveApplicationForm" method="POST" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div style={{ width: "100%" }}>
                                <label htmlFor="leave">Leave Type:</label>
                                <input
                                    type="text"
                                    id="leave"
                                    name="leave"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div style={{ width: "48%" }}>
                                <label htmlFor="leaveFrom">Leave From:</label>
                                <input
                                    type="date"
                                    id="leaveFrom"
                                    name="leaveFrom"
                                    value={fromdate}
                                    onChange={(e) => setFromdate(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={{ width: "48%" }}>
                                <label htmlFor="leaveTo">Leave To:</label>
                                <input
                                    type="date"
                                    id="leaveTo"
                                    name="leaveTo"
                                    value={todate}
                                    onChange={(e) => setTodate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                        <div style={{ textAlign: "center" }}>
                            <input type="submit" name="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Leave_Application;




// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';


// const Leave_Application = () => {
//    const [type,Settype]=useState();
//    const [fromdate,SetFromdate]=useState();
//    const [todate,Settodate]=useState();
//    const [description,Setdescription]=useState();
    
//    const handdlesubmit=(e)=>
//    {
//     //  console.log(type);
//     // console.log(fromdate);
//     // console.log(todate);
//     // console.log(description);
//     e.preventDefault();
//     axios.post('http://localhost:5000/Leave_data',{type,fromdate,todate,description})
//     .then(result=>console.log(result))
//     .catch(err => console.log(err))
//    }
//     return (
//         <div>
//             <center>
//                 <div class="leave-form">
//                     <h2>Leave Application Form</h2>
//                     <form id="leaveApplicationForm" method="POST" onSubmit={handdlesubmit}>
//                         <div class="input-group">

//                             <div style={{ width: "100%" }}>
//                                 <label for="leaveType">Leave Type:</label>
//                                 <input 
//                                 type="text" 
//                                 id="leave" 
//                                 name="leave" 
//                                 onChange={(e)=>Settype(e.target.value)}
//                                 required 

//                                 />
//                             </div>
//                         </div>

//                         <div class="input-group">
//                             <div style={{ width: "48%" }}>
//                                 <label for="leaveFrom">Leave From:</label>
//                                 <input 
//                                 type="date" 
//                                 id="leaveFrom" 
//                                 name="leaveFrom" 
//                                 onChange={(e)=>SetFromdate(e.target.value)}
//                                 required />
//                             </div>
//                             <div style={{ width: "48%" }}>
//                                 <label for="leaveTo">Leave To:</label>
//                                 <input 
//                                 type="date" 
//                                 id="leaveTo" 
//                                 name="leaveTo"
//                                 onChange={(e)=>Settodate(e.target.value)} 
//                                 required />
//                             </div>

//                         </div>

//                         <label for="description">Description:</label>
//                         <textarea id="description" name="description" 
//                         rows="4"
//                         onChange={(e)=>Setdescription(e.target.value)} 
//                         required></textarea>

//                         <div style={{textAlign:"center"}}>
//                             <input type="submit" name="submit" value="Submit" />

//                         </div>
//                     </form>
//                 </div>
//             </center>
//         </div>
//     );
// }

// export default Leave_Application
