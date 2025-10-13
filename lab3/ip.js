'use strict'

function ipToNumber(ip = '127.0.0.1') {
  
  const bytes = ip.split('.').map(Number);
  

  
  return bytes.reduce((acc, byte, index) => {
    const shift = (3 - index) * 8;   
    return acc + (byte << shift);    
  }, 0); 
};


console.log(ipToNumber('10.0.0.1')); 
console.log(ipToNumber());            
