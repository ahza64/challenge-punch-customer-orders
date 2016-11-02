
var db = require('../models');

function index (req, res) {
  db.Customer.find({}, function (err, allCustomers) {
    console.log(allCustomers);
    res.json(allCustomers);
  });
}

module.exports = {
  index: index
};
