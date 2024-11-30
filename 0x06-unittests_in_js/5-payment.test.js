const { util } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

// Test case for sendPaymentRequestToApi
describe('sendPaymentRequestToApi', function () {
    beforeEach(function () {
        spy = sinon.spy(console, "log");
    });
    afterEach(function () {
       sinon.restore(); 
    });
    it('test will call sendPaymentRequestToAPI with 100, and 20', function () {
        const arg1 = 100;
        const arg2 = 20;
        sendPaymentRequestToApi(arg1, arg2);
        expect(spy.calledWith('The total is: 120')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });
    it('test will call sendPaymentRequestToAPI with 10, and 10', function () {
        const arg1 = 10;
        const arg2 = 10;
        sendPaymentRequestToApi(arg1, arg2);
        expect(spy.calledWith('The total is: 20')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });
});
