import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '', // Optional: Leave empty to match any port
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'http',
        hostname: '*',
        port: '', // Optional: Leave empty to match any port
        pathname: '/**', // Allow all paths under this hostname
      },
    ]
  },
    experimental: {
      ppr: 'incremental'
    },
    devIndicators: {
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    }
};

export default nextConfig;
