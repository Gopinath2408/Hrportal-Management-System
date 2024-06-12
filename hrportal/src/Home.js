
import './App.css';
// import Employee from './Employee';
import { Link } from 'react-router-dom';
// import Errormsg from './Errormsg';
// import App from './App';
import Nav from './Nav';
import axios from 'axios';
import profile from './images/profile.jpeg';
import hr_image from './images/hr.jpeg';
import { useEffect } from 'react';
import { useState } from 'react';




function Home() {

  const [project, setproject] = useState([]);
  const [present, setPresent] = useState(null);
  const [total,settotal]=useState(25);
    

  useEffect(() => {
    var total=25;
    
    const fetchData = async () => {

      try {
        const response = await axios.get('http://localhost:3001/project');
        console.log('project data:', response.data);
        setproject(response.data);

      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();

    const attent = async () => {

      try {
        const response = await axios.get('http://localhost:3001/total_present');
        console.log('Attendance data:', response.data);
        const present = response.data;
        setPresent(response.data);

      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    attent();



  }, []);

  const attendance = (e) => {

    console.log(1)
    e.preventDefault();

    axios.post('http://localhost:3001/attendance')
      .then(result => {
        console.log("hello everyone");
        console.log(result);
      })
      .catch(err => {
        console.log(err);

      });
  }

  const attendance_out = (e) => {
    console.log(1)
    e.preventDefault();

    axios.post('http://localhost:3001/attendance_out')
      .then(result => {
        console.log("hello everyone");
        console.log(result);
      })
      .catch(err => {
        console.log(err);

      });

  }



  return (
    <div>
      <div id="nav_header">
        <a href="Employee.js" className="img_header">
          <img src={hr_image} style={{ height: '60px' }} alt="" />
          Hr Portal
        </a>
        <Nav />

      </div>
      <div className="card-container">
        <div id="courses-lis">
          <h3 style={{ float: 'left' }}>Check in for today</h3><br />
          <div className="button-checkin">
            <div>
              <form method='POST'>
                <p className="nav_link"><input type='submit' name='Check in' className='mark-att' value='Check in' id='in'
                  onClick={attendance}
                /> </p>

              </form>
            </div>
            <div>
              <form method='POST'>
                <p to={"/attlogout"} className="nav_link"><input type='submit' name='Check out' className='mark-att-dis' value='Check out' id='out' disabled=''
                  onClick={attendance_out}
                />  </p>

              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <div id="attendance-summary">
            <div className='total-attendance' style={{ marginTop: '28px', marginLeft: '10px' }}>
              <div style={{ float: 'left' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)' }}>
                  <div style={{ backgroundColor: 'Employee.js190793', color: 'Employee.jsA3AED0', padding: '10px', borderRadius: '30px', textAlign: 'center', fontSize: '12px', width: '20px' }}>
                    <i className='bi bi-calendar-fill'></i>
                  </div>
                  <div>
                    <h3 style={{ paddingTop: '12px' }}>Total</h3>
                  </div>
                </div>
                <p>25 Days</p>
              </div>
            </div>
            <div>
              <div className='total-present' style={{ marginTop: '28px' }}>
                <div style={{ float: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)' }}>
                    <div style={{ backgroundColor: 'Employee.jsE6FAF5', color: 'Employee.js05CD99', padding: '10px', borderRadius: '30px', textAlign: 'center', fontSize: '12px', width: '20px' }}>
                      <i className='bi bi-calendar2-check-fill'></i>
                    </div>
                    <div>
                      <h3>Present</h3>
                    </div>

                  </div>
                  <p>{present}  Day</p>
                </div>

              </div>
            </div>
            <div>
              <div className='total-attendance' style={{ marginTop: '28px', marginLeft: '10px' }}>
                <div style={{ float: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)' }}>
                    <div style={{ backgroundColor: 'Employee.jsF2B0AC', color: 'Employee.jsEE5D50', padding: '10px', borderRadius: '30px', textAlign: 'center', fontSize: '12px', width: '20px', height: '20px' }}>
                      <i className='bi bi-calendar-x-fill'></i>
                    </div>
                    <div>
                      <h3 style={{ paddingLeft: '-10px' }}>Absent/Leave</h3>
                    </div>
                  </div>
                  <p>{total-present}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="leave-approval">
          <h3 style={{ display: 'flex', justifyContent: 'center' }}>Leave Approval</h3>
          <div id='leave-client'>
            <label>Ram</label>
            <a href='Employee.js'><input type='submit' className='leave-approvalbutton1' value='Approve' /></a>
            <a href='Employee.js'><input type='submit' className='leave-approvalbutton2' value='Reject' /></a>
          </div>
        </div> */}
        <div className="card">

          <img src={profile} style={{ verticalAlign: 'top', height: '200px' }} alt="" />
          <h2 style={{ textAlign: 'center', padding: '10px' }}>Kumar</h2>
          <p>Hrabccompany@gmail.com</p>
          <a href="Employee.js" className="button">View</a>
        </div>
      </div>
      <div id="main_area">
        <div id="complete-courses">
          <div id="courses-list">
            <h3 style={{ float: 'left' }}>Your Projects</h3>
            <a href="Employee.js" style={{ float: 'right' }}>View more<i className="bi bi-arrow-right-circle-fill"></i></a>
            <table className="courses-list-table">
              <tbody>
                {project.map(proje => {

                  return <tr>
                    <td>
                      <div className='courses-list-logo'>
                        <img src={profile} style={{ marginBottom: '22px' }} alt="Profile" />
                      </div>
                    </td>
                    <td className='courses-list-title'>
                      <h4>{proje.ProjectName}</h4>
                      <p>10Weeks</p>
                    </td>

                    <td className='courses-list-assignments'>
                    </td>

                    <td className='courses-list-completion'>
                      <h6>{proje.Team}</h6>
                    </td>
                  </tr>

                })}
              </tbody>
            </table>
          </div>
          <div id="courses-list">
            <h3 style={{ float: 'left' }}>Team Leads</h3>
            <a href="Employee.js" style={{ float: 'right' }}>View more<i className="bi bi-arrow-right-circle-fill"></i></a>
            <table className="courses-list-table">
              <tbody>
                {project.map(details => {

                  return <tr>
                    <td>
                      <div className='courses-list-logo'>
                        <img src={profile} style={{ marginBottom: '22px' }} alt="Profile" />
                      </div>
                    </td>
                    <td className='courses-list-title'>
                      <h4>{details.TeamLead}</h4>
                      <p>{details.ProjectName}</p>
                    </td>
                    <td className='courses-list-assignments'>
                    </td>
                    <td className='courses-list-completion'>
                      <p>{details.TeamRole}</p>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div id="footer_area">
          <h3> You can't teach employees to smile. They have to smile before you hire them</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
