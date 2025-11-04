import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Project Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-t-lg mb-4 flex items-center justify-center">
        <span className="text-6xl">{project.id}📱</span>
      </div>
      
      {/* Project Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-neutral-600 mb-3">
          <span className="font-medium">Role:</span> {project.role}
        </p>
        
        <p className="text-neutral-700 mb-4 flex-1">
          {project.description}
        </p>
        
        {/* Impact Metric */}
        <div className="bg-success-50 border border-success-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-success-800 font-medium">
            📊 {project.impact}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-smooth"
            >
              View Project →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-700 text-sm font-medium transition-smooth"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

