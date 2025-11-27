function contract(fn, ...types) {
  return function (...args) {
    for (let i = 0; i < args.length; i++) {
      if (args[i].constructor !== types[i]) {
        throw new TypeError(`Argument ${i + 1} has invalid type`);
      }
    }

    const result = fn(...args);

    const resultType = types[types.length - 1];
    if (result.constructor !== resultType) {
      throw new TypeError('Invalid return type');
    }

    return result;
  };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

const res = addNumbers(2, 3);
console.dir(res); // 5
addNumbers(2, '3'); // TypeError
