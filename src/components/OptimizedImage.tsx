
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  placeholderColor = "#f3f4f6",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor: placeholderColor }}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-400">
          Image not available
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
