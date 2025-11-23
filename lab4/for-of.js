function sumForOf(...args) {
  let s = 0;
  for (const num of args) {
    s += num;
  }
  return s;
}

const b = sumForOf(0);
console.log(b);
