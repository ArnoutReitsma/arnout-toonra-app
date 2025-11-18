/** @type {import('next').NextConfig} */
const nextConfig = {
    // Server Actions stabilized; remove experimental flag to silence deprecation warning.
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
        ],
    },
}

module.exports = nextConfig