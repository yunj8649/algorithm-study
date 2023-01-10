
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (var k = nums.length - 1; k >= 1; k--) {
        for (var i = 0; i < k; i++) {
            if (nums[i] > nums[i + 1]) {
                swap(i, i + 1);
            } 
        }
    }
    function swap(i,j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
};

// expect: [1,2,3,5]
console.log(sortArray([5,2,3,1]));