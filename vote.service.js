/*global angular */
(function () {
    'use strict';
    
    function VoteService() {
        
        // Private variables
        var self = this,
            voteCount = {};
        
        // Function implementations
        function init(key, model) {
            if (model) {
                voteCount[key] = model;
            }
        }
        
        function addYesVote(key, user) {
            try {
                // Increase total yes votes
                voteCount[key].yes += 1;
                
                // Remove user from yesUsers and noUsers to prevent duplicates
                voteCount[key].yesUsers = voteCount[key].yesUsers.filter(function (object) {
                    return object !== user;
                });
                voteCount[key].noUsers = voteCount[key].noUsers.filter(function (object) {
                    return object !== user;
                });
                
                // Add the user back to yesUsers
                voteCount[key].yesUsers.push(user);
                
            // Catch if voteCount[key] is undefined    
            } catch (error) {
                if (voteCount[key]) {
                    voteCount[key].yes = 1;
                    voteCount[key].no  = 0;
                    voteCount[key].yesUsers = [];
                    voteCount[key].noUsers  = [];
                } else {
                    voteCount[key] = {yes: 1, no: 0, yesUsers: [], noUsers: []};
                }
                
                voteCount[key].yesUsers.push(user);
            }
        }
        
        function addNoVote(key, user) {
            try {
                // Increase no votes
                voteCount[key].no += 1;
                
                // Remove user from yesUsers and noUsers to prevent duplicates
                voteCount[key].yesUsers = voteCount[key].yesUsers.filter(function (object) {
                    return object !== user;
                });
                voteCount[key].noUsers = voteCount[key].noUsers.filter(function (object) {
                    return object !== user;
                });
                
                // Add the user back to noUsers
                voteCount[key].noUsers.push(user);

            // Catch if voteCount[key] is undefined    
            } catch (error) {
                if (voteCount[key]) {
                    voteCount[key].yes = 0;
                    voteCount[key].no  = 1;
                    voteCount[key].yesUsers = [];
                    voteCount[key].noUsers  = [];
                } else {
                    voteCount[key] = {yes: 0, no: 1, yesUsers: [], noUsers: []};
                }
                
                voteCount[key].noUsers.push(user);
            }
        }
        
        // Public functions and variables
        self.init       = init;
        self.addYesVote = addYesVote;   // Pass key, user
        self.addNoVote  = addNoVote;    // Pass key, user
        self.voteCount  = voteCount;    // voteCount = {yes: 0, no: 0, yesUsers: [], noUsers: []}
    }
    
    VoteService.$inject = [];
    
    angular.module('vote').service('voteService', VoteService);
}());