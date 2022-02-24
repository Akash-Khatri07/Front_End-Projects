console.log("this is tut 27")

let car = {
      name:'maruti 800',
      topspeed: 2000,
      run: function(){
           console.log("car is running")
}

}

function Generalcar(givenName,givenSpeed){
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);

    }
    this.analysis = function(){
         console.log(`this car is slower by ${250-this.topspeed}KM/H than shwift`)
    }

}
car1 = new  Generalcar('nissan',200);
console.log(car1);
