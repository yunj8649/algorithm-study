function specialArray(nums: number[]): number {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i ++) {
        const rest = nums.length - i;
        if (rest <= nums[i]) {
            if (i == 0) {
                return rest;
            } else {
                if (nums[i - 1] < rest) {
                    return rest;
                } else {
                    return -1;
                }
            }
        }
    }

    return -1;
};

console.log(specialArray([0,4,3,0,4]));
// expect: Output: 3