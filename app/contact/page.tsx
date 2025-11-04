import React from 'react';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'avery@example.com',
      link: 'mailto:avery@example.com',
      description: 'Best for detailed inquiries and collaboration opportunities',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/averyespiritu',
      link: 'https://linkedin.com/in/averyespiritu',
      description: 'Connect with me professionally',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/avery-espiritu',
      link: 'https://github.com/avery-espiritu',
      description: 'Check out my code and open-source contributions',
    },
  ];
  
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={1} centered className="mb-6">
            Get in Touch
          </Heading>
          <p className="text-xl text-neutral-600">
            I'm always open to discussing new opportunities, collaborations, or just 
            having a conversation about tech and social impact. Feel free to reach out!
          </p>
        </div>
      </Section>
      
      {/* Contact Methods */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => (
            <Card key={idx} className="text-center">
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {method.title}
              </h3>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium transition-smooth block mb-3"
              >
                {method.value}
              </a>
              <p className="text-sm text-neutral-600">
                {method.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Resume Download */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Download My Resume
            </h3>
            <p className="text-neutral-600 mb-6">
              Want to learn more about my experience and qualifications? 
              Download my resume for a comprehensive overview.
            </p>
            <Button 
              href="/resume/resume.pdf" 
              variant="primary" 
              size="lg"
              external
            >
              Download Resume
            </Button>
          </Card>
        </div>
      </Section>
      
      {/* Optional: Availability Note */}
      <Section className="bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            Current Availability
          </h3>
          <p className="text-lg text-neutral-700 mb-6">
            I'm currently open to summer 2025 internship opportunities in software 
            engineering and AI/ML. I'm particularly interested in roles that focus on 
            ethical technology, accessibility, and social impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="mailto:avery@example.com" variant="primary" size="lg" external>
              Let's Connect
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View My Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

