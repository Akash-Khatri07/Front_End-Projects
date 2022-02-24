console.log("this is tut 24")
let today = new Date();
//console.log(today);
let otherDate = new Date('8-4-1986 04:54:23');
 //otherDate = new Date('may 13 1976');
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
a = otherDate.getMonth(0);
a = otherDate.getFullYear(0);
console.log(otherDate)