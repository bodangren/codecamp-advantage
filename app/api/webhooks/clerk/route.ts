import { NextResponse } from "next/server";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { deleteUserById, upsertClerkUser } from "@/lib/db/queries";
import { verifyClerkWebhook } from "@/lib/webhooks/clerk";

export const runtime = "nodejs";

type ClerkUserSyncEvent = Extract<
  WebhookEvent,
  { type: "user.created" | "user.updated" }
>;
type ClerkUserDeletedEvent = Extract<WebhookEvent, { type: "user.deleted" }>;

function getPrimaryEmail(event: ClerkUserSyncEvent): string | null {
  const emailAddresses = (event.data as any).email_addresses ?? [];
  const preferredId = (event.data as any).primary_email_address_id;

  if (preferredId) {
    const preferred = emailAddresses.find(
      (address: any) => address.id === preferredId
    );
    if (preferred?.email_address) {
      return preferred.email_address;
    }
  }

  return emailAddresses[0]?.email_address ?? null;
}

async function handleEvent(event: WebhookEvent) {
  const logContext = { type: event.type };

  switch (event.type) {
    case "user.created":
    case "user.updated": {
      const userEvent = event as ClerkUserSyncEvent;
      const email = getPrimaryEmail(userEvent);

      if (!email) {
        throw new Error("Missing email address on Clerk event payload");
      }

      const metadata = (userEvent.data.public_metadata ??
        {}) as Record<string, unknown>;
      const role =
        typeof metadata.role === "string" && metadata.role.length > 0
          ? metadata.role
          : undefined;

      const userId = (userEvent.data as { id: string }).id;

      await upsertClerkUser({
        id: userId,
        email,
        role,
      });
      console.info("Clerk user synced", {
        ...logContext,
        userId,
      });
      return;
    }
    case "user.deleted": {
      const userEvent = event as ClerkUserDeletedEvent;
      const userId = (userEvent.data as { id: string }).id;
      await deleteUserById({ id: userId });
      console.info("Clerk user deleted", {
        ...logContext,
        userId,
      });
      return;
    }
    default: {
      console.info("Ignoring unsupported Clerk webhook", logContext);
    }
  }
}

export async function POST(request: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!secret) {
    console.error("Missing CLERK_WEBHOOK_SECRET");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const payload = await request.text();
  let event: WebhookEvent;

  try {
    event = verifyClerkWebhook(payload, request.headers, secret);
  } catch (error) {
    console.error("Invalid Clerk webhook signature", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  try {
    await handleEvent(event);
  } catch (error) {
    console.error("Failed to process Clerk webhook", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
