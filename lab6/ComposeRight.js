import composeRight from "./ComposeRight.js";

const bad = x => {
  if (x > 3) throw new Error("Too big!");
  return x * 2;
};

const add = x => x + 1;

const f = composeRight(bad, add, add);

f.on("error", e => {
  console.log("Error:", e.message);
});

console.log(f(1)); 
console.log(f(5)); 
