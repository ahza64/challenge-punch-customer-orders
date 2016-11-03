
angular
  .module('punch')
  .controller('CustomersShowController', CustomersShowController);

CustomersShowController.$inject = ['$http', '$routeParams'];

function CustomersShowController (  $http,   $routeParams  ) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/customers/' + $routeParams.id
  }).then(function successCallback (json) {
    vm.customer = json.data;
    vm.customer = {
      name: "sample",
      orders: [
        {name: "beans"},
        {name: "juice"}
      ]
    }
  }, function errorCallback (res) {
    console.log('error retrieving customer data', res);
  });



}
