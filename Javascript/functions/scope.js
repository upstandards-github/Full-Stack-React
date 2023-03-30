var a = 10;

function c() {
    var b = 100;
    
    function d() {
        var a = 70;
        function e() {
            console.log(a); //70
        }

        e()
    }
    d()
}

console.log(a); // 10
c();

var e = 10;

function sum(a){
  return function(b){
    return function(c){
      
      return function(d){
      
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4));
