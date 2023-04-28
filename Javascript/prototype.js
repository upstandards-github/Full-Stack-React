console.log("prototype start");
let parent = {
  firstname:'subrat',
  lastname:'bhola',
  getFullName : function () {
    console.log(this.firstname+this.lastname);
  }
}

parent.getFullName()

let child =  {
    firstname:'',
    lastname:'def'
}

child.__proto__ = parent;
child.getFullName();

console.log("prototype end");