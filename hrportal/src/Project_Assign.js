import React from 'react'
import axios from 'axios';
import { useState } from 'react';


const Project_Assign = () => {
   const [project,setproject]=useState("");
   const [lead,setlead]=useState("");
   const [deadline,setdeadline]=useState("");
   const [role,setrole]=useState("");
   const [team,setteam]=useState(" ");


    const handleSubmit=(e) =>{
        
        e.preventDefault();
        axios.post('http://localhost:3001/project', { project, lead, deadline, role,team })
            .then(result => {
                console.log(result);
              
                 
            })
            .catch(err => {
                console.log(err);
                //setError("Failed to submit leave application.");
            });
    }
    return (
        <div>
       
            <div style={{ display: "flex", flexDirection: "column" }}>


                <div id="assignment-form">
                    <h2 style={{textAlign:"center"}}>Project Assignment</h2>

                    <form id="projectAssign" method="post" onSubmit={handleSubmit} >
                        <label for="projectName">Project Name:</label>
                        <input type="text" id="projectName" name="projectName" placeholder="Enter project name"
                        
                        onChange={(e) => setproject(e.target.value)}
                        
                        />

                        <label for="teamLead">Team Lead:</label>
                        <input type="text" id="teamLead" name="teamLead" placeholder="Enter team lead's name" 
                        
                        onChange={(e) => setlead(e.target.value)}
                        />

                        {/* <label for="teamMembers">Team Members:</label>

                        <div id="checkbox-container">
                            <input type="checkbox" id="teamMember1" name="teamMembers[]" value="Arun" /> Arun<br></br>
                                <input type="checkbox" id="teamMember2" name="teamMembers[]" value="Ram" /> Ram<br></br>
                                    <input type="checkbox" id="teamMember3" name="teamMembers[]" value="Vinoth" /> Vinoth<br></br>
                                        <input type="checkbox" id="teamMember4" name="teamMembers[]" value="Kumhar" /> Kumar<br></br>
                                        </div> */}


                                            <label for="deadline">Project Deadline:</label>
                                            <input type="date" id="deadline" name="deadline" 
                                            
                                            onChange={(e) => setdeadline(e.target.value)}
                                            />

                                            <label for="team">Select Team:</label>
                                            <select id="team" name="team"   onChange={(e) => setteam(e.target.value)}>
                                                <option value="Tech Titans">Tech Titans</option>
                                                <option value="Brainiacs">Brainiacs</option>
                                                <option value="Desk champions">Desk champions</option>
                                                <option value="Toon Squad">Toon Squad</option>
                                                <option value="The Deciders">The Deciders</option>
                                                <option value="Agile Avengers">Agile Avengers</option>

                                            </select>

                                            <label for="roles">Team Roles:</label>
                                            <textarea id="roles" name="roles" placeholder="Enter team roles"
                                            
                                            onChange={(e) => setrole(e.target.value)}
                                            
                                            ></textarea>

                                            {/* <label for="updates">Reporting Updates:</label>
                                            <textarea id="updates" name="updates" placeholder="Enter reporting updates"></textarea> */}

                                            <input type="submit" id="submit" name="submit" style={{float:"right"}} value="Assign Project" />
                                        </form>

                                    </div>

                                    </div>
                                </div>
                                );
}

                                export default Project_Assign
