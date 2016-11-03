primeFactorsOf = function(number) {
  var factors = [];
  var power = Math.log(number) / Math.log(2);
  for (var i = 0; i < power; i++) {
    factors.push(2);
  }
  return factors;
};

module.exports = primeFactorsOf;
