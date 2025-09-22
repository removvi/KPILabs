'use strict';
//масив
const arr = [
    true, 'hello', 5, 12, -200, false, false, 'word', 0, null, 'true', 'false', 23, -122
];

const counts = {};

for (const item of arr) {
    let type = typeof item;
    if (item === null) {
        type = 'null';
    } else if (Array.isArray(item)) {
        type = 'array';
    }
    counts[type] = (counts[type] || 0) + 1;
}

console.log(counts);
