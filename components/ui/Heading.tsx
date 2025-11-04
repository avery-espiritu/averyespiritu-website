import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  level = 2, 
  children, 
  className = '', 
  centered = false 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeStyles = {
    1: 'text-5xl md:text-6xl font-bold',
    2: 'text-4xl md:text-5xl font-bold',
    3: 'text-3xl md:text-4xl font-semibold',
    4: 'text-2xl md:text-3xl font-semibold',
  };
  
  const centerStyle = centered ? 'text-center' : '';
  
  return (
    <Tag className={`text-neutral-900 ${sizeStyles[level]} ${centerStyle} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;

