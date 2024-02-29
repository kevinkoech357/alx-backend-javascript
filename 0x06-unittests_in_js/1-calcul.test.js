#!/usr/bin/env node

// Test cases for 1-calcul.js

const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return the sum of rounded numbers", function () {
    assert.strictEqual(calculateNumber("SUM", 1.4, 2.6), 4);
    assert.strictEqual(calculateNumber("SUM", 1.5, 2.5), 5);
    assert.strictEqual(calculateNumber("SUM", 1.49, 2.51), 4);
  });

  it("should return the difference of rounded numbers", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 5, 2), 3);
    assert.strictEqual(calculateNumber("SUBTRACT", 2.5, 1.5), 1);
    assert.strictEqual(calculateNumber("SUBTRACT", 5, 3.5), 1);
  });

  it("should return the division of rounded numbers", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 8, 2), 4);
    assert.strictEqual(calculateNumber("DIVIDE", 9, 3), 3);
    assert.strictEqual(calculateNumber("DIVIDE", 8.5, 2.5), 3);
  });

  it("should return error for division by zero", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 5, 0), Error);
  });
});
