
angular
  .module('punch')
  .controller('CustomersShowController', CustomersShowController);

CustomersShowController.$inject = ['$http', '$routeParams'];

function CustomersShowController (  $http,   $routeParams  ) {
  var vm = this;
  vm.newOrder = {};

  $http({
    method: 'GET',
    url: '/customers/' + $routeParams.id
  }).then(function successCallback (json) {
    vm.customer = json.data;
  }, function errorCallback (res) {
    console.log('error retrieving customer data', res);
  });

vm.createOrder = function () {
  $http({
    method: 'POST',
    url: '/customers/' + $routeParams.id + '/orders',
    data: vm.newOrder
  }).then(function successCallback (json) {
    vm.customer.orders.push(json.data);
    vm.newOrder = {};
  }, function errorCallback (res) {
    console.log("order create error", res);
  });
}


}
