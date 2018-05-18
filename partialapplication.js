function logger(namespace) {
  // SOLUTION GOES HERE
  return function() {
    const args = (arguments.length === 1 ? [ arguments[0] ] : Array.apply(null, arguments));
    console.log.apply(console, [ namespace ].concat(args));
  };
}

module.exports = logger;