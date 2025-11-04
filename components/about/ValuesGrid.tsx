import React from 'react';
import Card from '@/components/ui/Card';

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ValuesGridProps {
  values: Value[];
}

const ValuesGrid: React.FC<ValuesGridProps> = ({ values }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {values.map((value, idx) => (
        <Card key={idx} className="text-center">
          <div className="text-5xl mb-4">{value.icon}</div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            {value.title}
          </h3>
          <p className="text-neutral-700">
            {value.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ValuesGrid;

