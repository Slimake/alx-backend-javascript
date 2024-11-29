const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumberWithType', function() {
  it('test suite for when type is SUM',  function () {
    expect(calculateNumber('SUM', 1.4, 4.3)).to.equal(5);
  });
  it('test suite for when type is SUBTRACT',  function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('test suite for when type is DIVIDE',  function () {
    expect(calculateNumber('DIVIDE', 7.8, 4.2)).to.equal(2);
  });
  it('test suite for when type is DIVIDE and third argument is 0',  function () {
    expect(calculateNumber('DIVIDE', 4.2, 0)).to.equal('Error');
  });
});
