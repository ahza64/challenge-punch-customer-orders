
var db = require('../models');

function index (req, res) {
  db.Customer.find({}, function (err, allCustomers) {
    console.log(allCustomers);
    res.json(allCustomers);
  });
}

function create (req, res) {
  db.Customer.create(req.body, function (err, customer) {
    if (err) {console.log("error posting customer", err);}
    console.log(customer);
    res.json(customer);
  })
}

function destroy (req, res) {
  db.Customer.findOneAndRemove({ _id: req.params.custid}, function (err, foundCustomer) {
    res.json(foundCustomer);
  })
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy
};
