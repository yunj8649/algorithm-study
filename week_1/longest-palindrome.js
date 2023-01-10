var longestPalindrome = function(s) {
    let arr = s.split('').sort();
    let count = 0;

    let compare = null;
    for(let i = 0; i < arr.length; i++) {
        if (compare) {
            if (compare === arr[i]) {
                count += 2
                compare = null;
            } else {
                compare = arr[i]
            }
        } else {
            compare = arr[i]
        }
    }
    if (arr.length > count) count += 1

    return count;
};

console.log(longestPalindrome('abccccdd'))

/** NO
 * 1. palindrome 단어를 판별하는 함수 > isPalindrome
 * 2. 파라미터로 받은 알파벳으로 단어 생성(가장 긴 단어부터 생성)
 * 3. 생성한 단어를 isPalindrome로 palindrome인지 확인
 * 4. palindrome라면 해당 단어 길이 리턴
 */

/** NO
 * 1. 주어진 문자열이 홀수인지 짝수인지 판별
 * 2. 홀수이면 (문자열길이/2 + 1)만큼, 짝수이면 (문자열길이/2)만큼 돌림
 * 3. 같은 문자가 있는지 확인 (with. indexOf)
 * 4. 있으면 count + 1
 * 5. count 리턴
 * cf. 재귀함수 생각도 했음 근데 굳이..?
 */