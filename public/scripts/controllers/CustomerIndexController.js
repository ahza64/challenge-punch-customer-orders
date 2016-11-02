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
}
