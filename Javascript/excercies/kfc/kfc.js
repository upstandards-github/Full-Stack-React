console.log('Hello');
var date  = new Date();
console.log(date.getHours());
function checkOut(){
   var totalValue = 0;
   var cbCost = 0;
   var sCost = 0;

   var peri = document.getElementById('peri').checked;
   var bucket = document.getElementById('bucket').checked;

   var choco = document.getElementById('choco').checked;
   var fries = document.getElementById('fries').checked;
   var fullname = document.getElementById('fullname').value;

   if (peri){
    cbCost = 500; 
   } else if (bucket){
    cbCost = 700; 
   }

   if (choco){
    sCost = 300
   }

   if (fries){
    sCost=sCost+400;
   }

   totalValue = cbCost + sCost;

   document.getElementById('result').innerText = `Good Morning ${fullname}, Your Order Value is ${totalValue}`;

}