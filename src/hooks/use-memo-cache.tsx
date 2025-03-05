
import { useState, useEffect, useCallback, useRef } from 'react';

interface CacheItem<T> {
  value: T;
  expiry: number;
}

/**
 * Cache implementation with expiration
 */
class MemoryCache {
  private cache: Map<string, CacheItem<any>> = new Map();
  
  /**
   * Set a value in the cache with expiration
   */
  set<T>(key: string, value: T, ttlMs: number = 5 * 60 * 1000): void {
    const expiry = Date.now() + ttlMs;
    this.cache.set(key, { value, expiry });
  }
  
  /**
   * Get a value from the cache
   */
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    // Item doesn't exist or has expired
    if (!item || Date.now() > item.expiry) {
      if (item) this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  /**
   * Clear the entire cache or a specific key
   */
  clear(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}

// Create a singleton instance
const globalCache = new MemoryCache();

/**
 * Hook for memoizing expensive values with caching
 */
export function useMemoCache<T>(
  key: string,
  factory: () => T | Promise<T>,
  dependencies: any[] = [],
  ttlMs: number = 5 * 60 * 1000
): { data: T | null; isLoading: boolean; error: Error | null; refresh: () => void } {
  const [data, setData] = useState<T | null>(() => globalCache.get<T>(key));
  const [isLoading, setIsLoading] = useState<boolean>(!data);
  const [error, setError] = useState<Error | null>(null);
  const factoryRef = useRef(factory);
  
  // Update the factory function reference when it changes
  useEffect(() => {
    factoryRef.current = factory;
  }, [factory]);
  
  // The function to compute or fetch the value
  const computeValue = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Get from cache first
      const cachedValue = globalCache.get<T>(key);
      if (cachedValue) {
        setData(cachedValue);
        setIsLoading(false);
        return;
      }
      
      // Compute or fetch the value
      const result = await factoryRef.current();
      
      // Store in cache and update state
      globalCache.set(key, result, ttlMs);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  }, [key, ttlMs]);
  
  // Refresh the data
  const refresh = useCallback(() => {
    globalCache.clear(key);
    computeValue();
  }, [key, computeValue]);
  
  // Compute the value when dependencies change
  useEffect(() => {
    computeValue();
  }, [computeValue, ...dependencies]);
  
  return { data, isLoading, error, refresh };
}

/**
 * Clear the entire cache or a specific key
 */
export function clearCache(key?: string): void {
  globalCache.clear(key);
}
