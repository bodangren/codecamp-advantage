---
title: Core Infrastructure & Authentication Tasks
type: task-breakdown
status: draft
prd: docs/prds/codecamp-advantage/prd.md
epic: Core Infrastructure & Authentication
created: 2025-11-30
updated: 2025-11-30
---

# Tasks: Core Infrastructure & Authentication

## Overview
**Epic**: Core Infrastructure & Authentication
**PRD**: `docs/prds/codecamp-advantage/prd.md`
**Estimated Effort**: 1 Sprint (2 weeks)

## Task Breakdown

---

## Task 1: Project Cleanup & Dependency Update

**Description**: Remove the legacy `next-auth` dependencies and clean up the codebase to prepare for the new architecture. Ensure all remaining packages are on their latest versions.

**Subtasks**:
- [ ] Remove `next-auth`, `@auth/core` and related packages.
- [ ] Delete `app/api/auth/[...nextauth]` and `auth.config.ts` files.
- [ ] Update `package.json` to remove unused dependencies.
- [ ] Run `pnpm install` and ensure the build (`pnpm build`) succeeds (even if auth is temporarily broken).

**Acceptance Criteria**:
- [ ] No `next-auth` code remains in the project.
- [ ] Project builds successfully.

**Dependencies**: None.
**Estimated Effort**: 0.5 Days.
**Related Requirements**: N/A (Maintenance).

---

## Task 2: Drizzle & Postgres Setup

**Description**: Configure the database connection and the user schema.

**Subtasks**:
- [ ] Set up Neon Postgres project and get connection string.
- [ ] Configure `drizzle.config.ts` and `.env`.
- [ ] Create `lib/db/schema.ts` with the `users` table definition (matching Clerk ID structure).
- [ ] Run `pnpm db:push` (or migrate) to create the table in Neon.

**Acceptance Criteria**:
- [ ] `users` table exists in the remote database.
- [ ] Schema matches the design in Spec Delta.

**Dependencies**: Task 1.
**Estimated Effort**: 0.5 Days.
**Related Requirements**: FR1.

---

## Task 3: Clerk Integration (Frontend)

**Description**: Install Clerk and replace the authentication UI.

**Subtasks**:
- [ ] Install `@clerk/nextjs`.
- [ ] Wrap `layout.tsx` with `<ClerkProvider>`.
- [ ] Create `middleware.ts` to protect dashboard routes.
- [ ] Create sign-in/sign-up pages using Clerk components.
- [ ] Add `<UserButton />` to the Navbar.

**Acceptance Criteria**:
- [ ] User can sign up and sign in.
- [ ] `/dashboard` redirects to sign-in if not authenticated.
- [ ] User can see their profile avatar in the navbar.

**Dependencies**: Task 2 (Environment variables).
**Estimated Effort**: 1 Day.
**Related Requirements**: FR1, FR2.

---

## Task 4: Clerk Webhook & Data Sync

**Description**: Implement the webhook to sync Clerk users to our Postgres database.

**Subtasks**:
- [ ] Create route `app/api/webhooks/clerk/route.ts`.
- [ ] Install `svix` package.
- [ ] Implement signature verification.
- [ ] Handle `user.created`, `user.updated`, and `user.deleted` events.
- [ ] Write Drizzle queries to upsert/delete users in the `users` table.
- [ ] Test locally using `ngrok` or Clerk's testing tools.

**Acceptance Criteria**:
- [ ] Creating a new user in Clerk automatically inserts a row in Postgres `users` table.
- [ ] Webhook returns 200 OK and verifies signature correctly.

**Dependencies**: Task 3.
**Estimated Effort**: 1 Day.
**Related Requirements**: FR1, NFR1.

---

## Task 5: Base UI Shell

**Description**: Implement the responsive layout with sidebar and theme toggle.

**Subtasks**:
- [ ] Refactor `app-sidebar.tsx` (if existing) or create new Sidebar component using `shadcn/ui`.
- [ ] Ensure Sidebar is collapsible on mobile.
- [ ] Implement Theme Toggle using `next-themes`.
- [ ] Polish Navbar styling.

**Acceptance Criteria**:
- [ ] Responsive design works on mobile and desktop.
- [ ] Dark mode persists across reloads.

**Dependencies**: Task 3 (Navbar needs UserButton).
**Estimated Effort**: 1 Day.
**Related Requirements**: FR2, NFR2.

---

## Summary
**Total Tasks**: 5
**Total Estimated Effort**: 4 Days
**Sprint Allocation**: Sprint 1

## Traceability
**Epic**: Core Infrastructure & Authentication
**PRD**: `docs/prds/codecamp-advantage/prd.md`
**Spec**: `docs/changes/core-infrastructure--authentication/spec-delta.md`

**Requirements Covered**:
- **FR1**: Task 3, Task 4
- **FR2**: Task 5
- **NFR1 (Security)**: Task 4
- **NFR2 (Usability)**: Task 5