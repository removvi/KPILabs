function seq(fn) {
  const fns = [fn];

  function chain(next) {
    if (typeof next === "number") {
      return fns.reverse().reduce((acc, f) => f(acc), next);
    }
    fns.push(next);
    return chain;
  }

  return chain;
}


console.log(
  seq(x => x + 7)(x => x * 2)(5)
); 

console.log(
  seq(x => x * 2)(x => x + 7)(5)
); 

  console.log(
  seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)

); 
