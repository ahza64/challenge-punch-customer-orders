
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
    console.log(json.data);
    vm.customer = json.data;
  }, function errorCallback (res) {
    console.log('error retrieving customer data', res);
  });



}
