import { NextResponse } from "next/server";
import { auth } from "@/auth";

import { publicRoutes, authRoutes, authApiRoute } from "./lib/constant";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isNextApiRoute = nextUrl.pathname.startsWith(authApiRoute);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isNextApiRoute) return NextResponse.next();

  if (isAuthRoute) {
    if (isLoggedIn) {
      const url = new URL("/dashboard", nextUrl.origin);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    const url = new URL("/login", nextUrl.origin);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
