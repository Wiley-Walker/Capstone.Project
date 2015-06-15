'use strict';

// Declare app level module which depends on filters, and services

var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/index.html',
      controller: 'mycontroller'
    }).
    when('/legislator', {
      templateUrl: 'views/legislator.html',
      controller: 'legislatorsctrl'
    }).
    when('/tenday',{
      templateUrl: 'views/tenday.html',
      controller:'tendayctrl'
    }).
    when('/webcams',{
      templateUrl: 'views/webcam.html',
      controller: 'webcamsctrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

 