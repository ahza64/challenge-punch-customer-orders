angular
  .module('punch')
  .controller('CustomerIndexController', CustomerIndexController);

CustomerIndexController.$inject = ['$http'];
function CustomerIndexController (  $http  ) {
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


}
