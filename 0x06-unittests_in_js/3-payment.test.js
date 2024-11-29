const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

// Test case for sendPaymentRequestToApi
describe('sendPaymentRequestToApi', function () {
    it('spy math used for sendPaymentRequestToApi(100, 20)', function () {
        const spy = sinon.spy(Utils, "calculateNumber");
        var arg1 = 100;
        var arg2 = 20;
        sendPaymentRequestToApi(arg1, arg2);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2));
        expect(spy.returnValues[0]).to.be.equal(120);
    });
});
