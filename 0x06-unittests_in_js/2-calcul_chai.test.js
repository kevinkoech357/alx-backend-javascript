#!/usr/bin/env node

// Test cases for 1-calcul.js

import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    expect(calculateNumber('SUM', 1.49, 2.51)).to.equal(4);
  });

  it('should return the difference of rounded numbers', function () {
    expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 5, 3.5)).to.equal(1);
  });

  it('should return the division of rounded numbers', function () {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    expect(calculateNumber('DIVIDE', 8.5, 2.5)).to.equal(3);
  });

  it('should return error for division by zero', function () {
    expect(calculateNumber('DIVIDE', 5, 0), Error);
  });
});