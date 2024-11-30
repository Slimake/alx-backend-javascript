const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('test the result when success is true', async function (done) {
    const token = getPaymentTokenFromAPI(true);
    done();
  });
});
