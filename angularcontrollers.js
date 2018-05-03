/*jslint white:true*/
/*global app, angular*/

(function () {
    'use strict';
    var app = angular.module('slideshow', ['slideshow-directives']);
    
    app.factory('gemService', function($http) {
        var gemService = {
            async: function() {
                var promise = $http.get('/angular-birds/slideshow-products.json').then(function (response) {
                return response.data;
                });
            return promise;
            }
        };
        return gemService;
    });
    
    app.factory('birdService', function($http) {
        var birdService = {
            async: function() {
                var promise = $http.get('/angular-birds/birds.json').then(function (response) {
                return response.data;
                });
            return promise;
            }
        };
        return birdService;
    });
    
    app.controller('aviaryController', function (birdService, $scope) {
        birdService.async().then(function (data) {
            $scope.birds = data;
        });
    });

    app.controller('CtrlEuler', function ($scope) {
        $scope.e = Math.E.toFixed(4);
        this.mathconstants = {
            e: Math.E.toFixed(5),
            pi: Math.PI.toFixed(5)
        };
    });
    
    app.controller('CtrlEuclid', function (birdService, $scope) {
        birdService.async().then(function (data) {
            $scope.desc = data[0].description;
        });
    });
    
}());

