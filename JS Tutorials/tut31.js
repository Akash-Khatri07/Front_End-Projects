console.log("this is tut 31")
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience =givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name}and this company is best`;  
    }
    joiningYear(){
        return2020-this.experience;
    }
    static add(a,b){
    return a+b;
}
}
//harry = new Employee("harry",56,"Division");
//console.log(harry.joiningYear());
console.log(Employee.add(34,5))
