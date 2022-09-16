"use strict";
//'unknown' is more safer then 'any'
//it will run
let data;
data = 20;
data = "hello";
let item;
item = data;
console.log(item);
//it will not run
// let d: unknown;
// d = 2;
// d = "hell";
// let i: string;
// i = d;
// console.log(i);
