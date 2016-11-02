
var db = require('./models');

var customer1 = { name: 'from db'};

db.Customer.remove({}, function (err, customer) {
  db.Customer.create(customer1, function(err, customer) {
    if (err) {return console.log(err);}
    console.log('created customer', customer);
    process.exit();
  });
});
