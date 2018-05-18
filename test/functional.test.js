const expect = require('chai').expect;
const repeat = require('./../higherorderfunctions');
const doubleAll = require('./../basicmap');
const getShortMessages = require('./../basicfilter');
const checkUsersValid = require('./../basiceverysome');
const countWords = require('./../basicreduce');
const reduce = require('./../basicrecursion');
const duckCount = require('./../basiccall');
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
describe('Basic Filter', () => {
  it('Should return one message', () => {
    const messages = [
      { message: 'Este es el mensaje que sale' },
      { message: 'Este mensaje no sale porque es mucho mas largo de las 50 lineas que tenemos que filtrar asi que ya no va a salir' }
    ];
    const resultMessages = getShortMessages(messages);
    expect(resultMessages).to.be.deep.equal([ messages[0].message ]);
  });
  it('Should return two message', () => {
    const messages = [
      { message: 'Este es el mensaje que sale' },
      { message: 'Este es el mensaje que sale' },
      { message: 'Este mensaje no sale porque es mucho mas largo de las 50 lineas que tenemos que filtrar asi que ya no va a salir' }
    ];
    const resultMessages = getShortMessages(messages);
    expect(resultMessages).to.be.deep.equal([messages[0].message, messages[1].message]);
  });
});
describe('Basic Every Some', () => {
  it('Should return true, all users are valid', () => {
    const goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
    const testAllValid = checkUsersValid(goodUsers);
    expect(testAllValid([
      { id: 2 },
      { id: 1 }
    ])).to.equal(true);
  });
  it('Should return false, one user is not valid', () => {
    const goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    // `checkUsersValid` is the function you'll define
    const testAllValid = checkUsersValid(goodUsers);

    expect(testAllValid([
      { id: 2 },
      { id: 1 },
      { id: 4 }
    ])).to.equal(false);
  });
});
describe('Basic reduce', () => {
  it('Should return the object', () => {
    const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    expect(countWords(inputWords)).to.be.deep.equal({
      Apple: 2,
      Banana: 1,
      Durian: 3
    });
  });
  it('Should return the object, one more apple', () => {
    const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian', 'Apple'];
    expect(countWords(inputWords)).to.be.deep.equal({
      Apple: 3,
      Banana: 1,
      Durian: 3
    });
  });
});
describe('Basic recursion', () => {
  it('Shoudl return 6 the implemented reduce', () => {
    const sumNumbers = reduce([1, 2, 3], function(prev, curr, index, arr) {
      return prev + curr;
    }, 0);
    expect(sumNumbers).to.be.equal(6);
  });
  it('Shoudl return 7 the implemented reduce', () => {
    const sumNumbers = reduce([1, 2, 4], function(prev, curr, index, arr) {
      return prev + curr;
    }, 0);
    expect(sumNumbers).to.be.equal(7);
  });
});
describe('Basic call', () => {
  it('Should return one duck', () => {
    var notDuck = Object.create({quack: true});
    var duck = {quack: true};
    expect(duckCount(duck, notDuck)).to.be.equal(1);
  });
  it('Should return two ducks', () => {
    var notDuck = Object.create({quack: true});
    var duck = {quack: true};
    expect(duckCount(duck, duck, notDuck)).to.be.equal(2);
  });
});