import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'FastAPI + Svelte Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master FastAPI, Svelte, Python, TypeScript, and full-stack development with our intensive 13-week bootcamp',
}

export default function FastAPISvelteCoursePage() {
  return (
    <CourseLayout title="FastAPI + Svelte Full-Stack Development Codecamp">
      <Image src="/fastapi-svelte-logo.png" alt="FastAPI + Svelte Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the FastAPI and Svelte ecosystem. The course covers FastAPI, Svelte, Python, TypeScript, 
            and related technologies. Students will work on five progressive projects throughout the course, each 
            integrated with the units to provide hands-on application of learned skills.
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
            <li>Build full-stack applications using FastAPI and Svelte</li>
            <li>Write type-safe code with TypeScript and Python type hints</li>
            <li>Design and develop RESTful APIs using FastAPI</li>
            <li>Create reactive and efficient user interfaces with Svelte</li>
            <li>Integrate and query databases using SQLAlchemy</li>
            <li>Implement authentication and authorization in FastAPI applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain FastAPI applications on cloud platforms</li>
            <li>Optimize FastAPI and Svelte applications for performance</li>
            <li>Develop scalable and maintainable web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>FastAPI</li>
            <li>Svelte</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>SQLAlchemy</li>
            <li>Pydantic</li>
            <li>JWT Authentication</li>
            <li>pytest</li>
            <li>Cypress</li>
            <li>Deta or Heroku</li>
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
            <li>Development Environment Setup</li>
            <li>HTML and CSS Fundamentals</li>
            <li>JavaScript Fundamentals</li>
            <li>TypeScript Fundamentals</li>
            <li>Svelte Fundamentals</li>
            <li>FastAPI Fundamentals</li>
            <li>Database Design and Integration with SQLAlchemy</li>
            <li>Authentication and Authorization with FastAPI</li>
            <li>Advanced API Development with FastAPI</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with Deta or Heroku</li>
            <li>Performance Optimization</li>
            <li>Advanced FastAPI and Svelte Integration</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire FastAPI and Svelte ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack FastAPI + Svelte Developer</li>
          <li>Python Backend Developer</li>
          <li>Svelte Frontend Specialist</li>
          <li>API Developer</li>
          <li>DevOps Engineer (specializing in Python-based deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of FastAPI and Svelte full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
