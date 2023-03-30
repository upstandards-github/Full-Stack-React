  // map

    var array = [1,2,3,4,5];

    // output: [2,4,6,8,10]

    function double() {
      var newArray = [];
      for (var i = 0; i < array.length; i++){
        newArray.push(array[i]*2);
      }
    
    return newArray;
    }
  //  const output = double();

  // const output = array.map(function(element){
  //   return element*2;
  // })

  const output = array.map((element)=>element*2);

  const triple = array.map((element)=>element*3);

   console.log(output);
   console.log(triple);

// filter

    const greaterthen3 = array.filter((x)=> x >3);
    const even = array.filter((x)=> x % 2 === 0);
    console.log(greaterthen3);
    console.log(even);

// reduce
     const arrSum = [10,10,10,10,20];

     var sum = 0;
     for (var i=0; i< arrSum.length ; i++){
      sum+=arrSum[i];
     }

     console.log(sum);
  const out=  arrSum.reduce((sum, curr)=> {
      return sum+=curr;
     },0);

    console.log(out);

    let employeeDetails = [
      {firstname:'subrat', lastname: 'bhola', age:28, salary:20000},
      {firstname:'manoj', lastname: 'bhola', age:28, salary:30000},
      {firstname:'ankita', lastname: 'bhola', age:28, salary:40000},
      {firstname:'saraswati', lastname: 'bhola', age:48, salary:20000},
      {firstname:'surya', lastname: 'bhola', age:54,salary:30000}
    ];

    const fullname = employeeDetails.map((x)=> `${x.firstname} ${x.lastname}`);

    console.log(fullname);

  // print the full name of employyee whose age is greater then 30

  // '20000':2
  // '30000':2
  // '40000':1

  const fname = employeeDetails.filter((x)=> x.age > 30).map((y)=> `${y.firstname} ${y.lastname}`);

  const rname = employeeDetails.reduce((output2, curr)=> {
    if (curr.age > 30){
      output2.push(`${curr.firstname} ${curr.lastname}`)
    }
    return output2;
  },[]);

  console.log(fname);
  console.log(rname);

  // '20000':2
  // '30000':2
  // '40000':1
  const salaryObj = employeeDetails.reduce((output1, curr)=> {
   
    if (output1[curr.salary]){
      output1[curr.salary]+=1;
    } else {
      output1[curr.salary] = 1
    }
    return output1;
  },{});

  console.log(salaryObj);

