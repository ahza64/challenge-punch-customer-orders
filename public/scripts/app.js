
angular
  .module('punch', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/customers',
      controllerAs: 'customersIndexCtrl',
      controller: 'CustomersIndexController'
    })
    .when('/customers', {
      templateUrl: '/templates/customers',
      controllerAs: 'customersIndexCtrl',
      controller: 'CustomersIndexController'
    })
    .when('/customers/:id', {
      templateUrl: '/templates/customersShow',
      controllerAs: 'customersShowCtrl',
      controller: 'CustomersShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
