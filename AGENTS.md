# Codecamp Advantage

## Project Overview
**Codecamp Advantage** is an AI-powered coding education platform being rebuilt with **Next.js**, **Vercel AI SDK**, and **Clerk** for authentication and billing.

### Technical Architecture
-   **Framework:** Next.js 16 (App Router, Turbo)
-   **Language:** TypeScript
-   **AI:** Vercel AI SDK 5.0 (Chatbot functionality)
-   **Auth & Billing:** Clerk (Replacing NextAuth)
-   **Styling:** Tailwind CSS v4
-   **Database:** PostgreSQL via Drizzle ORM
-   **Testing:** Playwright
-   **Linting/Formatting:** Biome

## Development Status
**Current Phase:** Restart/Initialization
-   The project is initialized from the Vercel AI SDK `ai-chatbot` template.
-   **Migration Goal:** Replace NextAuth with Clerk.
-   **Maintenance:** Dependencies are being updated to latest versions.

## SynthesisFlow Agent Guide

This project uses SynthesisFlow, a modular, spec-driven development methodology. The workflow is broken down into several discrete skills located in the `.claude/skills/` directory.

### Core Philosophy
1.  **Specs as Code:** All specification changes are proposed and approved via Pull Requests.
2.  **Just-in-Time Context:** Use the `doc-indexer` skill to get a real-time map of all project documentation.
3.  **Sprint-Based:** Work is organized into GitHub Milestones and planned via the `sprint-planner` skill.
4.  **Atomic Issues:** Implementation is done via atomic GitHub Issues, which are executed by the `issue-executor` skill.

### Available Skillsets
- **`.claude/skills/skill-lister/`**: For listing all available skills and their descriptions.
- **`.claude/skills/project-init/`**: For initial project scaffolding.
- **`.claude/skills/doc-indexer/`**: For real-time documentation discovery.
- **`.claude/skills/spec-authoring/`**: For proposing and refining new specifications.
- **`.claude/skills/sprint-planner`**: For creating GitHub issues from approved specs.
- **`.claude/skills/issue-executor/`**: For implementing code for a single issue.
- **`.claude/skills/change-integrator/`**: For finalizing and archiving a completed change.
- **`.claude/skills/agent-integrator/`**: For creating or updating this guide in `AGENTS.md`.

### Getting Started
As the very first action of any session, you **must** run `bash .claude/skills/skill-lister/scripts/list-skills.sh` to ensure you have the most up-to-date list of available skills.
1. To begin, always assess the current state by checking the git branch and running the `doc-indexer`.
2. Run `skill-lister` to see the list of available tools and their descriptions.