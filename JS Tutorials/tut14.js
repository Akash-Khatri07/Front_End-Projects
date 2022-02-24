console.log("this tut 14")

let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children);

let container = document.querySelector('div.container');
//console.log(container.children[1].children[0].children)
//console.log(container.firstChild);
//console.log(container.firstElementChild)
//console.log(container.lastChild);
//console.log(container.lastElementChild)
//console.log(container.childElementCount)
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling);