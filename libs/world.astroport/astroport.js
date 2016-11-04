var astroport = function(request, response) {
    var result = {
        ship1: request.body.ship1,
        ship2: request.body.ship2,
        ship3: request.body.ship3
    };

    result.ship1 = typeof result.ship1 == 'undefined' ? '-- None --' : result.ship1;
    result.ship2 = typeof result.ship2 == 'undefined' ? '-- None --' : result.ship2;
    result.ship3 = typeof result.ship3 == 'undefined' ? '-- None --' : result.ship3;

    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.html', result);
};

module.exports = astroport;