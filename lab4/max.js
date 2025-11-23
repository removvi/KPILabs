function max(matrix) {
  let m = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > m) m = value;
    }
  }
  return m;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 11, 9]]);
console.log(m); 
