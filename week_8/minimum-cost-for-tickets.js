/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
    const lastDay = days[days.length - 1];
    const set = new Set(days);
    
    const dp = new Array(lastDay + 1).fill(0);
    
    for (let i = 1; i <= lastDay; i++) {
        if (!set.has(i)) dp[i] = dp[i - 1];
        else dp[i] = Math.min(
            dp[i - 1] + costs[0],
            dp[Math.max(0, i - 7)] + costs[1], 
            dp[Math.max(0, i - 30)] + costs[2]
        );
    }
    
    return dp[lastDay];
};

const days = [1,4,6,7,8,20];
const costs = [2,7,15];
// expect 11
console.log(mincostTickets(days, costs));