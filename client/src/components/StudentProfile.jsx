import "../styles/studentprofile.css"
import { useEffect, useState } from "react";
import axios from 'axios'

function StudentProfile() {
    const [loginData, setLoginData] = useState([])

    var studentData = {
        FirstName: "",
        LastName: "",
        Email: "",
        RollNumber: "",
        Department: "",
        Address: "",
        City: "",
        Semester: "",
        CGPA: ""
    }
    // const userName = window.localStorage.getItem("userName")
    useEffect(()=>{
        const fetchAllRecord = async () => {
          try{
            const res = await axios.get("http://localhost:8800/profile")
            setLoginData(res.data)
            console.log(loginData)
            console.log(res.data)
          }
          catch(err){
            console.log(err)
          }
        };
        fetchAllRecord();
      },[])
      for (var i=0; i<loginData.length; i++){
        if (loginData[i]["rollNumber"] === window.localStorage.getItem("userName")) {
            studentData = loginData[i]
        }
      }
      const [] = useState(
        {
            rollNumber: studentData["rollNumber"],
            email: studentData["email"],
            password: studentData["password"],
            firstName: studentData["firstName"],
            lastName: studentData["lastName"],
            address: studentData["address"],
            city: studentData["city"],
            department: studentData["department"],
            semester: studentData["semester"],
            cgpa: studentData["cgpa"],
        });
    const handleClick = async e=>{
        e.preventDefault()
        try{
          axios.put("http://localhost:8800/students"+studentData["rollNumber"], studentData)
        }
        catch(err){
          console.log(err)
        }
      }
    return (
        <div id="studentP-container">
            <div id="studentP">
                <h1>Profile</h1>
                <div className="form">
                    <label>First Name: </label><input type="text" placeholder={"First Name"} value={studentData["firstName"]} onChange={(e) =>studentData["firstName"] = e.target.value}/>
                    <label>Last Name: </label><input type="text" placeholder={"Last Name"} value={studentData["lastName"]} onChange={(e) =>studentData["lastName"] = e.target.value}/>
                    <label>Roll Number: </label><input type="text" placeholder={"Roll Number"} value={studentData["rollNumber"]} disabled="disabled"/>
                    <label>Email: </label><input type="text" placeholder={"Email"} value={studentData["email"]} disabled="disabled"/>
                    <label>Address: </label><input type="text" placeholder={"Address"} value={studentData["address"]} onChange={(e) =>studentData["address"] = e.target.value}/>
                    <label>City: </label><input type="text" placeholder={"City"} value={studentData["city"]} onChange={(e) =>studentData["city"] = e.target.value}/>
                    <label>Department: </label><input type="text" placeholder={"Department"} value={studentData["department"]} disabled="disabled"/>
                    <label>Semester: </label><input type="text" placeholder={"Semester"} value={studentData["semester"]} onChange={(e) =>studentData["semester"] = e.target.value}/>
                    <label>CGPA: </label><input type="text" placeholder={"CGPA"} value={studentData["cgpa"]} onChange={(e) =>studentData["cgpa"] = e.target.value}/>
                    {/* <div className="btnHolder">
                        <button onClick={handleClick}>Update Profile!</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default StudentProfile;
