const expect = require('chai').expect;
const repeat = require('./../higherorderfunctions');
/* global define, it, describe, before, beforeEach, afterEach, after */

describe('Higher order functions', () => {
  it('Should get a 4', () => {
    let a = 0;
    const sum = () => a++;
    repeat(sum, 4);
    expect(a).to.be.equal(4);
  });
});