import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const typeEmoji = {
    work: '💼',
    teaching: '👨‍🏫',
    leadership: '🌟',
  };
  
  const typeColor = {
    work: 'primary' as const,
    teaching: 'success' as const,
    leadership: 'accent' as const,
  };
  
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">{typeEmoji[experience.type]}</span>
            <Badge variant={typeColor[experience.type]}>
              {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-primary-600 font-medium mb-1">
            {experience.organization}
          </p>
          <p className="text-sm text-neutral-500">
            {experience.dates}
          </p>
        </div>
      </div>
      
      <p className="text-neutral-700 mb-4">
        {experience.description}
      </p>
      
      {/* Responsibilities */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="text-sm text-neutral-700 flex">
              <span className="text-primary-500 mr-2">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Skills */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Badge key={skill} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;

