const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('test suite for first number rounded',  function () {
        assert.equal(calculateNumber(1, 4), 5);
    });
    it('test suite for second number rounded',  function () {
        assert.equal(calculateNumber(4, 1.5), 6);
    });
    it('test suite for both number rounded',  function () {
        assert.equal(calculateNumber(1.3, 4.4), 5);
    });
});
