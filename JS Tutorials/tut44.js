console.log("this is tut  44")
 let a  = "akash";
 if(a != undefined){
   //  throw new Error ('this is not defined');
 }
 else{
     console.log('this is undefined');
 }

 try {
     console.log("we are inside try block");
    //  functionHarry();
 } catch (error) {
     console.log("are your okey?");
    //  console.log(error.name);
     console.log(error.message);   
 } finally {
     console.log("Finallly we will run this");
 }
