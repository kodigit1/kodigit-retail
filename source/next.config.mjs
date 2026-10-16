import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export (HTML in /out) for hosting on AWS Amplify
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Fix: resolve package-lock.json to the source/ directory (git repo root)
    turbopack: {
        root: __dirname,
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
    },
};

export default nextConfig;
