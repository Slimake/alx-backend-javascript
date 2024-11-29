const { util } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

// Test case for sendPaymentRequestToApi
describe('sendPaymentRequestToApi', function () {
    it('stub being called with type = SUM, a = 100, and b = 20', function () {
        const stub = sinon.stub(Utils, "calculateNumber");
        const spy = sinon.spy(console, "log");
        const arg1 = 100;
        const arg2 = 20;
        stub.withArgs('SUM', arg1, arg2).returns(10);
        sendPaymentRequestToApi(arg1, arg2);
        expect(spy.calledWith('The total is: 10')).to.be.true;
    });
});
