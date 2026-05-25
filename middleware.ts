import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    console.log("MIDDLEWARE RUNNING");
  const isLoggedIn = false

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
 
  return NextResponse.next()
  
}

export const config = {
  matcher: [ 
//  "/dashboard",
//   "/monitoring",
//   "/services",
//   "/tools",
//   "/wiki",
//   "/settings",
//   "/servers",
//   "/databases",
//   "/storage",
//   "/network",
//   "/alerts",
  ],
}