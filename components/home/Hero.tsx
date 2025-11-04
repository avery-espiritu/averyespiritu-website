import React from 'react';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
        Hi, I'm <span className="text-primary-600">Avery Espiritu</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-neutral-600 mb-4 max-w-3xl mx-auto">
        Computer Science Student & Software Engineer
      </p>
      
      <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
        Building ethical, accessible technology at the intersection of AI, education, and social impact.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button href="/about" variant="primary" size="lg">
          About Me
        </Button>
        <Button href="/projects" variant="secondary" size="lg">
          View Projects
        </Button>
      </div>
    </div>
  );
};

export default Hero;

