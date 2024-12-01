const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  it('correct status code for home route', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('correct result', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.body).to.equal('Welcome to the payment system');
    });
  });
  it('correct status code for cart route', () => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('incorrect status code when param is not an integer', () => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });
  it('correct result', () => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.body).to.equal('Payment methods for cart 12');
    });
  });
});
