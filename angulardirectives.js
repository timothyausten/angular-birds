/*jslint white:true*/
/*global app, angular*/

(function(){
    'use strict';
    var app = angular.module('slideshow-directives', []);

    app.directive('birds', function() {
        return {
            restrict: 'E',
            templateUrl: 'birds.html'
        };
    });
    
    app.directive('euler', function() {
        return {
            restrict: 'E',
            templateUrl: 'euler.html'
        };
    });

    app.directive('euclid', function() {
        return {
            restrict: 'E',
            templateUrl: 'euclid.html'
        };
    });

    app.directive('centerimage', function() {
        return {
            restrict: 'E',
            templateUrl: 'centerimage.html'
        };
    });

}());
