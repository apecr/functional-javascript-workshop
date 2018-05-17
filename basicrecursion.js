const reduce = (arr, fn, initial) => {
  if (!arr.length) {
    return initial;
  }
  return reduce(arr.slice(1), fn, fn(initial, arr[0], 0, arr));
};

module.exports = reduce;