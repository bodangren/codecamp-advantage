import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'Django + React Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master Django, React, Python, and full-stack development with our intensive 13-week bootcamp',
}

export default function DjangoReactCoursePage() {
  return (
    <CourseLayout title="Django + React Full-Stack Development Codecamp">
      <Image src="/django-react-logo.png" alt="Django + React Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the Django and React ecosystems. The course covers Django, React, Python, and related technologies. 
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
            <li>Build full-stack applications using Django and React</li>
            <li>Write efficient and maintainable Python code</li>
            <li>Implement server-side rendering and API development with Django</li>
            <li>Design and develop RESTful APIs using Django REST Framework</li>
            <li>Integrate and query databases using PostgreSQL and Django ORM</li>
            <li>Implement authentication and authorization in Django applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain Django applications on AWS</li>
            <li>Optimize Django and React applications for performance</li>
            <li>Develop internationalized and accessible web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Django</li>
            <li>React</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>Django REST Framework</li>
            <li>AWS</li>
            <li>Git and GitHub</li>
            <li>PyTest and React Testing Library</li>
            <li>Selenium</li>
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
            <li>Python Fundamentals</li>
            <li>Django Fundamentals</li>
            <li>React Fundamentals for Django</li>
            <li>Database Design and Integration</li>
            <li>Authentication and Authorization with Django</li>
            <li>API Development with Django</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with AWS</li>
            <li>Performance Optimization</li>
            <li>Advanced Django and React Concepts</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire Django and React ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack Django Developer</li>
          <li>React Specialist</li>
          <li>Python Backend Developer</li>
          <li>Django REST Framework API Developer</li>
          <li>DevOps Engineer (specializing in Django deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of Django and React full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
