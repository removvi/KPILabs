'use strict';

function fn() {

    const userConst = { name: "Erik" }

    let userLet = { name: "Oleg" }

    userConst.name = "Viktor";
    userLet.name = "Vlad";
    //userConst = { name: "New" } - неможливо так як константу не можна переназначити
    userLet = { name: "Romeo" }

    console.log(userConst);
    console.log(userLet);
}

fn();

function createUser(name, city) {
  return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));
