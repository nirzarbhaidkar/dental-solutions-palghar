
/**
 * Load a script after a specified delay or when idle
 * @param src Script source URL
 * @param delay Delay in ms before loading (default: 1000ms)
 */
export const loadScriptDeferred = (src: string, delay = 1000): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    }, delay);
  });
};

/**
 * Prefetch a resource when browser is idle
 * @param url URL to prefetch
 * @param type Resource type (default: 'image')
 */
export const prefetchWhenIdle = (url: string, type: 'image' | 'style' | 'script' | 'document' = 'image'): void => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = type;
      link.href = url;
      document.head.appendChild(link);
    });
  } else {
    setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = type;
      link.href = url;
      document.head.appendChild(link);
    }, 2000);
  }
};

/**
 * Dynamically import a component only when needed
 * @param importFn Dynamic import function
 * @returns Component with loading state
 */
export const lazyImport = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return React.lazy(() => {
    return importFn().catch((error) => {
      console.error('Failed to load component:', error);
      return { default: (() => <div>Failed to load component</div>) as unknown as T };
    });
  });
};
