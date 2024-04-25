import "../styles/loginform.css";
import { useEffect, useState } from "react";
import axios from "axios";
function LoginForm() {
  const [lformData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [loginData, setLoginData] = useState([]);
  useEffect(() => {
    const fetchAllCredentials = async () => {
      try {
        const res = await axios.get("http://localhost:8800/credentials");
        setLoginData(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCredentials();
  }, []);

  const validate = (formData, loginData) => {
    if (formData.userName === "admin" && formData.password === "admin") {
      window.localStorage.setItem("adminUser", true);
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("userName", formData.userName);
      return;
    }
    if (!formData.userName) {
      alert("Roll Number is required");
      return;
    }
    var check = 0;
    var temp = 0;
    for (var i = 0; i < loginData.length; i++) {
      if (formData.userName !== loginData[i]["RollNumber"]) {
        check = 0;
      }
      check = 1;
      temp = i;
    }
    if (check === 0) {
      alert("Invalid RollNumber");
      return;
    }
    if (!formData.password) {
      alert("Password is required!");
      return;
    }
    if (formData.password !== loginData[temp]["Password"]) {
      alert("Wrong Password");
      return;
    }
    window.localStorage.setItem("adminUser", false);
    window.localStorage.setItem("isLoggedIn", true);
    window.localStorage.setItem("userName", formData.userName);
  };

  return (
    <div id="login-wrapper">
      <form>
        <h2>Hostel Application System</h2>
        <label>Roll Number</label>
        <input
          type="text"
          placeholder="Roll Number"
          id="username"
          value={lformData.userName}
          onChange={(e) =>
            setFormData({ ...lformData, userName: e.target.value })
          }
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={lformData.password}
          onChange={(e) =>
            setFormData({ ...lformData, password: e.target.value })
          }
        />
        <button
          className="loginPage"
          onClick={() => {
            {
              validate(lformData, loginData);
            }
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
