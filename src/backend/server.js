const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require('cors');
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
        message: "Connection - Success"
    });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

//user login
app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    var sql = mysql.format(
        		"SELECT * FROM users WHERE username = ?",
        		[username]
        	);

    connection.query(sql, [username, password], (err,rows) =>{
        if(err){
            return res.json({
                success: false
            });
        }
        numRows = rows.length;
        console.log(rows)
        if(numRows != 0){
            bcrypt.compare(password, rows[0].hashed).then(function(result) {
                if(result){
                    return res.json({
                        success: true,
                        message: "Authentication Success"
                    });
                }else{
                    return res.json({
                        success: false,
                        message: "Authentication Failed - Wrong password"
                    });
                }
                
            });
        }else{
            return res.json({
                success: false,
                message: "Authentication Failed - No such user in the database"
            });
        }
        
    })
})

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
app.post("/student/post"), (req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const studentid = req.body.studentid;
    const gpax = req.body.gpax;
    
}

//get student data


//post course data


//get course data