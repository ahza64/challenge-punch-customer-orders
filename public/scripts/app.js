
angular
  .module('punch', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/customers',
      controllerAs: 'customerIndexCtrl',
      controller: 'CustomerIndexController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
