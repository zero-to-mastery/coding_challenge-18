   -----0------


var result = (function(a) {
  return a*a;
}(5.5));
console.log(result); //guess the output

The output will be - 30.25 ! ((5.5) has just been called after the //function)


    -----1-----


const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));

The output will be - '1' because decleration of b has no scope under /*function's arguement*/ so there will be
a duplicate decleration of array b . a + [] -> '1' + [] -> string 1 i.e '1' .



    -----2-----


let f = (...f) => f;
console.log(f(10));

f = (...f) => f.reduce(f => f);
console.log(f(10));

function ff() {
  return arguments;
}
console.log(ff(10));

f = f => f;
console.log(f(10));


The output will be - [10], 10, [10], 10 .



    -----3-----




var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);


The output will be - 1 + 10 = 11 . foo is redefined inside function , so foo outside the function will not be changed , but bar is reassigned 
inside the function so , when the function is being called /*(function () {}())*/ the value of bar = 1 and foo = 10 .


    -----4-----



var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();


The output will be - obviously undefined and 10 , // Global and Local variable scope concept .


    -----5-----




(function(){
  var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);


The output will be - undefined and number . //typeof is an operator which return datatype 
var a = b = 3 


    -----6-----




function foo1() {
  return {
    bar: 'bar',
  };
}

function foo2() {
  return
  {
    'bar';
  }
}

console.log(foo1());
console.log(foo2());


The output will be - object { bar: 'bar'} and undefined .


     -----7-----




console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);


The output will be - 0.30000000000000004, false, and true ( these are javascript numbers , google the code above and read !! )

     -----8-----




const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]);


This will print out 333, not 111.


     -----9-----




for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );


5
0
5
1
5
2
5
3
5
4

       -----10-----




console.log(1 < 2 < 2);
console.log(3 > 2 > 1);

This will print out true and false. 
There are two tricks here. 
In Javascript relational operators evaluated from left to right, false equals 0, and true equals 1 for number comparisons. 
First expression after first step is true < 2 => 1 < 2 => true, and second is true > 1 => 1 > 1 => false.