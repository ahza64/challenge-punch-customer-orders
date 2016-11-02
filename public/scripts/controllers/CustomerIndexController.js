angular
  .module('punch')
  .controller('CustomerIndexController', CustomerIndexController);

CustomerIndexController.$inject = ['$http'];
function CustomerIndexController (  $http  ) {
  var vm = this;

  vm.newCustomer = {
    name: "Bob"
  };

  vm.customers = [
    {name: "susan"},
    {name: "john"}
  ];

  $http({
    method: 'GET',
    url: '/customers'
  }).then(function successCallback(res) {
    vm.newCustomer = res.data;
  }, function errorCallback(res) {
    console.log("response err from db", res);
  });
}
