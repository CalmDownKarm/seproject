var mongoose = require('mongoose');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/database');

  var Jobs =
    mongoose.model('Jobs', require('./jobs'), 'jobs');
  var Alumni = 
  	mongoose.model('Alumni',require('./alumni'),'jobs'); 

  wagner.factory('Jobs', function() {
    return Jobs;
  });
  /*wagner.factory('Alumni', function() {
    return Alumni;
  });*/

  return {
    Jobs: Jobs 
    //Alumni: Alumni 
  };
};
