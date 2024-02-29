const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle -ve numbers as expected', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle zero correctly', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 4), 4);
    assert.strictEqual(calculateNumber(1, 0), 1);
  });

  it('should handle decimal numbers correctly', function () {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });
});
