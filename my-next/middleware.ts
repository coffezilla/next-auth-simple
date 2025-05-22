import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware: Page requested:", request.nextUrl.pathname);
  return NextResponse.next();
}

// This will match all routes
export const config = {
  matcher: "/login",
};
