var kthSmallest = function(matrix, k) {
    return matrix.flat().sort((a, b) => a - b)[k - 1];
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));