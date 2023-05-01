/**
 * basket을 Map으로 과일을 key, 과일의 개수를 value로 저장하면서 window의 시작점 i와 끝점 j를 이동시킵니다. 
 * basket의 크기가 2 이하이면서 새로운 과일을 선택할 수 있는 경우에는 basket에 과일을 추가하고 j를 증가시킵니다. 
 * basket의 크기가 2 이하이면서 이미 선택한 과일 중 하나를 선택한 경우에는 j를 증가시킵니다. 
 * basket의 크기가 3 이상인 경우에는 Map에서 과일의 개수를 업데이트하여 개수가 0이 되면 해당 과일을 Map에서 제거합니다.
 * window의 시작점 i를 증가시킵니다.
 * 마지막으로, 마지막 window에서 선택한 과일의 수를 계산하여 maxFruits에 저장합니다. 
**/

function totalFruit(fruits: number[]): number {
    let maxFruits = 0;
    let basket = new Map<number, number>(); // 선택한 과일의 개수를 저장하는 Map
    let i = 0; // window 시작점
    let j = 0; // window 끝점

    while (j < fruits.length) {
        if (basket.size <= 1 || basket.has(fruits[j])) {
            // 새로운 과일을 선택할 수 있는 경우
            basket.set(fruits[j], (basket.get(fruits[j]) ?? 0) + 1);
            j++;
        } else if (basket.size === 2 && !basket.has(fruits[j])) {
        // window의 크기가 2인 경우, 새로운 과일을 선택할 수 없는 경우
        maxFruits = Math.max(maxFruits, j - i);
        while (basket.size === 2) {
            const count: number = basket.get(fruits[i]) || 0;
            if (count === 1) {
                basket.delete(fruits[i]);
            } else {
                basket.set(fruits[i], count - 1);
            }
            i++;
        }
        }
    }

    maxFruits = Math.max(maxFruits, j - i); // 마지막 window에서 선택한 과일의 수 계산
    return maxFruits;
 }