const { describe, it } = require('mocha');
const expect = require('chai').expect;
const request = require('request');

describe('Index Page', function () {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET'
  };

  it('Ascertains if status code is 200', function (done) {
    request(options, function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Ascertains if content is as expected', function (done) {
    request(options, function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('Ascertains if content length is as expected', function (done) {
    request(options, function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });

  describe('Cart Page', function () {
    it('Returns correct status code when :id is a number', function (done) {
      request('http://localhost:7865/cart/123', function (err, res, body) {
        if (err) {
          return done(err);
        }
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('Returns correct status code when :id is NOT a number (=> 404)', function (done) {
      request('http://localhost:7865/cart/abc', function (err, res, body) {
        if (err) {
          return done(err);
        }
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
