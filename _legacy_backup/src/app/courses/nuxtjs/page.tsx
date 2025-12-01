import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'Nuxt.js Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master Nuxt.js, Vue.js, TypeScript, and full-stack development with our intensive 13-week bootcamp',
}

export default function NuxtJSCoursePage() {
  return (
    <CourseLayout title="Nuxt.js Full-Stack Development Codecamp">
      <Image src="/nuxt-js-logo.png" alt="Nuxt.js Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the Nuxt.js ecosystem. The course covers Nuxt.js, Vue.js, TypeScript, and related technologies. 
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
            <li>Build full-stack applications using Nuxt.js and Vue.js</li>
            <li>Write type-safe code with TypeScript</li>
            <li>Implement server-side rendering, static site generation, and incremental static regeneration</li>
            <li>Design and develop RESTful APIs using Nuxt.js API routes</li>
            <li>Integrate and query databases using Prisma</li>
            <li>Implement authentication and authorization in Nuxt.js applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain Nuxt.js applications on Netlify</li>
            <li>Optimize Nuxt.js applications for performance</li>
            <li>Develop internationalized and accessible web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Nuxt.js</li>
            <li>Vue.js</li>
            <li>TypeScript</li>
            <li>Prisma</li>
            <li>Nuxt Auth</li>
            <li>Tailwind CSS</li>
            <li>Jest and Vue Testing Library</li>
            <li>Cypress</li>
            <li>Netlify</li>
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
            <li>Vue.js Fundamentals</li>
            <li>Nuxt.js Fundamentals</li>
            <li>Database Design and Integration</li>
            <li>Authentication and Authorization with Nuxt Auth</li>
            <li>API Development with Nuxt.js</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with Netlify</li>
            <li>Performance Optimization</li>
            <li>Advanced Nuxt.js Concepts and Integration</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire Nuxt.js ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack Nuxt.js Developer</li>
          <li>Vue.js Specialist</li>
          <li>TypeScript Frontend Developer</li>
          <li>Backend Developer (Node.js)</li>
          <li>DevOps Engineer (specializing in Nuxt.js deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of Nuxt.js full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
