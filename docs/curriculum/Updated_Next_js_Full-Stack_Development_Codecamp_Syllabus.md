---
title: Next.js 15 Full-Stack Codecamp Syllabus
status: approved
type: curriculum
---

# Next.js 15 Full-Stack Development Codecamp (NJ01FS-2025)

## Course Overview

This intensive 13-week (91-day) bootcamp is designed to transform beginners into production-ready full-stack developers, specializing in Next.js 15, React, TypeScript, and Google Cloud Platform (GCP). The course emphasizes industry-standard practices including Docker containerization, cloud deployment, and modern authentication patterns. Students will work on five comprehensive projects throughout the course, each building upon skills learned in previous units.

## Company Tech Stack Alignment

This course is specifically designed to prepare students for professional development work using:
- **Frontend**: Next.js 15, React 18+, TypeScript
- **Backend**: Next.js API Routes, Server Actions, Server Components
- **Databases**: Google Cloud SQL (PostgreSQL), Firebase/Firestore
- **Authentication**: Auth.js (NextAuth v5)
- **Deployment**: Docker containers on Google Cloud Platform (Cloud Run, App Engine)
- **CI/CD**: GitHub Actions with GCP integration
- **Styling**: Tailwind CSS, shadcn/ui components

## Course Structure

The bootcamp is divided into 15 units, each focusing on specific technologies and concepts. Units follow standardized codes for easy reference:

1. **DEV101**: Development Environment Setup (3 days)
2. **HTML101**: HTML and CSS Fundamentals (5 days)
3. **JSC201**: JavaScript Fundamentals (7 days)
4. **TSC301**: TypeScript Fundamentals (5 days)
5. **REA401**: React Fundamentals (10 days)
6. **NEX601**: Next.js 15 Fundamentals (10 days)
7. **STY701**: Styling with Tailwind CSS and shadcn/ui (5 days)
8. **DBM801**: Database Design and Integration (8 days)
9. **AUT901**: Authentication with Auth.js (5 days)
10. **API1001**: API Development with Next.js (7 days)
11. **TES1101**: Testing and Quality Assurance (7 days)
12. **DOC1201**: Docker and Containerization (5 days)
13. **DEP1301**: Deployment on Google Cloud Platform (7 days)
14. **OPT1401**: Performance Optimization (5 days)
15. **CAP1501**: Capstone Project (12 days)

## Project-Based Learning

Throughout the course, you will work on five progressive projects that integrate skills learned in each unit:

### Project 1: Personal Portfolio & Blog (Units 1-5)
**Duration**: Days 1-35
- Static portfolio with responsive design
- Dynamic blog with TypeScript
- React components and state management
- Introduction to Next.js routing

**Key Skills**: HTML, CSS, JavaScript, TypeScript, React basics, Next.js fundamentals

### Project 2: E-commerce Product Catalog (Units 6-8)
**Duration**: Days 36-58
- Server-side rendered product listings
- Shopping cart with client-side state
- Database integration with Cloud SQL
- Product search and filtering

**Key Skills**: Next.js App Router, Server Components, Database design, SQL queries, Tailwind CSS

### Project 3: Authentication & User Dashboard (Units 9-10)
**Duration**: Days 59-73
- User authentication with multiple providers
- Protected routes and API endpoints
- User profile management
- Role-based access control

**Key Skills**: Auth.js implementation, API route handlers, Server Actions, Security best practices

### Project 4: Real-time Collaborative Task Manager (Units 11-13)
**Duration**: Days 74-86
- Real-time updates using Firebase
- Comprehensive test coverage
- Docker containerization
- GCP deployment with CI/CD

**Key Skills**: Testing strategies, Docker, Cloud deployment, CI/CD pipelines, Real-time features

### Project 5: Full-Stack Capstone (Unit 15)
**Duration**: Days 87-91
- Student-designed full-stack application
- Integration of all learned technologies
- Production deployment on GCP
- Code review and presentation

**Key Skills**: Full-stack architecture, System design, Best practices implementation

