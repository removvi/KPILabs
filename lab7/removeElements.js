function removeElements(array, ...items) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
    }
  }
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
