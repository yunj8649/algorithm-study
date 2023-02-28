from heapq import heapify, heapreplace

def minStoneSum(piles, k):
    pq = [-x for x in piles]
    heapify(pq)
    for _ in range(k): heapreplace(pq, pq[0]//2)
    return -sum(pq)
    
print(minStoneSum([5,4,9], 2))