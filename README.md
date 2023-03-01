# coding_challenge-18

This coding challenge is all about **solving tough JavaScript questions and improving your core understanding of the language**. JavaScript is at the core of all the libraries, frameworks and tools that we use. Mastering the language is one of the best investments you can make, so let's get through some tough interview questions!


## What is the Challenge?
This challenge will be a fun one where you can do it at your own pace and can complete as many of the 11 questions as you would like. Below you will find JavaScript interview questions that you will have to try and solve and "answer" as what you think the output should be. At the bottom you will find the answer sheet. It's a fun one that will challenge your understanding of JavaScript so try and solve them all yourself before looking at the answers! Additionally, keep track of your answers and explanations in your github repo and submit them (see the *The Rules Are* section on how to do this).

### What is the output in the console for the below questions:

## 0
```js
var result = (function(a) {
  return a*a;
}(5.5));
console.log(result); //guess the output
```

## 1
```js
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));
```

## 2
```js
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
```

## 3
```js
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);
```

## 4
```js
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();
```

## 5
```js
(function(){
  var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```

## 6
```js

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
```

## 7
```js
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);
```

## 8
```js
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]);
```

## 9
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
```

## 10
```js
console.log(1 < 2 < 2);
console.log(3 > 2 > 1);
```

## Answer Sheet:
Thank you to this excellent article https://ylv.io/top-ten-tricky-javascript-questions/ for inspiring this challenge! Have a look at the answers here only after you have tried and answered all of these 11 questions and you have submitted your answers as per the rules below...

## The Rules Are:

Use whatever tools you have as developers (google, friends, Discord, programming buddy etc...) but I will not be offering any help with this challenge. Just like a developer, you must solve a problem and build something that will be challenging. Nobody will hold your hand during the job so we want to experience that by figuring it all out on your own with your team. 


