import { useEffect, useState } from "react";
import axios from 'axios'

const SignupForm = ({ page, setPage, formData, setFormData }) => {  // grabbing the props
  const [rollNumbers, setRollNumbers] = useState([])
    useEffect(()=>{
      const fetchAllEligibles = async () => {
        try{
          const res = await axios.get("http://localhost:8800/eligibles")
          setRollNumbers(res.data)
          console.log(res)
        }
        catch(err){
          console.log(err)
        }
      };
      fetchAllEligibles();
    },[])
  const validate = (formData, page, setPage, rollNumbers) => {
    if (!formData.rollNumber) {
      alert("Roll Number is required")
      return
    }
    if (!formData.email) {
      alert("Email is required!")
      return
    } 
    if(!formData.password){
      alert("Password is Required")
      return
    }
    else{
      setPage(page + 1);
    }
  };
  return (
      <div className="card">
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="Roll Number"
          value={formData.rollNumber} //setting the value of the form to the props value
          onChange={(e) =>
            setFormData({ ...formData, rollNumber: e.target.value })  //setting the formData to the value input of the textfield 
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value }) 
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <div className="firstButton">
        <button
          onClick={() => {
            {validate(formData,page,setPage, rollNumbers)};
          }}>
          Next
        </button>
        </div>
      </div>
    );
  };
  
  export default SignupForm;