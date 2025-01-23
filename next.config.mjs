import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@glidejs': path.resolve(process.cwd(), 'node_modules/@glidejs'),
        };
        return config;
    },    
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'node_modules')],
    },
    output: 'export',
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/_next/static/scripts/gtm.js', // Ensure the GTM script is included
            },
        ];
    },
};

export default nextConfig;