## Daily Structure

Each day includes:
1. **Lecture and Concept Introduction** (1.5 hours)
2. **Comprehension Checks** (Throughout)
3. **Guided Coding Exercises** (2 hours)
4. **Project Work** (3 hours)
5. **Code Reviews and Discussions** (1.5 hours)

## Unit Breakdown

### Unit 1: DEV101 - Development Environment Setup (3 days)

**Learning Objectives:**
- Set up professional development environment
- Understand version control with Git and GitHub
- Initialize and structure Next.js projects
- Configure essential VS Code extensions

**Topics:**
- Day 1: VS Code setup, extensions (ESLint, Prettier, TypeScript), and workspace configuration
- Day 2: Git fundamentals, GitHub workflows, and collaborative development
- Day 3: Node.js, npm/pnpm, Next.js project initialization, and project structure overview

**Project Work**: Initialize Personal Portfolio project repository

---

### Unit 2: HTML101 - HTML and CSS Fundamentals (5 days)

**Learning Objectives:**
- Create semantic, accessible HTML documents
- Implement modern CSS layouts with Flexbox and Grid
- Apply responsive design principles
- Understand CSS Modules in Next.js

**Topics:**
- Day 4: HTML5 semantic elements, document structure, accessibility basics
- Day 5-6: CSS fundamentals, selectors, specificity, and the box model
- Day 7: Flexbox and CSS Grid for modern layouts
- Day 8: Responsive design with media queries and mobile-first approach

**Project Work**: Build basic portfolio structure with semantic HTML and responsive CSS

---

### Unit 3: JSC201 - JavaScript Fundamentals (7 days)

**Learning Objectives:**
- Master JavaScript syntax and core concepts
- Implement ES6+ features effectively
- Handle asynchronous operations
- Manipulate the DOM and handle events

**Topics:**
- Day 9: JavaScript basics, variables, data types, and operators
- Day 10: Functions, scope, closures, and the 'this' keyword
- Day 11: Arrays, objects, and modern array methods
- Day 12: ES6+ features (destructuring, spread/rest, template literals)
- Day 13: Asynchronous JavaScript (callbacks, Promises, async/await)
- Day 14: DOM manipulation and event handling
- Day 15: Modules, imports/exports, and error handling

**Project Work**: Add interactive features to portfolio (form validation, dynamic content)

---

### Unit 4: TSC301 - TypeScript Fundamentals (5 days)

**Learning Objectives:**
- Understand TypeScript's type system and its benefits
- Define and use interfaces and type aliases
- Implement generics for reusable code
- Configure TypeScript in Next.js projects

**Topics:**
- Day 16: TypeScript introduction, basic types, and type inference
- Day 17: Interfaces, type aliases, and union/intersection types
- Day 18: Generics and utility types
- Day 19: TypeScript with React (typing props, state, events)
- Day 20: Advanced TypeScript patterns and configuration

**Project Work**: Convert portfolio project to TypeScript, start Blog application with TypeScript

---

### Unit 5: REA401 - React Fundamentals (10 days)

**Learning Objectives:**
- Build component-based user interfaces
- Manage state and side effects with hooks
- Implement context for global state
- Apply React best practices and patterns

**Topics:**
- Day 21-22: React basics, JSX, components, and props
- Day 23-24: State management with useState and useReducer
- Day 25-26: Side effects with useEffect and cleanup
- Day 27-28: Context API, custom hooks, and composition patterns
- Day 29-30: Performance optimization (React.memo, useMemo, useCallback)

**Project Work**: Build reusable blog components, implement state management for blog features

---

### Unit 6: NEX601 - Next.js 15 Fundamentals (10 days)

**Learning Objectives:**
- Understand Next.js App Router architecture
- Implement file-based routing with dynamic routes
- Leverage Server Components and Client Components effectively
- Master data fetching strategies
- Optimize images and fonts

