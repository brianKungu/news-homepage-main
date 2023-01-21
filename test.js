function Greet(greeetings) {
  return greeetings;
}

console.log(Greet("hello"));

function myFunction(a, b) {
  return a + b;
}

var result = myFunction(5, 6);
console.log(result);

// var vs const
/* var is global scoped - can be accessed everywhere in the program 
let is block scoped - it can't be accessed outside the particular block
    - one cannot re-declare a let variable but can update it
*/
var a = 20;

function f() {
  console.log(a);
}

console.log(a);
f();

function openSideBar() {
  document.querySelector(".sideBar").classList.toggle("block");
}

// function closeSideBar(){

// }
