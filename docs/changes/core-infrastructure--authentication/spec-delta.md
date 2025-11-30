---
title: Core Infrastructure & Authentication Specification
type: spec-delta
status: draft
prd: docs/prds/codecamp-advantage/prd.md
epic: Core Infrastructure & Authentication
created: 2025-11-30
updated: 2025-11-30
---

# Spec Delta: Core Infrastructure & Authentication

## Overview
This specification defines the implementation requirements for the foundational infrastructure of the Codecamp Advantage platform. It covers the setup of the Next.js 15 application, the integration of Clerk for authentication, and the establishment of the Postgres database using Drizzle ORM.

## Requirements

### Functional Requirements

#### FR1: User Authentication & Management
-   **Description**: The system must allow users to sign up and log in using GitHub or Email/Password.
-   **Inputs**: User credentials via Clerk UI.
-   **Outputs**: Authenticated session token (JWT) and user record in the database.
-   **Business Rules**:
    -   All users must have a unique email address.
    -   GitHub is the preferred provider (promoted in UI).
-   **Acceptance Criteria**:
    -   [ ] Users can sign up using the GitHub OAuth provider.
    -   [ ] Users can sign up using Email/Password.
    -   [ ] A record is created in the `users` table in Postgres immediately after signup via Webhook.
    -   [ ] Unauthenticated users accessing `/dashboard` are redirected to `/sign-in`.
-   **Priority**: Must Have
-   **PRD Reference**: FR1 in `docs/prds/codecamp-advantage/prd.md`

#### FR2: Global Application Shell
-   **Description**: A consistent layout for the authenticated area of the application.
-   **Inputs**: User navigation actions.
-   **Outputs**: Rendered pages within the shell.
-   **Acceptance Criteria**:
    -   [ ] Navbar is present on all pages, showing the User Profile button (Clerk).
    -   [ ] Sidebar is collapsible and present on dashboard pages.
    -   [ ] Theme toggle switches between light and dark modes correctly.
-   **Priority**: Must Have
-   **PRD Reference**: NFR3 in `docs/prds/codecamp-advantage/prd.md`

### Non-Functional Requirements

#### NFR1: Security
-   **Requirement**: Syncing user data from Auth Provider to Database must be secure.
-   **Acceptance Criteria**:
    -   [ ] Clerk Webhook endpoint must verify the svix signature header.
    -   [ ] Database connection must use SSL.
-   **PRD Reference**: NFR2

#### NFR2: Usability
-   **Requirement**: Responsive Design.
-   **Acceptance Criteria**:
    -   [ ] Layout adapts to mobile screens (hamburger menu for sidebar).
-   **PRD Reference**: NFR3

## Design Decisions

### DD1: Use Clerk for Authentication
-   **Decision**: Replace the template's `NextAuth.js` with `Clerk`.
-   **Rationale**: Clerk handles complex flows (MFA, session management, user profile UI) out of the box, reducing maintenance burden and accelerating time-to-market (Objective 1).
-   **Impact**: Removes the need to maintain a local `sessions` table or handle OAuth flow nuances manually.

### DD2: Drizzle ORM over Prisma
-   **Decision**: Stick with the template's default Drizzle ORM.
-   **Rationale**: Drizzle is lighter weight, has better TypeScript inference, and no separate runtime binary, which is better for serverless/edge environments (Vercel).
-   **Impact**: Faster cold starts compared to Prisma.

## Implementation Approach

### Architecture
-   **Auth**: Clerk Middleware protects `/dashboard/*` routes.
-   **Data Sync**: A Next.js API Route (`/api/webhooks/clerk`) receives events from Clerk. It uses `svix` to verify the signature and then performs an `INSERT` or `UPDATE` on the `users` table via Drizzle.
-   **DB**: Neon Serverless Postgres.

### Components
1.  **`app/layout.tsx`**: Root layout wrapping the app in `ClerkProvider`.
2.  **`app/(auth)/sign-in/[[...sign-in]]/page.tsx`**: Clerk Sign-in component.
3.  **`app/api/webhooks/clerk/route.ts`**: The webhook handler.
4.  **`lib/db/schema.ts`**: Drizzle schema definition for the `users` table.

### Data Model (`users` table)
```typescript
export const users = pgTable('users', {
  id: text('id').primaryKey(), // Matches Clerk User ID
  email: text('email').notNull(),
  role: text('role').default('user'), // 'user' | 'admin'
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

## Testing Strategy
-   **Unit Testing**: Verify the webhook signature verification logic (mocking svix).
-   **Integration Testing**: Playwright test that goes through the sign-in flow (mocking Clerk or using a test user).

## Dependencies
-   **Upstream**: None.
-   **Downstream**: Epic 2 (Curriculum) relies on the `users` table existing.

## Risks and Mitigations
-   **Risk**: Clerk Webhook failure.
    -   **Mitigation**: Clerk has automatic retries. We will also log errors to Vercel logs to monitor for sync issues.

## Traceability Matrix
| Spec Requirement | PRD Requirement | Coverage |
| :--- | :--- | :--- |
| FR1 | FR1 | Complete |
| FR2 | NFR3 | Complete |
| NFR1 | NFR2 | Complete |
| NFR2 | NFR3 | Complete |