/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.redepharma.com.br',
            port: '',
            pathname: '/novosite/wp-content/themes/redepharma/img/**', // specify the path or use wildcards
          },
        ],
      },
};

export default nextConfig;
