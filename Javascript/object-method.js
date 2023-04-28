console.log('Object Methods');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var employeeObj = {
    enum:1,
    ename:'Upstandards',
    dept:10,
    salary:10000,
    dept:11
}

sessionStorage.setItem('employee',JSON.stringify(employeeObj));
localStorage.setItem('employee',JSON.stringify(employeeObj));

function getValues(obj) {
    var values = [];
    for(var element in obj){
        values.push(obj[element]);
    }
    return values;
}

function getKeys(obj) {
    var values = [];
    for(var element in obj){
        values.push(element);
    }
    return values;
}
var val = getValues(employeeObj)
var key = getKeys(employeeObj)

console.log(val);
console.log(key);

// Object.create()
// Object.assign()
// Object.keys()
// Object.values()

var obj = {};
obj = new Object();
obj = Object.create({});

const target = { a: 1, d: 2 };
const source = { b: 4, c: 5 };

const returnObj = Object.assign(target, source)
console.log(returnObj);

console.log(Object.keys(employeeObj))
console.log(Object.values(employeeObj))



