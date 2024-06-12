const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const leavemodel=require('./Models/User');
const projectmodel=require('./Models/Project');
const empmodel=require('./Models/Newemp');
const Att=require('./Models/checkin');
const { log } = require('console');


const app=express();
app.use(express.json());
app.use(cors())

require('./db/connection');

// app.post('/leave',(req,res) =>{
     
   
//     leavemodel.create(req.body)
//     .then(leave =>res.json(leave))
//     .catch(err =>res.json(err))
    
// })
app.post('/leave', (req, res) => {
    
    leavemodel.create({LeaveType:req.body.type,Fromdate:req.body.fromdate,Todate:req.body.todate, Description:req.body.description})
    
        .then(leave => {
            if (leave) {
                console.log("Leave data created successfully:");
                console.log("Leave Type:", leave.LeaveType);
                console.log("Start Date:", leave.Fromdate);
                console.log("End Date:", leave.Todate);
                console.log("Description:", leave.Description);
                res.json({ success: true, message: "Leave data created successfully.", data: leave });
            } else {
                console.log("Leave data not created.");
                res.status(400).json({ success: false, message: "Leave data not created." });
            }
        })
        .catch(err => {
            console.error("Error occurred while creating leave data:", err);
            res.status(500).json({ success: false, message: "Error occurred while creating leave data.", error: err });
        });
});

app.post('/project', (req, res) => {
    
    projectmodel.create({ProjectName:req.body.project,TeamLead:req.body.lead,ProjectDeadline:req.body.deadline, TeamRole:req.body.role,Team:req.body.team})
    
        .then(project => {
            if (project) {
                console.log("Project data created successfully:");
                console.log("Project Name:", project.ProjectName);
                console.log("Team Lead:", project.TeamLead);
                console.log("Project Deadline:", project.ProjectDeadline);
                console.log("Team",project.Team)
                console.log("Team Role:", project.TeamRole);
                res.json({ success: true, message: "Project data created successfully.", data: project });
            } else {
                console.log("Leave data not created.");
                res.status(400).json({ success: false, message: "Project data not created." });
            }
        })
        .catch(err => {
            console.error("Error occurred while creating Project data:", err);
            res.status(500).json({ success: false, message: "Error occurred while creating project data.", error: err });
        });
});



app.post('/newemp', (req, res) => {
    
    empmodel.create({Name:req.body.name,Email:req.body.email,Position:req.body.position, Salary:req.body.salary})
    
        .then(newemp => {
            if (newemp) {
                console.log("Project data created successfully:");
                console.log("Project Name:", newemp.Name);
                console.log("Team Lead:", newemp.Email);
                console.log("Project Deadline:", newemp.Position);
                console.log("Team Role:", newemp.Salary);
                res.json({ success: true, message: "New Employee data created successfully.", data: newemp });
            } else {
                console.log("Employee data not created.");
                res.status(400).json({ success: false, message: "Employee data not created." });
            }
        })
        .catch(err => {
            console.error("Error occurred while creating Empoyee data:", err);
            res.status(500).json({ success: false, message: "Error occurred while creating Employee data.", error: err });
        });
});

// app.post('/attendance', (req, res) => {
    
//     Att.create({})
    
//         .then(attendance => {
//             if (attendance) {
//                 console.log('Check in Successfull');
//             } else {
//                 console.log("check data not created.");
//                 res.status(400).json({ success: false, message: "check data not created." });
//             }
//         })
//         .catch(err => {
//             console.error("Error occurred while creating checkin data:", err);
//             res.status(500).json({ success: false, message: "Error occurred while creating checkin data.", error: err });
//         });
// });

app.post('/attendance', (req, res) => {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];

    Att.findOne({ check_in: { $gte: new Date(currentDateString), $lt: new Date(currentDateString + 'T23:59:59.999Z') } })
        .then(attendanceRecord => {
            if (attendanceRecord) {
                // If attendance record already exists for today
                res.status(400).json({ message: "Already checked in" });
            } else {
                // If attendance record doesn't exist for today, create a new one
                Att.create({})
                    .then(() => {
                        res.status(200).json({ message: "Checked in successfully" });
                    })
                    .catch(err => {
                        // Handle error while creating attendance record
                        console.error("Error creating attendance record:", err);
                        res.status(500).json({ message: "Internal server error" });
                    });
            }
        })
        .catch(err => {
            // Handle error while querying attendance record
            console.error("Error querying attendance record:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});


app.post('/attendance_out', (req, res) => {
    const currentDate = new Date(); // Get the current date and time

    // Extract the date part from the current date
    const currentDateString = currentDate.toISOString().split('T')[0];

    Att.findOne({ check_in: { $gte: new Date(currentDateString), $lt: new Date(currentDateString + 'T23:59:59.999Z') } })
        .then(attendanceRecord => {
            if (attendanceRecord) {
                return attendanceRecord.updateCheckOut(); // Assuming updateCheckOut is a method of your schema
            } else {
                console.log("Attendance record not found.");
            }
        })
        .then(updatedAttendance => {
            console.log('Check out successfully updated:', updatedAttendance);
            // Send response or handle as needed
        })
        .catch(err => {
            console.error("Error occurred while updating check out time:", err);
            // Handle error response
        });
});



app.get('/employe', async (req, res) => {
      
    try{
              const emp=await empmodel.find();
              res.json(emp);
    }
    catch(error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  });


  app.get('/project', async (req, res) => {
    try {
        const projects = await  projectmodel.find();
        res.json(projects);
    } catch(error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




app.get('/total_present', (req, res) => {
    // Find the total number of documents where check_in is not null
    Att.countDocuments({ check_in: { $ne: null } })
        .then(totalPresent => {
            console.log('Total present:', totalPresent);
            res.json(totalPresent);
        })
        .catch(err => {
            console.error("Error occurred while counting present records:", err);
            res.status(500).send("Error occurred while counting present records");
        });
});


app.delete('/employe/:name', async (req, res) => {
    try {
      const deletedEmployee = await empmodel.findOneAndDelete({ Name: req.params.name });
      if (!deletedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.status(200).json({ message: 'Employee deleted successfully', deletedEmployee });
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  



app.listen(3001,()=>
{
    console.log("Server is running");

});