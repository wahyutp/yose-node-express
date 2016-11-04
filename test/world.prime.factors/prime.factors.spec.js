var chai = require('chai');
var http    = require('http');
var Browser = require('zombie');
var expect = chai.expect;
var browser = new Browser();
var server  = require('../../libs/server');

var primeFactorsOf = require('../../libs/world.prime.factors/lib/prime.factors.of');

describe('Prime factors decomposition', function() {

  var testServer;

  beforeEach(function(done) {
    testServer = http.createServer(server).listen(7000, done);
  });

  afterEach(function() {
    testServer.close();
  });

  it('can decompose 2', function() {
    expect(primeFactorsOf(2)).to.deep.equal([2, ]);
  });

  it('can decompose 8', function() {
    expect(primeFactorsOf(8)).to.deep.equal([2, 2, 2, ]);
  });

  it('can decompose 300', function() {
    expect(primeFactorsOf(300)).to.deep.equal([2, 2, 3, 5, 5, ]);
  });

  it('should error when not number', function() {
    expect(function() {
      primeFactorsOf('hello');
    }).to.throw('not a number');
  });

  it('should error when > 1000000', function() {
    expect(function() {
      primeFactorsOf(1000001);
    }).to.throw('too big number (>1e6)');
  });

  it("Prime factors : Form test", function(done){
    browser.visit("http://localhost:7000/primeFactors/ui", function() {
      browser.assert.element('#title');
      browser.assert.element('#invitation');
      browser.assert.element('input#number');
      browser.assert.element('button#go');

      done();
    });
  });
});
