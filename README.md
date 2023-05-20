# Academic Data Management System (ADMS)

**Academic data management system (or) ADMS** is the system that helps the university admission department to manage and maintain the student data. Users can create courses and add/ delete/ edit students to those courses. They can also set the grades for the students according to the individual course.

## Functions

- Add/ Delete/ Update courses
- Add/ Delete/ Update students to the available courses
- Display course and student statistics

## Database Schema

![Database Schema for ADMS](https://www.pinterest.com/pin/695313629991595483/)

## To run the frontend and backend in developing mode

First, you need to install npm modules

    npm i

Afterwards, frontend can be run by typing

    npm start

For backend, please redirect to the backend folder by opening a new terminal and typing

    cd src/backend
    node server.js

If the server is being run correctly, the following should be appeared in terminal

    Server is running on port 5000
    Database is connected

## API endpoints

#### URL

<!-- Method /endpoint -->

`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| username  | String | Admin name     |
| password  | String | Admin password |

Example
`{
	"username" : "adminuser1",
	"password" : "CS@SIT1"
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Authentication Success",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /register`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| username  | String | Admin name     |
| password  | String | Admin password |

Example
`{
	"username" : "adminuser1",
	"password" : "CS@SIT1"
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "User registered successfully",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /student/addData`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| firstname | String | student first name          |
| lastname  | String | student last name           |
| studentid | String | student id                  |
| gpax      | String | student accumulated gpa     |
| course    | String | enrolled courses            |
| courseid  | String | Id(s) of enrolled course(s) |

Example
`{
	"firstname" : "John",
	"lastname" : "Doe",
	"studentid" : "65130500249",
	"gpax" : "3.91",
	"course" : "Introduction to Programming",
	"courseid" : "CSC120"
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Student has successfully registered",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`GET /student/getData`

<!-- The response if success -->

#### Success

`{
success: true,
data: {
[
{ "studentid":  "65130500249",
"firstname":  "Geroge",
"gpax":  4
},
{
"studentid":  "65340123421",
"firstname":  "Billy",
"gpax":  3.75
}
]
},
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /course/addData`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter   | Type   | Description              |
| ----------- | ------ | ------------------------ |
| courseid    | String | course id                |
| coursetitle | String | course name              |
| coursedes   | String | course description       |
| max         | int    | maximum limit of student |
| lecturer    | String | lecturer name            |

Example
`{
	"courseid" : "GEN255",
	"coursetitle" : "Miracle of Thinking",
	"coursedes" : "Thinking about decisions",
	"max" : "35",
	"lecturer" : "Julia",
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Course has successfully registered",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`GET /course/getData`

<!-- change to Request <TYPE> If you use parameters or query -->

<!-- The response if success -->

#### Success

`{
success: true,
data: {
[
{
"courseid":  "CSC102",
"coursetitle":  "Introduction to Programming",
"coursedes":  "Java ",
"max":  45,
"lecturer":  "Bush"
},
{
"courseid":  "CSC200",
"coursetitle":  "Introduction to Game Dev",
"coursedes":  "Building games with Unity",
"max":  42,
"lecturer":  "Jarkata"
}
]
},
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /course/getData/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| courseid  | String | course id   |

Example
`{
	"courseid" : "GEN111"
}`

<!-- The response if success -->

#### Success

`{
success: true,
studentdata : {
[
{
"courseid":  "CSC200",
"coursetitle":  "Introduction to Game Dev",
"coursedes":  "Building games with Unity",
"max":  42,
"lecturer":  "Jarkata"
}
]
}
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /student/getData/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| studentId | String | student id  |

Example
`{
	"studentId" : "65130500249"
}`

<!-- The response if success -->

#### Success

`{
success: true,
studentdata : {
[
{
"firstname":  "Geroge",
"lastname":  "White",
"studentid":  "65130500249",
"gpax":  4,
"course":  "CSC200 - Introduction to Game Dev",
"courseid":  "CSC200"
}
]
}
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`POST /student/getData/specific/courseid`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| courseid  | String | course id   |

Example
`{
	"courseid" : "GEN111"
}`

<!-- The response if success -->

#### Success

`{
success: true,
studentdata : {
[
{
"firstname":  "Geroge",
"lastname":  "White",
"studentid":  "65130500249",
"gpax":  4,
"course":  "CSC200 - Introduction to Game Dev",
"courseid":  "CSC200"
},
{
"firstname":  "Billy",
"lastname":  "Joe",
"studentid":  "65340123421",
"gpax":  3.75,
"course":  "CSC200 - Introduction to Game Dev",
"courseid":  "CSC200"
}
]
}
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`PUT /student/update/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| firstname | String | student first name      |
| lastname  | String | student last name       |
| studentid | String | student id              |
| gpax      | String | student accumulated gpa |

Example
`{
	"firstname" : "John",
	"lastname" : "Doe",
	"studentid" : "65130500249",
	"gpax" : "4.0",
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Student has successfully updated",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`DELETE /student/delete/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| studentid | String | student id  |

Example
`{
	"studentid" : "65130500249",
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Student has successfully deleted",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`DELETE /course/delete/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| courseid  | String | course id   |

Example
`{
	"courseid" : "GEN255",
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Course has successfully deleted",
}`

<!--Status code (normally 200) -->

`Status code : 200`

---

#### URL

`PATCH /course/update/specific`

<!-- change to Request <TYPE> If you use parameters or query -->

#### Request Body

| Parameter   | Type   | Description              |
| ----------- | ------ | ------------------------ |
| courseid    | String | course id                |
| coursetitle | String | course name              |
| coursedes   | String | course description       |
| max         | int    | maximum limit of student |
| lecturer    | String | lecturer name            |

Example
`{
	"courseid" : "GEN255",
	"coursetitle" : "Miracle of Thinking",
	"coursedes" : "Thinking about decisions",
	"max" : "35",
	"lecturer" : "Julia",
}`

<!-- The response if success -->

#### Success

`{
success: true,
message: "Course has successfully updated",
}`

<!--Status code (normally 200) -->

`Status code : 200`
