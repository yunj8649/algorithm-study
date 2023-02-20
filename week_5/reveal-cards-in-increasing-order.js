/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = deck => {
    deck.sort((a, b) => a - b);
    const ans = [];
    while (deck.length) {
        ans.unshift(deck.pop());
        ans.unshift(ans.pop());
    }
    ans.push(ans.shift());
    return ans;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
// expect : [2,13,3,11,5,17,7]