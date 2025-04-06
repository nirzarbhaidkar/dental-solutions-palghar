
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollProps<T> {
  initialItems: T[];
  itemsPerPage: number;
  threshold?: number;
}

export function useInfiniteScroll<T>({ 
  initialItems, 
  itemsPerPage, 
  threshold = 200 
}: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>(initialItems.slice(0, itemsPerPage));
  const [hasMore, setHasMore] = useState(initialItems.length > itemsPerPage);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);
  const allItemsRef = useRef<T[]>(initialItems);

  const loadMoreItems = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate network request with setTimeout
    setTimeout(() => {
      const nextPage = page + 1;
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newItems = allItemsRef.current.slice(startIndex, endIndex);
      
      setItems(prev => [...prev, ...newItems]);
      setPage(nextPage);
      setHasMore(endIndex < allItemsRef.current.length);
      setLoading(false);
    }, 500);
  }, [loading, hasMore, page, itemsPerPage]);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        loadMoreItems();
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: `0px 0px ${threshold}px 0px`
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreItems, hasMore, loading, threshold]);

  return { items, hasMore, loading, loaderRef };
}
