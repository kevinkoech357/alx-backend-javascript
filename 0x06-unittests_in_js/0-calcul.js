#!/usr/bin/env node

// Compute sum of 2 integers

function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  return roundedA + roundedB;
}

module.exports = calculateNumber;
