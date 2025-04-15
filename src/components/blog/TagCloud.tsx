
import React from 'react';
import { Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { blogPosts } from '@/data/blogPosts';

const TagCloud = () => {
  const allTags = blogPosts.flatMap(post => post.tags || []);
  const tagCount = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(tagCount));

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm mb-8">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Tag className="w-4 h-4 mr-2" />
        Popular Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {Object.entries(tagCount).map(([tag, count]) => {
          const fontSize = (count / maxCount) * 0.5 + 0.8; // Scale between 0.8 and 1.3
          return (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-pointer",
                "flex items-center gap-1"
              )}
              style={{ fontSize: `${fontSize}rem` }}
            >
              {tag}
              <span className="text-xs text-primary/60">({count})</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TagCloud;
