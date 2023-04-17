class LFUCache {
    private minCount;
    private keyValues;
    private countKeys;
    private capacity;

    constructor(capacity: number) {
        this.minCount = 0;
        this.keyValues = new Map();
        this.countKeys = new Map();
        this.capacity = capacity;
    }

    incrementCount(key: any, newValue = undefined) {
        let { value, count } = this.keyValues.get(key);

        if (newValue) value = newValue;
        this.keyValues.set(key, { value, count: count + 1 });
        
        const set = this.countKeys.get(count);
        set.delete(key);
      
        if (set.size === 0) {
          this.countKeys.delete(count);
          if (this.minCount === count) this.minCount += 1;
        } else {
          this.countKeys.set(count, set); 
        }
      
        this.countKeys.set(count + 1, (this.countKeys.get(count + 1) || new Set()).add(key));
        
        return value;
    }

    get(key: number): number {
        if (!this.keyValues.has(key)) return -1;
        return this.incrementCount(key);
    }

    put(key: any, value: any): void {
        if (this.capacity === 0) return;
  
        if (this.keyValues.has(key)) {
            this.incrementCount(key, value);
            return;
        }
            
        if (this.keyValues.size === this.capacity) {
            const set = this.countKeys.get(this.minCount);
            const keyToDelete = set.values().next().value;
            set.delete(keyToDelete);
            
            if (set.size === 0) {
                this.countKeys.delete(this.minCount);
            } else {
                this.countKeys.set(this.minCount, set); 
            }

            this.keyValues.delete(keyToDelete);
        }

        const count = 1;
        this.keyValues.set(key, { value, count });
        this.countKeys.set(count, (this.countKeys.get(count) || new Set()).add(key));
        this.minCount = count;  
    }
}


var cache = new LFUCache(2 /* capacity */ );


console.log('cache.put(1, 1): ', cache.put(1, 1));
console.log('cache.put(2, 2): ', cache.put(2, 2));
console.log('cache.get(1): ', cache.get(1)); // returns 1
console.log('cache.get(1): ', cache.get(1)); // returns 1
console.log('cache.get(1): ', cache.get(1)); // returns 1
console.log('cache.get(1): ', cache.get(1)); // returns 1
console.log('cache.put(3, 3): ', cache.put(3, 3)); // evicts key 2
console.log('cache.get(2): ', cache.get(2)); // returns -1 (not found)
console.log('cache.get(3): ', cache.get(3)); // returns 3.
console.log('cache.put(4, 4): ', cache.put(4, 4)); // evicts key 1.
console.log('cache.get(1): ', cache.get(1)); // returns -1 (not found)
console.log('cache.get(3): ', cache.get(3)); // returns 3
console.log('cache.get(4): ', cache.get(4)); // returns 4