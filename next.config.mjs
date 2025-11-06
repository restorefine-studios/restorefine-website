/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: 'images.ctfassets.net',
            },
        ],
    }
};



export default nextConfig;
