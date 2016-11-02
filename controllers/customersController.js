
var db = require('../models');

function index (req, res) {
  db.Customer.find({}, function (err, allCustomers) {
    console.log(allCustomers);
    res.json(allCustomers);
  });
  // res.json({name: 'david'});
}

module.exports = {
  index: index
};
