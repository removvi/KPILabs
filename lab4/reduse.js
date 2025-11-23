function sumReduce(...args) {
  return args.reduce((acc, n) => acc + n, 0);
}

const e = sumReduce(10, -1, -1, -1);
console.log(e);
