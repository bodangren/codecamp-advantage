import type { WebhookEvent } from "@clerk/nextjs/server";
import { describe, expect, test, vi } from "vitest";
import { getSvixHeaders, verifyClerkWebhook } from "@/lib/webhooks/clerk";

vi.mock("svix", () => {
  class MockWebhook {
    constructor(private readonly secret: string) {}

    verify(payload: string, headers: Record<string, string>) {
      if (this.secret !== "whsec_test") {
        throw new Error("Invalid secret");
      }

      if (headers["svix-signature"] !== "valid") {
        throw new Error("Invalid signature");
      }

      return {
        id: "evt_123",
        type: "user.created",
        data: { id: "user_123", email_addresses: [] },
      } as unknown as WebhookEvent;
    }
  }

  return { Webhook: MockWebhook };
});

describe("Clerk webhook helpers", () => {
  test("extracts Svix headers", () => {
    const headers = getSvixHeaders({
      "svix-id": "id",
      "svix-timestamp": "ts",
      "svix-signature": "sig",
    });

    expect(headers).toEqual({
      "svix-id": "id",
      "svix-timestamp": "ts",
      "svix-signature": "sig",
    });
  });

  test("throws when a required header is missing", () => {
    expect(() =>
      getSvixHeaders({
        "svix-id": "id",
        "svix-timestamp": null,
        "svix-signature": "sig",
      })
    ).toThrow(/Missing required Clerk signature header/);
  });

  test("verifies payloads using Svix", () => {
    const event = verifyClerkWebhook(
      '{"test":true}',
      {
        "svix-id": "id",
        "svix-timestamp": "1",
        "svix-signature": "valid",
      },
      "whsec_test"
    );

    expect(event.type).toBe("user.created");
  });

  test("bubbles signature errors", () => {
    expect(() =>
      verifyClerkWebhook(
        "{}",
        {
          "svix-id": "id",
          "svix-timestamp": "1",
          "svix-signature": "invalid",
        },
        "whsec_test"
      )
    ).toThrow("Invalid signature");
  });
});
