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
    
// how to invoke functions
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

