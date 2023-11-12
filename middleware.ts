import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "it"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "it",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
