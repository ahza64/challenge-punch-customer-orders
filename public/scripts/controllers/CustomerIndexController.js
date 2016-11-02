angular
  .module('punch')
  .controller('CustomerIndexController', CustomerIndexController);

CustomerIndexController.$inject = ['$http'];
function CustomerIndexController (  $http  ) {
  var vm = this;

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
}
