import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'Phoenix + React Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master Phoenix, React, Elixir, TypeScript, and full-stack development with our intensive 13-week bootcamp',
}

export default function PhoenixReactCoursePage() {
  return (
    <CourseLayout title="Phoenix + React Full-Stack Development Codecamp">
      <Image src="/phoenix-react-logo.png" alt="Phoenix + React Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the Phoenix and React ecosystem. The course covers Phoenix, React, Elixir, TypeScript, and related technologies. 
            Students will work on five progressive projects throughout the course, each integrated with the units to 
            provide hands-on application of learned skills.
          </p>
        </CourseSection>

        <CourseSection title="Course Details">
          <ul className="list-disc list-inside text-gray-700">
            <li>Total length: 13 weeks</li>
            <li>5 integrated projects</li>
            <li>Comprehensive curriculum covering full-stack development</li>
          </ul>
        </CourseSection>

        <CourseSection title="Learning Objectives">
          <ul className="list-disc list-inside text-gray-700">
            <li>Build full-stack applications using Phoenix and React</li>
            <li>Write functional and concurrent code with Elixir</li>
            <li>Develop type-safe frontend code with TypeScript and React</li>
            <li>Design and implement RESTful APIs using Phoenix</li>
            <li>Integrate and query databases using Ecto</li>
            <li>Implement authentication and authorization in Phoenix applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain Phoenix applications on Gigalixir</li>
            <li>Optimize Phoenix and React applications for performance</li>
            <li>Develop scalable and maintainable enterprise-grade applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Phoenix</li>
            <li>React</li>
            <li>Elixir</li>
            <li>TypeScript</li>
            <li>Ecto</li>
            <li>Guardian</li>
            <li>ExUnit</li>
            <li>Gigalixir</li>
            <li>Docker</li>
          </ul>
        </CourseSection>

        <CourseSection title="Projects">
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Portfolio</li>
            <li>Blog Application</li>
            <li>E-commerce Platform</li>
            <li>Task Management Application</li>
            <li>Social Media Dashboard (Capstone Project)</li>
          </ul>
        </CourseSection>

        <CourseSection title="Course Structure">
          <p className="text-gray-700 mb-2">The bootcamp is divided into 13 units:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Development Environment Setup for Phoenix and React</li>
            <li>HTML and CSS Fundamentals</li>
            <li>Elixir Fundamentals</li>
            <li>TypeScript Fundamentals</li>
            <li>React Fundamentals for Phoenix Integration</li>
            <li>Phoenix Fundamentals</li>
            <li>Database Design and Integration with Ecto</li>
            <li>Authentication and Authorization with Guardian</li>
            <li>Advanced API Development with Phoenix</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with Gigalixir</li>
            <li>Performance Optimization</li>
            <li>Advanced Phoenix and React Integration</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire Phoenix and React ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack Phoenix/React Developer</li>
          <li>Elixir Backend Developer</li>
          <li>React Frontend Specialist</li>
          <li>Phoenix API Developer</li>
          <li>DevOps Engineer (specializing in Phoenix deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of Phoenix and React full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
