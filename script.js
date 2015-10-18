var app = angular.module("computer", ['ngRoute'])
//the array shows the dependency needed in this app.

.config(['$routeProvider', function($routeProvider){
  //dependency injected for the configuration of the web app
  $routeProvider.
    when('/main', { //=>when the url says /main
      templateUrl: 'main.html', //=> render this template
      controller: 'MainCtrl' //=> and bring about this controller
    }).otherwise({redirectTo:'/main'})
    // we define if nothing is routed so ng-view will display /main
    //the above code basically setup the routes
    
}])

.controller('MainCtrl', [ '$scope',function($scope){
  console.log('This is the MainCtrl'); 
}]);