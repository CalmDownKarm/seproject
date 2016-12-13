//Mocha or TDD File to test the server. 
var app = require('./server'); //Use our server.js file. 
var assert = require('assert'); //Matches Equality
var superagent = require('superagent'); //HTTP Client to send requests

describe('server', function() {
  var server;

  beforeEach(function() {
    server = app().listen(3000);
  }); //Spawn server on our thread before each test

  afterEach(function() {
    server.close();
  }); //kill server test on thread after each test

  it('prints out "Hello, world" when user goes to /', function(done) {
    superagent.get('http://localhost:3000/', function(error, res) {
      assert.ifError(error);
      assert.equal(res.status, 200);
      assert.equal(res.text, "Hello, world!");
      done();
    });  
  });
});
