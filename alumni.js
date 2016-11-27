var mongoose = require('mongoose');
var Category = require('./category');

var alumniSchema = {
  name: { 
    type: String, 
    required: true 
  },
  gradyear: {
    type: String,
    enum:['2014','2015','2016'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobtitle: {
    type: String,
    required: true
  },
  pay: {
    amount: { 
      type: Number, 
      required: true 
    },
    currency: {
      type: String,
      enum: ['USD', 'INR'],
      required: true
    }
  },
  category: Category.categorySchema
};

module.exports = new mongoose.Schema(alumniSchema);
module.exports.alumniSchema = alumniSchema;