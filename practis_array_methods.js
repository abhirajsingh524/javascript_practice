const students = [
    { id: 1, name: "Aman", marks: 78 },
    { id: 2, name: "Riya", marks: 92 },
    { id: 3, name: "Kunal", marks: 45 },
    { id: 4, name: "Neha", marks: 85 },
    { id: 5, name: "Arjun", marks: 67 }
];
//students.forEach(student => console.log(`ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`))
//students.map(student => console.log(`ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`))
//console.log(students.filter(student => student.marks > 80))
console.log(students.reduce((add,student) => student.marks<50

? add +student.marks+10 : add, 0))