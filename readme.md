# Student API

A simple REST API built with **Node.js** and **Express.js** for managing student records.

This project was created to practice building REST APIs and performing basic **CRUD operations** using an in-memory array for data storage.

## Features

* Create a new student
* Get all students
* Get a single student
* Update a student
* Delete a student
* Test API requests using Postman

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Postman

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd <project-folder>
```

Install the required dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The main API currently runs on:

```text
http://localhost:4000
```

## Student Structure

A student contains information such as:

```json
{
  "name": "Dkay",
  "age": "19",
  "grade": "A"
}
```

## API Endpoints

### Get All Students

```http
GET http://localhost:4000/getallstudents
```

Returns all students currently stored in the application.

Example response:

```json
{
  "students": [
    {
      "name": "Dkay",
      "age": "19",
      "grade": "A"
    }
  ]
}
```

---

### Create a Student

```http
POST http://localhost:4000/students
```

Example request body:

```json
{
  "name": "Dkay",
  "age": "19",
  "grade": "A"
}
```

The student is added to the in-memory `students` array.

A successful request should return a `200 OK` or `201 Created` status code.

---

### Update a Student

The current Postman collection contains:

```http
PUT http://localhost:3000/students/1
```

This endpoint is intended to update an existing student using the student's ID.

> Note: This request currently uses port `3000`, while the other API requests use port `4000`. Confirm that this matches the port used by the Express server.

---

### Delete a Student

```http
DELETE http://localhost:4000/deletestudent/:id
```

Replace `:id` with the ID of the student you want to delete.

Example:

```http
DELETE http://localhost:4000/deletestudent/123
```

---

### Get a Single Student

A **Get a student** request has been created in the Postman collection, but its URL has not yet been configured.

Once implemented, this request should retrieve one student using an identifier such as the student's ID.

## Data Storage

The application uses an in-memory JavaScript array:

```js
const students = [];
```

This means the project does not currently use a database.

All student data will be lost whenever the server is restarted.

## CRUD Operations

This project demonstrates the basic CRUD operations:

| Operation | HTTP Method | Purpose                    |
| --------- | ----------- | -------------------------- |
| Create    | POST        | Add a new student          |
| Read      | GET         | Retrieve student records   |
| Update    | PUT         | Modify an existing student |
| Delete    | DELETE      | Remove a student           |

## Testing

The API can be tested using **Postman**.

For POST and PUT requests that require data:

1. Select **Body**
2. Select **raw**
3. Select **JSON**
4. Enter the request data
5. Send the request

Example:

```json
{
  "name": "Dkay",
  "age": "19",
  "grade": "A"
}
```

## Purpose

The purpose of this project is to practice:

* Building an Express.js server
* Creating REST API endpoints
* Working with HTTP methods
* Using request bodies
* Working with route parameters
* Manipulating JavaScript arrays and objects
* Understanding CRUD operations
* Testing APIs with Postman
