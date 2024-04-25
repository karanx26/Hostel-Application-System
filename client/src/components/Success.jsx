import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Success = ({ page, setPage, formData, setFormData }) => {
    // const formData = formData;
    const navigate = useNavigate()
    const handleClick = async e=>{
      e.preventDefault()
      try{
        await axios.post("http://localhost:8800/students", formData)
        navigate("/login");
      }
      catch(err){
        console.log(err)
      }
    }
    return (
        <div className="card">
          <h1>Review Your Form</h1>
          <div className="info">
            <p>Roll Number: {formData.rollNumber}</p>
            <p>Email: {formData.email}</p>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <button className="secondButton" onClick={handleClick}>Submit</button>
            <button className="firstButton" onClick={afterClick}>Login</button>
          </div>
        </div>


      );
      function afterClick() {
        window.alert('Form submitted successfully!');
        window.location.href = '/';
      }
      
    };
    
    export default Success