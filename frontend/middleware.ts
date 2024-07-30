import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("__token")?.value;
  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
