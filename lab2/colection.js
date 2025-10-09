const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Lucius Verus", phone: "+380501112233" },
  { name: "Gaius Octavius", phone: "+380631234567" },
  { name: "Seneca", phone: "+380971234567" }
];


function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  return "Name not found"; // if not found
}

console.log(findPhoneByName("Marcus Aurelius")); // +380445554433
console.log(findPhoneByName("Seneca")); // +380971234567
console.log(findPhoneByName("Plato")); // name not found
