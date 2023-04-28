const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}


console.log(calculateArea(radius));
console.log(calculateDiameter(radius));

// =================================================================

const area = function(radius){
    return Math.PI * radius * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}


// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));