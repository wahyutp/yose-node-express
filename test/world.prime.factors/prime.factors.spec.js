var chai = require('chai');
var expect = chai.expect;

var primeFactorsOf = require('../../libs/world.prime.factors/lib/prime.factors.of');

describe('Prime factors decomposition', function() {

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
});
