var contact = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('contact.html');
};

module.exports = contact;