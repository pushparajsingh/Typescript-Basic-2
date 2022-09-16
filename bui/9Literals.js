"use strict";
const type = 'to-string';
function combine(a, b, type) {
    if (type === 'as-number') {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20, 'as-number'));
