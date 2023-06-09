const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
// Enable CORS for all routes
app.use(cors());
const port = 5000;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_1hlwyx",
  password: "yAiHzNqx2t11hCx4",
  database: "lab_blank01_1h3msnv",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database:", error);
    return;
  }
  console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  return res.json({
    message: "Connection - Success",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//user login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("SELECT * FROM users WHERE username = ?", [username]);

  connection.query(sql, [username, password], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
      });
    }
    numRows = rows.length;
    console.log(rows);
    if (numRows != 0) {
      bcrypt.compare(password, rows[0].hashed).then(function (result) {
        if (result) {
          return res.json({
            success: true,
            message: "Authentication Success",
          });
        } else {
          return res.json({
            success: false,
            message: "Authentication Failed - Wrong password",
          });
        }
      });
    } else {
      return res.json({
        success: false,
        message: "Authentication Failed - No such user in the database",
      });
    }
  });
});

//user register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  saltRounds = 10;
  hash = bcrypt.hashSync(password, saltRounds);
  var sql = `INSERT INTO users (username, password, hashed)
        VALUES (?, ?, ?)`;
  connection.query(sql, [username, password, hash], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
        message: "An error occurred while registering the user.",
      });
    }
    return res.json({
      success: true,
      message: "User registered successfully.",
    });
  });
});

//post student data
app.post("/student/addData", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const studentid = req.body.studentid;
  const gpax = req.body.gpax;
  const course = req.body.course;
  const courseid = course.substring(0, 6);
  var sql = `INSERT INTO students (firstname, lastname, studentid, gpax, course, courseid) VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(
    sql,
    [firstname, lastname, studentid, gpax, course, courseid],
    (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        message: "Student has successfully registered",
      });
    }
  );
});

//get student data
app.get("/student/getData", async (req, res) => {
  const promisePool = connection.promise();
  // query database using promises
  const [rows, fields] = await promisePool.query(
    "SELECT DISTINCT studentid, firstname, gpax FROM students"
  );
  if (rows.length > 0) {
    console.log(rows[0].studentid);
  }
  return res.json({
    success: true,
    data: rows,
  });
});

//post course data
app.post("/course/addData", (req, res) => {
  const courseid = req.body.courseid;
  const coursetitle = req.body.coursetitle;
  const coursedes = req.body.coursedes;
  const max = req.body.max;
  const lecturer = req.body.lecturer;
  var sql = `INSERT INTO courses (courseid, coursetitle, coursedes, max, lecturer) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    sql,
    [courseid, coursetitle, coursedes, max, lecturer],
    (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        message: "Course has successfully registered",
      });
    }
  );
});

//get course data
app.get("/course/getData", async (req, res) => {
  const promisePool = connection.promise();
  // const courseId = "CSC400";
  const queryStringCourse = "SELECT * FROM courses";
  // query database using promises and passing the variable as an array
  const [rows, fields] = await promisePool.query(queryStringCourse);
  // const [rows,fields] = await promisePool.query(queryStringCourse, [courseId]);
  if (rows.length > 0) {
    console.log(rows[0].studentid);
  }
  return res.json({
    success: true,
    data: rows,
  });
});

//get specific course data
app.post("/course/getData/specific", async (req, res) => {
  const promisePool = connection.promise();
  const courseid = req.body.courseid;
  const queryStringCourse = "SELECT * FROM courses WHERE courseid = ?";
  // query database using promises and passing the variable as an array
  const [studentrows, coursefields] = await promisePool.query(
    queryStringCourse,
    [courseid]
  );

  if (studentrows.length > 0) {
    console.log(studentrows[0].studentid);
  }
  return res.json({
    success: true,
    studentdata: studentrows,
  });
});

//get specific student data
app.post("/student/getData/specific", async (req, res) => {
  const promisePool = connection.promise();
  const studentId = req.body.studentId;
  const queryStringCourse = "SELECT * FROM students WHERE studentid = ?";
  // query database using promises and passing the variable as an array
  const [studentrows, coursefields] = await promisePool.query(
    queryStringCourse,
    [studentId]
  );

  if (studentrows.length > 0) {
    console.log(studentrows[0].studentid);
  }
  return res.json({
    success: true,
    studentdata: studentrows,
  });
});

//get specific student data baseed on courseid
app.post("/student/getData/specific/courseid", async (req, res) => {
  const promisePool = connection.promise();
  const courseid = req.body.courseid;
  const queryStringCourse = "SELECT * FROM students WHERE courseid = ?";
  // query database using promises and passing the variable as an array
  const [studentrows, coursefields] = await promisePool.query(
    queryStringCourse,
    [courseid]
  );

  if (studentrows.length > 0) {
    console.log(studentrows[0].studentid);
  }
  return res.json({
    success: true,
    studentdata: studentrows,
  });
});

//update specific student data
app.put("/student/update/specific", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const gpax = req.body.gpax;
  const studentid = req.body.studentid;
  var sql = `UPDATE students SET firstname = ?, lastname = ?, gpax = ? WHERE studentid = ?`;
  connection.query(sql, [firstname, lastname, gpax, studentid], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "Student has successfully updated",
    });
  });
});

//delete specifc student data
app.delete("/student/delete/specific", async (req, res) => {
  const studentid = req.body.studentid;
  var sql = `DELETE FROM students WHERE studentid = ?`;
  connection.query(sql, [studentid], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "Student has successfully deleted",
    });
  });
});

//delete specifc course data
app.delete("/course/delete/specific", async (req, res) => {
  const courseid = req.body.courseid;
  var sql = `DELETE FROM courses WHERE courseid = ?`;
  connection.query(sql, [courseid], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    }
  });

  var sqlStudent = `DELETE FROM students WHERE courseid = ?`;
  connection.query(sqlStudent, [courseid], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "Course has successfully deleted",
    });
  });
});

//update specific course data
app.patch("/course/update/specific", async (req, res) => {
  const courseid = req.body.courseid;
  const coursetitle = req.body.coursetitle;
  const coursedes = req.body.coursedes;
  const max = req.body.max;
  const lecturer = req.body.lecturer;
  let result = courseid.concat(" - ", coursetitle);
  console.log(courseid);
  var sql = `UPDATE courses SET courseid = ?, coursetitle = ?, coursedes = ?, max = ?, lecturer = ? WHERE courseid = ?`;
  var sqlStudent = `UPDATE students SET course = ?, courseid = ? WHERE courseid = ?`;
  connection.query(
    sql,
    [courseid, coursetitle, coursedes, max, lecturer, courseid],
    (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
    }
  );
  connection.query(sqlStudent, [result, courseid, courseid], (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "Course has successfully updated",
    });
  });
});
