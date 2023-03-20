// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// ']'이 나오면 '['이 나올때 까지 pop한 후 [ 다음에 나오는 숫자만큼 반복한후 다시 stack에 push 해준다
// 이때, 숫자는 십의 자리수 이상도 될 수 있다는 것을 주의해야한다.

// 문자가 숫자일 때, 반복해야할 횟수를 구해 stack에 저장합니다. 문자열을 순차적으로 탐색하기 때문에 연달아서 숫자가 있는 경우 10의자리, 100의자리 순으로 반복 횟수가 늘어나게 됩니다.
// 문자가 여는 대괄호([)일 때, 결과를 저장할 stack에 여태까지의 문자열을 저장합니다.
// 문자가 닫는 대괄호(])일 때, 결과 stack에 저장된 문자열을 pop하여 반복 횟수 stack의 top에 있는 횟수만큼 반복하여 append 합니다.
// 문자가 그냥 알파벳일 경우 결과에 더해줍니다.

var decodeString = function(s) {
    // 숫자 스택 (숫자 [1, 300] 가능)
    let num = '';
    // 문자열
    const stack = [];
    // 숫자만큼 반복해야할 값
    let currentStr = '';

    for (let i = 0; i < s.length; ++i) {
        console.log(s[i]);
        if (s[i] === '[') {
            stack.push(num);
            stack.push(currentStr);
            currentStr = '';
        } else if (s[i] === ']') {
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(Number(num));
            num = '';
        } else if (!Number.isNaN(Number(s[i]))) {
            num += s[i];
        } else {
            currentStr += s[i];
        }
        console.log('stack : ' , stack);
        console.log('num : ', num);
        console.log('currentStr : ', currentStr);
    }

    return currentStr;
}

console.log(decodeString('3[a]2[bc]'));
