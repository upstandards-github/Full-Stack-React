const array1 = [1, 2, 'a', '1a'];
console.log(array1)

console.log(array1.toString());

var abc = [1,2,3,4,5];

abc.push(6)

console.log(abc);

abc.pop();

console.log(abc);

abc.shift();
console.log(abc);
abc.unshift(1);
console.log(abc)

var newArray = [1,2,3,4,5];

delete newArray[2];
console.log(newArray);

// concate

var a = [1,2,3];
var b = [4,5,6];

var c = a.concat(b);

console.log(c);

var flatArray = [[1,2,3],[4,5],[6,7],[8,9,10]];

flatArray = flatArray.flat();
console.log(flatArray);

var sArray = [1,2,3,4,5,6,7,8];

sArray.splice(sArray.length,0,7,8);

console.log(sArray);


sArray.splice(0,2);
console.log(sArray);
sArray = sArray.slice(0,3);
console.log(sArray);

var str = ['S','U','b','r','a','t'];
console.log(str.reverse())
console.log(str.join(''))

var num = 123;
console.log(num.toString().split(''));
console.log(num.toString().split('').reverse());
console.log(num.toString().split('').reverse().join(''));

[1,2,3,1,3,1,1,2,1,1,1];

myfuntion(1,3)


