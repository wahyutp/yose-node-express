var _ = require('lodash');

var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
  if (_.isArray(request.query.number)) {
    var data = [];
    request.query.number.forEach(function(number) {
      data.push(generateData(number));
    });
    response.json(data);
  } else {
    response.json(generateData(request.query.number));
  }
};

function generateData(input) {
  var data;
  var number;
  try {
    number = parseInt(input);
    data = {
      number: number,
      decomposition: primeFactorsOf(number),
    };
  } catch (err) {
    data = {
      number: number || input,
      error: err.message,
    };
  }
  // console.log(data);
  return data;
}

module.exports = primeFactors;
