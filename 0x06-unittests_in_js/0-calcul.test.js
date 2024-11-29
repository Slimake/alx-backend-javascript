const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return addition of 2 integer passed as arguments',  function () {
        assert.equal(calculateNumber(1, 4), 5);
    });
    it('should return addition of one decimal and one integer passed as arguments',  function () {
        assert.equal(calculateNumber(1.3, 4), 5);
        assert.equal(calculateNumber(4, 1.5), 6);
    });
    it('should return addition of decimal passed as arguments',  function () {
        assert.equal(calculateNumber(1.3, 4.4), 5);
        assert.equal(calculateNumber(4.5, 1.5), 7);
    });
    it('test if the returned value is not equal to the expected value',  function () {
        assert.notEqual(calculateNumber(1.3, 4.4), 4);
        assert.notEqual(calculateNumber(4.5, 1.5), 5);
    });
});
