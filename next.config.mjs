/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com',
            'training-uploads.internshala.com',
            'udemy-certificate.s3.amazonaws.com',
            'cdn.jsdelivr.net',
            'cdn.worldvectorlogo.com',
            'icon-library.com',
            'avatars.githubusercontent.com',
            'img.icons8.com', 
        ], // Allow images from GitHub
    },
};

export default nextConfig;
