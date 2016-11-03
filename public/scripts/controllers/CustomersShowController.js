
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

vm.deleteOrder = function (order) {
  $http({
    method: 'DELETE',
    url: '/customers/' + $routeParams.id + '/orders/' + order._id
  }).then(function successCallback (json) {
    var index = vm.customer.orders.indexOf(order);
    vm.customer.orders.splice(index, 1);
  }, function errorCallback (res) {
    console.log("order delete error", res);
  });
}

vm.editOrder = function (order) {
  $http({
    method: 'PUT',
    url: '/customers/' + $routeParams.id + '/orders/' + order._id,
    data: order
  }).then(function successCallback (json) {

  }, function errorCallback (res) {
    console.log("error editing order", res);
  });
}

}
