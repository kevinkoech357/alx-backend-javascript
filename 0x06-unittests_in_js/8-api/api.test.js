const { describe, it } = require('mocha');
const expect = require('chai').expect;
const request = require('request');

describe('Checks if express app runs as expected', function () {
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
});
