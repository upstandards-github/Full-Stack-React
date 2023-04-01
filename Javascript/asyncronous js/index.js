// for (var i= 1; i<=1000; i++) {
//     if (i%2==0) {
//     document.writeln(i);
//     } 
// }
document.writeln('<br>')
for (var a= 1; a<=10; a++) {
    if (a%2!=0)
    document.writeln(a);
}

// const pakkaPromies = new Promise(function(resolve, reject){
//     resolve("foo"); 
// })

const myPromise = new Promise((resolve, reject) => {
    console.log('Promies initiated');
    setTimeout(() => {
      resolve("hello");  //fulfille
    }, 3000);
  });
//   console.log(myPromise);

myPromise.then((result)=> console.log(result));

for (var a= 1; a<=10; a++) {
    if (a%2!=0)
    document.writeln(a);
}
console.log('promies ended');

// const result = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(result);

// result.then((res)=> console.log(JSON.stringify(res.body)));


const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(console.log(JSON.stringify(data)));
  });
});



