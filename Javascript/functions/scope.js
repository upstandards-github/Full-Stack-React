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