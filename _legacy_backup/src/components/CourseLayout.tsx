import React from 'react';
import Hero from './Hero';
import Footer from './Footer';

interface CourseLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function CourseLayout({ title, children }: CourseLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
