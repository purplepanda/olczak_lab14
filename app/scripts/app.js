var app = angular.module("medicineCards", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/animal1', {
            controller: 'mainCtrl',
            templateUrl: 'partials/animal1.html'
        })
        .when('/animal2', {
            controller: 'mainCtrl',
            templateUrl: 'partials/animal2.html'
        })
        .when('/animal3', {
            controller: 'mainCtrl',
            templateUrl: 'partials/animal3.html'
        })
        .when('/animal4', {
            controller: 'mainCtrl',
            templateUrl: 'partials/animal4.html'
        })
        .when('/animal5', {
            controller: 'mainCtrl',
            templateUrl: 'partials/animal5.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
