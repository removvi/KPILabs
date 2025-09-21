/*
другий варіант 
реалізації функції
*/
'use strict';

function inc(num){
    num.n += 1;
}

const obj = { n: 23};
inc(obj);
console.dir (obj);
