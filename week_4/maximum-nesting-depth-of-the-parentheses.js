/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let max = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }
        if(s[i] === ')'){
            stack.pop();
        }
        if(stack.length > max){
            max = stack.length;
        }
    }
    return max;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))