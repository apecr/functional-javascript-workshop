const repeat = (func, num) => {
  if (num <= 0) {
    return;
  }
  func();
  return repeat(func, --num);
};

module.exports = repeat;