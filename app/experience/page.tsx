import React from 'react';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import ExperienceCard from '@/components/experience/ExperienceCard';
import { experiences } from '@/data/experience';

export default function Experience() {
  const workExperience = experiences.filter(exp => exp.type === 'work');
  const teachingExperience = experiences.filter(exp => exp.type === 'teaching');
  const leadershipExperience = experiences.filter(exp => exp.type === 'leadership');
  
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={1} centered className="mb-6">
            Experience
          </Heading>
          <p className="text-xl text-neutral-600">
            My journey through software engineering, teaching, and leadership—building 
            skills and making an impact along the way.
          </p>
        </div>
      </Section>
      
      {/* Work Experience */}
      <Section>
        <Heading level={2} className="mb-8">
          Work Experience
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>
      
      {/* Teaching Experience */}
      <Section className="bg-neutral-50">
        <Heading level={2} className="mb-8">
          Teaching Experience
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teachingExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>
      
      {/* Leadership */}
      <Section>
        <Heading level={2} className="mb-8">
          Leadership & Community
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {leadershipExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>
    </>
  );
}

