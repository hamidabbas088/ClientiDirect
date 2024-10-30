// Your configuration file, e.g., AppConfig.ts

import type { LocalePrefix } from 'next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
