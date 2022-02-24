const age = 20;//if we want equal 45 and age===45 then we change '45'to 45 or age ====45 to age==='45'
const doesDrive = false;
if (age==19){
    console.log('Age is 19')

}
else if(age !== 45){
    console.log('age is not 45')
}
else{
    console.log('Age is not 19')
}
if(typeof  vari !== 'undefined'){
    console.log('this is defined')
} 
// else{
// console.log('this is not  defined')
// }
// if (doesDrive){
//  console.log("you can drive")
// }
// else{
//  console.log('your can not drive');
// }
console.log(age==45? 'Age is 45':'Age is not 45')

switch (age){
    case 18 :
        console.log("your ARE 18")

    break;
    case 19 :
        console.log("your ARE 19")

    break;
    case 20 :
        console.log("your ARE 20")

    break;

    default:
        console.log("you are not 18")
        
        break;
}


