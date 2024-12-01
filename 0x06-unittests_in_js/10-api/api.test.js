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

describe('Cart route', () => {
  it('correct status code', () => {
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

describe('login route', () => {
  before(() => {
    options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };
  });
  it('correct status code', () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('correct result', () => {
    request(options, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
    });
  });
});

describe('available_payments route', () => {
  it('correct status code', () => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('correct result', () => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      const bod = JSON.parse(res.body);
      expect(bod).to.deep.equal({payment_methods:{credit_cards:true,paypal:false}});
    });
  });
});
