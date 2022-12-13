const PLAYERS: number = 4;
const ROUNDS: number = 10;

// determine next suit in game
// INPUT: CURRENT HAND 
// OUTPUT: NEXT HAND 
export const yieldSuit = (currentHand: string): string => {
    const suits = 'SDHCN';
    let start: number = ROUNDS;
    const ordering: string[] = [];
    for (let count: number = 0; count < start; count++) {
        const suit: string = suits[count % suits.length] // index out of bounds
        const round: string = (start - count) + suit;
        ordering.push(round);
    }
    console.log(ordering);
    let indexOfCurrent = ordering.indexOf(currentHand);
    console.log(ordering[indexOfCurrent+1]);
    return ordering[indexOfCurrent + 1];
};

// TODO create stopping / TODO create increasing
export const yieldHands = (currentHand: string): number => {
    const current: number = parseInt(currentHand.replace(/[a-z]/gi,'')); // strip letters, parse remnant 
    return current - 1; // && DIMINISH!!
};

export const playerStart = (currentFirst: number): number => {

    return 0;
}



yieldSuit('4D');    
yieldSuit('1N');    

console.log(yieldHands(yieldSuit('6N')));