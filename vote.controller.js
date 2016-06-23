/*global angular */
(function () {
    'use strict';
    
    function VoteController(voteService) {
        var self = this;
        
        function init() {
            voteService.init(self.key, self.ngModel);
        }
        init();
        
        function onYes() {
            voteService.addYesVote(self.key, self.user);
            self.callbackOnYes();
        }
        
        function onNo() {
            voteService.addNoVote(self.key, self.user);
            self.callbackOnNo();
        }
        
        function test() {
            console.log(self.ngModel);
        }
        
        // Need counter?
        // Should have separate service/factory?
        self.init       = init;
        self.onYes      = onYes;
        self.onNo       = onNo;
        self.voteCount  = voteService.voteCount;
    }
    
    VoteController.$inject = ['voteService'];
    
    angular.module('vote').controller('voteController', VoteController);
}());