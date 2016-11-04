var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

  try {
    response.json({
      number: parseInt(request.query.number),
      decomposition: primeFactorsOf(parseInt(request.query.number)),
    });
  } catch (err) {
    var number;
    if (parseInt(request.query.number)) {
      number = parseInt(request.query.number);
    } else {
      number = request.query.number;
    }
    response.json({
      number: number,
      error: err.message,
    });
  }
  // response.setHeader('Content-Type', 'application/json');
  //   response.send({ number: number, decomposition: decomposition });



};

module.exports = primeFactors;
