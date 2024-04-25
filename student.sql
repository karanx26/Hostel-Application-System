use hostel;

CREATE TABLE hostel.student (
  id INT NOT NULL AUTO_INCREMENT,
  rollNumber VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  semester VARCHAR(45) NOT NULL,
  cgpa DECIMAL(10,0) NOT NULL,
  hasApplied INT NULL DEFAULT '0',
  isAccepted INT NULL DEFAULT '0',
  isRejected INT NULL,
  PRIMARY KEY (id));

select * from student;




