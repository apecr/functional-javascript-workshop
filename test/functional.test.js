const expect = require('chai').expect;
const repeat = require('./../higherorderfunctions');
const doubleAll = require('./../basicmap');
/* global define, it, describe, before, beforeEach, afterEach, after */

describe('Higher order functions', () => {
  it('Should get a 4', () => {
    let a = 0;
    const sum = () => a++;
    repeat(sum, 4);
    expect(a).to.be.equal(4);
  });
});

describe('Basic Map', () => {
  it('SHould double all numbers', () => {
    const result = doubleAll([1, 2, 3, 4]);
    expect([2, 4, 6, 8]).to.be.deep.equal(result);
  });
});