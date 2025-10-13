'use strict';
function introspectFunctions(iface) {
  
  return Object.entries(iface)
    
    .filter(([, value]) => typeof value === 'function')
    
    .map(([name, fn]) => [name, fn.length]);
}


const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log(introspectFunctions(iface));