**Topics:**
- Day 31-32: Next.js 15 introduction, App Router vs Pages Router, project structure
- Day 33-34: Routing (layouts, pages, dynamic routes, route groups)
- Day 35-36: Server Components vs Client Components, when to use each
- Day 37-38: Data fetching (server-side, client-side, streaming)
- Day 39-40: Image and Font optimization, Metadata API, SEO

**Project Work**: Implement routing for e-commerce catalog, create product pages with SSR

---

### Unit 7: STY701 - Styling with Tailwind CSS and shadcn/ui (5 days)

**Learning Objectives:**
- Master Tailwind CSS utility-first approach
- Customize Tailwind configuration
- Integrate and customize shadcn/ui components
- Implement consistent design systems

**Topics:**
- Day 41-42: Tailwind CSS fundamentals, utility classes, responsive design
- Day 43: Tailwind configuration, custom themes, and design tokens
- Day 44-45: shadcn/ui component library integration and customization

**Project Work**: Style e-commerce catalog with Tailwind, integrate shadcn/ui components

---

### Unit 8: DBM801 - Database Design and Integration (8 days)

**Learning Objectives:**
- Design efficient database schemas
- Integrate Google Cloud SQL (PostgreSQL)
- Use Prisma ORM for type-safe database access
- Implement Firebase/Firestore for real-time features
- Perform complex queries and optimize performance

**Topics:**
- Day 46-47: Relational database concepts, normalization, schema design
- Day 48-49: Google Cloud SQL setup, Prisma ORM configuration
- Day 50-51: CRUD operations, relationships, and migrations with Prisma
- Day 52-53: Firebase/Firestore introduction, real-time data, and use cases

**Project Work**: Design and implement e-commerce database (products, categories, inventory)

---

### Unit 9: AUT901 - Authentication with Auth.js (5 days)

**Learning Objectives:**
- Implement Auth.js (NextAuth v5) in Next.js 15
- Configure multiple authentication providers
- Secure routes and API endpoints
- Implement role-based access control
- Handle sessions and JWT tokens

**Topics:**
- Day 54: Auth.js setup and configuration in Next.js 15
- Day 55: OAuth providers (Google, GitHub, etc.)
- Day 56: Email authentication and credentials provider
- Day 57: Session management, middleware, and protected routes
- Day 58: Role-based access control and authorization

**Project Work**: Implement authentication system for user dashboard application

---

### Unit 10: API1001 - API Development with Next.js (7 days)

**Learning Objectives:**
- Design and build RESTful APIs with Route Handlers
- Implement Server Actions for mutations
- Validate and sanitize user input
- Handle errors and edge cases
- Document APIs effectively

**Topics:**
- Day 59-60: Route Handlers (GET, POST, PUT, DELETE)
- Day 61-62: Server Actions for form submissions and mutations
- Day 63: Data validation with Zod, error handling
- Day 64-65: API security, rate limiting, and best practices

**Project Work**: Build API endpoints for user dashboard (user management, data operations)

---

### Unit 11: TES1101 - Testing and Quality Assurance (7 days)

**Learning Objectives:**
- Write unit tests with Jest and React Testing Library
- Implement integration tests for API routes
- Perform end-to-end testing with Playwright
- Apply test-driven development (TDD)
- Set up continuous integration

**Topics:**
- Day 66-67: Unit testing React components with Jest and RTL
- Day 68: Testing Next.js Server Components and Client Components
- Day 69: Integration testing for API routes and Server Actions
- Day 70-71: E2E testing with Playwright, CI setup with GitHub Actions
- Day 72: Code coverage, testing best practices

**Project Work**: Implement comprehensive test suite for task manager application

---

### Unit 12: DOC1201 - Docker and Containerization (5 days)

**Learning Objectives:**
- Understand Docker concepts and benefits
- Create Dockerfiles for Next.js applications
- Use Docker Compose for local development
- Optimize Docker images for production
- Debug containerized applications

**Topics:**
- Day 73: Docker introduction, images, containers, and volumes
- Day 74: Creating Dockerfile for Next.js application
- Day 75: Docker Compose for multi-container setups (app + database)
- Day 76-77: Optimization, multi-stage builds, and debugging

