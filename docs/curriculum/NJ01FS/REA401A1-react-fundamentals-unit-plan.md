---
title: Unit REA401A1 - React Fundamentals
status: approved
type: curriculum
---

# Unit: React Fundamentals (REA401A1)

## Unit Overview

This 10-day unit introduces students to React, a popular JavaScript library for building user interfaces, with a focus on its use within Next.js applications. Students will learn core React concepts, including components, props, state, and hooks, while continuing to develop their Personal Portfolio project. By the end of this unit, students will be able to build dynamic, component-based web applications using React within the Next.js framework.

## Learning Objectives

By the end of this unit, students should be able to:

1. Understand the core concepts of React and its role in modern web development
2. Create and use functional React components
3. Manage component state using the useState hook
4. Handle side effects in components using the useEffect hook
5. Pass data between components using props
6. Implement basic routing in a Next.js application
7. Fetch and display data from APIs in React components
8. Manage global state using React Context
9. Optimize React components using useMemo and useCallback
10. Integrate third-party React libraries into a Next.js project

## Project Context

Students will continue working on their Personal Portfolio project, refactoring it to use React components within the Next.js framework. They will convert their existing HTML/CSS/JavaScript code into React components, implement dynamic routing, and add new interactive features using React hooks.

## Prerequisites

- Completion of JSC201: JavaScript Fundamentals
- Basic understanding of ES6+ features
- Familiarity with Next.js project structure

## Daily Breakdown

### Day 1: Introduction to React and Components

#### 1.1 What is React? (1 hour)

- Brief history and overview of React
- React's role in the Next.js ecosystem
- Key features and benefits of React

#### 1.2 React Components (2 hours)

- Concept of components in React
- Functional components vs class components
- JSX syntax and its relation to JavaScript

#### 1.3 Creating and Rendering Components (2 hours)

- Writing your first React component
- Nesting components
- Rendering components in Next.js pages

#### 1.4 Props in React (2 hours)

- Understanding props
- Passing props to components
- PropTypes for type checking

#### Project Task

Refactor your portfolio's header and footer into React components. Pass necessary data as props (e.g., navigation items, social media links).

#### Homework

- Complete the refactoring of header and footer components
- Read about the useState hook in React documentation
- Practice creating simple React components

### Day 2: State and Hooks

#### 2.1 Introduction to State in React (1 hour)

- Concept of state in React applications
- Differences between props and state
- When to use state in components

#### 2.2 The useState Hook (2 hours)

- Introduction to React Hooks
- Using the useState hook
- Updating state and triggering re-renders

#### 2.3 Handling User Input and Events (2 hours)

- Event handling in React
- Controlled components for form inputs
- Updating state based on user input

#### 2.4 Practical: Adding Interactivity to Portfolio (2 hours)

- Implement a theme toggle (light/dark mode) using useState
- Create a simple contact form with controlled inputs

#### Project Task

Add a theme toggle feature to your portfolio using the useState hook. Implement a contact form with controlled inputs, storing form data in component state.

#### Homework

- Complete the theme toggle and contact form implementation
- Practice using the useState hook in different scenarios
- Read about the useEffect hook in React documentation

### Day 3: Side Effects and Data Fetching

#### 3.1 The useEffect Hook (2 hours)

- Purpose and use cases of useEffect
- Dependency array and its importance
- Cleaning up effects

#### 3.2 Data Fetching in React (2 hours)

- Fetching data with useEffect
- Handling loading and error states
- Best practices for data fetching in React

#### 3.3 Working with APIs in Next.js (2 hours)

- Introduction to Next.js API routes
- Fetching data from external APIs
- Server-side rendering (SSR) vs. client-side rendering (CSR)

#### 3.4 Practical: Dynamic Data in Portfolio (2 hours)

- Create an API route to serve project data
- Fetch and display project data in a component
- Implement loading and error states

#### Project Task

Create an API route in your Next.js portfolio to serve your project data. Fetch this data in a React component and display it on your Projects page. Implement loading and error states for a better user experience.

#### Homework

- Complete the dynamic project data implementation
- Practice using useEffect for different side effects
- Read about React Context and global state management

### Day 4: Context and Global State Management

#### 4.1 Introduction to React Context (1 hour)

- Problems with prop drilling
- Concept of global state in React applications
- When to use Context vs. props

#### 4.2 Creating and Using Context (2 hours)

- Creating a Context
- Context Provider component
- Consuming Context with useContext hook

#### 4.3 Managing Complex State with useReducer (2 hours)

- Introduction to useReducer hook
- Implementing a reducer function
- Combining useReducer with Context

