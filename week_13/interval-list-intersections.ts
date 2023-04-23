function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let i: number = 0;
    let j: number = 0;
    const result: number[][] = [];

    while (i < firstList.length && j < secondList.length) {
        const [startA, endA] = firstList[i];
        const [startB, endB] = secondList[j];

        if (startA <= endB && startB <= endA) {
            result.push([Math.max(startA, startB), Math.min(endA, endB)])
        }

        if (endA <= endB) {
            i += 1;
        } else {
            j += 1;
        }
    }

    return result;
};

const firstList = [[0,2],[5,10],[13,23],[24,25]];
const secondList = [[1,5],[8,12],[15,24],[25,26]];

console.log(intervalIntersection(firstList, secondList));
// ex) output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]