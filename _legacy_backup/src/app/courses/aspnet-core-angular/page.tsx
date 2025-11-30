import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';
import Image from 'next/image';

export const metadata = {
  title: 'ASP.NET Core + Angular Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master ASP.NET Core, Angular, C#, and full-stack development with our intensive 13-week bootcamp',
}

export default function ASPNETCoreAngularCoursePage() {
  return (
    <CourseLayout title="ASP.NET Core + Angular Full-Stack Development Codecamp">
      <Image src="/aspnet-angular-logo.png" alt="ASP.NET Core + Angular Logo" width={300} height={150} className="mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the ASP.NET Core and Angular ecosystems. The course covers ASP.NET Core, Angular, C#, and related technologies. 
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
            <li>Build full-stack applications using ASP.NET Core and Angular</li>
            <li>Write efficient and maintainable C# code</li>
            <li>Implement server-side rendering and API development with ASP.NET Core</li>
            <li>Design and develop RESTful APIs using ASP.NET Core Web API</li>
            <li>Integrate and query databases using SQL Server and Entity Framework Core</li>
            <li>Implement authentication and authorization in ASP.NET Core applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain ASP.NET Core applications on Azure</li>
            <li>Optimize ASP.NET Core and Angular applications for performance</li>
            <li>Develop internationalized and accessible web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>ASP.NET Core</li>
            <li>Angular</li>
            <li>C#</li>
            <li>SQL Server</li>
            <li>Entity Framework Core</li>
            <li>TypeScript</li>
            <li>Azure</li>
            <li>xUnit and Jasmine</li>
            <li>Protractor</li>
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
            <li>C# Fundamentals</li>
            <li>ASP.NET Core Fundamentals</li>
            <li>Angular Fundamentals</li>
            <li>Database Design and Integration</li>
            <li>Authentication and Authorization</li>
            <li>API Development with ASP.NET Core</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with Azure</li>
            <li>Performance Optimization</li>
            <li>Advanced ASP.NET Core and Angular Concepts</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire ASP.NET Core and Angular ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack ASP.NET Core Developer</li>
          <li>Angular Specialist</li>
          <li>C# Backend Developer</li>
          <li>ASP.NET Core API Developer</li>
          <li>DevOps Engineer (specializing in Azure deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of ASP.NET Core and Angular full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
