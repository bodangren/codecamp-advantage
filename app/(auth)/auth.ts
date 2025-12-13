import { auth as clerkAuth } from "@clerk/nextjs/server";

export type UserType = "user" | "admin";

type SessionUser = {
  id: string;
  type: UserType;
};

type Session = {
  user: SessionUser;
};

export async function auth(): Promise<Session | null> {
  const session = await clerkAuth();

  if (!session.userId) {
    return null;
  }

  return {
    user: {
      id: session.userId,
      type: "user",
    },
  } satisfies Session;
}
