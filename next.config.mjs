/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true
    },
};

export default nextConfig;
