// import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(`middleware executed at: ${request.nextUrl.pathname}.`);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/sitemap.xml:path*',
    '/((?!api|_next|sitecore|-|~|fonts|css|images|favicon.ico|loading.gif|app_themes|bklapi|App_Themes|cdn-cgi).*)'
  ]
};
