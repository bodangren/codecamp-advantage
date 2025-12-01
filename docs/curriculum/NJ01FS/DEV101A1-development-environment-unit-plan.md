---
title: Unit DEV101A1 - Development Environment Setup
status: approved
type: curriculum
---

# Unit: Development Environment Setup (DEV101A1)

## Unit Overview

This unit introduces students to the essential tools and practices for setting up a professional development environment for Next.js projects. Over three days, students will configure their local development environment, learn version control basics with Git and GitHub, and initialize their first Next.js project. This unit lays the foundation for the entire course and begins the Personal Portfolio project.

## Learning Objectives

By the end of this unit, students should be able to:

1. Set up and customize Visual Studio Code for Next.js development
2. Understand and use basic Git commands for version control
3. Create and manage a GitHub repository
4. Install and use Node.js and npm to manage project dependencies
5. Initialize and understand the basic structure of a Next.js project
6. Begin development on a personal portfolio project using Next.js

## Project Context

Students will begin work on their Personal Portfolio project, which will be developed throughout the course. In this unit, they will set up the initial project structure and repository, serving as the foundation for future development.

## Prerequisites

- Basic computer literacy
- Familiarity with web browsers and file systems
- No prior programming experience required, but general interest in web development

## Required Software

- Visual Studio Code
- Git
- Node.js and npm (version 12.x or later recommended)
- A GitHub account

## Daily Breakdown

### Day 1: Development Environment and Version Control Basics

#### 1.1 Introduction to Development Environments (1 hour)

- Concept of development environments
- Importance of consistent setups in professional development
- Overview of tools we'll be using (VS Code, Git, Node.js, npm)

#### 1.2 Visual Studio Code Setup (2 hours)

- Installation process for different operating systems
- Tour of the VS Code interface
- Basic customization (themes, font size, etc.)
- Essential keyboard shortcuts

#### 1.3 Essential VS Code Extensions (1 hour)

- How to find and install extensions
- Recommended extensions for Next.js development:
  - ESLint
  - Prettier
  - JavaScript (ES6) code snippets
  - Next.js snippets
  - GitLens

#### 1.4 Introduction to Version Control and Git (2 hours)

- Concept of version control
- Brief history and importance of Git
- Basic Git concepts: repositories, commits, branches
- Installing Git
- Configuring Git (user name, email)

#### 1.5 Starting the Personal Portfolio Project (1 hour)

- Create a new directory for the portfolio project
- Create a basic "Hello World" HTML file as the project's start
- Initialize a local Git repository for the project

#### Project Task

Create a simple "Hello World" HTML file as the start of your portfolio, and make your first Git commit.

#### Homework

- Complete VS Code's interactive playground
- Practice basic Git commands (init, add, commit, log)
- Read: "Introduction to Next.js" in the official documentation

### Day 2: Node.js, npm, and Next.js Introduction

#### 2.1 Node.js Fundamentals (2 hours)

- What is Node.js and why it's important for modern web development
- Installing Node.js (using nvm recommended for version management)
- Running JavaScript with Node.js
- Understanding the Node.js ecosystem

#### 2.2 npm Essentials (2 hours)

- Introduction to npm (Node Package Manager)
- Understanding package.json
- Basic npm commands (init, install, run)
- Managing dependencies and devDependencies
- Introduction to semantic versioning

#### 2.3 Introduction to Next.js (2 hours)

- What is Next.js and its benefits
- How Next.js builds upon React
- Key features of Next.js (SSR, SSG, file-based routing)

#### 2.4 Practical: Initializing a Next.js Project (2 hours)

- Using create-next-app to start a new project
- Exploring the generated project structure
- Understanding key files and directories
- Running the development server

#### 2.5 Initializing the Next.js Portfolio Project (1 hour)

- Use create-next-app to start the portfolio project
- Explore the generated Next.js project structure
- Run the development server and view the default Next.js page

#### Project Task

Initialize your portfolio as a Next.js project using create-next-app. Customize the default page with your name and a brief introduction.

#### Homework

- Experiment with npm by installing and uninstalling packages
- Explore the created Next.js project, focusing on the file structure
- Read: "Pages" in Next.js documentation

### Day 3: GitHub Integration and Project Initialization

#### 3.1 GitHub Workflow (2 hours)

- Introduction to GitHub
- Creating a GitHub account
- Setting up SSH keys for secure communication
- GitHub workflow: cloning, pushing, pulling
- Creating and managing repositories on GitHub

#### 3.2 README and Project Documentation (1 hour)

- Importance of project documentation
- Writing an effective README.md
- Markdown basics for documentation

#### 3.3 Next.js Project Configuration (2 hours)

- Customizing the Next.js project
- Modifying project metadata
- Adding custom pages
- Introduction to Next.js routing

#### 3.4 Practical: Personal Portfolio Setup (2 hours)

- Create a GitHub repository for the portfolio project
- Push the local Next.js project to GitHub
- Create a README.md file with a project description
- (Optional) Set up a Vercel account and deploy the initial project

#### 3.5 Introduction to Deployment (Optional) (1 hour)

- Overview of deployment options for Next.js
- Introduction to Vercel
- (Optional) Setting up a Vercel account and linking to GitHub

#### Project Task

Create a GitHub repository for your portfolio, push your local project to it, and add a README.md file describing your portfolio project.

#### Homework

- Finish setting up the Personal Portfolio project
- Add a custom 'About' page to the project
- Push all changes to GitHub

## Unit Challenge: Personal Portfolio Initialization

Initialize the Personal Portfolio project with the following requirements:

1. A properly configured Next.js project structure
2. A GitHub repository with a descriptive README.md
3. At least one custom page (e.g., Home or About)
4. A basic layout component (can be very simple at this stage)
5. (Optional) Deployment set up on Vercel

Evaluation Criteria:

- Correct project structure and configuration
- Clear and informative README.md
- Proper use of Git with meaningful commit messages
- Customization of the project beyond the initial template
- (Optional) Successful deployment to Vercel

## Additional Resources

- Visual Studio Code Documentation: https://code.visualstudio.com/docs
- Git Documentation: https://git-scm.com/doc
- Next.js Documentation: https://nextjs.org/docs
- npm Documentation: https://docs.npmjs.com/
- Vercel Documentation: https://vercel.com/docs
- GitHub Guides: https://guides.github.com/

## Notes for LLM Instructor

- Emphasize the importance of a consistent and efficient development environment
- Guide students through potential troubleshooting scenarios during setup
- Encourage best practices in Git usage and project organization from the start
- Stress the significance of documentation and clear communication in development projects
- Be prepared to explain the benefits of Next.js over traditional React setups
- Adapt explanations based on students' prior experience with web development tools
- For the optional Vercel deployment, provide clear instructions but don't require it for unit completion
- Be prepared to offer additional support for students who may struggle with initial setup
- Emphasize the importance of applying each new skill to the portfolio project as it's learned
- Encourage students to customize their portfolio beyond the basic setup, if they feel comfortable doing so
- Be prepared to troubleshoot common issues with Next.js project initialization and GitHub integration
- Remind students that the portfolio is a work in progress and will be developed throughout the course

Remember to consistently relate concepts back to their practical application in web development and the ongoing Personal Portfolio project.
