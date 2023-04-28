console.log('Functions');

a();

// function statement and function declaration
    function a() {
        console.log('a function called');
    }

// function expression

    var test = 0;

    var b = function () {
        console.log('function b called')
    };
    
// how to invoke or call functions
b();

// annonymous function
// function (){

// }
// parameters and arguments

function calculateSum(param1, param2) { //param 1 and param 2 is the parameters of the functions
    return param1+param2;
}

calculateSum(2,4);  //2 , 4 here is argument

//arrow functions

var b = ()=> {
    console.log('function b called')
};


// first class function or first class citizens

function start(param) {
    console.log('start function')
    param();
}

function end() {
    console.log('end function')
}

console.log(end);

start(end);

// clouser

var a = 10;

function x() {
    var b = 100;

    function y() {
        console.log(a);
    }

    y();
}

x()

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
   return displayName();
  }
  var value = init();
//.................
  function printnumbers() {

    for (var i = 1;i <=5 ;i++){

        function innerFn(i) {
            setTimeout(function () {
                console.log(i)
            },i*1000);
        }

        innerFn(i)  

    }
  }

  printnumbers();





