var mongoose = require('mongoose');
var _=require('underscore');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/database');

  var Jobs =
    mongoose.model('Jobs', require('./jobs'), 'jobs');
  var Alumni = 
  	mongoose.model('Alumni',require('./alumni'),'alumni'); 

  var models = {
  	Jobs: Jobs,
  	Alumni: Alumni
  };
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models
};
