import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const students = [
    {
        id : 101,name:"Arpit",course:"Btech",marks:[78,98,98]},
        {id:102,name:"alok",course:"cse",marks:[90,90,98]},
        {id:103,name:"kk kartik",course:"cse",marks:[90,87,67]}
];

function ask(question){
    return new Promise((resolve)=>{
        rl.question(question,(answer)=> resolve(asnwer));

    });

}
function addstudentrecord(){
    while(true){
        const id=prompt("Enter the student id: ")
        const name=prompt("Enter the student name: ")}
   
}


async function getstudentrecords(){
    while(true){
        console.log(`
            ========Select an option to see the student Details========
            1.Add a student.
            2.view all students.
            3.Search a student.
            4.search top student fromrecord.
            5.Delete a student.
            7.Exit. 
            ===================================================`)
    }

}
