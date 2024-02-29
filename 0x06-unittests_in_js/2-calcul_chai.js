#!/usr/bin/env node

// Compute 2 integers
// based on pased op type

export default function calculateNumber (type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b)
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b)
  } else if (type === 'DIVIDE') {
    const roundedB = Math.round(b)
    if (roundedB === 0) {
      return Error
    }
    return Math.round(a) / roundedB
  }
}
