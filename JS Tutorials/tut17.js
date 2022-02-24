console.log("thisis tut 17 ")
document.getElementById('heading').addEventListener("click",function(e){
    console.log('YOU have clicked on heading');
    variable = e.target;
    variable = e.target.className;
    variable =Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.target.id;
    variable = e.clientX;
    console.log(e);
});