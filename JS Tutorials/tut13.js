console.log("this tut 13")

let element = document.getElementById("myfirst");
element.style.color='red';
element.innerText = 'Harry is a good boy';
element.innerHTML = '<br>Harry is a good boy</br>';
console.log(element);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('child');
sel = document.querySelector('div');
sel.style.color="green";
//console.log(sel);

let elems = document.getElementsByClassName('container');
let elems = document.getElementsByTagName('div');
console.log(elems)