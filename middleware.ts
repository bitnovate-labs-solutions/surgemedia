import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANDING_PATH_IDS = new Set(["1", "2", "3"]);

function isLandingHost(host: string) {
  const h = host.split(":")[0]?.toLowerCase() ?? "";
  return h === "landing.localhost" || h.startsWith("landing.");
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (!isLandingHost(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    return NextResponse.redirect(new URL("/1", request.url));
  }

  const longPath = pathname.match(/^\/landing\/(1|2|3)\/?$/);
  if (longPath) {
    return NextResponse.redirect(new URL(`/${longPath[1]}`, request.url));
  }

  const seg = pathname.replace(/\/$/, "").slice(1);
  if (LANDING_PATH_IDS.has(seg)) {
    const url = request.nextUrl.clone();
    url.pathname = `/landing/${seg}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$).*)"],
};
