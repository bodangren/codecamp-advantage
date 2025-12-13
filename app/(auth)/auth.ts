export type UserType = "guest" | "regular";

export async function auth() {
  return {
    user: {
      id: "placeholder-id",
      email: "placeholder@example.com",
      type: "regular" as UserType,
    },
  };
}

export async function signOut(options?: any) {
  console.log("Sign out", options);
}