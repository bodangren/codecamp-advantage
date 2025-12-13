import type { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

type HeaderRecord = Record<string, string | null | undefined>;

const REQUIRED_HEADERS = ["svix-id", "svix-timestamp", "svix-signature"] as const;

export function getSvixHeaders(
  headers: Headers | HeaderRecord
): Record<(typeof REQUIRED_HEADERS)[number], string> {
  const normalized: HeaderRecord = {};

  REQUIRED_HEADERS.forEach((key) => {
    if (typeof Headers !== "undefined" && headers instanceof Headers) {
      normalized[key] = headers.get(key);
    } else {
      normalized[key] = (headers as HeaderRecord)[key];
    }
  });

  return REQUIRED_HEADERS.reduce(
    (acc, key) => {
      const value = normalized[key];
      if (!value) {
        throw new Error(`Missing required Clerk signature header: ${key}`);
      }

      acc[key] = value;
      return acc;
    },
    {} as Record<(typeof REQUIRED_HEADERS)[number], string>
  );
}

export function verifyClerkWebhook(
  payload: string,
  headers: Headers | HeaderRecord,
  secret: string
): WebhookEvent {
  const svixHeaders = getSvixHeaders(headers);
  const webhook = new Webhook(secret);

  return webhook.verify(payload, svixHeaders) as WebhookEvent;
}
