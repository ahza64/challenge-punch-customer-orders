var db = require('../models');

function create (req, res) {
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    var newOrder = new db.Order(req.body);
    foundCustomer.orders.push(newOrder);
    foundCustomer.save(function (err, savedOrder) {
      console.log("created new order", savedOrder);
      res.json(newOrder)
    })
  });
}


module.exports = {
  create: create
}
