const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('test the result when success is true', function (done) {
    getPaymentTokenFromAPI(true).
    then(({data}) => {
      expect(data).to.equal('Successful response from the API');
      done();
    });
  });
});
