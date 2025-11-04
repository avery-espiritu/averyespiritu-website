import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerClassName = '',
  id 
}) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;

