"use strict";
exports.__esModule = true;
exports.yieldHands = exports.yieldSuit = void 0;
var PLAYERS = 4;
var ROUNDS = 10;
// determine next suit in game
// INPUT: CURRENT HAND 
// OUTPUT: NEXT HAND 
var yieldSuit = function (currentHand) {
    var suits = 'SDHCN';
    var start = ROUNDS;
    var ordering = [];
    for (var count = 0; count < start; count++) {
        var suit = suits[count % suits.length]; // index out of bounds
        var round = (start - count) + suit;
        ordering.push(round);
    }
    console.log(ordering);
    var indexOfCurrent = ordering.indexOf(currentHand);
    console.log(ordering[indexOfCurrent + 1]);
    return ordering[indexOfCurrent + 1];
};
exports.yieldSuit = yieldSuit;
var yieldHands = function (currentHand) {
    var current = parseInt(currentHand.replace(/[a-z]/gi, '')); // strip letters, parse remnant 
    return current - 1; // && DIMINISH!!
};
exports.yieldHands = yieldHands;
(0, exports.yieldSuit)('4D');
(0, exports.yieldSuit)('1N');
console.log((0, exports.yieldHands)((0, exports.yieldSuit)('6N')));
