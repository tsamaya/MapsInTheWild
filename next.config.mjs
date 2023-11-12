import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  output: 'export',
  assetPrefix: './',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
