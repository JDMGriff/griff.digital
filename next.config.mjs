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
};

export default nextConfig;
