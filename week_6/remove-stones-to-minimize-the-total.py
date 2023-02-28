from heapq import heapify, heapreplace

class Solution(object):
    def minStoneSum(self, piles, k):
        pq = [-x for x in piles]
        heapify(pq)
        for _ in range(k): heapreplace(pq, pq[0]//2)
        return -sum(pq)
    
    print(minStoneSum(self, [5,4,9], 2))