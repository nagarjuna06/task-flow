import { NextRequest, NextResponse } from "next/server";
import { token_cookie_name } from "./lib/utils";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get(token_cookie_name)?.value;
  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
