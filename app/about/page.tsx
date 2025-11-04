import React from 'react';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import ValuesGrid from '@/components/about/ValuesGrid';
import Badge from '@/components/ui/Badge';
import { aboutData } from '@/data/about';

export default function About() {
  return (
    <>
      {/* Hero Section with Headshot */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-8xl">
              👤
            </div>
          </div>
          
          {/* Intro */}
          <div className="flex-1">
            <Heading level={1} className="mb-4">
              {aboutData.name}
            </Heading>
            <p className="text-2xl text-primary-600 font-medium mb-4">
              {aboutData.tagline}
            </p>
            <p className="text-lg text-neutral-700">
              {aboutData.bio[0]}
            </p>
          </div>
        </div>
      </Section>
      
      {/* Bio Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading level={2} centered className="mb-8">
            About Me
          </Heading>
          <div className="space-y-6 text-lg text-neutral-700">
            {aboutData.bio.slice(1).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Education */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <Heading level={2} centered className="mb-8">
            Education
          </Heading>
          <Card>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                {aboutData.education.degree}
              </h3>
              <p className="text-xl text-primary-600 font-medium mb-1">
                {aboutData.education.school}
              </p>
              <p className="text-neutral-600">
                {aboutData.education.year}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                Areas of Focus:
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {aboutData.education.focus.map((area) => (
                  <Badge key={area} variant="primary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      {/* Values */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <Heading level={2} centered className="mb-8">
            My Values
          </Heading>
          <ValuesGrid values={aboutData.values} />
        </div>
      </Section>
      
      {/* Interests */}
      <Section className="bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} centered className="mb-8">
            Interests & Passions
          </Heading>
          <div className="flex flex-wrap justify-center gap-3">
            {aboutData.interests.map((interest) => (
              <Badge key={interest} variant="accent">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

