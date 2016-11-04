primeFactorsOf = function(number) {
  var factors = [];
  if (!parseInt(number)) {
    throw new Error('not a number');
  }
  var primes = getPrimes(number);

  primes.forEach(function(prime) {
    while (number % prime === 0) {
      factors.push(prime);
      number = number / prime;
    }
  });

  return factors;
};

function getPrimes(max) {
  var sieve = [],
    i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

module.exports = primeFactorsOf;
