import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express()
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "********",
    port: 3306,
    database: "hostel"
})

db.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      return;
    }
    // console.log('Connected to MySQL server');
});
  
    // Query to create the database if it doesn't exist
    db.query("CREATE DATABASE IF NOT EXISTS hostel", function(err, result) {
      if (err) {
        console.error('Error creating database:', err.message);
        return;
      }
    //   console.log('Database created or already exists');
    });

app.use(express.json())
app.use(cors())

app.get("/applicants", (req, res)=>{
    const q = "Select * from student where hasApplied =True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        const jsonData = JSON.stringify(data);
        console.log(jsonData);   
        return res.json(data);  
    })
});

app.get("/profile", (req, res)=>{
    const q = "Select * from student"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})
app.get("/applicants2", (req, res)=>{
    const q = "Select RollNumber, FirstName, LastName, Department, Semester from student where hasApplied = True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})

app.get("/check", (req, res)=>{
    const q = "Select RollNumber from student where hasApplied = True"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/apply", (req, res)=>{
    const q = "Select RollNumber from student"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/checkStatus", (req, res)=>{
    const q = "Select isAccepted, isRejected from student where RollNumber = ?"
    const values=[
        req.body.rollNumber
    ]
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/checkApprove", (req, res)=>{
    const q = "Select RollNumber, isAccepted, isRejected, Email from student where hasApplied = True"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/credentials", (req, res)=>{
    const q = "Select RollNumber, Password from student"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})

app.get("/eligibles", (req, res)=>{
    const q = "Select RollNumber from Student Fee where isEligible = True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})

app.post("/students", (req,res)=>{
    const q = "Insert into Student (RollNumber, Email, Password, FirstName, LastName, Address, City, Department, Semester, CGPA) values (?)";
    const values = [
        req.body.rollNumber,
        req.body.email,
        req.body.password,
        req.body.firstName,
        req.body.lastName,
        req.body.address,
        req.body.city,
        req.body.department,
        req.body.semester,
        req.body.cgpa
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Data Entered Successfully");
    })
})
app.put("/students:rollNumber", (req,res)=>{
    const rollNumber = req.params.id
    const q = "Update Student Set 'FirstName' = ?, 'LastName' = ?, 'Address' = ?, 'City' = ?, 'Department' = ?, 'Semester' = ?, 'CGPA' = ? WHERE RollNumber = ?";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.address,
        req.body.city,
        req.body.department,
        req.body.semester,
        req.body.cgpa
    ];
    db.query(q, [...values, rollNumber], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Student Updated Successfully");
    })
})
app.post("/apply", (req,res)=>{
    const q = "Update Student Set hasApplied = True Where RollNumber = (?)";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Data Updated Successfully");
    })
})

app.post("/approve", (req,res)=>{
    const q = "Update Student Set isAccepted = True, isRejected = False Where RollNumber = ?";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Application has been approved successfully");
    })
})

app.post("/reject", (req,res)=>{
    const q = "Update Student Set isAccepted = False, isRejected = True Where RollNumber = ?";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Application has been rejected successfully");
    })
})



app.listen(8800, ()=>{
    console.log("Connected to backend")
})