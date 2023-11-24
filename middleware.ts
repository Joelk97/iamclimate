import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const handleI18nRouting = createMiddleware({
  locales: ["en", "it"],
  defaultLocale: "it",
});

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.locale === "en") {
    return NextResponse.redirect("/it");
  }

  // Handle i18n routing
  return handleI18nRouting(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
