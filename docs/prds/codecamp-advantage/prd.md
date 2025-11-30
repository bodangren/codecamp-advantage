---
title: Codecamp Advantage PRD
type: prd
status: draft
created: 2025-11-29
updated: 2025-11-29
---

# Product Requirements Document: Codecamp Advantage

## Objectives
1.  **Launch a "Reference Implementation" Platform**: Build a learning platform that itself demonstrates the best practices of the Next.js 15 + AI SDK stack.
2.  **Deliver "AI-Native" Education**: Create a curriculum delivery system where an AI tutor is deeply integrated into every lesson, reducing user blockage time by 80% compared to static forums.
3.  **Achieve Technical Scalability**: Design a system architecture (Clerk Auth + Drizzle/Postgres + Vercel Edge) that supports 10,000 concurrent users with <500ms API latency.

## Success Criteria
### Launch Criteria
-   [ ] Fully functional "Hello World" module deployable by a user.
-   [ ] AI Chatbot successfully answers context-aware questions about the current lesson content.
-   [ ] Seamless user authentication (Clerk) and role management (Free vs. Paid).
-   [ ] Stripe integration for subscription payments (Test Mode).

### Post-Launch Metrics
-   **Retention**: >60% of users who complete Module 1 return for Module 2.
-   **AI Helpfulness**: >85% positive rating (thumbs up) on AI tutor responses.
-   **Performance**: Core Web Vitals (LCP) < 2.5s for all dashboard pages.

## Functional Requirements

### FR1: User Authentication & Management
-   **Description**: Users must be able to sign up, log in, and manage their profiles using Clerk.
-   **User Story**: "As a student, I want to sign up with my GitHub account so I can get started quickly without remembering another password."
-   **Acceptance Criteria**:
    -   Support Email/Password and GitHub Social Login.
    -   Sync user data (ID, email, name) from Clerk webhook to local Postgres database via Drizzle.
    -   Handle session persistence across page reloads.

### FR2: Interactive AI Tutor
-   **Description**: A slide-out or embedded chat interface that provides context-aware assistance.
-   **User Story**: "As a learner stuck on a React hook error, I want to ask 'What's wrong with my code?' and get an explanation specific to the lesson I'm on."
-   **Acceptance Criteria**:
    -   Chat interface accessible on all lesson pages.
    -   AI context includes: Current Lesson Text, User's Current Code Snippet (if applicable), and System Prompt (Persona: Senior Mentor).
    -   Streaming responses for low perceived latency.

### FR3: Curriculum Navigation & Progress Tracking
-   **Description**: A structured dashboard showing courses, modules, and lessons, tracking completion status.
-   **User Story**: "As a user, I want to see my progress visually so I feel motivated to continue."
-   **Acceptance Criteria**:
    -   Dashboard displays list of available courses.
    -   Visual progress bar for each course.
    -   "Mark as Complete" functionality for lessons (manual or automated via code check).
    -   Database schema correctly models `User -> Enrollment -> LessonProgress`.

### FR4: Code Playground / Sandwich Environment
-   **Description**: A lightweight embedded code editor (Monaco or similar) for early lessons.
-   **User Story**: "As a beginner, I want to try writing the code right in the browser to see if I understand the concept."
-   **Acceptance Criteria**:
    -   Syntax highlighting for TypeScript/React.
    -   Ability to "Run" code (initially just JS logic or rendered via Sandpack).
    -   Reset code to initial state.

## Non-Functional Requirements
-   **NFR1: Performance**: All static lesson pages must be statically generated (SSG) or incrementally regenerated (ISR) for sub-100ms TTFB.
-   **NFR2: Security**: User progress data must be protected by Row Level Security (or application-level logic) ensuring users can only see their own data. Webhooks (Clerk/Stripe) must be verified with signatures.
-   **NFR3: Usability**: The UI must be fully responsive (Mobile-first design) and accessible (WCAG AA compliant).
-   **NFR4: Reliability**: AI Service must handle rate limits gracefully (e.g., exponential backoff or user-friendly "overloaded" messages).

## Constraints
-   **Budget**: Must run on Vercel Hobby tier (initially) and Neon Free Tier for DB.
-   **Timeline**: MVP launch within 4 weeks.
-   **Tech Stack**: Strict adherence to Next.js 15 (App Router), Tailwind v4, Drizzle, Clerk.

## Assumptions
-   Users will have a GitHub account (or be willing to create one).
-   Vercel AI SDK 5.0 is stable enough for production use.
-   Content (lesson text) will be written in Markdown/MDX.

## Out of Scope
-   **Video Hosting**: No native video hosting; will embed YouTube/Vimeo if needed.
-   **IDE Extensions**: No custom VS Code extension for the MVP.
-   **Mobile Native App**: Web-only application.
-   **Team/Enterprise Accounts**: Single-player mode only for launch.
