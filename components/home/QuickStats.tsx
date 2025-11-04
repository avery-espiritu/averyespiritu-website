import React from 'react';
import Card from '@/components/ui/Card';

const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: '🎓',
      title: 'Brown University',
      description: 'Computer Science Student',
    },
    {
      icon: '💼',
      title: 'TrueMark AI',
      description: 'Software Engineer Intern',
    },
    {
      icon: '👨‍🏫',
      title: 'Teaching Assistant',
      description: 'CS410 & CS200',
    },
    {
      icon: '🌟',
      title: 'Community Leader',
      description: 'Bruno Fellow & Orientation',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} className="text-center">
          <div className="text-4xl mb-3">{stat.icon}</div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-1">
            {stat.title}
          </h3>
          <p className="text-sm text-neutral-600">
            {stat.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;

