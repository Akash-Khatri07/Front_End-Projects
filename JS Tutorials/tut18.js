console.log("this is tut18 ")
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown',  func3);

// function func1(e) {
//     console.log("thanks",e);
//     e.preventDefault();
// }
// function func1(e) {
//     console.log("thanks it is a double click",e);
//     e.preventDefault();
// }
// function func1(e) {
//     console.log("thanks it is a ,mouse down",e);
//     e.preventDefault();
// }
document.querySelector('.no').addEventListener('mouseenter',function(){

    console.log('you entered number')
})
document.querySelector('.no').addEventListener('mouseleave',function(){

    console.log('you exit now')
})
document.querySelector('.container').addEventListener
('mousemove',function(e){
    console.log(offsetX,offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetX})`;

    console.log('mouse')
})