function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
            console.log("YOU PROMISDE HAS BEEN RESOLVE ")
            resolve();
        }
        else{
            console.log('your promise has not be resolved');
            reject('sorry not fullfilled');
        }
        },2000);
    })
}
func1().then(function(){
    console.log("Harry is is good boy");

}).catch(function(){
    console.log("Harry:is bad boy");
})