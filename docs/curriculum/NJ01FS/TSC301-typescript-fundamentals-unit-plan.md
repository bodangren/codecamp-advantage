---
title: Unit TSC301 - TypeScript Fundamentals
status: approved
type: curriculum
---

# Unit: TypeScript Fundamentals (TSC301)

## Unit Overview

This 5-day unit introduces students to TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. Students will learn how TypeScript builds upon their existing JavaScript knowledge while adding static typing and other features to enhance code quality and maintainability. This unit continues the development of the Blog Application project, transitioning it to TypeScript and adding type safety.

## Learning Objectives

By the end of this unit, students should be able to:

1. Understand the benefits of TypeScript in Next.js projects
2. Use basic TypeScript types and type inference
3. Create and use interfaces and type aliases
4. Work with union types and type narrowing
5. Implement generics for flexible, reusable code
6. Configure TypeScript in a Next.js project
7. Refactor existing JavaScript code to TypeScript
8. Use TypeScript with React components and hooks

## Project Context

Students will enhance their Blog Application project by transitioning it to TypeScript. They will add type definitions to their existing components, implement new typed features, and leverage TypeScript's capabilities to catch potential errors early in the development process.

## Prerequisites

- Completion of JSC201: JavaScript Fundamentals
- Completion of REA401A1: React Fundamentals for Next.js
- Basic understanding of static typing concepts

## Daily Breakdown

### Day 1: Introduction to TypeScript and Basic Types

#### 1.1 Introduction to TypeScript (1 hour)

- What is TypeScript and why use it?
- TypeScript in the context of Next.js development
- Setting up TypeScript in a Next.js project

#### 1.2 Basic Types in TypeScript (2 hours)

- Number, string, boolean
- Arrays and tuples
- Any, unknown, and never types
- Type inference

#### 1.3 Functions in TypeScript (2 hours)

- Function parameter and return type annotations
- Optional and default parameters
- Rest parameters and function overloads

#### 1.4 Practical: Adding TypeScript to the Blog Project (2 hours)

- Installing necessary TypeScript dependencies
- Configuring tsconfig.json for Next.js
- Converting a JavaScript file to TypeScript (.ts extension)
- Adding basic type annotations to existing functions

#### Project Task

Set up TypeScript in your Blog Application project. Convert at least one JavaScript file to TypeScript and add basic type annotations to functions and variables.

#### Homework

- Complete the TypeScript setup in your project
- Practice using basic TypeScript types
- Read about interfaces and type aliases in TypeScript

### Day 2: Interfaces, Type Aliases, and Object Types

#### 2.1 Interfaces in TypeScript (2 hours)

- Defining and using interfaces
- Optional and readonly properties
- Extending interfaces
- Implementing interfaces in classes

#### 2.2 Type Aliases and Object Types (2 hours)

- Creating type aliases
- Object types and their properties
- Union and intersection types
- Type assertions

#### 2.3 Advanced Object Types (1 hour)

- Index signatures
- Mapped types
- Conditional types

#### 2.4 Practical: Typing Blog Post Data (2 hours)

- Create interfaces for blog post data structures
- Implement type aliases for common data patterns
- Use union types for different post categories or statuses

#### Project Task

Define interfaces and type aliases for your Blog Application's data structures (e.g., blog posts, users, comments). Update your components to use these typed structures.

#### Homework

- Complete the typed data structures in your project
- Practice creating and using interfaces and type aliases
- Read about generics in TypeScript

### Day 3: Generics and Utility Types

#### 3.1 Introduction to Generics (2 hours)

- Understanding the need for generics
- Generic functions and classes
- Generic constraints
- Generic utility types (Partial, Record, Pick, Omit)

#### 3.2 Advanced Generics (1 hour)

- Generic mapped types
- Conditional types with generics
- infer keyword in conditional types

#### 3.3 Built-in Utility Types (2 hours)

- Readonly and ReadonlyArray
- Required and Partial
- Pick, Omit, and Exclude
- ReturnType and Parameters

#### 3.4 Practical: Implementing Generic Components (2 hours)

- Create a generic list component
- Implement a generic data fetching hook
- Use utility types to modify existing interfaces

#### Project Task

Implement a generic list component in your Blog Application that can display different types of data (e.g., posts, comments, users). Use utility types to create variations of your existing interfaces (e.g., a partial post for draft saving).

#### Homework

- Complete the generic components in your project
- Practice using generics and utility types
- Read about TypeScript with React components and hooks

### Day 4: TypeScript with React and Next.js

#### 4.1 TypeScript in React Components (2 hours)

- Typing props and state
- Function components vs class components in TypeScript
- Children prop and event handlers

#### 4.2 Hooks with TypeScript (2 hours)

