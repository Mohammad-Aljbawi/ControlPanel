import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  console.log("PATH:", request.nextUrl.pathname);
  console.log("SESSION:", session);

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  if (session === "authenticated") {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL("/login", request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};