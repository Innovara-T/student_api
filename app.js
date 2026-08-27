const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

app.use(express.json());
const students = [];
let nextStudentId = 1;
app.post('/students', (req, res) => {
    // Handle POST request for creating a new student
    const {name, age, grade} = req.body;
    const newStudent = { name, age, grade, id: nextStudentId++ };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.get('/getallstudents', (req, res) => {
    // Handle GET request for retrieving all students
    res.json(students);
});

app.get('/getastudent/:id', (req, res) => {
    // Handle GET request for retrieving a student by ID
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
});

app.put('/updatestudent/:id', (req, res) => {
    // Handle PUT request for updating a student by ID
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    const { name, age, grade } = req.body;
    Object.assign(student, { name, age, grade });
    res.json(student);
});

app.delete('/deletestudent/:id', (req, res) => {
    
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }
    students.splice(studentIndex, 1);
    res.status(200).json({ message: 'Student deleted successfully' });
});
