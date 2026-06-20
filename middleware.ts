import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
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
  if (
  request.nextUrl.pathname.startsWith("/api/metrics")
) {
  return NextResponse.next();
}

if (session) {
  try {
    const decoded = await jwtVerify(
      session,
      new TextEncoder().encode(
        process.env.JWT_SECRET!
      )
    );

    console.log("JWT OK:", decoded);

    return NextResponse.next();
  } catch (err) {
    console.log("JWT ERROR:", err);
  }
}

  return NextResponse.redirect(
    new URL("/login", request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};