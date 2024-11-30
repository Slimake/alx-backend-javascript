const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  it('correct status code', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('correct result', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.body).to.equal('Welcome to the payment system');
    });
  });
});
