//var
function varFunc() {
  var a = 10;
  console.log(a);
  if (true) {
    var a = 50;
    console.log(a);
  }
  var a = 20;
  console.log(a);
}
varFunc();

//let
function letFunc() {
  let b = 20;
  console.log(b);
  if (true) {
    let b = 40;
    b = 30;
    console.log(b);
  }
  console.log(b);
}
letFunc();

//const
function constFunc() {
  const c = 30;
  console.log(c);
  if (true) {
    const c = 60;
    console.log(c);
  }
  console.log(c);
}
constFunc();

//data types
var a = 10;
console.log(typeof a);
var b = "hello";
console.log(typeof b);
var c = false;
console.log(typeof c);
var d = null;
console.log(typeof d);
var e;
console.log(typeof e);

//synchronous
function synchronousFunc() {
  console.log("a");
  console.log("b");
  console.log("c");
}
synchronousFunc();

//asynchronous
function asynchronousFunc() {
  console.log("welcome");
  function play() {
    console.log("guys");
  }
  setTimeout(play, 5000); 
  console.log("everyone");
  console.log("allofus");
}
asynchronousFunc();