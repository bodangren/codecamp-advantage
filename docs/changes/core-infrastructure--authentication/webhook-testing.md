---
title: Clerk Webhook Testing
type: reference
status: draft
prd: docs/prds/codecamp-advantage/prd.md
epic: Core Infrastructure & Authentication
---

# Clerk Webhook Testing Guide

## Local prerequisites
1. Request the shared Clerk Development keys and `CLERK_WEBHOOK_SECRET` from the infrastructure owner.
2. Add them to `.env.local`:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...
   CLERK_WEBHOOK_SECRET=...
   ```
3. Start the dev server: `pnpm dev`.
4. Expose your local server via tunnel (ngrok/cloudflared) and point Clerk’s webhook URL to `https://<tunnel>/api/webhooks/clerk`.

## Trigger test events
1. In the Clerk dashboard, navigate to **Webhooks → Send Test Payload**.
2. Choose the “user.created”, “user.updated”, and “user.deleted” events and send each to your tunnel URL.
3. Confirm the route responds with 200 and check the terminal logs for `Clerk user synced` / `Clerk user deleted`.

## Verifications
- Query the Neon database and verify the `users` table contains/updates/deletes the user row corresponding to the event.
- Run the unit tests to ensure signature handling stays safe:
  ```bash
  pnpm test:unit
  ```
- If the webhook route returns 401, double-check `CLERK_WEBHOOK_SECRET` and tunnel HTTPS configuration.
