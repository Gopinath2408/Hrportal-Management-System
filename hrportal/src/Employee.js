import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employe');
        console.log('Employee data:', response.data);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteEmployee = async (name) => {
    try {
      await axios.delete(`http://localhost:3001/employe/${name}`);
      setEmployees(employees.filter(emp => emp.Name !== name));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  const filteredEmployees = employees.filter(emp => {
    return emp.Name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        id="myInput"
        placeholder="Search for names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='new_emp' style={{ color: 'white' }}>
        <Link to={"/newemp"}>New Employee</Link>
      </button>
      <center>
        <table id='de'>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emplo => (
              <tr key={emplo.Name}>
                <td>{emplo.Name}</td>
                <td>{emplo.Email}</td>
                <td>{emplo.Position}</td>
                <td>{emplo.Salary}</td>
                <td>
                  <input
                    type='button'
                    value={'Delete'}
                    style={{ backgroundColor: '#ff6666', color: 'white' }}
                    onClick={() => deleteEmployee(emplo.Name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Employee;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Employee = () => {
//   const [employees, setEmployees] = useState([]);
//   const [search,setsearch]=useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/employe');
//         console.log('Employee data:', response.data);
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteEmployee = async (name) => {
//     try {
//       await axios.delete(`http://localhost:3001/employe/${name}`);
//       setEmployees(employees.filter(emp => emp.Name !== name));
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" id="myInput" placeholder="Search for names......"
//       onChange={(e) =>{setsearch(e.target.value)}}
      
//       />
//       <button className='new_emp' style={{ color: 'white' }}>
//         <Link to={"/newemp"}>New Employee</Link>
//       </button>
//       <center>
//         <table id='de'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>E-mail</th>
//               <th>Position</th>
//               <th>Salary</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map(emplo => (
//               <tr key={emplo.Name}>
//                 <td>{emplo.Name}</td>
//                 <td>{emplo.Email}</td>
//                 <td>{emplo.Position}</td>
//                 <td>{emplo.Salary}</td>
//                 <td>
//                   <input type='button' value={'Delete'} style={{ backgroundColor: '#ff6666', color: 'white' }} onClick={() => deleteEmployee(emplo.Name)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </center>
//     </div>
//   );
// }

// export default Employee;