#### 4.4 Practical: Global State in Portfolio (2 hours)

- Create a global theme context
- Implement theme switching using Context and useReducer
- Refactor components to use the global theme

#### Project Task

Implement a global theme system in your portfolio using React Context and useReducer. Allow users to switch between multiple theme options, and ensure the theme persists across page reloads.

#### Homework

- Complete the global theme implementation
- Practice using Context and useReducer in different scenarios
- Read about performance optimization in React

### Day 5: Performance Optimization and Advanced Hooks

#### 5.1 React Component Lifecycle and Re-renders (1 hour)

- Understanding when and why components re-render
- Identifying unnecessary re-renders

#### 5.2 Memoization with useMemo and useCallback (2 hours)

- Purpose of memoization in React
- Using useMemo for expensive computations
- Optimizing callbacks with useCallback

#### 5.3 React.memo for Component Memoization (1 hour)

- Purpose of React.memo
- When to use React.memo
- Pitfalls and considerations

#### 5.4 Custom Hooks (2 hours)

- Creating custom hooks
- Use cases for custom hooks
- Best practices for custom hooks

#### 5.5 Practical: Optimizing Portfolio Performance (2 hours)

- Identify and optimize expensive operations with useMemo
- Create a custom hook for handling form inputs
- Use React.memo to optimize rendering of list items

#### Project Task

Optimize your portfolio's performance by implementing useMemo, useCallback, and React.memo where appropriate. Create a custom hook for handling form inputs and use it in your contact form.

#### Homework

- Complete the performance optimizations in your portfolio
- Practice creating and using custom hooks
- Read about routing in Next.js applications

### Day 6: Routing in Next.js

#### 6.1 Next.js Routing System (2 hours)

- File-based routing in Next.js
- Creating dynamic routes
- Handling route parameters

#### 6.2 Navigation in Next.js (2 hours)

- Using the Link component
- Programmatic navigation with useRouter
- Handling route changes

#### 6.3 Advanced Routing Concepts (2 hours)

- Nested routes
- Catch-all routes
- Custom 404 pages

#### 6.4 Practical: Implementing Routing in Portfolio (2 hours)

- Set up dynamic routes for project pages
- Implement navigation between pages
- Create a custom 404 page

#### Project Task

Implement dynamic routing in your portfolio for individual project pages. Use the Next.js Link component for navigation and create a custom 404 page. Ensure that your navigation menu updates to reflect the current route.

#### Homework

- Complete the routing implementation in your portfolio
- Practice creating different types of routes in a Next.js application
- Read about form handling and validation in React

### Day 7: Forms and Validation

#### 7.1 Controlled vs Uncontrolled Components (1 hour)

- Differences between controlled and uncontrolled components
- Use cases for each approach
- Pros and cons of controlled components

#### 7.2 Form Validation in React (2 hours)

- Client-side validation techniques
- Creating custom validation hooks
- Displaying validation errors

#### 7.3 Handling Form Submission (2 hours)

- Preventing default form submission
- Sending form data to an API
- Handling submission states (loading, success, error)

#### 7.4 Practical: Enhanced Contact Form (2 hours)

- Implement comprehensive validation for the contact form
- Handle form submission with loading and success states
- Use a custom hook for form logic

#### Project Task

Enhance your portfolio's contact form with comprehensive validation, error messages, and submission handling. Create a custom hook to manage form state and validation logic. Implement loading and success states for form submission.

#### Homework

- Complete the enhanced contact form implementation
- Practice form validation techniques in React
- Read about integrating third-party libraries in React applications

### Day 8: Integrating Third-Party Libraries

#### 8.1 Using Third-Party Components (2 hours)

- Introduction to popular React UI libraries (e.g., Material-UI, Chakra UI)
- Installing and setting up a UI library
- Customizing third-party components

#### 8.2 Animation Libraries in React (2 hours)

- Overview of animation techniques in React
- Introduction to Framer Motion
- Implementing basic animations

#### 8.3 Data Visualization in React (2 hours)

- Introduction to data visualization libraries (e.g., Recharts, Victory)
- Creating basic charts and graphs
- Customizing chart components

#### 8.4 Practical: Enhancing Portfolio with Libraries (2 hours)

- Integrate a UI library for styled components
- Add animations to page transitions or UI elements
- Implement a simple chart or graph component

#### Project Task

Enhance your portfolio by integrating a UI library of your choice. Add subtle animations to improve user experience, such as animated page transitions or hover effects. If applicable, add a simple chart or graph to display relevant data (e.g., skills proficiency, project statistics).

#### Homework

- Complete the integration of third-party libraries in your portfolio
- Experiment with different animations and data visualizations
- Read about testing React components

