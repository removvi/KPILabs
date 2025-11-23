const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError("Всі аргументи повинні бути функціями");
    }
  }

  return x => fns.reduce((acc, fn) => fn(acc), x);
};

export default pipe;
