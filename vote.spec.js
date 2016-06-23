/*global describe, it, inject, expect, angular */
(function () {
    'use strict';
    
    describe('vote', function () {
        beforeEach(module('vote'));
    
        var voteController;
    
        beforeEach(inject(function(_$controller_){
            voteController = _$controller_('voteController');
            
            // Initialize Controller
            voteController.ngModel = {};
            voteController.key = "<topic-key>";
            voteController.user = "<user-key>";
            voteController.callbackOnYes = function(){
                angular.noop();
            };
            voteController.callbackOnNo = function(){
                angular.noop();
            };
            voteController.init();
        }));
        
        afterEach(function () {
            voteController = null;
        });
        
        it('onYes() should increase yes vote', function () {
            // Call once
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 1, 
                    no: 0, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // Call twice
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 2, 
                    no: 0, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // Call trice
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 3, 
                    no: 0, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // The ngModel should equal to voteCount
            expect(voteController.ngModel).toEqual(voteController.voteCount["<topic-key>"]);
        });
        
        it('onNo() should increase no vote', function () {
            // Call once
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 0, 
                    no: 1, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // Call twice
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 0, 
                    no: 2, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // Call trice
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 0, 
                    no: 3, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // The ngModel should equal to voteCount
            expect(voteController.ngModel).toEqual(voteController.voteCount["<topic-key>"]);
        });
        
        it('onYes() then onNo() should increase yes and no vote', function () {
            // Call once
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 1, 
                    no: 0, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // Call twice
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 1, 
                    no: 1, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // Call trice
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 2, 
                    no: 1, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // Call quadruple
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 2, 
                    no: 2, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
        });
        
        it('onNo() then onYes() should increase no and yes vote', function () {
            // Call once
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 0, 
                    no: 1, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // Call twice
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 1, 
                    no: 1, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // Call trice
            voteController.onNo();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 1, 
                    no: 2, 
                    yesUsers: [],
                    noUsers: ["<user-key>"]
                }
            });
            
            // Call quadruple
            voteController.onYes();
            expect(voteController.voteCount).toEqual({
                "<topic-key>": {
                    yes: 2, 
                    no: 2, 
                    yesUsers: ["<user-key>"],
                    noUsers: []
                }
            });
            
            // The ngModel should equal to voteCount
            expect(voteController.ngModel).toEqual(voteController.voteCount["<topic-key>"]);
        });
    });
}());