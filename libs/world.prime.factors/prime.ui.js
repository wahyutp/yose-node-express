var prime = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('prime.html');
};

module.exports = prime;