console.log("this is tut 37")

const students = [
    {name:"akash",subject:"Maths"},
    {name:"rohan",subject:"sst"}

]

function enroll(student){
    setTimeout(function(){
        students.push(student);
    },3000);s
}
function getStudent(){
    setTimeout(function(){
        let str = " ";
        students.array.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;

    },3000); 
}
let newstudent = {name:"vinay",subject:"python"}
enrollstudent(newstudent);
getStudent();