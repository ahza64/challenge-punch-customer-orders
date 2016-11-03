
angular
  .module('punch')
  .controller('CustomersIndexController', CustomersIndexController);

CustomersIndexController.$inject = ['$http'];
function CustomersIndexController (  $http  ) {
  var vm = this;
  var customers = [];
  vm.newCustomer = {
    name: "Bob"
  };

  $http({
    method: 'GET',
    url: '/customers'
  }).then(function successCallback(res) {
    vm.customers = res.data;
  }, function errorCallback(res) {
    console.log("response err from db", res);
  });

vm.createCustomer = function () {
  $http({
    method: 'POST',
    url: '/customers',
    data: vm.newCustomer
  }).then(function successCallback (res) {
    vm.customers.push(res.data);
  }, function errorCallback (res) {
    console.log("customer post err", res);
  });
};

vm.editCustomer = function (customer) {
  $http({
    method: 'PUT',
    url: '/customers/' + customer._id,
    data: customer
  }).then(function successCallback (json) {

  }, function errorCallback (res) {
    console.log("edit error", res);
  })
}

vm.deleteCustomer = function (customer) {
  $http({
    method: 'DELETE',
    url: '/customers/' + customer._id
  }).then(function successCallback (json) {
    var index = vm.customers.indexOf(customer);
    vm.customers.splice(index, 1);
  }, function errorCallback (res) {
    console.log("error deleting", res);
  });
};


}
