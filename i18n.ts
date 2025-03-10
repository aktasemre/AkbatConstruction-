import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import config from './next-intl.config';

export default getRequestConfig(async (context) => {
  // Desteklenen diller
  const locale = await context.requestLocale;
  
  if (!config.locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});