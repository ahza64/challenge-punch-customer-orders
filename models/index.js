var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/punch');

var Customer = require('./customer');

module.exports.Customer = Customer;
