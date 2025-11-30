import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'MERN Stack Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master MongoDB, Express.js, React, Node.js, and full-stack development with our intensive 13-week bootcamp',
}

export default function MERNCoursePage() {
  return (
    <CourseLayout title="MERN Stack Full-Stack Development Codecamp">
      <Image src="/mern-stack-logo.jpeg" alt="MERN Stack Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. The course covers all aspects of MERN 
            stack development, including JavaScript, React, Node.js, Express.js, and MongoDB. Students will work on five 
            progressive projects throughout the course, each integrated with the units to provide hands-on application of 
            learned skills.
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
            <li>Build full-stack applications using the MERN stack</li>
            <li>Write type-safe code with TypeScript for both frontend and backend</li>
            <li>Design and develop RESTful APIs using Express.js</li>
            <li>Implement authentication and authorization using JWT</li>
            <li>Work with NoSQL databases, specifically MongoDB, using Mongoose ODM</li>
            <li>Develop responsive and interactive user interfaces with React and state management libraries</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain MERN stack applications on cloud platforms</li>
            <li>Optimize MERN stack applications for performance</li>
            <li>Implement real-time features and GraphQL APIs in web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Redux and Redux Toolkit</li>
            <li>Mongoose ODM</li>
            <li>JWT for authentication</li>
            <li>Jest and React Testing Library</li>
            <li>Docker</li>
            <li>Heroku</li>
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
            <li>React Fundamentals for MERN Stack</li>
            <li>Express.js Fundamentals</li>
            <li>MongoDB and Mongoose</li>
            <li>Authentication and Authorization with JWT</li>
            <li>Advanced API Development with Express.js</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment</li>
            <li>Performance Optimization</li>
            <li>Advanced MERN Stack Concepts and Integration</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire MERN stack</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack MERN Developer</li>
          <li>React Specialist</li>
          <li>Node.js Backend Developer</li>
          <li>MongoDB Database Administrator</li>
          <li>DevOps Engineer (specializing in MERN stack deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of MERN stack full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
