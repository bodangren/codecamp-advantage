#!/bin/bash
# This script manages the core development loop for a single issue.

set -e

usage() {
    echo "Usage: $0 <issue-number>"
    exit 1
}

ISSUE_NUMBER=$1

if [ -z "$ISSUE_NUMBER" ]; then
    echo "Error: Issue number not provided." >&2
    usage
fi

# --- VALIDATION ---
if ! command -v jq &> /dev/null
then
    echo "Error: jq is not installed. Please install it to continue." >&2
    exit 1
fi

echo "Starting work on Issue #$ISSUE_NUMBER..."

# 1. Verify clean git state
echo "Verifying git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "Error: Working directory is not clean. Please commit or stash changes." >&2
    exit 1
fi
echo "Git status is clean."

# 2. Collect issue context and print implementation plan
# 2a. Read issue details from GitHub
echo "Fetching issue details..."
ISSUE_JSON=$(gh issue view "$ISSUE_NUMBER" --json title,body)
ISSUE_TITLE=$(echo "$ISSUE_JSON" | jq -r '.title')
ISSUE_BODY=$(echo "$ISSUE_JSON" | jq -r '.body')

# 2b. Find all associated spec files
echo "Finding associated spec files..."
# This pattern finds all markdown files in docs/specs and docs/changes
SPEC_FILES=$(echo "$ISSUE_BODY" | grep -o 'docs/\(specs\|changes\)/[^[:space:]`'"'"']*\.md' || true)

# 2c. Fetch issue comments
echo "Fetching issue comments..."
COMMENTS_JSON=$(gh issue view "$ISSUE_NUMBER" --json comments)
COMMENTS=$(echo "$COMMENTS_JSON" | jq -r '.comments[] | "### Comment from @\(.author.login)\n\n\(.body)\n"')

# 2d. Print a built-in implementation plan
echo "------------------------- IMPLEMENTATION PLAN -------------------------------"
case "$ISSUE_NUMBER" in
    3)
cat <<EOF
Issue #3 - Sprint 1: Project Cleanup & Dependency Update
1. Remove NextAuth + guest auth code: delete legacy routes/config, login/register pages, and related helpers.
2. Keep a benign auth() stub so server components can render until Clerk lands.
3. Clean env/config: remove NEXTAUTH_* vars, rename DB env references to DATABASE_URL, and simplify middleware matchers.
4. Replace redirects to removed endpoints with a temporary /sign-in placeholder.
5. Upgrade dependencies (pnpm up --latest), reinstall, and ensure lockfile is consistent.
6. Run lint, typecheck, build, tests, and `rg -i "nextauth|@auth/core|NEXTAUTH_"` to verify cleanup.
7. Document temporary behavior so Issue #5 can replace the stubs quickly.
EOF
        ;;
    4)
cat <<EOF
Issue #4 - Sprint 1: Drizzle & Postgres Setup
1. Ensure Neon DATABASE_URL is provisioned; add placeholder to .env.example (with sslmode=require).
2. Update drizzle.config.ts and runtime DB utils to read DATABASE_URL consistently.
3. Create/extend lib/db/schema.ts with the users table (id text PK, email unique, role default user, timestamps).
4. Run pnpm db:push (or migrate) to provision the schema in Neon and verify via db inspector.
5. Decide on template tables (keep/remove) intentionally and capture the decision.
6. Document env setup + migration workflow for new devs.
7. Run lint, typecheck, build to ensure schema/types compile.
EOF
        ;;
    5)
cat <<EOF
Issue #5 - Sprint 1: Clerk Integration (Frontend)
1. Install @clerk/nextjs and add env placeholders (publishable key, secret, webhook secret, sign-in/up URLs).
2. Wrap app/layout.tsx with <ClerkProvider> while preserving theme hydration.
3. Add sign-in/sign-up routes (without authenticated shell) using Clerk components and promote GitHub provider.
4. Replace stub auth helpers with Clerk server helpers; remove guest-auth redirects and ensure return URLs preserved.
5. Update middleware.ts to protect dashboard routes while excluding auth pages and /api/webhooks/clerk.
6. Render <UserButton /> in the navbar/sidebar user nav and wire up sign-out.
7. Add/adjust Playwright tests for protected-route redirects and sign-out; run lint/typecheck/build/tests.
EOF
        ;;
    6)
cat <<EOF
Issue #6 - Sprint 1: Clerk Webhook & Data Sync
1. Add app/api/webhooks/clerk/route.ts (Node runtime) and install svix dependency.
2. Read raw request body, verify svix-id/timestamp/signature headers using CLERK_WEBHOOK_SECRET, reject invalid signatures.
3. After verification, parse JSON and handle user.created/updated/deleted via Drizzle helpers (onConflict for upsert).
4. Ensure middleware ignores this route; add structured logs with svix-id & event type.
5. Write tests covering valid/invalid signatures and lifecycle event handling.
6. Document local testing workflow (ngrok/Clerk dashboard) and required env vars.
7. Run lint, typecheck, build, plus manual webhook smoke tests hitting Neon.
EOF
        ;;
    7)
cat <<EOF
Issue #7 - Sprint 1: Base UI Shell
1. Implement an authenticated layout composing sidebar + navbar; ensure auth routes do not inherit the shell.
2. Sidebar: collapsible on desktop, sheet/drawer on mobile with focus trapping, Escape handling, and persisted state.
3. Navbar: include theme toggle (next-themes without flash) and integrate Clerk <UserButton /> once Issue #5 lands.
4. Verify responsive behavior across breakpoints (320/768/1280) and handle long labels/overflow.
5. Add Playwright coverage for mobile drawer interactions and theme persistence.
6. Run lint, typecheck, build, and manual QA for hydration warnings, focus states, and contrast.
EOF
        ;;
    *)
cat <<EOF
Issue #$ISSUE_NUMBER - $ISSUE_TITLE
1. Review the issue description, comments, and referenced specs (listed above) to understand scope and dependencies.
2. Outline the required code/infra changes, noting affected files and follow-up work.
3. Implement changes in focused commits, adhering to project conventions.
4. Run linting, typechecking, builds, and any required automated/manual tests.
5. Document key decisions and raise follow-up issues for any deferred work.
EOF
        ;;
esac
echo "----------------------------------------------------------------------------"
echo "Context loaded and implementation plan generated."

# 3. Create a feature branch
echo "Generating branch name..."
# Sanitize title to create a branch name
BRANCH_NAME=$(echo "$ISSUE_TITLE" | tr '[:upper:]' '[:lower:]' | sed -e 's/task: //g' -e 's/[^a-z0-9]/-/g' -e 's/--/-/g' -e 's/^-//' -e 's/-$//')
BRANCH_NAME="feat/$ISSUE_NUMBER-$BRANCH_NAME"

echo "Creating new branch: $BRANCH_NAME..."
git checkout -b "$BRANCH_NAME"

echo "Setup complete. You are now on branch '$BRANCH_NAME' and ready to implement Issue #$ISSUE_NUMBER."
