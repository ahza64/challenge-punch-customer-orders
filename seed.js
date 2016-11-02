
var db = require('./models');

var customerList = [];
customerList.push({name: 'from db'});
customerList.push({name: 'from db 2'});


db.Customer.remove({}, function (err, customer) {
  db.Customer.create(customerList, function(err, customer) {
    if (err) {return console.log(err);}
    console.log('created customer', customer);
    process.exit();
  });
});
