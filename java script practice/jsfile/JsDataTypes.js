var val;
var datatype = typeof val;
console.log(datatype);

var val  = 0;
var datatype = typeof val;
console.log(datatype);

var val = 10n;
var datatype = typeof val;
console.log(datatype);

var val = true;
var datatype = typeof val;
console.log(datatype);

var val = "foo";
var datatype = typeof val;
console.log(datatype);

var datatype  = typeof Symbol("id")
console.log(datatype);

var datatype = typeof Math;
console.log(datatype);

var datatype = typeof null;
console.log(datatype);

let satHi = function(){
console.log.apply("Say Hi");
};

var datatype = typeof sayHi;
console.log(datatype);
