const expect = require('chai').expect;
const repeat = require('./../higherorderfunctions');
const doubleAll = require('./../basicmap');
const getShortMessages = require('./../basicfilter');
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
      {message: 'Este es el mensaje que sale'},
      {message: 'Este mensaje no sale porque es mucho mas largo de las 50 lineas que tenemos que filtrar asi que ya no va a salir'}
    ];
    const resultMessages = getShortMessages(messages);
    expect(resultMessages).to.be.deep.equal([ messages[0].message ]);
  });
  it('Should return two message', () => {
    const messages = [
      {message: 'Este es el mensaje que sale'},
      {message: 'Este es el mensaje que sale'},
      {message: 'Este mensaje no sale porque es mucho mas largo de las 50 lineas que tenemos que filtrar asi que ya no va a salir'}
    ];
    const resultMessages = getShortMessages(messages);
    expect(resultMessages).to.be.deep.equal([messages[0].message, messages[1].message]);
  });
});