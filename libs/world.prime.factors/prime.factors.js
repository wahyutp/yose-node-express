var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

  try {
    response.json({
      number: parseInt(request.query.number),
      decomposition: primeFactorsOf(parseInt(request.query.number)),
    });
  } catch (err) {
    response.json({
      number: request.query.number,
      error: err.message
    });
  }
  // response.setHeader('Content-Type', 'application/json');
  //   response.send({ number: number, decomposition: decomposition });



};

module.exports = primeFactors;
