//Mongoose Schema for the alumni collection in Mongodb
var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

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
      required: true,
      set: function(v){
        v / (fx()[this.price.currency]||1);
        return v;
      }
    },
    currency: {
      type: String,
      enum: ['USD', 'INR'],
      required: true,
      set: function(v){
        this.internal.approximatePriceUSD = this.price.amount / (fx()[v]||1);
        return v;
      }
    }
  },
  category: Category.categorySchema,
  internal:{
    approximatePriceUSD: Number
  }
};

module.exports = new mongoose.Schema(alumniSchema);
module.exports.alumniSchema = alumniSchema;