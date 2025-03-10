import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config';

export default createMiddleware({
  // Desteklenen diller
  locales: intlConfig.locales,
  // Varsayılan dil
  defaultLocale: intlConfig.defaultLocale,
});

export const config = {
  // Middleware'in çalışacağı yollar
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 