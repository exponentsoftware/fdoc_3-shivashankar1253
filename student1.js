let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// for(let i=0; i< student.length; i++){
//     console.log(student[1][2],":", student[2][2])
//     break
// }
let [name, skills, scores] = student;

console.log(skills[2],":", scores[2])
console.log(skills[3],":", scores[3])