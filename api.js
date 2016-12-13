var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

  /*api.get('/',wagner.invoke(function(Jobs){
    return function(req,res){
      res.send("Hello World");
    }
  }));*/
  

  api.get('/jobs/', wagner.invoke(function(Jobs) {
    return function(req, res) {
      Jobs.find({}, function(error, jobs) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!jobs) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ Jobs: Jobs });
      });
    };
  }));
/*
  api.get('/jobs/parent/:id', wagner.invoke(function(Jobs) {
    return function(req, res) {
      Jobs.
        find({ parent: req.params.id }).
        sort({ _id: 1 }).
        exec(function(error, jobs) {
          if (error) {
            return res.
              status(status.INTERNAL_SERVER_ERROR).
              json({ error: error.toString() });
          }
          res.json({ Jobs: Jobs });
        });
    };
  }));
  */

  return api;
};
