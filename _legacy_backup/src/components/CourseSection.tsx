import React from 'react';

interface CourseSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CourseSection({ title, children }: CourseSectionProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
