function Spy(target, method) {
  // SOLUTION GOES HERE
  let result = {
    count: 0
  };
  const oldMethod = target[method];
  target[method] = function() {
    result.count++;
    return oldMethod.apply(this, arguments);
  };
  return result;
}

module.exports = Spy;