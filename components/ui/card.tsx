import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverEffect = hover ? 'hover:card-shadow-hover cursor-pointer' : '';

  return (
    <div className={`bg-white rounded-xl card-shadow transition-smooth p-card ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

