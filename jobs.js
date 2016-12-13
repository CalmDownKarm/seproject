//Mongoose Schema for the Jobs Collection in MongoDB
var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

var jobSchema = {
  title: { 
  	type: String, 
  	required: true 
  },
  location: {
  	type: String, 
  	required: true
  },
  description:{
  	type: String,
  	required: true
  },
  contactemail:{
  	type: String,
  	required: true,
  	match: /.+@.+\..+/,
    lowercase: true

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
  company:{type: String, required: true},

  category: Category.categorySchema,
  internal:{
    approximatePriceUSD: Number
  }
};

module.exports = new mongoose.Schema(jobSchema);
module.exports.jobSchema = jobSchema;