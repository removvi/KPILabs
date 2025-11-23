function composeRight(...fns) {
  const handlers = [];

  const composed = function (initialValue) {
    let result = initialValue;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (e) {
        handlers.forEach(h => h(e));
        return undefined;
      }
    }

    return result;
  };

  composed.on = function (event, handler) {
    if (event === "error" && typeof handler === "function") {
      handlers.push(handler);
    }
  };

  return composed;
}

export default composeRight;;
