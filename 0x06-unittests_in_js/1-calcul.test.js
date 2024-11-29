const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumberWithType', function() {
  it('test suite for when type is SUM',  function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.3), 5);
  });
  it('test suite for when type is SUBTRACT',  function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('test suite for when type is DIVIDE',  function () {
    assert.equal(calculateNumber('DIVIDE', 7.8, 4.2), 2);
  });
  it('test suite for when type is DIVIDE and third argument is 0',  function () {
    assert.equal(calculateNumber('DIVIDE', 4.2, 0), 'Error');
  });
});
