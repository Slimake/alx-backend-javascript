const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('test the result when success is true', function (done) {
    const token = getPaymentTokenFromAPI(true);
    done();
  });
});
