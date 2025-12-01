import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'Spring Boot + React Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master Spring Boot, React, Java, TypeScript, and full-stack development with our intensive 13-week bootcamp',
}

export default function SpringReactCoursePage() {
  return (
    <CourseLayout title="Spring Boot + React Full-Stack Development Codecamp">
      <Image src="/spring-react-logo.png" alt="Spring Boot + React Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the Spring Boot and React ecosystem. The course covers Spring Boot, React, Java, TypeScript, 
            and related technologies. Students will work on five progressive projects throughout the course, each integrated 
            with the units to provide hands-on application of learned skills.
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
            <li>Build full-stack applications using Spring Boot and React</li>
            <li>Write type-safe frontend code with TypeScript</li>
            <li>Develop robust and scalable backend services with Spring Boot</li>
            <li>Design and implement RESTful APIs using Spring MVC</li>
            <li>Integrate and query databases using Spring Data JPA</li>
            <li>Implement authentication and authorization in Spring Boot applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain Spring Boot applications on AWS</li>
            <li>Optimize Spring Boot and React applications for performance</li>
            <li>Develop scalable and maintainable enterprise-grade applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Spring Boot</li>
            <li>React</li>
            <li>Java</li>
            <li>TypeScript</li>
            <li>Spring Data JPA</li>
            <li>Spring Security</li>
            <li>Redux Toolkit</li>
            <li>Material-UI</li>
            <li>JUnit and Mockito</li>
            <li>AWS</li>
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
            <li>React Fundamentals for Spring Boot Integration</li>
            <li>Java Fundamentals</li>
            <li>Spring Boot Fundamentals</li>
            <li>Database Design and Integration with Spring Data JPA</li>
            <li>Authentication and Authorization with Spring Security</li>
            <li>Advanced API Development with Spring Boot</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with AWS</li>
            <li>Advanced Spring Boot Concepts and Integration</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire Spring Boot and React ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack Spring Boot + React Developer</li>
          <li>Java Backend Developer</li>
          <li>React Frontend Developer</li>
          <li>Spring Boot Specialist</li>
          <li>DevOps Engineer (specializing in Spring Boot deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of Spring Boot and React full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
