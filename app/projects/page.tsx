import React from 'react';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={1} centered className="mb-6">
            Projects
          </Heading>
          <p className="text-xl text-neutral-600">
            A collection of software engineering and AI projects I've built, 
            focused on creating ethical, accessible, and impactful technology.
          </p>
        </div>
      </Section>
      
      {/* Projects Grid */}
      <Section>
        <ProjectGrid projects={projects} />
      </Section>
    </>
  );
}

