function duckCount() {
  const args = (arguments.length === 1 ? [ arguments[0] ] : Array.apply(null, arguments));
  return args.reduce(((acc, arg) =>
    Object.prototype.hasOwnProperty.call(arg, 'quack') ? ++acc : acc)
    , 0);
}

module.exports = duckCount;