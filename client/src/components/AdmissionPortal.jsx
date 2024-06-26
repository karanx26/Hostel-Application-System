import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admissionportal.css";
function AdmissionPortal() {
  const [applications, setLoginData] = useState([]);
  useEffect(() => {
    const fetchAllCredentials = async () => {
      try {
        const res = await axios.get("http://localhost:8800/applicants");
        setLoginData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCredentials();
  }, []);

  useEffect(()=>{
    console.log(applications);
  },[applications])
  return (
    <div id="admissionP-container">
      <div id="admissionP">
        <h1>Applications</h1>
        <table>
          <tbody>
            <tr>
              <th>Roll Number</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>City</th>
              <th>Address</th>
              <th>CGPA</th>
            </tr>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>{application.rollNumber}</td>
                <td>{application.email}</td>
                <td>{application.firstName}</td>
                <td>{application.lastName}</td>
                <td>{application.department}</td>
                <td>{application.semester}</td>
                <td>{application.city}</td>
                <td>{application.address}</td>
                <td>{application.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdmissionPortal;
