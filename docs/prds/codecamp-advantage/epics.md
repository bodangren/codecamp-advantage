---
title: Codecamp Advantage Epics
type: epic-breakdown
prd: docs/prds/codecamp-advantage/prd.md
status: draft
created: 2025-11-29
updated: 2025-11-29
---

# Epic Breakdown: Codecamp Advantage

## Epic Decomposition Guidelines
This decomposition focuses on building the platform in layers: first the "shell" (infrastructure/auth), then the "content engine" (curriculum), then the "intelligence" (AI), and finally the "interactivity" (playground).

---

## Epic 1: Core Infrastructure & Authentication

### Objective
Establish the foundational architecture, database schema, and user authentication system to support all subsequent features. Supports **FR1 (User Auth)** and **NFR2 (Security)**.

### Scope
**Core Features**:
- Next.js 16 + Tailwind v4 project scaffold.
- Clerk Authentication integration (Sign Up, Login, Social Providers).
- Drizzle ORM setup with Postgres (Neon).
- User database synchronization (Clerk Webhooks -> Postgres).
- Base UI Layout (Navbar, Sidebar, Footer).

**Supporting Features**:
- Theme toggle (Dark/Light mode).
- Protected routes middleware.

### Requirements Coverage
- **FR1**: User Authentication & Management (100% Coverage)
- **NFR2**: Security (50% Coverage - Auth & Data Isolation)
- **NFR3**: Usability (20% Coverage - Base UI responsiveness)

### Success Criteria
- [ ] User can sign up via GitHub and see their profile in the top-right corner.
- [ ] User record exists in Postgres database immediately after signup.
- [ ] Unauthenticated users are redirected from protected routes (e.g., `/dashboard`).

### Dependencies
- None (Foundational).

### Estimated Effort
- **Estimate**: 1 Sprint (2 weeks)

---

## Epic 2: Curriculum Engine & Dashboard

### Objective
Build the "Learning Management System" (LMS) core: displaying courses, modules, lessons, and tracking user progress. Supports **FR3 (Curriculum)**.

### Scope
**Core Features**:
- Dashboard UI showing available courses.
- Course overview page.
- Lesson viewer page (Markdown/MDX rendering).
- Progress tracking database schema (`UserLessonProgress`).
- "Mark as Complete" button functionality.

**Supporting Features**:
- Breadcrumb navigation.
- Sidebar navigation for current course modules.

### Requirements Coverage
- **FR3**: Curriculum Navigation & Progress Tracking (100% Coverage)
- **NFR1**: Performance (100% Coverage - Static generation of content)

### Success Criteria
- [ ] User can navigate from Dashboard -> Course -> Lesson.
- [ ] Clicking "Complete" updates the database and UI progress bar.
- [ ] Refreshing the page retains progress state.

### Dependencies
- **Epic 1**: Requires User Auth to track progress.

### Estimated Effort
- **Estimate**: 1.5 Sprints (3 weeks)

---

## Epic 3: AI Tutor Integration

### Objective
Implement the "killer feature": context-aware AI chat that assists users with the current lesson. Supports **FR2 (Interactive AI Tutor)**.

### Scope
**Core Features**:
- Vercel AI SDK integration (API routes).
- Chat UI component (slide-out or sidebar).
- Context injection system (Current Lesson Content + System Prompt).
- Streaming response handling.

**Supporting Features**:
- Chat history persistence (per lesson or session).
- "Ask AI" preset buttons for common queries.

### Requirements Coverage
- **FR2**: Interactive AI Tutor (100% Coverage)
- **NFR4**: Reliability (100% Coverage - Rate limiting handling)

### Success Criteria
- [ ] User can ask a question about the specific lesson content and get a relevant answer.
- [ ] Responses stream in real-time (<500ms start).
- [ ] AI assumes the persona of a "Senior Mentor."

### Dependencies
- **Epic 2**: Needs Lesson Viewer to know *what* lesson the user is on (for context).

### Estimated Effort
- **Estimate**: 2 Sprints (4 weeks)

---

## Epic 4: Interactive Code Playground

### Objective
Add hands-on interactivity to lessons by embedding a code editor. Supports **FR4 (Code Playground)**.

### Scope
**Core Features**:
- Embed Monaco Editor (or Sandpack) into the Lesson Viewer.
- Ability to edit code in the browser.
- Simple "Run" functionality for JavaScript/TypeScript output.
- Reset code to default state.

### Requirements Coverage
- **FR4**: Code Playground (100% Coverage)

### Success Criteria
- [ ] User can type code into the embedded editor.
- [ ] Code syntax is highlighted.
- [ ] User can execute basic JS and see console output.

### Dependencies
- **Epic 2**: integrated into the Lesson Viewer.

### Estimated Effort
- **Estimate**: 1 Sprint (2 weeks)

---

## Requirements Traceability Matrix

| Requirement | Epic(s) | Coverage | Notes |
|-------------|---------|----------|-------|
| FR1: User Auth | Epic 1 | 100% | |
| FR2: AI Tutor | Epic 3 | 100% | |
| FR3: Curriculum | Epic 2 | 100% | |
| FR4: Playground | Epic 4 | 100% | |
| NFR1: Performance | Epic 2 | 100% | Static Content |
| NFR2: Security | Epic 1 | 100% | Auth & RLS |
| NFR3: Usability | Epic 1, 2 | 100% | Shared UI |
| NFR4: Reliability | Epic 3 | 100% | AI Rate Limits |

---

## Recommended Sequence
1.  **Epic 1** (Infrastructure) -> Critical Path
2.  **Epic 2** (Curriculum) -> Critical Path
3.  **Epic 3** (AI Tutor)
4.  **Epic 4** (Playground)

**Total Estimated Duration**: ~5.5 Sprints (11 Weeks)