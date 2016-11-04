var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var browser = new Browser();
var server  = require('../libs/server');

describe('Passing the astroport name test:', function() {

    var testServer;

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    /* Astroport Test */
    it("include a#contact-me-link", function(done){
        browser.visit("http://localhost:7000", function(err) {
            browser.assert.element('#contact-me-link');

            done();
        });
    });

    /* Gates Test */
    it("include #gate and #ship", function(done){
        browser.visit("http://localhost:7000/astroport", function(err) {
            browser.assert.element('#gate-1');
            browser.assert.element('#gate-2');
            browser.assert.element('#gate-3');
            browser.assert.element('#gate-1 #ship-1');
            browser.assert.element('#gate-2 #ship-2');
            browser.assert.element('#gate-3 #ship-3');

            done();
        });
    });

    it('answers with text/html header', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(response.headers['content-type']).to.equal('text/html');
            done();
        });
    });

    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'Astroport' );
            done();
        });
    });

    /* Docker */
    it("include #ship and #dock", function(done){
        browser.visit("http://localhost:7000/astroport", function(err) {
            browser.assert.element('#ship');
            browser.assert.element('#dock');

            done();
        });
    });

    it("should display ship1 name on #ship1 after #dock clicked", function(done){
        var opts = {url: 'http://localhost:7000/astroport', method: 'post'};
        request(opts, function (err, res, body) {
            // you will need to customize the assertions below based on your server
            // expect(body).to.contain( 'Astroport' );

            done();
        });
    });

});