/*global angular */
(function () {
    'use strict';
    
    angular.module('vote').component('vote', {
        templateUrl: 'js/vote/vote.html',
        bindings: {
            ngModel: '@',
            key: '=',
            user: '=',
            yes: '@',
            no: '@',
            showUnique: '@',
            showTotal: '@',
            callbackOnYes: '&',
            callbackOnNo: '&'
        },
        controller: 'voteController'
    });
}());