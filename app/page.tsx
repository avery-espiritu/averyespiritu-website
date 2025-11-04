import React from 'react';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Hero from '@/components/home/Hero';
import QuickStats from '@/components/home/QuickStats';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 via-white to-white">
        <Hero />
      </Section>
      
      {/* Quick Stats */}
      <Section>
        <QuickStats />
      </Section>
      
      {/* Featured Projects */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-12">
          <Heading level={2} centered>
            Featured Projects
          </Heading>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work in software engineering, AI, and accessible technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/projects" variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </Section>
    </>
  );
}

