console.log('call apply bind');
//we can borrow a function in Javascript using call, apply, bind method


let emp1 = {
    firstname:'Subrat',
    lasteName: 'Bhola',
}

let emp2 = {
    firstname:'Manoj',
    lasteName: 'Bhola',
}

let emp3 = {
    firstname:'Ankita',
    lasteName: 'Bhola',
}

function printFullName (city) {
    console.log(this.firstname + ' '+ this.lasteName + ' from ' + city);
  }

  printFullName.call(emp1,'berhampur');
  printFullName.apply(emp2, ['ganjam']);

  var bindValue = printFullName.bind(emp3, 'berhampur');

  bindValue();
