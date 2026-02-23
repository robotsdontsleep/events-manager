import { authMiddleware } from 'better-auth/next-js';

export default authMiddleware({
  protectedRoutes: ['/'],
  redirectUnauthenticatedTo: '/login',
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
