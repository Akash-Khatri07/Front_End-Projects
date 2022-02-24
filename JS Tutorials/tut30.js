console.log("this is tut 30")

const proto = {
      
    salogan: function(){
        return `this is best`;

    },
    changeName: function(newName){
        this.name = newName
    }
}

const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Progremer";
harry.changeName("Harry2")
console.log(harry);

const harry = Object.create(proto,{
    name: {value: "Harry",writable: true},
    role: {value: "Programer"},

});
harry1.changeName("Harry2")
console.log(harry1);