### Day 9: Testing React Components

#### 9.1 Introduction to Testing in React (1 hour)

- Importance of testing in React applications
- Types of tests: unit, integration, and end-to-end
- Testing tools: Jest and React Testing Library

#### 9.2 Writing Unit Tests for React Components (2 hours)

- Setting up a testing environment in Next.js
- Writing basic unit tests for components
- Testing component rendering and user interactions

#### 9.3 Testing Hooks and Context (2 hours)

- Strategies for testing custom hooks
- Testing components that use Context
- Mocking API calls in tests

#### 9.4 Practical: Testing Portfolio Components (2 hours)

- Write unit tests for key components in your portfolio
- Test custom hooks and context providers
- Implement a simple integration test

#### Project Task

Write unit tests for at least two key components in your portfolio (e.g., Header, ProjectCard). If you've created any custom hooks, write tests for them as well. Implement a simple integration test that checks the interaction between multiple components.

#### Homework

- Complete the testing implementation for your portfolio components
- Practice writing different types of tests for React components
- Review all React concepts covered in the unit

### Day 10: Project Work and Review

#### 10.1 Final Project Work (3 hours)

- Complete any remaining React features in your portfolio
- Refactor and optimize existing components
- Ensure consistent styling and responsiveness

#### 10.2 Code Review and Best Practices (2 hours)

- Peer code reviews
- Discussion of React best practices and patterns
- Identifying areas for improvement

#### 10.3 Unit Review and Q&A (2 hours)

- Review key React concepts covered in the unit
- Address any remaining questions or concerns
- Discuss real-world applications of React in Next.js projects

#### Project Task

Finalize your React-based portfolio, ensuring all features are complete and the code follows best practices. Participate in a peer code review session and make any necessary improvements based on feedback.

#### Homework

- Make final adjustments to your portfolio based on review feedback
- Review all React concepts in preparation for the unit challenge
- Explore advanced React topics for further learning

## Unit Challenge: Advanced React Portfolio

Enhance your Personal Portfolio project by applying advanced React concepts:

1. Implement a complex feature using multiple hooks (e.g., a filterable, sortable project list)
2. Create a custom hook that can be reused across different components
3. Use Context API for managing a global state (e.g., user preferences, theme)
4. Optimize performance using React.memo, useMemo, and useCallback where appropriate
5. Integrate at least one third-party library to add enhanced functionality (e.g., animations, data visualization)
6. Implement client-side form validation with custom error messages
7. Write unit tests for at least three components or hooks
8. Ensure the application is fully responsive and accessible
9. (Bonus) Implement server-side rendering (SSR) or static site generation (SSG) for improved performance

Evaluation Criteria:

- Correct use of React hooks and functional components
- Effective state management using both local state and Context API
- Proper implementation of performance optimization techniques
- Successful integration of third-party libraries
- Quality and coverage of unit tests
- Code organization, readability, and adherence to React best practices
- Creativity in applying React concepts to enhance the portfolio
- Overall user experience and design implementation
- (Bonus) Successful implementation of SSR or SSG

## Additional Resources

- React Documentation: https://reactjs.org/docs/getting-started.html
- Next.js Documentation: https://nextjs.org/docs
- React Hooks Documentation: https://reactjs.org/docs/hooks-intro.html
- Kent C. Dodds' Blog (React Patterns and Best Practices): https://kentcdodds.com/blog
- React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/intro/
- Framer Motion Documentation: https://www.framer.com/motion/
- Material-UI Documentation: https://material-ui.com/
- CSS-Tricks Guide to React: https://css-tricks.com/guides/react/

## Notes for LLM Instructor

- Emphasize the importance of thinking in React - breaking down UI into components and managing state effectively
- Encourage students to practice creating small React applications alongside their portfolio project
- Stress the benefits of using functional components and hooks over class components
- Guide students through the transition from vanilla JavaScript to React's declarative style
- Be prepared to explain key differences between React in a standard setup vs. React in Next.js
- Encourage exploration of the React ecosystem and popular libraries
- Emphasize the importance of performance optimization and when to apply it
- Be ready to provide additional resources for students who may struggle with React concepts
- Encourage pair programming and code reviews to reinforce learning
- Remind students to incrementally apply React concepts to their portfolio project
- Be prepared to discuss how these React skills will be built upon in future units (e.g., more advanced Next.js features)
- Encourage students to explore the official React documentation and community resources for continued learning

Remember to consistently relate React concepts back to their practical application in web development and the ongoing Personal Portfolio project. Encourage students to view their growing React skills as a powerful tool for creating dynamic, efficient, and maintainable web applications.