- useState and useEffect with TypeScript
- useRef and forwardRef in TypeScript
- Custom hooks with TypeScript

#### 4.3 Next.js Specific TypeScript Features (1 hour)

- Typing pages and API routes
- GetStaticProps, GetServerSideProps with TypeScript
- Custom App and Document in TypeScript

#### 4.4 Practical: Refactoring React Components to TypeScript (2 hours)

- Convert existing React components to TypeScript
- Add prop type definitions
- Implement typed hooks

#### Project Task

Refactor your Blog Application's React components to use TypeScript. Ensure all props are properly typed, and convert at least one custom hook to TypeScript.

#### Homework

- Complete the TypeScript refactoring of your React components
- Practice typing different kinds of React patterns
- Read about advanced TypeScript concepts and best practices

### Day 5: Advanced TypeScript and Best Practices

#### 5.1 Advanced TypeScript Concepts (2 hours)

- Decorators in TypeScript
- Mixins and composite classes
- Module augmentation
- Declaration merging

#### 5.2 TypeScript Best Practices (1 hour)

- Code organization in TypeScript projects
- Naming conventions and style guides
- Performance considerations
- Common pitfalls and how to avoid them

#### 5.3 TypeScript Configuration and Tooling (1 hour)

- Advanced tsconfig.json options
- Using ESLint with TypeScript
- TypeScript and Prettier integration
- TypeScript debugging techniques

#### 5.4 Project Work and Review (3 hours)

- Continue refactoring the Blog Application to TypeScript
- Implement any remaining TypeScript features
- Review and optimize existing TypeScript code
- Prepare for unit challenge

#### Project Task

Review and refactor your Blog Application's TypeScript code, ensuring it follows best practices. Implement any remaining features you'd like to add, and set up ESLint and Prettier for your TypeScript code.

#### Homework

- Complete all TypeScript enhancements for your Blog Application
- Practice advanced TypeScript concepts
- Prepare for the unit challenge

## Unit Challenge: TypeScript-Powered Blog Enhancement

Enhance your Blog Application with advanced TypeScript functionality:

1. Implement a generic pagination component that works with different data types
2. Create a type-safe API client using TypeScript generics
3. Add a new feature to your blog (e.g., tagging system, search functionality) using TypeScript
4. Implement at least one advanced TypeScript concept (e.g., conditional types, mapped types)
5. Ensure all components, including pages and API routes, are fully typed
6. Use TypeScript to improve your state management (e.g., with Context API or a state management library)
7. (Bonus) Write unit tests for your TypeScript code using a typed testing framework

Evaluation Criteria:

- Correct use of TypeScript syntax and concepts
- Effective use of interfaces, type aliases, and generics
- Proper typing of React components and hooks
- Implementation of type-safe API interactions
- Code organization and adherence to TypeScript best practices
- Creativity in applying TypeScript to enhance the blog functionality
- (Bonus) Successful implementation of typed unit tests

## Additional Resources

- TypeScript Documentation: https://www.typescriptlang.org/docs/
- TypeScript Deep Dive (book): https://basarat.gitbook.io/typescript/
- React TypeScript Cheatsheet: https://react-typescript-cheatsheet.netlify.app/
- Next.js with TypeScript documentation: https://nextjs.org/docs/basic-features/typescript
- Effective TypeScript (book) by Dan Vanderkam
- TypeScript ESLint: https://github.com/typescript-eslint/typescript-eslint
- Definitely Typed (type definitions for JavaScript libraries): https://github.com/DefinitelyTyped/DefinitelyTyped

## Notes for LLM Instructor

- Emphasize how TypeScript builds upon students' existing JavaScript knowledge
- Encourage students to gradually adopt TypeScript features in their existing JavaScript code
- Stress the importance of TypeScript in large-scale applications and team environments
- Guide students through the process of thinking in terms of types and interfaces
- Be prepared to explain TypeScript's type inference capabilities and when to rely on them
- Encourage students to use TypeScript's language server features in their code editor
- Emphasize the benefits of catching errors at compile-time rather than runtime
- Be ready to provide additional resources for students who may struggle with static typing concepts
- Encourage peer code reviews to reinforce TypeScript best practices
- Remind students to apply TypeScript concepts to their Blog Application project incrementally
- Be prepared to discuss how TypeScript integrates with the broader JavaScript ecosystem
- Encourage students to explore popular TypeScript-first libraries and frameworks

Remember to consistently relate TypeScript concepts back to their practical application in Next.js development and the ongoing Blog Application project. Encourage students to view TypeScript as a powerful tool for creating more robust and maintainable web applications, especially in the context of larger, more complex projects they might encounter in their future careers.
