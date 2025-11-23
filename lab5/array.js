function array() {
  const arr = []; 

  function wrapper(index) {
    return arr[index];
  }

  wrapper.push = function(value) {
    arr.push(value);
  };

  wrapper.pop = function() {
    return arr.pop();
  };

  return wrapper;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined
