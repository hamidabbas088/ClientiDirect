// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');

// eslint-disable-next-line
declare interface IntlMessages extends Messages {}

// src/types/next-intl.d.ts
declare module 'next-intl/dist/types/src/routing/types' {
  export type LocalePrefix = 'always' | 'as-needed' | 'never';
}
