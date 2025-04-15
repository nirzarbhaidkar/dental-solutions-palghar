
import React, { useEffect, useState } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const content = document.getElementById('blog-content');
      if (!content) return;

      const totalHeight = content.scrollHeight - content.clientHeight;
      const currentScroll = window.scrollY - content.offsetTop;
      const scrollPercentage = (currentScroll / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-primary transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
