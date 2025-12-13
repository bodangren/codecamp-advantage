import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRouteMatchers = [
  /^\/sign-in(\/.*)?$/,
  /^\/sign-up(\/.*)?$/,
  /^\/api\/webhooks\/clerk/,
  /^\/ping/,
];

export default clerkMiddleware((auth, request) => {
  const pathname = request.nextUrl.pathname;

  const isPublic = publicRouteMatchers.some((pattern) =>
    pattern.test(pathname)
  );

  if (!isPublic) {
    auth.protect();
  }
});
