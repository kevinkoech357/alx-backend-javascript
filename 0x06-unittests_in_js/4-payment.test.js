const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
