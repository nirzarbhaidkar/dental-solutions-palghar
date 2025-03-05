
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  ttfb: number | null;
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    ttfb: null,
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // First Contentful Paint
    const reportFCP = () => {
      if (window.PerformanceObserver) {
        const fcpObserver = new PerformanceObserver(entryList => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            const fcp = entries[0].startTime;
            setMetrics(prev => ({ ...prev, fcp }));
            fcpObserver.disconnect();
          }
        });
        fcpObserver.observe({ type: 'paint', buffered: true });
      }
    };

    // Largest Contentful Paint
    const reportLCP = () => {
      if (window.PerformanceObserver) {
        const lcpObserver = new PerformanceObserver(entryList => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            const lcp = lastEntry.startTime;
            setMetrics(prev => ({ ...prev, lcp }));
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      }
    };

    // First Input Delay
    const reportFID = () => {
      if (window.PerformanceObserver) {
        const fidObserver = new PerformanceObserver(entryList => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            const firstInput = entries[0];
            const fid = firstInput.processingStart - firstInput.startTime;
            setMetrics(prev => ({ ...prev, fid }));
            fidObserver.disconnect();
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      }
    };

    // Cumulative Layout Shift
    const reportCLS = () => {
      if (window.PerformanceObserver) {
        let clsValue = 0;
        let clsEntries: PerformanceEntry[] = [];

        let sessionValue = 0;
        let sessionEntries: PerformanceEntry[] = [];
        let lastEntryTime = 0;

        const clsObserver = new PerformanceObserver(entryList => {
          const entries = entryList.getEntries();

          entries.forEach(entry => {
            // Only count layout shifts without recent user input
            if (!(entry as any).hadRecentInput) {
              const currentTime = entry.startTime;
              
              // Start a new session if more than 1 second since last entry
              if (lastEntryTime && currentTime - lastEntryTime > 1000) {
                // If this session has a higher CLS value, update the final value
                if (sessionValue > clsValue) {
                  clsValue = sessionValue;
                  clsEntries = sessionEntries;
                }
                
                // Reset for new session
                sessionValue = 0;
                sessionEntries = [];
              }
              
              // Add to current session
              sessionValue += (entry as any).value;
              sessionEntries.push(entry);
              
              // Update last entry time
              lastEntryTime = currentTime;
              
              // Update current CLS
              setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
            }
          });
        });

        clsObserver.observe({ type: 'layout-shift', buffered: true });
      }
    };

    // Initialize all observers
    reportFCP();
    reportLCP();
    reportFID();
    reportCLS();

    // Log performance metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        console.log('Performance Metrics:', metrics);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  return metrics;
};
