console.log("this is tut 28")
let obj = {
    name: "akash",
    Channel:  "code with harry",
    adress: "mars",

}

function obj(givenName){
    this.name = givenName
}
obj.prototype.givenName = function(){
    return this.name;
}
let obj2 = new obj("Harry");
console.log(obj2);