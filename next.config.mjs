import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** MDX Configuration */
const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    // Additional MDX options can be configured here if needed
  },
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig(
      mdxConfig({
        eslint: {
          dirs: ['.'],
        },
        poweredByHeader: false,
        reactStrictMode: true,
        experimental: {
          serverComponentsExternalPackages: ['@electric-sql/pglite'],
        },
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add MDX here
      }),
    ),
  ),
  {
    // Sentry configuration options
    org: 'nextjs-boilerplate-org',
    project: 'nextjs-boilerplate',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
    telemetry: false,
  },
);
