from typing import List

def kthSmallest(matrix: List[List[int]], k: int) -> int:
    temp_arr=[]
    for i in matrix:
        temp_arr.extend(i)
    temp_arr.sort()
    return temp_arr[k-1]

print(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))