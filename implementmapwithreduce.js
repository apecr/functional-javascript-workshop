const arrayMap = (arr, fn, thisArg) =>
  arr.reduce((acc, current, index, intArray) => {
    const element = fn.call(thisArg, current, index, intArray);
    acc.push(element);
    return acc;
  }, []);

module.exports = arrayMap;