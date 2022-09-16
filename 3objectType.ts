//it is the best method for typescript.
type result = {
  name: string;
  lastname: string;
  class: number;
};
let object1: result = {
  name: "amit",
  lastname: "singh",
  class: 25,
};

let object2: result = {
  name: "pintoo",
  lastname: "kavert",
  class: 18,
};
console.log(object1);
console.log(object1.name);

//--------------------------------------{not best method but we knew it}--------------------------------------------------
let obj1: object = {
  name: "pushparaj",
  lastname: "singh",
  rollno: 25,
};

let obj2: object = {
  name: "pusparaj",
  lastname: "singh",
  rollno: 26,
};

console.log(obj1);
//here we can't use console.log(obj1.name);
