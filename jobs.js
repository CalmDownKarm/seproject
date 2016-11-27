var mongoose = require('mongoose');
var Category = require('./category');

var jobSchema = {
  title: { type: String, required: true },
  location:{type: String, required: true},
  pay: {
    amount: { type: Number, required: true },
    currency: {
      type: String,
      enum: ['USD', 'INR'],
      required: true
    }
  },
  company:{type: String, required: true},
  
  category: Category.categorySchema
};

module.exports = new mongoose.Schema(jobSchema);
module.exports.jobSchema = jobSchema;