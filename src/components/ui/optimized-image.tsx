import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  sizes,
  style
}) => {
  // Generate WebP source path by replacing extension
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source 
        srcSet={webpSrc} 
        type="image/webp"
        sizes={sizes}
      />
      {/* Fallback for browsers that don't support WebP */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        sizes={sizes}
        style={style}
      />
    </picture>
  );
};

export default OptimizedImage;