**Project Work**: Containerize task manager application with Docker

---

### Unit 13: DEP1301 - Deployment on Google Cloud Platform (7 days)

**Learning Objectives:**
- Deploy Next.js applications to GCP Cloud Run
- Configure Cloud SQL for production
- Set up environment variables and secrets
- Implement CI/CD with GitHub Actions
- Monitor and debug production applications

**Topics:**
- Day 78-79: GCP overview, Cloud Run deployment, Cloud SQL setup
- Day 80-81: Environment configuration, secrets management with Secret Manager
- Day 82-83: CI/CD pipelines with GitHub Actions and GCP
- Day 84: Monitoring, logging with Cloud Logging, error tracking

**Project Work**: Deploy task manager to GCP with automated CI/CD pipeline

---

### Unit 14: OPT1401 - Performance Optimization (5 days)

**Learning Objectives:**
- Measure and improve Core Web Vitals
- Implement code splitting and lazy loading
- Optimize database queries
- Use caching strategies effectively
- Profile and debug performance issues

**Topics:**
- Day 85: Core Web Vitals, Lighthouse, performance measurement
- Day 86: Code splitting, dynamic imports, lazy loading
- Day 87: Database query optimization, indexing, connection pooling
- Day 88-89: Caching strategies (HTTP caching, React cache, Redis integration)

**Project Work**: Optimize task manager application performance

---

### Unit 15: CAP1501 - Capstone Project (12 days)

**Learning Objectives:**
- Design and architect a full-stack application
- Implement all learned technologies cohesively
- Present and defend technical decisions
- Deliver production-ready code

**Topics:**
- Day 90: Project planning, architecture design, database schema
- Day 91: Project implementation (full autonomy with instructor guidance)

**Project Work**: 
- Design and build a complete full-stack application
- Implement authentication, database integration, and API design
- Deploy to GCP with Docker and CI/CD
- Present project and code review

---

## Learning Outcomes

By the end of this bootcamp, you will be able to:

1. Build production-ready full-stack applications using Next.js 15 and React
2. Write type-safe code with TypeScript across frontend and backend
3. Implement Server Components, Client Components, and streaming effectively
4. Design and develop RESTful APIs and Server Actions
5. Integrate with Google Cloud SQL and Firebase/Firestore databases
6. Implement secure authentication with Auth.js (NextAuth v5)
7. Write comprehensive tests (unit, integration, E2E)
8. Containerize applications with Docker
9. Deploy and maintain Next.js applications on Google Cloud Platform
10. Implement CI/CD pipelines with GitHub Actions
11. Optimize applications for performance and scalability
12. Debug and monitor production applications
13. Follow industry best practices and coding standards
14. Work effectively with version control and collaborative development

## Prerequisites

- Basic computer literacy
- Familiarity with using a web browser and text editor
- No prior programming experience required
- Willingness to learn and practice daily
- Access to a modern computer with internet connection

## Required Tools and Accounts

- VS Code (or preferred code editor)
- Git installed locally
- Node.js (LTS version)
- Google Cloud Platform account (free tier available)
- GitHub account
- Firebase account
- Docker Desktop

## Assessment and Evaluation

Students are evaluated on:
- Daily participation and comprehension checks (20%)
- Project completion and quality (40%)
- Unit challenges and exercises (20%)
- Final capstone project (20%)

## Post-Course Preparation

This course prepares you for:
- Junior/Mid-level Full-Stack Developer positions
- Next.js specialized roles
- Modern web application development
- Working with cloud-native applications
- Continuing education in advanced topics (microservices, advanced cloud architecture)

## Course Maintenance and Updates

This curriculum is designed to be:
- Updated quarterly to reflect Next.js updates
- Aligned with current Google Cloud Platform services
- Informed by industry best practices and student feedback
- Adaptable to individual student learning pace through LLM instruction

---

**License**: CC-BY-SA-4.0

**Course Code**: NJ01FS-2025

**Last Updated**: November 2025

**Next Review**: February 2026
