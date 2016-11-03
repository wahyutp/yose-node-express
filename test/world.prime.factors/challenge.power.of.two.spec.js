var request = require('request');
var http = require('http');
var chai = require('chai');
var expect = chai.expect;
var server = require('../../libs/server');

describe('Passing the Power of Two level:', function() {

  var testServer;

  beforeEach(function(done) {
    testServer = http.createServer(server).listen(7000, done);
  });

  afterEach(function() {
    testServer.close();
  });

  it('returns the expected output', function(done) {
    request('http://localhost:7000/primeFactors?number=16', function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        "number": 16,
        "decomposition": [2, 2, 2, 2]
      });
      done();
    });
  });
  it('returns error when input is not number', function(done) {
    request('http://localhost:7000/primeFactors?number=hello', function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        "number": "hello",
        "error": "not a number"
      });
      done();
    });
  });

});
